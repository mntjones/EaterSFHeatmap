require 'open-uri'
require 'pry'
require 'nokogiri'

class Restaurant

	attr_accessor :name, :address, :phone, :blurb

	@@restaurants = []


	def initialize(restaurant_hash)
		restaurant_hash.each do |rest_obj|

    		@@restaurants << rest_obj
    	end
    	@@restaurants
	end

	def self.restaurants
		@@restaurants
	end

	def self.clear
		@@restaurants = []
	end

end
