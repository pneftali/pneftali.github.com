define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	'use strict';
  	var PlacesModel = Backbone.Model.extend({
  		defaults:{
  			id: '',
	  		name: '',
	  		img: '',	
  		},
		initialize: function() {
			console.log('Place model has been initialized');
		}
	});

	return PlacesModel;
  
});
