function something(id)
{	
	var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

	x = x * 1 + 1; // x = x + 1

	window.localStorage.setItem('bbb', x); // hh['bbb'] = x

	alert(x);
}

// ================================================

function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
	alert(key + ': ' + x + '  Items in your cart: ' + cart_get_number_of_items());
}


function list() // моя работа
{	
	var sum = 0
	for (var i = 1; i <= window.localStorage.length; i++)
	{
		console.log("sum: " + sum);
		var x = window.localStorage.getItem('product_' + i);
		sum += x * 1;
		console.log('localStorage.key: ' + localStorage.key(i));
		console.log("sum: " + sum);
		console.log(i);
		console.log(x);
	}
	console.log('localStorage.length: ' + localStorage.length);
	alert(sum);
}

function test()
{
	var q = localStorage.getItem('product_1')
	alert(q)
}


function cart_get_number_of_items()
{
	var cnt = 0;
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if(key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1;
		}
	}
	return cnt;
}