require 'open-uri'
require 'pry'
require 'nokogiri'

class Restaurant

	attr_accessor :name, :address, :phone, :blurb

	@@restaurants = []


	def initialize(restaurant_hash)
		restaurant_hash.each do |key, value|
      		self.send("#{key}=", value)
    	end
    	@@restaurants << self
	end

	def self.restaurants
		@@restaurants
	end
	
end
