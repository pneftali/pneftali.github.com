require.config({
    paths: {
        jquery      : 'libs/jquery/jquery',
        underscore  : 'libs/underscore/underscore-min',
        backbone    : 'libs/backbone/backbone-min',
        bootstrap   : 'libs/bootstrap/bs-popover.min',
		fancybox   	: 'libs/jquery/jquery.fancybox.pack',
        templates   : '../templates'
    },
    shim: {
        'bootstrap':{deps: ['jquery']},
		'backbone': {
			deps: ['jquery','underscore'],
			exports: 'Backbone'
		},
		'fancybox': { deps: ['jquery'], exports: 'fancybox' }
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