(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{103:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},130:function(e,t){},131:function(e,t){},132:function(e,t){},133:function(e,t){},134:function(e,t){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(60),s=n.n(i),o=n(35),r=n(27),l=n(17),j=n(90),b=n.n(j),d=n(91),h=n.n(d),u=n(92),m=n.n(u),x=n(93),O=n.n(x),f=n(94),p=n.n(f),g=n(95),v=n.n(g),w=n(96),N=n.n(w),y=n(97),k=n.n(y),C=n(98),I=n.n(C),S=n(61),A=n.n(S),E=n(19),H="/",P="/experience",T="/skills",M="/employment",L="/projects",R="/documents",B="/education",_="/resume",D="/cv",J="/contact",q="+1 636 699-7344",V="dev@jacob-alspaw.com",G="https://www.linkedin.com/in/jacob-alspaw",F="https://github.com/jaa134",U="https://www.facebook.com/jacobalexander.alspaw",W="https://www.instagram.com/jacobalspaw",z="https://twitter.com/JacobAlspaw",K="@Jacob Alspaw",X="@jaa134",Q="@jacobalexander.alspaw",Y="@jacobalspaw",Z="@JacobAlspaw",$={RESUME:{name:"Alspaw-Jacob Resume.pdf",numPages:1},CV:{name:"Alspaw-Jacob CV.pdf",numPages:3}};function ee(e,t){return"".concat(e,"--").concat(t)}function te(e){return function(t){if("function"===typeof t)return t(e);var n=[],a=[];if(Array.isArray(t))t.forEach((function(t){var n=e+(t?"__".concat(t):"");a.push(n)}));else{var c=e+(t?"__".concat(t):"");a.push(c)}a.forEach((function(e){n.push(e)}));for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return s.forEach((function(e){"string"===typeof e&&a.forEach((function(t){n.push(ee(t,e))})),"object"===typeof e&&Object.keys(e).forEach((function(t){e[t]&&a.forEach((function(e){n.push(ee(e,t))}))}))})),n.join(" ")}}var ne=/\/\/+/g,ae=function(e){var t=e.replace(ne,"/");return t.endsWith("/")&&(t=t.substring(0,t.length-1)),t},ce=function(e,t){return ae(e)===ae(t)},ie=n(205),se=(n(103),n(9)),oe=te("MapModal"),re=function(e){var t=e.open,n=e.close;return Object(se.jsx)(ie.a,{className:oe(),open:t,modalLabel:"Contact information",modalHeading:"Where I'm located",primaryButtonText:"Open in Google Maps",secondaryButtonText:"Close",onRequestClose:n,onSecondarySubmit:n,onRequestSubmit:function(){window.open("https://www.google.com/maps/place/Littleton,+CO","_blank")},children:Object(se.jsx)("iframe",{title:"gmap-frame",height:"500",id:"gmap_canvas",src:"https://maps.google.com/maps?hl=en&q=Ken%20Caryl%20Ranch%20Community%20Park%20Littleton+(Littleton,%20Colorado)&t=&z=12&ie=UTF8&iwloc=B&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"})})},le=n(207),je=n(204),be=(n(116),te("PhoneModal")),de=function(e){var t=e.open,n=e.close;return Object(se.jsxs)(ie.a,{className:be(),open:t,modalLabel:"Contact information",modalHeading:"My phone number",primaryButtonText:"Call me",secondaryButtonText:"Close",onRequestClose:n,onSecondarySubmit:n,onRequestSubmit:function(){window.open("tel:+16366997344")},children:[Object(se.jsxs)("div",{className:be("phone"),children:[q,Object(se.jsx)(le.a,{onClick:function(){navigator.clipboard.writeText(q)}})]}),Object(se.jsx)(je.a,{kind:"info",title:"Hey, you!",subtitle:"Feel free to text me anytime, but please refrain from calling me during non-business hours",statusIconDescription:"Information",role:"alert",hideCloseButton:!0,lowContrast:!0})]})},he=(n(117),te("EmailModal")),ue=function(e){var t=e.open,n=e.close;return Object(se.jsxs)(ie.a,{className:he(),open:t,modalLabel:"Contact information",modalHeading:"My email address",primaryButtonText:"Send email",secondaryButtonText:"Close",onRequestClose:n,onSecondarySubmit:n,onRequestSubmit:function(){window.open("mailto:".concat(V))},children:[Object(se.jsxs)("div",{className:he("email"),children:[V,Object(se.jsx)(le.a,{onClick:function(){navigator.clipboard.writeText(V)}})]}),Object(se.jsx)(je.a,{kind:"info",title:"Heads up!",subtitle:Object(se.jsxs)("span",{children:["If you have trouble reaching me at the above email, try my secondary email: ",Object(se.jsx)("strong",{children:"jacob.alspaw@case.edu"})]}),statusIconDescription:"Information",role:"alert",hideCloseButton:!0,lowContrast:!0})]})},me=n(2),xe=n.n(me),Oe=(n(118),te("Tabs")),fe=(xe.a.shape({text:xe.a.string.isRequired,href:xe.a.string.isRequired}),function(e){var t=e.tabs,n=Object(l.f)();return Object(se.jsx)("div",{className:Oe(),children:t.map((function(e){return Object(se.jsx)(o.b,{className:Oe("tab",{active:ce(e.href,n.pathname)}),to:e.href,onClick:function(){console.error("hi")},children:e.text})}))})}),pe=(n(119),te("PageBase")),ge=function(e){var t=e.title,n=e.subtitle,a=e.tabs,c=e.wip,i=e.children;return Object(se.jsxs)("div",{className:pe(),children:[Object(se.jsxs)("div",{className:pe("heading"),children:[Object(se.jsxs)("div",{className:pe("page-info"),children:[Object(se.jsx)("h1",{className:pe("title"),children:t}),n&&Object(se.jsx)("h4",{className:pe("subtitle"),children:n})]}),(null===a||void 0===a?void 0:a.length)>0&&Object(se.jsx)(fe,{tabs:a})]}),Object(se.jsxs)("div",{className:pe("content"),children:[c&&Object(se.jsx)(je.a,{className:pe("construction-notification"),kind:"info",title:"Heads up!",subtitle:"This content is still being developed.",statusIconDescription:"Information",role:"alert",hideCloseButton:!0,lowContrast:!0}),i]})]})};ge.defaultProps={subtitle:null,children:null,wip:!1};var ve=ge,we=(n(120),te("HomePage")),Ne=function(){return Object(se.jsx)(ve,{title:"Profile",subtitle:"Here's what you should know about me...",children:Object(se.jsxs)("div",{className:we(),children:[Object(se.jsx)("img",{className:we("profile-image"),src:"images/profile.jpg",alt:"profile"}),Object(se.jsxs)("div",{className:we("info"),children:[Object(se.jsx)("div",{className:we("name"),children:"Jacob Alspaw"}),Object(se.jsxs)("div",{className:we("jobs"),children:[Object(se.jsx)("div",{className:we("title"),children:"UI/UX LEAD DEVELOPER"}),Object(se.jsx)("div",{className:we("title"),children:"FULL-STACK SOFTWARE DEVELOPER"})]}),Object(se.jsx)("div",{className:we("statement"),children:"This is me. I am a software developer. I like to code and I do it fast. This is me. I am a software developer. I like to code and I do it fast. This is me. I am a software developer. I like to code and I do it fast. This is me. I am a software developer. I like to code and I do it fast."})]})]})})},ye=(n(121),function(){return Object(se.jsx)("div",{})}),ke=(n(122),function(){return Object(se.jsx)("div",{})}),Ce=(n(123),function(){return Object(se.jsx)("div",{})}),Ie=(n(124),function(){return Object(se.jsx)("div",{})}),Se=function(){return Object(se.jsx)(ve,{title:"Experience",subtitle:"Take a closer look at what I've been up to",tabs:[{text:"Skills",href:"".concat(P).concat(T)},{text:"Employment",href:"".concat(P).concat(M)},{text:"Projects",href:"".concat(P).concat(L)},{text:"Education",href:"".concat(P).concat(B)}],children:Object(se.jsxs)(l.d,{children:[Object(se.jsx)(l.b,{path:"/",element:Object(se.jsx)(l.a,{replace:!0,to:"".concat(P).concat(T)})}),Object(se.jsx)(l.b,{path:T,element:Object(se.jsx)(ye,{})}),Object(se.jsx)(l.b,{path:M,element:Object(se.jsx)(ke,{})}),Object(se.jsx)(l.b,{path:L,element:Object(se.jsx)(Ce,{})}),Object(se.jsx)(l.b,{path:B,element:Object(se.jsx)(Ie,{})}),Object(se.jsx)(l.b,{path:"*",element:Object(se.jsx)(l.a,{replace:!0,to:H})})]})})},Ae=n(57),Ee=n(78),He=n(202),Pe=n(79),Te=n.n(Pe),Me=n(80),Le=n.n(Me),Re=(n(149),te("PdfViewToolbar")),Be=function(e){var t=e.documentUrl,n=e.numPages;return Object(se.jsx)("div",{className:Re(),children:Object(se.jsxs)("div",{className:Re("wrapper"),style:{maxWidth:1e3},children:[Object(se.jsxs)("div",{className:Re("pagination-count"),children:[n," ",n>1?"pages":"page"]}),Object(se.jsxs)("div",{className:Re("controls"),children:[Object(se.jsxs)(He.a,{className:Re("button"),href:t,target:"_blank",rel:"noreferrer",size:"lg",children:[Object(se.jsx)(Te.a,{})," Full screen"]}),Object(se.jsxs)(He.a,{className:Re("button"),href:t,download:!0,size:"lg",children:[Object(se.jsx)(Le.a,{})," Download"]})]})]})})},_e=n(203),De=(n(150),te("PdfViewLoading")),Je=function(e){var t=e.numPages,n=e.width,a=e.height;return Array.from(new Array(t),(function(e,t){return Object(se.jsx)("div",{className:De("page"),style:{width:n,height:a},children:Object(se.jsx)(_e.a,{withOverlay:!1})},"page_".concat(t+1))}))},qe=(n(151),te("PdfViewError")),Ve=function(){return Object(se.jsx)(je.a,{className:qe(),kind:"error",title:"Oops! Something went wrong.",subtitle:"The requested document could not be retrieved.",statusIconDescription:"Information",role:"alert",hideCloseButton:!0,lowContrast:!0})};n(152);Ae.c.GlobalWorkerOptions.workerSrc="pdf.worker.min.js";var Ge=te("PdfView"),Fe=function(e){var t=e.document,n=t.name,c=t.numPages,i=Object(a.useState)(!1),s=Object(r.a)(i,2),o=s[0],l=s[1],j=function(){l(!0)},b="documents/".concat(n);return Object(se.jsxs)("div",{className:Ge(),children:[Object(se.jsx)(Be,{documentUrl:b,numPages:c}),Object(se.jsx)(Ee.SizeMe,{monitorWidth:!0,refreshRate:128,refreshMode:"debounce",children:function(e){var t,n=function(e){var t=Math.min(e-64,1e3);return{width:t,height:1.2935*t}}(e.size.width),a=n.width,i=n.height;return o||(t={height:c*i+16*(c-1)+64}),Object(se.jsx)("div",{style:t,children:Object(se.jsx)(Ae.a,{file:b,loading:Object(se.jsx)(Je,{numPages:c,width:a,height:i}),error:Object(se.jsx)(Ve,{}),onLoadError:j,children:Array.from(new Array(c),(function(e,t){return Object(se.jsx)(Ae.b,{renderTextLayer:!1,pageNumber:t+1,width:a},"page_".concat(t+1))}))})})}})]})},Ue=function(){return Object(se.jsx)(Fe,{document:$.RESUME})},We=function(){return Object(se.jsx)(Fe,{document:$.CV})},ze=function(){return Object(se.jsx)(ve,{title:"Documents",subtitle:"Review a summary of my greatest achievements",tabs:[{text:"Resume",href:"".concat(R).concat(_)},{text:"CV",href:"".concat(R).concat(D)}],children:Object(se.jsxs)(l.d,{children:[Object(se.jsx)(l.b,{path:"/",element:Object(se.jsx)(l.a,{replace:!0,to:"".concat(R).concat(_)})}),Object(se.jsx)(l.b,{path:_,element:Object(se.jsx)(Ue,{})}),Object(se.jsx)(l.b,{path:D,element:Object(se.jsx)(We,{})}),Object(se.jsx)(l.b,{path:"*",element:Object(se.jsx)(l.a,{replace:!0,to:H})})]})})},Ke=n(81),Xe=n.n(Ke),Qe=n(82),Ye=n.n(Qe),Ze=n(83),$e=n.n(Ze),et=n(84),tt=n.n(et),nt=n(85),at=n.n(nt),ct=n(86),it=n.n(ct),st=n(87),ot=n.n(st),rt=n(88),lt=n.n(rt),jt=n(89),bt=n.n(jt),dt=(n(153),te("ContactOption")),ht=function(e){var t=e.image,n=e.title,a=e.subtitle,c=e.children;return Object(se.jsxs)("div",{className:dt(),children:[Object(se.jsxs)("div",{className:dt("title"),children:[Object(se.jsx)("div",{className:dt("image"),children:t}),Object(se.jsx)("h3",{className:dt("name"),children:n})]}),Object(se.jsxs)("div",{className:dt("content"),children:[Object(se.jsx)("h4",{className:dt("subtitle"),children:a}),c]})]})},ut=(n(154),te("ContactsPage")),mt=function(e){return Object(se.jsxs)("div",{className:ut("info-wrapper"),children:[Object(se.jsx)("span",{children:e}),Object(se.jsx)(le.a,{onClick:function(){navigator.clipboard.writeText(e)}})]})},xt=function(e,t,n){return Object(se.jsxs)(He.a,{className:ut("social-tile"),href:e,target:"_blank",rel:"noreferrer",size:"lg",children:[n,Object(se.jsx)("div",{className:ut("social-handle"),children:t})]})},Ot=function(){return Object(se.jsx)(ve,{title:"Contacts",subtitle:"Want to get in touch? Here's how you can reach me...",children:Object(se.jsxs)("div",{className:ut(),children:[Object(se.jsx)(ht,{title:"Email",subtitle:"Check out this cool email address",image:Object(se.jsx)(Xe.a,{}),children:mt(V)}),Object(se.jsx)(ht,{title:"Phone",subtitle:"My phone is always on and in reach",image:Object(se.jsx)(Ye.a,{}),children:mt(q)}),Object(se.jsx)(ht,{title:"In person",subtitle:"I'm always open to meeting in person",image:Object(se.jsx)($e.a,{}),children:mt("Littleton, Colorado 80128")}),Object(se.jsx)(ht,{title:"Social media",subtitle:"Here are some links to my socials",image:Object(se.jsx)(tt.a,{}),children:Object(se.jsxs)("div",{className:ut("socials"),children:[xt(G,K,Object(se.jsx)(at.a,{})),xt(F,X,Object(se.jsx)(it.a,{})),xt(U,Q,Object(se.jsx)(ot.a,{})),xt(W,Y,Object(se.jsx)(lt.a,{})),xt(z,Z,Object(se.jsx)(bt.a,{}))]})})]})})},ft=(n(155),te("App")),pt=function(){return Object(se.jsx)("div",{className:ft(),children:Object(se.jsx)(A.a,{render:function(e){var t=e.isSideNavExpanded,n=e.onClickSideNavExpand,c=Object(l.f)(),i=Object(a.useState)(!1),s=Object(r.a)(i,2),o=s[0],j=s[1],d=Object(a.useState)(!1),u=Object(r.a)(d,2),x=u[0],f=u[1],g=Object(a.useState)(!1),w=Object(r.a)(g,2),y=w[0],C=w[1],S=Object(a.useState)(!1),A=Object(r.a)(S,2),T=A[0],M=A[1];return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(E.Header,{className:ft("header"),"aria-label":"Jacob Alspaw",children:[Object(se.jsx)(E.SkipToContent,{}),Object(se.jsx)(E.HeaderMenuButton,{"aria-label":"Open menu",onClick:n,isActive:t}),Object(se.jsx)("img",{className:ft("profile-image"),src:"images/profile-circle--small.png",alt:"profile"}),Object(se.jsx)(E.HeaderName,{href:"#",prefix:"Jacob",children:"[Alspaw]"}),Object(se.jsxs)(E.HeaderNavigation,{"aria-label":"Jacob [Alspaw]",children:[Object(se.jsx)(E.HeaderMenuItem,{href:"#".concat(H),isActive:ce(H,c.pathname),children:"Profile"}),Object(se.jsx)(E.HeaderMenuItem,{href:"#".concat(P),isActive:ce(H,c.pathname),children:"Experience"}),Object(se.jsx)(E.HeaderMenuItem,{href:"#".concat(R),isActive:ce(H,c.pathname),children:"Documents"}),Object(se.jsx)(E.HeaderMenuItem,{href:"#".concat(J),isActive:ce(H,c.pathname),children:"Contact"})]}),Object(se.jsxs)(E.HeaderGlobalBar,{children:[Object(se.jsx)(E.HeaderGlobalAction,{"aria-label":"Location",onClick:function(){j(!0)},children:Object(se.jsx)(b.a,{})}),Object(se.jsx)(E.HeaderGlobalAction,{"aria-label":"Phone",onClick:function(){f(!0)},children:Object(se.jsx)(h.a,{})}),Object(se.jsx)(E.HeaderGlobalAction,{"aria-label":"Email",onClick:function(){C(!0)},children:Object(se.jsx)(m.a,{})}),Object(se.jsx)(E.HeaderGlobalAction,{"aria-label":"Applications",tooltipAlignment:"end",isActive:T,onClick:function(){M(!T)},children:Object(se.jsx)(O.a,{})})]}),Object(se.jsx)(E.SideNav,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(se.jsx)(E.SideNavItems,{children:Object(se.jsxs)(E.HeaderSideNavItems,{children:[Object(se.jsx)(E.HeaderMenuItem,{href:"#".concat(H),isActive:ce(H,c.pathname),children:"Profile"}),Object(se.jsx)(E.HeaderMenuItem,{href:"#".concat(P),isActive:ce(H,c.pathname),children:"Experience"}),Object(se.jsx)(E.HeaderMenuItem,{href:"#".concat(R),isActive:ce(H,c.pathname),children:"Documents"}),Object(se.jsx)(E.HeaderMenuItem,{href:"#".concat(J),isActive:ce(H,c.pathname),children:"Contact"})]})})}),Object(se.jsx)(E.HeaderPanel,{"aria-label":"Header panel",expanded:T,children:Object(se.jsxs)(E.Switcher,{"aria-label":"Switcher container",children:[Object(se.jsxs)(E.SwitcherItem,{"aria-label":"Linkedin",target:"_blank",href:G,children:[Object(se.jsx)(p.a,{})," Linkedin"]}),Object(se.jsxs)(E.SwitcherItem,{"aria-label":"Github",target:"_blank",href:F,children:[Object(se.jsx)(v.a,{})," Github"]}),Object(se.jsxs)(E.SwitcherItem,{"aria-label":"Facebook",target:"_blank",href:U,children:[Object(se.jsx)(N.a,{})," Facebook"]}),Object(se.jsxs)(E.SwitcherItem,{"aria-label":"Instagram",target:"_blank",href:W,children:[Object(se.jsx)(k.a,{})," Instagram"]}),Object(se.jsxs)(E.SwitcherItem,{"aria-label":"Twitter",target:"_blank",href:z,children:[Object(se.jsx)(I.a,{})," Twitter"]})]})})]}),Object(se.jsxs)(E.Content,{id:"main-content",children:[Object(se.jsxs)(l.d,{children:[Object(se.jsx)(l.b,{path:H,element:Object(se.jsx)(Ne,{}),exact:!0}),Object(se.jsx)(l.b,{path:"".concat(P,"/*"),element:Object(se.jsx)(Se,{})}),Object(se.jsx)(l.b,{path:"".concat(R,"/*"),element:Object(se.jsx)(ze,{})}),Object(se.jsx)(l.b,{path:J,element:Object(se.jsx)(Ot,{})}),Object(se.jsx)(l.b,{path:"*",element:Object(se.jsx)(l.a,{replace:!0,to:H})})]}),Object(se.jsx)(re,{open:o,close:function(){j(!1)}}),Object(se.jsx)(de,{open:x,close:function(){f(!1)}}),Object(se.jsx)(ue,{open:y,close:function(){C(!1)}})]})]})}})})};n(197);s.a.render(Object(se.jsx)(c.a.StrictMode,{children:Object(se.jsx)(o.a,{children:Object(se.jsx)(pt,{})})}),document.getElementById("root"))},66:function(e,t){}},[[198,1,2]]]);
//# sourceMappingURL=main.cc1f599f.chunk.js.map