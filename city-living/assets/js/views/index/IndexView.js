define('views/index/IndexView', [
	'text!templates/index/indexTemplate.html'  
], function(indexTemplate){
	'use strict';
	
	var IndexView = Backbone.View.extend({
		el: $( ".places-main" ),
		
		template: _.template(indexTemplate),
		
		initialize: function() {

			this.render();
			
		},
		
		render: function(){			  

			var i,
				items = this.collection.models;

			for (i in items) {			
				this.$el.html(this.template(items[i].attributes)).hide().fadeIn();
			}			
			
			FB.XFBML.parse();

			this.renderComplete();

		},
		
		renderComplete: function(){
			
			$( '.progress' ).remove();
			//this.stopListening(collection);
			
		}

	});

  return IndexView;
  
});
