// Filename: router.js
define('router', [
    'views/index/IndexView',
	'views/submit/SubmitView',
	'views/realestate/RealestateView'
], function(IndexView, SubmitView, RealestateView) {
	'use strict';
	
    var router = Backbone.Router.extend({
        routes: {          
            '': 'index',
            'places': 'index',
            'real-estate/:category/:name': 'realestate',
			'submit': 'submit'			
        },
		
		index: function(){
			var view = new IndexView({collection: City._PlacesCollections});			
		},
		
		submit: function(){
			var view = new SubmitView();
			view.render();
		},

		realestate: function( category, name ){
			var view = new RealestateView({
				collection: City._PlacesCollections,
				category: category,
				name: name
			});
		}
    });  
  
    return router;
});
