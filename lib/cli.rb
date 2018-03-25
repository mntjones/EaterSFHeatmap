class EaterSFHeatmap::CLI

	attr_accessor :name, :address, :phone, :blurb

	def welcome
		puts "Welcome to the Eater SF Gem!"
		#initializes Restaurant objects

		list_restaurants
		goodbye
	end

	def list_restaurants
		input= nil
		list = []

		while input != 'exit'
			puts"Do you want to see: 1. the Heatmap List or 2. the 38 Essentials List?"
			input = gets.strip.downcase
			Restaurant.restaurants.clear

			if input == "1"
				Restaurant.new(Scraper.scrape_hash("https://sf.eater.com/maps/best-new-restaurants-san-francisco-oakland-berkeley-heatmap"))
				puts "Here are the current restaurants on Eater SF's Heatmap: "
				list = Restaurant.restaurants
				list.each.with_index do |rest, i|
					puts "#{i + 1}.   #{rest[:name]}"
				end
				input = "exit"
				blurb(list)
				
			elsif input == "2"
				Restaurant.new(Scraper.scrape_hash("https://sf.eater.com/maps/best-restaurants-san-francisco-38"))
				puts "Here are the current restaurants on Eater SF's 38 Essntials List: "
				list = Restaurant.restaurants
				list.each.with_index do |rest, i|
					puts "#{i + 1}.   #{rest[:name]}"
				end
				input = 'exit'
				blurb(list)

			elsif input == 'exit'
			
			else
				puts "Please enter 1 or 2."
			end
		end
		
	end

	def blurb(list)		
		names = []
		address =[]
		phones =[]
		info = []

		list.each do |rest|
			names << rest[:name]
			address << rest[:address]
			phones << rest[:phones]
			info << rest[:blurb]
		end

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
				input = 'exit'
				list_restaurants
			elsif input == "exit"
	
			else
				puts "Please enter a valid selection."
				input =nil
			end
		end
	end

	def goodbye
		puts "Goodbye!"
	end
end