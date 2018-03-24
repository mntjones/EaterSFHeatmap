class EaterSFHeatmap::CLI

	attr_accessor :name, :address, :phone, :blurb


	def welcome
		puts "Welcome to the Eater SF Heatmap Gem!"
		#initializes Restaurant objects
		Restaurant.new(Scraper.scrape_hash)
		list_restaurants
		blurb
		goodbye
	end

	def list_restaurants

		puts "Here are the current restaurants on Eater SF's Heatmap: "
		list = Restaurant.restaurants
		list.each.with_index do |rest, i|
			puts "#{i + 1}.   #{rest[:name]}"
		end
	end

	def blurb
		#puts "Enter the number of the restaurant you'd like to learn more about OR type 'list' to relist the restaurants OR type exit: "
		info = Scraper.scrape_blurb
		names = Scraper.scrape_names
		address = Scraper.scrape_addresses
		phones = Scraper.scrape_phones
		

		#need to implement logic to make sure a valid input is used.
		input = nil
		while input != "exit"

			puts "Enter the number of the restaurant you'd like to learn more about OR type 'list' to relist the restaurants OR type exit: "
			input = gets.strip.downcase
			
			if input.to_i > 0 && input.to_i <= info.length
				puts " "
				puts "#{names[(input.to_i) -1].strip}"
				puts "#{address[(input.to_i) - 1].strip}"
				puts "#{phones[(input.to_i) -1].strip}"
				puts "#{info[(input.to_i) -1].strip}"
				puts " "
			elsif input == "list"
				list_restaurants
			elsif input == "exit"
				
			else
				puts "Please enter a valid selection."
			end
		end
	end

	def goodbye
		puts "Goodbye!"
	end

end
