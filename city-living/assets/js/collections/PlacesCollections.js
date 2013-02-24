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
					name: response.feed.entry[i].gsx$name.$t,
					img: response.feed.entry[i].gsx$path.$t
				});

				this.push( places_model );
				
			}

			return this.models;
		}
	});	

	return new PlacesCollection;
  
});
