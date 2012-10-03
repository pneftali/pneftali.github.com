(function ($){

	list();
	function list() {
	    $.ajax({
	        type: 'GET',
	        url: './api/list',
	        dataType: "json", // data type of response
	        success: function (d){
	        	console.log( d );
	        }
	    });
	}

})(jQuery);
