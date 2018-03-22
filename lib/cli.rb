class EaterSFHeatmap::CLI

	def welcome
		puts "Welcome to the Eater SF Heatmap Gem!"
		list_restaurants
		blurb
		goodbye
	end

	def list_restaurants
		puts "Here are the current restaurants on Eater SF's Heatmap: "
		#class called restaurant, with method called list
		# @restaurants = EaterSFHeatmap::Restaurant.list_item
		# @restaurants.each.with_index(1) do |restaurant, i|
		# 	puts "#{i}. #{restaurant.name} - #{restaurant.address} - #{restaurant.phone}"
		# end


	end

	def blurb
		#puts "Enter the number of the restaurant you'd like to learn more about OR type 'list' to relist the restaurants OR type exit: "

		#need to implement logic to make sure a valid input is used.
		input = nil
		while input != "exit"

			puts "Enter the number of the restaurant you'd like to learn more about OR type 'list' to relist the restaurants OR type exit: "
			input = gets.strip.downcase

			if input.to_i > 0
				puts "Restaurants coming soon..."
				# eat = @restaurants[input.to_i - 1]
				# puts "#{input.to_i}. #{restaurant.name} - #{restaurant.address} - #{restaurant.phone}"
			elsif input == "list"
				list_restaurants
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
