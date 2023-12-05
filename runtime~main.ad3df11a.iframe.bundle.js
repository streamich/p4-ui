(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({77:"icons-Iconista-index-stories",562:"icons-svg-Close-stories",1190:"icons-svg-More-stories",1209:"5-block-TextEditor-index-stories",1411:"4-card-Scrollbox-index-stories",1703:"4-card-EmptyState-index-stories",1876:"2-inline-block-NotchedOutline-index-stories",2043:"icons-interactive-Close-index-stories",2186:"2-inline-block-AvatarBlock-index-stories",2239:"4-card-Paper-PaperStack-stories",2649:"2-inline-block-BasicButton-BasicButtonClose-stories",2876:"2-inline-block-Checkbox-index-stories",3027:"icons-svg-Github-stories",3126:"misc-Ripple-index-stories",3230:"2-inline-block-Sidetip-index-stories",3362:"1-inline-Text-index-stories",3682:"icons-svg-Google-stories",3709:"4-card-HeaderFooter-index-stories",4404:"4-card-ContextMenu-index-stories",4567:"1-inline-CharIcon-index-stories",4945:"1-inline-Avatar-index-stories",4979:"2-inline-block-SpinnerCircle-index-stories",5011:"5-block-TopNav-index-stories",5111:"1-inline-LogoStatic-index-stories",5245:"icons-svg-Grid-stories",5456:"2-inline-block-BasicButton-BasicButtonAdd-stories",5769:"stories-Configure-mdx",5777:"1-inline-Key-index-stories",6217:"1-inline-Highlight-index-stories",6620:"3-list-item-Breadcrumbs-index-stories",6721:"2-inline-block-SpinnerBars-index-stories",6767:"7-fullscreen-Modal-index-stories",6852:"2-inline-block-Button-ButtonWithArrow-stories",7005:"2-inline-block-Label-AvatarLabel-stories",7097:"icons-svg-Diamond-stories",7152:"2-inline-block-InputLine-index-stories",7375:"2-inline-block-BasicButton-BasicButtonMore-stories",7480:"icons-svg-Settings-stories",7568:"4-card-BasicTooltip-index-stories",7889:"2-inline-block-BasicButton-index-stories",8033:"1-inline-Label-index-stories",8106:"1-inline-Code-index-stories",8205:"2-inline-block-Typeahead-index-stories",8349:"2-inline-block-Button-index-stories",8785:"4-card-Paper-index-stories",8880:"2-inline-block-Label-EmptyLabel-stories",8944:"7-fullscreen-ModalAlert-index-stories",9157:"5-block-CommandPalette-index-stories",9274:"icons-interactive-CloseCircle-index-stories",9315:"icons-interactive-Arrow-index-stories",9399:"icons-interactive-Tiles-index-stories",9610:"1-inline-Link-index-stories",9612:"2-inline-block-Button-ButtonAdd-stories",9619:"icons-svg-Twitter-stories",9658:"3-list-item-Progress-index-stories",9874:"icons-svg-Facebook-stories"}[chunkId]||chunkId)+"."+{77:"c2ffee8e",562:"b36d145a",1190:"3d467469",1209:"248c8882",1411:"ccb70ed6",1703:"eb87b648",1729:"c96c5048",1876:"eb697b96",1984:"7f047cd7",2043:"d35eeb77",2186:"507389c7",2239:"a0b6b9a8",2350:"7bf88cc5",2649:"5f0eaa70",2876:"6c4a8639",3027:"334c0d12",3126:"d81455c5",3230:"43953533",3346:"3d68de1f",3362:"d681870d",3426:"a82e4857",3682:"6bc9fcc4",3709:"3d056779",4346:"3bf861f5",4380:"1c27100c",4404:"790ffe41",4567:"c90c66fc",4945:"8fdf1f98",4979:"9312c975",5011:"64215830",5111:"2ad06f5d",5245:"8adc5b57",5456:"9c20d2e6",5769:"c39c2759",5777:"e54cc2f2",6217:"b61676ba",6620:"840c776f",6721:"5bd69031",6767:"25f848f1",6852:"5ab5580f",7005:"19141438",7097:"04c9ef06",7152:"d0bbde78",7375:"17ccb84c",7480:"16060dfb",7568:"9f96e4a8",7889:"7c46dadf",8033:"ea7858db",8106:"997f29d5",8205:"7657e233",8349:"dfc97613",8785:"969ba67d",8880:"6348cf6e",8944:"d019195f",9157:"057bb081",9274:"c43003a1",9296:"586d5874",9315:"2ed3586c",9399:"2b00b33e",9433:"3365144c",9610:"c3b572f5",9612:"e507246b",9619:"1b201e6c",9658:"bf995783",9874:"04a93c9d"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="p4-ui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","p4-ui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkp4_ui=self.webpackChunkp4_ui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();