// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/index/IndexView',
	'collections/PlacesCollections'
], function($, _, Backbone, IndexView, PlacesCollections) {
	'use strict';
	
    var AppRouter = Backbone.Router.extend({
        routes: {
          
            // Default
            '': 'index'
        }
    });
  
    var initialize = function(){

        var app_router = new AppRouter;    

        app_router.on('route:index', function (actions) {
         
			var view = new IndexView({collection: PlacesCollections});

        });    

        Backbone.history.start();
        
    };
  
    return { 
        initialize: initialize
    };
});
