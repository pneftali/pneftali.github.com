// Filename: router.js
define('router', [
    'views/index/IndexView',
	'views/submit/SubmitView',
	'collections/PlacesCollections'
], function(IndexView, SubmitView, PlacesCollections) {
	
	
    var router = Backbone.Router.extend({
        routes: {          
            '': 'index',
			'submit': 'submit'			
        },
		
		index: function(){
			var view = new IndexView({collection: PlacesCollections});
		},
		
		submit: function(){
			var view = new SubmitView();
			view.render();
		}
    });  
  
    return router;
});
