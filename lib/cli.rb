class EaterSFHeatmap::CLI

	def welcome
		puts "Welcome to the Eater SF Heatmap Gem!"
		list_restaurants
		blurb
		goodbye
	end

	def list_restaurants
		puts "Here are the current restaurants on Eater SF's Heatmap: "
		list = Restaurant.scrape_names
		list.each.with_index do |rest, i|
			puts "#{i + 1}.   #{rest}"
		end
	end

	def blurb
		#puts "Enter the number of the restaurant you'd like to learn more about OR type 'list' to relist the restaurants OR type exit: "
		info = Restaurant.scrape_blurb
		#need to implement logic to make sure a valid input is used.
		input = nil
		while input != "exit"

			puts "Enter the number of the restaurant you'd like to learn more about OR type 'list' to relist the restaurants OR type exit: "
			input = gets.strip.downcase
		
			if input.to_i > 0
				puts " "
				puts info[input.to_i - 1]
				puts " "
			elsif input == "list"
				list_restaurants
			elsif input == "exit"
				
			else
				puts "Please enter a valid selection."
			end
		end
	end

	def links
		#method to deliver links (website/opentable/foursquare/maps)

	end

	def goodbye
		puts "Goodbye!"
	end

end
