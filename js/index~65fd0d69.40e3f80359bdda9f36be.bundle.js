(self.webpackChunkapril_kp=self.webpackChunkapril_kp||[]).push([[962],{8981:(e,t,r)=>{r.d(t,{ZP:()=>l,_3:()=>u,te:()=>c});var n=r(2167);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o={inProgress:!0,inComponent:!1},i="PRELOADER",a="SET_COMPONENT_PRELOADER",c=function setPreloader(e){return{type:i,bool:e}},u=function setComponentPreloader(e){return{type:a,bool:e}};const l=function preloader(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return e.inProgress!==t.bool?_objectSpread(_objectSpread({},e),{},{inProgress:t.bool}):e;case a:return e.inComponent!==t.bool?_objectSpread(_objectSpread({},e),{},{inComponent:t.bool}):e;default:return e}}},5623:(e,t,r)=>{r.d(t,{Lw:()=>i,Xh:()=>c,mc:()=>a,td:()=>o});var n=r(3138),o="RESET",i="RESET_UNIVERSAL",a=function reset(){return{type:o}},c=function resetUniversal(){return function(e,t){e(a()),e((0,n.lr)())}}},7975:(e,t,r)=>{r.d(t,{D:()=>h,Eb:()=>S,Sg:()=>_,ZP:()=>I,sm:()=>g});var n=r(2167),o=r(5861),i=r(4687),a=r.n(i),c=r(2447),u=r(6097),l=r(5168),s=r(4806),p=r(3138),d=r(9978),f=r(1103),T=r(6630);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={resultItems:[{title:"Комплект",id:"complect__name",type:"base",value:""},{title:"",id:"complect__error",type:"base",value:""},{title:"Вес",id:"blocksWeight",type:"base",value:""},{title:"Количество доступов",id:"pod",type:"base",value:""},{title:"Legal Tech в комплекте",id:"complect__name",type:"base",value:""},{title:"Стоимость Комплекта Гарант",id:"complect__price",type:"base",value:""},{title:"Legal Tech",id:"complect__lt",type:"withLt",value:"Legal Tech"},{title:"Вес LT",id:"complect__lt",type:"withLt",value:""},{title:"Стоимость LT",id:"complect__lt",type:"withLt",value:"0. 00 p"},{title:"Консалтинг",id:"consalting",type:"withConsalting",value:""},{title:"Стоимость Консалтинга",id:"consalting",type:"withConsalting",value:"0. 00 p"},{title:"Стоимость СТАР",id:"star",type:"star",value:"0. 00 p"},{title:"Общая Стоимость",id:"complect__lt",type:"total",value:"0. 00 p"},{title:"Описание комплекта",id:"description",type:"description",value:""}],isDescriptionGetting:!1,description:null,file:null,link:null},y="SET_RESULT",b="SET_REMEMBER_RESULT",O="SET_DESCRIPTION_FILE",E="DELETE_DESCRIPTION_FILE",m="SET_DESCRIPTION_FETCHING_STATUS",R=function setDescriptionFile(e,t){return{type:O,link:e,file:t}},h=function deleteDescriptionFile(){return{type:E}},g=function setDescriptionFetchingStatus(e){return{type:m,status:e}},_=function getResult(e){return function(t,r){var n=r(),o=n.global.currentComplectsType,i=n.universals.complects,a=n.result.resultItems[2].value,u=n.currentComplect,l=n.infoblocks,v=n.encyclopedias,b=n.legalTech,O=(n.star,u.title||u.name),E=n.region.current.inComplect,m=(0,s.l)(l,E,v,o),R=n.od.currentOd.contractPropSuppliesQuantity,h=b.ltIncluded,g=(0,d.tx)(n.rows.sets.general),_=null,S=null,I=null,P=null;g.length>0&&g.forEach((function(e){var t=e.totalPrice||e.price.current;e.productType===c.HV.LT||e.productType===c.HV.LT_PACKAGE||"legalTech"===e.productType||e.productType===f.p.LT?S=Number(t.toFixed(2)):e.productType===c.HV.CONSALTING||e.productType===f.p.CONSALTING?I=e:e.productType===c.HV.STAR?("+",_=Number(t.toFixed(2))):0===e.id&&(P=Number(t.toFixed(2)))})),"Эксперт PRO"===u.name&&h<2&&(h="LT собран неверно");var D=b.current,N=D&&D.name,C=D&&D.weight,L=0,w=0,A=null;I&&(L=I.totalPrice||I.price.sum||I.price.current,w=I&&L?Number(L.toFixed(2)):0,A=I?I.shortName||I.name:"");var j=Number(P+S+w+_),F=Number(j.toFixed(2)),k=u.type;m!==a&&"universal"===k&&t(e?(0,p.ur)(m,o,i,[]):(0,T.NO)(!0));var U=!1;(17!==u.number&&u.weight!==m||17==u.number&&m<u.weight)&&(U=p.VU),t(function setResult(e){return{type:y,values:e}}([{title:"Комплект",value:O},{title:"",value:U},{title:"Вес",value:m},{title:"Количество доступов",value:R},{title:"Legal Tech в комплекте",value:h},{title:"Стоимость",value:P},{title:"Legal Tech",value:N},{title:"Вес LT",value:C},{title:"Стоимость LT",value:S},{title:"Консалтинг",value:A},{title:"Стоимость Консалтинга",value:w},{title:"Стоимость СТАР",value:_},{title:"Общая Стоимость",value:F},{title:"Описание комплекта",value:""}]))}},S=function getDescription(){return function(){var e=(0,o.Z)(a().mark((function _callee(e,t){var r,n,o,i,c,s,p,d;return a().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(r=t(),n=r.app.domain,o=r.app.user,!(i=r.products.current)){a.next=20;break}return c={complectName:i.name,supply:i.quantityForKp},s=[],p=[],0,0,r.infoblocks.forEach((function(e){(0,l.X)(s,p,e,0,0)})),(0,l.X)(s,p,r.freeBlocks,0,0),(0,l.X)(s,p,r.encyclopedias[1],0,0),(0,l.X)(s,p,r.legalTech,0,0),(0,l.X)(s,p,r.consalting,0,0),(0,l.X)(s,p,r.star,0,0),a.next=18,u.Wr.getDescription(n,o,c,s,p);case 18:(d=a.sent).link&&e(R(d.link,d.file));case 20:e(g(!1));case 21:case"end":return a.stop()}}),_callee)})));return function(t,r){return e.apply(this,arguments)}}()};const I=function result(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var r=e.resultItems.map((function(e,r){return _objectSpread(_objectSpread({},e),{},{value:t.values[r].value})}));return _objectSpread(_objectSpread({},e),{},{resultItems:r});case b:return t.result;case O:return _objectSpread(_objectSpread({},e),{},{description:t.link,link:t.link,file:t.file});case E:return e.description?_objectSpread(_objectSpread({},e),{},{description:null}):e;case m:return e.isDescriptionGetting!==t.status?_objectSpread(_objectSpread({},e),{},{isDescriptionGetting:t.status}):e;default:return e}}},350:(e,t,r)=>{r.d(t,{Mv:()=>E,ZD:()=>O,ZP:()=>R,uc:()=>m});var n,o,i=r(6097),a=r(1324),c=r(5559),u=r(3595),l=r(3641),s=r(2823),__assign=function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)},__awaiter=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))},__generator=function(e,t){var r,n,o,i,a={label:0,sent:function sent(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function verb(c){return function(u){return function step(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};!function(e){e.FROM="from",e.TO="to"}(o||(o={}));var p=function getInitialDate(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1);return{first:(0,c.WU)(t,"yyyy-MM-dd"),current:(0,c.WU)(e,"yyyy-MM-dd")}},d={data:null,filter:null,actions:{items:[],current:[]},calling:null,date:(n={},n[o.FROM]=p().first,n[o.TO]=p().current,n.inProcess=!1,n),report:[],detalization:{report:null,action:null},isFetched:!1,isInitialized:!1},f=function setFetchedReport(e,t,r,n){return{type:"report/SET_FITCHED_REPORT",report:e,dateFieldId:t,actionFieldId:r,userFieldId:n}},T=function setFetchedFilter(e){return{type:"report/SET_FITCHED_FILTER",filter:e}},v=function setFetchedActions(e){return{type:"report/SET_FITCHED_ACTIONS",actions:e}},y=function setCurrentDate(e,t){return{type:"report/SET_CURRENT_DATE",from:e,to:t}},b=function setCurrentActions(e){return{type:"report/SET_CURRENT_ACTIONS",actions:e}},O=function getReportData(e){return void 0===e&&(e=null),function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,o,p,d,y,b,O,E,m,R,h,g,_,S,I,P,D,N;return __generator(this,(function(C){switch(C.label){case 0:return r=t(),n=r.app.domain,o=r.departament.current,p=null,d=r.report,o.length?(p=o,[3,5]):[3,1];case 1:return[4,l.j.getData("departament")];case 2:return C.sent(),y={domain:n},[4,i.gT.service("bitrix/departament","post","departament",y)];case 3:return p=C.sent(),[4,l.j.setReportData(p,"departament")];case 4:C.sent(),p&&e(a._D.setFetchedDepartament(p)),C.label=5;case 5:return b=[],p&&p.map((function(e){return b.push(e.ID)})),O="",b,E="",m={},R="",h=d.date,g=(0,u.D)(h.from),_=(0,u.D)(h.to),S=(0,c.WU)(g,"dd.MM.yyyy"),I=(0,c.WU)(_,"dd.MM.yyyy"),{domain:n,filters:{callDuration:60,callStartDateFrom:S,callStartDateTo:I,userId:1,userIds:b}},[4,l.j.getData("filter")];case 6:return C.sent(),null,null,null,[],[],null,P={domain:n,filters:{dateFrom:S,dateTo:I,userIds:b,departament:p,userFieldId:O,dateFieldId:R,actionFieldId:E,currentActions:m}},[4,l.j.getData("report")];case 7:return C.sent(),D=null,[4,s.L.service("full/report/get","post","report",P)];case 8:return(D=C.sent())&&(e(f(D,R,E,O)),D.length&&(N=D[0].kpi.map((function(e){return e.action})),e(v(N)),e(T(N)))),[2]}}))}))}},E=function changeDate(e,t){return function(r,n){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return r(y(e,t)),[2]}))}))}},m=function setCurrentActions(e){return function(t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,o,i,a,c,u,l;return __generator(this,(function(s){return n=r().report,o=n.actions,i=o.items,a=o.current,c=a.find((function(t){return t.code===e})),u=__spreadArray([],o.current,!0),c?u=u.filter((function(t){return t.code!==e})):(l=i.find((function(t){return t.code===e})))&&u.push(l),t(b(u)),[2]}))}))}};const R=function report(e,t){var r,n;switch(void 0===e&&(e=d),t.type){case"report/SET_FITCHED_FILTER":return __assign(__assign({},e),{filter:t.filter});case"report/SET_FITCHED_ACTIONS":return __assign(__assign({},e),{actions:__assign(__assign({},e.actions),{items:t.actions,current:t.actions}),detalization:__assign(__assign({},e.detalization),{action:t.actions.length?t.actions[0]:null})});case"report/SET_DETALIZATION_ACTION_CURRENT":return __assign(__assign({},e),{detalization:__assign(__assign({},e.detalization),{action:t.action})});case"report/SET_DETALIZATION_REPORT_CURRENT":return __assign(__assign({},e),{detalization:__assign(__assign({},e.detalization),{report:t.report})});case"report/SET_FITCHED_REPORT":return __assign(__assign({},e),{report:t.report,isFetched:!0,isInitialized:!0});case"report/SET_USER_REPORT":var i=!1,a=e.report.map((function(e){return e.user.ID==t.report.user.ID?(i=!0,t.report):e}));return i||a.push(t.report),__assign(__assign({},e),{report:a});case"report/SET_FITCHED_CALLINGS":return __assign(__assign({},e),{calling:t.callings});case"report/SET_CHANGED_DATE":var c=e.date["".concat(t.typeOfDate)]===t.value;return __assign(__assign({},e),{date:__assign(__assign({},e.date),(r={},r["".concat(t.typeOfDate)]=t.value,r)),isFetched:c});case"report/SET_CURRENT_DATE":var u=e.date[o.FROM]!==t.from||e.date[o.TO]==t.to;return __assign(__assign({},e),{date:__assign(__assign({},e.date),(n={},n[o.FROM]=t.from,n[o.TO]=t.to,n)),isFetched:!u});case"report/SET_CURRENT_ACTIONS":return __assign(__assign({},e),{actions:__assign(__assign({},e.actions),{current:t.actions})});default:return e}}},7585:(e,t,r)=>{r.d(t,{IF:()=>o,Nd:()=>d,XW:()=>l,c4:()=>s,ln:()=>n,op:()=>p});var n,o,i=r(8981),a=r(882),__assign=function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)};!function(e){e.GLOBAL="global",e.KONSTRUCTOR="konstructor",e.PRODUCTS="products",e.TEMPLATE="template",e.DOCUMENT="document",e.REPORT="report",e.CALLING="calling",e.TRANSKRIBATION="transcribation",e.FINISH="finish"}(n||(n={})),function(e){e.KONSTRUCTOR="konstructor",e.REPORT="report",e.CALLING="calling",e.TRANSKRIBATION="transcribation"}(o||(o={}));var c={routes:[{id:0,name:"Начальные настройки",route:n.GLOBAL},{id:1,name:"Конструктор",route:n.KONSTRUCTOR},{id:2,name:"Цены и сравнение комплектов",route:n.PRODUCTS},{id:3,name:"Выбор Шаблона",route:n.TEMPLATE},{id:4,name:"Документ",route:n.DOCUMENT},{id:5,name:"Отчет",route:n.REPORT},{id:6,name:"Звонки",route:n.CALLING},{id:7,name:"Транскрибация",route:n.TRANSKRIBATION},{id:8,name:"Финиш",route:n.FINISH}],current:{id:0,name:"Начальные настройки",route:n.GLOBAL},previous:null,next:null},u=function setCurrentRoute(e){return{type:"router/SET_CURRENT",id:e}},l=function setInitialRoute(e,t){return function(r,i){var a=i().rows.sets.general[0];switch(e){case o.KONSTRUCTOR:r(s(t&&a?n.DOCUMENT:n.GLOBAL));break;case o.CALLING:r(s(n.CALLING));break;case o.REPORT:r(s(n.REPORT));break;case o.TRANSKRIBATION:r(s(n.TRANSKRIBATION))}}},s=function navigate(e){return function(t,r){console.log("navigate "+e);var n=r().router.routes.find((function(t){return t.route===e}));if(n){var o=n.id;t(u(o))}t((0,i.te)(!1))}},p=function back(){return function(e,t){var r=t(),o=r.router.routes,i=r.router.current,c=(r.router.previous,null),l=null;if(i)switch(null==i?void 0:i.route){case n.KONSTRUCTOR:l=n.GLOBAL;break;case n.PRODUCTS:l=n.KONSTRUCTOR;break;case n.DOCUMENT:e((0,a.XH)()),l=n.PRODUCTS;break;case n.REPORT:l=n.REPORT;break;case n.CALLING:l=n.CALLING}if(l&&(c=o.find((function(e){return e.route===l}))),c){var s=c.id;e(u(s))}}},d=function router(e,t){if(void 0===e&&(e=c),"router/SET_CURRENT"===t.type){var r=e.routes.find((function(e){return e.id==t.id})),n=e.current,o=e.previous;return r?__assign(__assign({},e),{current:r,previous:n,next:o}):e}return e}},5105:(e,t,r)=>{r.d(t,{Z:()=>K});var n=r(4890),o=r(3894),i=r(3095),a=r(3344),c=r(1418),u=r(8981),l=r(3138),s=r(4115),p=r(7097),d=r(3535),f=r(7998),T=r(8203),v=r(1132),y=r(826),b=r(4952),O=r(7975),E=r(283),m=r(6457),R=r(5926),h=r(2561),g=r(8286),_=r(538),S=r(3780),I=r(7413),P=r(2658),D=r(4470),N=r(6630),C=r(6814),L=r(9163),w=r(786),A=r(7585),j=r(350),F=r(1324),k=r(8307),U=r(3077),Z=r(4618),M=r(7968),G=(0,n.UY)({app:a.ZP,display:U.ZP,router:A.Nd,global:i.ZP,preloader:u.ZP,currentComplect:l.BL,profs:s.Z,universals:p.Z,od:d.od,infoblocks:f.ZP,encyclopedias:T.ZP,consalting:v.ZP,legalTech:y.ZP,star:I.ZP,freeBlocks:b.Z,result:O.ZP,price:E.ZP,deal:h.ZP,contract:c.LJ,dealName:R.s,field:g.E,bitrix:_.n,products:m.RB,rows:S.Dw,document:P.t,documentPrice:D.Q6,documentInfoblocks:C.E9,documentInvoice:L.mi,region:Z.Z,remember:N.DE,departament:F.ZP,report:j.ZP,calling:k.ZP,entity:w.ZP,event:M.W});const K=(0,n.MT)(G,(0,n.md)(o.Z))}}]);