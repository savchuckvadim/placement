"use strict";(self.webpackChunkreact_build=self.webpackChunkreact_build||[]).push([[201],{7201:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var s=t(8030),r=t(4342),c=t(6540),a=t(397),o=t(5556),l=t.n(o),i=t(6942),d=t.n(i),u=t(6331),b=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},h.apply(this,arguments)}var p={bordered:l().bool,borderless:l().bool,className:l().string,cssModule:l().object,dark:l().bool,hover:l().bool,innerRef:l().oneOfType([l().func,l().string,l().object]),responsive:l().oneOfType([l().bool,l().string]),responsiveTag:u.Wx,size:l().string,striped:l().bool,tag:u.Wx};function f(e){var n=e.className,t=e.cssModule,s=e.size,r=e.bordered,a=e.borderless,o=e.striped,l=e.dark,i=e.hover,p=e.responsive,f=e.tag,j=void 0===f?"table":f,v=e.responsiveTag,x=void 0===v?"div":v,m=e.innerRef,y=function(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)t=c[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,b),g=(0,u.qO)(d()(n,"table",!!s&&"table-"+s,!!r&&"table-bordered",!!a&&"table-borderless",!!o&&"table-striped",!!l&&"table-dark",!!i&&"table-hover"),t),k=c.createElement(j,h({},y,{ref:m,className:g}));if(p){var N=(0,u.qO)(!0===p?"table-responsive":"table-responsive-".concat(p),t);return c.createElement(x,{className:N},k)}return k}f.propTypes=p;const j=f;var v=t(4848);const x=function(e){var n=e.tasks,t=e.setResultMenuStatus;return(0,v.jsx)("div",{className:"table-responsive p-4 ".concat("Msrfp"),children:(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)(j,{className:"align-middle mb-0",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"#"}),(0,v.jsx)("th",{children:"Что надо сделать"}),(0,v.jsx)("th",{children:"Тип"}),(0,v.jsx)("th",{children:"Крайний срок"}),(0,v.jsx)("th",{children:"Текущий статус"}),(0,v.jsx)("th",{children:"Действие"})]})}),(0,v.jsx)("tbody",{children:n&&n.length&&n.map((function(e,n){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{scope:"row",children:n+1}),(0,v.jsx)("td",{children:e.name}),(0,v.jsx)("td",{children:e.type}),(0,v.jsx)("td",{children:e.deadline}),(0,v.jsx)("td",{children:"no"===e.isExpired?(0,v.jsx)("span",{className:"fV_S8",children:"Запланирован"}):"yes"===e.isExpired?(0,v.jsx)("span",{className:"".concat("v0Krc"),children:"Просрочен"}):(0,v.jsx)("span",{className:"".concat("n0INM"),children:"Скоро"})}),(0,v.jsx)("td",{children:(0,v.jsxs)("div",{className:"vokrV",children:[(0,v.jsx)("button",{type:"button",className:"btn btn-sm  mr-5 ".concat("edm7S"),onClick:function(){return t("result",e)},children:"Результативный"}),(0,v.jsx)("button",{type:"button",className:"btn btn-sm ms-2 ".concat("hs6K7"),onClick:function(){return t("noresult",e)},children:"Не очень"}),(0,v.jsx)("button",{type:"button",className:"btn btn-sm ms-2 ".concat("w2Sue"),onClick:function(){return t("expired",e)},children:"Перенос"}),(0,v.jsx)("button",{type:"button",className:"btn btn-sm ms-2 ".concat("ej40p"),onClick:function(){return t("cancel",e)},children:"Не считать"})]})})]},"table-row-".concat(n))}))})]})})})};var m=t(8403),y=function(){var e=(0,r.G)((function(e){return e.eventTask.tasks})),n=(0,r.G)((function(e){return e.eventTask.isFetched})),t=(0,r.j)();return(0,c.useEffect)((function(){!n&&t((0,a.zd)())}),[]),(0,v.jsx)(x,{tasks:e,setResultMenuStatus:function(e,n){t((0,m.JG)(e,n))}})};const g=function(){return(0,v.jsx)(s.A,{color:"white",children:(0,v.jsx)(y,{})})}}}]);
//# sourceMappingURL=201.a799180707b4cc9b0a84.js.map