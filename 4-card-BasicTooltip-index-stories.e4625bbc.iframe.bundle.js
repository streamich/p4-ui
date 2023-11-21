/*! For license information please see 4-card-BasicTooltip-index-stories.e4625bbc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkp4_ui=self.webpackChunkp4_ui||[]).push([[7568],{"./src/4-card/BasicTooltip/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2),lib=__webpack_require__("./node_modules/nano-theme/lib/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const{forwardRef,useState}=react_namespaceObject,blockClass=(0,lib.rule)({pos:"relative",d:"inline-flex"}),tooltipClass=(0,lib.rule)({d:"inline-flex",pos:"absolute",bgc:"rgba(0,0,0,.85)",bdrad:"4px",col:"#fff",fz:"14px",pad:"4px 8px",userSelect:"none",pointerEvents:"none",z:1e3}),BasicTooltip=forwardRef(((_ref,ref)=>{let{Component="span",top,bottom,left,right,renderTooltip,nowrap,show,children,onMouseEnter,onMouseLeave}=_ref;const[visible,setVisible]=useState(!1),theme=(0,lib.useTheme)();react.useEffect((()=>{const listener=()=>{setVisible(!1)};return document.addEventListener("mousedown",listener),()=>document.removeEventListener("mousedown",listener)}),[]);const C=Component;return(0,jsx_runtime.jsxs)(C,{className:blockClass,onMouseEnter:e=>{onMouseEnter&&onMouseEnter(e),renderTooltip&&setVisible(!0)},onMouseLeave:e=>{onMouseLeave&&onMouseLeave(e),renderTooltip&&setVisible(!1)},ref,children:[children,!!renderTooltip&&("boolean"==typeof show?show:!!visible)&&(0,jsx_runtime.jsx)(C,{className:tooltipClass,style:{top,bottom,left,right,boxShadow:theme.isLight?void 0:`0 0 0 1px ${theme.g(.1,.16)}`},children:nowrap?(0,jsx_runtime.jsx)("span",{style:{whiteSpace:"nowrap"},children:renderTooltip()}):renderTooltip()})]})}));try{BasicTooltip.displayName="BasicTooltip",BasicTooltip.__docgenInfo={description:"",displayName:"BasicTooltip",props:{Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'}]}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"string | number"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"string | number"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"string | number"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"string | number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(() => ReactNode)"}},nowrap:{defaultValue:null,description:"If true, text tooltip will be added CSS to not wrap it to new lines.",name:"nowrap",required:!1,type:{name:"boolean"}},show:{defaultValue:null,description:"To manually control the tooltip, set the `show` props.",name:"show",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/4-card/BasicTooltip/index.tsx#BasicTooltip"]={docgenInfo:BasicTooltip.__docgenInfo,name:"BasicTooltip",path:"src/4-card/BasicTooltip/index.tsx#BasicTooltip"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"4. Card/BasicTooltip",component:BasicTooltip,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{renderTooltip:()=>(0,jsx_runtime.jsx)("div",{style:{padding:10},children:"Hello world"}),children:"Hover me!"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    renderTooltip: () => <div style={{\n      padding: 10\n    }}>Hello world</div>,\n    children: 'Hover me!'\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/nano-theme/lib/breakpoints.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.m4=exports.m3=exports.m2=exports.m1=exports.b4=exports.b3=exports.b2=exports.b1=void 0,exports.b1=520,exports.b2=960,exports.b3=1300,exports.b4=1800,exports.m1=`@media (max-width:${exports.b1}px)`,exports.m2=`@media (max-width:${exports.b2}px)`,exports.m3=`@media (max-width:${exports.b3}px)`,exports.m4=`@media (max-width:${exports.b4}px)`},"./node_modules/nano-theme/lib/constants.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/nano-theme/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/types.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/constants.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/css.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/breakpoints.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/font.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/react.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/color.js"),exports)},"./node_modules/nano-theme/lib/react.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalCss=exports.makeRule=exports.useRule=exports.useTheme=exports.Provider=void 0;const React=__webpack_require__("./node_modules/react/index.js"),light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),dark_1=__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),css_1=__webpack_require__("./node_modules/nano-theme/lib/css.js"),context=React.createContext(light_1.lightTheme);exports.Provider=React.memo((({theme,children})=>{const value="light"===theme?light_1.lightTheme:dark_1.darkTheme;return React.createElement(context.Provider,{value},children)}));exports.useTheme=()=>React.useContext(context);exports.useRule=fn=>{const css=fn((0,exports.useTheme)());return css_1.nano.cache(css)};exports.makeRule=fn=>()=>(0,exports.useRule)(fn);const useIsomorphicLayoutEffect_1=__webpack_require__("./node_modules/react-use/lib/useIsomorphicLayoutEffect.js");exports.GlobalCss=()=>{const theme=(0,exports.useTheme)();return(0,useIsomorphicLayoutEffect_1.default)((()=>{document.body.style.background=theme.bg,document.body.style.color=theme.g(.05,.85)}),[theme]),null}},"./node_modules/nano-theme/lib/themes/dark.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.darkTheme=void 0;const light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),g=(shade,opacity=1)=>{const g=255-Math.round(255*shade);return`rgba(${g},${g},${g},${opacity})`};exports.darkTheme=Object.assign(Object.assign({},light_1.lightTheme),{isLight:!1,name:"dark",bg:"#101921",color:Object.assign(Object.assign({},light_1.lightTheme.color),{ui:{lightLine:g(.1,.04),line:g(.1,.08),lineDark:g(.1,.16)}}),g})},"./node_modules/nano-theme/lib/types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/react-use/lib/misc/util.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"./node_modules/react-use/lib/useIsomorphicLayoutEffect.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("./node_modules/react-use/lib/misc/util.js").isBrowser?react_1.useLayoutEffect:react_1.useEffect;exports.default=useIsomorphicLayoutEffect},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);