define('views/index/IndexView', [
	'text!templates/index/indexTemplate.html'  
], function(indexTemplate){
	'use strict';
	
	var IndexView = Backbone.View.extend({
		el: $( ".places-main" ),
		
		template: _.template(indexTemplate),
		
		initialize: function() {

			var collection = this.collection;				
			
			this.listenTo(collection, 'add', this.render);
			this.listenTo(collection, 'reset', this.renderComplete);
			
			collection.fetch();
			
		},
		
		render: function( model ){		  
			
			this.$el.append(this.template(model.attributes)).hide().fadeIn();
			
		},
		
		renderComplete: function(){
			
			$( '.progress' ).remove();
			
		}
	});

  return IndexView;
  
});
