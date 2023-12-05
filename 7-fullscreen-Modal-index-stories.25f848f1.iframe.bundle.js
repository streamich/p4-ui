"use strict";(self.webpackChunkp4_ui=self.webpackChunkp4_ui||[]).push([[6767],{"./src/7-fullscreen/Modal/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"7. Fullscreen/Modal",component:__webpack_require__("./src/7-fullscreen/Modal/index.tsx").u,tags:["autodocs"],argTypes:{}},Primary={args:{children:"Children ..."}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Children ...'\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/1-inline/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react=__webpack_require__("./node_modules/react/index.js");const context=react.createContext((()=>{})),noop=()=>{},Link=react.forwardRef(((props,ref)=>{let{replace,state,to,a,comp=a?"a":"button",onClick:originalClick=noop,target,...rest}=props;const go=react.useContext(context),attr={...rest,ref,onClick:react.useCallback((event=>{event.defaultPrevented||0!==event.button||target||(event=>!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey))(event)||(event.preventDefault(),"string"==typeof to&&go(to,state?state(props):void 0,replace),originalClick(event))}),[originalClick,replace,target,state])};return"a"===comp&&(attr.href=to,attr.target=target),react.createElement(comp,attr)}));try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},a:{defaultValue:null,description:"",name:"a",required:!1,type:{name:"boolean"}},comp:{defaultValue:null,description:"",name:"comp",required:!1,type:{name:"string | ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/1-inline/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/1-inline/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/BasicButton/BasicButtonClose.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>BasicButtonClose});__webpack_require__("./node_modules/react/index.js");var _icons_interactive_Close__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icons/interactive/Close/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/2-inline-block/BasicButton/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BasicButtonClose=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons_interactive_Close__WEBPACK_IMPORTED_MODULE_1__.x,{})});BasicButtonClose.displayName="BasicButtonClose";try{BasicButtonClose.displayName="BasicButtonClose",BasicButtonClose.__docgenInfo={description:"",displayName:"BasicButtonClose",props:{to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/BasicButton/BasicButtonClose.tsx#BasicButtonClose"]={docgenInfo:BasicButtonClose.__docgenInfo,name:"BasicButtonClose",path:"src/2-inline-block/BasicButton/BasicButtonClose.tsx#BasicButtonClose"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/BasicButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,kD:()=>BasicButton});__webpack_require__("./node_modules/react/index.js");var nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),_1_inline_Link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/1-inline/Link/index.tsx"),_misc_Ripple__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/misc/Ripple/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const blockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.font.ui1.mid,fz:"14px",cur:"pointer",us:"none",trs:"background .12s ease-in 0s, opacity .12s ease-in 0s",d:"inline-flex",ai:"center",jc:"center",fls:0,bdrad:"3px",bg:"transparent",bd:0,mr:0,pd:0,out:0,ov:"visible","&:hover":{bxsh:"none"},"&:active":{bxsh:"none"}}),handleDragStart=e=>e.preventDefault(),BasicButton=_ref=>{let{to,border,fill,size=24,width=size,height=size,round,title,positive,transparent,onClick,children,compact,className="",...rest}=_ref;const theme=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)(),{isLight}=theme,bgFactor=isLight?1:1.1,dynamicBlockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref2=>{let{g}=_ref2;return{col:g(.2),svg:{fill:g(.5),col:g(.5)},"&:hover":{col:g(.2),bg:g(0,.08*bgFactor)},"&:active":{bg:g(0,.16*bgFactor)}}})),fillBlockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref3=>{let{g}=_ref3;return{bg:transparent?"transparent":g(0,.04*bgFactor),"&:hover":{bg:g(0,.08*bgFactor)},"&:active":{bg:g(0,.16*bgFactor)}}})),borderClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref4=>{let{g}=_ref4;return{bd:`1px solid ${g(0,.16*bgFactor)}`,boxShadow:`0 0 2px ${g(0,.04*bgFactor)}`}})),style={height};return"auto"===width?(style.paddingLeft=compact?8:16,style.paddingRight=compact?8:16):style.width=width,round&&(style.borderRadius="50%"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_misc_Ripple__WEBPACK_IMPORTED_MODULE_3__.H,{ms:1500,color:positive?theme.color.sem.positive[0]:theme.g(0,.08),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_1_inline_Link__WEBPACK_IMPORTED_MODULE_2__.r,{...rest,a:!!to,className:className+blockClass+dynamicBlockClass+(border?borderClass:"")+(fill?fillBlockClass:""),style,title,onClick:to?void 0:onClick,onDragStart:handleDragStart,to,"data-testid":"BasicButton",children})})};BasicButton.displayName="BasicButton";const __WEBPACK_DEFAULT_EXPORT__=BasicButton;try{BasicButton.displayName="BasicButton",BasicButton.__docgenInfo={description:"",displayName:"BasicButton",props:{to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"24"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"24"},description:"",name:"height",required:!1,type:{name:"string | number"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/BasicButton/index.tsx#BasicButton"]={docgenInfo:BasicButton.__docgenInfo,name:"BasicButton",path:"src/2-inline-block/BasicButton/index.tsx#BasicButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/7-fullscreen/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),use_t__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/use-t/lib/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),libreact_lib_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/libreact/lib/Modal/index.js"),_2_inline_block_BasicButton_BasicButtonClose__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/2-inline-block/BasicButton/BasicButtonClose.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{useCallback,useEffect}=react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)),className=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({pos:"relative",minW:"280px",minH:"80px",maxH:"100vh",bxz:"border-box",fz:"14px",ov:"hidden",animation:"fadeInScaleIn .15s",overflowY:"auto"}),bordersClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({boxShadow:"0 0 3px rgba(0,0,0,.1), 0 2px 6px rgba(0,0,0,.05), 0 5px 20px rgba(0,0,0,.02)",bdrad:"4px"}),bordersContractClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({boxShadow:"0 0 3px rgba(0,0,0,.1), 0 2px 6px rgba(0,0,0,.05), 0 5px 20px rgba(0,0,0,.02), 0 0 33px rgba(0,0,0,.04), 0 20px 44px rgba(0,0,0,.05)",bdrad:"4px"}),classNameNoBg=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({bg:"transparent"}),classNameTitle=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.font.ui3.lite,pos:"absolute",fz:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.fontSize(-1)+"px",top:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(1)+"px",left:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(1)+"px",userSelect:"none"}),classNameClose=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({pos:"absolute",z:3,top:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(0)+"px",right:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(0)+"px",pad:0,mar:0,bd:0,out:0,bg:"transparent"}),classNameContent=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({pos:"relative",z:2,pad:`${nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(3)+nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(1)}px ${nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(1)}px  ${nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(2)}px`}),removeBodyClass=()=>document.body.classList.remove("__p4_modal"),Modal=_ref=>{let{noAnimation,title,raise,contrast,noBorders,noBackground,noPadding,dontLockFocus=!1,onEsc,onOutsideClick,onCloseClick,color,rounder,children}=_ref;const theme=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)(),[t]=(0,use_t__WEBPACK_IMPORTED_MODULE_1__.NT)(),onElement=useCallback((el=>{el.style.zIndex=""+nano_theme__WEBPACK_IMPORTED_MODULE_2__.ZINDEX.MODAL}),[]);useEffect((()=>(document.body.classList.add("__p4_modal"),removeBodyClass)),[]);let titleElement=null;title&&(titleElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classNameTitle,style:{color:theme.g(.1,.6)},children:title}));const contentClasses=(noAnimation?"":"fadeInScale")+className+(noBorders?"":contrast?bordersContractClass:bordersClass)+(noBackground?classNameNoBg:""),style={background:noBackground?"transparent":theme.bg,boxShadow:theme.isLight?void 0:`0 0 0 1px ${theme.g(.1,.16)}`};rounder&&(style.borderRadius="12px"),noAnimation&&(style.animation="none");let content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:contentClasses,style,children:[titleElement,noPadding?children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classNameContent,children}),onCloseClick&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classNameClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_2_inline_block_BasicButton_BasicButtonClose__WEBPACK_IMPORTED_MODULE_4__.n,{onClick:onCloseClick,tabIndex:-1,title:`${t("Close")} (Esc)`,size:32})})]});raise&&(content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{height:"100vh",padding:"100px 0 0"},children:content}));const BaseModalUntyped=libreact_lib_Modal__WEBPACK_IMPORTED_MODULE_3__.u;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BaseModalUntyped,{dontLockFocus,onElement,onClick:onOutsideClick,onEsc,color:color||(theme.isLight?contrast?"rgba(0,0,64,.4)":"rgba(255,255,255,.8)":"rgba(0,0,0,.4)"),children:content})};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},noAnimation:{defaultValue:null,description:"",name:"noAnimation",required:!1,type:{name:"boolean"}},raise:{defaultValue:null,description:"",name:"raise",required:!1,type:{name:"boolean"}},contrast:{defaultValue:null,description:"",name:"contrast",required:!1,type:{name:"boolean"}},onEsc:{defaultValue:null,description:"",name:"onEsc",required:!1,type:{name:"KeyboardEventHandler<any>"}},onOutsideClick:{defaultValue:null,description:"",name:"onOutsideClick",required:!1,type:{name:"MouseEventHandler<any>"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"MouseEventHandler<any>"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},noBorders:{defaultValue:null,description:"",name:"noBorders",required:!1,type:{name:"boolean"}},noBackground:{defaultValue:null,description:"",name:"noBackground",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},dontLockFocus:{defaultValue:{value:"false"},description:"",name:"dontLockFocus",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},rounder:{defaultValue:null,description:"",name:"rounder",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/7-fullscreen/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/7-fullscreen/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/interactive/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js");const h=react__WEBPACK_IMPORTED_MODULE_0__.createElement,className=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({pos:"relative",d:"flex",w:"32px",h:"32px",bdrad:"3px",cur:"pointer",trs:"all .3s",justifyContent:"center",alignItems:"center",userSelect:"none",svg:{w:"32px",h:"32px",trs:"transform .3s"},"&:hover":{bdrad:"0px",".line-2":{"stroke-dashoffset":0}},"&:active":{".line-1":{stroke:"transparent"},".line-2":{transform:"rotate(90deg)",trs:"all 0.3s"},svg:{transform:"scale(.7)"}},".close-icon":{w:"28px",h:"28px"},".line-1":{fill:"none","stroke-width":"2px"},".line-2":{fill:"none",strokeWidth:"2px",strokeDasharray:25,strokeDashoffset:25,trs:"all 0.2s",transformOrigin:"50% 50%"}},"IconIntClose"),Close=props=>{const dynamicClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref=>{let{g}=_ref;return{".line-1":{stroke:g(.6)},".line-2":{stroke:g(.6)},"&:active":{".line-2":{stroke:g(.4)}}}}));return h("span",{...props,className:(props.className||"")+className+dynamicClass},h("svg",null,h("path",{className:"line-1",d:"M12 12 L20 20 M20 12 L12 20"}),h("path",{className:"line-2",d:"M12 12 L20 20 M20 12 L12 20"})))};try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/interactive/Close/index.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/icons/interactive/Close/index.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/misc/Ripple/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Ripple});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js");const noop=()=>{},rippleClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({bdrad:"50%",h:"100px",w:"100px",pos:"absolute",transform:"scale(0)",op:1,pointerEvents:"none","@keyframes decor-ripple":{"100%":{transform:"scale(12)",op:0}}});class Ripple extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static defaultProps={color:"rgba(0,0,0,.2)",ms:400};el=null;elRipple=null;ref=originalRef=>el=>{this.el=el,(originalRef||noop)(el)};refRipple=el=>{this.elRipple=el};onMouseDown=originalMouseDown=>event=>{if(!this.elRipple||!this.el)return;const{left,top}=this.el.getBoundingClientRect(),posX=left+window.scrollX,posY=top+window.scrollY,elX=event.pageX-posX,elY=event.pageY-posY,style=this.elRipple.style;style.removeProperty("animation"),style.top=elY-50+"px",style.left=elX-50+"px",setTimeout((()=>{style.setProperty("animation",`decor-ripple ${this.props.ms}ms linear`)}),35),(originalMouseDown||noop)(event)};render(){const{children,color}=this.props,element=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ripple=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{className:rippleClass,style:{background:color},ref:this.refRipple});let style=element.props.style||{};style=Object.assign({},style,{overflow:"hidden",position:"relative"});const innerChildren=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(element.props.children);return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,{...element.props,style,ref:this.ref(element.props.ref),onMouseDown:this.onMouseDown(element.props.onMouseDown)},ripple,...innerChildren)}}Ripple.displayName="Ripple";try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{color:{defaultValue:{value:"rgba(0,0,0,.2)"},description:"",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ms:{defaultValue:{value:"400"},description:"",name:"ms",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/misc/Ripple/index.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/misc/Ripple/index.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}}}]);