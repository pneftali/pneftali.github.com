(function ($){

	/* 
	 * just a sample illustration of how to use RESTful request to the server
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
	*/


	if (typeof pass === "undefined"){
		$('#myModal').modal('show');		
	} else{
		$('#myModal').modal('hide');
		console.log('halo');
	}	
	
	$('#myModal').on('hide', function (){

		if (typeof pass === "undefined"){
			// similar behavior as an HTTP redirect
			window.location.replace("http://google.com");
		} 
		
	});	
		

})(jQuery);
