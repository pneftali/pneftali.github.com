/* ==========================================================
 * bootpanorama-panorama.js v1.0
 * http://aozora.github.com/bootpanorama/
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

!function(e){var t=function(t,n){this.$element=e(t),this.options=n,this.$groups=e(".panorama-sections .panorama-section"),this.$current=0,this.init()};t.prototype={init:function(){var t=this,n=0;e(".panorama-sections .panorama-section").each(function(t,r){n+=e(r).outerWidth(!0)}),e(".panorama-sections").width(n),this.options.showscrollbuttons||(e("#panorama-scroll-prev").hide(),e("#panorama-scroll-next").hide());if(!this.options.nicescroll){if(this.options.showscrollbuttons){var r=e(".panorama-sections");e("#panorama-scroll-prev").click(function(e){e.preventDefault(),t.prev()}),e("#panorama-scroll-next").click(function(e){e.preventDefault(),t.next()})}e(".panorama").swipe({swipe:function(e,n,r,i,s){n=="right"&&t.prev(),n=="left"&&t.next()},threshold:0,fingers:"all"}),t.setButtons()}this.options.keyboard&&e(document).on("keyup",function(e){e.which==37&&t.prev(),e.which==39&&t.next()})},next:function(){var t=this;this.$current++,this.$current>=this.$groups.length&&(this.$current=this.$groups.length-1);var n=e(".panorama-sections"),r=e(this.$groups[this.$current]).position().left;n.animate({marginLeft:-r},200,"swing",function(){t.setButtons()})},prev:function(){var t=this;this.$current--,this.$current<0&&(this.$current=0);var n=e(".panorama-sections"),r=e(this.$groups[this.$current]).position().left;n.animate({marginLeft:-r},200,"swing",function(){t.setButtons()})},setButtons:function(){if(!this.options.showscrollbuttons)return!1;this.$current===0?e("#panorama-scroll-prev").hide():e("#panorama-scroll-prev").show(),this.$current===this.$groups.length-1?e("#panorama-scroll-next").hide():e("#panorama-scroll-next").show()}},e.fn.panorama=function(n){return this.each(function(){var r=e(this),i=r.data("panorama"),s=e.extend({},e.fn.panorama.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i?o&&i[o]():r.data("panorama",i=new t(this,s))})},e.fn.panorama.defaults={nicescroll:!0,showscrollbuttons:!0,keyboard:!0},e.fn.panorama.Constructor=t}(window.jQuery);