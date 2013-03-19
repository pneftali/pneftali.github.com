define('collections/PlacesCollections', [
  	'models/PlacesModel'
], function(PlacesModel){
	'use strict';
	
  	var PlacesCollection = Backbone.Collection.extend({
		model: PlacesModel,
		initialize: function(){
			
		}
	});	

	return new PlacesCollection;
  
});
