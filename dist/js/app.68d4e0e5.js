!function(e){function t(t){for(var o,i,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;a.push([2,1]),n()}({2:function(e,t,n){n(8),e.exports=n(7)},7:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t);n(3),n(4);var o=n(0),r=n.n(o);var a=function(e){var t=r()('[data-block="menu"]'),n=r()("body"),o=r()("html");function a(){t.removeClass("menu_open"),t.find(".menu__item_open").removeClass("menu__item_open")}t.on("click",'[data-target="toggle"]',(function(r){t.toggleClass("menu_open"),e?o.toggleClass("overflow-hidden"):n.toggleClass("overflow-hidden"),r.preventDefault()})),r()("body").on("click",(function(e){var t=r()(e.target).parent();t.closest(".menu__item").length?(t.toggleClass("menu__item_open"),t.siblings().removeClass("menu__item_open")):r()('[data-target="child"]').parent().removeClass("menu__item_open")})),e?window.addEventListener("orientationchange",a,!1):r()(window).resize(a)},i=n(1),s=n.n(i);var l=function(e){var t=r()('[data-block="popup"]'),n=r()("body"),o=r()("html"),a=t.find('[data-form="request"]'),i=t.find('[data-block="formSend"]'),l=a.parent();new s.a("+7(999) 999-99-99").mask(document.querySelector('[name="phone"]')),n.on("click",'[data-target="formRequest"]',(function(r){t.addClass("popup_open"),e?o.addClass("overflow-hidden"):n.addClass("overflow-hidden"),r.preventDefault()})),r()('[data-target="close"]').on("click",(function(r){t.removeClass("popup_open"),i.removeClass("popup__send_active"),l.removeClass("popup__form_hide"),e?o.removeClass("overflow-hidden"):n.removeClass("overflow-hidden"),r.preventDefault()})),a.on("submit",(function(e){var t=r()(this).find("[data-required]"),n=/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,o=!1;t.each((function(){var e=r()(this),t=e.val().trim(),a=e.siblings("[data-error]");t?e.is('[name="email"]')&&!n.test(t)&&(o=!0,a.text("Вы ввели неверный Email"),a[0].hidden=!1):(o=!0,a.text("Заполните поле"),a[0].hidden=!1)})),o||(i.addClass("popup__send_active"),l.addClass("popup__form_hide"),window.dataLayer.push({category:"corp-solutions_request"," label":"corp-solutions_form",action:"form_submitiion"})),e.preventDefault()})),a.on("focus","input",(function(e){var t=r()(this),n=t.siblings("[data-error]");t.removeClass("form__field_error"),n.empty(),n[0].hidden=!0,e.preventDefault()}))};n(6);var u=function(){var e=r()('[data-carousel="news"]');e.length&&e.owlCarousel({nav:!1,dots:!1,loop:!1,autoWidth:!0,responsiveClass:!0,margin:0,items:1,smartSpeed:700,stagePadding:20})};var d=function(){r()('[data-faq="container"]').on("click",(function(e){var t=r()(e.target).closest(".faq__right-item");if(!r()(e.target).hasClass("faq__link")){if(t){var n=t.find('[data-click="close"]'),o=t.find('[data-click="btn"]');n.toggleClass("faq__right-answer_active"),o.toggleClass("faq__open-close_active")}return!1}}))};r()((function(){var e=!!navigator.userAgent.match(/iPhone|iPod|iPad|iOS|android/i);a(e),l(e),u(),d()}))}});
//# sourceMappingURL=app.68d4e0e5.js.map