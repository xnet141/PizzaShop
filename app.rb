#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, {adapter: "sqlite3", database: "pizzashop.db"}

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end



get '/' do
	@products = Product.all
	erb :index
end

get '/about' do
	erb :about
end

# get '/place_order' do
# 	#@x = params[:order]['orders_input']
# 	erb :place_order
# end

post '/place_order' do
	@x = params[:order]['orders_input']
	@order = Order.create params[:order]
	#o.save
	erb :place_order
end

# get '/cart' do
# 	#@orders_input = params[:orders]
# 	erb :cart
# end

post '/cart' do
	@orders_input = params[:orders_input]
	@items = parse_orders_line @orders_input

	if @orders_input.length == 0
		return erb :cart_empty
	end
	
	@items.each do |item|
		item[0] = Product.find(item[0])
	end	

	@test = Product.find(1)

	erb :cart
end

get '/admin' do
	@orders = Order.order('created_at DESC')
	@orders.each do |order|
		#parse_array = parse_orders_line order.orders_input
		order.orders_input = parse_orders_line(order.orders_input).map! { |orders_line| orders_line = Product.find(orders_line[0]).title + " = " + orders_line[1] }.join(', ')
		#order.orders_input = parse_array.join(', ')
	end

	erb :admin
end


def parse_orders_line orders_input 
    s1 = orders_input.split(/,/)

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

#parse_orders_line(orders_input).inspect
                      #без пробелов около скобок, иначе inspect не сработает
                      