/*! For license information please see 131.92f48c9c6bfb1378390f.bundle.js.LICENSE.txt */
(self.webpackChunkapril_crm=self.webpackChunkapril_crm||[]).push([[131],{3953:(e,t,n)=>{n.d(t,{g9:()=>callMethod,eQ:()=>fitWindow,xI:()=>getAuth,FB:()=>getDomain,TC:()=>getScrollSize,ot:()=>o,Ru:()=>resizeWindow,OO:()=>scrollParentWindow});const a="//api.bitrix24.com/api/v1/";let r=!1,i=!0;const handlerResult=e=>{const t=Array.isArray(e)&&e||"ajaxResult"===e.constructor.name&&[e]||Object.values(e);for(const e of t){const t=e.next;if(e.next=async function(){return!!this.more()&&handlerResult(await new Promise((e=>t.call(this,e))))},i&&e.error())throw console.error(e.error(),e),e.error()}return e};function load(){return function loadscript(e){return new Promise((function(t,n){let a=!1,r=document.querySelector('script[src="'+e+'"]');if(r){if(r.hasAttribute("data-loaded"))return void t(r)}else r=document.createElement("script"),r.type="text/javascript",r.async=!0,r.src=e,a=!0;r.addEventListener("error",n),r.addEventListener("abort",n),r.addEventListener("load",(function loadScriptHandler(){r.setAttribute("data-loaded",!0),t(r)})),a&&document.head.appendChild(r)}))}(a)}async function init(){await load(),r=!0,await new Promise((e=>window.BX24.init(e)))}async function getAuth(){return await init(),window.BX24.getAuth()}async function callMethod(e,t){return await init(),handlerResult(await new Promise((n=>window.BX24.callMethod(e,t,n))))}window.BX24||(window.BX24={});async function resizeWindow(e,t){return await init(),await new Promise((n=>window.BX24.resizeWindow(e,t,n)))}async function fitWindow(){return await init(),await new Promise((e=>window.BX24.fitWindow(e)))}async function getDomain(){return await init(),window.BX24.getDomain()}async function scrollParentWindow(e){await init(),await new Promise((t=>window.BX24.scrollParentWindow(e,t)))}async function getScrollSize(){return await init(),window.BX24.getScrollSize()}const o={info:async()=>(await init(),window.BX24.placement.info()),async getInterface(){await init(),await new Promise((e=>window.BX24.placement.getInterface(e)))},async call(e,t){await init(),await new Promise((n=>window.BX24.placement.call(e,t||{},n)))},async bindEvent(e){await init(),await new Promise((t=>window.BX24.placement.bindEvent(e,t)))}}},6942:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=appendClass(e,parseValue(n)))}return e}function parseValue(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return classNames.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=appendClass(t,n));return t}function appendClass(e,t){return t?e?e+" "+t:e+t:e}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(n=function(){return classNames}.apply(t,[]))||(e.exports=n)}()},2695:(e,t,n)=>{n.d(t,{q:()=>getDefaultOptions});let a={};function getDefaultOptions(){return a}},2940:(e,t,n)=>{n.d(t,{Cg:()=>i,my:()=>a,s0:()=>o,w4:()=>r});Math.pow(10,8);const a=6048e5,r=864e5,i=6e4,o=36e5},291:(e,t,n)=>{n.d(t,{GP:()=>format});const a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};var r=n(7404);const i={date:(0,r.k)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.k)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.k)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};var u=n(9574);const s={ordinalNumber:(e,t)=>{const n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:(0,u.o)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:(0,u.o)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,u.o)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:(0,u.o)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:(0,u.o)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};var c=n(8094);const d={code:"en-US",formatDistance:(e,t,n)=>{let r;const i=a[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:i,formatRelative:(e,t,n,a)=>o[e],localize:s,match:{ordinalNumber:(0,n(1296).K)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:(0,c.A)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,c.A)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,c.A)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,c.A)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,c.A)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var l=n(2695),m=n(2940),f=n(2642);function startOfDay(e){const t=(0,f.a)(e);return t.setHours(0,0,0,0),t}function getTimezoneOffsetInMilliseconds(e){const t=(0,f.a)(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function differenceInCalendarDays(e,t){const n=startOfDay(e),a=startOfDay(t),r=+n-getTimezoneOffsetInMilliseconds(n),i=+a-getTimezoneOffsetInMilliseconds(a);return Math.round((r-i)/m.w4)}function constructFrom(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function startOfYear(e){const t=(0,f.a)(e),n=constructFrom(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}function getDayOfYear(e){const t=(0,f.a)(e);return differenceInCalendarDays(t,startOfYear(t))+1}var g=n(2528);function startOfISOWeek(e){return(0,g.k)(e,{weekStartsOn:1})}function getISOWeekYear(e){const t=(0,f.a)(e),n=t.getFullYear(),a=constructFrom(e,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=startOfISOWeek(a),i=constructFrom(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=startOfISOWeek(i);return t.getTime()>=r.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function startOfISOWeekYear(e){const t=getISOWeekYear(e),n=constructFrom(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),startOfISOWeek(n)}function getISOWeek(e){const t=(0,f.a)(e),n=+startOfISOWeek(t)-+startOfISOWeekYear(t);return Math.round(n/m.my)+1}function getWeekYear(e,t){const n=(0,f.a)(e),a=n.getFullYear(),r=(0,l.q)(),i=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=constructFrom(e,0);o.setFullYear(a+1,0,i),o.setHours(0,0,0,0);const u=(0,g.k)(o,t),s=constructFrom(e,0);s.setFullYear(a,0,i),s.setHours(0,0,0,0);const c=(0,g.k)(s,t);return n.getTime()>=u.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}function startOfWeekYear(e,t){const n=(0,l.q)(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=getWeekYear(e,t),i=constructFrom(e,0);i.setFullYear(r,0,a),i.setHours(0,0,0,0);return(0,g.k)(i,t)}function getWeek(e,t){const n=(0,f.a)(e),a=+(0,g.k)(n,t)-+startOfWeekYear(n,t);return Math.round(a/m.my)+1}function addLeadingZeros(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const h={y(e,t){const n=e.getFullYear(),a=n>0?n:1-n;return addLeadingZeros("yy"===t?a%100:a,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):addLeadingZeros(n+1,2)},d:(e,t)=>addLeadingZeros(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>addLeadingZeros(e.getHours()%12||12,t.length),H:(e,t)=>addLeadingZeros(e.getHours(),t.length),m:(e,t)=>addLeadingZeros(e.getMinutes(),t.length),s:(e,t)=>addLeadingZeros(e.getSeconds(),t.length),S(e,t){const n=t.length,a=e.getMilliseconds();return addLeadingZeros(Math.trunc(a*Math.pow(10,n-3)),t.length)}},w="midnight",p="noon",v="morning",b="afternoon",y="evening",k="night",M={G:function(e,t,n){const a=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),a=t>0?t:1-t;return n.ordinalNumber(a,{unit:"year"})}return h.y(e,t)},Y:function(e,t,n,a){const r=getWeekYear(e,a),i=r>0?r:1-r;if("YY"===t){return addLeadingZeros(i%100,2)}return"Yo"===t?n.ordinalNumber(i,{unit:"year"}):addLeadingZeros(i,t.length)},R:function(e,t){return addLeadingZeros(getISOWeekYear(e),t.length)},u:function(e,t){return addLeadingZeros(e.getFullYear(),t.length)},Q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return addLeadingZeros(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return addLeadingZeros(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){const a=e.getMonth();switch(t){case"M":case"MM":return h.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){const a=e.getMonth();switch(t){case"L":return String(a+1);case"LL":return addLeadingZeros(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){const r=getWeek(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):addLeadingZeros(r,t.length)},I:function(e,t,n){const a=getISOWeek(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):addLeadingZeros(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):h.d(e,t)},D:function(e,t,n){const a=getDayOfYear(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):addLeadingZeros(a,t.length)},E:function(e,t,n){const a=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){const r=e.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return addLeadingZeros(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){const r=e.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return addLeadingZeros(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){const a=e.getDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return addLeadingZeros(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const a=e.getHours();let r;switch(r=12===a?p:0===a?w:a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){const a=e.getHours();let r;switch(r=a>=17?y:a>=12?b:a>=4?v:k,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return h.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):h.H(e,t)},K:function(e,t,n){const a=e.getHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):addLeadingZeros(a,t.length)},k:function(e,t,n){let a=e.getHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):addLeadingZeros(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):h.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):h.s(e,t)},S:function(e,t){return h.S(e,t)},X:function(e,t,n){const a=e.getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return formatTimezoneWithOptionalMinutes(a);case"XXXX":case"XX":return formatTimezone(a);default:return formatTimezone(a,":")}},x:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"x":return formatTimezoneWithOptionalMinutes(a);case"xxxx":case"xx":return formatTimezone(a);default:return formatTimezone(a,":")}},O:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+formatTimezoneShort(a,":");default:return"GMT"+formatTimezone(a,":")}},z:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+formatTimezoneShort(a,":");default:return"GMT"+formatTimezone(a,":")}},t:function(e,t,n){return addLeadingZeros(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return addLeadingZeros(e.getTime(),t.length)}};function formatTimezoneShort(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),r=Math.trunc(a/60),i=a%60;return 0===i?n+String(r):n+String(r)+t+addLeadingZeros(i,2)}function formatTimezoneWithOptionalMinutes(e,t){if(e%60==0){return(e>0?"-":"+")+addLeadingZeros(Math.abs(e)/60,2)}return formatTimezone(e,t)}function formatTimezone(e,t=""){const n=e>0?"-":"+",a=Math.abs(e);return n+addLeadingZeros(Math.trunc(a/60),2)+t+addLeadingZeros(a%60,2)}const dateLongFormatter=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},timeLongFormatter=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},W={p:timeLongFormatter,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return dateLongFormatter(e,t);let i;switch(a){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;default:i=t.dateTime({width:"full"})}return i.replace("{{date}}",dateLongFormatter(a,t)).replace("{{time}}",timeLongFormatter(r,t))}},T=/^D+$/,D=/^Y+$/,S=["D","DD","YY","YYYY"];function isDate(e){return e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function isValid(e){if(!isDate(e)&&"number"!=typeof e)return!1;const t=(0,f.a)(e);return!isNaN(Number(t))}const P=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,N=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,x=/^'([^]*?)'?$/,O=/''/g,L=/[a-zA-Z]/;function format(e,t,n){const a=(0,l.q)(),r=n?.locale??a.locale??d,i=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,u=(0,f.a)(e);if(!isValid(u))throw new RangeError("Invalid time value");let s=t.match(N).map((e=>{const t=e[0];if("p"===t||"P"===t){return(0,W[t])(e,r.formatLong)}return e})).join("").match(P).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:cleanEscapedString(e)};if(M[t])return{isToken:!0,value:e};if(t.match(L))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));r.localize.preprocessor&&(s=r.localize.preprocessor(u,s));const c={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return s.map((a=>{if(!a.isToken)return a.value;const i=a.value;(!n?.useAdditionalWeekYearTokens&&function isProtectedWeekYearToken(e){return D.test(e)}(i)||!n?.useAdditionalDayOfYearTokens&&function isProtectedDayOfYearToken(e){return T.test(e)}(i))&&function warnOrThrowProtectedError(e,t,n){const a=function message(e,t,n){const a="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(a),S.includes(e))throw new RangeError(a)}(i,t,String(e));return(0,M[i[0]])(u,i,r.localize,c)})).join("")}function cleanEscapedString(e){const t=e.match(x);return t?t[1].replace(O,"'"):e}},7404:(e,t,n)=>{function buildFormatLongFn(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}n.d(t,{k:()=>buildFormatLongFn})},9574:(e,t,n)=>{function buildLocalizeFn(e){return(t,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;a=e.formattingValues[r]||e.formattingValues[t]}else{const t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;a=e.values[r]||e.values[t]}return a[e.argumentCallback?e.argumentCallback(t):t]}}n.d(t,{o:()=>buildLocalizeFn})},8094:(e,t,n)=>{function buildMatchFn(e){return(t,n={})=>{const a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function findIndex(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n;return}(u,(e=>e.test(o))):function findKey(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n;return}(u,(e=>e.test(o)));let c;c=e.valueCallback?e.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c;return{value:c,rest:t.slice(o.length)}}}n.d(t,{A:()=>buildMatchFn})},1296:(e,t,n)=>{function buildMatchPatternFn(e){return(t,n={})=>{const a=t.match(e.matchPattern);if(!a)return null;const r=a[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;return{value:o,rest:t.slice(r.length)}}}n.d(t,{K:()=>buildMatchPatternFn})},5580:(e,t,n)=>{function declension(e,t){if(void 0!==e.one&&1===t)return e.one;const n=t%10,a=t%100;return 1===n&&11!==a?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(a<10||a>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function buildLocalizeTokenFn(e){return(t,n)=>n?.addSuffix?n.comparison&&n.comparison>0?e.future?declension(e.future,t):"через "+declension(e.regular,t):e.past?declension(e.past,t):declension(e.regular,t)+" назад":declension(e.regular,t)}n.d(t,{A:()=>f,ru:()=>m});const a={lessThanXSeconds:buildLocalizeTokenFn({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:(e,t)=>t?.addSuffix?t.comparison&&t.comparison>0?"через полминуты":"полминуты назад":"полминуты",lessThanXMinutes:buildLocalizeTokenFn({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:buildLocalizeTokenFn({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:buildLocalizeTokenFn({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:buildLocalizeTokenFn({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:buildLocalizeTokenFn({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:buildLocalizeTokenFn({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:buildLocalizeTokenFn({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})};var r=n(7404);const i={date:(0,r.k)({formats:{full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,r.k)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.k)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};var o=n(2528);function isSameWeek(e,t,n){return+(0,o.k)(e,n)==+(0,o.k)(t,n)}const u=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function thisWeek(e){const t=u[e];return 2===e?"'во "+t+" в' p":"'в "+t+" в' p"}const s={lastWeek:(e,t,n)=>{const a=e.getDay();return isSameWeek(e,t,n)?thisWeek(a):function lastWeek(e){const t=u[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}(a)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:(e,t,n)=>{const a=e.getDay();return isSameWeek(e,t,n)?thisWeek(a):function nextWeek(e){const t=u[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}(a)},other:"P"};var c=n(9574);const d={ordinalNumber:(e,t)=>{const n=Number(e),a=t?.unit;let r;return r="date"===a?"-е":"week"===a||"minute"===a||"second"===a?"-я":"-й",n+r},era:(0,c.o)({values:{narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},defaultWidth:"wide"}),quarter:(0,c.o)({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,c.o)({values:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},defaultWidth:"wide",formattingValues:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},defaultFormattingWidth:"wide"}),day:(0,c.o)({values:{narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},defaultWidth:"wide"}),dayPeriod:(0,c.o)({values:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},defaultFormattingWidth:"wide"})};var l=n(8094);const m={code:"ru",formatDistance:(e,t,n)=>a[e](t,n),formatLong:i,formatRelative:(e,t,n,a)=>{const r=s[e];return"function"==typeof r?r(t,n,a):r},localize:d,match:{ordinalNumber:(0,n(1296).K)({matchPattern:/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:(0,l.A)({matchPatterns:{narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:(0,l.A)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,l.A)({matchPatterns:{narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:(0,l.A)({matchPatterns:{narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:(0,l.A)({matchPatterns:{narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}},f=m},4929:(e,t,n)=>{n.d(t,{H:()=>parseISO});var a=n(2940);function parseISO(e,t){const n=t?.additionalDigits??2,c=function splitDateString(e){const t={},n=e.split(r.dateTimeDelimiter);let a;if(n.length>2)return t;/:/.test(n[0])?a=n[0]:(t.date=n[0],a=n[1],r.timeZoneDelimiter.test(t.date)&&(t.date=e.split(r.timeZoneDelimiter)[0],a=e.substr(t.date.length,e.length)));if(a){const e=r.timezone.exec(a);e?(t.time=a.replace(e[1],""),t.timezone=e[1]):t.time=a}return t}(e);let d;if(c.date){const e=function parseYear(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(n);if(!a)return{year:NaN,restDateString:""};const r=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:null===i?r:100*i,restDateString:e.slice((a[1]||a[2]).length)}}(c.date,n);d=function parseDate(e,t){if(null===t)return new Date(NaN);const n=e.match(i);if(!n)return new Date(NaN);const a=!!n[4],r=parseDateUnit(n[1]),o=parseDateUnit(n[2])-1,u=parseDateUnit(n[3]),c=parseDateUnit(n[4]),d=parseDateUnit(n[5])-1;if(a)return function validateWeekDate(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,c,d)?function dayOfISOWeekYear(e,t,n){const a=new Date(0);a.setUTCFullYear(e,0,4);const r=a.getUTCDay()||7,i=7*(t-1)+n+1-r;return a.setUTCDate(a.getUTCDate()+i),a}(t,c,d):new Date(NaN);{const e=new Date(0);return function validateDate(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(s[t]||(isLeapYearIndex(e)?29:28))}(t,o,u)&&function validateDayOfYearDate(e,t){return t>=1&&t<=(isLeapYearIndex(e)?366:365)}(t,r)?(e.setUTCFullYear(t,o,Math.max(r,u)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!d||isNaN(d.getTime()))return new Date(NaN);const l=d.getTime();let m,f=0;if(c.time&&(f=function parseTime(e){const t=e.match(o);if(!t)return NaN;const n=parseTimeUnit(t[1]),r=parseTimeUnit(t[2]),i=parseTimeUnit(t[3]);if(!function validateTime(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,i))return NaN;return n*a.s0+r*a.Cg+1e3*i}(c.time),isNaN(f)))return new Date(NaN);if(!c.timezone){const e=new Date(l+f),t=new Date(0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return m=function parseTimezone(e){if("Z"===e)return 0;const t=e.match(u);if(!t)return 0;const n="+"===t[1]?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;if(!function validateTimezone(e,t){return t>=0&&t<=59}(0,i))return NaN;return n*(r*a.s0+i*a.Cg)}(c.timezone),isNaN(m)?new Date(NaN):new Date(l+f+m)}const r={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,o=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function parseDateUnit(e){return e?parseInt(e):1}function parseTimeUnit(e){return e&&parseFloat(e.replace(",","."))||0}const s=[31,null,31,30,31,30,31,31,30,31,30,31];function isLeapYearIndex(e){return e%400==0||e%4==0&&e%100!=0}},2528:(e,t,n)=>{n.d(t,{k:()=>startOfWeek});var a=n(2642),r=n(2695);function startOfWeek(e,t){const n=(0,r.q)(),i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=(0,a.a)(e),u=o.getDay(),s=(u<i?7:0)+u-i;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}},2642:(e,t,n)=>{function toDate(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}n.d(t,{a:()=>toDate})}}]);