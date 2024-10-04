
orders = "product_1=27,product_2=20,product_3=15,"

s1 = orders.split(/,/)

puts s1.inspect
test = {}
test2 = []
test3 = []
test4 = []
s1.each_with_index do |x, i|
	s2 = x.split(/=/)
	s3 = s2[0].split(/_/)

	key = s3[1]
	value = s2[1]
	test[key] = value
	test2[i] = key + " = " + value 
	test3 = test3 + [[key, value]]
	test4.push([key, value]) 
	puts "Product id: #{key}, number of items: #{value}"
end

puts test.inspect
puts test2.inspect
puts test3.inspect
puts test4.inspect
