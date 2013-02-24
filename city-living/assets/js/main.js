require.config({
    paths: {
        jquery      : 'libs/jquery/jquery',
        underscore  : 'libs/underscore/underscore-min',
        backbone    : 'libs/backbone/backbone-min',
		handlebars	: 'libs/handlebars/handlebar',
        bootstrap   : 'libs/bootstrap/bs-popover.min',
        templates   : '../templates'
    },
    shim: {
        'bootstrap':{deps: ['jquery']},
		'backbone': {
			deps: ['jquery','underscore'],
			exports: 'Backbone'
		},
		'handlebar': { exports: 'Handlebars' }
    }
});
 
require(['app'], function(App){
    App.initialize();
});

/* old implementation without backbone
require([
    'jquery', 
    'bootstrap'
    ], function($, _bootstrap){

        return {};
});
*/