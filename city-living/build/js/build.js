({
    appDir: "../",
    baseUrl: "js",
    dir: "../../build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS.
    optimize: "none",
    paths: {
        "jquery": "libs/requirejs/require-jquery",
        "underscore" : 'libs/underscore/underscore-min',
        "backbone": 'libs/backbone/backbone-min',
        "templates": '../templates',
        "bootstrap": 'libs/bootstrap/bs-popover.min',
        "fancybox": 'libs/jquery/jquery.fancybox.pack'
    },
    modules: [
        {
            name: "main",
            exclude: ["jquery"]
        }
    ]    
})