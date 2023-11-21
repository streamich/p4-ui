"use strict";(self.webpackChunkp4_ui=self.webpackChunkp4_ui||[]).push([[8880],{"./src/2-inline-block/Label/EmptyLabel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EmptyLabel_stories});__webpack_require__("./node_modules/react/index.js");const defaultSize=40;var LabelLayout=__webpack_require__("./src/2-inline-block/Label/LabelLayout.tsx"),LabelRight=__webpack_require__("./src/2-inline-block/Label/LabelRight.tsx"),Avatar=__webpack_require__("./src/1-inline/Avatar/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const EmptyLabel=_ref=>{let{size=defaultSize,square,name="∅"}=_ref;return(0,jsx_runtime.jsx)(LabelLayout.n,{icon:(0,jsx_runtime.jsx)(Avatar.q,{width:size,grey:!0,square}),children:(0,jsx_runtime.jsx)(LabelRight.u,{spacious:!0,width:size,name})})};EmptyLabel.displayName="EmptyLabel";try{EmptyLabel.displayName="EmptyLabel",EmptyLabel.__docgenInfo={description:"",displayName:"EmptyLabel",props:{size:{defaultValue:{value:"40"},description:"",name:"size",required:!1,type:{name:"number"}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"∅"},description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/Label/EmptyLabel.tsx#EmptyLabel"]={docgenInfo:EmptyLabel.__docgenInfo,name:"EmptyLabel",path:"src/2-inline-block/Label/EmptyLabel.tsx#EmptyLabel"})}catch(__react_docgen_typescript_loader_error){}const EmptyLabel_stories={title:"2. Inline Block/Label/EmptyLabel",component:EmptyLabel,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{name:"Mr Name"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'Mr Name'\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/1-inline/Avatar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),iconista__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/iconista/lib/index.js"),use_t__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/use-t/lib/index.js"),_LogoStatic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/1-inline/LogoStatic/index.tsx"),_Link__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/1-inline/Link/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{useState}=react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)),sizes=[10,16,20,24,32,40,48,64,128,256,512],blockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.font.ui1.mid,pos:"relative",d:"flex",flex:"0 0",alignItems:"center",justifyContent:"center",ov:"hidden",w:"32px",h:"32px",lh:"32px",bdrad:"50%",bg:nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.color.color[0],col:"#fff",ta:"center",fz:"16px",mar:0,pad:0,bd:0,cur:"pointer",userSelect:"none","&:hover":{col:"#fff"}}),hoverableClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({"&:hover":{mar:"-2px",bd:`2px solid ${nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.color.sem.warning[0]}`}}),squareClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({bdrad:"8%"}),imgClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({d:"block",objectFit:"cover",w:"32px",h:"32px"}),emojiClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({bg:"transparent",fz:"32px",lh:"32px"}),postClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({bg:"transparent",bd:`1px solid ${nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.g(.5)}`,col:nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.g(.3),"&:hover":{bd:`1px solid ${nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.g(.4)}`,col:nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.g(.1)}}),renderImg=(width,src,onError)=>{const props={className:imgClass,src,onError};return width&&(props.style={width,height:width}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img",{...props})};renderImg.displayName="renderImg";const Avatar=allProps=>{const{id,href,name,emoji:emojiImmutable,size,src,width,post,grey,lightGrey,transparent,className,square,rounded,isPrivate,isOP,badge,hover,color,icon,del,bottomRight,noHover,bold,letters,...rest}=allProps;let emoji=emojiImmutable;del&&(emoji="␡");const theme=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)(),[t]=(0,use_t__WEBPACK_IMPORTED_MODULE_3__.NT)(),[error,setError]=useState(!1),showText=error||!src,props=rest;props.className=(className||"")+blockClass+(hover?hoverableClass:"")+(square||emoji?squareClass:"")+(emoji?emojiClass:"")+(post?postClass:""),props.style={...props.style}||{},bold&&(props.style.fontWeight=600),noHover&&(props.style.cursor="default"),props.style.flex=`0 0 ${width||32}px`,transparent?props.style.background="transparent":lightGrey?(props.style.background=theme.g(.1,.08),props.style.color=theme.g(.2,.4),props.style.fill=theme.g(.2,.4)):grey||del?(props.style.background=theme.g(.4),props.style.color=theme.g(.9),props.style.fill=theme.g(.9)):color&&(props.style.background=color);const computedWidth=width||(size?sizes[4+(size||0)]:0),realWidth=computedWidth||32;computedWidth&&(props.style.width=computedWidth,props.style.height=computedWidth,props.style.lineHeight=emoji?1.07*computedWidth+"px":`${computedWidth}px`,props.style.fontSize=emoji?.85*computedWidth+"px":.5*computedWidth+"px",computedWidth<24&&(props.style.fontWeight="bold",props.style.lineHeight=computedWidth+1+"px")),!showText||!name||emoji||post||grey||del||lightGrey||transparent||color?post&&(props.style.background=theme.g(.1,.08),props.style.border=0,props.style.borderRadius="15%"):props.style.background=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.toColor)(id||name),rounded&&(props.style.borderRadius="25%"),(grey||del||lightGrey)&&!name&&(props.style.opacity=.3);let element=icon||(post?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LogoStatic__WEBPACK_IMPORTED_MODULE_4__.Y,{variant:"round",size:.8*realWidth}):showText?emoji||("string"==typeof name&&name.length>0?name.slice(0,letters||2).trim():""):renderImg(computedWidth,src,(()=>setError(!0))));if(element=href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_5__.r,{a:!0,...props,to:href,children:element}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{...props,children:element}),isPrivate||badge||isOP||bottomRight){const size=computedWidth||32;let lock,badgeElement,subAvatarElement;if(isPrivate){const lockSize=.5*size,iconSize=.75*lockSize,lockStyle={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",top:-.1*size,left:-.1*size,background:props.style.background||(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.toColor)(id||name||"")||theme.color.sem.negative[0],width:lockSize+"px",height:lockSize+"px",borderRadius:"50%",fill:"#fff",color:"#fff"};lock=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{style:lockStyle,title:t("Private"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(iconista__WEBPACK_IMPORTED_MODULE_2__.Z,{set:"atlaskit",icon:"lock-filled",width:iconSize,height:iconSize,style:{margin:(size<=40?-1:0)+"px 0 0"}})})}if(badge||isOP){const badgeSize=.25*size;badgeElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",top:-.035*size,right:-.035*size,background:theme.color.sem.warning[0],border:`1px solid ${theme.bg}`,width:badgeSize+"px",height:badgeSize+"px",borderRadius:"50%",fill:theme.bg,color:theme.bg}})}if(bottomRight){const subAvatarSize=.6*size;subAvatarElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{style:{display:"inline-block",position:"absolute",bottom:-.2*subAvatarSize,right:-.3*subAvatarSize},children:bottomRight})}element=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{style:{display:"inline-block",position:"relative"},children:[element,lock,badgeElement,subAvatarElement]})}return element};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"-5"},{value:"4"},{value:"-4"},{value:"3"},{value:"-3"},{value:"-2"},{value:"-1"}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},emoji:{defaultValue:null,description:"",name:"emoji",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},post:{defaultValue:null,description:"",name:"post",required:!1,type:{name:"boolean"}},grey:{defaultValue:null,description:"",name:"grey",required:!1,type:{name:"boolean"}},lightGrey:{defaultValue:null,description:"",name:"lightGrey",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},isPrivate:{defaultValue:null,description:"",name:"isPrivate",required:!1,type:{name:"boolean"}},isOP:{defaultValue:null,description:"",name:"isOP",required:!1,type:{name:"boolean"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"ReactNode"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},del:{defaultValue:null,description:"",name:"del",required:!1,type:{name:"boolean"}},bottomRight:{defaultValue:null,description:"",name:"bottomRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},letters:{defaultValue:null,description:"",name:"letters",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/1-inline/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/1-inline/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/1-inline/Code/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Code});__webpack_require__("./node_modules/react/index.js");var nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const blockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.font.mono.bold,d:"inline-block",pad:".1em .2em",bdrad:".25em",col:nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.color.sem.blue[0],fz:".9em"}),blockAltClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.lightTheme.font.mono.mid}),Code=_ref=>{let{gray,noBg,size,alt,border,nowrap,children}=_ref;const theme=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)(),style={background:theme.g(0,.04)};return size&&(style.fontSize=.9+size/10+"em"),gray&&(style.color=theme.g(.3),style.background=theme.g(0,.04)),noBg&&(style.background="transparent"),border&&(style.border=`1px solid ${theme.g(0,.06)}`),nowrap&&(style.whiteSpace="nowrap"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{className:blockClass+(alt?blockAltClass:""),style,children})};Code.displayName="Code";try{Code.displayName="Code",Code.__docgenInfo={description:"",displayName:"Code",props:{gray:{defaultValue:null,description:"",name:"gray",required:!1,type:{name:"boolean"}},noBg:{defaultValue:null,description:"",name:"noBg",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},nowrap:{defaultValue:null,description:"",name:"nowrap",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/1-inline/Code/index.tsx#Code"]={docgenInfo:Code.__docgenInfo,name:"Code",path:"src/1-inline/Code/index.tsx#Code"})}catch(__react_docgen_typescript_loader_error){}},"./src/1-inline/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react=__webpack_require__("./node_modules/react/index.js");const context=react.createContext((()=>{})),noop=()=>{},Link=react.forwardRef(((props,ref)=>{let{replace,state,to,a,comp=a?"a":"button",onClick:originalClick=noop,target,...rest}=props;const go=react.useContext(context),attr={...rest,ref,onClick:react.useCallback((event=>{event.defaultPrevented||0!==event.button||target||(event=>!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey))(event)||(event.preventDefault(),"string"==typeof to&&go(to,state?state(props):void 0,replace),originalClick(event))}),[originalClick,replace,target,state])};return"a"===comp&&(attr.href=to,attr.target=target),react.createElement(comp,attr)}));try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{replace:{defaultValue:null,description:"",name:"replace",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},a:{defaultValue:null,description:"",name:"a",required:!1,type:{name:"boolean"}},comp:{defaultValue:null,description:"",name:"comp",required:!1,type:{name:"string | ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/1-inline/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/1-inline/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/1-inline/LogoStatic/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>LogoStatic});__webpack_require__("./node_modules/react/index.js");var nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const className=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({h:"48px",w:"48px",letterSpacing:"-8px",lh:"48px",ta:"center"}),colorThemeDefault=["#F94870","#FFD16E","#008AB0","#00D6A1"],colorThemeRed=["#FF486A","#FF967B","#9D4063","#414369"],LogoStatic=_ref=>{let{size=48,grey,colors="default",variant="default",style:providedStyle}=_ref;const theme=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)(),colorTheme=grey?(theme=>[theme.g(.1,.24),theme.g(.1,.38),theme.g(.1,.48),theme.g(.1,.7)])(theme):"red"===colors?colorThemeRed:colorThemeDefault;let style=providedStyle||{};48!==size&&(style={...style,height:size,width:size,letterSpacing:`-${size/5}px`,lineHeight:size+"px",fontSize:2.85*size/3+"px"});const svgProps={style:{width:.67*size,height:.67*size},viewBox:"0 0 64 64"};let svg;return svg="round"===variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg",{...svgProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fill:colorTheme[0],d:"M33,0H2.6C1.2,0,0,1.2,0,2.6v30.6c0,1.7,2,2.5,3.2,1.3l15.6-15.6L34.3,3.2C35.5,2,34.7,0,33,0z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fill:colorTheme[1],d:"M7.9,41.2h30.4c1.4,0,2.6-1.2,2.6-2.6V8c0-1.7-2-2.5-3.2-1.3L22.2,22.3L6.6,38C5.4,39.2,6.3,41.2,7.9,41.2z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fill:colorTheme[2],d:"M45.9,3.3l-0.1,34.4c0,1.8,1.7,3,3.4,2.5C57.7,37.8,64,29.9,64,20.6c0-9.3-6.2-17.2-14.7-19.8 C47.6,0.3,45.9,1.6,45.9,3.3z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fill:colorTheme[3],d:"M9,64L9,64c5,0,9-4,9-9v0c0-5-4-9-9-9h0c-5,0-9,4-9,9v0C0,60,4,64,9,64z"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg",{...svgProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon",{fill:colorTheme[0],points:"0,0 42.6,0 0,42.8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon",{fill:colorTheme[1],points:"42.6,42.8 0,42.8 42.6,0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fill:colorTheme[2],d:"M42.6,0v42.8c11.8,0,21.4-9.6,21.4-21.4S54.4,0,42.6,0z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect",{fill:colorTheme[3],y:"42.8",width:"21.3",height:"21.2"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className,style,children:svg})};LogoStatic.displayName="LogoStatic";try{LogoStatic.displayName="LogoStatic",LogoStatic.__docgenInfo={description:"",displayName:"LogoStatic",props:{size:{defaultValue:{value:"48"},description:"",name:"size",required:!1,type:{name:"number"}},grey:{defaultValue:null,description:"",name:"grey",required:!1,type:{name:"boolean"}},colors:{defaultValue:{value:"default"},description:"",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"red"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"default"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/1-inline/LogoStatic/index.tsx#LogoStatic"]={docgenInfo:LogoStatic.__docgenInfo,name:"LogoStatic",path:"src/1-inline/LogoStatic/index.tsx#LogoStatic"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/Label/LabelLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>LabelLayout});__webpack_require__("./node_modules/react/index.js");var nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const blockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({d:"flex",flexWrap:"nowrap",cur:"pointer"}),LabelLayout=props=>{const{className="",icon,children,onClick}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:className+blockClass,onClick,children:[icon,children]})};LabelLayout.displayName="LabelLayout";try{LabelLayout.displayName="LabelLayout",LabelLayout.__docgenInfo={description:"",displayName:"LabelLayout",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/Label/LabelLayout.tsx#LabelLayout"]={docgenInfo:LabelLayout.__docgenInfo,name:"LabelLayout",path:"src/2-inline-block/Label/LabelLayout.tsx#LabelLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/2-inline-block/Label/LabelRight.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>LabelRight});__webpack_require__("./node_modules/react/index.js");var nano_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/nano-theme/lib/index.js"),use_t__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/use-t/lib/index.js"),_1_inline_Code__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/1-inline/Code/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const blockClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({d:"flex",flexWrap:"nowrap",cur:"pointer",bd:0,pad:"5px",mar:"-5px",bdrad:"4px",trs:"background .12s ease-in 0s",userSelect:"none"}),rightClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({w:"100%",ov:"hidden",d:"inline-block",flex:"1 1"}),nameClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.theme.font.sans,lh:1.2,mar:0,whiteSpace:"nowrap",ov:"hidden",textOverflow:"ellipsis",w:"100%",flexBasis:"100%",d:"block",col:nano_theme__WEBPACK_IMPORTED_MODULE_1__.theme.g(.1,.8)}),subtextClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.theme.font.ui1.mid,lh:1.3,d:"inline-block",mar:0,whiteSpace:"nowrap",ov:"hidden",textOverflow:"ellipsis",color:nano_theme__WEBPACK_IMPORTED_MODULE_1__.theme.g(.3),[`.${blockClass.trim()}:hover &`]:{color:nano_theme__WEBPACK_IMPORTED_MODULE_1__.theme.g(.1)}}),specialFontClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.rule)({...nano_theme__WEBPACK_IMPORTED_MODULE_1__.theme.font.ui1.mid}),LabelRight=props=>{const[t]=(0,use_t__WEBPACK_IMPORTED_MODULE_2__.NT)(),{width=40,name,hideName,subtext,grey,lightGrey,spacious,onNameClick,onSubtextClick}=props,subtextDynamicClass=(0,nano_theme__WEBPACK_IMPORTED_MODULE_1__.useRule)((theme=>({col:theme.g(.3),[`.${blockClass.trim()}:hover &`]:{col:theme.g(.1)}})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:rightClass,style:{padding:`${width*(subtext?spacious?0:.085:width<32?spacious?.12:.2:.19)}px ${.2*width}px 0 ${width*(.2+(spacious?.1:0))}px`,fontSize:width*(subtext?spacious?.5:.42:spacious?width<32?.65:.53:.5)+"px"},children:[!!name&&!hideName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:nameClass+(grey||lightGrey?specialFontClass:""),style:{marginTop:spacious&&subtext?-.05*width:void 0},onClick:onNameClick,children:props.you?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_1_inline_Code__WEBPACK_IMPORTED_MODULE_3__.E,{gray:!0,children:t("you")})]}):name}),subtext&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:subtextClass+subtextDynamicClass,style:{fontSize:width*(name&&!hideName?spacious?.35:.28:.53)+"px",paddingTop:name&&!hideName?0:.08*width+"px",opacity:spacious?.7:void 0},onClick:onSubtextClick,children:subtext})]})};LabelRight.displayName="LabelRight";try{LabelRight.displayName="LabelRight",LabelRight.__docgenInfo={description:"",displayName:"LabelRight",props:{width:{defaultValue:null,description:'@todo Rename ot "size".',name:"width",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},hideName:{defaultValue:null,description:"",name:"hideName",required:!1,type:{name:"boolean"}},subtext:{defaultValue:null,description:"",name:"subtext",required:!1,type:{name:"ReactNode"}},grey:{defaultValue:null,description:"",name:"grey",required:!1,type:{name:"boolean"}},lightGrey:{defaultValue:null,description:"",name:"lightGrey",required:!1,type:{name:"boolean"}},spacious:{defaultValue:null,description:"",name:"spacious",required:!1,type:{name:"boolean"}},you:{defaultValue:null,description:"",name:"you",required:!1,type:{name:"boolean"}},onNameClick:{defaultValue:null,description:"",name:"onNameClick",required:!1,type:{name:"MouseEventHandler<Element>"}},onSubtextClick:{defaultValue:null,description:"",name:"onSubtextClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/2-inline-block/Label/LabelRight.tsx#LabelRight"]={docgenInfo:LabelRight.__docgenInfo,name:"LabelRight",path:"src/2-inline-block/Label/LabelRight.tsx#LabelRight"})}catch(__react_docgen_typescript_loader_error){}}}]);