
orders_line = "product_1=27,product_2=20,product_3=15,"

def parse_orders_line orders_line
        s1 = orders_line.split(/,/)

	arr = []

	s1.each do |x|
		s2 = x.split(/=/)

		s3 = s2[0].split(/_/)

		id = s3[1]
		cnt = s2[1]

		arr2 = [id, cnt]

		arr.push arr2
	end

	return arr
end

#aaa = parse_orders_line orders_line
#puts aaa.inspect

puts parse_orders_line(orders_line).inspect
                      #Р±РµР· РїСЂРѕР±РµР»РѕРІ РѕРєРѕР»Рѕ СЃРєРѕР±РѕРє, РёРЅР°С‡Рµ inspect РЅРµ СЃСЂР°Р±РѕС‚Р°РµС‚
                      #без пробелов около скобок, иначе inspect не сработает