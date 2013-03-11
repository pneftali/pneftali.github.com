/*!
 * jQuery Charms Plugin
 * Original author: @aozora
 * Licensed under the MIT license
 */

(function(e,t,n,r){function o(t,n){this.element=t,this.options=e.extend({},s,n),this._defaults=s,this._name=i,this.init()}var i="charms",s={width:"320px",animateDuration:600};o.prototype={init:function(){},showSection:function(t,n){var i=this.options.width;n!=r&&(i=n);var s=e.support.transition&&e(this.element).hasClass("slide");return s&&e(this.element).eq(0).offsetWidth,e(this.element).addClass("in"),!1},close:function(){return e(this.element).removeClass("in"),!1}},e.fn[i]=function(t){var n=arguments;if(t===r||typeof t=="object")return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new o(this,t))});if(typeof t=="string"&&t[0]!=="_"&&t!=="init")return this.each(function(){var r=e.data(this,"plugin_"+i);r instanceof o&&typeof r[t]=="function"&&r[t].apply(r,Array.prototype.slice.call(n,1))})}})(jQuery,window,document),function(e){e("#charms").charms(),e(".close-charms").click(function(t){t.preventDefault(),e("#charms").charms("close")})}(jQuery);