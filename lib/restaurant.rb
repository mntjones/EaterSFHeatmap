require 'open-uri'
require 'pry'
require 'nokogiri'

class Restaurant

	attr_accessor :name, :address, :phone, :blurb

	@@restaurants = []

	def self.scrape
		#scrape Eater SF and return restaurants based on that data

		names = self.scrape_names
		addresses = self.scrape_addresses
		phones = self.scrape_phones
		blurbs = self.scrape_blurb

		names.each_with_index do |name, i|
     		hold = {:name => names[i], :address => addresses[i], :phones => phones[i], :blurb => blurbs[i]}
     		@@restaurants << hold
   		end
   		@@restaurants

	
		# 3. instantiate a Restaurant object
	end

	

	def self.restaurants
		@@restaurants
	end

end
