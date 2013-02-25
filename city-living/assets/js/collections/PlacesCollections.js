define([
  'jquery',
  'underscore',
  'backbone',
  'models/PlacesModel'
], function($, _, Backbone, PlacesModel){
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
					img_main: response.feed.entry[i].gsx$imgmain.$t,
					img_0: response.feed.entry[i].gsx$img0.$t,
					img_1: response.feed.entry[i].gsx$img1.$t,
					img_2: response.feed.entry[i].gsx$img2.$t,
					img_3: response.feed.entry[i].gsx$img3.$t,
					img_4: response.feed.entry[i].gsx$img4.$t,
					place_name: response.feed.entry[i].gsx$placename.$t,
					place_details: response.feed.entry[i].gsx$placedetails.$t
				});
				
				this.push( places_model );
				
			}

			return this.models;
		}
	});	

	return new PlacesCollection;
  
});
