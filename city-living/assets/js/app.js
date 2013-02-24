define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router, Data){
	
	var initialize = function(){
		
		Router.initialize();

	};

	return {
		initialize : initialize
	};
});