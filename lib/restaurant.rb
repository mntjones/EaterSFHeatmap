class EaterSFHeatmap::Restaurant

	attr_accessor :name, :address, :phone, :blurb

	def self.list_item 
		self.scrape
	end

	def self.scrape
		#scrape Eater SF and return restaurants based on that data
		
		restaurants= []

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

		restaurants
	end

end