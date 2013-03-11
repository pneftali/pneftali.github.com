define('collections/PlacesCollections', [
  'models/PlacesModel'
], function(PlacesModel){
	'use strict';
	
  	var PlacesCollection = Backbone.Collection.extend({
		model: PlacesModel,
		url: 'https://spreadsheets.google.com/feeds/list/0AgqfsL1VSIfidGN1TmlGdGFGb0QxSmJfbjlWSjkxbUE/od6/public/values?alt=json-in-script&callback=?',
		parse: function(response){
			
			for(var i in response.feed.entry){
				
				var places_model = new PlacesModel();			
				
				places_model.set({
					id: response.feed.entry[i].gsx$id.$t,
					posted_date: response.feed.entry[i].gsx$posteddate.$t,
					posted_by: response.feed.entry[i].gsx$postedby.$t,
					posted_location: response.feed.entry[i].gsx$postedlocation.$t,
					img_path: response.feed.entry[i].gsx$imgpath.$t,					
					place_name: response.feed.entry[i].gsx$placename.$t,
					place_details: response.feed.entry[i].gsx$placedetails.$t,
					category: response.feed.entry[i].gsx$category.$t,
					type: response.feed.entry[i].gsx$type.$t,
					url: response.feed.entry[i].gsx$url.$t
				});
				
				this.push( places_model );
				
			}

			return this.models;
		}
	});	

	return new PlacesCollection;
  
});
