// Filename: router.js
define('router', [
    'views/index/IndexView',
	'views/submit/SubmitView',
	'views/realestate/RealestateView',
	'collections/PlacesCollections'
], function(IndexView, SubmitView, RealestateView, PlacesCollections) {
	'use strict';
	
    var router = Backbone.Router.extend({
        routes: {          
            '': 'index',
            'real-estate/:category/:name': 'realestate',
			'submit': 'submit'			
        },
		
		index: function(){
			var view = new IndexView({collection: PlacesCollections});
		},
		
		submit: function(){
			var view = new SubmitView();
			view.render();
		},

		realestate: function( category, name ){
			var view = new RealestateView({
				collection: PlacesCollections,
				category: category,
				name: name
			});
		}
    });  
  
    return router;
});
