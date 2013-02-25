define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/submit/submitTemplate.html'  
], function($, _, Backbone, submitTemplate){
	'use strict';
	
	var IndexView = Backbone.View.extend({
		el: $( ".places-main" ),
		
		template: _.template(submitTemplate),
		
		initialize: function() {
					
		},
		
		render: function(){		  
						
			this.$el.html(this.template).hide().fadeIn();
			
		}
	});

  return IndexView;
  
});
