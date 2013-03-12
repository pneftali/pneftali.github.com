define([
	'jquery',
	'underscore',
	'backbone',
	'collections/PlacesCollections'
], function($, _, backbone, PlacesCollections){

	var fetch = function(){
		var places = new PlacesCollections();
	    places.url = 'https://spreadsheets.google.com/feeds/list/0AgqfsL1VSIfidGN1TmlGdGFGb0QxSmJfbjlWSjkxbUE/od6/public/values?alt=json-in-script&callback=?';

	    places.fetch();    
	};    

    return {
    	fetch : fetch
    }
    
});