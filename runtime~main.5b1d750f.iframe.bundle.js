(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({44:"1-inline-Link-index-stories",324:"icons-interactive-Tiles-index-stories",396:"1-inline-Key-index-stories",427:"2-inline-block-Label-AvatarLabel-stories",612:"icons-svg-Diamond-stories",692:"2-inline-block-SpinnerBars-index-stories",704:"2-inline-block-InputLine-index-stories",1016:"4-card-ContextMenu-index-stories",1144:"1-inline-Avatar-index-stories",1216:"icons-svg-Settings-stories",1324:"icons-svg-Close-stories",1400:"icons-svg-Facebook-stories",1652:"2-inline-block-Button-ButtonAdd-stories",1684:"4-card-Paper-index-stories",1724:"2-inline-block-BasicButton-BasicButtonMore-stories",1951:"3-list-item-Progress-index-stories",2172:"4-card-HeaderFooter-index-stories",2284:"5-block-TextEditor-index-stories",2444:"4-card-Paper-PaperStack-stories",2452:"2-inline-block-Label-EmptyLabel-stories",2776:"2-inline-block-BasicButton-BasicButtonClose-stories",3336:"icons-svg-Google-stories",3848:"1-inline-Label-index-stories",3920:"5-block-CommandPalette-index-stories",4368:"2-inline-block-Sidetip-index-stories",4467:"1-inline-Code-index-stories",4740:"icons-svg-Grid-stories",5272:"icons-svg-More-stories",5500:"icons-interactive-Close-index-stories",5528:"icons-interactive-CloseCircle-index-stories",5576:"2-inline-block-AvatarBlock-index-stories",5688:"4-card-EmptyState-index-stories",5864:"2-inline-block-Button-ButtonWithArrow-stories",6216:"3-list-item-Breadcrumbs-index-stories",6340:"2-inline-block-Typeahead-index-stories",6352:"1-inline-Text-index-stories",7148:"stories-Configure-mdx",7632:"icons-svg-Github-stories",7736:"4-card-Scrollbox-index-stories",7980:"icons-interactive-Arrow-index-stories",8172:"2-inline-block-NotchedOutline-index-stories",8336:"5-block-TopNav-index-stories",8351:"1-inline-CharIcon-index-stories",8448:"icons-Iconista-index-stories",8528:"7-fullscreen-Modal-index-stories",8592:"4-card-BasicTooltip-index-stories",8612:"icons-svg-Twitter-stories",8816:"2-inline-block-SpinnerCircle-index-stories",8900:"7-fullscreen-ModalAlert-index-stories",8908:"2-inline-block-Button-index-stories",8924:"1-inline-Highlight-index-stories",8984:"2-inline-block-BasicButton-BasicButtonAdd-stories",9196:"2-inline-block-BasicButton-index-stories",9488:"misc-Ripple-index-stories",9732:"1-inline-LogoStatic-index-stories",9820:"2-inline-block-Checkbox-index-stories"}[chunkId]||chunkId)+"."+{44:"f974dab4",324:"9f2ca989",396:"6d1eb112",427:"6a95e2f0",560:"6e27d115",612:"1e6d8556",692:"9356c996",704:"29397f43",844:"e225806c",1016:"120e520f",1072:"9c609a10",1144:"9790fbfe",1216:"c91e89f9",1324:"f14edace",1400:"224abc1a",1632:"41de7342",1652:"98b2a636",1684:"f4189318",1724:"28d82c42",1951:"6302114a",2172:"5d56c8ee",2272:"4f0e56a0",2284:"a7fbe4bf",2444:"6b3fa638",2452:"90db3151",2523:"5250e492",2776:"036a4f78",3336:"3a6b1788",3848:"aa34e566",3920:"6f9eb735",4368:"eb9e4abb",4467:"60f62104",4740:"02262903",5208:"47014de8",5272:"48c34ba9",5500:"57bc9b83",5528:"d4de437f",5576:"7711c883",5688:"96f7da88",5864:"ef7f44a8",5936:"a911cf55",6216:"64e50f6e",6340:"9d534f70",6352:"9666bbe2",7148:"db784558",7632:"25e85eda",7736:"d3c12bef",7980:"54ca4365",8172:"c93566de",8336:"22b07ce8",8351:"a8fb58a4",8396:"2065d485",8448:"ed50652b",8528:"5270c484",8592:"cbb653e5",8612:"ca72d916",8816:"d3a025d2",8848:"505ef52d",8900:"d67541e8",8908:"a59b1cd6",8924:"c42ae5a4",8984:"a14d9ea0",9196:"9512112a",9488:"baa922cc",9732:"498140a0",9820:"18c7addb"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="p4-ui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","p4-ui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={296:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(296!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkp4_ui=self.webpackChunkp4_ui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();