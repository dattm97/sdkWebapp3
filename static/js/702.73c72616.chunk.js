"use strict";(self.webpackChunkpayme_mini_app=self.webpackChunkpayme_mini_app||[]).push([[702],{13702:function(n,t,i){i.r(t),i.d(t,{default:function(){return S}});var o=i(29439),a=i(72791),e=i(62812),r=i(52791),d=i(45798),l=i(62038),s=i(39709),c=i(11087),u=i(57689),g=i(22940),f=i(33168),v=i(69745),h=i(64740),p=i(66030),m=i(8349),Z=i(71239),I=i(4440),b=i(95218),C=i(34705),L=i(69291),x=i(12910),P=i(80184);var S=function(){var n,t,i,S,k=(0,h.TL)(),T=(0,h.CG)(p.Ty),y=(0,h.CG)(I.hL),B=(0,h.CG)(p.vI),j=(0,h.CG)(C.NH),w=(0,c.lr)(),E=(0,o.Z)(w,1)[0].get("type"),R=(0,f.$)().t,M=(0,u.s0)(),N=(0,a.useRef)(null),K=(0,a.useRef)(null),D=(0,a.useState)(""),H=(0,o.Z)(D,2),G=H[0],O=H[1];return(0,P.jsxs)(v.x,{children:[(0,P.jsx)(d.Z,{title:"CreatePin"}),(0,P.jsxs)(l.u3,{padding:2.5,paddingTop:"IOS"===(null===T||void 0===T||null===(n=T.platform)||void 0===n?void 0:n.toUpperCase())||"ANDROID"===(null===T||void 0===T||null===(t=T.platform)||void 0===t?void 0:t.toUpperCase())?0:2.5,paddingBottom:"IOS"===(null===T||void 0===T||null===(i=T.platform)||void 0===i?void 0:i.toUpperCase())||"ANDROID"===(null===T||void 0===T||null===(S=T.platform)||void 0===S?void 0:S.toUpperCase())?0:2.5,display:"flex",flexDirection:"column",justifyContent:"space-between",children:[(0,P.jsxs)(r.Z,{children:[(0,P.jsx)(g.Z,{isIconBack:!0,onClick:function(){return M(-1)}}),(0,P.jsx)(r.Z,{sx:{paddingTop:2.5}}),(0,P.jsx)(e.Z,{variant:"h2",children:R("auth.bankConfirm")}),(0,P.jsx)(r.Z,{sx:{paddingTop:1}}),(0,P.jsx)(m.Z,{ref:N,placeholder:"02332344",errorMessage:"S\u1ed1 s\u1ed1 th\u1ebb/STK kh\xf4ng \u0111\xfang. B\u1ea1n ki\u1ec3m tra v\xe0 nh\u1eadp l\u1ea1i.",onChange:function(n){var t;return null===(t=N.current)||void 0===t||t.hideError(),O(n.target.value),n.target.value}})]}),(0,P.jsx)(s.Z,{ref:K,disabled:!G,loading:j,loadingIndicator:"Xin \u0111\u1ee3i...",variant:"contained",disableElevation:!0,onClick:function(){var n,t;if(null!==(n=N.current)&&void 0!==n&&n.value)if("cardNumber"===E)k(Z.Yy.forgotPassProfile({phone:null===y||void 0===y?void 0:y.phone,clientId:B,confirmInfo:{cardNumber:null===(t=N.current)||void 0===t?void 0:t.value}},(function(n,t){if(n)if(200306===t.code)M("/reset-pin?confirmCode=".concat(t.data.confirmCode));else if(200315===t.code){var i=(0,L.h9)(t.data.remainingTime||0);b.Z.alertContent={title:"T\u1ea1m kho\xe1 x\xe1c minh t\xe0i kho\u1ea3n",subtitle:["B\u1ea1n \u0111\xe3 nh\u1eadp sai s\u1ed1 th\u1ebb/STK ".concat(t.data.times||"nhi\u1ec1u"," l\u1ea7n.\nTh\u1eed l\u1ea1i sau"),i],firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}}else if(200325===t.code)b.Z.alertContent={title:"T\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111\xe3 b\u1ecb kho\xe1",subtitle:"Li\xean h\u1ec7n CSKH ngay \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3",firstButtonTitle:"Li\xean h\u1ec7 CSKH",onClickFirstButton:function(){return(0,x.Z)()}};else{var o,a;null===(o=N.current)||void 0===o||o.setErrorMessage(t.message),null===(a=N.current)||void 0===a||a.showError()}else b.Z.alertContent={title:"L\u1ed7i k\u1ebft n\u1ed1i",subtitle:t.message,firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}})));else if("accountNumber"===E){var i;k(Z.Yy.forgotPassProfile({phone:null===y||void 0===y?void 0:y.phone,clientId:B,confirmInfo:{accountNumber:null===(i=N.current)||void 0===i?void 0:i.value}},(function(n,t){if(n)if(200306===t.code)M("/reset-pin?confirmCode=".concat(t.data.confirmCode));else if(200315===t.code){var i=(0,L.h9)(t.data.remainingTime||0);b.Z.alertContent={title:"T\u1ea1m kho\xe1 x\xe1c minh t\xe0i kho\u1ea3n",subtitle:["B\u1ea1n \u0111\xe3 nh\u1eadp sai s\u1ed1 th\u1ebb/STK ".concat(t.data.times||"nhi\u1ec1u"," l\u1ea7n.\nTh\u1eed l\u1ea1i sau"),i],firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}}else if(200325===t.code)b.Z.alertContent={title:"T\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111\xe3 b\u1ecb kho\xe1",subtitle:"Li\xean h\u1ec7n CSKH ngay \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3",firstButtonTitle:"Li\xean h\u1ec7 CSKH",onClickFirstButton:function(){return(0,x.Z)()}};else{var o,a;null===(o=N.current)||void 0===o||o.setErrorMessage(t.message),null===(a=N.current)||void 0===a||a.showError()}else b.Z.alertContent={title:"L\u1ed7i k\u1ebft n\u1ed1i",subtitle:t.message,firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}})))}},children:R("auth.verify")})]})]})}},39709:function(n,t,i){i.d(t,{Z:function(){return C}});var o=i(4942),a=i(63366),e=i(87462),r=i(72791),d=i(49853),l=i(51853),s=i(94419),c=i(60277),u=i(85513),g=i(75579),f=i(27170),v=i(21217);function h(n){return(0,v.Z)("MuiLoadingButton",n)}var p=(0,i(75878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),m=i(80184),Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],I=(0,c.ZP)(g.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,o.Z)({},"& .".concat(p.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,o.Z)({},"& .".concat(p.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,i=n.theme;return(0,e.Z)((0,o.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,o.Z)({transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short})},"&.".concat(p.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,o.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,o.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginLeft:-8}))})),b=(0,c.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var i=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,d.Z)(i.loadingPosition))]]}})((function(n){var t=n.theme,i=n.ownerState;return(0,e.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{left:"small"===i.size?10:14},"start"===i.loadingPosition&&"text"===i.variant&&{left:6},"center"===i.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{right:"small"===i.size?10:14},"end"===i.loadingPosition&&"text"===i.variant&&{right:6},"start"===i.loadingPosition&&i.fullWidth&&{position:"relative",left:-10},"end"===i.loadingPosition&&i.fullWidth&&{position:"relative",right:-10})})),C=r.forwardRef((function(n,t){var i=(0,u.Z)({props:n,name:"MuiLoadingButton"}),o=i.children,r=i.disabled,c=void 0!==r&&r,g=i.id,v=i.loading,p=void 0!==v&&v,C=i.loadingIndicator,L=i.loadingPosition,x=void 0===L?"center":L,P=i.variant,S=void 0===P?"text":P,k=(0,a.Z)(i,Z),T=(0,l.Z)(g),y=null!=C?C:(0,m.jsx)(f.Z,{"aria-labelledby":T,color:"inherit",size:16}),B=(0,e.Z)({},i,{disabled:c,loading:p,loadingIndicator:y,loadingPosition:x,variant:S}),j=function(n){var t=n.loading,i=n.loadingPosition,o=n.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,d.Z)(i))],endIcon:[t&&"endIconLoading".concat((0,d.Z)(i))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,d.Z)(i))]},r=(0,s.Z)(a,h,o);return(0,e.Z)({},o,r)}(B),w=p?(0,m.jsx)(b,{className:j.loadingIndicator,ownerState:B,children:y}):null;return(0,m.jsxs)(I,(0,e.Z)({disabled:c||p,id:T,ref:t},k,{variant:S,classes:j,ownerState:B,children:["end"===B.loadingPosition?o:w,"end"===B.loadingPosition?w:o]}))}))}}]);
//# sourceMappingURL=702.73c72616.chunk.js.map