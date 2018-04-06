require 'open-uri'
require 'pry'
require 'nokogiri'

class Scraper

	def self.scrape_addresses(link)
		doc = Nokogiri::HTML(open(link))
		list = doc.css(".c-mapstack__card")
		
	    adds = []
	    addresses = []

		list.collect do |card|
			if (!card.css(".c-mapstack__sponsor").empty?) || (!card.css(".c-entry-sponsorship").empty?)
				adds << "SPONSOR"

			else card.css(".c-mapstack__address").children.text != nil
				adds << card.css(".c-mapstack__address").children.text
			end
		end

		adds.reject! { |c| c == ""}
		adds.delete("SPONSOR")
		adds.collect do |entry|
			entry.strip
			addresses << entry.split(/([(])\s*/)
		end

		addresses.map do |add_add|
			add_add[0]
		end
	end

	def self.scrape_phones(link)
		doc = Nokogiri::HTML(open(link))
		list = doc.css(".c-mapstack__card")
	    phones = []
	    hold_ph = []

		list.collect do |card|
			if (!card.css(".c-mapstack__sponsor").empty?) || (!card.css(".c-entry-sponsorship").empty?)
				phones << "SPONSOR"

			else card.css(".c-mapstack__address").children.text != nil
				phones << card.css(".c-mapstack__address").children.text
			end
		end

		phones.reject! { |c| c == ""}
		phones.delete("SPONSOR")

		phones.collect do |entry|
			entry.strip
			hold_ph << entry.split(/([(])\s*/)
		end

		hold_ph.collect do |arr|
			if arr.length == 3
				arr[2].prepend("(")
				arr.delete("(")
			end

			if arr.length == 1
				arr[1] = "No phone number provided"
			end
		end

		hold_ph.collect do |addph|
			addph[1]
		end
	end
		
	def self.scrape_names(link)
		doc = Nokogiri::HTML(open(link))
		list = doc.css(".c-mapstack__cards h2")
	    names = []

		list.collect do |sect|
		  if sect.css("h2 .c-mapstack__card-index").text != nil
		    names << sect
		  end
		end
		
		return_names = []
		names.collect do |n|
		  if n.children[2] != nil
		    return_names << n.children[2].text
		  end
		end  
		return_names 
	end

	def self.scrape_blurb(link)
		doc = Nokogiri::HTML(open(link))
		list = doc.css(".c-mapstack__card")
	    blurbs = []

		list.each do |card|
			#empty array, if not present
			if (!card.css(".c-mapstack__sponsor").empty?) || (!card.css(".c-entry-sponsorship").empty?) || (!card.css(".c-entry-summary").empty?)
				blurbs << "SPONSOR"
			else
				blurbs << card.css(".c-entry-content").children.text
			end
		end

		blurbs.reject! { |c| c == ""}
		blurbs.delete("SPONSOR")
		blurbs.collect do |item|
			item.strip
		end
	end

	def self.scrape_hash(link)
		names = self.scrape_names(link)
		addresses = self.scrape_addresses(link)
		phones = self.scrape_phones(link)
		blurbs = self.scrape_blurb(link)
		rest_obj_hash = []

		names.each_with_index do |name, i|
     		hold = {:name => names[i], :address => addresses[i], :phone => phones[i], :blurb => blurbs[i]}
     		rest_obj_hash << hold
   		end
   		
   		rest_obj_hash
	end
end