class EaterSFHeatmap::CLI

	def welcome
		puts "Welcome to the Eater SF Heatmap Gem!"
		list_restaurants
		blurb
		goodbye
	end

	def list_restaurants
		
		#class called restaurant, with method called list
		@restaurants = EaterSFHeatmap::Restaurant.list_item
	end

	def blurb
		puts "Enter the number of the restaurant you'd like to learn more about OR type 'list' to relist the restaurants OR type exit: "

		#need to implement logic to make sure a valid input is used.
		input = gets.strip.downcase
		while input != "exit"
			puts "Enter the number of the restaurant you'd like to learn more about OR type 'list' to relist the restaurants OR type exit: "
			case input	
			when "1"
				puts "Restaurant 1 is awesome"
			when "2"
				puts "Restaurant 2 is amazing"
			when "list"
				list_restaurants
			else
				puts "Please enter a valid selection."
			end
		input = gets.strip.downcase
		end
	end

	def goodbye
		puts "Goodbye!"
	end

end
