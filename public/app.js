function something(id)
{	
	var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

	x = x * 1 + 1; // x = x + 1

	window.localStorage.setItem('bbb', x); // hh['bbb'] = x

	alert(x);
}

// function update_orders_button() // общее кол-во пиц на кнопке корзины
// {
// 	var text = 'Cart (' + cart_get_orders()[1] + ')';
// 	$('#orders_button').val(text);
// }


// function cart_get_number_of_items()
// {
// 	var cnt = 0;
// 	for(var i = 0; i < window.localStorage.length; i++)
// 	{
// 		var key = window.localStorage.key(i);
// 		var value = window.localStorage.getItem(key);

// 		if(key.indexOf('product_') == 0)
// 		{
// 			cnt = cnt + value * 1;
// 		}
// 	}
// 	return cnt;
// }


// ================================================


function update_orders_input() // обновляет поле ввода тега input (скрытое) для отпрааки на сервер
{
	var orders = cart_get_orders()[0];
	$('#orders_input').val(orders);
	var text = 'Cart (' + cart_get_orders()[1] + ')';
	$('#orders_button').val(text);
}


function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
	// alert(key + ': ' + x + '  Items in your cart: ' + cart_get_number_of_items());
	update_orders_input();
	// update_orders_button();
}


function cart_get_orders()
{
	var arr = [];
	var orders = '';
	var cnt = 0;
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if(key.indexOf('product_') == 0)
		{
			orders = orders + key + '=' + value + ',';
			cnt = cnt + value * 1;
		}
	}
	arr.push(orders, cnt)
	return arr;
}

function cancel_order()
{
	window.localStorage.clear();
	update_orders_input();
	update_orders_button();
	$('#cart').text('Your cart is now empty. JS - супер!!');
	return false;
}

