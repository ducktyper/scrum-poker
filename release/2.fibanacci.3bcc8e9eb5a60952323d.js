webpackJsonp([2],{66:function(e,t,l){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(65),a=c(n);t.default=function(e,t,l){return t in e?(0,a.default)(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}},116:function(e,t,l){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function n(e){return{type:v,payload:{view:"ready-to-reveal",choice:e}}}function a(){return{type:m,payload:{view:"reveal-card"}}}function u(){return{type:E,payload:{view:"select-box"}}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments[1],l=C[t.type];return l?l(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.FIBANACCI_CLEAR=t.FIBANACCI_REVEAL=t.FIBANACCI_SELECT=void 0;var r,d=l(66),o=c(d),f=l(64),s=c(f);t.select=n,t.reveal=a,t.clear=u,t.default=i;var v=t.FIBANACCI_SELECT="FIBANACCI_SELECT",m=t.FIBANACCI_REVEAL="FIBANACCI_REVEAL",E=t.FIBANACCI_CLEAR="FIBANACCI_CLEAR",C=(r={},(0,o.default)(r,v,function(e,t){return(0,s.default)({},e,t.payload)}),(0,o.default)(r,m,function(e,t){return(0,s.default)({},e,t.payload)}),(0,o.default)(r,E,function(e,t){return(0,s.default)({},e,t.payload)}),r),p={view:"select-box",choice:""}},182:function(e,t,l){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Fibanacci=void 0;var n=l(4),a=c(n),u=t.Fibanacci=function(e){var t=function(e){return"☕"===e?"size-emoji":"size-"+e.length};return"select-box"===e.view?a.default.createElement("div",{id:"select-box"},a.default.createElement("div",{className:"choice",onClick:function(){return e.select("0")}},a.default.createElement("div",null,"0")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("1")}},a.default.createElement("div",null,"1")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("2")}},a.default.createElement("div",null,"2")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("3")}},a.default.createElement("div",null,"3")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("5")}},a.default.createElement("div",null,"5")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("8")}},a.default.createElement("div",null,"8")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("13")}},a.default.createElement("div",null,"13")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("21")}},a.default.createElement("div",null,"21")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("34")}},a.default.createElement("div",null,"34")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("55")}},a.default.createElement("div",null,"55")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("89")}},a.default.createElement("div",null,"89")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("144")}},a.default.createElement("div",null,"144")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("?")}},a.default.createElement("div",null,"?")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("∞")}},a.default.createElement("div",null,"∞")),a.default.createElement("div",{className:"choice",onClick:function(){return e.select("☕")}},a.default.createElement("div",null,"☕"))):"ready-to-reveal"===e.view?a.default.createElement("div",{id:"ready-to-reveal",onClick:e.reveal},"Ready"):"reveal-card"===e.view?a.default.createElement("div",{id:"reveal-card",onClick:e.clear,className:t(e.choice)},e.choice):a.default.createElement("div",null,"No view")};u.propTypes={choice:a.default.PropTypes.string.isRequired,view:a.default.PropTypes.string.isRequired,select:a.default.PropTypes.func.isRequired,reveal:a.default.PropTypes.func.isRequired,clear:a.default.PropTypes.func.isRequired},t.default=u},183:function(e,t,l){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(53),a=l(116),u=l(182),i=c(u),r={select:function(e){return(0,a.select)(e)},reveal:a.reveal,clear:a.clear},d=function(e){return{choice:e.fibanacci.choice,view:e.fibanacci.view}};t.default=(0,n.connect)(d,r)(i.default)}});