define("views/realestate/RealestateView",["text!templates/realestate/realestateTemplate.html"],function(e){var t=Backbone.View.extend({el:$(".places-main"),template:_.template(e),initialize:function(){this.render()},render:function(){var e="/#/real-estate/"+this.options.category+"/"+this.options.name,t=this.collection.where({url:e});$(".progress").remove(),this.$el.html(this.template(t[0].attributes)).hide().fadeIn(),FB.XFBML.parse()}});return t});