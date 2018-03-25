# EaterSFHeatmap


This Ruby Gem will scrape Eater SF's Heatmap page and Eater SF's Essential Restaurants List. The CLI will ask the user which list they wouldlike to view and display the current restaurants listed.

Ex. 1. My Eatery 
	2. Yummy Food
	3. Bar and Bites


The user will then be prompted to choose a number of the restaurant they want more information about, or the user can choose to view the list choices again, or exit.

More restaurant info:
My Eatery
123 Mission St., San Francisco, CA 94102
(415) 555-5555

My Eatery produces Spanish-inspired cuisine, locally sourced, with a menu that changes weekly.


## Installation

Add this line to your application's Gemfile:

```ruby
gem 'EaterSFHeatmap'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install EaterSFHeatmap

## Usage

After following the installation steps above, run the Gem file 

```
./bin/EaterSFHeatmap
```

The CLI will greet the user and ask the user to enter "1" for the Eater SF Heatmap, or "2" for the Eater SF Essential 38 list. Anything other than a "1" or "2" will prompt the user for a valid selection.

Once the user chooses which list to view, the applicable list will be displayed and the user will be asked to enter the number of the restaurant they would like more information about. The user also has the option to type "list" to go back to the previous paragraph steps, or to type "exit" to leave the application.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/mntjones/EaterSFHeatmap. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the EaterSFHeatmap project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/mntjones/EaterSFHeatmap/blob/master/CODE_OF_CONDUCT.md).
