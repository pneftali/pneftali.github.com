// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/index/IndexView',
	'views/submit/SubmitView',
	'collections/PlacesCollections'
], function($, _, Backbone, IndexView, SubmitView, PlacesCollections) {
	'use strict';
	
    var Workspace = Backbone.Router.extend({
        routes: {          
            '': 'index',
			'submit': 'submit'			
        },
		
		index: function(){
			var view = new IndexView({collection: PlacesCollections});
		},
		
		submit: function(){
			console.log('hey');
			var view = new SubmitView();
			view.render();
		}
    });  
  
    return Workspace;
});
