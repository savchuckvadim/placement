(self.webpackChunkapril_kp=self.webpackChunkapril_kp||[]).push([[172],{3513:(e,t,r)=>{var n=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),i=Symbol.for("immer-state");function die(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var a=Object.getPrototypeOf;function isDraft(e){return!!e&&!!e[i]}function isDraftable(e){return!!e&&(isPlainObject(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||isMap(e)||isSet(e))}var c=Object.prototype.constructor.toString();function isPlainObject(e){if(!e||"object"!=typeof e)return!1;const t=a(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===c}function each(e,t){0===getArchtype(e)?Object.entries(e).forEach((([r,n])=>{t(r,n,e)})):e.forEach(((r,n)=>t(n,r,e)))}function getArchtype(e){const t=e[i];return t?t.type_:Array.isArray(e)?1:isMap(e)?2:isSet(e)?3:0}function has(e,t){return 2===getArchtype(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function set(e,t,r){const n=getArchtype(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function isMap(e){return e instanceof Map}function isSet(e){return e instanceof Set}function latest(e){return e.copy_||e.base_}function shallowCopy(e,t){if(isMap(e))return new Map(e);if(isSet(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&isPlainObject(e)){if(!a(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const r=Object.getOwnPropertyDescriptors(e);delete r[i];let n=Reflect.ownKeys(r);for(let t=0;t<n.length;t++){const o=n[t],i=r[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(a(e),r)}function freeze(e,t=!1){return isFrozen(e)||isDraft(e)||!isDraftable(e)||(getArchtype(e)>1&&(e.set=e.add=e.clear=e.delete=dontMutateFrozenCollections),Object.freeze(e),t&&each(e,((e,t)=>freeze(t,!0)))),e}function dontMutateFrozenCollections(){die(2)}function isFrozen(e){return Object.isFrozen(e)}var s,u={};function getPlugin(e){const t=u[e];return t||die(0),t}function getCurrentScope(){return s}function usePatchesInScope(e,t){t&&(getPlugin("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function revokeScope(e){leaveScope(e),e.drafts_.forEach(revokeDraft),e.drafts_=null}function leaveScope(e){e===s&&(s=e.parent_)}function enterScope(e){return s=function createScope(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}(s,e)}function revokeDraft(e){const t=e[i];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function processResult(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[i].modified_&&(revokeScope(t),die(4)),isDraftable(e)&&(e=finalize(t,e),t.parent_||maybeFreeze(t,e)),t.patches_&&getPlugin("Patches").generateReplacementPatches_(r[i].base_,e,t.patches_,t.inversePatches_)):e=finalize(t,r,[]),revokeScope(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==n?e:void 0}function finalize(e,t,r){if(isFrozen(t))return t;const n=t[i];if(!n)return each(t,((o,i)=>finalizeProperty(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return maybeFreeze(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),each(o,((o,a)=>finalizeProperty(e,n,t,o,a,r,i))),maybeFreeze(e,t,!1),r&&e.patches_&&getPlugin("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function finalizeProperty(e,t,r,n,o,i,a){if(isDraft(o)){const a=finalize(e,o,i&&t&&3!==t.type_&&!has(t.assigned_,n)?i.concat(n):void 0);if(set(r,n,a),!isDraft(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(isDraftable(o)&&!isFrozen(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;finalize(e,o),t&&t.scope_.parent_||maybeFreeze(e,o)}}function maybeFreeze(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&freeze(t,r)}var l={get(e,t){if(t===i)return e;const r=latest(e);if(!has(r,t))return function readPropFromProto(e,t,r){const n=getDescriptorFromProto(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!isDraftable(n)?n:n===peek(e.base_,t)?(prepareCopy(e),e.copy_[t]=createProxy(n,e)):n},has:(e,t)=>t in latest(e),ownKeys:e=>Reflect.ownKeys(latest(e)),set(e,t,r){const n=getDescriptorFromProto(latest(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=peek(latest(e),t),o=n?.[i];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function is(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||has(e.base_,t)))return!0;prepareCopy(e),markChanged(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==peek(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,prepareCopy(e),markChanged(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=latest(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){die(11)},getPrototypeOf:e=>a(e.base_),setPrototypeOf(){die(12)}},p={};function peek(e,t){const r=e[i];return(r?latest(r):e)[t]}function getDescriptorFromProto(e,t){if(!(t in e))return;let r=a(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=a(r)}}function markChanged(e){e.modified_||(e.modified_=!0,e.parent_&&markChanged(e.parent_))}function prepareCopy(e){e.copy_||(e.copy_=shallowCopy(e.base_,e.scope_.immer_.useStrictShallowCopy_))}each(l,((e,t)=>{p[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),p.deleteProperty=function(e,t){return p.set.call(this,e,t,void 0)},p.set=function(e,t,r){return l.set.call(this,e[0],t,r,e[0])};function createProxy(e,t){const r=isMap(e)?getPlugin("MapSet").proxyMap_(e,t):isSet(e)?getPlugin("MapSet").proxySet_(e,t):function createProxyProxy(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:getCurrentScope(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=l;r&&(o=[n],i=p);const{revoke:a,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=a,c}(e,t);return(t?t.scope_:getCurrentScope()).drafts_.push(r),r}function currentImpl(e){if(!isDraftable(e)||isFrozen(e))return e;const t=e[i];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=shallowCopy(e,t.scope_.immer_.useStrictShallowCopy_)}else r=shallowCopy(e,!0);return each(r,((e,t)=>{set(r,e,currentImpl(t))})),t&&(t.finalized_=!1),r}var f=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function curriedProduce(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let o;if("function"!=typeof t&&die(6),void 0!==r&&"function"!=typeof r&&die(7),isDraftable(e)){const n=enterScope(this),i=createProxy(e,void 0);let a=!0;try{o=t(i),a=!1}finally{a?revokeScope(n):leaveScope(n)}return usePatchesInScope(n,r),processResult(o,n)}if(!e||"object"!=typeof e){if(o=t(e),void 0===o&&(o=e),o===n&&(o=void 0),this.autoFreeze_&&freeze(o,!0),r){const t=[],n=[];getPlugin("Patches").generateReplacementPatches_(e,o,t,n),r(t,n)}return o}die(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){isDraftable(e)||die(8),isDraft(e)&&(e=function current(e){isDraft(e)||die(10);return currentImpl(e)}(e));const t=enterScope(this),r=createProxy(e,void 0);return r[i].isManual_=!0,leaveScope(t),r}finishDraft(e,t){const r=e&&e[i];r&&r.isManual_||die(9);const{scope_:n}=r;return usePatchesInScope(n,t),processResult(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=getPlugin("Patches").applyPatches_;return isDraft(e)?n(e,t):this.produce(e,(e=>n(e,t)))}};f.produce,f.produceWithPatches.bind(f),f.setAutoFreeze.bind(f),f.setUseStrictShallowCopy.bind(f),f.applyPatches.bind(f),f.createDraft.bind(f),f.finishDraft.bind(f)},3416:(e,t,r)=>{}}]);