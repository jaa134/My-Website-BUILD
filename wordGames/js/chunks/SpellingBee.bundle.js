"use strict";(self.webpackChunkWordGames=self.webpackChunkWordGames||[]).push([[289],{1511:(e,t,n)=>{n.d(t,{ZP:()=>Z,nH:()=>x,BL:()=>_});var r=n(7294),i=n(5697),l=n.n(i),a=n(6446),o=n(7666),s=n(3797),A=n(243),c=n(1059),m=n(3379),u=n.n(m),d=n(7795),p=n.n(d),g=n(569),f=n.n(g),h=n(3565),C=n.n(h),y=n(9216),E=n.n(y),v=n(4589),w=n.n(v),b=n(9288),B={};B.styleTagTransform=w(),B.setAttributes=C(),B.insert=f().bind(null,"head"),B.domAPI=p(),B.insertStyleElement=E(),u()(b.Z,B),b.Z&&b.Z.locals&&b.Z.locals;var S=(0,c.Z)("WordListFileSelect"),_={SMALL:"Small",MEDIUM:"Medium",LARGE:"Large",ALL:"All"},x=function(e){var t=null;return e===_.SMALL?t=n.e(686).then(n.t.bind(n,6995,19)):e===_.MEDIUM?t=n.e(474).then(n.t.bind(n,8894,19)):e===_.LARGE?t=n.e(943).then(n.t.bind(n,9902,19)):e===_.ALL?t=n.e(495).then(n.t.bind(n,3185,19)):console.error("List size not recognized"),t},L=function(e){var t=e.value,n=e.onChange;return r.createElement(a.Z,{className:S(),variant:"filled",sx:{width:276,"& .MuiFilledInput-root":{backgroundColor:"#ffffff","& .MuiFilledInput-input":{backgroundColor:"#ffffff","&:hover, &.Mui-focused":{backgroundColor:"#ffffff"}}}}},r.createElement(o.Z,{id:S("label")},"List size"),r.createElement(A.Z,{labelId:S("label"),id:S("select"),value:t,onChange:n},r.createElement(s.Z,{value:_.SMALL},r.createElement("span",{className:S("size-name")},_.SMALL),r.createElement("span",{className:S("size-details")},"0.1 MB - 10k words")),r.createElement(s.Z,{value:_.MEDIUM},r.createElement("span",{className:S("size-name")},_.MEDIUM),r.createElement("span",{className:S("size-details")},"0.7 MB - 86k words")),r.createElement(s.Z,{value:_.LARGE},r.createElement("span",{className:S("size-name")},_.LARGE),r.createElement("span",{className:S("size-details")},"3.4 MB - 274k words")),r.createElement(s.Z,{value:_.ALL},r.createElement("span",{className:S("size-name")},_.ALL),r.createElement("span",{className:S("size-details")},"4.6 MB - 370k words"))))};L.propTypes={value:l().string.isRequired,onChange:l().func.isRequired};const Z=L},8557:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var r=n(7294),i=n(442),l=n(3155),a=n(6914),o=n(7720),s=n(1059),A=n(3425),c=n(1343),m=n(81),u=n(1511);const d=function(e,t,n){return t&&n.every((function(t){return!!t&&t!==e}))},p=function(e,t,n){var r=t+n.join(""),i=new RegExp("^[".concat(r,"]*").concat(t,"[").concat(r,"]*$"),"i"),l=[];return e.forEach((function(e){e.length>=4&&i.test(e)&&l.push(e)})),l},g=function(e,t){var n;return e.length<4?n=0:4===e.length?n=1:e.length>4&&(n=e.length,e.length>=t&&new Set(e.split("")).size===t&&(n+=7)),n};var f=n(5725),h=n(6501),C=n(2658),y=n(3379),E=n.n(y),v=n(7795),w=n.n(v),b=n(569),B=n.n(b),S=n(3565),_=n.n(S),x=n(9216),L=n.n(x),Z=n(4589),k=n.n(Z),N=n(7888),z={};z.styleTagTransform=k(),z.setAttributes=_(),z.insert=B().bind(null,"head"),z.domAPI=w(),z.insertStyleElement=L(),E()(N.Z,z),N.Z&&N.Z.locals&&N.Z.locals;var P=(0,s.Z)("SpellingBeeHowToPlay"),R={color:"rgb(1, 67, 97)",backgroundColor:"rgb(229, 246, 253)"};const I=function(){return r.createElement("div",{className:P()},r.createElement(f.ZP,{container:!0,spacing:2,alignItems:"stretch"},r.createElement(f.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.createElement(h.Z,{elevation:0,sx:R},r.createElement("div",{className:P("content")},r.createElement(C.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Description"),r.createElement(C.Z,{variant:"body1",gutterBottom:!0,component:"div"},'The game presents players with a grid of 7 letters arrayed in a honeycomb structure. The player scores points by using the letters to form words consisting of four or more letters. However, any words proposed by the player must include the letter at the center of the honeycomb. Scoring points leads to progressively higher praise for the player\'s effort, such as "Solid", "Amazing", and " Genius". Each puzzle is guaranteed to have at least one pangram, which award the player the largest number of points when found. If the player finds all of the possible words in a given puzzle, they achieve the title of "Queen Bee".')))),r.createElement(f.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,xl:6},r.createElement(h.Z,{elevation:0,sx:R},r.createElement("div",{className:P("content")},r.createElement(C.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Rules"),r.createElement(C.Z,{variant:"body1",component:"div"},r.createElement("ul",null,r.createElement("li",null,"Words must include the center letter."),r.createElement("li",null,"Words must contain at least four letters."),r.createElement("li",null,"Letters can be used more than once."),r.createElement("li",null,"The word list does not include words that are offensive, obscure, hyphenated or proper nouns."),r.createElement("li",null,"Each puzzle includes at least one “pangram,” which uses every letter at least once.")))))),r.createElement(f.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,xl:6},r.createElement(h.Z,{elevation:0,sx:R},r.createElement("div",{className:P("content")},r.createElement(C.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Solution"),r.createElement(C.Z,{variant:"body1",component:"div"},"Our goal is to maximize the completeness of the result set while minimizing the resource requirments that clients need to download and process larger word lists. By default, we consult a list of more than 10,000+ words to meet these requirments. We then test each word in the list against a specialized regular expression using the game letters. If you think words are missing from the solution, then try using a larger word list!"))))))};var q=n(5697),T=n.n(q),M=n(6486),F=n(461),j=n(7666),$=n(3797),O=n(6446),W=n(243),H=n(6754),G={};function U(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}G.styleTagTransform=k(),G.setAttributes=_(),G.insert=B().bind(null,"head"),G.domAPI=w(),G.insertStyleElement=L(),E()(H.Z,G),H.Z&&H.Z.locals&&H.Z.locals;var D=(0,s.Z)("SpellingBeeResults"),J="ALPHA",Q="LENGTH",X="POINTS",K=function(e){var t,n,a=e.requiredLetter,s=e.optionalLetters,A=e.listSize,c=e.matches,m=(t=(0,r.useState)(J),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,l=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){o=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(o)throw i}}return l}}(t,n)||U(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=m[0],d=m[1],p=(0,r.useMemo)((function(){var e=(0,M.sortBy)(c);if(u===J)e=(0,M.groupBy)(e,(function(e){return e.charAt(0)})),e=(0,M.sortBy)(Object.keys(e)).map((function(t){return{key:t,matches:e[t]}}));else if(u===Q)e=(0,M.groupBy)(e,(function(e){return e.length})),e=(0,M.sortBy)(Object.keys(e),(function(e){return parseInt(e,10)})).map((function(t){return{key:t,matches:e[t]}}));else if(u===X){var t=new Set([e.requiredLetter].concat(function(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(s))).size;e=(0,M.groupBy)(e,(function(e){return g(e,t)})),e=(0,M.sortBy)(Object.keys(e),(function(e){return parseInt(e,10)})).map((function(t){return{key:t,matches:e[t]}}))}return e}),[c,u]);return r.createElement("div",{className:D()},r.createElement(C.Z,{variant:"h4",gutterBottom:!0,component:"div"},A," ","list results"),r.createElement("div",{className:D("letters")},r.createElement("div",{className:D("honeycomb","required")},a),s.map((function(e,t){return r.createElement("div",{key:"".concat(e).concat(t),className:D("honeycomb")},r.createElement("div",{className:D("honeycomb-interior")},e))}))),0===p.length?r.createElement(i.Z,{className:D("no-results"),severity:"info"},r.createElement(l.Z,null,"No results"),"We could not find any matches for the configured game board"):r.createElement(r.Fragment,null,r.createElement(O.Z,{className:D("view-by"),variant:"filled",sx:{minWidth:300}},r.createElement(j.Z,{id:D("view-by-label")},"Sort by"),r.createElement(W.Z,{labelId:D("view-by-label"),id:D("view-by-select"),value:u,onChange:function(e){d(e.target.value)}},r.createElement($.Z,{value:J},"Alphabetical"),r.createElement($.Z,{value:Q},"Length"),r.createElement($.Z,{value:X},"Points"))),r.createElement(o.Z,null),r.createElement("div",{className:D("list")},p.map((function(e){return r.createElement("div",{key:e.key,className:D("row")},r.createElement("div",{className:D("key")},e.key),r.createElement("div",null,e.matches.map((function(e){return r.createElement(F.Z,{key:e,label:e})}))))})))))};K.propTypes={requiredLetter:T().string.isRequired,optionalLetters:T().arrayOf(T().string.isRequired).isRequired,listSize:T().string.isRequired,matches:T().arrayOf(T().string.isRequired).isRequired};const V=K;var ee=n(5116);function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=(0,s.Z)("SpellingBeeInput"),re="?",ie=/[^a-z]/g,le=function(e){return e.target.value.toLowerCase().replace(ie,"").slice(-1)},ae=function(e){var t=e.requiredLetter,n=e.setRequiredLetter;return r.createElement(ee.Z,{id:ne("requiredLetter"),value:t,variant:"filled",hiddenLabel:!0,sx:{input:{textAlign:"center",backgroundColor:"#ffdf6b"}},onFocus:function(e){e.target.select()},onChange:function(e){n(le(e))}})};ae.propTypes={requiredLetter:T().string.isRequired,setRequiredLetter:T().func.isRequired};var oe=function(e){var t=e.i,n=e.optionalLetters,i=e.setOptionalLetters;return r.createElement(ee.Z,{id:ne("optonalLetter".concat(t)),value:n[t],variant:"filled",hiddenLabel:!0,sx:{input:{textAlign:"center",backgroundColor:"#ffffff"}},onFocus:function(e){e.target.select()},onChange:function(e){i(function(e,t,n){var r,i=function(e){if(Array.isArray(e))return te(e)}(r=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return i[n]=le(t)||re,i}(n,e,t))}})};oe.propTypes={i:T().number.isRequired,optionalLetters:T().arrayOf(T().string.isRequired).isRequired,setOptionalLetters:T().func.isRequired};var se=n(7106),Ae={};function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,l=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){o=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(o)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Ae.styleTagTransform=k(),Ae.setAttributes=_(),Ae.insert=B().bind(null,"head"),Ae.domAPI=w(),Ae.insertStyleElement=L(),E()(se.Z,Ae),se.Z&&se.Z.locals&&se.Z.locals;var ue=(0,s.Z)("SpellingBeePage");const de=function(){var e=ce((0,r.useState)(!1),2),t=e[0],n=e[1],s=ce((0,r.useState)(re),2),g=s[0],f=s[1],h=ce((0,r.useState)(Array(6).fill(re)),2),C=h[0],y=h[1],E=ce((0,r.useState)(u.BL.SMALL),2),v=E[0],w=E[1],b=ce((0,r.useState)(null),2),B=b[0],S=b[1],_=d(re,g,C);return(0,r.useEffect)((function(){var e=null;if(t){var r=null,i=!0;(0,u.nH)(v).then((function(e){var t=e.default;r=setTimeout((function(){var e=p(t,g,C);i&&(S({requiredLetter:g,optionalLetters:C,listSize:v,matches:e}),n(!1))}),250)})),e=function(){clearTimeout(r),i=!1}}return e}),[t]),r.createElement(A.Z,{className:ue()},r.createElement(m.Z,{text:"NYT Spelling Bee"}),t&&r.createElement(c.Z,null),r.createElement(I,null),r.createElement("div",{className:ue("game")},r.createElement("div",{className:ue("grid")},r.createElement("ul",{className:ue("grid-row"),lang:"es"},r.createElement("li",{className:ue("grid-cell")},r.createElement("div",{className:ue("input-wrapper")},r.createElement(oe,{i:0,optionalLetters:C,setOptionalLetters:y}))),r.createElement("li",{className:ue("grid-cell")},r.createElement("div",{className:ue("input-wrapper")},r.createElement(oe,{i:1,optionalLetters:C,setOptionalLetters:y})))),r.createElement("ul",{className:ue("grid-row"),lang:"es"},r.createElement("li",{className:ue("grid-cell")},r.createElement("div",{className:ue("input-wrapper")},r.createElement(oe,{i:2,optionalLetters:C,setOptionalLetters:y}))),r.createElement("li",{className:ue("grid-cell")},r.createElement(ae,{requiredLetter:g,setRequiredLetter:f})),r.createElement("li",{className:ue("grid-cell")},r.createElement("div",{className:ue("input-wrapper")},r.createElement(oe,{i:3,optionalLetters:C,setOptionalLetters:y})))),r.createElement("ul",{className:ue("grid-row"),lang:"es"},r.createElement("li",{className:ue("grid-cell")},r.createElement("div",{className:ue("input-wrapper")},r.createElement(oe,{i:4,optionalLetters:C,setOptionalLetters:y}))),r.createElement("li",{className:ue("grid-cell")},r.createElement("div",{className:ue("input-wrapper")},r.createElement(oe,{i:5,optionalLetters:C,setOptionalLetters:y}))))),r.createElement("div",{className:ue("spacer")}),r.createElement("div",null,!_&&r.createElement(i.Z,{className:ue("invalid"),severity:"warning"},r.createElement(l.Z,null,"Invalid game board"),"Make sure all inputs have values"),r.createElement("div",{className:ue("inputs")},r.createElement(u.ZP,{value:v,onChange:function(e){w(e.target.value)}}),r.createElement(a.Z,{className:ue("solve"),disabled:!_,variant:"contained",size:"large",onClick:function(){n(!0)}},"Solve")))),B&&r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement(V,B)))}},9288:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7537),i=n.n(r),l=n(3645),a=n.n(l)()(i());a.push([e.id,".WordListFileSelect__size-name{display:inline-block;min-width:4.25rem}.WordListFileSelect__size-details{font-style:italic;color:#999}","",{version:3,sources:["webpack://./src/components/common/WordListFileSelect.scss"],names:[],mappings:"AACE,+BACE,oBAAA,CACA,iBAAA,CAEF,kCACE,iBAAA,CACA,UAAA",sourcesContent:[".WordListFileSelect {\n  &__size-name {\n    display: inline-block;\n    min-width: 4.25rem;\n  }\n  &__size-details {\n    font-style: italic;\n    color: #999999; \n  }\n}"],sourceRoot:""}]);const o=a},7888:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7537),i=n.n(r),l=n(3645),a=n.n(l)()(i());a.push([e.id,".SpellingBeeHowToPlay .MuiPaper-root{height:100%}.SpellingBeeHowToPlay__content{padding:1.5rem 2.5rem}.SpellingBeeHowToPlay ul{padding:0 0 0 1rem;margin:0}.SpellingBeeHowToPlay li{margin-bottom:.25rem}.SpellingBeeHowToPlay li:last-child{margin:0}","",{version:3,sources:["webpack://./src/components/games/spellingBee/SpellingBeeHowToPlay.scss"],names:[],mappings:"AACE,qCACE,WAAA,CAEF,+BACE,qBAAA,CAEF,yBACE,kBAAA,CACA,QAAA,CAEF,yBACE,oBAAA,CACA,oCACE,QAAA",sourcesContent:[".SpellingBeeHowToPlay {\n  .MuiPaper-root {\n    height: 100%;\n  }\n  &__content {\n    padding: 1.5rem 2.5rem;\n  }\n  ul {\n    padding: 0 0 0 1rem;\n    margin: 0;\n  }\n  li {\n    margin-bottom: 0.25rem;\n    &:last-child {\n      margin: 0;\n    }\n  }\n}"],sourceRoot:""}]);const o=a},7106:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7537),i=n.n(r),l=n(3645),a=n.n(l)()(i());a.push([e.id,".SpellingBeePage .SpellingBeeHowToPlay{padding:1rem 0 2rem 0}.SpellingBeePage__game{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:3rem;margin-bottom:3rem;border-radius:.25rem;background-color:#ddd}@media(max-width: 1300px){.SpellingBeePage__game{flex-direction:column}}.SpellingBeePage__spacer{width:4rem;height:1px}@media(max-width: 1300px){.SpellingBeePage__spacer{width:1px;height:1.5rem}}.SpellingBeePage__grid{position:relative;min-width:408px;max-width:408px;width:408px;height:344px}.SpellingBeePage__grid .MuiFilledInput-root:before,.SpellingBeePage__grid .MuiFilledInput-root:after{display:none}.SpellingBeePage__grid .MuiFilledInput-input{padding:0;width:8rem;height:8rem;font-size:2rem}.SpellingBeePage__grid-row{position:absolute;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin:0 auto;padding:0;min-width:408px;max-width:408px;list-style:none}.SpellingBeePage__grid-row:nth-child(1){top:0}.SpellingBeePage__grid-row:nth-child(2){top:6.5rem}.SpellingBeePage__grid-row:nth-child(3){top:13rem}.SpellingBeePage__grid-cell{display:flex;align-items:center;justify-content:center;flex:0 1 8rem;width:8rem;height:8rem;margin:.25rem;background-color:rgba(0,0,0,.66);clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)}.SpellingBeePage__input-wrapper{display:flex;align-items:center;justify-content:center;background-color:#fff;width:7.5rem;height:7.5rem;clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)}.SpellingBeePage__inputs{display:flex;align-items:center}.SpellingBeePage__inputs .MuiButton-root{margin-left:1rem}.SpellingBeePage__invalid{margin:0 0 1.5rem 0;width:350px}","",{version:3,sources:["webpack://./src/components/games/spellingBee/SpellingBeePage.scss"],names:[],mappings:"AAME,uCACE,qBAAA,CAEF,uBACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,qBAAA,CACA,0BATF,uBAUI,qBAAA,CAAA,CAGJ,yBACE,UAAA,CACA,UAAA,CACA,0BAHF,yBAII,SAAA,CACA,aAAA,CAAA,CAGJ,uBACE,iBAAA,CACA,eAhCS,CAiCT,eAjCS,CAkCT,WAlCS,CAmCT,YAlCU,CAqCN,qGACE,YAAA,CAGJ,6CACE,SAAA,CACA,UA1CI,CA2CJ,WA3CI,CA4CJ,cAAA,CAIN,2BACE,iBAAA,CACA,YAAA,CACA,cAAA,CACA,sBAAA,CACA,kBAAA,CACA,aAAA,CACA,SAAA,CACA,eA1DS,CA2DT,eA3DS,CA4DT,eAAA,CACA,wCACE,KAAA,CAEF,wCACE,UAAA,CAEF,wCACE,SAAA,CAGJ,4BACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,aAAA,CACA,UA1EQ,CA2ER,WA3EQ,CA4ER,aAAA,CACA,gCAAA,CACA,uEAAA,CAEF,gCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qBAAA,CACA,YApFW,CAqFX,aArFW,CAsFX,uEAAA,CAEF,yBACE,YAAA,CACA,kBAAA,CACA,yCACE,gBAAA,CAGJ,0BACE,mBAAA,CACA,WAAA",sourcesContent:["$grid-width: 408px;\n$grid-height: 344px;\n$cell-size: 8rem;\n$hexagon-size: 7.5rem;\n\n.SpellingBeePage {\n  .SpellingBeeHowToPlay {\n    padding: 1rem 0 2rem 0;\n  }\n  &__game {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding: 3rem;\n    margin-bottom: 3rem;\n    border-radius: 0.25rem;\n    background-color: #dddddd;\n    @media (max-width: 1300px) {\n      flex-direction: column;\n    }\n  }\n  &__spacer {\n    width: 4rem;\n    height: 1px;\n    @media (max-width: 1300px) {\n      width: 1px;\n      height: 1.5rem;\n    }\n  }\n  &__grid {\n    position: relative;\n    min-width: $grid-width;\n    max-width: $grid-width;\n    width: $grid-width;\n    height: $grid-height;\n    .MuiFilledInput {\n      &-root {\n        &:before, &:after {\n          display: none;\n        }\n      }\n      &-input {\n        padding: 0;\n        width: $cell-size;\n        height: $cell-size;\n        font-size: 2rem;\n      }\n    }\n  }\n  &__grid-row {\n    position: absolute;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    padding: 0;\n    min-width: $grid-width;\n    max-width: $grid-width;\n    list-style: none;\n    &:nth-child(1) {\n      top: 0;\n    }\n    &:nth-child(2) {\n      top: calc($cell-size * 0.75 + 0.5rem);\n    }\n    &:nth-child(3) {\n      top: calc($cell-size * 0.75 * 2 + 1rem);\n    }\n  }\n  &__grid-cell {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 1 $cell-size;\n    width: $cell-size;\n    height: $cell-size;\n    margin: 0.25rem;\n    background-color: rgba(0, 0, 0, 0.66);\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  }\n  &__input-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    width: $hexagon-size;\n    height: $hexagon-size;\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  }\n  &__inputs {\n    display: flex;\n    align-items: center;\n    .MuiButton-root {\n      margin-left: 1rem;\n    }\n  }\n  &__invalid {\n    margin: 0 0 1.5rem 0;\n    width: 350px;\n  }\n}\n"],sourceRoot:""}]);const o=a},6754:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7537),i=n.n(r),l=n(3645),a=n.n(l)()(i());a.push([e.id,'.SpellingBeeResults{font-family:"Roboto","Helvetica","Arial",sans-serif;padding:2rem 0}.SpellingBeeResults__letters{display:flex;align-items:center;flex-wrap:wrap}.SpellingBeeResults__honeycomb{display:flex;align-items:center;justify-content:center;font-weight:500;font-size:1.5rem;width:5rem;height:5rem;margin:0 1rem 1rem 0;clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);background-color:rgba(0,0,0,.66)}.SpellingBeeResults__honeycomb--required{background-color:#ffdf6b}.SpellingBeeResults__honeycomb-interior{display:flex;align-items:center;justify-content:center;width:4.5rem;height:4.5rem;background-color:#f2f2f2;clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)}.SpellingBeeResults__no-results{margin:2rem 0}.SpellingBeeResults__view-by{margin:2rem 0 1.5rem 0}.SpellingBeeResults__list .MuiChip-root{margin:0 .5rem .5rem 0;height:2.5rem;border-radius:1.25rem}.SpellingBeeResults__list .MuiChip-label{padding:0 1.5rem;font-size:1rem}.SpellingBeeResults__row{display:flex;padding:1.5rem 0 0 0}.SpellingBeeResults__key{flex:0 0 3rem;font-size:1.5rem;line-height:2.5rem}',"",{version:3,sources:["webpack://./src/components/games/spellingBee/SpellingBeeResults.scss"],names:[],mappings:"AAAA,oBACE,mDAAA,CACA,cAAA,CACA,6BACE,YAAA,CACA,kBAAA,CACA,cAAA,CAEF,+BACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,gBAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,uEAAA,CACA,gCAAA,CACA,yCACE,wBAAA,CAGJ,wCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,aAAA,CACA,wBAAA,CACA,uEAAA,CAEF,gCACE,aAAA,CAEF,6BACE,sBAAA,CAGA,wCACE,sBAAA,CACA,aAAA,CACA,qBAAA,CAEF,yCACE,gBAAA,CACA,cAAA,CAGJ,yBACE,YAAA,CACA,oBAAA,CAEF,yBACE,aAAA,CACA,gBAAA,CACA,kBAAA",sourcesContent:['.SpellingBeeResults {\n  font-family: "Roboto","Helvetica","Arial",sans-serif;\n  padding: 2rem 0;\n  &__letters {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  &__honeycomb {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 500;\n    font-size: 1.5rem;\n    width: 5rem;\n    height: 5rem;\n    margin: 0 1rem 1rem 0;\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n    background-color: rgba(0, 0, 0, 0.66);\n    &--required {\n      background-color: #ffdf6b;\n    }\n  }\n  &__honeycomb-interior {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 4.5rem;\n    height: 4.5rem;\n    background-color: #f2f2f2;\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  }\n  &__no-results {\n    margin: 2rem 0;\n  }\n  &__view-by  {\n    margin: 2rem 0 1.5rem 0;\n  }\n  &__list {\n    .MuiChip-root {\n      margin: 0 0.5rem 0.5rem 0;\n      height: 2.5rem;\n      border-radius: 1.25rem;\n    }\n    .MuiChip-label {\n      padding: 0 1.5rem;\n      font-size: 1rem;\n    }\n  }\n  &__row {\n    display: flex;\n    padding: 1.5rem 0 0 0;\n  }\n  &__key {\n    flex: 0 0 3rem;\n    font-size: 1.5rem;\n    line-height: 2.5rem;\n  }\n}'],sourceRoot:""}]);const o=a}}]);