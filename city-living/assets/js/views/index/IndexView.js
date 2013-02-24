define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/index/indexTemplate.html'  
], function($, _, Backbone, indexTemplate){
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
			
			console.log( model );	 
			
			this.$el.append(this.template).hide().fadeIn();
			
		},
		
		renderComplete: function(){
			
			$( '.progress' ).remove();
			
		}
	});

  return IndexView;
  
});
