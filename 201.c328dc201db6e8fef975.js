"use strict";(self.webpackChunkreact_build=self.webpackChunkreact_build||[]).push([[201],{7201:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var s=n(6540),r=n(3941),a=n(4342),c=n(416),o=n(5964),l=n(397),i=n(5556),d=n.n(i),u=n(6942),b=n.n(u),h=n(6331),p=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},f.apply(this,arguments)}var j={bordered:d().bool,borderless:d().bool,className:d().string,cssModule:d().object,dark:d().bool,hover:d().bool,innerRef:d().oneOfType([d().func,d().string,d().object]),responsive:d().oneOfType([d().bool,d().string]),responsiveTag:h.Wx,size:d().string,striped:d().bool,tag:h.Wx};function v(e){var t=e.className,n=e.cssModule,r=e.size,a=e.bordered,c=e.borderless,o=e.striped,l=e.dark,i=e.hover,d=e.responsive,u=e.tag,j=void 0===u?"table":u,v=e.responsiveTag,x=void 0===v?"div":v,m=e.innerRef,g=function(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,p),k=(0,h.qO)(b()(t,"table",!!r&&"table-"+r,!!a&&"table-bordered",!!c&&"table-borderless",!!o&&"table-striped",!!l&&"table-dark",!!i&&"table-hover"),n),y=s.createElement(j,f({},g,{ref:m,className:k}));if(d){var N=(0,h.qO)(!0===d?"table-responsive":"table-responsive-".concat(d),n);return s.createElement(x,{className:N},y)}return y}v.propTypes=j;const x=v;var m=n(4848);const g=function(e){var t=e.tasks,n=e.setResultMenuStatus;return(0,m.jsx)("div",{className:"table-responsive p-4 ".concat("Msrfp"),children:(0,m.jsx)("div",{className:"table-responsive",children:(0,m.jsxs)(x,{className:"align-middle mb-0",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"#"}),(0,m.jsx)("th",{children:"Что надо сделать"}),(0,m.jsx)("th",{children:"Тип"}),(0,m.jsx)("th",{children:"Крайний срок"}),(0,m.jsx)("th",{children:"Текущий статус"}),(0,m.jsx)("th",{children:"Действие"})]})}),(0,m.jsx)("tbody",{children:t&&t.length&&t.map((function(e,t){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{scope:"row",children:t+1}),(0,m.jsx)("td",{children:e.name}),(0,m.jsx)("td",{children:e.type}),(0,m.jsx)("td",{children:e.deadline}),(0,m.jsx)("td",{children:"no"===e.isExpired?(0,m.jsx)("span",{className:"fV_S8",children:"Запланирован"}):"yes"===e.isExpired?(0,m.jsx)("span",{className:"".concat("v0Krc"),children:"Просрочен"}):(0,m.jsx)("span",{className:"".concat("n0INM"),children:"Скоро"})}),(0,m.jsx)("td",{children:(0,m.jsxs)("div",{className:"vokrV",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-sm  mr-5 ".concat("edm7S"),onClick:function(){return n("result",e)},children:"Результативный"}),(0,m.jsx)("button",{type:"button",className:"btn btn-sm ms-2 ".concat("hs6K7"),onClick:function(){return n("noresult",e)},children:"Не очень"}),(0,m.jsx)("button",{type:"button",className:"btn btn-sm ms-2 ".concat("w2Sue"),onClick:function(){return n("expired",e)},children:"Перенос"}),(0,m.jsx)("button",{type:"button",className:"btn btn-sm ms-2 ".concat("ej40p"),onClick:function(){return n("cancel",e)},children:"Не считать"})]})})]},"table-row-".concat(t))}))})]})})})};var k=n(9752),y=function(){var e=(0,a.G)((function(e){return e.eventTask.tasks})),t=(0,a.G)((function(e){return e.eventTask.isFetched})),n=(0,a.j)();return(0,s.useEffect)((function(){!t&&n((0,l.zd)())}),[]),(0,m.jsx)(g,{tasks:e,setResultMenuStatus:function(e,t){n(l.BA.setCurrentTask({task:t})),n(k.F$.setEventItemMenuStatus({status:!0,menuType:e})),n(c.AQ.setCurrentPage({page:o.D.ITEM}))}})};const N=function(){return(0,m.jsx)(r.A,{children:(0,m.jsx)(y,{})})}}}]);
//# sourceMappingURL=201.c328dc201db6e8fef975.js.map