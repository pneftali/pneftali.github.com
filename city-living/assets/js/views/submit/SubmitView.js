define('views/submit/SubmitView', [
  'text!templates/submit/submitTemplate.html'  
], function(submitTemplate){
	'use strict';
	
	var SubmitView = Backbone.View.extend({
		el: $( ".places-main" ),
		
		template: _.template(submitTemplate),
		
		initialize: function() {
					
		},
		
		render: function(){		  
						
			this.$el.html(this.template).hide().fadeIn();
			
		}
	});

  return SubmitView;
  
});
