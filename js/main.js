var item = {
	now : 2,
	next:function(){
		this.now++;
		if(this.now > 8)
			return this.now = 2;
		this.show(this.now);
	},
	prev:function(){
		this.now--;
		if(this.now < 2)
			return this.now = 8;
		this.show(this.now);
	},
	show:function(id){
		this.hide();
		$('#'+id).show();
	},
	hide:function(){
		for(var id = 2; id<=8; id++){
			$('#'+id).hide();
		}
	}
}

var order = {
	cart:[],
	add : function(id){
		this.cart[id] = itemList[id];
		this.loadCart();
	},
	remove:function(id){
		if(id == 0)
			return;
		this.cart[id] = undefined;
		this.loadCart();
	},
	reset:function(){
		this.cart = [];
		this.cart[0] = itemList[1];
		this.cart[9] = itemList[0];
		this.loadCart();
	},
	loadCart:function(){
		window.localStorage.setItem('cart', JSON.stringify(this.cart));
		$('#detail').html('');
		$('#order').html('');
		var total = 0;
		$(this.cart).each(function(i, d){
			if(d !== undefined){
				$('#detail').append("<tr><td>"+d.name+"</td><td>"+d.cost+"</td></tr>");
				$('#order').append("<img src=\"img/"+d.src+"\" class=\"scale\" ondragend=\"order.remove("+d.id+")\">");
				total = total+d.cost;
			}
		});
		$('#total').html("<tr><td><b>Total</b></td><td>$"+total+"</td></tr>");
		total = 0;
	}
}

function toOrder(){
	a = confirm("Apakah anda yakin ?");
	if(a == true){
		window.location = 'order.html';
	}
}

var dump = setInterval(function(){
	item.show(2);
	order.cart[0] = itemList[1];
	order.cart[9] = itemList[0];
	order.loadCart();
	clearInterval(dump);
}, 100);