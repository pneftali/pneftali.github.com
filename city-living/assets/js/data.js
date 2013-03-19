define('data', [
	'jquery',
	'underscore',
	'backbone',
	'router',
	'fancybox',
	'models/PlacesModel',
	'collections/StorageCollections',
	'collections/PlacesCollections',	
], function($, _, backbone, Router, fancybox, PlacesModel, StorageCollections, PlacesCollections){

	var common = {
		loadPlaces: function( response ) {
			var places_model = new PlacesModel();	

			for(var i in response.feed.entry){				
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
					
				City._PlacesCollections.push( places_model );				
			}
		},
		loadView: function() {
			new Router();
			Backbone.history.start();
		},
		initFancyBox: function() {
			$(".img-wrap a").fancybox({
					helpers : {
					title : { type : 'inside' }
				}            
			});
		}
	}


	var initialize = function(){				
	    
	    window.City = window.City || {};
	    common.initFancyBox();

	    City._PlacesCollections = StorageCollections;
	    
	    PlacesCollections.url = 'https://spreadsheets.google.com/feeds/list/0AgqfsL1VSIfidGN1TmlGdGFGb0QxSmJfbjlWSjkxbUE/od6/public/values?alt=json-in-script&callback=?';
	    PlacesCollections.fetch({
	    	success: function( collection, response ){
	    		common.loadPlaces( response );
	    		common.loadView();
	    	}
	    })	    

	};    	

    return {
    	initialize : initialize
    }
    
});