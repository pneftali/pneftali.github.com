define('app', [
	'underscore',
	'backbone',
	'router',
	'fancybox'
], function(_, Backbone, Router, fancybox){
	
	var initialize = function(){
		
		new Router();
		Backbone.history.start();
		
		$(".img-wrap a").fancybox({
				helpers : {
				title : { type : 'inside' }
			}            
		});
	};

	return {
		initialize : initialize
	};
});