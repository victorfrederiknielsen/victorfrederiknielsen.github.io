(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{258:function(t,e,r){var content=r(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("e93205a4",content,!0,{sourceMap:!1})},259:function(t,e,r){var content=r(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("6cf3cfc5",content,!0,{sourceMap:!1})},260:function(t,e,r){"use strict";var n=r(258);r.n(n).a},261:function(t,e,r){(e=r(26)(!1)).push([t.i,".v-chip[data-v-cf7baac8]{border-radius:8px}",""]),t.exports=e},262:function(t,e,r){"use strict";var n=r(259);r.n(n).a},263:function(t,e,r){(e=r(26)(!1)).push([t.i,".v-chip.theme--dark[data-v-98a69962]{background-color:#fff!important;color:#000!important}.v-avatar[data-v-98a69962],.v-chip[data-v-98a69962]{cursor:pointer}p[data-v-98a69962]{margin:0}",""]),t.exports=e},265:function(t,e,r){var content=r(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("d7eb54a0",content,!0,{sourceMap:!1})},266:function(t,e,r){var content=r(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("c4ff330e",content,!0,{sourceMap:!1})},267:function(t,e,r){"use strict";var n={props:{tags:{type:Array,default:function(){return[]}}}},c=(r(260),r(31)),o=r(58),l=r.n(o),f=r(293),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.tags,(function(e){return r("v-chip",{key:e.id,staticClass:"me-2 mt-2 font-weight-black primary",attrs:{link:"",label:""}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1)}),[],!1,null,"cf7baac8",null);e.a=component.exports;l()(component,{VChip:f.a})},268:function(t,e,r){"use strict";var n={name:"ArticleAuthor"},c=(r(262),r(31)),o=r(58),l=r.n(o),f=r(289),v=r(291),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex direction-row align-center"},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-avatar",t._g({attrs:{size:"28",color:"primary"}},n),[r("span",{staticClass:"white--text font-weight-black caption"},[t._v("VN")])])]}}])},[t._v(" "),r("p",[t._v("Victor Nielsen")])]),t._v(" "),r("p",{staticClass:"ms-1 text--secondary caption"},[t._v("for")]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("p",t._g({staticClass:"font-weight-black ms-1 caption primary--text"},n),[t._v("VFN//DEV")])]}}])},[t._v(" "),r("p",[t._v("VFN//DEV")])]),t._v(" "),r("p",{staticClass:"ms-1 text--secondary caption"},[t._v("on")]),t._v(" "),r("p",{staticClass:"ms-1 font-weight-black caption"},[t._v("2020/04/27")])],1)}),[],!1,null,"98a69962",null);e.a=component.exports;l()(component,{VAvatar:f.a,VTooltip:v.a})},285:function(t,e,r){"use strict";var n=r(265);r.n(n).a},286:function(t,e,r){(e=r(26)(!1)).push([t.i,'section>*[data-v-ddef9366]{margin-top:2em}h3[data-v-ddef9366]{font-weight:700;font-size:34px}p[data-v-ddef9366]{font-size:21px}h3[data-v-ddef9366],p[data-v-ddef9366]{font-family:"Noto Serif",serif;margin-bottom:0}',""]),t.exports=e},287:function(t,e,r){"use strict";var n=r(266);r.n(n).a},288:function(t,e,r){(e=r(26)(!1)).push([t.i,".title-text[data-v-61861485]{color:rgba(0,0,0,.8)}.title-text.dark-banner[data-v-61861485]{color:#fff}.article-body[data-v-61861485]{max-width:680px;margin:0 auto}.v-card[data-v-61861485]{border-radius:6px!important;box-shadow:none}.v-parallax[data-v-61861485]{border-radius:8px}.max-width[data-v-61861485]{max-width:90%}.full-height[data-v-61861485]{height:100%}",""]),t.exports=e},292:function(t,e,r){"use strict";r.r(e);r(23),r(12),r(5),r(4),r(13);var n=r(1),c=r(110),o={name:"ArticleSection",props:{section:{type:Object,default:void 0}}},l=(r(285),r(31)),f=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",["paragraph"===t.section.type?r("p",[t._v("\n    "+t._s(t.section.content)+"\n  ")]):t._e(),t._v(" "),"h3"===t.section.type?r("h3",{staticClass:"mb-n6"},[t._v("\n    "+t._s(t.section.content)+"\n  ")]):t._e()])}),[],!1,null,"ddef9366",null).exports,v=r(268),d=r(267);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"Article",created:function(){var t=this.$route.params.id;this.$store.dispatch("articles/getArticle",t)},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("articles",["currentArticle"])),components:{ArticleSection:f,ArticleAuthor:v.a,ArticleTags:d.a}},_=(r(287),r(58)),x=r.n(_),y=r(257),w=r(295),O=Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.currentArticle?r("article",[r("v-container",[r("v-parallax",{attrs:{src:t.currentArticle.bannerUrl}},[r("div",{staticClass:"d-flex flex-column full-height"},[r("div",{staticClass:"d-flex flex-grow-0 justify-end me-n4"},[r("ArticleTags",{attrs:{tags:t.currentArticle.tags}})],1),t._v(" "),r("div",{staticClass:"flex-grow-1 d-flex justify-center align-center"},[r("h1",{staticClass:"display-4 font-weight-black ma-n6",class:{"dark-banner":t.currentArticle.darkBanner}},[t._v("\n            "+t._s(t.currentArticle.title)+"\n          ")])])])])],1),t._v(" "),r("v-container",[r("div",{staticClass:"article-body mt-6"},[r("ArticleAuthor"),t._v(" "),t._l(t.currentArticle.sections,(function(section){return r("ArticleSection",{key:section.id,attrs:{section:section}})}))],2)])],1):t._e()}),[],!1,null,"61861485",null);e.default=O.exports;x()(O,{VContainer:y.a,VParallax:w.a})}}]);