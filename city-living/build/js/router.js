define("router",["views/index/IndexView","views/submit/SubmitView","views/realestate/RealestateView","collections/PlacesCollections"],function(e,t,n,r){var i=Backbone.Router.extend({routes:{"":"index","real-estate/:category/:name":"realestate",submit:"submit"},index:function(){var t=new e({collection:r})},submit:function(){var e=new t;e.render()},realestate:function(e,t){var i=new n({collection:r,category:e,name:t})}});return i});