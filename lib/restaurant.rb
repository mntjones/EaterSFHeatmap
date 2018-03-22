require 'open-uri'
require 'pry'
require 'nokogiri'

class EaterSFHeatmap::Restaurant

	attr_accessor :name, :address, :phone, :blurb

	def initialize
		# an array of Restaurant objects
		@restaurants = []
	end


	def self.list_item 
		
		@restaurants.each.with_index do |restaurant, index|

			puts "#{index + 1}.   #{restaurant.name}"

		end   
	end

	def self.scrape
		#scrape Eater SF and return restaurants based on that data

		@restaurants << self.scrape_heatmap


		

		restaurants
	end

	def self.scrape_heatmap

		# 1. Go to https://sf.eater.com/maps/best-new-restaurants-san-francisco-oakland-berkeley-heatmap

		# 2. Extract the properties
		# 	a. name
		# 	b. address
		# 	c. phone number
		# 	d. blurb
		# 	e. link addresses
		# 		i. website
		# 		ii. opentable
		# 		iii. foursquare
		# 		iv. maps

		# 3. instantiate a Restaurant object

		doc = Nokogiri::HTML(open("https://sf.eater.com/maps/best-new-restaurants-san-francisco-oakland-berkeley-heatmap"))

        cards = doc.css(".c-mapstack__cards")
        list = cards.css("h2").text
		# "Where to eat right now\n1 Funky Elephant\n2 Cdp\n3 dosa By DOSA\n4Eight Tables by George Chen\n
        #5 The SnugSHN Orpheum Theatre\n6 International Smoke\n7 IPPUDO San Francisco\n8 Villon\n9 Nyum Bai\n
        #10 Kaya Restaurant\n11 Barvale\n12 True Laurel\n13 Son’s AdditionRelated Maps"
		# need to split on \n, add each entry into an array
        

        restaurant_list = list.split("\n")
         binding.pry

		 holding = []


	    # See above method for this issue

	    number = list.css(".c-mapstack__card-index").text
	    names = list.css(".c-mapstack__card-index span").text

	    # this grabs ALL the blurbs - how to split up?

	    blurb = list.css(".c-entry-content").text
	    blurbs = blurb.split("\n")

	    blurb_hold = []

	    blurbs.collect do |entry|
	     blurb_hold << entry.strip
	    end

	    blurb_hold.reject!(&:empty?)

	    #Ahhhhh, need to get rid of promotional blurbs! - do have each item as a blurb!


	    # Has all addresses AND phone numbers - each line item has one address and one phone number.
	    address = list.css(".c-mapstack__address").text
	    addresses = address.split("\n")

	    adds = []
	    phones = []
	    hold = []

	    addresses.each.with_index do |line, i|
	      hold = line.split(/(?=\()/)
	      adds << hold[0]
	      phones << hold[1]
	    end    
	end
end

Restaurant.scrape_heatmap