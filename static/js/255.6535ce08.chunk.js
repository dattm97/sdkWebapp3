"use strict";(self.webpackChunkpayme_mini_app=self.webpackChunkpayme_mini_app||[]).push([[255],{25255:function(e,i,n){n.r(i),n.d(i,{default:function(){return D}});var t=n(50228),r=n(62812),s=n(75579),o=n(66030),l=n(57380),c=n(64740),a=n(22940),u=n(69745),d=n(45798),p=n(62038),x=n(72791),h=n(33168),v=n(57689),f=n(10964),m=n(80184);var j=function(e){var i=e.title;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{pt:1}),(0,m.jsxs)(p.hs,{width:"100%",children:[(0,m.jsx)(f.Z,{src:"images/iconCheck.svg",duration:0,width:24,fit:"contain",bgColor:"transparent"}),(0,m.jsx)(r.Z,{variant:"subtitle1",flex:1,display:"flex",children:i})]})]})};var g=function(e){var i=e.title,n=e.number;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{pt:1}),(0,m.jsxs)(p.hs,{width:"100%",children:[(0,m.jsxs)(r.Z,{pl:.5,pr:.5,variant:"subtitle1",children:[n,"."]}),(0,m.jsx)(r.Z,{variant:"subtitle1",flex:1,display:"flex",children:i})]})]})},C=n(15671),k=n(43144),Z=n(32358),y=n(9462),b=new(function(){function e(){(0,C.Z)(this,e),this._openModal=new Z.x,this._requirePermission=new y.X({})}return(0,k.Z)(e,[{key:"openModal",set:function(e){this._openModal.next(e)}},{key:"requirePermission",get:function(){return this._requirePermission.getValue()},set:function(e){this._requirePermission.next(e)}}]),e}()),I=n(73915),w=n(1413),q=n(97073);var R=function(e){var i=e.image,n=e.index,t=e.value;return(0,m.jsxs)(p.hs,{width:"100%",alignItems:"center",pt:1.25,pb:1.25,children:[(0,m.jsx)(f.Z,{src:i,width:24,height:"auto",fit:"cover",duration:0}),(0,m.jsx)(p.hs,{pr:1}),(0,m.jsxs)(r.Z,{variant:"overline",fontSize:14,color:"text.caption",children:["".concat(n,". "),(null===t||void 0===t?void 0:t[0])||""," ",(0,m.jsxs)(r.Z,{variant:"overline",fontSize:14,color:"text.caption",fontWeight:"600",children:[(null===t||void 0===t?void 0:t[1])||""," "]}),(null===t||void 0===t?void 0:t[2])||""]})]})},P=function(){var e=(0,x.useRef)(null),i=(0,h.$)().t,n=[{index:1,image:"images/settingIcon.svg",value:[i("permission.goSetting.1"),i("permission.goSetting.2"),i("permission.goSetting.3")]},{index:2,image:"images/appIcon.svg",value:[i("permission.findPayME.1"),i("permission.findPayME.2")]},{index:1,image:"images/cameraIcon.svg",value:[i("permission.grandCamera.1"),i("permission.grandCamera.2")]}];return(0,x.useEffect)((function(){var i=b._requirePermission.subscribe((function(i){var n,t,r,s;i.isRequire?null===(n=e.current)||void 0===n||null===(t=n.open)||void 0===t||t.call(n):null===(r=e.current)||void 0===r||null===(s=r.close)||void 0===s||s.call(r)}));return function(){i.unsubscribe()}}),[]),(0,m.jsxs)(q.Z,{ref:e,title:i("permission.title"),children:[(0,m.jsx)(p.hs,{pt:2}),(0,m.jsxs)(r.Z,{variant:"overline",fontSize:14,color:"text.caption",children:[i("permission.subtitle1"),(0,m.jsx)(r.Z,{variant:"overline",fontSize:14,color:"text.caption",fontWeight:"600",children:i("permission.subtitle2")}),i("permission.subtitle3")]}),(0,m.jsx)(p.hs,{pt:2}),n.map((function(e){return(0,m.jsx)(R,(0,w.Z)({},e),e.index)})),(0,m.jsx)(p.hs,{pt:2}),(0,m.jsxs)(p.hs,{width:"100%",children:[(0,m.jsx)(s.Z,{variant:"outlined",fullWidth:!0,onClick:function(){var i,n;return null===(i=e.current)||void 0===i||null===(n=i.close)||void 0===n?void 0:n.call(i)},sx:{height:48,borderRadius:2.5},children:i("permission.skip")}),(0,m.jsx)(p.hs,{pr:2.5}),(0,m.jsx)(s.Z,{variant:"contained",fullWidth:!0,onClick:function(){var i,n;null===(i=e.current)||void 0===i||null===(n=i.close)||void 0===n||n.call(i),b.requirePermission={isRequire:!1},l.J.next({type:"jsOpenSetting",data:{}})},sx:{height:48,borderRadius:2.5},children:i("permission.allow")})]})]})},_=n(69291);var D=function(){var e,i,n,f,C=(0,c.CG)(o.Ty),k=(0,v.s0)(),Z=(0,h.$)().t;return(0,x.useEffect)((function(){(0,I.G)((0,_.Op)("images/photo_2022-10-10_15-30-10.jpg"))}),[]),window.nativePermissionStatus=function(e){"CAMERA"===e.type&&("BLOCKED"===e.state?b.requirePermission={isRequire:!0}:b.requirePermission={isRequire:!1})},(0,m.jsxs)(u.x,{children:[(0,m.jsx)(d.Z,{title:"KYC Introduce"}),(0,m.jsxs)(p.u3,{sx:{padding:2.5,paddingTop:"IOS"===(null===C||void 0===C||null===(e=C.platform)||void 0===e?void 0:e.toUpperCase())||"ANDROID"===(null===C||void 0===C||null===(i=C.platform)||void 0===i?void 0:i.toUpperCase())?0:2.5,paddingBottom:"IOS"===(null===C||void 0===C||null===(n=C.platform)||void 0===n?void 0:n.toUpperCase())||"ANDROID"===(null===C||void 0===C||null===(f=C.platform)||void 0===f?void 0:f.toUpperCase())?0:2.5,overflow:"scroll",scrollbar:"none"},display:"flex",flexDirection:"column",justifyContent:"space-between",children:[(0,m.jsxs)(t.Z,{children:[(0,m.jsx)(a.Z,{isIconBack:!0,onClick:function(){return k(-1)}}),(0,m.jsx)(t.Z,{sx:{paddingTop:2.5}}),(0,m.jsx)(r.Z,{variant:"h2",children:Z("kycIntroduce.title")}),(0,m.jsx)(t.Z,{sx:{paddingTop:1.5}}),(0,m.jsx)(j,{title:Z("kycIntroduce.check1")}),(0,m.jsx)(j,{title:Z("kycIntroduce.check2")}),(0,m.jsx)(j,{title:Z("kycIntroduce.check3")}),(0,m.jsx)(t.Z,{sx:{paddingTop:2.5}}),(0,m.jsx)(r.Z,{variant:"h4",textAlign:"left",children:Z("kycIntroduce.noteTitle")}),(0,m.jsx)(t.Z,{sx:{paddingTop:1}}),(0,m.jsx)(g,{title:Z("kycIntroduce.note1"),number:"1"}),(0,m.jsx)(g,{title:Z("kycIntroduce.note2"),number:"2"}),(0,m.jsx)(g,{title:Z("kycIntroduce.note3"),number:"3"}),(0,m.jsx)(g,{title:Z("kycIntroduce.note4"),number:"4"})]}),(0,m.jsx)(p.hs,{flexDirection:"column",width:"100%",children:(0,m.jsx)(s.Z,{variant:"contained",onClick:function(){b.requirePermission={isRequire:!0},l.J.next({type:"jsRequestCardKYC",data:{title:"Ch\u1ee5p m\u1eb7t tr\u01b0\u1edbc CMND/CCCD",type:"FRONT",description:"C\xe2n ch\u1ec9nh m\u1eb7t tr\u01b0\u1edbc CMND/CCCD v\xe0o gi\u1eefa khung."}}),(0,I.G)("jsRequestCardKYC")},children:Z("kycIntroduce.button")})}),(0,m.jsx)(P,{})]})]})}}}]);
//# sourceMappingURL=255.6535ce08.chunk.js.map