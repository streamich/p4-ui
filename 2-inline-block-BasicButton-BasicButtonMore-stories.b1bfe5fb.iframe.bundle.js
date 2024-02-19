/*! For license information please see 2-inline-block-BasicButton-BasicButtonMore-stories.b1bfe5fb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkp4_ui=self.webpackChunkp4_ui||[]).push([[524],{"./src/2-inline-block/BasicButton/BasicButtonMore.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BasicButtonMore_stories});__webpack_require__("./node_modules/react/index.js");var More=__webpack_require__("./src/icons/svg/More.tsx"),BasicButton=__webpack_require__("./src/2-inline-block/BasicButton/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BasicButtonMore=props=>(0,jsx_runtime.jsx)(BasicButton.Ay,{...props,children:(0,jsx_runtime.jsx)(More.A,{})});BasicButtonMore.displayName="BasicButtonMore";try{BasicButtonMore.displayName="BasicButtonMore",BasicButtonMore.__docgenInfo={description:"",displayName:"BasicButtonMore",props:{to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/BasicButton/BasicButtonMore.tsx#BasicButtonMore"]={docgenInfo:BasicButtonMore.__docgenInfo,name:"BasicButtonMore",path:"src/2-inline-block/BasicButton/BasicButtonMore.tsx#BasicButtonMore"})}catch(__react_docgen_typescript_loader_error){}const BasicButtonMore_stories={title:"2. Inline Block/BasicButton/BasicButtonMore",component:BasicButtonMore,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/1-inline/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var react=__webpack_require__("./node_modules/react/index.js");const context=react.createContext((()=>{})),noop=()=>{},Link=react.forwardRef(((props,ref)=>{let{replace,state,to,a,comp=a?"a":"button",onClick:originalClick=noop,target,...rest}=props;const go=react.useContext(context),attr={...rest,ref,onClick:react.useCallback((event=>{event.defaultPrevented||0!==event.button||target||(event=>!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey))(event)||(event.preventDefault(),"string"==typeof to&&go(to,state?state(props):void 0,replace),originalClick(event))}),[originalClick,replace,target,state])};return"a"===comp&&(attr.href=to,attr.target=target),react.createElement(comp,attr)}));try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},a:{defaultValue:null,description:"",name:"a",required:!1,type:{name:"boolean"}},comp:{defaultValue:null,description:"",name:"comp",required:!1,type:{name:"string | ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/1-inline/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/1-inline/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/BasicButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,JK:()=>BasicButton});__webpack_require__("./node_modules/react/index.js");var nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),_1_inline_Link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/1-inline/Link/index.tsx"),_misc_Ripple__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/misc/Ripple/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const blockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.font.ui1.mid,fz:"14px",cur:"pointer",us:"none",trs:"background .12s ease-in 0s, opacity .12s ease-in 0s",d:"inline-flex",ai:"center",jc:"center",fls:0,bdrad:"3px",bg:"transparent",bd:0,mr:0,pd:0,out:0,ov:"visible","&:hover":{bxsh:"none"},"&:active":{bxsh:"none"}}),handleDragStart=e=>e.preventDefault(),BasicButton=_ref=>{let{to,border,fill,size=24,width=size,height=size,round,title,positive,transparent,onClick,children,compact,className="",...rest}=_ref;const theme=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)(),{isLight}=theme,bgFactor=isLight?1:1.1,dynamicBlockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref2=>{let{g}=_ref2;return{col:g(.2),svg:{fill:g(.5),col:g(.5)},"&:hover":{col:g(.2),bg:g(0,.08*bgFactor)},"&:active":{bg:g(0,.16*bgFactor)}}})),fillBlockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref3=>{let{g}=_ref3;return{bg:transparent?"transparent":g(0,.04*bgFactor),"&:hover":{bg:g(0,.08*bgFactor)},"&:active":{bg:g(0,.16*bgFactor)}}})),borderClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref4=>{let{g}=_ref4;return{bd:`1px solid ${g(0,.16*bgFactor)}`,boxShadow:`0 0 2px ${g(0,.04*bgFactor)}`}})),style={height};return"auto"===width?(style.paddingLeft=compact?8:16,style.paddingRight=compact?8:16):style.width=width,round&&(style.borderRadius="50%"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_misc_Ripple__WEBPACK_IMPORTED_MODULE_3__.n,{ms:1500,color:positive?theme.color.sem.positive[0]:theme.g(0,.08),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_1_inline_Link__WEBPACK_IMPORTED_MODULE_2__.N,{...rest,a:!!to,className:className+blockClass+dynamicBlockClass+(border?borderClass:"")+(fill?fillBlockClass:""),style,title,onClick:to?void 0:onClick,onDragStart:handleDragStart,to,"data-testid":"BasicButton",children})})};BasicButton.displayName="BasicButton";const __WEBPACK_DEFAULT_EXPORT__=BasicButton;try{BasicButton.displayName="BasicButton",BasicButton.__docgenInfo={description:"",displayName:"BasicButton",props:{to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"24"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"24"},description:"",name:"height",required:!1,type:{name:"string | number"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/BasicButton/index.tsx#BasicButton"]={docgenInfo:BasicButton.__docgenInfo,name:"BasicButton",path:"src/2-inline-block/BasicButton/index.tsx#BasicButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/svg/More.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const moreIconClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({d:"block",fill:nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.g(.4),flexShrink:0,backfaceVisibility:"hidden"}),IconMore=_ref=>{let{size=14,fill}=_ref;const style={width:size,height:size};return void 0!==fill&&(style.fill=fill),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{viewBox:"0 0 13 3",className:moreIconClass,style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"})]})})};IconMore.displayName="IconMore";const __WEBPACK_DEFAULT_EXPORT__=IconMore;try{More.displayName="More",More.__docgenInfo={description:"",displayName:"More",props:{size:{defaultValue:{value:"14"},description:"",name:"size",required:!1,type:{name:"number"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/svg/More.tsx#More"]={docgenInfo:More.__docgenInfo,name:"More",path:"src/icons/svg/More.tsx#More"})}catch(__react_docgen_typescript_loader_error){}},"./src/misc/Ripple/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Ripple});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js");const noop=()=>{},rippleClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({bdrad:"50%",h:"100px",w:"100px",pos:"absolute",transform:"scale(0)",op:1,pointerEvents:"none","@keyframes decor-ripple":{"100%":{transform:"scale(12)",op:0}}});class Ripple extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static defaultProps={color:"rgba(0,0,0,.2)",ms:400};el=null;elRipple=null;ref=originalRef=>el=>{this.el=el,(originalRef||noop)(el)};refRipple=el=>{this.elRipple=el};onMouseDown=originalMouseDown=>event=>{if(!this.elRipple||!this.el)return;const{left,top}=this.el.getBoundingClientRect(),posX=left+window.scrollX,posY=top+window.scrollY,elX=event.pageX-posX,elY=event.pageY-posY,style=this.elRipple.style;style.removeProperty("animation"),style.top=elY-50+"px",style.left=elX-50+"px",setTimeout((()=>{style.setProperty("animation",`decor-ripple ${this.props.ms}ms linear`)}),35),(originalMouseDown||noop)(event)};render(){const{children,color}=this.props,element=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ripple=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{className:rippleClass,style:{background:color},ref:this.refRipple});let style=element.props.style||{};style=Object.assign({},style,{overflow:"hidden",position:"relative"});const innerChildren=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(element.props.children);return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,{...element.props,style,ref:this.ref(element.props.ref),onMouseDown:this.onMouseDown(element.props.onMouseDown)},ripple,...innerChildren)}}Ripple.displayName="Ripple";try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{color:{defaultValue:{value:"rgba(0,0,0,.2)"},description:"",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ms:{defaultValue:{value:"400"},description:"",name:"ms",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/misc/Ripple/index.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/misc/Ripple/index.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/nano-theme/lib/breakpoints.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.m4=exports.m3=exports.m2=exports.m1=exports.b4=exports.b3=exports.b2=exports.b1=void 0,exports.b1=520,exports.b2=960,exports.b3=1300,exports.b4=1800,exports.m1=`@media (max-width:${exports.b1}px)`,exports.m2=`@media (max-width:${exports.b2}px)`,exports.m3=`@media (max-width:${exports.b3}px)`,exports.m4=`@media (max-width:${exports.b4}px)`},"./node_modules/nano-theme/lib/constants.js":(__unused_webpack_module,exports)=>{var SIZE,ZINDEX,SYMBOL,COLOR;Object.defineProperty(exports,"__esModule",{value:!0}),exports.COLOR=exports.SYMBOL=exports.ZINDEX=exports.SIZE=void 0,function(SIZE){SIZE[SIZE.SITE_WIDTH=1300]="SITE_WIDTH",SIZE[SIZE.SITE_PADDING=32]="SITE_PADDING",SIZE[SIZE.PAGE_WIDTH=1e3]="PAGE_WIDTH",SIZE[SIZE.TOP_NAV_HEIGHT=64]="TOP_NAV_HEIGHT",SIZE[SIZE.SIDEBAR_WIDTH=300]="SIDEBAR_WIDTH"}(SIZE||(exports.SIZE=SIZE={})),function(ZINDEX){ZINDEX[ZINDEX.TOP_NAV=1e3]="TOP_NAV",ZINDEX[ZINDEX.SIDEBAR=1001]="SIDEBAR",ZINDEX[ZINDEX.CONTEXT=1002]="CONTEXT",ZINDEX[ZINDEX.PROGRESS=2e3]="PROGRESS",ZINDEX[ZINDEX.MODAL=4e3]="MODAL",ZINDEX[ZINDEX.CURSOR=1e6]="CURSOR"}(ZINDEX||(exports.ZINDEX=ZINDEX={})),function(SYMBOL){SYMBOL.CHECKMARK="✓",SYMBOL.CROSS="✗",SYMBOL.NIL="∅",SYMBOL.ELLIPSIS="…",SYMBOL.MDASH="—",SYMBOL.NDASH="–",SYMBOL.FDASH="‒",SYMBOL.CTRL="⌃",SYMBOL.CMD="⌘",SYMBOL.ALT="⌥",SYMBOL.SHIFT="⇧"}(SYMBOL||(exports.SYMBOL=SYMBOL={})),function(COLOR){COLOR.LINK="#0089ff"}(COLOR||(exports.COLOR=COLOR={}))},"./node_modules/nano-theme/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");__webpack_require__("./node_modules/nano-theme/lib/global-reset.js"),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/types.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/constants.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/css.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/breakpoints.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/font.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/react.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/color.js"),exports)},"./node_modules/nano-theme/lib/react.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalCss=exports.makeRule=exports.useRule=exports.useTheme=exports.Provider=void 0;const React=__webpack_require__("./node_modules/react/index.js"),light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),dark_1=__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),css_1=__webpack_require__("./node_modules/nano-theme/lib/css.js"),context=React.createContext(light_1.lightTheme);exports.Provider=React.memo((({theme,children})=>{const value="light"===theme?light_1.lightTheme:dark_1.darkTheme;return React.createElement(context.Provider,{value},children)}));exports.useTheme=()=>React.useContext(context);exports.useRule=fn=>{const css=fn((0,exports.useTheme)());return css_1.nano.cache(css)};exports.makeRule=fn=>()=>(0,exports.useRule)(fn);const useIsomorphicLayoutEffect_1=__webpack_require__("./node_modules/react-use/lib/useIsomorphicLayoutEffect.js");exports.GlobalCss=()=>{const theme=(0,exports.useTheme)();return(0,useIsomorphicLayoutEffect_1.default)((()=>{document.body.style.background=theme.bg,document.body.style.color=theme.g(.05,.85)}),[theme]),null}},"./node_modules/nano-theme/lib/themes/dark.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.darkTheme=void 0;const light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),g=(shade,opacity=1)=>{const g=255-Math.round(255*shade);return`rgba(${g},${g},${g},${opacity})`};exports.darkTheme=Object.assign(Object.assign({},light_1.lightTheme),{isLight:!1,name:"dark",bg:"#101921",color:Object.assign(Object.assign({},light_1.lightTheme.color),{ui:{lightLine:g(.1,.04),line:g(.1,.08),lineDark:g(.1,.16)}}),g})},"./node_modules/nano-theme/lib/types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/react-use/lib/misc/util.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"./node_modules/react-use/lib/useIsomorphicLayoutEffect.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("./node_modules/react-use/lib/misc/util.js").isBrowser?react_1.useLayoutEffect:react_1.useEffect;exports.default=useIsomorphicLayoutEffect},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);