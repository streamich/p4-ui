"use strict";(self.webpackChunkp4_ui=self.webpackChunkp4_ui||[]).push([[8944],{"./src/7-fullscreen/ModalAlert/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/nano-theme/lib/index.js"),Modal=__webpack_require__("./src/7-fullscreen/Modal/index.tsx"),Button=__webpack_require__("./src/2-inline-block/Button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const className=(0,lib.rule)({...lib.theme.font.sans,fz:"16px",lh:"1.5em",minW:"200px",maxW:"500px",ta:"center",pad:`0 ${lib.theme.space(-2)}px`}),footerClass=(0,lib.rule)({pad:`${lib.theme.space(3)}px 0 0`}),ModalAlert=_ref=>{let{button="OK",onOk,children,...rest}=_ref;const theme=(0,lib.useTheme)();return(0,jsx_runtime.jsxs)(Modal.u,{...rest,contrast:!0,children:[(0,jsx_runtime.jsx)("div",{className,style:{color:theme.g(.3)},children}),(0,jsx_runtime.jsx)("div",{className:footerClass,children:(0,jsx_runtime.jsx)(Button.z,{noOutline:!0,block:!0,size:0,onClick:onOk,children:"function"==typeof button?button():button})})]})};ModalAlert.displayName="ModalAlert";try{ModalAlert.displayName="ModalAlert",ModalAlert.__docgenInfo={description:"",displayName:"ModalAlert",props:{button:{defaultValue:{value:"OK"},description:"",name:"button",required:!1,type:{name:"ReactNode | (() => ReactNode)"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"MouseEventHandler<any>"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},noAnimation:{defaultValue:null,description:"",name:"noAnimation",required:!1,type:{name:"boolean"}},raise:{defaultValue:null,description:"",name:"raise",required:!1,type:{name:"boolean"}},contrast:{defaultValue:null,description:"",name:"contrast",required:!1,type:{name:"boolean"}},onEsc:{defaultValue:null,description:"",name:"onEsc",required:!1,type:{name:"KeyboardEventHandler<any>"}},onOutsideClick:{defaultValue:null,description:"",name:"onOutsideClick",required:!1,type:{name:"MouseEventHandler<any>"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"MouseEventHandler<any>"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},noBorders:{defaultValue:null,description:"",name:"noBorders",required:!1,type:{name:"boolean"}},noBackground:{defaultValue:null,description:"",name:"noBackground",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},dontLockFocus:{defaultValue:null,description:"",name:"dontLockFocus",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},rounder:{defaultValue:null,description:"",name:"rounder",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/7-fullscreen/ModalAlert/ModalAlert.tsx#ModalAlert"]={docgenInfo:ModalAlert.__docgenInfo,name:"ModalAlert",path:"src/7-fullscreen/ModalAlert/ModalAlert.tsx#ModalAlert"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/use-t/lib/index.js");const context=react.createContext({alert:()=>{}});let counter=0;const AlertProvider=_ref=>{let{children}=_ref;const[alerts,setAlerts]=react.useState([]),value=react.useMemo((()=>({alert:function(msg){let{showCloseButton,...props}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const id=counter++,onClose=()=>{setAlerts((alerts=>alerts.filter((item=>item.id!==id))))},element=(0,react.createElement)(ModalAlert,{...props,key:id,onOk:event=>{onClose(),props.onOk&&props.onOk(event)},onEsc:onClose,onOutsideClick:onClose,onCloseClick:showCloseButton?onClose:void 0},msg);setAlerts((alerts=>[...alerts,{id,element}]))}})),[]);return(0,jsx_runtime.jsxs)(context.Provider,{value,children:[children,alerts.map((_ref2=>{let{element}=_ref2;return element}))]})};AlertProvider.displayName="AlertProvider";const useAlert=()=>React.useContext(context).alert,UseAlert=_ref3=>{let{children}=_ref3;return children(useAlert())};try{AlertProvider.displayName="AlertProvider",AlertProvider.__docgenInfo={description:"",displayName:"AlertProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/7-fullscreen/ModalAlert/context.tsx#AlertProvider"]={docgenInfo:AlertProvider.__docgenInfo,name:"AlertProvider",path:"src/7-fullscreen/ModalAlert/context.tsx#AlertProvider"})}catch(__react_docgen_typescript_loader_error){}try{UseAlert.displayName="UseAlert",UseAlert.__docgenInfo={description:"",displayName:"UseAlert",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/7-fullscreen/ModalAlert/context.tsx#UseAlert"]={docgenInfo:UseAlert.__docgenInfo,name:"UseAlert",path:"src/7-fullscreen/ModalAlert/context.tsx#UseAlert"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"7. Fullscreen/ModalAlert",component:ModalAlert,tags:["autodocs"],argTypes:{}},Primary={args:{children:"Children ..."}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Children ...'\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/1-inline/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react=__webpack_require__("./node_modules/react/index.js");const context=react.createContext((()=>{})),noop=()=>{},Link=react.forwardRef(((props,ref)=>{let{replace,state,to,a,comp=a?"a":"button",onClick:originalClick=noop,target,...rest}=props;const go=react.useContext(context),attr={...rest,ref,onClick:react.useCallback((event=>{event.defaultPrevented||0!==event.button||target||(event=>!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey))(event)||(event.preventDefault(),"string"==typeof to&&go(to,state?state(props):void 0,replace),originalClick(event))}),[originalClick,replace,target,state])};return"a"===comp&&(attr.href=to,attr.target=target),react.createElement(comp,attr)}));try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},a:{defaultValue:null,description:"",name:"a",required:!1,type:{name:"boolean"}},comp:{defaultValue:null,description:"",name:"comp",required:!1,type:{name:"string | ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/1-inline/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/1-inline/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/BasicButton/BasicButtonClose.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>BasicButtonClose});__webpack_require__("./node_modules/react/index.js");var _icons_interactive_Close__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icons/interactive/Close/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/2-inline-block/BasicButton/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BasicButtonClose=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons_interactive_Close__WEBPACK_IMPORTED_MODULE_1__.x,{})});BasicButtonClose.displayName="BasicButtonClose";try{BasicButtonClose.displayName="BasicButtonClose",BasicButtonClose.__docgenInfo={description:"",displayName:"BasicButtonClose",props:{to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/BasicButton/BasicButtonClose.tsx#BasicButtonClose"]={docgenInfo:BasicButtonClose.__docgenInfo,name:"BasicButtonClose",path:"src/2-inline-block/BasicButton/BasicButtonClose.tsx#BasicButtonClose"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/BasicButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,kD:()=>BasicButton});__webpack_require__("./node_modules/react/index.js");var nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),_1_inline_Link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/1-inline/Link/index.tsx"),_misc_Ripple__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/misc/Ripple/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const blockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.font.ui1.mid,fz:"14px",cur:"pointer",us:"none",trs:"background .12s ease-in 0s, opacity .12s ease-in 0s",d:"inline-flex",ai:"center",jc:"center",fls:0,bdrad:"3px",bg:"transparent",bd:0,mr:0,pd:0,out:0,ov:"visible","&:hover":{bxsh:"none"},"&:active":{bxsh:"none"}}),handleDragStart=e=>e.preventDefault(),BasicButton=_ref=>{let{to,border,fill,size=24,width=size,height=size,round,title,positive,transparent,onClick,children,compact,className="",...rest}=_ref;const theme=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)(),{isLight}=theme,bgFactor=isLight?1:1.1,dynamicBlockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref2=>{let{g}=_ref2;return{col:g(.2),svg:{fill:g(.5),col:g(.5)},"&:hover":{col:g(.2),bg:g(0,.08*bgFactor)},"&:active":{bg:g(0,.16*bgFactor)}}})),fillBlockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref3=>{let{g}=_ref3;return{bg:transparent?"transparent":g(0,.04*bgFactor),"&:hover":{bg:g(0,.08*bgFactor)},"&:active":{bg:g(0,.16*bgFactor)}}})),borderClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref4=>{let{g}=_ref4;return{bd:`1px solid ${g(0,.16*bgFactor)}`,boxShadow:`0 0 2px ${g(0,.04*bgFactor)}`}})),style={height};return"auto"===width?(style.paddingLeft=compact?8:16,style.paddingRight=compact?8:16):style.width=width,round&&(style.borderRadius="50%"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_misc_Ripple__WEBPACK_IMPORTED_MODULE_3__.H,{ms:1500,color:positive?theme.color.sem.positive[0]:theme.g(0,.08),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_1_inline_Link__WEBPACK_IMPORTED_MODULE_2__.r,{...rest,a:!!to,className:className+blockClass+dynamicBlockClass+(border?borderClass:"")+(fill?fillBlockClass:""),style,title,onClick:to?void 0:onClick,onDragStart:handleDragStart,to,"data-testid":"BasicButton",children})})};BasicButton.displayName="BasicButton";const __WEBPACK_DEFAULT_EXPORT__=BasicButton;try{BasicButton.displayName="BasicButton",BasicButton.__docgenInfo={description:"",displayName:"BasicButton",props:{to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:{value:"24"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"24"},description:"",name:"height",required:!1,type:{name:"string | number"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/BasicButton/index.tsx#BasicButton"]={docgenInfo:BasicButton.__docgenInfo,name:"BasicButton",path:"src/2-inline-block/BasicButton/index.tsx#BasicButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2),lib=__webpack_require__("./node_modules/nano-theme/lib/index.js"),Link=__webpack_require__("./src/1-inline/Link/index.tsx"),Ripple=__webpack_require__("./src/misc/Ripple/index.tsx"),useMountedState=__webpack_require__("./node_modules/react-use/lib/useMountedState.js");const{useState,useMemo}=react_namespaceObject;var SpinnerCircle=__webpack_require__("./src/2-inline-block/SpinnerCircle/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const h=react.createElement,buttonClass=(0,lib.rule)({...lib.theme.font.ui3.mid,fz:"15px",d:"inline-flex",w:"auto",h:"40px",td:"none",boxSizing:"border-box",justifyContent:"center",alignItems:"center",letterSpacing:"0.6px",lh:"24px",trs:"background .2s, box-shadow .2s, color .2s",mar:0,bdrad:"4px",bd:0,pad:"0px 15px",minWidth:"50px",cur:"pointer",whiteSpace:"nowrap","&:hover":{},"&.color:hover":{boxShadow:"none","svg,svg path":{fill:"#fff"}},"&:disabled":{boxShadow:"none"},"&:focus":{boxShadow:`0 0 0 3px ${lib.theme.color.sem.blue[0]}`}}),buttonGreyClass=(0,lib.rule)({"&.color":{"svg,svg path":{fill:lib.theme.g(.3)}}}),buttonGrayscaleIconClass=(0,lib.rule)({"svg path":{fill:"#fff"},"&:hover svg path":{fill:"#fff"}}),buttonColorfulIconClass=(0,lib.rule)({"&:hover svg path":{fill:"#fff"}}),buttonColoredHoverSvg=(0,lib.rule)({"&:hover svg path":{fill:"#fff"}}),iconClass=(0,lib.rule)({alignItems:"center",d:"flex"}),noOutlineClass=(0,lib.rule)({boxShadow:"none",out:"none","&:hover":{boxShadow:"none",out:"none"},"&:focus":{boxShadow:"none",out:"none"}}),displayClass=(0,lib.rule)({...lib.theme.font.ui1.mid,textTransform:"uppercase",letterSpacing:".4px"}),blueClass=(0,lib.rule)({svg:{stroke:lib.theme.color.sem.blue[0],fill:lib.theme.color.sem.blue[0]},"&:hover":{svg:{stroke:"#fff",fill:"#fff"}}}),bluePrimaryClass=(0,lib.rule)({svg:{stroke:"#fff",fill:"#fff"}}),Button=props=>{let{block,children,color,disabled,icon,iconRight,iconColorful,dontColorIcon,ghost,href,lite,loading,outline,positive,primary,primaryColor,simple,size=0,style={},upper,display,onClick,submit,noRad,noOutline,blue,round}=props;const theme=(0,lib.useTheme)(),[isHover,hoverBond]=(()=>{const isMounted=(0,useMountedState.default)(),[state,setState]=useState(!1);return[state,useMemo((()=>({onMouseEnter:()=>{isMounted()&&setState(!0)},onMouseLeave:()=>{isMounted()&&setState(!1)}})),[])]})(),buttonGrayscaleIconLiteClass=(0,lib.useRule)((theme=>({"svg path":{fill:positive?theme.color.sem.positive[0]:theme.g(.3)},"&:hover svg path":{fill:positive?theme.color.sem.positive[0]:theme.g(.3)}})));let tag="button";loading&&(disabled=!0,icon=(0,jsx_runtime.jsx)(SpinnerCircle.b,{})),ghost&&(outline=!0,lite=!0);const buttonStyle={background:lite?"transparent":positive?theme.color.sem.positive[0]:primary?primaryColor||theme.color.sem.blue[0]:"rgba(127,127,127,.2)",color:lite||!primary&&!positive?theme.g(.08):"#fff"};size&&(buttonStyle.height=8*size+40+"px",size&&(buttonStyle.fontSize=15+2*size+"px")),upper&&(buttonStyle.textTransform="uppercase"),noRad?buttonStyle.borderRadius=1:round&&(buttonStyle.borderRadius=8);const buttonProps={...hoverBond,className:(props.className||"")+buttonClass+(display?displayClass:"")+(noOutline?noOutlineClass:"")+(isHover&&(positive||primary)?dontColorIcon?"":buttonColoredHoverSvg:"")+(blue?blueClass:"")+(blue&&primary?bluePrimaryClass:"")+(primary||positive||blue||iconColorful?"":buttonGreyClass)+(dontColorIcon?"":iconColorful?buttonColorfulIconClass:lite?buttonGrayscaleIconLiteClass:buttonGrayscaleIconClass),onClick,style:buttonStyle};disabled?(buttonProps.disabled=!0,buttonStyle.opacity=.7,buttonStyle.cursor="not-allowed"):color&&(buttonProps.className+=" color"),outline&&(buttonStyle.border=`1px solid ${positive?theme.color.sem.positive[0]:theme.g(.8)}`,positive&&(buttonStyle.color=theme.color.sem.positive[0])),href?(tag=Link.r,buttonProps.to=href,buttonProps.a=!0):submit&&(buttonProps.type="submit"),block&&(buttonStyle.width="100%");let buttonElement=null;if(simple&&(buttonStyle.border=`1px solid ${theme.color.sem.positive[1]}`,buttonStyle.background="#fff",buttonStyle.color=theme.color.sem.positive[1]),isHover&&!disabled&&(buttonStyle.color=outline&&positive?theme.color.sem.positive[1]:primary||positive||color?"#fff":theme.g(.3),buttonStyle.background=color||(outline?"transparent":positive?theme.color.sem.positive[1]:primary?primaryColor?theme.g(.3):theme.color.sem.blue[0]:"rgba(180,180,180,.2)"),outline&&(buttonStyle.border=`1px solid ${positive?theme.color.sem.positive[1]:theme.g(.8)}`,positive&&(buttonStyle.color=theme.color.sem.positive[1]))),blue){const col=primary?"#fff":theme.color.sem.blue[0];buttonStyle.color=col,primary||(buttonStyle.border=`1px solid ${theme.color.sem.blue[0]}`),buttonStyle.background=primary?theme.color.sem.blue[0]:"transparent",buttonStyle.stroke=col,buttonStyle.fill=col,isHover&&(buttonStyle.color="#fff",buttonStyle.background=primary?"#06e":theme.color.sem.blue[0],buttonStyle.stroke="#fff",buttonStyle.fill="#fff")}if(icon){const iconProps={className:iconClass,style:{}};children&&(iconRight?iconProps.style.paddingLeft="8px":iconProps.style.paddingRight="8px"),buttonElement=iconRight?h(tag,{...buttonProps,...hoverBond},children,h("span",iconProps,icon)):h(tag,buttonProps,h("span",iconProps,icon),children)}else buttonElement=h(tag,buttonProps,children);return Object.assign(buttonStyle,style),"string"!=typeof tag&&(buttonElement=h("div",{},buttonElement)),h(Ripple.H,{ms:block?400:1e3,color:disabled?"transparent":primary||positive||color||blue?"rgba(255,255,255,.85)":"rgba(0,0,0,.1)",children:buttonElement})};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},attr:{defaultValue:null,description:"",name:"attr",required:!1,type:{name:"any"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ghost:{defaultValue:null,description:"",name:"ghost",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"boolean"}},iconColorful:{defaultValue:null,description:"",name:"iconColorful",required:!1,type:{name:"boolean"}},dontColorIcon:{defaultValue:null,description:"",name:"dontColorIcon",required:!1,type:{name:"boolean"}},lite:{defaultValue:null,description:"",name:"lite",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"-5"},{value:"4"},{value:"-4"},{value:"3"},{value:"-3"},{value:"-2"},{value:"-1"}]}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}},submit:{defaultValue:null,description:"",name:"submit",required:!1,type:{name:"boolean"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"boolean"}},upper:{defaultValue:null,description:"",name:"upper",required:!1,type:{name:"boolean"}},noRad:{defaultValue:null,description:"",name:"noRad",required:!1,type:{name:"boolean"}},noOutline:{defaultValue:null,description:"",name:"noOutline",required:!1,type:{name:"boolean"}},blue:{defaultValue:null,description:"",name:"blue",required:!1,type:{name:"boolean"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/2-inline-block/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/2-inline-block/Button/Button.tsx");try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},attr:{defaultValue:null,description:"",name:"attr",required:!1,type:{name:"any"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ghost:{defaultValue:null,description:"",name:"ghost",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"boolean"}},iconColorful:{defaultValue:null,description:"",name:"iconColorful",required:!1,type:{name:"boolean"}},dontColorIcon:{defaultValue:null,description:"",name:"dontColorIcon",required:!1,type:{name:"boolean"}},lite:{defaultValue:null,description:"",name:"lite",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"-5"},{value:"4"},{value:"-4"},{value:"3"},{value:"-3"},{value:"-2"},{value:"-1"}]}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}},submit:{defaultValue:null,description:"",name:"submit",required:!1,type:{name:"boolean"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"boolean"}},upper:{defaultValue:null,description:"",name:"upper",required:!1,type:{name:"boolean"}},noRad:{defaultValue:null,description:"",name:"noRad",required:!1,type:{name:"boolean"}},noOutline:{defaultValue:null,description:"",name:"noOutline",required:!1,type:{name:"boolean"}},blue:{defaultValue:null,description:"",name:"blue",required:!1,type:{name:"boolean"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/2-inline-block/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/SpinnerCircle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>SpinnerCircle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js");const blockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({d:"inline-block",bdrad:"50%",animation:"spinner-circle .3s infinite linear",w:"16px",h:"16px",bd:"1px solid rgba(0,0,0,.25)",bdl:"1px solid transparent","@keyframes spinner-circle":{to:{transform:"rotate(359.9deg)"}}}),SpinnerCircle=_ref=>{let{size=0,color}=_ref;const style={};if(color){const bd=Math.min(3,Math.max(1,size));style.border=`${bd}px solid ${color}`,style.borderLeft=`${bd}px solid transparent`}return size&&(style.width=16+8*size+"px",style.height=16+8*size+"px"),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{className:blockClass,style})};try{SpinnerCircle.displayName="SpinnerCircle",SpinnerCircle.__docgenInfo={description:"",displayName:"SpinnerCircle",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"0"},description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/SpinnerCircle/index.tsx#SpinnerCircle"]={docgenInfo:SpinnerCircle.__docgenInfo,name:"SpinnerCircle",path:"src/2-inline-block/SpinnerCircle/index.tsx#SpinnerCircle"})}catch(__react_docgen_typescript_loader_error){}},"./src/7-fullscreen/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),use_t__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/use-t/lib/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),libreact_lib_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/libreact/lib/Modal/index.js"),_2_inline_block_BasicButton_BasicButtonClose__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/2-inline-block/BasicButton/BasicButtonClose.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{useCallback,useEffect}=react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)),className=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({pos:"relative",minW:"280px",minH:"80px",maxH:"100vh",bxz:"border-box",fz:"14px",ov:"hidden",animation:"fadeInScaleIn .15s",overflowY:"auto"}),bordersClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({boxShadow:"0 0 3px rgba(0,0,0,.1), 0 2px 6px rgba(0,0,0,.05), 0 5px 20px rgba(0,0,0,.02)",bdrad:"4px"}),bordersContractClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({boxShadow:"0 0 3px rgba(0,0,0,.1), 0 2px 6px rgba(0,0,0,.05), 0 5px 20px rgba(0,0,0,.02), 0 0 33px rgba(0,0,0,.04), 0 20px 44px rgba(0,0,0,.05)",bdrad:"4px"}),classNameNoBg=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({bg:"transparent"}),classNameTitle=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.font.ui3.lite,pos:"absolute",fz:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.fontSize(-1)+"px",top:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(1)+"px",left:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(1)+"px",userSelect:"none"}),classNameClose=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({pos:"absolute",z:3,top:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(0)+"px",right:nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(0)+"px",pad:0,mar:0,bd:0,out:0,bg:"transparent"}),classNameContent=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.rule)({pos:"relative",z:2,pad:`${nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(3)+nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(1)}px ${nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(1)}px  ${nano_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme.space(2)}px`}),removeBodyClass=()=>document.body.classList.remove("__p4_modal"),Modal=_ref=>{let{noAnimation,title,raise,contrast,noBorders,noBackground,noPadding,dontLockFocus=!1,onEsc,onOutsideClick,onCloseClick,color,rounder,children}=_ref;const theme=(0,nano_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)(),[t]=(0,use_t__WEBPACK_IMPORTED_MODULE_1__.NT)(),onElement=useCallback((el=>{el.style.zIndex=""+nano_theme__WEBPACK_IMPORTED_MODULE_2__.ZINDEX.MODAL}),[]);useEffect((()=>(document.body.classList.add("__p4_modal"),removeBodyClass)),[]);let titleElement=null;title&&(titleElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classNameTitle,style:{color:theme.g(.1,.6)},children:title}));const contentClasses=(noAnimation?"":"fadeInScale")+className+(noBorders?"":contrast?bordersContractClass:bordersClass)+(noBackground?classNameNoBg:""),style={background:noBackground?"transparent":theme.bg,boxShadow:theme.isLight?void 0:`0 0 0 1px ${theme.g(.1,.16)}`};rounder&&(style.borderRadius="12px"),noAnimation&&(style.animation="none");let content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:contentClasses,style,children:[titleElement,noPadding?children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classNameContent,children}),onCloseClick&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classNameClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_2_inline_block_BasicButton_BasicButtonClose__WEBPACK_IMPORTED_MODULE_4__.n,{onClick:onCloseClick,tabIndex:-1,title:`${t("Close")} (Esc)`,size:32})})]});raise&&(content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{height:"100vh",padding:"100px 0 0"},children:content}));const BaseModalUntyped=libreact_lib_Modal__WEBPACK_IMPORTED_MODULE_3__.u;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BaseModalUntyped,{dontLockFocus,onElement,onClick:onOutsideClick,onEsc,color:color||(theme.isLight?contrast?"rgba(0,0,64,.4)":"rgba(255,255,255,.8)":"rgba(0,0,0,.4)"),children:content})};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},noAnimation:{defaultValue:null,description:"",name:"noAnimation",required:!1,type:{name:"boolean"}},raise:{defaultValue:null,description:"",name:"raise",required:!1,type:{name:"boolean"}},contrast:{defaultValue:null,description:"",name:"contrast",required:!1,type:{name:"boolean"}},onEsc:{defaultValue:null,description:"",name:"onEsc",required:!1,type:{name:"KeyboardEventHandler<any>"}},onOutsideClick:{defaultValue:null,description:"",name:"onOutsideClick",required:!1,type:{name:"MouseEventHandler<any>"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"MouseEventHandler<any>"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},noBorders:{defaultValue:null,description:"",name:"noBorders",required:!1,type:{name:"boolean"}},noBackground:{defaultValue:null,description:"",name:"noBackground",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},dontLockFocus:{defaultValue:{value:"false"},description:"",name:"dontLockFocus",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},rounder:{defaultValue:null,description:"",name:"rounder",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/7-fullscreen/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/7-fullscreen/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/interactive/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js");const h=react__WEBPACK_IMPORTED_MODULE_0__.createElement,className=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({pos:"relative",d:"flex",w:"32px",h:"32px",bdrad:"3px",cur:"pointer",trs:"all .3s",justifyContent:"center",alignItems:"center",userSelect:"none",svg:{w:"32px",h:"32px",trs:"transform .3s"},"&:hover":{bdrad:"0px",".line-2":{"stroke-dashoffset":0}},"&:active":{".line-1":{stroke:"transparent"},".line-2":{transform:"rotate(90deg)",trs:"all 0.3s"},svg:{transform:"scale(.7)"}},".close-icon":{w:"28px",h:"28px"},".line-1":{fill:"none","stroke-width":"2px"},".line-2":{fill:"none",strokeWidth:"2px",strokeDasharray:25,strokeDashoffset:25,trs:"all 0.2s",transformOrigin:"50% 50%"}},"IconIntClose"),Close=props=>{const dynamicClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((_ref=>{let{g}=_ref;return{".line-1":{stroke:g(.6)},".line-2":{stroke:g(.6)},"&:active":{".line-2":{stroke:g(.4)}}}}));return h("span",{...props,className:(props.className||"")+className+dynamicClass},h("svg",null,h("path",{className:"line-1",d:"M12 12 L20 20 M20 12 L12 20"}),h("path",{className:"line-2",d:"M12 12 L20 20 M20 12 L12 20"})))};try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/interactive/Close/index.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/icons/interactive/Close/index.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/misc/Ripple/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Ripple});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js");const noop=()=>{},rippleClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({bdrad:"50%",h:"100px",w:"100px",pos:"absolute",transform:"scale(0)",op:1,pointerEvents:"none","@keyframes decor-ripple":{"100%":{transform:"scale(12)",op:0}}});class Ripple extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static defaultProps={color:"rgba(0,0,0,.2)",ms:400};el=null;elRipple=null;ref=originalRef=>el=>{this.el=el,(originalRef||noop)(el)};refRipple=el=>{this.elRipple=el};onMouseDown=originalMouseDown=>event=>{if(!this.elRipple||!this.el)return;const{left,top}=this.el.getBoundingClientRect(),posX=left+window.scrollX,posY=top+window.scrollY,elX=event.pageX-posX,elY=event.pageY-posY,style=this.elRipple.style;style.removeProperty("animation"),style.top=elY-50+"px",style.left=elX-50+"px",setTimeout((()=>{style.setProperty("animation",`decor-ripple ${this.props.ms}ms linear`)}),35),(originalMouseDown||noop)(event)};render(){const{children,color}=this.props,element=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ripple=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{className:rippleClass,style:{background:color},ref:this.refRipple});let style=element.props.style||{};style=Object.assign({},style,{overflow:"hidden",position:"relative"});const innerChildren=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(element.props.children);return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,{...element.props,style,ref:this.ref(element.props.ref),onMouseDown:this.onMouseDown(element.props.onMouseDown)},ripple,...innerChildren)}}Ripple.displayName="Ripple";try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{color:{defaultValue:{value:"rgba(0,0,0,.2)"},description:"",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},ms:{defaultValue:{value:"400"},description:"",name:"ms",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/misc/Ripple/index.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/misc/Ripple/index.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-use/lib/useMountedState.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("./node_modules/react/index.js");exports.default=function useMountedState(){var mountedRef=react_1.useRef(!1),get=react_1.useCallback((function(){return mountedRef.current}),[]);return react_1.useEffect((function(){return mountedRef.current=!0,function(){mountedRef.current=!1}}),[]),get}}}]);