class EaterSFHeatmap::Restaurant

	attr_accessor :name, :address, :phone

	def self.list_item 
		#return instances of list items (restaurants/bars/cafes etc.)
		# puts <<-DOC.gsub /^\s*/, ""
		# 	1. Alta
		# 	2. August 1 Five
		# DOC


		item1 = self.new
		item1.name = "Alta"
		item1.address = "1275 Minnesota St. San Francisco, CA 94107"
		item1.phone = "(415) 580-7662"

		item2 = self.new
		item2.name = "August 1 Five"
		item2.address = "525 Van Ness Ave. San Francisco, CA 94102"
		item2.phone = "(415) 771-5900"

		[item1, item2]
	end

end