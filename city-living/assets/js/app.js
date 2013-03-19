define('app', [
	'router'
], function(Router){
	
	console.log('App initialized.');

	var initialize = function(){	
		
		new Router();
		Backbone.history.start();		
		
	};

	return {
		initialize : initialize
	};
});