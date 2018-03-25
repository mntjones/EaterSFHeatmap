1. Plan your gem, imagine your interface
2. Start with your project structure - google
3. Start with the entry point - the file run
4. Force that to build the CLI interface
5. Stub out the interface
6. Start making things real
7. Discover objects
8. Program

#1
CLI interface:
https://sf.eater.com/maps/best-new-restaurants-san-francisco-oakland-berkeley-heatmap

a. Get the current listings of the SF Eater Heatmap by number on heatmap, name of restaurant, and address
    1. My Eatery - 1234 Main St, SF, CA 94111
    etc.
b. Ask if you want restaurant info?
    -> Get blurb written about restaurant


 CLI
 ->	Scraper
 	-> Restaurant
 		-> Scraper


#2
Using bundler:
http://bundler.io/v1.16/guides/creating_gem.html
RubyGems Guide:
http://guides.rubygems.org/make-your-own-gem/
CLI gem:
http://robdodson.me/how-to-write-a-command-line-ruby-gem/

What is a restaurant?

- has a name
- has an address
- has a phone number
- has a description


#Scraping

1. Go to https://sf.eater.com/maps/best-new-restaurants-san-francisco-oakland-berkeley-heatmap

2. Extract the properties
	a. name
	b. address
	c. phone number
	d. blurb

3. instantiate a Restaurant object

#Potential Future updates
 1. add the Essential 38 restaurants as an option - DONE
 2. add yelp review - would require finding in yelp...
 3. add website urls
