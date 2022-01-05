"use strict";(self.webpackChunkWordGames=self.webpackChunkWordGames||[]).push([[858],{1511:(e,r,t)=>{t.d(r,{ZP:()=>k,nH:()=>Z,BL:()=>_});var n=t(7294),a=t(5697),i=t.n(a),l=t(6446),s=t(7666),o=t(3797),A=t(243),c=t(1059),m=t(3379),d=t.n(m),u=t(7795),p=t.n(u),C=t(569),g=t.n(C),f=t(3565),h=t.n(f),y=t(9216),E=t.n(y),v=t(4589),b=t.n(v),w=t(9288),B={};B.styleTagTransform=b(),B.setAttributes=h(),B.insert=g().bind(null,"head"),B.domAPI=p(),B.insertStyleElement=E(),d()(w.Z,B),w.Z&&w.Z.locals&&w.Z.locals;var x=(0,c.Z)("WordListFileSelect"),_={SMALL:"Small",MEDIUM:"Medium",LARGE:"Large",ALL:"All"},Z=function(e){var r=null;return e===_.SMALL?r=t.e(686).then(t.t.bind(t,6995,19)):e===_.MEDIUM?r=t.e(474).then(t.t.bind(t,8894,19)):e===_.LARGE?r=t.e(943).then(t.t.bind(t,9902,19)):e===_.ALL?r=t.e(495).then(t.t.bind(t,3185,19)):console.error("List size not recognized"),r},W=function(e){var r=e.value,t=e.onChange;return n.createElement(l.Z,{className:x(),variant:"filled",sx:{width:276,"& .MuiFilledInput-root":{backgroundColor:"#ffffff","& .MuiFilledInput-input":{backgroundColor:"#ffffff","&:hover, &.Mui-focused":{backgroundColor:"#ffffff"}}}}},n.createElement(s.Z,{id:x("label")},"List size"),n.createElement(A.Z,{labelId:x("label"),id:x("select"),value:r,onChange:t},n.createElement(o.Z,{value:_.SMALL},n.createElement("span",{className:x("size-name")},_.SMALL),n.createElement("span",{className:x("size-details")},"0.1 MB - 10k words")),n.createElement(o.Z,{value:_.MEDIUM},n.createElement("span",{className:x("size-name")},_.MEDIUM),n.createElement("span",{className:x("size-details")},"0.7 MB - 61k words")),n.createElement(o.Z,{value:_.LARGE},n.createElement("span",{className:x("size-name")},_.LARGE),n.createElement("span",{className:x("size-details")},"3.4 MB - 274k words")),n.createElement(o.Z,{value:_.ALL},n.createElement("span",{className:x("size-name")},_.ALL),n.createElement("span",{className:x("size-details")},"4.6 MB - 370k words"))))};W.propTypes={value:i().string.isRequired,onChange:i().func.isRequired};const k=W},8075:(e,r,t)=>{t.r(r),t.d(r,{default:()=>se});var n=t(7294),a=t(442),i=t(3155),l=t(6914),s=t(7720),o=t(5116),A=t(1059),c=t(3425),m=t(1343),d=t(81),u=t(1511),p=/[^a-z]/;const C=function(e){return e.padEnd(3,"?")},g=function(e){return e.toLowerCase().replace(p,"").substring(0,7)},f=function(e){return e&&e.length>=3&&e.length<=7},h=function(e,r){var t=r.split("").reduce((function(e,r){return e[r]=(e[r]||0)+1,e}),{});return e.filter((function(e){return e.length>=3&&r.length<=7})).filter((function(e){var r={};return e.split("").every((function(e){return r[e]=(r[e]||0)+1,e in t&&r[e]<=t[e]}))}))};var y=t(5725),E=t(6501),v=t(2658),b=t(3379),w=t.n(b),B=t(7795),x=t.n(B),_=t(569),Z=t.n(_),W=t(3565),k=t.n(W),z=t(9216),P=t.n(z),S=t(4589),M=t.n(S),T=t(3299),L={};L.styleTagTransform=M(),L.setAttributes=k(),L.insert=Z().bind(null,"head"),L.domAPI=x(),L.insertStyleElement=P(),w()(T.Z,L),T.Z&&T.Z.locals&&T.Z.locals;var R=(0,A.Z)("WordscapesHowToPlay"),N={color:"rgb(1, 67, 97)",backgroundColor:"rgb(229, 246, 253)"};const I=function(){return n.createElement("div",{className:R()},n.createElement(y.ZP,{container:!0,spacing:2,alignItems:"stretch"},n.createElement(y.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},n.createElement(E.Z,{elevation:0,sx:N},n.createElement("div",{className:R("content")},n.createElement(v.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Description"),n.createElement(v.Z,{variant:"body1",gutterBottom:!0,component:"div"},"Wordscapes is a word puzzle video game created for both Android and iOS devices. The game overall is a mix of Boggle and crossword puzzles. To solve the puzzle, the player must find every word using the letters that are located in the circle at the bottom of the screen. There are anywhere from 3 to 7 letters in the circle, depending on the level being played. There are also bonus words, which the player can solve for extra coins.")))),n.createElement(y.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,xl:6},n.createElement(E.Z,{elevation:0,sx:N},n.createElement("div",{className:R("content")},n.createElement(v.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Rules"),n.createElement(v.Z,{variant:"body1",component:"div"},n.createElement("ul",null,n.createElement("li",null,"Letters in the circle can only be used once."),n.createElement("li",null,"Duplicate letters are allowed in the circle."),n.createElement("li",null,"Words must contain at least four letters."),n.createElement("li",null,"The word list does not include words that are offensive, obscure, hyphenated or proper nouns.")))))),n.createElement(y.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,xl:6},n.createElement(E.Z,{elevation:0,sx:N},n.createElement("div",{className:R("content")},n.createElement(v.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Solution"),n.createElement(v.Z,{variant:"body1",component:"div"},"Our goal is to maximize the completeness of the result set while minimizing the resource requirments that clients need to download and process larger word lists. By default, we consult a list of more than 10,000+ words to meet these requirments. We then test each word in the list against the set of game letters. If you think words are missing from the solution, then try using a larger word list!"))))))};var F=t(5697),j=t.n(F),q=t(6486),H=t(461),O=t(7666),U=t(3797),G=t(6446),$=t(243),Y=t(3514),D={};function J(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}D.styleTagTransform=M(),D.setAttributes=k(),D.insert=Z().bind(null,"head"),D.domAPI=x(),D.insertStyleElement=P(),w()(Y.Z,D),Y.Z&&Y.Z.locals&&Y.Z.locals;var Q=(0,A.Z)("WordscapesResults"),K="ALPHA",V="LENGTH",X=function(e){var r,t,l=e.puzzle,s=e.listSize,A=e.numWordsExamined,c=e.matches,m=(r=(0,n.useState)(K),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);l=!0);}catch(e){s=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(s)throw a}}return i}}(r,t)||function(e,r){if(e){if("string"==typeof e)return J(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?J(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=m[0],u=m[1],p=(0,n.useMemo)((function(){var e=(0,q.sortBy)(c);return d===K?(e=(0,q.groupBy)(e,(function(e){return e.charAt(0)})),e=(0,q.sortBy)(Object.keys(e)).map((function(r){return{key:r,matches:e[r]}}))):d===V&&(e=(0,q.groupBy)(e,(function(e){return e.length})),e=(0,q.sortBy)(Object.keys(e),(function(e){return parseInt(e,10)})).map((function(r){return{key:r,matches:e[r]}}))),e}),[c,d]);return n.createElement("div",{className:Q()},n.createElement(v.Z,{variant:"h4",gutterBottom:!0,component:"div"},"Results"),n.createElement("div",{className:Q("letters")},l.split("").map((function(e,r){return n.createElement("div",{key:"".concat(e).concat(r),className:Q("honeycomb")},n.createElement("div",{className:Q("honeycomb-interior")},e))}))),n.createElement("div",{className:Q("info")},n.createElement(v.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Stats"),n.createElement("div",{className:Q("stats")},n.createElement(o.Z,{id:Q("list-size"),label:"List size",value:s,variant:"filled",InputProps:{readOnly:!0}}),n.createElement(o.Z,{id:Q("num-words-examined"),label:"Total word count",value:A,variant:"filled",InputProps:{readOnly:!0}}),n.createElement(o.Z,{id:Q("num-words-eliminated"),label:"Words elminated",value:A-c.length,variant:"filled",InputProps:{readOnly:!0}}),n.createElement(o.Z,{id:Q("num-possible-words"),label:"Possible word count",value:c.length,variant:"filled",InputProps:{readOnly:!0}}))),n.createElement("div",null,n.createElement(v.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Solution"),0===p.length?n.createElement(a.Z,{className:Q("no-results"),severity:"info"},n.createElement(i.Z,null,"No results"),"We could not find any matches for the configured game board"):n.createElement(n.Fragment,null,n.createElement(G.Z,{className:Q("view-by"),variant:"filled",sx:{minWidth:300}},n.createElement(O.Z,{id:Q("view-by-label")},"Sort by"),n.createElement($.Z,{labelId:Q("view-by-label"),id:Q("view-by-select"),value:d,onChange:function(e){u(e.target.value)}},n.createElement(U.Z,{value:K},"Alphabetical"),n.createElement(U.Z,{value:V},"Length"))),n.createElement("div",{className:Q("list")},p.map((function(e){return n.createElement("div",{key:e.key,className:Q("row")},n.createElement("div",{className:Q("key")},e.key),n.createElement("div",null,e.matches.map((function(e){return n.createElement(H.Z,{key:e,label:e})}))))}))))))};X.propTypes={puzzle:j().string.isRequired,listSize:j().string.isRequired,numWordsExamined:j().number.isRequired,matches:j().arrayOf(j().string.isRequired).isRequired};const ee=X;var re=t(5236),te={};function ne(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);l=!0);}catch(e){s=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,r)||ae(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,r){if(e){if("string"==typeof e)return ie(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(e,r):void 0}}function ie(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}te.styleTagTransform=M(),te.setAttributes=k(),te.insert=Z().bind(null,"head"),te.domAPI=x(),te.insertStyleElement=P(),w()(re.Z,te),re.Z&&re.Z.locals&&re.Z.locals;var le=(0,A.Z)("WordscapesPage");const se=function(){var e,r,t,A,p=ne((0,n.useState)(!1),2),y=p[0],E=p[1],v=ne((0,n.useState)(""),2),b=v[0],w=v[1],B=ne((0,n.useState)(u.BL.SMALL),2),x=B[0],_=B[1],Z=ne((0,n.useState)(null),2),W=Z[0],k=Z[1],z=f(b),P=C(b),S=(e=P.length,r=2*Math.PI/e,t=Math.PI/-2,(A=Array(e),function(e){if(Array.isArray(e))return ie(e)}(A)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(A)||ae(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(){var e={};return e.left="".concat(120*Math.cos(t)+119,"px"),e.top="".concat(120*Math.sin(t)+119,"px"),t+=r,e})));return(0,n.useEffect)((function(){var e=null;if(y){var r=null,t=!0;(0,u.nH)(x).then((function(e){var n=e.default;r=setTimeout((function(){var e=h(n,b);t&&(k({puzzle:b,listSize:x,numWordsExamined:n.length,matches:e}),E(!1))}),250)})),e=function(){clearTimeout(r),t=!1}}return e}),[y]),n.createElement(c.Z,{className:le()},n.createElement(d.Z,{text:"Wordscapes"}),y&&n.createElement(m.Z,null),n.createElement(I,null),n.createElement("div",{className:le("game")},n.createElement("div",null,n.createElement("div",{className:le("grid")},P.split("").map((function(e,r){return n.createElement("div",{key:"".concat(e,"-").concat(r),className:le("input-wrapper"),style:S[r]},e)}))),n.createElement(o.Z,{id:le("puzzle"),className:le("puzzle"),label:"Puzzle",value:b,variant:"filled",type:"search",inputProps:{spellCheck:"false"},sx:{width:382,input:{backgroundColor:"#ffffff"}},onChange:function(e){w(g(e.target.value))}})),n.createElement("div",{className:le("spacer")}),n.createElement("div",null,!z&&n.createElement(a.Z,{className:le("invalid"),severity:"warning"},n.createElement(i.Z,null,"Invalid game board"),"Make sure all inputs have values"),n.createElement("div",{className:le("inputs")},n.createElement(u.ZP,{value:x,onChange:function(e){_(e.target.value)}}),n.createElement(l.Z,{className:le("solve"),disabled:!z,variant:"contained",size:"large",onClick:function(){E(!0)}},"Solve")))),W&&n.createElement(n.Fragment,null,n.createElement(s.Z,null),n.createElement(ee,W)))}},9288:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(7537),a=t.n(n),i=t(3645),l=t.n(i)()(a());l.push([e.id,".WordListFileSelect__size-name{display:inline-block;min-width:4.25rem}.WordListFileSelect__size-details{font-style:italic;color:#999}","",{version:3,sources:["webpack://./src/components/common/WordListFileSelect.scss"],names:[],mappings:"AACE,+BACE,oBAAA,CACA,iBAAA,CAEF,kCACE,iBAAA,CACA,UAAA",sourcesContent:[".WordListFileSelect {\r\n  &__size-name {\r\n    display: inline-block;\r\n    min-width: 4.25rem;\r\n  }\r\n  &__size-details {\r\n    font-style: italic;\r\n    color: #999999; \r\n  }\r\n}"],sourceRoot:""}]);const s=l},3299:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(7537),a=t.n(n),i=t(3645),l=t.n(i)()(a());l.push([e.id,".WordscapesHowToPlay .MuiPaper-root{height:100%}.WordscapesHowToPlay__content{padding:1.5rem 2.5rem}.WordscapesHowToPlay ul{padding:0 0 0 1rem;margin:0}.WordscapesHowToPlay li{margin-bottom:.25rem}.WordscapesHowToPlay li:last-child{margin:0}","",{version:3,sources:["webpack://./src/components/games/wordscapes/WordscapesHowToPlay.scss"],names:[],mappings:"AACE,oCACE,WAAA,CAEF,8BACE,qBAAA,CAEF,wBACE,kBAAA,CACA,QAAA,CAEF,wBACE,oBAAA,CACA,mCACE,QAAA",sourcesContent:[".WordscapesHowToPlay {\r\n  .MuiPaper-root {\r\n    height: 100%;\r\n  }\r\n  &__content {\r\n    padding: 1.5rem 2.5rem;\r\n  }\r\n  ul {\r\n    padding: 0 0 0 1rem;\r\n    margin: 0;\r\n  }\r\n  li {\r\n    margin-bottom: 0.25rem;\r\n    &:last-child {\r\n      margin: 0;\r\n    }\r\n  }\r\n}"],sourceRoot:""}]);const s=l},5236:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(7537),a=t.n(n),i=t(3645),l=t.n(i)()(a());l.push([e.id,".WordscapesPage .WordscapesHowToPlay{padding:1rem 0 2rem 0}.WordscapesPage__game{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:3rem;margin-bottom:3rem;border-radius:.25rem;background-color:#ddd}@media(max-width: 1300px){.WordscapesPage__game{flex-direction:column}}.WordscapesPage__spacer{width:4rem;height:1px}@media(max-width: 1300px){.WordscapesPage__spacer{width:1px;height:1.5rem}}.WordscapesPage__grid{position:relative;min-width:350px;max-width:350px;width:350px;height:350px;border-radius:50%;background-color:#fbfbfb;border:3px solid rgba(0,0,0,.66)}.WordscapesPage__input-wrapper{position:absolute;display:flex;align-items:center;justify-content:center;width:7rem;height:7rem;font-size:4rem;font-family:monospace;clip-path:circle(50%);user-select:none}.WordscapesPage__puzzle{margin-top:1.5rem}.WordscapesPage__inputs{display:flex;align-items:center}.WordscapesPage__inputs .MuiButton-root{margin-left:1rem}.WordscapesPage__invalid{margin:0 0 1.5rem 0;width:350px}","",{version:3,sources:["webpack://./src/components/games/wordscapes/WordscapesPage.scss"],names:[],mappings:"AAKE,qCACE,qBAAA,CAEF,sBACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,qBAAA,CACA,0BATF,sBAUI,qBAAA,CAAA,CAGJ,wBACE,UAAA,CACA,UAAA,CACA,0BAHF,wBAII,SAAA,CACA,aAAA,CAAA,CAGJ,sBACE,iBAAA,CACA,eA/BS,CAgCT,eAhCS,CAiCT,WAjCS,CAkCT,YAjCU,CAkCV,iBAAA,CACA,wBAAA,CACA,gCAAA,CAEF,+BACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UA1CQ,CA2CR,WA3CQ,CA4CR,cAAA,CACA,qBAAA,CACA,qBAAA,CACA,gBAAA,CAEF,wBACE,iBAAA,CAEF,wBACE,YAAA,CACA,kBAAA,CACA,wCACE,gBAAA,CAGJ,yBACE,mBAAA,CACA,WAAA",sourcesContent:["$grid-width: 350px;\r\n$grid-height: 350px;\r\n$cell-size: 7rem;\r\n\r\n.WordscapesPage {\r\n  .WordscapesHowToPlay {\r\n    padding: 1rem 0 2rem 0;\r\n  }\r\n  &__game {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 3rem;\r\n    margin-bottom: 3rem;\r\n    border-radius: 0.25rem;\r\n    background-color: #dddddd;\r\n    @media (max-width: 1300px) {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n  &__spacer {\r\n    width: 4rem;\r\n    height: 1px;\r\n    @media (max-width: 1300px) {\r\n      width: 1px;\r\n      height: 1.5rem;\r\n    }\r\n  }\r\n  &__grid {\r\n    position: relative;\r\n    min-width: $grid-width;\r\n    max-width: $grid-width;\r\n    width: $grid-width;\r\n    height: $grid-height;\r\n    border-radius: 50%;\r\n    background-color: #fbfbfb;\r\n    border: 3px solid rgba(0, 0, 0, 0.66);\r\n  }\r\n  &__input-wrapper {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: $cell-size;\r\n    height: $cell-size;\r\n    font-size: 4rem;\r\n    font-family: monospace;\r\n    clip-path: circle(50%);\r\n    user-select: none;\r\n  }\r\n  &__puzzle {\r\n    margin-top: 1.5rem;\r\n  }\r\n  &__inputs {\r\n    display: flex;\r\n    align-items: center;\r\n    .MuiButton-root {\r\n      margin-left: 1rem;\r\n    }\r\n  }\r\n  &__invalid {\r\n    margin: 0 0 1.5rem 0;\r\n    width: 350px;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const s=l},3514:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(7537),a=t.n(n),i=t(3645),l=t.n(i)()(a());l.push([e.id,'.WordscapesResults{font-family:"Roboto","Helvetica","Arial",sans-serif;padding:2rem 0}.WordscapesResults__letters{display:flex;align-items:center;flex-wrap:wrap}.WordscapesResults__honeycomb{display:flex;align-items:center;justify-content:center;font-weight:500;font-size:1.5rem;width:5rem;height:5rem;margin:0 1rem 1rem 0;clip-path:circle(50%);background-color:rgba(0,0,0,.66)}.WordscapesResults__honeycomb-interior{display:flex;align-items:center;justify-content:center;width:4.66rem;height:4.66rem;background-color:#f2f2f2;clip-path:circle(50%)}.WordscapesResults__info{padding:2.25rem 0 1.75rem 0;margin:2rem 0;border-top:1px solid rgba(0,0,0,.12);border-bottom:1px solid rgba(0,0,0,.12)}.WordscapesResults__stats{display:flex;align-items:center;flex-wrap:wrap}.WordscapesResults__stats .MuiTextField-root{flex:1 1 175px;max-width:200px;margin:0 0 1rem 0}.WordscapesResults__stats .MuiTextField-root:not(:last-child){margin-right:1rem}.WordscapesResults__view-by{margin:0 0 .5rem 0}.WordscapesResults__list .MuiChip-root{margin:0 .5rem .5rem 0;height:2.5rem;border-radius:1.25rem}.WordscapesResults__list .MuiChip-label{padding:0 1.5rem;font-size:1rem}.WordscapesResults__row{display:flex;padding:1.5rem 0 0 0}.WordscapesResults__key{flex:0 0 3rem;font-size:1.5rem;line-height:2.5rem}',"",{version:3,sources:["webpack://./src/components/games/wordscapes/WordscapesResults.scss"],names:[],mappings:"AAAA,mBACE,mDAAA,CACA,cAAA,CACA,4BACE,YAAA,CACA,kBAAA,CACA,cAAA,CAEF,8BACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,gBAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,qBAAA,CACA,gCAAA,CAEF,uCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,aAAA,CACA,cAAA,CACA,wBAAA,CACA,qBAAA,CAEF,yBACE,2BAAA,CACA,aAAA,CACA,oCAAA,CACA,uCAAA,CAEF,0BACE,YAAA,CACA,kBAAA,CACA,cAAA,CACA,6CACE,cAAA,CACA,eAAA,CACA,iBAAA,CACA,8DACE,iBAAA,CAIN,4BACE,kBAAA,CAGA,uCACE,sBAAA,CACA,aAAA,CACA,qBAAA,CAEF,wCACE,gBAAA,CACA,cAAA,CAGJ,wBACE,YAAA,CACA,oBAAA,CAEF,wBACE,aAAA,CACA,gBAAA,CACA,kBAAA",sourcesContent:['.WordscapesResults {\r\n  font-family: "Roboto","Helvetica","Arial",sans-serif;\r\n  padding: 2rem 0;\r\n  &__letters {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n  }\r\n  &__honeycomb {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 500;\r\n    font-size: 1.5rem;\r\n    width: 5rem;\r\n    height: 5rem;\r\n    margin: 0 1rem 1rem 0;\r\n    clip-path: circle(50%);\r\n    background-color: rgba(0, 0, 0, 0.66);\r\n  }\r\n  &__honeycomb-interior {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 4.66rem;\r\n    height: 4.66rem;\r\n    background-color: #f2f2f2;\r\n    clip-path: circle(50%);\r\n  }\r\n  &__info {\r\n    padding: 2.25rem 0 1.75rem 0;\r\n    margin: 2rem 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n  }\r\n  &__stats {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    .MuiTextField-root {\r\n      flex: 1 1 175px;\r\n      max-width: 200px;\r\n      margin: 0 0 1rem 0;\r\n      &:not(:last-child) {\r\n        margin-right: 1rem;\r\n      }\r\n    }\r\n  }\r\n  &__view-by  {\r\n    margin: 0 0 0.5rem 0;\r\n  }\r\n  &__list {\r\n    .MuiChip-root {\r\n      margin: 0 0.5rem 0.5rem 0;\r\n      height: 2.5rem;\r\n      border-radius: 1.25rem;\r\n    }\r\n    .MuiChip-label {\r\n      padding: 0 1.5rem;\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n  &__row {\r\n    display: flex;\r\n    padding: 1.5rem 0 0 0;\r\n  }\r\n  &__key {\r\n    flex: 0 0 3rem;\r\n    font-size: 1.5rem;\r\n    line-height: 2.5rem;\r\n  }\r\n}'],sourceRoot:""}]);const s=l}}]);