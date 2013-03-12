define('views/realestate/RealestateView', [
	'collections/StorageCollections',
	'text!templates/realestate/realestateTemplate.html'  
], function(StorageCollections, realestateTemplate){
	'use strict';
	
	var IndexView = Backbone.View.extend({
		el: $( ".places-main" ),
		
		template: _.template(realestateTemplate),
		
		initialize: function() {

			var collection = this.collection;				
			
			this.listenTo(collection, 'add', this.capture);
			this.listenTo(collection, 'reset', this.render);
			
			collection.fetch();
			
		},

		capture: function( model ){

			StorageCollections.push( model );

		},
		
		render: function(){		  

			var url_path 		= "/#/real-estate/" + this.options.category + "/" + this.options.name,
				mode_attributes = StorageCollections.where( {url: url_path} );

				$( '.progress' ).remove();

				this.$el.html(this.template(mode_attributes[0].attributes)).hide().fadeIn();

				FB.XFBML.parse();
			
		}

	});

  	return IndexView;
  
});
