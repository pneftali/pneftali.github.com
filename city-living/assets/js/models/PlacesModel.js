define('models/PlacesModel', [], function(){
	'use strict';
  	var PlacesModel = Backbone.Model.extend({
  		defaults:{
  			id: '',
	  		posted_date: '',
			posted_by: '',
	  		posted_location: '',	
			img_path: '',	
			place_name: '',	
			place_details: '',
			category: '',
			type: '',
			url: ''
  		},
		initialize: function() {
			
		}
	});

	return PlacesModel;
  
});
