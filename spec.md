# Specifications for the CLI Assessment

Specs:
- [x] Have a CLI for interfacing with the application
My CLI class interfaces with the user by asking for input on what information should be displayed. The CLI is called from the bin file to begin execution.

- [x] Pull data from an external source
My app pulls data from the Eater SF webpage. There are two different links, one for each list that is scraped.
The Heatmap - "https://sf.eater.com/maps/best-new-restaurants-san-francisco-oakland-berkeley-heatmap"
The Essential 38 - "https://sf.eater.com/maps/best-restaurants-san-francisco-38"

- [x] Implement both list and detail views
The first user interaction asks which of the lists the user want to see (Heatmap or Essential 38). The second user interaction asks for which item on the list the user want more information on. The list view gives a number and a restaurant name. The detailed view presents restaurant name, address, phone number and description.