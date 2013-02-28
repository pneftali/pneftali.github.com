define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	'use strict';
  	var PlacesModel = Backbone.Model.extend({
  		defaults:{
  			id: '',
	  		posted_date: '',
			posted_by: '',
	  		posted_location: '',	
			img_path: '',	
			place_name: '',	
			place_details: ''
  		},
		initialize: function() {
			console.log('Place model has been initialized');
		}
	});

	return PlacesModel;
  
});
