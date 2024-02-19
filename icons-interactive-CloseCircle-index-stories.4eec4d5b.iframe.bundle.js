/*! For license information please see icons-interactive-CloseCircle-index-stories.4eec4d5b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkp4_ui=self.webpackChunkp4_ui||[]).push([[576],{"./src/icons/interactive/CloseCircle/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var Close=__webpack_require__("./src/icons/interactive/Close/index.tsx"),lib=__webpack_require__("./node_modules/nano-theme/lib/index.js"),Ripple=__webpack_require__("./src/misc/Ripple/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const className=(0,lib.rule)({bdrad:"50%",boxSizing:"border-box",cur:"pointer"}),CloseCircle=_ref=>{let{small,onClick}=_ref;const size=small?36:64;return(0,jsx_runtime.jsx)(Ripple.n,{color:lib.lightTheme.g(.94),ms:small?5e3:2e3,children:(0,jsx_runtime.jsx)("div",{className,style:{width:size,height:size},onClick,children:(0,jsx_runtime.jsx)(Close.b,{style:{width:size,height:size}})})})};CloseCircle.displayName="CloseCircle";try{CloseCircle.displayName="CloseCircle",CloseCircle.__docgenInfo={description:"",displayName:"CloseCircle",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/interactive/CloseCircle/index.tsx#CloseCircle"]={docgenInfo:CloseCircle.__docgenInfo,name:"CloseCircle",path:"src/icons/interactive/CloseCircle/index.tsx#CloseCircle"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Icons/Interactive/CloseCircle",component:CloseCircle,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/icons/interactive/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Close});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js");const h=react__WEBPACK_IMPORTED_MODULE_0__.createElement,className=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({pos:"relative",d:"flex",w:"32px",h:"32px",bdrad:"3px",cur:"pointer",trs:"all .3s",justifyContent:"center",alignItems:"center",userSelect:"none",svg:{w:"32px",h:"32px",trs:"transform .3s"},"&:hover":{bdrad:"0px",".line-2":{"stroke-dashoffset":0}},"&:active":{".line-1":{stroke:"transparent"},".line-2":{transform:"rotate(90deg)",trs:"all 0.3s"},svg:{transform:"scale(.7)"}},".close-icon":{w:"28px",h:"28px"},".line-1":{fill:"none","stroke-width":"2px"},".line-2":{fill:"none",strokeWidth:"2px",strokeDasharray:25,strokeDashoffset:25,trs:"all 0.2s",transformOrigin:"50% 50%"}},"IconIntClose"),Close=props=>{const dynamicClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref=>{let{g}=_ref;return{".line-1":{stroke:g(.6)},".line-2":{stroke:g(.6)},"&:active":{".line-2":{stroke:g(.4)}}}}));return h("span",{...props,className:(props.className||"")+className+dynamicClass},h("svg",null,h("path",{className:"line-1",d:"M12 12 L20 20 M20 12 L12 20"}),h("path",{className:"line-2",d:"M12 12 L20 20 M20 12 L12 20"})))};try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/interactive/Close/index.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/icons/interactive/Close/index.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/misc/Ripple/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Ripple});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js");const noop=()=>{},rippleClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({bdrad:"50%",h:"100px",w:"100px",pos:"absolute",transform:"scale(0)",op:1,pointerEvents:"none","@keyframes decor-ripple":{"100%":{transform:"scale(12)",op:0}}});class Ripple extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static defaultProps={color:"rgba(0,0,0,.2)",ms:400};el=null;elRipple=null;ref=originalRef=>el=>{this.el=el,(originalRef||noop)(el)};refRipple=el=>{this.elRipple=el};onMouseDown=originalMouseDown=>event=>{if(!this.elRipple||!this.el)return;const{left,top}=this.el.getBoundingClientRect(),posX=left+window.scrollX,posY=top+window.scrollY,elX=event.pageX-posX,elY=event.pageY-posY,style=this.elRipple.style;style.removeProperty("animation"),style.top=elY-50+"px",style.left=elX-50+"px",setTimeout((()=>{style.setProperty("animation",`decor-ripple ${this.props.ms}ms linear`)}),35),(originalMouseDown||noop)(event)};render(){const{children,color}=this.props,element=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ripple=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{className:rippleClass,style:{background:color},ref:this.refRipple});let style=element.props.style||{};style=Object.assign({},style,{overflow:"hidden",position:"relative"});const innerChildren=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(element.props.children);return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,{...element.props,style,ref:this.ref(element.props.ref),onMouseDown:this.onMouseDown(element.props.onMouseDown)},ripple,...innerChildren)}}Ripple.displayName="Ripple";try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{color:{defaultValue:{value:"rgba(0,0,0,.2)"},description:"",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ms:{defaultValue:{value:"400"},description:"",name:"ms",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/misc/Ripple/index.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/misc/Ripple/index.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/nano-theme/lib/breakpoints.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.m4=exports.m3=exports.m2=exports.m1=exports.b4=exports.b3=exports.b2=exports.b1=void 0,exports.b1=520,exports.b2=960,exports.b3=1300,exports.b4=1800,exports.m1=`@media (max-width:${exports.b1}px)`,exports.m2=`@media (max-width:${exports.b2}px)`,exports.m3=`@media (max-width:${exports.b3}px)`,exports.m4=`@media (max-width:${exports.b4}px)`},"./node_modules/nano-theme/lib/constants.js":(__unused_webpack_module,exports)=>{var SIZE,ZINDEX,SYMBOL,COLOR;Object.defineProperty(exports,"__esModule",{value:!0}),exports.COLOR=exports.SYMBOL=exports.ZINDEX=exports.SIZE=void 0,function(SIZE){SIZE[SIZE.SITE_WIDTH=1300]="SITE_WIDTH",SIZE[SIZE.SITE_PADDING=32]="SITE_PADDING",SIZE[SIZE.PAGE_WIDTH=1e3]="PAGE_WIDTH",SIZE[SIZE.TOP_NAV_HEIGHT=64]="TOP_NAV_HEIGHT",SIZE[SIZE.SIDEBAR_WIDTH=300]="SIDEBAR_WIDTH"}(SIZE||(exports.SIZE=SIZE={})),function(ZINDEX){ZINDEX[ZINDEX.TOP_NAV=1e3]="TOP_NAV",ZINDEX[ZINDEX.SIDEBAR=1001]="SIDEBAR",ZINDEX[ZINDEX.CONTEXT=1002]="CONTEXT",ZINDEX[ZINDEX.PROGRESS=2e3]="PROGRESS",ZINDEX[ZINDEX.MODAL=4e3]="MODAL",ZINDEX[ZINDEX.CURSOR=1e6]="CURSOR"}(ZINDEX||(exports.ZINDEX=ZINDEX={})),function(SYMBOL){SYMBOL.CHECKMARK="✓",SYMBOL.CROSS="✗",SYMBOL.NIL="∅",SYMBOL.ELLIPSIS="…",SYMBOL.MDASH="—",SYMBOL.NDASH="–",SYMBOL.FDASH="‒",SYMBOL.CTRL="⌃",SYMBOL.CMD="⌘",SYMBOL.ALT="⌥",SYMBOL.SHIFT="⇧"}(SYMBOL||(exports.SYMBOL=SYMBOL={})),function(COLOR){COLOR.LINK="#0089ff"}(COLOR||(exports.COLOR=COLOR={}))},"./node_modules/nano-theme/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");__webpack_require__("./node_modules/nano-theme/lib/global-reset.js"),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/types.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/constants.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/css.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/breakpoints.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/font.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/react.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/color.js"),exports)},"./node_modules/nano-theme/lib/react.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalCss=exports.makeRule=exports.useRule=exports.useTheme=exports.Provider=void 0;const React=__webpack_require__("./node_modules/react/index.js"),light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),dark_1=__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),css_1=__webpack_require__("./node_modules/nano-theme/lib/css.js"),context=React.createContext(light_1.lightTheme);exports.Provider=React.memo((({theme,children})=>{const value="light"===theme?light_1.lightTheme:dark_1.darkTheme;return React.createElement(context.Provider,{value},children)}));exports.useTheme=()=>React.useContext(context);exports.useRule=fn=>{const css=fn((0,exports.useTheme)());return css_1.nano.cache(css)};exports.makeRule=fn=>()=>(0,exports.useRule)(fn);const useIsomorphicLayoutEffect_1=__webpack_require__("./node_modules/react-use/lib/useIsomorphicLayoutEffect.js");exports.GlobalCss=()=>{const theme=(0,exports.useTheme)();return(0,useIsomorphicLayoutEffect_1.default)((()=>{document.body.style.background=theme.bg,document.body.style.color=theme.g(.05,.85)}),[theme]),null}},"./node_modules/nano-theme/lib/themes/dark.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.darkTheme=void 0;const light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),g=(shade,opacity=1)=>{const g=255-Math.round(255*shade);return`rgba(${g},${g},${g},${opacity})`};exports.darkTheme=Object.assign(Object.assign({},light_1.lightTheme),{isLight:!1,name:"dark",bg:"#101921",color:Object.assign(Object.assign({},light_1.lightTheme.color),{ui:{lightLine:g(.1,.04),line:g(.1,.08),lineDark:g(.1,.16)}}),g})},"./node_modules/nano-theme/lib/types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/react-use/lib/misc/util.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"./node_modules/react-use/lib/useIsomorphicLayoutEffect.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("./node_modules/react-use/lib/misc/util.js").isBrowser?react_1.useLayoutEffect:react_1.useEffect;exports.default=useIsomorphicLayoutEffect},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);