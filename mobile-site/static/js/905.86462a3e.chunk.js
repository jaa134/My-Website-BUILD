"use strict";(self.webpackChunkmy_website_v2=self.webpackChunkmy_website_v2||[]).push([[905],{6818:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(1413),i=(n(2791),n(5772)),r=n(184),a=(0,i.Z)("Button"),l=function(e){var t,n=e.size,i=void 0===n?"medium":n,l=e.type,c=void 0===l?"filled":l,o=e.color,d=void 0===o?"purple":o,u=e.disabled,m=void 0!==u&&u,h=e.icon,v=void 0===h?null:h,x=e.label,f=void 0===x?null:x,C=e.children,p=void 0===C?null:C,j=e.onClick,b=void 0===j?null:j;return(0,r.jsxs)("button",(0,s.Z)((0,s.Z)({type:"button",className:a("",i,c,d,{disabled:m}),disabled:m},b&&!m&&{onClick:b}),{},{children:[v&&(0,r.jsx)("div",{className:a("icon"),children:v}),(0,r.jsx)("div",{className:a("text"),children:null!==(t=null!==p&&void 0!==p?p:f)&&void 0!==t?t:""})]}))}},3654:function(e,t,n){n.d(t,{Z:function(){return o}});var s=n(9439),i=n(2791),r=n(5772),a=n(184),l=function(){return(0,a.jsx)("svg",{viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M19.3729 4.20704C21.3058 -1.01667 28.6942 -1.01667 30.6271 4.20704L33.7658 12.6893C34.3735 14.3316 35.6684 15.6265 37.3107 16.2342L45.793 19.3729C51.0167 21.3058 51.0167 28.6942 45.793 30.6271L37.3107 33.7658C35.6684 34.3735 34.3735 35.6684 33.7658 37.3107L30.6271 45.793C28.6942 51.0167 21.3058 51.0167 19.3729 45.793L16.2342 37.3107C15.6265 35.6684 14.3316 34.3735 12.6893 33.7658L4.20704 30.6271C-1.01667 28.6942 -1.01667 21.3058 4.20704 19.3729L12.6893 16.2342C14.3316 15.6265 15.6265 14.3316 16.2342 12.6893L19.3729 4.20704Z"})})},c=(0,r.Z)("PageHeader"),o=function(e){var t=e.title,n=e.subtitle,r=e.description,o=(0,i.useState)(Math.ceil(2*Math.random())),d=(0,s.Z)(o,1)[0];return(0,a.jsx)("div",{className:c("","pos-".concat(d)),children:(0,a.jsxs)("div",{className:c("container"),children:[(0,a.jsxs)("div",{className:c("title"),children:[(0,a.jsx)(l,{}),(0,a.jsx)(l,{}),(0,a.jsx)("div",{children:t})]}),(0,a.jsx)("div",{className:c("subtitle"),children:n}),(0,a.jsx)("div",{className:c("description"),children:r})]})})}},7950:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var s=n(5772),i=n(184),r=(0,s.Z)("LineSplit"),a=function(){return(0,i.jsx)("div",{className:r(),children:(0,i.jsx)("svg",{viewBox:"0 -15 1920 100",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M-15 46.0848C-15 46.0848 134.092 28.6835 230 29.0848C320.454 29.4632 370.546 45.6106 461 46.0848C614.635 46.8901 698.801 -9.01449 852 2.58477C918.422 7.61384 954.389 20.9262 1020.5 29.0848C1100.23 38.9237 1145.17 46.6256 1225.5 46.0848C1299.8 45.5845 1340.79 25.3823 1415 29.0848C1493.56 33.0042 1534.17 61.472 1612.5 68.5848C1732.22 79.4554 1919.5 46.0848 1919.5 46.0848"})})})}},8905:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var s=n(2791),i=n(5772),r=n(3654),a=n(7950),l=n(4165),c=n(5861),o=n(7250),d="notifyContainer",u=(0,i.Z)("Notification"),m=function(){var e=document.getElementById(d);return e||((e=document.createElement("div")).setAttribute("id",d),e.setAttribute("class",u("container")),document.body.appendChild(e),e)},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,s=m(),i=document.createElement("div");i.setAttribute("class",u()),i.style.setProperty("transition-duration","".concat(n,"ms"));var r=document.createElement("div");r.setAttribute("class",u("message")),r.innerText=e;var a=document.createElement("div");a.setAttribute("class",u("close")),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>',i.appendChild(r),i.appendChild(a),s.appendChild(i);var l=function(){i.setAttribute("class",u("","closed")),setTimeout((function(){s.removeChild(i)}),n)},c=setTimeout((function(){l()}),t);a.addEventListener("click",(function(){clearTimeout(c),l()}))},v=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:return e.abrupt("return",!0);case 6:e.prev=6,e.t0=e.catch(0),console.error("Failed to copy text.");case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),x=v,f=n(184),C=function(){return(0,f.jsx)("svg",{viewBox:"0 0 38 35",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M30.0833 0H7.91667C5.81781 0.00252614 3.80563 0.841403 2.32151 2.33262C0.837396 3.82384 0.00251411 5.84564 0 7.95455L0 27.0455C0.00251411 29.1544 0.837396 31.1762 2.32151 32.6674C3.80563 34.1586 5.81781 34.9975 7.91667 35H30.0833C32.1822 34.9975 34.1944 34.1586 35.6785 32.6674C37.1626 31.1762 37.9975 29.1544 38 27.0455V7.95455C37.9975 5.84564 37.1626 3.82384 35.6785 2.33262C34.1944 0.841403 32.1822 0.00252614 30.0833 0ZM7.91667 3.18182H30.0833C31.0314 3.18369 31.9572 3.47059 32.7417 4.0056C33.5261 4.5406 34.1333 5.29923 34.485 6.18386L22.3598 18.3686C21.4675 19.2616 20.2594 19.763 19 19.763C17.7406 19.763 16.5325 19.2616 15.6402 18.3686L3.515 6.18386C3.86674 5.29923 4.47389 4.5406 5.25833 4.0056C6.04276 3.47059 6.96859 3.18369 7.91667 3.18182ZM30.0833 31.8182H7.91667C6.65689 31.8182 5.44871 31.3153 4.55791 30.4203C3.66711 29.5252 3.16667 28.3113 3.16667 27.0455V10.3409L13.4013 20.6182C14.8875 22.1077 16.9009 22.9442 19 22.9442C21.0991 22.9442 23.1125 22.1077 24.5987 20.6182L34.8333 10.3409V27.0455C34.8333 28.3113 34.3329 29.5252 33.4421 30.4203C32.5513 31.3153 31.3431 31.8182 30.0833 31.8182Z",fill:"#640DFB"})})},p=function(){return(0,f.jsxs)("svg",{viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsxs)("g",{clipPath:"url(#clip0_29_326)",children:[(0,f.jsx)("path",{d:"M21 10.5C19.6155 10.5 18.2622 10.9105 17.111 11.6797C15.9599 12.4489 15.0627 13.5421 14.5328 14.8212C14.003 16.1003 13.8644 17.5078 14.1345 18.8656C14.4046 20.2235 15.0713 21.4708 16.0503 22.4497C17.0292 23.4287 18.2765 24.0954 19.6344 24.3655C20.9922 24.6356 22.3997 24.497 23.6788 23.9672C24.9579 23.4373 26.0511 22.5401 26.8203 21.389C27.5895 20.2378 28 18.8845 28 17.5C28 15.6435 27.2625 13.863 25.9498 12.5503C24.637 11.2375 22.8565 10.5 21 10.5ZM21 21C20.3078 21 19.6311 20.7947 19.0555 20.4101C18.4799 20.0256 18.0313 19.4789 17.7664 18.8394C17.5015 18.1999 17.4322 17.4961 17.5673 16.8172C17.7023 16.1383 18.0356 15.5146 18.5251 15.0251C19.0146 14.5356 19.6383 14.2023 20.3172 14.0673C20.9961 13.9322 21.6999 14.0015 22.3394 14.2664C22.9789 14.5313 23.5256 14.9799 23.9101 15.5555C24.2947 16.1311 24.5 16.8078 24.5 17.5C24.5 18.4283 24.1313 19.3185 23.4749 19.9749C22.8185 20.6313 21.9283 21 21 21Z"}),(0,f.jsx)("path",{d:"M21.0001 42.0001C19.5265 42.0076 18.0725 41.662 16.7599 40.9922C15.4473 40.3223 14.3144 39.3478 13.4558 38.1501C6.78656 28.9503 3.40381 22.0343 3.40381 17.5928C3.40381 12.926 5.25769 8.45034 8.55763 5.1504C11.8576 1.85047 16.3332 -0.00341797 21.0001 -0.00341797C25.6669 -0.00341797 30.1425 1.85047 33.4425 5.1504C36.7424 8.45034 38.5963 12.926 38.5963 17.5928C38.5963 22.0343 35.2136 28.9503 28.5443 38.1501C27.6858 39.3478 26.5528 40.3223 25.2402 40.9922C23.9276 41.662 22.4737 42.0076 21.0001 42.0001ZM21.0001 3.81683C17.3468 3.821 13.8443 5.2741 11.2611 7.85736C8.67783 10.4406 7.22473 13.9431 7.22056 17.5963C7.22056 21.1138 10.5333 27.6186 16.5463 35.9118C17.0568 36.6149 17.7265 37.1872 18.5006 37.5818C19.2747 37.9764 20.1312 38.1821 21.0001 38.1821C21.8689 38.1821 22.7255 37.9764 23.4996 37.5818C24.2737 37.1872 24.9433 36.6149 25.4538 35.9118C31.4668 27.6186 34.7796 21.1138 34.7796 17.5963C34.7754 13.9431 33.3223 10.4406 30.739 7.85736C28.1558 5.2741 24.6533 3.821 21.0001 3.81683Z"})]}),(0,f.jsx)("defs",{children:(0,f.jsx)("clipPath",{id:"clip0_29_326",children:(0,f.jsx)("rect",{width:"42",height:"42"})})})]})},j=function(){return(0,f.jsx)("svg",{viewBox:"0 0 32 46",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M9.4375 45.35H22.5625C27.4002 45.35 31.35 41.4992 31.35 36.75V9.25C31.35 4.50083 27.4002 0.65 22.5625 0.65H9.4375C4.59978 0.65 0.65 4.50083 0.65 9.25V36.75C0.65 41.4992 4.59978 45.35 9.4375 45.35ZM3.225 9.25C3.225 5.91234 6.00459 3.18333 9.4375 3.18333H22.5625C25.9954 3.18333 28.775 5.91234 28.775 9.25V36.75C28.775 40.0877 25.9954 42.8167 22.5625 42.8167H9.4375C6.00459 42.8167 3.225 40.0877 3.225 36.75V9.25ZM20.1 38.5833C20.1 37.8767 19.5158 37.3167 18.8125 37.3167H13.1875C12.4842 37.3167 11.9 37.8767 11.9 38.5833C11.9 39.29 12.4842 39.85 13.1875 39.85H18.8125C19.5158 39.85 20.1 39.29 20.1 38.5833Z",strokeWidth:"0.7"})})},b=(0,i.Z)("OptionsSection"),g=function(){var e=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:if(!e.sent){e.next=6;break}h("Copied to clipboard!"),e.next=7;break;case 6:h("Copying failed!");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=[{icon:(0,f.jsx)(j,{}),label:"Phone",value:o.UE},{icon:(0,f.jsx)(C,{}),label:"Email",value:o.PN},{icon:(0,f.jsx)(p,{}),label:"In Person",value:o.Ct}].map((function(t){return(0,f.jsxs)("div",{className:b("option"),onClick:function(){e(t.value)},children:[(0,f.jsx)("div",{className:b("icon"),children:t.icon}),(0,f.jsxs)("div",{className:b("details"),children:[(0,f.jsx)("div",{className:b("label"),children:t.label}),(0,f.jsx)("div",{className:b("value"),children:t.value})]})]},t.label)}));return(0,f.jsx)("div",{className:b(),children:t})},w=n(9439),N=n(7530),Z=n(8007),k=n(6818),y=n(8029),L=(0,i.Z)("FormSection"),H=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,A=/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,M=function(){var e=(0,s.useRef)(null),t=(0,s.useRef)(null),n=(0,s.useRef)(null),i=(0,s.useRef)(null),r=(0,s.useRef)(null),a=(0,s.useState)(!1),l=(0,w.Z)(a,2),c=l[0],o=l[1],d=(0,s.useState)(!0),u=(0,w.Z)(d,2),m=u[0],v=u[1],x=(0,s.useState)(!0),C=(0,w.Z)(x,2),p=C[0],j=C[1],b=(0,s.useState)(!0),g=(0,w.Z)(b,2),M=g[0],_=g[1],S=(0,s.useState)(!0),E=(0,w.Z)(S,2),P=E[0],z=E[1];return(0,f.jsxs)("div",{className:L(),children:[(0,f.jsx)("div",{className:L("title"),children:"Leave a Message"}),(0,f.jsx)("div",{className:L("subtitle"),children:"and I'll get back to you ASAP"}),(0,f.jsxs)("div",{className:L("form"),children:[c&&(0,f.jsx)("div",{className:L("form-loader"),children:(0,f.jsx)(y.Z,{})}),(0,f.jsxs)("div",{className:L("form-row"),children:[(0,f.jsx)("input",{ref:t,className:L("form-element",{invalid:!m}),type:"text",placeholder:"Name",autoComplete:"nope",disabled:c}),(0,f.jsx)("input",{ref:n,className:L("form-element",{invalid:!p}),type:"text",placeholder:"Email",autoComplete:"nope",disabled:c}),(0,f.jsx)("input",{ref:i,className:L("form-element",{invalid:!M}),type:"text",placeholder:"Phone",autoComplete:"nope",disabled:c})]}),(0,f.jsx)("div",{className:L("form-row"),children:(0,f.jsx)("textarea",{ref:r,className:L("form-element",{invalid:!P}),rows:10,autoComplete:"nope",disabled:c})}),(0,f.jsx)("div",{className:L("form-row"),children:(0,f.jsx)(k.Z,{size:"medium",type:"filled",disabled:c,label:"Send",onClick:function(){if(t.current&&n.current&&i.current&&r.current){var s={from_name:t.current.value,contact_email:n.current.value,contact_phone:i.current.value,message:r.current.value,"g-recaptcha-response":null};if(function(e){var t=!!e.from_name,n=H.test(e.contact_email),s=A.test(e.contact_phone),i=!!e.message;return v(t),j(n),_(s),z(i),t&&n&&s&&i}(s))if(e.current){o(!0);e.current.executeAsync().then((function(a){s["g-recaptcha-response"]=a,N.ZP.send("service_f6vq4q1","template_stiymyn",s,"tHKpunSrvx009HOfP").then((function(){h("Your email was sent to me!"),t.current&&n.current&&i.current&&r.current&&(t.current.value="",n.current.value="",i.current.value="",r.current.value=""),e.current&&e.current.reset()}),(function(e){h("Failed to send email!"),console.error(e)})).finally((function(){o(!1)}))}),(function(e){h("Failed CAPTCHA test!"),console.error(e),o(!1)}))}else h("Could not perform CAPTCHA test!");else h("Form validation failed!")}else h("Form not found!")}})})]}),(0,f.jsx)(Z.Z,{ref:e,size:"invisible",sitekey:"6Ldf9YYkAAAAAPP_-PKo0jycyXU-yrgkdz1SCl8Q"})]})},_=n(1664),S=n(4930),E=n(4408),P=n(5559),z=n(7719),B=(0,i.Z)("SocialsSection"),T=function(){return(0,f.jsxs)("div",{className:B(),children:[(0,f.jsxs)("div",{className:B("title"),children:["Social Media",(0,f.jsx)("span",{className:B("symbol"),children:"{"})]}),(0,f.jsxs)("div",{className:B("socials"),children:[(0,f.jsx)("div",{className:B("item-container"),children:(0,f.jsxs)("a",{className:B("item","linkedin"),href:o.rU.LinkedIn,target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(P.Z,{}),(0,f.jsx)("div",{className:B("handle"),children:o.HH.LinkedIn})]})}),(0,f.jsx)("div",{className:B("item-container"),children:(0,f.jsxs)("a",{className:B("item","github"),href:o.rU.GitHub,target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(S.Z,{}),(0,f.jsx)("div",{className:B("handle"),children:o.HH.GitHub})]})}),(0,f.jsx)("div",{className:B("item-container"),children:(0,f.jsxs)("a",{className:B("item","facebook"),href:o.rU.Facebook,target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(_.Z,{}),(0,f.jsx)("div",{className:B("handle"),children:o.HH.Facebook})]})}),(0,f.jsx)("div",{className:B("item-container"),children:(0,f.jsxs)("a",{className:B("item","instagram"),href:o.rU.Instagram,target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(E.Z,{}),(0,f.jsx)("div",{className:B("handle"),children:o.HH.Instagram})]})}),(0,f.jsx)("div",{className:B("item-container"),children:(0,f.jsxs)("a",{className:B("item","twitter"),href:o.rU.Twitter,target:"_blank",rel:"noreferrer",children:[(0,f.jsx)(z.Z,{}),(0,f.jsx)("div",{className:B("handle"),children:o.HH.Twitter})]})})]})]})},F=n(5671),I=n(3144),R=n(1291),U=n(7760),V=n(9476),G=new URL(n(7138),n.b).href,O=39.613319,Y=-105.016647,D=(0,i.Z)("ContactGlobeScene"),W=function(){function e(t,n,s,i){(0,F.Z)(this,e),this.mountEl=void 0,this.globe=void 0,this.onLoadError=void 0,this.mountEl=t,this.globe=(0,R.Z)(),this.globe.height(n),this.globe.width(s),this.onLoadError=i}return(0,I.Z)(e,[{key:"init",value:function(){var e=this;this.globe(this.mountEl).backgroundColor("rgba(0,0,0,0)").atmosphereColor("rgba(100,13,247,1)").globeMaterial(new U.YBo({color:1311281})).showGlobe(!0).showAtmosphere(!0).pointOfView({lat:O,lng:Y,altitude:2.25}),this.globe.controls().enableZoom=!1,this.globe.controls().enableRotate=!1,fetch(G).then((function(e){return e.json()})).then((function(t){if(!t.objects.land)throw new Error("Globe JSON is malformed!");var n=V.Z(t,t.objects.land);e.globe.polygonsData(n.features).polygonCapMaterial(new U.YBo({color:6557179,side:U.ehD})).polygonSideColor((function(){return"rgba(0,0,0,0)"}))})).catch(this.onLoadError);var t=[{lat:O,lng:Y}];this.globe.htmlElementsData(t).htmlElement((function(){var e=document.createElement("div");return e.innerHTML='<div class="'.concat(D("marker-text"),'">Littleton, CO</div>').concat('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>'),e.className=D("marker"),e}))}},{key:"destroy",value:function(){this.globe._destructor()}}]),e}(),$=(0,i.Z)("ContactGlobeSection"),q=function(){var e=(0,s.useRef)(null);return(0,s.useEffect)((function(){var t=null;if(e.current){(t=new W(e.current,600,600,(function(){h("Failed to load globe assets!")}))).init()}return function(){var e;null===(e=t)||void 0===e||e.destroy()}}),[]),(0,f.jsxs)("div",{className:$(),children:[(0,f.jsxs)("div",{className:$("title"),children:["Let's Meet For Coffee",(0,f.jsx)("span",{className:$("symbol"),children:"{"})]}),(0,f.jsx)("div",{className:$("subtitle"),children:"Schedule a meeting with me! If I'm not in the mountains hiking, camping, rock climbing, or skiing, then I would love to chat."}),(0,f.jsx)("div",{ref:e,className:$("globe")})]})},K=(0,i.Z)("ContactPage"),J=function(){return(0,f.jsxs)("div",{className:K(),children:[(0,f.jsx)("div",{className:K("header"),children:(0,f.jsx)(r.Z,{title:"Contact Me",subtitle:"Let\u2019s Work Together",description:"Want to get in touch? Here's how you can reach me."})}),(0,f.jsx)("div",{className:K("line-split"),children:(0,f.jsx)(a.Z,{})}),(0,f.jsx)("div",{className:K("options"),children:(0,f.jsx)(g,{})}),(0,f.jsx)("div",{className:K("form"),children:(0,f.jsx)(M,{})}),(0,f.jsx)("div",{className:K("socials"),children:(0,f.jsx)(T,{})}),(0,f.jsx)("div",{className:K("globe"),children:(0,f.jsx)(q,{})})]})}},7138:function(e,t,n){e.exports=n.p+"static/media/globe.28399e41de2157391e9c.json"}}]);
//# sourceMappingURL=905.86462a3e.chunk.js.map