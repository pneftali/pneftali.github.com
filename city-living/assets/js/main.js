require.config({
    paths: {
        underscore  : 'libs/underscore/underscore-amd-min',
        backbone    : 'libs/backbone/backbone-amd-min',
        bootstrap   : 'libs/bootstrap/bs-popover.min',
		fancybox   	: 'libs/jquery/jquery.fancybox.pack',
        templates   : '../templates'
    },
    shim: {        
        'bootstrap': { deps: ['jquery'] },
		'fancybox': { deps: ['jquery'] }
    }
});

/* implementation using the non-AMD backbone and underscore
require.config({
    paths: {
        underscore  : 'libs/underscore/underscore-min',
        backbone    : 'libs/backbone/backbone-min',
        bootstrap   : 'libs/bootstrap/bs-popover.min',
        fancybox    : 'libs/jquery/jquery.fancybox.pack',
        templates   : '../templates'
    },
    shim: {        
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': { deps: ['jquery'] },
        'fancybox': { deps: ['jquery'] }
    }
});
*/


require(['data'], function(Data){

    Data.initialize();
});