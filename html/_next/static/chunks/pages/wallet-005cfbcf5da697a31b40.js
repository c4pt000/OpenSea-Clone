_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[81],{50:function(e,t,n){n("xhzY"),e.exports=n("Exnk")},BPEM:function(e,t,n){"use strict";n.r(t);var r=n("NthX"),i=n.n(r),a=n("eijD"),l=n("hisu"),c=n("yBJb"),o=n("0942"),s=n("4Mpa"),d=n("CHlC"),u=n("kMo5"),p=n("P+uj"),h=n("mK0O"),b=n("oYCi"),j=(n("mXGw"),n("dAGg")),f=n("UutA"),w=n("UnrI"),x=n("e86e"),O=n("uMSw"),m=n("/lKe"),g=n("wBvI"),v=n("YMbP"),y=n("wSYs"),k=n("C/iq"),W=n("IzZr"),C=n("j2zt"),H=n("x+fF"),N=n("4u0K"),S=n("Zxh1"),A=n("4jJ9"),M=n("wwms"),D=n("K7R9");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(p.a)(e);if(t){var i=Object(p.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var E=function(e){Object(d.a)(n,e);var t=R(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return e=t.call.apply(t,[this].concat(c)),Object(h.a)(Object(o.a)(e),"state",{userBrowser:k.C.Unknown,selectedWallet:k.Hd.Native,shouldDisplayWalletOptions:!1}),Object(h.a)(Object(o.a)(e),"enableSelectedWallet",Object(a.a)(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.state.selectedWallet,r=e.context.wallet,e.attempt((function(){return r.install(n)}));case 3:case"end":return t.stop()}}),t)})))),Object(h.a)(Object(o.a)(e),"selectWallet",(function(t){e.setState({selectedWallet:t})})),Object(h.a)(Object(o.a)(e),"toggleDisplayWalletOptions",(function(){e.setState({shouldDisplayWalletOptions:!e.state.shouldDisplayWalletOptions})})),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(i.a.mark((function e(){var t,r,a,l,c,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(s.a)(Object(p.a)(n.prototype),"componentDidMount",this).call(this),r=Object(S.c)(window.navigator),e.next=4,Object(M.b)(w.a.loadCached());case 4:a=Object(M.f)().user.lastWalletType,l=this.context.isMobile,c=l||r===k.C.Safari?k.cd:k.dd,o=Object(N.c)(H.a.providers),d=a||(null!==(t=null===o||void 0===o?void 0:o.getName())&&void 0!==t?t:c),this.setState({selectedWallet:d,userBrowser:r}),Object(C.h)("wallet_unlock_page",{});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isInstalled",value:function(){var e;return"install"!=((null===(e=this.props.router)||void 0===e?void 0:e.query)||{}).walletStatus}},{key:"renderAdvancedSection",value:function(){var e=this.state,t=e.shouldDisplayWalletOptions,n=e.selectedWallet,r=e.userBrowser,i=this.context.isMobile;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wallet--toggle-display-wallet-options-wrapper ".concat(i?"wallet--margin-bottom":""),children:Object(b.jsxs)("span",{className:"wallet--toggle-display-wallet-options",onClick:this.toggleDisplayWalletOptions,children:[Object(b.jsx)("i",{className:"material-icons",children:t?"keyboard_arrow_down":"keyboard_arrow_right"}),Object(b.jsx)("h6",{children:i?"Other wallet options":"Use a different wallet"})]})}),t?Object(b.jsxs)("div",{children:[Object(b.jsx)(g.a,{activeWallet:n,minimal:!0,userBrowser:r,onChangeWallet:this.selectWallet}),Object(b.jsx)("hr",{})]}):null]})}},{key:"renderSelectedWallet",value:function(){var e=this.state,t=e.selectedWallet,n=e.userBrowser,r=Object(A.c)(t,"vertical"),i=this.isInstalled();return t===k.Hd.MetaMaskMobile||t===k.Hd.OperaTouch||t===k.Hd.Trust||t===k.Hd.Native?null:t===k.Hd.MetaMask||t===k.Hd.Dapper||t===k.Hd.Kaikas?!k.D.includes(n)||t===k.Hd.Kaikas&&n!==k.C.Chrome?Object(b.jsx)("p",{className:"caps",children:"Select a desktop wallet option"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wallet--wallet-logo-container",children:Object(b.jsx)(O.a,{size:150,url:r})}),Object(b.jsx)("div",{className:"wallet--btn-cta-wrapper",children:i?Object(b.jsx)(x.a,{className:"wallet--btn-cta",onClick:this.enableSelectedWallet,children:"Sign In"}):Object(b.jsxs)(x.a,{className:"wallet--btn-cta",href:Object(A.b)(t),children:["Get ",t]})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wallet--wallet-logo-container",children:Object(b.jsx)(O.a,{size:150,url:r})}),Object(b.jsx)("div",{className:"wallet--btn-cta-wrapper",children:Object(b.jsxs)(x.a,{className:"wallet--btn-cta",onClick:this.enableSelectedWallet,children:["Continue with ",t]})}),Object(b.jsxs)("p",{children:["Your wallet, powered by"," ",Object(b.jsx)(m.a,{href:Object(A.b)(t),children:t}),", will be used to securely store your digital goods and cryptocurrencies."]})]})}},{key:"renderDesktopWorkflow",value:function(){var e=this.isInstalled();return Object(b.jsxs)("div",{className:"wallet--wrapper row",children:[Object(b.jsx)("p",{className:"wallet--wrapper-message",children:e?"Sign in to your wallet.":"You need an Ethereum wallet to use OpenSea."}),this.renderSelectedWallet(),this.renderAdvancedSection()]})}},{key:"renderMobileWorkflow",value:function(){var e=this.state.selectedWallet;return Object(b.jsx)("div",{className:"wallet--mobile-workflow-wrapper",children:Object(b.jsxs)("div",{className:"wallet--wrapper",children:[Object(b.jsxs)("div",{className:"wallet--header",children:[Object(b.jsx)("h4",{className:"wallet--wrapper-message",children:"Sign in to your wallet"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"wallet--wallet-logo-container",children:Object(b.jsx)(O.a,{size:150,url:e===k.cd?k.ed:Object(A.c)(e,"vertical")})}),Object(b.jsx)("p",{children:"Your OpenSea wallet will be used to securely store your digital goods and cryptocurrencies."}),Object(b.jsx)("div",{className:"wallet--btn-cta-wrapper",children:Object(b.jsx)(x.a,{className:"wallet--btn-cta",onClick:this.enableSelectedWallet,children:"Sign In"})}),Object(b.jsxs)("p",{className:"wallet--powered-by-notice",children:["Powered by"," ",Object(b.jsx)("a",{href:Object(A.b)(e),children:e})]})]})]}),this.renderAdvancedSection()]})})}},{key:"render",value:function(){var e=this.context.isMobile;return Object(b.jsxs)(W.a,P(P({className:"wallet container-small relative padded"},this.props),{},{children:[Object(b.jsx)(v.a,{}),Object(b.jsx)(z,{children:e?this.renderMobileWorkflow():this.renderDesktopWorkflow()})]}))}}]),n}(y.a);t.default=Object(j.withRouter)(E);var z=f.d.div.withConfig({displayName:"wallet__DivWallet",componentId:"sc-1g6cb2t-0"})([".wallet--wrapper{text-align:center;.wallet--wrapper-message{font-size:1.8rem;}.wallet--wrapper-action{font-size:1.9rem;}.wallet--wallet-logo-container{height:160px;display:flex;flex-direction:column;justify-content:center;align-items:center;}.wallet--btn-cta-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:55px 20px 15px;}@media (max-width:","){.wallet--wrapper-message{font-weight:500;}.wallet--wallet-logo-container{height:140px;}.wallet--btn-cta-wrapper{padding:10px 20px 0px;}}.wallet--btn-cta{min-width:150px;}.wallet--powered-by-notice{margin:8px 0 32px;font-size:0.75em;}.wallet--toggle-display-wallet-options-wrapper{display:flex;align-items:center;justify-content:center;}.wallet--toggle-display-wallet-options{display:flex;align-items:center;justify-content:center;cursor:pointer;}.wallet--margin-bottom{margin-bottom:20px;}.wallet--header{display:flex;flex-direction:column;align-items:center;h4{font-size:18px;font-weight:600;text-align:center;margin:4px 0 0;}p{text-align:center;color:",";line-height:18px;}}}.wallet--mobile-workflow-wrapper{display:flex;flex-direction:column;align-items:center;margin:9px 0 44px;h3{margin-bottom:60px;}}"],D.g,(function(e){return e.theme.colors.text.subtle}))},Exnk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet",function(){return n("BPEM")}])},Zxh1:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return l}));var r=n("C/iq");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){var t=e.headers["user-agent"];return/mobile/i.test(t)}return!r.Ob&&(document.body.clientWidth>0&&document.body.clientWidth<=600)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){var t=e.headers["user-agent"];return!/mobile/i.test(t)}return!!r.Ob||document.body.clientWidth>0&&document.body.clientWidth>993}function l(e){var t=e.userAgent;return t.indexOf("Firefox")>-1?r.C.Firefox:t.indexOf("Opera")>-1||t.indexOf("OPR")>-1?r.C.Opera:t.indexOf("Trident")>-1?r.C.InternetExplorer:t.indexOf("Edge")>-1?r.C.Edge:t.indexOf("Chrome")>-1?r.C.Chrome:t.indexOf("Safari")>-1?r.C.Safari:r.C.Unknown}},wBvI:function(e,t,n){"use strict";var r=n("hisu"),i=n("yBJb"),a=n("CHlC"),l=n("kMo5"),c=n("P+uj"),o=n("oYCi"),s=n("mXGw"),d=n.n(s),u=n("dAGg"),p=n("UutA"),h=n("vI8H"),b=n("C/iq"),j=n("4jJ9"),f=n("wwms"),w=n("K7R9"),x=n("/lKe");function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(e){Object(a.a)(n,e);var t=O(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.onClick,r=e.img,i=e.desc;return e.hidden?null:Object(o.jsxs)(g,{className:"WalletOption ".concat(t?"WalletOption--selected-wallet":""),onClick:n,children:[Object(o.jsx)("div",{className:"WalletOption--image-slot",children:Object(o.jsx)("img",{src:r})}),Object(o.jsx)("div",{className:"WalletOption--caption-slot",children:Object(o.jsx)("p",{children:i})})]})}}]),n}(d.a.Component),g=p.d.div.withConfig({displayName:"WalletOptionreact__DivWalletOption",componentId:"sc-1nqdpow-0"})(["cursor:pointer;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;border:2px solid ",";border-radius:5px;width:160px;margin:10px 5px 0;padding:3px;&:hover{box-shadow:0 0 10px rgba(0,0,0,0.25);}&.WalletOption--selected-wallet{border:2px solid "," !important;}.WalletOption--image-slot{width:120px;height:100%;display:flex;align-items:center;justify-content:center;padding-top:9px;img{max-width:100%;max-height:42px;}}.WalletOption--caption-slot{width:145px;height:100%;display:flex;align-items:center;justify-content:center;p{opacity:0.6;font-size:10px;margin:0;padding:13px 5px 10px;text-align:center;line-height:0.9rem;}}"],(function(e){return e.theme.colors.border}),w.b);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e){Object(a.a)(n,e);var t=v(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.activeWallet,n=e.minimal,r=e.onChangeWallet,i=e.onlyNative,a=e.router,l=e.userBrowser,c=this.context.isMobile,s=!l||!b.D.includes(l),d=Object(j.e)(a.query),u=Object(j.d)(a.query);return Object(o.jsxs)(k,{children:[n?null:Object(o.jsxs)("div",{className:"WalletSelector--header",children:[Object(o.jsx)(x.a,{className:"WalletSelector--back-button",href:"/wallet",children:Object(o.jsx)("i",{className:"material-icons",children:"chevron_left"})}),Object(o.jsx)("h4",{children:"Choose a Wallet"}),Object(o.jsxs)("p",{children:["In order to make an OpenSea purchase on your"," ",c?"mobile device":"desktop",", you\u2019ll need a secure wallet for Ethereum, ERC20, and ERC721 tokens."]})]}),Object(o.jsxs)("div",{className:"WalletSelector--body",children:[Object(o.jsx)(m,{desc:"A browser extension with great flexibility. The web's most popular wallet",hidden:s||c,img:Object(j.c)(b.Hd.MetaMask),isActive:t===b.Hd.MetaMask,onClick:function(){return r(b.Hd.MetaMask)}}),Object(o.jsx)(m,{desc:c?"Bitski":"A simple-to-use wallet that allows you to sign in with an email and password",hidden:i,img:Object(j.c)(b.Hd.Bitski,c?"vertical":"horizontal"),isActive:t===b.Hd.Bitski,onClick:function(){return r(b.Hd.Bitski)}}),Object(o.jsx)(m,{desc:c?"Fortmatic":"A user-friendly wallet that allows you to sign up with your phone number on any device",hidden:i,img:Object(j.c)(b.Hd.Fortmatic,c?"vertical":"horizontal"),isActive:t===b.Hd.Fortmatic,onClick:function(){return r(b.Hd.Fortmatic)}}),Object(o.jsx)(m,{desc:"Pair with Trust, Argent, MetaMask  & more".concat(c?"":". Works from any browser, without an extension"),hidden:i,img:Object(j.c)(b.Hd.WalletConnect),isActive:t===b.Hd.WalletConnect,onClick:function(){return r(b.Hd.WalletConnect)}}),Object(o.jsx)(m,{desc:"Pairs with Coinbase Wallet".concat(c?"":" and works from any browser, without an extension"),hidden:i,img:Object(j.c)(b.Hd.WalletLink),isActive:t===b.Hd.WalletLink,onClick:function(){return r(b.Hd.WalletLink)}}),Object(o.jsx)("a",{href:b.Nc,rel:"noreferrer",target:"_blank",children:Object(o.jsx)(m,{desc:"Opera Touch",hidden:!c,img:Object(j.c)(b.qc.OperaTouch,"vertical")})}),Object(o.jsx)("a",{href:d,rel:"noreferrer",target:"_blank",children:Object(o.jsx)(m,{desc:"Trust Wallet",hidden:!c,img:Object(j.c)(b.qc.Trust,"vertical")})}),Object(o.jsx)("a",{href:b.Q,rel:"noreferrer",target:"_blank",children:Object(o.jsx)(m,{desc:"Coinbase Wallet",hidden:!c,img:Object(j.c)(b.Hd.WalletLink,"vertical")})}),Object(o.jsx)("a",{href:u,rel:"noreferrer",target:"_blank",children:Object(o.jsx)(m,{desc:"MetaMask Mobile",hidden:!c,img:Object(j.c)(b.qc.MetaMaskMobile)})}),Object(o.jsx)(m,{desc:c?"Arkane":"A security-focused cloud wallet with pin codes and multi-factor auth",hidden:i,img:Object(j.c)(b.Hd.Arkane,c?"vertical":"horizontal"),isActive:t===b.Hd.Arkane,onClick:function(){return r(b.Hd.Arkane)}}),Object(o.jsx)(m,{desc:"A browser extension that pays gas fees for you, with the easiest setup",hidden:s||c,img:Object(j.c)(b.Hd.Dapper),isActive:t===b.Hd.Dapper,onClick:function(){return r(b.Hd.Dapper)}}),Object(o.jsx)(m,{desc:c?"Authereum":"A usability-focused wallet with no transaction fees and a fiat on-ramp",hidden:i,img:Object(j.c)(b.Hd.Authereum,c?"vertical":"horizontal"),isActive:t===b.Hd.Authereum,onClick:function(){return r(b.Hd.Authereum)}}),Object(o.jsx)(m,{desc:c?"Torus":"Log in with Google, Facebook, or other OAuth providers",hidden:i,img:Object(j.c)(b.Hd.Torus,c?"vertical":"horizontal"),isActive:t===b.Hd.Torus,onClick:function(){return r(b.Hd.Torus)}}),Object(f.e)()?Object(o.jsx)(m,{desc:"A browser extension for the Klaytn blockchain",hidden:s||c,img:Object(j.c)(b.Hd.Kaikas),isActive:t===b.Hd.Kaikas,onClick:function(){return r(b.Hd.Kaikas)}}):null]})]})}}]),n}(h.b),k=(t.a=Object(u.withRouter)(y),p.d.div.withConfig({displayName:"WalletSelectorreact__DivWalletSelectWrapper",componentId:"sc-6iaga7-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:640px;a{text-decoration:none !important;&:hover{text-decoration:none !important;}}.WalletSelector--back-button{position:absolute;top:80px;left:4%;color:",";}.WalletSelector--header{display:flex;flex-direction:column;align-items:center;padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid ",";width:95%;h4{font-size:18px;font-weight:500;text-align:center;margin:4px 0 0;}p{text-align:center;color:",";line-height:18px;width:90%;}}.WalletSelector--body{display:flex;flex-wrap:wrap;justify-content:center;width:100%;margin-bottom:10px;}@media (min-width:","){min-width:540px;.WalletSelector--back-button{position:relative;top:31px;left:-296px;}}"],w.m,w.o,w.m,w.i))}},[[50,1,2,7,5,6,3,4,9,8,0]]]);
//# sourceMappingURL=wallet-005cfbcf5da697a31b40.js.map