/*! For license information please see 1-inline-Highlight-index-stories.b61676ba.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkp4_ui=self.webpackChunkp4_ui||[]).push([[6217],{"./src/1-inline/Highlight/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/nano-theme/lib/index.js");const highlightToken=(text,token)=>{const lowercased=text.toLowerCase(),highlighted=[];let index=0;do{const curr=lowercased.indexOf(token,index);if(-1===curr){highlighted.push(text.slice(index));break}curr>index&&highlighted.push(text.slice(index,curr)),highlighted.push([text.slice(curr,curr+token.length)]),index=curr+token.length}while(index<text.length);return highlighted};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const highlightClass=(0,lib.rule)({bg:"rgba(235, 213, 52,.5)",fw:"bold",bdrad:"3px",pad:"1px 3px",mar:"-1px -3px"}),preserveSpaces=text=>{const leading=" "===text[0],trailing=" "===text[text.length-1];return leading||trailing?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leading?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "}):null,(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:text.trim()}),trailing?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "}):null]}):text},Highlight=_ref=>{let{text,query}=_ref;const parts=react.useMemo((()=>{if(!query)return[text];let highlighted=((text,query)=>{let highlighted=[text];for(const q of query){if(!q)continue;const next=[];for(const h of highlighted)"string"==typeof h?next.push(...highlightToken(h,q)):next.push(h);highlighted=next}return highlighted})(text,query);return highlighted=1===highlighted.length&&"string"==typeof highlighted[0]?((text,token)=>{const lowercased=text.toLowerCase(),highlighted=[],length1=text.length,length2=token.length;if(!length1)return highlighted;if(!length2)return[text];let char=text[0];const isMatch=lowercased[0]===token[0];highlighted.push(isMatch?[char]:char);let x=1,y=isMatch?1:0,last=highlighted[0],cnt=isMatch?1:0;for(;x<length1&&y<length2;)char=text[x],lowercased[x]===token[y]?(cnt++,x++,y++,last instanceof Array?last[0]=last[0]+char:(last=[char],highlighted.push(last))):(x++,last instanceof Array?highlighted.push(last=char):(last+=char,highlighted[highlighted.length-1]=last));return cnt<2?[text]:(x<text.length&&highlighted.push(text.slice(x)),highlighted)})(text,query.join("")):(text=>{const length=text.length;if(length<2)return text;let last=text[0];const out=[last];for(let i=1;i<length;i++){const part=text[i],lastIsString="string"==typeof last,isString="string"==typeof part;lastIsString&&isString?out[out.length-1]=last+=part:lastIsString||isString?" "===last&&!isString&&out[out.length-2]&&out[out.length-2]instanceof Array?(last=[out[out.length-2][0]+" "+part[0]],out[out.length-2]=last,out.pop()):out.push(last=part):last[0]=last[0]+part[0]}return out})(highlighted),highlighted.map(((part,i)=>"string"==typeof part?preserveSpaces(part):(0,jsx_runtime.jsx)("span",{className:highlightClass,children:preserveSpaces(part[0])},i)))}),[text,query]);return react.createElement(react.Fragment,{},...parts)};try{Highlight.displayName="Highlight",Highlight.__docgenInfo={description:"",displayName:"Highlight",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},query:{defaultValue:null,description:"",name:"query",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/1-inline/Highlight/index.tsx#Highlight"]={docgenInfo:Highlight.__docgenInfo,name:"Highlight",path:"src/1-inline/Highlight/index.tsx#Highlight"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"1. Inline/Highlight",component:Highlight,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{text:"this is some text, this text can have highlights",query:["text","have"]}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'this is some text, this text can have highlights',\n    query: ['text', 'have']\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/nano-theme/lib/breakpoints.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.m4=exports.m3=exports.m2=exports.m1=exports.b4=exports.b3=exports.b2=exports.b1=void 0,exports.b1=520,exports.b2=960,exports.b3=1300,exports.b4=1800,exports.m1=`@media (max-width:${exports.b1}px)`,exports.m2=`@media (max-width:${exports.b2}px)`,exports.m3=`@media (max-width:${exports.b3}px)`,exports.m4=`@media (max-width:${exports.b4}px)`},"./node_modules/nano-theme/lib/constants.js":(__unused_webpack_module,exports)=>{var SIZE,ZINDEX,SYMBOL,COLOR;Object.defineProperty(exports,"__esModule",{value:!0}),exports.COLOR=exports.SYMBOL=exports.ZINDEX=exports.SIZE=void 0,function(SIZE){SIZE[SIZE.SITE_WIDTH=1300]="SITE_WIDTH",SIZE[SIZE.SITE_PADDING=32]="SITE_PADDING",SIZE[SIZE.PAGE_WIDTH=1e3]="PAGE_WIDTH",SIZE[SIZE.TOP_NAV_HEIGHT=64]="TOP_NAV_HEIGHT",SIZE[SIZE.SIDEBAR_WIDTH=300]="SIDEBAR_WIDTH"}(SIZE||(exports.SIZE=SIZE={})),function(ZINDEX){ZINDEX[ZINDEX.TOP_NAV=1e3]="TOP_NAV",ZINDEX[ZINDEX.SIDEBAR=1001]="SIDEBAR",ZINDEX[ZINDEX.CONTEXT=1002]="CONTEXT",ZINDEX[ZINDEX.PROGRESS=2e3]="PROGRESS",ZINDEX[ZINDEX.MODAL=4e3]="MODAL",ZINDEX[ZINDEX.CURSOR=1e6]="CURSOR"}(ZINDEX||(exports.ZINDEX=ZINDEX={})),function(SYMBOL){SYMBOL.CHECKMARK="✓",SYMBOL.CROSS="✗",SYMBOL.NIL="∅",SYMBOL.ELLIPSIS="…",SYMBOL.MDASH="—",SYMBOL.NDASH="–",SYMBOL.FDASH="‒",SYMBOL.CTRL="⌃",SYMBOL.CMD="⌘",SYMBOL.ALT="⌥",SYMBOL.SHIFT="⇧"}(SYMBOL||(exports.SYMBOL=SYMBOL={})),function(COLOR){COLOR.LINK="#0089ff"}(COLOR||(exports.COLOR=COLOR={}))},"./node_modules/nano-theme/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/types.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/constants.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/css.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/breakpoints.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/font.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/react.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/color.js"),exports)},"./node_modules/nano-theme/lib/react.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalCss=exports.makeRule=exports.useRule=exports.useTheme=exports.Provider=void 0;const React=__webpack_require__("./node_modules/react/index.js"),light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),dark_1=__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),css_1=__webpack_require__("./node_modules/nano-theme/lib/css.js"),context=React.createContext(light_1.lightTheme);exports.Provider=React.memo((({theme,children})=>{const value="light"===theme?light_1.lightTheme:dark_1.darkTheme;return React.createElement(context.Provider,{value},children)}));exports.useTheme=()=>React.useContext(context);exports.useRule=fn=>{const css=fn((0,exports.useTheme)());return css_1.nano.cache(css)};exports.makeRule=fn=>()=>(0,exports.useRule)(fn);const useIsomorphicLayoutEffect_1=__webpack_require__("./node_modules/react-use/lib/useIsomorphicLayoutEffect.js");exports.GlobalCss=()=>{const theme=(0,exports.useTheme)();return(0,useIsomorphicLayoutEffect_1.default)((()=>{document.body.style.background=theme.bg,document.body.style.color=theme.g(.05,.85)}),[theme]),null}},"./node_modules/nano-theme/lib/themes/dark.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.darkTheme=void 0;const light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),g=(shade,opacity=1)=>{const g=255-Math.round(255*shade);return`rgba(${g},${g},${g},${opacity})`};exports.darkTheme=Object.assign(Object.assign({},light_1.lightTheme),{isLight:!1,name:"dark",bg:"#101921",color:Object.assign(Object.assign({},light_1.lightTheme.color),{ui:{lightLine:g(.1,.04),line:g(.1,.08),lineDark:g(.1,.16)}}),g})},"./node_modules/nano-theme/lib/types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/react-use/lib/misc/util.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"./node_modules/react-use/lib/useIsomorphicLayoutEffect.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("./node_modules/react-use/lib/misc/util.js").isBrowser?react_1.useLayoutEffect:react_1.useEffect;exports.default=useIsomorphicLayoutEffect},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);