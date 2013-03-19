define('collections/StorageCollections', [
  'models/PlacesModel'
], function(PlacesModel){
	'use strict';
	
  	var StorageCollections = Backbone.Collection.extend();	

	return new StorageCollections;  
});
