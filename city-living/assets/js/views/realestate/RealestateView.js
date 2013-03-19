define('views/realestate/RealestateView', [
	'text!templates/realestate/realestateTemplate.html'  
], function(realestateTemplate){
	'use strict';
	
	var IndexView = Backbone.View.extend({
		el: $( ".places-main" ),
		
		template: _.template(realestateTemplate),
		
		initialize: function() {

			this.render();
			
		},
		
		render: function(){		  

			var url_path 		= "/#/real-estate/" + this.options.category + "/" + this.options.name,
				mode_attributes = this.collection.where( {url: url_path} );

				$( '.progress' ).remove();

				this.$el.html(this.template(mode_attributes[0].attributes)).hide().fadeIn();

				FB.XFBML.parse();
			
		}

	});

  	return IndexView;
  
});
