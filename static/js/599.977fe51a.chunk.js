"use strict";(self.webpackChunkpayme_mini_app=self.webpackChunkpayme_mini_app||[]).push([[599],{58599:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var i=t(29439),o=t(72791),l=t(11087),r=t(57689),u=t(33168),a=t(83423),s=t(62812),c=t(52791),d=t(45798),f=t(62038),h=t(8503),v=t(57405),p=t(22940),g=t(69745),m=t(4238),C=t(64740),T=t(66030),x=t(5001),b=t(71239),y=t(4440),k=t(89704),Z=t(34705),j=t(95218),S=t(69291),B=t(15661),P=t(57380),O=t(11864),w=t(9523),E=t(25013),L=t(73915),D=t(80184),I=function(){var e=(0,C.TL)(),n=(0,r.s0)(),t=(0,C.CG)(T.Ty),i=(0,C.CG)(T.Qk),l=function(){i.biometricKey&&((0,L.G)("sinh tr\u1eafc pass ".concat(JSON.stringify(i.biometricKey))),e((0,Z.jM)(i.biometricKey)),n("/home",{replace:!0}))};return(0,o.useEffect)((function(){var e;null!==(e=t.biometric)&&void 0!==e&&e.isSupport&&i.biometricKey&&i.isEnabled&&(E.Z.callback={onSuccess:l},P.J.next({type:"jsBiometricAuthentication",data:{description:"C\u1ea7n sinh tr\u1eafc \u0111\u1ec3 ti\u1ebfp t\u1ee5c",cancelTitle:"Hu\u1ef7"}}))}),[t,i]),(0,D.jsx)(w.o,{callback:{onSuccess:l}})},A=t(12910);var H=function(){var e,n,t,w,E=(0,C.TL)(),H=(0,l.lr)(),G=(0,i.Z)(H,1)[0],K=(0,r.s0)(),N=(0,u.$)().t,R=(0,C.CG)(T.Ty),F=(0,C.CG)(T.vI),M=(0,C.CG)(y.hL),Y=(0,C.CG)(Z.NH),_=(0,o.useRef)(null),J=(0,o.useRef)(null),z=G.get("activeCode")||"";return(0,D.jsxs)(g.x,{children:[(0,D.jsx)(d.Z,{title:"Login Step 2"}),(0,D.jsxs)(f.u3,{sx:{padding:2.5,paddingTop:"IOS"===(null===R||void 0===R||null===(e=R.platform)||void 0===e?void 0:e.toUpperCase())||"ANDROID"===(null===R||void 0===R||null===(n=R.platform)||void 0===n?void 0:n.toUpperCase())?0:2.5,backgroundImage:"url(images/backgroundLogin.svg)",backgroundRepeat:"no-repeat",resize:"both",backgroundPosition:"center top",backgroundSize:"cover"},display:"flex",flexDirection:"column",justifyContent:"space-between",children:[(0,D.jsxs)(c.Z,{sx:{paddingTop:5},children:[(0,D.jsx)(p.Z,{}),(0,D.jsx)(c.Z,{display:"flex",flexDirection:"column",justifyContent:"center",children:(0,D.jsx)(a.Z,{src:(0,O.F)(null===M||void 0===M?void 0:M.avatar),sx:{width:64,height:64,alignSelf:"center"}})}),(0,D.jsx)(c.Z,{sx:{paddingTop:2}}),(0,D.jsxs)(s.Z,{variant:"h3",children:[N("auth.Hello")," ",(0,m.v)(null!==(t=null===M||void 0===M?void 0:M.fullname)&&void 0!==t?t:"--")]}),(0,D.jsx)(s.Z,{variant:"subtitle1",sx:{textAlign:"center"},children:N("auth.enterPinToContinue")}),(0,D.jsx)(c.Z,{sx:{paddingTop:6}}),(0,D.jsx)(v.Z,{ref:_,numOfCell:6,value:"",isPassword:!0,onFilled:function(e){e&&E(b.Yy.login({phone:null===M||void 0===M?void 0:M.phone,password:(0,k.SHA256)(e).toString(),clientId:F,activeCode:z},(function(e,n){if(e)if(2e5===n.code)E((0,Z.jM)(n.data.accessToken)),K("/home",{replace:!0});else if(200004===n.code||200011===n.code){var t=(0,S.h9)(n.data.remainingTime||0);j.Z.alertContent={title:"T\u1ea1m kho\xe1 PayME PIN",subtitle:["B\u1ea1n \u0111\xe3 nh\u1eadp sai PayME PIN ".concat(n.data.times||"nhi\u1ec1u"," l\u1ea7n.\nTh\u1eed l\u1ea1i sau"),t],firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}}else if(200005===n.code)j.Z.alertContent={title:"T\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111\xe3 b\u1ecb kho\xe1",subtitle:"Li\xean h\u1ec7n CSKH ngay \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3",firstButtonTitle:"Li\xean h\u1ec7 CSKH",onClickFirstButton:function(){return(0,A.Z)()}};else{var i,o,l;null===(i=_.current)||void 0===i||i.setErrorMessage(n.message),null===(o=_.current)||void 0===o||null===(l=o.showError)||void 0===l||l.call(o)}else j.Z.alertContent={title:"L\u1ed7i k\u1ebft n\u1ed1i",subtitle:n.message,firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}})))},loading:Y}),(0,D.jsx)(c.Z,{sx:{paddingTop:3}}),(0,D.jsxs)(c.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[(0,D.jsx)(x.Z,{value:N("auth.forgotPin"),onClick:function(){E(b.Yy.sendActiveCode({phone:null===M||void 0===M?void 0:M.phone,clientId:F,type:B.Y.FORGOT_PASSWORD},(function(e,n){var t,i;if(e)if(204200===n.code)null===(t=J.current)||void 0===t||t.open(),null===(i=J.current)||void 0===i||i.setExpired((new Date).getTime()+6e4);else if(204203===n.code){var o,l;null===(o=J.current)||void 0===o||o.open(),null===(l=J.current)||void 0===l||l.setExpired((new Date).getTime()+(n.data.remainingTime||6e4))}else j.Z.alertContent={title:"L\u1ed7i k\u1ebft n\u1ed1i",subtitle:n.message,firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}})))}}),(0,D.jsx)(x.Z,{value:N("auth.changePhone"),onClick:function(){E((0,y.ZC)(null)),P.J.next({type:"jsPreferences",data:{accountInfo:null}}),(0,L.G)({accountInfo:null}),K("/login")}})]})]}),(0,D.jsx)(I,{})]}),(0,D.jsx)(h.Z,{ref:J,title:"X\xe1c th\u1ef1c OTP",subtitle:"B\u1ea1n h\xe3y nh\u1eadp OTP \u0111\u01b0\u1ee3c g\u1eedi t\u1edbi s\u1ed1 ".concat((0,S.xA)(null!==(w=null===M||void 0===M?void 0:M.phone)&&void 0!==w?w:"")," \u0111\u1ec3 x\xe1c th\u1ef1c."),onSubmit:function(e){e&&E(b.Yy.forgotPassVerifyOTP({phone:null===M||void 0===M?void 0:M.phone,clientId:F,activeCode:e},(function(e,n){if(e)if(200300===n.code)K("/reset-pin?confirmCode=".concat(n.data.confirmCode));else if(200302===n.code)K("/verify-bank?type=cardNumber");else if(200304===n.code)K("/verify-bank?type=accountNumber");else if(200309===n.code){var t=(0,S.h9)(n.data.remainingTime||0);j.Z.alertContent={title:"B\u1ea1n \u0111\xe3 nh\u1eadp sai OTP ".concat(n.data.times||"nhi\u1ec1u"," l\u1ea7n"),subtitle:["Nh\u1eadn OTP m\u1edbi sau",t,"ho\u1eb7c li\xean h\u1ec7 CSKH ngay \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3."],firstButtonTitle:"Li\xean h\u1ec7 CSKH",secondButtonTitle:"Th\u1eed l\u1ea1i sau",reverseButton:!0,onClickFirstButton:function(){return(0,A.Z)()},onClickSecondButton:function(){var e;return null===(e=J.current)||void 0===e?void 0:e.close()}}}else{var i,o;null===(i=J.current)||void 0===i||i.setErrorMessage(n.message),null===(o=J.current)||void 0===o||o.showError()}else j.Z.alertContent={title:"L\u1ed7i k\u1ebft n\u1ed1i",subtitle:n.message,firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}})))},onResend:function(){E(b.Yy.sendActiveCode({phone:null===M||void 0===M?void 0:M.phone,clientId:F,type:B.Y.FORGOT_PASSWORD},(function(e,n){var t;if(e)if(204200===n.code)null===(t=J.current)||void 0===t||t.setExpired((new Date).getTime()+6e4);else if(204203===n.code){var i;null===(i=J.current)||void 0===i||i.setExpired((new Date).getTime()+(n.data.remainingTime||6e4))}else if(204207===n.code){var o=(0,S.h9)(n.data.remainingTime||0);j.Z.alertContent={title:"B\u1ea1n \u0111\xe3 nh\u1eadp sai OTP ".concat(n.data.times||"nhi\u1ec1u"," l\u1ea7n"),subtitle:["Nh\u1eadn OTP m\u1edbi sau",o,"ho\u1eb7c li\xean h\u1ec7 CSKH ngay \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3."],firstButtonTitle:"Li\xean h\u1ec7 CSKH",secondButtonTitle:"Th\u1eed l\u1ea1i sau",reverseButton:!0,onClickFirstButton:function(){return(0,A.Z)()},onClickSecondButton:function(){var e;return null===(e=J.current)||void 0===e?void 0:e.close()}}}else j.Z.alertContent={title:"L\u1ed7i k\u1ebft n\u1ed1i",subtitle:n.message,firstButtonTitle:"\u0110\xe3 hi\u1ec3u"}})))}})]})}},4238:function(e,n,t){t.d(n,{v:function(){return o},w:function(){return i}});var i=function(){var e=(new Date).getHours();return e>=0&&e<11?"auth.goodMorning":e<14?"auth.goodAfternoon1":e<18?"auth.goodAfternoon2":"auth.goodEvening"},o=function(e){var n=e.split(" ");return n.length<=2?e||"":n.slice(-2).join(" ")}}}]);
//# sourceMappingURL=599.977fe51a.chunk.js.map