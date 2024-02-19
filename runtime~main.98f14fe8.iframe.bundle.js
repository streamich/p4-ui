(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({111:"icons-svg-Facebook-stories",210:"2-inline-block-NotchedOutline-index-stories",524:"2-inline-block-BasicButton-BasicButtonMore-stories",576:"icons-interactive-CloseCircle-index-stories",787:"1-inline-CharIcon-index-stories",1508:"icons-interactive-Close-index-stories",1708:"2-inline-block-Typeahead-index-stories",1715:"2-inline-block-Button-index-stories",1718:"5-block-TopNav-index-stories",1796:"1-inline-Label-index-stories",1850:"5-block-CommandPalette-index-stories",1960:"4-card-HeaderFooter-index-stories",2171:"2-inline-block-Sidetip-index-stories",2348:"3-list-item-Progress-index-stories",2585:"4-card-BasicTooltip-index-stories",2693:"2-inline-block-BasicButton-index-stories",2725:"7-fullscreen-ModalAlert-index-stories",2743:"7-fullscreen-Modal-index-stories",2923:"icons-interactive-Tiles-index-stories",2953:"icons-Iconista-index-stories",3294:"2-inline-block-Label-AvatarLabel-stories",3315:"1-inline-LogoStatic-index-stories",3361:"misc-Ripple-index-stories",3742:"2-inline-block-SpinnerBars-index-stories",3924:"2-inline-block-Checkbox-index-stories",3959:"1-inline-Avatar-index-stories",3964:"4-card-Paper-PaperStack-stories",4148:"icons-svg-Twitter-stories",4406:"icons-svg-Github-stories",4760:"icons-svg-More-stories",4770:"icons-svg-Google-stories",4951:"1-inline-Code-index-stories",5008:"4-card-ContextMenu-index-stories",5184:"5-block-TextEditor-index-stories",5465:"2-inline-block-BasicButton-BasicButtonClose-stories",5567:"icons-svg-Grid-stories",5624:"2-inline-block-BasicButton-BasicButtonAdd-stories",5660:"2-inline-block-SpinnerCircle-index-stories",6221:"icons-svg-Close-stories",6578:"4-card-Paper-index-stories",6844:"2-inline-block-Label-EmptyLabel-stories",6914:"4-card-Scrollbox-index-stories",7187:"stories-Configure-mdx",7352:"4-card-EmptyState-index-stories",7391:"3-list-item-Breadcrumbs-index-stories",7471:"1-inline-Key-index-stories",7561:"1-inline-Text-index-stories",7591:"icons-interactive-Arrow-index-stories",8064:"icons-svg-Settings-stories",8261:"2-inline-block-AvatarBlock-index-stories",8390:"2-inline-block-Button-ButtonAdd-stories",8478:"1-inline-Highlight-index-stories",8537:"icons-svg-Diamond-stories",8568:"1-inline-Link-index-stories",9004:"2-inline-block-Button-ButtonWithArrow-stories",9869:"2-inline-block-InputLine-index-stories"}[chunkId]||chunkId)+"."+{111:"fc7ca47f",210:"cae57732",524:"b1bfe5fb",576:"4eec4d5b",787:"729a0e34",857:"03b1d647",1294:"253db916",1508:"b15db8dc",1708:"da2f0dd3",1715:"295b4d5f",1718:"7ce732ac",1796:"3d7aabb1",1850:"787c1be1",1912:"4c99bbfd",1960:"3d0710d6",2171:"714042de",2348:"fc55e091",2433:"e37c1ac5",2585:"ca7bff40",2693:"6a5020fb",2725:"47635fd4",2743:"a13afa71",2923:"26aa17c9",2953:"7a2404f5",3294:"47324bfb",3315:"09f19ca9",3361:"b0455cd6",3742:"ee83f940",3924:"1b27376e",3959:"a82c63b3",3964:"2285f7c6",4071:"a97cec82",4148:"a8dcf48b",4406:"9ad93360",4682:"b290f819",4760:"8cc8f044",4770:"30f9e4eb",4951:"7fdfe41e",5008:"388d193e",5184:"a8d964b8",5465:"0461581d",5567:"a35c2a50",5624:"b6df6821",5647:"34b44c5a",5660:"59935e54",6074:"270714d9",6221:"1e547726",6578:"dc4e1b4f",6844:"30c180d6",6893:"11aba992",6914:"c39ed77c",7007:"4287bd1c",7187:"d8d7476b",7352:"c719bd9d",7391:"d601db83",7471:"8477817d",7561:"4e9f5bbb",7591:"3bacb1b8",8064:"66742c99",8261:"206a6106",8390:"0daa9318",8478:"268cdefc",8537:"9e8c069b",8568:"504bed64",9004:"6a8a8c1d",9869:"e382377a"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="p4-ui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","p4-ui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkp4_ui=self.webpackChunkp4_ui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();