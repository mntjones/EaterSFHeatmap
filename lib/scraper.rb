require 'open-uri'
require 'pry'
require 'nokogiri'

class Scraper

	def self.scrape_addresses(link)

	    doc = Nokogiri::HTML(open(link))
	    list = doc.css(".c-mapstack__cards")

	    adds = []
	    hold_add = []

		address = list.css(".c-mapstack__card")

		address.each do |card|
			if (!card.css(".c-mapstack__sponsor").empty?) || (!card.css(".c-entry-sponsorship").empty?)
				hold_add << "SPONSOR"

			else card.css(".c-mapstack__address").children.text != nil
				hold_add << card.css(".c-mapstack__address").children.text
			end
		end

		addresses = []
		hold_add.reject! { |c| c == ""}
		hold_add.delete("SPONSOR")

		hold_add.each do |entry|
			addresses << entry.strip
		end
			
		holding = []	
		addresses.each do |line|
			holding << line.split(/([(])\s*/)
		end

		holding.collect do |arr|
			if arr.length == 3
				arr[2].prepend("(")
				arr.delete("(")
			end

			if arr.length == 1
				arr[1] = "No phone number provided"
			end
		end

		holding.each do |addph|
			adds << addph[0]
		end
		adds
	end

	def self.scrape_phones(link)
		doc = Nokogiri::HTML(open(link))
	    list = doc.css(".c-mapstack__cards")
	    phones = []
	    hold_ph = []

		address = list.css(".c-mapstack__card")

		address.each do |card|
			if (!card.css(".c-mapstack__sponsor").empty?) || (!card.css(".c-entry-sponsorship").empty?)
				hold_ph << "SPONSOR"

			else card.css(".c-mapstack__address").children.text != nil
				hold_ph << card.css(".c-mapstack__address").children.text
			end
		end

		phone = []
		hold_ph.reject! { |c| c == ""}
		hold_ph.delete("SPONSOR")

		hold_ph.each do |entry|
			phone << entry.strip
		end
			
		holding = []	
		phone.each do |line|
			holding << line.split(/([(])\s*/)
		end

		holding.collect do |arr|
			if arr.length == 3
				arr[2].prepend("(")
				arr.delete("(")
			end

			if arr.length == 1
				arr[1] = "No phone number provided"
			end
		end

		holding.each do |addph|
			phones << addph[1]
		end
		phones
	end
		
	def self.scrape_names(link)
		doc = Nokogiri::HTML(open(link))
	    list = doc.css(".c-mapstack__cards")
	    hold_name = []
		cards = list.css("h2")
		cards.each do |sect|
		  if sect.css("h2 .c-mapstack__card-index").text != nil
		    hold_name << sect
		  end
		end
		
		names = []
		
		hold_name.each.with_index do |name, index|
		  if name.children[2] != nil
		    names << name.children[2].text
		  end
		end  
		names  
	end

	def self.scrape_blurb(link)
		doc = Nokogiri::HTML(open(link))
	    list = doc.css(".c-mapstack__cards")
	    hold_blurb = []
	    blurbs = []
	    blurb = list.css(".c-mapstack__card")

		blurb.each do |card|
			#empty array, if not present
			if (!card.css(".c-mapstack__sponsor").empty?) || (!card.css(".c-entry-sponsorship").empty?) || (!card.css(".c-entry-summary").empty?)
				blurbs << "SPONSOR"
			else
				blurbs << card.css(".c-entry-content").children.text
			end
		end

		bl = []
		blurbs.reject! { |c| c == ""}
		blurbs.delete("SPONSOR")
		blurbs.collect do |item|
			bl << item.strip
		end
		bl
	end

	def self.scrape_hash(link)
		names = self.scrape_names(link)
		addresses = self.scrape_addresses(link)
		phones = self.scrape_phones(link)
		blurbs = self.scrape_blurb(link)
		rest_obj_hash = []


		names.each_with_index do |name, i|
     		hold = {:name => names[i], :address => addresses[i], :phones => phones[i], :blurb => blurbs[i]}
     		rest_obj_hash << hold
   		end
   		
   		rest_obj_hash
	end
end

