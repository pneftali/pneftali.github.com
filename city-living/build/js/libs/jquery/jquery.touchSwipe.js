/*
* touchSwipe - jQuery Plugin
* https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* http://labs.skinkers.com/touchSwipe/
* http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson (www.skinkers.com)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* $version: 1.5.1
*
* Changelog
* $Date: 2010-12-12 (Wed, 12 Dec 2010) $
* $version: 1.0.0 
* $version: 1.0.1 - removed multibyte comments
*
* $Date: 2011-21-02 (Mon, 21 Feb 2011) $
* $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
*					- changed handler signatures so one handler can be used for multiple events
* $Date: 2011-23-02 (Wed, 23 Feb 2011) $
* $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
*					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
* $version: 1.2.1 	- removed console log!
*
* $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods. 
*
* $Date: 2011-28-04 (Thurs, 28 April 2011) $
* $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
*
* $Date: 2011-27-09 (Tues, 27 September 2011) $
* $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
*
* $Date: 2012-14-05 (Mon, 14 May 2012) $
* $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
* 
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
*
* $Date: 2012-06-06 (Wed, 06 June 2012) $
* $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
*
* $Date: 2012-05-06 (Fri, 05 June 2012) $
* $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
*
* $Date: 2012-29-07 (Sun, 29 July 2012) $
* $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
* 			- Added "all" fingers value to the fingers property, so any combinatin of fingers triggers the swipe, allowing event handlers to check the finger count
*
* $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
* $version: 1.3.3	- Code tidy prep for minified version
*
* $Date: 2012-04-10 (wed, 4 Oct 2012) $
* $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
*
* $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
* $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
*
* $Date: 2012-22-10 (Mon, 22 Oct 2012) $
* $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
*
* A jQuery plugin to capture left, right, up and down swipes on touch devices.
* You can capture 2 finger or 1 finger swipes, set the threshold and define either a catch all handler, or individual direction handlers.
* Options: The defaults can be overridden by setting them in $.fn.swipe.defaults
* 		swipe 			Function 	A catch all handler that is triggered for all swipe directions. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" , the distance of the swipe, the duration of the swipe and the finger count.
* 		swipeLeft		Function 	A handler that is triggered for "left" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down"  , the distance of the swipe, the duration of the swipe and the finger count.
* 		swipeRight		Function 	A handler that is triggered for "right" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down"  , the distance of the swipe, the duration of the swipe and the finger count.
* 		swipeUp			Function 	A handler that is triggered for "up" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" , the distance of the swipe, the duration of the swipe and the finger count.
* 		swipeDown		Function 	A handler that is triggered for "down" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down"  , the distance of the swipe, the duration of the swipe and the finger count.
*		swipeStatus 	Function 	A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe phase, either "start", "move", "end" or "cancel". direction : The swipe direction, either "up?, "down?, "left " or "right?.distance : The distance of the swipe.Duration : The duration of the swipe :  The finger count
*		
* 		pinchIn			Function 	A handler triggered when the user pinch zooms inward. Handler is passed 
* 		pinchOut		Function 	A handler triggered when the user pinch zooms outward. Handler is passed
* 		pinchStatus		Function 	A handler triggered for every phase of a pinch. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start", "move", "end" or "cancel". direction : The swipe direction, either "in" or "out". distance : The distance of the pinch, zoom: the pinch zoom level
* 		
* 		click			Function	A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
*
* 		fingers 		int 		Default 1. 	The number of fingers to trigger the swipe, 1 or 2.
* 		threshold 		int  		Default 75.	The number of pixels that the user must move their finger by before it is considered a swipe.
* 		maxTimeThreshold 	int  		Default null. Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
*		triggerOnTouchEnd Boolean Default true If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
*		allowPageScroll String Default "auto". How the browser handles page scrolls when the user is swiping on a touchSwipe object. 
*										"auto" : all undefined swipes will cause the page to scroll in that direction.
*										"none" : the page will not scroll when user swipes.
*										"horizontal" : will force page to scroll on horizontal swipes.
*										"vertical" : will force page to scroll on vertical swipes.
*		fallbackToMouseEvents 	Boolean		Default true	if true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices
*
*		excludedElements	String 	jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all input, select, textarea, button and anchor elements as well as any .noSwipe classes.
*
* Methods: To be executed as strings, $el.swipe('disable');
*		disable		Will disable all touch events until enabled again
*		enable		Will re-enable the touch events
*		destroy		Will kill the plugin, and it must be re-instantiated if it needs to be used again
*
* This jQuery plugin will only run on devices running Mobile Webkit based browsers (iOS 2.0+, android 2.2+)
*/

