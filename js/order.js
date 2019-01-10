/** 

write your code here
for page order.html

**/

var order = {
	cart:[],
	loadCart:function(){
		window.localStorage.setItem('cart', JSON.stringify(this.cart));
		$('#detail').html('');
		$('#order').html('');
		var total = 0;
		$(this.cart).each(function(i, d){
			if(d !== undefined && d !== null){
				$('#detail').append("<tr><td>"+d.name+"</td><td>"+d.cost+"</td></tr>");
				total = total+d.cost;
			}
		});
		$('#total').html("<tr><td><b>Total</b></td><td>$"+total+"</td></tr>");
		total = 0;
	}
}

var dump = setInterval(function(){
	order.cart = JSON.parse(window.localStorage.getItem('cart'));
	order.loadCart();
	clearInterval(dump);
}, 1000);