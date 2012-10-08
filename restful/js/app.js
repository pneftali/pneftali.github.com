(function ($){

	var top = 0,
		bot = 2;

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

	$('#myModal').modal('show');
	if (typeof pass !== "undefined"){
		$('#myModal').modal('hide');
	} 	
	
	/*
	$('#myModal').on('hidden', function (){

		if (typeof pass === "undefined"){
			// similar behavior as an HTTP redirect
			window.location.replace("http://google.com");
		} 
		
	});	
	*/


	$( '.add-more' ).on('click', function (){
		var addContent = 	"<div class='clearfix'></div>";
			addContent +=	"<div class='bb-bot' id='bb-bot-"+bot+"'></div>";
		$( '#clone-this' ).clone().appendTo( '#bod-box' );

		top++;
		bot++;
		console.log(top);

		$('html, body').animate({
			scrollTop: $( "#bb-bot-"+top ).offset().top
		}, 2000);

		$( '#bod-box' ).append(addContent);

	});


	$('form').submit(function() {
  		console.log($(this).serialize());
  		return false;
	});
	

})(jQuery);
