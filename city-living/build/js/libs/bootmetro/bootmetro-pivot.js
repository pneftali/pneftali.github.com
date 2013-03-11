/* ==========================================================
 * bootstrap-pivot.js v1.0
 * http://aozora.github.com/bootmetro/
 * ==========================================================
 * Copyright 2012 Marcello Palmitessa
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function(e){var t=function(t,n){this.$element=e(t),this.options=n,this.options.slide&&this.slide(this.options.slide)};t.prototype={to:function(t){var n=this.$element.find(".pivot-item.active"),r=n.parent().children(),i=r.index(n),s=this;if(t>r.length-1||t<0)return;if(this.sliding)return this.$element.one("slid",function(){s.to(t)});if(t===i)return;return this.slide(t>i?"next":"prev",e(r[t]))},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".pivot-item.active"),i=n||r[t](),s=t=="next"?"left":"right",o=t=="next"?"first":"last",u=this,a;this.sliding=!0,i=i.length?i:this.$element.find(".pivot-item")[o](),a=e.Event("slide",{relatedTarget:i[0]});if(i.hasClass("active")){u.sliding=!1;return}if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(a);if(a.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(s),i.addClass(s),this.$element.one(e.support.transition.end,function(){i.removeClass([t,s].join(" ")).addClass("active"),r.removeClass(["active",s].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger("slid")},0)})}else{this.$element.trigger(a);if(a.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return this}},e.fn.pivot=function(n){return this.each(function(){var r=e(this),i=r.data("pivot"),s=e.extend({},e.fn.pivot.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("pivot",i=new t(this,s)),typeof n=="number"?i.to(n):o&&i[o]()})},e.fn.pivot.defaults={},e.fn.pivot.Constructor=t,e(document).on("click.pivot.data-api","[data-pivot-index]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o=parseInt(n.attr("data-pivot-index"));e("[data-pivot-index].active").removeClass("active"),n.addClass("active"),i.pivot(o),t.preventDefault()})}(window.jQuery);