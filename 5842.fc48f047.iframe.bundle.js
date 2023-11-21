/*! For license information please see 5842.fc48f047.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkp4_ui=self.webpackChunkp4_ui||[]).push([[5842],{"./node_modules/iconista/lib/getUrl.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUrl=({set,icon,version="2"})=>`https://cdn.jsdelivr.net/npm/iconista@${version}/sets/${set}/${icon}.svg`},"./node_modules/iconista/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),React=tslib_1.__importStar(__webpack_require__("./node_modules/react/index.js")),getUrl_1=__webpack_require__("./node_modules/iconista/lib/getUrl.js"),useRefMounted_1=tslib_1.__importDefault(__webpack_require__("./node_modules/iconista/node_modules/react-use/lib/useRefMounted.js")),{useEffect,useState,useRef}=React,cache={};exports.Z=_a=>{var{set,icon,getUrl=getUrl_1.getUrl}=_a,rest=tslib_1.__rest(_a,["set","icon","getUrl"]);const ref=useRef(null),refMounted=useRefMounted_1.default(),[error,setError]=useState();if(useEffect((()=>{const applyDoc=doc=>{const el=ref.current;if(!el)return;const svg=doc.getRootNode().childNodes[0],{childNodes}=svg;for(let i=0;i<childNodes.length;i++)el.appendChild(childNodes[i].cloneNode(!0));for(let i=0;i<svg.attributes.length;i++){const{name,value}=svg.attributes[i];el.setAttribute(name,value)}},key=`${set}:${icon}`;if(cache[key])applyDoc(cache[key]);else{(url=>new Promise(((resolve,reject)=>{const req=new XMLHttpRequest;req.onreadystatechange=()=>{const{readyState,status,responseXML:doc}=req;if(4===readyState)return 200!==status?reject(new Error(`SVG loading HTTP ${status} error: ${url}`)):doc?void resolve(doc):reject(new Error(`Could not load SVG Document: ${url}`))},req.open("GET",url,!0),req.send()})))(getUrl({set,icon})).then((doc=>{refMounted.current&&applyDoc(cache[key]=doc)}),(error=>{refMounted.current&&setError(error)}))}}),[set,icon]),error){const url=getUrl({set,icon});return React.createElement("img",Object.assign({},rest,{src:url,title:error.message}))}return React.createElement("svg",Object.assign({ref},rest))}},"./node_modules/iconista/node_modules/react-use/lib/useRefMounted.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("./node_modules/react/index.js");exports.default=function(){var refMounted=react_1.useRef(!1);return react_1.useEffect((function(){return refMounted.current=!0,function(){refMounted.current=!1}})),refMounted}},"./node_modules/nano-theme/lib/breakpoints.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.m4=exports.m3=exports.m2=exports.m1=exports.b4=exports.b3=exports.b2=exports.b1=void 0,exports.b1=520,exports.b2=960,exports.b3=1300,exports.b4=1800,exports.m1=`@media (max-width:${exports.b1}px)`,exports.m2=`@media (max-width:${exports.b2}px)`,exports.m3=`@media (max-width:${exports.b3}px)`,exports.m4=`@media (max-width:${exports.b4}px)`},"./node_modules/nano-theme/lib/constants.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/nano-theme/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/types.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/constants.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/css.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/breakpoints.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/font.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/react.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/color.js"),exports)},"./node_modules/nano-theme/lib/react.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalCss=exports.makeRule=exports.useRule=exports.useTheme=exports.Provider=void 0;const React=__webpack_require__("./node_modules/react/index.js"),light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),dark_1=__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),css_1=__webpack_require__("./node_modules/nano-theme/lib/css.js"),context=React.createContext(light_1.lightTheme);exports.Provider=React.memo((({theme,children})=>{const value="light"===theme?light_1.lightTheme:dark_1.darkTheme;return React.createElement(context.Provider,{value},children)}));exports.useTheme=()=>React.useContext(context);exports.useRule=fn=>{const css=fn((0,exports.useTheme)());return css_1.nano.cache(css)};exports.makeRule=fn=>()=>(0,exports.useRule)(fn);const useIsomorphicLayoutEffect_1=__webpack_require__("./node_modules/react-use/lib/useIsomorphicLayoutEffect.js");exports.GlobalCss=()=>{const theme=(0,exports.useTheme)();return(0,useIsomorphicLayoutEffect_1.default)((()=>{document.body.style.background=theme.bg,document.body.style.color=theme.g(.05,.85)}),[theme]),null}},"./node_modules/nano-theme/lib/themes/dark.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.darkTheme=void 0;const light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),g=(shade,opacity=1)=>{const g=255-Math.round(255*shade);return`rgba(${g},${g},${g},${opacity})`};exports.darkTheme=Object.assign(Object.assign({},light_1.lightTheme),{isLight:!1,name:"dark",bg:"#101921",color:Object.assign(Object.assign({},light_1.lightTheme.color),{ui:{lightLine:g(.1,.04),line:g(.1,.08),lineDark:g(.1,.16)}}),g})},"./node_modules/nano-theme/lib/types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/react-use/lib/misc/util.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"./node_modules/react-use/lib/useIsomorphicLayoutEffect.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("./node_modules/react-use/lib/misc/util.js").isBrowser?react_1.useLayoutEffect:react_1.useEffect;exports.default=useIsomorphicLayoutEffect},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/tiny-invariant/dist/tiny-invariant.cjs.js":module=>{var prefix="Invariant failed";module.exports=function invariant(condition,message){if(!condition)throw new Error(prefix)}},"./node_modules/use-t/lib/createTranslations.js":function(__unused_webpack_module,exports,__webpack_require__){var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])},extendStatics(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=this&&this.__generator||function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}},__spreadArrays=this&&this.__spreadArrays||function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__("./node_modules/react/index.js"),tiny_invariant_1=__webpack_require__("./node_modules/tiny-invariant/dist/tiny-invariant.cjs.js"),createContext=React.createContext,createElement=React.createElement,Fragment=React.Fragment,defaultInterpolate=function(strs){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];for(var list=[],i=0;i<args.length;i++)list.push(strs[i]),list.push(args[i]);return list.push(strs[i]),createElement.apply(void 0,__spreadArrays([Fragment,{}],list))},translationInterpolate=function(values){return function(strs){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];for(var list=[],i=0;i<args.length;i++)list.push(strs[i]),list.push(values[args[i]]);return list.push(strs[i]),createElement.apply(void 0,__spreadArrays([Fragment,{}],list))}};exports.createTranslations=function(ns){var _a;void 0===ns&&(ns="main");var context=createContext({}),Consumer=context.Consumer,Provider=(_a=function(_super){function class_1(props){var _a,_this=_super.call(this,props)||this;_this.load=function(locale,ns){return __awaiter(_this,void 0,void 0,(function(){var translations;return __generator(this,(function(_a){switch(_a.label){case 0:return this.state.map[locale]||(this.state.map[locale]={}),this.state.map[locale][ns]?[3,2]:(this.state.map[locale][ns]={},this.setState(__assign({},this.state)),tiny_invariant_1.default(!!this.props.loader,"use-t provider .loader() prop not set."),[4,this.props.loader(locale,ns)]);case 1:translations=_a.sent(),this.state.map[locale][ns]=translations,this.setState(__assign({},this.state)),_a.label=2;case 2:return[2]}}))}))},_this.setLocale=function(locale){locale!==_this.state.locale&&(_this.state.map[locale]||(_this.state.map[locale]={}),_this.setState({locale}))},_this.createT=function(nss){void 0===nss&&(nss=[_this.props.ns]);for(var locale=_this.state.locale,translationsNamespaced=_this.state.map[locale],_i=0,nss_1=nss;_i<nss_1.length;_i++){var ns_1=nss_1[_i];translationsNamespaced[ns_1]||_this.load(locale,ns_1).catch((function(err){return console.error(err)}))}var t=function(key){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];for(var _a=0,_b=[locale,_this.props.defaultLocale];_a<_b.length;_a++){var currentLocale=_b[_a];if(!currentLocale)break;for(var translationsNamespaced_1=_this.state.map[currentLocale],_c=0,nss_2=nss;_c<nss_2.length;_c++){var value=translationsNamespaced_1[nss_2[_c]][key];if(void 0!==value)return"function"==typeof value?value(translationInterpolate(args)):value||key}}return key};return t.t=function(key){return function(strs){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];var result=t.apply(void 0,__spreadArrays([key],args));return"object"==typeof result?result:result!==key?createElement(Fragment,{},result):defaultInterpolate.apply(void 0,__spreadArrays([strs],args))}},t};var _b=props.map,map=void 0===_b?{}:_b,locale=props.locale,defaultLocale=props.defaultLocale,ns=props.ns;return map[defaultLocale]?map[defaultLocale][ns]||(map[defaultLocale][ns]={}):map[defaultLocale]=((_a={})[ns]={},_a),_this.state={locale,ns,map,load:_this.load,setLocale:_this.setLocale,createT:_this.createT},locale!==defaultLocale&&_this.load(locale,ns),_this}return __extends(class_1,_super),class_1.prototype.shouldComponentUpdate=function(nextProps){return nextProps.locale!==this.props.locale&&this.setLocale(nextProps.locale),!0},class_1.prototype.render=function(){return React.createElement(context.Provider,{value:this.state,children:this.props.children})},class_1}(React.Component),_a.defaultProps={locale:"en",defaultLocale:"en",ns},_a),defaultT=function(k){return k};defaultT.t=function(key){return function(strs){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];return defaultInterpolate(strs,args)}};var useT=function(namespaces){var nss=namespaces instanceof Array?namespaces:[namespaces||ns],state=React.useContext(context);return[state.createT?state.createT(nss):defaultT,state]};return{Consumer,Provider,context,useT,Trans:function(props){var children=props.children,nss=props.ns instanceof Array?props.ns:[props.ns||ns],_a=useT(nss),t=_a[0],T=_a[1];return("function"==typeof children?children(t,T):children instanceof Array?React.createElement.apply(React,__spreadArrays([React.Fragment,null],children.map((function(item){return"function"==typeof item?item(t):"string"==typeof item?t(item):item||null})))):"string"==typeof children?t(children):children)||null},withT:function(Comp,nss){return void 0===nss&&(nss=ns),Array.isArray(nss)||(nss=[nss]),function(props){var _a=useT(nss),t=_a[0],T=_a[1];return React.createElement(Comp,__assign(__assign({},props),{t,T}))}},T:defaultT}},exports.default=exports.createTranslations},"./node_modules/use-t/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _a;(_a=__webpack_require__("./node_modules/use-t/lib/createTranslations.js").default()).Consumer,_a.Provider,_a.Trans,_a.context,exports.NT=_a.useT,_a.withT,_a.T}}]);