(function(e){function b(t){return t&&t.allowPageScroll===undefined&&(t.swipe!==undefined||t.swipeStatus!==undefined)&&(t.allowPageScroll=u),t||(t={}),t=e.extend({},e.fn.swipe.defaults,t),this.each(function(){var n=e(this),r=n.data(g);r||(r=new w(this,t),n.data(g,r))})}function w(y,b){function I(t){if(st())return;if(e(t.target).closest(b.excludedElements,_).length>0)return;t=t.originalEvent;var n,r=m?t.touches[0]:t;D=h,m?P=t.touches.length:t.preventDefault(),N=0,C=null,M=null,k=0,L=0,A=0,O=1,H=ut();if(!m||P===b.fingers||b.fingers===c||rt()){H[0].start.x=H[0].end.x=r.pageX,H[0].start.y=H[0].end.y=r.pageY,B=tt(),P==2&&(H[1].start.x=H[1].end.x=t.touches[1].pageX,H[1].start.y=H[1].end.y=t.touches[1].pageY,L=A=K(H[0].start,H[1].start));if(b.swipeStatus||b.pinchStatus)n=z(t,D)}else U(t),n=!1;if(n===!1)return D=v,z(t,D),n;ot(!0),_.bind(S,q),_.bind(x,R)}function q(e){e=e.originalEvent;if(D===d||D===v)return;var t,n=m?e.touches[0]:e;H[0].end.x=m?e.touches[0].pageX:n.pageX,H[0].end.y=m?e.touches[0].pageY:n.pageY,j=tt(),C=et(H[0].start,H[0].end),m&&(P=e.touches.length),D=p,P==2&&(L==0?(H[1].start.x=e.touches[1].pageX,H[1].start.y=e.touches[1].pageY,L=A=K(H[0].start,H[1].start)):(H[1].end.x=e.touches[1].pageX,H[1].end.y=e.touches[1].pageY,A=K(H[0].end,H[1].end),M=G(H[0].end,H[1].end)),O=Q(L,A));if(P===b.fingers||b.fingers===c||!m){V(e,C),N=Y(H[0].start,H[0].end),k=J(H[0].start,H[0].end);if(b.swipeStatus||b.pinchStatus)t=z(e,D);if(!b.triggerOnTouchEnd){var r=!X();W()===!0?(D=d,t=z(e,D)):r&&(D=v,z(e,D))}}else D=v,z(e,D);t===!1&&(D=v,z(e,D))}function R(e){e=e.originalEvent;if(e.touches&&e.touches.length>0)return!0;e.preventDefault(),j=tt(),L!=0&&(A=K(H[0].end,H[1].end),O=Q(L,A),M=G(H[0].end,H[1].end)),N=Y(H[0].start,H[0].end),C=et(H[0].start,H[0].end),k=J();if(b.triggerOnTouchEnd||b.triggerOnTouchEnd===!1&&D===p){D=d;var t=it()||!rt(),n=P===b.fingers||b.fingers===c||!m,r=H[0].end.x!==0,i=n&&r&&t;if(i){var s=X(),o=W();if(o!==!0&&o!==null||!s){if(!s||o===!1)D=v,z(e,D)}else z(e,D)}else D=v,z(e,D)}else D===p&&(D=v,z(e,D));_.unbind(S,q,!1),_.unbind(x,R,!1),ot(!1)}function U(){P=0,j=0,B=0,L=0,A=0,O=1,ot(!1)}function z(e,u){var a=undefined;b.swipeStatus&&(a=b.swipeStatus.call(_,e,u,C||null,N||0,k||0,P)),b.pinchStatus&&it()&&(a=b.pinchStatus.call(_,e,u,M||null,A||0,k||0,P,O)),u===v&&b.click&&(P===1||!m)&&(isNaN(N)||N===0)&&(a=b.click.call(_,e,e.target));if(u==d){b.swipe&&(a=b.swipe.call(_,e,C,N,k,P));switch(C){case t:b.swipeLeft&&(a=b.swipeLeft.call(_,e,C,N,k,P));break;case n:b.swipeRight&&(a=b.swipeRight.call(_,e,C,N,k,P));break;case r:b.swipeUp&&(a=b.swipeUp.call(_,e,C,N,k,P));break;case i:b.swipeDown&&(a=b.swipeDown.call(_,e,C,N,k,P))}switch(M){case s:b.pinchIn&&(a=b.pinchIn.call(_,e,M||null,A||0,k||0,P,O));break;case o:b.pinchOut&&(a=b.pinchOut.call(_,e,M||null,A||0,k||0,P,O))}}return(u===v||u===d)&&U(e),a}function W(){return b.threshold!==null?N>=b.threshold:null}function X(){var e;return b.maxTimeThreshold?k>=b.maxTimeThreshold?e=!1:e=!0:e=!0,e}function V(e,s){if(b.allowPageScroll===u||rt())e.preventDefault();else{var o=b.allowPageScroll===a;switch(s){case t:(b.swipeLeft&&o||!o&&b.allowPageScroll!=f)&&e.preventDefault();break;case n:(b.swipeRight&&o||!o&&b.allowPageScroll!=f)&&e.preventDefault();break;case r:(b.swipeUp&&o||!o&&b.allowPageScroll!=l)&&e.preventDefault();break;case i:(b.swipeDown&&o||!o&&b.allowPageScroll!=l)&&e.preventDefault()}}}function J(){return j-B}function K(e,t){var n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+r*r))}function Q(e,t){var n=t/e*1;return n.toFixed(2)}function G(){return O<1?o:s}function Y(e,t){return Math.round(Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)))}function Z(e,t){var n=e.x-t.x,r=t.y-e.y,i=Math.atan2(r,n),s=Math.round(i*180/Math.PI);return s<0&&(s=360-Math.abs(s)),s}function et(e,s){var o=Z(e,s);return o<=45&&o>=0?t:o<=360&&o>=315?t:o>=135&&o<=225?n:o>45&&o<135?i:r}function tt(){var e=new Date;return e.getTime()}function nt(){_.unbind(E,I),_.unbind(T,U),_.unbind(S,q),_.unbind(x,R),ot(!1)}function rt(){return b.pinchStatus||b.pinchIn||b.pinchOut}function it(){return M&&rt()}function st(){return _.data(g+"_intouch")===!0?!0:!1}function ot(e){e=e===!0?!0:!1,_.data(g+"_intouch",e)}function ut(){var e=[];for(var t=0;t<=5;t++)e.push({start:{x:0,y:0},end:{x:0,y:0},delta:{x:0,y:0}});return e}var w=m||!b.fallbackToMouseEvents,E=w?"touchstart":"mousedown",S=w?"touchmove":"mousemove",x=w?"touchend":"mouseup",T="touchcancel",N=0,C=null,k=0,L=0,A=0,O=1,M=0,_=e(y),D="start",P=0,H=null,B=0,j=0;try{_.bind(E,I),_.bind(T,U)}catch(F){e.error("events not supported "+E+","+T+" on jQuery.swipe")}this.enable=function(){return _.bind(E,I),_.bind(T,U),_},this.disable=function(){return nt(),_},this.destroy=function(){return nt(),_.data(g,null),_}}var t="left",n="right",r="up",i="down",s="in",o="out",u="none",a="auto",f="horizontal",l="vertical",c="all",h="start",p="move",d="end",v="cancel",m="ontouchstart"in window,g="TouchSwipe",y={fingers:1,threshold:75,maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(t){var n=e(this),r=n.data(g);if(r&&typeof t=="string"){if(r[t])return r[t].apply(this,Array.prototype.slice.call(arguments,1));e.error("Method "+t+" does not exist on jQuery.swipe")}else if(!r&&(typeof t=="object"||!t))return b.apply(this,arguments);return n},e.fn.swipe.defaults=y,e.fn.swipe.phases={PHASE_START:h,PHASE_MOVE:p,PHASE_END:d,PHASE_CANCEL:v},e.fn.swipe.directions={LEFT:t,RIGHT:n,UP:r,DOWN:i,IN:s,OUT:o},e.fn.swipe.pageScroll={NONE:u,HORIZONTAL:f,VERTICAL:l,AUTO:a},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:c}})(jQuery);