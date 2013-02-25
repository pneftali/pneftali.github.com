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
			img_main: '',	
			img_0: '',	
			img_1: '',	
			img_2: '',	
			img_3: '',	
			img_4: '',	
			place_name: '',	
			place_details: ''
  		},
		initialize: function() {
			console.log('Place model has been initialized');
		}
	});

	return PlacesModel;
  
});
