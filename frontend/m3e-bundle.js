var u1=Object.defineProperty;var p1=Object.getOwnPropertyDescriptor;var fv=o=>{throw TypeError(o)};var d=(o,a,e,i)=>{for(var n=i>1?void 0:i?p1(a,e):a,l=o.length-1,h;l>=0;l--)(h=o[l])&&(n=(i?h(a,e,n):h(n))||n);return i&&n&&u1(a,e,n),n};var fu=(o,a,e)=>a.has(o)||fv("Cannot "+e);var s=(o,a,e)=>(fu(o,a,"read from private field"),e?e.call(o):a.get(o)),m=(o,a,e)=>a.has(o)?fv("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(o):a.set(o,e),g=(o,a,e,i)=>(fu(o,a,"write to private field"),i?i.call(o,e):a.set(o,e),e),c=(o,a,e)=>(fu(o,a,"access private method"),e);var bv=(o,a,e,i)=>({set _(n){g(o,a,n,e)},get _(){return s(o,a,i)}});var Ah=globalThis,_h=Ah.ShadowRoot&&(Ah.ShadyCSS===void 0||Ah.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bu=Symbol(),gv=new WeakMap,Gs=class{constructor(a,e,i){if(this._$cssResult$=!0,i!==bu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=e}get styleSheet(){let a=this.o,e=this.t;if(_h&&a===void 0){let i=e!==void 0&&e.length===1;i&&(a=gv.get(e)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),i&&gv.set(e,a))}return a}toString(){return this.cssText}},r=o=>new Gs(typeof o=="string"?o:o+"",void 0,bu),b=(o,...a)=>{let e=o.length===1?o[0]:a.reduce(((i,n,l)=>i+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[l+1]),o[0]);return new Gs(e,o,bu)},yv=(o,a)=>{if(_h)o.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let e of a){let i=document.createElement("style"),n=Ah.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)}},gu=_h?o=>o:o=>o instanceof CSSStyleSheet?(a=>{let e="";for(let i of a.cssRules)e+=i.cssText;return r(e)})(o):o;var{is:v1,defineProperty:f1,getOwnPropertyDescriptor:b1,getOwnPropertyNames:g1,getOwnPropertySymbols:y1,getPrototypeOf:x1}=Object,Ih=globalThis,xv=Ih.trustedTypes,C1=xv?xv.emptyScript:"",$1=Ih.reactiveElementPolyfillSupport,js=(o,a)=>o,Ks={toAttribute(o,a){switch(a){case Boolean:o=o?C1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,a){let e=o;switch(a){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},zh=(o,a)=>!v1(o,a),Cv={attribute:!0,type:String,converter:Ks,reflect:!1,useDefault:!1,hasChanged:zh};Symbol.metadata??=Symbol("metadata"),Ih.litPropertyMetadata??=new WeakMap;var ni=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,e=Cv){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(a,e),!e.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(a,i,e);n!==void 0&&f1(this.prototype,a,n)}}static getPropertyDescriptor(a,e,i){let{get:n,set:l}=b1(this.prototype,a)??{get(){return this[e]},set(h){this[e]=h}};return{get:n,set(h){let u=n?.call(this);l?.call(this,h),this.requestUpdate(a,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Cv}static _$Ei(){if(this.hasOwnProperty(js("elementProperties")))return;let a=x1(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(js("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(js("properties"))){let e=this.properties,i=[...g1(e),...y1(e)];for(let n of i)this.createProperty(n,e[n])}let a=this[Symbol.metadata];if(a!==null){let e=litPropertyMetadata.get(a);if(e!==void 0)for(let[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){let e=[];if(Array.isArray(a)){let i=new Set(a.flat(1/0).reverse());for(let n of i)e.unshift(gu(n))}else a!==void 0&&e.push(gu(a));return e}static _$Eu(a,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((a=>this.enableUpdating=a)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((a=>a(this)))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){let a=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(a.set(i,this[i]),delete this[i]);a.size>0&&(this._$Ep=a)}createRenderRoot(){let a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yv(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((a=>a.hostConnected?.()))}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach((a=>a.hostDisconnected?.()))}attributeChangedCallback(a,e,i){this._$AK(a,i)}_$ET(a,e){let i=this.constructor.elementProperties.get(a),n=this.constructor._$Eu(a,i);if(n!==void 0&&i.reflect===!0){let l=(i.converter?.toAttribute!==void 0?i.converter:Ks).toAttribute(e,i.type);this._$Em=a,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Em=null}}_$AK(a,e){let i=this.constructor,n=i._$Eh.get(a);if(n!==void 0&&this._$Em!==n){let l=i.getPropertyOptions(n),h=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:Ks;this._$Em=n;let u=h.fromAttribute(e,l.type);this[n]=u??this._$Ej?.get(n)??u,this._$Em=null}}requestUpdate(a,e,i){if(a!==void 0){let n=this.constructor,l=this[a];if(i??=n.getPropertyOptions(a),!((i.hasChanged??zh)(l,e)||i.useDefault&&i.reflect&&l===this._$Ej?.get(a)&&!this.hasAttribute(n._$Eu(a,i))))return;this.C(a,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,e,{useDefault:i,reflect:n,wrapped:l},h){i&&!(this._$Ej??=new Map).has(a)&&(this._$Ej.set(a,h??e??this[a]),l!==!0||h!==void 0)||(this._$AL.has(a)||(this.hasUpdated||i||(e=void 0),this._$AL.set(a,e)),n===!0&&this._$Em!==a&&(this._$Eq??=new Set).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,l]of i){let{wrapped:h}=l,u=this[n];h!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,l,u)}}let a=!1,e=this._$AL;try{a=this.shouldUpdate(e),a?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw a=!1,this._$EM(),i}a&&this._$AE(e)}willUpdate(a){}_$AE(a){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(a){}firstUpdated(a){}};ni.elementStyles=[],ni.shadowRootOptions={mode:"open"},ni[js("elementProperties")]=new Map,ni[js("finalized")]=new Map,$1?.({ReactiveElement:ni}),(Ih.reactiveElementVersions??=[]).push("2.1.1");var wu=globalThis,Oh=wu.trustedTypes,$v=Oh?Oh.createPolicy("lit-html",{createHTML:o=>o}):void 0,Tv="$lit$",Fi=`lit$${Math.random().toFixed(9).slice(2)}$`,Mv="?"+Fi,S1=`<${Mv}>`,Ea=document,Xs=()=>Ea.createComment(""),Ys=o=>o===null||typeof o!="object"&&typeof o!="function",Lu=Array.isArray,k1=o=>Lu(o)||typeof o?.[Symbol.iterator]=="function",yu=`[ 	
\f\r]`,Zs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sv=/-->/g,kv=/>/g,wa=RegExp(`>|${yu}(?:([^\\s"'>=/]+)(${yu}*=${yu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wv=/'/g,Lv=/"/g,Pv=/^(?:script|style|textarea|title)$/i,Eu=o=>(a,...e)=>({_$litType$:o,strings:a,values:e}),f=Eu(1),si=Eu(2),j2=Eu(3),Mo=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Ev=new WeakMap,La=Ea.createTreeWalker(Ea,129);function Hv(o,a){if(!Lu(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $v!==void 0?$v.createHTML(a):a}var w1=(o,a)=>{let e=o.length-1,i=[],n,l=a===2?"<svg>":a===3?"<math>":"",h=Zs;for(let u=0;u<e;u++){let v=o[u],C,S,$=-1,T=0;for(;T<v.length&&(h.lastIndex=T,S=h.exec(v),S!==null);)T=h.lastIndex,h===Zs?S[1]==="!--"?h=Sv:S[1]!==void 0?h=kv:S[2]!==void 0?(Pv.test(S[2])&&(n=RegExp("</"+S[2],"g")),h=wa):S[3]!==void 0&&(h=wa):h===wa?S[0]===">"?(h=n??Zs,$=-1):S[1]===void 0?$=-2:($=h.lastIndex-S[2].length,C=S[1],h=S[3]===void 0?wa:S[3]==='"'?Lv:wv):h===Lv||h===wv?h=wa:h===Sv||h===kv?h=Zs:(h=wa,n=void 0);let w=h===wa&&o[u+1].startsWith("/>")?" ":"";l+=h===Zs?v+S1:$>=0?(i.push(C),v.slice(0,$)+Tv+v.slice($)+Fi+w):v+Fi+($===-2?u:w)}return[Hv(o,l+(o[e]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),i]},Js=class o{constructor({strings:a,_$litType$:e},i){let n;this.parts=[];let l=0,h=0,u=a.length-1,v=this.parts,[C,S]=w1(a,e);if(this.el=o.createElement(C,i),La.currentNode=this.el.content,e===2||e===3){let $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(n=La.nextNode())!==null&&v.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(let $ of n.getAttributeNames())if($.endsWith(Tv)){let T=S[h++],w=n.getAttribute($).split(Fi),P=/([.?@])?(.*)/.exec(T);v.push({type:1,index:l,name:P[2],strings:w,ctor:P[1]==="."?Cu:P[1]==="?"?$u:P[1]==="@"?Su:fn}),n.removeAttribute($)}else $.startsWith(Fi)&&(v.push({type:6,index:l}),n.removeAttribute($));if(Pv.test(n.tagName)){let $=n.textContent.split(Fi),T=$.length-1;if(T>0){n.textContent=Oh?Oh.emptyScript:"";for(let w=0;w<T;w++)n.append($[w],Xs()),La.nextNode(),v.push({type:2,index:++l});n.append($[T],Xs())}}}else if(n.nodeType===8)if(n.data===Mv)v.push({type:2,index:l});else{let $=-1;for(;($=n.data.indexOf(Fi,$+1))!==-1;)v.push({type:7,index:l}),$+=Fi.length-1}l++}}static createElement(a,e){let i=Ea.createElement("template");return i.innerHTML=a,i}};function vn(o,a,e=o,i){if(a===Mo)return a;let n=i!==void 0?e._$Co?.[i]:e._$Cl,l=Ys(a)?void 0:a._$litDirective$;return n?.constructor!==l&&(n?._$AO?.(!1),l===void 0?n=void 0:(n=new l(o),n._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(a=vn(o,n._$AS(o,a.values),n,i)),a}var xu=class{constructor(a,e){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){let{el:{content:e},parts:i}=this._$AD,n=(a?.creationScope??Ea).importNode(e,!0);La.currentNode=n;let l=La.nextNode(),h=0,u=0,v=i[0];for(;v!==void 0;){if(h===v.index){let C;v.type===2?C=new Qs(l,l.nextSibling,this,a):v.type===1?C=new v.ctor(l,v.name,v.strings,this,a):v.type===6&&(C=new ku(l,this,a)),this._$AV.push(C),v=i[++u]}h!==v?.index&&(l=La.nextNode(),h++)}return La.currentNode=Ea,n}p(a){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(a,i,e),e+=i.strings.length-2):i._$AI(a[e])),e++}},Qs=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,e,i,n){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=a,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode,e=this._$AM;return e!==void 0&&a?.nodeType===11&&(a=e.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,e=this){a=vn(this,a,e),Ys(a)?a===R||a==null||a===""?(this._$AH!==R&&this._$AR(),this._$AH=R):a!==this._$AH&&a!==Mo&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):k1(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==R&&Ys(this._$AH)?this._$AA.nextSibling.data=a:this.T(Ea.createTextNode(a)),this._$AH=a}$(a){let{values:e,_$litType$:i}=a,n=typeof i=="number"?this._$AC(a):(i.el===void 0&&(i.el=Js.createElement(Hv(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let l=new xu(n,this),h=l.u(this.options);l.p(e),this.T(h),this._$AH=l}}_$AC(a){let e=Ev.get(a.strings);return e===void 0&&Ev.set(a.strings,e=new Js(a)),e}k(a){Lu(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let l of a)n===e.length?e.push(i=new o(this.O(Xs()),this.O(Xs()),this,this.options)):i=e[n],i._$AI(l),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(a=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);a!==this._$AB;){let i=a.nextSibling;a.remove(),a=i}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}},fn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,e,i,n,l){this.type=1,this._$AH=R,this._$AN=void 0,this.element=a,this.name=e,this._$AM=n,this.options=l,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}_$AI(a,e=this,i,n){let l=this.strings,h=!1;if(l===void 0)a=vn(this,a,e,0),h=!Ys(a)||a!==this._$AH&&a!==Mo,h&&(this._$AH=a);else{let u=a,v,C;for(a=l[0],v=0;v<l.length-1;v++)C=vn(this,u[i+v],e,v),C===Mo&&(C=this._$AH[v]),h||=!Ys(C)||C!==this._$AH[v],C===R?a=R:a!==R&&(a+=(C??"")+l[v+1]),this._$AH[v]=C}h&&!n&&this.j(a)}j(a){a===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}},Cu=class extends fn{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===R?void 0:a}},$u=class extends fn{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==R)}},Su=class extends fn{constructor(a,e,i,n,l){super(a,e,i,n,l),this.type=5}_$AI(a,e=this){if((a=vn(this,a,e,0)??R)===Mo)return;let i=this._$AH,n=a===R&&i!==R||a.capture!==i.capture||a.once!==i.once||a.passive!==i.passive,l=a!==R&&(i===R||n);n&&this.element.removeEventListener(this.name,this,i),l&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}},ku=class{constructor(a,e,i){this.element=a,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(a){vn(this,a)}};var L1=wu.litHtmlPolyfillSupport;L1?.(Js,Qs),(wu.litHtmlVersions??=[]).push("3.3.1");var Rv=(o,a,e)=>{let i=e?.renderBefore??a,n=i._$litPart$;if(n===void 0){let l=e?.renderBefore??null;i._$litPart$=n=new Qs(a.insertBefore(Xs(),l),l,void 0,e??{})}return n._$AI(o),n};var Tu=globalThis,k=class extends ni{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=Rv(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Mo}};k._$litElement$=!0,k.finalized=!0,Tu.litElementHydrateSupport?.({LitElement:k});var E1=Tu.litElementPolyfillSupport;E1?.({LitElement:k});(Tu.litElementVersions??=[]).push("4.2.1");var y=o=>(a,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(o,a)})):customElements.define(o,a)};var T1={attribute:!0,type:String,converter:Ks,reflect:!1,hasChanged:zh},M1=(o=T1,a,e)=>{let{kind:i,metadata:n}=e,l=globalThis.litPropertyMetadata.get(n);if(l===void 0&&globalThis.litPropertyMetadata.set(n,l=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),l.set(e.name,o),i==="accessor"){let{name:h}=e;return{set(u){let v=a.get.call(this);a.set.call(this,u),this.requestUpdate(h,v,o)},init(u){return u!==void 0&&this.C(h,void 0,o,u),u}}}if(i==="setter"){let{name:h}=e;return function(u){let v=this[h];a.call(this,u),this.requestUpdate(h,v,o)}}throw Error("Unsupported decorator location: "+i)};function p(o){return(a,e)=>typeof e=="object"?M1(o,a,e):((i,n,l)=>{let h=n.hasOwnProperty(l);return n.constructor.createProperty(l,i),h?Object.getOwnPropertyDescriptor(n,l):void 0})(o,a,e)}function ie(o){return p({...o,state:!0,attribute:!1})}var Vi=(o,a,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof a!="object"&&Object.defineProperty(o,a,e),e);function L(o,a){return(e,i,n)=>{let l=h=>h.renderRoot?.querySelector(o)??null;if(a){let{get:h,set:u}=typeof i=="object"?e:n??(()=>{let v=Symbol();return{get(){return this[v]},set(C){this[v]=C}}})();return Vi(e,i,{get(){let v=h.call(this);return v===void 0&&(v=l(this),(v!==null||this.hasUpdated)&&u.call(this,v)),v}})}return Vi(e,i,{get(){return l(this)}})}}function Av(o){return(a,e)=>{let{slot:i,selector:n}=o??{},l="slot"+(i?`[name=${i}]`:":not([name])");return Vi(a,e,{get(){let h=this.renderRoot?.querySelector(l),u=h?.assignedElements(o)??[];return n===void 0?u:u.filter((v=>v.matches(n)))}})}}var Dh=class{#e=null;#t=0;#o=!1;#r;#i=()=>{if(!this.#o)return;let a=performance.now();this.#r((a-this.#t)/1e3,a/1e3),this.#t=a,this.#e=requestAnimationFrame(this.#i)};constructor(a,e){this.#r=e,a.addController(this)}hostDisconnected(){this.stop()}start(){this.#o||(this.#o=!0,this.#t=performance.now(),this.#i())}stop(){this.#o&&(this.#o=!1,this.#e!==null&&(cancelAnimationFrame(this.#e),this.#e=null))}};var vt=class{#e;#t;#o=new Set;constructor(a,e){this.#e=a,this.#t=e.target,this.#e.addController(this)}get targets(){return this.#o.values()}hostConnected(){this.#t!==null&&this.observe(this.#t??this.#e)}hostDisconnected(){this.#o.forEach(a=>this.unobserve(a)),this.#o.clear()}observe(a){this.#o.has(a)||(this.#o.add(a),this._observe(a))}isObserving(a){return this.#o.has(a)}unobserve(a){this.#o.delete(a)&&this._unobserve(a)}};function Mu(o,a){if(!a)return 0;let e=document.createElement("div");e.style.all="inherit",e.style.width=a,e.style.position="absolute",e.style.visibility="hidden",e.style.pointerEvents="none",o.appendChild(e);try{return parseFloat(getComputedStyle(e).width)}finally{e.remove()}}function _v(o){let a=parseFloat(getComputedStyle(o).lineHeight);return isNaN(a)||a<=0?0:Math.round(o.scrollHeight/a)}async function Fh(o,a=200){o.focus();function e(n){let l=n.getRootNode();return l instanceof ShadowRoot?l.activeElement===n:document.activeElement===n}let i=performance.now();for(;!e(o);){if(!o.isConnected||performance.now()-i>a)return!1;await new Promise(requestAnimationFrame),o.focus()}return!0}function bn(){return!!1&&matchMedia("(forced-colors: active)").matches}function Iv(o,a,e){return o+(a-o)*e}function zv(o,a,e,i){let n=Math.pow(1-i,2)*o.x+2*(1-i)*i*a.x+Math.pow(i,2)*e.x,l=Math.pow(1-i,2)*o.y+2*(1-i)*i*a.y+Math.pow(i,2)*e.y;return{x:n,y:l}}function Ov(o,a,e,i,n){let l=Math.pow(1-n,3)*o.x+3*Math.pow(1-n,2)*n*a.x+3*(1-n)*Math.pow(n,2)*e.x+Math.pow(n,3)*i.x,h=Math.pow(1-n,3)*o.y+3*Math.pow(1-n,2)*n*a.y+3*(1-n)*Math.pow(n,2)*e.y+Math.pow(n,3)*i.y;return{x:l,y:h}}function P1(o){return(o.match(/[a-zA-Z][^a-zA-Z]*/g)||[]).map(e=>{let i=e[0],n=e.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);return{type:i,nums:n}})}function H1(o,a){let e=P1(o),i={x:0,y:0},n={x:0,y:0},l=[];for(let $ of e)if($.type==="M")i={x:$.nums[0],y:$.nums[1]},n=i;else if($.type==="L"){let T={x:$.nums[0],y:$.nums[1]},w=T.x-i.x,P=T.y-i.y;l.push({type:"L",pts:[i,T],length:Math.hypot(w,P)}),i=T}else if($.type==="H"){let T={x:$.nums[0],y:i.y},w=T.x-i.x;l.push({type:"L",pts:[i,T],length:Math.abs(w)}),i=T}else if($.type==="V"){let T={x:i.x,y:$.nums[0]},w=T.y-i.y;l.push({type:"L",pts:[i,T],length:Math.abs(w)}),i=T}else if($.type==="Q"){let T={x:$.nums[0],y:$.nums[1]},w={x:$.nums[2],y:$.nums[3]},P=0,_=i,z=20;for(let V=1;V<=z;V++){let q=V/z,B=zv(i,T,w,q);P+=Math.hypot(B.x-_.x,B.y-_.y),_=B}l.push({type:"Q",pts:[i,T,w],length:P}),i=w}else if($.type==="C"){let T={x:$.nums[0],y:$.nums[1]},w={x:$.nums[2],y:$.nums[3]},P={x:$.nums[4],y:$.nums[5]},_=0,z=i,V=20;for(let q=1;q<=V;q++){let B=q/V,te=Ov(i,T,w,P,B);_+=Math.hypot(te.x-z.x,te.y-z.y),z=te}l.push({type:"C",pts:[i,T,w,P],length:_}),i=P}else if($.type==="Z"){let T=n.x-i.x,w=n.y-i.y;l.push({type:"L",pts:[i,n],length:Math.hypot(T,w)}),i=n}let u=l.reduce(($,T)=>$+T.length,0)/(a-1),v=[],C=0,S=0;for(let $=0;$<a;$++){let T=$*u;for(;S<l.length&&C+l[S].length<T;)C+=l[S].length,S++;let w=l[S];if(!w)break;let P=(T-C)/w.length;if(w.type==="L"){let[_,z]=w.pts;v.push({x:Iv(_.x,z.x,P),y:Iv(_.y,z.y,P)})}else if(w.type==="Q"){let[_,z,V]=w.pts;v.push(zv(_,z,V,P))}else if(w.type==="C"){let[_,z,V,q]=w.pts;v.push(Ov(_,z,V,q,P))}}return v}function R1(o){return`${o.map(e=>{let i=Dv(e.x*100,0,100),n=Dv(e.y*100,0,100);return`${i.toFixed(2)}% ${n.toFixed(2)}%`}).join(", ")}`}function Dv(o,a,e){return Math.max(a,Math.min(e,o))}function A1(o){let a=1/0,e=1/0,i=-1/0,n=-1/0;for(let l of o)l.x<a&&(a=l.x),l.x>i&&(i=l.x),l.y<e&&(e=l.y),l.y>n&&(n=l.y);return{minX:a,minY:e,maxX:i,maxY:n,width:i-a,height:n-e}}function _1(o,a){let e=o.length,i=new Array(e);for(let n=0;n<e;n++)i[n]=o[(n+a)%e];return i}function I1(o,a){let e=Math.min(a.length,o.length),i=0,n=1/0;for(let l=0;l<e;l++){let h=0;for(let u=0;u<e;u++){let v=a[(u+l)%e],C=o[u],S=v.x-C.x,$=v.y-C.y;if(h+=S*S+$*$,h>=n)break}h<n&&(n=h,i=l)}return i}function Fv(o){let a=0,e=o.length;for(let i=0;i<e;i++){let n=o[i],l=o[(i+1)%e];a+=n.x*l.y-l.x*n.y}return a/2}function z1(o){let a=o.map(n=>{let l=A1(n),h=n.map(w=>({x:w.x-l.minX,y:w.y-l.minY})),u=Math.max(l.width,l.height)||1,v=h.map(w=>({x:w.x/u,y:w.y/u})),C=l.width/u,S=l.height/u,$=(1-C)/2,T=(1-S)/2;return v.map(w=>({x:w.x+$,y:w.y+T}))}),e=a[0],i=Math.sign(Fv(e));for(let n=1;n<a.length;n++){let l=a[n],h=Math.sign(Fv(l));h!==0&&h!==i&&(l=l.slice().reverse());let u=I1(e,l);a[n]=_1(l,u)}return a}function Vh(o,a){return z1(o.map(e=>H1(e,a))).map(e=>R1(e))}function ft(o,a=!1){let e="";switch(o.nodeType){case Node.TEXT_NODE:e=o.nodeValue??"";break;case Node.ELEMENT_NODE:if(o instanceof HTMLSlotElement)for(let i of o.assignedNodes({flatten:!0}))e+=ft(i,a);else for(let i of o.childNodes)e+=ft(i,a);break}return a&&(e=e.trim()),e}function Vv(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,o=>{let a=Math.random()*16|0;return(o==="x"?a:a&3|8).toString(16)})}function J(o){return o.assignedNodes({flatten:!0}).length>0}function Bv(o,a,e){let i=Object.getOwnPropertyDescriptor(o,a)??Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o),a);if(!i)throw new Error(`Property ${String(a)} not found on target.`);let n=i.get?.bind(o),l=i.set?.bind(o);return Object.defineProperty(o,a,{configurable:!0,enumerable:i.enumerable,get(){return e.get?e.get(()=>n?.()):n?.()},set(h){e.set?e.set(h,u=>l?.(u)):l?.(h)}}),()=>Object.defineProperty(o,a,i)}function Me(){return matchMedia("(prefers-reduced-motion)").matches}function Nv(o,a=document){return new Promise(e=>{let i=a.querySelector(`#${o}`);if(i){e(i);return}if(document.readyState==="complete"||document.readyState==="interactive"){e(a.querySelector(`#${o}`));return}document.addEventListener("DOMContentLoaded",()=>e(a.querySelector(`#${o}`)),{once:!0})})}function el(o){let a=document?.location??null;return`url(${a?(a.pathname+a.search).split("#")[0]:""}#${o})`}function Wo(o,a,e){let i=a.getBoundingClientRect(),n=o.getBoundingClientRect();(n.top<i.top||n.bottom>i.bottom)&&o.scrollIntoView(e)}var Bh=class{#e=[];#t;constructor(a=100){this.#t=a}add(a,e=performance.now()){this.#e.push({y:a,t:e});let i=e-this.#t;for(;this.#e.length>1&&this.#e[0].t<i;)this.#e.shift()}getVelocity(){if(this.#e.length<2)return 0;let a=this.#e[0],e=this.#e[this.#e.length-1],i=e.y-a.y,n=(e.t-a.t)/1e3;return n>0?i/n:0}reset(){this.#e.length=0}};var ze=class extends vt{#e=!1;#t;#o=a=>this.#h(a);#r=a=>this.#d(a);#i=a=>this.#m(a);#a=()=>this.#e=!0;#n=()=>this.#e=!1;#s=!1;#l=()=>this.#s=!0;#c=()=>this.#s=!1;constructor(a,e){super(a,e),this.#t=e.callback}hostConnected(){super.hostConnected(),window?.addEventListener("keydown",this.#l,{capture:!0,passive:!0}),window?.addEventListener("pointerdown",this.#c,{capture:!0})}hostDisconnected(){super.hostDisconnected(),window?.removeEventListener("keydown",this.#l,{capture:!0}),window?.removeEventListener("pointerdown",this.#c,{capture:!0})}_observe(a){a.addEventListener("keydown",this.#o),a.addEventListener("focusin",this.#r),a.addEventListener("focusout",this.#i),a.addEventListener("touchstart",this.#a),a.addEventListener("touchend",this.#n),a.addEventListener("touchcancel",this.#n)}_unobserve(a){a.removeEventListener("keydown",this.#o),a.removeEventListener("focusin",this.#r),a.removeEventListener("focusout",this.#i),a.removeEventListener("touchstart",this.#a),a.removeEventListener("touchend",this.#n),a.removeEventListener("touchcancel",this.#n)}#h(a){a.currentTarget.matches(":focus-within")&&this.#d(a)}#d(a){if(this.#e)return;let e=a.currentTarget;this.#t(!0,e.matches(":focus-visible")||this.#s||bn(),e)}#m(a){this.#e||this.#t(!1,!1,a.currentTarget)}};var et=class extends vt{#e;#t=new Map;#o=new Map;#r=a=>this.#l(a);#i=a=>this.#c(a);constructor(a,e){super(a,e),this.#e=e.callback,this.startDelay=e.startDelay??0,this.endDelay=e.endDelay??0}clearDelays(){for(let a of this.targets)this.#a(a)}_observe(a){a.addEventListener("pointerenter",this.#r),a.addEventListener("pointerleave",this.#i),a.addEventListener("touchend",this.#i)}_unobserve(a){a.removeEventListener("pointerenter",this.#r),a.removeEventListener("pointerleave",this.#i),a.removeEventListener("touchend",this.#i)}#a(a){this.#n(a),this.#s(a)}#n(a){return this.#t.has(a)?(clearTimeout(this.#t.get(a)),this.#t.delete(a)):!1}#s(a){return this.#o.has(a)?(clearTimeout(this.#o.get(a)),this.#o.delete(a)):!1}#l(a){let e=a.target;this.#s(e),this.startDelay>0?(this.#n(e),this.#t.set(e,setTimeout(()=>{this.#t.delete(e),this.#e(!0,e)},this.startDelay))):this.#e(!0,e)}#c(a){let e=a.target;this.#n(e)||(this.endDelay>0?(this.#s(e),this.#o.set(e,setTimeout(()=>{this.#o.delete(e),this.#e(!1,e)},this.endDelay))):this.#e(!1,e))}};var Nh=class extends vt{#e;#t;#o=!1;#r;#i=!0;constructor(a,e){if(super(a,e),this.#e=a,this.#t=e.callback,this.#o=e.skipInitial??!1,!!1){if(!window.IntersectionObserver){console.warn("IntersectionController error: the browser does not support IntersectionObserver.");return}this.#r=new IntersectionObserver((i,n)=>{this.#t(i,n),this.#e.requestUpdate()},e.init)}}async hostUpdated(){this.#r&&!this.#o&&this.#i&&this.#t([],this.#r),this.#i=!1}_observe(a){this.#r?.observe(a),this.#i=!0,this.#e.requestUpdate()}_unobserve(a){this.#r?.unobserve(a)}};var qh=class extends vt{#e;#t;#o=new Set;#r=new Map;#i=a=>this.#n(a);#a=a=>this.#s(a);constructor(a,e){super(a,e),this.#e=e.callback,this.#t=e.threshold??500}_observe(a){a.addEventListener("touchstart",this.#i,{passive:!0}),a.addEventListener("touchend",this.#a),a.addEventListener("touchcancel",this.#a)}_unobserve(a){a.removeEventListener("touchstart",this.#i),a.removeEventListener("touchend",this.#a),a.removeEventListener("touchcancel",this.#a)}#n(a){if(a.currentTarget instanceof HTMLElement&&this.isObserving(a.currentTarget)){let e=a.currentTarget;this.#r.set(e,setTimeout(()=>{this.#o.add(e),this.#r.delete(e),this.#e(!0,e)},this.#t))}}#s(a){if(a.currentTarget instanceof HTMLElement&&this.isObserving(a.currentTarget)){let e=a.currentTarget;this.#o.has(e)&&(this.#e(!1,e),this.#o.delete(e)),this.#r.has(e)&&(clearTimeout(this.#r.get(e)),this.#r.delete(e))}}};var _r=class extends vt{#e;#t;#o=!1;#r;#i;#a=!0;constructor(a,e){if(super(a,e),this.#e=a,this.#t=e.callback,this.#o=e.skipInitial??!1,this.#r=e.config,!!1){if(!window.MutationObserver){console.warn("MutationController error: the browser does not support MutationObserver.");return}this.#i=new MutationObserver((i,n)=>{this.#t(i,n),this.#e.requestUpdate()})}}async hostUpdated(){if(this.#i&&!this.#o&&this.#a){let a=this.#i.takeRecords();a.length>0&&this.#t(a,this.#i)}this.#a=!1}hostDisconnected(){super.hostDisconnected(),this.#i?.disconnect()}_observe(a){this.#i?.observe(a,this.#r),this.#a=!0,this.#e.requestUpdate()}_unobserve(){this.#i?.disconnect();for(let a of this.targets)this.#i?.observe(a,this.#r)}};var ue=class extends vt{#e;#t;#o;#r=new Map;#i;#a=a=>this.#h(a);#n=a=>this.#d(a);#s=a=>this.#m(a);#l=a=>this.#p(a);#c=a=>this.#v(a);constructor(a,e){super(a,e),this.#e=e.capture,this.#t=e.callback,this.#o=e.isPressedKey,this.#i=e.minPressedDuration??0}hostConnected(){document.addEventListener("pointerup",this.#n,{capture:this.#e}),document.addEventListener("touchend",this.#s,{capture:this.#e}),document.addEventListener("touchcancel",this.#s,{capture:this.#e}),super.hostConnected()}hostDisconnected(){document.removeEventListener("pointerup",this.#n,{capture:this.#e}),document.removeEventListener("touchend",this.#s,{capture:this.#e}),document.removeEventListener("touchcancel",this.#s,{capture:this.#e}),super.hostDisconnected(),this.#r.clear()}_observe(a){a.addEventListener("pointerdown",this.#a,{capture:this.#e}),this.#o&&(a.addEventListener("keydown",this.#l,{capture:this.#e}),a.addEventListener("keyup",this.#c,{capture:this.#e}))}_unobserve(a){a.removeEventListener("pointerdown",this.#a,{capture:this.#e}),this.#o&&(a.removeEventListener("keydown",this.#l,{capture:this.#e}),a.removeEventListener("keyup",this.#c,{capture:this.#e}))}#h(a){if(!(a.pointerType==="mouse"&&a.button>1)){for(let e of a.composedPath())if(e instanceof HTMLElement&&this.isObserving(e)){this.#r.has(e)||(this.#r.set(e,performance.now()),this.#t(!0,{x:a.x,y:a.y},e));break}}}#d(a){a.pointerType==="mouse"&&a.button>1||this.#u(a.x,a.y)}#m(a){this.#u(a.changedTouches[0]?.clientX??0,a.changedTouches[0]?.clientY??0)}#p(a){if(a.target!==a.currentTarget)return;let e=a.currentTarget;if(this.#o?.(a.key)&&(a.key===" "&&a.preventDefault(),!this.#r.has(e))){this.#r.set(e,performance.now());let i=e.getBoundingClientRect();this.#t(!0,{x:i.x+i.width/2,y:i.y+i.height/2},e)}}#v(a){let e=a.target;if(this.#r.has(e)&&this.#o?.(a.key)){let i=this.#i-(performance.now()-this.#r.get(e)),n=e.getBoundingClientRect();i>0?setTimeout(()=>{this.#r.delete(e),this.#t(!1,{x:n.x+n.width/2,y:n.y+n.height/2},e)},i):(this.#r.delete(e),this.#t(!1,{x:n.x+n.width/2,y:n.y+n.height/2},e))}}#u(a,e){for(let i of this.#r){let n=this.#i-(performance.now()-i[1]);n>0?setTimeout(()=>{this.#r.delete(i[0]),this.#t(!1,{x:a,y:e},i[0])},n):(this.#r.delete(i[0]),this.#t(!1,{x:a,y:e},i[0]))}}};var Le=class extends vt{#e;#t;#o;#r;#i;#a=!0;constructor(a,e){if(super(a,e),this.#e=a,this.#t=e.callback,this.#o=e.skipInitial??!1,this.#r=e.config,!!1){if(!window.ResizeObserver){console.warn("ResizeController error: the browser does not support ResizeObserver.");return}this.#i=new ResizeObserver((i,n)=>{this.#t(i,n),this.#e.requestUpdate()})}}async hostUpdated(){this.#i&&!this.#o&&this.#a&&this.#t([],this.#i),this.#a=!1}_observe(a){this.#i?.observe(a,this.#r),this.#a=!0,this.#e.requestUpdate()}_unobserve(a){this.#i?.unobserve(a)}};function Ft(o){let a=Symbol("_id");return(e,i,n)=>{let l=n.value;return n.value=function(...h){let u=this;clearTimeout(u[a]),u[a]=setTimeout(()=>l.apply(this,h),o)},n}}var sr=class extends vt{#e;#t;#o=a=>this.#a(a);#r=new Map;constructor(a,e){super(a,e),this.#e=e.debounce===!0,this.#t=e.callback}getScrollContainers(a){return this.#r.get(a)}_observe(a){let e=this.#i(a);if(e.length>0){this.#r.set(a,e);for(let i of e)(i===document.documentElement?document:i).addEventListener("scroll",this.#o,{passive:!0})}}_unobserve(a){if(this.#r.has(a)){for(let e of this.#r.get(a))(e===document.documentElement?document:e).removeEventListener("scroll",this.#o);this.#r.delete(a)}}#i(a){let e=new Array,i=a;for(;i;){let n=getComputedStyle(i);/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&e.push(i),i=i.parentElement}return e}#a(a){let e=a.target===document?document.documentElement:a.target;this.#e?this._debounceCallback(e):this.#t(e)}_debounceCallback(a){this.#t(a)}};d([Ft(40)],sr.prototype,"_debounceCallback",1);var gn=class{#e=!1;#t=0;#o=0;#r="";#i="";constructor(a){a.addController(this)}#a(){return document.documentElement.scrollHeight>document.documentElement.clientHeight}lock(){this.#e||(this.#e=!0,this.#t=window.scrollY,this.#o=window.scrollX,this.#r=document.documentElement.style.overflow,this.#i=document.documentElement.style.scrollbarGutter,this.#a()&&(document.documentElement.style.scrollbarGutter="stable"),document.documentElement.style.overflow="hidden",window.scrollTo(this.#o,this.#t))}unlock(){this.#e&&(this.#e=!1,document.documentElement.style.overflow=this.#r,document.documentElement.style.scrollbarGutter=this.#i,window.scrollTo(this.#o,this.#t))}hostDisconnected(){this.unlock()}};var qv={fromAttribute(o){return o?o.split(/\s+/).map(a=>a.trim()).filter(Boolean):[]},toAttribute(o){return o.join(" ")}};var yn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xn=o=>(...a)=>({_$litDirective$:o,values:a}),Bi=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,e,i){this._$Ct=a,this._$AM=e,this._$Ci=i}_$AS(a,e){return this.update(a,e)}update(a,e){return this.render(...e)}};var Wv="important",Uv=" !"+Wv,O1=0-Uv.length,Pu=class extends Bi{constructor(a){if(super(a),a.type!==yn.ATTRIBUTE||a.name!=="style"||a.strings?.length>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(a){return R}update(a,[e]){let{style:i}=a.element;this._previousStyleProperties===void 0&&(this._previousStyleProperties=new Set(Object.keys(e)));for(let n of this._previousStyleProperties)e[n]==null&&(this._previousStyleProperties.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(let n in e){let l=e[n];if(l!=null){this._previousStyleProperties.add(n);let h=typeof l=="string"&&l.endsWith(Uv);n.includes("-")||h?i.setProperty(n,h?l.slice(0,O1):l,h?Wv:""):i[n]=l}}return Mo}},Wh=xn(Pu);function he(o,...a){return typeof o=="object"&&o!==null&&a.every(e=>e in o)}var Ge=Symbol("internals");function Cn(o){return he(o,Ge)}var Hu=Symbol("_internals");function D(o,a){class e extends o{static{this.formAssociated=a}get[(Hu,Ge)](){return this[Hu]??(this[Hu]=this.attachInternals())}}return e}function bt(o,a){return o[Ge].states.has(a)}function Mt(o,a){o[Ge].states.add(a)}function xe(o,a){return!!1&&o[Ge].states.delete(a)}function le(o,a,e){e?Mt(o,a):xe(o,a)}function lr(o){return he(o,"checked")}function po(o){class a extends o{constructor(){super(...arguments);this.checked=!1}update(n){super.update(n),n.has("checked")&&(this.role==="button"?(this.ariaPressed=`${this.checked}`,this.ariaChecked=null):this.role&&this.role!=="none"&&this.role!=="presentation"&&(this.ariaChecked=`${this.checked}`,this.ariaPressed=null))}}return d([p({type:Boolean,reflect:!0})],a.prototype,"checked",2),a}function Ru(o){return he(o,"indeterminate")&&lr(o)}function Uh(o){class a extends po(o){constructor(){super(...arguments);this.indeterminate=!1}update(n){super.update(n),n.has("indeterminate")&&this.role&&this.role!=="none"&&this.role!=="presentation"&&(this.ariaChecked=!this.checked&&this.indeterminate?"mixed":`${this.checked}`)}}return d([p({type:Boolean,reflect:!0})],a.prototype,"indeterminate",2),a}function tl(o){return he(o,"selected")}function Vt(o){class a extends o{constructor(){super(...arguments);this.selected=!1}update(n){super.update(n),n.has("selected")&&(this.role==="button"?(this.ariaPressed=`${this.selected}`,this.ariaSelected=null,this.ariaChecked=null):this.role==="radio"?(this.ariaChecked=`${this.selected}`,this.ariaSelected=null,this.ariaPressed=null):this.role&&this.role!=="none"&&this.role!=="presentation"&&(this.ariaSelected=`${this.selected}`,this.ariaPressed=null,this.ariaChecked=null))}}return d([p({type:Boolean,reflect:!0})],a.prototype,"selected",2),a}function q4(o){return lr(o)||tl(o)}function Ni(o){return lr(o)&&o.checked||tl(o)&&o.selected}function ol(o,a){lr(o)?o.checked=a:o.selected=a}function Gv(o){return he(o,"dirty","pristine","markAsDirty","markAsPristine")}var Au=Symbol("_eventHandler");function Oe(o){var e,i;class a extends(i=o,e=Au,i){constructor(){super(...arguments);this[e]=()=>this.markAsDirty()}get dirty(){return this.classList.contains("-dirty")}get pristine(){return!this.dirty}connectedCallback(){this.markAsPristine(),super.connectedCallback(),this.addEventListener("change",this[Au])}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this[Au])}markAsPristine(){this.classList.toggle("-dirty",!1)}markAsDirty(){this.classList.toggle("-dirty",!0)}}return a}function $n(o){return he(o,"touched","untouched","markAsTouched","markAsUntouched")}var _u=Symbol("_eventHandler");function De(o){var e,i;class a extends(i=o,e=_u,i){constructor(){super(...arguments);this[e]=()=>this.markAsTouched()}get touched(){return bt(this,"-touched")}get untouched(){return!this.touched}connectedCallback(){this.markAsUntouched(),super.connectedCallback(),this.addEventListener("focusout",this[_u],{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusout",this[_u],{capture:!0})}markAsTouched(){Mt(this,"-touched")}markAsUntouched(){xe(this,"-touched")}}return a}var Sn={primary:r("var(--md-sys-color-primary, #6750A4)"),onPrimary:r("var(--md-sys-color-on-primary, #FFFFFF)"),primaryContainer:r("var(--md-sys-color-primary-container, #EADDFF)"),onPrimaryContainer:r("var(--md-sys-color-on-primary-container, #4F378B)"),primaryFixed:r("var(--md-sys-color-primary-fixed, #EADDFF)"),primaryFixedDim:r("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"),onPrimaryFixed:r("var(--md-sys-color-on-primary-fixed, #21005D)"),onPrimaryFixedVariant:r("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"),secondary:r("var(--md-sys-color-secondary, #625B71)"),onSecondary:r("var(--md-sys-color-on-secondary, #FFFFFF)"),secondaryContainer:r("var(--md-sys-color-secondary-container, #E8DEF8)"),onSecondaryContainer:r("var(--md-sys-color-on-secondary-container, #4A4458)"),secondaryFixed:r("var(--md-sys-color-secondary-fixed, #E8DEF8)"),secondaryFixedDim:r("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"),onSecondaryFixed:r("var(--md-sys-color-on-secondary-fixed, #1D192B)"),onSecondaryFixedVariant:r("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"),tertiary:r("var(--md-sys-color-tertiary, #7D5260)"),onTertiary:r("var(--md-sys-color-on-tertiary, #FFFFFF)"),tertiaryContainer:r("var(--md-sys-color-tertiary-container, #FFD8E4)"),onTertiaryContainer:r("var(--md-sys-color-on-tertiary-container, #633B48)"),tertiaryFixed:r("var(--md-sys-color-tertiary-fixed, #FFD8E4)"),tertiaryFixedDim:r("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"),onTertiaryFixed:r("var(--md-sys-color-on-tertiary-fixed, #31111D)"),onTertiaryFixedVariant:r("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"),error:r("var(--md-sys-color-error, #B3261E)"),onError:r("var(--md-sys-color-on-error, #FFFFFF)"),errorContainer:r("var(--md-sys-color-error-container, #F9DEDC)"),onErrorContainer:r("var(--md-sys-color-on-error-container, #8C1D18)"),surface:r("var(--md-sys-color-surface, #FEF7FF)"),onSurface:r("var(--md-sys-color-on-surface, #1D1B20)"),onSurfaceVariant:r("var(--md-sys-color-on-surface-variant, #49454F)"),surfaceContainerLowest:r("var(--md-sys-color-surface-container-lowest, #FFFFFF)"),surfaceContainerLow:r("var(--md-sys-color-surface-container-low, #F7F2FA)"),surfaceContainer:r("var(--md-sys-color-surface-container, #F3EDF7)"),surfaceContainerHigh:r("var(--md-sys-color-surface-container-high, #ECE6F0)"),surfaceContainerHighest:r("var(--md-sys-color-surface-container-highest, #E6E0E9)"),surfaceDim:r("var(--md-sys-color-surface-dim, #DED8E1)"),surfaceBright:r("var(--md-sys-color-surface-bright, #FEF7FF)"),surfaceVariant:r("var(--md-sys-color-surface-variant, #E7E0EC)"),inverseSurface:r("var(--md-sys-color-inverse-surface, #322F35)"),inverseOnSurface:r("var(--md-sys-color-inverse-on-surface, #F5EFF7)"),inversePrimary:r("var(--md-sys-color-inverse-primary, #D0BCFF)"),outline:r("var(--md-sys-color-outline, #79747E)"),outlineVariant:r("var(--md-sys-color-outline-variant, #CAC4D0)"),shadow:r("var(--md-sys-color-shadow, #000000)"),scrim:r("var(--md-sys-color-scrim, #000000)")};var Iu={scale:r("var(--md-sys-density-scale, 0)"),size:r("var(--md-sys-density-size, 0.25rem)")},jv={...Iu,calc(o){return r(`calc(max(${o}, ${Iu.scale}) * ${Iu.size})`)}};var D1=`color-mix(in srgb, var(--m3e-elevation-color, ${Sn.shadow}) 20%, transparent)`,F1=["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],V1=`color-mix(in srgb, var(--m3e-elevation-color, ${Sn.shadow}) 14%, transparent)`,B1=["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],N1=`color-mix(in srgb, var(--m3e-elevation-color, ${Sn.shadow}) 12%, transparent)`,q1=["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"];function kn(o){return`${D1} ${F1[o]},${V1} ${B1[o]},${N1} ${q1[o]}`}var Kv={level0:r(`var(--md-sys-elevation-level0, ${kn(0)})`),level1:r(`var(--md-sys-elevation-level1, ${kn(1)})`),level2:r(`var(--md-sys-elevation-level2, ${kn(3)})`),level3:r(`var(--md-sys-elevation-level3, ${kn(6)})`),level4:r(`var(--md-sys-elevation-level4, ${kn(8)})`),level5:r(`var(--md-sys-elevation-level5, ${kn(12)})`)};var W1={emphasized:r("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"),emphasizedDecelerate:r("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"),emphasizedAccelerate:r("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"),standard:r("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"),standardDecelerate:r("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"),standardAccelerate:r("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))")},U1={fastSpatial:r("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"),defaultSpatial:r("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"),slowSpatial:r("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"),fastEffects:r("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"),defaultEffects:r("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"),slowEffects:r("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))")},G1={short1:r("var(--md-sys-motion-duration-short-1, 50ms)"),short2:r("var(--md-sys-motion-duration-short-2, 100ms)"),short3:r("var(--md-sys-motion-duration-short-3, 150ms)"),short4:r("var(--md-sys-motion-duration-short-4, 200ms)"),medium1:r("var(--md-sys-motion-duration-medium-1, 250ms)"),medium2:r("var(--md-sys-motion-duration-medium-2, 300ms)"),medium3:r("var(--md-sys-motion-duration-medium-3, 350ms)"),medium4:r("var(--md-sys-motion-duration-medium-4, 400ms)"),long1:r("var(--md-sys-motion-duration-long-1, 450ms)"),long2:r("var(--md-sys-motion-duration-long-2, 500ms)"),long3:r("var(--md-sys-motion-duration-long-3, 550ms)"),long4:r("var(--md-sys-motion-duration-long-4, 600ms)"),extraLong1:r("var(--md-sys-motion-duration-extra-long-1, 700ms)"),extraLong2:r("var(--md-sys-motion-duration-extra-long-2, 800ms)"),extraLong3:r("var(--md-sys-motion-duration-extra-long-3, 900ms)"),extraLong4:r("var(--md-sys-motion-duration-extra-long-4, 1000ms)")},Zv={easing:W1,duration:G1,spring:U1};var Xv={width:r("var(--m3e-scrollbar-width, auto)"),thinWidth:r("var(--m3e-scrollbar-thin-width, thin)"),color:r("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)")};var F={none:r("var(--md-sys-shape-corner-value-none, 0)"),extraSmall:r("var(--md-sys-shape-corner-value-extra-small, 0.25rem)"),small:r("var(--md-sys-shape-corner-value-small, 0.5rem)"),medium:r("var(--md-sys-shape-corner-value-medium, 0.75rem)"),large:r("var(--md-sys-shape-corner-value-large, 1rem)"),largeIncreased:r("var(--md-sys-shape-corner-value-large-increased, 1.25rem)"),extraLarge:r("var(--md-sys-shape-corner-value-extra-large, 1.75rem)"),extraLargeIncreased:r("var(--md-sys-shape-corner-value-extra-large-increased, 2rem)"),extraExtraLarge:r("var(--md-sys-shape-corner-value-extra-extra-large, 3rem)")},Yv={corner:{full:r("var(--md-sys-shape-corner-full, 624.9375rem)"),extraLargeTop:r(`var(--md-sys-shape-corner-extra-large-top, ${F.extraLarge} ${F.extraLarge} ${F.none} ${F.none})`),extraLarge:r(`var(--md-sys-shape-corner-extra-large, ${F.extraLarge})`),extraLargeEnd:r(`${F.none} ${F.extraLarge} ${F.extraLarge} ${F.none}`),extraLargeStart:r(`${F.extraLarge} ${F.none} ${F.none} ${F.extraLarge}`),largeTop:r(`var(--md-sys-shape-corner-large-top, ${F.large} ${F.large} ${F.none} ${F.none})`),largeEnd:r(`var(--md-sys-shape-corner-large-end, ${F.none} ${F.large} ${F.large} ${F.none})`),largeStart:r(`var(--md-sys-shape-corner-large-end, ${F.large} ${F.none} ${F.none} ${F.large})`),large:r(`var(--md-sys-shape-corner-large, ${F.large})`),medium:r(`var(--md-sys-shape-corner-medium, ${F.medium})`),mediumTop:r(`${F.medium} ${F.medium} ${F.none} ${F.none}`),mediumEnd:r(`${F.none} ${F.medium} ${F.medium} ${F.none}`),mediumStart:r(`${F.medium} ${F.none} ${F.none} ${F.medium}`),small:r(`var(--md-sys-shape-corner-small, ${F.small})`),smallTop:r(`${F.small} ${F.small} ${F.none} ${F.none}`),smallEnd:r(`${F.none} ${F.small} ${F.small} ${F.none}`),smallStart:r(`${F.small} ${F.none} ${F.none} ${F.small}`),extraSmallTop:r(`var(--md-sys-shape-corner-extra-small-top, ${F.extraSmall} ${F.extraSmall} ${F.none} ${F.none})`),extraSmall:r(`var(--md-sys-shape-corner-extra-small, ${F.extraSmall})`),extraSmallEnd:r(`${F.none} ${F.extraSmall} ${F.extraSmall} ${F.none}`),extraSmallStart:r(`${F.extraSmall} ${F.none} ${F.none} ${F.extraSmall}`),extraSmallBottom:r(`${F.none} ${F.none} ${F.extraSmall} ${F.extraSmall}`),none:r(`var(--md-sys-shape-corner-none, ${F.none})`),largeIncreased:r(`var(--md-sys-shape-corner-large-increased, ${F.largeIncreased})`),extraLargeIncreased:r(`var(--md-sys-shape-corner-extra-large-increased, ${F.extraLargeIncreased})`),extraExtraLarge:r(`var(--md-sys-shape-corner-extra-extra-large, ${F.extraExtraLarge})`),value:F}};var Jv={focusStateLayerOpacity:r("var(--md-sys-state-focus-state-layer-opacity, 10%)"),hoverStateLayerOpacity:r("var(--md-sys-state-hover-state-layer-opacity, 8%)"),pressedStateLayerOpacity:r("var(--md-sys-state-pressed-state-layer-opacity, 10%)")};var Qv={standard:{display:{large:{fontSize:r("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"),fontWeight:r("var(--md-sys-typescale-display-large-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-display-large-line-height, 4rem)"),tracking:r("var(--md-sys-typescale-display-large-tracking, 0.015625rem)")},medium:{fontSize:r("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"),fontWeight:r("var(--md-sys-typescale-display-medium-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"),tracking:r("var(--md-sys-typescale-display-medium-tracking, 0)")},small:{fontSize:r("var(--md-sys-typescale-display-small-font-size, 2.25rem)"),fontWeight:r("var(--md-sys-typescale-display-small-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-display-small-line-height, 2.75rem)"),tracking:r("var(--md-sys-typescale-display-small-tracking, 0)")}},headline:{large:{fontSize:r("var(--md-sys-typescale-headline-large-font-size, 2rem)"),fontWeight:r("var(--md-sys-typescale-headline-large-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"),tracking:r("var(--md-sys-typescale-headline-large-tracking, 0)")},medium:{fontSize:r("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"),fontWeight:r("var(--md-sys-typescale-headline-medium-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"),tracking:r("var(--md-sys-typescale-headline-medium-tracking, 0)")},small:{fontSize:r("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"),fontWeight:r("var(--md-sys-typescale-headline-small-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-headline-small-line-height, 2rem)"),tracking:r("var(--md-sys-typescale-headline-small-tracking, 0)")}},title:{large:{fontSize:r("var(--md-sys-typescale-title-large-font-size, 1.375rem)"),fontWeight:r("var(--md-sys-typescale-title-large-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-title-large-line-height, 1.75rem)"),tracking:r("var(--md-sys-typescale-title-large-tracking, 0)")},medium:{fontSize:r("var(--md-sys-typescale-title-medium-font-size, 1rem)"),fontWeight:r("var(--md-sys-typescale-title-medium-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"),tracking:r("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)")},small:{fontSize:r("var(--md-sys-typescale-title-small-font-size, 0.875rem)"),fontWeight:r("var(--md-sys-typescale-title-small-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-title-small-line-height, 1.25rem)"),tracking:r("var(--md-sys-typescale-title-small-tracking, 0.00625rem)")}},body:{large:{fontSize:r("var(--md-sys-typescale-body-large-font-size, 1rem)"),fontWeight:r("var(--md-sys-typescale-body-large-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-body-large-line-height, 1.5rem)"),tracking:r("var(--md-sys-typescale-body-large-tracking, 0.03125rem)")},medium:{fontSize:r("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"),fontWeight:r("var(--md-sys-typescale-body-medium-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"),tracking:r("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)")},small:{fontSize:r("var(--md-sys-typescale-body-small-font-size, 0.75rem)"),fontWeight:r("var(--md-sys-typescale-body-small-font-weight, 400)"),lineHeight:r("var(--md-sys-typescale-body-small-line-height, 1rem)"),tracking:r("var(--md-sys-typescale-body-small-tracking, 0.025rem)")}},label:{large:{fontSize:r("var(--md-sys-typescale-label-large-font-size, 0.875rem)"),fontWeight:r("var(--md-sys-typescale-label-large-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-label-large-line-height, 1.25rem)"),tracking:r("var(--md-sys-typescale-label-large-tracking, 0.00625rem)")},medium:{fontSize:r("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"),fontWeight:r("var(--md-sys-typescale-label-medium-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-label-medium-line-height, 1rem)"),tracking:r("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)")},small:{fontSize:r("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"),fontWeight:r("var(--md-sys-typescale-label-small-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-label-small-line-height, 1rem)"),tracking:r("var(--md-sys-typescale-label-small-tracking, 0.03125rem)")}}},emphasized:{display:{large:{fontSize:r("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"),tracking:r("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)")},medium:{fontSize:r("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"),tracking:r("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)")},small:{fontSize:r("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"),tracking:r("var(--md-sys-typescale-emphasized-display-small-tracking, 0)")}},headline:{large:{fontSize:r("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"),tracking:r("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)")},medium:{fontSize:r("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"),tracking:r("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)")},small:{fontSize:r("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"),tracking:r("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)")}},title:{large:{fontSize:r("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"),tracking:r("var(--md-sys-typescale-emphasized-title-large-tracking, 0)")},medium:{fontSize:r("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"),lineHeight:r("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"),tracking:r("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)")},small:{fontSize:r("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"),lineHeight:r("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"),tracking:r("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)")}},body:{large:{fontSize:r("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"),tracking:r("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)")},medium:{fontSize:r("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"),tracking:r("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)")},small:{fontSize:r("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"),lineHeight:r("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"),tracking:r("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)")}},label:{large:{fontSize:r("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"),lineHeight:r("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"),tracking:r("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)")},medium:{fontSize:r("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"),lineHeight:r("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"),tracking:r("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)")},small:{fontSize:r("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"),fontWeight:r("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"),lineHeight:r("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"),tracking:r("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)")}}}};var t={color:Sn,elevation:Kv,motion:Zv,shape:Yv,state:Jv,typescale:Qv,scrollbar:Xv,density:jv};function Pt(o){return he(o,"disabled")}function N(o,a=!0){class e extends o{constructor(){super(...arguments);this.disabled=!1}update(l){super.update(l),l.has("disabled")&&this.role&&this.role!=="none"&&this.role!=="presentation"&&(this.ariaDisabled=this.disabled?"true":null)}}return d([p({type:Boolean,reflect:a})],e.prototype,"disabled",2),e}function Uo(o){return he(o,"disabledInteractive")&&Pt(o)}var ef=["click","dblclick","auxclick","keydown","keyup"],j1=["Tab","ArrowLeft","ArrowUp","ArrowRight","ArrowDown","Left","Up","Right","Down"],zu=Symbol("_suppressedEventHandler");function gt(o){var e,i;class a extends(i=o,e=zu,i){constructor(){super(...arguments);this[e]=h=>{if(this.disabledInteractive){if(h instanceof KeyboardEvent&&j1.includes(h.key))return;h.stopImmediatePropagation(),h.preventDefault()}};this.disabledInteractive=!1}connectedCallback(){ef.forEach(h=>this.addEventListener(h,this[zu],!0)),super.connectedCallback()}disconnectedCallback(){ef.forEach(h=>this.removeEventListener(h,this[zu],!0)),super.disconnectedCallback()}update(h){super.update(h),(h.has("disabled")||h.has("disabledInteractive"))&&this.role&&this.role!=="none"&&this.role!=="presentation"&&this.role!=="none"&&(this.ariaDisabled=this.disabled||this.disabledInteractive?"true":null)}}return d([p({attribute:"disabled-interactive",type:Boolean,reflect:!0})],a.prototype,"disabledInteractive",2),a}var Ta=Symbol("updateLabels");function Gh(o){return he(o,"labels")&&Cn(o)}var rl=Symbol("_eventHandler");function Bt(o){var e;class a extends o{constructor(){super(...arguments);this[e]=l=>{l.defaultPrevented||this[Ta]()}}static{this.formAssociated=!0}get labels(){return this[Ge].labels}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this[rl]),this.addEventListener("change",this[rl])}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusout",this[rl]),this.removeEventListener("change",this[rl])}update(l){super.update(l),this[Ta]()}[(e=rl,Ta)](){let l=this.hasAttribute("tabindex"),h=Pt(this)&&this.disabled||Uo(this)&&this.disabledInteractive,u=$n(this)&&this.touched&&(this.ariaInvalid||bt(this,"-invalid"));for(let v of this.labels??[])v.style.userSelect=l?"none":"",v.style.cursor=!h&&l?"pointer":"",!h&&l?v.style.setProperty("-webkit-tap-highlight-color","rgba(0, 0, 0, 0)"):v.style.removeProperty("-webkit-tap-highlight-color"),v.style.color=h?`color-mix(in srgb, ${t.color.onSurface} 38%, transparent)`:u?`${t.color.error}`:""}}return a}var tt=Symbol("formValue"),tf=Symbol("defaultValue");function of(o){return he(o,"disabled","form","name")&&Gh(o)&&Cn(o)}var il=Symbol("_defaultValue"),Ou=Symbol("_defaultIndeterminate"),Du=Symbol("_formDisabled");function ot(o){var e,i;class a extends o{constructor(){super(...arguments);this[i]=!1;this[e]=!1}static{this.formAssociated=!0}get form(){return this[Ge].form}get labels(){return this[Ge].labels}get[(il,i=Ou,e=Du,tt)](){return null}get[tf](){return this[il]}get name(){return this.getAttribute("name")??""}set name(h){h?this.setAttribute("name",h):this.removeAttribute("name")}get disabled(){return super.disabled||this[Du]}set disabled(h){super.disabled=h}connectedCallback(){super.connectedCallback(),lr(this)?(this[il]=this.checked,Ru(this)&&(this[Ou]=this.indeterminate)):"value"in this&&(this[il]=this.value)}requestUpdate(h,u,v){super.requestUpdate(h,u,v),this[Ge].setFormValue(this[tt])}formDisabledCallback(h){let u=this.disabled;this[Du]=h,this.disabled!=u&&this.requestUpdate("disabled",u)}formResetCallback(){lr(this)?(this.checked=this[il]===!0,Ru(this)&&(this.indeterminate=this[Ou])):"value"in this&&(this.value=this[tf]),Gv(this)&&this.markAsPristine(),$n(this)&&this.markAsUntouched()}}return d([p({noAccessor:!0})],a.prototype,"name",1),d([p({type:Boolean})],a.prototype,"disabled",1),a}var nl=Symbol("validate");function rf(o){return he(o,"willValidate","validity","validationMessage","reportValidity","checkValidity","setCustomValidity")&&of(o)}var qi=Symbol("_updateValidity"),al=Symbol("_validityMessage");function Ir(o){class a extends o{get willValidate(){return this[Ge].willValidate}get validity(){return this[qi](),this[Ge].validity}get validationMessage(){return this[qi](),this[Ge].validationMessage}[(al,nl)](){return this[al]?{customError:!0}:void 0}reportValidity(){return $n(this)&&this.markAsTouched(),this[qi](),this[Ge].reportValidity()}checkValidity(){return this[qi](),this[Ge].checkValidity()}setCustomValidity(i){i?this[al]=i:this[al]=void 0,this[qi]()}requestUpdate(i,n,l){super.requestUpdate(i,n,l),this[qi]()}firstUpdated(i){super.firstUpdated(i),this[qi]()}[qi](){if(!this.isConnected)return;let i=this[nl](),n=i&&Object.keys(i).some(h=>i[h]===!0),l=i?.customError?this[al]:"";i&&!l&&(l=this.#e(i)),this[Ge].setValidity(i,l),this.ariaInvalid=n?"true":null,le(this,"-invalid",n===!0),Gh(this)&&this[Ta]?.()}#e(i){let n=document.createElement("input");return n.type="text",i.valueMissing&&(n.required=!0,n.value=""),i.typeMismatch&&(n.type="email",n.value="not-an-email"),i.patternMismatch&&(n.pattern="[0-9]{4}",n.value="abcd"),i.tooShort&&(n.minLength=5,n.value="abc"),i.tooLong&&(n.maxLength=2,n.value="abcdef"),i.rangeUnderflow&&(n.type="number",n.min="10",n.value="5"),i.rangeOverflow&&(n.type="number",n.max="5",n.value="10"),i.stepMismatch&&(n.type="number",n.step="2",n.value="3"),i.badInput&&(n.type="number",n.value="abc"),n.setCustomValidity(""),n.checkValidity(),n.validationMessage}}return a}function vo(o,...a){class e extends o{dispatchEvent(n){if(a.includes(n.type)){let l=this.getAttribute(`on${n.type}`);l&&new Function("e",`${l};`).call(this,n)}return super.dispatchEvent(n)}}return e}var sl=Symbol("_tabindex");function ae(o){var e,i;class a extends(i=o,e=sl,i){constructor(){super(...arguments);this[e]=0}connectedCallback(){this[sl]=Number.parseInt(this.getAttribute("tabindex")??"0"),super.connectedCallback()}firstUpdated(h){super.firstUpdated(h),!this.hasAttribute("tabindex")&&!h.has("disabled")&&this.setAttribute("tabindex",`${this[sl]}`)}update(h){if(super.update(h),h.has("disabled"))if(!this.disabled&&this.role!=="none")this.hasAttribute("tabindex")||this.setAttribute("tabindex",`${this[sl]}`);else{let u=this.getAttribute("tabindex");u&&(this[sl]=Number.parseInt(u)),this.removeAttribute("tabindex")}}}return a}function C7(o){return he(o,"name","type","value")&&Cn(o)}var Fu=Symbol("_clickHandler");function Go(o){var e,i;class a extends(i=o,e=Fu,i){constructor(){super(...arguments);this.type="button";this[e]=async h=>{if(h.defaultPrevented||Pt(this)&&this.disabled||Uo(this)&&this.disabledInteractive)return;let u=this[Ge].form;if(!(!u||this.type==="button")&&(await new Promise(v=>setTimeout(v)),!h.defaultPrevented))switch(this.type){case"reset":u.reset();break;case"submit":u.addEventListener("submit",v=>Object.defineProperty(v,"submitter",{configurable:!0,enumerable:!0,get:()=>this}),{capture:!0,once:!0}),this[Ge].setFormValue(this.value),u.requestSubmit();break}}}static{this.formAssociated=!0}get name(){return this.getAttribute("name")??""}set name(h){h?this.setAttribute("name",h):this.removeAttribute("name")}get value(){return this.getAttribute("value")}set value(h){h!=null?this.setAttribute("value",h):this.removeAttribute("value")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this[Fu])}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this[Fu])}}return d([p()],a.prototype,"name",1),d([p()],a.prototype,"value",1),d([p()],a.prototype,"type",2),a}function E7(o){return he(o,"htmlFor","control","attach","detach")}var Ma=Symbol("_control"),Vu=Symbol("_firstUpdated");function ce(o){var e,i;class a extends(i=o,Ma,e=Vu,i){constructor(){super(...arguments);this[e]=!1;this.htmlFor=null}get control(){return this[Ma]?.deref()??null}connectedCallback(){super.connectedCallback();let h=this[Ma]?.deref();h&&this.attach(h)}disconnectedCallback(){super.disconnectedCallback();let h=this[Ma];h&&(this.detach(),this[Ma]=h)}firstUpdated(h){super.firstUpdated(h),this[Vu]=!0}update(h){if(super.update(h),h.has("htmlFor"))if(this.htmlFor){let u=this.getRootNode();u&&Nv(this.htmlFor,u).then(v=>{v!==this.control&&(this.control&&this.detach(),v instanceof HTMLElement&&this.attach(v))})}else this.control&&this[Vu]&&this.detach()}attach(h){this[Ma]=new WeakRef(h)}detach(){this[Ma]=void 0}}return d([p({attribute:"for"})],a.prototype,"htmlFor",2),a}function de(o,a=!0){class e extends o{#e=!1;#t=n=>this.#i(n);#o=n=>this.#a(n);#r=()=>this.#e=!1;connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.#t),this.addEventListener("keyup",this.#o),this.addEventListener("focusout",this.#r)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.#t),this.removeEventListener("keyup",this.#o),this.removeEventListener("focusout",this.#r)}#i(n){if(n.target!==n.currentTarget||Pt(this)&&this.disabled||Uo(this)&&this.disabledInteractive){this.#e=!1;return}(n.key===" "||a&&n.key==="Enter")&&(this.#e=!0)}#a(n){if(n.target!==n.currentTarget||Pt(this)&&this.disabled||Uo(this)&&this.disabledInteractive||!this.#e){this.#e=!1;return}this.#e=!1,this.dispatchEvent(new MouseEvent("click",{cancelable:!0,bubbles:!0,composed:!0}))}}return e}var $e=o=>o??R;var st=Symbol("renderPseudoLink");function jh(o){return he(o,"download","href","rel","target")}var Bu=Symbol("_clickHandler");function Fe(o){var e;class a extends o{constructor(){super(...arguments);this[e]=async l=>{if(Uo(this)&&this.disabledInteractive&&(l.preventDefault(),l.stopPropagation()),await new Promise(h=>h()),!l.defaultPrevented&&this.href){l.preventDefault(),l.stopImmediatePropagation();let h=document.createElement("a");h.href=this.href,h.rel=this.rel,h.target=this.target,this.download!=null&&(h.download=this.download),h.addEventListener("click",async()=>{await new Promise(u=>u()),h.remove()}),document.body.appendChild(h),h.click()}};this.href="";this.target="";this.rel=""}get download(){return this.getAttribute("download")}set download(l){let h=this.download;h!==l&&(l?this.setAttribute("download",l):this.removeAttribute("download"),this.requestUpdate("download",h))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this[Bu]),this.hasAttribute("href")&&this.role==="button"&&(this.role="link")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this[Bu])}[(e=Bu,st)](){let l=Pt(this)&&this.disabled,h=Uo(this)&&this.disabledInteractive;return!l&&!h&&this.href?f`<a
            href="${this.href}"
            target="${$e(this.target||void 0)}"
            rel="${$e(this.rel||void 0)}"
            download="${$e(this.download||void 0)}"
            tabindex="-1"
            aria-hidden="true"
            @pointerdown="${this.#e}"
            @focus="${this.#t}"
            @blur="${this.#o}"
          ></a>`:R}#e(l){l.button!==2?(l.preventDefault(),l.stopImmediatePropagation(),this.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))):l.target.removeAttribute("aria-hidden")}#t(l){l.target.blur(),this.focus()}#o(l){l.target.setAttribute("aria-hidden","true")}}return d([p()],a.prototype,"href",2),d([p()],a.prototype,"target",2),d([p()],a.prototype,"rel",2),d([p({reflect:!1})],a.prototype,"download",1),a}function af(o){return he(o,"readOnly")}function K7(o,a=!0){class e extends o{constructor(){super(...arguments);this.readOnly=!1}update(l){super.update(l),l.has("readOnly")&&(this.ariaReadOnly=this.readOnly?"true":null)}}return d([p({attribute:"readonly",type:Boolean,reflect:a})],e.prototype,"readOnly",2),e}function nf(o){return he(o,"required","optional")}function Wi(o){class a extends o{constructor(){super(...arguments);this.required=!1}get optional(){return!this.required}update(n){super.update(n),n.has("required")&&(this.ariaRequired=`${this.required}`)}}return d([p({type:Boolean,reflect:!0})],a.prototype,"required",2),a}function n$(o){return nf(o)&&rf(o)}function Ui(o){class a extends o{[nl](){let i=super[nl]();if(!i&&this.required){if(lr(this)&&!this.checked)return{valueMissing:!0};if(!this.value)return{valueMissing:!0}}return i}}return a}function M(o,a){class e extends o{connectedCallback(){this.role=this.role||a,super.connectedCallback()}}return e}function h$(o){return he(o,"vertical")}function Kh(o){class a extends o{constructor(){super(...arguments);this.vertical=!1}update(n){super.update(n),n.has("vertical")&&(this.ariaOrientation=this.vertical?"vertical":"horizontal")}}return d([p({type:Boolean,reflect:!0})],a.prototype,"vertical",2),a}var Ve=class extends k{static{this.styles=b`
    :host {
      display: contents;
    }
    ::slotted(.material-icons) {
      font-size: inherit !important;
    }
  `}#e=a=>{a.defaultPrevented||this._onClick(a)};connectedCallback(){super.connectedCallback(),this.parentElement?.addEventListener("click",this.#e)}disconnectedCallback(){super.disconnectedCallback(),this.parentElement?.removeEventListener("click",this.#e)}render(){return f`<slot></slot>`}};var Ln,En,Ht,sf,ll,cl,Nu,wn=class extends vo(D(k),"opening","opened","closing","closed"){constructor(){super(...arguments);m(this,Ht);m(this,Ln,!1);m(this,En,!1);this.open=!1}update(e){if(super.update(e),Mt(this,"-no-animate"),!s(this,Ln)){this.open&&(g(this,En,!0),c(this,Ht,ll).call(this)),g(this,Ln,!0);return}this.toggleAttribute("inert",!this.open),this.open?(g(this,En,!0),Me()||(c(this,Ht,ll).call(this),le(this,"-overflows",this.clientHeight<this.scrollHeight),c(this,Ht,cl).call(this)),xe(this,"-closing"),Mt(this,"-opening"),this.dispatchEvent(new Event("opening")),c(this,Ht,cl).call(this),xe(this,"-no-animate"),c(this,Ht,Nu).call(this),Me()?(c(this,Ht,ll).call(this),xe(this,"-opening"),this.dispatchEvent(new Event("opened"))):this.addEventListener("transitionend",()=>{this.open&&(c(this,Ht,ll).call(this),xe(this,"-opening"),this.dispatchEvent(new Event("opened")))},{once:!0})):(xe(this,"-opening"),Mt(this,"-closing"),this.dispatchEvent(new Event("closing")),c(this,Ht,Nu).call(this),s(this,En)&&xe(this,"-no-animate"),Me()?(c(this,Ht,cl).call(this),xe(this,"-closing"),this.dispatchEvent(new Event("closed"))):requestAnimationFrame(()=>{c(this,Ht,cl).call(this),this.addEventListener("transitionend",()=>{this.open||(xe(this,"-closing"),this.dispatchEvent(new Event("closed")))},{once:!0})}))}render(){return f`<slot @slotchange="${c(this,Ht,sf)}"></slot>`}};Ln=new WeakMap,En=new WeakMap,Ht=new WeakSet,sf=function(){g(this,Ln,!0)},ll=function(){this.style.height="auto"},cl=function(){this.style.height=""},Nu=function(){this.style.height=`${this.scrollHeight}px`},wn.styles=b`
    :host {
      display: block;
      height: 0px;
      overflow: hidden;
      transition: ${r(`visibility var(--m3e-collapsible-animation-duration, ${t.motion.duration.medium1})
          ${t.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${t.motion.duration.medium1})
          ${t.motion.easing.standard},
        padding-top var(--m3e-collapsible-animation-duration, ${t.motion.duration.medium1})
          ${t.motion.easing.standard},
        padding-bottom var(--m3e-collapsible-animation-duration, ${t.motion.duration.medium1})
          ${t.motion.easing.standard}`)};
    }
    :host(:not(:state(-closing)):not([open])) {
      visibility: hidden;
    }
    :host(:not([open])) {
      min-height: unset !important;
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }
    :host(:state(-no-animate)) {
      transition-duration: 0ms;
    }
    :host(:state(-opening)),
    :host(:state(-closing)) {
      overflow-y: hidden !important;
    }
    :host(:state(-overflows)) {
      scrollbar-gutter: stable;
    }
    ::slotted(*) {
      --m3e-collapsible-animation-duration: initial;
    }
    @media (prefers-reduced-motion) {
      :host {
        transition: none;
      }
    }
  `,d([p({type:Boolean,reflect:!0})],wn.prototype,"open",2),wn=d([y("m3e-collapsible")],wn);var jo={liftDuration:r(`var(--m3e-elevation-lift-duration, ${t.motion.duration.short4})`),liftEasing:r(`var(--m3e-elevation-lift-easing, ${t.motion.easing.standard})`),settleDuration:r(`var(--m3e-elevation-settle-duration, ${t.motion.duration.short3})`),settleEasing:r(`var(--m3e-elevation-settle-easing, ${t.motion.easing.standardAccelerate})`),level:r(`var(--m3e-elevation-level, ${t.elevation.level0})`),hoverLevel:r(`var(--m3e-elevation-hover-level, ${t.elevation.level0})`),focusLevel:r(`var(--m3e-elevation-focus-level, ${t.elevation.level0})`),pressedLevel:r(`var(--m3e-elevation-pressed-level, ${t.elevation.level0})`)};var dl,hl,ml,ji,lf,cf,df,Gi=class extends ce(M(k,"none")){constructor(){super(...arguments);m(this,ji);m(this,dl,new et(this,{target:null,callback:e=>c(this,ji,lf).call(this,e)}));m(this,hl,new ze(this,{target:null,callback:e=>c(this,ji,cf).call(this,e)}));m(this,ml,new ue(this,{target:null,callback:e=>c(this,ji,df).call(this,e)}));this.disabled=!1;this.level=null}attach(e){super.attach(e),s(this,dl).observe(e),s(this,hl).observe(e),s(this,ml).observe(e)}detach(){this.control&&(s(this,dl).unobserve(this.control),s(this,hl).unobserve(this.control),s(this,ml).unobserve(this.control)),super.detach()}connectedCallback(){this.ariaHidden="true",super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._shadow?.classList.toggle("hover",!1),this._shadow?.classList.toggle("focus",!1),this._shadow?.classList.toggle("pressed",!1),this._shadow?.classList.toggle("resting",!1)}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&(this._shadow?.classList.toggle("hover",!1),this._shadow?.classList.toggle("focus",!1),this._shadow?.classList.toggle("pressed",!1),this._shadow?.classList.toggle("resting",!0))}render(){return f`<div class="shadow"></div>`}};dl=new WeakMap,hl=new WeakMap,ml=new WeakMap,ji=new WeakSet,lf=function(e){this.disabled||(this._shadow?.classList.toggle("hover",e),this._shadow?.classList.toggle("resting",!e))},cf=function(e){this.disabled||this._shadow?.classList.toggle("focus",e)},df=function(e){this.disabled||this._shadow?.classList.toggle("pressed",e)},Gi.styles=b`
    :host {
      display: block;
    }
    :host,
    .shadow {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      border-radius: inherit;
    }
    .shadow.resting,
    .shadow.focus,
    .shadow.pressed {
      will-change: box-shadow;
      transition: ${r(`box-shadow ${jo.settleDuration} ${jo.settleEasing};`)};
    }
    .shadow.hover {
      will-change: box-shadow;
      transition: ${r(`box-shadow ${jo.liftDuration} ${jo.liftEasing};`)};
    }
    .shadow {
      box-shadow: ${jo.level};
    }
    .shadow.focus {
      box-shadow: ${jo.focusLevel};
    }
    .shadow.hover {
      box-shadow: ${jo.hoverLevel};
    }
    .shadow.pressed {
      box-shadow: ${jo.pressedLevel};
    }
    :host([level="0"]) .shadow {
      --m3e-elevation-level: ${t.elevation.level0};
      --m3e-elevation-hover-level: ${t.elevation.level1};
    }
    :host([level="1"]) .shadow {
      --m3e-elevation-level: ${t.elevation.level1};
      --m3e-elevation-hover-level: ${t.elevation.level2};
    }
    :host([level="2"]) .shadow {
      --m3e-elevation-level: ${t.elevation.level2};
      --m3e-elevation-hover-level: ${t.elevation.level3};
    }
    :host([level="3"]) .shadow {
      --m3e-elevation-level: ${t.elevation.level3};
      --m3e-elevation-hover-level: ${t.elevation.level4};
    }
    :host([level="4"]) .shadow {
      --m3e-elevation-level: ${t.elevation.level4};
      --m3e-elevation-hover-level: ${t.elevation.level5};
    }
    :host([level="5"]) .shadow {
      --m3e-elevation-level: ${t.elevation.level5};
      --m3e-elevation-hover-level: ${jo.level};
    }
    :host([level]) .shadow {
      --m3e-elevation-focus-level: ${jo.level};
      --m3e-elevation-pressed-level: ${jo.level};
    }
    @media (prefers-reduced-motion) {
      .shadow.resting,
      .shadow.pressed,
      .shadow.focus,
      .shadow.hover {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .shadow {
        display: none;
      }
    }
  `,d([L(".shadow")],Gi.prototype,"_shadow",2),d([p({type:Boolean,reflect:!0})],Gi.prototype,"disabled",2),d([p({type:Number,reflect:!0})],Gi.prototype,"level",2),Gi=d([y("m3e-elevation")],Gi);var Pe={color:r(`var(--m3e-focus-ring-color, ${t.color.secondary})`),duration:r(`var(--m3e-focus-ring-duration, ${t.motion.duration.long2})`),thickness:r("var(--m3e-focus-ring-thickness, 3px)"),outwardOffset:r("var(--m3e-focus-ring-outward-offset, 2px)"),inwardOffset:r("var(--m3e-focus-ring-inward-offset, 0px)"),visibility:r("var(--m3e-focus-ring-visibility, visible)"),growthFactor:r("var(--m3e-focus-ring-growth-factor, 2)")};var ul,Zh,hf,Ki=class extends ce(M(k,"none")){constructor(){super(...arguments);m(this,Zh);m(this,ul,new ze(this,{target:null,callback:(e,i)=>c(this,Zh,hf).call(this,i)}));this.inward=!1;this.disabled=!1}show(){this._outline?.classList.toggle("visible",!0)}hide(){this._outline?.classList.toggle("visible",!1)}attach(e){super.attach(e),s(this,ul).observe(e)}detach(){this.control&&s(this,ul).unobserve(this.control),super.detach()}connectedCallback(){this.ariaHidden="true",super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.hide()}render(){return f`<div class="outline"></div>`}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&this.hide()}};ul=new WeakMap,Zh=new WeakSet,hf=function(e){this.disabled||(e?this.show():this.hide())},Ki.styles=b`
    :host {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      border-radius: inherit;
      outline: none;
    }
    .outline {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      border-radius: inherit;
      z-index: 1;
      outline-color: ${Pe.color};
      outline-width: ${Pe.thickness};
      visibility: ${Pe.visibility};
    }
    .outline.visible {
      outline-style: solid;
    }
    :host(:not([inward])) .outline {
      outline-offset: ${Pe.outwardOffset};
    }
    :host([inward]) .outline {
      outline-offset: calc(${Pe.inwardOffset} - ${Pe.thickness});
    }
    :host(:not([inward])) .outline.visible {
      animation: grow-shrink ${Pe.duration};
    }
    :host([inward]) .outline.visible {
      animation: shrink-grow ${Pe.duration};
    }
    @keyframes grow-shrink {
      50% {
        outline-width: calc(${Pe.thickness} * ${Pe.growthFactor});
      }
    }
    @keyframes shrink-grow {
      50% {
        outline-offset: calc(
          ${Pe.inwardOffset} - calc(${Pe.thickness} * ${Pe.growthFactor})
        );
        outline-width: calc(${Pe.thickness} * ${Pe.growthFactor});
      }
    }
    @media (prefers-reduced-motion) {
      :host(:not([inward])) .outline.visible,
      :host([inward]) .outline.visible {
        animation: none;
      }
    }
    @media (forced-colors: active) {
      .outline {
        outline-color: Highlight;
      }
    }
  `,d([L(".outline")],Ki.prototype,"_outline",2),d([p({type:Boolean,reflect:!0})],Ki.prototype,"inward",2),d([p({type:Boolean,reflect:!0})],Ki.prototype,"disabled",2),Ki=d([y("m3e-focus-ring")],Ki);var pl=class extends Uh(N(M(k,"none"))){connectedCallback(){super.connectedCallback(),this.ariaHidden="true"}render(){return this.indeterminate?f`<svg viewBox="0 -960 960 960" fill="currentColor">
        <path Required d="M240-440v-80h480v80H240Z" />
      </svg>`:this.checked?f`<svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
      </svg>`:R}};pl.styles=b`
    :host {
      display: inline-block;
      vertical-align: middle;
      width: var(--m3e-checkbox-icon-size, 1.125rem);
      height: var(--m3e-checkbox-icon-size, 1.125rem);
      border-radius: var(--m3e-checkbox-container-shape, 2px);
      box-sizing: border-box;
      flex: none;
    }
    :host(:not([checked]):not([indeterminate])) {
      border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px);
      border-style: solid;
    }
    :host(:not([disabled])[checked]),
    :host(:not([disabled])[indeterminate]) {
      background-color: var(--m3e-checkbox-selected-container-color, ${t.color.primary});
      color: var(--m3e-checkbox-selected-icon-color, ${t.color.onPrimary});
    }
    :host(:not([disabled]):not([checked]):not([indeterminate])) {
      border-color: var(--m3e-checkbox-unselected-outline-color, ${t.color.onSurfaceVariant});
    }
    :host([disabled]:not([checked]):not([indeterminate])) {
      border-color: color-mix(
        in srgb,
        var(--m3e-checkbox-unselected-disabled-outline-color, ${t.color.onSurface})
          var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%),
        transparent
      );
    }
    :host([disabled][checked]),
    :host([disabled][indeterminate]) {
      background-color: color-mix(
        in srgb,
        var(--m3e-checkbox-selected-disabled-container-color, ${t.color.onSurface})
          var(--m3e-checkbox-selected-disabled-container-opacity, 38%),
        transparent
      );
      color: color-mix(
        in srgb,
        var(--m3e-checkbox-selected-disabled-icon-color, ${t.color.surface})
          var(--m3e-checkbox-selected-disabled-icon-opacity, 100%),
        transparent
      );
    }
  `,pl=d([y("m3e-pseudo-checkbox")],pl);var vl=class extends po(N(M(k,"none"))){connectedCallback(){super.connectedCallback(),this.ariaHidden="true"}render(){return f`<svg class="icon" viewBox="0 0 20 20">
      <mask id="cutout2">
        <rect width="100%" height="100%" fill="white"></rect>
        <circle cx="10" cy="10" r="8" fill="black"></circle>
      </mask>
      <circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle>
      <circle class="inner circle" cx="10" cy="10" r="5"></circle>
    </svg>`}};vl.styles=b`
    :host {
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      width: var(--m3e-radio-icon-size, 1.25rem);
      height: var(--m3e-radio-icon-size, 1.25rem);
      flex: none;
    }
    .circle {
      fill: currentColor;
    }
    :host(:not([checked])) .circle.inner {
      opacity: 0;
    }
    :host(:not([checked])) {
      color: var(--m3e-radio-unselected-icon-color, ${t.color.onSurfaceVariant});
    }
    :host([checked]) {
      color: var(--m3e-radio-selected-icon-color, ${t.color.primary});
    }
    :host([disabled]) {
      color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${t.color.onSurface}) 38%, transparent);
    }
  `,vl=d([y("m3e-pseudo-radio")],vl);var Zi={color:r(`var(--m3e-ripple-color, ${t.color.onSurface})`),opacity:r(`var(--m3e-ripple-opacity, ${t.state.pressedStateLayerOpacity})`),enterDuration:r(`var(--m3e-ripple-enter-duration, ${t.motion.duration.long4})`),exitDuration:r(`var(--m3e-ripple-exit-duration, ${t.motion.duration.short2})`),scaleFactor:r("var(--m3e-ripple-scale-factor, 2.5)")};var yt,fl,zr,Xh,mf,uf,li=class extends ce(M(k,"none")){constructor(){super(...arguments);m(this,zr);m(this,yt,null);m(this,fl,new ue(this,{target:null,minPressedDuration:150,isPressedKey:e=>e===" ",callback:(e,{x:i,y:n})=>c(this,zr,uf).call(this,e,i,n)}));this.disabled=!1;this.centered=!1;this.unbounded=!1;this.radius=null}get visible(){return s(this,yt)!==null}show(e,i,n=!1){c(this,zr,Xh).call(this);let l=this.getBoundingClientRect();this.centered&&(e=l.left+l.width/2,i=l.top+l.height/2);let h=this.radius;if(!h||isNaN(h)){let C=Math.max(Math.abs(e-l.left),Math.abs(e-l.right)),S=Math.max(Math.abs(i-l.top),Math.abs(i-l.bottom));h=Math.sqrt(C*C+S*S)}let u=e-l.left,v=i-l.top;g(this,yt,document.createElement("div")),s(this,yt).classList.add("ripple"),n&&s(this,yt).classList.add("persistent"),s(this,yt).style.left=`${u-h}px`,s(this,yt).style.top=`${v-h}px`,s(this,yt).style.width=`${h*2}px`,s(this,yt).style.height=`${h*2}px`,s(this,yt).addEventListener("animationend",()=>c(this,zr,mf).call(this,n),{once:!0}),s(this,yt).addEventListener("transitionend",()=>c(this,zr,Xh).call(this),{once:!0}),this.shadowRoot?.appendChild(s(this,yt))}hide(){s(this,yt)?.classList.add("exit")}attach(e){super.attach(e),s(this,fl).observe(e)}detach(){this.control&&s(this,fl).unobserve(this.control),super.detach()}connectedCallback(){this.ariaHidden="true",super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),c(this,zr,Xh).call(this)}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&this.hide()}};yt=new WeakMap,fl=new WeakMap,zr=new WeakSet,Xh=function(){s(this,yt)?.remove(),g(this,yt,null)},mf=function(e){e?s(this,yt)?.classList.add("pressed"):this.hide()},uf=function(e,i,n){this.disabled||(e?this.show(i,n,!0):this.hide())},li.styles=b`
    :host {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      border-radius: inherit;
    }
    :host(:not([unbounded])) {
      overflow: hidden;
    }
    .ripple {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      transform: scale(0);
      border-radius: ${t.shape.corner.full};
      background-color: color-mix(in srgb, ${Zi.color} ${Zi.opacity}, transparent);
      will-change: background-color, opacity;
      animation: ripple ${Zi.enterDuration} linear;
    }
    .ripple.persistent.pressed {
      transform: scale(${Zi.scaleFactor});
    }
    .ripple.exit {
      transition: opacity ${Zi.exitDuration} cubic-bezier(0, 0, 0.2, 0.1);
      opacity: 0;
    }
    @keyframes ripple {
      to {
        transform: scale(${Zi.scaleFactor});
      }
    }
    @media (prefers-reduced-motion) {
      .ripple {
        transform: scale(${Zi.scaleFactor});
        animation-duration: 90ms;
      }
      .ripple.exit {
        transition-duration: 10ms;
      }
    }
    @media (forced-colors: active) {
      .ripple {
        display: none;
      }
    }
  `,d([p({type:Boolean,reflect:!0})],li.prototype,"disabled",2),d([p({type:Boolean,reflect:!0})],li.prototype,"centered",2),d([p({type:Boolean,reflect:!0})],li.prototype,"unbounded",2),d([p({type:Number})],li.prototype,"radius",2),li=d([y("m3e-ripple")],li);var Tn,Xi=class extends D(k){constructor(){super(...arguments);m(this,Tn,()=>this._updateScroll());this.dividers="above-below";this.thin=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("scroll",s(this,Tn))}update(e){super.update(e),e.has("dividers")&&(this.removeEventListener("scroll",s(this,Tn)),this.dividers!=="none"&&this.addEventListener("scroll",s(this,Tn),{passive:!0}))}render(){return f`<slot @slotchange="${this._updateScroll}"></slot>`}_updateScroll(){let e=(this.dividers==="above"||this.dividers==="above-below")&&this.scrollTop>0,i=(this.dividers==="below"||this.dividers==="above-below")&&this.scrollHeight-this.scrollTop-this.clientHeight>1;le(this,"-above",e),le(this,"-below",i)}};Tn=new WeakMap,Xi.styles=b`
    :host {
      display: block;
      overflow-y: auto;
      position: relative;
      box-sizing: border-box;
      scrollbar-color: ${t.scrollbar.color};
      border-top: var(--m3e-divider-thickness, 1px) solid transparent;
      border-bottom: var(--m3e-divider-thickness, 1px) solid transparent;
      outline-color: ${Pe.color};
      outline-width: ${Pe.thickness};
      outline-offset: ${Pe.outwardOffset};
    }
    :host([thin]) {
      scrollbar-width: ${t.scrollbar.thinWidth};
    }
    :host(:not([thin])) {
      scrollbar-width: ${t.scrollbar.width};
    }
    :host(:not(:focus-visible):state(-above)) {
      border-top-color: var(--m3e-divider-color, ${t.color.outlineVariant});
    }
    :host(:not(:focus-visible):state(-below)) {
      border-bottom-color: var(--m3e-divider-color, ${t.color.outlineVariant});
    }
    :host(:focus-visible) {
      outline-style: solid;
      animation: grow-shrink ${Pe.duration};
    }
    @keyframes grow-shrink {
      50% {
        outline-width: calc(${Pe.thickness} * ${Pe.growthFactor});
      }
    }
    @media (forced-colors: active) {
      :host {
        border-top: var(--m3e-divider-thickness, 1px) solid Canvas;
        border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas;
      }
      :host(:not(:focus-visible):state(-above)) {
        border-top-color: GrayText;
      }
      :host(:not(:focus-visible):state(-below)) {
        border-bottom-color: GrayText;
      }
    }
    @media (prefers-reduced-motion) {
      :host(:focus-visible) {
        animation: none;
      }
    }
  `,d([p()],Xi.prototype,"dividers",2),d([p({type:Boolean,reflect:!0})],Xi.prototype,"thin",2),d([Ft(40)],Xi.prototype,"_updateScroll",1),Xi=d([y("m3e-scroll-container")],Xi);var Yi,Pa,pf,qu,Mn=class extends D(k){constructor(){super(...arguments);m(this,Pa);m(this,Yi,new Array);this.selectedIndex=null}connectedCallback(){super.connectedCallback(),Mt(this,"-no-animate")}update(e){super.update(e),e.has("selectedIndex")&&(this.selectedIndex===null&&Mt(this,"-no-animate"),c(this,Pa,qu).call(this),this.selectedIndex!==null&&bt(this,"-no-animate")&&requestAnimationFrame(()=>{this.selectedIndex!==null&&xe(this,"-no-animate")}))}render(){return f`<slot @slotchange="${c(this,Pa,pf)}"></slot>`}};Yi=new WeakMap,Pa=new WeakSet,pf=function(e){let i=[...e.target.assignedElements({flatten:!0})];for(let n of s(this,Yi).filter(l=>!i.includes(l)))n.classList.remove("-before"),n.classList.remove("-after"),n.removeAttribute("inert");g(this,Yi,i),c(this,Pa,qu).call(this)},qu=function(){let e=this.selectedIndex??s(this,Yi).length;for(let i=0;i<s(this,Yi).length;i++){let n=s(this,Yi)[i];n.classList.toggle("-before",i<e),n.classList.toggle("-after",i>e),n.toggleAttribute("inert",i!==e)}},Mn.styles=b`
    :host {
      display: flex;
      position: relative;
      overflow: hidden;
    }
    ::slotted(*) {
      width: 100%;
      top: 0;
      transition: ${r(`inset-inline-start var(--m3e-slide-animation-duration, ${t.motion.duration.long2}) ${t.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${t.motion.duration.long2}) ${t.motion.easing.standard} allow-discrete`)};
    }
    ::slotted(.-before),
    ::slotted(.-after) {
      visibility: hidden;
      position: absolute;
    }
    ::slotted(.-before) {
      inset-inline-start: -100%;
    }
    ::slotted(.-after) {
      inset-inline-start: 100%;
    }
    ::slotted(:not(.-before):not(.-after)) {
      position: relative;
      inset-inline-start: 0;
    }
    :host(:state(-no-animate)) ::slotted(*) {
      transition: none;
    }
    @media (prefers-reduced-motion) {
      ::slotted(*) {
        transition: none;
      }
    }
  `,d([p({attribute:"selected-index",type:Number,reflect:!0})],Mn.prototype,"selectedIndex",2),Mn=d([y("m3e-slide")],Mn);var Ha={hoverColor:r(`var(--m3e-state-layer-hover-color, ${t.color.onSurface})`),hoverOpacity:r(`var(--m3e-state-layer-hover-opacity, ${t.state.hoverStateLayerOpacity})`),focusColor:r(`var(--m3e-state-layer-focus-color, ${t.color.onSurface})`),focusOpacity:r(`var(--m3e-state-layer-focus-opacity, ${t.state.focusStateLayerOpacity})`),duration:r(`var(--m3e-state-layer-duration, ${t.motion.duration.medium1})`),easing:r(`var(--m3e-state-layer-easing, ${t.motion.easing.standard})`)};var bl,gl,Pn,vf,ff,Ji=class extends ce(M(k,"none")){constructor(){super(...arguments);m(this,Pn);m(this,bl,new et(this,{target:null,callback:e=>c(this,Pn,vf).call(this,e)}));m(this,gl,new ze(this,{target:null,callback:(e,i)=>c(this,Pn,ff).call(this,i)}));this.disabled=!1;this.disableHover=!1}show(e){this._layer?.classList.toggle(e,!0)}hide(e){this._layer?.classList.toggle(e,!1)}attach(e){super.attach(e),s(this,bl).observe(e),s(this,gl).observe(e)}detach(){this.control&&(s(this,bl).unobserve(this.control),s(this,gl).unobserve(this.control)),super.detach()}connectedCallback(){this.ariaHidden="true",super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.hide("hover"),this.hide("focused")}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&(this.hide("hover"),this.hide("focused")),e.has("disableHover")&&this.disableHover&&this.hide("hover")}render(){return f`<div class="layer"></div>`}};bl=new WeakMap,gl=new WeakMap,Pn=new WeakSet,vf=function(e){!this.disabled&&!this.disableHover&&(e?this.show("hover"):this.hide("hover"))},ff=function(e){this.disabled||(e?this.show("focused"):this.hide("focused"))},Ji.styles=b`
    :host {
      display: block;
    }
    :host,
    .layer {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      border-radius: inherit;
    }
    .layer {
      will-change: background-color;
      transition: ${r(`background-color ${Ha.duration} ${Ha.easing}`)};
    }
    .layer.focused {
      background-color: color-mix(in srgb, ${Ha.focusColor} ${Ha.focusOpacity}, transparent);
    }
    .layer.hover {
      background-color: color-mix(in srgb, ${Ha.hoverColor} ${Ha.hoverOpacity}, transparent);
    }
    @media (prefers-reduced-motion) {
      .layer {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .layer {
        display: none;
      }
    }
  `,d([L(".layer")],Ji.prototype,"_layer",2),d([p({type:Boolean,reflect:!0})],Ji.prototype,"disabled",2),d([p({attribute:"disable-hover",type:Boolean,reflect:!0})],Ji.prototype,"disableHover",2),Ji=d([y("m3e-state-layer")],Ji);var yl=class extends k{render(){return f`<span class="base"><slot></slot></span>`}};yl.styles=b`
    :host {
      flex: 1 1 auto;
      display: inline-flex;
      align-items: center;
      flex-wrap: nowrap;
      min-width: 0;
    }
    .base {
      flex: 1 1 auto;
      display: inline;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,yl=d([y("m3e-text-overflow")],yl);var Hn,Or,Qi,Ko,Wu,Yh,Uu,cr=class extends k{constructor(){super();m(this,Ko);m(this,Hn,`m3e-text-highlight-${cr.__nextId++}`);m(this,Or,new Array);m(this,Qi,null);this.disabled=!1;this.term="";this.caseSensitive=!1;this.isSupported&&(g(this,Qi,new CSSStyleSheet),s(this,Qi).replaceSync(b`
          ::highlight(${r(s(this,Hn))}) {
            background-color: var(--m3e-text-highlight-container-color, ${t.color.secondaryContainer});
            color: var(--m3e-text-highlight-color, ${t.color.onSecondaryContainer});
            text-decoration: var(--m3e-text-highlight-decoration);
            text-shadow: var(--m3e-text-highlight-shadow);
          }
        `.toString()))}get isSupported(){return!!(!!1&&CSS.highlights)}get ranges(){return s(this,Or)}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&s(this,Qi)&&!this.shadowRoot.adoptedStyleSheets.includes(s(this,Qi))&&this.shadowRoot.adoptedStyleSheets.push(s(this,Qi))}updated(e){super.updated(e),(e.has("term")||e.has("caseSensitive")||e.has("disabled"))&&c(this,Ko,Uu).call(this)}render(){return f`<slot @slotchange="${c(this,Ko,Uu)}"></slot>`}};Hn=new WeakMap,Or=new WeakMap,Qi=new WeakMap,Ko=new WeakSet,Wu=function(e){return!/^(\\s|\\n)+$/gi.test(e.data)},Yh=function(e,i){e instanceof HTMLSlotElement?e.assignedElements({flatten:!0}).forEach(n=>{switch(n.nodeType){case Node.TEXT_NODE:c(this,Ko,Wu).call(this,n)&&i.push(n);break;case Node.ELEMENT_NODE:c(this,Ko,Yh).call(this,n,i);break}}):e.childNodes.forEach(n=>{switch(n.nodeType){case Node.TEXT_NODE:c(this,Ko,Wu).call(this,n)&&i.push(n);break;case Node.ELEMENT_NODE:c(this,Ko,Yh).call(this,n,i);break}})},Uu=function(){if(!this.isSupported||!this.isConnected||(CSS.highlights.delete(s(this,Hn)),s(this,Or).length=0,this.disabled))return;if(!this.term){this.dispatchEvent(new CustomEvent("highlight",{detail:[...s(this,Or)],bubbles:!1,composed:!1}));return}let e=new Array;c(this,Ko,Yh).call(this,this,e);let i=this.caseSensitive?this.term:this.term.toLowerCase();g(this,Or,e.map(n=>({el:n,text:(this.caseSensitive?n.textContent:n.textContent?.toLowerCase())??""})).map(({el:n,text:l})=>{let h=new Array,u=0;for(;u<l.length;){let v=l.indexOf(i,u);if(v===-1)break;h.push(v),u=v+i.length}return h.map(v=>{let C=new Range;return C.setStart(n,v),C.setEnd(n,v+i.length),C})}).flat()),s(this,Or).length>0&&CSS.highlights.set(s(this,Hn),new Highlight(...s(this,Or))),this.dispatchEvent(new CustomEvent("highlight",{detail:[...s(this,Or)],bubbles:!1,composed:!1}))},cr.styles=b`
    :host {
      display: contents;
    }
  `,cr.__nextId=0,d([p({type:Boolean,reflect:!0})],cr.prototype,"disabled",2),d([p()],cr.prototype,"term",2),d([p({attribute:"case-sensitive",type:Boolean})],cr.prototype,"caseSensitive",2),cr=d([y("m3e-text-highlight")],cr);var He={small:{containerHeight:r("var(--m3e-app-bar-small-container-height, 4rem)"),titleTextFontSize:r(`var(--m3e-app-bar-small-title-text-font-size, ${t.typescale.standard.title.large.fontSize})`),titleTextFontWeight:r(`var(--m3e-app-bar-small-title-text-font-weight, ${t.typescale.standard.title.large.fontWeight})`),titleTextLineHeight:r(`var(--m3e-app-bar-small-title-text-line-height, ${t.typescale.standard.title.large.lineHeight})`),titleTextTracking:r(`var(--m3e-app-bar-small-subtitle-text-tracking, ${t.typescale.standard.title.large.tracking})`),subtitleTextFontSize:r(`var(--m3e-app-bar-small-subtitle-text-font-size, ${t.typescale.standard.label.medium.fontSize})`),subtitleTextFontWeight:r(`var(--m3e-app-bar-small-subtitle-text-font-weight, ${t.typescale.standard.label.medium.fontWeight})`),subtitleTextLineHeight:r(`var(--m3e-app-bar-small-subtitle-text-line-height, ${t.typescale.standard.label.medium.lineHeight})`),subtitleTextTracking:r(`var(--m3e-app-bar-small-subtitle-text-tracking, ${t.typescale.standard.label.medium.tracking})`),headingPaddingLeft:r("var(--m3e-app-bar-small-heading-padding-left, 0.25rem)"),headingPaddingRight:r("var(--m3e-app-bar-small-heading-padding-right, 0.25rem)")},medium:{containerHeight:r("var(--m3e-app-bar-medium-container-height, 7rem)"),containerHeightWithSubtitle:r("var(--m3e-app-bar-medium-container-height-with-subtitle, 8.5rem)"),titleTextFontSize:r(`var(--m3e-app-bar-medium-title-text-font-size, ${t.typescale.standard.headline.medium.fontSize})`),titleTextFontWeight:r(`var(--m3e-app-bar-medium-title-text-font-weight, ${t.typescale.standard.headline.medium.fontWeight})`),titleTextLineHeight:r(`var(--m3e-app-bar-medium-title-text-line-height, ${t.typescale.standard.headline.medium.lineHeight})`),titleTextTracking:r(`var(--m3e-app-bar-medium-subtitle-text-tracking, ${t.typescale.standard.headline.medium.tracking})`),subtitleTextFontSize:r(`var(--m3e-app-bar-medium-subtitle-text-font-size, ${t.typescale.standard.title.small.fontSize})`),subtitleTextFontWeight:r(`var(--m3e-app-bar-medium-subtitle-text-font-weight, ${t.typescale.standard.title.small.fontWeight})`),subtitleTextLineHeight:r(`var(--m3e-app-bar-medium-subtitle-text-line-height, ${t.typescale.standard.title.small.lineHeight})`),subtitleTextTracking:r(`var(--m3e-app-bar-medium-subtitle-text-tracking, ${t.typescale.standard.title.small.tracking})`),headingPaddingLeft:r("var(--m3e-app-bar-medium-heading-padding-left, 1rem)"),headingPaddingRight:r("var(--m3e-app-bar-medium-heading-padding-right, 0.25rem)"),paddingTop:r("var(--m3e-app-bar-medium-padding-top, 0.5rem)"),paddingBottom:r("var(--m3e-app-bar-medium-padding-bottom, 0.75rem)"),titleMaxLines:r("var(--m3e-app-bar-medium-title-max-lines, 2)"),subtitleMaxLines:r("var(--m3e-app-bar-medium-subtitle-max-lines, 1)")},large:{containerHeight:r("var(--m3e-app-bar-large-container-height, 7.5rem)"),containerHeightWithSubtitle:r("var(--m3e-app-bar-large-container-height-with-subtitle, 9.5rem)"),titleTextFontSize:r(`var(--m3e-app-bar-large-title-text-font-size, ${t.typescale.standard.display.small.fontSize})`),titleTextFontWeight:r(`var(--m3e-app-bar-large-title-text-font-weight, ${t.typescale.standard.display.small.fontWeight})`),titleTextLineHeight:r(`var(--m3e-app-bar-large-title-text-line-height, ${t.typescale.standard.display.small.lineHeight})`),titleTextTracking:r(`var(--m3e-app-bar-large-subtitle-text-tracking, ${t.typescale.standard.display.small.tracking})`),subtitleTextFontSize:r(`var(--m3e-app-bar-large-subtitle-text-font-size, ${t.typescale.standard.title.medium.fontSize})`),subtitleTextFontWeight:r(`var(--m3e-app-bar-large-subtitle-text-font-weight, ${t.typescale.standard.title.medium.fontWeight})`),subtitleTextLineHeight:r(`var(--m3e-app-bar-large-subtitle-text-line-height, ${t.typescale.standard.title.medium.lineHeight})`),subtitleTextTracking:r(`var(--m3e-app-bar-large-subtitle-text-tracking, ${t.typescale.standard.title.medium.tracking})`),headingPaddingLeft:r("var(--m3e-app-bar-large-heading-padding-left, 1rem)"),headingPaddingRight:r("var(--m3e-app-bar-large-heading-padding-right, 0.25rem)"),paddingTop:r("var(--m3e-app-bar-large-padding-top, 0.5rem)"),paddingBottom:r("var(--m3e-app-bar-large-padding-bottom, 0.75rem)"),titleMaxLines:r("var(--m3e-app-bar-large-title-max-lines, 2)"),subtitleMaxLines:r("var(--m3e-app-bar-large-subtitle-max-lines, 1)")}};function Gu(o){return b`
    :host([size="${r(o)}"]) .base:not(.with-subtitle) {
      min-height: ${He[o].containerHeight};
    }
    :host([size="${r(o)}"]) .base.with-subtitle {
      min-height: ${He[o].containerHeightWithSubtitle??He[o].containerHeight};
    }
    :host([size="${r(o)}"]) .title {
      font-size: ${He[o].titleTextFontSize};
      font-weight: ${He[o].titleTextFontWeight};
      line-height: ${He[o].titleTextLineHeight};
      letter-spacing: ${He[o].titleTextTracking};
    }
    :host([size="${r(o)}"]) .subtitle {
      font-size: ${He[o].subtitleTextFontSize};
      font-weight: ${He[o].subtitleTextFontWeight};
      line-height: ${He[o].subtitleTextLineHeight};
      letter-spacing: ${He[o].subtitleTextTracking};
    }
    :host(:not([centered])[size="${r(o)}"]) .label {
      padding-inline-start: ${He[o].headingPaddingLeft};
      padding-inline-end: ${He[o].headingPaddingRight};
    }
    :host([centered][size="${r(o)}"]) .label {
      padding-inline: ${He[o].headingPaddingLeft};
    }
    :host([size="${r(o)}"]) .base {
      padding-block-start: ${He[o].paddingTop??r("unset")};
      padding-block-end: ${He[o].paddingBottom??r("unset")};
    }
    ${He[o].titleMaxLines?b`
          :host([size="${r(o)}"]) .title {
            display: -webkit-box;
            -webkit-line-clamp: ${He[o].titleMaxLines};
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-clamp: ${He[o].titleMaxLines};
          }
        `:b``}
    ${He[o].subtitleMaxLines?b`
          :host([size="${r(o)}"]) .subtitle {
            display: -webkit-box;
            -webkit-line-clamp: ${He[o].subtitleMaxLines};
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-clamp: ${He[o].subtitleMaxLines};
          }
        `:b``}
  `}var bf=[Gu("small"),Gu("medium"),Gu("large")];var ci={containerColor:r(`var(--m3e-app-bar-container-color, ${t.color.surface})`),containerColorOnScroll:r(`var(--m3e-app-bar-container-color-on-scroll, ${t.color.surfaceContainer})`),containerElevation:r(`var(--m3e-app-bar-container-elevation, ${t.elevation.level0})`),containerElevationOnScroll:r(`var(--m3e-app-bar-container-elevation-on-scroll, ${t.elevation.level1})`),titleTextColor:r(`var(--m3e-app-bar-title-text-color, ${t.color.onSurface})`),subtitleTextColor:r(`var(--m3e-app-bar-subtitle-text-color, ${t.color.onSurfaceVariant})`),paddingLeft:r("var(--m3e-app-bar-padding-left, 0.25rem)"),paddingRight:r("var(--m3e-app-bar-padding-right, 0.25rem)")};var gf=b`
  :host {
    display: block;
    flex: none;
  }
  :host([size="small"]) .base,
  :host(:not([size="small"]):not([centered])) .heading {
    padding-inline-start: ${ci.paddingLeft};
    padding-inline-end: ${ci.paddingRight};
  }
  .base {
    box-sizing: border-box;
    display: flex;
    transition: ${r(`background-color ${t.motion.duration.medium1} ${t.motion.easing.standard},
      box-shadow ${t.motion.duration.medium1} ${t.motion.easing.standard}`)};
  }
  .base:not(.on-scroll) {
    background-color: ${ci.containerColor};
    box-shadow: ${ci.containerElevation};
  }
  .base.on-scroll {
    background-color: ${ci.containerColorOnScroll};
    box-shadow: ${ci.containerElevationOnScroll};
  }
  .leading-icon,
  .trailing-icon {
    display: flex;
    flex: none;
    align-items: center;
  }
  .leading-icon {
    min-width: var(--_leading-icon-min-width);
  }
  .trailing-icon {
    min-width: var(--_trailing-icon-min-width);
  }
  .heading {
    display: flex;
    align-items: center;
  }
  :host([size="small"]) .heading {
    flex: 1 1 auto;
  }
  .spacer {
    flex: 1 1 auto;
  }
  .label {
    display: flex;
    flex-direction: column;
    flex: none;
  }
  .title {
    color: ${ci.titleTextColor};
  }
  .subtitle {
    color: ${ci.subtitleTextColor};
  }
  .base:not(.with-title) .title,
  .base:not(.with-subtitle) .subtitle,
  .base:not(.with-title):not(.with-subtitle) .label,
  .base:not(.with-trailing-icon) .trailing-icon {
    display: none;
  }
  :host([size="small"]) .base {
    align-items: center;
  }
  :host([size="small"]) .heading {
    min-width: 0;
  }
  :host([size="small"]) .label {
    flex: 1 1 auto;
    min-width: 0;
  }
  :host([size="small"]) .title,
  :host([size="small"]) .subtitle {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :host(:not([size="small"])) .base {
    flex-direction: column;
  }
  :host([centered]) .title,
  :host([centered]) .subtitle {
    text-align: center;
  }
  @media (prefers-reduced-motion) {
    .base {
      transition: none;
    }
  }
  @media (forced-colors: active) {
    .base {
      transition: none;
    }
    .base:not(.on-scroll),
    .base.on-scroll {
      background-color: Canvas;
      box-shadow: unset;
    }
    .title {
      color: CanvasText;
    }
    .subtitle {
      color: FieldText;
    }
  }
`;var Ra,xl,ke,ju,Ku,Zu,Xu,Yu,Jh,Ju,Qu,dr=class extends ce(M(k,"banner")){constructor(){super(...arguments);m(this,ke);m(this,Ra,e=>this._updateScroll(e));m(this,xl,()=>c(this,ke,Ju).call(this));this.centered=!1;this.size="small"}attach(e){super.attach(e),e instanceof HTMLIFrameElement?(e.addEventListener("load",s(this,xl)),c(this,ke,Ju).call(this)):e.addEventListener("scroll",s(this,Ra),{passive:!0})}detach(){this.control instanceof HTMLIFrameElement&&(this.control.removeEventListener("load",s(this,xl)),this.control.contentDocument?.removeEventListener("scroll",s(this,Ra))),this.control&&this.control.removeEventListener("scroll",s(this,Ra)),super.detach()}updated(e){super.updated(e),(e.has("centered")||e.has("size"))&&(this.centered&&this.size==="small"?c(this,ke,Jh).call(this):c(this,ke,Yu).call(this))}render(){return this.size==="small"?f`<div class="base">
          <div class="leading-icon">
            <slot name="leading-icon" @slotchange="${c(this,ke,Zu)}"></slot>
          </div>
          <div class="heading">
            <div class="label">
              <div class="title">
                <slot name="title" @slotchange="${c(this,ke,ju)}"></slot>
              </div>
              <div class="subtitle">
                <slot name="subtitle" @slotchange="${c(this,ke,Ku)}"></slot>
              </div>
            </div>
          </div>
          <div class="trailing-icon">
            <slot name="trailing-icon" @slotchange="${c(this,ke,Xu)}"></slot>
          </div>
        </div>`:f`<div class="base">
          <div class="heading">
            <div class="leading-icon">
              <slot name="leading-icon" @slotchange="${c(this,ke,Zu)}"></slot>
            </div>
            <div class="spacer"></div>
            <div class="trailing-icon">
              <slot name="trailing-icon" @slotchange="${c(this,ke,Xu)}"></slot>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="label">
            <div class="title">
              <slot name="title" @slotchange="${c(this,ke,ju)}"></slot>
            </div>
            <div class="subtitle">
              <slot name="subtitle" @slotchange="${c(this,ke,Ku)}"></slot>
            </div>
          </div>
        </div>`}_updateScroll(e){let i=0;this.control instanceof HTMLIFrameElement?i=c(this,ke,Qu).call(this,this.control):e.target instanceof HTMLElement&&(i=e.target.scrollTop),this._base?.classList.toggle("on-scroll",i>0)}};Ra=new WeakMap,xl=new WeakMap,ke=new WeakSet,ju=function(e){this._base?.classList.toggle("with-title",J(e.target))},Ku=function(e){this._base?.classList.toggle("with-subtitle",J(e.target))},Zu=function(e){this._base?.classList.toggle("with-leading-icon",J(e.target)),this.centered&&this.size==="small"&&setTimeout(()=>c(this,ke,Jh).call(this),40)},Xu=function(e){this._base?.classList.toggle("with-trailing-icon",J(e.target)),this.centered&&this.size==="small"&&setTimeout(()=>c(this,ke,Jh).call(this),40)},Yu=function(){this._base?.style.removeProperty("--_leading-icon-min-width"),this._base?.style.removeProperty("--_trailing-icon-min-width")},Jh=function(){c(this,ke,Yu).call(this);let e=this._leadingIcon?.getBoundingClientRect().width??0,i=this._trailingIcon?.getBoundingClientRect().width??0;e<i?this._base?.style.setProperty("--_leading-icon-min-width",`${i}px`):e>i&&this._base?.style.setProperty("--_trailing-icon-min-width",`${e}px`)},Ju=function(){this.control instanceof HTMLIFrameElement&&(this.control.contentDocument?.addEventListener("scroll",s(this,Ra),{passive:!0}),this._base?.classList.toggle("on-scroll",c(this,ke,Qu).call(this,this.control)>0))},Qu=function(e){return Math.max(e.contentDocument?.documentElement?.scrollTop??0,e.contentDocument?.body?.scrollTop??0)},dr.styles=[gf,bf],d([L(".base")],dr.prototype,"_base",2),d([L(".leading-icon")],dr.prototype,"_leadingIcon",2),d([L(".trailing-icon")],dr.prototype,"_trailingIcon",2),d([p({type:Boolean,reflect:!0})],dr.prototype,"centered",2),d([p({reflect:!0})],dr.prototype,"size",2),d([Ft(40)],dr.prototype,"_updateScroll",1),dr=d([y("m3e-app-bar")],dr);var yf=["alt","shift","ctrl","meta"];function xf(o){return o.which||o.charCode||o.keyCode}function Qh(o,...a){return a.length?a.some(e=>o[`${e}Key`]):o.altKey||o.shiftKey||o.ctrlKey||o.metaKey}function em(o,...a){return yf.every(e=>!Qh(o,e)||a.includes(e))}var Rn=class{#e=new Array;#t=null;#o;get items(){return this.#e}get activeItem(){return this.#t}setItems(a){let e=this.items.filter(n=>!a.includes(n)),i=a.filter(n=>!this.items.includes(n));return this.#e=a,this.activeItem&&!this.items.includes(this.activeItem)&&this.updateActiveItem(null),{added:i,removed:e}}setActiveItem(a){this.activeItem!==a&&(this.updateActiveItem(a),this.#o?.())}updateActiveItem(a){this.#t=a??null}onActiveItemChange(a){return this.#o=a,this}};var ep=Symbol("typeaheadLabel");var tm=class{#e;#t=-1;#o;#r;#i=new Array;#a=-1;#n=[];constructor(a){this.#e=a.debounceInterval??200,this.#o=a.callback,this.#r=a.skipPredicate}get isTyping(){return this.#i.length>0}setItems(a){this.#n=a}setSelectedIndex(a){this.#a=a}reset(){this.#i.length=0}onKeyDown(a){if(a.key&&a.key.length===1)this.#s(a.key);else{let e=xf(a);(e>=65&&e<=90||e>=48&&e<=57)&&this.#s(String.fromCharCode(e))}}#s(a){this.#i.push(a.toLocaleUpperCase()),clearTimeout(this.#t),this.#t=setTimeout(()=>this.#l(),this.#e)}#l(){let a=this.#i.join("");for(let e=1;e<this.#n.length+1;e++){let i=(this.#a+e)%this.#n.length,n=this.#n[i],l=n[ep]?.().toLocaleUpperCase().trim();if(!this.#r?.(n)&&l?.indexOf(a)===0){this.#o(n);break}}this.reset()}};var Dr=class extends Rn{constructor(){super(...arguments);this.wrap=!1;this.homeAndEnd=!1;this.pageUpAndDown=!1;this.pageDelta=10;this.vertical=!1;this.allowedModifiers=[];this.skipPredicate=e=>Pt(e)&&e.disabled;this.directionality="ltr"}#e;setItems(e){return this.#e?.setItems(e),super.setItems(e)}updateActiveItem(e){super.updateActiveItem(e),this.#e&&this.#e.setSelectedIndex(e?this.items.indexOf(e):-1)}withHomeAndEnd(e=!0){return this.homeAndEnd=e,this}withPageUpAndDown(e=!0,i=10){return this.pageUpAndDown=e,this.pageDelta=i,this}withWrap(e=!0){return this.wrap=e,this}withVerticalOrientation(e=!0){return this.vertical=e,this}withAllowedModifiers(...e){return this.allowedModifiers=e,this}withTypeahead(e=!0){return e?this.#e=new tm({callback:i=>this.setActiveItem(i)}):this.#e=void 0,this}withSkipPredicate(e){return this.skipPredicate=e,this}withDirectionality(e){return this.directionality=e,this}onKeyDown(e){if(e.defaultPrevented)return;let i=em(e,...this.allowedModifiers);switch(e.key){case"Left":case"ArrowLeft":if(i&&!this.vertical){e.preventDefault();let n=this.directionality==="ltr"?this.#i():this.#r();n&&this.setActiveItem(n)}break;case"Up":case"ArrowUp":if(i){e.preventDefault();let n=this.directionality==="ltr"?this.#i():this.#r();n&&this.setActiveItem(n)}break;case"Right":case"ArrowRight":if(i&&!this.vertical){e.preventDefault();let n=this.directionality==="ltr"?this.#r():this.#i();n&&this.setActiveItem(n)}break;case"Down":case"ArrowDown":if(i){e.preventDefault();let n=this.directionality==="ltr"?this.#r():this.#i();n&&this.setActiveItem(n)}break;case"Home":if(i&&this.homeAndEnd){e.preventDefault();let n=this.#t();n&&this.setActiveItem(n)}break;case"End":if(i&&this.homeAndEnd){e.preventDefault();let n=this.#o();n&&this.setActiveItem(n)}break;case"PageUp":if(i&&this.pageUpAndDown){e.preventDefault();let n=(this.directionality==="ltr"?this.#a:this.#n)(this.activeItem?Math.max(0,this.items.indexOf(this.activeItem)-this.pageDelta):0);n&&this.setActiveItem(n)}break;case"PageDown":if(i&&this.pageUpAndDown){e.preventDefault();let n=(this.directionality==="ltr"?this.#n:this.#a)(this.activeItem?Math.min(this.items.length-1,this.items.indexOf(this.activeItem)+this.pageDelta):this.items.length-1);n&&this.setActiveItem(n)}break;default:(i||Qh(e,"shift"))&&this.#e?.onKeyDown(e);break}}#t(){for(let e=0;e<this.items.length&&this.items[e]!==this.activeItem;e++){let i=this.items[e];if(!this.skipPredicate(i))return i}return null}#o(){for(let e=this.items.length-1;e>=0&&this.items[e]!==this.activeItem;e--){let i=this.items[e];if(!this.skipPredicate(i))return i}return null}#r(){for(let e=0;e<this.items.length;e++)if(this.items[e]===this.activeItem){for(let i=e+1;i<this.items.length;i++){let n=this.items[i];if(!this.skipPredicate(n))return n}break}return this.wrap?this.#t():null}#i(){for(let e=0;e<this.items.length;e++)if(this.items[e]===this.activeItem){for(let i=e-1;i>=0;i--){let n=this.items[i];if(!this.skipPredicate(n))return n}break}return this.wrap?this.#o():null}#a(e){for(let i=e;i>=0;i--){let n=this.items[i];if(!this.skipPredicate(n))return n}return null}#n(e){for(let i=e;i<this.items.length;i++){let n=this.items[i];if(!this.skipPredicate(n))return n}return null}};var om=class extends Dr{#e;setActiveItem(a){super.setActiveItem(a),a?.focus(this.#e)}withOptions(a){return this.#e=a,this}};var fo=class extends om{#e=!1;updateActiveItem(a){if(super.updateActiveItem(a),!this.#e){a?.setAttribute("tabindex","0");for(let e of this.items)e!==a&&e.hasAttribute("tabindex")&&e.setAttribute("tabindex","-1")}}setItems(a){let e=super.setItems(a);if(!this.#e)for(let i of e.added)i!==this.activeItem&&!this.skipPredicate(i)&&i.setAttribute("tabindex","-1");return e}disableRovingTabIndex(a=!0){if(a!==this.#e){this.#e=a;for(let e of this.items)this.skipPredicate(e)||e?.setAttribute("tabindex",this.#e||e===this.activeItem?"0":"-1")}return this}};var rm=class extends fo{#e=!1;get disabled(){return this.#e}set disabled(a){this.#e=a,this.items.forEach(e=>e.disabled=a)}setItems(a){this.disabled&&a.forEach(n=>n.disabled=!0);let{added:e,removed:i}=super.setItems(a);if((e.length>0||i.length>0)&&(this.activeItem||this.updateActiveItem(e.find(n=>!this.skipPredicate(n))??null),this.activeItem&&(this.activeItem.disabled||!Ni(this.activeItem)))){let n=e.find(l=>!this.skipPredicate(l)&&Ni(l));n&&this.updateActiveItem(n)}return{added:e,removed:i}}};var E=Symbol("selectionManager"),rt=class extends rm{#e;#t=new Array;#o=!1;get multi(){return this.#o}set multi(a){this.#o=a,this.#r(!0)}get selectedItems(){return this.#t}notifySelectionChange(a){this.items.includes(a)&&(Ni(a)?this.select(a):this.deselect(a))}deselect(a){if(this.items.includes(a)){Ni(a)&&ol(a,!1);let e=this.#t.indexOf(a);e>=0&&(this.#t.splice(e,1),this.#e?.())}}select(a,e=!0){if(!a||this.items.includes(a)){if(!this.multi){for(let i of this.#t)i!==a&&ol(i,!1);this.#t.length=0}a&&(this.#t.push(a),Ni(a)||ol(a,!0)),e&&this.updateActiveItem(a),this.#e?.()}}setItems(a){let{added:e,removed:i}=super.setItems(a);return this.#t=this.#t.filter(n=>!i.includes(n)),this.#t.push(...e.filter(n=>Ni(n))),this.#r(),this.#e?.(),{added:e,removed:i}}onSelectedItemsChange(a){return this.#e=a,this}#r(a=!1){if(!this.multi&&this.#t.length>1){for(let e=1;e<this.#t.length;e++)ol(this.#t[e],!1);this.#t.length=1,a&&this.#e?.()}}};function Cf(o,a){return o.getAttribute(a)?.match(/\S+/g)??[]}function je(o,a,e){e=e.trim();let i=Cf(o,a);i.some(n=>n.trim()===e)||(i.push(e),o.setAttribute(a,i.join(" ")))}function xt(o,a,e){e=e.trim();let i=Cf(o,a).filter(n=>n!==e);i.length>0?o.setAttribute(a,i.join(" ")):o.removeAttribute(a)}function im(o){o.position="absolute",o.appearance="none",o.visibility="hidden",o.border="0",o.outline="0",o.overflow="hidden",o.left="0",o.height="1px",o.width="1px",o.margin="-1px",o.padding="0",o.whiteSpace="nowrap"}var Ke=class{static#e=0;static#t=new Map;static describe(a,e,i="tooltip"){if(!1)return;let n=a.getRootNode();if(!(n instanceof ShadowRoot||n instanceof Document))return;let l=this.#t.get(n);l||(l={containerElement:this.#o(),messageRegistry:new Map},(n instanceof Document?n.body:n).appendChild(l.containerElement),this.#t.set(n,l));let h=`${i}:${e}`,u=l.messageRegistry.get(h);u||(u={messageElement:this.#r(e,i),count:0},l.containerElement.appendChild(u.messageElement),l.messageRegistry.set(h,u)),u.count++,je(a,"aria-describedby",u.messageElement.id)}static removeDescription(a,e,i="tooltip"){if(!1)return;let n=a.getRootNode(),l=this.#t.get(n);if(!l)return;let h=`${i}:${e}`,u=l.messageRegistry.get(h);u&&(u.count--,xt(a,"aria-describedby",u.messageElement.id),u.count<=0&&(u.messageElement.remove(),l.messageRegistry.delete(h)),l.messageRegistry.size==0&&(l.containerElement?.remove(),this.#t.delete(n)))}static#o(){let a=document.createElement("div");return a.classList.add("m3e-describedby-message-container"),im(a.style),a}static#r(a,e){let i=document.createElement("span");return i.id=`m3e-describedby-message-${this.#e++}`,i.role=e,i.ariaAtomic="true",i.innerText=a.trim(),i}};globalThis.M3eAriaDescriber=Ke;var Nt=class{static isFocusable(a,e){return a.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true]):not(:disabled,[disabled])")?!this.#e(e):!a.localName.includes("-")||!a.matches(":not(:disabled,[disabled])")||a.getAttribute("aria-disabled")==="true"?!1:a.shadowRoot?.delegatesFocus?!this.#e(e):!1}static#e(a){return a?.some(e=>e.matches(":is([aria-hidden='true'],:disabled,[disabled])"))??!1}static findInteractiveElements(a){let e=new Array,i=a.ownerDocument.createTreeWalker(a,NodeFilter.SHOW_ELEMENT);for(let n=i.nextNode();n;n=i.nextNode()){let l=i.currentNode;this.isFocusable(l)&&e.push(l)}return e}};globalThis.M3eInteractivityChecker=Nt;var Zt,$f,Sf,Cl,kf,wf,An=class extends N(k){constructor(){super(...arguments);m(this,Zt)}render(){let e=f`<div
      class="trap"
      .inert="${this.disabled}"
      tabindex="0"
      aria-hidden="true"
      @focus="${c(this,Zt,$f)}"
    ></div>`;return f`${e}<slot></slot>${e}`}};Zt=new WeakSet,$f=function(e){function i(S,$){return S===$||S instanceof HTMLElement&&S.shadowRoot!==null&&S.shadowRoot.contains($)}let[n,l]=c(this,Zt,Sf).call(this),h=e?.target===this._firstTrap,u=i(e.relatedTarget,n),v=i(e.relatedTarget,l),C=!u&&!v;if(!h&&v||h&&C){n?.focus();return}(h&&u||!h&&C)&&l?.focus()},Sf=function(){let e=null,i=null;return c(this,Zt,Cl).call(this,this,[],(n,l)=>{Nt.isFocusable(n,l)&&n instanceof HTMLElement&&n.tabIndex>=0&&(e=e??n,i=n)}),[e,i]},Cl=function(e,i,n){i=[...i,e];for(let l of e.childNodes){if(l.nodeType!==Node.ELEMENT_NODE)continue;let h=l;n(h,i),h.shadowRoot?c(this,Zt,kf).call(this,h,i,n):h instanceof HTMLSlotElement?c(this,Zt,wf).call(this,h,i,n):h.hasChildNodes()&&c(this,Zt,Cl).call(this,h,i,n)}},kf=function(e,i,n){for(let l of e.shadowRoot?.childNodes??[]){if(l.nodeType!==Node.ELEMENT_NODE)continue;let h=l;n(h,i),h.hasChildNodes()&&c(this,Zt,Cl).call(this,h,i,n)}},wf=function(e,i,n){for(let l of e.assignedElements())n(l,i),l.hasChildNodes()&&c(this,Zt,Cl).call(this,l,i,n)},An.styles=b`
    :host {
      display: contents;
    }
    .trap {
      outline: none;
    }
  `,d([L(".trap")],An.prototype,"_firstTrap",2),An=d([y("m3e-focus-trap")],An);var tp=class{static#e=0;static#t;static#o;static#r;static#i;static announce(a,...e){if(!1)return Promise.resolve();this.#t=this.#t??this.#a();let i,n;e.length===1&&typeof e[0]=="number"?n=e[0]:[i,n]=e,this.clear(),clearTimeout(this.#o),this.#t.setAttribute("aria-live",i??"polite");for(let l of document.querySelectorAll("m3e-dialog"))je(l,"aria-owns",this.#t.id);return this.#r=this.#r??new Promise(l=>this.#i=l),clearTimeout(this.#o),this.#o=setTimeout(()=>{this.#t&&(this.#t.textContent=a,n!==void 0&&(this.#o=setTimeout(()=>this.clear(),n)),this.#i?.(),this.#r=this.#i=void 0)},100),this.#r}static clear(){this.#t&&(this.#t.textContent="")}static#a(){let a=document.getElementsByClassName("m3e-live-announcer");for(let i=0;i<a.length;i++)a[i].remove();let e=document.createElement("div");return e.classList.add("m3e-live-announcer"),e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),e.id=`m3e-live-announcer-${this.#e++}`,im(e.style),document.body.append(e),e}};globalThis.M3eLiveAnnouncer=tp;var Sl,_n,Aa,ge,Xt,In,kl,wl,Ll,El,Tl,Ml,Pl,Hl,Rl,A,Ee,op,Lf,Fr,Ef,Tf,Mf,Pf,Hf,Rf,Af,_f,If,zf,rp,$l,Vr,ip,ap,am,np,Of,hr=class extends ce(k){constructor(){super(...arguments);m(this,A);m(this,Sl,`m3e-autocomplete-${hr.__nextId}`);m(this,_n,`${s(this,Sl)}-menu`);m(this,Aa,!1);m(this,ge);m(this,Xt);m(this,In,!1);m(this,kl,()=>c(this,A,Tf).call(this));m(this,wl,()=>c(this,A,Mf).call(this));m(this,Ll,()=>c(this,A,Pf).call(this));m(this,El,()=>c(this,A,Hf).call(this));m(this,Tl,e=>c(this,A,_f).call(this,e));m(this,Ml,e=>c(this,A,Rf).call(this,e));m(this,Pl,()=>c(this,A,Af).call(this));m(this,Hl,e=>c(this,A,zf).call(this,e));m(this,Rl,e=>c(this,A,If).call(this,e));this._listKeyManager=new Dr().withWrap().withHomeAndEnd().withPageUpAndDown().withVerticalOrientation().withSkipPredicate(e=>e.disabled||e.style.display==="none").onActiveItemChange(()=>{this._listKeyManager.activeItem&&c(this,A,ip).call(this,this._listKeyManager.activeItem)});this.hideSelectionIndicator=!1;this.required=!1;this.autoActivate=!1}get options(){return this._listKeyManager?.items??[]}attach(e){e instanceof HTMLInputElement&&(super.attach(e),e.autocomplete="off",e.role="combobox",e.ariaAutoComplete="list",e.ariaExpanded="false",e.addEventListener("click",s(this,kl)),e.addEventListener("focus",s(this,Ll)),e.addEventListener("blur",s(this,El)),e.addEventListener("keydown",s(this,Tl)),e.addEventListener("input",s(this,Ml)),e.addEventListener("change",s(this,Pl)),s(this,A,Fr)?.addEventListener("pointerdown",s(this,wl)))}detach(){this.control&&(s(this,A,Fr)?.removeEventListener("pointerdown",s(this,wl)),this.control.role=null,this.control.ariaAutoComplete=null,this.control.ariaExpanded=null,this.control.removeEventListener("click",s(this,kl)),this.control.removeEventListener("focus",s(this,Ll)),this.control.removeEventListener("blur",s(this,El)),this.control.removeEventListener("keydown",s(this,Tl)),this.control.removeEventListener("input",s(this,Ml)),this.control.removeEventListener("change",s(this,Pl))),super.detach()}clear(e=!1){s(this,A,Ee)&&(s(this,A,Ee).value="",s(this,Xt)&&(s(this,Xt).term=""),c(this,A,am).call(this),e?s(this,A,Ee).focus():c(this,A,Vr).call(this))}render(){return f`<div class="options" role="listbox">
      <slot @slotchange="${c(this,A,Ef)}"></slot>
    </div>`}};Sl=new WeakMap,_n=new WeakMap,Aa=new WeakMap,ge=new WeakMap,Xt=new WeakMap,In=new WeakMap,kl=new WeakMap,wl=new WeakMap,Ll=new WeakMap,El=new WeakMap,Tl=new WeakMap,Ml=new WeakMap,Pl=new WeakMap,Hl=new WeakMap,Rl=new WeakMap,A=new WeakSet,Ee=function(){return this.control?this.control:null},op=function(){return this.options.some(e=>e.style.display!=="none")},Lf=function(){let e=s(this,A,Fr);return`${e?e.menuAnchor.clientWidth:this.control?.clientWidth??0}px`},Fr=function(){return this.control?.closest("m3e-form-field")??null},Ef=function(){if(s(this,ge))return;let{added:e}=this._listKeyManager.setItems([...this.querySelectorAll("m3e-option")]);e.forEach(i=>{i.id=i.id||`${s(this,Sl)}-option-${this._listKeyManager.items.indexOf(i)}`,i.classList.toggle("-hide-selection-indicator",this.hideSelectionIndicator)})},Tf=function(){g(this,Aa,!0),c(this,A,$l).call(this)},Mf=function(){g(this,In,!0)},Pf=function(){g(this,Aa,!0),c(this,A,$l).call(this)},Hf=function(){s(this,In)||c(this,A,Vr).call(this),g(this,In,!1)},Rf=function(e){!s(this,A,Ee)||e.defaultPrevented||(s(this,Xt)&&(s(this,Xt).term=s(this,A,Ee).value),c(this,A,am).call(this),s(this,ge)?s(this,A,op)||c(this,A,Vr).call(this):c(this,A,$l).call(this),s(this,A,Fr)?.notifyControlStateChange(!0))},Af=function(){s(this,A,Ee)&&this.required&&!this.options.some(e=>e.selected&&!e.disabled)&&(s(this,A,Ee).value="")},_f=function(e){if(!e.defaultPrevented)switch(g(this,Aa,!1),e.key){case"Backspace":case"Delete":s(this,A,Ee)&&!s(this,A,Ee).value&&c(this,A,Vr).call(this);break;case"Enter":s(this,ge)&&this._listKeyManager.activeItem?(e.preventDefault(),c(this,A,ap).call(this,this._listKeyManager.activeItem),c(this,A,Vr).call(this)):s(this,ge)&&setTimeout(()=>{s(this,A,Ee)&&!s(this,A,Ee).value&&c(this,A,Vr).call(this)});break;case"Escape":case"Tab":c(this,A,Vr).call(this);break;case"Up":case"ArrowUp":e.altKey?c(this,A,Vr).call(this):this._listKeyManager.onKeyDown(e);break;case"Down":case"ArrowDown":s(this,ge)?this._listKeyManager.onKeyDown(e):(c(this,A,$l).call(this),e.preventDefault());break;default:this._listKeyManager.onKeyDown(e);break}},If=function(e){if(e.button===2)return;e.preventDefault(),e.stopImmediatePropagation();let i=e.composedPath().find(n=>n instanceof HTMLElement&&n.tagName==="M3E-OPTION");i&&!i.disabled&&(this._listKeyManager.setActiveItem(i),c(this,A,ap).call(this,i),c(this,A,Vr).call(this))},zf=function(e){if(s(this,ge))if(e.newState!=="closed"){let i=this.options.find(n=>n.selected&&!n.disabled);i?(this._listKeyManager.setActiveItem(i),Wo(i,s(this,ge))):c(this,A,np).call(this),this.dispatchEvent(new ToggleEvent("toggle",{oldState:e.oldState,newState:e.newState}))}else Me()?c(this,A,rp).call(this,e):setTimeout(()=>c(this,A,rp).call(this,e),100)},rp=function(e){!s(this,ge)||!s(this,Xt)||([...s(this,Xt).childNodes].forEach(i=>this.append(i)),s(this,Xt).remove(),s(this,ge).remove(),s(this,ge).removeEventListener("toggle",s(this,Hl)),s(this,ge).removeEventListener("pointerdown",s(this,Rl)),g(this,ge,void 0),g(this,Xt,void 0),this.ariaExpanded="false",this.removeAttribute("aria-controls"),this.removeAttribute("aria-owns"),this.requestUpdate(),s(this,A,Fr)?.notifyControlStateChange(),this.dispatchEvent(new ToggleEvent("toggle",{oldState:e.oldState,newState:e.newState})))},$l=function(){if(!(s(this,ge)||!s(this,A,Ee)||s(this,A,Ee).readOnly||s(this,A,Ee).disabled||!s(this,A,op))){c(this,A,am).call(this),g(this,ge,document.createElement("m3e-option-panel")),s(this,ge).id=s(this,_n),s(this,ge).style.overflowX="hidden",s(this,ge).style.minWidth=s(this,A,Lf),s(this,ge).addEventListener("toggle",s(this,Hl)),s(this,ge).addEventListener("pointerdown",s(this,Rl)),g(this,Xt,document.createElement("m3e-text-highlight")),s(this,Xt).term=s(this,A,Ee).value,s(this,ge).appendChild(s(this,Xt));for(let e of[...this.childNodes])s(this,Xt).append(e);(s(this,A,Fr)??s(this,A,Ee)).insertAdjacentElement("afterend",s(this,ge)),this.ariaExpanded="true",this.setAttribute("aria-controls",s(this,_n)),this.setAttribute("aria-owns",s(this,_n)),s(this,A,Fr)?.notifyControlStateChange(),this._listKeyManager.activeItem&&this.autoActivate&&c(this,A,ip).call(this,this._listKeyManager.activeItem,!0),setTimeout(()=>s(this,ge)?.show(this,s(this,A,Fr)?.menuAnchor))}},Vr=function(){s(this,ge)?.hide(),s(this,A,Ee)?.removeAttribute("aria-activedescendant")},ip=function(e,i=!1){if(s(this,A,Ee)&&(s(this,A,Ee).setAttribute("aria-activedescendant",e.id),s(this,ge))){Wo(e,s(this,ge),{block:"nearest",behavior:"instant"});let n=i||!s(this,Aa)&&(s(this,A,Ee).matches(":focus-visible")||bn());this.options.forEach(l=>{l===e&&n?(l.focusRing?.show(),l.stateLayer?.show("focused")):(l.focusRing?.hide(),l.stateLayer?.hide("focused"))})}},ap=function(e){e.selected||(e.selected=!0,e.requestUpdate(),this.requestUpdate(),s(this,A,Ee)&&(s(this,A,Ee).value=e.value),s(this,A,Fr)?.notifyControlStateChange(!0))},am=function(){if(!s(this,A,Ee))return;let e=s(this,A,Ee).value.toLocaleLowerCase(),i=!1,n;for(let h of this.options){let u=h.value.toLocaleLowerCase(),v=!u.includes(e);h.style.display=v?"none":"",v?(c(this,A,Of).call(this,h),h.classList.remove("-first"),h.classList.remove("-last")):i?(n?.classList.remove("-last"),h.classList.add("-last"),n=h):(h.classList.add("-first"),i=!0,h.classList.add("-last"),n=h),h.selected&&u!==e&&(h.selected=!1)}let l=s(this,ge)?.querySelectorAll("m3e-optgroup")??this.querySelectorAll("m3e-optgroup");for(let h of l){let u=[...h.querySelectorAll("m3e-option")].every(v=>v.style.display==="none");h.style.display=u?"none":""}c(this,A,np).call(this)},np=function(){if(this.autoActivate&&(!this._listKeyManager.activeItem||!this._listKeyManager.activeItem.selected)){let e=this.options.find(i=>!i.disabled&&i.style.display!=="none");e&&(this._listKeyManager.setActiveItem(e),s(this,ge)&&Wo(e,s(this,ge),{block:"nearest",behavior:"instant"}))}},Of=function(e){e.focusRing?.hide(),e.stateLayer?.hide("focused"),e===this._listKeyManager.activeItem&&(this._listKeyManager.updateActiveItem(null),s(this,A,Ee)?.removeAttribute("aria-activedescendant"))},hr.styles=b`
    :host {
      display: contents;
    }
    .options {
      display: none;
    }
  `,hr.__nextId=0,d([p({attribute:"hide-selection-indicator",type:Boolean})],hr.prototype,"hideSelectionIndicator",2),d([p({type:Boolean,reflect:!0})],hr.prototype,"required",2),d([p({attribute:"auto-activate",type:Boolean})],hr.prototype,"autoActivate",2),hr=d([y("m3e-autocomplete")],hr);var Al=class extends k{render(){return f`<div class="base"><slot></slot></div>`}};Al.styles=b`
    :host {
      display: inline-block;
      vertical-align: middle;
      aspect-ratio: 1 / 1;
      width: var(--m3e-avatar-size, 2.5rem);
    }
    .base {
      user-select: none;
      white-space: nowrap;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: var(--m3e-avatar-shape, ${t.shape.corner.full});
      font-size: var(--m3e-avatar-font-size, ${t.typescale.standard.title.medium.fontSize});
      font-weight: var(--m3e-avatar-font-weight, ${t.typescale.standard.title.medium.fontWeight});
      line-height: var(--m3e-avatar-line-height, ${t.typescale.standard.title.medium.lineHeight});
      letter-spacing: var(--m3e-avatar-tracking, ${t.typescale.standard.title.medium.tracking});
      background-color: var(--m3e-avatar-color, ${t.color.primaryContainer});
      color: var(--m3e-avatar-label-color, ${t.color.onPrimaryContainer});
    }
    ::slotted(img) {
      display: block;
      margin: 0 auto;
      overflow: hidden;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `,Al=d([y("m3e-avatar")],Al);var K1=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,O=class{static#e="ltr";static#t=Array();static{if(!!1){if(this.#o(),MutationObserver){let a={attributeFilter:["dir"]},e=new MutationObserver(()=>this.#r());document.body&&e.observe(document.body,a),document.documentElement&&e.observe(document.documentElement,a)}window.addEventListener("languagechange",()=>this.#r())}}static get current(){return this.#e}static observe(a){return this.#t.push(a),()=>{this.#t.splice(this.#t.indexOf(a),1)}}static#o(){let a=(document?.body?.dir||document?.documentElement?.dir)?.toLowerCase()||"auto";this.#e=a==="auto"&&!!1&&navigator?.language?K1.test(navigator.language)?"rtl":"ltr":a==="rtl"?"rtl":"ltr"}static#r(){this.#o(),this.#t.forEach(a=>a())}};globalThis.M3eDirectionality=O;var di=Math.min,Zo=Math.max,Il=Math.round,zl=Math.floor,mr=o=>({x:o,y:o}),Z1={left:"right",right:"left",bottom:"top",top:"bottom"},X1={start:"end",end:"start"};function sp(o,a,e){return Zo(o,di(a,e))}function zn(o,a){return typeof o=="function"?o(a):o}function Br(o){return o.split("-")[0]}function Ol(o){return o.split("-")[1]}function lp(o){return o==="x"?"y":"x"}function cp(o){return o==="y"?"height":"width"}var Y1=new Set(["top","bottom"]);function Nr(o){return Y1.has(Br(o))?"y":"x"}function dp(o){return lp(Nr(o))}function Vf(o,a,e){e===void 0&&(e=!1);let i=Ol(o),n=dp(o),l=cp(n),h=n==="x"?i===(e?"end":"start")?"right":"left":i==="start"?"bottom":"top";return a.reference[l]>a.floating[l]&&(h=_l(h)),[h,_l(h)]}function Bf(o){let a=_l(o);return[nm(o),a,nm(a)]}function nm(o){return o.replace(/start|end/g,a=>X1[a])}var Df=["left","right"],Ff=["right","left"],J1=["top","bottom"],Q1=["bottom","top"];function e2(o,a,e){switch(o){case"top":case"bottom":return e?a?Ff:Df:a?Df:Ff;case"left":case"right":return a?J1:Q1;default:return[]}}function Nf(o,a,e,i){let n=Ol(o),l=e2(Br(o),e==="start",i);return n&&(l=l.map(h=>h+"-"+n),a&&(l=l.concat(l.map(nm)))),l}function _l(o){return o.replace(/left|right|bottom|top/g,a=>Z1[a])}function t2(o){return{top:0,right:0,bottom:0,left:0,...o}}function hp(o){return typeof o!="number"?t2(o):{top:o,right:o,bottom:o,left:o}}function hi(o){let{x:a,y:e,width:i,height:n}=o;return{width:i,height:n,top:e,left:a,right:a+i,bottom:e+n,x:a,y:e}}function qf(o,a,e){let{reference:i,floating:n}=o,l=Nr(a),h=dp(a),u=cp(h),v=Br(a),C=l==="y",S=i.x+i.width/2-n.width/2,$=i.y+i.height/2-n.height/2,T=i[u]/2-n[u]/2,w;switch(v){case"top":w={x:S,y:i.y-n.height};break;case"bottom":w={x:S,y:i.y+i.height};break;case"right":w={x:i.x+i.width,y:$};break;case"left":w={x:i.x-n.width,y:$};break;default:w={x:i.x,y:i.y}}switch(Ol(a)){case"start":w[h]-=T*(e&&C?-1:1);break;case"end":w[h]+=T*(e&&C?-1:1);break}return w}var Wf=async(o,a,e)=>{let{placement:i="bottom",strategy:n="absolute",middleware:l=[],platform:h}=e,u=l.filter(Boolean),v=await(h.isRTL==null?void 0:h.isRTL(a)),C=await h.getElementRects({reference:o,floating:a,strategy:n}),{x:S,y:$}=qf(C,i,v),T=i,w={},P=0;for(let _=0;_<u.length;_++){let{name:z,fn:V}=u[_],{x:q,y:B,data:te,reset:U}=await V({x:S,y:$,initialPlacement:i,placement:T,strategy:n,middlewareData:w,rects:C,platform:h,elements:{reference:o,floating:a}});S=q??S,$=B??$,w={...w,[z]:{...w[z],...te}},U&&P<=50&&(P++,typeof U=="object"&&(U.placement&&(T=U.placement),U.rects&&(C=U.rects===!0?await h.getElementRects({reference:o,floating:a,strategy:n}):U.rects),{x:S,y:$}=qf(C,T,v)),_=-1)}return{x:S,y:$,placement:T,strategy:n,middlewareData:w}};async function mp(o,a){var e;a===void 0&&(a={});let{x:i,y:n,platform:l,rects:h,elements:u,strategy:v}=o,{boundary:C="clippingAncestors",rootBoundary:S="viewport",elementContext:$="floating",altBoundary:T=!1,padding:w=0}=zn(a,o),P=hp(w),z=u[T?$==="floating"?"reference":"floating":$],V=hi(await l.getClippingRect({element:(e=await(l.isElement==null?void 0:l.isElement(z)))==null||e?z:z.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(u.floating)),boundary:C,rootBoundary:S,strategy:v})),q=$==="floating"?{x:i,y:n,width:h.floating.width,height:h.floating.height}:h.reference,B=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u.floating)),te=await(l.isElement==null?void 0:l.isElement(B))?await(l.getScale==null?void 0:l.getScale(B))||{x:1,y:1}:{x:1,y:1},U=hi(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:q,offsetParent:B,strategy:v}):q);return{top:(V.top-U.top+P.top)/te.y,bottom:(U.bottom-V.bottom+P.bottom)/te.y,left:(V.left-U.left+P.left)/te.x,right:(U.right-V.right+P.right)/te.x}}var Uf=function(o){return o===void 0&&(o={}),{name:"flip",options:o,async fn(a){var e,i;let{placement:n,middlewareData:l,rects:h,initialPlacement:u,platform:v,elements:C}=a,{mainAxis:S=!0,crossAxis:$=!0,fallbackPlacements:T,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:_=!0,...z}=zn(o,a);if((e=l.arrow)!=null&&e.alignmentOffset)return{};let V=Br(n),q=Nr(u),B=Br(u)===u,te=await(v.isRTL==null?void 0:v.isRTL(C.floating)),U=T||(B||!_?[_l(u)]:Bf(u)),ye=P!=="none";!T&&ye&&U.push(...Nf(u,_,P,te));let re=[u,...U],we=await mp(a,z),Te=[],oe=((i=l.flip)==null?void 0:i.overflows)||[];if(S&&Te.push(we[V]),$){let Ie=Vf(n,h,te);Te.push(we[Ie[0]],we[Ie[1]])}if(oe=[...oe,{placement:n,overflows:Te}],!Te.every(Ie=>Ie<=0)){var Dt,uo;let Ie=(((Dt=l.flip)==null?void 0:Dt.index)||0)+1,No=re[Ie];if(No&&(!($==="alignment"?q!==Nr(No):!1)||oe.every(pt=>Nr(pt.placement)===q?pt.overflows[0]>0:!0)))return{data:{index:Ie,overflows:oe},reset:{placement:No}};let To=(uo=oe.filter(ut=>ut.overflows[0]<=0).sort((ut,pt)=>ut.overflows[1]-pt.overflows[1])[0])==null?void 0:uo.placement;if(!To)switch(w){case"bestFit":{var Tt;let ut=(Tt=oe.filter(pt=>{if(ye){let qo=Nr(pt.placement);return qo===q||qo==="y"}return!0}).map(pt=>[pt.placement,pt.overflows.filter(qo=>qo>0).reduce((qo,Us)=>qo+Us,0)]).sort((pt,qo)=>pt[1]-qo[1])[0])==null?void 0:Tt[0];ut&&(To=ut);break}case"initialPlacement":To=u;break}if(n!==To)return{reset:{placement:To}}}return{}}}};function Gf(o){let a=di(...o.map(l=>l.left)),e=di(...o.map(l=>l.top)),i=Zo(...o.map(l=>l.right)),n=Zo(...o.map(l=>l.bottom));return{x:a,y:e,width:i-a,height:n-e}}function o2(o){let a=o.slice().sort((n,l)=>n.y-l.y),e=[],i=null;for(let n=0;n<a.length;n++){let l=a[n];!i||l.y-i.y>i.height/2?e.push([l]):e[e.length-1].push(l),i=l}return e.map(n=>hi(Gf(n)))}var jf=function(o){return o===void 0&&(o={}),{name:"inline",options:o,async fn(a){let{placement:e,elements:i,rects:n,platform:l,strategy:h}=a,{padding:u=2,x:v,y:C}=zn(o,a),S=Array.from(await(l.getClientRects==null?void 0:l.getClientRects(i.reference))||[]),$=o2(S),T=hi(Gf(S)),w=hp(u);function P(){if($.length===2&&$[0].left>$[1].right&&v!=null&&C!=null)return $.find(z=>v>z.left-w.left&&v<z.right+w.right&&C>z.top-w.top&&C<z.bottom+w.bottom)||T;if($.length>=2){if(Nr(e)==="y"){let oe=$[0],Dt=$[$.length-1],uo=Br(e)==="top",Tt=oe.top,Ie=Dt.bottom,No=uo?oe.left:Dt.left,To=uo?oe.right:Dt.right,ut=To-No,pt=Ie-Tt;return{top:Tt,bottom:Ie,left:No,right:To,width:ut,height:pt,x:No,y:Tt}}let z=Br(e)==="left",V=Zo(...$.map(oe=>oe.right)),q=di(...$.map(oe=>oe.left)),B=$.filter(oe=>z?oe.left===q:oe.right===V),te=B[0].top,U=B[B.length-1].bottom,ye=q,re=V,we=re-ye,Te=U-te;return{top:te,bottom:U,left:ye,right:re,width:we,height:Te,x:ye,y:te}}return T}let _=await l.getElementRects({reference:{getBoundingClientRect:P},floating:i.floating,strategy:h});return n.reference.x!==_.reference.x||n.reference.y!==_.reference.y||n.reference.width!==_.reference.width||n.reference.height!==_.reference.height?{reset:{rects:_}}:{}}}},r2=new Set(["left","top"]);async function i2(o,a){let{placement:e,platform:i,elements:n}=o,l=await(i.isRTL==null?void 0:i.isRTL(n.floating)),h=Br(e),u=Ol(e),v=Nr(e)==="y",C=r2.has(h)?-1:1,S=l&&v?-1:1,$=zn(a,o),{mainAxis:T,crossAxis:w,alignmentAxis:P}=typeof $=="number"?{mainAxis:$,crossAxis:0,alignmentAxis:null}:{mainAxis:$.mainAxis||0,crossAxis:$.crossAxis||0,alignmentAxis:$.alignmentAxis};return u&&typeof P=="number"&&(w=u==="end"?P*-1:P),v?{x:w*S,y:T*C}:{x:T*C,y:w*S}}var Kf=function(o){return o===void 0&&(o=0),{name:"offset",options:o,async fn(a){var e,i;let{x:n,y:l,placement:h,middlewareData:u}=a,v=await i2(a,o);return h===((e=u.offset)==null?void 0:e.placement)&&(i=u.arrow)!=null&&i.alignmentOffset?{}:{x:n+v.x,y:l+v.y,data:{...v,placement:h}}}}},Zf=function(o){return o===void 0&&(o={}),{name:"shift",options:o,async fn(a){let{x:e,y:i,placement:n}=a,{mainAxis:l=!0,crossAxis:h=!1,limiter:u={fn:z=>{let{x:V,y:q}=z;return{x:V,y:q}}},...v}=zn(o,a),C={x:e,y:i},S=await mp(a,v),$=Nr(Br(n)),T=lp($),w=C[T],P=C[$];if(l){let z=T==="y"?"top":"left",V=T==="y"?"bottom":"right",q=w+S[z],B=w-S[V];w=sp(q,w,B)}if(h){let z=$==="y"?"top":"left",V=$==="y"?"bottom":"right",q=P+S[z],B=P-S[V];P=sp(q,P,B)}let _=u.fn({...a,[T]:w,[$]:P});return{..._,data:{x:_.x-e,y:_.y-i,enabled:{[T]:l,[$]:h}}}}}};function sm(){return typeof window<"u"}function _a(o){return Yf(o)?(o.nodeName||"").toLowerCase():"#document"}function bo(o){var a;return(o==null||(a=o.ownerDocument)==null?void 0:a.defaultView)||window}function ur(o){var a;return(a=(Yf(o)?o.ownerDocument:o.document)||window.document)==null?void 0:a.documentElement}function Yf(o){return sm()?o instanceof Node||o instanceof bo(o).Node:!1}function Xo(o){return sm()?o instanceof Element||o instanceof bo(o).Element:!1}function pr(o){return sm()?o instanceof HTMLElement||o instanceof bo(o).HTMLElement:!1}function Xf(o){return!sm()||typeof ShadowRoot>"u"?!1:o instanceof ShadowRoot||o instanceof bo(o).ShadowRoot}var a2=new Set(["inline","contents"]);function Dn(o){let{overflow:a,overflowX:e,overflowY:i,display:n}=Yo(o);return/auto|scroll|overlay|hidden|clip/.test(a+i+e)&&!a2.has(n)}var n2=new Set(["table","td","th"]);function Jf(o){return n2.has(_a(o))}var s2=[":popover-open",":modal"];function Dl(o){return s2.some(a=>{try{return o.matches(a)}catch{return!1}})}var l2=["transform","translate","scale","rotate","perspective"],c2=["transform","translate","scale","rotate","perspective","filter"],d2=["paint","layout","strict","content"];function Fn(o){let a=lm(),e=Xo(o)?Yo(o):o;return l2.some(i=>e[i]?e[i]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!a&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!a&&(e.filter?e.filter!=="none":!1)||c2.some(i=>(e.willChange||"").includes(i))||d2.some(i=>(e.contain||"").includes(i))}function Qf(o){let a=mi(o);for(;pr(a)&&!Ia(a);){if(Fn(a))return a;if(Dl(a))return null;a=mi(a)}return null}function lm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}var h2=new Set(["html","body","#document"]);function Ia(o){return h2.has(_a(o))}function Yo(o){return bo(o).getComputedStyle(o)}function Fl(o){return Xo(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.scrollX,scrollTop:o.scrollY}}function mi(o){if(_a(o)==="html")return o;let a=o.assignedSlot||o.parentNode||Xf(o)&&o.host||ur(o);return Xf(a)?a.host:a}function eb(o){let a=mi(o);return Ia(a)?o.ownerDocument?o.ownerDocument.body:o.body:pr(a)&&Dn(a)?a:eb(a)}function On(o,a,e){var i;a===void 0&&(a=[]),e===void 0&&(e=!0);let n=eb(o),l=n===((i=o.ownerDocument)==null?void 0:i.body),h=bo(n);if(l){let u=cm(h);return a.concat(h,h.visualViewport||[],Dn(n)?n:[],u&&e?On(u):[])}return a.concat(n,On(n,[],e))}function cm(o){return o.parent&&Object.getPrototypeOf(o.parent)?o.frameElement:null}function ib(o){let a=Yo(o),e=parseFloat(a.width)||0,i=parseFloat(a.height)||0,n=pr(o),l=n?o.offsetWidth:e,h=n?o.offsetHeight:i,u=Il(e)!==l||Il(i)!==h;return u&&(e=l,i=h),{width:e,height:i,$:u}}function pp(o){return Xo(o)?o:o.contextElement}function Vn(o){let a=pp(o);if(!pr(a))return mr(1);let e=a.getBoundingClientRect(),{width:i,height:n,$:l}=ib(a),h=(l?Il(e.width):e.width)/i,u=(l?Il(e.height):e.height)/n;return(!h||!Number.isFinite(h))&&(h=1),(!u||!Number.isFinite(u))&&(u=1),{x:h,y:u}}var m2=mr(0);function ab(o){let a=bo(o);return!lm()||!a.visualViewport?m2:{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}}function u2(o,a,e){return a===void 0&&(a=!1),!e||a&&e!==bo(o)?!1:a}function za(o,a,e,i){a===void 0&&(a=!1),e===void 0&&(e=!1);let n=o.getBoundingClientRect(),l=pp(o),h=mr(1);a&&(i?Xo(i)&&(h=Vn(i)):h=Vn(o));let u=u2(l,e,i)?ab(l):mr(0),v=(n.left+u.x)/h.x,C=(n.top+u.y)/h.y,S=n.width/h.x,$=n.height/h.y;if(l){let T=bo(l),w=i&&Xo(i)?bo(i):i,P=T,_=cm(P);for(;_&&i&&w!==P;){let z=Vn(_),V=_.getBoundingClientRect(),q=Yo(_),B=V.left+(_.clientLeft+parseFloat(q.paddingLeft))*z.x,te=V.top+(_.clientTop+parseFloat(q.paddingTop))*z.y;v*=z.x,C*=z.y,S*=z.x,$*=z.y,v+=B,C+=te,P=bo(_),_=cm(P)}}return hi({width:S,height:$,x:v,y:C})}function dm(o,a){let e=Fl(o).scrollLeft;return a?a.left+e:za(ur(o)).left+e}function nb(o,a){let e=o.getBoundingClientRect(),i=e.left+a.scrollLeft-dm(o,e),n=e.top+a.scrollTop;return{x:i,y:n}}function p2(o){let{elements:a,rect:e,offsetParent:i,strategy:n}=o,l=n==="fixed",h=ur(i),u=a?Dl(a.floating):!1;if(i===h||u&&l)return e;let v={scrollLeft:0,scrollTop:0},C=mr(1),S=mr(0),$=pr(i);if(($||!$&&!l)&&((_a(i)!=="body"||Dn(h))&&(v=Fl(i)),pr(i))){let w=za(i);C=Vn(i),S.x=w.x+i.clientLeft,S.y=w.y+i.clientTop}let T=h&&!$&&!l?nb(h,v):mr(0);return{width:e.width*C.x,height:e.height*C.y,x:e.x*C.x-v.scrollLeft*C.x+S.x+T.x,y:e.y*C.y-v.scrollTop*C.y+S.y+T.y}}function v2(o){return Array.from(o.getClientRects())}function f2(o){let a=ur(o),e=Fl(o),i=o.ownerDocument.body,n=Zo(a.scrollWidth,a.clientWidth,i.scrollWidth,i.clientWidth),l=Zo(a.scrollHeight,a.clientHeight,i.scrollHeight,i.clientHeight),h=-e.scrollLeft+dm(o),u=-e.scrollTop;return Yo(i).direction==="rtl"&&(h+=Zo(a.clientWidth,i.clientWidth)-n),{width:n,height:l,x:h,y:u}}var tb=25;function b2(o,a){let e=bo(o),i=ur(o),n=e.visualViewport,l=i.clientWidth,h=i.clientHeight,u=0,v=0;if(n){l=n.width,h=n.height;let S=lm();(!S||S&&a==="fixed")&&(u=n.offsetLeft,v=n.offsetTop)}let C=dm(i);if(C<=0){let S=i.ownerDocument,$=S.body,T=getComputedStyle($),w=S.compatMode==="CSS1Compat"&&parseFloat(T.marginLeft)+parseFloat(T.marginRight)||0,P=Math.abs(i.clientWidth-$.clientWidth-w);P<=tb&&(l-=P)}else C<=tb&&(l+=C);return{width:l,height:h,x:u,y:v}}var g2=new Set(["absolute","fixed"]);function y2(o,a){let e=za(o,!0,a==="fixed"),i=e.top+o.clientTop,n=e.left+o.clientLeft,l=pr(o)?Vn(o):mr(1),h=o.clientWidth*l.x,u=o.clientHeight*l.y,v=n*l.x,C=i*l.y;return{width:h,height:u,x:v,y:C}}function ob(o,a,e){let i;if(a==="viewport")i=b2(o,e);else if(a==="document")i=f2(ur(o));else if(Xo(a))i=y2(a,e);else{let n=ab(o);i={x:a.x-n.x,y:a.y-n.y,width:a.width,height:a.height}}return hi(i)}function sb(o,a){let e=mi(o);return e===a||!Xo(e)||Ia(e)?!1:Yo(e).position==="fixed"||sb(e,a)}function x2(o,a){let e=a.get(o);if(e)return e;let i=On(o,[],!1).filter(u=>Xo(u)&&_a(u)!=="body"),n=null,l=Yo(o).position==="fixed",h=l?mi(o):o;for(;Xo(h)&&!Ia(h);){let u=Yo(h),v=Fn(h);!v&&u.position==="fixed"&&(n=null),(l?!v&&!n:!v&&u.position==="static"&&!!n&&g2.has(n.position)||Dn(h)&&!v&&sb(o,h))?i=i.filter(S=>S!==h):n=u,h=mi(h)}return a.set(o,i),i}function C2(o){let{element:a,boundary:e,rootBoundary:i,strategy:n}=o,h=[...e==="clippingAncestors"?Dl(a)?[]:x2(a,this._c):[].concat(e),i],u=h[0],v=h.reduce((C,S)=>{let $=ob(a,S,n);return C.top=Zo($.top,C.top),C.right=di($.right,C.right),C.bottom=di($.bottom,C.bottom),C.left=Zo($.left,C.left),C},ob(a,u,n));return{width:v.right-v.left,height:v.bottom-v.top,x:v.left,y:v.top}}function $2(o){let{width:a,height:e}=ib(o);return{width:a,height:e}}function S2(o,a,e){let i=pr(a),n=ur(a),l=e==="fixed",h=za(o,!0,l,a),u={scrollLeft:0,scrollTop:0},v=mr(0);function C(){v.x=dm(n)}if(i||!i&&!l)if((_a(a)!=="body"||Dn(n))&&(u=Fl(a)),i){let w=za(a,!0,l,a);v.x=w.x+a.clientLeft,v.y=w.y+a.clientTop}else n&&C();l&&!i&&n&&C();let S=n&&!i&&!l?nb(n,u):mr(0),$=h.left+u.scrollLeft-v.x-S.x,T=h.top+u.scrollTop-v.y-S.y;return{x:$,y:T,width:h.width,height:h.height}}function up(o){return Yo(o).position==="static"}function rb(o,a){if(!pr(o)||Yo(o).position==="fixed")return null;if(a)return a(o);let e=o.offsetParent;return ur(o)===e&&(e=e.ownerDocument.body),e}function lb(o,a){let e=bo(o);if(Dl(o))return e;if(!pr(o)){let n=mi(o);for(;n&&!Ia(n);){if(Xo(n)&&!up(n))return n;n=mi(n)}return e}let i=rb(o,a);for(;i&&Jf(i)&&up(i);)i=rb(i,a);return i&&Ia(i)&&up(i)&&!Fn(i)?e:i||Qf(o)||e}var k2=async function(o){let a=this.getOffsetParent||lb,e=this.getDimensions,i=await e(o.floating);return{reference:S2(o.reference,await a(o.floating),o.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function w2(o){return Yo(o).direction==="rtl"}var hm={convertOffsetParentRelativeRectToViewportRelativeRect:p2,getDocumentElement:ur,getClippingRect:C2,getOffsetParent:lb,getElementRects:k2,getClientRects:v2,getDimensions:$2,getScale:Vn,isElement:Xo,isRTL:w2};function cb(o,a){return o.x===a.x&&o.y===a.y&&o.width===a.width&&o.height===a.height}function L2(o,a){let e=null,i,n=ur(o);function l(){var u;clearTimeout(i),(u=e)==null||u.disconnect(),e=null}function h(u,v){u===void 0&&(u=!1),v===void 0&&(v=1),l();let C=o.getBoundingClientRect(),{left:S,top:$,width:T,height:w}=C;if(u||a(),!T||!w)return;let P=zl($),_=zl(n.clientWidth-(S+T)),z=zl(n.clientHeight-($+w)),V=zl(S),B={rootMargin:-P+"px "+-_+"px "+-z+"px "+-V+"px",threshold:Zo(0,di(1,v))||1},te=!0;function U(ye){let re=ye[0].intersectionRatio;if(re!==v){if(!te)return h();re?h(!1,re):i=setTimeout(()=>{h(!1,1e-7)},1e3)}re===1&&!cb(C,o.getBoundingClientRect())&&h(),te=!1}try{e=new IntersectionObserver(U,{...B,root:n.ownerDocument})}catch{e=new IntersectionObserver(U,B)}e.observe(o)}return h(!0),l}function db(o,a,e,i){i===void 0&&(i={});let{ancestorScroll:n=!0,ancestorResize:l=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:v=!1}=i,C=pp(o),S=n||l?[...C?On(C):[],...On(a)]:[];S.forEach(V=>{n&&V.addEventListener("scroll",e,{passive:!0}),l&&V.addEventListener("resize",e)});let $=C&&u?L2(C,e):null,T=-1,w=null;h&&(w=new ResizeObserver(V=>{let[q]=V;q&&q.target===C&&w&&(w.unobserve(a),cancelAnimationFrame(T),T=requestAnimationFrame(()=>{var B;(B=w)==null||B.observe(a)})),e()}),C&&!v&&w.observe(C),w.observe(a));let P,_=v?za(o):null;v&&z();function z(){let V=za(o);_&&!cb(_,V)&&e(),_=V,P=requestAnimationFrame(z)}return e(),()=>{var V;S.forEach(q=>{n&&q.removeEventListener("scroll",e),l&&q.removeEventListener("resize",e)}),$?.(),(V=w)==null||V.disconnect(),w=null,v&&cancelAnimationFrame(P)}}var hb=Kf;var mb=Zf,vp=Uf;var ub=jf;var pb=(o,a,e)=>{let i=new Map,n={platform:hm,...e},l={...n.platform,_c:i};return Wf(o,a,{...n,platform:l})};function vb(o){return E2(o)}function fp(o){return o.assignedSlot?o.assignedSlot:o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}function E2(o){for(let a=o;a;a=fp(a))if(a instanceof Element&&getComputedStyle(a).display==="none")return null;for(let a=fp(o);a;a=fp(a)){if(!(a instanceof Element))continue;let e=getComputedStyle(a);if(e.display!=="contents"&&(e.position!=="static"||Fn(e)||a.tagName==="BODY"))return a}return null}async function qr(o,a,e,i){async function n(){let l=new Array;e?.inline&&l.push(ub()),e.flip&&l.push(e.flip===!0?vp():vp({fallbackPlacements:e.flip})),e.shift&&l.push(mb()),e.offset&&!isNaN(e.offset)&&l.push(hb(e.offset));let h=await pb(a,o,{placement:e.position,middleware:l,platform:{...hm,getOffsetParent:u=>hm.getOffsetParent(u,vb)}});i(h.x,h.y,h.placement)}return await n(),db(a,o,async()=>await n())}var Vl,Bn,vr,fb,bp,mm,Oa=class extends ce(k){constructor(){super(...arguments);m(this,vr);m(this,Vl);m(this,Bn);this.size="medium";this.position="above-after"}attach(e){super.attach(e),c(this,vr,mm).call(this)}detach(){super.detach(),c(this,vr,bp).call(this)}connectedCallback(){super.connectedCallback(),g(this,Vl,O.observe(()=>c(this,vr,mm).call(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,Vl))==null||e.call(this)}update(e){super.update(e),(e.has("position")||e.has("size")||e.has("htmlFor"))&&c(this,vr,mm).call(this)}render(){return f`<div class="base">
      <slot @slotchange="${c(this,vr,fb)}"> <span aria-hidden="true">&nbsp;</span></slot>
    </div>`}};Vl=new WeakMap,Bn=new WeakMap,vr=new WeakSet,fb=function(){this.isConnected&&this.style.setProperty("--_badge-padding",this.textContent&&this.textContent.length>2?`0 ${this.size==="medium"?"0.25rem":this.size==="large"?"0.5rem":"0"}`:"")},bp=function(){var e;(e=s(this,Bn))==null||e.call(this),g(this,Bn,void 0)},mm=async function(){if(c(this,vr,bp).call(this),!this.control)return;let e="top-end";switch(this.position){case"above":e="top";break;case"above-before":e="top-start";break;case"after":e="right";break;case"before":e="left";break;case"below":e="bottom";break;case"below-after":e="bottom-end";break;case"below-before":e="bottom-start";break}g(this,Bn,await qr(this,this.control,{position:e},(i,n)=>{this.position.includes("before")&&this.position!=="before"&&(O.current==="rtl"?i+=this.clientWidth:i-=this.clientWidth),this.position.includes("after")&&this.position!=="after"&&(O.current==="rtl"?i-=this.clientWidth:i+=this.clientWidth),this.style.left=`${i}px`,this.style.top=`${n}px`}))},Oa.styles=b`
    :host {
      display: inline-block;
      vertical-align: baseline;
    }
    .base {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      box-sizing: border-box;
      user-select: none;
      padding: var(--_badge-padding);
      border-radius: var(--m3e-badge-shape, ${t.shape.corner.full});
      color: var(--m3e-badge-color, ${t.color.onError});
      background-color: var(--m3e-badge-container-color, ${t.color.error});
    }
    :host([for]) {
      position: absolute;
      z-index: 1;
    }
    :host([for][position="above"]) {
      transform: translateY(var(--_badge-offset, 0px));
    }
    :host([for][position="above-after"]:not(:dir(rtl))) {
      transform: translate3d(calc(0px - var(--_badge-offset, 0px)), var(--_badge-offset, 0px), 0);
    }
    :host([for][position="above-after"]:dir(rtl)) {
      transform: translate3d(var(--_badge-offset, 0px), var(--_badge-offset, 0px), 0);
    }
    :host([for][position="above-before"]:not(:dir(rtl))) {
      transform: translate3d(var(--_badge-offset, 0px), var(--_badge-offset, 0px), 0);
    }
    :host([for][position="above-before"]:dir(rtl)) {
      transform: translate3d(calc(0px - var(--_badge-offset, 0px)), var(--_badge-offset, 0px), 0);
    }
    :host([for][position="below"]) {
      transform: translateY(calc(0px - var(--_badge-offset, 0px)));
    }
    :host([for][position="below-after"]:not(:dir(rtl))) {
      transform: translate3d(calc(0px - var(--_badge-offset, 0px)), calc(0px - var(--_badge-offset, 0px)), 0);
    }
    :host([for][position="below-after"]:dir(rtl)) {
      transform: translate3d(var(--_badge-offset, 0px), calc(0px - var(--_badge-offset, 0px)), 0);
    }
    :host([for][position="below-before"]:not(:dir(rtl))) {
      transform: translate3d(var(--_badge-offset, 0px), calc(0px - var(--_badge-offset, 0px)), 0);
    }
    :host([for][position="below-before"]:dir(rtl)) {
      transform: translate3d(calc(0px - var(--_badge-offset, 0px)), calc(0px - var(--_badge-offset, 0px)), 0);
    }
    :host([for][position="before"]:not(:dir(rtl))),
    :host([for][position="after"]:dir(rtl)) {
      transform: translateX(var(--_badge-offset, 0px));
    }
    :host([for][position="before"]:dir(rtl)),
    :host([for][position="after"]:not(:dir(rtl))) {
      transform: translateX(calc(0px - var(--_badge-offset, 0px)));
    }
    :host([size="small"]) {
      height: var(--m3e-badge-small-size, 0.375rem);
      max-height: var(--m3e-badge-small-size, 0.375rem);
      width: var(--m3e-badge-small-size, 0.375rem);
      min-width: var(--m3e-badge-small-size, 0.375rem);
      --_badge-offset: var(--m3e-badge-small-offset, 0.375rem);
    }
    :host([size="small"]) .base {
      font-size: 0;
    }
    :host([size="medium"]) {
      height: var(--m3e-badge-medium-size, 1.375rem);
      min-width: var(--m3e-badge-medium-size, 1.375rem);
      --_badge-offset: var(--m3e-badge-small-offset, 0.75rem);
    }
    :host([size="medium"]) .base {
      font-size: var(--m3e-badge-medium-font-size, ${t.typescale.standard.label.small.fontSize});
      font-weight: var(--m3e-badge-medium-font-weight, ${t.typescale.standard.label.small.fontWeight});
      line-height: var(--m3e-badge-medium-line-height, ${t.typescale.standard.label.small.lineHeight});
      letter-spacing: var(--m3e-badge-medium-tracking, ${t.typescale.standard.label.small.tracking});
    }
    :host([size="large"]) {
      height: var(--m3e-badge-large-size, 1.75rem);
      min-width: var(--m3e-badge-large-size, 1.75rem);
      --_badge-offset: var(--m3e-badge-small-offset, 1rem);
    }
    :host([size="large"]) .base {
      font-size: var(--m3e-badge-large-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(--m3e-badge-large-font-weight, ${t.typescale.standard.label.large.fontWeight});
      line-height: var(--m3e-badge-large-line-height, ${t.typescale.standard.label.large.lineHeight});
      letter-spacing: var(--m3e-badge-large-tracking, ${t.typescale.standard.label.large.tracking});
    }
    @media (forced-colors: active) {
      .base {
        background-color: ButtonFace;
        color: ButtonText;
        outline: 1px solid ButtonText;
      }
    }
  `,d([p({reflect:!0})],Oa.prototype,"size",2),d([p({reflect:!0})],Oa.prototype,"position",2),Oa=d([y("m3e-badge")],Oa);var um=class extends Ve{_onClick(){this.closest("m3e-bottom-sheet")?.hide()}};um=d([y("m3e-bottom-sheet-action")],um);var Nl,ql,Wl,Va,ea,Ul,Gl,Ba,Rt,ta,it,qn,oa,ui,Wr,I,bb,gb,yb,xb,Cb,$b,Sb,kb,wb,gp,Lb,Eb,fr,Da,Bl,yp,pm,Tb,Fa,Nn,Jo,Mb,Pb,Be=class extends vo(D(k),"opening","opened","cancel","closing","closed"){constructor(){super(...arguments);m(this,I);m(this,Nl,e=>c(this,I,Cb).call(this,e));m(this,ql,e=>c(this,I,$b).call(this,e));m(this,Wl,()=>c(this,I,Sb).call(this));m(this,Va,new Array);m(this,ea,new Bh);m(this,Ul,new gn(this));m(this,Gl,new Le(this,{target:null,skipInitial:!0,callback:e=>c(this,I,Tb).call(this,e)}));m(this,Ba,null);m(this,Rt);m(this,ta,!1);m(this,it,0);m(this,qn);m(this,oa,0);m(this,ui,0);m(this,Wr);this.modal=!1;this.open=!1;this.handle=!1;this.handleLabel="Drag handle";this.detents=[];this.detent=0;this.hideable=!1;this.hideFriction=.5}show(e=this.detent){this.open?e!==void 0&&s(this,it)!==e&&c(this,I,Fa).call(this,e):(g(this,qn,e),this.open=!0)}hide(){this.open=!1}toggle(e){this.open?this.hide():this.show(e)}cycle(){this.open?this.detents.length>0?s(this,it)<this.detents.length-1?(bv(this,it)._++,c(this,I,Fa).call(this,s(this,it))):this.hideable&&this.hide():this.hide():this.show()}connectedCallback(){super.connectedCallback(),Mt(this,"-no-animate")}update(e){super.update(e),e.has("modal")&&(this.role=this.modal?"dialog":"region",this.ariaModal=this.modal?"true":null,this.popover=this.modal?"manual":null)}firstUpdated(e){super.firstUpdated(e);let i=this.shadowRoot?.querySelector(".content");i&&(g(this,oa,i.clientHeight),s(this,Gl).observe(i));let n=this.shadowRoot?.querySelector(".header");n&&(g(this,ui,n.clientHeight),s(this,Gl).observe(n)),xe(this,"-no-animate")}updated(e){if(super.updated(e),e.has("open")){if(this.open){if(!this.dispatchEvent(new Event("opening",{cancelable:!0}))){this.open=!1;return}Be.__openSheet!==this&&Be.__openSheet?.hide(),Be.__openSheet=this,this.inert=!1,window.addEventListener("resize",s(this,Wl)),this.detents.length>0?(g(this,it,Math.min(Math.max(0,s(this,qn)??this.detent),this.detents.length-1)),c(this,I,Jo).call(this,c(this,I,fr).call(this,this.detents[s(this,it)]))):c(this,I,Jo).call(this,Math.min(c(this,I,fr).call(this,"fit"),c(this,I,fr).call(this,"half"))),g(this,qn,void 0)}else{if(!this.dispatchEvent(new Event("closing",{cancelable:!0}))){this.open=!0;return}requestAnimationFrame(()=>this.inert=!0),window.removeEventListener("resize",s(this,Wl)),Be.__openSheet===this&&(Be.__openSheet=void 0)}if(this.modal)if(this.open){g(this,Ba,document.activeElement),c(this,I,Mb).call(this),s(this,Ul).lock(),this.showPopover(),requestAnimationFrame(()=>{document.addEventListener("click",s(this,Nl)),document.addEventListener("keydown",s(this,ql))});let i=this.querySelector("[autofocus]");(!i||!Nt.isFocusable(i))&&(i=this.shadowRoot?.querySelector(".handle")),i&&Fh(i)}else c(this,I,Nn).call(this,0).then(()=>{c(this,I,Pb).call(this),s(this,Ul).unlock(),document.removeEventListener("click",s(this,Nl)),document.removeEventListener("keydown",s(this,ql)),this.hidePopover(),s(this,Ba)instanceof HTMLElement&&s(this,Ba).focus(),g(this,Ba,null)});this.dispatchEvent(new Event(this.open?"opened":"closed"))}}render(){return f`<m3e-focus-trap ?disabled="${!this.modal}">
      <div class="base">
        <m3e-elevation class="elevation"></m3e-elevation>
        <div
          class="header"
          @pointerdown="${c(this,I,gb)}"
          @pointermove="${c(this,I,yb)}"
          @pointerup="${c(this,I,xb)}"
        >
          ${this.handle?f`<div class="handle-row">
                <div
                  id="handle"
                  class="handle"
                  role="button"
                  aria-label="${this.handleLabel}"
                  tabindex="0"
                  @click="${c(this,I,kb)}"
                  @keydown="${c(this,I,wb)}"
                >
                  <m3e-focus-ring class="focus-ring" for="handle"></m3e-focus-ring>
                  <div class="handle-touch" aria-hidden="true"></div>
                </div>
              </div>`:R}
          <slot name="header" @slotchange="${c(this,I,bb)}"></slot>
        </div>
        <div class="body">
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    </m3e-focus-trap>`}};Nl=new WeakMap,ql=new WeakMap,Wl=new WeakMap,Va=new WeakMap,ea=new WeakMap,Ul=new WeakMap,Gl=new WeakMap,Ba=new WeakMap,Rt=new WeakMap,ta=new WeakMap,it=new WeakMap,qn=new WeakMap,oa=new WeakMap,ui=new WeakMap,Wr=new WeakMap,I=new WeakSet,bb=function(e){le(this,"has-header",J(e.target))},gb=function(e){e.button!==2&&(e.target instanceof HTMLElement&&Nt.isFocusable(e.target)||(e.target.setPointerCapture(e.pointerId),e.target.style.cursor="grabbing",s(this,ea).reset(),s(this,ea).add(e.clientY),g(this,Rt,{startY:e.clientY,startHeight:this.clientHeight,maxHeight:c(this,I,Da).call(this),minHeight:c(this,I,Bl).call(this)}),g(this,ta,!1)))},yb=function(e){if(!s(this,Rt)||Math.abs(e.clientY-s(this,Rt).startY)<=8)return;(e.getCoalescedEvents?.()??[e]).forEach(l=>s(this,ea).add(l.clientY,e.timeStamp));let n=s(this,Rt).startHeight-(e.clientY-s(this,Rt).startY);if(n<s(this,Rt).minHeight){let l=(s(this,Rt).minHeight-n)*this.hideFriction;n=s(this,Rt).minHeight-l}c(this,I,Jo).call(this,Math.min(s(this,Rt).maxHeight,n)),g(this,ta,!0)},xb=function(e){if(s(this,Rt))try{if(e.target.releasePointerCapture(e.pointerId),e.target.style.cursor="",!s(this,ta))return;let i=e.pointerType==="touch"?1200:500,n=s(this,ea).getVelocity();if(s(this,ea).reset(),this.hideable&&n>=i)this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.hide();else if(Math.abs(n)>=i)if(this.detents.length>0){let l=c(this,I,gp).call(this);l!==s(this,it)&&c(this,I,Fa).call(this,l)}else c(this,I,Nn).call(this,c(this,I,fr).call(this,"full"));else{if(this.hideable){let h=s(this,Rt).minHeight;if(this.clientHeight<h-20){this.hide();return}}this.detents.length>0?c(this,I,Fa).call(this,c(this,I,Eb).call(this)):this.clientHeight<s(this,Rt).minHeight&&c(this,I,Nn).call(this,s(this,Rt).minHeight)}}finally{g(this,Rt,void 0)}},Cb=function(e){this.open&&this.modal&&!e.composedPath().includes(this)&&this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.hide()},$b=function(e){this.open&&this.modal&&e.key==="Escape"&&!e.shiftKey&&!e.ctrlKey&&(e.preventDefault(),this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.hide())},Sb=function(){if(this.detents.length>0&&this.detents[s(this,it)]==="half"){c(this,I,Jo).call(this,c(this,I,fr).call(this,"half"));return}let e=c(this,I,Da).call(this);bt(this,"-full")?c(this,I,Jo).call(this,e):this.clientHeight>e&&c(this,I,Jo).call(this,e)},kb=function(){s(this,ta)||this.cycle(),g(this,ta,!1)},wb=function(e){if(!(e.defaultPrevented||!em(e)))switch(e.key){case"Up":case"ArrowUp":if(e.preventDefault(),this.detents.length>0){let i=c(this,I,gp).call(this);i!==s(this,it)&&c(this,I,Fa).call(this,i)}else c(this,I,Nn).call(this,c(this,I,fr).call(this,"full"));break;case"Down":case"ArrowDown":if(e.preventDefault(),this.detents.length>0){let i=c(this,I,Lb).call(this);i!==s(this,it)?c(this,I,Fa).call(this,i):this.hideable&&this.hide()}else this.hideable&&this.hide();break}},gp=function(){let e=this.clientHeight,i=1/0,n=s(this,it);for(let l=0;l<this.detents.length;l++){if(l===s(this,it))continue;let h=c(this,I,fr).call(this,this.detents[l]);h>e&&h<i&&(i=h,n=l)}return n},Lb=function(){let e=this.clientHeight,i=-1/0,n=s(this,it);for(let l=0;l<this.detents.length;l++){if(l===s(this,it))continue;let h=c(this,I,fr).call(this,this.detents[l]);h<e&&h>i&&(i=h,n=l)}return n},Eb=function(){let e=this.clientHeight,i=s(this,it),n=1/0;for(let l=0;l<this.detents.length;l++){let h=c(this,I,fr).call(this,this.detents[l]),u=Math.abs(e-h);u<n&&(n=u,i=l)}return i},fr=function(e){switch(e){case"collapsed":return c(this,I,Bl).call(this);case"half":return c(this,I,Da).call(this)*.5;case"full":return c(this,I,Da).call(this);case"fit":return c(this,I,pm).call(this)}return e.endsWith("%")?c(this,I,Da).call(this)*(parseFloat(e)/100):e.endsWith("px")?parseFloat(e):c(this,I,Bl).call(this)},Da=function(){let e=this.shadowRoot?.querySelector(".base");return window.innerHeight-(e?Mu(e,"var(--_bottom-sheet-top-space)"):0)},Bl=function(){return this.detents.includes("fit")&&!this.detents.includes("collapsed")?c(this,I,pm).call(this):c(this,I,yp).call(this)},yp=function(){let e=this.shadowRoot?.querySelector(".base");return s(this,ui)+(e?Mu(e,"var(--_bottom-sheet-peek-height)"):0)},pm=function(){let e=this.shadowRoot?.querySelector(".body");if(!e)return 0;let i=getComputedStyle(e);return s(this,ui)+s(this,oa)+parseFloat(i.paddingBlockStart)+parseFloat(i.paddingBlockEnd)},Tb=function(e){let i=s(this,oa),n=s(this,ui);for(let l of e)l.target.classList.contains("content")?g(this,oa,(Array.isArray(l.borderBoxSize)?l.borderBoxSize[0]:l.borderBoxSize).blockSize):l.target.classList.contains("header")&&g(this,ui,(Array.isArray(l.borderBoxSize)?l.borderBoxSize[0]:l.borderBoxSize).blockSize);if(this.open&&this.detents.length>0&&(i!==s(this,oa)||n!==s(this,ui)))switch(this.detents[s(this,it)]){case"fit":c(this,I,Jo).call(this,c(this,I,pm).call(this));break;case"collapsed":c(this,I,Jo).call(this,c(this,I,Bl).call(this));break}},Fa=function(e){e>=0&&e<this.detents.length&&(g(this,it,e),c(this,I,Nn).call(this,c(this,I,fr).call(this,this.detents[e])))},Nn=async function(e){s(this,Wr)&&(c(this,I,Jo).call(this,this.clientHeight),s(this,Wr)?.cancel(),g(this,Wr,void 0)),Me()?c(this,I,Jo).call(this,e):(g(this,Wr,this.animate([{"--_bottom-sheet-height":`${this.clientHeight}px`},{"--_bottom-sheet-height":`${e}px`}],{duration:250,easing:"cubic-bezier(0.2, 0.0, 0, 1.0)"})),s(this,Wr).onfinish=()=>{c(this,I,Jo).call(this,e),g(this,Wr,void 0)},await s(this,Wr).finished)},Jo=function(e){this.style.setProperty("--_bottom-sheet-height",`${e}px`),le(this,"-full",e===c(this,I,Da).call(this));let i=this.shadowRoot?.querySelector(".content");i&&(i.inert=e<=c(this,I,yp).call(this))},Mb=function(){s(this,Va).length=0;for(let e=this;e.parentNode&&e.parentNode!==document.documentElement;e=e.parentNode)for(let i of e.parentNode.children)i instanceof HTMLElement&&i!==e&&!i.inert&&(i.inert=!0,s(this,Va).push(i))},Pb=function(){s(this,Va).forEach(e=>e.inert=!1),s(this,Va).length=0},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          @property --_bottom-sheet-height {
            syntax: "<length>";
            inherits: false;
            initial-value: 50vh;
          }
          m3e-bottom-sheet > [slot="header"] {
            margin-block-end: var(--m3e-bottom-sheet-padding-block, 0.5rem);
            margin-inline: var(--m3e-bottom-sheet-padding-inline, 1rem);
          }
        `.toString()),document.adoptedStyleSheets.push(e)}})(),Be.styles=b`
    :host {
      display: block;
      position: fixed;
      left: 50%;
      top: calc(100vh - var(--_bottom-sheet-height));
      margin: 0;
      padding: 0;
      outline: none;
      overflow: hidden;
      border: none;
      box-sizing: border-box;
      width: var(--m3e-bottom-sheet-width, 100%);
      max-width: var(--m3e-bottom-sheet-max-width, 40rem);
      height: var(--_bottom-sheet-height);
      color: var(--m3e-bottom-sheet-color, ${t.color.onSurface});
      background-color: var(--m3e-bottom-sheet-container-color, ${t.color.surfaceContainerLow});
    }
    :host(:not(:state(-no-animate))) {
      transition: ${r(`transform ${t.motion.duration.medium2} ${t.motion.easing.standardDecelerate},
        border-radius ${t.motion.duration.medium2} ${t.motion.easing.standard}`)};
    }
    :host(:not([modal]):not(:state(-full))) .elevation {
      --m3e-elevation-level: var(--m3e-bottom-sheet-elevation, ${t.elevation.level1});
    }
    :host([modal]:not(:state(-full))) .elevation {
      --m3e-elevation-level: var(--m3e-bottom-sheet-modal-elevation, ${t.elevation.level1});
    }
    :host(:state(-full)) .elevation {
      --m3e-elevation-level: var(--m3e-bottom-sheet-full-elevation, ${t.elevation.level1});
    }
    :host(:not([modal])) {
      z-index: var(--m3e-bottom-sheet-z-index, 10);
    }
    :host(:not([modal]):not([open])),
    :host([modal]:not(:popover-open)) {
      border-radius: var(--m3e-bottom-sheet-minimized-container-shape, ${t.shape.corner.none});
      transform: translateX(-50%) translateY(100%);
    }
    :host(:not([modal])[open]:not(:state(-full))),
    :host([modal]:not(:state(-full)):popover-open) {
      border-radius: var(--m3e-bottom-sheet-container-shape, ${t.shape.corner.extraLargeTop});
    }
    :host(:not([modal])[open]:state(-full)),
    :host([modal]:state(-full):popover-open) {
      border-radius: var(--m3e-bottom-sheet-full-container-shape, ${t.shape.corner.extraLargeTop});
    }
    :host(:not([modal])[open]),
    :host([modal]:popover-open) {
      transform: translateX(-50%) translateY(0);
    }
    :host([modal]:not(:state(-no-animate)))::backdrop {
      transition: ${r(`background-color ${t.motion.duration.short3} ${t.motion.easing.standard}, 
        overlay ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete,
        visibility ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete`)};
    }
    :host([modal]:popover-open)::backdrop {
      background-color: color-mix(
        in srgb,
        var(--m3e-bottom-sheet-scrim-color, ${t.color.scrim}) var(--m3e-bottom-sheet-scrim-opacity, 32%),
        transparent
      );
    }
    :host([modal]:popover-open:not(:state(-no-animate)))::backdrop {
      transition: ${r(`background-color ${t.motion.duration.long2} ${t.motion.easing.standard}, 
        overlay ${t.motion.duration.long2} ${t.motion.easing.standard} allow-discrete,
        visibility ${t.motion.duration.long2} ${t.motion.easing.standard} allow-discrete`)};
    }
    @starting-style {
      :host([modal]:popover-open)::backdrop {
        background-color: color-mix(
          in srgb,
          var(--m3e-bottom-sheet-scrim-color, ${t.color.scrim}) 0%,
          transparent
        );
      }
    }
    .base {
      display: flex;
      border-radius: inherit;
      flex-direction: column;
      height: 100%;
      --_bottom-sheet-peek-height: var(--m3e-bottom-sheet-peek-height, 0);
      --_bottom-sheet-top-space: var(--m3e-bottom-sheet-compact-top-space, 4.5rem);
    }
    @media (max-height: 640px) {
      .base {
        --_bottom-sheet-top-space: var(--m3e-bottom-sheet-top-space, 3.5rem);
      }
    }
    .body {
      flex: 1 1 auto;
      overflow-y: auto;
      scrollbar-width: ${t.scrollbar.thinWidth};
      scrollbar-color: ${t.scrollbar.color};
      padding-block-end: var(--m3e-bottom-sheet-padding-block, 0.5rem);
      padding-inline: var(--m3e-bottom-sheet-padding-inline, 1rem);
      font-size: var(--m3e-bottom-sheet-content-font-size, ${t.typescale.standard.body.medium.fontSize});
      font-weight: var(
        --m3e-bottom-sheet-content-font-weight,
        ${t.typescale.standard.body.medium.fontWeight}
      );
      line-height: var(
        --m3e-bottom-sheet-content-line-height,
        ${t.typescale.standard.body.medium.lineHeight}
      );
      letter-spacing: var(--m3e-bottom-sheet-content-tracking, ${t.typescale.standard.body.medium.tracking});
    }
    .content {
      height: fit-content;
    }
    :host(:not([handle])) .header {
      display: none;
    }
    :host(:not([handle])) .body,
    .header {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      padding-block-start: var(--m3e-bottom-sheet-padding-block, 0.5rem);
      font-size: var(--m3e-bottom-sheet-header-font-size, ${t.typescale.standard.title.large.fontSize});
      font-weight: var(--m3e-bottom-sheet-header-font-weight, ${t.typescale.standard.title.large.fontWeight});
      line-height: var(--m3e-bottom-sheet-header-line-height, ${t.typescale.standard.title.large.lineHeight});
      letter-spacing: var(--m3e-bottom-sheet-header-tracking, ${t.typescale.standard.title.large.tracking});
    }
    .header {
      cursor: grab;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      box-sizing: border-box;
      flex: none;
      display: flex;
      flex-direction: column;
      min-height: 3rem;
      --m3e-app-bar-container-color: var(--m3e-bottom-sheet-container-color, ${t.color.surfaceContainerLow});
    }
    .handle-row {
      position: relative;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
      visibility: visible;
      height: var(--m3e-bottom-sheet-handle-container-height, 1.5rem);
    }
    :host(:not(:state(-no-animate))) .handle-row {
      transition: ${r(`opacity ${t.motion.duration.short3} ${t.motion.easing.standard},
        padding ${t.motion.duration.short3} ${t.motion.easing.standard},
        height ${t.motion.duration.short3} ${t.motion.easing.standard},
        visibility ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete`)};
    }
    .handle {
      position: relative;
      width: var(--m3e-bottom-sheet-handle-width, 2rem);
      height: var(--m3e-bottom-sheet-handle-height, 4px);
      border-radius: var(--m3e-bottom-sheet-handle-shape, ${t.shape.corner.full});
      background-color: var(--m3e-bottom-sheet-handle-color, ${t.color.onSurfaceVariant});
    }
    .handle-touch {
      position: absolute;
      aspect-ratio: 1 / 1;
      height: 3rem;
      left: calc(0px - calc(calc(3rem - var(--m3e-bottom-sheet-handle-width, 2rem)) / 2));
      right: calc(0px - calc(calc(3rem - var(--m3e-bottom-sheet-handle-width, 2rem)) / 2));
      top: calc(
        0px - calc(
            calc(3rem - var(--m3e-bottom-sheet-handle-container-height, 1.5rem)) - calc(
                var(--m3e-bottom-sheet-handle-height, 4px) / 2
              )
          )
      );
    }
    @media (prefers-reduced-motion) {
      :host(:not(:state(-no-animate))),
      :host([modal]:not(:state(-no-animate)))::backdrop,
      :host([modal]:popover-open:not(:state(-no-animate)))::backdrop,
      :host(:not(:state(-no-animate))) .handle-row {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      :host([modal]:not(:state(-no-animate)))::backdrop,
      :host([modal]:popover-open:not(:state(-no-animate)))::backdrop {
        transition: none;
      }
      .base {
        border-style: solid;
        border-width: 1px;
        border-color: CanvasText;
      }
      .handle {
        background-color: ButtonText;
      }
    }
  `,d([p({type:Boolean,reflect:!0})],Be.prototype,"modal",2),d([p({type:Boolean,reflect:!0})],Be.prototype,"open",2),d([p({type:Boolean})],Be.prototype,"handle",2),d([p({attribute:"handle-label"})],Be.prototype,"handleLabel",2),d([p({attribute:"detents",converter:qv})],Be.prototype,"detents",2),d([p({type:Number})],Be.prototype,"detent",2),d([p({type:Boolean,reflect:!0})],Be.prototype,"hideable",2),d([p({attribute:"hide-friction",type:Number})],Be.prototype,"hideFriction",2),Be=d([y("m3e-bottom-sheet")],Be);var Wn=class extends ce(Ve){constructor(){super(...arguments);this.secondary=!1}attach(e){e instanceof Be&&(super.attach(e),this.parentElement&&(e.modal?this.parentElement.ariaHasPopup="dialog":this.secondary||(this.parentElement.ariaExpanded="false",je(this.parentElement,"aria-controls",e.id),this.parentElement.id&&je(e,"aria-labelledby",this.parentElement.id))))}detach(){this.control&&this.parentElement&&!this.secondary&&xt(this.parentElement,"aria-controls",this.control.id),super.detach()}_onClick(){this.control instanceof Be&&(this.control.modal?this.control.show(this.detent):(this.control.toggle(this.detent),!this.secondary&&this.parentElement&&(this.parentElement.ariaExpanded=`${this.control.open}`)))}};d([p({type:Number})],Wn.prototype,"detent",2),d([p({type:Boolean})],Wn.prototype,"secondary",2),Wn=d([y("m3e-bottom-sheet-trigger")],Wn);var pe={"extra-small":{containerHeight:r(`calc(var(--m3e-button-extra-small-container-height, var(--m3e-button-container-height, 2rem)) + ${t.density.calc(0)})`),outlineThickness:r("var(--m3e-button-extra-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"),labelTextFontSize:r(`var(--m3e-button-extra-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${t.typescale.standard.label.large.fontSize}))`),labelTextFontWeight:r(`var(--m3e-button-extra-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${t.typescale.standard.label.large.fontWeight}))`),labelTextLineHeight:r(`var(--m3e-button-extra-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${t.typescale.standard.label.large.lineHeight}))`),labelTextTracking:r(`var(--m3e-button-extra-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${t.typescale.standard.label.large.tracking}))`),iconSize:r("var(--m3e-button-extra-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"),shapeRound:r(`var(--m3e-button-extra-small-shape-round, var(--m3e-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-button-extra-small-shape-square, var(--m3e-button-shape-square, ${t.shape.corner.medium}))`),selectedShapeRound:r(`var(--m3e-button-extra-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${t.shape.corner.medium}))`),selectedShapeSquare:r(`var(--m3e-button-extra-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-button-extra-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${t.shape.corner.small}))`),leadingSpace:r("var(--m3e-button-extra-small-leading-space, var(--m3e-button-leading-space, 0.75rem))"),trailingSpace:r("var(--m3e-button-extra-small-trailing-space, var(--m3e-button-trailing-space, 0.75rem))"),iconLabelSpace:r("var(--m3e-button-extra-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))")},small:{containerHeight:r(`calc(var(--m3e-button-small-container-height, var(--m3e-button-container-height, 2.5rem)) + ${t.density.calc(-1)})`),outlineThickness:r("var(--m3e-button-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"),labelTextFontSize:r(`var(--m3e-button-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${t.typescale.standard.label.large.fontSize}))`),labelTextFontWeight:r(`var(--m3e-button-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${t.typescale.standard.label.large.fontWeight}))`),labelTextLineHeight:r(`var(--m3e-button-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${t.typescale.standard.label.large.lineHeight}))`),labelTextTracking:r(`var(--m3e-button-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${t.typescale.standard.label.large.tracking}))`),iconSize:r("var(--m3e-button-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"),shapeRound:r(`var(--m3e-button-small-shape-round, var(--m3e-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-button-small-shape-square, var(--m3e-button-shape-square, ${t.shape.corner.medium}))`),selectedShapeRound:r(`var(--m3e-button-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${t.shape.corner.medium}))`),selectedShapeSquare:r(`var(--m3e-button-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-button-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${t.shape.corner.small}))`),leadingSpace:r("var(--m3e-button-small-leading-space, var(--m3e-button-leading-space, 1rem))"),trailingSpace:r("var(--m3e-button-small-trailing-space, var(--m3e-button-trailing-space, 1rem))"),iconLabelSpace:r("var(--m3e-button-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))")},medium:{containerHeight:r(`calc(var(--m3e-button-medium-container-height, var(--m3e-button-container-height, 3.5rem)) + ${t.density.calc(-2)})`),outlineThickness:r("var(--m3e-button-medium-outline-thickness, var(--m3e-button-outline-thickness, 1px))"),labelTextFontSize:r(`var(--m3e-button-medium-label-text-font-size, var(--m3e-button-label-text-font-size, ${t.typescale.standard.body.large.fontSize}))`),labelTextFontWeight:r(`var(--m3e-button-medium-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${t.typescale.standard.body.large.fontWeight}))`),labelTextLineHeight:r(`var(--m3e-button-medium-label-text-line-height, var(--m3e-button-label-text-line-height, ${t.typescale.standard.body.large.lineHeight}))`),labelTextTracking:r(`var(--m3e-button-medium-label-text-tracking, var(--m3e-button-label-text-tracking, ${t.typescale.standard.body.large.tracking}))`),iconSize:r("var(--m3e-button-medium-icon-size, var(--m3e-button-icon-size, 1.5rem))"),shapeRound:r(`var(--m3e-button-medium-shape-round, var(--m3e-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-button-medium-shape-square, var(--m3e-button-shape-square, ${t.shape.corner.large}))`),selectedShapeRound:r(`var(--m3e-button-medium-selected-shape-round, var(--m3e-button-selected-shape-round, ${t.shape.corner.large}))`),selectedShapeSquare:r(`var(--m3e-button-medium-selected-shape-square, var(--m3e-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-button-medium-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${t.shape.corner.medium}))`),leadingSpace:r("var(--m3e-button-medium-leading-space, var(--m3e-button-leading-space, 1.5rem))"),trailingSpace:r("var(--m3e-button-medium-trailing-space, var(--m3e-button-trailing-space, 1.5rem))"),iconLabelSpace:r("var(--m3e-button-medium-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))")},large:{containerHeight:r(`calc(var(--m3e-button-large-container-height, var(--m3e-button-container-height, 6rem)) + ${t.density.calc(-3)})`),outlineThickness:r("var(--m3e-button-large-outline-thickness, var(--m3e-button-outline-thickness, 2px))"),labelTextFontSize:r(`var(--m3e-button-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${t.typescale.standard.headline.small.fontSize}))`),labelTextFontWeight:r(`var(--m3e-button-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${t.typescale.standard.headline.small.fontWeight}))`),labelTextLineHeight:r(`var(--m3e-button-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${t.typescale.standard.headline.small.lineHeight}))`),labelTextTracking:r(`var(--m3e-button-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${t.typescale.standard.headline.small.tracking}))`),iconSize:r("var(--m3e-button-large-icon-size, var(--m3e-button-icon-size, 2rem))"),shapeRound:r(`var(--m3e-button-large-shape-round, var(--m3e-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-button-large-shape-square, var(--m3e-button-shape-square, ${t.shape.corner.extraLarge}))`),selectedShapeRound:r(`var(--m3e-button-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${t.shape.corner.extraLarge}))`),selectedShapeSquare:r(`var(--m3e-button-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-button-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${t.shape.corner.large}))`),leadingSpace:r("var(--m3e-button-large-leading-space, var(--m3e-button-leading-space, 3rem))"),trailingSpace:r("var(--m3e-button-large-trailing-space, var(--m3e-button-trailing-space, 3rem))"),iconLabelSpace:r("var(--m3e-button-large-icon-label-space, var(--m3e-button-icon-label-space, 0.75rem))")},"extra-large":{containerHeight:r(`calc(var(--m3e-button-extra-large-container-height, var(--m3e-button-container-height, 8.5rem)) + ${t.density.calc(-3)})`),outlineThickness:r("var(--m3e-button-extra-large-outline-thickness, var(--m3e-button-outline-thickness, 3px))"),labelTextFontSize:r(`var(--m3e-button-extra-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${t.typescale.standard.headline.large.fontSize}))`),labelTextFontWeight:r(`var(--m3e-button-extra-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${t.typescale.standard.headline.large.fontWeight}))`),labelTextLineHeight:r(`var(--m3e-button-extra-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${t.typescale.standard.headline.large.lineHeight}))`),labelTextTracking:r(`var(--m3e-button-extra-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${t.typescale.standard.headline.large.tracking}))`),iconSize:r("var(--m3e-button-extra-large-icon-size, var(--m3e-button-icon-size, 2.5rem))"),shapeRound:r(`var(--m3e-button-extra-large-shape-round, var(--m3e-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-button-extra-large-shape-square, var(--m3e-button-shape-square, ${t.shape.corner.extraLarge}))`),selectedShapeRound:r(`var(--m3e-button-extra-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${t.shape.corner.extraLarge}))`),selectedShapeSquare:r(`var(--m3e-button-extra-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-button-extra-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${t.shape.corner.large}))`),leadingSpace:r("var(--m3e-button-extra-large-leading-space, var(--m3e-button-leading-space, 4rem))"),trailingSpace:r("var(--m3e-button-extra-large-trailing-space, var(--m3e-button-trailing-space, 4rem))"),iconLabelSpace:r("var(--m3e-button-extra-large-icon-label-space, var(--m3e-button-icon-label-space, 1rem))")}};function jl(o){return b`
    :host([size="${r(o)}"]) .base {
      height: ${pe[o].containerHeight};
    }
    :host([size="${r(o)}"]) .wrapper {
      padding-inline-start: ${pe[o].leadingSpace};
      padding-inline-end: ${pe[o].trailingSpace};
      column-gap: ${pe[o].iconLabelSpace};
    }
    :host(
        [size="${r(o)}"]:state(-grouped):not(:state(-connected)):state(-adjacent-pressed):not(
            :state(-pressed)
          )
      )
      .wrapper {
      padding-inline-start: calc(
        ${pe[o].leadingSpace} - calc(
            calc(var(--_adjacent-button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15)) / 4.25
          )
      );
      padding-inline-end: calc(
        ${pe[o].trailingSpace} - calc(
            calc(var(--_adjacent-button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15)) / 4.25
          )
      );
    }
    :host([size="${r(o)}"]) .label {
      font-size: ${pe[o].labelTextFontSize};
      font-weight: ${pe[o].labelTextFontWeight};
      line-height: ${pe[o].labelTextLineHeight};
      letter-spacing: ${pe[o].labelTextTracking};
    }
    :host([size="${r(o)}"]) .icon {
      font-size: ${pe[o].iconSize};
      --m3e-icon-size: ${pe[o].iconSize};
    }
    :host([size="${r(o)}"]) .base {
      outline-offset: calc(0px - ${pe[o].outlineThickness});
      outline-width: ${pe[o].outlineThickness};
    }
    :host(:not(:state(-connected))[size="${r(o)}"][shape="rounded"]) .base {
      border-radius: var(--_button-shape, ${pe[o].shapeRound});
    }
    :host(:not(:state(-connected))[size="${r(o)}"][shape="rounded"][toggle][selected]:not(:state(-pressed)))
      .base {
      border-radius: ${pe[o].selectedShapeRound};
    }
    :host(:not(:state(-connected))[size="${r(o)}"][shape="square"]) .base {
      border-radius: ${pe[o].shapeSquare};
    }
    :host(:not(:state(-connected))[size="${r(o)}"][shape="square"][toggle][selected]:not(:state(-pressed)))
      .base {
      border-radius: var(--_button-shape, ${pe[o].selectedShapeSquare});
    }
    :host(:not(:state(-connected))[size="${r(o)}"]:state(-pressed)) .base {
      border-radius: ${pe[o].shapePressedMorph};
    }
    :host(:state(-connected)[size="${r(o)}"][shape="rounded"]) .base {
      border-start-start-radius: var(
        --_button-rounded-start-shape,
        var(--_button-shape, ${pe[o].shapeRound})
      );
      border-end-start-radius: var(
        --_button-rounded-start-shape,
        var(--_button-shape, ${pe[o].shapeRound})
      );
      border-start-end-radius: var(
        --_button-rounded-end-shape,
        var(--_button-shape, ${pe[o].shapeRound})
      );
      border-end-end-radius: var(
        --_button-rounded-end-shape,
        var(--_button-shape, ${pe[o].shapeRound})
      );
    }
    :host(:state(-connected)[size="${r(o)}"][shape="square"]) .base {
      border-start-start-radius: var(--_button-square-start-shape, ${pe[o].shapeSquare});
      border-end-start-radius: var(--_button-square-start-shape, ${pe[o].shapeSquare});
      border-start-end-radius: var(--_button-square-end-shape, ${pe[o].shapeSquare});
      border-end-end-radius: var(--_button-square-end-shape, ${pe[o].shapeSquare});
    }
    :host(:state(-connected)[size="${r(o)}"][shape="square"][toggle][selected]:not(:state(-pressed))) .base {
      border-radius: var(--_button-shape, ${pe[o].selectedShapeSquare});
    }
    :host(:state(-connected)[size="${r(o)}"]:state(-pressed)) .base {
      border-start-start-radius: var(--_button-start-shape-pressed-morph, ${pe[o].shapePressedMorph});
      border-end-start-radius: var(--_button-start-shape-pressed-morph, ${pe[o].shapePressedMorph});
      border-start-end-radius: var(--_button-end-shape-pressed-morph, ${pe[o].shapePressedMorph});
      border-end-end-radius: var(--_button-end-shape-pressed-morph, ${pe[o].shapePressedMorph});
    }
  `}var Hb=[jl("extra-small"),jl("small"),jl("medium"),jl("large"),jl("extra-large")];var Rb=b`
  :host {
    display: inline-block;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .base {
    box-sizing: border-box;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  .touch {
    position: absolute;
    height: 3rem;
    left: 0;
    right: 0;
  }
  :host(:state(-pressed)) .base,
  :host(:state(-resting)) .base {
    transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard},
          border-radius ${t.motion.spring.fastEffects}`)};
  }
  .wrapper {
    width: 100%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
  }
  .label {
    justify-self: center;
    flex: 1 1 auto;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  .icon {
    transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  :host(:not(:disabled):not([disabled-interactive])) {
    cursor: pointer;
  }
  :host([disabled-interactive]) {
    cursor: not-allowed;
  }
  ::slotted([slot="icon"]),
  ::slotted([slot="selected-icon"]),
  ::slotted([slot="trailing-icon"]) {
    font-size: inherit !important;
    flex: none;
  }
  ::slotted(svg[slot="icon"]),
  ::slotted(svg[slot="selected-icon"]),
  ::slotted(svg[slot="trailing-icon"]) {
    width: 1em;
    height: 1em;
  }
  :host([toggle]:not([selected])) .base.with-selected-icon slot[name="selected-icon"],
  :host([toggle][selected]) .base.with-selected-icon slot[name="icon"] {
    display: none;
  }
  a {
    all: unset;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
  }
  :host(:state(-grouped):state(-connected)) {
    flex: 1 1 auto;
  }
  :host(:state(-grouped):not(:state(-connected))) {
    transition: ${r(`padding-inline ${t.motion.spring.fastEffects}`)};
  }
  :host(:state(-grouped):not(:state(-connected)):not(:state(-adjacent-pressed)):not(:state(-pressed))) {
    flex-shrink: 0;
    flex-grow: 0;
  }
  :host(:state(-grouped):not(:state(-connected)):state(-adjacent-pressed):not(:state(-pressed))) {
    flex-shrink: 1;
    min-width: 0;
  }
  :host(:state(-grouped):not(:state(-connected)):state(-adjacent-pressed):not(:state(-pressed))) .label {
    text-overflow: clip;
  }
  :host(:state(-grouped):not(:state(-connected)):state(-pressed):not([disabled-interactive]):not(:disabled)) {
    flex-shrink: 0;
    flex-basis: calc(
      var(--_button-width) + calc(var(--_button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15))
    );
  }
  @media (forced-colors: active) {
    .base,
    .label,
    .icon {
      transition: none;
    }
    :host(:state(-pressed)) .base,
    :host(:state(-resting)) .base {
      transition: ${r(`border-radius ${t.motion.spring.fastEffects}`)};
    }
    :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .base {
      background-color: ButtonFace;
      outline-color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .label,
    :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .icon {
      color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .base {
      background-color: ButtonFace;
      outline-color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label,
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon {
      color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .base {
      background-color: ButtonText;
      outline: none;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .label,
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon {
      forced-color-adjust: none;
      color: ButtonFace;
      background-color: ButtonText;
    }
    :host([variant]:disabled) .base,
    :host([variant][disabled-interactive]) .base {
      outline-color: GrayText;
      background-color: unset;
    }
    :host([variant]:disabled) .label,
    :host([variant][disabled-interactive]) .label,
    :host([variant]:disabled) .icon,
    :host([variant][disabled-interactive]) .icon {
      color: GrayText;
    }
    .base {
      outline-style: solid;
    }
    :host([size="extra-small"]) .base {
      outline-offset: calc(0px - var(--m3e-button-extra-small-outline-thickness, 1px));
      outline-width: var(--m3e-button-extra-small-outline-thickness, 1px);
    }
    :host([size="small"]) .base {
      outline-offset: calc(0px - var(--m3e-button-small-outline-thickness, 1px));
      outline-width: var(--m3e-button-small-outline-thickness, 1px);
    }
    :host([size="medium"]) .base {
      outline-offset: calc(0px - var(--m3e-button-medium-outline-thickness, 1px));
      outline-width: var(--m3e-button-medium-outline-thickness, 1px);
    }
    :host([size="large"]) .base {
      outline-offset: calc(0px - var(--m3e-button-large-outline-thickness, 2px));
      outline-width: var(--m3e-button-large-outline-thickness, 2px);
    }
    :host([size="extra-large"]) .base {
      outline-offset: calc(0px - var(--m3e-button-extra-large-outline-thickness, 3px));
      outline-width: var(--m3e-button-extra-large-outline-thickness, 3px);
    }
  }
  @media (prefers-reduced-motion) {
    :host(:state(-pressed)) .base,
    :host(:state(-resting)) .base,
    .base,
    .label,
    .icon {
      transition: none;
    }
  }
`;var G={elevated:{labelTextColor:r(`var(--m3e-elevated-button-label-text-color, var(--m3e-button-label-text-color, ${t.color.primary}))`),iconColor:r(`var(--m3e-elevated-button-icon-color, var(--m3e-button-icon-color, ${t.color.primary}))`),containerColor:r(`var(--m3e-elevated-button-container-color, var(--m3e-button-container-color, ${t.color.surfaceContainerLow}))`),containerElevation:r(`var(--m3e-elevated-button-container-elevation, var(--m3e-button-container-elevation, ${t.elevation.level1}))`),unselectedLabelTextColor:r(`var(--m3e-elevated-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${t.color.primary}))`),unselectedIconColor:r(`var(--m3e-elevated-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${t.color.primary}))`),unselectedContainerColor:r(`var(--m3e-elevated-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${t.color.surfaceContainerLow}))`),selectedLabelTextColor:r(`var(--m3e-elevated-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${t.color.onPrimary}))`),selectedIconColor:r(`var(--m3e-elevated-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${t.color.onPrimary}))`),selectedContainerColor:r(`var(--m3e-elevated-button-selected-container-color, var(--m3e-button-selected-container-color, ${t.color.primary}))`),disabled:{containerColor:r(`var(--m3e-elevated-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-elevated-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-elevated-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-elevated-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-elevated-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-elevated-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-elevated-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-elevated-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-elevated-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-elevated-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-elevated-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${t.elevation.level2}))`),unselectedIconColor:r(`var(--m3e-elevated-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${t.color.primary}))`),unselectedLabelTextColor:r(`var(--m3e-elevated-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-elevated-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-elevated-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${t.color.onPrimary}))`),selectedLabelTextColor:r(`var(--m3e-elevated-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-elevated-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${t.color.onPrimary}))`)},focus:{iconColor:r(`var(--m3e-elevated-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-elevated-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-elevated-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-elevated-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${t.elevation.level1}))`),unselectedLabelTextColor:r(`var(--m3e-elevated-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${t.color.primary}))`),unselectedIconColor:r(`var(--m3e-elevated-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-elevated-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-elevated-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${t.color.onPrimary}))`),selectedLabelTextColor:r(`var(--m3e-elevated-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-elevated-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${t.color.onPrimary}))`)},pressed:{iconColor:r(`var(--m3e-elevated-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-elevated-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-elevated-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-elevated-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${t.elevation.level1}))`),unselectedLabelTextColor:r(`var(--m3e-elevated-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${t.color.primary}))`),unselectedIconColor:r(`var(--m3e-elevated-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-elevated-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-elevated-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${t.color.onPrimary}))`),selectedLabelTextColor:r(`var(--m3e-elevated-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-elevated-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${t.color.onPrimary}))`)}},outlined:{labelTextColor:r(`var(--m3e-outlined-button-label-text-color, var(--m3e-button-label-text-color, ${t.color.onSurfaceVariant}))`),iconColor:r(`var(--m3e-outlined-button-icon-color, var(--m3e-button-icon-color, ${t.color.onSurfaceVariant}))`),outlineColor:r(`var(--m3e-outlined-button-outline-color, var(--m3e-button-outline-color, ${t.color.outlineVariant}))`),unselectedLabelTextColor:r(`var(--m3e-outlined-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${t.color.onSurfaceVariant}))`),unselectedIconColor:r(`var(--m3e-outlined-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${t.color.onSurfaceVariant}))`),selectedLabelTextColor:r(`var(--m3e-outlined-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${t.color.inverseOnSurface}))`),selectedIconColor:r(`var(--m3e-outlined-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${t.color.inverseOnSurface}))`),selectedContainerColor:r(`var(--m3e-outlined-button-selected-container-color, var(--m3e-button-selected-container-color, ${t.color.inverseSurface}))`),disabled:{containerColor:r(`var(--m3e-outlined-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-outlined-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-outlined-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-outlined-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-outlined-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-outlined-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"),outlineColor:r(`var(--m3e-outlined-button-disabled-outline-color, var(--m3e-button-disabled-outline-color, ${t.color.outlineVariant}))`)},hover:{iconColor:r(`var(--m3e-outlined-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${t.color.onSurfaceVariant}))`),labelTextColor:r(`var(--m3e-outlined-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${t.color.onSurfaceVariant}))`),outlineColor:r(`var(--m3e-outlined-button-hover-outline-color, var(--m3e-button-hover-outline-color, ${t.color.outlineVariant}))`),stateLayerColor:r(`var(--m3e-outlined-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-outlined-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-outlined-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedLabelTextColor:r(`var(--m3e-outlined-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-outlined-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-outlined-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${t.color.inverseOnSurface}))`),selectedLabelTextColor:r(`var(--m3e-outlined-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${t.color.inverseOnSurface}))`),selectedStateLayerColor:r(`var(--m3e-outlined-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${t.color.inverseOnSurface}))`)},focus:{iconColor:r(`var(--m3e-outlined-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${t.color.onSurfaceVariant}))`),labelTextColor:r(`var(--m3e-outlined-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${t.color.onSurfaceVariant}))`),outlineColor:r(`var(--m3e-outlined-button-focus-outline-color, var(--m3e-button-focus-outline-color, ${t.color.outlineVariant}))`),stateLayerColor:r(`var(--m3e-outlined-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-outlined-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-outlined-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedLabelTextColor:r(`var(--m3e-outlined-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-outlined-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-outlined-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${t.color.inverseOnSurface}))`),selectedLabelTextColor:r(`var(--m3e-outlined-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${t.color.inverseOnSurface}))`),selectedStateLayerColor:r(`var(--m3e-outlined-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${t.color.inverseOnSurface}))`)},pressed:{iconColor:r(`var(--m3e-outlined-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${t.color.onSurfaceVariant}))`),labelTextColor:r(`var(--m3e-outlined-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${t.color.onSurfaceVariant}))`),outlineColor:r(`var(--m3e-outlined-button-pressed-outline-color, var(--m3e-button-pressed-outline-color, ${t.color.outlineVariant}))`),stateLayerColor:r(`var(--m3e-outlined-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-outlined-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-outlined-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedLabelTextColor:r(`var(--m3e-outlined-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-outlined-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-outlined-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${t.color.inverseOnSurface}))`),selectedLabelTextColor:r(`var(--m3e-outlined-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${t.color.inverseOnSurface}))`),selectedStateLayerColor:r(`var(--m3e-outlined-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${t.color.inverseOnSurface}))`)}},filled:{labelTextColor:r(`var(--m3e-filled-button-label-text-color, var(--m3e-button-label-text-color, ${t.color.onPrimary}))`),iconColor:r(`var(--m3e-filled-button-icon-color, var(--m3e-button-icon-color, ${t.color.onPrimary}))`),containerColor:r(`var(--m3e-filled-button-container-color, var(--m3e-button-container-color, ${t.color.primary}))`),containerElevation:r(`var(--m3e-filled-button-container-elevation, var(--m3e-button-container-elevation, ${t.elevation.level0}))`),unselectedLabelTextColor:r(`var(--m3e-filled-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${t.color.onSurfaceVariant}))`),unselectedIconColor:r(`var(--m3e-filled-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedContainerColor:r(`var(--m3e-filled-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${t.color.surfaceContainer}))`),selectedLabelTextColor:r(`var(--m3e-filled-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${t.color.onPrimary}))`),selectedIconColor:r(`var(--m3e-filled-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${t.color.onPrimary}))`),selectedContainerColor:r(`var(--m3e-filled-button-selected-container-color, var(--m3e-button-selected-container-color, ${t.color.primary}))`),disabled:{containerColor:r(`var(--m3e-filled-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-filled-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-filled-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-filled-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-filled-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-filled-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-filled-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-filled-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${t.color.onPrimary}))`),labelTextColor:r(`var(--m3e-filled-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-filled-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-filled-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-filled-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${t.elevation.level1}))`),unselectedIconColor:r(`var(--m3e-filled-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedLabelTextColor:r(`var(--m3e-filled-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-filled-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-filled-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${t.color.onPrimary}))`),selectedLabelTextColor:r(`var(--m3e-filled-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-filled-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${t.color.onPrimary}))`)},focus:{iconColor:r(`var(--m3e-filled-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${t.color.onPrimary}))`),labelTextColor:r(`var(--m3e-filled-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-filled-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-filled-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-filled-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${t.elevation.level0}))`),unselectedIconColor:r(`var(--m3e-filled-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedLabelTextColor:r(`var(--m3e-filled-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-filled-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-filled-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${t.color.onPrimary}))`),selectedLabelTextColor:r(`var(--m3e-filled-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-filled-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${t.color.onPrimary}))`)},pressed:{iconColor:r(`var(--m3e-filled-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${t.color.onPrimary}))`),labelTextColor:r(`var(--m3e-filled-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-filled-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-filled-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-filled-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${t.elevation.level0}))`),unselectedIconColor:r(`var(--m3e-filled-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedLabelTextColor:r(`var(--m3e-filled-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-filled-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-filled-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${t.color.onPrimary}))`),selectedLabelTextColor:r(`var(--m3e-filled-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-filled-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${t.color.onPrimary}))`)}},tonal:{labelTextColor:r(`var(--m3e-tonal-button-label-text-color, var(--m3e-button-label-text-color, ${t.color.onSecondaryContainer}))`),iconColor:r(`var(--m3e-tonal-button-icon-color, var(--m3e-button-icon-color, ${t.color.onSecondaryContainer}))`),containerColor:r(`var(--m3e-tonal-button-container-color, var(--m3e-button-container-color, ${t.color.secondaryContainer}))`),containerElevation:r(`var(--m3e-tonal-button-container-elevation, var(--m3e-button-container-elevation, ${t.elevation.level0}))`),unselectedLabelTextColor:r(`var(--m3e-tonal-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${t.color.onSecondaryContainer}))`),unselectedIconColor:r(`var(--m3e-tonal-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${t.color.onSecondaryContainer}))`),unselectedContainerColor:r(`var(--m3e-tonal-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${t.color.secondaryContainer}))`),selectedLabelTextColor:r(`var(--m3e-tonal-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${t.color.onSecondary}))`),selectedIconColor:r(`var(--m3e-tonal-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${t.color.onSecondary}))`),selectedContainerColor:r(`var(--m3e-tonal-button-selected-container-color, var(--m3e-button-selected-container-color, ${t.color.secondary}))`),disabled:{containerColor:r(`var(--m3e-tonal-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-tonal-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-tonal-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-tonal-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-tonal-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-tonal-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-tonal-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-tonal-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${t.color.onSecondaryContainer}))`),labelTextColor:r(`var(--m3e-tonal-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-tonal-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tonal-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tonal-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${t.elevation.level1}))`),unselectedIconColor:r(`var(--m3e-tonal-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${t.color.onSecondaryContainer}))`),unselectedLabelTextColor:r(`var(--m3e-tonal-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${t.color.onSecondaryContainer}))`),unselectedStateLayerColor:r(`var(--m3e-tonal-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${t.color.onSecondaryContainer}))`),selectedIconColor:r(`var(--m3e-tonal-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${t.color.onSecondary}))`),selectedLabelTextColor:r(`var(--m3e-tonal-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${t.color.onSecondary}))`),selectedStateLayerColor:r(`var(--m3e-tonal-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${t.color.onSecondary}))`)},focus:{iconColor:r(`var(--m3e-tonal-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${t.color.onSecondaryContainer}))`),labelTextColor:r(`var(--m3e-tonal-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-tonal-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tonal-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tonal-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${t.elevation.level0}))`),unselectedIconColor:r(`var(--m3e-tonal-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${t.color.onSecondaryContainer}))`),unselectedLabelTextColor:r(`var(--m3e-tonal-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${t.color.onSecondaryContainer}))`),unselectedStateLayerColor:r(`var(--m3e-tonal-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${t.color.onSecondaryContainer}))`),selectedIconColor:r(`var(--m3e-tonal-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${t.color.onSecondary}))`),selectedLabelTextColor:r(`var(--m3e-tonal-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${t.color.onSecondary}))`),selectedStateLayerColor:r(`var(--m3e-tonal-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${t.color.onSecondary}))`)},pressed:{iconColor:r(`var(--m3e-tonal-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${t.color.onSecondaryContainer}))`),labelTextColor:r(`var(--m3e-tonal-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-tonal-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tonal-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tonal-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${t.elevation.level0}))`),unselectedIconColor:r(`var(--m3e-tonal-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${t.color.onSecondaryContainer}))`),unselectedLabelTextColor:r(`var(--m3e-tonal-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${t.color.onSecondaryContainer}))`),unselectedStateLayerColor:r(`var(--m3e-tonal-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${t.color.onSecondaryContainer}))`),selectedIconColor:r(`var(--m3e-tonal-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${t.color.onSecondary}))`),selectedLabelTextColor:r(`var(--m3e-tonal-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${t.color.onSecondary}))`),selectedStateLayerColor:r(`var(--m3e-tonal-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${t.color.onSecondary}))`)}},text:{labelTextColor:r(`var(--m3e-text-button-label-text-color, var(--m3e-button-label-text-color, ${t.color.primary}))`),iconColor:r(`var(--m3e-text-button-icon-color, var(--m3e-button-icon-color, ${t.color.primary}))`),unselectedLabelTextColor:r(`var(--m3e-text-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${t.color.primary}))`),unselectedIconColor:r(`var(--m3e-text-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${t.color.primary}))`),selectedLabelTextColor:r(`var(--m3e-text-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-text-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${t.color.primary}))`),disabled:{containerColor:r(`var(--m3e-text-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-text-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-text-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-text-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-text-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-text-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))")},hover:{iconColor:r(`var(--m3e-text-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-text-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-text-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-text-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-text-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${t.color.primary}))`),unselectedLabelTextColor:r(`var(--m3e-text-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-text-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-text-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${t.color.primary}))`),selectedLabelTextColor:r(`var(--m3e-text-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${t.color.primary}))`),selectedStateLayerColor:r(`var(--m3e-text-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${t.color.primary}))`)},focus:{iconColor:r(`var(--m3e-text-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-text-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-text-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-text-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-text-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${t.color.primary}))`),unselectedLabelTextColor:r(`var(--m3e-text-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-text-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-text-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${t.color.primary}))`),selectedLabelTextColor:r(`var(--m3e-text-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${t.color.primary}))`),selectedStateLayerColor:r(`var(--m3e-text-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${t.color.primary}))`)},pressed:{iconColor:r(`var(--m3e-text-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-text-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-text-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-text-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-text-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${t.color.primary}))`),unselectedLabelTextColor:r(`var(--m3e-text-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-text-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-text-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${t.color.primary}))`),selectedLabelTextColor:r(`var(--m3e-text-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${t.color.primary}))`),selectedStateLayerColor:r(`var(--m3e-text-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${t.color.primary}))`)}}};function Kl(o){return b`
    :host([variant="${r(o)}"]:not(:disabled):not([disabled-interactive])) .base {
      background-color: ${G[o].containerColor??r("unset")};
      --m3e-state-layer-hover-color: ${G[o].hover.stateLayerColor};
      --m3e-state-layer-hover-opacity: ${G[o].hover.stateLayerOpacity};
      --m3e-state-layer-focus-color: ${G[o].focus.stateLayerColor};
      --m3e-state-layer-focus-opacity: ${G[o].focus.stateLayerOpacity};
      --m3e-ripple-color: ${G[o].pressed.stateLayerColor};
      --m3e-ripple-opacity: ${G[o].pressed.stateLayerOpacity};
      --m3e-elevation-level: ${G[o].containerElevation??r("unset")};
      --m3e-elevation-hover-level: ${G[o].hover.containerElevation??r("unset")};
      --m3e-elevation-focus-level: ${G[o].focus.containerElevation??r("unset")};
      --m3e-elevation-pressed-level: ${G[o].pressed.containerElevation??r("unset")};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .base {
      background-color: ${G[o].unselectedContainerColor??r("unset")};
      --m3e-state-layer-hover-color: ${G[o].hover.unselectedStateLayerColor};
      --m3e-state-layer-focus-color: ${G[o].focus.unselectedStateLayerColor};
      --m3e-ripple-color: ${G[o].pressed.unselectedStateLayerColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .base {
      background-color: ${G[o].selectedContainerColor??r("unset")};
      --m3e-state-layer-hover-color: ${G[o].hover.selectedStateLayerColor};
      --m3e-state-layer-focus-color: ${G[o].focus.selectedStateLayerColor};
      --m3e-ripple-color: ${G[o].pressed.selectedStateLayerColor};
    }
    :host([variant="${r(o)}"]:not(:disabled):not([disabled-interactive])) .base {
      outline-color: ${G[o].outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]:focus:not(:disabled):not([disabled-interactive])) .base {
      outline-color: ${G[o].focus.outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]:hover:not(:disabled):not([disabled-interactive])) .base {
      outline-color: ${G[o].hover.outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]:state(-pressed):not(:disabled):not([disabled-interactive])) .base {
      outline-color: ${G[o].pressed.outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]:not(:disabled):not([disabled-interactive])) .label {
      color: ${G[o].labelTextColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .label {
      color: ${G[o].unselectedLabelTextColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .label {
      color: ${G[o].selectedLabelTextColor};
    }
    :host([variant="${r(o)}"]:focus:not(:disabled):not([disabled-interactive])) .label {
      color: ${G[o].focus.labelTextColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive]))
      .label {
      color: ${G[o].focus.unselectedLabelTextColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .label {
      color: ${G[o].focus.selectedLabelTextColor};
    }
    :host([variant="${r(o)}"]:hover:not(:disabled):not([disabled-interactive])) .label {
      color: ${G[o].hover.labelTextColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive]))
      .label {
      color: ${G[o].hover.unselectedLabelTextColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .label {
      color: ${G[o].hover.selectedLabelTextColor};
    }
    :host([variant="${r(o)}"]:state(-pressed):not(:disabled):not([disabled-interactive])) .label {
      color: ${G[o].pressed.labelTextColor};
    }
    :host(
        [variant="${r(o)}"][toggle]:not([selected]):state(-pressed):not(:disabled):not(
            [disabled-interactive]
          )
      )
      .label {
      color: ${G[o].pressed.unselectedLabelTextColor};
    }
    :host(
        [variant="${r(o)}"][toggle][selected]:state(-pressed):not(:disabled):not([disabled-interactive])
      )
      .label {
      color: ${G[o].pressed.selectedLabelTextColor};
    }
    :host([variant="${r(o)}"]:not(:disabled):not([disabled-interactive])) .icon {
      color: ${G[o].iconColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .icon {
      color: ${G[o].unselectedIconColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .icon {
      color: ${G[o].selectedIconColor};
    }
    :host([variant="${r(o)}"]:focus:not(:disabled):not([disabled-interactive])) .icon {
      color: ${G[o].focus.iconColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive]))
      .icon {
      color: ${G[o].focus.unselectedIconColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .icon {
      color: ${G[o].focus.selectedIconColor};
    }
    :host([variant="${r(o)}"]:hover:not(:disabled):not([disabled-interactive])) .icon {
      color: ${G[o].hover.iconColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive]))
      .icon {
      color: ${G[o].hover.unselectedIconColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .icon {
      color: ${G[o].hover.selectedIconColor};
    }
    :host([variant="${r(o)}"]:state(-pressed):not(:disabled):not([disabled-interactive])) .icon {
      color: ${G[o].pressed.iconColor};
    }
    :host(
        [variant="${r(o)}"][toggle]:not([selected]):state(-pressed):not(:disabled):not(
            [disabled-interactive]
          )
      )
      .icon {
      color: ${G[o].pressed.unselectedIconColor};
    }
    :host(
        [variant="${r(o)}"][toggle][selected]:state(-pressed):not(:disabled):not([disabled-interactive])
      )
      .icon {
      color: ${G[o].pressed.selectedIconColor};
    }
    :host([variant="${r(o)}"]:disabled) .base,
    :host([variant="${r(o)}"][disabled-interactive]) .base {
      --m3e-elevation-level: ${G[o].disabled.containerElevation??r("unset")};
      outline-color: ${G[o].disabled.outlineColor??r("unset")};
      background-color: color-mix(
        in srgb,
        ${G[o].disabled.containerColor} ${G[o].disabled.containerOpacity},
        transparent
      );
    }
    :host([variant="${r(o)}"]:disabled) .label,
    :host([variant="${r(o)}"][disabled-interactive]) .label {
      color: color-mix(
        in srgb,
        ${G[o].disabled.labelTextColor} ${G[o].disabled.labelTextOpacity},
        transparent
      );
    }
    :host([variant="${r(o)}"]:disabled) .icon,
    :host([variant="${r(o)}"][disabled-interactive]) .icon {
      color: color-mix(
        in srgb,
        ${G[o].disabled.iconColor} ${G[o].disabled.iconOpacity},
        transparent
      );
    }
  `}var Ab=[Kl("text"),Kl("elevated"),Kl("outlined"),Kl("filled"),Kl("tonal"),b`
    :host([variant="outlined"]:not([toggle][selected]):not(:disabled):not([disabled-interactive])) .base {
      outline-style: solid;
    }
  `];var Zl,Po,_b,Ib,xp,vm,Ct=class extends de(Fe(Go(ae(gt(N(D(M(k,"button"),!0))))))){constructor(){super();m(this,Po);m(this,Zl,e=>c(this,Po,_b).call(this,e));this.variant="text";this.shape="rounded";this.size="small";this.toggle=!1;this.selected=!1;new Le(this,{callback:()=>{this.grouped&&this._handleResize()}}),new ze(this,{callback:e=>{!this.disabledInteractive&&!e&&!this.grouped&&this._base?.style.removeProperty("--_button-shape")}}),new ue(this,{isPressedKey:e=>e===" ",minPressedDuration:150,callback:e=>{!this.disabled&&!this.disabledInteractive&&(e?(c(this,Po,xp).call(this),Me()?c(this,Po,vm).call(this,!0):requestAnimationFrame(()=>c(this,Po,vm).call(this,!0))):c(this,Po,vm).call(this,!1))}})}get grouped(){return bt(this,"-grouped")}render(){return f`<div class="base">
      <m3e-elevation class="elevation" ?disabled="${this.disabled||this.disabledInteractive}"></m3e-elevation>
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled||this.disabledInteractive}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled||this.disabledInteractive}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      ${this[st]()}
      <div class="wrapper">
        ${this.toggle?f`<slot
              class="icon"
              name="selected-icon"
              aria-hidden="true"
              @slotchange="${c(this,Po,Ib)}"
            ></slot>`:R}
        <slot class="icon" name="icon" aria-hidden="true"></slot>
        <div class="label">
          ${this.toggle&&this.selected?f`<slot name="selected"><slot></slot></slot>`:f`<slot></slot>`}
        </div>
        <slot class="icon" name="trailing-icon" aria-hidden="true"></slot>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,Zl))}disconnectedCallback(){super.disconnectedCallback(),["-pressed","-resting","-grouped","-connected"].forEach(e=>xe(this,e)),this._base?.style.removeProperty("--_button-shape"),this.style.removeProperty("--_button-width"),this.style.removeProperty("--_adjacent-button-width"),xe(this,"-adjacent-pressed"),this.removeEventListener("click",s(this,Zl))}firstUpdated(e){super.firstUpdated(e),[this._elevation,this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}updated(e){if(super.updated(e),(e.has("disabled")&&this.disabled||e.has("disabledInteractive")&&this.disabledInteractive)&&(xe(this,"-pressed"),xe(this,"-resting")),(e.has("toggle")||e.has("selected"))&&(this.ariaPressed=this.toggle?`${this.selected}`:null,this.toggle))for(let i of this.querySelectorAll("m3e-icon"))i.toggleAttribute("filled",this.selected)}_handleResize(){this.grouped&&!bt(this,"-pressed")&&(this.style.setProperty("--_button-width",`${this.clientWidth}px`),c(this,Po,xp).call(this,!0))}};Zl=new WeakMap,Po=new WeakSet,_b=function(e){(this.disabled||this.disabledInteractive)&&(e.preventDefault(),e.stopImmediatePropagation()),this.toggle&&!e.defaultPrevented&&(this.selected=!this.selected,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?this.dispatchEvent(new Event("change",{bubbles:!0})):this.selected=!this.selected)},Ib=function(e){this._base?.classList.toggle("with-selected-icon",J(e.target))},xp=function(e=!1){if(!this._base)return;let i=parseFloat(getComputedStyle(this._base).borderRadius);if(!isNaN(i)||e){let n=this.clientHeight/2;(n<i||e)&&this._base?.style.setProperty("--_button-shape",`${n}px`)}},vm=function(e){le(this,"-pressed",e),le(this,"-resting",!e);let i=this.closest("m3e-button-group");if(i){let n=this.getBoundingClientRect().width,l=[...i.querySelectorAll("m3e-button,m3e-icon-button")],h=l.indexOf(this);for(let u=0;u<l.length;u++){let v=l[u];u===h-1?(v.style.setProperty("--_adjacent-button-width",`${n}px`),le(v,"-adjacent-pressed",e)):u===h+1?(v.style.setProperty("--_adjacent-button-width",`${n}px`),le(v,"-adjacent-pressed",e)):(v.style.removeProperty("--_adjacent-button-width"),xe(v,"-adjacent-pressed"))}}},Ct.styles=[Hb,Ab,Rb],d([L(".base")],Ct.prototype,"_base",2),d([L(".elevation")],Ct.prototype,"_elevation",2),d([L(".focus-ring")],Ct.prototype,"_focusRing",2),d([L(".state-layer")],Ct.prototype,"_stateLayer",2),d([L(".ripple")],Ct.prototype,"_ripple",2),d([p({reflect:!0})],Ct.prototype,"variant",2),d([p({reflect:!0})],Ct.prototype,"shape",2),d([p({reflect:!0})],Ct.prototype,"size",2),d([p({type:Boolean,reflect:!0})],Ct.prototype,"toggle",2),d([p({type:Boolean,reflect:!0})],Ct.prototype,"selected",2),d([Ft(40)],Ct.prototype,"_handleResize",1),Ct=d([y("m3e-button")],Ct);var Un,Na,Cp,zb,Ur=class extends M(k,"group"){constructor(){super(...arguments);m(this,Na);m(this,Un,new ue(this,{target:null,capture:!0,minPressedDuration:150,isPressedKey:e=>e===" ",callback:e=>{this._base&&(!e||this.variant==="connected"?(this._base.style.removeProperty("--_button-group-width"),this._base.classList.remove("pressed")):(this._base.classList.add("pressed"),this._base.style.setProperty("--_button-group-width",`${this._base.getBoundingClientRect().width}px`)))}}));this.variant="standard";this.size="small";this.multi=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("disable-role")&&(this.role=null)}disconnectedCallback(){super.disconnectedCallback(),this._base?.style.removeProperty("--_button-group-width"),this._base?.classList.remove("pressed")}update(e){super.update(e),(e.has("multi")||e.has("variant"))&&c(this,Na,Cp).call(this),e.has("variant")&&this._base?.style.removeProperty("--_button-group-width")}render(){return f`<div class="base">
      <slot @slotchange="${c(this,Na,Cp)}" @change="${c(this,Na,zb)}"></slot>
    </div>`}};Un=new WeakMap,Na=new WeakSet,Cp=function(){let e=this.buttons;for(let l of s(this,Un).targets)s(this,Un).unobserve(l);let i=[...e].some(l=>l.toggle);this.hasAttribute("disable-role")||(this.role=i&&!this.multi?"radiogroup":"group");let n=this.role==="radiogroup"?"radio":"button";e.forEach((l,h)=>{if(s(this,Un).observe(l),le(l,"-connected",this.variant==="connected"),Mt(l,"-grouped"),le(l,"-first",h==0),le(l,"-last",h==e.length-1),!this.hasAttribute("disable-role")&&l.role!==n&&l.toggle){let u=l.toggle?l.selected?"true":"false":null;l.role=n,l.role==="button"?(l.ariaPressed=u,l.ariaChecked=null):(l.ariaChecked=u,l.ariaPressed=null)}})},zb=function(e){if(!(this.multi||!(e.target instanceof HTMLElement))&&(e.target.tagName==="M3E-BUTTON"||e.target.tagName==="M3E-ICON-BUTTON")){if(!tl(e.target)||!e.target.selected)return;for(let i of this.buttons)i===e.target||!i.selected||(i.selected=!1)}},Ur.styles=b`
    :host {
      display: flex;
      vertical-align: middle;
      flex-wrap: nowrap;
      align-items: center;
    }
    .base {
      display: flex;
      vertical-align: middle;
      flex-wrap: nowrap;
      align-items: center;
    }
    :host([variant="standard"]) {
      justify-content: center;
    }
    :host([variant="connected"]) .base {
      flex: 1 1 auto;
    }
    :host([variant="standard"]) .base {
      width: fit-content;
      flex: none;
    }
    :host([variant="standard"]) .base.pressed {
      justify-content: space-between;
      width: var(--_button-group-width);
    }
    :host([variant="standard"][size="extra-small"]) .base {
      column-gap: var(--m3e-standard-button-group-extra-small-spacing, 1.125rem);
    }
    :host([variant="standard"][size="small"]) .base {
      column-gap: var(--m3e-standard-button-group-small-spacing, 0.75rem);
    }
    :host([variant="standard"][size="medium"]).base {
      column-gap: var(--m3e-standard-button-group-medium-spacing, 0.5rem);
    }
    :host([variant="standard"][size="large"]) .base {
      column-gap: var(--m3e-standard-button-group-large-spacing, 0.5rem);
    }
    :host([variant="standard"][size="extra-large"]) .base {
      column-gap: var(--m3e-standard-button-group-extra-large-spacing, 0.5rem);
    }
    :host([variant="connected"]) .base {
      column-gap: var(--m3e-connected-button-group-spacing, 0.125rem);
    }
    :host([variant="connected"][size="extra-small"]) ::slotted(:state(-first)[size="extra-small"]),
    :host([variant="connected"][size="extra-small"])
      ::slotted(:not(:state(-first)):not(:state(-last))[size="extra-small"]) {
      --_button-rounded-end-shape: var(
        --m3e-connected-button-group-extra-small-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-end-shape: var(
        --m3e-connected-button-group-extra-small-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-end-pressed-shape: var(
        --m3e-connected-button-group-extra-small-inner-pressed-shape,
        ${t.shape.corner.extraSmall}
      );
    }
    :host([variant="connected"][size="extra-small"]) ::slotted(:state(-last)[size="extra-small"]),
    :host([variant="connected"][size="extra-small"])
      ::slotted(:not(:state(-first)):not(:state(-last))[size="extra-small"]) {
      --_button-rounded-start-shape: var(
        --m3e-connected-button-group-extra-small-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-start-shape: var(
        --m3e-connected-button-group-extra-small-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-start-pressed-shape: var(
        --m3e-connected-button-group-extra-small-inner-pressed-shape,
        ${t.shape.corner.extraSmall}
      );
    }
    :host([variant="connected"][size="small"]) ::slotted(:state(-first)[size="small"]),
    :host([variant="connected"][size="small"]) ::slotted(:not(:state(-first)):not(:state(-last))[size="small"]) {
      --_button-rounded-end-shape: var(
        --m3e-connected-button-group-small-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-end-shape: var(
        --m3e-connected-button-group-small-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-end-shape-pressed-morph: var(
        --m3e-connected-button-group-small-inner-pressed-shape,
        ${t.shape.corner.extraSmall}
      );
    }
    :host([variant="connected"][size="small"]) ::slotted(:state(-last)[size="small"]),
    :host([variant="connected"][size="small"]) ::slotted(:not(:state(-first)):not(:state(-last))[size="small"]) {
      --_button-rounded-start-shape: var(
        --m3e-connected-button-group-small-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-start-shape: var(
        --m3e-connected-button-group-small-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-start-shape-pressed-morph: var(
        --m3e-connected-button-group-small-inner-pressed-shape,
        ${t.shape.corner.extraSmall}
      );
    }
    :host([variant="connected"][size="medium"]) ::slotted(:state(-first)[size="medium"]),
    :host([variant="connected"][size="medium"]) ::slotted(:not(:state(-first)):not(:state(-last))[size="medium"]) {
      --_button-rounded-end-shape: var(
        --m3e-connected-button-group-medium-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-end-shape: var(
        --m3e-connected-button-group-medium-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-end-pressed-shape: var(
        --m3e-connected-button-group-medium-inner-pressed-shape,
        ${t.shape.corner.extraSmall}
      );
    }
    :host([variant="connected"][size="medium"]) ::slotted(:state(-last)[size="medium"]),
    :host([variant="connected"][size="medium"]) ::slotted(:not(:state(-first)):not(:state(-last))[size="medium"]) {
      --_button-rounded-start-shape: var(
        --m3e-connected-button-group-medium-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-start-shape: var(
        --m3e-connected-button-group-medium-inner-shape,
        ${t.shape.corner.small}
      );
      --_button-square-start-pressed-shape: var(
        --m3e-connected-button-group-medium-inner-pressed-shape,
        ${t.shape.corner.extraSmall}
      );
    }
    :host([variant="connected"][size="large"]) ::slotted(:state(-first)[size="large"]),
    :host([variant="connected"][size="large"]) ::slotted(:not(:state(-first)):not(:state(-last))[size="large"]) {
      --_button-rounded-end-shape: var(
        --m3e-connected-button-group-large-inner-shape,
        ${t.shape.corner.large}
      );
      --_button-square-end-shape: var(
        --m3e-connected-button-group-large-inner-shape,
        ${t.shape.corner.large}
      );
      --_button-square-end-pressed-shape: var(
        --m3e-connected-button-group-large-inner-pressed-shape,
        ${t.shape.corner.medium}
      );
    }
    :host([variant="connected"][size="large"]) ::slotted(:state(-last)[size="large"]),
    :host([variant="connected"][size="large"]) ::slotted(:not(:state(-first)):not(:state(-last))[size="large"]) {
      --_button-rounded-start-shape: var(
        --m3e-connected-button-group-large-inner-shape,
        ${t.shape.corner.large}
      );
      --_button-square-start-shape: var(
        --m3e-connected-button-group-large-inner-shape,
        ${t.shape.corner.large}
      );
      --_button-square-start-pressed-shape: var(
        --m3e-connected-button-group-large-inner-pressed-shape,
        ${t.shape.corner.medium}
      );
    }
    :host([variant="connected"][size="extra-large"]) ::slotted(:state(-first)[size="extra-large"]),
    :host([variant="connected"][size="extra-large"])
      ::slotted(:not(:state(-first)):not(:state(-last))[size="extra-large"]) {
      --_button-rounded-end-shape: var(
        --m3e-connected-button-group-extra-large-inner-shape,
        ${t.shape.corner.largeIncreased}
      );
      --_button-square-end-shape: var(
        --m3e-connected-button-group-extra-large-inner-shape,
        ${t.shape.corner.largeIncreased}
      );
      --_button-square-end-pressed-shape: var(
        --m3e-connected-button-group-extra-large-inner-pressed-shape,
        ${t.shape.corner.large}
      );
    }
    :host([variant="connected"][size="extra-large"]) ::slotted(:state(-last)[size="extra-large"]),
    :host([variant="connected"][size="extra-large"])
      ::slotted(:not(:state(-first)):not(:state(-last))[size="extra-large"]) {
      --_button-rounded-start-shape: var(
        --m3e-connected-button-group-extra-large-inner-shape,
        ${t.shape.corner.largeIncreased}
      );
      --_button-square-start-shape: var(
        --m3e-connected-button-group-extra-large-inner-shape,
        ${t.shape.corner.largeIncreased}
      );
      --_button-square-start-pressed-shape: var(
        --m3e-connected-button-group-extra-large-inner-pressed-shape,
        ${t.shape.corner.large}
      );
    }
  `,d([L(".base")],Ur.prototype,"_base",2),d([p({reflect:!0})],Ur.prototype,"variant",2),d([p({reflect:!0})],Ur.prototype,"size",2),d([p({type:Boolean})],Ur.prototype,"multi",2),d([Av({slot:"",selector:"m3e-button,m3e-icon-button",flatten:!0})],Ur.prototype,"buttons",2),Ur=d([y("m3e-button-group")],Ur);var lt={padding:r("var(--m3e-card-padding, 1rem)"),shape:r(`var(--m3e-card-shape, ${t.shape.corner.medium});`)};var ne={filled:{textColor:r(`var(--m3e-filled-card-text-color, var(--m3e-card-text-color, ${t.color.onSurface}))`),containerColor:r(`var(--m3e-filled-card-container-color, var(--m3e-card-container-color, ${t.color.surfaceContainerHighest}))`),containerElevation:r(`var(--m3e-filled-card-container-elevation, var(--m3e-card-container-elevation, ${t.elevation.level0}))`),disabled:{textColor:r(`var(--m3e-filled-card-disabled-text-color, var(--m3e-card-disabled-text-color, ${t.color.onSurface}))`),textOpacity:r("var(--m3e-filled-card-disabled-text-opacity, var(--m3e-card-disabled-text-opacity, 38%))"),imageOpacity:r("var(--m3e-filled-card-disabled-image-opacity, var(--m3e-card-disabled-image-opacity, 38%))"),containerColor:r(`var(--m3e-filled-card-disabled-container-color, var(--m3e-card-disabled-container-color, ${t.color.surfaceVariant}))`),containerElevation:r(`var(--m3e-filled-card-disabled-container-elevation, var(--m3e-card-disabled-container-elevation, ${t.elevation.level0}))`),containerElevationColor:r(`var(--m3e-filled-card-disabled-container-elevation-color, var(--m3e-card-disabled-container-elevation-color, ${t.color.onSurface}))`),containerElevationOpacity:r("var(--m3e-filled-card-disabled-container-elevation-opacity, var(--m3e-card-disabled-container-elevation-opacity, 38%))"),containerOpacity:r("var(--m3e-filled-card-disabled-container-opacity, var(--m3e-card-disabled-container-opacity, 38%))")},hover:{textColor:r(`var(--m3e-filled-card-hover-text-color, var(--m3e-card-hover-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-filled-card-hover-state-layer-color, var(--m3e-card-hover-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-filled-card-hover-state-layer-opacity, var(--m3e-card-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-filled-card-hover-container-elevation, var(--m3e-card-hover-container-elevation, ${t.elevation.level1}))`)},focus:{textColor:r(`var(--m3e-filled-card-focus-text-color, var(--m3e-card-focus-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-filled-card-focus-state-layer-color, var(--m3e-card-focus-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-filled-card-focus-state-layer-opacity, var(--m3e-card-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-filled-card-focus-container-elevation, var(--m3e-card-focus-container-elevation, ${t.elevation.level0}))`)},pressed:{textColor:r(`var(--m3e-filled-card-pressed-text-color, var(--m3e-card-pressed-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-filled-card-pressed-state-layer-color, var(--m3e-card-pressed-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-filled-card-pressed-state-layer-opacity, var(--m3e-card-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-filled-card-pressed-container-elevation, var(--m3e-card-pressed-container-elevation, ${t.elevation.level0}))`)}},elevated:{textColor:r(`var(--m3e-elevated-card-text-color, var(--m3e-card-text-color, ${t.color.onSurface}))`),containerColor:r(`var(--m3e-elevated-card-container-color, var(--m3e-card-container-color, ${t.color.surfaceContainerLow}))`),containerElevation:r(`var(--m3e-elevated-card-container-elevation, var(--m3e-card-container-elevation, ${t.elevation.level1}))`),disabled:{textColor:r(`var(--m3e-elevated-card-disabled-text-color, var(--m3e-card-disabled-text-color, ${t.color.onSurface}))`),textOpacity:r("var(--m3e-elevated-card-disabled-text-opacity, var(--m3e-card-disabled-text-opacity, 38%))"),imageOpacity:r("var(--m3e-elevated-card-disabled-image-opacity, var(--m3e-card-disabled-image-opacity, 38%))"),containerColor:r(`var(--m3e-elevated-card-disabled-container-color, var(--m3e-card-disabled-container-color, ${t.color.surface}))`),containerElevation:r(`var(--m3e-elevated-card-disabled-container-elevation, var(--m3e-card-disabled-container-elevation, ${t.elevation.level1}))`),containerElevationColor:r(`var(--m3e-elevated-card-disabled-container-elevation-color, var(--m3e-card-disabled-container-elevation-color, ${t.color.onSurface}))`),containerElevationOpacity:r("var(--m3e-elevated-card-disabled-container-elevation-opacity, var(--m3e-card-disabled-container-elevation-opacity, 38%))"),containerOpacity:r("var(--m3e-elevated-card-disabled-container-opacity, var(--m3e-card-disabled-container-opacity, 38%))")},hover:{textColor:r(`var(--m3e-elevated-card-hover-text-color, var(--m3e-card-hover-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-elevated-card-hover-state-layer-color, var(--m3e-card-hover-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-elevated-card-hover-state-layer-opacity, var(--m3e-card-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-card-hover-container-elevation, var(--m3e-card-hover-container-elevation, ${t.elevation.level2}))`)},focus:{textColor:r(`var(--m3e-elevated-card-focus-text-color, var(--m3e-card-focus-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-elevated-card-focus-state-layer-color, var(--m3e-card-focus-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-elevated-card-focus-state-layer-opacity, var(--m3e-card-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-card-focus-container-elevation, var(--m3e-card-focus-container-elevation, ${t.elevation.level1}))`)},pressed:{textColor:r(`var(--m3e-elevated-card-pressed-text-color, var(--m3e-card-pressed-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-elevated-card-pressed-state-layer-color, var(--m3e-card-pressed-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-elevated-card-pressed-state-layer-opacity, var(--m3e-card-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-card-pressed-container-elevation, var(--m3e-card-pressed-container-elevation, ${t.elevation.level1}))`)}},outlined:{textColor:r(`var(--m3e-outlined-card-text-color, var(--m3e-card-text-color, ${t.color.onSurface}))`),containerElevation:r(`var(--m3e-outlined-card-container-elevation, var(--m3e-card-container-elevation, ${t.elevation.level0}))`),outlineColor:r(`var(--m3e-outlined-card-outline-color, var(--m3e-card-outline-color, ${t.color.outlineVariant}))`),outlineThickness:r("var(--m3e-outlined-card-outline-thickness, var(--m3e-card-outline-thickness, 1px))"),disabled:{textColor:r(`var(--m3e-outlined-card-disabled-text-color, var(--m3e-card-disabled-text-color, ${t.color.onSurface}))`),textOpacity:r("var(--m3e-outlined-card-disabled-text-opacity, var(--m3e-card-disabled-text-opacity, 38%))"),imageOpacity:r("var(--m3e-outlined-card-disabled-image-opacity, var(--m3e-card-disabled-image-opacity, 38%))"),containerElevation:r(`var(--m3e-outlined-card-disabled-container-elevation, var(--m3e-card-disabled-container-elevation, ${t.elevation.level0}))`),containerElevationColor:r(`var(--m3e-outlined-card-disabled-container-elevation-color, var(--m3e-card-disabled-container-elevation-color, ${t.color.onSurface}))`),containerElevationOpacity:r("var(--m3e-outlined-card-disabled-container-elevation-opacity, var(--m3e-card-disabled-container-elevation-opacity, 38%))"),outlineColor:r(`var(--m3e-outlined-card-disabled-outline-color, var(--m3e-card-disabled-outline-color, ${t.color.outline}))`),outlineOpacity:r("var(--m3e-outlined-card-disabled-outline-opacity, var(--m3e-card-disabled-outline-opacity, 12%))")},hover:{textColor:r(`var(--m3e-outlined-card-hover-text-color, var(--m3e-card-hover-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-outlined-card-hover-state-layer-color, var(--m3e-card-hover-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-outlined-card-hover-state-layer-opacity, var(--m3e-card-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-outlined-card-hover-container-elevation, var(--m3e-card-hover-container-elevation, ${t.elevation.level1}))`),outlineColor:r(`var(--m3e-outlined-card-hover-outline-color, var(--m3e-card-hover-outline-color, ${t.color.outlineVariant}))`)},focus:{textColor:r(`var(--m3e-outlined-card-focus-text-color, var(--m3e-card-focus-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-outlined-card-focus-state-layer-color, var(--m3e-card-focus-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-outlined-card-focus-state-layer-opacity, var(--m3e-card-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-outlined-card-focus-container-elevation, var(--m3e-card-focus-container-elevation, ${t.elevation.level0}))`),outlineColor:r(`var(--m3e-outlined-card-focus-outline-color, var(--m3e-card-focus-outline-color, ${t.color.onSurface}))`)},pressed:{textColor:r(`var(--m3e-outlined-card-pressed-text-color, var(--m3e-card-pressed-text-color, ${t.color.onSurface}))`),stateLayerColor:r(`var(--m3e-outlined-card-pressed-state-layer-color, var(--m3e-card-pressed-state-layer-color, ${t.color.onSurface}))`),stateLayerOpacity:r(`var(--m3e-outlined-card-pressed-state-layer-opacity, var(--m3e-card-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-outlined-card-pressed-container-elevation, var(--m3e-card-pressed-container-elevation, ${t.elevation.level0}))`),outlineColor:r(`var(--m3e-outlined-card-pressed-outline-color, var(--m3e-card-pressed-outline-color, ${t.color.outlineVariant}))`)}}};var Ob=b`
  :host {
    outline: none;
  }
  :host(:not([inline])) {
    display: block;
  }
  :host(:not([inline])) .base {
    display: flex;
  }
  :host([inline]) {
    display: inline-block;
    vertical-align: middle;
  }
  :host([inline]) .base {
    display: inline-flex;
  }
  .base {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    border-radius: ${lt.shape};
    transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard},
      border-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  :host([actionable]) {
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  :host([actionable]:not(:disabled):not([disabled-interactive])) {
    cursor: pointer;
  }
  :host([actionable][disabled-interactive]) {
    cursor: not-allowed;
  }
  :host(:not([actionable])) .focus-ring,
  :host(:not([actionable])) .state-layer,
  :host(:not([actionable])) .ripple {
    display: none;
  }
  :host([variant="outlined"]) .base {
    border-style: solid;
  }
  ::slotted([slot="content"]) {
    flex: 1 1 auto;
  }
  ::slotted(img),
  ::slotted(video) {
    inset: 0;
    object-fit: cover;
  }
  ::slotted(img[slot="header"]),
  ::slotted(video[slot="header"]) {
    border-radius: ${lt.shape};
  }
  ::slotted([slot="actions"][end]) {
    justify-content: flex-end;
  }
  ::slotted([slot="header"]),
  ::slotted([slot="actions"]),
  ::slotted([slot="footer"]) {
    flex: none;
    display: flex;
    align-items: center;
  }
  :host([orientation="vertical"]) .base,
  :host([orientation="horizontal"]) ::slotted([slot="header"]),
  :host([orientation="horizontal"]) ::slotted([slot="actions"]),
  :host([orientation="horizontal"]) ::slotted([slot="footer"]) {
    flex-direction: column;
  }
  :host([orientation="horizontal"]) .base,
  :host([orientation="vertical"]) ::slotted([slot="header"]),
  :host([orientation="vertical"]) ::slotted([slot="actions"]),
  :host([orientation="vertical"]) ::slotted([slot="footer"]) {
    flex-direction: row;
  }
  :host([orientation="horizontal"]) ::slotted(img),
  :host([orientation="horizontal"]) ::slotted(video) {
    aspect-ratio: 16 / 9;
  }
  .has-content:not(.has-default) slot[name="content"],
  .has-content.has-default slot:not([name]) {
    display: inherit;
    flex-direction: inherit;
    flex: 1 1 auto;
  }
  .has-header slot[name="header"],
  .has-actions slot[name="actions"],
  .has-footer slot[name="footer"] {
    display: inherit;
    flex-direction: inherit;
    flex: none;
  }
  :host([orientation="vertical"]) .has-content:not(.has-default) slot[name="content"] {
    margin-inline: ${lt.padding};
  }
  :host([orientation="vertical"]) .has-content:not(.has-default):not(.has-header) slot[name="content"] {
    margin-block-start: ${lt.padding};
  }
  :host([orientation="vertical"])
    .has-content:not(.has-default):not(.has-actions):not(.has-footer)
    slot[name="content"] {
    margin-block-end: ${lt.padding};
  }
  :host([orientation="horizontal"]) .has-content:not(.has-default) slot[name="content"] {
    margin-block: ${lt.padding};
  }
  :host([orientation="horizontal"]) .has-content:not(.has-default):not(.has-header) slot[name="content"] {
    margin-inline-start: ${lt.padding};
  }
  :host([orientation="horizontal"])
    .has-content:not(.has-default):not(.has-actions):not(.has-footer)
    slot[name="content"] {
    margin-inline-end: ${lt.padding};
  }
  :host([orientation="vertical"]) .has-header:not(.has-header-media) slot[name="header"] {
    margin-inline: ${lt.padding};
    margin-block-start: ${lt.padding};
  }
  :host([orientation="horizontal"]) .has-header:not(.has-header-media) slot[name="header"] {
    margin-inline-start: ${lt.padding};
    margin-block: ${lt.padding};
  }
  .has-actions slot[name="actions"] {
    margin-inline: ${lt.padding};
    margin-block: ${lt.padding};
  }
  :host([orientation="vertical"]) .has-footer slot[name="footer"] {
    margin-inline: ${lt.padding};
    margin-block-end: ${lt.padding};
  }
  :host([orientation="horizontal"]) .has-footer slot[name="footer"] {
    margin-block: ${lt.padding};
    margin-inline-end: ${lt.padding};
  }
  a {
    all: unset;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
  }
  @media (forced-colors: active) {
    .base {
      transition: none;
    }
    :host([variant]) .base {
      border-style: solid;
      border-color: CanvasText;
      border-width: ${ne.outlined.outlineThickness??r("unset")};
    }
    :host([actionable][variant]:disabled) .base,
    :host([actionable][variant][disabled-interactive]) .base {
      color: GrayText;
      border-color: GrayText;
    }
  }
  @media (prefers-reduced-motion) {
    .base {
      transition: none;
    }
  }
`;function $p(o){return b`
    :host([variant="${r(o)}"]) .base {
      background-color: ${ne[o].containerColor??r("unset")};
      box-shadow: ${ne[o].containerElevation??r("unset")};
      border-width: ${ne[o].outlineThickness??r("unset")};
    }
    :host([actionable][variant="${r(o)}"]) .base {
      --m3e-state-layer-hover-color: ${ne[o].hover.stateLayerColor};
      --m3e-state-layer-hover-opacity: ${ne[o].hover.stateLayerOpacity};
      --m3e-state-layer-focus-color: ${ne[o].focus.stateLayerColor};
      --m3e-state-layer-focus-opacity: ${ne[o].focus.stateLayerOpacity};
      --m3e-ripple-color: ${ne[o].pressed.stateLayerColor};
      --m3e-ripple-opacity: ${ne[o].pressed.stateLayerOpacity};
      --m3e-elevation-level: ${ne[o].containerElevation??r("unset")};
      --m3e-elevation-hover-level: ${ne[o].hover.containerElevation??r("unset")};
      --m3e-elevation-focus-level: ${ne[o].focus.containerElevation??r("unset")};
      --m3e-elevation-pressed-level: ${ne[o].pressed.containerElevation??r("unset")};
    }
    :host([variant="${r(o)}"]) .base {
      border-color: ${ne[o].outlineColor??r("unset")};
    }
    :host([actionable][variant="${r(o)}"]:focus .base) {
      border-color: ${ne[o].focus.outlineColor??r("unset")};
    }
    :host([actionable][variant="${r(o)}"]:hover .base) {
      border-color: ${ne[o].hover.outlineColor??r("unset")};
    }
    :host([actionable][variant="${r(o)}"]) .base.pressed {
      border-color: ${ne[o].pressed.outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]) .base {
      color: ${ne[o].textColor??r("unset")};
    }
    :host([actionable][variant="${r(o)}"]:focus) .base {
      color: ${ne[o].focus.textColor??r("unset")};
    }
    :host([actionable][variant="${r(o)}"]:hover) .base {
      color: ${ne[o].hover.textColor??r("unset")};
    }
    :host([actionable][variant="${r(o)}"]) .base.pressed {
      color: ${ne[o].pressed.textColor??r("unset")};
    }
    :host([actionable][variant="${r(o)}"]:disabled) .base,
    :host([actionable][variant="${r(o)}"][disabled-interactive]) .base {
      --m3e-elevation-level: ${ne[o].disabled.containerElevation??r("unset")};
      --m3e-elevation-color: color-mix(
        in srgb,
        ${ne[o].disabled.containerElevationColor}
          ${ne[o].disabled.containerElevationOpacity},
        transparent
      );
      color: color-mix(
        in srgb,
        ${ne[o].disabled.textColor} ${ne[o].disabled.textOpacity},
        transparent
      );
      background-color: ${ne[o].disabled.containerColor&&ne[o].disabled.containerOpacity?r(`color-mix(
        in srgb,
        ${ne[o].disabled.containerColor} ${ne[o].disabled.containerOpacity},
        transparent
      )`):r("unset")};
      border-color: ${ne[o].disabled.outlineColor&&ne[o].disabled.outlineOpacity?r(`color-mix(
        in srgb,
        ${ne[o].disabled.outlineColor} ${ne[o].disabled.outlineOpacity},
        transparent
      )`):r("unset")};
    }
    :host([actionable][variant="${r(o)}"]:disabled) ::slotted(img),
    :host([actionable][variant="${r(o)}"][disabled-interactive]) ::slotted(img),
    :host([actionable][variant="${r(o)}"]:disabled) ::slotted(video),
    :host([actionable][variant="${r(o)}"][disabled-interactive]) ::slotted(video) {
      opacity: ${ne[o].disabled.imageOpacity};
    }
  `}var Db=[$p("filled"),$p("elevated"),$p("outlined")];var Xl,yo,Fb,Vb,Bb,Nb,qb,Wb,go=class extends de(Fe(Go(ae(gt(N(D(k),!0)))))){constructor(){super();m(this,yo);m(this,Xl,e=>c(this,yo,Wb).call(this,e));this.inline=!1;this.actionable=!1;this.variant="filled";this.orientation="vertical";new ue(this,{isPressedKey:e=>e===" ",callback:e=>{this.actionable&&!this.disabled&&!this.disabledInteractive&&this._base?.classList.toggle("pressed",e)}})}connectedCallback(){this.hasAttribute("actionable")&&(this.role="button"),super.connectedCallback(),this.addEventListener("click",s(this,Xl))}disconnectedCallback(){super.disconnectedCallback(),this._base?.classList.toggle("pressed",!1),this.removeEventListener("click",s(this,Xl))}render(){return f`<div class="base">
      <m3e-elevation
        class="elevation"
        ?disabled="${!this.actionable||this.disabled||this.disabledInteractive}"
      ></m3e-elevation>
      <m3e-focus-ring class="focus-ring" ?disabled="${!this.actionable||this.disabled}"></m3e-focus-ring>
      <m3e-state-layer
        class="state-layer"
        ?disabled="${!this.actionable||this.disabled||this.disabledInteractive}"
      ></m3e-state-layer>
      <m3e-ripple
        class="ripple"
        ?disabled="${!this.actionable||this.disabled||this.disabledInteractive}"
      ></m3e-ripple>
      ${this[st]()}
      <slot name="header" @slotchange="${c(this,yo,Fb)}"></slot>
      <slot name="content" @slotchange="${c(this,yo,Vb)}">
        <slot @slotchange="${c(this,yo,Bb)}"></slot>
      </slot>
      <slot name="actions" @slotchange="${c(this,yo,Nb)}"></slot>
      <slot name="footer" @slotchange="${c(this,yo,qb)}"></slot>
    </div>`}firstUpdated(e){super.firstUpdated(e),[this._elevation,this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this)),!this.actionable&&this.hasAttribute("tabindex")&&this.removeAttribute("tabindex")}update(e){super.update(e),!this.actionable&&this.hasAttribute("tabindex")&&this.removeAttribute("tabindex")}};Xl=new WeakMap,yo=new WeakSet,Fb=function(e){let i=e.target.assignedNodes({flatten:!0}),n=this.shadowRoot?.querySelector(".base");n?.classList.toggle("has-header",i.length>0),n?.classList.toggle("has-header-media",i.some(l=>l instanceof HTMLElement&&(l.tagName==="IMG"||l.tagName==="VIDEO")))},Vb=function(){this.shadowRoot?.querySelector(".base")?.classList.toggle("has-content",this.querySelector("[slot='content']")!==null)},Bb=function(e){this.shadowRoot?.querySelector(".base")?.classList.toggle("has-default",J(e.target)&&this.querySelector("[slot='content']")===null)},Nb=function(e){this.shadowRoot?.querySelector(".base")?.classList.toggle("has-actions",J(e.target))},qb=function(e){this.shadowRoot?.querySelector(".base")?.classList.toggle("has-footer",J(e.target))},Wb=function(e){(this.disabled||this.disabledInteractive)&&(e.preventDefault(),e.stopImmediatePropagation())},go.styles=[Db,Ob],d([L(".base")],go.prototype,"_base",2),d([L(".elevation")],go.prototype,"_elevation",2),d([L(".focus-ring")],go.prototype,"_focusRing",2),d([L(".state-layer")],go.prototype,"_stateLayer",2),d([L(".ripple")],go.prototype,"_ripple",2),d([p({type:Boolean})],go.prototype,"inline",2),d([p({type:Boolean})],go.prototype,"actionable",2),d([p({reflect:!0})],go.prototype,"variant",2),d([p({reflect:!0})],go.prototype,"orientation",2),go=d([y("m3e-card")],go);var Yl,Jl,Ql,Gn,Ub,Gb,pi=class extends Bt(Ui(Oe(De(Wi(Ir(Uh(ot(de(ae(N(D(M(k,"checkbox")))),!1))))))))){constructor(){super(...arguments);m(this,Gn);m(this,Yl,e=>c(this,Gn,Gb).call(this,e));m(this,Jl,new et(this,{target:null,callback:e=>{this.disabled||(e?this._stateLayer?.show("hover"):this._stateLayer?.hide("hover"))}}));m(this,Ql,new ue(this,{target:null,minPressedDuration:150,callback:e=>{this.disabled||(e?this._ripple?.show(0,0,!0):this._ripple?.hide())}}));this.value="on"}get[tt](){return this.checked&&!this.disabled&&!this.indeterminate?this.value:null}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,Yl));for(let e of this.labels)s(this,Jl).observe(e),s(this,Ql).observe(e)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,Yl));for(let e of this.labels)s(this,Jl).unobserve(e),s(this,Ql).unobserve(e)}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" centered ?disabled="${this.disabled}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      <div class="wrapper" aria-hidden="true">${c(this,Gn,Ub).call(this)}</div>
    </div>`}};Yl=new WeakMap,Jl=new WeakMap,Ql=new WeakMap,Gn=new WeakSet,Ub=function(){return this.indeterminate?f`<svg viewBox="0 -960 960 960" fill="currentColor">
        <path Required d="M240-440v-80h480v80H240Z" />
      </svg>`:this.checked?f`<svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
      </svg>`:R},Gb=function(e){e.defaultPrevented||(this.checked=!this.checked,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?(this.indeterminate=!1,this.dispatchEvent(new Event("change",{bubbles:!0}))):this.checked=!this.checked,this.closest("label")&&e.preventDefault())},pi.styles=b`
    :host {
      display: inline-block;
      outline: none;
      width: fit-content;
      height: fit-content;
      vertical-align: middle;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    :host(:not([aria-disabled="true"])) {
      cursor: pointer;
    }
    .base {
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border-radius: 50%;
      width: calc(var(--m3e-checkbox-container-size, 2.5rem) + ${t.density.calc(-3)});
      height: calc(var(--m3e-checkbox-container-size, 2.5rem) + ${t.density.calc(-3)});
    }
    .touch {
      position: absolute;
      height: 3rem;
      width: 3rem;
      margin: auto;
    }
    .wrapper {
      box-sizing: border-box;
      pointer-events: none;
      width: var(--m3e-checkbox-icon-size, 1.125rem);
      height: var(--m3e-checkbox-icon-size, 1.125rem);
      border-radius: var(--m3e-checkbox-container-shape, 0.125rem);
    }
    :host(:not([checked]):not([indeterminate])) .wrapper {
      border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px);
      border-style: solid;
    }
    :host(:not(:state(-touched):state(-invalid)):not([indeterminate]):not([checked])) .base {
      --m3e-state-layer-hover-color: var(--m3e-checkbox-unselected-hover-color, ${t.color.onSurface});
      --m3e-state-layer-focus-color: var(--m3e-checkbox-unselected-focus-color, ${t.color.onSurface});
      --m3e-ripple-color: var(--m3e-checkbox-unselected-ripple-color, ${t.color.onSurface});
    }
    :host(:not(:state(-touched):state(-invalid))[checked]) .base,
    :host(:not(:state(-touched):state(-invalid))[indeterminate]) .base {
      --m3e-state-layer-hover-color: var(--m3e-checkbox-selected-hover-color, ${t.color.primary});
      --m3e-state-layer-focus-color: var(--m3e-checkbox-selected-focus-color, ${t.color.primary});
      --m3e-ripple-color: var(--m3e-checkbox-selected-ripple-color, ${t.color.primary});
    }
    :host(:not([aria-disabled="true"]):not(:state(-touched):state(-invalid))[checked]) .wrapper,
    :host(:not([aria-disabled="true"]):not(:state(-touched):state(-invalid))[indeterminate]) .wrapper {
      background-color: var(--m3e-checkbox-selected-container-color, ${t.color.primary});
      color: var(--m3e-checkbox-selected-icon-color, ${t.color.onPrimary});
    }
    :host(
        :not([aria-disabled="true"]):not(:state(-touched):state(-invalid)):not([checked]):not([indeterminate]):not(
            :hover
          )
      )
      .wrapper {
      border-color: var(--m3e-checkbox-unselected-outline-color, ${t.color.onSurfaceVariant});
    }
    :host(:not([aria-disabled="true"]):not(:state(-touched):state(-invalid)):not([checked]):not([indeterminate]):hover)
      .wrapper {
      border-color: var(--m3e-checkbox-unselected-hover-outline-color, ${t.color.onSurface});
    }
    :host([aria-disabled="true"]:not([checked]):not([indeterminate])) .wrapper {
      border-color: color-mix(
        in srgb,
        var(--m3e-checkbox-unselected-disabled-outline-color, ${t.color.onSurface})
          var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%),
        transparent
      );
    }
    :host([aria-disabled="true"][checked]) .wrapper,
    :host([aria-disabled="true"][indeterminate]) .wrapper {
      background-color: color-mix(
        in srgb,
        var(--m3e-checkbox-selected-disabled-container-color, ${t.color.onSurface})
          var(--m3e-checkbox-selected-disabled-container-opacity, 38%),
        transparent
      );
      color: color-mix(
        in srgb,
        var(--m3e-checkbox-selected-disabled-icon-color, ${t.color.surface})
          var(--m3e-checkbox-selected-disabled-icon-opacity, 100%),
        transparent
      );
    }
    :host(:not([aria-disabled="true"]):state(-touched):state(-invalid):not([checked]):not([indeterminate])) .base {
      --m3e-state-layer-hover-color: var(--m3e-checkbox-unselected-error-hover-color, ${t.color.error});
      --m3e-state-layer-focus-color: var(--m3e-checkbox-unselected-error-focus-color, ${t.color.error});
      --m3e-ripple-color: var(--m3e-checkbox-unselected-error-ripple-color, ${t.color.error});
    }
    :host(:not([aria-disabled="true"]):state(-touched):state(-invalid)[checked]) .base,
    :host(:not([aria-disabled="true"]):state(-touched):state(-invalid)[indeterminate]) .base {
      --m3e-state-layer-hover-color: var(--m3e-checkbox-selected-error-hover-color, ${t.color.onError});
      --m3e-state-layer-focus-color: var(--m3e-checkbox-selected-error-focus-color, ${t.color.onError});
      --m3e-ripple-color: var(--m3e-checkbox-selected-error-ripple-color, ${t.color.onError});
    }
    :host(:not([aria-disabled="true"]):state(-touched):state(-invalid):not([checked]):not([indeterminate])) .wrapper {
      border-color: var(--m3e-checkbox-unselected-error-outline-color, ${t.color.error});
    }
    @media (forced-colors: active) {
      :host(:not(:state(-touched):state(-invalid)):not([indeterminate]):not([checked])) .base,
      :host(:not(:state(-touched):state(-invalid))[checked]) .base,
      :host(:not(:state(-touched):state(-invalid))[indeterminate]) .base {
        --m3e-state-layer-hover-color: CanvasText;
        --m3e-state-layer-focus-color: CanvasText;
        --m3e-ripple-color: CanvasText;
      }
      :host(
          :not([aria-disabled="true"]):not(:state(-touched):state(-invalid)):not([checked]):not([indeterminate]):not(
              :hover
            )
        )
        .wrapper,
      :host(
          :not([aria-disabled="true"]):not(:state(-touched):state(-invalid)):not([checked]):not([indeterminate]):hover
        )
        .wrapper {
        border-color: CanvasText;
      }
      :host(:not([aria-disabled="true"]):not(:state(-touched):state(-invalid))[checked]) .wrapper,
      :host(:not([aria-disabled="true"]):not(:state(-touched):state(-invalid))[indeterminate]) .wrapper {
        background-color: CanvasText;
        color: Canvas;
      }
      :host([aria-disabled="true"]:not([checked]):not([indeterminate])) .wrapper {
        border-color: GrayText;
      }
      :host([aria-disabled="true"][checked]) .wrapper,
      :host([aria-disabled="true"][indeterminate]) .wrapper {
        background-color: GrayText;
        color: Canvas;
      }
      :host(:not([aria-disabled="true"]):state(-touched):state(-invalid):not([checked]):not([indeterminate])) .wrapper {
        border-color: Highlight;
      }
      :host(:not([aria-disabled="true"]):state(-touched):state(-invalid):not([checked]):not([indeterminate])) .base,
      :host(:not([aria-disabled="true"]):state(-touched):state(-invalid)[checked]) .base,
      :host(:not([aria-disabled="true"]):state(-touched):state(-invalid)[indeterminate]) .base {
        --m3e-state-layer-hover-color: Highlight;
        --m3e-state-layer-focus-color: Highlight;
        --m3e-ripple-color: Highlight;
      }
    }
  `,d([L(".focus-ring")],pi.prototype,"_focusRing",2),d([L(".state-layer")],pi.prototype,"_stateLayer",2),d([L(".ripple")],pi.prototype,"_ripple",2),d([p()],pi.prototype,"value",2),pi=d([y("m3e-checkbox")],pi);var ec,tc,Gr,jb,Kb,Zb,Xb,Ze=class extends k{constructor(){super(...arguments);m(this,Gr);m(this,ec);m(this,tc,"");this.variant="outlined"}get value(){return s(this,ec)??s(this,tc)}set value(e){g(this,ec,e)}firstUpdated(e){super.firstUpdated(e),this.role==="listitem"&&this.removeAttribute("tabindex"),[this._elevation,this._focusRing,this._stateLayer,this._ripple].forEach(i=>{i?.htmlFor||i?.attach(this)})}render(){let e=!Pt(this)||this.disabled,i=Uo(this)&&this.disabledInteractive;return f`<div class="base">
      <m3e-elevation class="elevation" ?disabled="${e||i}"></m3e-elevation>
      <m3e-state-layer class="state-layer" ?disabled="${e||i}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${e}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${e||i}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      ${jh(this)?this[st]():R}
      <div class="wrapper">${c(this,Gr,jb).call(this)}</div>
    </div>`}_renderIcon(){return f`<slot name="icon" aria-hidden="true" @slotchange="${c(this,Gr,Kb)}"></slot>`}_renderTrailingIcon(){return f`<slot
      name="trailing-icon"
      aria-hidden="true"
      @slotchange="${c(this,Gr,Zb)}"
    ></slot>`}_renderSlot(){return f`<slot @slotchange="${c(this,Gr,Xb)}"></slot>`}};ec=new WeakMap,tc=new WeakMap,Gr=new WeakSet,jb=function(){return f`${this._renderIcon()}
      <div class="label">${this._renderSlot()}</div>
      ${this._renderTrailingIcon()}`},Kb=function(e){this.classList.toggle("-with-icon",J(e.target))},Zb=function(e){this.classList.toggle("-with-trailing-icon",J(e.target))},Xb=function(e){g(this,tc,ft(e.target))},Ze.styles=b`
    :host {
      display: inline-block;
      vertical-align: middle;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .base {
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
      border-radius: var(--m3e-chip-container-shape, ${t.shape.corner.small});
      height: calc(var(--m3e-chip-container-height, 2rem) + ${t.density.calc(-2)});
      font-size: var(--m3e-chip-label-text-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(--m3e-chip-label-text-font-weight, ${t.typescale.standard.label.large.fontWeight});
      line-height: var(--m3e-chip-label-text-line-height, ${t.typescale.standard.label.large.lineHeight});
      letter-spacing: var(--m3e-chip-label-text-tracking, ${t.typescale.standard.label.large.tracking});
    }
    :host(:not(m3e-chip):not(:disabled):not([disabled-interactive])) {
      cursor: pointer;
    }
    :host(:not(m3e-chip):not(:disabled)[disabled-interactive]) {
      cursor: not-allowed;
    }
    :host(:not(m3e-chip):not(:disabled):not([disabled-interactive])) .base {
      user-select: none;
    }
    .touch {
      position: absolute;
      height: 3rem;
      left: 0;
      right: 0;
    }
    .wrapper {
      width: 100%;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      column-gap: var(--m3e-chip-spacing, 0.5rem);
    }
    .label {
      flex: 1 1 auto;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a {
      all: unset;
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 1;
    }
    :host([variant="elevated"]) .base {
      background-color: var(--m3e-elevated-chip-container-color, ${t.color.surfaceContainerLow});

      --m3e-elevation-level: var(--m3e-elevated-chip-elevation, ${t.elevation.level1});
      --m3e-elevation-hover-level: var(--m3e-elevated-chip-hover-elevation, ${t.elevation.level2});
      --m3e-elevation-focus-level: var(--m3e-elevated-chip-elevation, ${t.elevation.level1});
      --m3e-elevation-pressed-level: var(--m3e-elevated-chip-elevation, ${t.elevation.level1});
    }
    :host([variant="outlined"]) .base {
      outline-width: var(--m3e-outlined-chip-outline-thickness, 1px);
      outline-style: solid;
      outline-offset: calc(0px - var(--m3e-outlined-chip-outline-thickness, 1px));
    }
    :host(:not(:disabled):not([disabled-interactive])[variant="outlined"]) .base {
      outline-color: var(--m3e-outlined-chip-outline-color, ${t.color.outlineVariant});
    }
    :host(:disabled[variant="outlined"]) .base,
    :host([disabled-interactive][variant="outlined"]) .base {
      outline-color: color-mix(
        in srgb,
        var(--m3e-outlined-chip-disabled-outline-color, ${t.color.onSurface})
          var(--m3e-outlined-chip-disabled-outline-opacity, 12%),
        transparent
      );
    }
    :host(.-with-icon) .wrapper {
      padding-inline-start: var(--m3e-chip-with-icon-padding-start, 0.5rem);
    }
    :host(:not(.-with-icon)) .wrapper {
      padding-inline-start: var(--m3e-chip-padding-start, 1rem);
    }
    :host(.-with-trailing-icon) .wrapper {
      padding-inline-end: var(--m3e-chip-with-icon-padding-end, 0.5rem);
    }
    :host(:not(.-with-trailing-icon)) .wrapper {
      padding-inline-end: var(--m3e-chip-padding-end, 1rem);
    }
    ::slotted([slot="icon"]),
    ::slotted([slot="trailing-icon"]) {
      flex: none;
      width: 1em;
      font-size: var(--m3e-chip-icon-size, 1.125rem) !important;
    }
    :host(:not(:disabled):not([disabled-interactive]):not([selected])) .base {
      color: var(--m3e-chip-label-text-color, ${t.color.onSurface});
    }
    :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="icon"]),
    :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="trailing-icon"]) {
      color: var(--m3e-chip-icon-color, ${t.color.primary});
    }
    :host(:disabled) .base,
    :host([disabled-interactive]) .base {
      color: color-mix(
        in srgb,
        var(--m3e-chip-disabled-label-text-color, ${t.color.onSurface})
          var(--m3e-chip-disabled-label-text-opacity, 38%),
        transparent
      );
    }
    :host(:disabled) ::slotted([slot="icon"]),
    :host([disabled-interactive]) ::slotted([slot="icon"]),
    :host(:disabled) ::slotted([slot="trailing-icon"]),
    :host([disabled-interactive]) ::slotted([slot="trailing-icon"]) {
      color: color-mix(
        in srgb,
        var(--m3e-chip-disabled-icon-color, ${t.color.onSurface}) var(--m3e-chip-disabled-icon-opacity, 38%),
        transparent
      );
    }
    :host([variant="elevated"]:disabled) .base,
    :host([variant="elevated"][disabled-interactive]) .base {
      background-color: color-mix(
        in srgb,
        var(--m3e-elevated-chip-disabled-container-color, ${t.color.onSurface})
          var(--m3e-elevated-chip-disabled-container-opacity, 12%),
        transparent
      );
      --m3e-elevation-level: var(--m3e-elevated-chip-disabled-elevation, ${t.elevation.level0});
    }
    @media (prefers-reduced-motion) {
      .base {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .base {
        transition: none;
      }
      :host(:not(:disabled):not([disabled-interactive]):not([selected])) .base,
      :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="icon"]),
      :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="trailing-icon"]) {
        color: CanvasText;
      }
      :host(:not(:disabled):not([disabled-interactive])[variant="outlined"]) .base {
        outline-color: CanvasText;
      }
      :host(:disabled) .base,
      :host([disabled-interactive]) .base,
      :host(:disabled) ::slotted([slot="icon"]),
      :host([disabled-interactive]) ::slotted([slot="icon"]),
      :host(:disabled) ::slotted([slot="trailing-icon"]),
      :host([disabled-interactive]) ::slotted([slot="trailing-icon"]) {
        color: GrayText;
      }
      :host(:disabled[variant="outlined"]) .base,
      :host([disabled-interactive][variant="outlined"]) .base {
        outline-color: GrayText;
      }
    }
  `,d([L(".elevation")],Ze.prototype,"_elevation",2),d([L(".focus-ring")],Ze.prototype,"_focusRing",2),d([L(".state-layer")],Ze.prototype,"_stateLayer",2),d([L(".ripple")],Ze.prototype,"_ripple",2),d([p({reflect:!0})],Ze.prototype,"variant",2),d([p()],Ze.prototype,"value",1),Ze=d([y("m3e-chip")],Ze);var fm=class extends Go(D(Fe(de(ae(gt(N(M(Ze,"button")))))),!0)){_renderTrailingIcon(){return R}};fm=d([y("m3e-assist-chip")],fm);var jr=class extends Kh(k){render(){return f`<slot></slot>`}};jr.styles=b`
    :host {
      display: inline-flex;
      flex-wrap: wrap;
      vertical-align: middle;
      gap: var(--m3e-chip-set-spacing, 0.5rem);
      outline: none;
    }
    :host([vertical]) {
      flex-direction: column;
    }
  `,jr=d([y("m3e-chip-set")],jr);var rc,bm,Yb,oc=class extends Vt(de(ae(gt(N(D(M(Ze,"radio"),!0)))))){constructor(){super(...arguments);m(this,bm);m(this,rc,e=>c(this,bm,Yb).call(this,e))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,rc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,rc))}update(e){super.update(e),e.has("selected")&&this.closest("m3e-filter-chip-set")?.[E].notifySelectionChange(this)}_renderIcon(){return f`<div class="icon" aria-hidden="true">
      <svg class="check" viewBox="0 -960 960 960" aria-hidden="true">
        <path fill="currentColor" d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
      </svg>
      ${super._renderIcon()}
    </div>`}};rc=new WeakMap,bm=new WeakSet,Yb=function(e){if(e.defaultPrevented)return;let i=this.selected;this.selected=!this.selected,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?(this.closest("m3e-filter-chip-set")?.[E].notifySelectionChange(this),this.dispatchEvent(new Event("change",{bubbles:!0}))):this.selected=i},oc.styles=[Ze.styles,b`
      :host([selected]:not(.-hide-selection)) .wrapper {
        padding-inline-start: var(--m3e-chip-with-icon-padding-start, 0.5rem);
      }
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .check {
        width: 1em;
        font-size: var(--m3e-chip-icon-size, 1.125rem);
      }
      :host(:not(:disabled):not([disabled-interactive])) .check {
        color: var(--m3e-chip-selected-leading-icon-color, ${t.color.onSecondaryContainer});
      }
      :host(:not([selected])) .check,
      :host(.-hide-selection) .check,
      :host(.-hide-selection:not(.-with-icon)) .icon {
        display: none;
      }
      :host(:not(.-with-icon)) .icon {
        margin-inline-start: calc(0px - var(--m3e-chip-with-icon-padding-start, 0.5rem));
        transition: margin-inline-start ${t.motion.spring.fastEffects};
      }
      :host([selected]) .icon {
        margin-inline-start: 0;
      }
      :host([selected]:not(.-hide-selection)) ::slotted([slot="icon"]) {
        display: none !important;
      }
      :host(:not(:disabled):not([disabled-interactive]):not([selected])) .base {
        color: var(--m3e-chip-unselected-label-text-color, ${t.color.onSurfaceVariant});
        --m3e-ripple-color: var(--m3e-chip-unselected-ripple-color, ${t.color.onSurfaceVariant});
        --m3e-state-layer-focus-color: var(
          --m3e-chip-unselected-state-layer-focus-color,
          ${t.color.onSurfaceVariant}
        );
        --m3e-state-layer-hover-color: var(
          --m3e-chip-unselected-state-layer-hover-color,
          ${t.color.onSurfaceVariant}
        );
      }
      :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="icon"]) {
        color: var(--m3e-chip-unselected-leading-icon-color, ${t.color.primary});
      }
      :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="trailing-icon"]) {
        color: var(--m3e-chip-unselected-trailing-icon-color, ${t.color.onSurfaceVariant});
      }
      :host(:not(:disabled):not([disabled-interactive])[selected]) .base {
        outline-offset: unset;
        outline-width: var(--m3e-chip-selected-outline-thickness, 0);
        color: var(--m3e-chip-selected-label-text-color, ${t.color.onSecondaryContainer});
        background-color: var(--m3e-chip-selected-container-color, ${t.color.secondaryContainer});
        --m3e-state-layer-hover-color: var(
          --m3e-chip-selected-container-hover-color,
          ${t.color.onSecondaryContainer}
        );
        --m3e-state-layer-focus-color: var(
          --m3e-chip-selected-container-focus-color,
          ${t.color.onSecondaryContainer}
        );
        --m3e-elevation-hover-level: var(--m3e-chip-selected-hover-elevation, ${t.elevation.level1});
        --m3e-ripple-color: var(--m3e-chip-selected-ripple-color, ${t.color.onSecondaryContainer});
        --m3e-state-layer-focus-color: var(
          --m3e-chip-selected-state-layer-focus-color,
          ${t.color.onSecondaryContainer}
        );
        --m3e-state-layer-hover-color: var(
          --m3e-chip-selected-state-layer-hover-color,
          ${t.color.onSecondaryContainer}
        );
      }
      :host(:not(:disabled):not([disabled-interactive])[selected]) ::slotted([slot="icon"]) {
        color: var(--m3e-chip-selected-leading-icon-color, ${t.color.onSecondaryContainer});
      }
      :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="trailing-icon"]) {
        color: var(--m3e-chip-selected-trailing-icon-color, ${t.color.onSecondaryContainer});
      }
      @media (prefers-reduced-motion) {
        .base,
        :host(:not(.-with-icon)) .icon {
          transition: none;
        }
      }
      @media (forced-colors: active) {
        :host(:not(:disabled):not([disabled-interactive]):not([selected])) .base,
        :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="icon"]),
        :host(:not(:disabled):not([disabled-interactive]):not([selected])) ::slotted([slot="trailing-icon"]) {
          color: CanvasText;
        }
        :host(:not(:disabled):not([disabled-interactive])[selected]) .base,
        :host(:not(:disabled):not([disabled-interactive])[selected]) ::slotted([slot="icon"]),
        :host(:not(:disabled):not([disabled-interactive])[selected]) ::slotted([slot="trailing-icon"]),
        :host(:not(:disabled):not([disabled-interactive])) .check {
          color: ButtonText;
        }
        :host(:not(:disabled):not([disabled-interactive])[selected]) .base {
          outline-offset: calc(0px - var(--m3e-outlined-chip-outline-thickness, 1px));
          outline-width: var(--m3e-outlined-chip-outline-thickness, 1px);
          outline-color: ButtonText;
        }
      }
    `],oc=d([y("m3e-filter-chip")],oc);var Jb,ic,br,Qb,e3,t3,Sp,jn=class extends Bt(Oe(De(ot(N(D(M(jr,"radiogroup"))))))){constructor(){super(...arguments);m(this,br);m(this,ic);this[Jb]=new rt().onActiveItemChange(()=>this[E].activeItem?.focus()).withWrap().withDirectionality(O.current);this.multi=!1;this.hideSelectionIndicator=!1}get chips(){return this[E]?.items??[]}get selected(){return this[E]?.selectedItems??[]}get value(){let e=this.selected.filter(i=>!i.disabled).map(i=>i.value);switch(e.length){case 0:return null;case 1:return e[0];default:return e}}get[(Jb=E,tt)](){let e=this.value;if(Array.isArray(e)){let i=new FormData;for(let n of e)i.append(this.name,n);return i}return e}connectedCallback(){super.connectedCallback(),g(this,ic,O.observe(()=>this[E].directionality=O.current))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,ic))==null||e.call(this)}update(e){super.update(e),e.has("vertical")&&(this[E].vertical=this.vertical),e.has("disabled")&&(e.get("disabled")!==void 0||this.disabled)&&(this[E].disabled=this.disabled),e.has("multi")&&(this.role=this.multi?"group":"radiogroup",c(this,br,Sp).call(this),this[E].multi=this.multi,this[E].disableRovingTabIndex(this.multi)),(e.has("multi")||e.has("disabled"))&&(this.ariaDisabled=this.multi&&this.disabled?"true":null),e.has("hideSelectionIndicator")&&this.chips.forEach(i=>i.classList.toggle("-hide-selection",this.hideSelectionIndicator))}render(){return f`<slot
      @slotchange="${c(this,br,Qb)}"
      @keydown="${c(this,br,e3)}"
      @change="${c(this,br,t3)}"
    ></slot>`}};ic=new WeakMap,br=new WeakSet,Qb=function(){let{added:e}=this[E].setItems([...this.querySelectorAll("m3e-filter-chip")]);e.forEach(i=>i.classList.toggle("-hide-selection",this.hideSelectionIndicator)),c(this,br,Sp).call(this)},e3=function(e){this.multi||this[E].onKeyDown(e)},t3=function(e){e.stopPropagation(),this.dispatchEvent(new Event("change",{bubbles:!0}))},Sp=function(){this.chips.forEach(e=>e.role=this.multi?"button":"radio")},d([p({type:Boolean})],jn.prototype,"multi",2),d([p({attribute:"hide-selection-indicator",type:Boolean})],jn.prototype,"hideSelectionIndicator",2),jn=d([y("m3e-filter-chip-set")],jn);var ra,o3,r3,i3,gr=class extends vo(gt(N(D(M(Ze,"row"),!0))),"remove"){constructor(){super(...arguments);m(this,ra);this.removable=!1;this.removeLabel="Remove"}connectedCallback(){super.connectedCallback(),this.removeAttribute("tabindex")}update(e){super.update(e),this.removeAttribute("tabindex"),e.has("removable")&&this.classList.toggle("-with-trailing-icon",this.removable)}render(){return f`<div class="base">
      <m3e-elevation
        class="elevation"
        for="cell"
        ?disabled="${this.disabled||this.disabledInteractive}"
      ></m3e-elevation>
      <m3e-state-layer
        class="state-layer"
        for="cell"
        ?disabled="${this.disabled||this.disabledInteractive}"
      ></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" for="cell" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" for="cell" ?disabled="${this.disabled||this.disabledInteractive}"></m3e-ripple>
      <div class="wrapper">
        <div
          id="cell"
          class="cell"
          role="gridcell"
          tabindex="${$e(this.disabled?void 0:"-1")}"
          @keydown="${c(this,ra,i3)}"
        >
          <slot name="avatar" @slotchange="${c(this,ra,o3)}"></slot>
          ${this._renderIcon()}
          <div class="label">${this._renderSlot()}</div>
          <div class="touch" aria-hidden="true"></div>
        </div>
        ${this._renderTrailingIcon()}
      </div>
    </div>`}_renderTrailingIcon(){return this.removable?f`<span role="gridcell" class="remove">
          <m3e-icon-button
            class="remove-button"
            aria-label="${this.removeLabel}"
            size="extra-small"
            tabindex="-1"
            ?disabled="${this.disabled}"
            ?disabled-interactive="${this.disabledInteractive}"
            @click="${c(this,ra,r3)}"
          >
            <slot name="remove-icon">
              <svg class="remove-icon" viewBox="0 -960 960 960" fill="currentColor">
                <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                />
              </svg>
            </slot>
          </m3e-icon-button>
        </span>`:R}};ra=new WeakSet,o3=function(e){this.classList.toggle("-with-avatar",J(e.target))},r3=function(e){e.stopPropagation(),this.dispatchEvent(new Event("remove"))},i3=function(e){if(this.removable)switch(e.key){case"Backspace":case"Delete":this.dispatchEvent(new Event("remove"));break}},gr.styles=[Ze.styles,b`
      .cell {
        display: inline-flex;
        align-items: center;
        outline: none;
        column-gap: var(--m3e-chip-spacing, 0.5rem);
        min-width: 0;
      }
      .remove-button {
        --m3e-icon-button-extra-small-container-height: 1.5rem;
        --m3e-icon-button-extra-small-icon-size: var(--m3e-chip-icon-size, 1.125rem);
        width: 1.5rem;
      }
      .remove-icon {
        flex: none;
        width: var(--m3e-chip-icon-size, 1.125rem);
        height: var(--m3e-chip-icon-size, 1.125rem);
      }
      .touch {
        top: calc(
          0px - calc(calc(3rem - calc(var(--m3e-chip-container-height, 2rem) + ${t.density.calc(-2)})) / 2)
        );
      }
      .wrapper {
        height: 100%;
        overflow: visible;
        min-width: 0;
      }
      ::slotted([slot="avatar"]) {
        flex: none;
        font-size: var(--m3e-chip-avatar-size, 1.5rem);
      }
      :host(:disabled) ::slotted([slot="avatar"]),
      :host([disabled-interactive]) ::slotted([slot="avatar"]) {
        opacity: var(--m3e-chip-disabled-avatar-opacity, 38%);
        color: var(--m3e-chip-disabled-icon-color, ${t.color.onSurface});
      }
      :host(.-with-avatar) ::slotted([slot="icon"]) {
        display: none;
      }
      :host(.-with-avatar) .wrapper {
        padding-inline-start: var(--m3e-chip-with-avatar-padding-start, 0.25rem);
      }
      @media (forced-colors: active) {
        :host(:disabled) ::slotted([slot="avatar"]),
        :host([disabled-interactive]) ::slotted([slot="avatar"]) {
          color: CanvasText;
        }
      }
    `],d([L(".cell")],gr.prototype,"cell",2),d([L(".remove-button")],gr.prototype,"removeButton",2),d([p({type:Boolean})],gr.prototype,"removable",2),d([p({attribute:"remove-label"})],gr.prototype,"removeLabel",2),gr=d([y("m3e-input-chip")],gr);var nc,sc,lc,cc,dc,hc,mc,uc,vi,Yt,Kn,Ne,Zn,Re,a3,n3,s3,l3,c3,d3,h3,m3,kp,u3,ac=class extends Ui(Wi(Ir(Oe(De(ot(N(D(M(jr,"grid"))))))))){constructor(){super(...arguments);m(this,Re);m(this,nc);m(this,sc,()=>c(this,Re,kp).call(this));m(this,lc,e=>c(this,Re,u3).call(this,e));m(this,cc,()=>c(this,Re,l3).call(this));m(this,dc,()=>c(this,Re,c3).call(this));m(this,hc,()=>c(this,Re,d3).call(this));m(this,mc,e=>c(this,Re,h3).call(this,e));m(this,uc,e=>c(this,Re,m3).call(this,e));m(this,vi,new Rn);m(this,Yt,new Dr().onActiveItemChange(()=>s(this,Yt).activeItem?.focus()).withHomeAndEnd().withSkipPredicate(e=>!e.hasAttribute("tabindex")).withDirectionality(O.current));m(this,Kn,!1);m(this,Ne,null);m(this,Zn,0)}get chips(){return[...this.querySelectorAll("m3e-input-chip")]}get value(){let e=this.chips.filter(i=>!i.disabled).map(i=>i.value);return e.length==0?null:e}get[tt](){let e=this.value;if(!e)return null;let i=new FormData;for(let n of e)i.append(this.name,n);return i}get shouldLabelFloat(){return this.chips.length>0}onContainerClick(){s(this,Ne)?.focus()}connectedCallback(){super.connectedCallback(),customElements.get("m3e-form-field")?this.closest("m3e-form-field")?.notifyControlStateChange():customElements.whenDefined("m3e-form-field").then(()=>{this.closest("m3e-form-field")?.notifyControlStateChange()}),g(this,Zn,Number.parseInt(this.getAttribute("tabindex")??"0")),this.addEventListener("focus",s(this,cc)),this.addEventListener("focusin",s(this,dc)),this.addEventListener("focusout",s(this,hc)),g(this,nc,O.observe(()=>s(this,Yt).directionality=O.current))}disconnectedCallback(){var e;super.disconnectedCallback(),this.removeEventListener("focus",s(this,cc)),this.removeEventListener("focusin",s(this,dc)),this.removeEventListener("focusout",s(this,hc)),(e=s(this,nc))==null||e.call(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("tabindex")||this.setAttribute("tabindex",`${s(this,Zn)}`)}update(e){super.update(e),e.has("vertical")&&(this.ariaOrientation=null),e.has("disabled")&&(s(this,vi).items.forEach(i=>i.disabled=this.disabled),s(this,Ne)&&(s(this,Ne).disabled=this.disabled))}render(){return f`<slot @keydown="${c(this,Re,a3)}" @slotchange="${c(this,Re,n3)}"></slot>
      <span role="row">
        <span role="gridcell"><slot name="input" @slotchange="${c(this,Re,s3)}"></slot></span>
      </span> `}};nc=new WeakMap,sc=new WeakMap,lc=new WeakMap,cc=new WeakMap,dc=new WeakMap,hc=new WeakMap,mc=new WeakMap,uc=new WeakMap,vi=new WeakMap,Yt=new WeakMap,Kn=new WeakMap,Ne=new WeakMap,Zn=new WeakMap,Re=new WeakSet,a3=function(e){s(this,Yt).onKeyDown(e)},n3=async function(){let{added:e,removed:i}=s(this,vi).setItems([...this.querySelectorAll("m3e-input-chip")]);for(let n of e)n.isUpdatePending&&await n.updateComplete,this.disabled&&(n.disabled=!0),n.addEventListener("remove",s(this,mc)),n.cell.addEventListener("click",s(this,uc));i.forEach(n=>{n.removeEventListener("remove",s(this,mc)),n.cell.removeEventListener("click",s(this,uc))}),s(this,Yt).setItems(s(this,vi).items.flatMap(n=>n.removeButton?[n.cell,n.removeButton]:[n.cell])),s(this,Yt).activeItem||s(this,Yt).updateActiveItem(s(this,Yt).items.find(n=>n.hasAttribute("tabindex")))},s3=function(){let e=this.querySelector("input");if(s(this,Ne)&&(s(this,Ne).removeEventListener("change",s(this,sc)),s(this,Ne).removeEventListener("keydown",s(this,lc))),g(this,Ne,e),s(this,Ne)){s(this,Ne).disabled=this.disabled,s(this,Ne).addEventListener("change",s(this,sc)),s(this,Ne).addEventListener("keydown",s(this,lc));let i=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");Object.defineProperty(e,"value",{get:()=>i.get?.call(e),set:n=>{i.set?.call(e,n),s(this,Ne)===e&&!s(this,Kn)&&c(this,Re,kp).call(this)}})}},l3=function(){setTimeout(()=>(s(this,Yt).activeItem??s(this,Ne))?.focus())},c3=function(){this.setAttribute("tabindex","-1")},d3=function(){this.setAttribute("tabindex",`${s(this,Zn)}`)},h3=function(e){let i=e.target,n=s(this,vi).items.indexOf(i),l=s(this,vi).items.find((h,u)=>u>n&&!h.disabled&&h.removable);i.remove(),s(this,Yt).setActiveItem(s(this,Yt).items.find(h=>h===l?.removeButton)),s(this,Yt).activeItem||s(this,Ne)?.focus(),this.dispatchEvent(new Event("change",{bubbles:!0}))},m3=function(e){s(this,Yt).updateActiveItem(e.composedPath().find(i=>i instanceof gr)?.cell)},kp=function(){s(this,Ne)?.value&&setTimeout(()=>{let i=s(this,Ne)?.value;if(!i)return;let n=document.createElement("m3e-input-chip");if(n.removable=!0,n.appendChild(document.createTextNode(i)),this.appendChild(n),s(this,Ne))try{g(this,Kn,!0),s(this,Ne).value=""}finally{g(this,Kn,!1)}this.dispatchEvent(new Event("change",{bubbles:!0}))})},u3=function(e){if(e.key==="Backspace"&&!s(this,Ne)?.value){let i=[...s(this,vi).items].reverse().find(n=>!n.disabled&&!n.disabledInteractive&&n.removable);i&&i.dispatchEvent(new Event("remove"))}},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-input-chip-set [slot="input"]::placeholder {
            user-select: none;
            color: currentColor;
            transition: opacity ${t.motion.duration.extraLong1};
          }
          m3e-input-chip-set:not(:focus-within) [slot="input"]::placeholder {
            opacity: 0;
            transition: 0s;
          }
          m3e-input-chip-set:hover [slot="input"]::placeholder {
            transition: 0s;
          }
          @media (prefers-reduced-motion) {
            m3e-input-chip-set [slot="input"]::placeholder {
              transition: none !important;
            }
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),ac.styles=[jr.styles,b`
      ::slotted([slot="input"]) {
        outline: unset;
        border: unset;
        background-color: transparent;
        box-shadow: none;
        font-family: inherit;
        font-size: inherit;
        line-height: initial;
        letter-spacing: inherit;
        color: var(--_form-field-input-color, inherit);
        flex: 1 1 auto;
        min-width: 0;
        padding: unset;
      }
      ::slotted(m3e-input-chip) {
        min-width: 0;
      }
      span[role="row"],
      span[role="gridcell"] {
        display: contents;
      }
    `],ac=d([y("m3e-input-chip-set")],ac);var gm=class extends Go(D(Fe(de(ae(gt(N(M(Ze,"button")))))),!0)){_renderTrailingIcon(){return R}};gm=d([y("m3e-suggestion-chip")],gm);var pc=class extends Ve{constructor(){super(...arguments);this.returnValue=""}_onClick(){this.closest("m3e-dialog")?.hide(this.returnValue)}};d([p({attribute:"return-value"})],pc.prototype,"returnValue",2),pc=d([y("m3e-dialog-action")],pc);var vc,qa,Xn,fc,xo,p3,v3,f3,b3,g3,y3,ct=class extends vo(k,"opening","opened","cancel","closing","closed"){constructor(){super(...arguments);m(this,xo);m(this,vc,ct.__nextId++);m(this,qa,!1);m(this,Xn,!1);this._hasActions=!1;m(this,fc,new gn(this));this.alert=!1;this.dismissible=!1;this.disableClose=!1;this.noFocusTrap=!1;this.closeLabel="Close";this.returnValue=""}get open(){return s(this,qa)}set open(e){e!==s(this,qa)&&(g(this,qa,e),s(this,qa)?this.show():this.hide())}async show(){if(await this.updateComplete,this._base.open)return;if(!this.dispatchEvent(new Event("opening",{cancelable:!0}))){this.open=!1;return}s(this,fc).lock(),this._base.showModal(),this._content.scrollTop=0;let e=this.querySelector("[autofocus]");e&&Fh(e),this.dispatchEvent(new Event("opened"))}async hide(e=this.returnValue){if(!this.isConnected){this.open=!1;return}if(await this.updateComplete,s(this,fc).unlock(),!this._base.open){this.open=!1;return}let i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("closing",{cancelable:!0}))){this.returnValue=i;return}this.open=!1,this._base.close(e),this.dispatchEvent(new Event("closed"))}render(){return f`<dialog
      class="base"
      role="${$e(this.alert?"alertdialog":void 0)}"
      aria-labelledby="m3e-dialog-${s(this,vc)}-header"
      .returnValue="${this.returnValue}"
      @close="${c(this,xo,v3)}"
      @cancel="${c(this,xo,f3)}"
      @click="${c(this,xo,b3)}"
      @keydown="${c(this,xo,g3)}"
    >
      <m3e-elevation level="3"></m3e-elevation>
      <m3e-focus-trap ?disabled="${this.noFocusTrap}">
        <div class="header">
          <slot name="header" id="m3e-dialog-${s(this,vc)}-header"></slot>
          ${c(this,xo,p3).call(this)}
        </div>
        <m3e-scroll-container class="content" dividers="${this._hasActions?"above-below":"above"}">
          <slot></slot>
        </m3e-scroll-container>
        <div class="actions">
          <slot name="actions" @slotchange="${c(this,xo,y3)}"></slot>
        </div>
      </m3e-focus-trap>
    </dialog>`}};vc=new WeakMap,qa=new WeakMap,Xn=new WeakMap,fc=new WeakMap,xo=new WeakSet,p3=function(){return this.dismissible?f`<m3e-icon-button aria-label="${this.closeLabel}" class="close" @click="${this.hide}">
          <slot name="close-icon">
            <svg class="close-icon" viewBox="0 -960 960 960" fill="currentColor">
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </slot>
        </m3e-icon-button>`:R},v3=function(){s(this,Xn)&&(g(this,Xn,!0),this._base?.dispatchEvent(new Event("cancel",{cancelable:!0})))},f3=function(e){e.target===this._base&&(g(this,Xn,!1),e.preventDefault(),this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.hide())},b3=function(e){!this.disableClose&&e.target===this._base&&this.hide()},g3=function(e){e.key==="Escape"&&!e.shiftKey&&!e.ctrlKey&&(e.preventDefault(),this.disableClose||this.hide())},y3=function(e){this._hasActions=e.target.assignedNodes({flatten:!0}).length>0,this.classList.toggle("-has-actions",this._hasActions)},ct.styles=b`
    :host {
      display: contents;
    }
    .base {
      font: inherit;
      border: unset;
      outline: unset;
      padding: unset;
      display: flex;
      flex-direction: column;
      position: fixed;
      overflow: visible;
      border-radius: var(--m3e-dialog-shape, ${t.shape.corner.extraLarge});
      min-width: var(--m3e-dialog-min-width, 17.5rem);
      max-width: var(--m3e-dialog-max-width, 35rem);
      color: var(--m3e-dialog-color, ${t.color.onSurface});
      background-color: var(--m3e-dialog-container-color, ${t.color.surfaceContainerHigh});
      visibility: hidden;
      opacity: 0;
      transform-origin: top;
      transform: translateY(-3.125rem) scaleY(0.8);
    }
    .base::backdrop {
      background-color: color-mix(in srgb, var(--m3e-dialog-scrim-color, ${t.color.scrim}) 0%, transparent);
      margin-inline-end: -20px;
    }
    .base:not([open]) {
      visibility: hidden;
      opacity: 0;
      transform: translateY(-3.125rem) scaleY(0.8);
      transition: ${r(`opacity ${t.motion.duration.short3} ${t.motion.easing.emphasized}, 
        transform ${t.motion.duration.short3} ${t.motion.easing.emphasized},
        overlay ${t.motion.duration.short3} ${t.motion.easing.emphasized} allow-discrete,
        visibility ${t.motion.duration.short3} ${t.motion.easing.emphasized} allow-discrete`)};
    }
    .base[open] {
      visibility: visible;
      opacity: 1;
      transform: translateY(0) scaleY(1);
      transition: ${r(`opacity ${t.motion.duration.long2} ${t.motion.easing.emphasized}, 
        transform ${t.motion.duration.long2} ${t.motion.easing.emphasized},
        overlay ${t.motion.duration.long2} ${t.motion.easing.emphasized} allow-discrete,
        visibility ${t.motion.duration.long2} ${t.motion.easing.emphasized} allow-discrete`)};
    }
    .base:not([open])::backdrop {
      transition: ${r(`background-color ${t.motion.duration.short3} ${t.motion.easing.standard}, 
        overlay ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete,
        visibility ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete`)};
    }
    .base[open]::backdrop {
      background-color: color-mix(
        in srgb,
        var(--m3e-dialog-scrim-color, ${t.color.scrim}) var(--m3e-dialog-scrim-opacity, 32%),
        transparent
      );
      transition: ${r(`background-color ${t.motion.duration.long2} ${t.motion.easing.standard}, 
        overlay ${t.motion.duration.long2} ${t.motion.easing.standard} allow-discrete,
        visibility ${t.motion.duration.long2} ${t.motion.easing.standard} allow-discrete`)};
    }
    @starting-style {
      .base[open] {
        opacity: 0;
        transform: translateY(-3.125rem) scaleY(0.8);
      }
      .base[open]::backdrop {
        background-color: color-mix(in srgb, var(--m3e-dialog-scrim-color, ${t.color.scrim}) 0%, transparent);
      }
    }
    .header {
      flex: none;
      display: flex;
      align-items: center;
      padding: 1.5rem 1.5rem 1rem 1.5rem;
      background-color: var(--m3e-dialog-header-container-color, transparent);
    }
    ::slotted([slot="header"]) {
      margin: unset;
      flex: 1 1 auto;
      color: var(--m3e-dialog-header-color, inherit);
      font-size: var(--m3e-dialog-header-font-size, ${t.typescale.standard.headline.small.fontSize});
      font-weight: var(--m3e-dialog-header-font-weight, ${t.typescale.standard.headline.small.fontWeight});
      line-height: var(--m3e-dialog-header-line-height, ${t.typescale.standard.headline.small.lineHeight});
      letter-spacing: var(--m3e-dialog-header-tracking, ${t.typescale.standard.headline.small.tracking});
    }
    .content {
      padding-inline: 1.5rem;
      color: var(--m3e-dialog-content-color, ${t.color.onSurfaceVariant});
      font-size: var(--m3e-dialog-content-font-size, ${t.typescale.standard.body.medium.fontSize});
      font-weight: var(--m3e-dialog-content-font-weight, ${t.typescale.standard.body.medium.fontWeight});
      line-height: var(--m3e-dialog-content-line-height, ${t.typescale.standard.body.medium.lineHeight});
      letter-spacing: var(--m3e-dialog-content-tracking, ${t.typescale.standard.body.medium.tracking});
    }
    .actions {
      padding: 1.5rem;
    }
    ::slotted([slot="actions"]) {
      flex: none;
      display: flex;
      align-items: center;
      min-height: 1.5rem;
      column-gap: 0.5rem;
    }
    ::slotted([slot="actions"][end]) {
      justify-content: flex-end;
    }
    :host(:not(.-has-actions)) .content {
      margin-bottom: 1.5rem;
    }
    :host(:not(.-has-actions)) .actions {
      display: none;
    }
    .close {
      margin-inline-start: 0.5rem;
    }
    ::slotted([slot="close-icon"]),
    .close-icon {
      width: 1em;
      font-size: var(--m3e-icon-button-icon-size, 1.5rem) !important;
    }
    @media (forced-colors: active) {
      .base:not([open])::backdrop,
      .base[open]::backdrop {
        transition: none;
      }
      .base {
        border-style: solid;
        border-width: 1px;
        border-color: CanvasText;
      }
    }
    @media (prefers-reduced-motion) {
      .base:not([open]),
      .base[open],
      .base:not([open])::backdrop,
      .base[open]::backdrop {
        transition: none;
      }
    }
  `,ct.__nextId=0,d([ie()],ct.prototype,"_hasActions",2),d([L(".base")],ct.prototype,"_base",2),d([L(".content")],ct.prototype,"_content",2),d([p({type:Boolean})],ct.prototype,"alert",2),d([p({type:Boolean,reflect:!0})],ct.prototype,"open",1),d([p({type:Boolean})],ct.prototype,"dismissible",2),d([p({attribute:"disable-close",type:Boolean})],ct.prototype,"disableClose",2),d([p({attribute:"no-focus-trap",type:Boolean})],ct.prototype,"noFocusTrap",2),d([p({attribute:"close-label"})],ct.prototype,"closeLabel",2),ct=d([y("m3e-dialog")],ct);var ym=class extends ce(Ve){connectedCallback(){super.connectedCallback(),this.parentElement&&(this.parentElement.ariaHasPopup="dialog")}disconnectedCallback(){super.disconnectedCallback(),this.parentElement&&(this.parentElement.ariaHasPopup=null)}_onClick(){this.control instanceof ct&&this.control.show()}};ym=d([y("m3e-dialog-trigger")],ym);var fi=class extends M(k,"separator"){constructor(){super(...arguments);this.vertical=!1;this.inset=!1;this.insetStart=!1;this.insetEnd=!1}render(){return f`<div class="line"></div>`}};fi.styles=b`
    :host {
      display: block;
      position: relative;
    }
    :host(:not([vertical])) {
      height: var(--m3e-divider-thickness, 1px);
      width: 100%;
    }
    :host([vertical]) {
      width: var(--m3e-divider-thickness, 1px);
      height: 100%;
    }
    .line {
      box-sizing: border-box;
      position: absolute;
    }
    :host(:not([vertical])) .line {
      border-bottom: var(--m3e-divider-thickness, 1px) solid
        var(--m3e-divider-color, ${t.color.outlineVariant});
      height: inherit;
    }
    :host([vertical]) .line {
      border-right: var(--m3e-divider-thickness, 1px) solid
        var(--m3e-divider-color, ${t.color.outlineVariant});
      width: inherit;
    }
    :host([vertical][inset]) .line,
    :host([vertical][inset-start]) .line {
      top: var(--m3e-divider-inset-start-size, var(--m3e-divider-inset-size, 1rem));
    }
    :host(:not([vertical])[inset]) .line,
    :host(:not([vertical])[inset-start]) .line {
      left: var(--m3e-divider-inset-start-size, var(--m3e-divider-inset-size, 1rem));
    }
    :host([vertical][inset]) .line,
    :host([vertical][inset-end]) .line {
      bottom: var(--m3e-divider-inset-end-size, var(--m3e-divider-inset-size, 1rem));
    }
    :host(:not([vertical])[inset]) .line,
    :host(:not([vertical])[inset-end]) .line {
      right: var(--m3e-divider-inset-end-size, var(--m3e-divider-inset-size, 1rem));
    }
    :host([vertical]:not([inset]):not([inset-start])) .line {
      top: 0;
    }
    :host(:not([vertical]):not([inset]):not([inset-start])) .line {
      left: 0;
    }
    :host([vertical]:not([inset]):not([inset-end])) .line {
      bottom: 0;
    }
    :host(:not([vertical]):not([inset]):not([inset-end])) .line {
      right: 0;
    }
    @media (forced-colors: active) {
      .line {
        border-color: GrayText;
      }
    }
  `,d([p({type:Boolean,reflect:!0})],fi.prototype,"vertical",2),d([p({type:Boolean,reflect:!0})],fi.prototype,"inset",2),d([p({attribute:"inset-start",type:Boolean,reflect:!0})],fi.prototype,"insetStart",2),d([p({attribute:"inset-end",type:Boolean,reflect:!0})],fi.prototype,"insetEnd",2),fi=d([y("m3e-divider")],fi);var bi=class{static observe(a,e){if(a.length==0)return()=>{};let i=a.map(l=>matchMedia(l)),n=()=>{let l=new Map;a.forEach((h,u)=>l.set(h,i[u].matches)),e(l)};return i.forEach(l=>l.addEventListener("change",n)),n(),()=>{i.forEach(l=>l.removeEventListener("change",n)),i.length=0}}};globalThis.M3eBreakpointObserver=bi;var Ae={containerColor:r(`var(--m3e-drawer-container-color, ${t.color.surface})`),containerElevation:r(`var(--m3e-drawer-container-elevation, ${t.elevation.level0})`),containerWidth:r("var(--m3e-drawer-container-width, 22.5rem)"),scrimOpacity:r("var(--m3e-drawer-container-scrim-opacity, 32%)"),cornerShape:r(`var(--m3e-modal-drawer-corner-shape, ${t.shape.corner.large})`),modalContainerColor:r(`var(--m3e-modal-drawer-container-color, ${t.color.surfaceContainerLow})`),modalContainerElevation:r(`var(--m3e-modal-drawer-elevation, ${t.elevation.level1})`),dividerColor:r(`var(--m3e-drawer-divider-color, ${t.color.outline})`),dividerThickness:r("var(--m3e-drawer-divider-thickness, 1px)")};var x3=b`
  :host {
    position: relative;
    overflow: hidden;
    flex: 1 1 auto;
  }
  .start,
  .end {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 3;
    outline: none;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: ${t.scrollbar.thinWidth};
    scrollbar-color: ${t.scrollbar.color};
    box-sizing: border-box;
    background-color: ${Ae.containerColor};
    box-shadow: ${Ae.containerElevation};
    transition: ${r(`margin ${t.motion.duration.medium4} ${t.motion.easing.standard},
      visibility ${t.motion.duration.medium4} ${t.motion.easing.standard} allow-discrete,
      background-color ${t.motion.duration.medium4} ${t.motion.easing.standard},
      box-shadow ${t.motion.duration.medium4} ${t.motion.easing.standard}`)};
  }
  .start {
    inset-inline-start: 0;
  }
  .end {
    inset-inline-end: 0;
  }
  :host(:not([start])) .start {
    visibility: hidden;
  }
  :host(:not([start]):not(:dir(rtl))) .start {
    margin-left: calc(0px - var(--_start-drawer-size, ${Ae.containerWidth}));
  }
  :host(:not([start]):dir(rtl)) .start {
    margin-right: calc(0px - var(--_start-drawer-size, ${Ae.containerWidth}));
  }
  :host([start]:not(:dir(rtl))) .start {
    margin-left: 0;
  }
  :host([start]:dir(rtl)) .start {
    margin-right: 0;
  }
  :host(:not([end])) .end {
    visibility: hidden;
  }
  :host(:not([end]):not(:dir(rtl))) .end {
    margin-right: calc(0px - var(--_end-drawer-size, ${Ae.containerWidth}));
  }
  :host(:not([end]):dir(rtl)) .end {
    margin-left: calc(0px - var(--_end-drawer-size, ${Ae.containerWidth}));
  }
  :host([end]:not(:dir(rtl))) .end {
    margin-right: 0;
  }
  :host([end]:dir(rtl)) .end {
    margin-left: 0;
  }
  ::slotted([slot="start"]),
  ::slotted([slot="end"]) {
    height: 100%;
    width: ${Ae.containerWidth};
    box-sizing: border-box;
  }
  .content {
    position: relative;
    height: 100%;
    overflow: auto;
    margin-left: 0;
    margin-right: 0;
    transition: ${r(`margin ${t.motion.duration.medium4} ${t.motion.easing.standard}`)};
  }
  :host(.-start-push[start]:not(:dir(rtl))) .content,
  :host(.-start-side[start]:not(:dir(rtl))) .content {
    margin-left: var(--_start-drawer-size, ${Ae.containerWidth});
  }
  :host(.-start-push[start]:dir(rtl)) .content,
  :host(.-start-side[start]:dir(rtl)) .content {
    margin-right: var(--_start-drawer-size, ${Ae.containerWidth});
  }
  :host(.-end-push[end]:not(:dir(rtl))) .content,
  :host(.-end-side[end]:not(:dir(rtl))) .content {
    margin-right: var(--_end-drawer-size, ${Ae.containerWidth});
  }
  :host(.-end-push[end]:dir(rtl)) .content,
  :host(.-end-side[end]:dir(rtl)) .content {
    margin-left: var(--_end-drawer-size, ${Ae.containerWidth});
  }
  .scrim {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${t.color.scrim};
    opacity: 0;
    visibility: hidden;
    transition: ${r(`opacity ${t.motion.duration.medium4} ${t.motion.easing.standard}, 
        visibility ${t.motion.duration.medium4} ${t.motion.easing.standard} allow-discrete`)};
  }
  @starting-style {
    .scrim {
      opacity: 0;
    }
  }
  :host(.-start-push[start]) .scrim,
  :host(.-end-push[end]) .scrim,
  :host(.-start-over[start]) .scrim,
  :host(.-end-over[end]) .scrim {
    visibility: visible;
    opacity: ${Ae.scrimOpacity};
  }
  :host(.-start-push) .start,
  :host(.-start-over) .start {
    border-start-end-radius: ${Ae.cornerShape};
    border-end-end-radius: ${Ae.cornerShape};
  }
  :host(.-end-push) .end,
  :host(.-end-over) .end {
    border-start-start-radius: ${Ae.cornerShape};
    border-end-start-radius: ${Ae.cornerShape};
  }
  :host(.-start-push) .start,
  :host(.-end-push) .end,
  :host(.-start-over) .start,
  :host(.-end-over) .end {
    background-color: ${Ae.modalContainerColor};
    box-shadow: ${Ae.modalContainerElevation};
  }
  :host([start-divider]) .start {
    border-inline-end-color: transparent;
    border-inline-end-width: ${Ae.dividerThickness};
    border-inline-end-style: solid;
    box-sizing: border-box;
  }
  :host([start-divider].-start-side[start]:not(.-end-push[end]):not(.-end-over[end])) .start {
    border-inline-end-color: ${Ae.dividerColor};
  }
  :host([end-divider]) .end {
    border-inline-start-color: transparent;
    border-inline-start-width: ${Ae.dividerThickness};
    border-inline-start-style: solid;
    box-sizing: border-box;
  }
  :host([end-divider].-end-side[end]:not(.-start-push[start]):not(.-start-over[start])) .end {
    border-inline-start-color: ${Ae.dividerColor};
  }
  :host(.-no-animate) .start,
  :host(.-no-animate) .end,
  :host(.-no-animate) .content {
    transition: none;
  }
  @media (forced-colors: active) {
    .start,
    .end {
      background-color: Canvas;
      box-shadow: unset;
      transition: ${r(`margin ${t.motion.duration.medium4} ${t.motion.easing.standard},
      visibility ${t.motion.duration.medium4} ${t.motion.easing.standard} allow-discrete`)};
    }
    :host(.-start-push) .start,
    :host(.-end-push) .end,
    :host(.-start-over) .start,
    :host(.-end-over) .end {
      background-color: Canvas;
      box-shadow: unset;
      border-color: CanvasText;
    }
    .start,
    .end {
      border-style: solid;
      border-color: Canvas;
      border-width: 1px;
    }
    .start {
      border-inline-start-style: none;
    }
    .end {
      border-inline-end-style: none;
    }
    :host([start-divider].-start-side[start]:not(.-end-push[end]):not(.-end-over[end])) .start {
      border-inline-end-color: GrayText;
    }
    :host([end-divider].-end-side[end]:not(.-start-push[start]):not(.-start-over[start])) .end {
      border-inline-start-color: GrayText;
    }
  }
  @media (prefers-reduced-motion) {
    .start,
    .end,
    .content,
    .scrim {
      transition: none;
    }
  }
`;var Yn,bc,gc,yc,qt,$3,S3,k3,w3,wp,Lp,Ho=class extends k{constructor(){super(...arguments);m(this,qt);this._startMode="side";this._endMode="side";m(this,Yn);m(this,bc,!1);m(this,gc,!1);m(this,yc,new Le(this,{target:null,skipInitial:!0,callback:e=>c(this,qt,w3).call(this,e)}));this.start=!1;this.startMode="side";this.startDivider=!1;this.end=!1;this.endMode="side";this.endDivider=!1}connectedCallback(){super.connectedCallback(),this.classList.add("-no-animate")}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,Yn))==null||e.call(this),c(this,qt,wp).call(this)}update(e){var i;super.update(e),(e.has("startMode")||e.has("endMode"))&&((i=s(this,Yn))==null||i.call(this),this.startMode==="auto"||this.endMode==="auto"?g(this,Yn,bi.observe(["(max-width: 599.98px)","(min-width: 600px) and (max-width: 959.98px)"],n=>c(this,qt,Lp).call(this,n,!0))):c(this,qt,Lp).call(this)),e.has("start")?this.start&&this.end&&this._endMode!=="side"&&(this.end=!1,this.dispatchEvent(new Event("change",{bubbles:!0}))):e.has("end")&&this.end&&this.start&&this._startMode!=="side"&&(this.start=!1,this.dispatchEvent(new Event("change",{bubbles:!0})))}firstUpdated(e){super.firstUpdated(e);let i=this.shadowRoot?.querySelector(".start");i&&s(this,yc).observe(i),i=this.shadowRoot?.querySelector(".end"),i&&s(this,yc).observe(i)}render(){return f`<div class="start">
        <m3e-focus-trap ?disabled="${!this.start||this._startMode==="side"||s(this,bc)}">
          <slot name="start" @slotchange="${c(this,qt,S3)}"></slot>
        </m3e-focus-trap>
      </div>
      <div
        class="content"
        .inert="${(this._startMode!=="side"||this._endMode!=="side")&&(this.start||this.end)}"
      >
        <slot></slot>
      </div>
      <div class="scrim" @click="${c(this,qt,$3)}"></div>
      <div class="end">
        <m3e-focus-trap ?disabled="${!this.end||this._endMode==="side"||s(this,gc)}">
          <slot name="end" @slotchange="${c(this,qt,k3)}"></slot>
        </m3e-focus-trap>
      </div>`}};Yn=new WeakMap,bc=new WeakMap,gc=new WeakMap,yc=new WeakMap,qt=new WeakSet,$3=function(){this._startMode!=="side"&&(this.start=!1),this._endMode!=="side"&&(this.end=!1),this.dispatchEvent(new Event("change",{bubbles:!0}))},S3=function(e){g(this,bc,!J(e.target))},k3=function(e){g(this,gc,!J(e.target))},w3=function(e){for(let i of e){let n=Array.isArray(i.borderBoxSize)?i.borderBoxSize[0]:i.borderBoxSize;i.target.classList.contains("start")?this.style.setProperty("--_start-drawer-size",`${n.inlineSize}px`):i.target.classList.contains("end")&&this.style.setProperty("--_end-drawer-size",`${n.inlineSize}px`)}this.classList.contains("-no-animate")&&(this.offsetTop,this.classList.remove("-no-animate"))},wp=function(){this.classList.remove("-start-over"),this.classList.remove("-start-push"),this.classList.remove("-start-side"),this.classList.remove("-end-over"),this.classList.remove("-end-push"),this.classList.remove("-end-side")},Lp=function(e,i=!1){let n=!1,l=!1;this.startMode==="auto"?e?.get("(min-width: 960px) and (max-width: 1279.98px)")?this._startMode="side":e?.get("(min-width: 600px) and (max-width: 959.98px)")?(n=this._startMode==="side"&&this.start,this._startMode="push"):e?.get("(max-width: 599.98px)")?(n=this._startMode!=="over"&&this.start,this._startMode="over"):this._startMode="side":this._startMode=this.startMode,this.endMode==="auto"?e?.get("(min-width: 960px) and (max-width: 1279.98px)")?this._endMode="side":e?.get("(min-width: 600px) and (max-width: 959.98px)")?(l=this._endMode==="side"&&this.end,this._endMode="push"):e?.get("(max-width: 599.98px)")?(l=this._endMode!=="over"&&this.end,this._endMode="over"):this._endMode="side":this._endMode=this.endMode,c(this,qt,wp).call(this),this.classList.add(`-start-${this._startMode}`),this.classList.add(`-end-${this._endMode}`),i&&(n||l)&&(n&&(this.start=!1),l&&(this.end=!1),this.dispatchEvent(new Event("change",{bubbles:!0})))},Ho.styles=x3,d([ie()],Ho.prototype,"_startMode",2),d([ie()],Ho.prototype,"_endMode",2),d([p({type:Boolean,reflect:!0})],Ho.prototype,"start",2),d([p({attribute:"start-mode",reflect:!0})],Ho.prototype,"startMode",2),d([p({attribute:"start-divider",type:Boolean,reflect:!0})],Ho.prototype,"startDivider",2),d([p({type:Boolean,reflect:!0})],Ho.prototype,"end",2),d([p({attribute:"end-mode",reflect:!0})],Ho.prototype,"endMode",2),d([p({attribute:"end-divider",type:Boolean,reflect:!0})],Ho.prototype,"endDivider",2),Ho=d([y("m3e-drawer-container")],Ho);var xc,Jn,Kr,L3,E3,Cm,xm=class extends ce(Ve){constructor(){super(...arguments);m(this,Kr);m(this,xc,()=>c(this,Kr,L3).call(this));m(this,Jn,!1)}attach(e){super.attach(e),this.htmlFor&&this.parentElement&&je(this.parentElement,"aria-controls",this.htmlFor);let i=e.closest("m3e-drawer-container");i&&(i.addEventListener("change",s(this,xc)),c(this,Kr,Cm).call(this,i,!0))}detach(){this.parentElement&&(this.htmlFor&&xt(this.parentElement,"aria-controls",this.htmlFor),this.parentElement.ariaExpanded=null),this.control?.closest("m3e-drawer-container")?.removeEventListener("change",s(this,xc)),super.detach()}_onClick(){c(this,Kr,E3).call(this)}};xc=new WeakMap,Jn=new WeakMap,Kr=new WeakSet,L3=function(){if(this.control&&!s(this,Jn)){let e=this.control.closest("m3e-drawer-container");e&&c(this,Kr,Cm).call(this,e,!0)}},E3=async function(){if(!this.parentElement||!this.control)return;let e=this.control.closest("m3e-drawer-container");if(e){g(this,Jn,!0);try{this.control.slot==="start"?e.start=!e.start:this.control.slot==="end"&&(e.end=!e.end),e.isUpdatePending&&await e.updateComplete,await c(this,Kr,Cm).call(this,e,!1)}finally{g(this,Jn,!1)}}},Cm=async function(e,i){if(!this.parentElement||!this.control)return;let n=!1;this.control.slot==="start"?n=e.start:this.control.slot==="end"&&(n=e.end),this.parentElement.ariaExpanded=`${n}`,i&&this.parentElement.hasAttribute("toggle")&&this.parentElement.toggleAttribute("selected",n),this.parentElement instanceof k&&(await this.parentElement.updateComplete,this.parentElement.ariaPressed=null)},xm=d([y("m3e-drawer-toggle")],xm);var Wa,es,T3,M3,Qn=class extends k{constructor(){super(...arguments);m(this,es);m(this,Wa,[]);this.multi=!1}get panels(){return s(this,Wa)}render(){return f`<slot @slotchange="${c(this,es,T3)}" @opening="${c(this,es,M3)}"></slot>`}};Wa=new WeakMap,es=new WeakSet,T3=function(){if(g(this,Wa,[...this.querySelectorAll("m3e-expansion-panel")]),this.multi)return;let e=!1;for(let i of s(this,Wa).filter(n=>!n.open))e&&(i.open=!1),e=!0},M3=function(e){if(!this.multi)for(let i of s(this,Wa).filter(n=>n!==e.target&&n.open))i.open=!1},Qn.styles=b`
    :host {
      display: block;
    }
    ::slotted(m3e-expansion-panel) {
      --m3e-expansion-panel-container-color: ${t.color.surface};
      --m3e-expansion-panel-elevation: ${t.elevation.level2};
      --m3e-expansion-panel-open-shape: ${t.shape.corner.medium};
      --_expansion-panel-open-spacing: 1rem;
    }
    ::slotted(m3e-expansion-panel:first-of-type:last-of-type) {
      --m3e-expansion-panel-shape: ${t.shape.corner.medium};
    }
    ::slotted(m3e-expansion-panel:first-of-type:not(:last-of-type)) {
      --m3e-expansion-panel-shape: ${t.shape.corner.value.medium} ${t.shape.corner.value.medium}
        ${t.shape.corner.value.none} ${t.shape.corner.value.none};
    }
    ::slotted(m3e-expansion-panel:last-of-type:not(:first-of-type)) {
      --m3e-expansion-panel-shape: ${t.shape.corner.value.none} ${t.shape.corner.value.none}
        ${t.shape.corner.value.medium} ${t.shape.corner.value.medium};
    }
  `,d([p({type:Boolean})],Qn.prototype,"multi",2),Qn=d([y("m3e-accordion")],Qn);var Jt={collapsedHeight:r("var(--m3e-expansion-header-collapsed-height, 3rem)"),expandedHeight:r("var(--m3e-expansion-header-expanded-height, 4rem)"),paddingLeft:r("var(--m3e-expansion-header-padding-left, 1.5rem)"),paddingRight:r("var(--m3e-expansion-header-padding-right, 1.5rem)"),spacing:r("var(--m3e-expansion-header-spacing, 0.5rem)"),toggleIconSize:r("var(--m3e-expansion-header-toggle-icon-size, 1.5rem)"),fontSize:r(`var(--m3e-expansion-header-font-size, ${t.typescale.standard.title.medium.fontSize})`),fontWeight:r(`var(--m3e-expansion-header-font-weight, ${t.typescale.standard.title.medium.fontWeight})`),lineHeight:r(`var(--m3e-expansion-header-line-height, ${t.typescale.standard.title.medium.lineHeight})`),tracking:r(`var(--m3e-expansion-header-tracking, ${t.typescale.standard.title.medium.tracking})`)};var P3=b`
  :host {
    display: block;
    border-radius: inherit;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transition: ${r(`height var(--m3e-collapsible-animation-duration, ${t.motion.duration.medium1})
        ${t.motion.easing.standard}`)};
  }
  .base {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: inherit;
    outline: none;
    position: relative;
    padding-inline-start: ${Jt.paddingLeft};
    padding-inline-end: ${Jt.paddingRight};
    font-size: ${Jt.fontSize};
    font-weight: ${Jt.fontWeight};
    line-height: ${Jt.lineHeight};
    letter-spacing: ${Jt.tracking};
    column-gap: ${Jt.spacing};
  }
  :host(:not(:disabled)) {
    cursor: pointer;
  }
  :host(:not([aria-expanded="true"])) {
    height: ${Jt.collapsedHeight};
  }
  :host([aria-expanded="true"]) {
    height: ${Jt.expandedHeight};
  }
  :host(:not(:focus-visible)) .state-layer {
    --m3e-state-layer-focus-color: transparent;
  }
  :host([aria-expanded="true"]) .state-layer {
    --m3e-state-layer-hover-color: transparent;
  }
  :host([aria-expanded="true"]) [part="background"],
  .content {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }
  .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    font-size: ${Jt.toggleIconSize};
    transition: ${r(`transform var(--m3e-collapsible-animation-duration, ${t.motion.duration.medium1})
        ${t.motion.easing.standard}`)};
  }
  :host([toggle-direction="vertical"][aria-expanded="true"]) .toggle {
    transform: rotate(180deg);
  }
  :host([toggle-direction="horizontal"][aria-expanded="true"]) .toggle {
    transform: rotate(var(--_expansion-header-horizontal-expanded-toggle-rotation, 90deg));
  }
  :host([toggle-position="before"]) .toggle {
    margin-inline-start: calc(0px - ${Jt.spacing});
  }
  :host([toggle-position="after"]) .toggle {
    margin-inline-end: calc(0px - ${Jt.spacing});
  }
  :host([hide-toggle]) .toggle {
    display: none;
  }
  ::slotted([slot="toggle-icon"]) {
    font-size: inherit !important;
    flex: none;
  }
  ::slotted(svg[slot="toggle-icon"]) {
    width: 1em;
    height: 1em;
  }
  @media (prefers-reduced-motion) {
    :host,
    .toggle {
      transition: none;
    }
  }
`;var Qt={textColor:r(`var(--m3e-expansion-panel-text-color, ${t.color.onSurface})`),disabledTextColor:r(`var(--m3e-expansion-panel-disabled-text-color, ${t.color.onSurface})`),disabledTextOpacity:r("var(--m3e-expansion-panel-disabled-text-opacity, 38%)"),containerColor:r("var(--m3e-expansion-panel-container-color)"),collapsedElevation:r("var(--m3e-expansion-panel-elevation)"),collapsedShape:r("var(--m3e-expansion-panel-shape)"),expandedElevation:r("var(--m3e-expansion-panel-open-elevation, var(--m3e-expansion-panel-elevation))"),expandedShape:r("var(--m3e-expansion-panel-open-shape, var(--m3e-expansion-panel-shape))"),expandedSpace:r("var(--_expansion-panel-open-spacing)"),contentPadding:r("var(--m3e-expansion-panel-content-padding, 0 1.5rem 1rem 1.5rem)"),actionsSpacing:r("var(--m3e-expansion-panel-actions-spacing, 0.5rem)"),actionsPadding:r("var(--m3e-expansion-panel-actions-padding, 1rem 1.5rem 1rem 1.5rem)"),actionsDividerThickness:r("var(--m3e-expansion-panel-actions-divider-thickness, var(--m3e-divider-thickness, 1px))"),actionsDividerColor:r(`var(--m3e-expansion-panel-actions-divider-color, var(--m3e-divider-color, ${t.color.outlineVariant}))`)};var H3=b`
  :host {
    display: block;
  }
  .base {
    background-color: ${Qt.containerColor};
    transition: ${r(`box-shadow var(--m3e-collapsible-animation-duration, ${t.motion.duration.medium1})
        ${t.motion.easing.standard}`)};
  }
  :host(:not(:disabled)) .base {
    color: ${Qt.textColor};
  }
  :host(:disabled) .base {
    color: color-mix(
      in srgb,
      ${Qt.disabledTextColor} ${Qt.disabledTextOpacity},
      transparent
    );
  }
  :host(:not([open])) .base {
    box-shadow: ${Qt.collapsedElevation};
    border-radius: ${Qt.collapsedShape};
  }
  :host([open]) .base {
    box-shadow: ${Qt.expandedElevation};
    border-radius: ${Qt.expandedShape};
    margin-block: ${Qt.expandedSpace};
  }
  .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${Jt.toggleIconSize};
  }
  ::slotted([slot="toggle-icon"]) {
    font-size: inherit !important;
    flex: none;
  }
  .toggle svg,
  ::slotted(svg[slot="toggle-icon"]) {
    width: 1em;
    height: 1em;
  }
  .content {
    padding: ${Qt.contentPadding};
  }
  :host(:not(.-has-actions)) .actions {
    display: none;
  }
  .actions {
    padding: ${Qt.actionsPadding};
    border-top-style: solid;
    border-top-width: ${Qt.actionsDividerThickness};
    border-top-color: ${Qt.actionsDividerColor};
  }
  ::slotted([slot="actions"]) {
    flex: none;
    display: flex;
    align-items: center;
    column-gap: ${Qt.actionsSpacing};
  }
  ::slotted([slot="actions"][end]) {
    justify-content: flex-end;
  }
  @media (prefers-reduced-motion) {
    .base {
      transition: none;
    }
  }
  @media (forced-colors: active) {
    .base {
      border: 1px solid CanvasText;
    }
    :host(:disabled) .base {
      color: GrayText;
    }
    .actions {
      border-top-color: GrayText;
    }
  }
`;var Cc,Ep,Zr=class extends de(ae(N(D(M(k,"button"),!0)))){constructor(){super(...arguments);m(this,Cc);this.toggleDirection="vertical";this.togglePosition="after";this.hideToggle=!1}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer].forEach(i=>i?.attach(this))}render(){return f`<div class="base">
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      ${this.togglePosition==="before"?c(this,Cc,Ep).call(this):R}
      <div class="content">
        <slot></slot>
      </div>
      ${this.togglePosition==="after"?c(this,Cc,Ep).call(this):R}
    </div>`}};Cc=new WeakSet,Ep=function(){return f`<div class="toggle" aria-hidden="true">
      <slot name="toggle-icon"></slot>
    </div>`},Zr.styles=P3,d([L(".focus-ring")],Zr.prototype,"_focusRing",2),d([L(".state-layer")],Zr.prototype,"_stateLayer",2),d([p({attribute:"toggle-direction",reflect:!0})],Zr.prototype,"toggleDirection",2),d([p({attribute:"toggle-position",reflect:!0})],Zr.prototype,"togglePosition",2),d([p({attribute:"hide-toggle",type:Boolean,reflect:!0})],Zr.prototype,"hideToggle",2),Zr=d([y("m3e-expansion-header")],Zr);var Sc,kc,wc,Lc,$t,R3,A3,_3,$c,I3,Tp,Ro=class extends vo(N(D(k,!0)),"opening","opened","closing","closed"){constructor(){super(...arguments);m(this,$t);m(this,Sc,Ro.__nextId++);m(this,kc,`m3e-expansion-panel-${s(this,Sc)}-content`);m(this,wc,`m3e-expansion-panel-${s(this,Sc)}-header`);m(this,Lc);this.open=!1;this.toggleDirection="vertical";this.togglePosition="after";this.hideToggle=!1}focus(e){this._header?.focus(e)}blur(){this._header?.blur()}click(){this._header?.click()}connectedCallback(){super.connectedCallback(),g(this,Lc,O.observe(()=>{this.requestUpdate(),c(this,$t,Tp).call(this)}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,Lc))==null||e.call(this)}firstUpdated(e){super.firstUpdated(e),c(this,$t,Tp).call(this)}render(){return f`<div class="base">
      <m3e-expansion-header
        id="${s(this,wc)}"
        toggle-direction="${this.toggleDirection}"
        toggle-position="${this.togglePosition}"
        ?hide-toggle="${this.hideToggle}"
        ?disabled="${this.disabled}"
        aria-expanded="${this.open}"
        aria-controls="${s(this,kc)}"
        @click="${c(this,$t,A3)}"
        @keydown="${c(this,$t,_3)}"
      >
        <div slot="toggle-icon" class="toggle">
          <slot name="toggle-icon">${c(this,$t,R3).call(this)}</slot>
        </div>
        <slot name="header"></slot>
      </m3e-expansion-header>
      <m3e-collapsible
        id="${s(this,kc)}"
        role="region"
        aria-labelledby="${s(this,wc)}"
        ?open="${this.open}"
        @opening="${c(this,$t,$c)}"
        @opened="${c(this,$t,$c)}"
        @closing="${c(this,$t,$c)}"
        @closed="${c(this,$t,$c)}"
      >
        <div class="content">
          <slot></slot>
        </div>
        <div class="actions">
          <slot name="actions" @slotchange="${c(this,$t,I3)}"></slot>
        </div>
      </m3e-collapsible>
    </div>`}};Sc=new WeakMap,kc=new WeakMap,wc=new WeakMap,Lc=new WeakMap,$t=new WeakSet,R3=function(){return this.toggleDirection==="vertical"?f`<svg viewBox="0 -960 960 960" fill="currentColor">
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>`:O.current==="ltr"?f`<svg viewBox="0 -960 960 960" fill="currentColor">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>`:f`<svg viewBox="0 -960 960 960" fill="currentColor">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>`},A3=function(){this.open=!this.open},_3=function(e){switch(e.key){case"ArrowUp":{e.preventDefault();let i=this.closest("m3e-accordion");if(i){let n=[...i.panels].reverse(),l=n.indexOf(this);(n.find((h,u)=>!h.disabled&&u>l)??n.find((h,u)=>!h.disabled&&u<l))?._header?.focus()}else this.open=!1}break;case"ArrowDown":{e.preventDefault();let i=this.closest("m3e-accordion");if(i){let n=i.panels.indexOf(this);(i.panels.find((l,h)=>!l.disabled&&h>n)??i.panels.find((l,h)=>!l.disabled&&h<n))?._header?.focus()}else this.open=!0}break}},$c=function(e){e.stopPropagation(),this.dispatchEvent(new Event(e.type,{bubbles:!0}))},I3=function(e){this.classList.toggle("-has-actions",J(e.target))},Tp=function(){O.current==="rtl"?this._header?.style.setProperty("--_expansion-header-horizontal-expanded-toggle-rotation","-90deg"):this._header?.style.removeProperty("--_expansion-header-horizontal-expanded-toggle-rotation")},Ro.styles=H3,Ro.__nextId=0,d([L("m3e-expansion-header")],Ro.prototype,"_header",2),d([p({type:Boolean,reflect:!0})],Ro.prototype,"open",2),d([p({attribute:"toggle-direction",reflect:!0})],Ro.prototype,"toggleDirection",2),d([p({attribute:"toggle-position",reflect:!0})],Ro.prototype,"togglePosition",2),d([p({attribute:"hide-toggle",type:Boolean,reflect:!0})],Ro.prototype,"hideToggle",2),Ro=d([y("m3e-expansion-panel")],Ro);var z3=b`
  :host {
    display: inline-block;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .base {
    box-sizing: border-box;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  .touch {
    position: absolute;
    height: 3rem;
    left: 0;
    right: 0;
  }
  .wrapper {
    width: 100%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
  }
  .label {
    justify-self: center;
    flex: 1 1 auto;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  .icon {
    transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  :host(:not(:disabled):not([disabled-interactive])) {
    cursor: pointer;
  }
  :host([disabled-interactive]) {
    cursor: not-allowed;
  }
  .close-icon,
  ::slotted(:not([slot])),
  ::slotted([slot="close-icon"]) {
    font-size: inherit !important;
    flex: none;
  }
  .close-icon,
  ::slotted(svg:not([slot])),
  ::slotted(svg[slot="close-icon"]) {
    width: 1em;
    height: 1em;
  }
  :host(:not([extended])) ::slotted([slot="label"]),
  .base.with-menu ::slotted([slot="label"]),
  .base:not(.with-menu) ::slotted([slot="close-icon"]),
  .base:not(.with-menu) .close-icon,
  :host([aria-expanded="true"]) .base.with-menu ::slotted(:not([slot])),
  :host([aria-expanded="false"]) .base.with-menu ::slotted([slot="close-icon"]),
  :host([aria-expanded="false"]) .base.with-menu .close-icon {
    display: none;
  }
  :host([aria-expanded="true"]) .base.with-menu {
    border-radius: var(--m3e-fab-menu-close-button-container-shape, ${t.shape.corner.full});
    height: calc(var(--m3e-fab-menu-close-button-container-height, 3.5rem) + ${t.density.calc(-3)});
  }
  :host([aria-expanded="true"]) .base.with-menu .wrapper {
    padding-inline-start: calc(var(--m3e-fab-menu-close-button-leading-space, 1rem) + ${t.density.calc(-3)});
    padding-inline-end: calc(var(--m3e-fab-menu-close-button-trailing-space, 1rem) + ${t.density.calc(-3)});
  }
  :host([aria-expanded="true"]) .base.with-menu .icon {
    font-size: calc(var(--m3e-fab-menu-close-button-icon-size, 1.5rem) + ${t.density.calc(-3)});
    --m3e-icon-size: calc(var(--m3e-fab-menu-close-button-icon-size, 1.5rem) + ${t.density.calc(-3)});
  }
  .base.with-menu {
    transition: height ${t.motion.spring.fastSpatial};
  }
  .base.with-menu .wrapper {
    transition: padding ${t.motion.spring.fastSpatial};
  }
  a {
    all: unset;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
  }
  @media (forced-colors: active) {
    .base,
    .icon {
      transition: none;
    }
    .base {
      outline-style: solid;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])) .base {
      background-color: ButtonFace;
      outline-color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])) .label,
    :host([variant]:not(:disabled):not([disabled-interactive])) .icon {
      color: ButtonText;
    }
    :host([variant]:disabled) .base,
    :host([variant][disabled-interactive]) .base {
      outline-color: GrayText;
      background-color: unset;
    }
    :host([variant]:disabled) .label,
    :host([variant][disabled-interactive]) .label,
    :host([variant]:disabled) .icon,
    :host([variant][disabled-interactive]) .icon {
      color: GrayText;
    }
    :host([size="small"]) .base {
      outline-offset: calc(0px - var(--m3e-button-small-outline-thickness, 1px));
      outline-width: var(--m3e-button-small-outline-thickness, 1px);
    }
    :host([size="medium"]) .base {
      outline-offset: calc(0px - var(--m3e-button-medium-outline-thickness, 1px));
      outline-width: var(--m3e-button-medium-outline-thickness, 1px);
    }
    :host([size="large"]) .base {
      outline-offset: calc(0px - var(--m3e-button-large-outline-thickness, 2px));
      outline-width: var(--m3e-button-large-outline-thickness, 2px);
    }
  }
  @media (prefers-reduced-motion) {
    .base,
    .base.resting,
    .base.pressed,
    .label,
    .icon {
      transition: none;
    }
  }
`;var Wt={small:{containerHeight:r(`calc(var(--m3e-fab-small-container-height, var(--m3e-fab-container-height, 3.5rem)) + ${t.density.calc(-3)})`),labelTextFontSize:r(`var(--m3e-fab-small-label-text-font-size, var(--m3e-fab-label-text-font-size, ${t.typescale.standard.title.medium.fontSize}))`),labelTextFontWeight:r(`var(--m3e-fab-small-label-text-font-weight, var(--m3e-fab-label-text-font-weight, ${t.typescale.standard.title.medium.fontWeight}))`),labelTextLineHeight:r(`var(--m3e-fab-small-label-text-line-height, var(--m3e-fab-label-text-line-height, ${t.typescale.standard.title.medium.lineHeight}))`),labelTextTracking:r(`var(--m3e-fab-small-label-text-tracking, var(--m3e-fab-label-text-tracking, ${t.typescale.standard.title.medium.tracking}))`),iconSize:r(`calc(var(--m3e-fab-small-icon-size, var(--m3e-fab-icon-size, 1.5rem)) + ${t.density.calc(-3)})`),extendedIconSize:r("var(--m3e-fab-small-icon-size, var(--m3e-fab-icon-size, 1.5rem))"),shape:r(`var(--m3e-fab-small-shape, var(--m3e-fab-shape, ${t.shape.corner.large}))`),leadingSpace:r(`calc(var(--m3e-fab-small-leading-space, var(--m3e-fab-leading-space, 1rem)) + ${t.density.calc(-3)})`),trailingSpace:r(`calc(var(--m3e-fab-small-trailing-space, var(--m3e-fab-trailing-space, 1rem)) + ${t.density.calc(-3)})`),iconLabelSpace:r("var(--m3e-fab-small-icon-label-space, var(--m3e-fab-icon-label-space, 0.5rem))"),extendedLeadingSpace:r("var(--m3e-fab-small-leading-space, var(--m3e-fab-leading-space, 1rem))"),extendedTrailingSpace:r("var(--m3e-fab-small-trailing-space, var(--m3e-fab-trailing-space, 1rem))")},medium:{containerHeight:r(`calc(var(--m3e-fab-medium-container-height, var(--m3e-fab-container-height, 5rem)) + ${t.density.calc(-3)})`),labelTextFontSize:r(`var(--m3e-fab-medium-label-text-font-size, var(--m3e-fab-label-text-font-size, ${t.typescale.standard.title.large.fontSize}))`),labelTextFontWeight:r(`var(--m3e-fab-medium-label-text-font-weight, var(--m3e-fab-label-text-font-weight, ${t.typescale.standard.title.large.fontWeight}))`),labelTextLineHeight:r(`var(--m3e-fab-medium-label-text-line-height, var(--m3e-fab-label-text-line-height, ${t.typescale.standard.title.large.lineHeight}))`),labelTextTracking:r(`var(--m3e-fab-medium-label-text-tracking, var(--m3e-fab-label-text-tracking, ${t.typescale.standard.title.large.tracking}))`),iconSize:r(`calc(var(--m3e-fab-medium-icon-size, var(--m3e-fab-icon-size, 1.75rem)) + ${t.density.calc(-3)})`),extendedIconSize:r("var(--m3e-fab-medium-icon-size, var(--m3e-fab-icon-size, 1.75rem))"),shape:r(`var(--m3e-fab-medium-shape, var(--m3e-fab-shape, ${t.shape.corner.largeIncreased}))`),leadingSpace:r(`calc(var(--m3e-fab-medium-leading-space, var(--m3e-fab-leading-space, 1.625rem)) + ${t.density.calc(-3)})`),trailingSpace:r(`calc(var(--m3e-fab-medium-trailing-space, var(--m3e-fab-trailing-space, 1.625rem)) + ${t.density.calc(-3)})`),iconLabelSpace:r("var(--m3e-fab-medium-icon-label-space, var(--m3e-fab-icon-label-space, 0.75rem))"),extendedLeadingSpace:r("var(--m3e-fab-medium-leading-space, var(--m3e-fab-leading-space, 1.625rem))"),extendedTrailingSpace:r("var(--m3e-fab-medium-trailing-space, var(--m3e-fab-trailing-space, 1.625rem))")},large:{containerHeight:r(`calc(var(--m3e-fab-large-container-height, var(--m3e-fab-container-height, 6rem)) + ${t.density.calc(-3)})`),labelTextFontSize:r(`var(--m3e-fab-large-label-text-font-size, var(--m3e-fab-label-text-font-size, ${t.typescale.standard.headline.small.fontSize}))`),labelTextFontWeight:r(`var(--m3e-fab-large-label-text-font-weight, var(--m3e-fab-label-text-font-weight, ${t.typescale.standard.headline.small.fontWeight}))`),labelTextLineHeight:r(`var(--m3e-fab-large-label-text-line-height, var(--m3e-fab-label-text-line-height, ${t.typescale.standard.headline.small.lineHeight}))`),labelTextTracking:r(`var(--m3e-fab-large-label-text-tracking, var(--m3e-fab-label-text-tracking, ${t.typescale.standard.headline.small.tracking}))`),iconSize:r(`calc(var(--m3e-fab-large-icon-size, var(--m3e-fab-icon-size, 2.25rem)) + ${t.density.calc(-3)})`),extendedIconSize:r("var(--m3e-fab-large-icon-size, var(--m3e-fab-icon-size, 2.25rem))"),shape:r(`var(--m3e-fab-large-shape, var(--m3e-fab-shape, ${t.shape.corner.extraLarge}))`),leadingSpace:r(`calc(var(--m3e-fab-large-leading-space, var(--m3e-fab-leading-space, 1.75rem)) + ${t.density.calc(-3)})`),trailingSpace:r(`calc(var(--m3e-fab-large-trailing-space, var(--m3e-fab-trailing-space, 1.75rem)) + ${t.density.calc(-3)})`),iconLabelSpace:r("var(--m3e-fab-large-icon-label-space, var(--m3e-fab-icon-label-space, 1rem))"),extendedLeadingSpace:r("var(--m3e-fab-large-leading-space, var(--m3e-fab-leading-space, 1.75rem))"),extendedTrailingSpace:r("var(--m3e-fab-large-trailing-space, var(--m3e-fab-trailing-space, 1.75rem))")}};function Mp(o){return b`
    :host([size="${r(o)}"]) .base {
      height: ${Wt[o].containerHeight};
    }
    :host([size="${r(o)}"]) .base {
      border-radius: ${Wt[o].shape};
    }
    :host([size="${r(o)}"]) .label {
      font-size: ${Wt[o].labelTextFontSize};
      font-weight: ${Wt[o].labelTextFontWeight};
      line-height: ${Wt[o].labelTextLineHeight};
      letter-spacing: ${Wt[o].labelTextTracking};
    }
    :host([size="${r(o)}"]:not([extended])) .wrapper {
      padding-inline-start: ${Wt[o].leadingSpace};
      padding-inline-end: ${Wt[o].trailingSpace};
    }
    :host([size="${r(o)}"]:not([extended])) .icon {
      font-size: ${Wt[o].iconSize};
      --m3e-icon-size: ${Wt[o].iconSize};
    }
    :host([size="${r(o)}"][extended]) .wrapper {
      padding-inline-start: ${Wt[o].extendedLeadingSpace};
      padding-inline-end: ${Wt[o].extendedTrailingSpace};
      column-gap: ${Wt[o].iconLabelSpace};
    }
    :host([size="${r(o)}"][extended]) .icon {
      font-size: ${Wt[o].extendedIconSize};
      --m3e-icon-size: ${Wt[o].extendedIconSize};
    }
  `}var O3=[Mp("small"),Mp("medium"),Mp("large")];var ve={primary:{labelTextColor:r(`var(--m3e-primary-fab-label-text-color, var(--m3e-fab-label-text-color, ${t.color.onPrimary}))`),iconColor:r(`var(--m3e-primary-fab-icon-color, var(--m3e-fab-icon-color, ${t.color.onPrimary}))`),containerColor:r(`var(--m3e-primary-fab-container-color, var(--m3e-fab-container-color, ${t.color.primary}))`),containerElevation:r(`var(--m3e-primary-fab-container-elevation, var(--m3e-fab-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-primary-fab-lowered-container-elevation, var(--m3e-fab-lowered-container-elevation, ${t.elevation.level2}))`),disabled:{containerColor:r(`var(--m3e-primary-fab-disabled-container-color, var(--m3e-fab-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-primary-fab-disabled-container-opacity, var(--m3e-fab-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-primary-fab-disabled-icon-color, var(--m3e-fab-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-primary-fab-disabled-icon-opacity, var(--m3e-fab-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-primary-fab-disabled-label-text-color, var(--m3e-fab-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-primary-fab-disabled-label-text-opacity, var(--m3e-fab-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-primary-fab-disabled-container-elevation, var(--m3e-fab-disabled-container-elevation, ${t.elevation.level0}))`),loweredContainerElevation:r(`var(--m3e-primary-fab-lowered-disabled-container-elevation, var(--m3e-fab-lowered-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-primary-fab-hover-icon-color, var(--m3e-fab-hover-icon-color, ${t.color.onPrimary}))`),labelTextColor:r(`var(--m3e-primary-fab-hover-label-text-color, var(--m3e-fab-hover-label-text-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-primary-fab-hover-state-layer-color, var(--m3e-fab-hover-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-primary-fab-hover-state-layer-opacity, var(--m3e-fab-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-primary-fab-hover-container-elevation, var(--m3e-fab-hover-container-elevation, ${t.elevation.level4}))`),loweredContainerElevation:r(`var(--m3e-primary-fab-lowered-hover-container-elevation, var(--m3e-fab-lowered-hover-container-elevation, ${t.elevation.level3}))`)},focus:{iconColor:r(`var(--m3e-primary-fab-focus-icon-color, var(--m3e-fab-focus-icon-color, ${t.color.onPrimary}))`),labelTextColor:r(`var(--m3e-primary-fab-focus-label-text-color, var(--m3e-fab-focus-label-text-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-primary-fab-focus-state-layer-color, var(--m3e-fab-focus-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-primary-fab-focus-state-layer-opacity, var(--m3e-fab-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-primary-fab-focus-container-elevation, var(--m3e-fab-focus-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-primary-fab-lowered-focus-container-elevation, var(--m3e-fab-lowered-focus-container-elevation, ${t.elevation.level2}))`)},pressed:{iconColor:r(`var(--m3e-primary-fab-pressed-icon-color, var(--m3e-fab-pressed-icon-color, ${t.color.onPrimary}))`),labelTextColor:r(`var(--m3e-primary-fab-pressed-label-text-color, var(--m3e-fab-pressed-label-text-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-primary-fab-pressed-state-layer-color, var(--m3e-fab-pressed-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-primary-fab-pressed-state-layer-opacity, var(--m3e-fab-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-primary-fab-pressed-container-elevation, var(--m3e-fab-pressed-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-primary-fab-lowered-pressed-container-elevation, var(--m3e-fab-lowered-pressed-container-elevation, ${t.elevation.level2}))`)}},secondary:{labelTextColor:r(`var(--m3e-secondary-fab-label-text-color, var(--m3e-fab-label-text-color, ${t.color.onSecondary}))`),iconColor:r(`var(--m3e-secondary-fab-icon-color, var(--m3e-fab-icon-color, ${t.color.onSecondary}))`),containerColor:r(`var(--m3e-secondary-fab-container-color, var(--m3e-fab-container-color, ${t.color.secondary}))`),containerElevation:r(`var(--m3e-secondary-fab-container-elevation, var(--m3e-fab-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-secondary-fab-lowered-container-elevation, var(--m3e-fab-lowered-container-elevation, ${t.elevation.level2}))`),disabled:{containerColor:r(`var(--m3e-secondary-fab-disabled-container-color, var(--m3e-fab-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-secondary-fab-disabled-container-opacity, var(--m3e-fab-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-secondary-fab-disabled-icon-color, var(--m3e-fab-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-secondary-fab-disabled-icon-opacity, var(--m3e-fab-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-secondary-fab-disabled-label-text-color, var(--m3e-fab-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-secondary-fab-disabled-label-text-opacity, var(--m3e-fab-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-secondary-fab-disabled-container-elevation, var(--m3e-fab-disabled-container-elevation, ${t.elevation.level0}))`),loweredContainerElevation:r(`var(--m3e-secondary-fab-lowered-disabled-container-elevation, var(--m3e-fab-lowered-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-secondary-fab-hover-icon-color, var(--m3e-fab-hover-icon-color, ${t.color.onSecondary}))`),labelTextColor:r(`var(--m3e-secondary-fab-hover-label-text-color, var(--m3e-fab-hover-label-text-color, ${t.color.onSecondary}))`),stateLayerColor:r(`var(--m3e-secondary-fab-hover-state-layer-color, var(--m3e-fab-hover-state-layer-color, ${t.color.onSecondary}))`),stateLayerOpacity:r(`var(--m3e-secondary-fab-hover-state-layer-opacity, var(--m3e-fab-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-secondary-fab-hover-container-elevation, var(--m3e-fab-hover-container-elevation, ${t.elevation.level4}))`),loweredContainerElevation:r(`var(--m3e-secondary-fab-lowered-hover-container-elevation, var(--m3e-fab-lowered-hover-container-elevation, ${t.elevation.level3}))`)},focus:{iconColor:r(`var(--m3e-secondary-fab-focus-icon-color, var(--m3e-fab-focus-icon-color, ${t.color.onSecondary}))`),labelTextColor:r(`var(--m3e-secondary-fab-focus-label-text-color, var(--m3e-fab-focus-label-text-color, ${t.color.onSecondary}))`),stateLayerColor:r(`var(--m3e-secondary-fab-focus-state-layer-color, var(--m3e-fab-focus-state-layer-color, ${t.color.onSecondary}))`),stateLayerOpacity:r(`var(--m3e-secondary-fab-focus-state-layer-opacity, var(--m3e-fab-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-secondary-fab-focus-container-elevation, var(--m3e-fab-focus-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-secondary-fab-lowered-focus-container-elevation, var(--m3e-fab-lowered-focus-container-elevation, ${t.elevation.level2}))`)},pressed:{iconColor:r(`var(--m3e-secondary-fab-pressed-icon-color, var(--m3e-fab-pressed-icon-color, ${t.color.onSecondary}))`),labelTextColor:r(`var(--m3e-secondary-fab-pressed-label-text-color, var(--m3e-fab-pressed-label-text-color, ${t.color.onSecondary}))`),stateLayerColor:r(`var(--m3e-secondary-fab-pressed-state-layer-color, var(--m3e-fab-pressed-state-layer-color, ${t.color.onSecondary}))`),stateLayerOpacity:r(`var(--m3e-secondary-fab-pressed-state-layer-opacity, var(--m3e-fab-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-secondary-fab-pressed-container-elevation, var(--m3e-fab-pressed-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-secondary-fab-lowered-pressed-container-elevation, var(--m3e-fab-lowered-pressed-container-elevation, ${t.elevation.level2}))`)}},tertiary:{labelTextColor:r(`var(--m3e-tertiary-fab-label-text-color, var(--m3e-fab-label-text-color, ${t.color.onTertiary}))`),iconColor:r(`var(--m3e-tertiary-fab-icon-color, var(--m3e-fab-icon-color, ${t.color.onTertiary}))`),containerColor:r(`var(--m3e-tertiary-fab-container-color, var(--m3e-fab-container-color, ${t.color.tertiary}))`),containerElevation:r(`var(--m3e-tertiary-fab-container-elevation, var(--m3e-fab-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-tertiary-fab-lowered-container-elevation, var(--m3e-fab-lowered-container-elevation, ${t.elevation.level2}))`),disabled:{containerColor:r(`var(--m3e-tertiary-fab-disabled-container-color, var(--m3e-fab-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-tertiary-fab-disabled-container-opacity, var(--m3e-fab-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-tertiary-fab-disabled-icon-color, var(--m3e-fab-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-tertiary-fab-disabled-icon-opacity, var(--m3e-fab-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-tertiary-fab-disabled-label-text-color, var(--m3e-fab-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-tertiary-fab-disabled-label-text-opacity, var(--m3e-fab-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-tertiary-fab-disabled-container-elevation, var(--m3e-fab-disabled-container-elevation, ${t.elevation.level0}))`),loweredContainerElevation:r(`var(--m3e-tertiary-fab-lowered-disabled-container-elevation, var(--m3e-fab-lowered-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-tertiary-fab-hover-icon-color, var(--m3e-fab-hover-icon-color, ${t.color.onTertiary}))`),labelTextColor:r(`var(--m3e-tertiary-fab-hover-label-text-color, var(--m3e-fab-hover-label-text-color, ${t.color.onTertiary}))`),stateLayerColor:r(`var(--m3e-tertiary-fab-hover-state-layer-color, var(--m3e-fab-hover-state-layer-color, ${t.color.onTertiary}))`),stateLayerOpacity:r(`var(--m3e-tertiary-fab-hover-state-layer-opacity, var(--m3e-fab-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tertiary-fab-hover-container-elevation, var(--m3e-fab-hover-container-elevation, ${t.elevation.level4}))`),loweredContainerElevation:r(`var(--m3e-tertiary-fab-lowered-hover-container-elevation, var(--m3e-fab-lowered-hover-container-elevation, ${t.elevation.level3}))`)},focus:{iconColor:r(`var(--m3e-tertiary-fab-focus-icon-color, var(--m3e-fab-focus-icon-color, ${t.color.onTertiary}))`),labelTextColor:r(`var(--m3e-tertiary-fab-focus-label-text-color, var(--m3e-fab-focus-label-text-color, ${t.color.onTertiary}))`),stateLayerColor:r(`var(--m3e-tertiary-fab-focus-state-layer-color, var(--m3e-fab-focus-state-layer-color, ${t.color.onTertiary}))`),stateLayerOpacity:r(`var(--m3e-tertiary-fab-focus-state-layer-opacity, var(--m3e-fab-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tertiary-fab-focus-container-elevation, var(--m3e-fab-focus-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-tertiary-fab-lowered-focus-container-elevation, var(--m3e-fab-lowered-focus-container-elevation, ${t.elevation.level2}))`)},pressed:{iconColor:r(`var(--m3e-tertiary-fab-pressed-icon-color, var(--m3e-fab-pressed-icon-color, ${t.color.onTertiary}))`),labelTextColor:r(`var(--m3e-tertiary-fab-pressed-label-text-color, var(--m3e-fab-pressed-label-text-color, ${t.color.onTertiary}))`),stateLayerColor:r(`var(--m3e-tertiary-fab-pressed-state-layer-color, var(--m3e-fab-pressed-state-layer-color, ${t.color.onTertiary}))`),stateLayerOpacity:r(`var(--m3e-tertiary-fab-pressed-state-layer-opacity, var(--m3e-fab-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tertiary-fab-pressed-container-elevation, var(--m3e-fab-pressed-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-tertiary-fab-lowered-pressed-container-elevation, var(--m3e-fab-lowered-pressed-container-elevation, ${t.elevation.level2}))`)}},"primary-container":{labelTextColor:r(`var(--m3e-primary-container-fab-label-text-color, var(--m3e-primary-container-fab-label-text-color, ${t.color.onPrimaryContainer}))`),iconColor:r(`var(--m3e-primary-container-fab-icon-color, var(--m3e-primary-container-fab-icon-color, ${t.color.onPrimaryContainer}))`),containerColor:r(`var(--m3e-primary-container-fab-container-color, var(--m3e-fab-container-color, ${t.color.primaryContainer}))`),containerElevation:r(`var(--m3e-primary-container-fab-container-elevation, var(--m3e-fab-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-primary-container-fab-lowered-container-elevation, var(--m3e-fab-lowered-container-elevation, ${t.elevation.level2}))`),disabled:{containerColor:r(`var(--m3e-primary-container-fab-disabled-container-color, var(--m3e-fab-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-primary-container-fab-disabled-container-opacity, var(--m3e-fab-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-primary-container-fab-disabled-icon-color, var(--m3e-fab-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-primary-container-fab-disabled-icon-opacity, var(--m3e-fab-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-primary-container-fab-disabled-label-text-color, var(--m3e-fab-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-primary-container-fab-disabled-label-text-opacity, var(--m3e-fab-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-primary-container-fab-disabled-container-elevation, var(--m3e-fab-disabled-container-elevation, ${t.elevation.level0}))`),loweredContainerElevation:r(`var(--m3e-primary-container-fab-lowered-disabled-container-elevation, var(--m3e-fab-lowered-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-primary-container-fab-hover-icon-color, var(--m3e-fab-hover-icon-color, ${t.color.onPrimaryContainer}))`),labelTextColor:r(`var(--m3e-primary-container-fab-hover-label-text-color, var(--m3e-fab-hover-label-text-color, ${t.color.onPrimaryContainer}))`),stateLayerColor:r(`var(--m3e-primary-container-fab-hover-state-layer-color, var(--m3e-fab-hover-state-layer-color, ${t.color.onPrimaryContainer}))`),stateLayerOpacity:r(`var(--m3e-primary-container-fab-hover-state-layer-opacity, var(--m3e-fab-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-primary-container-fab-hover-container-elevation, var(--m3e-fab-hover-container-elevation, ${t.elevation.level4}))`),loweredContainerElevation:r(`var(--m3e-primary-container-fab-lowered-hover-container-elevation, var(--m3e-fab-lowered-hover-container-elevation, ${t.elevation.level3}))`)},focus:{iconColor:r(`var(--m3e-primary-container-fab-focus-icon-color, var(--m3e-fab-focus-icon-color, ${t.color.onPrimaryContainer}))`),labelTextColor:r(`var(--m3e-primary-container-fab-focus-label-text-color, var(--m3e-fab-focus-label-text-color, ${t.color.onPrimaryContainer}))`),stateLayerColor:r(`var(--m3e-primary-container-fab-focus-state-layer-color, var(--m3e-fab-focus-state-layer-color, ${t.color.onPrimaryContainer}))`),stateLayerOpacity:r(`var(--m3e-primary-container-fab-focus-state-layer-opacity, var(--m3e-fab-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-primary-container-fab-focus-container-elevation, var(--m3e-fab-focus-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-primary-container-fab-lowered-focus-container-elevation, var(--m3e-fab-lowered-focus-container-elevation, ${t.elevation.level2}))`)},pressed:{iconColor:r(`var(--m3e-primary-container-fab-pressed-icon-color, var(--m3e-fab-pressed-icon-color, ${t.color.onPrimaryContainer}))`),labelTextColor:r(`var(--m3e-primary-container-fab-pressed-label-text-color, var(--m3e-fab-pressed-label-text-color, ${t.color.onPrimaryContainer}))`),stateLayerColor:r(`var(--m3e-primary-container-fab-pressed-state-layer-color, var(--m3e-fab-pressed-state-layer-color, ${t.color.onPrimaryContainer}))`),stateLayerOpacity:r(`var(--m3e-primary-container-fab-pressed-state-layer-opacity, var(--m3e-fab-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-primary-container-fab-pressed-container-elevation, var(--m3e-fab-pressed-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-primary-container-fab-lowered-pressed-container-elevation, var(--m3e-fab-lowered-pressed-container-elevation, ${t.elevation.level2}))`)}},"secondary-container":{labelTextColor:r(`var(--m3e-secondary-container-fab-label-text-color, var(--m3e-fab-label-text-color, ${t.color.onSecondaryContainer}))`),iconColor:r(`var(--m3e-secondary-container-fab-icon-color, var(--m3e-fab-icon-color, ${t.color.onSecondaryContainer}))`),containerColor:r(`var(--m3e-secondary-container-fab-container-color, var(--m3e-fab-container-color, ${t.color.secondaryContainer}))`),containerElevation:r(`var(--m3e-secondary-container-fab-container-elevation, var(--m3e-fab-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-secondary-container-fab-lowered-container-elevation, var(--m3e-fab-lowered-container-elevation, ${t.elevation.level2}))`),disabled:{containerColor:r(`var(--m3e-secondary-container-fab-disabled-container-color, var(--m3e-fab-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-secondary-container-fab-disabled-container-opacity, var(--m3e-fab-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-secondary-container-fab-disabled-icon-color, var(--m3e-fab-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-secondary-container-fab-disabled-icon-opacity, var(--m3e-fab-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-secondary-container-fab-disabled-label-text-color, var(--m3e-fab-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-secondary-container-fab-disabled-label-text-opacity, var(--m3e-fab-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-secondary-container-fab-disabled-container-elevation, var(--m3e-fab-disabled-container-elevation, ${t.elevation.level0}))`),loweredContainerElevation:r(`var(--m3e-secondary-container-fab-lowered-disabled-container-elevation, var(--m3e-fab-lowered-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-secondary-container-fab-hover-icon-color, var(--m3e-fab-hover-icon-color, ${t.color.onSecondaryContainer}))`),labelTextColor:r(`var(--m3e-secondary-container-fab-hover-label-text-color, var(--m3e-fab-hover-label-text-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-secondary-container-fab-hover-state-layer-color, var(--m3e-fab-hover-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-secondary-container-fab-hover-state-layer-opacity, var(--m3e-fab-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-secondary-container-fab-hover-container-elevation, var(--m3e-fab-hover-container-elevation, ${t.elevation.level4}))`),loweredContainerElevation:r(`var(--m3e-secondary-container-fab-lowered-hover-container-elevation, var(--m3e-fab-lowered-hover-container-elevation, ${t.elevation.level3}))`)},focus:{iconColor:r(`var(--m3e-secondary-container-fab-focus-icon-color, var(--m3e-fab-focus-icon-color, ${t.color.onSecondaryContainer}))`),labelTextColor:r(`var(--m3e-secondary-container-fab-focus-label-text-color, var(--m3e-fab-focus-label-text-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-secondary-container-fab-focus-state-layer-color, var(--m3e-fab-focus-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-secondary-container-fab-focus-state-layer-opacity, var(--m3e-fab-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-secondary-container-fab-focus-container-elevation, var(--m3e-fab-focus-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-secondary-container-fab-lowered-focus-container-elevation, var(--m3e-fab-lowered-focus-container-elevation, ${t.elevation.level2}))`)},pressed:{iconColor:r(`var(--m3e-secondary-container-fab-pressed-icon-color, var(--m3e-fab-pressed-icon-color, ${t.color.onSecondaryContainer}))`),labelTextColor:r(`var(--m3e-secondary-container-fab-pressed-label-text-color, var(--m3e-fab-pressed-label-text-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-secondary-container-fab-pressed-state-layer-color, var(--m3e-fab-pressed-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-secondary-container-fab-pressed-state-layer-opacity, var(--m3e-fab-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-secondary-container-fab-pressed-container-elevation, var(--m3e-fab-pressed-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-secondary-container-fab-lowered-pressed-container-elevation, var(--m3e-fab-lowered-pressed-container-elevation, ${t.elevation.level2}))`)}},"tertiary-container":{labelTextColor:r(`var(--m3e-tertiary-container-fab-label-text-color, var(--m3e-fab-label-text-color, ${t.color.onTertiaryContainer}))`),iconColor:r(`var(--m3e-tertiary-container-fab-icon-color, var(--m3e-fab-icon-color, ${t.color.onTertiaryContainer}))`),containerColor:r(`var(--m3e-tertiary-container-fab-container-color, var(--m3e-fab-container-color, ${t.color.tertiaryContainer}))`),containerElevation:r(`var(--m3e-tertiary-container-fab-container-elevation, var(--m3e-fab-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-tertiary-container-fab-lowered-container-elevation, var(--m3e-fab-lowered-container-elevation, ${t.elevation.level2}))`),disabled:{containerColor:r(`var(--m3e-tertiary-container-fab-disabled-container-color, var(--m3e-fab-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-tertiary-container-fab-disabled-container-opacity, var(--m3e-fab-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-tertiary-container-fab-disabled-icon-color, var(--m3e-fab-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-tertiary-container-fab-disabled-icon-opacity, var(--m3e-fab-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-tertiary-container-fab-disabled-label-text-color, var(--m3e-fab-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-tertiary-container-fab-disabled-label-text-opacity, var(--m3e-fab-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-tertiary-container-fab-disabled-container-elevation, var(--m3e-fab-disabled-container-elevation, ${t.elevation.level0}))`),loweredContainerElevation:r(`var(--m3e-tertiary-container-fab-lowered-disabled-container-elevation, var(--m3e-fab-lowered-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-tertiary-container-fab-hover-icon-color, var(--m3e-fab-hover-icon-color, ${t.color.onTertiaryContainer}))`),labelTextColor:r(`var(--m3e-tertiary-container-fab-hover-label-text-color, var(--m3e-fab-hover-label-text-color, ${t.color.onTertiaryContainer}))`),stateLayerColor:r(`var(--m3e-tertiary-container-fab-hover-state-layer-color, var(--m3e-fab-hover-state-layer-color, ${t.color.onTertiaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tertiary-container-fab-hover-state-layer-opacity, var(--m3e-fab-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tertiary-container-fab-hover-container-elevation, var(--m3e-fab-hover-container-elevation, ${t.elevation.level4}))`),loweredContainerElevation:r(`var(--m3e-tertiary-container-fab-lowered-hover-container-elevation, var(--m3e-fab-lowered-hover-container-elevation, ${t.elevation.level3}))`)},focus:{iconColor:r(`var(--m3e-tertiary-container-fab-focus-icon-color, var(--m3e-fab-focus-icon-color, ${t.color.onTertiaryContainer}))`),labelTextColor:r(`var(--m3e-tertiary-container-fab-focus-label-text-color, var(--m3e-fab-focus-label-text-color, ${t.color.onTertiaryContainer}))`),stateLayerColor:r(`var(--m3e-tertiary-container-fab-focus-state-layer-color, var(--m3e-fab-focus-state-layer-color, ${t.color.onTertiaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tertiary-container-fab-focus-state-layer-opacity, var(--m3e-fab-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tertiary-container-fab-focus-container-elevation, var(--m3e-fab-focus-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-tertiary-container-fab-lowered-focus-container-elevation, var(--m3e-fab-lowered-focus-container-elevation, ${t.elevation.level2}))`)},pressed:{iconColor:r(`var(--m3e-tertiary-container-fab-pressed-icon-color, var(--m3e-fab-pressed-icon-color, ${t.color.onTertiaryContainer}))`),labelTextColor:r(`var(--m3e-tertiary-container-fab-pressed-label-text-color, var(--m3e-fab-pressed-label-text-color, ${t.color.onTertiaryContainer}))`),stateLayerColor:r(`var(--m3e-tertiary-container-fab-pressed-state-layer-color, var(--m3e-fab-pressed-state-layer-color, ${t.color.onTertiaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tertiary-container-fab-pressed-state-layer-opacity, var(--m3e-fab-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-tertiary-container-fab-pressed-container-elevation, var(--m3e-fab-pressed-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-tertiary-container-fab-lowered-pressed-container-elevation, var(--m3e-fab-lowered-pressed-container-elevation, ${t.elevation.level2}))`)}},surface:{labelTextColor:r(`var(--m3e-surface-fab-label-text-color, var(--m3e-fab-label-text-color, ${t.color.primary}))`),iconColor:r(`var(--m3e-surface-fab-icon-color, var(--m3e-fab-icon-color, ${t.color.primary}))`),containerColor:r(`var(--m3e-surface-fab-container-color, var(--m3e-fab-container-color, ${t.color.surfaceContainerHigh}))`),containerElevation:r(`var(--m3e-surface-fab-container-elevation, var(--m3e-fab-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-surface-fab-lowered-container-elevation, var(--m3e-fab-lowered-container-elevation, ${t.elevation.level2}))`),loweredContainerColor:r(`var(--m3e-surface-fab-lowered-container-color, var(--m3e-fab-lowered-container-color, ${t.color.surfaceContainerLow}))`),disabled:{containerColor:r(`var(--m3e-surface-fab-disabled-container-color, var(--m3e-fab-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-surface-fab-disabled-container-opacity, var(--m3e-fab-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-surface-fab-disabled-icon-color, var(--m3e-fab-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-surface-fab-disabled-icon-opacity, var(--m3e-fab-disabled-icon-opacity, 38%))"),labelTextColor:r(`var(--m3e-surface-fab-disabled-label-text-color, var(--m3e-fab-disabled-label-text-color, ${t.color.onSurface}))`),labelTextOpacity:r("var(--m3e-surface-fab-disabled-label-text-opacity, var(--m3e-fab-disabled-label-text-opacity, 38%))"),containerElevation:r(`var(--m3e-surface-fab-disabled-container-elevation, var(--m3e-fab-disabled-container-elevation, ${t.elevation.level0}))`),loweredContainerElevation:r(`var(--m3e-surface-fab-lowered-disabled-container-elevation, var(--m3e-fab-lowered-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-surface-fab-hover-icon-color, var(--m3e-fab-hover-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-surface-fab-hover-label-text-color, var(--m3e-fab-hover-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-surface-fab-hover-state-layer-color, var(--m3e-fab-hover-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-surface-fab-hover-state-layer-opacity, var(--m3e-fab-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-surface-fab-hover-container-elevation, var(--m3e-fab-hover-container-elevation, ${t.elevation.level4}))`),loweredContainerElevation:r(`var(--m3e-surface-fab-lowered-hover-container-elevation, var(--m3e-fab-lowered-hover-container-elevation, ${t.elevation.level3}))`)},focus:{iconColor:r(`var(--m3e-surface-fab-focus-icon-color, var(--m3e-fab-focus-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-surface-fab-focus-label-text-color, var(--m3e-fab-focus-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-surface-fab-focus-state-layer-color, var(--m3e-fab-focus-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-surface-fab-focus-state-layer-opacity, var(--m3e-fab-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-surface-fab-focus-container-elevation, var(--m3e-fab-focus-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-surface-fab-lowered-focus-container-elevation, var(--m3e-fab-lowered-focus-container-elevation, ${t.elevation.level2}))`)},pressed:{iconColor:r(`var(--m3e-surface-fab-pressed-icon-color, var(--m3e-fab-pressed-icon-color, ${t.color.primary}))`),labelTextColor:r(`var(--m3e-surface-fab-pressed-label-text-color, var(--m3e-fab-pressed-label-text-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-surface-fab-pressed-state-layer-color, var(--m3e-fab-pressed-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-surface-fab-pressed-state-layer-opacity, var(--m3e-fab-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-surface-fab-pressed-container-elevation, var(--m3e-fab-pressed-container-elevation, ${t.elevation.level3}))`),loweredContainerElevation:r(`var(--m3e-surface-fab-lowered-pressed-container-elevation, var(--m3e-fab-lowered-pressed-container-elevation, ${t.elevation.level2}))`)}}};function Ua(o){return b`
    :host([variant="${r(o)}"]:not([lowered])) .base {
      background-color: ${ve[o].containerColor};
      --m3e-elevation-level: ${ve[o].containerElevation};
      --m3e-elevation-hover-level: ${ve[o].hover.containerElevation};
      --m3e-elevation-focus-level: ${ve[o].focus.containerElevation};
      --m3e-elevation-pressed-level: ${ve[o].pressed.containerElevation};
    }
    :host([variant="${r(o)}"][lowered]) .base {
      background-color: ${ve[o].loweredContainerColor??ve[o].containerColor};
      --m3e-elevation-level: ${ve[o].loweredContainerElevation};
      --m3e-elevation-hover-level: ${ve[o].hover.loweredContainerElevation};
      --m3e-elevation-focus-level: ${ve[o].focus.loweredContainerElevation};
      --m3e-elevation-pressed-level: ${ve[o].pressed.loweredContainerElevation};
    }
    :host([variant="${r(o)}"]) .base {
      --m3e-state-layer-hover-color: ${ve[o].hover.stateLayerColor};
      --m3e-state-layer-hover-opacity: ${ve[o].hover.stateLayerOpacity};
      --m3e-state-layer-focus-color: ${ve[o].focus.stateLayerColor};
      --m3e-state-layer-focus-opacity: ${ve[o].focus.stateLayerOpacity};
      --m3e-ripple-color: ${ve[o].pressed.stateLayerColor};
      --m3e-ripple-opacity: ${ve[o].pressed.stateLayerOpacity};
    }
    :host([variant="${r(o)}"]) .label {
      color: ${ve[o].labelTextColor};
    }
    :host([variant="${r(o)}"]:focus) .label {
      color: ${ve[o].focus.labelTextColor};
    }
    :host([variant="${r(o)}"]:hover) .label {
      color: ${ve[o].hover.labelTextColor};
    }
    :host([variant="${r(o)}"]) .base.pressed .label {
      color: ${ve[o].pressed.labelTextColor};
    }
    :host([variant="${r(o)}"]) .icon {
      color: ${ve[o].iconColor};
    }
    :host([variant="${r(o)}"]:focus) .icon {
      color: ${ve[o].focus.iconColor};
    }
    :host([variant="${r(o)}"]:hover) .icon {
      color: ${ve[o].hover.iconColor};
    }
    :host([variant="${r(o)}"]) .base.pressed .icon {
      color: ${ve[o].pressed.iconColor};
    }
    :host([variant="${r(o)}"]:disabled) .base,
    :host([variant="${r(o)}"][disabled-interactive]) .base {
      --m3e-elevation-level: ${ve[o].disabled.containerElevation};
      background-color: color-mix(
        in srgb,
        ${ve[o].disabled.containerColor} ${ve[o].disabled.containerOpacity},
        transparent
      );
    }
    :host([variant="${r(o)}"]:disabled) .label,
    :host([variant="${r(o)}"][disabled-interactive]) .label {
      color: color-mix(
        in srgb,
        ${ve[o].disabled.labelTextColor} ${ve[o].disabled.labelTextOpacity},
        transparent
      );
    }
    :host([variant="${r(o)}"]:disabled) .icon,
    :host([variant="${r(o)}"][disabled-interactive]) .icon {
      color: color-mix(
        in srgb,
        ${ve[o].disabled.iconColor} ${ve[o].disabled.iconOpacity},
        transparent
      );
    }
  `}var D3=[Ua("primary"),Ua("secondary"),Ua("tertiary"),Ua("primary-container"),Ua("secondary-container"),Ua("tertiary-container"),Ua("surface")];var Ec,Pp,Co=class extends de(Fe(Go(ae(gt(N(D(M(k,"button"),!0))))))){constructor(){super();m(this,Ec);this.variant="primary-container";this.lowered=!1;this.size="medium";this.extended=!1;new ue(this,{isPressedKey:e=>e===" ",callback:e=>{!this.disabled&&!this.disabledInteractive&&(this._base?.classList.toggle("pressed",e),this._base?.classList.toggle("resting",!e))}})}disconnectedCallback(){super.disconnectedCallback(),this._base?.classList.toggle("pressed",!1),this._base?.classList.toggle("resting",!1)}firstUpdated(e){super.firstUpdated(e),[this._elevation,this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}updated(e){super.updated(e),(e.has("disabled")&&this.disabled||e.has("disabledInteractive")&&this.disabledInteractive)&&(this._base?.classList.toggle("pressed",!1),this._base?.classList.toggle("resting",!1))}render(){return f`<div class="base">
      <m3e-elevation class="elevation" ?disabled="${this.disabled||this.disabledInteractive}"></m3e-elevation>
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled||this.disabledInteractive}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple
        class="ripple"
        ?centered="${!this.extended}"
        ?disabled="${this.disabled||this.disabledInteractive}"
      ></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      ${this[st]()}
      <div class="wrapper">
        <slot class="icon" aria-hidden="true" @slotchange="${c(this,Ec,Pp)}"></slot>
        <slot class="icon" aria-hidden="true" name="close-icon">
          <svg class="close-icon" viewBox="0 -960 960 960" fill="currentColor">
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </slot>
        <div class="label">
          <slot name="label" @slotchange="${c(this,Ec,Pp)}"></slot>
        </div>
      </div>
    </div>`}};Ec=new WeakSet,Pp=function(){this._base?.classList.toggle("with-menu",this.querySelector("m3e-fab-menu-trigger")!==null)},Co.styles=[O3,D3,z3],d([L(".base")],Co.prototype,"_base",2),d([L(".elevation")],Co.prototype,"_elevation",2),d([L(".focus-ring")],Co.prototype,"_focusRing",2),d([L(".state-layer")],Co.prototype,"_stateLayer",2),d([L(".ripple")],Co.prototype,"_ripple",2),d([p({reflect:!0})],Co.prototype,"variant",2),d([p({type:Boolean,reflect:!0})],Co.prototype,"lowered",2),d([p({reflect:!0})],Co.prototype,"size",2),d([p({type:Boolean,reflect:!0})],Co.prototype,"extended",2),Co=d([y("m3e-fab")],Co);var Tc,$m,F3,yr=class extends de(Fe(N(D(M(k,"menuitem"),!0)))){constructor(){super(...arguments);m(this,$m);m(this,Tc,e=>c(this,$m,F3).call(this,e))}get menu(){return this.closest("m3e-fab-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,Tc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,Tc))}firstUpdated(e){super.firstUpdated(e),[this._elevation,this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}render(){return f`<div class="base">
      <m3e-elevation class="elevation" ?disabled="${this.disabled}"></m3e-elevation>
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      ${this[st]()}
      <div class="wrapper">
        <slot class="icon" name="icon" aria-hidden="true"></slot>
        <div class="label"><slot></slot></div>
      </div>
    </div>`}};Tc=new WeakMap,$m=new WeakSet,F3=function(e){e.defaultPrevented||this.menu?.hide(!0)},yr.styles=b`
    :host {
      display: inline-block;
      outline: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .base {
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
      height: var(--m3e-fab-menu-item-height, 3.5rem);
      font-size: var(--m3e-fab-menu-item-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(--m3e-fab-menu-item-font-weight, ${t.typescale.standard.label.large.fontWeight});
      line-height: var(--m3e-fab-menu-item-line-height, ${t.typescale.standard.label.large.lineHeight});
      letter-spacing: var(--m3e-fab-menu-item-tracking, ${t.typescale.standard.label.large.tracking});
      border-radius: var(--m3e-fab-menu-item-shape, ${t.shape.corner.full});
    }
    :host(:not(:disabled)) .label,
    :host(:not(:disabled)) .icon {
      color: var(--_fab-menu-item-color);
    }
    :host(:not(:disabled)) .base {
      background-color: var(--_fab-menu-item-container-color);
      --m3e-state-layer-hover-color: var(--_fab-menu-background-hover-color);
      --m3e-state-layer-focus-color: var(--_fab-menu-background-focus-color);
      --m3e-ripple-color: var(--_fab-menu-ripple-color);
    }
    :host(:disabled) .base {
      background-color: color-mix(
        in srgb,
        var(--m3e-fab-menu-item-disabled-container-color, ${t.color.onSurface})
          var(--m3e-fab-menu-item-disabled-container-opacity, 10%),
        transparent
      );
    }
    :host(:disabled) .label,
    :host(:disabled) .icon {
      color: color-mix(
        in srgb,
        var(--m3e-fab-menu-item-disabled-color, ${t.color.onSurface})
          var(--m3e-fab-menu-item-disabled-opacity, 38%),
        transparent
      );
    }
    .touch {
      position: absolute;
      height: 3rem;
      left: 0;
      right: 0;
    }
    .wrapper {
      width: 100%;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      padding-inline-start: var(--m3e-fab-menu-item-leading-space, 1.5rem);
      padding-inline-end: var(--m3e-fab-menu-item-trailing-space, 1.5rem);
      column-gap: var(--m3e-fab-menu-item-spacing, 0.5rem);
    }
    .label {
      justify-self: center;
      flex: 1 1 auto;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    .icon {
      font-size: var(--m3e-fab-menu-item-icon-size, 1.5rem);
      transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    :host(:not(:disabled)) {
      cursor: pointer;
    }
    ::slotted([slot="icon"]) {
      font-size: inherit !important;
      flex: none;
    }
    ::slotted(svg[slot="icon"]) {
      width: 1em;
      height: 1em;
    }
    a {
      all: unset;
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 1;
    }
    @media (prefers-reduced-motion) {
      .base,
      .label,
      .icon {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .base,
      .label,
      .icon {
        transition: none;
      }
      :host(:not(:disabled)) .base {
        background-color: Menu;
      }
      :host(:not(:disabled)) .label,
      :host(:not(:disabled)) .icon {
        color: MenuText;
      }
      :host(:disabled) .label,
      :host(:disabled) .icon {
        color: GrayText;
      }
    }
  `,d([L(".elevation")],yr.prototype,"_elevation",2),d([L(".focus-ring")],yr.prototype,"_focusRing",2),d([L(".state-layer")],yr.prototype,"_stateLayer",2),d([L(".ripple")],yr.prototype,"_ripple",2),yr=d([y("m3e-fab-menu-item")],yr);var ts,St,yi,Ao,Ga,Mc,Pc,Hc,Qo,V3,B3,N3,q3,W3,gi=class extends M(k,"menu"){constructor(){super(...arguments);m(this,Qo);m(this,ts);m(this,St);m(this,yi);m(this,Ao,new fo().withWrap().withHomeAndEnd().withVerticalOrientation());m(this,Ga,e=>c(this,Qo,B3).call(this,e));m(this,Mc,e=>c(this,Qo,N3).call(this,e));m(this,Pc,new sr(this,{target:null,callback:()=>this.hide()}));m(this,Hc,e=>{var i;e.newState==="closed"?((i=s(this,yi))==null||i.call(this),g(this,yi,void 0)):setTimeout(()=>{s(this,Ao).setActiveItem(s(this,Ao).items.find(n=>!n.disabled))},40)});this.variant="primary"}get isOpen(){return s(this,St)!==void 0}async show(e){var i;s(this,St)&&s(this,St)!==e&&this.hide(),(i=s(this,yi))==null||i.call(this),g(this,yi,await qr(this,e,{position:"top-end",inline:!0,shift:!0,flip:!0,offset:8},(n,l,h)=>{this.classList.toggle("-right",h.includes("end")),this.classList.toggle("-left",h.includes("start")),O.current==="rtl"?(this.style.right=`${window.innerWidth-n-this.clientWidth}px`,this.style.left=""):(this.style.left=`${n}px`,this.style.right=""),this.style.top=`${l}px`})),this.showPopover(),g(this,St,e),s(this,St).ariaExpanded="true",s(this,Pc).observe(s(this,St)),c(this,Qo,q3).call(this)}hide(e=!1){var i;(i=s(this,yi))==null||i.call(this),g(this,yi,void 0),s(this,St)&&(s(this,St).ariaExpanded="false",e&&s(this,St).focus(),c(this,Qo,W3).call(this),s(this,Pc).unobserve(s(this,St)),g(this,St,void 0)),this.hidePopover()}async toggle(e){s(this,St)?this.hide():await this.show(e)}connectedCallback(){super.connectedCallback(),this.tabIndex=-1,this.setAttribute("popover","manual"),this.classList.add("-no-animate"),this.addEventListener("keydown",s(this,Ga)),this.addEventListener("toggle",s(this,Hc)),document.addEventListener("click",s(this,Mc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",s(this,Ga)),this.removeEventListener("toggle",s(this,Hc)),document.removeEventListener("click",s(this,Mc))}firstUpdated(e){super.firstUpdated(e),requestAnimationFrame(()=>this.classList.remove("-no-animate"))}render(){return f`<div class="base"><slot @slotchange="${c(this,Qo,V3)}"></slot></div>`}};ts=new WeakMap,St=new WeakMap,yi=new WeakMap,Ao=new WeakMap,Ga=new WeakMap,Mc=new WeakMap,Pc=new WeakMap,Hc=new WeakMap,Qo=new WeakSet,V3=function(){let{added:e}=s(this,Ao).setItems([...this.querySelectorAll("m3e-fab-menu-item")]);s(this,Ao).activeItem||s(this,Ao).updateActiveItem(e.find(i=>!i.disabled))},B3=function(e){switch(e.key){case"Tab":this.hide();break;case"Escape":!e.shiftKey&&!e.ctrlKey&&this.hide(!0);break;default:s(this,Ao).onKeyDown(e);break}},N3=function(e){e.composedPath().some(i=>i instanceof yr||i===s(this,St))||this.hide()},q3=function(){let e=s(this,St)?.closest("m3e-fab");e&&(g(this,ts,e.tabIndex),e.addEventListener("keydown",s(this,Ga)),s(this,Ao).setItems([...s(this,Ao).items,e]))},W3=function(){let e=s(this,St)?.closest("m3e-fab");e&&(s(this,ts)!==void 0&&(e.tabIndex=s(this,ts)),e.removeEventListener("keydown",s(this,Ga)),s(this,Ao).setItems([...s(this,Ao).items.filter(i=>i!==e)]))},gi.styles=b`
    :host {
      position: absolute;
      flex-direction: column;
      row-gap: var(--m3e-fab-menu-spacing, 0.25rem);
      padding: unset;
      margin: unset;
      border: unset;
      overflow: visible;
      max-width: var(--m3e-fab-menu-max-width, 17.5rem);
      opacity: 0;
      background-color: transparent;
      display: none;
    }
    :host(:not(.-no-animate)) {
      transition: ${r(`opacity ${t.motion.spring.fastEffects}, 
        transform ${t.motion.spring.fastSpatial},
        overlay ${t.motion.spring.fastEffects} allow-discrete,
        display ${t.motion.spring.fastEffects} allow-discrete`)};
    }
    .base {
      display: contents;
    }
    :host([variant="primary"]) .base {
      --_fab-menu-item-color: var(--m3e-primary-fab-color, ${t.color.onPrimaryContainer});
      --_fab-menu-item-container-color: var(--m3e-primary-fab-container-color, ${t.color.primaryContainer});
      --_fab-menu-background-hover-color: var(--m3e-primary-fab-hover-color, ${t.color.onPrimaryContainer});
      --_fab-menu-background-focus-color: var(--m3e-primary-fab-focus-color, ${t.color.onPrimaryContainer});
      --_fab-menu-ripple-color: var(--m3e-primary-fab-ripple-color, ${t.color.onPrimaryContainer});
    }
    :host([variant="secondary"]) .base {
      --_fab-menu-item-color: var(--m3e-secondary-fab-color, ${t.color.onSecondaryContainer});
      --_fab-menu-item-container-color: var(
        --m3e-secondary-fab-container-color,
        ${t.color.secondaryContainer}
      );
      --_fab-menu-background-hover-color: var(
        --m3e-secondary-fab-hover-color,
        ${t.color.onSecondaryContainer}
      );
      --_fab-menu-background-focus-color: var(
        --m3e-secondary-fab-focus-color,
        ${t.color.onSecondaryContainer}
      );
      --_fab-menu-ripple-color: var(--m3e-secondary-fab-ripple-color, ${t.color.onSecondaryContainer});
    }
    :host([variant="tertiary"]) .base {
      --_fab-menu-item-color: var(--m3e-tertiary-fab-color, ${t.color.onTertiaryContainer});
      --_fab-menu-item-container-color: var(--m3e-tertiary-fab-container-color, ${t.color.tertiaryContainer});
      --_fab-menu-background-hover-color: var(--m3e-tertiary-fab-hover-color, ${t.color.onTertiaryContainer});
      --_fab-menu-background-focus-color: var(--m3e-tertiary-fab-focus-color, ${t.color.onTertiaryContainer});
      --_fab-menu-ripple-color: var(--m3e-tertiary-fab-ripple-color, ${t.color.onTertiaryContainer});
    }
    :host {
      transform: scaleX(0.8);
    }
    :host(.-left) {
      align-items: flex-start;
      transform-origin: left;
    }
    :host(.-right) {
      align-items: flex-end;
      transform-origin: right;
    }
    :host(:popover-open) {
      transform: scaleX(1);
      display: inline-flex;
      opacity: 1;
    }
    :host::backdrop {
      background-color: transparent;
    }
    @starting-style {
      :host(:popover-open) {
        opacity: 0;
      }
      :host(:popover-open) {
        transform: scaleX(0.8);
      }
    }
    @media (prefers-reduced-motion) {
      :host(:not(.-no-animate)) {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      :host {
        border-radius: ${t.shape.corner.medium};
        outline: 1px solid MenuText;
        background-color: Menu;
      }
    }
  `,d([p({reflect:!0})],gi.prototype,"variant",2),gi=d([y("m3e-fab-menu")],gi);var Sm=class extends ce(Ve){get menu(){return this.control instanceof gi?this.control:null}attach(a){super.attach(a),this.parentElement&&a instanceof gi&&(this.parentElement.ariaHasPopup="menu",this.parentElement.ariaExpanded="false",a.id&&je(this.parentElement,"aria-controls",a.id))}detach(){this.parentElement&&(this.parentElement.ariaHasPopup=null,this.parentElement.ariaExpanded=null,this.control?.id&&xt(this.parentElement,"aria-controls",this.control.id)),super.detach()}_onClick(){this.parentElement&&this.menu?.toggle(this.parentElement)}};Sm=d([y("m3e-fab-menu-trigger")],Sm);var T2=["m3e-input-chip-set","m3e-select"];function U3(o){return o instanceof HTMLElement&&(o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement||o instanceof HTMLSelectElement||T2.includes(o.tagName.toLowerCase()))}function G3(o){for(let a of o.assignedElements({flatten:!0})){if(U3(a))return a;let e=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT);for(;e.nextNode();)if(U3(e.currentNode))return e.currentNode}return null}var K,os,Rc,Ac,_c,km,wm,Lm,Em,Tm,rs,_o,$o,Q,j3,ja,K3,Z3,X3,Y3,J3,Q3,eg,tg,og,Hp,Rp,Ap,_p,At=class extends D(k){constructor(){super();m(this,Q);m(this,K,null);m(this,os);m(this,Rc,()=>c(this,Q,og).call(this));m(this,Ac,()=>c(this,Q,eg).call(this));m(this,_c,new _r(this,{target:null,config:{attributeFilter:["disabled","readonly","required"]},callback:()=>this.notifyControlStateChange()}));m(this,km,new Le(this,{target:null,callback:()=>c(this,Q,Y3).call(this)}));m(this,wm,new ze(this,{target:null,callback:e=>{e=e&&!(s(this,K)?.disabled??!0),this.classList.toggle("-no-animate",!1),g(this,rs,e),e?this.classList.toggle("-float-label",!0):(this._invalid=!(s(this,K)?.checkValidity?.()??!0),this.notifyControlStateChange())}}));m(this,Lm,new _r(this,{target:null,config:{childList:!0,subtree:!0},callback:()=>c(this,Q,Ap).call(this)}));m(this,Em,new _r(this,{target:null,config:{childList:!0,subtree:!0},callback:()=>c(this,Q,_p).call(this)}));m(this,Tm,new ue(this,{target:null,callback:e=>this.classList.toggle("-pressed",e&&!(s(this,K)?.disabled??!0))}));m(this,rs,!1);this._pseudoLabel="";this._required=!1;this._invalid=!1;this._validationMessage="";m(this,_o,"");m(this,$o,"");this.variant="outlined";this.hideRequiredMarker=!1;this.hideSubscript="auto";this.floatLabel="auto";new et(this,{callback:()=>this.classList.toggle("-no-animate",!1)})}get menuAnchor(){return this._base}get control(){return s(this,K)}notifyControlStateChange(e=!1){this._required=s(this,K)?.required===!0,this.classList.toggle("-required",this._required),this.classList.toggle("-disabled",s(this,K)?.disabled===!0),this.classList.toggle("-readonly",af(s(this,K))&&s(this,K).readOnly===!0),this.floatLabel==="auto"&&this.classList.toggle("-float-label",s(this,Q,j3)||s(this,rs)),e&&(this._invalid=!(s(this,K)?.checkValidity?.()??!0)),le(this,"-invalid",this._invalid),this._validationMessage=s(this,K)?.validationMessage??"",this.isUpdatePending||this.performUpdate()}connectedCallback(){super.connectedCallback(),this.classList.toggle("-no-animate",!0)}disconnectedCallback(){super.disconnectedCallback(),c(this,Q,Hp).call(this,null)}firstUpdated(e){super.firstUpdated(e),s(this,wm).observe(this._base),s(this,Tm).observe(this._base),s(this,Lm).observe(this._hint),c(this,Q,Ap).call(this),s(this,Em).observe(this._error),c(this,Q,_p).call(this)}update(e){super.update(e),e.has("_invalid")&&s(this,K)&&(s(this,K).ariaInvalid=this._invalid?"true":null,s(this,$o)&&(this._invalid?Ke.describe(s(this,K),s(this,$o)):Ke.removeDescription(s(this,K),s(this,$o))))}render(){return f`<div class="base" @click="${c(this,Q,Q3)}">
        ${this.variant==="outlined"?f`<div class="outline" aria-hidden="true">
              <div class="outline-start"></div>
              <div class="outline-notch">
                <div class="pseudo-label">
                  ${this._pseudoLabel} ${!this.hideRequiredMarker&&this._required?f`&nbsp;*`:R}
                </div>
              </div>
              <div class="outline-end"></div>
            </div>`:R}
        <div class="prefix">
          <slot name="prefix" @slotchange="${c(this,Q,Z3)}"></slot>
        </div>
        <div class="content">
          <span class="prefix-text"><slot name="prefix-text"></slot></span>
          <span class="input">
            <slot @slotchange="${c(this,Q,J3)}" @change="${c(this,Q,tg)}"></slot>
          </span>
          <span class="suffix-text"><slot name="suffix-text"></slot></span>
          <span class="label">
            <slot name="label" @slotchange="${c(this,Q,K3)}"></slot>
            ${!this.hideRequiredMarker&&this._required?f`<span class="required-marker" aria-hidden="true">&nbsp;*</span>`:R}
          </span>
        </div>
        <div
          class="suffix"
          @click="${c(this,Q,ja)}"
          @focusin="${c(this,Q,ja)}"
          @focusout="${c(this,Q,ja)}"
          @pointerdown="${c(this,Q,ja)}"
          @keydown="${c(this,Q,ja)}"
          @keyup="${c(this,Q,ja)}"
        >
          <slot name="suffix" @slotchange="${c(this,Q,X3)}"></slot>
        </div>
      </div>
      <span class="subscript" aria-hidden="true">
        <span class="error"><slot name="error">${this._validationMessage}</slot></span>
        <span class="hint"><slot name="hint"></slot></span>
      </span>`}};K=new WeakMap,os=new WeakMap,Rc=new WeakMap,Ac=new WeakMap,_c=new WeakMap,km=new WeakMap,wm=new WeakMap,Lm=new WeakMap,Em=new WeakMap,Tm=new WeakMap,rs=new WeakMap,_o=new WeakMap,$o=new WeakMap,Q=new WeakSet,j3=function(){return s(this,K)?.shouldLabelFloat!==void 0?s(this,K).shouldLabelFloat===!0:typeof s(this,K)?.value=="string"&&s(this,K).value.length>0},ja=function(e){e.stopImmediatePropagation(),e.stopPropagation()},K3=function(e){let i=e.target.assignedElements({flatten:!0});this.classList.toggle("-with-label",i.length>0),this._pseudoLabel=i[0]?.textContent??""},Z3=function(e){this.classList.toggle("-with-prefix",J(e.target)),s(this,km).observe(this._prefix)},X3=function(e){this.classList.toggle("-with-suffix",J(e.target))},Y3=function(){this.variant==="outlined"&&this._base.style.setProperty("--_prefix-width",`${this._prefix.clientWidth}px`)},J3=function(e){c(this,Q,Hp).call(this,G3(e.target))},Q3=function(e){s(this,K)&&!s(this,rs)&&!s(this,K).disabled&&(s(this,K).onContainerClick?s(this,K).onContainerClick(e):s(this,K).focus())},eg=function(){this._invalid=!0,this.notifyControlStateChange()},tg=function(){this._invalid=!(s(this,K)?.checkValidity?.()??!0),this.notifyControlStateChange()},og=function(){this._invalid=!1,setTimeout(()=>this.notifyControlStateChange())},Hp=function(e){var i;if(s(this,K)!==e&&(s(this,K)&&(s(this,_o)&&Ke.removeDescription(s(this,K),s(this,_o)),s(this,$o)&&Ke.removeDescription(s(this,K),s(this,$o)),s(this,_c).unobserve(s(this,K)),s(this,K).removeEventListener("invalid",s(this,Ac)),s(this,K).form?.removeEventListener("reset",s(this,Rc)),(i=s(this,os))==null||i.call(this),g(this,os,void 0)),g(this,K,e),["INPUT","TEXTAREA"].includes(s(this,K)?.tagName??"")?this._base.style.setProperty("--_form-field-cursor","text"):this._base.style.removeProperty("--_form-field-cursor"),this.classList.toggle("-with-select",s(this,K)?.tagName==="M3E-SELECT"),this.classList.contains("-with-select")&&this._base.style.setProperty("--_form-field-cursor","pointer"),s(this,K))){s(this,_c).observe(s(this,K)),s(this,K).addEventListener("invalid",s(this,Ac)),s(this,K).form?.addEventListener("reset",s(this,Rc)),s(this,K).removeAttribute("aria-invalid"),s(this,_o)&&Ke.describe(s(this,K),s(this,_o)),this.notifyControlStateChange();let n=s(this,K).tagName.toLowerCase();n.startsWith("m3e-")&&!customElements.get(n)?customElements.whenDefined(n).then(()=>c(this,Q,Rp).call(this)):c(this,Q,Rp).call(this)}},Rp=function(){s(this,K)&&g(this,os,Bv(s(this,K),"value",{set:(e,i)=>{i(e),this.notifyControlStateChange(!0)}}))},Ap=function(){let e=ft(this._hint,!0);e!==s(this,_o)&&(s(this,K)&&s(this,_o)&&Ke.removeDescription(s(this,K),s(this,_o)),g(this,_o,e),s(this,K)&&s(this,_o)&&Ke.describe(s(this,K),s(this,_o)))},_p=function(){let e=ft(this._error,!0);e!==s(this,$o)&&(s(this,K)&&s(this,$o)&&Ke.removeDescription(s(this,K),s(this,$o)),g(this,$o,e),s(this,K)&&s(this,$o)&&this._invalid&&Ke.describe(s(this,K),s(this,$o)))},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-form-field input::placeholder,
          m3e-form-field textarea::placeholder {
            user-select: none;
            color: currentColor;
            transition: opacity ${t.motion.duration.extraLong1};
          }
          m3e-form-field[float-label="auto"]:not(.-float-label).-with-label input::placeholder,
          m3e-form-field[float-label="auto"]:not(.-float-label).-with-label textarea::placeholder {
            opacity: 0;
            transition: opacity 0s;
          }
          m3e-form-field[variant="outlined"] m3e-input-chip-set {
            margin-block: calc(calc(3.5rem + ${t.density.calc(-2)}) / 4);
          }
          @media (prefers-reduced-motion) {
            m3e-form-field input::placeholder,
            m3e-form-field textarea::placeholder {
              transition: none !important;
            }
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),At.styles=b`
    :host {
      display: inline-flex;
      flex-direction: column;
      vertical-align: middle;
      font-size: var(--m3e-form-field-font-size, ${t.typescale.standard.body.large.fontSize});
      font-weight: var(--m3e-form-field-font-weight, ${t.typescale.standard.body.large.fontWeight});
      line-height: var(--m3e-form-field-line-height, ${t.typescale.standard.body.large.lineHeight});
      letter-spacing: var(--m3e-form-field-tracking, ${t.typescale.standard.body.large.tracking});
      width: var(--m3e-form-field-width, 14.5rem);
      color: var(--_form-field-color);
    }
    :host(:not(.-disabled)) .base {
      cursor: var(--_form-field-cursor);
    }
    .base {
      display: flex;
      align-items: center;
      position: relative;
      min-height: calc(3.5rem + ${t.density.calc(-2)});
      --_form-field-label-font-size: var(
        --m3e-form-field-label-font-size,
        ${t.typescale.standard.body.small.fontSize}
      );
      --_form-field-label-line-height: var(
        --m3e-form-field-label-line-height,
        ${t.typescale.standard.body.small.lineHeight}
      );
    }
    .content {
      display: flex;
      align-items: center;
      position: relative;
      flex: 1 1 auto;
      min-width: 0;
      min-height: var(--m3e-form-field-icon-size, 1.5rem);
    }
    .prefix,
    .suffix {
      display: flex;
      align-items: center;
      position: relative;
      user-select: none;
      flex: none;
      font-size: var(--m3e-form-field-icon-size, 1.5rem);
    }
    .prefix-text,
    .suffix-text {
      opacity: 1;
      transition: opacity ${t.motion.duration.extraLong1};
      user-select: none;
      flex: none;
    }
    .input {
      display: inline-flex;
      flex-wrap: wrap;
      flex: 1 1 auto;
      min-width: 0;
    }
    .label {
      display: flex;
      position: absolute;
      pointer-events: none;
      user-select: none;
      top: 0;
      left: 0;
      right: 0;
      font-size: var(--m3e-form-field-label-font-size, ${t.typescale.standard.body.small.fontSize});
      font-weight: var(--m3e-form-field-label-font-weight, ${t.typescale.standard.body.small.fontWeight});
      line-height: var(--m3e-form-field-label-line-height, ${t.typescale.standard.body.small.lineHeight});
      letter-spacing: var(--m3e-form-field-label-tracking, ${t.typescale.standard.body.small.tracking});
      color: var(--_form-field-label-color, inherit);
      transition: ${r(`top ${t.motion.duration.short4}, 
        font-size ${t.motion.duration.short4}, 
        line-height ${t.motion.duration.short4}`)};
    }
    :host(.-with-select) .label {
      margin-inline-end: 1.5rem;
    }
    ::slotted([slot="label"]) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .subscript {
      display: inline-flex;
      width: 100%;
      margin-top: 0.25rem;
      font-size: var(--m3e-form-field-subscript-font-size, ${t.typescale.standard.body.small.fontSize});
      font-weight: var(--m3e-form-field-subscript-font-weight, ${t.typescale.standard.body.small.fontWeight});
      line-height: var(--m3e-form-field-subscript-line-height, ${t.typescale.standard.body.small.lineHeight});
      letter-spacing: var(--m3e-form-field-subscript-tracking, ${t.typescale.standard.body.small.tracking});
      min-height: var(--m3e-form-field-subscript-line-height, ${t.typescale.standard.body.small.lineHeight});
      color: var(--m3e-form-field-subscript-color, ${t.color.onSurfaceVariant});
    }
    .error,
    .hint {
      flex: 1 1 auto;
    }
    :host([hide-subscript="always"]) .subscript {
      display: none;
    }
    :host([hide-subscript="auto"]:not(:state(-invalid))) .subscript {
      opacity: 0;
      margin-top: 0px;
      margin-bottom: 0.25rem;
      transition: ${r(`opacity ${t.motion.duration.short4}, 
        margin-top ${t.motion.duration.short4}, 
        margin-bottom ${t.motion.duration.short4}`)};
    }
    :host([hide-subscript="auto"]:not(:state(-invalid)):focus-within) .subscript,
    :host([hide-subscript="auto"]:not(:state(-invalid)).-pressed) .subscript {
      opacity: 1;
      margin-top: 0.25rem;
      margin-bottom: 0;
    }
    :host(:state(-invalid)) .hint {
      display: none;
    }
    :host(:not(:state(-invalid))) .error {
      display: none;
    }
    ::slotted(input),
    ::slotted(textarea),
    ::slotted(select) {
      outline: unset;
      border: unset;
      background-color: transparent;
      box-shadow: none;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      color: var(--_form-field-input-color, inherit);
      flex: 1 1 auto;
      min-width: 0;
      padding: unset;
    }
    ::slotted(textarea) {
      scrollbar-width: ${t.scrollbar.thinWidth};
      scrollbar-color: ${t.scrollbar.color};
    }
    ::slotted(m3e-select),
    ::slotted(m3e-input-chip-set) {
      flex: 1 1 auto;
      min-width: 0;
    }
    :host([float-label="auto"]:not(.-float-label):not(.-pressed)) .label {
      font-size: inherit;
    }

    :host([float-label="auto"]:not(.-float-label).-with-label) .prefix-text,
    :host([float-label="auto"]:not(.-float-label).-with-label) .suffix-text {
      opacity: 0;
      transition: opacity 0s;
    }
    .prefix {
      margin-inline-start: 1rem;
    }
    :host(.-with-prefix) .prefix {
      margin-inline-end: 1rem;
      margin-inline-start: 0.75rem;
    }
    .suffix {
      margin-inline-end: 1rem;
    }
    :host(.-with-suffix) .suffix {
      margin-inline-start: 0.25rem;
      margin-inline-end: 0.5rem;
    }
    :host(.-with-suffix.-with-select) .suffix {
      margin-inline-start: unset;
    }
    :host(.-with-select) .suffix-text {
      display: none;
    }
    :host([variant="outlined"]) .label {
      margin-top: calc(0px - var(--_form-field-label-line-height) / 2);
    }
    :host([variant="outlined"]) .outline {
      position: absolute;
      display: flex;
      pointer-events: none;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    :host([variant="outlined"]) .pseudo-label {
      visibility: hidden;
      margin-inline-end: 0.5rem;
      font-size: var(--_form-field-label-font-size);
      line-height: var(--_form-field-label-line-height);
      letter-spacing: var(--_form-field-label-tracking);
      max-width: 100%;
      transition-property: max-width, margin-inline-end;
      transition-duration: 1ms;
    }
    :host([variant="outlined"].-required:not([hide-required-marker])) .pseudo-label {
      margin-inline-end: 0.25rem;
    }
    :host([variant="outlined"][float-label="auto"]:not(.-float-label):not(.-pressed)) .pseudo-label {
      max-width: 0;
      margin-inline-end: 0px;
      transition-delay: ${t.motion.duration.short2};
    }
    :host([variant="outlined"]) .outline-start,
    :host([variant="outlined"]) .outline-notch,
    :host([variant="outlined"]) .outline-end {
      box-sizing: border-box;
      border-width: var(--_form-field-outline-size, 1px);
      border-color: var(--_form-field-outline-color);
      transition: border-color ${t.motion.duration.short4};
    }
    :host([variant="outlined"]:not(.-with-label)) .outline-notch {
      display: none;
    }
    :host([variant="outlined"]) .outline-start {
      min-width: 0.75rem;
      border-top-style: solid;
      border-inline-start-style: solid;
      border-bottom-style: solid;
      border-start-start-radius: var(--m3e-outlined-form-field-container-shape, ${t.shape.corner.extraSmall});
      border-end-start-radius: var(--m3e-outlined-form-field-container-shape, ${t.shape.corner.extraSmall});
    }
    :host([variant="outlined"]) .outline-notch {
      border-bottom-style: solid;
    }
    :host([variant="outlined"]) .outline-end {
      flex-grow: 1;
      min-width: 1rem;
      border-top-style: solid;
      border-inline-end-style: solid;
      border-bottom-style: solid;
      border-start-end-radius: var(--m3e-outlined-form-field-container-shape, ${t.shape.corner.extraSmall});
      border-end-end-radius: var(--m3e-outlined-form-field-container-shape, ${t.shape.corner.extraSmall});
    }
    :host([variant="outlined"].-with-prefix) .outline-start {
      min-width: calc(1.25rem + var(--_prefix-width, 0px) + 0.25rem);
    }
    :host([variant="outlined"]:not(.-disabled)) .base:hover .outline,
    :host([variant="outlined"]:not(.-disabled):focus-within) .outline,
    :host([variant="outlined"]:not(.-disabled).-pressed) .outline {
      --_form-field-outline-size: 2px;
    }
    :host([variant="outlined"]) .subscript {
      margin-inline: 1rem;
      width: calc(100% - 2rem);
    }
    :host([variant="outlined"]) .content {
      min-height: calc(3.5rem + ${t.density.calc(-2)});
      --_form-field-label-font-size: var(
        --m3e-form-field-label-font-size,
        ${t.typescale.standard.body.small.fontSize}
      );
    }
    :host([variant="outlined"][float-label="auto"]:not(.-float-label):not(.-pressed)) .label {
      margin-top: unset;
      line-height: calc(3.5rem + ${t.density.calc(-2)});
      --_form-field-label-font-size: var(
        --m3e-form-field-label-font-size,
        ${t.typescale.standard.body.small.fontSize}
      );
    }
    :host([variant="filled"]) .base {
      --_select-arrow-margin-top: calc(
        0px - calc(1rem / max(calc(0 - calc(var(--md-sys-density-scale, 0) + var(--md-sys-density-scale, 0))), 1))
      );
    }
    :host([variant="filled"]) .base::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom-style: solid;
      border-width: 1px;
      border-radius: var(--m3e-form-field-container-shape, ${t.shape.corner.extraSmallTop});
      border-color: var(--_form-field-outline-color);
      background-color: var(--_form-field-container-color);
    }
    :host([variant="filled"]:not(.-disabled)) .base:hover::before,
    :host([variant="filled"]:not(.-disabled):focus-within) .base::before,
    :host([variant="filled"]:not(.-disabled).-pressed) .base::before {
      border-width: 3px;
    }
    :host([variant="filled"]) .base::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--_form-field-hover-container-color);
      transition: background-color ${t.motion.duration.short4};
    }
    :host([variant="filled"]) .subscript {
      margin-inline: 1rem;
      width: calc(100% - 2rem);
    }
    :host([variant="filled"]) .content {
      padding-top: calc(1.5rem + ${t.density.calc(-2)});
      margin-bottom: 0.5rem;
    }
    :host([variant="filled"]) .label {
      top: calc(0.5rem + ${t.density.calc(-2)});
    }
    :host([variant="filled"][float-label="auto"]:not(.-float-label):not(.-pressed)) .label {
      top: 0px;
      line-height: calc(3.5rem + ${t.density.calc(-2)} - 0.0625rem);
      --_form-field-label-font-size: var(
        --m3e-form-field-label-font-size,
        ${t.typescale.standard.body.small.fontSize}
      );
    }
    :host(:not(.-disabled):not(:focus-within):not(.-pressed)) .base:hover {
      --_form-field-hover-container-color: color-mix(
        in srgb,
        var(--m3e-form-field-hover-container-color, ${t.color.onSurface})
          var(--m3e-form-field-hover-container-opacity, 8%),
        transparent
      );
    }
    :host(:not(.-disabled):not(:state(-invalid))) {
      color: var(--m3e-form-field-color, ${t.color.onSurface});
    }
    :host([variant="outlined"]:not(.-disabled):not(:state(-invalid))) .base {
      --_form-field-outline-color: var(--m3e-form-field-outline-color, ${t.color.outline});
    }
    :host([variant="filled"]:not(.-disabled):not(:state(-invalid))) .base {
      --_form-field-outline-color: var(--m3e-form-field-outline-color, ${t.color.onSurfaceVariant});
    }
    :host([variant="outlined"]:not(.-disabled):not(:state(-invalid)):focus-within) .base,
    :host([variant="outlined"]:not(.-disabled):not(:state(-invalid)).-pressed) .base,
    :host([variant="filled"]:not(.-disabled):not(:state(-invalid)):focus-within) .base,
    :host([variant="filled"]:not(.-disabled):not(:state(-invalid)).-pressed) .base {
      --_form-field-outline-color: var(--m3e-form-field-focused-outline-color, ${t.color.primary});
      --_form-field-label-color: var(--m3e-form-field-focused-color, ${t.color.primary});
    }
    :host(:not(.-disabled)) .base {
      --_form-field-container-color: var(
        --m3e-form-field-container-color,
        ${t.color.surfaceContainerHighest}
      );
    }
    :host(:not(.-disabled):state(-invalid)) .base {
      --_form-field-label-color: var(--m3e-form-field-invalid-color, ${t.color.error});
      --_form-field-outline-color: var(--m3e-form-field-invalid-color, ${t.color.error});
    }
    :host(:not(.-disabled):state(-invalid)) .subscript {
      color: var(--m3e-form-field-invalid-color, ${t.color.error});
    }
    :host(.-disabled) {
      color: color-mix(
        in srgb,
        var(--m3e-form-field-disabled-color, ${t.color.onSurface}) var(--m3e-form-field-disabled-opacity, 38%),
        transparent
      );
    }
    :host(.-disabled) .base {
      --_form-field-container-color: color-mix(
        in srgb,
        var(--m3e-form-field-disabled-container-color, ${t.color.onSurface})
          var(--m3e-form-field-disabled-container-opacity, 4%),
        transparent
      );
    }
    :host(.-no-animate) *,
    :host(.-no-animate) *::before,
    :host(.-no-animate) *::after {
      transition: none !important;
    }
    @media (forced-colors: active) {
      :host([variant="filled"]) .base::after {
        transition: none;
      }
      :host {
        --_form-field-outline-color: CanvasText;
      }
      :host(.-disabled) {
        --_form-field-input-color: GrayText;
        --_form-field-color: GrayText;
        --_form-field-label-color: GrayText;
        --_form-field-outline-color: GrayText;
      }
    }
    @media (prefers-reduced-motion) {
      .base::before,
      .prefix-text,
      .suffix-text,
      .label,
      .subscript,
      .outline-start,
      .outline-notch,
      .outline-end,
      .pseudo-label {
        transition: none !important;
      }
    }
  `,d([L(".base")],At.prototype,"_base",2),d([L(".prefix")],At.prototype,"_prefix",2),d([L(".error")],At.prototype,"_error",2),d([L(".hint")],At.prototype,"_hint",2),d([ie()],At.prototype,"_pseudoLabel",2),d([ie()],At.prototype,"_required",2),d([ie()],At.prototype,"_invalid",2),d([ie()],At.prototype,"_validationMessage",2),d([p({reflect:!0})],At.prototype,"variant",2),d([p({attribute:"hide-required-marker",type:Boolean,reflect:!0})],At.prototype,"hideRequiredMarker",2),d([p({attribute:"hide-subscript",reflect:!0})],At.prototype,"hideSubscript",2),d([p({attribute:"float-label",reflect:!0})],At.prototype,"floatLabel",2),At=d([y("m3e-form-field")],At);var xi=class extends k{constructor(){super(...arguments);this.emphasized=!1;this.variant="display";this.size="medium"}update(e){super.update(e),e.has("level")&&(this.ariaLevel=this.level!==void 0?`${this.level}`:null,this.role=this.ariaLevel?"heading":null)}render(){return f`<slot></slot>`}};xi.styles=b`
    :host {
      display: block;
    }
    :host([variant="display"][size="large"]:not([emphasized])) {
      font-size: ${t.typescale.standard.display.large.fontSize};
      font-weight: ${t.typescale.standard.display.large.fontWeight};
      line-height: ${t.typescale.standard.display.large.lineHeight};
      letter-spacing: ${t.typescale.standard.display.large.tracking};
    }
    :host([variant="display"][size="medium"]:not([emphasized])) {
      font-size: ${t.typescale.standard.display.medium.fontSize};
      font-weight: ${t.typescale.standard.display.medium.fontWeight};
      line-height: ${t.typescale.standard.display.medium.lineHeight};
      letter-spacing: ${t.typescale.standard.display.medium.tracking};
    }
    :host([variant="display"][size="small"]:not([emphasized])) {
      font-size: ${t.typescale.standard.display.small.fontSize};
      font-weight: ${t.typescale.standard.display.small.fontWeight};
      line-height: ${t.typescale.standard.display.small.lineHeight};
      letter-spacing: ${t.typescale.standard.display.small.tracking};
    }
    :host([variant="headline"][size="large"]:not([emphasized])) {
      font-size: ${t.typescale.standard.headline.large.fontSize};
      font-weight: ${t.typescale.standard.headline.large.fontWeight};
      line-height: ${t.typescale.standard.headline.large.lineHeight};
      letter-spacing: ${t.typescale.standard.headline.large.tracking};
    }
    :host([variant="headline"][size="medium"]:not([emphasized])) {
      font-size: ${t.typescale.standard.headline.medium.fontSize};
      font-weight: ${t.typescale.standard.headline.medium.fontWeight};
      line-height: ${t.typescale.standard.headline.medium.lineHeight};
      letter-spacing: ${t.typescale.standard.headline.medium.tracking};
    }
    :host([variant="headline"][size="small"]:not([emphasized])) {
      font-size: ${t.typescale.standard.headline.small.fontSize};
      font-weight: ${t.typescale.standard.headline.small.fontWeight};
      line-height: ${t.typescale.standard.headline.small.lineHeight};
      letter-spacing: ${t.typescale.standard.headline.small.tracking};
    }
    :host([variant="title"][size="large"]:not([emphasized])) {
      font-size: ${t.typescale.standard.title.large.fontSize};
      font-weight: ${t.typescale.standard.title.large.fontWeight};
      line-height: ${t.typescale.standard.title.large.lineHeight};
      letter-spacing: ${t.typescale.standard.title.large.tracking};
    }
    :host([variant="title"][size="medium"]:not([emphasized])) {
      font-size: ${t.typescale.standard.title.medium.fontSize};
      font-weight: ${t.typescale.standard.title.medium.fontWeight};
      line-height: ${t.typescale.standard.title.medium.lineHeight};
      letter-spacing: ${t.typescale.standard.title.medium.tracking};
    }
    :host([variant="title"][size="small"]:not([emphasized])) {
      font-size: ${t.typescale.standard.title.small.fontSize};
      font-weight: ${t.typescale.standard.title.small.fontWeight};
      line-height: ${t.typescale.standard.title.small.lineHeight};
      letter-spacing: ${t.typescale.standard.title.small.tracking};
    }
    :host([variant="label"][size="large"]:not([emphasized])) {
      font-size: ${t.typescale.standard.label.large.fontSize};
      font-weight: ${t.typescale.standard.label.large.fontWeight};
      line-height: ${t.typescale.standard.label.large.lineHeight};
      letter-spacing: ${t.typescale.standard.label.large.tracking};
    }
    :host([variant="label"][size="medium"]:not([emphasized])) {
      font-size: ${t.typescale.standard.label.medium.fontSize};
      font-weight: ${t.typescale.standard.label.medium.fontWeight};
      line-height: ${t.typescale.standard.label.medium.lineHeight};
      letter-spacing: ${t.typescale.standard.label.medium.tracking};
    }
    :host([variant="label"][size="small"]:not([emphasized])) {
      font-size: ${t.typescale.standard.label.small.fontSize};
      font-weight: ${t.typescale.standard.label.small.fontWeight};
      line-height: ${t.typescale.standard.label.small.lineHeight};
      letter-spacing: ${t.typescale.standard.label.small.tracking};
    }
    :host([variant="display"][size="large"][emphasized]) {
      font-size: ${t.typescale.emphasized.display.large.fontSize};
      font-weight: ${t.typescale.emphasized.display.large.fontWeight};
      line-height: ${t.typescale.emphasized.display.large.lineHeight};
      letter-spacing: ${t.typescale.emphasized.display.large.tracking};
    }
    :host([variant="display"][size="medium"][emphasized]) {
      font-size: ${t.typescale.emphasized.display.medium.fontSize};
      font-weight: ${t.typescale.emphasized.display.medium.fontWeight};
      line-height: ${t.typescale.emphasized.display.medium.lineHeight};
      letter-spacing: ${t.typescale.emphasized.display.medium.tracking};
    }
    :host([variant="display"][size="small"][emphasized]) {
      font-size: ${t.typescale.emphasized.display.small.fontSize};
      font-weight: ${t.typescale.emphasized.display.small.fontWeight};
      line-height: ${t.typescale.emphasized.display.small.lineHeight};
      letter-spacing: ${t.typescale.emphasized.display.small.tracking};
    }
    :host([variant="headline"][size="large"][emphasized]) {
      font-size: ${t.typescale.emphasized.headline.large.fontSize};
      font-weight: ${t.typescale.emphasized.headline.large.fontWeight};
      line-height: ${t.typescale.emphasized.headline.large.lineHeight};
      letter-spacing: ${t.typescale.emphasized.headline.large.tracking};
    }
    :host([variant="headline"][size="medium"][emphasized]) {
      font-size: ${t.typescale.emphasized.headline.medium.fontSize};
      font-weight: ${t.typescale.emphasized.headline.medium.fontWeight};
      line-height: ${t.typescale.emphasized.headline.medium.lineHeight};
      letter-spacing: ${t.typescale.emphasized.headline.medium.tracking};
    }
    :host([variant="headline"][size="small"][emphasized]) {
      font-size: ${t.typescale.emphasized.headline.small.fontSize};
      font-weight: ${t.typescale.emphasized.headline.small.fontWeight};
      line-height: ${t.typescale.emphasized.headline.small.lineHeight};
      letter-spacing: ${t.typescale.emphasized.headline.small.tracking};
    }
    :host([variant="title"][size="large"][emphasized]) {
      font-size: ${t.typescale.emphasized.title.large.fontSize};
      font-weight: ${t.typescale.emphasized.title.large.fontWeight};
      line-height: ${t.typescale.emphasized.title.large.lineHeight};
      letter-spacing: ${t.typescale.emphasized.title.large.tracking};
    }
    :host([variant="title"][size="medium"][emphasized]) {
      font-size: ${t.typescale.emphasized.title.medium.fontSize};
      font-weight: ${t.typescale.emphasized.title.medium.fontWeight};
      line-height: ${t.typescale.emphasized.title.medium.lineHeight};
      letter-spacing: ${t.typescale.emphasized.title.medium.tracking};
    }
    :host([variant="title"][size="small"][emphasized]) {
      font-size: ${t.typescale.emphasized.title.small.fontSize};
      font-weight: ${t.typescale.emphasized.title.small.fontWeight};
      line-height: ${t.typescale.emphasized.title.small.lineHeight};
      letter-spacing: ${t.typescale.emphasized.title.small.tracking};
    }
    :host([variant="label"][size="large"][emphasized]) {
      font-size: ${t.typescale.emphasized.label.large.fontSize};
      font-weight: ${t.typescale.emphasized.label.large.fontWeight};
      line-height: ${t.typescale.emphasized.label.large.lineHeight};
      letter-spacing: ${t.typescale.emphasized.label.large.tracking};
    }
    :host([variant="label"][size="medium"][emphasized]) {
      font-size: ${t.typescale.emphasized.label.medium.fontSize};
      font-weight: ${t.typescale.emphasized.label.medium.fontWeight};
      line-height: ${t.typescale.emphasized.label.medium.lineHeight};
      letter-spacing: ${t.typescale.emphasized.label.medium.tracking};
    }
    :host([variant="label"][size="small"][emphasized]) {
      font-size: ${t.typescale.emphasized.label.small.fontSize};
      font-weight: ${t.typescale.emphasized.label.small.fontWeight};
      line-height: ${t.typescale.emphasized.label.small.lineHeight};
      letter-spacing: ${t.typescale.emphasized.label.small.tracking};
    }
  `,d([p({type:Boolean,reflect:!0})],xi.prototype,"emphasized",2),d([p({reflect:!0})],xi.prototype,"variant",2),d([p({reflect:!0})],xi.prototype,"size",2),d([p({type:Number})],xi.prototype,"level",2),xi=d([y("m3e-heading")],xi);var er=class extends M(k,"img"){constructor(){super(...arguments);this.name="";this.variant="outlined";this.filled=!1;this.grade="medium";this.weight=400;this.opticalSize=24}connectedCallback(){!this.hasAttribute("aria-label")&&!this.hasAttribute("aria-labelledby")&&!this.hasAttribute("aria-hidden")&&(this.ariaHidden="true"),super.connectedCallback()}updated(e){super.updated(e),e.has("filled")&&this._icon?.style.setProperty("--_icon-fill",this.filled?"1":"0"),e.has("grade")&&this._icon?.style.setProperty("--_icon-grade",this.grade==="low"?"-25":this.grade==="high"?"200":"0"),e.has("weight")&&this._icon?.style.setProperty("--_icon-weight",`${this.weight}`),e.has("opticalSize")&&this._icon?.style.setProperty("--_icon-optical-size",`${this.opticalSize}`)}render(){return f`<div class="icon" aria-hidden="true">${this.name}</div>`}};er.styles=b`
    :host {
      display: inline-block;
      user-select: none;
      font-size: var(--m3e-icon-size, 1.5rem);
      width: 1em;
      vertical-align: middle;
      overflow: hidden;
    }
    .icon {
      font-weight: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      font-feature-settings: "liga";
      -webkit-font-smoothing: antialiased;
      width: inherit;
      height: inherit;
      vertical-align: inherit;
      font-variation-settings:
        "FILL" var(--_icon-fill, 0),
        "wght" var(--_icon-weight, 400),
        "GRAD" var(--_icon-grade, 0),
        "opsz" var(--_icon-optical-size, 24);
    }
    :host([variant="outlined"]) .icon {
      font-family: "Material Symbols Outlined";
    }
    :host([variant="rounded"]) .icon {
      font-family: "Material Symbols Rounded";
    }
    :host([variant="sharp"]) .icon {
      font-family: "Material Symbols Sharp";
    }
  `,d([L(".icon")],er.prototype,"_icon",2),d([p()],er.prototype,"name",2),d([p({reflect:!0})],er.prototype,"variant",2),d([p({type:Boolean,reflect:!0})],er.prototype,"filled",2),d([p()],er.prototype,"grade",2),d([p({type:Number})],er.prototype,"weight",2),d([p({attribute:"optical-size",type:Number})],er.prototype,"opticalSize",2),er=d([y("m3e-icon")],er);var Ce={"extra-small":{containerHeight:r(`calc(var(--m3e-icon-button-extra-small-container-height, var(--m3e-icon-button-container-height, 2rem)) + ${t.density.calc(0)})`),outlineThickness:r("var(--m3e-icon-button-extra-small-outline-thickness, var(--m3e-icon-button-outline-thickness, 1px))"),iconSize:r(`calc(var(--m3e-icon-button-extra-small-icon-size, var(--m3e-icon-button-icon-size, 1.25rem)) + ${t.density.calc(0)})`),shapeRound:r(`var(--m3e-icon-button-extra-small-shape-round, var(--m3e-icon-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-icon-button-extra-small-shape-square, var(--m3e-icon-button-shape-square, ${t.shape.corner.medium}))`),selectedShapeRound:r(`var(--m3e-icon-button-extra-small-selected-shape-round, var(--m3e-icon-button-selected-shape-round, ${t.shape.corner.medium}))`),selectedShapeSquare:r(`var(--m3e-icon-button-extra-small-selected-shape-square, var(--m3e-icon-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-icon-button-extra-small-shape-pressed-morph, var(--m3e-icon-button-shape-pressed-morph, ${t.shape.corner.small}))`),narrowLeadingSpace:r(`calc(var(--m3e-icon-button-extra-small-narrow-leading-space, var(--m3e-icon-button-narrow-leading-space, 0.25rem)) + ${t.density.calc(0)})`),narrowTrailingSpace:r(`calc(var(--m3e-icon-button-extra-small-narrow-trailing-space, var(--m3e-icon-button-narrow-trailing-space, 0.25rem)) + ${t.density.calc(0)})`),defaultLeadingSpace:r(`calc(var(--m3e-icon-button-extra-small-default-leading-space, var(--m3e-icon-button-default-leading-space, 0.375rem)) + ${t.density.calc(0)})`),defaultTrailingSpace:r(`calc(var(--m3e-icon-button-extra-small-default-trailing-space, var(--m3e-icon-button-default-trailing-space, 0.375rem)) + ${t.density.calc(0)})`),wideLeadingSpace:r(`calc(var(--m3e-icon-button-extra-small-wide-leading-space, var(--m3e-icon-button-wide-leading-space, 0.625rem)) + ${t.density.calc(0)})`),wideTrailingSpace:r(`calc(var(--m3e-icon-button-extra-small-wide-trailing-space, var(--m3e-icon-button-wide-trailing-space, 0.625rem)) + ${t.density.calc(0)})`)},small:{containerHeight:r(`calc(var(--m3e-icon-button-small-container-height, var(--m3e-icon-button-container-height, 2.5rem)) + ${t.density.calc(-1)})`),outlineThickness:r("var(--m3e-icon-button-small-outline-thickness, var(--m3e-icon-button-outline-thickness, 1px))"),iconSize:r(`calc(var(--m3e-icon-button-small-icon-size, var(--m3e-icon-button-icon-size, 1.5rem)) + ${t.density.calc(-1)})`),shapeRound:r(`var(--m3e-icon-button-small-shape-round, var(--m3e-icon-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-icon-button-small-shape-square, var(--m3e-icon-button-shape-square, ${t.shape.corner.medium}))`),selectedShapeRound:r(`var(--m3e-icon-button-small-selected-shape-round, var(--m3e-icon-button-selected-shape-round, ${t.shape.corner.medium}))`),selectedShapeSquare:r(`var(--m3e-icon-button-small-selected-shape-square, var(--m3e-icon-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-icon-button-small-shape-pressed-morph, var(--m3e-icon-button-shape-pressed-morph, ${t.shape.corner.small}))`),narrowLeadingSpace:r(`calc(var(--m3e-icon-button-small-narrow-leading-space, var(--m3e-icon-button-narrow-leading-space, 0.25rem)) + ${t.density.calc(-1)})`),narrowTrailingSpace:r(`calc(var(--m3e-icon-button-small-narrow-trailing-space, var(--m3e-icon-button-narrow-trailing-space, 0.25rem)) + ${t.density.calc(-1)})`),defaultLeadingSpace:r(`calc(var(--m3e-icon-button-small-default-leading-space, var(--m3e-icon-button-default-leading-space, 0.5rem)) + ${t.density.calc(-1)})`),defaultTrailingSpace:r(`calc(var(--m3e-icon-button-small-default-trailing-space, var(--m3e-icon-button-default-trailing-space, 0.5rem)) + ${t.density.calc(-1)})`),wideLeadingSpace:r(`calc(var(--m3e-icon-button-small-wide-leading-space, var(--m3e-icon-button-wide-leading-space, 0.875rem)) + ${t.density.calc(-1)})`),wideTrailingSpace:r(`calc(var(--m3e-icon-button-small-wide-trailing-space, var(--m3e-icon-button-wide-trailing-space, 0.875rem)) + ${t.density.calc(-1)})`)},medium:{containerHeight:r(`calc(var(--m3e-icon-button-medium-container-height, var(--m3e-icon-button-container-height, 3.5rem)) + ${t.density.calc(-2)})`),outlineThickness:r("var(--m3e-icon-button-medium-outline-thickness, var(--m3e-icon-button-outline-thickness, 1px))"),iconSize:r(`calc(var(--m3e-icon-button-medium-icon-size, var(--m3e-icon-button-icon-size, 1.5rem)) + ${t.density.calc(-2)})`),shapeRound:r(`var(--m3e-icon-button-medium-shape-round, var(--m3e-icon-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-icon-button-medium-shape-square, var(--m3e-icon-button-shape-square, ${t.shape.corner.large}))`),selectedShapeRound:r(`var(--m3e-icon-button-medium-selected-shape-round, var(--m3e-icon-button-selected-shape-round, ${t.shape.corner.large}))`),selectedShapeSquare:r(`var(--m3e-icon-button-medium-selected-shape-square, var(--m3e-icon-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-icon-button-medium-shape-pressed-morph, var(--m3e-icon-button-shape-pressed-morph, ${t.shape.corner.medium}))`),narrowLeadingSpace:r(`calc(var(--m3e-icon-button-medium-narrow-leading-space, var(--m3e-icon-button-narrow-leading-space, 0.75rem)) + ${t.density.calc(-2)})`),narrowTrailingSpace:r(`calc(var(--m3e-icon-button-medium-narrow-trailing-space, var(--m3e-icon-button-narrow-trailing-space, 0.75rem)) + ${t.density.calc(-2)})`),defaultLeadingSpace:r(`calc(var(--m3e-icon-button-medium-default-leading-space, var(--m3e-icon-button-default-leading-space, 1rem)) + ${t.density.calc(-2)})`),defaultTrailingSpace:r(`calc(var(--m3e-icon-button-medium-default-trailing-space, var(--m3e-icon-button-default-trailing-space, 1rem)) + ${t.density.calc(-2)})`),wideLeadingSpace:r(`calc(var(--m3e-icon-button-medium-wide-leading-space, var(--m3e-icon-button-wide-leading-space, 1.5rem)) + ${t.density.calc(-2)})`),wideTrailingSpace:r(`calc(var(--m3e-icon-button-medium-wide-trailing-space, var(--m3e-icon-button-wide-trailing-space, 1.5rem)) + ${t.density.calc(-2)})`)},large:{containerHeight:r(`calc(var(--m3e-icon-button-large-container-height, var(--m3e-icon-button-container-height, 6rem)) + ${t.density.calc(-3)})`),outlineThickness:r("var(--m3e-icon-button-large-outline-thickness, var(--m3e-icon-button-outline-thickness, 2px))"),iconSize:r(`calc(var(--m3e-icon-button-large-icon-size, var(--m3e-icon-button-icon-size, 2rem)) + ${t.density.calc(-3)})`),shapeRound:r(`var(--m3e-icon-button-large-shape-round, var(--m3e-icon-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-icon-button-large-shape-square, var(--m3e-icon-button-shape-square, ${t.shape.corner.extraLarge}))`),selectedShapeRound:r(`var(--m3e-icon-button-large-selected-shape-round, var(--m3e-icon-button-selected-shape-round, ${t.shape.corner.extraLarge}))`),selectedShapeSquare:r(`var(--m3e-icon-button-large-selected-shape-square, var(--m3e-icon-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-icon-button-large-shape-pressed-morph, var(--m3e-icon-button-shape-pressed-morph, ${t.shape.corner.large}))`),narrowLeadingSpace:r(`calc(var(--m3e-icon-button-large-narrow-leading-space, var(--m3e-icon-button-narrow-leading-space, 1rem)) + ${t.density.calc(-3)})`),narrowTrailingSpace:r(`calc(var(--m3e-icon-button-large-narrow-trailing-space, var(--m3e-icon-button-narrow-trailing-space, 1rem)) + ${t.density.calc(-3)})`),defaultLeadingSpace:r(`calc(var(--m3e-icon-button-large-default-leading-space, var(--m3e-icon-button-default-leading-space, 2rem)) + ${t.density.calc(-3)})`),defaultTrailingSpace:r(`calc(var(--m3e-icon-button-large-default-trailing-space, var(--m3e-icon-button-default-trailing-space, 2rem)) + ${t.density.calc(-3)})`),wideLeadingSpace:r(`calc(var(--m3e-icon-button-large-wide-leading-space, var(--m3e-icon-button-wide-leading-space, 3rem)) + ${t.density.calc(-3)})`),wideTrailingSpace:r(`calc(var(--m3e-icon-button-large-wide-trailing-space, var(--m3e-icon-button-wide-trailing-space, 3rem)) + ${t.density.calc(-3)})`)},"extra-large":{containerHeight:r(`calc(var(--m3e-icon-button-extra-large-container-height, var(--m3e-icon-button-container-height, 8.5rem)) + ${t.density.calc(-3)})`),outlineThickness:r("var(--m3e-icon-button-extra-large-outline-thickness, var(--m3e-icon-button-outline-thickness, 3px))"),iconSize:r(`calc(var(--m3e-icon-button-extra-large-icon-size, var(--m3e-icon-button-icon-size, 2.5rem)) + ${t.density.calc(-3)})`),shapeRound:r(`var(--m3e-icon-button-extra-large-shape-round, var(--m3e-icon-button-shape-round, ${t.shape.corner.full}))`),shapeSquare:r(`var(--m3e-icon-button-extra-large-shape-square, var(--m3e-icon-button-shape-square, ${t.shape.corner.extraLarge}))`),selectedShapeRound:r(`var(--m3e-icon-button-extra-large-selected-shape-round, var(--m3e-icon-button-selected-shape-round, ${t.shape.corner.extraLarge}))`),selectedShapeSquare:r(`var(--m3e-icon-button-extra-large-selected-shape-square, var(--m3e-icon-button-selected-shape-square, ${t.shape.corner.full}))`),shapePressedMorph:r(`var(--m3e-icon-button-extra-large-shape-pressed-morph, var(--m3e-icon-button-shape-pressed-morph, ${t.shape.corner.large}))`),narrowLeadingSpace:r(`calc(var(--m3e-icon-button-extra-large-narrow-leading-space, var(--m3e-icon-button-narrow-leading-space, 2rem)) + ${t.density.calc(-3)})`),narrowTrailingSpace:r(`calc(var(--m3e-icon-button-extra-large-narrow-trailing-space, var(--m3e-icon-button-narrow-trailing-space, 2rem)) + ${t.density.calc(-3)})`),defaultLeadingSpace:r(`calc(var(--m3e-icon-button-extra-large-default-leading-space, var(--m3e-icon-button-default-leading-space, 3rem)) + ${t.density.calc(-3)})`),defaultTrailingSpace:r(`calc(var(--m3e-icon-button-extra-large-default-trailing-space, var(--m3e-icon-button-default-trailing-space, 3rem)) + ${t.density.calc(-3)})`),wideLeadingSpace:r(`calc(var(--m3e-icon-button-extra-large-wide-leading-space, var(--m3e-icon-button-wide-leading-space, 4.5rem)) + ${t.density.calc(-3)})`),wideTrailingSpace:r(`calc(var(--m3e-icon-button-extra-large-wide-trailing-space, var(--m3e-icon-button-wide-trailing-space, 4.5rem)) + ${t.density.calc(-3)})`)}};function Ic(o){return b`
    :host([size="${r(o)}"]) .base {
      height: ${Ce[o].containerHeight};
    }
    :host([size="${r(o)}"][width="default"]) .wrapper {
      padding-inline-start: ${Ce[o].defaultLeadingSpace};
      padding-inline-end: ${Ce[o].defaultTrailingSpace};
    }
    :host([size="${r(o)}"][width="narrow"]) .wrapper {
      padding-inline-start: ${Ce[o].narrowLeadingSpace};
      padding-inline-end: ${Ce[o].narrowTrailingSpace};
    }
    :host([size="${r(o)}"][width="wide"]) .wrapper {
      padding-inline-start: ${Ce[o].wideLeadingSpace};
      padding-inline-end: ${Ce[o].wideTrailingSpace};
    }
    :host([size="${r(o)}"]) .icon {
      font-size: ${Ce[o].iconSize};
    }
    :host([size="${r(o)}"]) .base {
      outline-offset: calc(0px - ${Ce[o].outlineThickness});
      outline-width: ${Ce[o].outlineThickness};
    }
    :host(:not(:state(-connected))[size="${r(o)}"][shape="rounded"]:not(:state(-pressed))) .base {
      border-radius: var(--_button-shape, ${Ce[o].shapeRound});
    }
    :host(:not(:state(-connected))[size="${r(o)}"][shape="square"]) .base {
      border-radius: ${Ce[o].shapeSquare};
    }
    :host(:not(:state(-connected))[size="${r(o)}"][shape="rounded"][toggle][selected]:not(:state(-pressed)))
      .base {
      border-radius: ${Ce[o].selectedShapeRound};
    }
    :host(:not(:state(-connected))[size="${r(o)}"][shape="square"][toggle][selected]:not(:state(-pressed)))
      .base {
      border-radius: var(--_button-shape, ${Ce[o].selectedShapeSquare});
    }
    :host(:not(:state(-connected))[size="${r(o)}"]:state(-pressed)) .base {
      border-radius: ${Ce[o].shapePressedMorph};
    }
    :host(:state(-connected)[size="${r(o)}"][shape="rounded"]) .base {
      border-start-start-radius: var(
        --_button-rounded-start-shape,
        var(--_button-shape, ${Ce[o].shapeRound})
      );
      border-end-start-radius: var(
        --_button-rounded-start-shape,
        var(--_button-shape, ${Ce[o].shapeRound})
      );
      border-start-end-radius: var(
        --_button-rounded-end-shape,
        var(--_button-shape, ${Ce[o].shapeRound})
      );
      border-end-end-radius: var(
        --_button-rounded-end-shape,
        var(--_button-shape, ${Ce[o].shapeRound})
      );
    }
    :host(:state(-connected)[size="${r(o)}"][shape="square"]) .base {
      border-start-start-radius: var(--_button-square-start-shape, ${Ce[o].shapeSquare});
      border-end-start-radius: var(--_button-square-start-shape, ${Ce[o].shapeSquare});
      border-start-end-radius: var(--_button-square-end-shape, ${Ce[o].shapeSquare});
      border-end-end-radius: var(--_button-square-end-shape, ${Ce[o].shapeSquare});
    }
    :host(:state(-connected)[size="${r(o)}"][shape="square"][toggle][selected]:not(:state(-pressed))) .base {
      border-radius: var(--_button-shape, ${Ce[o].selectedShapeSquare});
    }
    :host(:state(-connected)[size="${r(o)}"]:state(-pressed)) .base {
      border-start-start-radius: var(
        --_button-start-shape-pressed-morph,
        ${Ce[o].shapePressedMorph}
      );
      border-end-start-radius: var(--_button-start-shape-pressed-morph, ${Ce[o].shapePressedMorph});
      border-start-end-radius: var(--_button-end-shape-pressed-morph, ${Ce[o].shapePressedMorph});
      border-end-end-radius: var(--_button-end-shape-pressed-morph, ${Ce[o].shapePressedMorph});
    }
  `}var rg=[Ic("extra-small"),Ic("small"),Ic("medium"),Ic("large"),Ic("extra-large")];var ig=b`
  :host {
    display: inline-block;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .base {
    box-sizing: border-box;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  .touch {
    position: absolute;
    aspect-ratio: 1 / 1;
    height: 3rem;
    left: auto;
    right: auto;
  }
  :host(:state(-pressed)) .base,
  :host(:state(-resting)) .base {
    transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard},
          border-radius ${t.motion.spring.fastEffects}`)};
  }
  .wrapper {
    width: 100%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: ${r(`padding-inline ${t.motion.spring.fastEffects}`)};
  }
  .icon {
    transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};

    --m3e-icon-size: 1em;
  }
  :host(:not(:disabled):not([disabled-interactive])) {
    cursor: pointer;
  }
  :host([disabled-interactive]) {
    cursor: not-allowed;
  }
  ::slotted(*) {
    font-size: inherit !important;
    flex: none;
    transform: var(--_icon-button-icon-transform);
    transform-origin: center center;
    transition: ${r(`transform var(--_icon-button-icon-transform-transition, ${t.motion.spring.fastEffects})`)};
  }
  ::slotted(svg) {
    width: 1em;
    height: 1em;
  }
  :host([toggle]:not([selected])) .base.with-selected-icon slot[name="selected"],
  :host([toggle][selected]) .base.with-selected-icon slot:not([name]) {
    display: none;
  }
  a {
    all: unset;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
  }
  :host(:state(-grouped):state(-connected)) {
    flex: 1 1 auto;
  }
  :host(:state(-grouped):not(:state(-connected)):not(:state(-adjacent-pressed)):not(:state(-pressed))) {
    flex-shrink: 0;
    flex-grow: 0;
  }
  :host(:state(-grouped):not(:state(-connected)):state(-adjacent-pressed):not(:state(-pressed))) {
    flex-shrink: 1;
    min-width: 0;
  }
  :host(:state(-grouped):not(:state(-connected)):state(-adjacent-pressed):not(:state(-pressed))) .label {
    text-overflow: clip;
  }
  :host(:state(-grouped):not(:state(-connected)):state(-pressed):not([disabled-interactive]):not(:disabled)) {
    flex-shrink: 0;
    flex-basis: calc(
      var(--_button-width) + calc(var(--_button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15))
    );
  }
  @media (forced-colors: active) {
    .base,
    .icon {
      transition: none;
    }
    :host(:state(-pressed)) .base,
    :host(:state(-resting)) .base {
      transition: border-radius ${t.motion.spring.fastEffects};
    }
    :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .base {
      background-color: ButtonFace;
      outline-color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .label,
    :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .icon {
      color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .base {
      background-color: ButtonFace;
      outline-color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label,
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon {
      color: ButtonText;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .base {
      background-color: ButtonText;
      outline: none;
    }
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .label,
    :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon {
      forced-color-adjust: none;
      color: ButtonFace;
      background-color: ButtonText;
    }
    :host([variant]:disabled) .base,
    :host([variant][disabled-interactive]) .base {
      outline-color: GrayText;
      background-color: unset;
    }
    :host([variant]:disabled) .label,
    :host([variant][disabled-interactive]) .label,
    :host([variant]:disabled) .icon,
    :host([variant][disabled-interactive]) .icon {
      color: GrayText;
    }
    .base {
      outline-style: solid;
    }
    :host([size="extra-small"]) .base {
      outline-offset: calc(0px - var(--m3e-icon-button-extra-small-outline-thickness, 1px));
      outline-width: var(--m3e-icon-button-extra-small-outline-thickness, 1px);
    }
    :host([size="small"]) .base {
      outline-offset: calc(0px - var(--m3e-icon-button-small-outline-thickness, 1px));
      outline-width: var(--m3e-icon-button-small-outline-thickness, 1px);
    }
    :host([size="medium"]) .base {
      outline-offset: calc(0px - var(--m3e-icon-button-medium-outline-thickness, 1px));
      outline-width: var(--m3e-icon-button-medium-outline-thickness, 1px);
    }
    :host([size="large"]) .base {
      outline-offset: calc(0px - var(--m3e-icon-button-large-outline-thickness, 2px));
      outline-width: var(--m3e-icon-button-large-outline-thickness, 2px);
    }
    :host([size="extra-large"]) .base {
      outline-offset: calc(0px - var(--m3e-icon-button-extra-large-outline-thickness, 3px));
      outline-width: var(--m3e-icon-button-extra-large-outline-thickness, 3px);
    }
  }
  @media (prefers-reduced-motion) {
    :host(:state(-pressed)) .base,
    :host(:state(-resting)) .base,
    .base,
    .wrapper,
    .icon {
      transition: none;
    }
  }
`;var ee={elevated:{iconColor:r(`var(--m3e-elevated-icon-button-icon-color, var(--m3e-icon-button-icon-color, ${t.color.primary}))`),containerColor:r(`var(--m3e-elevated-icon-button-container-color, var(--m3e-icon-button-container-color, ${t.color.surfaceContainerLow}))`),containerElevation:r(`var(--m3e-elevated-icon-button-container-elevation, var(--m3e-icon-button-container-elevation, ${t.elevation.level1}))`),unselectedIconColor:r(`var(--m3e-elevated-icon-button-unselected-icon-color, var(--m3e-icon-button-unselected-icon-color, ${t.color.primary}))`),unselectedContainerColor:r(`var(--m3e-elevated-icon-button-unselected-container-color, var(--m3e-icon-button-unselected-container-color, ${t.color.surfaceContainerLow}))`),selectedIconColor:r(`var(--m3e-elevated-icon-button-selected-icon-color, var(--m3e-icon-button-selected-icon-color, ${t.color.onPrimary}))`),selectedContainerColor:r(`var(--m3e-elevated-icon-button-selected-container-color, var(--m3e-icon-button-selected-container-color, ${t.color.primary}))`),disabled:{containerColor:r(`var(--m3e-elevated-icon-button-disabled-container-color, var(--m3e-icon-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-elevated-icon-button-disabled-container-opacity, var(--m3e-icon-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-elevated-icon-button-disabled-icon-color, var(--m3e-icon-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-elevated-icon-button-disabled-icon-opacity, var(--m3e-icon-button-disabled-icon-opacity, 38%))"),containerElevation:r(`var(--m3e-elevated-icon-button-disabled-container-elevation, var(--m3e-icon-button-disabled-container-elevation, ${t.elevation.level0}))`)},hover:{iconColor:r(`var(--m3e-elevated-icon-button-hover-icon-color, var(--m3e-icon-button-hover-icon-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-elevated-icon-button-hover-state-layer-color, var(--m3e-icon-button-hover-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-elevated-icon-button-hover-state-layer-opacity, var(--m3e-icon-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-icon-button-hover-container-elevation, var(--m3e-icon-button-hover-container-elevation, ${t.elevation.level2}))`),unselectedIconColor:r(`var(--m3e-elevated-icon-button-hover-unselected-icon-color, var(--m3e-icon-button-hover-unselected-icon-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-elevated-icon-button-hover-unselected-state-layer-color, var(--m3e-icon-button-hover-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-elevated-icon-button-hover-selected-icon-color, var(--m3e-icon-button-hover-selected-icon-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-elevated-icon-button-hover-selected-state-layer-color, var(--m3e-icon-button-hover-selected-state-layer-color, ${t.color.onPrimary}))`)},focus:{iconColor:r(`var(--m3e-elevated-icon-button-focus-icon-color, var(--m3e-icon-button-focus-icon-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-elevated-icon-button-focus-state-layer-color, var(--m3e-icon-button-focus-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-elevated-icon-button-focus-state-layer-opacity, var(--m3e-icon-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-icon-button-focus-container-elevation, var(--m3e-icon-button-focus-container-elevation, ${t.elevation.level1}))`),unselectedIconColor:r(`var(--m3e-elevated-icon-button-focus-unselected-icon-color, var(--m3e-icon-button-focus-unselected-icon-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-elevated-icon-button-focus-unselected-state-layer-color, var(--m3e-icon-button-focus-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-elevated-icon-button-focus-selected-icon-color, var(--m3e-icon-button-focus-selected-icon-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-elevated-icon-button-focus-selected-state-layer-color, var(--m3e-icon-button-focus-selected-state-layer-color, ${t.color.onPrimary}))`)},pressed:{iconColor:r(`var(--m3e-elevated-icon-button-pressed-icon-color, var(--m3e-icon-button-pressed-icon-color, ${t.color.primary}))`),stateLayerColor:r(`var(--m3e-elevated-icon-button-pressed-state-layer-color, var(--m3e-icon-button-pressed-state-layer-color, ${t.color.primary}))`),stateLayerOpacity:r(`var(--m3e-elevated-icon-button-pressed-state-layer-opacity, var(--m3e-icon-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),containerElevation:r(`var(--m3e-elevated-icon-button-pressed-container-elevation, var(--m3e-icon-button-pressed-container-elevation, ${t.elevation.level1}))`),unselectedIconColor:r(`var(--m3e-elevated-icon-button-pressed-unselected-icon-color, var(--m3e-icon-button-pressed-unselected-icon-color, ${t.color.primary}))`),unselectedStateLayerColor:r(`var(--m3e-elevated-icon-button-pressed-unselected-state-layer-color, var(--m3e-icon-button-pressed-unselected-state-layer-color, ${t.color.primary}))`),selectedIconColor:r(`var(--m3e-elevated-icon-button-pressed-selected-icon-color, var(--m3e-icon-button-pressed-selected-icon-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-elevated-icon-button-pressed-selected-state-layer-color, var(--m3e-icon-button-pressed-selected-state-layer-color, ${t.color.onPrimary}))`)}},outlined:{iconColor:r(`var(--m3e-outlined-icon-button-icon-color, var(--m3e-icon-button-icon-color, ${t.color.onSurfaceVariant}))`),outlineColor:r(`var(--m3e-outlined-icon-button-outline-color, var(--m3e-icon-button-outline-color, ${t.color.outlineVariant}))`),unselectedIconColor:r(`var(--m3e-outlined-icon-button-unselected-icon-color, var(--m3e-icon-button-unselected-icon-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-outlined-icon-button-selected-icon-color, var(--m3e-icon-button-selected-icon-color, ${t.color.inverseOnSurface}))`),selectedContainerColor:r(`var(--m3e-outlined-icon-button-selected-container-color, var(--m3e-icon-button-selected-container-color, ${t.color.inverseSurface}))`),disabled:{containerColor:r(`var(--m3e-outlined-icon-button-disabled-container-color, var(--m3e-icon-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-outlined-icon-button-disabled-container-opacity, var(--m3e-icon-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-outlined-icon-button-disabled-icon-color, var(--m3e-icon-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-outlined-icon-button-disabled-icon-opacity, var(--m3e-icon-button-disabled-icon-opacity, 38%))"),outlineColor:r(`var(--m3e-outlined-icon-button-disabled-outline-color, var(--m3e-icon-button-disabled-outline-color, ${t.color.outlineVariant}))`)},hover:{iconColor:r(`var(--m3e-outlined-icon-button-hover-icon-color, var(--m3e-icon-button-hover-icon-color, ${t.color.onSurfaceVariant}))`),outlineColor:r(`var(--m3e-outlined-icon-button-hover-outline-color, var(--m3e-icon-button-hover-outline-color, ${t.color.outlineVariant}))`),stateLayerColor:r(`var(--m3e-outlined-icon-button-hover-state-layer-color, var(--m3e-icon-button-hover-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-outlined-icon-button-hover-state-layer-opacity, var(--m3e-icon-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-outlined-icon-button-hover-unselected-icon-color, var(--m3e-icon-button-hover-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-outlined-icon-button-hover-unselected-state-layer-color, var(--m3e-icon-button-hover-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-outlined-icon-button-hover-selected-icon-color, var(--m3e-icon-button-hover-selected-icon-color, ${t.color.inverseOnSurface}))`),selectedStateLayerColor:r(`var(--m3e-outlined-icon-button-hover-selected-state-layer-color, var(--m3e-icon-button-hover-selected-state-layer-color, ${t.color.inverseOnSurface}))`)},focus:{iconColor:r(`var(--m3e-outlined-icon-button-focus-icon-color, var(--m3e-icon-button-focus-icon-color, ${t.color.onSurfaceVariant}))`),outlineColor:r(`var(--m3e-outlined-icon-button-focus-outline-color, var(--m3e-icon-button-focus-outline-color, ${t.color.outlineVariant}))`),stateLayerColor:r(`var(--m3e-outlined-icon-button-focus-state-layer-color, var(--m3e-icon-button-focus-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-outlined-icon-button-focus-state-layer-opacity, var(--m3e-icon-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-outlined-icon-button-focus-unselected-icon-color, var(--m3e-icon-button-focus-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-outlined-icon-button-focus-unselected-state-layer-color, var(--m3e-icon-button-focus-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-outlined-icon-button-focus-selected-icon-color, var(--m3e-icon-button-focus-selected-icon-color, ${t.color.inverseOnSurface}))`),selectedStateLayerColor:r(`var(--m3e-outlined-icon-button-focus-selected-state-layer-color, var(--m3e-icon-button-focus-selected-state-layer-color, ${t.color.inverseOnSurface}))`)},pressed:{iconColor:r(`var(--m3e-outlined-icon-button-pressed-icon-color, var(--m3e-icon-button-pressed-icon-color, ${t.color.onSurfaceVariant}))`),outlineColor:r(`var(--m3e-outlined-icon-button-pressed-outline-color, var(--m3e-icon-button-pressed-outline-color, ${t.color.outlineVariant}))`),stateLayerColor:r(`var(--m3e-outlined-icon-button-pressed-state-layer-color, var(--m3e-icon-button-pressed-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-outlined-icon-button-pressed-state-layer-opacity, var(--m3e-icon-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-outlined-icon-button-pressed-unselected-icon-color, var(--m3e-icon-button-pressed-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-outlined-icon-button-pressed-unselected-state-layer-color, var(--m3e-icon-button-pressed-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-outlined-icon-button-pressed-selected-icon-color, var(--m3e-icon-button-pressed-selected-icon-color, ${t.color.inverseOnSurface}))`),selectedStateLayerColor:r(`var(--m3e-outlined-icon-button-pressed-selected-state-layer-color, var(--m3e-icon-button-pressed-selected-state-layer-color, ${t.color.inverseOnSurface}))`)}},filled:{iconColor:r(`var(--m3e-filled-icon-button-icon-color, var(--m3e-icon-button-icon-color, ${t.color.onPrimary}))`),containerColor:r(`var(--m3e-filled-icon-button-container-color, var(--m3e-icon-button-container-color, ${t.color.primary}))`),unselectedIconColor:r(`var(--m3e-filled-icon-button-unselected-icon-color, var(--m3e-icon-button-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedContainerColor:r(`var(--m3e-filled-icon-button-unselected-container-color, var(--m3e-icon-button-unselected-container-color, ${t.color.surfaceContainer}))`),selectedIconColor:r(`var(--m3e-filled-icon-button-selected-icon-color, var(--m3e-icon-button-selected-icon-color, ${t.color.onPrimary}))`),selectedContainerColor:r(`var(--m3e-filled-icon-button-selected-container-color, var(--m3e-icon-button-selected-container-color, ${t.color.primary}))`),disabled:{containerColor:r(`var(--m3e-filled-icon-button-disabled-container-color, var(--m3e-icon-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-filled-icon-button-disabled-container-opacity, var(--m3e-icon-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-filled-icon-button-disabled-icon-color, var(--m3e-icon-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-filled-icon-button-disabled-icon-opacity, var(--m3e-icon-button-disabled-icon-opacity, 38%))")},hover:{iconColor:r(`var(--m3e-filled-icon-button-hover-icon-color, var(--m3e-icon-button-hover-icon-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-filled-icon-button-hover-state-layer-color, var(--m3e-icon-button-hover-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-filled-icon-button-hover-state-layer-opacity, var(--m3e-icon-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-filled-icon-button-hover-unselected-icon-color, var(--m3e-icon-button-hover-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-filled-icon-button-hover-unselected-state-layer-color, var(--m3e-icon-button-hover-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-filled-icon-button-hover-selected-icon-color, var(--m3e-icon-button-hover-selected-icon-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-filled-icon-button-hover-selected-state-layer-color, var(--m3e-icon-button-hover-selected-state-layer-color, ${t.color.onPrimary}))`)},focus:{iconColor:r(`var(--m3e-filled-icon-button-focus-icon-color, var(--m3e-icon-button-focus-icon-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-filled-icon-button-focus-state-layer-color, var(--m3e-icon-button-focus-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-filled-icon-button-focus-state-layer-opacity, var(--m3e-icon-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-filled-icon-button-focus-unselected-icon-color, var(--m3e-icon-button-focus-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-filled-icon-button-focus-unselected-state-layer-color, var(--m3e-icon-button-focus-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-filled-icon-button-focus-selected-icon-color, var(--m3e-icon-button-focus-selected-icon-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-filled-icon-button-focus-selected-state-layer-color, var(--m3e-icon-button-focus-selected-state-layer-color, ${t.color.onPrimary}))`)},pressed:{iconColor:r(`var(--m3e-filled-icon-button-pressed-icon-color, var(--m3e-icon-button-pressed-icon-color, ${t.color.onPrimary}))`),stateLayerColor:r(`var(--m3e-filled-icon-button-pressed-state-layer-color, var(--m3e-icon-button-pressed-state-layer-color, ${t.color.onPrimary}))`),stateLayerOpacity:r(`var(--m3e-filled-icon-button-pressed-state-layer-opacity, var(--m3e-icon-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-filled-icon-button-pressed-unselected-icon-color, var(--m3e-icon-button-pressed-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-filled-icon-button-pressed-unselected-state-layer-color, var(--m3e-icon-button-pressed-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-filled-icon-button-pressed-selected-icon-color, var(--m3e-icon-button-pressed-selected-icon-color, ${t.color.onPrimary}))`),selectedStateLayerColor:r(`var(--m3e-filled-icon-button-pressed-selected-state-layer-color, var(--m3e-icon-button-pressed-selected-state-layer-color, ${t.color.onPrimary}))`)}},tonal:{iconColor:r(`var(--m3e-tonal-icon-button-icon-color, var(--m3e-icon-button-icon-color, ${t.color.onSecondaryContainer}))`),containerColor:r(`var(--m3e-tonal-icon-button-container-color, var(--m3e-icon-button-container-color, ${t.color.secondaryContainer}))`),unselectedIconColor:r(`var(--m3e-tonal-icon-button-unselected-icon-color, var(--m3e-icon-button-unselected-icon-color, ${t.color.onSecondaryContainer}))`),unselectedContainerColor:r(`var(--m3e-tonal-icon-button-unselected-container-color, var(--m3e-icon-button-unselected-container-color, ${t.color.secondaryContainer}))`),selectedIconColor:r(`var(--m3e-tonal-icon-button-selected-icon-color, var(--m3e-icon-button-selected-icon-color, ${t.color.onSecondary}))`),selectedContainerColor:r(`var(--m3e-tonal-icon-button-selected-container-color, var(--m3e-icon-button-selected-container-color, ${t.color.secondary}))`),disabled:{containerColor:r(`var(--m3e-tonal-icon-button-disabled-container-color, var(--m3e-icon-button-disabled-container-color, ${t.color.onSurface}))`),containerOpacity:r("var(--m3e-tonal-icon-button-disabled-container-opacity, var(--m3e-icon-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-tonal-icon-button-disabled-icon-color, var(--m3e-icon-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-tonal-icon-button-disabled-icon-opacity, var(--m3e-icon-button-disabled-icon-opacity, 38%))")},hover:{iconColor:r(`var(--m3e-tonal-icon-button-hover-icon-color, var(--m3e-icon-button-hover-icon-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-tonal-icon-button-hover-state-layer-color, var(--m3e-icon-button-hover-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tonal-icon-button-hover-state-layer-opacity, var(--m3e-icon-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-tonal-icon-button-hover-unselected-icon-color, var(--m3e-icon-button-hover-unselected-icon-color, ${t.color.onSecondaryContainer}))`),unselectedStateLayerColor:r(`var(--m3e-tonal-icon-button-hover-unselected-state-layer-color, var(--m3e-icon-button-hover-unselected-state-layer-color, ${t.color.onSecondaryContainer}))`),selectedIconColor:r(`var(--m3e-tonal-icon-button-hover-selected-icon-color, var(--m3e-icon-button-hover-selected-icon-color, ${t.color.onSecondary}))`),selectedStateLayerColor:r(`var(--m3e-tonal-icon-button-hover-selected-state-layer-color, var(--m3e-icon-button-hover-selected-state-layer-color, ${t.color.onSecondary}))`)},focus:{iconColor:r(`var(--m3e-tonal-icon-button-focus-icon-color, var(--m3e-icon-button-focus-icon-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-tonal-icon-button-focus-state-layer-color, var(--m3e-icon-button-focus-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tonal-icon-button-focus-state-layer-opacity, var(--m3e-icon-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-tonal-icon-button-focus-unselected-icon-color, var(--m3e-icon-button-focus-unselected-icon-color, ${t.color.onSecondaryContainer}))`),unselectedStateLayerColor:r(`var(--m3e-tonal-icon-button-focus-unselected-state-layer-color, var(--m3e-icon-button-focus-unselected-state-layer-color, ${t.color.onSecondaryContainer}))`),selectedIconColor:r(`var(--m3e-tonal-icon-button-focus-selected-icon-color, var(--m3e-icon-button-focus-selected-icon-color, ${t.color.onSecondary}))`),selectedStateLayerColor:r(`var(--m3e-tonal-icon-button-focus-selected-state-layer-color, var(--m3e-icon-button-focus-selected-state-layer-color, ${t.color.onSecondary}))`)},pressed:{iconColor:r(`var(--m3e-tonal-icon-button-pressed-icon-color, var(--m3e-icon-button-pressed-icon-color, ${t.color.onSecondaryContainer}))`),stateLayerColor:r(`var(--m3e-tonal-icon-button-pressed-state-layer-color, var(--m3e-icon-button-pressed-state-layer-color, ${t.color.onSecondaryContainer}))`),stateLayerOpacity:r(`var(--m3e-tonal-icon-button-pressed-state-layer-opacity, var(--m3e-icon-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-tonal-icon-button-pressed-unselected-icon-color, var(--m3e-icon-button-pressed-unselected-icon-color, ${t.color.onSecondaryContainer}))`),unselectedStateLayerColor:r(`var(--m3e-tonal-icon-button-pressed-unselected-state-layer-color, var(--m3e-icon-button-pressed-unselected-state-layer-color, ${t.color.onSecondaryContainer}))`),selectedIconColor:r(`var(--m3e-tonal-icon-button-pressed-selected-icon-color, var(--m3e-icon-button-pressed-selected-icon-color, ${t.color.onSecondary}))`),selectedStateLayerColor:r(`var(--m3e-tonal-icon-button-pressed-selected-state-layer-color, var(--m3e-icon-button-pressed-selected-state-layer-color, ${t.color.onSecondary}))`)}},standard:{iconColor:r(`var(--m3e-standard-icon-button-icon-color, var(--m3e-icon-button-icon-color, ${t.color.onSurfaceVariant}))`),unselectedIconColor:r(`var(--m3e-standard-icon-button-unselected-icon-color, var(--m3e-icon-button-unselected-icon-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-standard-icon-button-selected-icon-color, var(--m3e-icon-button-selected-icon-color, ${t.color.primary}))`),disabled:{containerColor:r("var(--m3e-standard-icon-button-disabled-container-color, var(--m3e-icon-button-disabled-container-color, transparent))"),containerOpacity:r("var(--m3e-standard-icon-button-disabled-container-opacity, var(--m3e-icon-button-disabled-container-opacity, 10%))"),iconColor:r(`var(--m3e-standard-icon-button-disabled-icon-color, var(--m3e-icon-button-disabled-icon-color, ${t.color.onSurface}))`),iconOpacity:r("var(--m3e-standard-icon-button-disabled-icon-opacity, var(--m3e-icon-button-disabled-icon-opacity, 38%))")},hover:{iconColor:r(`var(--m3e-standard-icon-button-hover-icon-color, var(--m3e-icon-button-hover-icon-color, ${t.color.onSurfaceVariant}))`),stateLayerColor:r(`var(--m3e-standard-icon-button-hover-state-layer-color, var(--m3e-icon-button-hover-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-standard-icon-button-hover-state-layer-opacity, var(--m3e-icon-button-hover-state-layer-opacity, ${t.state.hoverStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-standard-icon-button-hover-unselected-icon-color, var(--m3e-icon-button-hover-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-standard-icon-button-hover-unselected-state-layer-color, var(--m3e-icon-button-hover-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-standard-icon-button-hover-selected-icon-color, var(--m3e-icon-button-hover-selected-icon-color, ${t.color.primary}))`),selectedStateLayerColor:r(`var(--m3e-standard-icon-button-hover-selected-state-layer-color, var(--m3e-icon-button-hover-selected-state-layer-color, ${t.color.primary}))`)},focus:{iconColor:r(`var(--m3e-standard-icon-button-focus-icon-color, var(--m3e-icon-button-focus-icon-color, ${t.color.onSurfaceVariant}))`),stateLayerColor:r(`var(--m3e-standard-icon-button-focus-state-layer-color, var(--m3e-icon-button-focus-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-standard-icon-button-focus-state-layer-opacity, var(--m3e-icon-button-focus-state-layer-opacity, ${t.state.focusStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-standard-icon-button-focus-unselected-icon-color, var(--m3e-icon-button-focus-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-standard-icon-button-focus-unselected-state-layer-color, var(--m3e-icon-button-focus-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-standard-icon-button-focus-selected-icon-color, var(--m3e-icon-button-focus-selected-icon-color, ${t.color.primary}))`),selectedStateLayerColor:r(`var(--m3e-standard-icon-button-focus-selected-state-layer-color, var(--m3e-icon-button-focus-selected-state-layer-color, ${t.color.primary}))`)},pressed:{iconColor:r(`var(--m3e-standard-icon-button-pressed-icon-color, var(--m3e-icon-button-pressed-icon-color, ${t.color.onSurfaceVariant}))`),stateLayerColor:r(`var(--m3e-standard-icon-button-pressed-state-layer-color, var(--m3e-icon-button-pressed-state-layer-color, ${t.color.onSurfaceVariant}))`),stateLayerOpacity:r(`var(--m3e-standard-icon-button-pressed-state-layer-opacity, var(--m3e-icon-button-pressed-state-layer-opacity, ${t.state.pressedStateLayerOpacity}))`),unselectedIconColor:r(`var(--m3e-standard-icon-button-pressed-unselected-icon-color, var(--m3e-icon-button-pressed-unselected-icon-color, ${t.color.onSurfaceVariant}))`),unselectedStateLayerColor:r(`var(--m3e-standard-icon-button-pressed-unselected-state-layer-color, var(--m3e-icon-button-pressed-unselected-state-layer-color, ${t.color.onSurfaceVariant}))`),selectedIconColor:r(`var(--m3e-standard-icon-button-pressed-selected-icon-color, var(--m3e-icon-button-pressed-selected-icon-color, ${t.color.primary}))`),selectedStateLayerColor:r(`var(--m3e-standard-icon-button-pressed-selected-state-layer-color, var(--m3e-icon-button-pressed-selected-state-layer-color, ${t.color.primary}))`)}}};function zc(o){return b`
    :host([variant="${r(o)}"]:not(:disabled):not([disabled-interactive])) .base {
      background-color: ${ee[o].containerColor??r("unset")};
      --m3e-state-layer-hover-color: ${ee[o].hover.stateLayerColor};
      --m3e-state-layer-hover-opacity: ${ee[o].hover.stateLayerOpacity};
      --m3e-state-layer-focus-color: ${ee[o].focus.stateLayerColor};
      --m3e-state-layer-focus-opacity: ${ee[o].focus.stateLayerOpacity};
      --m3e-ripple-color: ${ee[o].pressed.stateLayerColor};
      --m3e-ripple-opacity: ${ee[o].pressed.stateLayerOpacity};
      --m3e-elevation-level: ${ee[o].containerElevation??r("unset")};
      --m3e-elevation-hover-level: ${ee[o].hover.containerElevation??r("unset")};
      --m3e-elevation-focus-level: ${ee[o].focus.containerElevation??r("unset")};
      --m3e-elevation-pressed-level: ${ee[o].pressed.containerElevation??r("unset")};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .base {
      background-color: ${ee[o].unselectedContainerColor??r("unset")};
      --m3e-state-layer-hover-color: ${ee[o].hover.unselectedStateLayerColor};
      --m3e-state-layer-focus-color: ${ee[o].focus.unselectedStateLayerColor};
      --m3e-ripple-color: ${ee[o].pressed.unselectedStateLayerColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .base {
      background-color: ${ee[o].selectedContainerColor??r("unset")};
      --m3e-state-layer-hover-color: ${ee[o].hover.selectedStateLayerColor};
      --m3e-state-layer-focus-color: ${ee[o].focus.selectedStateLayerColor};
      --m3e-ripple-color: ${ee[o].pressed.selectedStateLayerColor};
    }
    :host([variant="${r(o)}"]:not(:disabled):not([disabled-interactive])) .base {
      outline-color: ${ee[o].outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]:focus:not(:disabled):not([disabled-interactive])) .base {
      outline-color: ${ee[o].focus.outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]:hover:not(:disabled):not([disabled-interactive])) .base {
      outline-color: ${ee[o].hover.outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]:state(-pressed):not(:disabled):not([disabled-interactive])) .base {
      outline-color: ${ee[o].pressed.outlineColor??r("unset")};
    }
    :host([variant="${r(o)}"]:not(:disabled):not([disabled-interactive])) .icon {
      color: ${ee[o].iconColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .icon {
      color: ${ee[o].unselectedIconColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .icon {
      color: ${ee[o].selectedIconColor};
    }
    :host([variant="${r(o)}"]:focus:not(:disabled):not([disabled-interactive])) .icon {
      color: ${ee[o].focus.iconColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive]))
      .icon {
      color: ${ee[o].focus.unselectedIconColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .icon {
      color: ${ee[o].focus.selectedIconColor};
    }
    :host([variant="${r(o)}"]:hover:not(:disabled):not([disabled-interactive])) .icon {
      color: ${ee[o].hover.iconColor};
    }
    :host([variant="${r(o)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive]))
      .icon {
      color: ${ee[o].hover.unselectedIconColor};
    }
    :host([variant="${r(o)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .icon {
      color: ${ee[o].hover.selectedIconColor};
    }
    :host([variant="${r(o)}"]:state(-pressed):not(:disabled):not([disabled-interactive])) .icon {
      color: ${ee[o].pressed.iconColor};
    }
    :host(
        [variant="${r(o)}"][toggle]:not([selected]):state(-pressed):not(:disabled):not(
            [disabled-interactive]
          )
      )
      .icon {
      color: ${ee[o].pressed.unselectedIconColor};
    }
    :host(
        [variant="${r(o)}"][toggle][selected]:state(-pressed):not(:disabled):not([disabled-interactive])
      )
      .icon {
      color: ${ee[o].pressed.selectedIconColor};
    }
    :host([variant="${r(o)}"]:disabled) .base,
    :host([variant="${r(o)}"][disabled-interactive]) .base {
      outline-color: ${ee[o].disabled.outlineColor??r("unset")};
      background-color: color-mix(
        in srgb,
        ${ee[o].disabled.containerColor}
          ${ee[o].disabled.containerOpacity},
        transparent
      );
    }
    :host([variant="${r(o)}"]:disabled) .icon,
    :host([variant="${r(o)}"][disabled-interactive]) .icon {
      color: color-mix(
        in srgb,
        ${ee[o].disabled.iconColor} ${ee[o].disabled.iconOpacity},
        transparent
      );
    }
  `}var ag=[zc("standard"),zc("outlined"),zc("filled"),zc("tonal"),zc("elevated"),b`
    :host([variant="outlined"]:not([toggle][selected]):not(:disabled):not([disabled-interactive])) .base {
      outline-style: solid;
    }
  `];var Oc,Io,Ip,Mm,ng,sg,dt=class extends de(Fe(Go(ae(gt(N(D(M(k,"button"),!0))))))){constructor(){super();m(this,Io);m(this,Oc,e=>c(this,Io,ng).call(this,e));this.variant="standard";this.shape="rounded";this.size="small";this.width="default";this.toggle=!1;this.selected=!1;new Le(this,{callback:()=>{this.grouped&&this._handleResize()}}),new ze(this,{callback:e=>{!this.disabledInteractive&&!e&&!this.grouped&&this._base?.style.removeProperty("--_button-shape")}}),new ue(this,{isPressedKey:e=>e===" ",minPressedDuration:150,callback:e=>{!this.disabled&&!this.disabledInteractive&&(e?(c(this,Io,Ip).call(this),Me()?c(this,Io,Mm).call(this,!0):requestAnimationFrame(()=>c(this,Io,Mm).call(this,!0))):c(this,Io,Mm).call(this,!1))}})}get grouped(){return bt(this,"-grouped")}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled||this.disabledInteractive}"></m3e-state-layer>
      <m3e-elevation class="elevation" ?disabled="${this.disabled||this.disabledInteractive}"></m3e-elevation>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" centered ?disabled="${this.disabled||this.disabledInteractive}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      ${this[st]()}
      <div class="wrapper">
        ${this.toggle?f`<slot
              class="icon"
              name="selected"
              aria-hidden="true"
              @slotchange="${c(this,Io,sg)}"
            ></slot>`:R}
        <slot class="icon" aria-hidden="true"></slot>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,Oc))}disconnectedCallback(){super.disconnectedCallback(),["-pressed","-resting","-grouped","-connected"].forEach(e=>xe(this,e)),this._base?.style.removeProperty("--_button-shape"),this.style.removeProperty("--_button-width"),this.style.removeProperty("--_adjacent-button-width"),xe(this,"-adjacent-pressed"),this.removeEventListener("click",s(this,Oc))}firstUpdated(e){super.firstUpdated(e),[this._elevation,this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}updated(e){if(super.updated(e),(e.has("disabled")&&this.disabled||e.has("disabledInteractive")&&this.disabledInteractive)&&(xe(this,"-pressed"),xe(this,"-resting")),(e.has("toggle")||e.has("selected"))&&(this.ariaPressed=this.toggle?`${this.selected}`:null,this.toggle))for(let i of this.querySelectorAll("m3e-icon"))i.toggleAttribute("filled",this.selected)}_handleResize(){this.grouped&&!bt(this,"-pressed")&&(this.style.setProperty("--_button-width",`${this.clientWidth}px`),c(this,Io,Ip).call(this,!0))}};Oc=new WeakMap,Io=new WeakSet,Ip=function(e=!1){if(!this._base)return;let i=parseFloat(getComputedStyle(this._base).borderRadius);if(!isNaN(i)||e){let n=this.clientHeight/2;(n<i||e)&&this._base?.style.setProperty("--_button-shape",`${n}px`)}},Mm=function(e){le(this,"-pressed",e),le(this,"-resting",!e);let i=this.closest("m3e-button-group");if(i){let n=this.getBoundingClientRect().width,l=[...i.querySelectorAll("m3e-button,m3e-icon-button")],h=l.indexOf(this);for(let u=0;u<l.length;u++){let v=l[u];u===h-1?(v.style.setProperty("--_adjacent-button-width",`${n}px`),le(v,"-adjacent-pressed",e)):u===h+1?(v.style.setProperty("--_adjacent-button-width",`${n}px`),le(v,"-adjacent-pressed",e)):(v.style.removeProperty("--_adjacent-button-width"),xe(v,"-adjacent-pressed"))}}},ng=function(e){(this.disabled||this.disabledInteractive)&&(e.preventDefault(),e.stopImmediatePropagation()),this.toggle&&!e.defaultPrevented&&(this.selected=!this.selected,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?this.dispatchEvent(new Event("change",{bubbles:!0})):this.selected=!this.selected)},sg=function(e){this._base?.classList.toggle("with-selected-icon",J(e.target))},dt.styles=[rg,ag,ig],d([L(".base")],dt.prototype,"_base",2),d([L(".elevation")],dt.prototype,"_elevation",2),d([L(".focus-ring")],dt.prototype,"_focusRing",2),d([L(".state-layer")],dt.prototype,"_stateLayer",2),d([L(".ripple")],dt.prototype,"_ripple",2),d([p({reflect:!0})],dt.prototype,"variant",2),d([p({reflect:!0})],dt.prototype,"shape",2),d([p({reflect:!0})],dt.prototype,"size",2),d([p({reflect:!0})],dt.prototype,"width",2),d([p({type:Boolean,reflect:!0})],dt.prototype,"toggle",2),d([p({type:Boolean,reflect:!0})],dt.prototype,"selected",2),d([Ft(40)],dt.prototype,"_handleResize",1),dt=d([y("m3e-icon-button")],dt);var Pm,Ci,$i,Ka,lg,zp,at=class extends M(k,"listitem"){constructor(){super(...arguments);m(this,Ka);m(this,Pm,new Le(this,{target:null,callback:()=>c(this,Ka,lg).call(this)}));m(this,Ci);m(this,$i)}get leadingContentType(){return s(this,Ci)}get trailingContentType(){return s(this,$i)}firstUpdated(e){super.firstUpdated(e);let i=this.shadowRoot?.querySelector(".content");i&&s(this,Pm).observe(i)}render(){return f`<div class="base">${this._renderBase()}</div>`}_renderBase(){return f`<slot name="leading" @slotchange="${this._handleLeadingSlotChange}">
        <slot name="leading-icon" @slotchange="${this._handleLeadingSlotChange}"></slot>
      </slot>
      <div class="content">
        <slot name="overline"></slot>
        <slot></slot>
        <slot name="supporting-text"></slot>
      </div>
      <slot name="trailing" @slotchange="${this._handleTrailingSlotChange}">
        <slot name="trailing-supporting-text" @slotchange="${this._handleTrailingSlotChange}"></slot>
        <slot name="trailing-icon" @slotchange="${this._handleTrailingSlotChange}"></slot>
      </slot>`}_handleLeadingSlotChange(e){let i=s(this,Ci);g(this,Ci,c(this,Ka,zp).call(this,e.target)),this.classList.toggle("-has-leading",s(this,Ci)!==void 0),i!==s(this,Ci)&&this.closest("m3e-list,m3e-action-list,m3e-selection-list")?.notifyLeadingContentTypeChange(i,s(this,Ci))}_handleTrailingSlotChange(e){let i=s(this,$i);g(this,$i,c(this,Ka,zp).call(this,e.target)),this.classList.toggle("-has-trailing",s(this,$i)!==void 0),i!==s(this,$i)&&this.closest("m3e-list,m3e-action-list,m3e-selection-list")?.notifyTrailingContentTypeChange(i,s(this,$i))}};Pm=new WeakMap,Ci=new WeakMap,$i=new WeakMap,Ka=new WeakSet,lg=function(){let e=this.shadowRoot?.querySelector(".content")??null,i=e===null?0:_v(e);this.classList.toggle("-one-line",i<=1),this.classList.toggle("-two-line",i==2),this.classList.toggle("-three-line",i>2)},zp=function(e){let i=e.assignedElements({flatten:!0});return i.some(n=>n.tagName==="VIDEO")?"video":i.some(n=>n.tagName==="IMG")?"image":i.some(n=>n.tagName==="M3E-AVATAR")?"avatar":i.some(n=>n.tagName==="M3E-ICON")?"icon":i.length>0?"text":void 0},at.styles=b`
    :host {
      display: block;
    }
    .base {
      display: flex;
      min-height: inherit;
      width: 100%;
      box-sizing: border-box;
      column-gap: var(--m3e-list-item-between-space, 1rem);
      padding-inline-start: var(--m3e-list-item-leading-space, 1rem);
      padding-inline-end: var(--m3e-list-item-trailing-space, 1rem);
      border-top-left-radius: var(
        --_list-item-top-container-shape,
        var(--m3e-list-item-container-shape, ${t.shape.corner.none})
      );
      border-top-right-radius: var(
        --_list-item-top-container-shape,
        var(--m3e-list-item-container-shape, ${t.shape.corner.none})
      );
      border-bottom-left-radius: var(
        --_list-item-bottom-container-shape,
        var(--m3e-list-item-container-shape, ${t.shape.corner.none})
      );
      border-bottom-right-radius: var(
        --_list-item-bottom-container-shape,
        var(--m3e-list-item-container-shape, ${t.shape.corner.none})
      );
      transition: ${r(`border-radius ${t.motion.spring.fastEffects}, background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    :host(.-one-line) {
      min-height: calc(var(--m3e-list-item-one-line-height, 3.5rem) + ${t.density.calc(-3)});
    }
    :host(.-one-line) .base {
      padding-block-start: var(--m3e-list-item-one-line-top-space, 0.5rem);
      padding-block-end: var(--m3e-list-item-one-line-bottom-space, 0.5rem);
    }
    :host(.-two-line) {
      min-height: calc(var(--m3e-list-item-two-line-height, 4.5rem) + ${t.density.calc(-3)});
    }
    :host(.-two-line) .base {
      padding-block-start: var(--m3e-list-item-two-line-top-space, 0.5rem);
      padding-block-end: var(--m3e-list-item-two-line-bottom-space, 0.5rem);
    }
    :host(.-three-line) {
      min-height: calc(var(--m3e-list-item-three-line-height, 5.5rem) + ${t.density.calc(-3)});
    }
    :host(.-three-line) .base {
      padding-block-start: var(--m3e-list-item-three-line-top-space, 0.75rem);
      padding-block-end: var(--m3e-list-item-three-line-bottom-space, 0.75rem);
    }
    :host(:not(.-three-line)) .base {
      align-items: center;
    }
    :host(.-three-line) .base {
      align-items: flex-start;
    }
    :host(:not(:disabled):not([selected]:not(:hover))) .base.focus-visible:not(.pressed) {
      border-top-left-radius: var(
        --_list-item-top-container-shape,
        var(--m3e-list-item-focus-container-shape, ${t.shape.corner.large})
      );
      border-top-right-radius: var(
        --_list-item-top-container-shape,
        var(--m3e-list-item-focus-container-shape, ${t.shape.corner.large})
      );
      border-bottom-left-radius: var(
        --_list-item-bottom-container-shape,
        var(--m3e-list-item-focus-container-shape, ${t.shape.corner.large})
      );
      border-bottom-right-radius: var(
        --_list-item-bottom-container-shape,
        var(--m3e-list-item-focus-container-shape, ${t.shape.corner.large})
      );
    }
    :host(:not(:disabled):not([selected]):hover) .base,
    :host(:not(:disabled):not([selected])) .base.pressed {
      border-top-left-radius: var(
        --_list-item-top-container-shape,
        var(--m3e-list-item-hover-container-shape, ${t.shape.corner.medium})
      );
      border-top-right-radius: var(
        --_list-item-top-container-shape,
        var(--m3e-list-item-hover-container-shape, ${t.shape.corner.medium})
      );
      border-bottom-left-radius: var(
        --_list-item-bottom-container-shape,
        var(--m3e-list-item-hover-container-shape, ${t.shape.corner.medium})
      );
      border-bottom-right-radius: var(
        --_list-item-bottom-container-shape,
        var(--m3e-list-item-hover-container-shape, ${t.shape.corner.medium})
      );
    }
    .content {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: unset;
      justify-content: unset;
    }
    ::slotted([slot="overline"]) {
      font-size: var(--m3e-list-item-overline-font-size, ${t.typescale.standard.label.small.fontSize});
      font-weight: var(--m3e-list-item-overline-font-weight, ${t.typescale.standard.label.small.fontWeight});
      line-height: var(--m3e-list-item-overline-line-height, ${t.typescale.standard.label.small.lineHeight});
      letter-spacing: var(--m3e-list-item-overline-tracking, ${t.typescale.standard.label.small.tracking});
    }
    ::slotted([slot="supporting-text"]) {
      font-size: var(--m3e-list-item-supporting-text-font-size, ${t.typescale.standard.body.medium.fontSize});
      font-weight: var(
        --m3e-list-item-supporting-text-font-weight,
        ${t.typescale.standard.body.medium.fontWeight}
      );
      line-height: var(
        --m3e-list-item-supporting-text-line-height,
        ${t.typescale.standard.body.medium.lineHeight}
      );
      letter-spacing: var(
        --m3e-list-item-supporting-text-tracking,
        ${t.typescale.standard.body.medium.tracking}
      );
    }
    ::slotted(:not([slot])) {
      font-size: var(--m3e-list-item-font-size, ${t.typescale.standard.body.large.fontSize});
      font-weight: var(--m3e-list-item-font-weight, ${t.typescale.standard.body.large.fontWeight});
      line-height: var(--m3e-list-item-line-height, ${t.typescale.standard.body.large.lineHeight});
      letter-spacing: var(--m3e-list-item-tracking, ${t.typescale.standard.body.large.tracking});
    }
    :host(.-has-leading) slot[name="leading"],
    :host(.-has-trailing) slot[name="trailing"] {
      display: flex;
      justify-content: center;
    }
    :host(:not(.-has-leading)) slot[name="leading"] {
      display: var(--_list-item-leading-reserved-display, contents);
    }
    :host(:not(.-has-trailing)) slot[name="trailing"] {
      display: var(--_list-item-trailing-reserved-display, contents);
    }
    slot[name="leading"] {
      min-width: var(--_list-item-leading-reserved-space, 0px);
      margin-inline-start: calc(0px - var(--_list-item-leading-reserved-outset, 0px));
    }
    slot[name="trailing"] {
      min-width: var(--_list-item-trailing-reserved-space, 0px);
      margin-inline-end: calc(0px - var(--_list-item-trailing-reserved-outset, 0px));
    }
    ::slotted(span[slot="trailing"]),
    ::slotted([slot="trailing-supporting-text"]) {
      white-space: nowrap;
      font-size: var(--m3e-list-item-trailing-text-font-size, ${t.typescale.standard.label.small.fontSize});
      font-weight: var(
        --m3e-list-item-trailing-text-font-weight,
        ${t.typescale.standard.label.small.fontWeight}
      );
      line-height: var(
        --m3e-list-item-trailing-text-line-height,
        ${t.typescale.standard.label.small.lineHeight}
      );
      letter-spacing: var(
        --m3e-list-item-trailing-text-tracking,
        ${t.typescale.standard.label.small.tracking}
      );
    }
    ::slotted(video[slot="leading"]),
    ::slotted(video[slot="trailing"]),
    ::slotted(img[slot="leading"]),
    ::slotted(img[slot="trailing"]) {
      display: block;
      margin: 0 auto;
      overflow: hidden;
      object-fit: cover;
    }
    ::slotted(video) {
      width: var(--m3e-list-item-video-width, 6.25rem);
      height: var(--m3e-list-item-video-height, 3.5rem);
    }
    ::slotted(video[slot="leading"]),
    ::slotted(video[slot="trailing"]) {
      border-radius: var(--m3e-list-item-video-shape, ${t.shape.corner.none});
    }
    ::slotted(video[slot="leading"]) {
      margin-inline-start: calc(0px - var(--_list-item-leading-video-outset, 0px));
    }
    ::slotted(video[slot="trailing"]) {
      margin-inline-end: calc(0px - var(--_list-item-trailing-video-outset, 0px));
    }
    ::slotted(img) {
      user-drag: none;
      user-select: none;
      pointer-events: none;
      width: var(--m3e-list-item-image-width, 3.5rem);
      height: var(--m3e-list-item-image-height, 3.5rem);
    }
    ::slotted(img[slot="leading"]),
    ::slotted(img[slot="trailing"]) {
      border-radius: var(--m3e-list-item-image-shape, ${t.shape.corner.none});
    }
    ::slotted(m3e-icon[slot="leading"]),
    ::slotted(m3e-icon[slot="leading-icon"]),
    ::slotted(m3e-icon[slot="trailing"]),
    ::slotted(m3e-icon[slot="trailing-icon"]) {
      --m3e-icon-size: var(--m3e-list-item-icon-size, 1.5rem);
    }
    :host(:not(:disabled)) ::slotted(m3e-icon[slot="leading"]),
    :host(:not(:disabled)) ::slotted(m3e-icon[slot="leading-icon"]) {
      color: var(--m3e-list-item-leading-color, ${t.color.onSurfaceVariant});
    }
    :host(:not(:disabled)) .content {
      color: var(--m3e-list-item-label-text-color, ${t.color.onSurface});
    }
    :host(:not(:disabled)) ::slotted([slot="overline"]) {
      color: var(--m3e-list-item-overline-color, ${t.color.onSurfaceVariant});
    }
    :host(:not(:disabled)) ::slotted([slot="supporting-text"]) {
      color: var(--m3e-list-item-supporting-text-color, ${t.color.onSurfaceVariant});
    }
    :host(:not(:disabled)) ::slotted([slot="trailing"]),
    :host(:not(:disabled)) ::slotted([slot="trailing-supporting-text"]),
    :host(:not(:disabled)) ::slotted([slot="trailing-icon"]) {
      color: var(--m3e-list-item-trailing-color, ${t.color.onSurfaceVariant});
    }
    :host(:not(:disabled)) .base {
      background-color: var(--_list-item-container-color, var(--m3e-list-item-container-color, transparent));
    }
    :host(:disabled) .base {
      background-color: var(--m3e-list-item-disabled-container-color, transparent);
    }
    :host(:disabled) ::slotted(video),
    :host(:disabled) ::slotted(img),
    :host(:disabled) ::slotted(m3e-avatar) {
      opacity: var(--m3e-list-item-disabled-media-opacity, 38%);
    }
    :host(:disabled) .content {
      color: color-mix(
        in srgb,
        var(--m3e-list-item-disabled-label-text-color, ${t.color.onSurface})
          var(--m3e-list-item-disabled-label-text-opacity, 38%),
        transparent
      );
    }
    :host(:disabled) ::slotted([slot="overline"]) {
      color: color-mix(
        in srgb,
        var(--m3e-list-item-disabled-overline-color, ${t.color.onSurface})
          var(--m3e-list-item-disabled-overline-opacity, 38%),
        transparent
      );
    }
    :host(:disabled) ::slotted([slot="supporting-text"]) {
      color: color-mix(
        in srgb,
        var(--m3e-list-item-disabled-supporting-text-color, ${t.color.onSurface})
          var(--m3e-list-item-disabled-supporting-text-opacity, 38%),
        transparent
      );
    }
    :host(:disabled) ::slotted([slot="leading"]),
    :host(:disabled) ::slotted([slot="leading-icon"]) {
      color: color-mix(
        in srgb,
        var(--m3e-list-item-disabled-leading-color, ${t.color.onSurface})
          var(--m3e-list-item-disabled-leading-opacity, 38%),
        transparent
      );
    }
    :host(:disabled) ::slotted([slot="trailing"]),
    :host(:disabled) ::slotted([slot="trailing-supporting-text"]),
    :host(:disabled) ::slotted([slot="trailing-icon"]) {
      color: color-mix(
        in srgb,
        var(--m3e-list-item-disabled-trailing-color, ${t.color.onSurface})
          var(--m3e-list-item-disabled-trailing-opacity, 38%),
        transparent
      );
    }
    :host(:not(:disabled)) .state-layer {
      --m3e-state-layer-hover-color: var(--m3e-list-item-hover-state-layer-color, ${t.color.onSurface});
      --m3e-state-layer-hover-opacity: var(
        --m3e-list-item-hover-state-layer-opacity,
        ${t.state.hoverStateLayerOpacity}
      );
      --m3e-state-layer-focus-color: var(--m3e-list-item-focus-state-layer-color, ${t.color.onSurface});
      --m3e-state-layer-focus-opacity: var(
        --m3e-list-item-focus-state-layer-opacity,
        ${t.state.focusStateLayerOpacity}
      );
    }
    :host(:not(:disabled)) .ripple {
      --m3e-ripple-color: var(--m3e-list-item-pressed-state-layer-color, ${t.color.onSurface});
      --m3e-ripple-opacity: var(
        --m3e-list-item-pressed-state-layer-opacity,
        ${t.state.pressedStateLayerOpacity}
      );
    }
    @media (forced-colors: active) {
      :host(:disabled) ::slotted([slot="leading"]),
      :host(:disabled) ::slotted([slot="leading-icon"]),
      :host(:disabled) .content,
      :host(:disabled) ::slotted([slot="overline"]),
      :host(:disabled) ::slotted([slot="supporting-text"]),
      :host(:disabled) ::slotted([slot="trailing"]),
      :host(:disabled) ::slotted([slot="trailing-supporting-text"]),
      :host(:disabled) ::slotted([slot="trailing-icon"]) {
        color: GrayText;
      }
    }
    @media (prefers-reduced-motion) {
      .base {
        transition: none;
      }
    }
  `,at=d([y("m3e-list-item")],at);var Za,Xr,Yr,Hm,cg,Jr=class extends M(k,"list"){constructor(){super(...arguments);m(this,Hm);m(this,Za,new Array);m(this,Xr,{video:0,image:0,avatar:0,icon:0,text:0});m(this,Yr,{video:0,image:0,avatar:0,icon:0,text:0});this.variant="standard"}get items(){return s(this,Za)}get leadingContentType(){return s(this,Xr).video>0?"video":s(this,Xr).image>0?"image":s(this,Xr).avatar>0?"avatar":s(this,Xr).icon>0?"icon":s(this,Xr).text>0?"text":void 0}get trailingContentType(){return s(this,Yr).video>0?"video":s(this,Yr).image>0?"image":s(this,Yr).avatar>0?"avatar":s(this,Yr).icon>0?"icon":s(this,Yr).text>0?"text":void 0}render(){return f`<slot @slotchange="${c(this,Hm,cg)}"></slot>`}notifyItemsChange(){}notifyLeadingContentTypeChange(e,i){e&&s(this,Xr)[e]--,i&&s(this,Xr)[i]++,["video","image","avatar","icon"].forEach(n=>{this.classList.toggle(`-has-leading-${n}`,this.leadingContentType===n)})}notifyTrailingContentTypeChange(e,i){e&&s(this,Yr)[e]--,i&&s(this,Yr)[i]--,["video","image","avatar","icon"].forEach(n=>{this.classList.toggle(`-has-trailing-${n}`,this.trailingContentType===n)})}};Za=new WeakMap,Xr=new WeakMap,Yr=new WeakMap,Hm=new WeakSet,cg=function(e){g(this,Za,e.target.assignedElements({flatten:!0}).filter(i=>i instanceof at)),s(this,Za).forEach((i,n)=>{i.classList.toggle("-first",n===0),i.classList.toggle("-last",n===s(this,Za).length-1)}),this.notifyItemsChange()},Jr.styles=b`
    :host {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      box-sizing: border-box;
      padding-block: var(--m3e-list-block-padding, 0px);

      --m3e-divider-inset-start-size: var(--m3e-list-divider-inset-start-size, 1rem);
      --m3e-divider-inset-end-size: var(--m3e-list-divider-inset-end-size, 1.5rem);
    }
    :host([variant="standard"]) {
      --_list-item-leading-video-outset: var(--m3e-list-item-leading-space, 1rem);
      --_list-item-trailing-video-outset: var(--m3e-list-item-trailing-space, 1rem);
      --_expandable-list-item-expanded-toggle-icon-container-color: transparent;
    }
    :host([variant="segmented"]) {
      row-gap: var(--m3e-segmented-list-segment-gap, 0.125rem);
    }
    :host([variant="segmented"]) {
      --m3e-list-item-container-color: var(--m3e-segmented-list-item-container-color, ${t.color.surface});
      --m3e-list-item-disabled-container-color: var(
        --m3e-segmented-list-item-disabled-container-color,
        ${t.color.surface}
      );
      --m3e-list-item-container-shape: var(
        --m3e-segmented-list-item-container-shape,
        ${t.shape.corner.extraSmall}
      );
      --m3e-list-item-hover-container-shape: var(
        --m3e-segmented-list-item-hover-container-shape,
        ${t.shape.corner.medium}
      );
      --m3e-list-item-focus-container-shape: var(
        --m3e-segmented-list-item-focus-container-shape,
        ${t.shape.corner.large}
      );
      --m3e-list-item-selected-container-shape: var(
        --m3e-segmented-list-item-selected-container-shape,
        ${t.shape.corner.large}
      );
      --m3e-list-item-video-shape: var(--m3e-segmented-list-item-video-shape, ${t.shape.corner.small});
      --m3e-list-item-image-shape: var(--m3e-segmented-list-item-image-shape, ${t.shape.corner.small});
      --m3e-list-item-between-space: var(--m3e-segmented-list-item-spacing, 0.75rem);
      --_expandable-list-item-items-segment-gap: var(--m3e-segmented-list-segment-gap, 0.125rem);
      --_expandable-list-item-expanded-top-shape: var(
        --m3e-segmented-list-container-shape,
        ${t.shape.corner.large}
      );
    }
    :host([variant="segmented"]) ::slotted(.-first),
    :host([variant="segmented"]) ::slotted(.-has-previous-open:not([open])) {
      --_list-item-top-container-shape: var(--m3e-segmented-list-container-shape, ${t.shape.corner.large});
    }
    :host([variant="segmented"]) ::slotted(.-has-next-open:not([open])),
    :host([variant="segmented"]) ::slotted(.-last) {
      --_list-item-bottom-container-shape: var(--m3e-segmented-list-container-shape, ${t.shape.corner.large});
    }
    :host([variant="segmented"]) ::slotted(m3e-divider) {
      display: none;
    }
    :host(.-has-leading-video) {
      --_list-item-leading-reserved-display: block;
      --_list-item-leading-reserved-space: var(--m3e-list-item-video-width, 6.25rem);
    }
    :host([variant="standard"].-has-leading-video) {
      --_list-item-leading-reserved-outset: var(--m3e-list-item-leading-space, 1rem);
      --_list-item-trailing-reserved-outset: var(--m3e-list-item-trailing-space, 1rem);
    }
    :host(.-has-leading-image) {
      --_list-item-leading-reserved-display: block;
      --_list-item-leading-reserved-space: var(--m3e-list-item-image-width, 3.5rem);
    }
    :host(.-has-leading-avatar) {
      --_list-item-leading-reserved-display: block;
      --_list-item-leading-reserved-space: var(--m3e-avatar-size, 2.5rem);
    }
    :host(.-has-leading-icon) {
      --_list-item-leading-reserved-display: block;
      --_list-item-leading-reserved-space: var(--m3e-list-item-icon-size, 1.5rem);
    }
  `,d([p({reflect:!0})],Jr.prototype,"variant",2),Jr=d([y("m3e-list")],Jr);var Fc,Vc,Bc,Xa,xr,dg,Dc,hg,So=class extends at{constructor(){super(...arguments);m(this,xr);m(this,Fc,So.__nextId++);m(this,Vc,`m3e-expandable-list-item-${s(this,Fc)}-content`);m(this,Bc,`m3e-expandable-list-item-${s(this,Fc)}-header`);m(this,Xa,new Array);this.disabled=!1;this.open=!1}get items(){return s(this,Xa)}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}updated(e){if(super.updated(e),e.has("open")){for(let i=this.previousElementSibling;i;i=i.previousElementSibling)if(i instanceof at){i.classList.toggle("-has-next-open",this.open);break}for(let i=this.nextElementSibling;i;i=i.nextElementSibling)if(i instanceof at){i.classList.toggle("-has-previous-open",this.open);break}}}render(){return f`<div class="base">
      <m3e-list-item-button
        id="${s(this,Bc)}"
        class="header"
        ?disabled="${this.disabled}"
        aria-expanded="${this.open}"
        aria-controls="${s(this,Vc)}"
        @click="${c(this,xr,dg)}"
      >
        <slot name="leading" slot="leading" @slotchange="${this._handleLeadingSlotChange}"></slot>
        <slot name="overline" slot="overline"></slot>
        <slot></slot>
        <slot name="supporting-text" slot="supporting-text"></slot>
        <div class="toggle-container" slot="trailing" aria-hidden="true">
          <div class="toggle">
            <slot name="toggle-icon">
              <svg viewBox="0 -960 960 960" fill="currentColor">
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </slot>
          </div>
        </div>
      </m3e-list-item-button>
      <m3e-collapsible
        id="${s(this,Vc)}"
        class="items"
        role="list"
        aria-labelledby="${s(this,Bc)}"
        ?open="${this.open}"
        @opening="${c(this,xr,Dc)}"
        @opened="${c(this,xr,Dc)}"
        @closing="${c(this,xr,Dc)}"
        @closed="${c(this,xr,Dc)}"
      >
        <slot name="items" @slotchange="${c(this,xr,hg)}"></slot>
      </m3e-collapsible>
    </div>`}};Fc=new WeakMap,Vc=new WeakMap,Bc=new WeakMap,Xa=new WeakMap,xr=new WeakSet,dg=function(e){e.defaultPrevented||(this.open=!this.open,this.closest("m3e-action-list")?.[E].updateActiveItem(this.button))},Dc=function(e){e.stopPropagation(),["opening","opened","closing","closed"].forEach(i=>{this.button?.classList.toggle(i,e.type===i)}),this.dispatchEvent(new Event(e.type,{bubbles:!0}))},hg=function(e){g(this,Xa,e.target.assignedElements({flatten:!0}).flatMap(i=>[...i.childNodes].filter(n=>n instanceof at))),s(this,Xa).forEach((i,n)=>{n==s(this,Xa).length-1?i.style.setProperty("--_list-item-bottom-container-shape",`var(--m3e-segmented-list-container-shape, ${t.shape.corner.large})`):i.style.removeProperty("--_list-item-bottom-container-shape")}),this.closest("m3e-list, m3e-action-list, m3e-selection-list")?.notifyItemsChange()},So.styles=b`
    :host {
      display: block;
    }
    .header {
      width: 100%;
      margin-bottom: 0px;
      transition: ${r(`margin-bottom 
        var(--m3e-expandable-list-item-bounce-duration, ${t.motion.duration.medium1})
        ${t.motion.easing.standard}`)};
      --_list-item-button-trailing-align-self: stretch;
    }
    .toggle-container {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: stretch;
      width: var(--m3e-expandable-list-item-toggle-icon-container-width, 2rem);
      border-radius: var(--m3e-expandable-list-item-toggle-icon-container-shape, ${t.shape.corner.full});
      transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      font-size: var(--m3e-expandable-list-item-toggle-icon-size, 1.5rem);
      transition: ${r(`transform ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    .toggle svg,
    ::slotted(svg[slot="toggle-icon"]) {
      width: 1em;
      height: 1em;
    }
    :host([open]) .toggle-container {
      background-color: var(
        --_expandable-list-item-expanded-toggle-icon-container-color,
        var(--m3e-expandable-list-item-expanded-toggle-icon-container-color, ${t.color.surfaceContainer})
      );
    }
    :host([open]) .toggle {
      transform: rotate(180deg);
    }
    :host([open]) .header {
      --_list-item-top-container-shape: var(--_expandable-list-item-expanded-top-shape, initial);
      --_list-item-bottom-container-shape: initial;
      margin-bottom: var(--_expandable-list-item-items-segment-gap, 0px);
    }
    :host([open]) .header.opening {
      margin-bottom: calc(
        var(--_expandable-list-item-items-segment-gap, 0px) * var(--m3e-expandable-list-item-bounce-factor, 4)
      );
    }
    :host([open]) .header,
    :host([open]) .items {
      --_list-item-container-color: var(
        --m3e-expandable-list-item-expanded-container-color,
        var(--m3e-list-item-container-color, transparent)
      );
    }
    .base,
    ::slotted([slot="items"]) {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
    ::slotted([slot="items"]) {
      flex: none;
      --_list-item-top-container-shape: initial;
      --_list-item-bottom-container-shape: initial;
      row-gap: var(--_expandable-list-item-items-segment-gap, 0px);
    }
    .items {
      --m3e-collapsible-animation-duration: var(
        --m3e-expandable-list-item-expand-duration,
        ${t.motion.duration.medium1}
      );
    }
    @media (forced-colors: active) {
      .header {
        transition: none;
      }
      :host([open]) .header.opening {
        margin-bottom: var(--_expandable-list-item-items-segment-gap, 0px);
      }
    }
    @media (prefers-reduced-motion) {
      .header,
      .toggle-container,
      .toggle {
        transition: none;
      }
    }
  `,So.__nextId=0,d([p({type:Boolean,reflect:!0})],So.prototype,"disabled",2),d([p({type:Boolean,reflect:!0})],So.prototype,"open",2),d([L(".header")],So.prototype,"button",2),So=d([y("m3e-expandable-list-item")],So);var mg,ug,Nc,Rm=class extends(ug=Jr,mg=E,ug){constructor(){super(...arguments);m(this,Nc,e=>this[E].onKeyDown(e));this[mg]=new fo().withWrap().withHomeAndEnd().withVerticalOrientation().withSkipPredicate(e=>{if(e.disabled)return!0;let i=e.getRootNode().host;if(i.parentElement?.slot==="items"){let n=i.closest("m3e-expandable-list-item");for(;n;){if(!n.open)return!0;let l=n.closest("m3e-expandable-list-item,m3e-action-list");l instanceof So&&(n=l);break}}return!1})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",s(this,Nc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",s(this,Nc))}async notifyItemsChange(){let e=[...this.querySelectorAll("m3e-list-action,m3e-expandable-list-item")];for(let n of e)n.isUpdatePending&&await n.updateComplete;this.isUpdatePending&&await this.updateComplete;let{added:i}=this[E].setItems(e.map(n=>(n instanceof So,n.button)));this[E].activeItem||this[E].updateActiveItem(i.find(n=>!n.disabled))}};Nc=new WeakMap,Rm=d([y("m3e-action-list")],Rm);var Am,pg,Ya=class extends Fe(at){constructor(){super(...arguments);m(this,Am);this.disabled=!1}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}click(){this.button?.click()}render(){return f`<m3e-list-item-button
      class="button"
      ?disabled="${this.disabled}"
      href="${$e(this.href||void 0)}"
      target="${$e(this.target||void 0)}"
      download="${$e(this.download||void 0)}"
      rel="${$e(this.rel||void 0)}"
      @click="${c(this,Am,pg)}"
    >
      <slot name="leading" slot="leading" @slotchange="${this._handleLeadingSlotChange}"></slot>
      <slot name="overline" slot="overline"></slot>
      <slot></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot name="trailing" slot="trailing" @slotchange="${this._handleTrailingSlotChange}"></slot>
    </m3e-list-item-button>`}};Am=new WeakSet,pg=function(e){e.defaultPrevented||this.closest("m3e-action-list")?.[E].updateActiveItem(this.button)},Ya.styles=b`
    :host {
      display: block;
    }
    .button {
      width: 100%;
    }
  `,d([L(".button")],Ya.prototype,"button",2),d([p({type:Boolean,reflect:!0})],Ya.prototype,"disabled",2),Ya=d([y("m3e-list-action")],Ya);var ia=class extends de(Fe(ae(N(D(M(at,"button"),!0))))){constructor(){super(),new ze(this,{callback:(a,e)=>this.shadowRoot?.querySelector(".base")?.classList.toggle("focus-visible",e)}),new ue(this,{callback:a=>this.shadowRoot?.querySelector(".base")?.classList.toggle("pressed",a)})}firstUpdated(a){super.firstUpdated(a),[this._focusRing,this._stateLayer,this._ripple].forEach(e=>e?.attach(this))}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"> </m3e-state-layer>
      <m3e-focus-ring class="focus-ring" inward ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
      ${this[st]()} ${super._renderBase()}
    </div>`}};ia.styles=[at.styles,b`
      :host {
        outline: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .base {
        position: relative;
      }
      :host(:not(:disabled)) {
        cursor: pointer;
      }
      a {
        all: unset;
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 1;
      }
      slot[name="trailing"] {
        align-self: var(--_list-item-button-trailing-align-self, auto);
      }
    `],d([L(".focus-ring")],ia.prototype,"_focusRing",2),d([L(".state-layer")],ia.prototype,"_stateLayer",2),d([L(".ripple")],ia.prototype,"_ripple",2),ia=d([y("m3e-list-item-button")],ia);var qc,Wc,Uc,is,vg,fg,Cr=class extends de(ae(Vt(N(D(M(at,"option"),!0))))){constructor(){super();m(this,is);m(this,qc);m(this,Wc,"");m(this,Uc,e=>c(this,is,fg).call(this,e));new ze(this,{callback:(e,i)=>this.shadowRoot?.querySelector(".base")?.classList.toggle("focus-visible",i)}),new ue(this,{callback:e=>this.shadowRoot?.querySelector(".base")?.classList.toggle("pressed",e)})}get value(){return s(this,qc)??s(this,Wc)}set value(e){g(this,qc,e)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,Uc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,Uc))}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}update(e){if(super.update(e),e.has("selected")){this.closest("m3e-selection-list")?.[E].notifySelectionChange(this);for(let i of this.querySelectorAll("m3e-icon"))i.toggleAttribute("filled",this.selected)}}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"> </m3e-state-layer>
      <m3e-focus-ring class="focus-ring" inward ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
      <slot name="leading" @slotchange="${this._handleLeadingSlotChange}"></slot>
      <div class="content">
        <slot name="overline"></slot>
        <slot @slotchange="${c(this,is,vg)}"></slot>
        <slot name="supporting-text"></slot>
      </div>
      <slot name="trailing" @slotchange="${this._handleTrailingSlotChange}"></slot>
      <div class="indicator">
        ${this.closest("m3e-selection-list")?.multi?f`<m3e-pseudo-checkbox ?checked="${this.selected}" ?disabled="${this.disabled}"></m3e-pseudo-checkbox>`:f`<m3e-pseudo-radio ?checked="${this.selected}" ?disabled="${this.disabled}"></m3e-pseudo-radio>`}
      </div>
    </div>`}};qc=new WeakMap,Wc=new WeakMap,Uc=new WeakMap,is=new WeakSet,vg=function(e){g(this,Wc,ft(e.target))},fg=function(e){let i=this.closest("m3e-selection-list");if(!(e.defaultPrevented||!i)&&(i.multi||!this.selected)){let n=this.selected;this.selected=!this.selected,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?(i[E].notifySelectionChange(this),this.dispatchEvent(new Event("change",{bubbles:!0}))):this.selected=n}},Cr.styles=[at.styles,b`
      :host {
        outline: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .base {
        position: relative;
      }
      .indicator {
        min-width: 1.5rem;
        min-height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      :host(:not(:disabled)) {
        cursor: pointer;
      }
      :host(.-three-line) .indicator {
        align-self: flex-start;
        margin-top: var(--m3e-list-item-three-line-top-offset, 0.25rem);
      }
      :host([selected]) .base,
      :host([selected]) .state-layer,
      :host([selected]) .ripple,
      :host([selected]) .focus-ring {
        border-radius: var(--m3e-list-item-selected-container-shape, ${t.shape.corner.large});
      }
      :host([selected]:not(:disabled)) .base {
        color: var(--m3e-list-item-selected-label-text-color, ${t.color.onSecondaryContainer});
      }
      :host([selected]:not(:disabled)) ::slotted([slot="overline"]) {
        color: var(--m3e-list-item-selected-overline-color, ${t.color.onSecondaryContainer});
      }
      :host([selected]:not(:disabled)) ::slotted([slot="supporting-text"]) {
        color: var(--m3e-list-item-selected-supporting-text-color, ${t.color.onSecondaryContainer});
      }
      :host([selected]:not(:disabled)) ::slotted([slot="leading"]) {
        color: var(--m3e-list-item-selected-leading-color, ${t.color.onSecondaryContainer});
      }
      :host([selected]:not(:disabled)) ::slotted([slot="trailing"]) {
        color: var(--m3e-list-item-selected-trailing-color, ${t.color.onSecondaryContainer});
      }
      :host([selected]:not(:disabled)) .base {
        background-color: var(--m3e-list-item-selected-container-color, ${t.color.secondaryContainer});
      }
      :host([selected]:disabled) .base {
        background-color: color-mix(
          in srgb,
          var(--m3e-list-item-selected-disabled-container-color, ${t.color.onSurface})
            var(--m3e-list-item-selected-disabled-container-opacity, 10%),
          transparent
        );
      }
      :host([selected]:not(:disabled)) .state-layer {
        --m3e-state-layer-hover-color: var(
          --m3e-list-item-selected-hover-state-layer-color,
          ${t.color.onSurface}
        );
        --m3e-state-layer-hover-opacity: var(
          --m3e-list-item-selected-hover-state-layer-opacity,
          ${t.state.hoverStateLayerOpacity}
        );
        --m3e-state-layer-focus-color: var(
          --m3e-list-item-selected-focus-state-layer-color,
          ${t.color.onSurface}
        );
        --m3e-state-layer-focus-opacity: var(
          --m3e-list-item-selected-focus-state-layer-opacity,
          ${t.state.focusStateLayerOpacity}
        );
      }
      :host([selected]:not(:disabled)) .ripple {
        --m3e-ripple-color: var(--m3e-list-item-selected-pressed-state-layer-color, ${t.color.onSurface});
        --m3e-ripple-opacity: var(
          --m3e-list-item-selected-pressed-state-layer-opacity,
          ${t.state.pressedStateLayerOpacity}
        );
      }
      :host(.-hide-selection) .indicator,
      :host(:not(.-hide-selection)) ::slotted([slot="trailing"]) {
        display: none;
      }
      @media (forced-colors: active) {
        :host([selected]:not(:disabled)) .content,
        :host([selected]:not(:disabled)) ::slotted([slot="overline"]),
        :host([selected]:not(:disabled)) ::slotted([slot="supporting-text"]),
        :host([selected]:not(:disabled)) ::slotted([slot="leading"]),
        :host([selected]:not(:disabled)) ::slotted([slot="trailing"]) {
          color: HighlightText;
          forced-color-adjust: none;
        }
        :host([selected]:not(:disabled)) .base {
          background-color: Highlight;
        }
      }
    `],d([L(".focus-ring")],Cr.prototype,"_focusRing",2),d([L(".state-layer")],Cr.prototype,"_stateLayer",2),d([L(".ripple")],Cr.prototype,"_ripple",2),d([p()],Cr.prototype,"value",1),Cr=d([y("m3e-list-option")],Cr);var bg,Gc,jc,_m,gg,as=class extends Bt(Oe(De(ot(N(D(M(Jr,"listbox"))))))){constructor(){super(...arguments);m(this,_m);m(this,Gc,e=>this[E].onKeyDown(e));m(this,jc,e=>c(this,_m,gg).call(this,e));this[bg]=new rt().withWrap().withHomeAndEnd().withVerticalOrientation();this.multi=!1;this.hideSelectionIndicator=!1}get options(){return this[E]?.items??[]}get selected(){return this[E]?.selectedItems??[]}get value(){let e=this.selected.filter(i=>!i.disabled).map(i=>i.value);switch(e.length){case 0:return null;case 1:return e[0];default:return e}}get[(bg=E,tt)](){let e=this.value;if(Array.isArray(e)){let i=new FormData;for(let n of e)i.append(this.name,n);return i}return e}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",s(this,Gc)),this.addEventListener("change",s(this,jc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",s(this,Gc)),this.removeEventListener("change",s(this,jc))}update(e){super.update(e),e.has("disabled")&&(e.get("disabled")!==void 0||this.disabled)&&(this[E].disabled=this.disabled),e.has("multi")&&(this[E].multi=this.multi,this.multi?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable"),this[E].items.forEach(i=>i.requestUpdate())),e.has("hideSelectionIndicator")&&this[E].items.forEach(i=>i.classList.toggle("-hide-selection",this.hideSelectionIndicator))}notifyItemsChange(){let{added:e}=this[E].setItems(this.items.filter(i=>i instanceof Cr));e.forEach(i=>i.classList.toggle("-hide-selection",this.hideSelectionIndicator)),this[E].activeItem||this[E].updateActiveItem(e.find(i=>!i.disabled))}};Gc=new WeakMap,jc=new WeakMap,_m=new WeakSet,gg=function(e){e.target!==this&&(e.stopImmediatePropagation(),e.stopPropagation(),this.dispatchEvent(new Event("change",{bubbles:!0})))},d([p({type:Boolean})],as.prototype,"multi",2),d([p({attribute:"hide-selection-indicator",type:Boolean})],as.prototype,"hideSelectionIndicator",2),as=d([y("m3e-selection-list")],as);var aa={activeIndicatorSize:r("var(--m3e-loading-indicator-size, 2.375rem)"),activeIndicatorColor:r(`var(--m3e-loading-indicator-active-indicator-color, ${t.color.primary})`),containedActiveIndicatorColor:r(`var(--m3e-loading-indicator-contained-active-indicator-color, ${t.color.onPrimaryContainer})`),containedContainerColor:r(`var(--m3e-loading-indicator-contained-container-color, ${t.color.secondaryContainer})`),containerShape:r(`var(--m3e-loading-indicator-container-shape, ${t.shape.corner.full})`),containerSize:r("var(--m3e-loading-indicator-container-size, 3rem)")};var yg={"4-sided-cookie":"M230.389 50.473C293.109 23.2328 356.767 86.8908 329.527 149.611L325.023 159.981C316.707 179.13 316.707 200.87 325.023 220.019L329.527 230.389C356.767 293.109 293.109 356.767 230.389 329.527L220.019 325.023C200.87 316.707 179.13 316.707 159.981 325.023L149.611 329.527C86.8908 356.767 23.2328 293.109 50.473 230.389L54.9768 220.019C63.2934 200.87 63.2934 179.13 54.9768 159.981L50.473 149.611C23.2328 86.8908 86.8908 23.2328 149.611 50.473L159.981 54.9768C179.13 63.2934 200.87 63.2934 220.019 54.9768L230.389 50.473Z","7-sided-cookie":"M142.67 51.7842C146.243 48.6394 148.029 47.067 149.671 45.7954C173.425 27.4015 206.575 27.4015 230.329 45.7954C231.971 47.067 233.757 48.6394 237.33 51.7842C238.526 52.8372 239.124 53.3636 239.724 53.8672C248.136 60.9247 258.171 65.7683 268.92 67.9594C269.688 68.1158 270.471 68.2562 272.038 68.537C276.719 69.3756 279.059 69.7949 281.075 70.2889C310.234 77.4346 330.902 103.411 331.364 133.493C331.396 135.573 331.283 137.953 331.057 142.713C330.982 144.307 330.944 145.104 330.925 145.888C330.665 156.88 333.143 167.763 338.136 177.553C338.493 178.252 338.872 178.953 339.63 180.356C341.894 184.547 343.026 186.642 343.897 188.53C356.503 215.834 349.127 248.226 325.949 267.344C324.347 268.666 322.42 270.061 318.566 272.852C317.276 273.787 316.63 274.254 316.007 274.729C307.27 281.377 300.326 290.105 295.803 300.122C295.48 300.837 295.169 301.571 294.547 303.04C292.69 307.427 291.761 309.62 290.832 311.48C277.393 338.382 247.526 352.798 218.162 346.556C216.132 346.124 213.842 345.484 209.262 344.204C207.728 343.776 206.962 343.562 206.203 343.369C195.569 340.668 184.431 340.668 173.797 343.369C173.038 343.562 172.272 343.776 170.738 344.204C166.158 345.484 163.868 346.124 161.838 346.556C132.474 352.798 102.607 338.382 89.168 311.48C88.2388 309.62 87.3102 307.427 85.453 303.04C84.8311 301.571 84.5202 300.837 84.1975 300.122C79.6741 290.105 72.7297 281.377 63.993 274.729C63.3696 274.254 62.7244 273.787 61.434 272.852C57.5801 270.061 55.6532 268.666 54.0507 267.344C30.873 248.226 23.4965 215.834 36.1027 188.53C36.9742 186.642 38.1062 184.547 40.3703 180.356C41.1283 178.953 41.5074 178.252 41.8636 177.553C46.8568 167.763 49.3353 156.88 49.0745 145.888C49.0559 145.104 49.0182 144.307 48.9426 142.713C48.7168 137.953 48.6039 135.573 48.6359 133.493C49.0982 103.411 69.7665 77.4346 98.9252 70.2889C100.941 69.7949 103.281 69.3756 107.962 68.537C109.529 68.2562 110.312 68.1158 111.08 67.9594C121.829 65.7683 131.864 60.9247 140.276 53.8672C140.876 53.3636 141.474 52.8372 142.67 51.7842Z",oval:"M271.309 271.309C201.705 340.913 108.877 360.935 63.9707 316.029C19.0648 271.123 39.0867 178.295 108.691 108.691C178.295 39.0867 271.123 19.0648 316.029 63.9707C360.935 108.877 340.913 201.705 271.309 271.309Z",pentagon:"M155.064 49.459C176.093 34.1803 204.569 34.1803 225.598 49.459L322.926 120.171C343.955 135.45 352.754 162.532 344.722 187.253L307.546 301.668C299.514 326.39 276.476 343.127 250.483 343.127H130.18C104.186 343.127 81.1489 326.39 73.1164 301.668L35.9407 187.253C27.9082 162.532 36.7077 135.45 57.737 120.171L155.064 49.459Z",pill:"M116.116 71.7851C169.162 18.7383 255.168 18.7383 308.215 71.7851C361.262 124.832 361.262 210.838 308.215 263.884L263.884 308.215C210.838 361.262 124.832 361.262 71.7851 308.215C18.7383 255.168 18.7383 169.162 71.7851 116.116L116.116 71.7851Z","soft-burst":"M175.147 33.1508C181.983 22.2831 198.017 22.2831 204.853 33.1508L221.238 59.2009C225.731 66.3458 234.797 69.2506 242.692 66.0751L271.475 54.4972C283.482 49.6671 296.455 58.9613 295.507 71.7154L293.235 102.288C292.612 110.673 298.215 118.278 306.494 120.284L336.681 127.601C349.275 130.653 354.23 145.692 345.861 155.461L325.8 178.877C320.298 185.3 320.298 194.7 325.8 201.123L345.861 224.539C354.23 234.308 349.275 249.347 336.681 252.399L306.494 259.716C298.215 261.722 292.612 269.327 293.235 277.712L295.507 308.285C296.455 321.039 283.482 330.333 271.475 325.503L242.692 313.925C234.797 310.749 225.731 313.654 221.238 320.799L204.853 346.849C198.017 357.717 181.983 357.717 175.147 346.849L158.762 320.799C154.269 313.654 145.203 310.749 137.308 313.925L108.525 325.503C96.5177 330.333 83.5454 321.039 84.4931 308.285L86.7649 277.712C87.388 269.327 81.785 261.722 73.5056 259.716L43.3186 252.399C30.7252 249.347 25.7702 234.308 34.1391 224.539L54.1997 201.123C59.7018 194.7 59.7018 185.3 54.1997 178.877L34.1391 155.461C25.7702 145.692 30.7252 130.653 43.3186 127.601L73.5056 120.284C81.785 118.278 87.388 110.673 86.7649 102.288L84.4931 71.7154C83.5454 58.9613 96.5177 49.6671 108.525 54.4972L137.308 66.0751C145.203 69.2506 154.269 66.3458 158.762 59.201L175.147 33.1508Z","very-sunny":"M166.725 43.1869C177.261 25.6044 202.739 25.6044 213.275 43.1868L225.124 62.9597C231.268 73.2136 243.399 78.2385 254.995 75.3327L277.355 69.7294C297.237 64.7468 315.253 82.7627 310.271 102.645L304.667 125.005C301.762 136.601 306.786 148.732 317.04 154.876L336.813 166.725C354.396 177.261 354.396 202.739 336.813 213.275L317.04 225.124C306.786 231.268 301.762 243.399 304.667 254.995L310.271 277.355C315.253 297.237 297.237 315.253 277.355 310.271L254.995 304.667C243.399 301.762 231.268 306.786 225.124 317.04L213.275 336.813C202.739 354.396 177.261 354.396 166.725 336.813L154.876 317.04C148.732 306.786 136.601 301.762 125.005 304.667L102.646 310.271C82.7627 315.253 64.7468 297.237 69.7294 277.355L75.3327 254.995C78.2385 243.399 73.2136 231.268 62.9597 225.124L43.1869 213.275C25.6044 202.739 25.6044 177.261 43.1868 166.725L62.9597 154.876C73.2136 148.732 78.2385 136.601 75.3327 125.005L69.7294 102.646C64.7468 82.7627 82.7627 64.7468 102.645 69.7294L125.005 75.3327C136.601 78.2385 148.732 73.2136 154.876 62.9597L166.725 43.1869Z"},Kc=new Array,xg=new Map;for(let o in yg)Kc.push(yg[o]),xg.set(o,Kc.length-1);var Cg={};Kc=Vh(Kc,300);for(let o of xg)Cg[o[0]]=r(Kc[o[1]]);var na=Cg;var Ja=class extends M(k,"progressbar"){constructor(){super(...arguments);this.variant="uncontained"}connectedCallback(){super.connectedCallback(),this.ariaValueMin=this.ariaValueMin||"0",this.ariaValueMax=this.ariaValueMax||"100"}disconnectedCallback(){super.disconnectedCallback(),this._activeIndicator?.classList.toggle("animate",!1)}firstUpdated(e){super.firstUpdated(e),this._activeIndicator?.classList.toggle("animate",!0)}render(){return f`<div class="container" aria-hidden="true">
      <div class="active-indicator"></div>
    </div>`}};Ja.styles=b`
    :host {
      display: inline-block;
      aspect-ratio: 1 / 1;
      contain: strict;
      vertical-align: middle;
      content-visibility: auto;
    }
    :host([variant="uncontained"]) {
      width: ${aa.activeIndicatorSize};
    }
    :host([variant="contained"]) {
      width: ${aa.containerSize};
    }
    :host([variant="uncontained"]) .active-indicator {
      background-color: ${aa.activeIndicatorColor};
    }
    :host([variant="contained"]) .active-indicator {
      background-color: ${aa.containedActiveIndicatorColor};
    }
    :host([variant="contained"]) .container {
      background-color: ${aa.containedContainerColor};
    }
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${aa.containerShape};
    }
    .active-indicator {
      margin: auto;
      aspect-ratio: 1 / 1;
      width: calc(${aa.activeIndicatorSize} * 0.842);
      transform-origin: center;
      transition: clip-path ${t.motion.spring.slowEffects};
      will-change: transform, clip-path;

      --_polygon-soft-burst: polygon(${na["soft-burst"]});
      --_polygon-7-sided-cookie: polygon(${na["7-sided-cookie"]});
      --_polygon-pentagon: polygon(${na.pentagon});
      --_polygon-pill: polygon(${na.pill});
      --_polygon-very-sunny: polygon(${na["very-sunny"]});
      --_polygon-4-sided-cookie: polygon(${na["4-sided-cookie"]});
      --_polygon-oval: polygon(${na.oval});
    }
    .active-indicator.animate {
      animation: rotate 4998ms infinite;
    }
    @keyframes rotate {
      0% {
        clip-path: var(--_polygon-soft-burst);
        transform: rotate(0deg);
        animation-timing-function: cubic-bezier(0.5, 0.2, 0, 0.8);
      }
      14% {
        clip-path: var(--_polygon-7-sided-cookie);
        transform: rotate(154deg);
        animation-timing-function: cubic-bezier(0.5, 0.2, 0, 0.8);
      }
      29% {
        clip-path: var(--_polygon-pentagon);
        transform: rotate(309deg);
        animation-timing-function: cubic-bezier(0.5, 0.2, 0, 0.8);
      }
      43% {
        clip-path: var(--_polygon-pill);
        transform: rotate(463deg);
        animation-timing-function: cubic-bezier(0.5, 0.2, 0, 0.8);
      }
      57% {
        clip-path: var(--_polygon-very-sunny);
        transform: rotate(617deg);
        animation-timing-function: cubic-bezier(0.5, 0.2, 0, 0.8);
      }
      71% {
        clip-path: var(--_polygon-4-sided-cookie);
        transform: rotate(771deg);
        animation-timing-function: cubic-bezier(0.5, 0.2, 0, 0.8);
      }
      83% {
        clip-path: var(--_polygon-oval);
        transform: rotate(926deg);
        animation-timing-function: cubic-bezier(0.5, 0.2, 0, 0.8);
      }
      100% {
        clip-path: var(--_polygon-soft-burst);
        transform: rotate(1080deg);
      }
    }
    @media (forced-colors: active) {
      .active-indicator {
        background-color: CanvasText !important;
      }
    }
  `,d([L(".active-indicator")],Ja.prototype,"_activeIndicator",2),d([p({reflect:!0})],Ja.prototype,"variant",2),Ja=d([y("m3e-loading-indicator")],Ja);var tr=class extends de(ae(D(N(k),!0))){static{this.styles=b`
    :host {
      display: inline-block;
      outline: none;
      user-select: none;
      flex: none;
      height: var(--m3e-menu-item-container-height, 2.75rem);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    :host(:not(:disabled):not([aria-expanded="true"])) .base {
      color: var(--m3e-menu-item-color, ${t.color.onSurface});
    }
    :host(:not([aria-expanded="true"])) .base {
      --m3e-state-layer-hover-color: var(--m3e-menu-item-container-hover-color, ${t.color.onSurface});
      --m3e-state-layer-focus-color: var(--m3e-menu-item-container-focus-color, ${t.color.onSurface});
      --m3e-ripple-color: var(--m3e-menu-item-ripple-color, ${t.color.onSurface});
    }

    :host(:not(:disabled)[aria-expanded="true"]) .base {
      background-color: color-mix(
        in srgb,
        var(--m3e-menu-item-active-state-layer-color, ${t.color.onSurface})
          var(--m3e-menu-active-state-layer-opacity, 8%),
        transparent
      );
    }
    :host([aria-expanded="true"]) .state-layer {
      display: none;
    }

    :host(:not(:disabled)[checked]) .base {
      color: var(--m3e-menu-item-selected-color, ${t.color.onTertiaryContainer});
      background-color: var(--m3e-menu-item-selected-container-color, ${t.color.tertiaryContainer});
    }
    :host([checked]) .base {
      --m3e-state-layer-hover-color: var(
        --m3e-menu-item-selected-container-hover-color,
        ${t.color.onTertiaryContainer}
      );
      --m3e-state-layer-focus-color: var(
        --m3e-menu-item-selected-container-focus-color,
        ${t.color.onTertiaryContainer}
      );
      --m3e-ripple-color: var(--m3e-menu-item-selected-ripple-color, ${t.color.onTertiaryContainer});
    }
    :host(:not(:disabled)) {
      cursor: pointer;
    }
    :host(:disabled) .base {
      color: color-mix(
        in srgb,
        var(--m3e-menu-item-disabled-color, ${t.color.onSurface}) var(--m3e-menu-item-disabled-opacity, 38%),
        transparent
      );
    }

    .base {
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--m3e-menu-item-shape, ${t.shape.corner.extraSmall});
      transition: ${r(`border-radius ${t.motion.spring.fastEffects}`)};
    }
    :host([checked]:not(.-first)) .base {
      border-top-left-radius: var(--m3e-menu-item-selected-shape, ${t.shape.corner.medium});
      border-top-right-radius: var(--m3e-menu-item-selected-shape, ${t.shape.corner.medium});
    }
    :host([checked]:not(.-last)) .base {
      border-bottom-left-radius: var(--m3e-menu-item-selected-shape, ${t.shape.corner.medium});
      border-bottom-right-radius: var(--m3e-menu-item-selected-shape, ${t.shape.corner.medium});
    }
    :host(.-first) .base {
      border-top-left-radius: var(--m3e-menu-item-first-child-shape, ${t.shape.corner.medium});
      border-top-right-radius: var(--m3e-menu-item-first-child-shape, ${t.shape.corner.medium});
    }
    :host(.-last) .base {
      border-bottom-left-radius: var(--m3e-menu-item-last-child-shape, ${t.shape.corner.medium});
      border-bottom-right-radius: var(--m3e-menu-item-last-child-shape, ${t.shape.corner.medium});
    }
    .touch {
      position: absolute;
      height: 3rem;
      left: 0;
      right: 0;
    }
    .wrapper {
      flex: 1 1 auto;
      display: inline-flex;
      align-items: center;
      column-gap: var(--m3e-menu-item-icon-label-space, 0.5rem);
      padding-inline-start: var(--m3e-menu-item-padding-start, 0.75rem);
      padding-inline-end: var(--m3e-menu-item-padding-end, 0.75rem);
      font-size: var(--m3e-menu-item-label-text-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(
        --m3e-menu-item-label-text-font-weight,
        ${t.typescale.standard.label.large.fontWeight}
      );
      line-height: var(
        --m3e-menu-item-label-text-line-height,
        ${t.typescale.standard.label.large.lineHeight}
      );
      letter-spacing: var(--m3e-menu-item-label-text-tracking, ${t.typescale.standard.label.large.tracking});
    }
    .focus-ring {
      border-radius: var(--m3e-menu-item-focus-ring-shape, inherit);
    }
    .content {
      flex: 1 1 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    ::slotted([slot="icon"]),
    ::slotted([slot="trailing-icon"]),
    .trailing-icon {
      flex: none;
      width: 1em;
      font-size: var(--m3e-menu-item-icon-size, 1.25rem) !important;
    }
    @media (prefers-reduced-motion) {
      .base {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .base {
        background-color: Menu;
        color: MenuText;
      }
      :host(:disabled) .base {
        color: GrayText;
      }
    }
  `}constructor(){super(),new ze(this,{callback:a=>{a&&this.menu?._activate()}})}get menu(){return this.closest("m3e-menu")}firstUpdated(a){super.firstUpdated(a),[this._focusRing,this._stateLayer,this._ripple].forEach(e=>e?.attach(this))}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      ${jh(this)?this[st]():R}
      <div class="wrapper">${this._renderContent()}</div>
    </div>`}};d([L(".focus-ring")],tr.prototype,"_focusRing",2),d([L(".state-layer")],tr.prototype,"_stateLayer",2),d([L(".ripple")],tr.prototype,"_ripple",2);var ns=class extends ce(Ve){get menu(){return this.control?.tagName==="M3E-MENU"?this.control:null}attach(a){super.attach(a);let e=this.menu;e&&(this.parentElement&&(this.parentElement.ariaHasPopup="menu",this.parentElement.ariaExpanded="false",e.id&&je(this.parentElement,"aria-controls",e.id)),this.closest("m3e-menu")&&(e.submenu=!0))}detach(){if(this.parentElement){this.parentElement.ariaHasPopup=null,this.parentElement.ariaExpanded=null;let a=this.menu;a?.id&&xt(this.parentElement,"aria-controls",a.id)}super.detach()}_onClick(){this.parentElement&&(this.parentElement.tagName==="M3E-MENU-ITEM"?this.menu?.show(this.parentElement):this.menu?.toggle(this.parentElement))}};ns=d([y("m3e-menu-trigger")],ns);var Zc,Xc,Yc,sa,ko,$g,Sg,kg,wg,Lg,Eg,zo=class extends Fe(M(tr,"menuitem")){constructor(){super();m(this,ko);m(this,Zc,e=>c(this,ko,wg).call(this,e));m(this,Xc,e=>c(this,ko,Lg).call(this,e));m(this,Yc,()=>c(this,ko,Eg).call(this));this._hasSubmenu=!1;m(this,sa);new et(this,{startDelay:500,endDelay:500,callback:e=>{e&&!this.disabled&&s(this,sa)&&s(this,sa).menu?.show(this)}})}get submenu(){return s(this,sa)?.menu??null}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,Zc)),this.addEventListener("keydown",s(this,Xc)),this.addEventListener("mouseenter",s(this,Yc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,Zc)),this.removeEventListener("keydown",s(this,Xc)),this.removeEventListener("mouseenter",s(this,Yc))}_renderContent(){return f`<slot name="icon" aria-hidden="true" @slotchange="${c(this,ko,Sg)}"></slot>
      <span class="content"><slot @slotchange="${c(this,ko,$g)}"></slot></span>
      ${this._hasSubmenu?O.current==="ltr"?f`<svg class="trailing-icon" aria-hidden="true" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M400-280v-400l200 200-200 200Z" />
            </svg>`:f`<svg class="trailing-icon" aria-hidden="true" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M560-280 360-480l200-200v400Z" />
            </svg>`:f`<slot name="trailing-icon" aria-hidden="true" @slotchange="${c(this,ko,kg)}">
          </slot>`}`}};Zc=new WeakMap,Xc=new WeakMap,Yc=new WeakMap,sa=new WeakMap,ko=new WeakSet,$g=function(e){g(this,sa,e.target.assignedElements({flatten:!0}).find(i=>i instanceof ns)),this._hasSubmenu=s(this,sa)!==void 0},Sg=function(e){this.classList.toggle("-with-icon",J(e.target))},kg=function(e){this.classList.toggle("-with-trailing-icon",J(e.target))},wg=function(e){!e.defaultPrevented&&!this._hasSubmenu&&this.menu?.hideAll(!0)},Lg=function(e){if(!(e.defaultPrevented||this.disabled))switch(e.key){case"Right":case"ArrowRight":O.current==="ltr"&&(e.preventDefault(),this.submenu?.show(this));break;case"Left":case"ArrowLeft":O.current==="rtl"&&(e.preventDefault(),this.submenu?.show(this));break}},Eg=function(){this.menu?.items.forEach(e=>{e instanceof zo&&e!==this&&e.submenu?.isOpen&&e.submenu.hide()})},d([ie()],zo.prototype,"_hasSubmenu",2),zo=d([y("m3e-menu-item")],zo);var nt,ss,eo,Jc,Qc,ed,td,od,to,Tg,Mg,Pg,Hg,Rg,Op,ht=class extends M(k,"menu"){constructor(){super(...arguments);m(this,to);m(this,nt);m(this,ss);m(this,eo,new fo().withWrap().withHomeAndEnd().withVerticalOrientation());m(this,Jc,e=>c(this,to,Mg).call(this,e));m(this,Qc,()=>c(this,to,Pg).call(this));m(this,ed,e=>c(this,to,Hg).call(this,e));m(this,td,new sr(this,{target:null,callback:e=>e instanceof ht?e.items.filter(i=>i instanceof zo).forEach(i=>i.submenu?.hide()):this.hideAll()}));m(this,od,e=>{var i;e.newState==="closed"?((i=s(this,ss))==null||i.call(this),g(this,ss,void 0)):setTimeout(()=>{s(this,eo).setActiveItem(s(this,eo).items.find(n=>!n.disabled))},40)});this.positionX="after";this.positionY="below";this.variant="standard";this.submenu=!1}get items(){return s(this,eo).items}get isOpen(){return s(this,nt)!==void 0}connectedCallback(){super.connectedCallback(),this.tabIndex=-1,this.classList.add("-no-animate"),this.setAttribute("popover","manual"),this.addEventListener("keydown",s(this,Jc)),this.addEventListener("mouseenter",s(this,Qc)),this.addEventListener("toggle",s(this,od)),document.addEventListener("click",s(this,ed))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",s(this,Jc)),this.removeEventListener("mouseenter",s(this,Qc)),this.removeEventListener("toggle",s(this,od)),document.removeEventListener("click",s(this,ed)),c(this,to,Op).call(this)}async show(e){s(this,nt)&&s(this,nt)!==e&&this.hide();let i=this.positionX;O.current==="rtl"&&(i=i==="before"?"after":"before"),g(this,ss,await qr(this,e,{position:this.submenu?i==="before"?"left-start":"right-start":this.positionY==="above"?i==="before"?"top-end":"top-start":i==="before"?"bottom-end":"bottom-start",inline:!0,flip:!0,shift:!0,offset:this.submenu?void 0:4},(l,h,u)=>{if(!this.submenu)this.classList.toggle("-top",u.includes("top")),this.classList.toggle("-bottom",u.includes("bottom"));else if(s(this,nt)){let v=c(this,to,Rg).call(this,s(this,nt)).y;this.classList.toggle("-shift-down",!1),this.classList.toggle("-shift-up",!1),this.classList.toggle(Math.round(h)===Math.round(v)?"-shift-down":"-shift-up",!0)}O.current==="rtl"?this.style.right=`${window.innerWidth-l-this.clientWidth}px`:this.style.left=`${l}px`,this.style.top=`${h}px`}));let n=e.closest("m3e-menu");n?this.variant=n.variant:this._activate(),this.showPopover(),g(this,nt,e),s(this,nt).ariaExpanded="true",s(this,td).observe(s(this,nt))}hide(e=!1){for(let i of s(this,eo).items){let n=i.submenu;n&&n.isOpen&&n.hide()}c(this,to,Op).call(this),this.hidePopover(),s(this,nt)&&(s(this,nt).ariaExpanded="false",e&&s(this,nt).focus(),s(this,td).unobserve(s(this,nt)),g(this,nt,void 0))}hideAll(e=!1){let i=this;for(;s(i,nt);){let n=s(i,nt).closest("m3e-menu");if(!n)break;i=n}i.hide(e)}async toggle(e){s(this,nt)?this.hide():await this.show(e)}render(){return f`<div class="base"><slot @slotchange="${c(this,to,Tg)}"></slot></div>`}firstUpdated(e){super.firstUpdated(e),requestAnimationFrame(()=>this.classList.remove("-no-animate"))}_activate(){this!==ht.__activeMenu&&(ht.__activeMenu?.classList.remove("-active"),ht.__activeMenu=this,ht.__activeMenu?.classList.add("-active"))}};nt=new WeakMap,ss=new WeakMap,eo=new WeakMap,Jc=new WeakMap,Qc=new WeakMap,ed=new WeakMap,td=new WeakMap,od=new WeakMap,to=new WeakSet,Tg=function(){let{added:e}=s(this,eo).setItems([...this.querySelectorAll("m3e-menu-item,m3e-menu-item-checkbox,m3e-menu-item-radio")].filter(i=>i.closest("m3e-menu")===this));s(this,eo).activeItem||s(this,eo).updateActiveItem(e.find(i=>!i.disabled)),s(this,eo).items.forEach((i,n)=>{i.classList.toggle("-first",n===0),i.classList.toggle("-last",n===s(this,eo).items.length-1)})},Mg=function(e){switch(e.key){case"Right":case"ArrowRight":O.current==="rtl"?(e.preventDefault(),this.hide(!0)):s(this,eo).onKeyDown(e);break;case"Left":case"ArrowLeft":O.current==="ltr"?(e.preventDefault(),this.hide(!0)):s(this,eo).onKeyDown(e);break;case"Tab":this.hideAll();break;case"Escape":!e.shiftKey&&!e.ctrlKey&&this.hide(!0);break;default:s(this,eo).onKeyDown(e);break}},Pg=function(){this._activate()},Hg=function(e){!this.submenu&&!e.composedPath().some(i=>i instanceof ht||i===s(this,nt))&&this.hide()},Rg=function(e){let i=0,n=0;for(let l=e;l;l=l.offsetParent instanceof HTMLElement?l.offsetParent:null)i+=l.offsetLeft-l.scrollLeft+l.clientLeft,n+=l.offsetTop-l.scrollTop+l.clientTop;return{x:i,y:n}},Op=function(){this===ht.__activeMenu&&(ht.__activeMenu.classList.remove("-active"),ht.__activeMenu=void 0)},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-menu > m3e-divider {
            margin-block: var(--m3e-menu-divider-spacing, 0.5rem);
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),ht.styles=b`
    :host {
      position: absolute;
      padding: unset;
      margin: unset;
      border: unset;
      overflow-y: auto;
      overflow-x: visible;
      scrollbar-width: ${t.scrollbar.thinWidth};
      scrollbar-color: ${t.scrollbar.color};
      scroll-padding-block: calc(
        var(--m3e-focus-ring-thickness, 3px) + var(--m3e-menu-container-padding-block, 0.25rem)
      );
      min-width: var(--m3e-menu-container-min-width, 7rem);
      max-width: var(--m3e-menu-container-max-width, 17.5rem);
      max-height: var(--m3e-menu-container-max-height, 17.5rem);
      box-shadow: var(--m3e-menu-container-elevation, ${t.elevation.level3});
      opacity: 0;
      display: none;
    }
    .base {
      display: flex;
      flex-direction: column;
      row-gap: var(--m3e-menu-gap, 0.125rem);
      min-width: inherit;
      max-width: inherit;
      padding-block: var(--m3e-menu-container-padding-block, 0.25rem);
      padding-inline: var(--m3e-menu-container-padding-inline, 0.25rem);
      --m3e-focus-ring-outward-offset: 0px;
      --m3e-focus-ring-growth-factor: 1.5;
    }
    :host(:not(.-active)) {
      border-radius: var(--m3e-menu-container-shape, ${t.shape.corner.small});
    }
    :host(:not(.-active)) .base {
      --m3e-menu-item-first-child-shape: ${t.shape.corner.extraSmall};
      --m3e-menu-item-last-child-shape: ${t.shape.corner.extraSmall};
    }
    :host(.-active) {
      border-radius: var(--m3e-menu-active-container-shape, ${t.shape.corner.large});
    }
    :host(:not(.-no-animate)) {
      transition: ${r(`opacity ${t.motion.duration.short2} ${t.motion.easing.standard}, 
        transform ${t.motion.duration.short2} ${t.motion.easing.standard},
        overlay ${t.motion.duration.short2} ${t.motion.easing.standard} allow-discrete,
        display ${t.motion.duration.short2} ${t.motion.easing.standard} allow-discrete,
        border-radius ${t.motion.spring.fastEffects}`)};
    }
    :host(:not([submenu])) {
      transform: scaleY(0.8);
    }
    :host(:not([submenu]):popover-open) {
      transform: scaleY(1);
    }
    :host::backdrop {
      background-color: transparent;
    }
    :host(:popover-open) {
      display: block;
      opacity: 1;
    }
    :host(.-bottom) {
      transform-origin: top;
    }
    :host(.-top) {
      transform-origin: bottom;
    }
    :host(.-shift-down) {
      margin-top: calc(0px - var(--m3e-menu-container-padding-block, 0.25rem));
    }
    :host(.-shift-up) {
      margin-top: var(--m3e-menu-container-padding-block, 0.25rem);
    }
    :host([variant="vibrant"]) {
      background-color: var(--m3e-vibrant-menu-container-color, ${t.color.tertiaryContainer});
      --m3e-menu-item-color: var(--m3e-vibrant-menu-item-color, ${t.color.onTertiaryContainer});
      --m3e-menu-item-container-hover-color: var(
        --m3e-vibrant-menu-item-container-hover-color,
        ${t.color.onTertiaryContainer}
      );
      --m3e-menu-item-container-focus-color: var(
        --m3e-vibrant-menu-item-container-focus-color,
        ${t.color.onTertiaryContainer}
      );
      --m3e-menu-item-ripple-color: var(--m3e-vibrant-menu-item-ripple-color, ${t.color.onTertiaryContainer});
      --m3e-menu-item-active-state-layer-color: var(
        --m3e-vibrant-menu-item-active-state-layer-color,
        ${t.color.onTertiaryContainer}
      );
      --m3e-menu-item-selected-color: var(--m3e-vibrant-menu-item-selected-color, ${t.color.onTertiary});
      --m3e-menu-item-selected-container-color: var(
        --m3e-vibrant-menu-item-selected-container-color,
        ${t.color.tertiary}
      );

      --m3e-menu-item-selected-container-hover-color: var(
        --m3e-vibrant-menu-item-selected-container-hover-color,
        ${t.color.onTertiary}
      );
      --m3e-menu-item-container-selected-focus-color: var(
        --m3e-vibrant-menu-item-selected-container-focus-color,
        ${t.color.onTertiary}
      );
      --m3e-menu-item-selected-ripple-color: var(
        --m3e-vibrant-menu-item-selected-ripple-color,
        ${t.color.onTertiary}
      );
      --m3e-menu-item-disabled-color: var(
        --m3e-vibrant-menu-item-disabled-color,
        ${t.color.onTertiaryContainer}
      );
    }
    :host([variant="standard"]) {
      background-color: var(--m3e-menu-container-color, ${t.color.surfaceContainer});
    }
    @starting-style {
      :host(:popover-open) {
        opacity: 0;
      }
      :host(:not([submenu]):popover-open) {
        transform: scaleY(0.8);
      }
    }
    @media (prefers-reduced-motion) {
      :host(:not(.-no-animate)) {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      :host {
        background-color: Menu;
        color: MenuText;
        outline: 1px solid MenuText;
      }
    }
  `,d([p({attribute:"position-x"})],ht.prototype,"positionX",2),d([p({attribute:"position-y"})],ht.prototype,"positionY",2),d([p({reflect:!0})],ht.prototype,"variant",2),d([p({type:Boolean,reflect:!0})],ht.prototype,"submenu",2),ht=d([y("m3e-menu")],ht);var rd,id,ad,nd,ls,wo,Ag,_g,Ig,zg,Og,Dg,Qa=class extends po(M(tr,"menuitemcheckbox")){constructor(){super(...arguments);m(this,wo);m(this,rd,e=>c(this,wo,Ig).call(this,e));m(this,id,e=>c(this,wo,zg).call(this,e));m(this,ad,()=>c(this,wo,Og).call(this));m(this,nd,()=>c(this,wo,Dg).call(this));m(this,ls,!1)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,rd)),this.addEventListener("keydown",s(this,id)),this.addEventListener("keyup",s(this,ad)),this.addEventListener("mouseenter",s(this,nd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,rd)),this.removeEventListener("keydown",s(this,id)),this.removeEventListener("keyup",s(this,ad)),this.removeEventListener("mouseenter",s(this,nd))}_renderContent(){return f` <div class="icon">
        <svg class="check" viewBox="0 -960 960 960" aria-hidden="true">
          <path fill="currentColor" d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        <slot name="icon" @slotchange="${c(this,wo,Ag)}"></slot>
      </div>
      <slot></slot>
      <slot name="trailing-icon" aria-hidden="true" @slotchange="${c(this,wo,_g)}"></slot>`}};rd=new WeakMap,id=new WeakMap,ad=new WeakMap,nd=new WeakMap,ls=new WeakMap,wo=new WeakSet,Ag=function(e){this.classList.toggle("-with-icon",J(e.target))},_g=function(e){this.classList.toggle("-with-trailing-icon",J(e.target))},Ig=function(e){e.defaultPrevented||(this.checked=!this.checked,this.performUpdate(),s(this,ls)||(Me()?this.menu?.hideAll(!0):setTimeout(()=>this.menu?.hideAll(!0),150)))},zg=function(e){g(this,ls,e.key===" ")},Og=function(){g(this,ls,!1)},Dg=function(){this.menu?.items.forEach(e=>{e instanceof zo&&e.submenu?.isOpen&&e.submenu.hide()})},Qa.styles=[tr.styles,b`
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: margin-inline-start ${t.motion.spring.fastEffects};
      }
      :host(:not(.-with-icon)) .icon {
        margin-inline-start: calc(0px - var(--m3e-menu-item-icon-label-space, 0.75rem));
      }
      .check {
        width: 1em;
        font-size: var(--m3e-menu-item-icon-size, 1.25rem) !important;
      }
      :host(:not([checked])) .check {
        display: none;
      }
      :host([checked]) .icon {
        margin-inline-start: 0;
      }
      :host([checked]) ::slotted([slot="icon"]) {
        display: none !important;
      }
      @media (prefers-reduced-motion) {
        .icon {
          transition: none;
        }
      }
    `],Qa=d([y("m3e-menu-item-checkbox")],Qa);var sd=class extends M(k,"group"){render(){return f`<slot></slot>`}};sd.styles=b`
    :host {
      display: contents;
    }
  `,sd=d([y("m3e-menu-item-group")],sd);var cd,dd,hd,md,cs,Lo,Fg,Vg,Bg,Ng,qg,Wg,ld=class extends po(M(tr,"menuitemradio")){constructor(){super(...arguments);m(this,Lo);m(this,cd,e=>c(this,Lo,Bg).call(this,e));m(this,dd,e=>c(this,Lo,Ng).call(this,e));m(this,hd,()=>c(this,Lo,qg).call(this));m(this,md,()=>c(this,Lo,Wg).call(this));m(this,cs,!1)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,cd)),this.addEventListener("keydown",s(this,dd)),this.addEventListener("keyup",s(this,hd)),this.addEventListener("mouseenter",s(this,md))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,cd)),this.removeEventListener("keydown",s(this,dd)),this.removeEventListener("keyup",s(this,hd)),this.removeEventListener("mouseenter",s(this,md))}update(e){super.update(e),e.has("checked")&&this.checked&&(this.closest("[role='group']")??this.closest("m3e-menu"))?.querySelectorAll("m3e-menu-item-radio").forEach(i=>{i!==this&&i.checked&&(i.checked=!1)})}_renderContent(){return f` <div class="icon">
        <svg class="check" viewBox="0 -960 960 960" aria-hidden="true">
          <path fill="currentColor" d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        <slot name="icon" @slotchange="${c(this,Lo,Fg)}"></slot>
      </div>
      <slot></slot>
      <slot name="trailing-icon" aria-hidden="true" @slotchange="${c(this,Lo,Vg)}"></slot>`}};cd=new WeakMap,dd=new WeakMap,hd=new WeakMap,md=new WeakMap,cs=new WeakMap,Lo=new WeakSet,Fg=function(e){this.classList.toggle("-with-icon",J(e.target))},Vg=function(e){this.classList.toggle("-with-trailing-icon",J(e.target))},Bg=function(e){e.defaultPrevented||(this.checked=!0,this.performUpdate(),s(this,cs)||(Me()?this.menu?.hideAll(!0):setTimeout(()=>this.menu?.hideAll(!0),150)))},Ng=function(e){g(this,cs,e.key===" ")},qg=function(){g(this,cs,!1)},Wg=function(){this.menu?.items.forEach(e=>{e instanceof zo&&e.submenu?.isOpen&&e.submenu.hide()})},ld.styles=Qa.styles,ld=d([y("m3e-menu-item-radio")],ld);var Ug,Gg,ds,hs,jg,Kg,Si=class extends(Gg=M(k,"navigation"),Ug=E,Gg){constructor(){super(...arguments);m(this,hs);this[Ug]=new rt().disableRovingTabIndex();m(this,ds);this.mode="compact"}get items(){return this[E].items}get selected(){return this[E].selectedItems[0]??null}get currentMode(){return this._mode??(this.mode!=="compact"?"expanded":"compact")}set currentMode(e){this._mode=e}disconnectedCallback(){var e;super.disconnectedCallback(),this._mode=void 0,(e=s(this,ds))==null||e.call(this)}update(e){var i;super.update(e),e.has("mode")&&((i=s(this,ds))==null||i.call(this),this.mode==="auto"?g(this,ds,bi.observe(["(max-width: 599.98px)","(min-width: 600px) and (max-width: 959.98px)"],n=>{this._mode=n.get("(max-width: 599.98px)")||n.get("(min-width: 600px) and (max-width: 959.98px)")?"compact":"expanded",this._updateItems()})):(this._mode=void 0,this._updateItems())),e.has("_mode")&&this._updateItems()}render(){return f`<div class="base">
      <slot @change="${c(this,hs,Kg)}" @slotchange="${c(this,hs,jg)}"></slot>
    </div>`}_updateItems(){let e=this.currentMode==="compact"?"vertical":"horizontal";this._updateOrientation(e),this.classList.toggle("-compact",e==="vertical")}_updateOrientation(e){this[E].items.forEach(i=>i.orientation=e)}};ds=new WeakMap,hs=new WeakSet,jg=function(){this[E].setItems([...this.querySelectorAll("m3e-nav-item")]),this._updateItems()},Kg=function(e){e.stopPropagation(),this.dispatchEvent(new Event("change",{bubbles:!0}))},Si.styles=b`
    :host {
      display: block;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: ${t.scrollbar.thinWidth};
      scrollbar-color: ${t.scrollbar.color};
      min-height: var(--m3e-nav-bar-height, 4rem);
    }
    .base {
      display: flex;
      align-items: stretch;
      justify-content: center;
      box-sizing: border-box;
      min-height: inherit;
      height: inherit;
      width: 100%;
      background-color: var(--m3e-nav-bar-container-color, ${t.color.surfaceContainer});
      --_nav-item-min-width: var(--m3e-nav-bar-vertical-item-width, 7rem);
    }
  `,d([ie()],Si.prototype,"_mode",2),d([p({reflect:!0})],Si.prototype,"mode",2),Si=d([y("m3e-nav-bar")],Si);var ud,Im,Zg,ki=class extends Fe(Vt(de(ae(gt(N(D(M(k,"button"),!0))))))){constructor(){super(...arguments);m(this,Im);m(this,ud,e=>c(this,Im,Zg).call(this,e));this.orientation="vertical"}get navBar(){return this.closest("m3e-nav-bar")??this.closest("m3e-nav-rail")??null}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,ud),{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,ud),{capture:!0})}update(e){if(super.update(e),e.has("selected")){this.ariaSelected=null,this.ariaPressed=null,this.ariaCurrent=`${this.selected}`;for(let i of this.querySelectorAll("m3e-icon"))i.toggleAttribute("filled",this.selected);this.navBar?.[E].notifySelectionChange(this)}}updated(e){super.updated(e),e.has("orientation")&&this._focusRing?.attach(this)}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}render(){let e=this.disabled||this.disabledInteractive;return f`${this.orientation==="vertical"?f`<m3e-focus-ring class="focus-ring" inward></m3e-focus-ring>`:R}
      <div class="outer">
        ${this[st]()}
        <div class="inner">
          ${this.orientation==="horizontal"?f`<m3e-focus-ring class="focus-ring"></m3e-focus-ring>`:R}
          <m3e-state-layer class="state-layer" ?disabled="${e}"></m3e-state-layer>
          <m3e-ripple class="ripple" centered ?disabled="${e}"></m3e-ripple>
          <div class="touch" aria-hidden="true"></div>
          <div class="base">
            <div class="icon-wrapper" aria-hidden="true">
              <div class="icon">
                <slot name="icon" aria-hidden="true"></slot>
              </div>
            </div>
            <div class="label">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>`}};ud=new WeakMap,Im=new WeakSet,Zg=function(e){e.defaultPrevented||(this.selected=!0,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?(this.navBar?.[E].notifySelectionChange(this),this.dispatchEvent(new Event("change",{bubbles:!0}))):this.selected=!1)},ki.styles=b`
    :host {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      outline: none;
      user-select: none;
      flex: 1;
      font-size: var(--m3e-nav-item-label-text-font-size, ${t.typescale.standard.label.medium.fontSize});
      font-weight: var(
        --m3e-nav-item-label-text-font-weight,
        ${t.typescale.standard.label.medium.fontWeight}
      );
      line-height: var(
        --m3e-nav-item-label-text-line-height,
        ${t.typescale.standard.label.medium.lineHeight}
      );
      letter-spacing: var(--m3e-nav-item-label-text-tracking, ${t.typescale.standard.label.medium.tracking});
      border-radius: var(--m3e-nav-item-shape, ${t.shape.corner.full});
      min-width: var(--_nav-item-min-width);
      align-self: var(--_nav-item-align-self);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    :host([orientation="horizontal"]) {
      max-width: fit-content;
    }
    :host(:not(:disabled):not([disabled-interactive])) {
      cursor: pointer;
    }
    :host([disabled-interactive]) {
      cursor: not-allowed;
    }
    .outer {
      height: 100%;
    }
    .outer,
    .inner {
      display: flex;
      align-items: center;
      justify-content: var(--_nav-item-justify-content, center);
      position: relative;
      border-radius: inherit;
    }
    .icon-wrapper {
      position: relative;
      flex: none;
    }
    .base {
      justify-content: unset;
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
    }
    .icon {
      position: absolute;
    }
    .label {
      vertical-align: middle;
    }
    ::slotted([slot="icon"]),
    ::slotted([slot="selected-icon"]) {
      width: 1em;
      font-size: var(--m3e-nav-item-icon-size, 1.5rem) !important;
    }
    :host(:not([selected]):not(:disabled):not([disabled-interactive])) .outer {
      --m3e-state-layer-hover-color: var(
        --m3e-nav-item-inactive-hover-state-layer-color,
        ${t.color.onSecondaryContainer}
      );
      --m3e-state-layer-focus-color: var(
        --m3e-nav-item-inactive-focus-state-layer-color,
        ${t.color.onSecondaryContainer}
      );
      --m3e-ripple-color: var(
        --m3e-nav-item-inactive-pressed-state-layer-color,
        ${t.color.onSecondaryContainer}
      );
    }
    :host(:not([selected]):not(:disabled):not([disabled-interactive])) .label {
      color: var(--m3e-nav-item-inactive-label-text-color, ${t.color.onSurfaceVariant});
    }
    :host(:not([selected]):not(:disabled):not([disabled-interactive])) .icon {
      color: var(--m3e-nav-item-inactive-icon-color, ${t.color.onSecondaryContainer});
    }
    :host([selected]:not(:disabled):not([disabled-interactive])) .outer {
      --m3e-state-layer-hover-color: var(
        --m3e-nav-item-active-hover-state-layer-color,
        ${t.color.onSecondaryContainer}
      );
      --m3e-state-layer-focus-color: var(
        --m3e-nav-item-active-focus-state-layer-color,
        ${t.color.onSecondaryContainer}
      );
      --m3e-ripple-color: var(
        --m3e-nav-item-active-pressed-state-layer-color,
        ${t.color.onSecondaryContainer}
      );
    }
    :host([selected]:not(:disabled):not([disabled-interactive])) .label {
      color: var(--m3e-nav-item-active-label-text-color, ${t.color.secondary});
    }
    :host([selected]:not(:disabled):not([disabled-interactive])) .state-layer {
      background-color: var(--m3e-nav-item-active-container-color, ${t.color.secondaryContainer});
    }
    :host([selected]:not(:disabled):not([disabled-interactive])) .icon {
      color: var(--m3e-nav-item-active-icon-color, ${t.color.onSecondaryContainer});
    }
    :host([orientation="vertical"]) .outer {
      align-self: stretch;
      align-items: flex-start;
    }
    :host([orientation="vertical"]) .label {
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-clamp: 2;
    }
    :host([orientation="vertical"]) .base {
      flex-direction: column;
      row-gap: var(--m3e-nav-item-spacing, 0.25rem);
    }
    :host([orientation="vertical"]) .base {
      margin-block: var(--m3e-vertical-nav-item-active-indicator-margin, 0.375rem);
    }
    :host([orientation="vertical"]) .state-layer,
    :host([orientation="vertical"]) .ripple {
      top: var(--m3e-vertical-nav-item-active-indicator-margin, 0.375rem);
      bottom: unset;
    }
    :host([orientation="vertical"]) .state-layer,
    :host([orientation="vertical"]) .ripple,
    :host([orientation="vertical"]) .icon-wrapper {
      width: var(--m3e-vertical-nav-item-active-indicator-width, 3.5rem);
    }
    :host([orientation="vertical"]) .state-layer,
    :host([orientation="vertical"]) .ripple,
    :host([orientation="vertical"]) .icon-wrapper {
      height: var(--m3e-vertical-nav-item-active-indicator-height, 2rem);
    }
    :host([orientation="vertical"]) .icon {
      top: calc(
        calc(var(--m3e-vertical-nav-item-active-indicator-height, 2rem) / 2) - calc(
            var(--m3e-nav-item-icon-size, 1.5rem) / 2
          )
      );
      left: calc(
        calc(var(--m3e-vertical-nav-item-active-indicator-width, 3.5rem) / 2) - calc(
            var(--m3e-nav-item-icon-size, 1.5rem) / 2
          )
      );
    }
    :host([orientation="vertical"]) .focus-ring {
      border-radius: var(--m3e-nav-item-focus-ring-shape, ${t.shape.corner.medium});
    }
    :host([orientation="horizontal"]) .icon-wrapper {
      width: var(--m3e-nav-item-icon-size, 1.5rem);
      height: var(--m3e-nav-item-icon-size, 1.5rem);
    }
    :host([orientation="horizontal"]) .base {
      padding: var(--m3e-horizontal-nav-item-padding, 1rem);
    }
    :host([orientation="horizontal"]) .label {
      flex: 1 1 auto;
    }
    :host([orientation="horizontal"]) .base {
      column-gap: var(--m3e-nav-item-spacing, 0.25rem);
    }
    :host([orientation="horizontal"]) .inner {
      height: var(--m3e-horizontal-nav-item-active-indicator-height, 2.5rem);
      width: fit-content;
    }
    .state-layer,
    .ripple {
      margin-inline: auto;
    }
    :host(:disabled) .label,
    :host([disabled-interactive]) .label {
      color: color-mix(
        in srgb,
        var(--m3e-nav-item-disabled-label-text-color, ${t.color.onSurface})
          var(--m3e-nav-item-disabled-label-text-opacity, 38%),
        transparent
      );
    }
    :host(:disabled) .icon,
    :host([disabled-interactive]) .icon {
      color: color-mix(
        in srgb,
        var(--m3e-nav-item-disabled-icon-color, ${t.color.onSurface})
          var(--m3e-nav-item-disabled-icon-opacity, 38%),
        transparent
      );
    }
    a {
      all: unset;
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 1;
    }
    @media (forced-colors: active) {
      :host(:disabled) .label,
      :host([disabled-interactive]) .label,
      :host(:disabled) .icon,
      :host([disabled-interactive]) .icon {
        color: GrayText;
      }
      :host(:not([selected]):not(:disabled):not([disabled-interactive])) .label,
      :host(:not([selected]):not(:disabled):not([disabled-interactive])) .icon {
        color: ButtonText;
      }
      :host([selected]:not(:disabled):not([disabled-interactive])) .state-layer {
        background-color: ButtonText;
      }
      :host([orientation="vertical"][selected]:not(:disabled):not([disabled-interactive])) .label {
        color: ButtonText;
      }
      :host([orientation="horizontal"][selected]:not(:disabled):not([disabled-interactive])) .label,
      :host([selected]:not(:disabled):not([disabled-interactive])) .icon {
        forced-color-adjust: none;
        color: ButtonFace;
      }
    }
  `,d([L(".focus-ring")],ki.prototype,"_focusRing",2),d([L(".state-layer")],ki.prototype,"_stateLayer",2),d([L(".ripple")],ki.prototype,"_ripple",2),d([p({reflect:!0})],ki.prototype,"orientation",2),ki=d([y("m3e-nav-item")],ki);var la,ms,Eo,en,kt,Xg,Dp,Yg,Jg,Qg,pd,oo=class extends Vt(N(vo(D(M(k,"treeitem"),!0),"opening","opened","closing","closed"))){constructor(){super(...arguments);m(this,kt);this._hasChildItems=!1;m(this,la,[]);m(this,ms,null);m(this,Eo,new Array);m(this,en,null);this.open=!1}get link(){return s(this,en)}get label(){return this._base??null}get visible(){return!s(this,Eo).some(e=>!e.open)}get path(){return[...s(this,Eo),this]}get hasChildItems(){return this._hasChildItems}get parentItem(){return s(this,Eo)[s(this,Eo).length-1]??null}get childItems(){return s(this,la)}get level(){return s(this,Eo).length+1}expand(e=!1){this.hasChildItems&&(this.open=!0,e&&this.childItems.forEach(i=>i.expand(!0)))}collapse(e=!1){this.hasChildItems&&(this.open=!1,e&&this.childItems.forEach(i=>i.collapse(!0)))}toggle(){this.hasChildItems&&(this.open=!this.open)}connectedCallback(){super.connectedCallback(),s(this,Eo).length=0;for(let e=this.parentElement?.closest("m3e-nav-menu-item");e;e=e.parentElement?.closest("m3e-nav-menu-item"))s(this,Eo).push(e);s(this,Eo).reverse(),this.style.setProperty("--_nav-menu-item-level",`${this.level}`),g(this,ms,this.closest("m3e-nav-menu"))}disconnectedCallback(){super.disconnectedCallback(),s(this,Eo).length=0}update(e){if(super.update(e),e.has("selected")){this.ariaSelected=null,this.ariaCurrent=this.hasChildItems?null:`${this.selected}`;for(let i of this.querySelectorAll(":scope > m3e-icon[slot]"))i.toggleAttribute("filled",this.selected);s(this,Eo).forEach(i=>i.selected=this.selected),this.selected&&!this.hasChildItems&&this.closest("m3e-nav-menu")?.[E].notifySelectionChange(this)}(e.has("open")||e.has("_hasChildItems"))&&(this.ariaExpanded=this._hasChildItems?`${this.open}`:null),(e.has("_hasChildItems")&&this.disabled||e.has("disabled"))&&s(this,la).forEach(i=>i.disabled=this.disabled)}firstUpdated(e){super.firstUpdated(e);let i=this._base;i&&[this.focusRing,this.stateLayer,this.ripple].forEach(n=>n?.attach(i))}render(){return f`<div class="base" @click="${c(this,kt,Qg)}">
        <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
        <m3e-focus-ring class="focus-ring" inward ?disabled="${this.disabled}"></m3e-focus-ring>
        <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
        <div class="icon" aria-hidden="true">${c(this,kt,Xg).call(this)}</div>
        <div class="label">
          <slot name="label" @slotchange="${c(this,kt,Yg)}"></slot>
        </div>
        <slot name="badge"></slot>
        <div aria-hidden="true" class="toggle">
          <slot name="toggle-icon">
            <svg class="toggle-icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </slot>
        </div>
      </div>
      <m3e-collapsible
        class="group"
        role="group"
        aria-hidden="${$e(this._hasChildItems?void 0:"true")}"
        ?open="${this._hasChildItems&&this.open}"
        @opening="${c(this,kt,pd)}"
        @opened="${c(this,kt,pd)}"
        @closing="${c(this,kt,pd)}"
        @closed="${c(this,kt,pd)}"
      >
        <slot @slotchange="${c(this,kt,Jg)}"></slot>
      </m3e-collapsible>`}};la=new WeakMap,ms=new WeakMap,Eo=new WeakMap,en=new WeakMap,kt=new WeakSet,Xg=function(){let e=f`<slot name="icon" @slotchange="${c(this,kt,Dp)}"></slot>`;return this.selected&&!this.hasChildItems?f`<slot name="selected-icon" @slotchange="${c(this,kt,Dp)}">${e}</slot>`:e},Dp=function(e){this.classList.toggle("-with-icon",J(e.target))},Yg=function(e){g(this,en,e.target.assignedElements({flatten:!0}).find(i=>i instanceof HTMLAnchorElement)??null),s(this,en)?.setAttribute("tabindex","-1")},Jg=function(e){g(this,la,e.target.assignedElements({flatten:!0}).filter(n=>n instanceof oo));let i=this._hasChildItems;this._hasChildItems=s(this,la).length>0,this.classList.toggle("-has-items",this._hasChildItems),(i||this._hasChildItems)&&(this.selected=s(this,la).some(n=>n.selected))},Qg=function(){if(!this.disabled)if(s(this,ms)?.[E].setActiveItem(this),this._hasChildItems)this.toggle();else{s(this,ms)?.[E].select(this),s(this,Eo).forEach(i=>i.selected=this.selected),s(this,en)?.click();let e=this.closest("m3e-drawer-container");if(e){let i=this.closest("[slot='start']")??this.closest("[slot='end')");i&&(e.classList.contains(`-${i.slot}-push`)||e.classList.contains(`-${i.slot}-over`))&&setTimeout(()=>{e.removeAttribute(i.slot),e.dispatchEvent(new Event("change",{bubbles:!0}))},300)}}},pd=function(e){e.stopPropagation(),this.dispatchEvent(new Event(e.type,{bubbles:!0}))},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-nav-menu-item > m3e-divider {
            margin-block: var(--m3e-nav-menu-divider-margin, 0.25rem);
            flex: none;
          }
          m3e-nav-menu-item > m3e-nav-menu-item:first-of-type {
            margin-block-start: var(--m3e-nav-menu-item-vertical-inset, 0.25rem);
          }
          m3e-nav-menu-item > m3e-nav-menu-item:last-of-type {
            margin-block-end: var(--m3e-nav-menu-item-vertical-inset, 0.25rem);
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),oo.styles=b`
    :host {
      display: block;
      flex: none;
      outline: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .base {
      display: flex;
      align-items: center;
      position: relative;
      padding-inline: var(--m3e-nav-menu-item-padding, 1.5rem);
      height: calc(var(--m3e-nav-menu-item-height, 3.5rem) + ${t.density.calc(-3)});
      column-gap: var(--m3e-nav-menu-item-spacing, 0.75rem);
      font-size: var(--m3e-nav-menu-item-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(--m3e-nav-menu-item-font-weight, ${t.typescale.standard.label.large.fontWeight});
      line-height: var(--m3e-nav-menu-item-line-height, ${t.typescale.standard.label.large.lineHeight});
      letter-spacing: var(--m3e-nav-menu-item-tracking, ${t.typescale.standard.label.large.tracking});
      transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard},
        background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    .base,
    .focus-ring {
      border-radius: var(--m3e-nav-menu-item-shape, ${t.shape.corner.full});
    }
    .label {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      vertical-align: middle;
    }
    .icon,
    .toggle {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;
    }
    ::slotted([slot="badge"]) {
      flex: none;
      position: relative;
      font-size: var(--m3e-nav-menu-item-badge-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(--m3e-nav-menu-item-badge-font-weight, ${t.typescale.standard.label.large.fontWeight});
      line-height: var(--m3e-nav-menu-item-badge-line-height, ${t.typescale.standard.label.large.lineHeight});
      letter-spacing: var(--m3e-nav-menu-item-badge-tracking, ${t.typescale.standard.label.large.tracking});
    }
    .toggle {
      transition: ${r(`transform var(--m3e-collapsible-animation-duration, ${t.motion.duration.medium1})
        ${t.motion.easing.standard}`)};
    }
    :host(:not(.-with-icon)) .icon {
      display: none;
    }
    .icon {
      margin-inline-start: -0.5rem;
    }
    .toggle {
      margin-inline-end: -0.5rem;
    }
    .group {
      padding-inline-start: var(--m3e-nav-menu-item-inset, 1rem);
    }
    :host([open]) .toggle {
      transform: rotate(180deg);
    }
    :host(:not(.-has-items)) .toggle,
    :host(:not(.-has-items)) .group {
      display: none;
    }
    ::slotted([slot="selected-icon"]),
    ::slotted([slot="icon"]),
    ::slotted([slot="toggle-icon"]),
    .toggle-icon {
      vertical-align: middle;
      width: 1em;
      height: 1em;
      font-size: var(--m3e-nav-menu-item-icon-size, 1.5rem);
    }
    :host(:not(:disabled)) .base {
      cursor: pointer;
    }
    :host(:not(:disabled)) .base {
      color: var(--m3e-nav-menu-item-label-color, ${t.color.onSurfaceVariant});
    }
    :host(:disabled) .base {
      color: color-mix(
        in srgb,
        var(--m3e-nav-menu-item-disabled-color, ${t.color.onSurface})
          var(--m3e-nav-menu-item-disabled-color-opacity, 38%),
        transparent
      );
    }
    :host([selected]:not(.-has-items):not(:disabled)) .base {
      color: var(--m3e-nav-menu-item-selected-label-color, ${t.color.onSecondaryContainer});
      background-color: var(--m3e-nav-menu-item-selected-container-color, ${t.color.secondaryContainer});
      --m3e-state-layer-focus-color: var(
        --m3e-nav-menu-item-selected-container-focus-color,
        ${t.color.onSecondaryContainer}
      );
      --m3e-state-layer-hover-color: var(
        --m3e-nav-menu-item-selected-container-hover-color,
        ${t.color.onSecondaryContainer}
      );
      --m3e-ripple-color: var(--m3e-nav-menu-item-selected-ripple-color, ${t.color.onSecondaryContainer});
    }
    :host(:not([selected]):not(.-has-items):not(:disabled)) .base {
      --m3e-state-layer-focus-color: var(
        --m3e-nav-menu-item-unselected-container-focus-color,
        ${t.color.onSurface}
      );
      --m3e-state-layer-hover-color: var(
        --m3e-nav-menu-item-unselected-container-hover-color,
        ${t.color.onSurface}
      );
      --m3e-ripple-color: var(--m3e-nav-menu-item-unselected-ripple-color, ${t.color.onSurface});
    }
    .state-layer {
      margin-inline: auto;
    }
    :host([selected].-has-items:not(:disabled)) .base {
      background-color: var(--m3e-nav-menu-item-open-container-color, ${t.color.surfaceContainerHighest});
      --m3e-state-layer-focus-color: var(
        --m3e-nav-menu-item-open-container-focus-color,
        ${t.color.onSurface}
      );
      --m3e-state-layer-hover-color: var(
        --m3e-nav-menu-item-open-container-hover-color,
        ${t.color.onSurface}
      );
      --m3e-ripple-color: var(--m3e-nav-menu-item-open-ripple-color, ${t.color.onSurface});
    }
    ::slotted(a[slot="label"]) {
      all: unset;
    }
    @media (prefers-reduced-motion) {
      .base,
      .toggle,
      .state-layer {
        transition: none !important;
      }
    }
    @media (forced-colors: active) {
      .base,
      .state-layer {
        transition: none !important;
      }

      :host(:disabled) .base {
        color: GrayText;
      }
      :host(:not([selected]):not(:disabled)) .base {
        color: ButtonText;
      }
      :host([selected]:not(.-has-items):not(:disabled)) .base {
        forced-color-adjust: none;
        color: ButtonFace;
        background-color: ButtonText;
      }
      :host([selected].-has-items:not(:disabled)) .base {
        background-color: unset;
        color: ButtonText;
      }
    }
  `,d([L(".state-layer")],oo.prototype,"stateLayer",2),d([L(".focus-ring")],oo.prototype,"focusRing",2),d([L(".ripple")],oo.prototype,"ripple",2),d([L(".base")],oo.prototype,"_base",2),d([ie()],oo.prototype,"_hasChildItems",2),d([p({type:Boolean,reflect:!0})],oo.prototype,"open",2),oo=d([y("m3e-nav-menu-item")],oo);var ey,ty,tn,fd,bd,gd,yd,Xe,oy,ry,iy,ay,ny,vd,zm,ca=class extends(ty=M(k,"tree"),ey=E,ty){constructor(){super();m(this,Xe);m(this,tn,!1);m(this,fd,!1);this[ey]=new rt().withVerticalOrientation().withHomeAndEnd().withTypeahead().withSkipPredicate(e=>e.disabled||!e.visible).disableRovingTabIndex().onActiveItemChange(()=>{this[E].activeItem&&c(this,Xe,ny).call(this,this[E].activeItem)}).onSelectedItemsChange(()=>{let e=this.selected;for(let i of this.items)i!==e&&c(this,Xe,zm).call(this,i,!1,!1);e?.label&&Wo(e.label,this,{block:"start",behavior:"smooth"})});m(this,bd,e=>c(this,Xe,ry).call(this,e));m(this,gd,e=>c(this,Xe,iy).call(this,e));m(this,yd,e=>c(this,Xe,ay).call(this,e));new ue(this,{callback:e=>g(this,fd,e)}),new ze(this,{callback:()=>{s(this,fd)||c(this,Xe,vd).call(this)}})}get selected(){return this[E].selectedItems[0]??null}get items(){return this[E].items}expand(e){(e??this[E].items).forEach(i=>i.expand())}collapse(e){(e??this[E].items).forEach(n=>n.collapse());let i=this[E].activeItem;if(i&&!i.visible){for(let n=i.parentItem;n;n=n.parentItem)if(n.visible){this[E].setActiveItem(n);break}}}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("keydown",s(this,bd)),this.addEventListener("keyup",s(this,gd)),this.addEventListener("pointerdown",s(this,yd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",s(this,bd)),this.removeEventListener("keyup",s(this,gd)),this.removeEventListener("pointerdown",s(this,yd))}render(){return f`<div class="base">
      <slot @slotchange="${c(this,Xe,oy)}"></slot>
    </div>`}};tn=new WeakMap,fd=new WeakMap,bd=new WeakMap,gd=new WeakMap,yd=new WeakMap,Xe=new WeakSet,oy=function(){for(let i of this.querySelectorAll("m3e-divider"))i.ariaHidden="true";let{added:e}=this[E].setItems([...this.querySelectorAll("m3e-nav-menu-item")]);for(let i of e)i.id=i.id||`m3e-nav-menu-item-${ca.__nextId++}`;this[E].activeItem?(this.setAttribute("aria-activedescendant",this[E].activeItem.id),c(this,Xe,vd).call(this)):this.removeAttribute("aria-activedescendant")},ry=function(e){g(this,tn,!1),c(this,Xe,vd).call(this);let i=this[E].activeItem;if(!(e.defaultPrevented||!i||i.disabled))switch(e.key){case"Enter":case" ":e.preventDefault(),e.key===" "&&i.ripple&&!i.ripple.visible&&i.ripple.show(0,0,!0),i.hasChildItems?i.toggle():i.selected||(this[E].select(i),i.link?.click());break;case"*":e.preventDefault(),i.expand(!0);break;case"Left":case"ArrowLeft":if(e.preventDefault(),O.current==="ltr")if(i.hasChildItems&&i.open)i.collapse();else{let n=i.parentItem;n&&(n.collapse(),this[E].setActiveItem(n))}else i.hasChildItems&&!i.open&&i.expand();break;case"Right":case"ArrowRight":if(e.preventDefault(),O.current==="rtl")if(i.hasChildItems&&i.open)i.collapse();else{let n=i.parentItem;n&&(n.collapse(),this[E].setActiveItem(n))}else i.hasChildItems&&!i.open&&i.expand();break;default:this[E].onKeyDown(e);break}},iy=function(e){let i=this[E].activeItem;!e.defaultPrevented&&i&&!i.disabled&&e.key===" "&&i.ripple?.hide()},ay=function(e){if(!e.defaultPrevented&&!s(this,tn)){g(this,tn,!0);let i=e.composedPath().reverse().find(n=>n instanceof oo);i&&!i.disabled&&c(this,Xe,zm).call(this,i,!0,!1)}},ny=function(e){this.setAttribute("aria-activedescendant",e.id),e.label&&Wo(e.label,this,{block:"nearest",behavior:"smooth"}),c(this,Xe,vd).call(this)},vd=function(){let e=this.matches(":focus")||this.matches(":focus-within"),i=!s(this,tn)&&this.matches(":focus-visible");this[E].items.forEach(n=>{let l=n===this[E].activeItem;c(this,Xe,zm).call(this,n,l&&e,l&&i)})},zm=function(e,i,n){i&&n?e.stateLayer?.show("focused"):e.stateLayer?.hide("focused"),n?e.focusRing?.show():e.focusRing?.hide()},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-nav-menu > m3e-divider {
            margin-block: var(--m3e-nav-menu-divider-margin, 0.25rem);
            flex: none;
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),ca.styles=b`
    :host {
      display: block;
      outline: none;
      overflow-y: auto;
      overflow-x: hidden;
      min-height: 0;
      scrollbar-width: ${t.scrollbar.width};
      scrollbar-color: ${t.scrollbar.color};
    }
    .base {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      min-height: inherit;
      box-sizing: border-box;
      padding-block-start: var(--m3e-nav-menu-padding-top, 0.5rem);
      padding-block-end: var(--m3e-nav-menu-padding-bottom, 0.5rem);
      padding-inline-start: var(--m3e-nav-menu-padding-left, 0.75rem);
      padding-inline-end: var(--m3e-nav-menu-padding-right, 0.75rem);
    }
  `,ca.__nextId=0,ca=d([y("m3e-nav-menu")],ca);var xd,or,Om,sy,da=class extends M(k,"group"){constructor(){super(...arguments);m(this,Om);m(this,xd,`m3e-nav-menu-item-group-label-${da.__nextId++}`);m(this,or)}connectedCallback(){super.connectedCallback(),this.classList.toggle("-divided",this.previousElementSibling?.tagName==="M3E-DIVIDER")}disconnectedCallback(){super.disconnectedCallback(),this.classList.remove("-divided")}render(){return f`<div class="label">
        <slot name="label" @slotchange="${c(this,Om,sy)}"></slot>
      </div>
      <slot></slot>`}};xd=new WeakMap,or=new WeakMap,Om=new WeakSet,sy=function(e){let i=e.target.assignedElements({flatten:!0})[0];i!==s(this,or)&&(s(this,or)?.id===s(this,xd)&&(s(this,or).id=""),g(this,or,i),s(this,or)?(s(this,or).id=s(this,or).id||s(this,xd),this.setAttribute("aria-labelledby",s(this,or).id)):this.removeAttribute("aria-labelledby")),this.classList.toggle("-has-label",s(this,or)!==void 0)},da.styles=b`
    :host {
      display: contents;
    }
    :host(:not(.-has-label)) .label {
      display: none;
    }
    .label {
      margin-inline-start: var(--m3e-nav-menu-item-group-label-inset, 1rem);
      margin-block-end: var(--m3e-nav-menu-item-group-label-space, 1rem);
      flex: none;
    }
    :host(.-divided) .label {
      margin-block-start: calc(
        var(--m3e-nav-menu-item-group-label-space, 1rem) - var(--m3e-nav-menu-divider-margin, 0.25rem)
      );
    }
    :host(:not(.-divided)) .label {
      margin-block-start: var(--m3e-nav-menu-item-group-label-space, 1rem);
    }
  `,da.__nextId=0,da=d([y("m3e-nav-menu-item-group")],da);var ha,Cd,Dm,ly,wi=class extends Si{constructor(){super();m(this,Dm);m(this,ha,new fo().withHomeAndEnd().withWrap());m(this,Cd,e=>c(this,Dm,ly).call(this,e));this[E].onSelectedItemsChange(()=>{s(this,ha).updateActiveItem(this[E].activeItem)})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",s(this,Cd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",s(this,Cd))}_updateItems(){let e=Nt.findInteractiveElements(this),{added:i}=s(this,ha).setItems(e);if(!s(this,ha).activeItem){let n=i.find(l=>!l.hasAttribute("disabled"));n&&s(this,ha).updateActiveItem(n)}super._updateItems()}_updateOrientation(e){super._updateOrientation(e),this.querySelectorAll("m3e-fab").forEach(i=>i.toggleAttribute("extended",e==="horizontal"))}};ha=new WeakMap,Cd=new WeakMap,Dm=new WeakSet,ly=function(e){s(this,ha).onKeyDown(e)},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-nav-rail > m3e-icon-button,
          m3e-nav-rail > m3e-fab {
            margin-block-end: var(--m3e-nav-rail-button-item-space, 1rem);
          }
          m3e-nav-rail:not(.-compact) > m3e-icon-button {
            margin-inline-start: var(--m3e-nav-rail-expanded-icon-button-inset, 0.5rem);
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),wi.styles=b`
    :host {
      display: block;
      overflow-x: hidden;
      overflow-y: auto;
      scrollbar-width: ${t.scrollbar.thinWidth};
      scrollbar-color: ${t.scrollbar.color};
    }
    .base {
      display: flex;
      width: 100%;
      min-width: inherit;
      max-width: inherit;
      flex-direction: column;
      padding-block-start: var(--m3e-nav-rail-top-space, 2.75rem);
      padding-block-end: var(--m3e-nav-rail-bottom-space, 0.5rem);
    }
    :host(.-compact) {
      width: var(--m3e-nav-rail-compact-width, 6rem);
    }
    :host(.-compact) ::slotted(m3e-fab) {
      align-self: center;
    }
    :host(:not(.-compact)) {
      min-width: var(--m3e-nav-rail-expanded-min-width, 13.75rem);
      max-width: var(--m3e-nav-rail-expanded-max-width, 22.5rem);
    }
    :host(:not(.-compact)) .base {
      padding-inline: var(--m3e-nav-rail-expanded-inline-padding, 1.25rem);
      align-items: flex-start;
      --m3e-horizontal-nav-item-active-indicator-height: var(--m3e-nav-rail-expanded-item-height, 3.5rem);
      --_nav-item-align-self: stretch;
      --_nav-item-justify-content: flex-start;
    }
    ::slotted(*) {
      flex: none;
    }
    :host(.-compact) ::slotted(m3e-icon-button) {
      align-self: center;
    }
    ::slotted(m3e-fab) {
      --m3e-fab-container-elevation: ${t.elevation.level0};
      --m3e-fab-disabled-container-elevation: ${t.elevation.level0};
      --m3e-fab-focus-container-elevation: ${t.elevation.level0};
      --m3e-fab-pressed-container-elevation: ${t.elevation.level0};
      --m3e-fab-hover-container-elevation: ${t.elevation.level1};
      --m3e-fab-lowered-container-elevation: ${t.elevation.level0};
      --m3e-fab-lowered-disabled-container-elevation: ${t.elevation.level0};
      --m3e-fab-lowered-focus-container-elevation: ${t.elevation.level0};
      --m3e-fab-lowered-pressed-container-elevation: ${t.elevation.level0};
      --m3e-fab-lowered-hover-container-elevation: ${t.elevation.level1};
    }
  `,wi=d([y("m3e-nav-rail")],wi);var us,$d,Fp,Fm=class extends ce(Ve){constructor(){super(...arguments);m(this,$d);m(this,us,new _r(this,{target:null,config:{attributeFilter:["class"]},callback:()=>c(this,$d,Fp).call(this)}))}attach(e){e instanceof wi&&s(this,us).observe(e),this.htmlFor&&this.parentElement&&je(this.parentElement,"aria-controls",this.htmlFor),super.attach(e),c(this,$d,Fp).call(this)}detach(){for(let e of s(this,us).targets)s(this,us).unobserve(e);this.parentElement&&(this.htmlFor&&xt(this.parentElement,"aria-controls",this.htmlFor),this.parentElement.ariaExpanded=null),super.detach()}_onClick(){this.control instanceof wi&&(this.control.currentMode=this.control.currentMode==="compact"?"expanded":"compact")}};us=new WeakMap,$d=new WeakSet,Fp=async function(){if(!this.parentElement)return;let e=this.control instanceof wi&&this.control.currentMode==="expanded";this.parentElement.ariaExpanded=`${e}`,this.parentElement.hasAttribute("toggle")&&this.parentElement.toggleAttribute("selected",e),this.parentElement instanceof k&&(await this.parentElement.updateComplete,this.parentElement.ariaPressed=null)},Fm=d([y("m3e-nav-rail-toggle")],Fm);var Sd,ps,Vm,cy,Li=class extends Vt(N(M(k,"option"))){constructor(){super(...arguments);m(this,Vm);m(this,Sd);m(this,ps,"")}get value(){return s(this,Sd)??s(this,ps)}set value(e){g(this,Sd,e)}[ep](){return s(this,ps)}get isEmpty(){return this.value===""}connectedCallback(){super.connectedCallback(),[this.focusRing,this.stateLayer,this._ripple].forEach(e=>e?.attach(this))}firstUpdated(e){super.firstUpdated(e),[this.focusRing,this.stateLayer,this._ripple].forEach(i=>i?.attach(this))}update(e){if(super.update(e),e.has("selected")&&this.selected){let i=this.closest("[role='listbox']")??this.closest("m3e-select");i&&i.ariaMultiSelectable!=="true"&&!i.hasAttribute("multi")&&i.querySelectorAll("m3e-option").forEach(n=>{n!==this&&n.selected&&(n.selected=!1)})}}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      <div class="wrapper">
        <div class="icon" aria-hidden="true">
          <svg class="check" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
        </div>
        <m3e-text-overflow class="label"><slot @slotchange="${c(this,Vm,cy)}"></slot></m3e-text-overflow>
      </div>
    </div>`}};Sd=new WeakMap,ps=new WeakMap,Vm=new WeakSet,cy=function(e){g(this,ps,ft(e.target)),this.classList.toggle("-empty",this.isEmpty)},Li.styles=b`
    :host {
      display: block;
      outline: none;
      user-select: none;
      flex: none;
      height: var(--m3e-option-container-height, 2.75rem);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    :host(:not([aria-disabled="true"])) .base {
      color: var(--m3e-option-color, ${t.color.onSurface});
      --m3e-state-layer-hover-color: var(--m3e-option-container-hover-color, ${t.color.onSurface});
      --m3e-state-layer-focus-color: var(--m3e-option-container-focus-color, ${t.color.onSurface});
      --m3e-ripple-color: var(--m3e-option-ripple-color, ${t.color.onSurface});
    }
    :host(:not([aria-disabled="true"]):not(.-empty)[selected]) .base {
      color: var(--m3e-option-selected-color, ${t.color.onTertiaryContainer});
      background-color: var(--m3e-option-selected-container-color, ${t.color.tertiaryContainer});
      --m3e-state-layer-hover-color: var(
        --m3e-option-selected-container-hover-color,
        ${t.color.onTertiaryContainer}
      );
      --m3e-state-layer-focus-color: var(
        --m3e-option-selected-container-focus-color,
        ${t.color.onTertiaryContainer}
      );
      --m3e-ripple-color: var(--m3e-option-selected-ripple-color, ${t.color.onTertiaryContainer});
    }
    :host(:not([aria-disabled="true"])) {
      cursor: pointer;
    }
    :host([aria-disabled="true"]) .base {
      color: color-mix(
        in srgb,
        var(--m3e-option-disabled-color, ${t.color.onSurface}) var(--m3e-option-disabled-opacity, 38%),
        transparent
      );
    }
    .base {
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--m3e-option-shape, ${t.shape.corner.extraSmall});
      transition: ${r(`border-radius ${t.motion.spring.fastEffects}`)};
    }
    :host([selected]:not(.-first)) .base {
      border-top-left-radius: var(--m3e-option-selected-shape, ${t.shape.corner.medium});
      border-top-right-radius: var(--m3e-option-selected-shape, ${t.shape.corner.medium});
    }
    :host([selected]:not(.-last)) .base {
      border-bottom-left-radius: var(--m3e-option-selected-shape, ${t.shape.corner.medium});
      border-bottom-right-radius: var(--m3e-option-selected-shape, ${t.shape.corner.medium});
    }
    :host(.-first) .base {
      border-top-left-radius: var(--m3e-option-first-child-shape, ${t.shape.corner.medium});
      border-top-right-radius: var(--m3e-option-first-child-shape, ${t.shape.corner.medium});
    }
    :host(.-last) .base {
      border-bottom-left-radius: var(--m3e-option-last-child-shape, ${t.shape.corner.medium});
      border-bottom-right-radius: var(--m3e-option-last-child-shape, ${t.shape.corner.medium});
    }
    .touch {
      position: absolute;
      height: 3rem;
      left: 0;
      right: 0;
    }
    .wrapper {
      flex: 1 1 auto;
      display: inline-flex;
      align-items: center;
      width: 100%;
      overflow: hidden;
      column-gap: var(--m3e-option-icon-label-space, 0.5rem);
      padding-inline-start: var(--_option-padding-start, var(--m3e-option-padding-start, 0.75rem));
      padding-inline-end: var(--m3e-option-padding-end, 0.75rem);
      font-size: var(--m3e-option-label-text-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(--m3e-option-label-text-font-weight, ${t.typescale.standard.label.large.fontWeight});
      line-height: var(--m3e-option-label-text-line-height, ${t.typescale.standard.label.large.lineHeight});
      letter-spacing: var(--m3e-option-label-text-tracking, ${t.typescale.standard.label.large.tracking});
    }
    .focus-ring {
      border-radius: var(--m3e-option-focus-ring-shape, inherit);
    }
    .icon {
      margin-inline-start: calc(0px - var(--m3e-option-icon-label-space, 0.5rem));
      transition: ${r(`margin-inline-start ${t.motion.spring.fastEffects}, width ${t.motion.spring.fastEffects}`)};
    }
    :host([selected]) .icon {
      margin-inline-start: 0;
      width: var(--m3e-option-icon-size, 1.25rem);
    }
    .icon {
      flex: none;
      width: 0px;
      font-size: var(--m3e-option-icon-size, 1.25rem);
    }
    :host(.-empty) .icon,
    :host(.-hide-selection-indicator) .icon,
    :host(:not([selected])) .check {
      display: none;
    }
    @media (forced-colors: active) {
      .base {
        background-color: Menu;
        color: MenuText;
      }
      :host([aria-disabled="true"]) .base {
        color: GrayText;
      }
    }
    @media (prefers-reduced-motion) {
      .icon,
      .base {
        transition: none;
      }
    }
  `,d([L(".focus-ring")],Li.prototype,"focusRing",2),d([L(".state-layer")],Li.prototype,"stateLayer",2),d([L(".ripple")],Li.prototype,"_ripple",2),d([p()],Li.prototype,"value",1),Li=d([y("m3e-option")],Li);var kd,Oo,Bm,dy,ma=class extends M(k,"group"){constructor(){super(...arguments);m(this,Bm);m(this,kd,`m3e-optgroup-label-${ma.__nextId++}`);m(this,Oo)}render(){return f`<m3e-text-overflow class="label">
        <slot name="label" @slotchange="${c(this,Bm,dy)}"></slot>
      </m3e-text-overflow>
      <slot></slot>`}};kd=new WeakMap,Oo=new WeakMap,Bm=new WeakSet,dy=function(e){let i=e.target.assignedElements({flatten:!0})[0]??void 0;i!==s(this,Oo)&&(s(this,Oo)?.id&&(xt(this,"aria-labelledby",s(this,Oo).id),s(this,Oo).id===s(this,kd)&&(s(this,Oo).id="")),g(this,Oo,i),s(this,Oo)&&(s(this,Oo).id=s(this,Oo).id||s(this,kd),je(this,"aria-labelledby",s(this,Oo).id)))},ma.styles=b`
    :host {
      display: block;
      --_option-padding-start: calc(var(--m3e-option-padding-start, 0.75rem) * 2);
    }
    .label {
      height: var(--m3e-option-height, 3rem);
      font-size: var(--m3e-option-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(--m3e-option-font-weight, ${t.typescale.standard.label.large.fontWeight});
      line-height: var(--m3e-option-line-height, ${t.typescale.standard.label.large.lineHeight});
      letter-spacing: var(--m3e-option-tracking, ${t.typescale.standard.label.large.tracking});
      padding-inline-end: var(--m3e-option-padding-end, 0.75rem);
      padding-inline-start: var(--m3e-option-padding-start, 0.75rem);
      color: var(--m3e-option-color, ${t.color.onSurface});
      flex: none;
    }
  `,ma.__nextId=0,ma=d([y("m3e-optgroup")],ma);var Ut,wd,vs,Ld,Ed,Td,fs,hy,my,on=class extends M(k,"listbox"){constructor(){super(...arguments);m(this,fs);m(this,Ut);m(this,wd);m(this,vs);m(this,Ld,e=>c(this,fs,my).call(this,e));m(this,Ed,new sr(this,{target:null,callback:()=>this.hide(!1)}));m(this,Td,e=>{var i;e.newState==="closed"&&((i=s(this,vs))==null||i.call(this),g(this,vs,void 0))})}get isOpen(){return s(this,Ut)!==void 0}connectedCallback(){super.connectedCallback(),this.classList.add("-no-animate"),this.setAttribute("popover","manual"),this.addEventListener("toggle",s(this,Td)),document.addEventListener("click",s(this,Ld))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("toggle",s(this,Td)),document.removeEventListener("click",s(this,Ld))}async show(e,i){s(this,Ut)&&s(this,Ut)!==e&&this.hide(),g(this,vs,await qr(this,i??e,{position:"bottom-start",inline:!0,flip:!0},(n,l,h)=>{this.classList.toggle("-top",h.includes("top")),this.classList.toggle("-bottom",h.includes("bottom")),O.current==="rtl"?(this.style.right=`${window.innerWidth-n-this.clientWidth}px`,this.style.left=""):(this.style.left=`${n}px`,this.style.right=""),this.style.top=`${l}px`})),this.showPopover(),g(this,Ut,e),s(this,Ut).ariaExpanded="true",g(this,wd,i),s(this,Ed).observe(s(this,Ut))}hide(e=!1){this.hidePopover(),s(this,Ut)&&(s(this,Ut).ariaExpanded="false",e&&s(this,Ut).focus(),s(this,Ed).unobserve(s(this,Ut)),g(this,Ut,void 0))}async toggle(e,i){s(this,Ut)?this.hide():await this.show(e,i)}firstUpdated(e){super.firstUpdated(e),requestAnimationFrame(()=>this.classList.remove("-no-animate"))}render(){return f`<div class="base"><slot @slotchange="${c(this,fs,hy)}"></slot></div>`}};Ut=new WeakMap,wd=new WeakMap,vs=new WeakMap,Ld=new WeakMap,Ed=new WeakMap,Td=new WeakMap,fs=new WeakSet,hy=function(){let e=[...this.querySelectorAll("m3e-option")];e.forEach((i,n)=>{i.classList.toggle("-first",n===0),i.classList.toggle("-last",n===e.length-1)})},my=function(e){e.composedPath().some(i=>i instanceof on||i===s(this,Ut)||i===s(this,wd))||this.hide()},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-option-panel > m3e-divider {
            margin-block: var(--m3e-option-panel-divider-spacing, 0.5rem);
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),on.styles=b`
    :host {
      position: absolute;
      flex-direction: column;
      padding: unset;
      margin: unset;
      border: unset;
      overflow-y: auto;
      scrollbar-width: ${t.scrollbar.thinWidth};
      scrollbar-color: ${t.scrollbar.color};
      scroll-padding-block: calc(
        var(--m3e-focus-ring-thickness, 3px) + var(--m3e-option-panel-container-padding-block, 0.25rem)
      );
      border-radius: var(--m3e-option-panel-container-shape, ${t.shape.corner.large});
      min-width: var(--m3e-option-panel-container-min-width, 7rem);
      max-width: var(--m3e-option-panel-container-max-width, 17.5rem);
      max-height: var(--m3e-option-panel-container-max-height, 17.5rem);
      background-color: var(--m3e-option-panel-container-color, ${t.color.surfaceContainer});
      box-shadow: var(--m3e-option-panel-container-elevation, ${t.elevation.level3});
      opacity: 0;
      display: none;
    }
    .base {
      display: flex;
      flex-direction: column;
      row-gap: var(--m3e-option-panel-gap, 0.125rem);
      min-width: inherit;
      max-width: inherit;
      padding-block: var(--m3e-option-panel-container-padding-block, 0.25rem);
      padding-inline: var(--m3e-option-panel-container-padding-inline, 0.25rem);
      --m3e-text-highlight-container-color: var(
        --m3e-option-panel-text-highlight-container-color,
        ${t.color.tertiaryContainer}
      );
      --m3e-text-highlight-color: var(
        --m3e-option-panel-text-highlight-color,
        ${t.color.onTertiaryContainer}
      );
      --m3e-focus-ring-outward-offset: 0px;
      --m3e-focus-ring-growth-factor: 1.5;
    }
    :host(:not(.-no-animate)) {
      transition: ${r(`opacity ${t.motion.duration.short2} ${t.motion.easing.standard}, 
        transform ${t.motion.duration.short2} ${t.motion.easing.standard},
        overlay ${t.motion.duration.short2} ${t.motion.easing.standard} allow-discrete,
        display ${t.motion.duration.short2} ${t.motion.easing.standard} allow-discrete`)};
    }
    :host {
      transform: scaleY(0.8);
    }
    :host(:popover-open) {
      transform: scaleY(1);
      display: block;
      opacity: 1;
    }
    :host::backdrop {
      background-color: transparent;
    }
    :host(.-bottom) {
      transform-origin: top;
    }
    :host(.-top) {
      transform-origin: bottom;
    }
    @starting-style {
      :host(:popover-open) {
        transform: scaleY(0.8);
      }
    }
    @media (prefers-reduced-motion) {
      :host(:not(.-no-animate)) {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      :host {
        background-color: Menu;
        color: MenuText;
        outline: 1px solid MenuText;
      }
    }
  `,on=d([y("m3e-option-panel")],on);var Md,qm,wt,uy,Nm,py,vy,bs,Ye=class extends vo(M(k,"group"),"page"){constructor(){super(...arguments);m(this,wt);m(this,Md,`m3e-paginator-page-size-label-${Ye.__nextId++}`);m(this,qm,(e,i,n)=>{if(n=Math.max(n,0),i==="all")return"";if(n===0||i<=0)return`0 of ${n}`;let l=e*i,h=l<n?Math.min(l+i,n):l+i;return`${l+1} - ${h} of ${n}`});this.disabled=!1;this.pageIndex=0;this.length=0;this.pageSize=50;this.pageSizes="5,10,25,50,100";this.hidePageSize=!1;this.showFirstLastButtons=!1;this.itemsPerPageLabel="Items per page:";this.previousPageLabel="Previous page";this.nextPageLabel="Next page";this.firstPageLabel="First page";this.lastPageLabel="Last page";this.pageSizeVariant="outlined"}get pageCount(){return!this.pageSize||this.pageSize==="all"?0:Math.ceil(this.length/this.pageSize)}get hasPreviousPage(){return this.pageSize!=="all"&&this.pageSize>0&&this.pageIndex>=1}get hasNextPage(){return this.pageSize!=="all"&&this.pageSize>0&&this.pageIndex<this.pageCount-1}firstPage(){if(this.hasPreviousPage){let e=this.pageIndex;this.pageIndex=0,c(this,wt,bs).call(this,e)}}previousPage(){if(this.hasPreviousPage){let e=this.pageIndex;this.pageIndex--,c(this,wt,bs).call(this,e)}}nextPage(){if(this.hasNextPage){let e=this.pageIndex;this.pageIndex++,c(this,wt,bs).call(this,e)}}lastPage(){if(this.hasNextPage){let e=this.pageIndex;this.pageIndex=this.pageCount-1,c(this,wt,bs).call(this,e)}}update(e){if(super.update(e),e.has("pageIndex")){let i=c(this,wt,Nm).call(this);i.includes(this.pageSize)||(this.pageSizes=[...i,this.pageSize].join(","),this.pageSizes=c(this,wt,Nm).call(this).join(","))}}render(){return f`<div class="outer">
      <div class="inner">${c(this,wt,uy).call(this)} ${c(this,wt,py).call(this)}</div>
    </div>`}};Md=new WeakMap,qm=new WeakMap,wt=new WeakSet,uy=function(){let e=c(this,wt,Nm).call(this);return this.hidePageSize?R:f`<div id="${s(this,Md)}" class="items-per-page-label" aria-live="polite">
            ${this.itemsPerPageLabel}
          </div>
          <m3e-form-field class="form-field" variant="${this.pageSizeVariant}" hide-subscript="always">
            <m3e-select
              class="select"
              aria-labelledby="${s(this,Md)}"
              hide-selection-indicator
              ?disabled="${this.disabled||e.length<=1}"
              @change="${c(this,wt,vy)}"
            >
              ${e.map(i=>f`<m3e-option value="${i}" ?selected="${i===this.pageSize}">
                    ${i==="all"?"All":i}
                  </m3e-option>`)}
            </m3e-select>
          </m3e-form-field>`},Nm=function(){let e=this.pageSizes.split(",").map(n=>n.trim()).filter(n=>n!=="").map(n=>n==="all"?n:Number(n)),i=e.filter(n=>n!=="all");return i.sort((n,l)=>n-l),e.some(n=>n==="all")?[...i,"all"]:i},py=function(){let e=this.rangeLabelFormatter??s(this,qm);return this.pageSize==="all"?R:f`<div class="range-actions">
          <div class="range-label">${e(this.pageIndex,this.pageSize,this.length)}</div>
          ${this.showFirstLastButtons?f`<m3e-icon-button
                  id="firstPageButton"
                  aria-label="${this.firstPageLabel}"
                  ?disabled="${this.disabled||!this.hasPreviousPage}"
                  @click="${this.firstPage}"
                >
                  <slot name="first-page-icon">
                    <svg viewBox="0 -960 960 960" fill="currentColor">
                      <path d="M240-240v-480h80v480h-80Zm440 0L440-480l240-240 56 56-184 184 184 184-56 56Z" />
                    </svg>
                  </slot>
                </m3e-icon-button>
                <m3e-tooltip for="firstPageButton" position="above">${this.firstPageLabel}</m3e-tooltip>`:R}
          <m3e-icon-button
            id="previousPageButton"
            aria-label="${this.previousPageLabel}"
            ?disabled="${this.disabled||!this.hasPreviousPage}"
            @click="${this.previousPage}"
          >
            <slot name="previous-page-icon">
              <svg viewBox="0 -960 960 960" fill="currentColor">
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
              </svg>
            </slot>
          </m3e-icon-button>
          <m3e-tooltip for="previousPageButton" position="above">${this.previousPageLabel}</m3e-tooltip>
          <m3e-icon-button
            id="nextPageButton"
            aria-label="${this.nextPageLabel}"
            ?disabled="${this.disabled||!this.hasNextPage}"
            @click="${this.nextPage}"
          >
            <slot name="next-page-icon">
              <svg viewBox="0 -960 960 960" fill="currentColor">
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </slot>
          </m3e-icon-button>
          <m3e-tooltip for="nextPageButton" position="above">${this.nextPageLabel}</m3e-tooltip>
          ${this.showFirstLastButtons?f`<m3e-icon-button
                  id="lastPageButton"
                  aria-label="${this.lastPageLabel}"
                  ?disabled="${this.disabled||!this.hasNextPage}"
                  @click="${this.lastPage}"
                >
                  <slot name="last-page-icon">
                    <svg viewBox="0 -960 960 960" fill="currentColor">
                      <path d="m280-240-56-56 184-184-184-184 56-56 240 240-240 240Zm360 0v-480h80v480h-80Z" />
                    </svg>
                  </slot>
                </m3e-icon-button>
                <m3e-tooltip for="lastPageButton" position="above">${this.lastPageLabel}</m3e-tooltip>`:R}
        </div>`},vy=function(e){let i=e.target?.selected[0];if(!i)return;let n=i.value==="all"?"all":Number(i.value);if(n!==this.pageSize){let l=this.pageIndex;this.pageIndex=0,this.pageSize=n,c(this,wt,bs).call(this,l)}},bs=function(e){this.dispatchEvent(new CustomEvent("page",{detail:{previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length}}))},Ye.styles=b`
    :host {
      display: block;
    }
    .outer {
      display: flex;
      font-size: var(--m3e-paginator-font-size, ${t.typescale.standard.body.small.fontSize});
      font-weight: var(--m3e-paginator-font-weight, ${t.typescale.standard.body.small.fontWeight});
      line-height: var(--m3e-paginator-line-height, ${t.typescale.standard.body.small.lineHeight});
      letter-spacing: var(--m3e-paginator-tracking, ${t.typescale.standard.body.small.tracking});
    }
    .inner {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-inline: 0.5rem;
      width: 100%;
    }
    .form-field {
      --md-sys-density-scale: -2;
      --m3e-form-field-font-size: var(--m3e-paginator-font-size, ${t.typescale.standard.body.small.fontSize});
      --m3e-form-field-font-weight: var(
        --m3e-paginator-font-weight,
        ${t.typescale.standard.body.small.fontWeight}
      );
      --m3e-form-field-line-height: var(
        --m3e-paginator-line-height,
        ${t.typescale.standard.body.small.lineHeight}
      );
      --m3e-form-field-tracking: var(--m3e-paginator-tracking, ${t.typescale.standard.body.small.tracking});
    }
    .items-per-page-label {
      display: flex;
      align-items: center;
      margin-inline-end: 0.5rem;
    }
    .form-field {
      min-width: auto;
      width: 6rem;
      margin-inline: 0.25rem;
    }
    .range-label {
      margin-inline: 1.5rem 2rem;
    }
    :host([hide-page-size]) .range-label {
      margin-inline-start: unset;
    }
    .range-actions {
      display: flex;
      align-items: center;
    }
    ::slotted([slot="first-page-icon"]),
    ::slotted([slot="previous-page-icon"]),
    ::slotted([slot="next-page-icon"]),
    ::slotted([slot="last-page-icon"]),
    svg {
      width: 1em;
      font-size: var(--m3e-icon-button-medium-icon-size, 1.5rem) !important;
    }

    :host(:dir(rtl)) svg {
      transform: rotate(180deg);
    }
  `,Ye.__nextId=0,d([p({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2),d([p({attribute:"page-index",type:Number})],Ye.prototype,"pageIndex",2),d([p({type:Number})],Ye.prototype,"length",2),d([p({attribute:"page-size",converter:e=>e==="all"?"all":Number(e)})],Ye.prototype,"pageSize",2),d([p({attribute:"page-sizes"})],Ye.prototype,"pageSizes",2),d([p({attribute:"hide-page-size",type:Boolean,reflect:!0})],Ye.prototype,"hidePageSize",2),d([p({attribute:"show-first-last-buttons",type:Boolean})],Ye.prototype,"showFirstLastButtons",2),d([p({attribute:"items-per-page-label"})],Ye.prototype,"itemsPerPageLabel",2),d([p({attribute:"previous-page-label"})],Ye.prototype,"previousPageLabel",2),d([p({attribute:"next-page-label"})],Ye.prototype,"nextPageLabel",2),d([p({attribute:"first-page-label"})],Ye.prototype,"firstPageLabel",2),d([p({attribute:"last-page-label"})],Ye.prototype,"lastPageLabel",2),d([p({attribute:"page-size-variant"})],Ye.prototype,"pageSizeVariant",2),Ye=d([y("m3e-paginator")],Ye);var fy=xn(class extends Bi{constructor(o){if(super(o),o.type!==yn.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter((a=>o[a])).join(" ")+" "}update(o,[a]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(let i in a)a[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(a)}let e=o.element.classList;for(let i of this.st)i in a||(e.remove(i),this.st.delete(i));for(let i in a){let n=!!a[i];n===this.st.has(i)||this.nt?.has(i)||(n?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return Mo}});var $r=class extends D(M(k,"progressbar"),!0){constructor(){super(...arguments);this.value=0;this.max=100;this.variant="flat"}static{this.styles=b`
    @media (forced-colors: active) {
      :host {
        --m3e-progress-indicator-color: CanvasText;
        --m3e-progress-indicator-track-color: Canvas;
      }
    }
  `}connectedCallback(){super.connectedCallback(),this.ariaValueMin="0"}update(e){super.update(e),e.has("value")&&(this.ariaValueNow=`${this.value}`),e.has("max")&&(this.ariaValueMax=`${this.max}`)}};d([p({type:Number,reflect:!0})],$r.prototype,"value",2),d([p({type:Number})],$r.prototype,"max",2),d([p({reflect:!0})],$r.prototype,"variant",2);var by=1.575,Hd,qe,Se,Qr,gs,Rd,Ad,_d,Id,j,gy,yy,Pd,Vp,Wm,xy,Cy,$y,Ei,Um,Bp,Gm,ua,jm,Ti=class extends $r{constructor(){super(...arguments);m(this,j);m(this,Hd,`m3e-circular-progress-mask-${Ti.__nextMaskId++}`);m(this,qe,0);m(this,Se,0);m(this,Qr,0);m(this,gs,0);m(this,Rd);m(this,Ad);m(this,_d,new Le(this,{skipInitial:!0,target:null,callback:()=>{c(this,j,Wm).call(this),c(this,j,xy).call(this)}}));m(this,Id,new Dh(this,(e,i)=>c(this,j,Cy).call(this,i)));this.indeterminate=!1}update(e){super.update(e),e.has("indeterminate")&&(this.ariaValueNow=this.indeterminate?null:`${this.value}`)}firstUpdated(e){super.firstUpdated(e);let i=this.shadowRoot?.querySelector(".diameter-and-stroke");i&&(c(this,j,Wm).call(this),s(this,_d).observe(i));let n=this.shadowRoot?.querySelector(".amplitude-and-wavelength");n&&(c(this,j,Wm).call(this),s(this,_d).observe(n))}updated(e){super.updated(e),e.has("indeterminate")&&(g(this,Rd,this.shadowRoot?.querySelector(".spinner.active-track")),g(this,Ad,this.shadowRoot?.querySelector(".spinner.track")),this.indeterminate?s(this,Id).start():s(this,Id).stop())}render(){return this.variant==="wavy"?c(this,j,yy).call(this):c(this,j,gy).call(this)}};Hd=new WeakMap,qe=new WeakMap,Se=new WeakMap,Qr=new WeakMap,gs=new WeakMap,Rd=new WeakMap,Ad=new WeakMap,_d=new WeakMap,Id=new WeakMap,j=new WeakSet,gy=function(){if(this.indeterminate){let h=c(this,j,ua).call(this,{startAngle:-45,endAngle:90+s(this,Se)}),u=c(this,j,ua).call(this,{startAngle:-s(this,Se),endAngle:135});return f`<div class="progress" aria-hidden="true">
          <div class="spinner">
            <div class="left">
              <svg width="${s(this,qe)}" height="${s(this,qe)}" viewBox="${h.viewBox}" class="circle">
                <path
                  class="active-track"
                  d="${h.path}"
                  stroke="currentColor"
                  stroke-width=${s(this,Se)}
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="right">
              <svg width="${s(this,qe)}" height="${s(this,qe)}" viewBox="${u.viewBox}" class="circle">
                <path
                  class="active-track"
                  d="${u.path}"
                  stroke="currentColor"
                  stroke-width=${s(this,Se)}
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        ${c(this,j,Pd).call(this)}`}let e=c(this,j,Ei).call(this,s(this,Se)*2,s(this,qe)),i=this.value/this.max*360;i>0&&(i=Math.max(0,e,i));let n=c(this,j,ua).call(this,{gap:i<360?s(this,Se):0,endAngle:i}),l=c(this,j,ua).call(this,{gap:i>0?s(this,Se):0,startAngle:i,endAngle:360});return f`<div class="progress" aria-hidden="true">
        <svg width="${s(this,qe)}" height="${s(this,qe)}" viewBox="${n.viewBox}">
          ${i>0?si`<path
            class="active-track"
            d="${n.path}"
            stroke="currentColor"
            stroke-width=${s(this,Se)}
            fill="none"
            stroke-linecap="round"
          />`:R}
          ${360-i>=e?si`<path
                class="track"
                d="${l.path}"
                stroke="currentColor"
                stroke-width=${s(this,Se)}
                fill="none"
                stroke-linecap="round"
              />`:R}
        </svg>
      </div>
      ${c(this,j,Pd).call(this)}${c(this,j,Vp).call(this)}`},yy=function(){if(this.indeterminate)return f`<div class="progress" aria-hidden="true">
          <svg
            width="${s(this,qe)}"
            height="${s(this,qe)}"
            viewBox="${c(this,j,jm).call(this,{endAngle:20}).viewBox}"
          >
            <path
              class="spinner active-track"
              stroke="currentColor"
              stroke-width=${s(this,Se)}
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
            <path
              class="spinner track"
              stroke="currentColor"
              stroke-width=${s(this,Se)}
              fill="none"
              stroke-linecap="round"
            />
          </svg>
        </div>
        ${c(this,j,Pd).call(this)}`;let e=c(this,j,Ei).call(this,s(this,Se)*2,s(this,qe)),i=this.value/this.max*360;i>0&&(i=Math.max(0,e,i));let n=i<=e+e/2||i==360?0:s(this,Qr),l=c(this,j,ua).call(this,{gap:i<360?s(this,Se):0,endAngle:i}),h=n==0?l:c(this,j,jm).call(this,{endAngle:360,amplitude:n}),u=c(this,j,ua).call(this,{gap:i>0?s(this,Se):0,startAngle:i,endAngle:360}),v=n>0?n+s(this,Se)/2:s(this,Se);return f`
      <svg class="progress" viewBox="${u.viewBox}" aria-hidden="true">
        ${i>0?si`${n>0?si`<defs>
          <mask id="${s(this,Hd)}">
            <path
              d="${l.path}"
              stroke="white"
              stroke-width="${s(this,Se)+v}"
              fill="none"
              stroke-linecap="round"
            />
          </mask>
        </defs>`:R}
        <g class="active-track" mask="${$e(n>0?el(s(this,Hd)):void 0)}">
          <path
            class="${fy({wave:n>0})}"
            d="${h.path}"
            stroke="currentColor"
            stroke-width=${s(this,Se)}
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </g>`:R}
        ${360-i>=e?si`<path
                class="track"
                d="${u.path}"
                stroke="currentColor"
                stroke-width=${s(this,Se)}
                fill="none"
                stroke-linecap="round"
              />`:R}
      </svg>
      ${c(this,j,Pd).call(this)}${c(this,j,Vp).call(this)}
    `},Pd=function(){return f`<div class="diameter-and-stroke" aria-hidden="true"></div>
      <div class="amplitude-and-wavelength" aria-hidden="true"></div>`},Vp=function(){return f`<div class="content" aria-hidden="true"><slot></slot></div>`},Wm=function(){let e=this.shadowRoot?.querySelector(".diameter-and-stroke");e&&(g(this,qe,e.clientWidth),g(this,Se,e.clientHeight))},xy=function(){let e=this.shadowRoot?.querySelector(".amplitude-and-wavelength");e&&(g(this,Qr,e.clientWidth),g(this,gs,e.clientHeight))},Cy=function(e){if(s(this,Qr)===0||s(this,gs)===0)return;let i=c(this,j,$y).call(this,e);s(this,Rd)?.setAttribute("d",c(this,j,jm).call(this,{endAngle:i}).path),s(this,Ad)?.setAttribute("d",c(this,j,ua).call(this,{gap:c(this,j,Ei).call(this,s(this,Se),s(this,qe)),startAngle:i}).path)},$y=function(e){let i=c(this,j,Ei).call(this,s(this,Se))*2,n=18+i,l=280-i,h=by,u=h,v=h,C=h,S=h,$=u+v+C+S,T=e%$;if(T<u)return n;if(T<u+v){let P=(T-u)/v;return n+(l-n)*(P*P*(3-2*P))}if(T<u+v+C)return l;let w=(T-(u+v+C))/S;return l-(l-n)*(w*w*(3-2*w))},Ei=function(e,i=s(this,Qr)){return e*(360/(2*Math.PI*c(this,j,Gm).call(this,i).r))},Um=function(e){return(e-90)*(Math.PI/180)},Bp=function(e,i){let n=c(this,j,Um).call(this,i);return{x:e.cx+e.r*Math.cos(n),y:e.cy+e.r*Math.sin(n)}},Gm=function(e){e=e+s(this,Se)/2;let i=s(this,qe)/2,n=i+e,l=i+e;return{cx:n,cy:l,r:i,padding:e}},ua=function({startAngle:e=0,endAngle:i=360,gap:n=0,padding:l=s(this,Qr)}){if(s(this,qe)===0||s(this,Se)===0)return{path:"",viewBox:"0 0 0 0"};let h=c(this,j,Gm).call(this,l);n>0&&(e+=c(this,j,Ei).call(this,n,l),i-=c(this,j,Ei).call(this,n,l)),i-e>=360&&(i=e+359.999);let u=c(this,j,Bp).call(this,h,i),v=c(this,j,Bp).call(this,h,e),C=`M ${u.x} ${u.y} A ${h.r} ${h.r} 0 ${i-e<=180?"0":"1"} 0 ${v.x} ${v.y}`,S=`0 0 ${s(this,qe)+h.padding*2} ${s(this,qe)+h.padding*2}`;return{path:C,viewBox:S}},jm=function({startAngle:e=0,endAngle:i=360,gap:n=0,padding:l=s(this,Qr),amplitude:h=s(this,Qr),steps:u=200}){if(s(this,qe)===0||s(this,Se)===0)return{path:"",viewBox:"0 0 0 0"};let v=c(this,j,Gm).call(this,l);n>0&&(e+=c(this,j,Ei).call(this,n,l),i-=c(this,j,Ei).call(this,n,l));let C=c(this,j,Um).call(this,e),S=c(this,j,Um).call(this,i);e===i?S=C:S<C&&(S+=Math.PI*2);let $=S-C,T=2*Math.PI*v.r/s(this,gs),w=Math.PI/2*(T-1),P=[];for(let V=0;V<=u;V++){let q=u===0?0:V/u,B=C+q*$,te=Math.sin(B*T+w),U=v.r-h*te,ye=U*Math.cos(B)+v.cx,re=U*Math.sin(B)+v.cy;P.push([ye,re])}let _=P.length===1?`M ${P[0][0]},${P[0][1]}`:`M ${P[0][0]},${P[0][1]} `+P.slice(1).map(([V,q])=>`L ${V},${q}`).join(" "),z=`0 0 ${s(this,qe)+v.padding*2} ${s(this,qe)+v.padding*2}`;return{path:_,viewBox:z}},Ti.styles=[$r.styles,b`
      :host {
        display: inline-flex;
        vertical-align: middle;
        aspect-ratio: 1;
        position: relative;
        align-items: center;
        justify-content: center;
      }
      .progress {
        --_arc-duration: 1333ms;
        --_cycle-duration: calc(4 * var(--_arc-duration));
        --_linear-rotate-duration: calc(var(--_arc-duration) * 360 / 306);
        --_indeterminate-easing: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .active-track {
        transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
      }
      :host([variant="flat"]) .progress {
        flex: 1;
        align-self: stretch;
        pointer-events: none;
      }
      .progress,
      .spinner,
      .left,
      .right,
      .content,
      .circle {
        position: absolute;
        inset: 0;
      }
      .content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .diameter-and-stroke,
      .amplitude-and-wavelength {
        visibility: hidden;
        position: absolute;
      }
      .diameter-and-stroke {
        width: inherit;
        height: var(--m3e-circular-progress-indicator-thickness, 0.25rem);
      }
      .amplitude-and-wavelength {
        width: var(--m3e-circular-wavy-progress-indicator-amplitude, 0.1rem);
        height: var(--m3e-circular-wavy-progress-indicator-wavelength, 0.9375rem);
      }
      :host([variant="flat"]) {
        width: var(--m3e-circular-flat-progress-indicator-diameter, 2.5rem);
      }
      :host([variant="wavy"]) {
        width: var(--m3e-circular-wavy-progress-indicator-diameter, 3rem);
      }
      :host([variant="flat"][indeterminate]) .progress {
        animation: linear infinite linear-rotate;
        animation-duration: var(--_linear-rotate-duration);
      }
      :host([variant="flat"][indeterminate]) .spinner {
        animation: infinite both rotate-arc;
        animation-duration: var(--_cycle-duration);
        animation-timing-function: var(--_indeterminate-easing);
      }
      :host([variant="wavy"][indeterminate]) .spinner {
        transform-origin: 50% 50%;
        animation: wavy-spin ${by}s linear infinite;
      }
      .left {
        clip-path: inset(0);
        inset: 0 50% 0 0;
      }
      .right {
        clip-path: inset(0);
        inset: 0 0 0 50%;
      }
      .circle {
        animation: expand-arc;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
        animation-duration: var(--_arc-duration), var(--_cycle-duration);
        animation-timing-function: var(--_indeterminate-easing);
      }
      .left .circle {
        rotate: 135deg;
        inset: 0 -100% 0 0;
      }
      .right .circle {
        rotate: 100deg;
        inset: 0 0 0 -100%;
        animation-delay: calc(-0.5 * var(--_arc-duration)), 0ms;
      }
      .track {
        color: var(--m3e-progress-indicator-track-color, ${t.color.secondaryContainer});
      }
      .active-track {
        color: var(--m3e-progress-indicator-color, ${t.color.primary});
      }
      .wave {
        animation: spin-reverse 8s linear infinite;
        transform-origin: 50% 50%;
      }
      @keyframes expand-arc {
        0% {
          transform: rotate(265deg);
        }
        50% {
          transform: rotate(130deg);
        }
        100% {
          transform: rotate(265deg);
        }
      }
      @keyframes rotate-arc {
        12.5% {
          transform: rotate(135deg);
        }
        25% {
          transform: rotate(270deg);
        }
        37.5% {
          transform: rotate(405deg);
        }
        50% {
          transform: rotate(540deg);
        }
        62.5% {
          transform: rotate(675deg);
        }
        75% {
          transform: rotate(810deg);
        }
        87.5% {
          transform: rotate(945deg);
        }
        100% {
          transform: rotate(1080deg);
        }
      }
      @keyframes linear-rotate {
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes spin-reverse {
        from {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes wavy-spin {
        0% {
          transform: rotate(0deg);
        }
        10% {
          transform: rotate(90deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @media (forced-colors: active) {
        :host([variant="flat"]) circle {
          fill: Canvas;
        }
        :host([variant="flat"]) .circle {
          border-color: var(--m3e-progress-indicator-color, ${t.color.primary})
            var(--m3e-progress-indicator-color, ${t.color.primary}) Canvas Canvas;
        }
      }
      @media (forced-colors: active) {
        .progress {
          --m3e-progress-indicator-track-color: GrayText;
          --m3e-progress-indicator-color: CanvasText;
        }
      }
    `],Ti.__nextMaskId=0,d([p({type:Boolean,reflect:!0})],Ti.prototype,"indeterminate",2),Ti=d([y("m3e-circular-progress-indicator")],Ti);var rn,ei,an,Mi,zd,ro,Np,Sy,qp,Wp,ky,ti=class extends $r{constructor(){super(...arguments);m(this,ro);m(this,rn,`m3e-linear-progress-mask-${ti.__nextMaskId++}`);m(this,ei,0);m(this,an,0);m(this,Mi,0);m(this,zd,new Le(this,{skipInitial:!0,target:null,callback:()=>{c(this,ro,qp).call(this),c(this,ro,Wp).call(this)}}));this.mode="determinate";this.bufferValue=0}firstUpdated(e){super.firstUpdated(e),c(this,ro,qp).call(this),c(this,ro,Wp).call(this);let i=this.shadowRoot?.querySelector(".stroke");i&&s(this,zd).observe(i);let n=this.shadowRoot?.querySelector(".amplitude-and-wavelength");n&&s(this,zd).observe(n)}update(e){super.update(e),e.has("mode")&&(this.ariaValueNow=this.mode==="indeterminate"||this.mode==="query"?null:`${this.value}`)}updated(e){if(super.updated(e),e.has("value")||e.has("bufferValue")||e.has("max")){let i=this.shadowRoot?.querySelector(".progress");i?.style.setProperty("--_value",`${this.value/this.max*100}%`),i?.style.setProperty("--_buffer-value",`${this.bufferValue/this.max*100}%`)}}render(){let i=Math.max(0,Math.min(this.value,this.max))/this.max*this.clientWidth,n=this.mode==="indeterminate"||this.mode==="query"?this.clientWidth:i+s(this,Mi)*3,l=this.variant==="wavy"&&s(this,ei)>0&&s(this,an)>0&&s(this,Mi)>0?c(this,ro,ky).call(this,n):void 0;return f`<div
        class="progress"
        aria-hidden="true"
        style="${Wh({"--_translate-x":`-${i}px`})}"
      >
        ${l?R:f`<div class="track"></div>`}
        ${(this.mode==="determinate"||this.mode==="buffer")&&this.value<=0?R:f`<div class="primary">
                ${l&&(this.mode==="determinate"||this.mode==="buffer")?c(this,ro,Np).call(this,n,l.height,l.viewBox,l.path):R}
              </div>
              ${this.mode==="determinate"||this.mode==="buffer"?f`<div class="gap"></div>`:R}`}
        ${this.mode!=="buffer"||this.bufferValue>0?f`<div class="secondary"></div>`:R}
        ${this.mode==="buffer"&&this.bufferValue>0?f`<div class="gap"></div>`:R}
        ${this.mode==="buffer"?f`<div class="buffer"></div>`:R}
        ${(this.mode==="determinate"||this.mode==="buffer")&&this.value>0?f`<div class="gap"></div>
              <div class="stop"></div>`:R}
        ${l&&!(this.mode==="determinate"||this.mode==="buffer")?c(this,ro,Np).call(this,n,l.height,l.viewBox,l.path):R}
      </div>
      ${c(this,ro,Sy).call(this)}`}};rn=new WeakMap,ei=new WeakMap,an=new WeakMap,Mi=new WeakMap,zd=new WeakMap,ro=new WeakSet,Np=function(e,i,n,l){let h=this.mode==="indeterminate"||this.mode==="query";return!h&&this.value/this.max===1?f`<div class="complete"></div>`:f`<svg class="wave" width="${e}" height="${i}" viewBox="${n}" preserveAspectRatio="none">
      ${h?si`
        <mask id="${s(this,rn)}" maskUnits="userSpaceOnUse">
          <rect width="${e}" height="${i}" fill="black" />
          <rect class="primary" height="${i}" fill="white" />
          <rect class="secondary" height="${i}" fill="white" />
        </mask>
        <mask id="${`${s(this,rn)}-inverse`}" maskUnits="userSpaceOnUse">
          <rect width="${e}" height="${i}" fill="white" />
          <rect class="primary" height="${i}" fill="black" />
          <rect class="secondary" height="${i}" fill="black" />
        </mask>
        <g mask="${el(s(this,rn))}">
          <path d="${l}" stroke="currentColor" stroke-width=${s(this,ei)} fill="none" stroke-linecap="round" />
        </g>
        <g mask="${el(`${s(this,rn)}-inverse`)}">
          <rect class="track" width="100%" height="${s(this,ei)}" fill="currentColor" />
        </g>`:si`<path d="${l}" stroke="currentColor" stroke-width=${s(this,ei)} fill="none" stroke-linecap="round" />`}
    </svg>`},Sy=function(){return f`<div class="stroke" aria-hidden="true"></div>
      <div class="amplitude-and-wavelength" aria-hidden="true"></div>`},qp=function(){let e=this.shadowRoot?.querySelector(".stroke");e&&g(this,ei,e.clientHeight)},Wp=function(){let e=this.shadowRoot?.querySelector(".amplitude-and-wavelength");e&&(g(this,an,e.clientHeight),g(this,Mi,e.clientWidth))},ky=function(e,i=0){let n=s(this,an)+s(this,ei)/2,l=n,h=[],u=s(this,Mi)/2,v=0;for(h.push(`M ${v},${l}`);v<=e;){let $=v+u,T=l+n*Math.sin(2*Math.PI*$/s(this,Mi)+i),w=v+u/2,P=l+n*Math.sin(2*Math.PI*(v+u/2)/s(this,Mi)+i);h.push(`Q ${w},${P} ${$},${T}`),v+=u}let C=1,S=`0 ${-C} ${e} ${n*2+C*2}`;return{path:h.join(" "),viewBox:S,height:s(this,ei)+s(this,an)*2,padding:C}},ti.styles=[$r.styles,b`
      :host {
        display: block;
        position: relative;
      }
      .progress {
        width: 100%;
        height: 100%;
        position: relative;
        align-items: center;
        border-radius: var(--m3e-linear-progress-indicator-shape, ${t.shape.corner.extraSmall});
      }
      .stroke,
      .amplitude-and-wavelength {
        visibility: hidden;
        position: absolute;
      }
      .stroke {
        width: 100%;
        height: var(--m3e-linear-progress-indicator-thickness, 0.25rem);
      }
      .amplitude-and-wavelength {
        height: var(--m3e-linear-wavy-progress-indicator-amplitude, 0.1875rem);
        width: var(--m3e-linear-wavy-progress-indicator-wavelength, 2.5rem);
      }
      :host([mode="indeterminate"]) .amplitude-and-wavelength,
      :host([mode="query"]) .amplitude-and-wavelength {
        width: var(--m3e-linear-wavy-indeterminate-progress-indicator-wavelength, 1.5rem);
      }
      .primary,
      .secondary,
      .stop {
        height: var(--m3e-linear-progress-indicator-thickness, 0.25rem);
        border-radius: inherit;
      }
      .stop {
        aspect-ratio: 1;
        flex: none;
      }
      :host([variant="flat"]) {
        height: var(--m3e-linear-progress-indicator-thickness, 0.25rem);
      }
      :host([variant="wavy"]) {
        height: calc(
          var(--m3e-linear-progress-indicator-thickness, 0.25rem) +
            calc(var(--m3e-linear-wavy-progress-indicator-amplitude, 0.1875rem) * 2)
        );
      }
      :host([variant="wavy"]) .primary,
      :host([variant="wavy"]) .secondary {
        position: relative;
        height: 100%;
        overflow: hidden;
      }
      :host([variant="wavy"]) .complete {
        position: absolute;
        margin: auto;
        top: calc(50% - calc(var(--m3e-linear-progress-indicator-thickness, 0.25rem) / 2));
        left: 0;
        right: 0;
        height: var(--m3e-linear-progress-indicator-thickness, 0.25rem);
        border-radius: inherit;
      }
      :host([variant="wavy"]) .secondary {
        height: var(--m3e-linear-progress-indicator-thickness, 0.25rem);
      }
      .wave {
        position: absolute;
        display: block;
      }
      .primary .wave,
      .secondary .wave {
        margin-inline-start: calc(0px - var(--m3e-linear-wavy-progress-indicator-wavelength, 2.5rem));
      }
      :host([variant="wavy"][mode="determinate"]) .primary path,
      :host([variant="wavy"][mode="buffer"]) .primary path {
        animation: wave-slide 1.5s linear infinite;
      }
      @keyframes wave-slide {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(calc(0px - var(--m3e-linear-wavy-progress-indicator-wavelength, 2.5rem)));
        }
      }
      :host([mode="determinate"]) .progress,
      :host([mode="buffer"]) .progress {
        display: flex;
        overflow: hidden;
      }
      :host([mode="determinate"]) .primary,
      :host([mode="buffer"]) .primary {
        width: var(--_value, 0px);
        flex: none;
      }
      :host([mode="determinate"]) .gap,
      :host([mode="buffer"]) .gap {
        flex-basis: var(--m3e-linear-progress-indicator-thickness, 0.25rem);
        flex-shrink: 1;
      }
      :host([mode="determinate"]) .secondary,
      :host([mode="buffer"]) .buffer {
        flex: 1 1 auto;
      }
      :host([mode="buffer"]) .buffer {
        flex-shrink: 5;
        height: 100%;
        width: 100%;
        background-color: var(--m3e-progress-indicator-track-color, ${t.color.secondaryContainer});
        mask-image: radial-gradient(
          circle,
          black 0,
          black calc(var(--m3e-linear-progress-indicator-thickness, 0.25rem) / 2),
          transparent calc(var(--m3e-linear-progress-indicator-thickness, 0.25rem) / 2)
        );
        mask-size: calc(var(--m3e-linear-progress-indicator-thickness, 0.25rem) * 2) 100%;
        mask-repeat: repeat;
        animation: buffer 250ms linear infinite;
      }
      :host(:dir(rtl)[mode="buffer"]) .buffer {
        transform: scaleX(-1);
      }
      @keyframes buffer {
        from {
          mask-position: 0 0;
        }
        to {
          mask-position: calc(-1 * calc(var(--m3e-linear-progress-indicator-thickness, 0.25rem) * 2)) 0;
        }
      }
      :host([mode="buffer"]) .secondary {
        width: var(--_buffer-value, 0px);
        flex: none;
      }
      :host([mode="indeterminate"]) .primary,
      :host([mode="query"]) .primary {
        position: absolute;
        top: 0;
        height: 100%;
        border-radius: inherit;
        animation: indeterminate-primary 2.1s infinite linear;
      }
      :host([variant="wavy"][mode="indeterminate"]) .primary,
      :host([variant="wavy"][mode="query"]) .primary {
        animation-name: wavy-indeterminate-primary;
      }
      :host([mode="indeterminate"]) .secondary,
      :host([mode="query"]) .secondary {
        position: absolute;
        top: 0;
        height: 100%;
        border-radius: inherit;
        animation: indeterminate-secondary 2.1s infinite linear;
        animation-delay: 1.15s;
        animation-fill-mode: backwards;
      }
      :host([variant="wavy"][mode="indeterminate"]) .secondary,
      :host([variant="wavy"][mode="query"]) .secondary {
        animation-name: wavy-indeterminate-secondary;
      }
      :host([mode="indeterminate"]) .progress,
      :host([mode="query"]) .progress {
        overflow: hidden;
        position: relative;
      }
      :host(:not(:dir(rtl))[mode="query"]) .progress,
      :host(:dir(rtl)[mode="indeterminate"]) .progress {
        transform: scaleX(-1);
      }
      :host([variant="flat"]) .primary,
      :host([variant="flat"][mode="indeterminate"]) .secondary,
      :host([variant="flat"][mode="query"]) .secondary,
      :host([variant="wavy"]) .complete,
      .stop {
        background-color: var(--m3e-progress-indicator-color, ${t.color.primary});
      }
      :host([variant="wavy"]) .progress {
        color: var(--m3e-progress-indicator-color, ${t.color.primary});
      }
      :host([mode="determinate"]) .secondary,
      :host([mode="buffer"]) .secondary,
      :host([variant="flat"][mode="indeterminate"]) .track,
      :host([variant="flat"][mode="query"]) .track {
        background-color: var(--m3e-progress-indicator-track-color, ${t.color.secondaryContainer});
      }
      :host([variant="wavy"][mode="indeterminate"]) .track,
      :host([variant="wavy"][mode="query"]) .track {
        color: var(--m3e-progress-indicator-track-color, ${t.color.secondaryContainer});
      }
      :host([variant="wavy"][mode="indeterminate"]) .track,
      :host([variant="wavy"][mode="query"]) .track {
        y: calc(50% - calc(var(--m3e-linear-progress-indicator-thickness, 0.25rem) / 2));
        border-radius: inherit;
      }
      :host([variant="flat"][mode="indeterminate"]) .track,
      :host([variant="flat"][mode="query"]) .track {
        position: absolute;
        margin: auto;
        top: calc(50% - calc(var(--m3e-linear-progress-indicator-thickness, 0.25rem) / 2));
        left: 0;
        right: 0;
        height: var(--m3e-linear-progress-indicator-thickness, 0.25rem);
        border-radius: inherit;
      }
      @keyframes indeterminate-primary {
        0% {
          left: -145.167%;
          width: 8%;
        }
        20% {
          left: -113.333%;
          width: 48%;
        }
        60% {
          left: 56.333%;
          width: 78%;
        }
        100% {
          left: 100%;
          width: 8%;
        }
      }
      @keyframes indeterminate-secondary {
        0% {
          left: -54.888%;
          width: 8%;
        }
        20% {
          left: -20%;
          width: 48%;
        }
        60% {
          left: 60%;
          width: 78%;
        }
        100% {
          left: 160%;
          width: 8%;
        }
      }
      @keyframes wavy-indeterminate-primary {
        0% {
          transform: translateX(-145.167%);
          width: 8%;
        }
        20% {
          transform: translateX(-113.333%);
          width: 48%;
        }
        60% {
          transform: translateX(56.333%);
          width: 78%;
        }
        100% {
          transform: translateX(100%);
          width: 8%;
        }
      }
      @keyframes wavy-indeterminate-secondary {
        0% {
          transform: translateX(-54.888%);
          width: 8%;
        }
        20% {
          transform: translateX(-20%);
          width: 48%;
        }
        60% {
          transform: translateX(60%);
          width: 78%;
        }
        100% {
          transform: translateX(160%);
          width: 8%;
        }
      }
      @media (forced-colors: active) {
        .progress {
          --m3e-progress-indicator-track-color: GrayText;
          --m3e-progress-indicator-color: CanvasText;
        }
      }
    `],ti.__nextMaskId=0,d([p({reflect:!0})],ti.prototype,"mode",2),d([p({attribute:"buffer-value",type:Number,reflect:!0})],ti.prototype,"bufferValue",2),ti=d([y("m3e-linear-progress-indicator")],ti);var Od,Dd,Fd,Hi,wy,Ly,Up,Pi=class extends Bt(Oe(De(po(de(ae(ot(N(D(M(k,"radio"),!0))))))))){constructor(){super(...arguments);m(this,Hi);m(this,Od,e=>c(this,Hi,Ly).call(this,e));m(this,Dd,new et(this,{target:null,callback:e=>{this.disabled||(e?this._stateLayer?.show("hover"):this._stateLayer?.hide("hover"))}}));m(this,Fd,new ue(this,{target:null,minPressedDuration:150,callback:e=>{this.disabled||(e?this._ripple?.show(0,0,!0):this._ripple?.hide())}}));this.value="on"}get[tt](){return this.checked&&!this.disabled?this.value:null}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,Od));for(let e of this.labels)s(this,Dd).observe(e),s(this,Fd).observe(e)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,Od));for(let e of this.labels)s(this,Dd).unobserve(e),s(this,Fd).unobserve(e)}update(e){super.update(e),e.has("checked")&&c(this,Hi,Up).call(this)}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" centered ?disabled="${this.disabled}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      <div class="wrapper" aria-hidden="true">${c(this,Hi,wy).call(this)}</div>
    </div>`}};Od=new WeakMap,Dd=new WeakMap,Fd=new WeakMap,Hi=new WeakSet,wy=function(){return f`<svg viewBox="0 0 20 20">
      <mask id="cutout2">
        <rect width="100%" height="100%" fill="white"></rect>
        <circle cx="10" cy="10" r="8" fill="black"></circle>
      </mask>
      <circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle>
      <circle class="inner circle" cx="10" cy="10" r="5"></circle>
    </svg>`},Ly=function(e){e.defaultPrevented||this.checked||this.disabled||(this.checked=!0,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?(c(this,Hi,Up).call(this),this.dispatchEvent(new Event("change",{bubbles:!0}))):this.checked=!1,this.closest("label")&&e.preventDefault())},Up=function(){let e=this.closest("m3e-radio-group");e?e[E].notifySelectionChange(this):this.name&&this.checked&&[...this.getRootNode()?.querySelectorAll(`m3e-radio[name="${this.name}"]`)??[]].filter(i=>i!==this&&i.checked).forEach(i=>i.checked=!1)},Pi.styles=b`
    :host {
      display: inline-block;
      outline: none;
      width: fit-content;
      height: fit-content;
      vertical-align: middle;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    :host(:not([aria-disabled="true"])) {
      cursor: pointer;
    }
    .base {
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border-radius: 50%;
      width: calc(var(--m3e-radio-container-size, 2.5rem) + ${t.density.calc(-3)});
      height: calc(var(--m3e-radio-container-size, 2.5rem) + ${t.density.calc(-3)});
    }
    .touch {
      position: absolute;
      height: 3rem;
      width: 3rem;
      margin: auto;
    }
    .wrapper {
      box-sizing: border-box;
      pointer-events: none;
      width: var(--m3e-radio-icon-size, 1.25rem);
      height: var(--m3e-radio-icon-size, 1.25rem);
    }
    .circle {
      fill: currentColor;
    }
    :host(:not([checked])) .circle.inner {
      opacity: 0;
    }
    :host(:not([checked])) .base {
      --m3e-state-layer-hover-color: var(--m3e-radio-unselected-hover-color, ${t.color.onSurface});
      --m3e-state-layer-focus-color: var(--m3e-radio-unselected-focus-color, ${t.color.onSurface});
      --m3e-ripple-color: var(--m3e-radio-unselected-ripple-color, ${t.color.onSurface});
      color: var(--m3e-radio-unselected-icon-color, ${t.color.onSurfaceVariant});
    }
    :host([checked]) .base {
      --m3e-state-layer-hover-color: var(--m3e-radio-selected-hover-color, ${t.color.primary});
      --m3e-state-layer-focus-color: var(--m3e-radio-selected-focus-color, ${t.color.primary});
      --m3e-ripple-color: var(--m3e-radio-selected-ripple-color, ${t.color.primary});
      color: var(--m3e-radio-selected-icon-color, ${t.color.primary});
    }
    :host([aria-disabled="true"]) .base {
      color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${t.color.onSurface}) 38%, transparent);
    }
    :host(:state(-touched):state(-invalid)) .base {
      --m3e-state-layer-hover-color: var(--m3e-radio-error-hover-color, ${t.color.error});
      --m3e-state-layer-focus-color: var(--m3e-radio-error-focus-color, ${t.color.error});
      --m3e-ripple-color: var(--m3e-radio-error-ripple-color, ${t.color.error});
      color: var(--m3e-radio-error-icon-color, ${t.color.error});
    }
    @media (forced-colors: active) {
      :host(:not([checked])) .base,
      :host([checked]) .base {
        --m3e-state-layer-hover-color: var(--_radio-forced-color, CanvasText);
        --m3e-state-layer-focus-color: var(--_radio-forced-color, CanvasText);
        --m3e-ripple-color: var(--_radio-forced-color, CanvasText);
        color: var(--_radio-forced-color, CanvasText);
      }
      :host([aria-disabled="true"]) .base {
        color: GrayText;
      }
      :host(:state(-touched):state(-invalid)) .base {
        --_radio-forced-color: Highlight;
        color: Highlight;
      }
    }
  `,d([L(".focus-ring")],Pi.prototype,"_focusRing",2),d([L(".state-layer")],Pi.prototype,"_stateLayer",2),d([L(".ripple")],Pi.prototype,"_ripple",2),d([p()],Pi.prototype,"value",2),Pi=d([y("m3e-radio")],Pi);var Ey,Ty,Bd,Nd,Ri,My,Py,Gp,Vd=class extends(Ty=Bt(Ui(Oe(De(Wi(Ir(ot(N(D(M(k,"radiogroup")))))))))),Ey=E,Ty){constructor(){super(...arguments);m(this,Ri);m(this,Bd);m(this,Nd,()=>c(this,Ri,Gp).call(this));this[Ey]=new rt().withWrap().withDirectionality(O.current).onActiveItemChange(()=>{this[E].activeItem?.click()})}static get observedAttributes(){return[...super.observedAttributes,"aria-invalid"]}get radios(){return this[E]?.items??[]}get selected(){return this[E]?.selectedItems[0]??null}get value(){return this.selected?.value??null}markAsTouched(){super.markAsTouched(),this.radios.forEach(e=>e.markAsTouched())}markAsUntouched(){super.markAsUntouched(),this.radios.forEach(e=>e.markAsUntouched())}markAsDirty(){super.markAsDirty(),this.radios.forEach(e=>e.markAsDirty())}markAsPristine(){super.markAsPristine(),this.radios.forEach(e=>e.markAsPristine())}attributeChangedCallback(e,i,n){switch(super.attributeChangedCallback(e,i,n),e){case"name":this.radios.forEach(l=>l.name=this.name);break;case"aria-invalid":this.radios.forEach(l=>{le(l,"-invalid",n==="true"),l[Ta]?.()});break}}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",s(this,Nd)),g(this,Bd,O.observe(()=>this[E].directionality=O.current))}disconnectedCallback(){var e;super.disconnectedCallback(),this.removeEventListener("focusout",s(this,Nd)),(e=s(this,Bd))==null||e.call(this)}update(e){super.update(e),e.has("disabled")&&(this.ariaDisabled=null),e.has("disabled")&&(e.get("disabled")!==void 0||this.disabled)&&(this[E].disabled=this.disabled)}render(){return f`<slot
      @slotchange="${c(this,Ri,My)}"
      @keydown="${c(this,Ri,Py)}"
      @change="${c(this,Ri,Gp)}"
    ></slot>`}};Bd=new WeakMap,Nd=new WeakMap,Ri=new WeakSet,My=function(){let{added:e}=this[E].setItems([...this.querySelectorAll("m3e-radio")]);e.forEach(i=>i.name=i.name||this.name)},Py=function(e){this[E].onKeyDown(e)},Gp=function(){this.checkValidity()},Vd.styles=b`
    :host {
      display: inline-flex;
    }
  `,Vd=d([y("m3e-radio-group")],Vd);var qd,ys,Hy,Ry,rr=class extends Oe(De(po(N(D(M(k,"radio"),!0))))){constructor(){super(...arguments);m(this,ys);m(this,qd,e=>c(this,ys,Ry).call(this,e));this.value="on"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,qd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,qd))}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}update(e){let i=this.closest("m3e-segmented-button");i&&(this.role=i.multi?"button":"radio"),super.update(e),e.has("checked")&&i?.[E].notifySelectionChange(this),e.has("disabled")&&(this.disabled?this.nextElementSibling instanceof rr&&(this.nextElementSibling.disabled?this.style.removeProperty("--_segmented-button-disabled-outline-color"):this.style.setProperty("--_segmented-button-disabled-outline-color",`var(--m3e-segmented-button-outline-color, ${t.color.outline})`)):(this.style.removeProperty("--_segmented-button-disabled-outline-color"),this.previousElementSibling instanceof rr&&(this.previousElementSibling.disabled?this.previousElementSibling.style.setProperty("--_segmented-button-disabled-outline-color",`var(--m3e-segmented-button-outline-color, ${t.color.outline})`):this.previousElementSibling.style.removeProperty("--_segmented-button-disabled-outline-color"))))}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      <div class="wrapper">
        <div class="icon" aria-hidden="true">
          <svg class="check" viewBox="0 -960 960 960">
            <path fill="currentColor" d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
          <slot name="icon" @slotchange="${c(this,ys,Hy)}"></slot>
        </div>
        <div class="label">
          <slot></slot>
        </div>
      </div>
    </div>`}};qd=new WeakMap,ys=new WeakSet,Hy=function(e){this.classList.toggle("-with-icon",J(e.target))},Ry=function(e){if(e.defaultPrevented)return;let i=this.closest("m3e-segmented-button");if(i&&(i.multi||!this.checked)){let n=this.checked;this.checked=!this.checked,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?(this.closest("m3e-segmented-button")?.[E].notifySelectionChange(this),this.dispatchEvent(new Event("change",{bubbles:!0}))):this.checked=n}},rr.styles=b`
    :host {
      display: inline-block;
      position: relative;
      vertical-align: middle;
      outline: none;
      user-select: none;
      flex: 1 1 auto;
      min-width: 0;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .base {
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      width: 100%;
      height: calc(var(--m3e-segmented-button-height, 2.5rem) + ${t.density.calc(-3)});
      box-sizing: border-box;
      border-width: var(--m3e-segmented-button-outline-thickness, 1px);
      border-color: var(--m3e-segmented-button-outline-color, ${t.color.outline});
      border-style: solid;
      border-radius: inherit;
      border-inline-start-style: var(--_segmented-button-left-border, solid);
      transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    .touch {
      position: absolute;
      height: 3rem;
      left: 0;
      right: 0;
    }
    .wrapper {
      width: 100%;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      padding-inline-start: var(--m3e-segmented-button-padding-start, 1rem);
      padding-inline-end: var(--m3e-segmented-button-padding-end, 1rem);
      column-gap: var(--m3e-segmented-button-spacing, 0.5rem);
    }
    .label {
      font-size: var(--m3e-segmented-button-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(--m3e-segmented-button-font-weight, ${t.typescale.standard.label.large.fontWeight});
      line-height: var(--m3e-segmented-button-line-height, ${t.typescale.standard.label.large.lineHeight});
      letter-spacing: var(--m3e-segmented-button-tracking, ${t.typescale.standard.label.large.tracking});
      justify-self: center;
      flex: 1 1 auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
    }
    :host(:not(:disabled)) {
      cursor: pointer;
    }
    :host([checked]:not(.-hide-selection)) .wrapper,
    :host(.-with-icon) .wrapper {
      padding-inline-start: var(--m3e-segmented-button-with-icon-padding-start, 0.75rem);
    }
    :host(:not(:disabled)[checked]) .base {
      background-color: var(--m3e-segmented-button-selected-container-color, ${t.color.secondaryContainer});
      --m3e-state-layer-hover-color: var(
        --m3e-segmented-button-selected-container-hover-color,
        ${t.color.onSecondaryContainer}
      );
      --m3e-state-layer-focus-color: var(
        --m3e-segmented-button-selected-container-focus-color,
        ${t.color.onSecondaryContainer}
      );
      --m3e-ripple-color: var(--m3e-segmented-button-selected-ripple-color, ${t.color.onSecondaryContainer});
    }
    :host(:not(:disabled)[checked]) .label {
      color: var(--m3e-segmented-button-selected-label-text-color, ${t.color.onSecondaryContainer});
    }
    :host(:not(:disabled)[checked]) .icon {
      color: var(--m3e-segmented-button-selected-icon-color, ${t.color.onSecondaryContainer});
    }
    :host(:not(:disabled):not([checked])) .base {
      --m3e-state-layer-hover-color: var(
        --m3e-segmented-button-unselected-container-hover-color,
        ${t.color.onSurface}
      );
      --m3e-state-layer-focus-color: var(
        --m3e-segmented-button-unselected-container-focus-color,
        ${t.color.onSurface}
      );
      --m3e-ripple-color: var(--m3e-segmented-button-unselected-ripple-color, ${t.color.onSurface});
    }
    :host(:not(:disabled):not([checked])) .label {
      color: var(--m3e-segmented-button-unselected-label-text-color, ${t.color.onSurface});
    }
    :host(:not(:disabled):not([checked])) .icon {
      color: var(--m3e-segmented-button-unselected-icon-color, ${t.color.onSurface});
    }
    :host(:not(.-with-icon)) .icon {
      margin-inline-start: calc(0px - var(--m3e-segmented-button-spacing, 0.5rem));
      transition: margin-inline-start ${t.motion.spring.fastEffects};
    }
    .check,
    ::slotted([slot="icon"]) {
      width: 1em;
      font-size: var(--m3e-segmented-button-icon-size, 1.125rem) !important;
    }
    :host(:not([checked])) .check,
    :host(.-hide-selection) .check,
    :host(.-hide-selection:not(.-with-icon)) .icon {
      display: none;
    }
    :host([checked]) .icon {
      margin-inline-start: 0;
    }
    :host([checked]:not(.-hide-selection)) ::slotted([slot="icon"]) {
      display: none !important;
    }
    :host(:disabled) .base {
      border-color: color-mix(
        in srgb,
        var(--m3e-segmented-button-disabled-outline-color, ${t.color.onSurface})
          var(--m3e-segmented-button-disabled-outline-opacity, 12%),
        transparent
      );
      border-inline-end-color: var(
        --_segmented-button-disabled-outline-color,
        color-mix(
          in srgb,
          var(--m3e-segmented-button-disabled-outline-color, ${t.color.onSurface})
            var(--m3e-segmented-button-disabled-outline-opacity, 12%),
          transparent
        )
      );
    }
    :host(:disabled) .label {
      color: color-mix(
        in srgb,
        var(--m3e-segmented-button-disabled-label-text-color, ${t.color.onSurface})
          var(--m3e-segmented-button-disabled-label-text-opacity, 38%),
        transparent
      );
    }
    :host(:disabled) .icon {
      color: color-mix(
        in srgb,
        var(--m3e-segmented-button-disabled-icon-color, ${t.color.onSurface})
          var(--m3e-segmented-button-disabled-icon-opacity, 38%),
        transparent
      );
    }
    @media (prefers-reduced-motion) {
      .base,
      .icon,
      .label {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .base,
      .icon,
      .label {
        transition: none !important;
      }

      :host(:disabled) .label,
      :host(:disabled) .icon {
        color: GrayText;
      }
      :host(:not([selected]):not(:disabled)) .label,
      :host(:not([selected]):not(:disabled)) .icon {
        color: ButtonText;
      }
      :host(:not(:disabled)[checked]) .base {
        background-color: ButtonText;
      }
      :host(:not(:disabled)[checked]) .label,
      :host(:not(:disabled)[checked]) .icon {
        forced-color-adjust: none;
        color: ButtonFace;
      }
      :host {
        --m3e-segmented-button-outline-color: ButtonText;
      }
    }
  `,d([L(".focus-ring")],rr.prototype,"_focusRing",2),d([L(".state-layer")],rr.prototype,"_stateLayer",2),d([L(".ripple")],rr.prototype,"_ripple",2),d([p()],rr.prototype,"value",2),rr=d([y("m3e-button-segment")],rr);var Ay,Wd,pa,_y,Iy,zy,nn=class extends Bt(Oe(De(ot(N(D(M(k,"radiogroup"))))))){constructor(){super(...arguments);m(this,pa);m(this,Wd);this[Ay]=new rt().withWrap().withDirectionality(O.current).onActiveItemChange(()=>this[E].activeItem?.click());this.multi=!1;this.hideSelectionIndicator=!1}get segments(){return this[E]?.items??[]}get selected(){return this[E]?.selectedItems??[]}get value(){let e=this.selected.filter(i=>!i.disabled).map(i=>i.value);switch(e.length){case 0:return null;case 1:return e[0];default:return e}}get[(Ay=E,tt)](){let e=this.value;if(Array.isArray(e)){let i=new FormData;for(let n of e)i.append(this.name,n);return i}return e}connectedCallback(){super.connectedCallback(),this[E].multi=this.multi,this[E].disableRovingTabIndex(this.multi),g(this,Wd,O.observe(()=>this[E].directionality=O.current))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,Wd))==null||e.call(this)}update(e){super.update(e),e.has("disabled")&&(e.get("disabled")!==void 0||this.disabled)&&(this[E].disabled=this.disabled),e.has("multi")&&(this.role=this.multi?"group":"radiogroup",this[E].multi=this.multi,this[E].disableRovingTabIndex(this.multi)),(e.has("multi")||e.has("disabled"))&&(this.ariaDisabled=this.multi&&this.disabled?"true":null),e.has("hideSelectionIndicator")&&this.segments.forEach(i=>i.classList.toggle("-hide-selection",this.hideSelectionIndicator))}render(){return f`<slot
      @slotchange="${c(this,pa,_y)}"
      @keydown="${c(this,pa,Iy)}"
      @change="${c(this,pa,zy)}"
    ></slot>`}};Wd=new WeakMap,pa=new WeakSet,_y=function(){let{added:e}=this[E].setItems([...this.querySelectorAll("m3e-button-segment")]);e.forEach(i=>i.classList.toggle("-hide-selection",this.hideSelectionIndicator)),this[E].items.forEach((i,n)=>{i.classList.toggle("-first",n==0),i.classList.toggle("-last",n==this[E].items.length-1)})},Iy=function(e){this.multi||this[E].onKeyDown(e)},zy=function(e){e.stopPropagation(),this.dispatchEvent(new Event("change",{bubbles:!0}))},nn.styles=b`
    :host {
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
    }
    ::slotted(.-first) {
      border-start-start-radius: var(--m3e-segmented-button-start-shape, ${t.shape.corner.full});
      border-end-start-radius: var(--m3e-segmented-button-start-shape, ${t.shape.corner.full});
    }
    ::slotted(.-last) {
      border-start-end-radius: var(--m3e-segmented-button-end-shape, ${t.shape.corner.full});
      border-end-end-radius: var(--m3e-segmented-button-end-shape, ${t.shape.corner.full});
    }
    ::slotted(:not(.-first)) {
      --_segmented-button-left-border: none;
    }
  `,d([p({type:Boolean})],nn.prototype,"multi",2),d([p({attribute:"hide-selection-indicator",type:Boolean})],nn.prototype,"hideSelectionIndicator",2),nn=d([y("m3e-segmented-button")],nn);var Ud=class extends Bi{constructor(a){if(super(a),this.it=R,a.type!==yn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(a){if(a===R||a==null)return this._t=void 0,this.it=a;if(a===Mo)return a;if(typeof a!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(a===this.it)return this._t;this.it=a;let e=[a];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Ud.directiveName="unsafeHTML",Ud.resultType=1;var jp=xn(Ud);var se,Cs,$s,jd,Ss,Kd,Zd,Xd,Yd,Jd,Z,Kp,Ai,Oy,Dy,Fy,Vy,By,Ny,Zp,Gd,Xp,va,qy,xs,Sr=class extends ae(Bt(Ui(Oe(De(Wi(Ir(ot(N(D(M(k,"combobox"))))))))))){constructor(){super();m(this,Z);m(this,se);m(this,Cs,!1);m(this,$s,!1);m(this,jd,`m3e-select-${Sr.__nextId++}`);m(this,Ss,`${s(this,jd)}-list`);m(this,Kd,e=>c(this,Z,Dy).call(this,e));m(this,Zd,e=>c(this,Z,Fy).call(this,e));m(this,Xd,e=>c(this,Z,Vy).call(this,e));m(this,Yd,e=>c(this,Z,Ny).call(this,e));m(this,Jd,e=>c(this,Z,By).call(this,e));this._listKeyManager=new Dr().withWrap().withHomeAndEnd().withPageUpAndDown().withVerticalOrientation().withTypeahead().onActiveItemChange(()=>{this._listKeyManager.activeItem&&c(this,Z,qy).call(this,this._listKeyManager.activeItem)});this.hideSelectionIndicator=!1;this.multi=!1;new Le(this,{callback:()=>{s(this,se)&&(s(this,se).style.minWidth=s(this,Z,Kp))}})}get selected(){return this.options.filter(e=>e.selected)}get options(){return this._listKeyManager?.items??[]}get value(){let e=this.selected.filter(i=>!i.disabled).map(i=>i.value);switch(e.length){case 0:return null;case 1:return e[0];default:return e}}get[tt](){let e=this.value;if(Array.isArray(e)){let i=new FormData;for(let n of e)i.append(this.name,n);return i}return e}get shouldLabelFloat(){return this.selected.filter(e=>!e.isEmpty).length>0}onContainerClick(){g(this,$s,!0),c(this,Z,Gd).call(this),this.focus({preventScroll:!0})}clear(e=!1){let i=this.selected,n=i.length>0;n&&(i.forEach(l=>l.selected=!1),this.requestUpdate()),c(this,Z,va).call(this),n&&this.dispatchEvent(new Event("change",{bubbles:!0})),e&&this.focus()}connectedCallback(){super.connectedCallback(),this.ariaHasPopup="listbox",this.ariaExpanded="false",this.addEventListener("click",s(this,Kd)),this.addEventListener("keydown",s(this,Zd)),this.addEventListener("keyup",s(this,Xd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,Kd)),this.removeEventListener("keydown",s(this,Zd)),this.removeEventListener("keyup",s(this,Xd))}update(e){super.update(e),e.has("hideSelectionIndicator")&&this.options.forEach(i=>i.classList.toggle("-hide-selection-indicator",this.hideSelectionIndicator))}firstUpdated(e){super.firstUpdated(e),this._focusRing?.attach(this),s(this,Z,Ai)&&this._focusRing&&(this._focusRing.style.display="none")}render(){return f` <m3e-focus-ring class="focus-ring"></m3e-focus-ring>
      <div class="base">
        <m3e-text-overflow>
          <slot name="value">
            ${this.selected.filter(e=>!e.isEmpty).map((e,i)=>i>0?f`<span>, </span>${jp(e.innerHTML)}`:jp(e.innerHTML))}
          </slot>
        </m3e-text-overflow>
        <div class="arrow-wrapper" aria-hidden="true">
          <slot name="arrow">
            <svg class="arrow" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </slot>
        </div>
      </div>
      <div class="options" role="listbox" aria-multiselectable="${this.multi}">
        <slot @slotchange="${c(this,Z,Oy)}"></slot>
      </div>`}};se=new WeakMap,Cs=new WeakMap,$s=new WeakMap,jd=new WeakMap,Ss=new WeakMap,Kd=new WeakMap,Zd=new WeakMap,Xd=new WeakMap,Yd=new WeakMap,Jd=new WeakMap,Z=new WeakSet,Kp=function(){let e=s(this,Z,Ai);return`${e?e.menuAnchor.clientWidth:this.clientWidth}px`},Ai=function(){return this.closest("m3e-form-field")},Oy=function(){if(s(this,se))return;let{added:e}=this._listKeyManager.setItems([...this.querySelectorAll("m3e-option")]);e.forEach(i=>{i.id=i.id||`${s(this,jd)}-option-${this._listKeyManager.items.indexOf(i)}`,i.classList.toggle("-hide-selection-indicator",this.hideSelectionIndicator)}),s(this,Z,Ai)?.notifyControlStateChange()},Dy=function(e){e.defaultPrevented||this.disabled||c(this,Z,Gd).call(this)},Fy=function(e){if(!e.defaultPrevented)switch(g(this,$s,!1),e.key){case" ":case"Enter":e.preventDefault(),this.multi?s(this,se)||(g(this,Cs,!0),c(this,Z,Gd).call(this)):(s(this,se)&&this._listKeyManager.activeItem&&c(this,Z,xs).call(this,this._listKeyManager.activeItem),s(this,se)?.isOpen?Me()?c(this,Z,va).call(this):setTimeout(()=>c(this,Z,va).call(this),150):c(this,Z,Xp).call(this));break;case"Escape":case"Tab":c(this,Z,va).call(this);break;case"Down":case"ArrowDown":this.multi&&!s(this,se)?c(this,Z,Gd).call(this):(this._listKeyManager.onKeyDown(e),!s(this,se)&&this._listKeyManager.activeItem&&c(this,Z,xs).call(this,this._listKeyManager.activeItem));break;default:this._listKeyManager.onKeyDown(e),!this.multi&&!s(this,se)&&this._listKeyManager.activeItem&&c(this,Z,xs).call(this,this._listKeyManager.activeItem);break}},Vy=function(e){if(!e.defaultPrevented){if(s(this,Cs)){g(this,Cs,!1);return}switch(e.key){case" ":case"Enter":if(!this.multi)return;e.preventDefault(),s(this,se)&&this._listKeyManager.activeItem&&c(this,Z,xs).call(this,this._listKeyManager.activeItem);break}}},By=function(e){if(e.button===2)return;e.preventDefault(),e.stopImmediatePropagation();let i=e.composedPath().find(n=>n instanceof HTMLElement&&n.tagName==="M3E-OPTION");i&&!i.disabled&&(c(this,Z,xs).call(this,i),this._listKeyManager.setActiveItem(i),this.multi?this.requestUpdate():Me()?c(this,Z,va).call(this):setTimeout(()=>c(this,Z,va).call(this),150))},Ny=function(e){if(s(this,se))if(e.newState!=="closed"){let i=this.selected.find(n=>!n.disabled)??this._listKeyManager.items.find(n=>!n.disabled);this._listKeyManager.setActiveItem(i),i&&Wo(i,s(this,se),{block:"nearest",behavior:"instant"}),this.dispatchEvent(new ToggleEvent("toggle",{oldState:e.oldState,newState:e.newState}))}else Me()?c(this,Z,Zp).call(this,e):setTimeout(()=>c(this,Z,Zp).call(this,e),100)},Zp=function(e){s(this,se)&&([...s(this,se).childNodes].forEach(i=>this.append(i)),s(this,se).remove(),s(this,se).removeEventListener("toggle",s(this,Yd)),s(this,se).removeEventListener("pointerdown",s(this,Jd)),g(this,se,void 0),this.ariaExpanded="false",this.removeAttribute("aria-controls"),this.removeAttribute("aria-owns"),this.requestUpdate(),this.classList.toggle("-open",!1),s(this,Z,Ai)?.notifyControlStateChange(),this.dispatchEvent(new ToggleEvent("toggle",{oldState:e.oldState,newState:e.newState})))},Gd=function(){this.disabled||(s(this,se)?c(this,Z,va).call(this):c(this,Z,Xp).call(this))},Xp=function(){if(!s(this,se)){g(this,se,document.createElement("m3e-option-panel")),this.multi&&(s(this,se).ariaMultiSelectable="true"),s(this,se).id=s(this,Ss),s(this,se).style.overflowX="hidden",s(this,se).style.minWidth=s(this,Z,Kp),s(this,se).addEventListener("toggle",s(this,Yd)),s(this,se).addEventListener("pointerdown",s(this,Jd));for(let e of[...this.childNodes])s(this,se).append(e);(s(this,Z,Ai)??this).insertAdjacentElement("afterend",s(this,se)),this.ariaExpanded="true",this.setAttribute("aria-controls",s(this,Ss)),this.setAttribute("aria-owns",s(this,Ss)),s(this,Z,Ai)?.notifyControlStateChange(),setTimeout(()=>{s(this,se)?.show(this,s(this,Z,Ai)?.menuAnchor),this.classList.toggle("-open",!0)})}},va=function(){s(this,se)&&(s(this,se).hide(),this.removeAttribute("aria-activedescendant"),this.classList.toggle("-open",!1))},qy=function(e){if(this.setAttribute("aria-activedescendant",e.id),s(this,se)){Wo(e,s(this,se),{block:"nearest",behavior:"instant"});let i=!s(this,$s)&&(this.matches(":focus-visible")||bn());this.options.forEach(n=>{n===e&&i?(n.focusRing?.show(),n.stateLayer?.show("focused")):(n.focusRing?.hide(),n.stateLayer?.hide("focused"))})}},xs=function(e){let i=this.multi?!e.selected:!0;e.selected!==i&&(e.selected=i,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?(this.multi||this.selected.filter(n=>n!==e).forEach(n=>n.selected=!1),this.requestUpdate(),s(this,Z,Ai)?.notifyControlStateChange(),this.dispatchEvent(new Event("change",{bubbles:!0}))):e.selected=!i)},Sr.styles=b`
    :host {
      display: inline-flex;
      vertical-align: middle;
      outline: none;
      position: relative;
      font-size: var(--m3e-form-field-font-size, ${t.typescale.standard.body.large.fontSize});
      font-weight: var(--m3e-form-field-font-weight, ${t.typescale.standard.body.large.fontWeight});
      line-height: var(--m3e-form-field-line-height, ${t.typescale.standard.body.large.lineHeight});
      letter-spacing: var(--m3e-form-field-tracking, ${t.typescale.standard.body.large.tracking});
      min-height: var(--m3e-form-field-line-height, ${t.typescale.standard.body.large.lineHeight});
      border-radius: var(--m3e-select-container-shape, ${t.shape.corner.extraSmall});
    }
    :host(:not(:disabled)) {
      cursor: pointer;
    }
    :host(:disabled) {
      color: color-mix(
        in srgb,
        var(--m3e-select-disabled-color, ${t.color.onSurface}) var(--m3e-select-disabled-color-opacity, 38%),
        transparent
      );
    }
    .options {
      display: none;
    }
    .base {
      flex: 1 1 auto;
      display: inline-flex;
      align-items: center;
      overflow: hidden;
    }
    .arrow-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: var(--_select-arrow-margin-top);
    }
    ::slotted([slot="arrow"]),
    .arrow {
      vertical-align: middle;
      width: 1em;
      height: 1em;
      font-size: var(--m3e-select-icon-size, 1.5rem);
    }
    :host(.-open) .focus-ring {
      display: none;
    }
  `,Sr.__nextId=0,d([L(".focus-ring")],Sr.prototype,"_focusRing",2),d([p({attribute:"hide-selection-indicator",type:Boolean})],Sr.prototype,"hideSelectionIndicator",2),d([p({type:Boolean})],Sr.prototype,"multi",2),Sr=d([y("m3e-select")],Sr);var Km={size:r("var(--m3e-shape-size, 3rem)"),containerColor:r(`var(--m3e-shape-container-color, ${t.color.primary})`),transition:r(`var(--m3e-shape-transition, clip-path ${t.motion.spring.slowEffects})`)};var Wy=b`
  :host {
    display: inline-block;
    position: relative;
    aspect-ratio: 1 / 1;
    width: ${Km.size};
  }
  :host([name]) .wrapper {
    background-color: ${Km.containerColor};
    transition: ${Km.transition};
    transform-origin: center;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    will-change: clip-path;
  }
  ::slotted(img),
  ::slotted(video) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (prefers-reduced-motion) {
    .wrapper {
      transition: none;
    }
  }
`;var Uy={"4-leaf-clover":"M63.0014 190C49.8954 174.339 42 154.126 42 132.06C42 82.321 82.1131 42 131.595 42C153.99 42 174.466 50.2594 190.173 63.9131C205.843 50.2594 226.271 42 248.614 42C297.981 42 338 82.321 338 132.06C338 154.126 330.123 174.339 317.048 190C330.123 205.661 338 225.874 338 247.94C338 297.679 297.981 338 248.614 338C226.271 338 205.843 329.741 190.173 316.087C174.466 329.741 153.99 338 131.595 338C82.1131 338 42 297.679 42 247.94C42 225.874 49.8954 205.661 63.0014 190Z","4-sided-cookie":"M230.389 50.473C293.109 23.2328 356.767 86.8908 329.527 149.611L325.023 159.981C316.707 179.13 316.707 200.87 325.023 220.019L329.527 230.389C356.767 293.109 293.109 356.767 230.389 329.527L220.019 325.023C200.87 316.707 179.13 316.707 159.981 325.023L149.611 329.527C86.8908 356.767 23.2328 293.109 50.473 230.389L54.9768 220.019C63.2934 200.87 63.2934 179.13 54.9768 159.981L50.473 149.611C23.2328 86.8908 86.8908 23.2328 149.611 50.473L159.981 54.9768C179.13 63.2934 200.87 63.2934 220.019 54.9768L230.389 50.473Z","6-sided-cookie":"M134.186 54.5654C165.276 24.4782 214.724 24.4782 245.814 54.5654C255.328 63.7718 266.984 70.4811 279.738 74.0919C321.419 85.8924 346.142 128.586 335.552 170.473C332.312 183.291 332.312 196.709 335.552 209.527C346.142 251.414 321.419 294.108 279.738 305.908C266.984 309.519 255.328 316.228 245.814 325.435C214.724 355.522 165.276 355.522 134.186 325.435C124.672 316.228 113.016 309.519 100.262 305.908C58.5815 294.108 33.8578 251.414 44.4476 209.527C47.6879 196.709 47.6879 183.291 44.4476 170.473C33.8578 128.586 58.5815 85.8924 100.262 74.0919C113.016 70.4811 124.672 63.7718 134.186 54.5654Z","7-sided-cookie":"M142.67 51.7842C146.243 48.6394 148.029 47.067 149.671 45.7954C173.425 27.4015 206.575 27.4015 230.329 45.7954C231.971 47.067 233.757 48.6394 237.33 51.7842C238.526 52.8372 239.124 53.3636 239.724 53.8672C248.136 60.9247 258.171 65.7683 268.92 67.9594C269.688 68.1158 270.471 68.2562 272.038 68.537C276.719 69.3756 279.059 69.7949 281.075 70.2889C310.234 77.4346 330.902 103.411 331.364 133.493C331.396 135.573 331.283 137.953 331.057 142.713C330.982 144.307 330.944 145.104 330.925 145.888C330.665 156.88 333.143 167.763 338.136 177.553C338.493 178.252 338.872 178.953 339.63 180.356C341.894 184.547 343.026 186.642 343.897 188.53C356.503 215.834 349.127 248.226 325.949 267.344C324.347 268.666 322.42 270.061 318.566 272.852C317.276 273.787 316.63 274.254 316.007 274.729C307.27 281.377 300.326 290.105 295.803 300.122C295.48 300.837 295.169 301.571 294.547 303.04C292.69 307.427 291.761 309.62 290.832 311.48C277.393 338.382 247.526 352.798 218.162 346.556C216.132 346.124 213.842 345.484 209.262 344.204C207.728 343.776 206.962 343.562 206.203 343.369C195.569 340.668 184.431 340.668 173.797 343.369C173.038 343.562 172.272 343.776 170.738 344.204C166.158 345.484 163.868 346.124 161.838 346.556C132.474 352.798 102.607 338.382 89.168 311.48C88.2388 309.62 87.3102 307.427 85.453 303.04C84.8311 301.571 84.5202 300.837 84.1975 300.122C79.6741 290.105 72.7297 281.377 63.993 274.729C63.3696 274.254 62.7244 273.787 61.434 272.852C57.5801 270.061 55.6532 268.666 54.0507 267.344C30.873 248.226 23.4965 215.834 36.1027 188.53C36.9742 186.642 38.1062 184.547 40.3703 180.356C41.1283 178.953 41.5074 178.252 41.8636 177.553C46.8568 167.763 49.3353 156.88 49.0745 145.888C49.0559 145.104 49.0182 144.307 48.9426 142.713C48.7168 137.953 48.6039 135.573 48.6359 133.493C49.0982 103.411 69.7665 77.4346 98.9252 70.2889C100.941 69.7949 103.281 69.3756 107.962 68.537C109.529 68.2562 110.312 68.1158 111.08 67.9594C121.829 65.7683 131.864 60.9247 140.276 53.8672C140.876 53.3636 141.474 52.8372 142.67 51.7842Z","8-leaf-clover":"M338.584 189.998C364.427 238.164 344.902 281.771 295.066 295.061C281.771 344.902 238.164 364.422 189.998 338.584C141.831 364.427 98.2245 344.902 84.9337 295.066C35.0981 281.771 15.573 238.164 41.4157 189.998C15.573 141.831 35.0981 98.2245 84.9337 84.9337C98.2245 35.0981 141.831 15.573 189.998 41.4157C238.164 15.573 281.771 35.0981 295.061 84.9337C344.902 98.2245 364.422 141.831 338.584 189.998Z","9-sided-cookie":"M154.828 43.2756C156.574 41.8498 157.448 41.1369 158.245 40.535C177.03 26.3548 202.97 26.3548 221.755 40.535C222.552 41.1369 223.425 41.8498 225.172 43.2756C225.952 43.9121 226.342 44.2303 226.727 44.5333C235.567 51.4788 246.406 55.4147 257.652 55.7636C258.143 55.7788 258.647 55.785 259.654 55.7975C261.911 55.8255 263.039 55.8395 264.037 55.8898C287.563 57.0742 307.435 73.7107 312.689 96.6205C312.912 97.5928 313.121 98.6991 313.541 100.911C313.728 101.899 313.822 102.393 313.922 102.872C316.219 113.862 321.986 123.828 330.377 131.308C330.743 131.635 331.125 131.962 331.888 132.618C333.599 134.087 334.454 134.821 335.187 135.5C352.445 151.495 356.95 176.983 346.215 197.903C345.76 198.791 345.208 199.773 344.104 201.737C343.611 202.613 343.364 203.052 343.132 203.483C337.812 213.375 335.809 224.708 337.418 235.82C337.488 236.304 337.569 236.8 337.732 237.792C338.096 240.014 338.278 241.125 338.402 242.115C341.318 265.436 328.347 287.851 306.647 296.991C305.726 297.379 304.67 297.778 302.559 298.574C301.617 298.929 301.146 299.107 300.69 299.289C290.241 303.455 281.406 310.852 275.48 320.395C275.221 320.811 274.964 321.243 274.449 322.107C273.297 324.043 272.721 325.011 272.178 325.849C259.387 345.584 235.011 354.436 212.498 347.521C211.543 347.228 210.477 346.856 208.347 346.112C207.396 345.78 206.921 345.614 206.455 345.461C195.767 341.951 184.233 341.951 173.545 345.461C173.079 345.614 172.603 345.78 171.652 346.112C169.522 346.856 168.457 347.228 167.502 347.521C144.989 354.436 120.613 345.584 107.822 325.849C107.279 325.011 106.703 324.043 105.55 322.107C105.036 321.243 104.779 320.811 104.52 320.395C98.5939 310.852 89.7583 303.455 79.3096 299.289C78.8539 299.107 78.3827 298.929 77.4404 298.574C75.3294 297.778 74.274 297.379 73.3529 296.991C51.6523 287.851 38.6819 265.436 41.598 242.115C41.7218 241.125 41.9039 240.014 42.2682 237.792C42.4308 236.8 42.5121 236.304 42.5822 235.82C44.1908 224.708 42.188 213.375 36.8675 203.483C36.6354 203.052 36.389 202.613 35.8962 201.737C34.7921 199.773 34.2401 198.791 33.7845 197.903C23.0499 176.983 27.5544 151.495 44.8128 135.5C45.5454 134.821 46.4007 134.087 48.1113 132.618C48.875 131.962 49.2568 131.635 49.6228 131.308C58.0134 123.828 63.7804 113.862 66.0777 102.872C66.1779 102.393 66.2715 101.899 66.4588 100.911C66.8783 98.699 67.088 97.5928 67.311 96.6204C72.5652 73.7107 92.4369 57.0742 115.962 55.8898C116.961 55.8395 118.089 55.8255 120.346 55.7975C121.353 55.785 121.857 55.7788 122.347 55.7636C133.594 55.4147 144.432 51.4788 153.272 44.5333C153.658 44.2303 154.048 43.9121 154.828 43.2756Z","12-sided-cookie":"M166.697 39.8458C167.238 39.3157 167.508 39.0506 167.743 38.8298C180.246 27.0567 199.754 27.0567 212.257 38.8298C212.492 39.0506 212.762 39.3157 213.303 39.8458C213.628 40.1639 213.79 40.323 213.945 40.4703C221.945 48.1056 233.282 51.1433 244.028 48.5311C244.235 48.4807 244.456 48.4242 244.896 48.311C245.629 48.1224 245.996 48.0282 246.31 47.9542C263.024 44.0098 279.919 53.7642 284.86 70.2114C284.953 70.5199 285.055 70.8847 285.258 71.6143C285.38 72.0522 285.442 72.2711 285.502 72.4758C288.613 83.0884 296.912 91.3875 307.524 94.4985C307.729 94.5585 307.948 94.6195 308.386 94.7417C309.115 94.9452 309.48 95.0469 309.789 95.1396C326.236 100.081 335.99 116.976 332.046 133.69C331.972 134.004 331.878 134.371 331.689 135.104C331.576 135.544 331.519 135.765 331.469 135.972C328.857 146.718 331.894 158.055 339.53 166.055C339.677 166.21 339.836 166.372 340.154 166.697C340.684 167.238 340.949 167.508 341.17 167.743C352.943 180.246 352.943 199.754 341.17 212.257C340.949 212.492 340.684 212.762 340.154 213.303C339.836 213.628 339.677 213.79 339.53 213.945C331.894 221.945 328.857 233.282 331.469 244.028C331.519 244.235 331.576 244.456 331.689 244.896C331.878 245.629 331.972 245.996 332.046 246.31C335.99 263.024 326.236 279.919 309.789 284.86C309.48 284.953 309.115 285.055 308.386 285.258C307.948 285.381 307.729 285.442 307.524 285.502C296.912 288.613 288.613 296.912 285.502 307.524C285.442 307.729 285.381 307.948 285.258 308.386C285.055 309.115 284.953 309.48 284.86 309.789C279.919 326.236 263.024 335.99 246.31 332.046C245.996 331.972 245.629 331.878 244.896 331.689C244.456 331.576 244.235 331.519 244.028 331.469C233.282 328.857 221.945 331.894 213.945 339.53C213.79 339.677 213.628 339.836 213.303 340.154C212.762 340.684 212.492 340.949 212.257 341.17C199.754 352.943 180.246 352.943 167.743 341.17C167.508 340.949 167.238 340.684 166.697 340.154C166.372 339.836 166.21 339.677 166.055 339.53C158.055 331.894 146.718 328.857 135.972 331.469C135.765 331.519 135.544 331.576 135.104 331.689C134.371 331.878 134.004 331.972 133.69 332.046C116.976 335.99 100.081 326.236 95.1396 309.789C95.0469 309.48 94.9452 309.115 94.7417 308.386C94.6195 307.948 94.5585 307.729 94.4985 307.524C91.3875 296.912 83.0884 288.613 72.4758 285.502C72.2711 285.442 72.0522 285.38 71.6143 285.258C70.8847 285.055 70.5199 284.953 70.2114 284.86C53.7642 279.919 44.0098 263.024 47.9542 246.31C48.0282 245.996 48.1224 245.629 48.311 244.896C48.4242 244.456 48.4807 244.235 48.5311 244.028C51.1433 233.282 48.1056 221.945 40.4703 213.945C40.323 213.79 40.1639 213.628 39.8458 213.303C39.3157 212.762 39.0506 212.492 38.8298 212.257C27.0567 199.754 27.0567 180.246 38.8298 167.743C39.0506 167.508 39.3157 167.238 39.8458 166.697C40.1639 166.372 40.323 166.21 40.4703 166.055C48.1056 158.055 51.1433 146.718 48.5311 135.972C48.4807 135.765 48.4242 135.544 48.311 135.104C48.1224 134.371 48.0282 134.004 47.9542 133.69C44.0098 116.976 53.7642 100.081 70.2114 95.1396C70.5199 95.0469 70.8847 94.9452 71.6143 94.7417C72.0522 94.6195 72.2711 94.5585 72.4758 94.4985C83.0884 91.3875 91.3875 83.0884 94.4985 72.4758C94.5585 72.2711 94.6195 72.0522 94.7417 71.6143C94.9452 70.8847 95.0469 70.5199 95.1396 70.2114C100.081 53.7642 116.976 44.0098 133.69 47.9542C134.004 48.0282 134.371 48.1224 135.104 48.311C135.544 48.4242 135.765 48.4807 135.972 48.5311C146.718 51.1433 158.055 48.1056 166.055 40.4703C166.21 40.323 166.372 40.1639 166.697 39.8458Z",burst:"M187.293 26.6421C188.056 25.2785 188.437 24.5966 188.902 24.3108C189.575 23.8964 190.425 23.8964 191.098 24.3108C191.563 24.5966 191.944 25.2785 192.707 26.6421L218.917 73.4925C219.386 74.3306 219.62 74.7497 219.937 75.0046C220.396 75.3737 220.989 75.5326 221.571 75.4425C221.973 75.3802 222.386 75.1345 223.211 74.6431L269.335 47.1743C270.677 46.3748 271.348 45.9751 271.893 45.9598C272.684 45.9377 273.42 46.3624 273.796 47.0581C274.055 47.5379 274.045 48.3191 274.023 49.8814L273.296 103.56C273.283 104.52 273.277 105 273.424 105.38C273.637 105.929 274.071 106.363 274.62 106.576C275 106.723 275.48 106.717 276.44 106.704L330.119 105.977C331.681 105.955 332.462 105.945 332.942 106.204C333.638 106.58 334.062 107.316 334.04 108.107C334.025 108.652 333.625 109.323 332.826 110.665L305.357 156.789C304.865 157.614 304.62 158.027 304.557 158.429C304.467 159.011 304.626 159.604 304.995 160.063C305.25 160.38 305.669 160.614 306.508 161.083L353.358 187.293C354.722 188.056 355.403 188.437 355.689 188.902C356.104 189.575 356.104 190.425 355.689 191.098C355.403 191.563 354.722 191.944 353.358 192.707L306.508 218.917C305.669 219.386 305.25 219.62 304.995 219.937C304.626 220.396 304.467 220.989 304.557 221.571C304.62 221.973 304.865 222.386 305.357 223.211L332.826 269.335C333.625 270.677 334.025 271.348 334.04 271.893C334.062 272.684 333.638 273.42 332.942 273.796C332.462 274.055 331.681 274.045 330.119 274.023L276.44 273.296C275.48 273.283 275 273.277 274.62 273.424C274.071 273.637 273.637 274.071 273.424 274.62C273.277 275 273.283 275.48 273.296 276.44L274.023 330.119C274.045 331.681 274.055 332.462 273.796 332.942C273.42 333.638 272.684 334.062 271.893 334.04C271.348 334.025 270.677 333.625 269.335 332.826L223.211 305.357C222.386 304.865 221.973 304.62 221.571 304.557C220.989 304.467 220.396 304.626 219.937 304.995C219.62 305.25 219.386 305.669 218.917 306.508L192.707 353.358C191.944 354.722 191.563 355.403 191.098 355.689C190.425 356.104 189.575 356.104 188.902 355.689C188.437 355.403 188.056 354.722 187.293 353.358L161.083 306.508C160.614 305.669 160.38 305.25 160.063 304.995C159.604 304.626 159.011 304.467 158.429 304.557C158.027 304.62 157.614 304.865 156.789 305.357L110.665 332.826C109.323 333.625 108.652 334.025 108.107 334.04C107.316 334.062 106.58 333.638 106.204 332.942C105.945 332.462 105.955 331.681 105.977 330.119L106.704 276.44C106.717 275.48 106.723 275 106.576 274.62C106.363 274.071 105.929 273.637 105.38 273.424C105 273.277 104.52 273.283 103.56 273.296L49.8814 274.023C48.3191 274.045 47.5379 274.055 47.0581 273.796C46.3624 273.42 45.9377 272.684 45.9598 271.893C45.9751 271.348 46.3748 270.677 47.1743 269.335L74.6431 223.211C75.1345 222.386 75.3802 221.973 75.4425 221.571C75.5326 220.989 75.3737 220.396 75.0046 219.937C74.7497 219.62 74.3306 219.386 73.4925 218.917L26.6421 192.707C25.2785 191.944 24.5966 191.563 24.3108 191.098C23.8964 190.425 23.8964 189.575 24.3108 188.902C24.5966 188.437 25.2785 188.056 26.6421 187.293L73.4925 161.083C74.3306 160.614 74.7497 160.38 75.0046 160.063C75.3737 159.604 75.5326 159.011 75.4425 158.429C75.3802 158.027 75.1345 157.614 74.6431 156.789L47.1743 110.665C46.3748 109.323 45.9751 108.652 45.9598 108.107C45.9377 107.316 46.3624 106.58 47.0581 106.204C47.5379 105.945 48.3191 105.955 49.8814 105.977L103.56 106.704C104.52 106.717 105 106.723 105.38 106.576C105.929 106.363 106.363 105.929 106.576 105.38C106.723 105 106.717 104.52 106.704 103.56L105.977 49.8814C105.955 48.3191 105.945 47.5379 106.204 47.0581C106.58 46.3624 107.316 45.9377 108.107 45.9598C108.652 45.9751 109.323 46.3748 110.665 47.1743L156.789 74.6431C157.614 75.1345 158.027 75.3802 158.429 75.4425C159.011 75.5326 159.604 75.3737 160.063 75.0046C160.38 74.7497 160.614 74.3306 161.083 73.4925L187.293 26.6421Z",oval:"M271.309 271.309C201.705 340.913 108.877 360.935 63.9707 316.029C19.0648 271.123 39.0867 178.295 108.691 108.691C178.295 39.0867 271.123 19.0648 316.029 63.9707C360.935 108.877 340.913 201.705 271.309 271.309Z",pentagon:"M155.064 49.459C176.093 34.1803 204.569 34.1803 225.598 49.459L322.926 120.171C343.955 135.45 352.754 162.532 344.722 187.253L307.546 301.668C299.514 326.39 276.476 343.127 250.483 343.127H130.18C104.186 343.127 81.1489 326.39 73.1164 301.668L35.9407 187.253C27.9082 162.532 36.7077 135.45 57.737 120.171L155.064 49.459Z",pill:"M116.116 71.7851C169.162 18.7383 255.168 18.7383 308.215 71.7851C361.262 124.832 361.262 210.838 308.215 263.884L263.884 308.215C210.838 361.262 124.832 361.262 71.7851 308.215C18.7383 255.168 18.7383 169.162 71.7851 116.116L116.116 71.7851Z","soft-burst":"M175.147 33.1508C181.983 22.2831 198.017 22.2831 204.853 33.1508L221.238 59.2009C225.731 66.3458 234.797 69.2506 242.692 66.0751L271.475 54.4972C283.482 49.6671 296.455 58.9613 295.507 71.7154L293.235 102.288C292.612 110.673 298.215 118.278 306.494 120.284L336.681 127.601C349.275 130.653 354.23 145.692 345.861 155.461L325.8 178.877C320.298 185.3 320.298 194.7 325.8 201.123L345.861 224.539C354.23 234.308 349.275 249.347 336.681 252.399L306.494 259.716C298.215 261.722 292.612 269.327 293.235 277.712L295.507 308.285C296.455 321.039 283.482 330.333 271.475 325.503L242.692 313.925C234.797 310.749 225.731 313.654 221.238 320.799L204.853 346.849C198.017 357.717 181.983 357.717 175.147 346.849L158.762 320.799C154.269 313.654 145.203 310.749 137.308 313.925L108.525 325.503C96.5177 330.333 83.5454 321.039 84.4931 308.285L86.7649 277.712C87.388 269.327 81.785 261.722 73.5056 259.716L43.3186 252.399C30.7252 249.347 25.7702 234.308 34.1391 224.539L54.1997 201.123C59.7018 194.7 59.7018 185.3 54.1997 178.877L34.1391 155.461C25.7702 145.692 30.7252 130.653 43.3186 127.601L73.5056 120.284C81.785 118.278 87.388 110.673 86.7649 102.288L84.4931 71.7154C83.5454 58.9613 96.5177 49.6671 108.525 54.4972L137.308 66.0751C145.203 69.2506 154.269 66.3458 158.762 59.201L175.147 33.1508Z",sunny:"M276.453 68.8118C286.405 69.4881 291.381 69.8263 295.404 71.5853C301.223 74.1305 305.87 78.7766 308.415 84.5965C310.174 88.6186 310.512 93.5948 311.188 103.547L312.732 126.259C313.005 130.284 313.142 132.296 313.579 134.219C314.212 136.997 315.31 139.648 316.827 142.059C317.877 143.728 319.203 145.248 321.856 148.288L336.824 165.438C343.384 172.954 346.663 176.712 348.263 180.8C350.579 186.715 350.579 193.285 348.263 199.2C346.663 203.288 343.384 207.046 336.824 214.562L321.856 231.712C319.203 234.752 317.877 236.272 316.827 237.941C315.31 240.352 314.212 243.003 313.579 245.781C313.142 247.704 313.005 249.716 312.732 253.741L311.188 276.453C310.512 286.405 310.174 291.381 308.415 295.404C305.87 301.223 301.223 305.87 295.404 308.415C291.381 310.174 286.405 310.512 276.453 311.188L253.741 312.732C249.716 313.005 247.704 313.142 245.781 313.579C243.003 314.212 240.352 315.31 237.941 316.827C236.272 317.877 234.752 319.203 231.712 321.856L214.562 336.824C207.046 343.384 203.288 346.663 199.2 348.263C193.285 350.579 186.715 350.579 180.8 348.263C176.712 346.663 172.954 343.384 165.438 336.824L148.288 321.856C145.248 319.203 143.728 317.877 142.059 316.827C139.648 315.31 136.997 314.212 134.219 313.579C132.296 313.142 130.284 313.005 126.259 312.732L103.547 311.188C93.5947 310.512 88.6186 310.174 84.5965 308.415C78.7766 305.87 74.1305 301.223 71.5853 295.404C69.8263 291.381 69.4881 286.405 68.8118 276.453L67.2684 253.741C66.9949 249.716 66.8581 247.704 66.4206 245.781C65.7883 243.003 64.6903 240.352 63.173 237.941C62.123 236.272 60.7965 234.752 58.1437 231.712L43.1756 214.562C36.6164 207.046 33.3369 203.288 31.7366 199.2C29.4211 193.285 29.4211 186.715 31.7366 180.8C33.3369 176.712 36.6164 172.954 43.1756 165.438L58.1437 148.288C60.7965 145.248 62.123 143.728 63.173 142.059C64.6903 139.648 65.7883 136.997 66.4206 134.219C66.8581 132.296 66.9949 130.284 67.2684 126.259L68.8118 103.547C69.4881 93.5948 69.8263 88.6186 71.5853 84.5965C74.1305 78.7766 78.7766 74.1305 84.5965 71.5853C88.6186 69.8263 93.5948 69.4881 103.547 68.8118L126.259 67.2684C130.284 66.9949 132.296 66.8581 134.219 66.4206C136.997 65.7883 139.648 64.6903 142.059 63.173C143.728 62.123 145.248 60.7966 148.288 58.1437L165.438 43.1756C172.954 36.6164 176.712 33.3369 180.8 31.7366C186.715 29.4211 193.285 29.4211 199.2 31.7366C203.288 33.3369 207.046 36.6164 214.562 43.1756L231.712 58.1437C234.752 60.7966 236.272 62.123 237.941 63.173C240.352 64.6903 243.003 65.7883 245.781 66.4206C247.704 66.8581 249.716 66.9949 253.741 67.2684L276.453 68.8118Z","very-sunny":"M166.725 43.1869C177.261 25.6044 202.739 25.6044 213.275 43.1868L225.124 62.9597C231.268 73.2136 243.399 78.2385 254.995 75.3327L277.355 69.7294C297.237 64.7468 315.253 82.7627 310.271 102.645L304.667 125.005C301.762 136.601 306.786 148.732 317.04 154.876L336.813 166.725C354.396 177.261 354.396 202.739 336.813 213.275L317.04 225.124C306.786 231.268 301.762 243.399 304.667 254.995L310.271 277.355C315.253 297.237 297.237 315.253 277.355 310.271L254.995 304.667C243.399 301.762 231.268 306.786 225.124 317.04L213.275 336.813C202.739 354.396 177.261 354.396 166.725 336.813L154.876 317.04C148.732 306.786 136.601 301.762 125.005 304.667L102.646 310.271C82.7627 315.253 64.7468 297.237 69.7294 277.355L75.3327 254.995C78.2385 243.399 73.2136 231.268 62.9597 225.124L43.1869 213.275C25.6044 202.739 25.6044 177.261 43.1868 166.725L62.9597 154.876C73.2136 148.732 78.2385 136.601 75.3327 125.005L69.7294 102.646C64.7468 82.7627 82.7627 64.7468 102.645 69.7294L125.005 75.3327C136.601 78.2385 148.732 73.2136 154.876 62.9597L166.725 43.1869Z",bun:"M38.875 113.322C38.875 69.5137 74.3887 34 118.197 34H261.803C305.611 34 341.125 69.5137 341.125 113.322C341.125 149.45 316.972 179.937 283.932 189.516C283.717 189.579 283.567 189.776 283.567 190C283.567 190.224 283.717 190.421 283.932 190.484C316.972 200.063 341.125 230.55 341.125 266.678C341.125 310.486 305.611 346 261.803 346H118.197C74.3887 346 38.875 310.486 38.875 266.678C38.875 230.785 62.7138 200.461 95.422 190.674C95.72 190.585 95.9264 190.311 95.9264 190C95.9264 189.689 95.72 189.415 95.422 189.326C62.7138 179.539 38.875 149.214 38.875 113.322Z",boom:"M186.738 36.413C187.51 30.2399 187.896 27.1534 188.483 26.6019C189.337 25.7994 190.663 25.7994 191.517 26.6019C192.104 27.1534 192.49 30.2399 193.262 36.413L203.079 114.907C203.39 117.398 203.546 118.644 203.993 119.158C204.642 119.904 205.703 120.131 206.598 119.715C207.214 119.428 207.861 118.353 209.153 116.205L249.875 48.5119C253.078 43.1883 254.679 40.5264 255.438 40.2626C256.543 39.8785 257.754 40.4209 258.21 41.5032C258.522 42.247 257.626 45.2245 255.834 51.1796L233.049 126.902C232.326 129.305 231.964 130.507 232.165 131.159C232.456 132.107 233.333 132.748 234.319 132.733C234.998 132.723 236.023 132.006 238.073 130.572L302.659 85.3844C307.738 81.8306 310.278 80.0538 311.078 80.1231C312.243 80.2241 313.13 81.2151 313.108 82.39C313.093 83.1974 311.07 85.5511 307.024 90.2585L255.576 150.116C253.943 152.016 253.126 152.966 253.045 153.644C252.928 154.628 253.47 155.573 254.377 155.963C255.001 156.231 256.228 155.995 258.681 155.524L335.963 140.655C342.041 139.485 345.08 138.901 345.783 139.291C346.806 139.86 347.215 141.128 346.72 142.192C346.38 142.924 343.579 144.247 337.979 146.893L266.764 180.536C264.503 181.604 263.373 182.137 263.025 182.724C262.52 183.575 262.633 184.66 263.304 185.387C263.765 185.887 264.981 186.173 267.413 186.745L344.029 204.766C350.054 206.184 353.067 206.892 353.551 207.537C354.256 208.474 354.117 209.8 353.234 210.57C352.627 211.099 349.534 211.163 343.347 211.289L264.679 212.901C262.182 212.952 260.933 212.977 260.378 213.371C259.572 213.942 259.237 214.979 259.555 215.917C259.774 216.563 260.77 217.322 262.76 218.839L325.462 266.634C330.393 270.393 332.858 272.272 333.04 273.059C333.304 274.203 332.641 275.358 331.523 275.7C330.755 275.935 327.903 274.728 322.2 272.314L249.681 241.615C247.379 240.641 246.228 240.153 245.562 240.286C244.595 240.478 243.869 241.288 243.78 242.275C243.719 242.955 244.321 244.055 245.526 246.255L283.472 315.559C286.456 321.01 287.948 323.735 287.796 324.528C287.574 325.682 286.501 326.466 285.341 326.321C284.544 326.221 282.428 323.952 278.194 319.415L224.364 261.714C222.655 259.882 221.801 258.966 221.139 258.815C220.177 258.594 219.187 259.038 218.706 259.904C218.375 260.5 218.48 261.751 218.691 264.253L225.32 343.084C225.841 349.283 226.102 352.383 225.642 353.045C224.973 354.009 223.676 354.286 222.675 353.679C221.987 353.263 220.971 350.324 218.939 344.447L193.105 269.721C192.285 267.349 191.875 266.163 191.332 265.754C190.542 265.16 189.458 265.16 188.668 265.754C188.125 266.163 187.715 267.349 186.895 269.721L161.061 344.447C159.029 350.324 158.013 353.263 157.325 353.679C156.324 354.286 155.027 354.009 154.358 353.045C153.898 352.383 154.159 349.283 154.68 343.084L161.309 264.253C161.52 261.751 161.625 260.5 161.294 259.904C160.813 259.038 159.823 258.594 158.861 258.815C158.199 258.966 157.345 259.882 155.636 261.714L101.806 319.415C97.5724 323.952 95.4556 326.221 94.6586 326.321C93.4987 326.466 92.4257 325.682 92.2041 324.528C92.0519 323.735 93.544 321.01 96.5282 315.559L134.474 246.255C135.679 244.055 136.281 242.955 136.22 242.275C136.131 241.288 135.405 240.478 134.438 240.286C133.772 240.153 132.621 240.641 130.319 241.615L57.8002 272.314C52.097 274.728 49.2455 275.935 48.4771 275.7C47.3589 275.358 46.6958 274.203 46.9601 273.059C47.1418 272.272 49.6074 270.393 54.5385 266.634L117.24 218.839C119.23 217.322 120.226 216.563 120.445 215.917C120.763 214.979 120.428 213.942 119.622 213.371C119.067 212.977 117.818 212.952 115.321 212.901L36.6531 211.289C30.4664 211.163 27.373 211.099 26.7662 210.57C25.8831 209.8 25.7445 208.474 26.449 207.537C26.9332 206.892 29.9459 206.184 35.9713 204.766L112.587 186.745C115.019 186.173 116.235 185.887 116.697 185.387C117.367 184.66 117.48 183.575 116.975 182.724C116.627 182.137 115.497 181.604 113.236 180.536L42.0212 146.893C36.4205 144.247 33.6202 142.924 33.2799 142.192C32.7846 141.128 33.1944 139.86 34.2174 139.291C34.9204 138.901 37.9592 139.485 44.037 140.655L121.319 155.524C123.772 155.995 124.999 156.231 125.623 155.963C126.53 155.573 127.072 154.628 126.955 153.644C126.874 152.966 126.057 152.016 124.424 150.116L72.9761 90.2585C68.93 85.5511 66.907 83.1974 66.8919 82.39C66.87 81.2151 67.7575 80.2241 68.922 80.1231C69.7222 80.0538 72.2618 81.8306 77.3411 85.3844L141.927 130.572C143.977 132.006 145.002 132.723 145.681 132.733C146.667 132.748 147.544 132.107 147.835 131.159C148.036 130.507 147.674 129.305 146.951 126.902L124.166 51.1796C122.374 45.2245 121.478 42.247 121.79 41.5032C122.246 40.4209 123.457 39.8785 124.562 40.2626C125.321 40.5264 126.922 43.1883 130.125 48.5119L170.847 116.205C172.139 118.354 172.786 119.428 173.402 119.715C174.297 120.131 175.358 119.904 176.007 119.158C176.454 118.644 176.61 117.398 176.921 114.907L186.738 36.413Z",arch:"M345 293.727C345 299.96 345 303.076 344.689 305.696C342.259 326.14 326.14 342.259 305.696 344.689C303.076 345 299.96 345 293.727 345H86.2732C80.0405 345 76.9242 345 74.3043 344.689C53.8596 342.259 37.7407 326.14 35.3113 305.696C35 303.076 35 299.96 35 293.727L35 190C35 104.396 104.396 35 190 35C275.604 35 345 104.396 345 190V293.727Z",arrow:"M262.422 104.907C253.213 90.2936 243.84 75.4777 231.389 63.8739C218.938 52.2412 202.808 44.023 186.27 45.0937C171.748 46.0486 158.288 54.0932 147.662 64.5974C137.036 75.1015 128.781 88.0365 120.661 100.856C98.7011 135.464 76.7136 170.073 54.7533 204.711C44.3181 221.147 33.6105 238.307 30.7224 257.898C27.2349 281.568 36.6348 305.673 53.3093 321.415C70.7467 337.88 99.0008 336.549 120.225 332.035C143.493 327.086 166.244 317.769 189.975 317.797C210.301 317.797 229.945 324.685 249.726 329.691C269.479 334.668 290.704 337.735 309.776 330.327C333.453 321.154 350.454 295.082 349.991 268.315C349.555 243.892 323.508 201.759 323.508 201.759C323.508 201.759 282.78 137.194 262.422 104.907Z",diamond:"M247.442 306.481C230.606 328.514 222.188 339.53 212.466 344.548C198.383 351.817 181.617 351.817 167.534 344.548C157.812 339.53 149.394 328.514 132.558 306.481L76.646 233.308C66.4059 219.906 61.2859 213.206 58.7505 206.032C55.0832 195.654 55.0832 184.346 58.7505 173.968C61.2859 166.794 66.4059 160.094 76.6461 146.692L132.558 73.5194C149.394 51.4863 157.812 40.4697 167.534 35.4518C181.617 28.1827 198.383 28.1827 212.466 35.4518C222.188 40.4697 230.606 51.4863 247.442 73.5195L303.354 146.692C313.594 160.094 318.714 166.794 321.249 173.968C324.917 184.346 324.917 195.654 321.249 206.032C318.714 213.206 313.594 219.906 303.354 233.308L247.442 306.481Z",fan:"M40 87.3684C40 85.697 40 84.8613 40.0219 84.1547C40.7686 60.0969 60.0969 40.7686 84.1547 40.0219C84.8613 40 85.697 40 87.3684 40C96.2825 40 100.74 40 104.508 40.117C232.816 44.0992 335.901 147.184 339.883 275.492C340 279.26 340 283.717 340 292.632C340 294.303 340 295.139 339.978 295.845C339.231 319.903 319.903 339.231 295.845 339.978C295.139 340 294.303 340 292.632 340H107.441C87.0642 340 76.8757 340 68.7935 336.8C57.0947 332.168 47.8318 322.905 43.2 311.207C40 303.124 40 292.936 40 272.559V87.3684Z",flower:"M303.126 76.8625C291.251 64.988 264.194 70.8597 231.547 89.6813C221.771 53.2855 206.79 30 189.996 30C173.203 30 158.223 53.2841 148.447 89.6779C115.802 70.8581 88.7463 64.9874 76.8722 76.8614C64.997 88.7367 70.8701 115.796 89.6945 148.446C53.2912 158.222 30 173.204 30 190C30 206.793 53.283 221.773 89.6753 231.549C70.8495 264.2 64.9757 291.261 76.8513 303.137C88.7274 315.013 115.79 309.138 148.444 290.31C158.22 326.711 173.201 350 189.996 350C206.792 350 221.774 326.709 231.55 290.307C264.205 309.136 291.27 315.012 303.146 303.136C315.022 291.26 309.148 264.2 290.323 231.549C326.716 221.773 350 206.793 350 190C350 173.204 326.708 158.222 290.304 148.446C309.128 115.797 315.001 88.7376 303.126 76.8625Z",gem:"M133.415 65.7498C150.981 52.991 159.763 46.6116 169.124 43.4402C182.663 38.8533 197.337 38.8533 210.876 43.4402C220.237 46.6116 229.019 52.991 246.585 65.7498L286.083 94.4402C296.514 102.017 301.729 105.805 305.981 110.353C312.125 116.926 316.839 124.702 319.823 133.189C321.888 139.062 322.834 145.437 324.725 158.189L332.038 207.501C335.355 229.87 337.014 241.055 335.34 251.136C332.918 265.718 325.6 279.04 314.59 288.907C306.979 295.728 296.649 300.329 275.987 309.532L229.176 330.382C216.707 335.935 210.473 338.712 204.064 340.131C194.8 342.182 185.2 342.182 175.936 340.131C169.527 338.712 163.293 335.935 150.824 330.382L104.013 309.532C83.3515 300.329 73.0207 295.728 65.4097 288.907C54.4005 279.04 47.0819 265.718 44.6602 251.136C42.9859 241.055 44.6447 229.87 47.9621 207.501L55.2752 158.189C57.1662 145.437 58.1117 139.062 60.1768 133.189C63.1612 124.702 67.8747 116.926 74.0191 110.353C78.2706 105.805 83.4862 102.017 93.9172 94.4402L133.415 65.7498Z","ghost-ish":"M40 182.857C40 103.959 107.157 40 190 40C272.843 40 340 103.959 340 182.857L340 282.857C340 314.416 313.137 340 280 340C270.178 340 260.907 337.752 252.724 333.768C248.554 331.737 244.394 329.512 240.216 327.277C225.513 319.411 210.592 311.429 194.27 311.429H185.73C169.408 311.429 154.487 319.411 139.784 327.277C135.606 329.512 131.446 331.737 127.276 333.768C119.093 337.752 109.822 340 100 340C66.8629 340 40 314.416 40 282.857L40 182.857Z",heart:"M281.1 47.134C259.439 47.134 240.113 57.3021 227.481 73.1973L190 114.513V114.379L152.519 73.0633C139.887 57.1681 120.561 47 98.8995 47C60.8478 47 30 78.3656 30 117.059C30 151.058 58.3751 176.471 78.9187 200.884C99.3895 225.205 119.856 249.523 140.323 273.844L186.272 328.437C187.516 329.914 188.756 331.388 190 332.866V333C191.244 331.522 192.484 330.048 193.728 328.571C209.043 310.375 224.358 292.178 239.677 273.978C260.144 249.657 280.614 225.339 301.081 201.018C321.625 176.608 350 151.196 350 117.193C350 78.4996 319.152 47.134 281.1 47.134Z",hexagon:"M360.196 147.081C367.995 160.591 371.894 167.346 373.864 174.403C376.712 184.606 376.712 195.394 373.864 205.597C371.894 212.654 367.995 219.409 360.196 232.919L336.437 274.079C328.638 287.589 324.738 294.344 319.613 299.58C312.202 307.148 302.86 312.543 292.601 315.177C285.505 317 277.706 317 262.108 317L117.892 317C102.294 317 94.4949 317 87.399 315.178C77.1398 312.543 67.798 307.149 60.3873 299.58C55.2616 294.345 51.3621 287.589 43.5632 274.079L19.8039 232.919C12.0054 219.409 8.10612 212.654 6.13613 205.597C3.28796 195.394 3.28796 184.606 6.13613 174.403C8.10613 167.346 12.0054 160.591 19.804 147.081L43.5632 105.921C51.3622 92.4107 55.2616 85.6554 60.3874 80.4202C67.798 72.8514 77.1398 67.457 87.3989 64.8224C94.4949 63.0002 102.294 63.0002 117.892 63.0002L262.108 63C277.706 63 285.505 63 292.601 64.8222C302.86 67.4567 312.202 72.8511 319.613 80.42C324.738 85.6551 328.638 92.4104 336.437 105.921L360.196 147.081Z","pixel-circle":"M253.556 34H126.444V54.2217H83.1111V80.2222H57.1111V126.444H34V253.556H57.1111V299.778H83.1111V325.777H126.444V346H253.556V325.777H296.889V299.778H322.889V253.556H346V126.444H322.889V80.2222H296.889V54.2217H253.556V34Z","pixel-triangle":"M121.641 30H66V350H121.641V322.174H164.564V295.739H209.077V265.13H245.641V240.086H282.205V209.478H314V170.522H282.205V139.912H245.641V114.869H209.077V84.2609H164.564V57.8262H121.641V30Z",puffy:"M371.982 187.559C371.686 165.488 353.541 147.816 331.439 148.112C330.218 148.112 329.016 148.204 327.832 148.334C328.757 147.576 329.663 146.799 330.532 145.949C346.365 130.551 346.698 105.226 331.291 89.4031C330.384 88.4788 329.478 87.5546 328.553 86.6673C312.721 71.2692 287.4 71.6019 271.974 87.4252C271.123 88.294 270.347 89.1997 269.588 90.124C269.718 88.9409 269.792 87.7394 269.81 86.5194C270.125 64.4482 252.443 46.3142 230.359 46C229.711 46 229.064 46 228.417 46H227.103C210.734 46 196.696 55.8341 190.5 69.9013C184.304 55.8341 170.247 46 153.897 46H152.583C151.936 46 151.289 46 150.641 46C128.557 46.2958 110.875 64.4297 111.171 86.5194C111.171 87.7394 111.264 88.9409 111.393 90.124C110.635 89.1997 109.858 88.294 109.007 87.4252C93.6001 71.6019 68.2608 71.2692 52.4283 86.6673C51.5035 87.573 50.5787 88.4788 49.6909 89.4031C34.2839 105.226 34.6168 130.532 50.4493 145.949C51.3186 146.799 52.2249 147.576 53.1497 148.334C51.9659 148.204 50.7637 148.13 49.543 148.112C27.4589 147.816 9.31443 165.488 9 187.559C9 188.206 9 188.853 9 189.5C9 190.147 9 190.794 9 191.441C9.29593 213.512 27.4404 231.184 49.543 230.888C50.7637 230.888 51.9659 230.796 53.1497 230.666C52.2249 231.424 51.3186 232.201 50.4493 233.051C34.6168 248.449 34.2839 273.774 49.6909 289.597C50.5972 290.521 51.5035 291.445 52.4283 292.333C68.2608 307.731 93.5816 307.398 109.007 291.575C109.858 290.706 110.635 289.8 111.393 288.876C111.264 290.059 111.19 291.261 111.171 292.481C110.875 314.552 128.539 332.704 150.641 333C151.289 333 151.936 333 152.583 333H153.897C170.266 333 184.304 323.166 190.5 309.099C196.696 323.166 210.753 333 227.103 333H228.417C229.064 333 229.711 333 230.359 333C252.443 332.704 270.125 314.57 269.829 292.481C269.829 291.261 269.736 290.059 269.607 288.876C270.365 289.8 271.142 290.706 271.993 291.575C287.4 307.398 312.739 307.731 328.572 292.333C329.496 291.427 330.421 290.521 331.309 289.597C346.716 273.774 346.383 248.468 330.551 233.051C329.681 232.201 328.775 231.424 327.85 230.666C329.034 230.796 330.236 230.87 331.457 230.888C353.541 231.184 371.704 213.531 372 191.441C372 190.794 372 190.147 372 189.5C372 188.853 372 188.206 372 187.559H371.982Z","puffy-diamond":"M279.397 279.754C291.485 267.666 295.573 250.608 291.663 235.157C307.124 239.086 324.202 235.001 336.3 222.902C354.567 204.636 354.567 175.02 336.3 156.754C324.273 144.727 307.325 140.619 291.936 144.43C295.368 129.286 291.188 112.766 279.397 100.975C267.282 88.8601 250.174 84.7804 234.696 88.736C238.798 73.1705 234.747 55.9026 222.544 43.6997C204.278 25.4334 174.662 25.4334 156.396 43.6997C144.266 55.83 140.191 72.9655 144.172 88.4584C129.001 84.9862 112.435 89.1585 100.618 100.975C88.8257 112.767 84.6462 129.289 88.0792 144.434C72.6865 140.616 55.7312 144.723 43.6997 156.754C25.4334 175.02 25.4334 204.636 43.6997 222.902C55.8026 235.005 72.8879 239.089 88.3531 235.153C84.4405 250.605 88.5288 267.665 100.618 279.754C112.385 291.521 128.862 295.708 143.98 292.314C140.328 307.602 144.467 324.371 156.396 336.3C174.662 354.567 204.278 354.567 222.544 336.3C234.544 324.301 238.661 307.403 234.894 292.043C250.32 295.914 267.333 291.817 279.397 279.754Z",semicircle:"M350 256.921C350 275.19 335.19 290 316.921 290L63.0794 290C44.8102 290 30 275.19 30 256.921L30 250C30 161.634 101.634 90 190 90C278.366 90 350 161.634 350 250V256.921Z",slanted:"M45.7147 120.543C48.289 95.9642 49.5761 83.6748 54.3025 73.9777C61.142 59.9453 73.0768 49.1101 87.6278 43.7229C97.6833 40 109.933 40 134.432 40H258.137C287.764 40 302.578 40 313.887 44.8539C330.261 51.8819 342.72 65.8495 347.927 83.0153C351.523 94.8709 349.967 109.733 346.854 139.457L334.285 259.457C331.711 284.036 330.424 296.325 325.697 306.022C318.858 320.055 306.923 330.89 292.372 336.277C282.317 340 270.067 340 245.568 340H121.863C92.2359 340 77.4221 340 66.1134 335.146C49.7395 328.118 37.2802 314.151 32.0729 296.985C28.4765 285.129 30.0331 270.267 33.1463 240.543L45.7147 120.543Z","soft-boom":"M204.57 116.822C226.539 6.39254 153.487 6.39254 175.457 116.822C153.487 6.39254 85.9934 34.3433 148.549 127.966C85.9934 34.3433 34.3433 85.9934 127.966 148.549C34.3433 85.9934 6.39254 153.487 116.822 175.444C6.39254 153.474 6.39254 226.526 116.822 204.556C6.39254 226.526 34.3565 294.007 127.966 231.451C34.3565 294.007 86.0066 345.657 148.549 252.034C85.9934 345.644 153.487 373.594 175.444 263.178C153.474 373.607 226.526 373.607 204.556 263.178C226.526 373.607 294.007 345.644 231.451 252.034C294.007 345.644 345.657 293.993 252.034 231.451C345.644 294.007 373.594 226.513 263.178 204.556C373.607 226.526 373.607 153.474 263.178 175.444C373.607 153.474 345.644 85.9934 252.034 148.549C345.644 85.9934 293.993 34.3433 231.451 127.966C294.007 34.3565 226.513 6.40574 204.556 116.822H204.57Z",square:"M350 202C350 246.717 350 269.076 342.978 286.812C332.813 312.485 312.485 332.813 286.812 342.978C269.076 350 246.717 350 202 350H178C133.283 350 110.924 350 93.1875 342.978C67.5145 332.813 47.187 312.485 37.0223 286.812C30 269.076 30 246.717 30 202L30 178C30 133.283 30 110.924 37.0224 93.1875C47.187 67.5145 67.5146 47.187 93.1876 37.0223C110.924 30 133.283 30 178 30L202 30C246.717 30 269.076 30 286.812 37.0224C312.485 47.187 332.813 67.5146 342.978 93.1876C350 110.924 350 133.283 350 178V202Z",circle:"M350 190C350 278.366 278.366 350 190 350C101.634 350 30 278.366 30 190C30 101.634 101.634 30 190 30C278.366 30 350 101.634 350 190Z",triangle:"M136.461 98.2021C151.597 71.8217 159.165 58.6315 168.342 53.0594C181.648 44.9802 198.352 44.9802 211.658 53.0594C220.835 58.6315 228.403 71.8217 243.539 98.2021L325.309 240.72C340.3 266.847 347.795 279.911 347.993 290.585C348.28 306.06 339.949 320.418 326.364 327.864C316.994 333 301.919 333 271.77 333H108.23C78.0806 333 63.006 333 53.636 327.864C40.0505 320.418 31.7204 306.06 32.0072 290.585C32.2049 279.911 39.7003 266.847 54.6909 240.72L136.461 98.2021Z"},Qd=new Array,Gy=new Map;for(let o in Uy)Qd.push(Uy[o]),Gy.set(o,Qd.length-1);var jy={};Qd=Vh(Qd,300);for(let o of Gy)jy[o[0]]=r(Qd[o[1]]);var Yp=jy;function M2(o){return b`
    :host([name="${r(o)}"]) .wrapper {
      clip-path: polygon(${Yp[o]});
    }
  `}var Ky=[...Object.getOwnPropertyNames(Yp).map(o=>M2(o))];var ks=class extends k{constructor(){super(...arguments);this.name=null}render(){return f`<div class="wrapper"><slot></slot></div>`}};ks.styles=[Wy,Ky],d([p({reflect:!0})],ks.prototype,"name",2),ks=d([y("m3e-shape")],ks);var eh,Zm,ws,Zy,Xy,io=class extends k{constructor(){super(...arguments);m(this,ws);m(this,eh);m(this,Zm,new Le(this,{target:null,callback:()=>this._updatePaging()}));this._canPage=!1;this._canPageStart=!1;this._canPageEnd=!1;this.disabled=!1;this.vertical=!1;this.threshold=0;this.previousPageLabel="Previous page";this.nextPageLabel="Next page"}connectedCallback(){super.connectedCallback(),g(this,eh,O.observe(()=>this.requestUpdate()))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,eh))==null||e.call(this)}firstUpdated(e){super.firstUpdated(e),s(this,Zm).observe(this.scrollContainer)}render(){let e=f`<m3e-icon-button
      class="prev-button"
      tabindex="-1"
      aria-label="${this.previousPageLabel}"
      ?disabled="${!this._canPageStart}"
      @click="${c(this,ws,Zy)}"
    >
      <slot name="prev-icon">
        ${O.current==="ltr"||this.vertical?f`<svg class="icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>`:f`<svg class="icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>`}
      </slot>
    </m3e-icon-button>`,i=f`<m3e-icon-button
      class="next-button"
      tabindex="-1"
      aria-label="${this.nextPageLabel}"
      ?disabled="${!this._canPageEnd}"
      @click="${c(this,ws,Xy)}"
    >
      <slot name="next-icon">
        ${O.current==="ltr"||this.vertical?f`<svg class="icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>`:f`<svg class="icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>`}
      </slot>
    </m3e-icon-button>`;return f`${this._canPage?e:R}
      <div class="content" @scroll="${this._updatePaging}"><slot></slot></div>
      ${this._canPage?i:R}`}_updatePaging(){this.disabled?this._canPage=!1:this.vertical?(this._canPage=Math.round(this.scrollContainer.scrollHeight)>Math.round(this.scrollContainer.clientHeight)+this.threshold,this._canPage&&(this._canPageStart=Math.round(this.scrollContainer.scrollTop)>this.threshold,this._canPageEnd=Math.round(this.scrollContainer.scrollTop)+ +this.threshold<Math.round(this.scrollContainer.scrollHeight-this.scrollContainer.clientHeight))):(this._canPage=Math.round(this.scrollContainer.scrollWidth)>Math.round(this.scrollContainer.clientWidth)+this.threshold,this._canPage&&(this._canPageStart=Math.round(this.scrollContainer.scrollLeft)>this.threshold,this._canPageEnd=Math.round(this.scrollContainer.scrollLeft)+this.threshold<Math.round(this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth))),this._canPage||(this._canPageStart=this._canPageEnd=!1)}};eh=new WeakMap,Zm=new WeakMap,ws=new WeakSet,Zy=function(){if(this.vertical){let e=this.scrollContainer.scrollTop-this.scrollContainer.clientHeight;e<=this.threshold&&(e=0),this.scrollContainer.scrollTo({top:e,behavior:"smooth"})}else{let e=this.scrollContainer.scrollLeft-this.scrollContainer.clientWidth;e<=this.threshold&&(e=0),this.scrollContainer.scrollTo({left:e,behavior:"smooth"})}},Xy=function(){if(this.vertical){let e=this.scrollContainer.scrollTop+this.scrollContainer.clientHeight;e>=this.scrollContainer.scrollHeight-this.scrollContainer.clientHeight-this.threshold&&(e=this.scrollContainer.scrollHeight-this.scrollContainer.clientHeight),this.scrollContainer.scrollTo({top:e,behavior:"smooth"})}else{let e=this.scrollContainer.scrollLeft+this.scrollContainer.clientWidth;e>=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth-this.threshold&&(e=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth),this.scrollContainer.scrollTo({left:e,behavior:"smooth"})}},io.styles=b`
    :host {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
    }
    :host([vertical]) {
      flex-direction: column;
    }
    .prev-button,
    .next-button {
      flex: none;
      --m3e-icon-button-small-shape-round: 0px;
      --m3e-icon-button-small-shape-square: 0px;
      --m3e-icon-button-small-shape-pressed-morph: 0px;
      --m3e-focus-ring-visibility: hidden;
    }
    ::slotted(prev-icon),
    ::slotted(next-icon),
    .icon {
      width: 1em;
      font-size: var(--m3e-slide-group-button-icon-size, var(--m3e-icon-button-small-icon-size, 1.5rem)) !important;
    }
    :host(:not([vertical])) .prev-button,
    :host(:not([vertical])) .next-button {
      --m3e-icon-button-small-container-height: 100%;
      width: var(--m3e-slide-group-button-size, 2.5rem);
    }
    :host([vertical]) .prev-button,
    :host([vertical]) .next-button {
      width: unset;
      --m3e-icon-button-small-container-height: var(--m3e-slide-group-button-size, 2.5rem);
    }
    :host([vertical]) .prev-button .icon,
    :host([vertical]) .next-button .icon {
      transform: rotate(90deg);
    }
    .content {
      flex: 1 1 auto;
      display: inherit;
      flex-wrap: inherit;
      flex-direction: inherit;
      overflow: inherit;
      position: relative;
      border-top: var(--m3e-slide-group-divider-top);
      border-bottom: var(--m3e-slide-group-divider-bottom);
    }
  `,d([L(".content")],io.prototype,"scrollContainer",2),d([ie()],io.prototype,"_canPage",2),d([ie()],io.prototype,"_canPageStart",2),d([ie()],io.prototype,"_canPageEnd",2),d([p({type:Boolean,reflect:!0})],io.prototype,"disabled",2),d([p({type:Boolean,reflect:!0})],io.prototype,"vertical",2),d([p({type:Number})],io.prototype,"threshold",2),d([p({attribute:"previous-page-label"})],io.prototype,"previousPageLabel",2),d([p({attribute:"next-page-label"})],io.prototype,"nextPageLabel",2),d([Ft(40)],io.prototype,"_updatePaging",1),io=d([y("m3e-slide-group")],io);var Xm,Yy,kr=class extends Oe(De(ot(ae(N(D(M(k,"slider"))))))){constructor(){super(...arguments);m(this,Xm);this.value=null}get[tt](){return this.value?.toString()??null}focus(e){this._focusRing&&(this._focusRing.disabled=!0),super.focus(e),this._focusRing&&(this._focusRing.disabled=this.disabled)}firstUpdated(e){super.firstUpdated(e),this._focusRing?.attach(this)}update(e){super.update(e),e.has("value")&&this.dispatchEvent(new Event("value-change",{bubbles:!0}))}render(){return f`<div class="label" aria-hidden="true">${s(this,Xm,Yy)}</div>
      <div class="base">
        <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
        <div class="touch" aria-hidden="true"></div>
        <div class="wrapper">
          <div class="handle"></div>
        </div>
      </div>`}};Xm=new WeakSet,Yy=function(){return this.closest("m3e-slider")?.displayWith?.(this.value)??this.value?.toString()??""},kr.styles=b`
    :host {
      display: block;
      box-sizing: border-box;
      position: absolute;
      outline: none;
      top: 0;
      bottom: 0;
      border-radius: var(--m3e-slider-thumb-shape, ${t.shape.corner.full});
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .base {
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
    .touch {
      position: absolute;
      height: 3rem;
      left: 0;
      right: 0;
      touch-action: none;
    }
    .wrapper {
      display: inline-flex;
      justify-content: center;
      height: 100%;
      border-radius: inherit;
      width: calc(var(--m3e-slider-thumb-width, 0.25rem) + calc(var(--m3e-slider-thumb-padding, 0.375em) * 2));
    }
    .focus-ring {
      top: calc(0px - var(--m3e-focus-ring-thickness, 3px));
      bottom: calc(0px - var(--m3e-focus-ring-thickness, 3px));
      left: var(--m3e-focus-ring-thickness, 3px);
      right: var(--m3e-focus-ring-thickness, 3px);
    }
    .label {
      user-select: none;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: var(--_slider-label-visibility, hidden);
      opacity: var(--_slider-label-opacity, 0);
      transform: var(--_slider-label-transform, scale(0));
      transition: ${r(`opacity ${t.motion.duration.short3} ${t.motion.easing.standard}, 
          transform ${t.motion.duration.short3} ${t.motion.easing.standard},
          visibility ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete`)};
      width: var(--m3e-slider-label-width, 3rem);
      height: var(--_m3e-slider-label-height, 2.75rem);
      top: calc(0px - var(--_m3e-slider-label-height, 2.75rem) - var(--_m3e-slider-label-margin, 0.25rem));
      inset-inline-start: calc(0px - 100%);
      border-radius: var(--m3e-slider-label-shape, ${t.shape.corner.full});
      background-color: var(--m3e-slider-label-container-color, ${t.color.inverseSurface});
      color: var(--m3e-slider-label-color, ${t.color.inverseOnSurface});
      font-size: var(--m3e-slider-label-font-size, ${t.typescale.standard.label.medium.fontSize});
      font-weight: var(--m3e-slider-label-font-weight, ${t.typescale.standard.label.medium.fontWeight});
      line-height: var(--m3e-slider-label-line-height, ${t.typescale.standard.label.medium.lineHeight});
      letter-spacing: var(--m3e-slider-label-tracking, ${t.typescale.standard.label.medium.tracking});
    }
    @starting-style {
      .label {
        opacity: 0;
        transform: scale(0);
      }
    }
    .handle {
      height: 100%;
      width: var(--m3e-slider-thumb-width, 0.25rem);
      border-radius: inherit;
      transition: ${r(`width ${t.motion.duration.short2} ${t.motion.easing.standard}`)};
    }
    :host(:active:not([aria-disabled="true"])) .handle {
      width: var(--m3e-slider-thumb-pressed-width, 2px);
    }
    :host(:not([aria-disabled="true"])) .handle {
      background-color: var(--m3e-slider-thumb-color, ${t.color.primary});
    }
    :host([aria-disabled="true"]) .handle {
      opacity: var(--m3e-slider-thumb-disabled-opacity, 38%);
      background-color: var(--m3e-slider-thumb-disabled-color, ${t.color.onSurface});
    }
    @media (prefers-reduced-motion) {
      .label {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .label {
        forced-color-adjust: none;
        background-color: CanvasText;
        color: Canvas;
      }
      :host(:not([aria-disabled="true"])) .handle {
        background-color: CanvasText;
      }
      :host([aria-disabled="true"]) .handle {
        opacity: unset;
        background-color: GrayText;
      }
    }
  `,d([L(".focus-ring")],kr.prototype,"_focusRing",2),d([p({type:Number,reflect:!0})],kr.prototype,"value",2),kr=d([y("m3e-slider-thumb")],kr);var oh,no,fe,wr,Do,fa,X,Jy,Qy,Jp,th,Qp,e0,Ym,ev,t0,o0,r0,i0,a0,_t,ao=class extends k{constructor(){super();m(this,X);m(this,oh);this._ticks=new Array;m(this,no,new Array);m(this,fe);m(this,wr,0);m(this,Do,0);m(this,fa,0);this.size="extra-small";this.disabled=!1;this.discrete=!1;this.min=0;this.max=100;this.step=1;this.labelled=!1;this.displayWith=null;new Le(this,{callback:()=>c(this,X,Ym).call(this,!0)})}get thumbs(){return s(this,no)}get isRange(){return s(this,no).length>1}get thumb(){return s(this,no)[0]??null}get lowerThumb(){return this.thumb}get upperThumb(){return s(this,no)[1]??null}connectedCallback(){super.connectedCallback(),g(this,oh,O.observe(()=>{c(this,X,Ym).call(this,!0),this.requestUpdate()}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,oh))==null||e.call(this)}updated(e){super.updated(e),e.has("disabled")&&s(this,no).forEach(i=>i.disabled=this.disabled)}render(){return f`<div
      class="base"
      tabindex="${$e(this.disabled?void 0:"-1")}"
      @pointerdown="${c(this,X,t0)}"
      @pointermove="${c(this,X,o0)}"
      @pointerup="${c(this,X,r0)}"
      @keydown="${c(this,X,i0)}"
      @value-change="${c(this,X,a0)}"
    >
      <div class="track" aria-hidden="true">
        <div class="track-inactive start"></div>
        <div class="track-active"></div>
        <div class="track-inactive end"></div>
      </div>
      <div class="ticks" aria-hidden="true">${this._ticks.map(e=>c(this,X,Jy).call(this,e))}</div>
      <slot @slotchange="${c(this,X,Qy)}"></slot>
    </div>`}};oh=new WeakMap,no=new WeakMap,fe=new WeakMap,wr=new WeakMap,Do=new WeakMap,fa=new WeakMap,X=new WeakSet,Jy=function(e){return f`<div
      class="tick ${e.active?"active":"inactive"}"
      style="${Wh({transform:`translate(${O.current==="rtl"?-c(this,X,th).call(this,e.value):c(this,X,th).call(this,e.value)}px, 0)`})}"
    ></div>`},Qy=function(e){g(this,no,e.target.assignedElements({flatten:!0}).filter(i=>i instanceof kr)),s(this,no).length>2&&(s(this,no).length=2),this.isRange?this._base?.style.setProperty("--_slider-active-track-middle-shape","0"):this._base?.style.removeProperty("--_slider-active-track-middle-shape"),c(this,X,Jp).call(this)},Jp=function(){s(this,no).forEach((e,i)=>{this.disabled&&(e.disabled=!0),e.ariaValueMin=`${s(this,no)[i-1]?.value??this.min}`,e.ariaValueMax=`${s(this,no)[i+1]?.value??this.max}`,e.ariaValueNow=`${e.value??s(this,no)[i-1]?.value??this.min}`})},th=function(e){return(s(this,wr)-s(this,Do))*((e-this.min)/(this.max-this.min))},Qp=function(e){let i=O.current==="rtl"?s(this,fa)+s(this,wr)-e.clientX:e.clientX-s(this,fa),n=this.step===0?1:this.step,l=Math.floor((this.max-this.min)/n),h=i/s(this,wr),v=Math.round(h*l)/l*(this.max-this.min)+this.min;return Math.round(v/n)*n},e0=function(e=!1){this.lowerThumb&&(g(this,wr,!e&&s(this,wr)>0?s(this,wr):this.clientWidth),g(this,Do,!e&&s(this,Do)>0?s(this,Do):this.lowerThumb.clientWidth),g(this,fa,!e&&s(this,fa)>0?s(this,fa):this.getBoundingClientRect().left))},Ym=function(e=!1){if(c(this,X,e0).call(this,e),!this.lowerThumb)return;let i=this.lowerThumb.value??this.min,n=c(this,X,th).call(this,i);if(this.lowerThumb.style.transform=`translate(${O.current==="rtl"?-n:n}px, 0)`,!this.upperThumb)this._base?.classList.toggle("range",!1),this._base?.style.setProperty("--_slider-active-track-size",`${n}px`),this._base?.style.setProperty("--_slider-inactive-track-after-offset",`${n+s(this,Do)}px`),this._base?.style.setProperty("--_slider-inactive-track-after-size",`${s(this,wr)-n-s(this,Do)}px`),c(this,X,ev).call(this,l=>l<i);else{let l=this.upperThumb.value??i,h=c(this,X,th).call(this,l);this.upperThumb.style.transform=`translate(${O.current==="rtl"?-h:h}px, 0)`,this._base?.classList.toggle("range",!0),this._base?.style.setProperty("--_slider-inactive-track-before-size",`${n}px`),this._base?.style.setProperty("--_slider-active-track-offset",`${n+s(this,Do)}px`),this._base?.style.setProperty("--_slider-active-track-size",`${h-n-s(this,Do)}px`),this._base?.style.setProperty("--_slider-inactive-track-after-offset",`${h+s(this,Do)}px`),this._base?.style.setProperty("--_slider-inactive-track-after-size",`${s(this,wr)-s(this,Do)-h}px`),c(this,X,ev).call(this,u=>u>i&&u<l)}},ev=function(e){if(this._ticks=[],this.discrete&&this.step>1)for(let i=this.min;i<=this.max;i+=this.step)this._ticks.push({value:i,active:e(i)});else this._ticks.push({value:this.min,active:e(this.min)}),this.min<0&&this.max>0&&this._ticks.push({value:0,active:e(0)}),this._ticks.push({value:this.max,active:e(this.max)})},t0=function(e){if(e.pointerType==="mouse"&&e.button>1||!this.lowerThumb||this.disabled||(e.target instanceof HTMLElement&&e.target.setPointerCapture(e.pointerId),g(this,fe,e.composedPath().find(n=>n instanceof kr)),s(this,fe)))return;let i=c(this,X,Qp).call(this,e);if(!this.upperThumb)this.lowerThumb.disabled||(c(this,X,_t).call(this,this.lowerThumb,i,!0),g(this,fe,this.lowerThumb));else{let n=this.lowerThumb.value??this.min,l=this.upperThumb.value??n;if(i<n)this.lowerThumb.disabled||(c(this,X,_t).call(this,this.lowerThumb,i,!0),g(this,fe,this.lowerThumb));else if(i>l)this.upperThumb.disabled||(c(this,X,_t).call(this,this.upperThumb,i,!0),g(this,fe,this.upperThumb));else{let h=(n+l)/2;i<h&&!this.lowerThumb.disabled?(c(this,X,_t).call(this,this.lowerThumb,i,!0),g(this,fe,this.lowerThumb)):this.upperThumb.disabled||(c(this,X,_t).call(this,this.upperThumb,i,!0),g(this,fe,this.upperThumb))}}},o0=function(e){if(!(e.target instanceof HTMLElement)||!e.target.hasPointerCapture(e.pointerId)||!s(this,fe)||s(this,fe).disabled)return;let i=c(this,X,Qp).call(this,e),n=this.min,l=this.max;s(this,fe)===this.upperThumb?n=Math.max(n,this.lowerThumb?.value??0):this.upperThumb&&(l=Math.min(l,this.upperThumb.value??this.max)),this.classList.contains("-animating")&&(this.classList.toggle("-animating",!1),s(this,fe).style.transition=""),c(this,X,_t).call(this,s(this,fe),Math.min(l,Math.max(n,i)))},r0=function(e){e.pointerType==="mouse"&&e.button>1||!this.lowerThumb||this.disabled||(e.target instanceof HTMLElement&&e.target.releasePointerCapture(e.pointerId),s(this,fe)&&!s(this,fe).disabled&&s(this,fe).focus())},i0=function(e){if(g(this,fe,e.composedPath().find(h=>h instanceof kr)),!s(this,fe))return;let i=s(this,fe).value??0,n=this.min,l=this.max;switch(s(this,fe)===this.upperThumb?n=Math.max(n,this.lowerThumb?.value??0):this.upperThumb&&(l=Math.max(l,this.upperThumb.value??this.max)),e.key){case"Home":c(this,X,_t).call(this,s(this,fe),n),e.preventDefault();break;case"End":c(this,X,_t).call(this,s(this,fe),l),e.preventDefault();break;case"PageUp":O.current==="ltr"?c(this,X,_t).call(this,s(this,fe),Math.min(l,i+(this.step>1?this.step:10))):c(this,X,_t).call(this,s(this,fe),Math.max(n,i-(this.step>1?this.step:10))),e.preventDefault();break;case"PageDown":O.current==="ltr"?c(this,X,_t).call(this,s(this,fe),Math.max(n,i-(this.step>1?this.step:10))):c(this,X,_t).call(this,s(this,fe),Math.min(l,i+(this.step>1?this.step:10))),e.preventDefault();break;case"Down":case"ArrowDown":case"Left":case"ArrowLeft":O.current==="ltr"?c(this,X,_t).call(this,s(this,fe),Math.max(n,i-this.step)):c(this,X,_t).call(this,s(this,fe),Math.min(l,i+this.step)),e.preventDefault();break;case"Up":case"ArrowUp":case"Right":case"ArrowRight":O.current==="ltr"?c(this,X,_t).call(this,s(this,fe),Math.min(l,i+this.step)):c(this,X,_t).call(this,s(this,fe),Math.max(n,i-this.step)),e.preventDefault();break;case" ":e.preventDefault();break}},a0=function(e){e.stopPropagation(),c(this,X,Jp).call(this),c(this,X,Ym).call(this)},_t=function(e,i,n=!1){if(e.value===i)return;let l=e.value;n&&!Me()&&(this.classList.toggle("-animating",!0),e.addEventListener("transitionend",()=>{e.style.transition="",this.classList.toggle("-animating",!1)},{once:!0}),e.style.transition=`transform ${t.motion.spring.fastEffects}`),e.value=i,e.markAsDirty(),e.markAsTouched(),e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})):e.value=l},ao.styles=b`
    :host {
      display: inline-block;
      vertical-align: middle;
      min-inline-size: var(--m3e-slider-min-width, 12.5rem);
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    :host(:not([disabled])) {
      cursor: pointer;
    }
    :host([size="extra-small"]),
    :host([size="small"]) {
      height: var(--m3e-slider-small-height, 2.75rem);
    }
    :host(:not(:dir(rtl))[size="extra-small"]) .base,
    :host(:not(:dir(rtl))[size="small"]) .base {
      --_slider-active-track-shape: var(--m3e-slider-small-active-track-shape, ${t.shape.corner.smallStart});
      --_slider-inactive-track-start-shape: var(
        --m3e-slider-small-inactive-active-track-start-shape,
        ${t.shape.corner.smallStart}
      );
      --_slider-inactive-track-end-shape: var(
        --m3e-slider-small-inactive-track-end-shape,
        ${t.shape.corner.smallEnd}
      );
    }
    :host(:dir(rtl)[size="extra-small"]) .base,
    :host(:dir(rtl)[size="small"]) .base {
      --_slider-active-track-shape: var(--m3e-slider-small-active-track-shape, ${t.shape.corner.smallEnd});
      --_slider-inactive-track-start-shape: var(
        --m3e-slider-small-inactive-active-track-start-shape,
        ${t.shape.corner.smallEnd}
      );
      --_slider-inactive-track-end-shape: var(
        --m3e-slider-small-inactive-track-end-shape,
        ${t.shape.corner.smallStart}
      );
    }
    :host([size="extra-small"]) .track {
      height: calc(var(--m3e-slider-extra-small-track-height, 1rem));
    }
    :host([size="small"]) .track {
      height: calc(var(--m3e-slider-small-track-height, 1.5rem));
    }
    :host([size="medium"]) {
      height: var(--m3e-slider-medium-height, 3.25rem);
    }
    :host(:not(:dir(rtl))[size="medium"]) .base {
      --_slider-active-track-shape: var(
        --m3e-slider-medium-active-track-shape,
        ${t.shape.corner.mediumStart}
      );
      --_slider-inactive-track-start-shape: var(
        --m3e-slider-medium-inactive-active-track-start-shape,
        ${t.shape.corner.mediumStart}
      );
      --_slider-inactive-track-end-shape: var(
        --m3e-slider-medium-inactive-track-end-shape,
        ${t.shape.corner.mediumEnd}
      );
    }
    :host(:dir(rtl)[size="medium"]) .base {
      --_slider-active-track-shape: var(--m3e-slider-medium-active-track-shape, ${t.shape.corner.mediumEnd});
      --_slider-inactive-track-start-shape: var(
        --m3e-slider-medium-inactive-active-track-start-shape,
        ${t.shape.corner.mediumEnd}
      );
      --_slider-inactive-track-end-shape: var(
        --m3e-slider-medium-inactive-track-end-shape,
        ${t.shape.corner.mediumStart}
      );
    }
    :host([size="medium"]) .track {
      height: var(--m3e-slider-medium-track-height, 2.5rem);
    }
    :host([size="large"]) {
      height: var(--m3e-slider-large-height, 4.25rem);
    }
    :host(:not(:dir(rtl))[size="large"]) .base {
      --_slider-active-track-shape: var(--m3e-slider-large-active-track-shape, ${t.shape.corner.largeStart});
      --_slider-inactive-track-start-shape: var(
        --m3e-slider-large-inactive-active-track-start-shape,
        ${t.shape.corner.largeStart}
      );
      --_slider-inactive-track-end-shape: var(
        --m3e-slider-large-inactive-track-end-shape,
        ${t.shape.corner.largeEnd}
      );
    }
    :host(:dir(rtl)[size="large"]) .base {
      --_slider-active-track-shape: var(--m3e-slider-large-active-track-shape, ${t.shape.corner.largeEnd});
      --_slider-inactive-track-start-shape: var(
        --m3e-slider-large-inactive-active-track-start-shape,
        ${t.shape.corner.largeEnd}
      );
      --_slider-inactive-track-end-shape: var(
        --m3e-slider-large-inactive-track-end-shape,
        ${t.shape.corner.largeStart}
      );
    }
    :host([size="large"]) .track {
      height: var(--m3e-slider-large-track-height, 3.5rem);
    }
    :host([size="extra-large"]) {
      height: var(--m3e-slider-extra-large-height, 6.75rem);
    }
    :host(:not(:dir(rtl))[size="extra-large"]) .base {
      --_slider-active-track-shape: var(
        --m3e-slider-extra-large-active-track-shape,
        ${t.shape.corner.extraLargeStart}
      );
      --_slider-inactive-track-start-shape: var(
        --m3e-slider-extra-large-inactive-active-track-start-shape,
        ${t.shape.corner.extraLargeStart}
      );
      --_slider-inactive-track-end-shape: var(
        --m3e-slider-extra-large-inactive-track-end-shape,
        ${t.shape.corner.extraLargeEnd}
      );
    }
    :host(:dir(rtl)[size="extra-large"]) .base {
      --_slider-active-track-shape: var(
        --m3e-slider-extra-large-active-track-shape,
        ${t.shape.corner.extraLargeEnd}
      );
      --_slider-inactive-track-start-shape: var(
        --m3e-slider-extra-large-inactive-active-track-start-shape,
        ${t.shape.corner.extraLargeEnd}
      );
      --_slider-inactive-track-end-shape: var(
        --m3e-slider-extra-large-inactive-track-end-shape,
        ${t.shape.corner.extraLargeStart}
      );
    }
    :host([size="extra-large"]) .track {
      height: var(--m3e-slider-extra-large-track-height, 6rem);
    }
    :host(.-animating) .track-active,
    :host(.-animating) .track-inactive.start,
    :host(.-animating) .track-inactive.end {
      transition: ${r(`margin-inline-start ${t.motion.spring.fastEffects},
        width ${t.motion.spring.fastEffects}`)};
    }
    .base {
      display: inline-flex;
      align-items: center;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      outline: none;
      touch-action: none;
    }
    .track {
      position: relative;
      flex: 1 1 auto;
      touch-action: none;
    }
    .track-inactive,
    .track-active {
      position: absolute;
      height: 100%;
      touch-action: none;
    }
    .track-active {
      margin-inline-start: var(--_slider-active-track-offset, 0px);
      width: var(--_slider-active-track-size, 0px);
      border-radius: var(--_slider-active-track-middle-shape, var(--_slider-active-track-shape));
    }
    .track-inactive.start {
      width: var(--_slider-inactive-track-before-size, 0px);
      border-radius: var(--_slider-inactive-track-start-shape);
    }
    .track-inactive.end {
      margin-inline-start: var(--_slider-inactive-track-after-offset, 0px);
      width: var(--_slider-inactive-track-after-size, 0px);
      border-radius: var(--_slider-inactive-track-end-shape);
    }
    .ticks {
      position: absolute;
      width: 100%;
      height: var(--m3e-slider-tick-size, 0.25rem);
      overflow: visible;
      touch-action: none;
    }
    .tick {
      position: absolute;
      top: 0;
      touch-action: none;
      inset-inline-start: calc(var(--m3e-slider-tick-size, 0.25rem) + calc(var(--m3e-slider-tick-size, 0.25rem) / 2));
      width: var(--m3e-slider-tick-size, 0.25rem);
      height: var(--m3e-slider-tick-size, 0.25rem);
      border-radius: var(--m3e-slider-tick-shape, ${t.shape.corner.full});
    }
    :host(:not([disabled])) .track-inactive {
      background-color: var(--m3e-slider-inactive-track-color, ${t.color.secondaryContainer});
    }
    :host([disabled]) .track-inactive {
      background-color: color-mix(
        in srgb,
        var(--m3e-slider-disabled-inactive-track-color, ${t.color.onSurface})
          var(--m3e-slider-disabled-inactive-track-opacity, 12%),
        transparent
      );
    }
    :host(:not([disabled])) .track-active {
      background-color: var(--m3e-slider-active-track-color, ${t.color.primary});
    }
    :host([disabled]) .track-active {
      background-color: color-mix(
        in srgb,
        var(--m3e-slider-disabled-active-track-color, ${t.color.onSurface})
          var(--m3e-slider-disabled-active-track-opacity, 38%),
        transparent
      );
    }
    :host(:not([disabled])) .tick.active {
      background-color: var(--m3e-slider-tick-active-color, ${t.color.onPrimary});
    }
    :host([disabled]) .tick.active {
      background-color: var(--m3e-slider-disabled-tick-active-color, ${t.color.inverseOnSurface});
    }
    :host(:not([disabled])) .tick.inactive {
      background-color: var(--m3e-slider-tick-inactive-color, ${t.color.onSecondaryContainer});
    }
    :host([disabled]) .tick.inactive {
      background-color: var(--m3e-slider-disabled-tick-inactive-color, ${t.color.onSurface});
    }
    :host(:not([discrete])) .tick.active {
      display: none;
    }
    :host(:hover[labelled]) .base,
    :host(:focus-within[labelled]) .base {
      --_slider-label-visibility: visible;
      --_slider-label-opacity: 1;
      --_slider-label-transform: scale(1);
    }
    @media (forced-colors: active) {
      :host(:not([disabled])) .track-inactive {
        background-color: unset;
      }
      :host(:not([disabled])) .base.range .track-inactive.start,
      :host(:not([disabled])) .track-inactive.end {
        border: 1px solid CanvasText;
        box-sizing: border-box;
      }
      :host(:not([disabled])) .tick.inactive {
        background-color: CanvasText;
      }
      :host(:not([disabled])) .tick.active {
        background-color: Canvas;
      }
      :host(:not([disabled])) .track-active {
        background-color: CanvasText;
      }
      :host([disabled]) .base.range .track-inactive.start,
      :host([disabled]) .track-inactive.end {
        border: 1px solid GrayText;
        box-sizing: border-box;
      }
      :host([disabled]) .track-active {
        background-color: GrayText;
      }
      :host([disabled]) .tick.inactive {
        background-color: GrayText;
      }
      :host([disabled]) .tick.active {
        background-color: Canvas;
      }
    }
  `,d([L(".base")],ao.prototype,"_base",2),d([ie()],ao.prototype,"_ticks",2),d([p({reflect:!0})],ao.prototype,"size",2),d([p({type:Boolean,reflect:!0})],ao.prototype,"disabled",2),d([p({type:Boolean,reflect:!0})],ao.prototype,"discrete",2),d([p({type:Number})],ao.prototype,"min",2),d([p({type:Number})],ao.prototype,"max",2),d([p({type:Number})],ao.prototype,"step",2),d([p({type:Boolean})],ao.prototype,"labelled",2),d([p({attribute:!1})],ao.prototype,"displayWith",2),ao=d([y("m3e-slider")],ao);var rh,ih,ah,oi,n0,s0,l0,c0,Lt=class extends M(k,"status"){constructor(){super(...arguments);m(this,oi);m(this,rh,-1);m(this,ih,!1);m(this,ah,e=>c(this,oi,c0).call(this,e));this.duration=3e3;this.action="";this.dismissible=!1;this.closeLabel="Close"}static get current(){return Lt.__current}get isActionTaken(){return s(this,ih)}connectedCallback(){super.connectedCallback(),this.addEventListener("beforetoggle",s(this,ah)),this.setAttribute("popover","manual"),this.ariaLive="polite"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("beforetoggle",s(this,ah))}render(){return f`<div class="base">
      <span class="supporting-text"><slot></slot></span>
      ${c(this,oi,n0).call(this)} ${c(this,oi,s0).call(this)}
    </div>`}updated(e){super.updated(e),this.style.setProperty("--_snackbar-height",`${this.getBoundingClientRect().height/.8}px`)}};rh=new WeakMap,ih=new WeakMap,ah=new WeakMap,oi=new WeakSet,n0=function(){return this.action?f`<m3e-button @click="${c(this,oi,l0)}">${this.action}</m3e-button>`:R},s0=function(){return this.dismissible?f`<m3e-icon-button aria-label="${this.closeLabel}" @click="${this.hidePopover}">
          <slot name="close-icon">
            <svg class="close-icon" viewBox="0 -960 960 960" fill="currentColor">
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </slot>
        </m3e-icon-button>`:R},l0=function(){g(this,ih,!0),this.hidePopover()},c0=function(e){e.newState=="open"?(Lt.__current?.hidePopover(),Lt.__current=this,this.duration>0&&g(this,rh,setTimeout(()=>this.hidePopover(),this.duration))):(Lt.__current===this&&(Lt.__current=null),clearTimeout(s(this,rh)))},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-snackbar {
            margin-inline: auto;
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),Lt.styles=b`
    :host {
      position: fixed;
      top: calc(100vh - var(--_snackbar-height, 0px) - var(--m3e-snackbar-margin, 1rem));
      display: inline-flex;
      align-items: center;
      min-width: var(--m3e-snackbar-min-width, 21.5rem);
      max-width: var(--m3e-snackbar-max-width, 42rem);
      visibility: hidden;
      border: none;
      margin: 0;
      padding: 0;
      opacity: 0;
      transform: scale(0.8);
      transition: ${r(`opacity ${t.motion.duration.short3} ${t.motion.easing.standard}, 
        transform ${t.motion.duration.short3} ${t.motion.easing.standard}, 
        overlay ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete,
        visibility ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete`)};
    }
    :host::backdrop {
      background-color: transparent;
    }
    :host(:popover-open) {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
    @starting-style {
      :host(:popover-open) {
        opacity: 0;
        transform: scale(0.8);
      }
    }
    .base {
      display: inline-flex;
      align-items: center;
      flex: 1 1 auto;
      box-sizing: border-box;
      padding: var(--m3e-snackbar-padding, 0 1rem 0 1rem);
      border-radius: var(--m3e-snackbar-container-shape, ${t.shape.corner.extraSmall});
      background-color: var(--m3e-snackbar-container-color, ${t.color.inverseSurface});
      font-size: var(--m3e-snackbar-supporting-text-font-size, ${t.typescale.standard.label.large.fontSize});
      font-weight: var(
        --m3e-snackbar-supporting-text-font-weight,
        ${t.typescale.standard.label.large.fontWeight}
      );
      line-height: var(
        --m3e-snackbar-supporting-text-line-height,
        ${t.typescale.standard.label.large.lineHeight}
      );
      letter-spacing: var(
        --m3e-snackbar-supporting-text-tracking,
        ${t.typescale.standard.label.large.tracking}
      );
      color: var(--m3e-snackbar-supporting-text-color, ${t.color.inverseOnSurface});

      --m3e-text-button-label-text-color: var(--m3e-snackbar-action-text-color, ${t.color.inversePrimary});
      --m3e-text-button-hover-label-text-color: var(
        --m3e-snackbar-action-text-color,
        ${t.color.inversePrimary}
      );
      --m3e-text-button-hover-state-layer-color: var(
        --m3e-snackbar-action-text-color,
        ${t.color.inversePrimary}
      );
      --m3e-text-button-focus-label-text-color: var(
        --m3e-snackbar-action-text-color,
        ${t.color.inversePrimary}
      );
      --m3e-text-button-focus-state-layer-color: var(
        --m3e-snackbar-action-text-color,
        ${t.color.inversePrimary}
      );
      --m3e-text-button-pressed-label-text-color: var(
        --m3e-snackbar-action-text-color,
        ${t.color.inversePrimary}
      );
      --m3e-text-button-pressed-state-layer-color: var(
        --m3e-snackbar-action-text-color,
        ${t.color.inversePrimary}
      );
      --m3e-standard-icon-button-icon-color: var(
        --m3e-snackbar-close-icon-color,
        ${t.color.inverseOnSurface}
      );
      --m3e-standard-icon-button-hover-icon-color: var(
        --m3e-snackbar-close-icon-color,
        ${t.color.inverseOnSurface}
      );
      --m3e-standard-icon-button-hover-state-layer-color: var(
        --m3e-snackbar-close-icon-color,
        ${t.color.inverseOnSurface}
      );
      --m3e-standard-icon-button-focus-icon-color: var(
        --m3e-snackbar-close-icon-color,
        ${t.color.inverseOnSurface}
      );
      --m3e-standard-icon-button-focus-state-layer-color: var(
        --m3e-snackbar-close-icon-color,
        ${t.color.inverseOnSurface}
      );
      --m3e-standard-icon-button-pressed-icon-color: var(
        --m3e-snackbar-close-icon-color,
        ${t.color.inverseOnSurface}
      );
      --m3e-standard-icon-button-pressed-state-layer-color: var(
        --m3e-snackbar-close-icon-color,
        ${t.color.inverseOnSurface}
      );
    }
    :host([dismissible]) .base {
      padding-inline-end: 0.5rem;
    }
    .supporting-text {
      flex: 1 1 auto;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-clamp: 2;
      margin-block: var(--m3e-snackbar-supporting-text-margin-block, 0.875rem);
    }
    ::slotted([slot="close-icon"]),
    .close-icon {
      width: 1em;
      font-size: var(--m3e-icon-button-icon-size, 1.5rem) !important;
    }
    @media (forced-colors: active) {
      :host {
        background-color: Canvas;
        color: CanvasText;
        border-radius: ${t.shape.corner.small};
        box-sizing: border-box;
        outline: 1px solid CanvasText;
      }
    }
  `,Lt.__current=null,d([p({type:Number})],Lt.prototype,"duration",2),d([p()],Lt.prototype,"action",2),d([p({type:Boolean,reflect:!0})],Lt.prototype,"dismissible",2),d([p({attribute:"close-label"})],Lt.prototype,"closeLabel",2),Lt=d([y("m3e-snackbar")],Lt);var tv=class{static open(a,e,i,n){if(!1)return;let l=document.createElement("m3e-snackbar");l.append(document.createTextNode(a));let h;typeof e=="string"?l.action=e:typeof e=="boolean"?l.dismissible=e:h=e,typeof i=="boolean"?l.dismissible=i:h=i,n&&(h=n),h?.duration!==void 0&&(l.duration=h.duration),h?.closeLabel&&(l.closeLabel=h.closeLabel),l.addEventListener("toggle",u=>{u.newState==="closed"&&(Me()?l.remove():l.addEventListener("transitionend",()=>l.remove(),{once:!0}),l.isActionTaken&&h?.actionCallback?.())}),(document.querySelector("m3e-theme")??document.body).append(l),l.showPopover()}static dismiss(){Lt.current?.hidePopover()}};globalThis.M3eSnackbar=tv;var so,Je,nh,sn,sh,Et,d0,h0,Jm,m0,ov,rv,ba=class extends M(k,"group"){constructor(){super(...arguments);m(this,Et);m(this,so);m(this,Je);m(this,nh,!1);m(this,sn,new ue(this,{target:null,capture:!0,minPressedDuration:150,isPressedKey:e=>e===" ",callback:(e,i,n)=>{switch(n){case s(this,so):c(this,Et,m0).call(this,e);break;case s(this,Je):c(this,Et,ov).call(this,e||s(this,nh));break}}}));m(this,sh,new et(this,{target:null,callback:(e,i)=>{i===s(this,Je)&&!s(this,Je)?.disabled&&!s(this,Je)?.disabledInteractive&&(g(this,nh,e),c(this,Et,ov).call(this,e))}}));this.variant="filled";this.size="small"}update(e){super.update(e),e.has("variant")&&c(this,Et,Jm).call(this)}render(){return f`<m3e-button-group class="base" disable-role variant="connected" size="${this.size}">
      <slot name="leading-button" @slotchange="${c(this,Et,d0)}"></slot>
      <slot name="trailing-button" @slotchange="${c(this,Et,h0)}"></slot>
    </m3e-button-group>`}};so=new WeakMap,Je=new WeakMap,nh=new WeakMap,sn=new WeakMap,sh=new WeakMap,Et=new WeakSet,d0=function(e){s(this,so)&&s(this,sn).unobserve(s(this,so)),g(this,so,e.target.assignedElements({flatten:!0}).find(i=>i instanceof Ct)),s(this,so)&&s(this,sn).observe(s(this,so)),c(this,Et,Jm).call(this)},h0=function(e){s(this,Je)&&(s(this,sn).unobserve(s(this,Je)),s(this,sh).unobserve(s(this,Je))),g(this,Je,e.target.assignedElements({flatten:!0}).find(i=>i instanceof dt)),s(this,Je)&&(s(this,sn).observe(s(this,Je)),s(this,sh).observe(s(this,Je))),c(this,Et,Jm).call(this)},Jm=function(){s(this,so)&&(s(this,so).variant=this.variant,s(this,so).size=this.size,s(this,so).shape="rounded"),s(this,Je)&&(s(this,Je).width="default",s(this,Je).shape="rounded",s(this,Je).setAttribute("variant",this.variant),s(this,Je).size=this.size)},m0=function(e){e&&s(this,so)?c(this,Et,rv).call(this,s(this,so),"--_leading-button-shape"):this._base?.style.removeProperty("--_leading-button-shape")},ov=function(e){e&&s(this,Je)?c(this,Et,rv).call(this,s(this,Je),"--_trailing-button-shape"):this._base?.style.removeProperty("--_trailing-button-shape")},rv=function(e,i){let n=e.clientHeight/2;n&&this._base?.style.setProperty(i,`${n}px`)},ba.styles=b`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }
    ::slotted([slot="leading-button"]) {
      flex: 1 1 auto;
      min-width: 0;
      --_button-start-shape-pressed-morph: var(--_leading-button-shape, ${t.shape.corner.full});
    }

    ::slotted([slot="trailing-button"]:not([aria-expanded="true"])) {
      --m3e-icon-button-extra-small-default-leading-space: var(
        --m3e-split-button-extra-small-trailing-button-unselected-leading-space,
        0.75rem
      );
      --m3e-icon-button-extra-small-default-trailing-space: var(
        --m3e-split-button-extra-small-trailing-button-unselected-trailing-space,
        0.875rem
      );
      --m3e-icon-button-small-default-leading-space: var(
        --m3e-split-button-small-trailing-button-unselected-leading-space,
        0.75rem
      );
      --m3e-icon-button-small-default-trailing-space: var(
        --m3e-split-button-small-trailing-button-unselected-trailing-space,
        0.875rem
      );
      --m3e-icon-button-medium-default-leading-space: var(
        --m3e-split-button-medium-trailing-button-unselected-leading-space,
        0.8125rem
      );
      --m3e-icon-button-medium-default-trailing-space: var(
        --m3e-split-button-medium-trailing-button-unselected-trailing-space,
        1.0625rem
      );
      --m3e-icon-button-large-default-leading-space: var(
        --m3e-split-button-large-trailing-button-unselected-leading-space,
        1.625rem
      );
      --m3e-icon-button-large-default-trailing-space: var(
        --m3e-split-button-large-trailing-button-unselected-trailing-space,
        2rem
      );
      --m3e-icon-button-extra-large-default-leading-space: var(
        --m3e-split-button-extra-large-trailing-button-unselected-leading-space,
        2.3125rem
      );
      --m3e-icon-button-extra-large-default-trailing-space: var(
        --m3e-split-button-extra-large-trailing-button-unselected-trailing-space,
        3.0625rem
      );
    }

    ::slotted([slot="trailing-button"][aria-expanded="true"]) {
      --m3e-icon-button-extra-small-default-leading-space: var(
        --m3e-split-button-extra-small-trailing-button-selected-leading-space,
        0.8125rem
      );
      --m3e-icon-button-extra-small-default-trailing-space: var(
        --m3e-split-button-extra-small-trailing-button-selected-trailing-space,
        0.8125rem
      );
      --m3e-icon-button-small-default-leading-space: var(
        --m3e-split-button-small-trailing-button-selected-leading-space,
        0.8125rem
      );
      --m3e-icon-button-small-default-trailing-space: var(
        --m3e-split-button-small-trailing-button-selected-trailing-space,
        0.8125rem
      );
      --m3e-icon-button-medium-default-leading-space: var(
        --m3e-split-button-medium-trailing-button-selected-leading-space,
        0.9375rem
      );
      --m3e-icon-button-medium-default-trailing-space: var(
        --m3e-split-button-medium-trailing-button-selected-trailing-space,
        0.9375rem
      );
      --m3e-icon-button-large-default-leading-space: var(
        --m3e-split-button-large-trailing-button-selected-leading-space,
        1.8125rem
      );
      --m3e-icon-button-large-default-trailing-space: var(
        --m3e-split-button-large-trailing-button-selected-trailing-space,
        1.8125rem
      );
      --m3e-icon-button-extra-large-default-leading-space: var(
        --m3e-split-button-extra-large-trailing-button-selected-leading-space,
        2.6875rem
      );
      --m3e-icon-button-extra-large-default-trailing-space: var(
        --m3e-split-button-extra-large-trailing-button-selected-trailing-space,
        2.6875rem
      );
    }

    ::slotted([slot="leading-button"]:not(:hover)),
    ::slotted([slot="leading-button"]:disabled),
    ::slotted([slot="leading-button"][disabled-interactive]) {
      --m3e-connected-button-group-extra-small-inner-shape: var(
        --m3e-split-button-extra-small-inner-corner-size,
        ${t.shape.corner.extraSmall}
      );
      --m3e-connected-button-group-small-inner-shape: var(
        --m3e-split-button-small-inner-corner-size,
        ${t.shape.corner.extraSmall}
      );
      --m3e-connected-button-group-medium-inner-shape: var(
        --m3e-split-button-medium-inner-corner-size,
        ${t.shape.corner.extraSmall}
      );
      --m3e-connected-button-group-large-inner-shape: var(
        --m3e-split-button-large-inner-corner-size,
        ${t.shape.corner.small}
      );
      --m3e-connected-button-group-extra-large-inner-shape: var(
        --m3e-split-button-extra-large-inner-corner-size,
        ${t.shape.corner.medium}
      );
    }
    ::slotted([slot="leading-button"]:hover:not(:disabled):not([disabled-interactive])),
    ::slotted([slot="trailing-button"]:not([aria-expanded="true"]):hover:not(:disabled):not([disabled-interactive])) {
      --m3e-connected-button-group-extra-small-inner-shape: var(
        --m3e-split-button-extra-small-inner-corner-hover-size,
        ${t.shape.corner.small}
      );
      --m3e-connected-button-group-small-inner-shape: var(
        --m3e-split-button-small-inner-corner-hover-size,
        ${t.shape.corner.medium}
      );
      --m3e-connected-button-group-medium-inner-shape: var(
        --m3e-split-button-medium-inner-corner-hover-size,
        ${t.shape.corner.medium}
      );
      --m3e-connected-button-group-large-inner-shape: var(
        --m3e-split-button-large-inner-corner-hover-size,
        ${t.shape.corner.largeIncreased}
      );
      --m3e-connected-button-group-extra-large-inner-shape: var(
        --m3e-split-button-extra-large-inner-corner-hover-size,
        ${t.shape.corner.largeIncreased}
      );
    }

    ::slotted([slot="leading-button"]),
    ::slotted([slot="trailing-button"]) {
      --m3e-connected-button-group-extra-small-inner-pressed-shape: var(
        --m3e-split-button-extra-small-inner-corner-pressed-size,
        ${t.shape.corner.small}
      );
      --m3e-connected-button-group-small-inner-pressed-shape: var(
        --m3e-split-button-small-inner-corner-pressed-size,
        ${t.shape.corner.medium}
      );
      --m3e-connected-button-group-medium-inner-pressed-shape: var(
        --m3e-split-button-medium-inner-corner-pressed-size,
        ${t.shape.corner.medium}
      );
      --m3e-connected-button-group-large-inner-pressed-shape: var(
        --m3e-split-button-large-inner-corner-pressed-size,
        ${t.shape.corner.largeIncreased}
      );
      --m3e-connected-button-group-extra-large-inner-pressed-shape: var(
        --m3e-split-button-extra-large-inner-corner-pressed-size,
        ${t.shape.corner.largeIncreased}
      );
    }

    ::slotted([slot="trailing-button"]:not([aria-expanded="true"]):not(:hover)),
    ::slotted([slot="trailing-button"]:disabled),
    ::slotted([slot="trailing-button"][disabled-interactive]) {
      --m3e-connected-button-group-extra-small-inner-shape: var(
        --m3e-split-button-extra-small-inner-corner-size,
        ${t.shape.corner.extraSmall}
      );
      --m3e-connected-button-group-small-inner-shape: var(
        --m3e-split-button-small-inner-corner-size,
        ${t.shape.corner.extraSmall}
      );
      --m3e-connected-button-group-medium-inner-shape: var(
        --m3e-split-button-medium-inner-corner-size,
        ${t.shape.corner.extraSmall}
      );
      --m3e-connected-button-group-large-inner-shape: var(
        --m3e-split-button-large-inner-corner-size,
        ${t.shape.corner.small}
      );
      --m3e-connected-button-group-extra-large-inner-shape: var(
        --m3e-split-button-extra-large-inner-corner-size,
        ${t.shape.corner.medium}
      );
    }

    ::slotted([slot="trailing-button"][aria-expanded="true"]) {
      --_icon-button-icon-transform: rotate(180deg);
      --_button-rounded-start-shape: var(--_trailing-button-shape, ${t.shape.corner.full});
      --_button-rounded-end-shape: var(--_trailing-button-shape, ${t.shape.corner.full});
    }
    ::slotted([slot="trailing-button"]) {
      --_button-end-shape-pressed-morph: var(--_trailing-button-shape, ${t.shape.corner.full});
    }
    .base {
      --m3e-icon-button-extra-small-icon-size: calc(
        var(--m3e-spit-button-extra-small-trailing-button-icon-size, 1.375rem) + ${t.density.calc(0)}
      );
      --m3e-button-extra-small-icon-size: calc(
        var(--m3e-spit-button-extra-small-trailing-button-icon-size, 1.375rem) + ${t.density.calc(0)}
      );
      --m3e-icon-button-small-icon-size: calc(
        var(--m3e-spit-button-small-trailing-button-icon-size, 1.375rem) + ${t.density.calc(-1)}
      );
      --m3e-button-small-icon-size: calc(
        var(--m3e-spit-button-small-trailing-button-icon-size, 1.375rem) + ${t.density.calc(-1)}
      );
      --m3e-icon-button-medium-icon-size: calc(
        var(--m3e-spit-button-medium-trailing-button-icon-size, 1.625rem) + ${t.density.calc(-2)}
      );
      --m3e-button-medium-icon-size: calc(
        var(--m3e-spit-button-medium-trailing-button-icon-size, 1.625rem) + ${t.density.calc(-2)}
      );
      --m3e-icon-button-large-icon-size: calc(
        var(--m3e-spit-button-large-trailing-button-icon-size, 2.375rem) + ${t.density.calc(-3)}
      );
      --m3e-button-large-icon-size: calc(
        var(--m3e-spit-button-large-trailing-button-icon-size, 2.375rem) + ${t.density.calc(-3)}
      );
      --m3e-icon-button-extra-large-icon-size: calc(
        var(--m3e-spit-button-extra-large-trailing-button-icon-size, 3.125rem) + ${t.density.calc(-3)}
      );
      --m3e-button-extra-large-icon-size: calc(
        var(--m3e-spit-button-extra-large-trailing-button-icon-size, 3.125rem) + ${t.density.calc(-3)}
      );
    }
    :host([size="extra-small"]) .base {
      --m3e-connected-button-group-spacing: var(--m3e-split-button-extra-small-between-spacing, 0.125rem);
    }
    :host([size="small"]) .base {
      --m3e-connected-button-group-spacing: var(--m3e-split-button-small-between-spacing, 0.125rem);
    }
    :host([size="medium"]).base {
      --m3e-connected-button-group-spacing: var(--m3e-split-button-medium-between-spacing, 0.125rem);
    }
    :host([size="large"]) .base {
      --m3e-connected-button-group-spacing: var(--m3e-split-button-large-between-spacing, 0.125rem);
    }
    :host([size="extra-large"]) .base {
      --m3e-connected-button-group-spacing: var(--m3e-split-button-extra-large-between-spacing, 0.125rem);
    }
  `,d([L(".base")],ba.prototype,"_base",2),d([p({reflect:!0})],ba.prototype,"variant",2),d([p({reflect:!0})],ba.prototype,"size",2),ba=d([y("m3e-split-button")],ba);var _i=class extends M(k,"tabpanel"){constructor(){super(...arguments);this.active=!1}connectedCallback(){this.slot="panel",super.connectedCallback()}render(){return f`<m3e-collapsible ?open=${this.active}>
      <div class="content">
        <div><slot></slot></div>
        <slot name="actions"></slot>
      </div>
    </m3e-collapsible>`}};_i.styles=b`
    :host {
      display: block;
    }
    .content {
      display: flex;
      flex-direction: column;
      padding: var(--m3e-step-panel-padding, 1rem 1.5rem 1.5rem 1.5rem);
      row-gap: var(--m3e-step-panel-spacing, 0.5rem);
    }
    ::slotted([slot="actions"]) {
      flex: none;
      display: flex;
      align-items: center;
      min-height: var(--m3e-step-panel-actions-height, 3rem);
    }
    ::slotted([slot="actions"][end]) {
      justify-content: flex-end;
    }
  `,d([ie()],_i.prototype,"active",2),_i=d([y("m3e-step-panel")],_i);var lh,Ls,u0,p0,Gt=class extends Vt(de(ae(ce(N(D(M(k,"tab"))))))){constructor(){super(...arguments);m(this,Ls);m(this,lh,e=>c(this,Ls,p0).call(this,e));this.optional=!1;this.editable=!1;this.completed=!1;this.invalid=!1;this.index=-1}get panel(){return this.control instanceof _i?this.control:null}get stepper(){return this.closest("m3e-stepper")}reset(){this.invalid=!1,this.completed=!1,this.panel?.querySelector("form")?.reset()}attach(e){e instanceof _i&&(e.id=e.id||`m3e-step-panel-${Gt.__nextId++}`,je(this,"aria-controls",e.id),e.style.order=this.style.order),super.attach(e)}detach(){this.control&&(this.control.style.order="",this.control.id&&xt(this,"aria-controls",this.control.id)),super.detach()}connectedCallback(){this.slot="step",super.connectedCallback(),this.addEventListener("click",s(this,lh))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,lh))}update(e){super.update(e),e.has("selected")&&this.closest("m3e-stepper")?.[E].notifySelectionChange(this)}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}render(){let e=f`<slot name="hint">${this.optional?f`<span class="hint">(Optional)</span>`:R}</slot>`,i=f`<slot name="error">${e}</slot>`;return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
      <div class="wrapper">
        <div class="icon" aria-hidden="true">${c(this,Ls,u0).call(this)}</div>
        <div class="label">
          <slot></slot>
          ${this.invalid?i:e}
        </div>
      </div>
    </div>`}};lh=new WeakMap,Ls=new WeakSet,u0=function(){if(!this.selected){if(this.invalid)return f`<slot name="error-icon">
          <svg viewBox="0 -960 960 960" fill="currentColor">
            <path
              d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"
            />
          </svg>
        </slot>`;if(this.completed)return this.editable?f`<slot name="edit-icon">
            <svg viewBox="0 -960 960 960" fill="currentColor">
              <path
                d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
              />
            </svg>
          </slot>`:f`<slot name="done-icon">
          <svg viewBox="0 -960 960 960" fill="currentColor">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
        </slot>`}return f`<slot name="icon">${this.index+1}</slot>`},p0=function(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation()),!(e.defaultPrevented||this.selected)&&(this.selected=!0,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))&&this.closest("m3e-stepper")?.moveTo(this.index)?this.dispatchEvent(new Event("change",{bubbles:!0})):this.selected=!1)},Gt.styles=b`
    :host {
      display: block;
      outline: none;
      min-width: 0px;
      position: relative;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .base {
      min-width: inherit;
      position: relative;
      border-radius: var(--m3e-step-shape, ${t.shape.corner.medium});
      padding: var(--m3e-step-padding, 1.5rem);
    }
    :host(:not([aria-disabled="true"])) {
      cursor: pointer;
    }
    .icon {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--m3e-step-icon-shape, 50%);
      width: var(--m3e-step-icon-size, 1.5rem);
      height: var(--m3e-step-icon-size, 1.5rem);
    }
    .icon svg,
    ::slotted([slot="icon"]),
    ::slotted([slot="edit-icon"]),
    ::slotted([slot="done-icon"]),
    ::slotted([slot="error-icon"]) {
      width: 1em;
      font-size: var(--m3e-step-icon-size, 1.5rem) !important;
    }
    :host(:not([aria-disabled="true"])[selected]) .icon {
      background-color: var(--m3e-step-selected-icon-container-color, ${t.color.primary});
      color: var(--m3e-step-selected-icon-color, ${t.color.onPrimary});
    }
    :host(:not([aria-disabled="true"])[completed]:not([invalid])) .icon {
      background-color: var(--m3e-step-completed-icon-container-color, ${t.color.primary});
      color: var(--m3e-step-completed-icon-color, ${t.color.onPrimary});
    }
    :host(:not([aria-disabled="true"]):not([selected]):not([completed]):not([invalid])) .icon {
      background-color: var(--m3e-step-unselected-icon-container-color, ${t.color.inverseSurface});
      color: var(--m3e-step-unselected-icon-color, ${t.color.inverseOnSurface});
    }
    :host(:not([aria-disabled="true"]):not([selected])[invalid]) .icon {
      color: var(--m3e-step-icon-error-color, ${t.color.error});
    }
    :host([aria-disabled="true"]) .icon {
      background-color: color-mix(
        in srgb,
        var(--m3e-step-disabled-icon-container-color, ${t.color.onSurface}) 10%,
        transparent
      );
      color: color-mix(in srgb, var(--m3e-step-disabled-icon-color, ${t.color.onSurface}) 38%, transparent);
    }

    :host(:not([aria-disabled="true"])) .label {
      color: var(--m3e-step-label-color, ${t.color.onSurface});
    }
    :host(:not([aria-disabled="true"]):not([selected])[invalid]) .label {
      color: var(--m3e-step-label-error-color, ${t.color.error});
    }
    :host([aria-disabled="true"]) .label {
      color: color-mix(in srgb, var(--m3e-step-disabled-label-color, ${t.color.onSurface}) 38%, transparent);
    }
    .wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      border-radius: inherit;
      font-size: var(--m3e-step-font-size, ${t.typescale.standard.title.small.fontSize});
      font-weight: var(--m3e-step-font-weight, ${t.typescale.standard.title.small.fontWeight});
      line-height: var(--m3e-step-line-height, ${t.typescale.standard.title.small.lineHeight});
      letter-spacing: var(--m3e-step-tracking, ${t.typescale.standard.title.small.tracking});
      flex-direction: var(--_step-direction, row);
      gap: var(--m3e-step-icon-label-space, 0.5rem);
      justify-content: flex-start;
    }
    .label {
      display: flex;
      flex-direction: column;
      align-items: var(--_step-label-align-items, flex-start);
    }
    ::slotted([slot="hint"]),
    .hint,
    ::slotted([slot="error"]) {
      font-size: var(--m3e-step-hint-font-size, ${t.typescale.standard.body.small.fontSize});
      font-weight: var(--m3e-step-hint-font-weight, ${t.typescale.standard.body.small.fontWeight});
      line-height: var(--m3e-step-hint-line-height, ${t.typescale.standard.body.small.lineHeight});
      letter-spacing: var(--m3e-step-hint-tracking, ${t.typescale.standard.body.small.tracking});
    }
    :host(:not([aria-disabled="true"]):not([invalid])) ::slotted([slot="hint"]),
    :host(:not([aria-disabled="true"]):not([invalid])) .hint {
      color: var(--m3e-step-hint-color, ${t.color.onSurfaceVariant});
    }
    :host([aria-disabled="true"]) ::slotted([slot="hint"]),
    :host([aria-disabled="true"]) .hint {
      color: color-mix(in srgb, var(--m3e-step-disabled-hint-color, ${t.color.onSurface}) 38%, transparent);
    }
  `,Gt.__nextId=0,d([L(".focus-ring")],Gt.prototype,"_focusRing",2),d([L(".state-layer")],Gt.prototype,"_stateLayer",2),d([L(".ripple")],Gt.prototype,"_ripple",2),d([p({type:Boolean,reflect:!0})],Gt.prototype,"optional",2),d([p({type:Boolean,reflect:!0})],Gt.prototype,"editable",2),d([p({type:Boolean,reflect:!0})],Gt.prototype,"completed",2),d([p({type:Boolean,reflect:!0})],Gt.prototype,"invalid",2),d([ie()],Gt.prototype,"index",2),Gt=d([y("m3e-step")],Gt);var ga=class extends Ve{#e;constructor(a){super(),this.#e=a}_onClick(){switch(this.#e){case"next":this.closest("m3e-stepper")?.moveNext();break;case"previous":this.closest("m3e-stepper")?.movePrevious();break;case"reset":this.closest("m3e-stepper")?.reset();break}}};var v0,f0,Es,Qe,Qm,b0,g0,y0,x0,C0,ch,Lr=class extends(f0=D(k),v0=E,f0){constructor(){super(...arguments);m(this,Qe);m(this,Es);this._selectedIndex=null;this[v0]=new rt().withHomeAndEnd().withWrap().onSelectedItemsChange(()=>c(this,Qe,x0).call(this));this.headerPosition="above";this.labelPosition="end";this.linear=!1;this.orientation="horizontal"}get steps(){return this[E]?.items??[]}get selectedStep(){return this._selectedIndex!==null?this.steps[this._selectedIndex]??null:null}get selectedIndex(){return this._selectedIndex??-1}movePrevious(){return this.moveTo((this._selectedIndex??1)-1)}moveNext(){return this.moveTo((this._selectedIndex??-1)+1)}moveTo(e){let i=this.selectedStep;if(i&&i.index===e)return!0;if(this.steps[e]?.disabled)return!1;if(e>=0&&e<this.steps.length){if(i){let n=c(this,Qe,C0).call(this);if(this.linear){if(e<i.index){let l=this[E].items[e];if(!l||l.completed&&!l.editable)return!1}else if(e>i.index+1){let l=this[E].items[e];if(!l||!l.completed)return!1}else if(!n&&!i.optional)return!1}i.completed=!0}return this._selectedIndex=e,this[E].select(this.selectedStep),this.dispatchEvent(new Event("change",{bubbles:!0})),!0}else return i&&(this[E].deselect(i),this.dispatchEvent(new Event("change",{bubbles:!0}))),!1}reset(){this.steps.forEach(i=>i.reset());let e=this.steps.findIndex(i=>!i.disabled);e!==this._selectedIndex&&(this._selectedIndex=e,this[E].select(this.selectedStep),this.dispatchEvent(new Event("change",{bubbles:!0})))}connectedCallback(){super.connectedCallback(),this.classList.toggle("-no-animate",!0)}disconnectedCallback(){var e;super.disconnectedCallback(),this._orientation=void 0,(e=s(this,Es))==null||e.call(this)}update(e){var i;super.update(e),e.has("orientation")&&((i=s(this,Es))==null||i.call(this),this.orientation==="auto"?g(this,Es,bi.observe(["(max-width: 599.98px)"],n=>{this._orientation=n.get("(max-width: 599.98px)")?"vertical":"horizontal",c(this,Qe,ch).call(this)})):(this._orientation=void 0,c(this,Qe,ch).call(this))),e.has("_orientation")&&c(this,Qe,ch).call(this)}render(){let e;return this.selectedStep?.panel&&(e=[...this.querySelectorAll("[slot='panel']")].indexOf(this.selectedStep.panel),e===-1&&(e=void 0)),this[E].vertical?f`${c(this,Qe,Qm).call(this)} <slot name="panel"></slot>`:f`${this.headerPosition==="above"?c(this,Qe,Qm).call(this):R}
        <m3e-slide class="steps" selected-index="${$e(e)}">
          <slot name="panel"></slot>
        </m3e-slide>
        ${this.headerPosition==="below"?c(this,Qe,Qm).call(this):R}`}};Es=new WeakMap,Qe=new WeakSet,Qm=function(){return f`<div
      class="header"
      role="tablist"
      aria-orientation="${$e(this[E].vertical?"vertical":void 0)}"
      @change="${c(this,Qe,b0)}"
    >
      <slot name="step" @slotchange="${c(this,Qe,g0)}" @keydown="${c(this,Qe,y0)}"></slot>
    </div>`},b0=function(e){e.stopPropagation()},g0=function(){let{added:e,removed:i}=this[E].setItems([...this.querySelectorAll("m3e-step")]);if(e.length>0||i.length>0){this.querySelectorAll(".-m3e-step-divider").forEach(n=>n.remove());for(let n=0;n<this[E].items.length;n++){let l=this[E].items[n];if(l.index=n,n>0){let h=document.createElement("div");h.ariaHidden="true",h.classList.add("-m3e-step-divider"),h.slot="step",l.insertAdjacentElement("beforebegin",h)}}c(this,Qe,ch).call(this),this[E].selectedItems.length==0&&this[E].select(this[E].items.find(n=>!n.disabled))}},y0=function(e){this[E].onKeyDown(e)},x0=function(){let e=this[E].selectedItems[0],i=e?this.steps.indexOf(e):null;i===-1&&(i=null),this._selectedIndex=i;for(let n of this[E].items)n.panel&&(n.panel.active=n.index===i);e&&this.matches(":focus-within")&&!e.matches(":focus")&&e.focus(),this.classList.contains("-no-animate")&&requestAnimationFrame(()=>this.classList.toggle("-no-animate",!1))},C0=function(){let e=!1;return this.selectedStep&&(e=this.selectedStep.panel?.querySelector("form")?.checkValidity()??!0,this.selectedStep.optional&&(e=!0),this.selectedStep.invalid=!e),e},ch=function(){this[E].vertical=(this._orientation??this.orientation)==="vertical",this.classList.toggle("-vertical",this[E].vertical),this[E].vertical?this.steps.forEach((e,i)=>{e.style.order=`${i}`,e.panel&&(e.panel.style.order=`${i}`)}):this.steps.forEach(e=>{e.style.order="",e.panel&&(e.panel.style.order="")})},(()=>{if(document){let e=new CSSStyleSheet;e.replaceSync(b`
          m3e-stepper:not(.-vertical) > .-m3e-step-divider::before {
            border-bottom-width: var(--m3e-step-divider-thickness, 1px);
            border-bottom-style: solid;
            border-bottom-color: var(--m3e-step-divider-color, ${t.color.outline});
          }
          m3e-stepper:not(.-vertical) > [slot="step"]:not(.-m3e-step-divider):not(:first-of-type)::before,
          m3e-stepper:not(.-vertical) > [slot="step"]:not(.-m3e-step-divider):not(:last-of-type)::after {
            border-bottom-width: var(--m3e-step-divider-thickness, 1px);
            border-bottom-style: solid;
            border-bottom-color: var(--m3e-step-divider-color, ${t.color.outline});
          }
          m3e-stepper:not(.-vertical)[label-position="end"] > .-m3e-step-divider {
            margin-block: auto;
          }
          m3e-stepper:not(.-vertical)[label-position="below"] > .-m3e-step-divider::before,
          m3e-stepper:not(.-vertical)[label-position="below"]
            > [slot="step"]:not(.-m3e-step-divider):not(:first-of-type)::before,
          m3e-stepper:not(.-vertical)[label-position="below"]
            > [slot="step"]:not(.-m3e-step-divider):not(:last-of-type)::after {
            margin-block-start: calc(var(--m3e-step-padding, 1.5rem) + calc(var(--m3e-step-icon-size, 1.5rem) / 2));
          }
          m3e-stepper.-vertical > [slot="panel"] {
            margin-inline-start: calc(var(--m3e-step-padding, 1.5rem) + calc(var(--m3e-step-icon-size, 1.5rem) / 2));
          }
          m3e-stepper.-vertical > [slot="panel"]:not(:last-of-type) {
            border-inline-start-width: var(--m3e-step-divider-thickness, 1px);
            border-inline-start-style: solid;
            border-inline-start-color: var(--m3e-step-divider-color, ${t.color.outline});
          }
          m3e-stepper.-vertical > [slot="step"]:not(.-m3e-step-divider):not(:first-of-type)::before,
          m3e-stepper.-vertical > [slot="step"]:not(.-m3e-step-divider):not(:last-of-type)::after {
            margin-inline-start: calc(var(--m3e-step-padding, 1.5rem) + calc(var(--m3e-step-icon-size, 1.5rem) / 2));
            border-inline-start-width: var(--m3e-step-divider-thickness, 1px);
            border-inline-start-style: solid;
            border-inline-start-color: var(--m3e-step-divider-color, ${t.color.outline});
          }
        `.toString()),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}})(),Lr.styles=b`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    :host(:not(.-vertical)) .header {
      display: flex;
      align-items: flex-start;
      flex-wrap: nowrap;
    }
    :host(:not(.-vertical)) ::slotted(.-m3e-step-divider) {
      flex: 1 1 auto;
      position: relative;
      min-width: 2rem;
    }
    :host(:not(.-vertical)) ::slotted(.-m3e-step-divider)::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
    }
    :host(:not(.-vertical):not([label-position="below"])) ::slotted(.-m3e-step-divider)::before {
      top: 50%;
    }
    :host(:not(.-vertical)) ::slotted([slot="step"]) {
      align-self: stretch;
    }
    :host(:not(.-vertical)) ::slotted([slot="step"]:not(.-m3e-step-divider):not(:first-of-type))::before,
    :host(:not(.-vertical)) ::slotted([slot="step"]:not(.-m3e-step-divider):not(:last-of-type))::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
    }
    :host(:not(.-vertical)[label-position="end"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:first-of-type))::before,
    :host(:not(.-vertical)[label-position="end"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:last-of-type))::after {
      top: 50%;
    }
    :host(:not(:dir(rtl)):not(.-vertical)[label-position="end"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:first-of-type))::before {
      left: 0;
      right: calc(100% - var(--m3e-step-padding, 1.5rem) + var(--m3e-step-divider-inset, 0.5rem));
    }
    :host(:dir(rtl):not(.-vertical)[label-position="end"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:first-of-type))::before {
      right: 0;
      left: calc(100% - var(--m3e-step-padding, 1.5rem) + var(--m3e-step-divider-inset, 0.5rem));
    }
    :host(:not(:dir(rtl)):not(.-vertical)[label-position="end"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:last-of-type))::after {
      left: calc(100% - var(--m3e-step-padding, 1.5rem) + var(--m3e-step-divider-inset, 0.5rem));
      right: 0;
    }
    :host(:dir(rtl):not(.-vertical)[label-position="end"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:last-of-type))::after {
      right: calc(100% - var(--m3e-step-padding, 1.5rem) + var(--m3e-step-divider-inset, 0.5rem));
      left: 0;
    }
    :host(:not(:dir(rtl)):not(.-vertical)[label-position="below"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:first-of-type))::before {
      left: 0;
      right: calc(50% + calc(var(--m3e-step-icon-size, 1.5rem) / 2) + var(--m3e-step-divider-inset, 0.5rem));
    }
    :host(:dir(rtl):not(.-vertical)[label-position="below"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:first-of-type))::before {
      right: 0;
      left: calc(50% + calc(var(--m3e-step-icon-size, 1.5rem) / 2) + var(--m3e-step-divider-inset, 0.5rem));
    }
    :host(:not(:dir(rtl)):not(.-vertical)[label-position="below"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:last-of-type))::after {
      left: calc(50% + calc(var(--m3e-step-icon-size, 1.5rem) / 2) + var(--m3e-step-divider-inset, 0.5rem));
      right: 0;
    }
    :host(:dir(rtl):not(.-vertical)[label-position="below"])
      ::slotted([slot="step"]:not(.-m3e-step-divider):not(:last-of-type))::after {
      right: calc(50% + calc(var(--m3e-step-icon-size, 1.5rem) / 2) + var(--m3e-step-divider-inset, 0.5rem));
      left: 0;
    }
    :host(:not(.-vertical)[label-position="below"]) {
      --_step-direction: column;
      --_step-label-align-items: center;
    }
    :host(.-vertical) .header {
      display: contents;
    }
    :host(.-vertical) ::slotted([slot="step"]:not(.-m3e-step-divider)) {
      flex: none;
    }
    :host(.-vertical) ::slotted([slot="step"]:not(.-m3e-step-divider):not(:first-of-type))::before,
    :host(.-vertical) ::slotted([slot="step"]:not(.-m3e-step-divider):not(:last-of-type))::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
    }
    :host(.-vertical) ::slotted([slot="step"]:not(.-m3e-step-divider):not(:first-of-type))::before {
      top: 0;
      bottom: calc(100% - var(--m3e-step-padding, 1.5rem) + var(--m3e-step-divider-inset, 0.5rem));
    }
    :host(.-vertical) ::slotted([slot="step"]:not(.-m3e-step-divider):not(:last-of-type))::after {
      top: calc(100% - var(--m3e-step-padding, 1.5rem) + var(--m3e-step-divider-inset, 0.5rem));
      bottom: 0;
    }
    :host(:not(.-vertical)) {
      --m3e-collapsible-animation-duration: 0ms;
    }
    :host(.-no-animate) {
      --m3e-collapsible-animation-duration: 0ms;
    }
  `,d([ie()],Lr.prototype,"_orientation",2),d([ie()],Lr.prototype,"_selectedIndex",2),d([p({attribute:"header-position",reflect:!0})],Lr.prototype,"headerPosition",2),d([p({attribute:"label-position",reflect:!0})],Lr.prototype,"labelPosition",2),d([p({type:Boolean,reflect:!0})],Lr.prototype,"linear",2),d([p({reflect:!0})],Lr.prototype,"orientation",2),Lr=d([y("m3e-stepper")],Lr);var eu=class extends ga{constructor(){super("next")}};eu=d([y("m3e-stepper-next")],eu);var tu=class extends ga{constructor(){super("previous")}};tu=d([y("m3e-stepper-previous")],tu);var ou=class extends ga{constructor(){super("reset")}};ou=d([y("m3e-stepper-reset")],ou);var H={selectedIconColor:r(`var(--m3e-switch-selected-icon-color, ${t.color.onPrimaryContainer})`),selectedIconSize:r("var(--m3e-switch-selected-icon-size, 1rem)"),unselectedIconColor:r(`var(--m3e-switch-unselected-icon-color, ${t.color.surfaceContainerHighest})`),unselectedIconSize:r("var(--m3e-switch-unselected-icon-size, 1rem)"),trackHeight:r("var(--m3e-switch-track-height, 2rem)"),trackWidth:r("var(--m3e-switch-track-width, 3.25rem)"),trackOutlineColor:r(`var(--m3e-switch-track-outline-color, ${t.color.outline})`),trackOutlineWidth:r("var(--m3e-switch-track-outline-width, 2px)"),trackShape:r(`var(--m3e-switch-track-shape, ${t.shape.corner.full})`),selectedTrackColor:r(`var(--m3e-switch-selected-track-color, ${t.color.primary})`),unselectedTrackColor:r(`var(--m3e-switch-unselected-track-color, ${t.color.surfaceContainerHighest})`),unselectedHandleHeight:r("var(--m3e-switch-unselected-handle-height, 1rem)"),unselectedHandleWidth:r("var(--m3e-switch-unselected-handle-width, 1rem)"),withIconHandleHeight:r("var(--m3e-switch-with-icon-handle-height, 1.5rem)"),withIconHandleWidth:r("var(--m3e-switch-with-icon-handle-width, 1.5rem)"),selectedHandleHeight:r("var(--m3e-switch-selected-handle-height, 1.5rem)"),selectedHandleWidth:r("var(--m3e-switch-selected-handle-width, 1.5rem)"),pressedHandleHeight:r("var(--m3e-switch-pressed-handle-height, 1.75rem)"),pressedHandleWidth:r("var(--m3e-switch-pressed-handle-width, 1.75rem)"),handleShape:r(`var(--m3e-switch-handle-shape, ${t.shape.corner.full})`),selectedHandleColor:r(`var(--m3e-switch-selected-handle-color, ${t.color.onPrimary})`),unselectedHandleColor:r(`var(--m3e-switch-unselected-handle-color, ${t.color.outline})`),stateLayerSize:r("var(--m3e-switch-state-layer-size, 2.5rem)"),stateLayerShape:r(`var(--m3e-switch-state-layer-shape, ${t.shape.corner.full})`),disabledSelectedIconColor:r(`var(--m3e-switch-disabled-selected-icon-color, ${t.color.onSurface})`),disabledSelectedIconOpacity:r("var(--m3e-switch-disabled-selected-icon-opacity, 38%)"),disabledUnselectedIconColor:r(`var(--m3e-switch-disabled-unselected-icon-color, ${t.color.surfaceContainerHighest})`),disabledUnselectedIconOpacity:r("var(--m3e-switch-disabled-unselected-icon-opacity, 38%)"),disabledTrackOpacity:r("var(--m3e-switch-disabled-track-opacity, 12%)"),disabledSelectedTrackColor:r(`var(--m3e-switch-disabled-selected-track-color, ${t.color.onSurface})`),disabledUnselectedTrackColor:r(`var(--m3e-switch-disabled-unselected-track-color, ${t.color.surfaceContainerHighest})`),disabledUnselectedTrackOutlineColor:r(`var(--m3e-switch-disabled-unselected-track-outline-color, ${t.color.onSurface})`),disabledUnselectedHandleOpacity:r("var(--m3e-switch-disabled-unselected-handle-opacity, 38%)"),disabledSelectedHandleOpacity:r("var(--m3e-switch-disabled-selected-handle-opacity, 100%)"),disabledSelectedHandleColor:r(`var(--m3e-switch-disabled-selected-handle-color, ${t.color.surface})`),disabledUnselectedHandleColor:r(`var(--m3e-switch-disabled-unselected-handle-color, ${t.color.onSurface})`),selectedHoverIconColor:r(`var(--m3e-switch-selected-hover-icon-color, ${t.color.onPrimaryContainer})`),unselectedHoverIconColor:r(`var(--m3e-switch-unselected-hover-icon-color, ${t.color.surfaceContainerHighest})`),selectedHoverTrackColor:r(`var(--m3e-switch-selected-hover-track-color, ${t.color.primary})`),selectedHoverStateLayerColor:r(`var(--m3e-switch-selected-hover-state-layer-color, ${t.color.primary})`),selectedHoverStateLayerOpacity:r("var(--m3e-switch-selected-hover-state-layer-opacity, 8%)"),unselectedHoverTrackColor:r(`var(--m3e-switch-unselected-hover-track-color, ${t.color.surfaceContainerHighest})`),unselectedHoverTrackOutlineColor:r(`var(--m3e-switch-unselected-hover-track-outline-color, ${t.color.outline})`),unselectedHoverStateLayerColor:r(`var(--m3e-switch-unselected-hover-state-layer-color, ${t.color.onSurface})`),unselectedHoverStateLayerOpacity:r("var(--m3e-switch-unselected-hover-state-layer-opacity, 8%)"),selectedHoverHandleColor:r(`var(--m3e-switch-selected-hover-handle-color, ${t.color.surfaceContainerHighest})`),unselectedHoverHandleColor:r(`var(--m3e-switch-unselected-hover-handle-color, ${t.color.onSurfaceVariant})`),selectedFocusIconColor:r(`var(--m3e-switch-selected-focus-icon-color, ${t.color.onPrimaryContainer})`),unselectedFocusIconColor:r(`var(--m3e-switch-unselected-focus-icon-color, ${t.color.surfaceContainerHighest})`),selectedFocusTrackColor:r(`var(--m3e-switch-selected-focus-track-color, ${t.color.primary})`),selectedFocusStateLayerColor:r(`var(--m3e-switch-selected-focus-state-layer-color, ${t.color.primary})`),selectedFocusStateLayerOpacity:r("var(--m3e-switch-selected-focus-state-layer-opacity, 10%)"),unselectedFocusTrackColor:r(`var(--m3e-switch-unselected-focus-track-color, ${t.color.surfaceContainerHighest})`),unselectedFocusTrackOutlineColor:r(`var(--m3e-switch-unselected-focus-track-outline-color, ${t.color.outline})`),unselectedFocusStateLayerColor:r(`var(--m3e-switch-unselected-focus-state-layer-color, ${t.color.onSurface})`),unselectedFocusStateLayerOpacity:r("var(--m3e-switch-unselected-focus-state-layer-opacity, 10%)"),selectedFocusHandleColor:r(`var(--m3e-switch-selected-focus-handle-color, ${t.color.primaryContainer})`),unselectedFocusHandleColor:r(`var(--m3e-switch-unselected-focus-handle-color, ${t.color.onSurfaceVariant})`),selectedPressedIconColor:r(`var(--m3e-switch-selected-pressed-icon-color, ${t.color.onPrimaryContainer})`),unselectedPressedIconColor:r(`var(--m3e-switch-unselected-pressed-icon-color, ${t.color.surfaceContainerHighest})`),selectedPressedTrackColor:r(`var(--m3e-switch-selected-pressed-track-color, ${t.color.primary})`),selectedPressedStateLayerColor:r(`var(--m3e-switch-selected-pressed-state-layer-color, ${t.color.primary})`),selectedPressedStateLayerOpacity:r("var(--m3e-switch-selected-pressed-state-layer-opacity, 10%)"),unselectedPressedTrackColor:r(`var(--m3e-switch-unselected-pressed-track-color, ${t.color.surfaceContainerHighest})`),unselectedPressedTrackOutlineColor:r(`var(--m3e-switch-unselected-pressed-track-outline-color, ${t.color.outline})`),unselectedPressedStateLayerColor:r(`var(--m3e-switch-unselected-pressed-state-layer-color, ${t.color.onSurface})`),unselectedPressedStateLayerOpacity:r("var(--m3e-switch-unselected-pressed-state-layer-opacity, 10%)"),selectedPressedHandleColor:r(`var(--m3e-switch-selected-pressed-handle-color, ${t.color.primaryContainer})`),unselectedPressedHandleColor:r(`var(--m3e-switch-unselected-pressed-handle-color, ${t.color.onSurfaceVariant})`)};var $0=b`
  .handle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    transform-origin: center center;
    border-radius: ${H.handleShape};
    transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard},
      transform var(--_switch-handle-effect),
      width ${t.motion.spring.fastEffects},
      height ${t.motion.spring.fastEffects}`)};
  }
  .track:not(.pressed) .handle {
    --_switch-handle-effect: ${t.motion.spring.fastSpatial};
  }
  .track.pressed .handle {
    --_switch-handle-effect: ${t.motion.spring.fastEffects};
  }
  :host(:not([aria-disabled="true"]):not([checked])[icons="both"]) .track:not(.pressed) .handle {
    width: ${H.withIconHandleWidth};
    height: ${H.withIconHandleHeight};
  }
  :host(:not([checked]):not([icons="both"])) .track:not(.pressed) .handle,
  :host([aria-disabled="true"]:not([checked])) .handle {
    width: ${H.unselectedHandleWidth};
    height: ${H.unselectedHandleHeight};
  }
  :host([checked]) .track:not(.pressed) .handle {
    width: ${H.selectedHandleWidth};
    height: ${H.selectedHandleHeight};
  }
  .track.pressed .handle {
    width: ${H.pressedHandleWidth};
    height: ${H.pressedHandleHeight};
  }
  :host(:not([aria-disabled="true"]):not([checked]):not(:focus):not(:hover)) .track:not(.pressed) .handle {
    background-color: ${H.unselectedHandleColor};
  }
  :host(:not([aria-disabled="true"]):not([checked]):not(:focus):hover) .track:not(.pressed) .handle {
    background-color: ${H.unselectedHoverHandleColor};
  }
  :host(:not([aria-disabled="true"]):not([checked]):focus) .track:not(.pressed) .handle {
    background-color: ${H.unselectedFocusHandleColor};
  }
  :host(:not([aria-disabled="true"]):not([checked])) .track.pressed .handle {
    background-color: ${H.unselectedPressedHandleColor};
  }
  :host(:not([aria-disabled="true"])[checked]:not(:focus):not(:hover)) .track:not(.pressed) .handle {
    background-color: ${H.selectedHandleColor};
  }
  :host(:not([aria-disabled="true"])[checked]:not(:focus):hover) .track:not(.pressed) .handle {
    background-color: ${H.selectedHoverHandleColor};
  }
  :host(:not([aria-disabled="true"])[checked]:focus) .track:not(.pressed) .handle {
    background-color: ${H.selectedFocusHandleColor};
  }
  :host(:not([aria-disabled="true"])[checked]) .track.pressed .handle {
    background-color: ${H.selectedPressedHandleColor};
  }
  :host([aria-disabled="true"]:not([checked])) .handle {
    background-color: color-mix(
      in srgb,
      ${H.disabledUnselectedHandleColor} ${H.disabledUnselectedHandleOpacity},
      transparent
    );
  }
  :host([aria-disabled="true"][checked]) .handle {
    background-color: color-mix(
      in srgb,
      ${H.disabledSelectedHandleColor} ${H.disabledSelectedHandleOpacity},
      transparent
    );
  }
  :host(:not(:dir(rtl))[checked]) .track:not(.pressed) .handle {
    transform: translateX(
      calc(${H.trackWidth} - ${H.selectedHandleWidth} - calc(${H.trackOutlineWidth} * 2))
    );
  }
  :host(:dir(rtl)[checked]) .track:not(.pressed) .handle {
    transform: translateX(
      calc(
        0px - calc(
            ${H.trackWidth} - ${H.selectedHandleWidth} - calc(${H.trackOutlineWidth} * 2)
          )
      )
    );
  }
  :host(:not(:dir(rtl))[checked]) .track.pressed .handle {
    transform: translateX(
      calc(${H.trackWidth} - ${H.pressedHandleWidth} - ${H.trackOutlineWidth})
    );
  }
  :host(:dir(rtl)[checked]) .track.pressed .handle {
    transform: translateX(
      calc(0px - calc(${H.trackWidth} - ${H.pressedHandleWidth} - ${H.trackOutlineWidth}))
    );
  }
  :host(:not(:dir(rtl)):not([checked]):not([icons="both"])) .track:not(.pressed) .handle,
  :host(:not(:dir(rtl))[aria-disabled="true"]:not([checked])) .handle {
    transform: translateX(
      calc(
        ${H.trackOutlineWidth} + calc(${H.pressedHandleWidth} - ${H.withIconHandleWidth})
      )
    );
  }
  :host(:dir(rtl):not([checked]):not([icons="both"])) .track:not(.pressed) .handle,
  :host(:dir(rtl)[aria-disabled="true"]:not([checked])) .handle {
    transform: translateX(
      calc(
        0px - calc(
            ${H.trackOutlineWidth} +
              calc(${H.pressedHandleWidth} - ${H.withIconHandleWidth})
          )
      )
    );
  }
  :host(:not(:dir(rtl)):not([aria-disabled="true"]):not([checked])[icons="both"]) .track:not(.pressed) .handle {
    transform: translateX(${H.trackOutlineWidth});
  }
  :host(:dir(rtl):not([aria-disabled="true"]):not([checked])[icons="both"]) .track:not(.pressed) .handle {
    transform: translateX(calc(0px - ${H.trackOutlineWidth}));
  }
  @media (forced-colors: active) {
    .handle {
      transition: ${r(`transform var(--_switch-handle-effect),
      width ${t.motion.spring.fastEffects},
      height ${t.motion.spring.fastEffects}`)};
    }
    :host(:not([aria-disabled="true"]):not([checked]):not(:focus):not(:hover)) .track:not(.pressed) .handle,
    :host(:not([aria-disabled="true"]):not([checked]):not(:focus):hover) .track:not(.pressed) .handle,
    :host(:not([aria-disabled="true"]):not([checked]):focus) .track:not(.pressed) .handle,
    :host(:not([aria-disabled="true"]):not([checked])) .track.pressed .handle {
      background-color: ButtonText;
    }
    :host([aria-disabled="true"]:not([checked])) .handle {
      background-color: GrayText;
    }
    :host(:not([aria-disabled="true"])[checked]:not(:focus):not(:hover)) .track:not(.pressed) .handle,
    :host(:not([aria-disabled="true"])[checked]:not(:focus):hover) .track:not(.pressed) .handle,
    :host(:not([aria-disabled="true"])[checked]:focus) .track:not(.pressed) .handle,
    :host(:not([aria-disabled="true"])[checked]) .track.pressed .handle {
      background-color: Canvas;
    }
    :host([aria-disabled="true"][checked]) .handle {
      background-color: Canvas;
    }
  }
  @media (prefers-reduced-motion) {
    .handle {
      transition: none;
    }
  }
`;var S0=b`
  :host([icons="none"]) .icon,
  :host([icons="selected"]:not([checked])) .icon,
  :host([aria-disabled="true"]:not([checked])) .icon {
    display: none;
  }
  .icon {
    width: 1em;
    transition: ${r(`color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  :host(:not([checked])) .icon {
    font-size: ${H.unselectedIconSize};
  }
  :host([checked]) .icon {
    font-size: ${H.selectedIconSize};
  }
  :host(:not([aria-disabled="true"]):not([checked]):not(:focus):not(:hover)) .track:not(.pressed) .icon {
    color: ${H.unselectedIconColor};
  }
  :host(:not([aria-disabled="true"]):not([checked]):not(:focus):hover) .track:not(.pressed) .icon {
    color: ${H.unselectedHoverIconColor};
  }
  :host(:not([aria-disabled="true"]):not([checked]):focus) .track:not(.pressed) .icon {
    color: ${H.unselectedFocusIconColor};
  }
  :host(:not([aria-disabled="true"]):not([checked])) .track.pressed .icon {
    color: ${H.unselectedPressedIconColor};
  }
  :host(:not([aria-disabled="true"])[checked]:not(:focus):not(:hover)) .track:not(.pressed) .icon {
    color: ${H.selectedIconColor};
  }
  :host(:not([aria-disabled="true"])[checked]:not(:focus):hover) .track:not(.pressed) .icon {
    color: ${H.selectedHoverIconColor};
  }
  :host(:not([aria-disabled="true"])[checked]:focus) .track:not(.pressed) .icon {
    color: ${H.selectedFocusIconColor};
  }
  :host(:not([aria-disabled="true"])[checked]) .track.pressed .icon {
    color: ${H.selectedPressedIconColor};
  }
  :host([aria-disabled="true"]:not([checked])) .icon {
    color: color-mix(
      in srgb,
      ${H.disabledUnselectedIconColor} ${H.disabledUnselectedIconOpacity},
      transparent
    );
  }
  :host([aria-disabled="true"][checked]) .icon {
    color: color-mix(
      in srgb,
      ${H.disabledSelectedIconColor} ${H.disabledSelectedIconOpacity},
      transparent
    );
  }
  @media (forced-colors: active) {
    :host(:not([aria-disabled="true"]):not([checked]):not(:focus):not(:hover)) .track:not(.pressed) .icon,
    :host(:not([aria-disabled="true"]):not([checked]):not(:focus):hover) .track:not(.pressed) .icon,
    :host(:not([aria-disabled="true"]):not([checked]):focus) .track:not(.pressed) .icon,
    :host(:not([aria-disabled="true"]):not([checked])) .track.pressed .icon {
      color: Canvas;
    }
    :host(:not([aria-disabled="true"])[checked]:not(:focus):not(:hover)) .track:not(.pressed) .icon,
    :host(:not([aria-disabled="true"])[checked]:not(:focus):hover) .track:not(.pressed) .icon,
    :host(:not([aria-disabled="true"])[checked]:focus) .track:not(.pressed) .icon,
    :host(:not([aria-disabled="true"])[checked]) .track.pressed .icon {
      color: CanvasText;
    }
    :host([aria-disabled="true"]:not([checked])) .icon {
      color: Canvas;
    }
    :host([aria-disabled="true"][checked]) .icon {
      color: GrayText;
    }
  }
  @media (prefers-reduced-motion) {
    .icon {
      transition: none;
    }
  }
`;var k0=b`
  .state-layer {
    width: ${H.stateLayerSize};
    height: ${H.stateLayerSize};
    border-radius: ${H.stateLayerShape};
    transition: ${r(`top ${t.motion.spring.fastEffects},
          left ${t.motion.spring.fastEffects},
          right ${t.motion.spring.fastEffects}`)};
  }
  :host(:not([checked])[icons="both"]) .track:not(.pressed) .state-layer {
    inset-inline-start: calc(0px - calc(calc(${H.stateLayerSize} - ${H.withIconHandleWidth}) / 2));
    top: calc(0px - calc(calc(${H.stateLayerSize} - ${H.withIconHandleHeight}) / 2));
  }
  :host(:not([checked]):not([icons="both"])) .track:not(.pressed) .state-layer {
    inset-inline-start: calc(
      0px - calc(calc(${H.stateLayerSize} - ${H.unselectedHandleWidth}) / 2)
    );
    top: calc(0px - calc(calc(${H.stateLayerSize} - ${H.unselectedHandleHeight}) / 2));
  }
  :host([checked]) .track:not(.pressed) .state-layer {
    inset-inline-start: calc(0px - calc(calc(${H.stateLayerSize} - ${H.selectedHandleWidth}) / 2));
    top: calc(0px - calc(calc(${H.stateLayerSize} - ${H.selectedHandleHeight}) / 2));
  }
  .track.pressed .state-layer {
    inset-inline-start: calc(0px - calc(calc(${H.stateLayerSize} - ${H.pressedHandleWidth}) / 2));
    top: calc(0px - calc(calc(${H.stateLayerSize} - ${H.pressedHandleWidth}) / 2));
  }
  :host(:not([checked])) .state-layer {
    --m3e-state-layer-hover-color: ${H.unselectedHoverStateLayerColor};
    --m3e-state-layer-hover-opacity: ${H.unselectedHoverStateLayerOpacity};
    --m3e-state-layer-focus-color: ${H.unselectedFocusStateLayerColor};
    --m3e-state-layer-focus-opacity: ${H.unselectedFocusStateLayerOpacity};
  }
  :host([checked]) .state-layer {
    --m3e-state-layer-hover-color: ${H.selectedHoverStateLayerColor};
    --m3e-state-layer-hover-opacity: ${H.selectedHoverStateLayerOpacity};
    --m3e-state-layer-focus-color: ${H.selectedFocusStateLayerColor};
    --m3e-state-layer-focus-opacity: ${H.selectedFocusStateLayerOpacity};
  }
`;var w0=b`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    height: fit-content;
    width: fit-content;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  :host(:not([aria-disabled="true"])) {
    cursor: pointer;
  }
  .focus-ring {
    border-radius: ${H.trackShape};
  }
  .touch {
    position: absolute;
    height: 3rem;
    left: 0;
    right: 0;
  }
  .base {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;var L0=b`
  .track {
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    border-radius: ${H.trackShape};
    width: ${H.trackWidth};
    height: ${H.trackHeight};
    transition: ${r(`background-color ${t.motion.duration.short4} ${t.motion.easing.standard}`)};
  }
  :host(:not([checked])) .track {
    border-width: ${H.trackOutlineWidth};
    border-style: solid;
  }
  :host(:not([aria-disabled="true"]):not([checked]):not(:focus):not(:hover)) .track:not(.pressed) {
    border-color: ${H.trackOutlineColor};
    background-color: ${H.unselectedTrackColor};
  }
  :host(:not([aria-disabled="true"]):not([checked]):not(:focus):hover) .track:not(.pressed) {
    border-color: ${H.unselectedHoverTrackOutlineColor};
    background-color: ${H.unselectedHoverTrackColor};
  }
  :host(:not([aria-disabled="true"]):not([checked]):focus) .track:not(.pressed) {
    border-color: ${H.unselectedFocusTrackOutlineColor};
    background-color: ${H.unselectedFocusTrackColor};
  }
  :host(:not([aria-disabled="true"]):not([checked])) .track.pressed {
    border-color: ${H.unselectedPressedTrackOutlineColor};
    background-color: ${H.unselectedPressedTrackColor};
  }
  :host([aria-disabled="true"]:not([checked])) .track {
    border-color: color-mix(
      in srgb,
      ${H.disabledUnselectedTrackOutlineColor} ${H.disabledTrackOpacity},
      transparent
    );
    background-color: color-mix(
      in srgb,
      ${H.disabledUnselectedTrackColor} ${H.disabledTrackOpacity},
      transparent
    );
  }
  :host(:not([aria-disabled="true"])[checked]:not(:focus):not(:hover)) .track:not(.pressed) {
    background-color: ${H.selectedTrackColor};
  }
  :host(:not([aria-disabled="true"])[checked]:not(:focus):hover) .track:not(.pressed) {
    background-color: ${H.selectedHoverTrackColor};
  }
  :host(:not([aria-disabled="true"])[checked]:focus) .track:not(.pressed) {
    background-color: ${H.selectedFocusTrackColor};
  }
  :host(:not([aria-disabled="true"])[checked]) .track.pressed {
    background-color: ${H.selectedPressedTrackColor};
  }
  :host([aria-disabled="true"][checked]) .track {
    background-color: color-mix(
      in srgb,
      ${H.disabledSelectedTrackColor} ${H.disabledTrackOpacity},
      transparent
    );
  }
  @media (forced-colors: active) {
    .track {
      transition: none;
    }
    :host(:not([aria-disabled="true"]):not([checked]):not(:focus):not(:hover)) .track:not(.pressed),
    :host(:not([aria-disabled="true"]):not([checked]):not(:focus):hover) .track:not(.pressed),
    :host(:not([aria-disabled="true"]):not([checked]):focus) .track:not(.pressed),
    :host(:not([aria-disabled="true"]):not([checked])) .track.pressed {
      border-color: ButtonText;
      background-color: Canvas;
    }
    :host([aria-disabled="true"]:not([checked])) .track {
      border-color: GrayText;
      background-color: Canvas;
    }
    :host(:not([aria-disabled="true"])[checked]:not(:focus):not(:hover)) .track:not(.pressed),
    :host(:not([aria-disabled="true"])[checked]:not(:focus):hover) .track:not(.pressed),
    :host(:not([aria-disabled="true"])[checked]:focus) .track:not(.pressed),
    :host(:not([aria-disabled="true"])[checked]) .track.pressed {
      background-color: ButtonText;
    }
    :host([aria-disabled="true"][checked]) .track {
      background-color: GrayText;
    }
  }
  @media (prefers-reduced-motion) {
    .track {
      transition: none;
    }
  }
`;var dh,hh,mh,Ts,E0,T0,ri=class extends Bt(Oe(De(Ir(po(ot(de(ae(N(D(M(k,"switch"))))))))))){constructor(){super();m(this,Ts);m(this,dh,e=>c(this,Ts,T0).call(this,e));m(this,hh,new et(this,{target:null,callback:e=>{this.disabled||(e?this._stateLayer?.show("hover"):this._stateLayer?.hide("hover"))}}));m(this,mh,new ue(this,{target:null,callback:e=>this._track?.classList.toggle("pressed",e&&!this.disabled)}));this.icons="none";this.value="on";new ue(this,{isPressedKey:e=>e===" ",callback:e=>this._track?.classList.toggle("pressed",e&&!this.disabled)})}get[tt](){return this.checked&&!this.disabled?this.value:null}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,dh));for(let e of this.labels)s(this,hh).observe(e),s(this,mh).observe(e)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,dh));for(let e of this.labels)s(this,hh).unobserve(e),s(this,mh).unobserve(e)}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer].forEach(i=>i?.attach(this))}render(){return f`<m3e-focus-ring class="focus-ring"></m3e-focus-ring>
      <div class="track" aria-hidden="true">
        <div class="touch" aria-hidden="true"></div>
        <div class="handle">
          <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
          <div class="base">${c(this,Ts,E0).call(this)}</div>
        </div>
      </div>`}};dh=new WeakMap,hh=new WeakMap,mh=new WeakMap,Ts=new WeakSet,E0=function(){return this.checked?f`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path>
        </svg>`:f`<svg class="icon" viewBox="0 -960 960 960" fill="currentColor">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>`},T0=function(e){e.defaultPrevented||(this.checked=!this.checked,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?this.dispatchEvent(new Event("change",{bubbles:!0})):this.checked=!this.checked,this.closest("label")&&e.preventDefault())},ri.styles=[w0,k0,L0,$0,S0],d([L(".track")],ri.prototype,"_track",2),d([L(".focus-ring")],ri.prototype,"_focusRing",2),d([L(".state-layer")],ri.prototype,"_stateLayer",2),d([p({reflect:!0})],ri.prototype,"icons",2),d([p()],ri.prototype,"value",2),ri=d([y("m3e-switch")],ri);var uh,ru,M0,ir=class extends Vt(ce(de(ae(N(D(M(k,"tab"),!0)))))){constructor(){super(...arguments);m(this,ru);m(this,uh,e=>c(this,ru,M0).call(this,e))}attach(e){super.attach(e),e.id=e.id||`m3e-tab-panel-${ir.__nextId++}`,je(this,"aria-controls",e.id)}detach(){this.control&&this.control.id&&xt(this,"aria-controls",this.control.id),super.detach()}connectedCallback(){super.connectedCallback(),this.addEventListener("click",s(this,uh))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",s(this,uh))}firstUpdated(e){super.firstUpdated(e),[this._focusRing,this._stateLayer,this._ripple].forEach(i=>i?.attach(this))}update(e){super.update(e),e.has("selected")&&this.closest("m3e-tabs")?.[E].notifySelectionChange(this)}render(){return f`<div class="base">
      <m3e-state-layer class="state-layer" ?disabled="${this.disabled}"></m3e-state-layer>
      <m3e-focus-ring class="focus-ring" inward ?disabled="${this.disabled}"></m3e-focus-ring>
      <m3e-ripple class="ripple" ?disabled="${this.disabled}"></m3e-ripple>
      <div class="touch" aria-hidden="true"></div>
      <div class="wrapper">
        <slot name="icon" aria-hidden="true"></slot><span class="label"><slot></slot></span>
      </div>
    </div>`}};uh=new WeakMap,ru=new WeakSet,M0=function(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation()),!(e.defaultPrevented||this.selected)&&(this.selected=!0,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))?(this.closest("m3e-tabs")?.[E].notifySelectionChange(this),this.dispatchEvent(new Event("change",{bubbles:!0}))):this.selected=!1)},ir.styles=b`
    :host {
      display: inline-block;
      outline: none;
      user-select: none;
      height: calc(var(--_tab-height) + ${t.density.calc(-3)});
      font-size: var(--m3e-tab-font-size, ${t.typescale.standard.title.small.fontSize});
      font-weight: var(--m3e-tab-font-weight, ${t.typescale.standard.title.small.fontWeight});
      line-height: var(--m3e-tab-line-height, ${t.typescale.standard.title.small.lineHeight});
      letter-spacing: var(--m3e-tab-tracking, ${t.typescale.standard.title.small.tracking});
      flex-grow: var(--_tab-grow);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    :host(:not(:disabled)) {
      cursor: pointer;
    }
    .base {
      box-sizing: border-box;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
      padding-inline-start: var(--m3e-tab-padding-start, 1.5rem);
      padding-inline-end: var(--m3e-tab-padding-end, 1.5rem);
    }
    .touch {
      position: absolute;
      height: 3rem;
      left: 0;
      right: 0;
    }
    .focus-ring {
      border-radius: var(--m3e-tab-focus-ring-shape, ${t.shape.corner.large});
    }
    :host([selected]:focus-within) .focus-ring {
      top: var(--_tab-focus-ring-top-offset, 0);
      bottom: var(--_tab-focus-ring-bottom-offset, 0);
    }
    :host([selected]:not(:disabled)) .base {
      color: var(--m3e-tab-selected-color, var(--_tab-selected-color, ${t.color.primary}));
      --m3e-state-layer-hover-color: var(
        --m3e-tab-selected-container-hover-color,
        var(--_tab-selected-container-hover-color, ${t.color.primary})
      );
      --m3e-state-layer-focus-color: var(
        --_tab-selected-container-focus-color,
        var(--m3e-tab-selected-container-focus-color, ${t.color.primary})
      );
      --m3e-ripple-color: var(
        --_tab-selected-ripple-color,
        var(--m3e-tab-selected-ripple-color, ${t.color.primary})
      );
    }
    :host(:not([selected]):not(:disabled)) .base {
      color: var(--m3e-tab-unselected-color, ${t.color.onSurfaceVariant});
      --m3e-state-layer-hover-color: var(--m3e-tab-unselected-container-hover-color, ${t.color.onSurface});
      --m3e-state-layer-focus-color: var(--m3e-tab-unselected-container-focus-color, ${t.color.onSurface});
      --m3e-ripple-color: var(--m3e-tab-unselected-ripple-color, ${t.color.onSurface});
    }
    :host(:disabled) .base {
      color: color-mix(
        in srgb,
        var(--m3e-tab-disabled-color, ${t.color.onSurface}) var(--m3e-tab-disabled-opacity, 38%),
        transparent
      );
    }
    .wrapper {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      flex-direction: var(--_tab-direction);
      justify-content: center;
      column-gap: var(--m3e-tab-spacing, 0.5rem);
    }
    ::slotted([slot="icon"]) {
      width: 1em;
      font-size: var(--m3e-tab-icon-size, 1.5rem) !important;
    }
    @media (forced-colors: active) {
      :host([selected]:not(:disabled)) .base {
        color: ButtonText;
      }
      :host(:not([selected]):not(:disabled)) .base {
        color: ButtonText;
      }
      :host(:disabled) .base {
        color: GrayText;
      }
    }
  `,ir.__nextId=0,d([L(".focus-ring")],ir.prototype,"_focusRing",2),d([L(".state-layer")],ir.prototype,"_stateLayer",2),d([L(".ripple")],ir.prototype,"_ripple",2),d([L(".label")],ir.prototype,"label",2),ir=d([y("m3e-tab")],ir);var ph=class extends M(k,"tabpanel"){connectedCallback(){super.connectedCallback(),this.slot="panel"}render(){return f`<slot></slot>`}};ph.styles=b`
    :host {
      display: block;
      overflow-y: auto;
      scrollbar-width: ${t.scrollbar.width};
      scrollbar-color: ${t.scrollbar.color};
    }
  `,ph=d([y("m3e-tab-panel")],ph);var iv=24,P0,H0,vh,It,av,R0,A0,_0,I0,iu,Fo=class extends(H0=D(k),P0=E,H0){constructor(){super();m(this,It);m(this,vh);this._selectedIndex=null;this[P0]=new rt().onSelectedItemsChange(()=>c(this,It,I0).call(this)).withHomeAndEnd().withWrap().withDirectionality(O.current);this.disablePagination=!1;this.headerPosition="before";this.variant="secondary";this.stretch=!1;this.previousPageLabel="Previous page";this.nextPageLabel="Next page";new Le(this,{skipInitial:!0,callback:()=>{Mt(this,"-no-animate"),c(this,It,iu).call(this)}})}get tabs(){return this[E]?.items??[]}get selectedTab(){return this._selectedIndex!==null?this.tabs[this._selectedIndex]??null:null}get selectedIndex(){return this._selectedIndex??-1}set selectedIndex(e){if(e>=0&&e<this.tabs.length)this.tabs[e].selected=!0;else{let i=this.selectedTab;i&&(i.selected=!1)}}connectedCallback(){super.connectedCallback(),Mt(this,"-no-animate"),g(this,vh,O.observe(()=>{this.requestUpdate(),this[E].directionality=O.current}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,vh))==null||e.call(this)}updated(e){super.updated(e),(e.has("variant")||e.has("stretch"))&&this._selectedIndex!==null&&c(this,It,iu).call(this)}render(){let e;return this.selectedTab?.control&&(e=[...this.querySelectorAll("[slot='panel']")].indexOf(this.selectedTab.control),e===-1&&(e=void 0)),f` ${this.headerPosition==="before"?c(this,It,av).call(this):R}
      <m3e-slide class="tabs" selected-index="${$e(e)}">
        <slot name="panel"></slot>
      </m3e-slide>
      ${this.headerPosition==="after"?c(this,It,av).call(this):R}`}};vh=new WeakMap,It=new WeakSet,av=function(){return f`<m3e-slide-group
      class="tablist"
      threshold="8"
      previous-page-label="${this.previousPageLabel}"
      next-page-label="${this.nextPageLabel}"
      ?disabled="${this.disablePagination}"
    >
      <slot name="prev-icon" slot="prev-icon">
        ${O.current==="ltr"?f`<svg class="prev icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>`:f`<svg class="next icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>`}
      </slot>
      <slot name="next-icon" slot="next-icon">
        ${O.current==="ltr"?f`<svg class="next icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>`:f`<svg class="prev icon" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>`}
      </slot>
      <div class="header" role="tablist">
        <div class="tabs">
          <slot
            @slotchange="${c(this,It,R0)}"
            @keydown="${c(this,It,A0)}"
            @change="${c(this,It,_0)}"
          ></slot>
        </div>
        <div class="ink-bar" aria-hidden="true">
          <div class="active-indicator"></div>
        </div>
      </div>
    </m3e-slide-group>`},R0=function(){this[E].setItems([...this.querySelectorAll("m3e-tab")])},A0=function(e){this[E].onKeyDown(e)},_0=function(e){e.stopPropagation(),this.dispatchEvent(new Event("change",{bubbles:!0}))},I0=function(){let e=this[E].selectedItems[0],i=e?this.tabs.indexOf(e):null;i===-1&&(i=null),this._selectedIndex=i,c(this,It,iu).call(this)},iu=function(){if(!this._tablist)return;let e=this[E].selectedItems[0],i=0,n=0;if(e&&this._selectedIndex!==null){for(let l=0;l<this._selectedIndex;l++)i+=this.tabs[l].clientWidth;n=e.clientWidth,this.variant==="primary"&&e.label&&(i+=e.label.offsetLeft,n=e.label.clientWidth,n<iv&&(i-=(iv-n)/2,n=iv))}this._tablist.style.setProperty("--_tabs-active-tab-position",`${i}px`),this._tablist.style.setProperty("--_tabs-active-tab-size",`${n}px`),n>0&&bt(this,"-no-animate")&&setTimeout(()=>xe(this,"-no-animate"))},Fo.styles=b`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .tablist {
      position: relative;
      box-sizing: border-box;
      flex: none;
    }
    ::slotted(prev-icon),
    ::slotted(next-icon),
    .icon {
      width: 1em;
      font-size: var(--m3e-tabs-paginator-button-icon-size, var(--m3e-icon-button-icon-size, 1.5rem)) !important;
    }
    .header {
      display: flex;
      flex-direction: column;
    }
    .tabs {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
    .ink-bar {
      box-sizing: border-box;
      height: var(--_tabs-active-indicator-thickness);
    }
    .active-indicator {
      position: relative;
      height: var(--_tabs-active-indicator-thickness);
      left: calc(var(--_tabs-active-tab-position) + var(--_tabs-activate-indicator-inset, 0px));
      width: calc(var(--_tabs-active-tab-size) - calc(var(--_tabs-activate-indicator-inset, 0px) * 2));
      background-color: var(--m3e-tabs-active-indicator-color, ${t.color.primary});
      transition: ${r(`left var(--m3e-slide-animation-duration, ${t.motion.duration.long2}) ${t.motion.easing.standard},
        width var(--m3e-slide-animation-duration, ${t.motion.duration.long2}) ${t.motion.easing.standard}`)};
    }
    :host([header-position="after"]) .header {
      flex-direction: column-reverse;
    }
    :host([header-position="before"]) .ink-bar {
      margin-top: calc(0px - var(--_tabs-active-indicator-thickness));
    }
    :host([header-position="before"]) .tablist {
      --m3e-slide-group-divider-bottom: var(--m3e-divider-thickness, 1px) solid
        var(--m3e-divider-color, ${t.color.outlineVariant});
    }
    :host([header-position="after"]) .ink-bar {
      margin-bottom: calc(0px - var(--_tabs-active-indicator-thickness));
    }
    :host([header-position="after"]) .tablist {
      --m3e-slide-group-divider-top: var(--m3e-divider-thickness, 1px) solid
        var(--m3e-divider-color, ${t.color.outlineVariant});
    }
    :host([header-position="before"][variant="primary"]) .active-indicator {
      border-radius: var(--m3e-tabs-primary-before-active-indicator-shape, ${t.shape.corner.extraSmallTop});
    }
    :host([header-position="after"][variant="primary"]) .active-indicator {
      border-radius: var(--m3e-tabs-primary-after-active-indicator-shape, ${t.shape.corner.extraSmallBottom});
    }
    .tabs {
      flex: 1 1 auto;
    }
    :host([variant="primary"]) .tablist {
      --_tabs-activate-indicator-inset: var(--m3e-tabs-primary-active-indicator-inset, 0.125rem);
      --_tabs-active-indicator-thickness: var(--m3e-tabs-primary-active-indicator-thickness, 3px);
      --_tab-height: 4rem;
    }
    :host([header-position="before"]) .tablist {
      --_tab-focus-ring-bottom-offset: calc(var(--_tabs-active-indicator-thickness) + 1px);
    }
    :host([header-position="after"]) .tablist {
      --_tab-focus-ring-top-offset: calc(var(--_tabs-active-indicator-thickness) + 2px);
    }
    :host([header-position="before"][variant="primary"]) .tablist {
      --_tab-direction: column;
    }
    :host([header-position="after"][variant="primary"]) .tablist {
      --_tab-direction: column-reverse;
    }
    :host([variant="secondary"]) .tablist {
      --_tabs-active-indicator-thickness: var(--m3e-tabs-secondary-active-indicator-thickness, 2px);
      --_tab-height: 3rem;
      --_tab-selected-color: ${t.color.onSurface};
      --_tab-selected-container-hover-color: ${t.color.onSurface};
      --_tab-selected-container-focus-color: ${t.color.onSurface};
      --_tab-selected-ripple-color: ${t.color.onSurface};
    }
    :host([stretch]) .header {
      width: 100%;
      --_tab-grow: 1;
    }
    :host(:state(-no-animate)) .active-indicator {
      transition: none;
    }
    @media (prefers-reduced-motion) {
      .active-indicator {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .active-indicator {
        background-color: ButtonText;
        --m3e-divider-color: GrayText;
      }
    }
  `,d([L(".tablist")],Fo.prototype,"_tablist",2),d([ie()],Fo.prototype,"_selectedIndex",2),d([p({attribute:"disable-pagination",type:Boolean})],Fo.prototype,"disablePagination",2),d([p({attribute:"header-position",reflect:!0})],Fo.prototype,"headerPosition",2),d([p({reflect:!0})],Fo.prototype,"variant",2),d([p({type:Boolean,reflect:!0})],Fo.prototype,"stretch",2),d([p({attribute:"previous-page-label"})],Fo.prototype,"previousPageLabel",2),d([p({attribute:"next-page-label"})],Fo.prototype,"nextPageLabel",2),Fo=d([y("m3e-tabs")],Fo);var Ms,Er,ya,fh,bh,Ps,gh,ln,yh,lo,z0,O0,D0,F0,nv,V0,Ii=class extends ce(M(k,"none")){constructor(){super(...arguments);m(this,lo);m(this,Ms);m(this,Er);m(this,ya);m(this,fh);m(this,bh);m(this,Ps,!1);m(this,gh,()=>this._handleWindowResize());m(this,ln,e=>g(this,Ps,e.type==="focus"));m(this,yh,()=>this.resizeToFitContent());this.maxRows=0;this.minRows=0;this.disabled=!1}attach(e){super.attach(e),e instanceof HTMLTextAreaElement&&(e.style.resize="none",g(this,Ms,e.style.height),e.addEventListener("focus",s(this,ln)),e.addEventListener("blur",s(this,ln)),e.addEventListener("input",s(this,yh)),window.addEventListener("resize",s(this,gh)),this.resizeToFitContent(!0))}detach(){this.control instanceof HTMLTextAreaElement&&(window.removeEventListener("resize",s(this,gh)),this.control.removeEventListener("focus",s(this,ln)),this.control.removeEventListener("blur",s(this,ln)),this.control.removeEventListener("input",s(this,yh))),super.detach()}connectedCallback(){this.ariaHidden="true",super.connectedCallback()}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.reset():this.resizeToFitContent(!0))}resizeToFitContent(e=!1){if(this.disabled||!(this.control instanceof HTMLTextAreaElement)||(c(this,lo,z0).call(this),c(this,lo,O0).call(this),!s(this,Er)))return;let i=this.control.value;if(!e&&this.minRows===s(this,fh)&&i===s(this,bh))return;let n=c(this,lo,nv).call(this),l=Math.max(n,s(this,ya)||0);this.control.style.height=`${l}px`,setTimeout(()=>c(this,lo,V0).call(this)),g(this,bh,i),g(this,fh,this.minRows)}reset(){s(this,Ms)!==void 0&&this.control instanceof HTMLTextAreaElement&&(this.control.style.height=s(this,Ms))}_handleWindowResize(){g(this,Er,g(this,ya,void 0)),this.resizeToFitContent(!0)}};Ms=new WeakMap,Er=new WeakMap,ya=new WeakMap,fh=new WeakMap,bh=new WeakMap,Ps=new WeakMap,gh=new WeakMap,ln=new WeakMap,yh=new WeakMap,lo=new WeakSet,z0=function(){if(s(this,Er)||!(this.control instanceof HTMLTextAreaElement))return;let e=this.control.cloneNode(!1);e.rows=1,e.style.position="absolute",e.style.visibility="hidden",e.style.border="none",e.style.padding="0",e.style.height="",e.style.minHeight="",e.style.maxHeight="",e.style.top=e.style.bottom=e.style.left=e.style.right="auto",e.style.overflow="hidden",this.control.parentElement?.appendChild(e),g(this,Er,e.clientHeight),e.remove(),c(this,lo,D0).call(this),c(this,lo,F0).call(this)},O0=function(){if(!(this.control instanceof HTMLTextAreaElement)||s(this,ya)!=null)return;if(!this.control.placeholder){g(this,ya,0);return}let e=this.control.value;this.control.value=this.control.placeholder,g(this,ya,c(this,lo,nv).call(this)),this.control.value=e},D0=function(){let e=this.minRows&&s(this,Er)?`${this.minRows*s(this,Er)}px`:null;e&&this.control&&(this.control.style.minHeight=e)},F0=function(){let e=this.maxRows&&s(this,Er)?`${this.maxRows*s(this,Er)}px`:null;e&&this.control&&(this.control.style.maxHeight=e)},nv=function(){if(!this.control)return 0;let e=this.control,i=e.style.marginBottom||"",n=navigator.userAgent.includes("Firefox"),l=n&&s(this,Ps);l&&(e.style.marginBottom=`${e.clientHeight}px`);let h={padding:e.style.padding,boxSizing:e.style.boxSizing,height:e.style.height,overflow:e.style.overflow};e.style.padding="2px 0",e.style.boxSizing="content-box",n?e.style.height="0":(e.style.height="auto",e.style.overflow="hidden");let u=e.scrollHeight-4;return e.style.padding=h.padding,e.style.boxSizing=h.boxSizing,e.style.height=h.height,e.style.overflow=h.overflow,l&&(e.style.marginBottom=i),u},V0=function(){if(!(this.control instanceof HTMLTextAreaElement)||!s(this,Ps))return;let{selectionStart:e,selectionEnd:i}=this.control;this.control.setSelectionRange(e,i)},Ii.styles=b`
    :host {
      display: none;
    }
  `,d([p({attribute:"max-rows",type:Number})],Ii.prototype,"maxRows",2),d([p({attribute:"min-rows",type:Number})],Ii.prototype,"minRows",2),d([p({type:Boolean,reflect:!0})],Ii.prototype,"disabled",2),d([Ft(16)],Ii.prototype,"_handleWindowResize",1),Ii=d([y("m3e-textarea-autosize")],Ii);function jt(o){return o<0?-1:o===0?0:1}function cn(o,a,e){return(1-e)*o+e*a}function B0(o,a,e){return e<o?o:e>a?a:e}function Hs(o,a,e){return e<o?o:e>a?a:e}function au(o){return o=o%360,o<0&&(o=o+360),o}function ar(o){return o=o%360,o<0&&(o=o+360),o}function sv(o,a){return 180-Math.abs(Math.abs(o-a)-180)}function xh(o,a){let e=o[0]*a[0][0]+o[1]*a[0][1]+o[2]*a[0][2],i=o[0]*a[1][0]+o[1]*a[1][1]+o[2]*a[1][2],n=o[0]*a[2][0]+o[1]*a[2][1]+o[2]*a[2][2];return[e,i,n]}var P2=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],H2=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],R2=[95.047,100,108.883];function nu(o,a,e){return(255<<24|(o&255)<<16|(a&255)<<8|e&255)>>>0}function lv(o){let a=hn(o[0]),e=hn(o[1]),i=hn(o[2]);return nu(a,e,i)}function su(o){return o>>16&255}function lu(o){return o>>8&255}function cu(o){return o&255}function N0(o,a,e){let i=H2,n=i[0][0]*o+i[0][1]*a+i[0][2]*e,l=i[1][0]*o+i[1][1]*a+i[1][2]*e,h=i[2][0]*o+i[2][1]*a+i[2][2]*e,u=hn(n),v=hn(l),C=hn(h);return nu(u,v,C)}function A2(o){let a=dn(su(o)),e=dn(lu(o)),i=dn(cu(o));return xh([a,e,i],P2)}function q0(o){let a=Tr(o),e=hn(a);return nu(e,e,e)}function du(o){let a=A2(o)[1];return 116*U0(a/100)-16}function Tr(o){return 100*_2((o+16)/116)}function Ch(o){return U0(o/100)*116-16}function dn(o){let a=o/255;return a<=.040449936?a/12.92*100:Math.pow((a+.055)/1.055,2.4)*100}function hn(o){let a=o/100,e=0;return a<=.0031308?e=a*12.92:e=1.055*Math.pow(a,1/2.4)-.055,B0(0,255,Math.round(e*255))}function W0(){return R2}function U0(o){let a=.008856451679035631,e=24389/27;return o>a?Math.pow(o,1/3):(e*o+16)/116}function _2(o){let a=.008856451679035631,e=24389/27,i=o*o*o;return i>a?i:(116*o-16)/e}var Vo=class o{static make(a=W0(),e=200/Math.PI*Tr(50)/100,i=50,n=2,l=!1){let h=a,u=h[0]*.401288+h[1]*.650173+h[2]*-.051461,v=h[0]*-.250268+h[1]*1.204414+h[2]*.045854,C=h[0]*-.002079+h[1]*.048952+h[2]*.953127,S=.8+n/10,$=S>=.9?cn(.59,.69,(S-.9)*10):cn(.525,.59,(S-.8)*10),T=l?1:S*(1-1/3.6*Math.exp((-e-42)/92));T=T>1?1:T<0?0:T;let w=S,P=[T*(100/u)+1-T,T*(100/v)+1-T,T*(100/C)+1-T],_=1/(5*e+1),z=_*_*_*_,V=1-z,q=z*e+.1*V*V*Math.cbrt(5*e),B=Tr(i)/a[1],te=1.48+Math.sqrt(B),U=.725/Math.pow(B,.2),ye=U,re=[Math.pow(q*P[0]*u/100,.42),Math.pow(q*P[1]*v/100,.42),Math.pow(q*P[2]*C/100,.42)],we=[400*re[0]/(re[0]+27.13),400*re[1]/(re[1]+27.13),400*re[2]/(re[2]+27.13)],Te=(2*we[0]+we[1]+.05*we[2])*U;return new o(B,Te,U,ye,$,w,P,q,Math.pow(q,.25),te)}constructor(a,e,i,n,l,h,u,v,C,S){this.n=a,this.aw=e,this.nbb=i,this.ncb=n,this.c=l,this.nc=h,this.rgbD=u,this.fl=v,this.fLRoot=C,this.z=S}};Vo.DEFAULT=Vo.make();var ii=class o{constructor(a,e,i,n,l,h,u,v,C){this.hue=a,this.chroma=e,this.j=i,this.q=n,this.m=l,this.s=h,this.jstar=u,this.astar=v,this.bstar=C}distance(a){let e=this.jstar-a.jstar,i=this.astar-a.astar,n=this.bstar-a.bstar,l=Math.sqrt(e*e+i*i+n*n);return 1.41*Math.pow(l,.63)}static fromInt(a){return o.fromIntInViewingConditions(a,Vo.DEFAULT)}static fromIntInViewingConditions(a,e){let i=(a&16711680)>>16,n=(a&65280)>>8,l=a&255,h=dn(i),u=dn(n),v=dn(l),C=.41233895*h+.35762064*u+.18051042*v,S=.2126*h+.7152*u+.0722*v,$=.01932141*h+.11916382*u+.95034478*v,T=.401288*C+.650173*S-.051461*$,w=-.250268*C+1.204414*S+.045854*$,P=-.002079*C+.048952*S+.953127*$,_=e.rgbD[0]*T,z=e.rgbD[1]*w,V=e.rgbD[2]*P,q=Math.pow(e.fl*Math.abs(_)/100,.42),B=Math.pow(e.fl*Math.abs(z)/100,.42),te=Math.pow(e.fl*Math.abs(V)/100,.42),U=jt(_)*400*q/(q+27.13),ye=jt(z)*400*B/(B+27.13),re=jt(V)*400*te/(te+27.13),we=(11*U+-12*ye+re)/11,Te=(U+ye-2*re)/9,oe=(20*U+20*ye+21*re)/20,Dt=(40*U+20*ye+re)/20,Tt=Math.atan2(Te,we)*180/Math.PI,Ie=Tt<0?Tt+360:Tt>=360?Tt-360:Tt,No=Ie*Math.PI/180,To=Dt*e.nbb,ut=100*Math.pow(To/e.aw,e.c*e.z),pt=4/e.c*Math.sqrt(ut/100)*(e.aw+4)*e.fLRoot,qo=Ie<20.14?Ie+360:Ie,Us=.25*(Math.cos(qo*Math.PI/180+2)+3.8),vu=5e4/13*Us*e.nc*e.ncb*Math.sqrt(we*we+Te*Te)/(oe+.305),Rh=Math.pow(vu,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),uv=Rh*Math.sqrt(ut/100),pv=uv*e.fLRoot,c1=50*Math.sqrt(Rh*e.c/(e.aw+4)),d1=(1+100*.007)*ut/(1+.007*ut),vv=1/.0228*Math.log(1+.0228*pv),h1=vv*Math.cos(No),m1=vv*Math.sin(No);return new o(Ie,uv,ut,pt,pv,c1,d1,h1,m1)}static fromJch(a,e,i){return o.fromJchInViewingConditions(a,e,i,Vo.DEFAULT)}static fromJchInViewingConditions(a,e,i,n){let l=4/n.c*Math.sqrt(a/100)*(n.aw+4)*n.fLRoot,h=e*n.fLRoot,u=e/Math.sqrt(a/100),v=50*Math.sqrt(u*n.c/(n.aw+4)),C=i*Math.PI/180,S=(1+100*.007)*a/(1+.007*a),$=1/.0228*Math.log(1+.0228*h),T=$*Math.cos(C),w=$*Math.sin(C);return new o(i,e,a,l,h,v,S,T,w)}static fromUcs(a,e,i){return o.fromUcsInViewingConditions(a,e,i,Vo.DEFAULT)}static fromUcsInViewingConditions(a,e,i,n){let l=e,h=i,u=Math.sqrt(l*l+h*h),C=(Math.exp(u*.0228)-1)/.0228/n.fLRoot,S=Math.atan2(h,l)*(180/Math.PI);S<0&&(S+=360);let $=a/(1-(a-100)*.007);return o.fromJchInViewingConditions($,C,S,n)}toInt(){return this.viewed(Vo.DEFAULT)}viewed(a){let e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),i=Math.pow(e/Math.pow(1.64-Math.pow(.29,a.n),.73),1/.9),n=this.hue*Math.PI/180,l=.25*(Math.cos(n+2)+3.8),h=a.aw*Math.pow(this.j/100,1/a.c/a.z),u=l*(5e4/13)*a.nc*a.ncb,v=h/a.nbb,C=Math.sin(n),S=Math.cos(n),$=23*(v+.305)*i/(23*u+11*i*S+108*i*C),T=$*S,w=$*C,P=(460*v+451*T+288*w)/1403,_=(460*v-891*T-261*w)/1403,z=(460*v-220*T-6300*w)/1403,V=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),q=jt(P)*(100/a.fl)*Math.pow(V,1/.42),B=Math.max(0,27.13*Math.abs(_)/(400-Math.abs(_))),te=jt(_)*(100/a.fl)*Math.pow(B,1/.42),U=Math.max(0,27.13*Math.abs(z)/(400-Math.abs(z))),ye=jt(z)*(100/a.fl)*Math.pow(U,1/.42),re=q/a.rgbD[0],we=te/a.rgbD[1],Te=ye/a.rgbD[2],oe=1.86206786*re-1.01125463*we+.14918677*Te,Dt=.38752654*re+.62144744*we-.00897398*Te,uo=-.0158415*re-.03412294*we+1.04996444*Te;return N0(oe,Dt,uo)}static fromXyzInViewingConditions(a,e,i,n){let l=.401288*a+.650173*e-.051461*i,h=-.250268*a+1.204414*e+.045854*i,u=-.002079*a+.048952*e+.953127*i,v=n.rgbD[0]*l,C=n.rgbD[1]*h,S=n.rgbD[2]*u,$=Math.pow(n.fl*Math.abs(v)/100,.42),T=Math.pow(n.fl*Math.abs(C)/100,.42),w=Math.pow(n.fl*Math.abs(S)/100,.42),P=jt(v)*400*$/($+27.13),_=jt(C)*400*T/(T+27.13),z=jt(S)*400*w/(w+27.13),V=(11*P+-12*_+z)/11,q=(P+_-2*z)/9,B=(20*P+20*_+21*z)/20,te=(40*P+20*_+z)/20,ye=Math.atan2(q,V)*180/Math.PI,re=ye<0?ye+360:ye>=360?ye-360:ye,we=re*Math.PI/180,Te=te*n.nbb,oe=100*Math.pow(Te/n.aw,n.c*n.z),Dt=4/n.c*Math.sqrt(oe/100)*(n.aw+4)*n.fLRoot,uo=re<20.14?re+360:re,Tt=1/4*(Math.cos(uo*Math.PI/180+2)+3.8),No=5e4/13*Tt*n.nc*n.ncb*Math.sqrt(V*V+q*q)/(B+.305),To=Math.pow(No,.9)*Math.pow(1.64-Math.pow(.29,n.n),.73),ut=To*Math.sqrt(oe/100),pt=ut*n.fLRoot,qo=50*Math.sqrt(To*n.c/(n.aw+4)),Us=(1+100*.007)*oe/(1+.007*oe),pu=Math.log(1+.0228*pt)/.0228,vu=pu*Math.cos(we),Rh=pu*Math.sin(we);return new o(re,ut,oe,Dt,pt,qo,Us,vu,Rh)}xyzInViewingConditions(a){let e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),i=Math.pow(e/Math.pow(1.64-Math.pow(.29,a.n),.73),1/.9),n=this.hue*Math.PI/180,l=.25*(Math.cos(n+2)+3.8),h=a.aw*Math.pow(this.j/100,1/a.c/a.z),u=l*(5e4/13)*a.nc*a.ncb,v=h/a.nbb,C=Math.sin(n),S=Math.cos(n),$=23*(v+.305)*i/(23*u+11*i*S+108*i*C),T=$*S,w=$*C,P=(460*v+451*T+288*w)/1403,_=(460*v-891*T-261*w)/1403,z=(460*v-220*T-6300*w)/1403,V=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),q=jt(P)*(100/a.fl)*Math.pow(V,1/.42),B=Math.max(0,27.13*Math.abs(_)/(400-Math.abs(_))),te=jt(_)*(100/a.fl)*Math.pow(B,1/.42),U=Math.max(0,27.13*Math.abs(z)/(400-Math.abs(z))),ye=jt(z)*(100/a.fl)*Math.pow(U,1/.42),re=q/a.rgbD[0],we=te/a.rgbD[1],Te=ye/a.rgbD[2],oe=1.86206786*re-1.01125463*we+.14918677*Te,Dt=.38752654*re+.62144744*we-.00897398*Te,uo=-.0158415*re-.03412294*we+1.04996444*Te;return[oe,Dt,uo]}};var Pr=class o{static sanitizeRadians(a){return(a+Math.PI*8)%(Math.PI*2)}static trueDelinearized(a){let e=a/100,i=0;return e<=.0031308?i=e*12.92:i=1.055*Math.pow(e,1/2.4)-.055,i*255}static chromaticAdaptation(a){let e=Math.pow(Math.abs(a),.42);return jt(a)*400*e/(e+27.13)}static hueOf(a){let e=xh(a,o.SCALED_DISCOUNT_FROM_LINRGB),i=o.chromaticAdaptation(e[0]),n=o.chromaticAdaptation(e[1]),l=o.chromaticAdaptation(e[2]),h=(11*i+-12*n+l)/11,u=(i+n-2*l)/9;return Math.atan2(u,h)}static areInCyclicOrder(a,e,i){let n=o.sanitizeRadians(e-a),l=o.sanitizeRadians(i-a);return n<l}static intercept(a,e,i){return(e-a)/(i-a)}static lerpPoint(a,e,i){return[a[0]+(i[0]-a[0])*e,a[1]+(i[1]-a[1])*e,a[2]+(i[2]-a[2])*e]}static setCoordinate(a,e,i,n){let l=o.intercept(a[n],e,i[n]);return o.lerpPoint(a,l,i)}static isBounded(a){return 0<=a&&a<=100}static nthVertex(a,e){let i=o.Y_FROM_LINRGB[0],n=o.Y_FROM_LINRGB[1],l=o.Y_FROM_LINRGB[2],h=e%4<=1?0:100,u=e%2===0?0:100;if(e<4){let v=h,C=u,S=(a-v*n-C*l)/i;return o.isBounded(S)?[S,v,C]:[-1,-1,-1]}else if(e<8){let v=h,C=u,S=(a-C*i-v*l)/n;return o.isBounded(S)?[C,S,v]:[-1,-1,-1]}else{let v=h,C=u,S=(a-v*i-C*n)/l;return o.isBounded(S)?[v,C,S]:[-1,-1,-1]}}static bisectToSegment(a,e){let i=[-1,-1,-1],n=i,l=0,h=0,u=!1,v=!0;for(let C=0;C<12;C++){let S=o.nthVertex(a,C);if(S[0]<0)continue;let $=o.hueOf(S);if(!u){i=S,n=S,l=$,h=$,u=!0;continue}(v||o.areInCyclicOrder(l,$,h))&&(v=!1,o.areInCyclicOrder(l,e,$)?(n=S,h=$):(i=S,l=$))}return[i,n]}static midpoint(a,e){return[(a[0]+e[0])/2,(a[1]+e[1])/2,(a[2]+e[2])/2]}static criticalPlaneBelow(a){return Math.floor(a-.5)}static criticalPlaneAbove(a){return Math.ceil(a-.5)}static bisectToLimit(a,e){let i=o.bisectToSegment(a,e),n=i[0],l=o.hueOf(n),h=i[1];for(let u=0;u<3;u++)if(n[u]!==h[u]){let v=-1,C=255;n[u]<h[u]?(v=o.criticalPlaneBelow(o.trueDelinearized(n[u])),C=o.criticalPlaneAbove(o.trueDelinearized(h[u]))):(v=o.criticalPlaneAbove(o.trueDelinearized(n[u])),C=o.criticalPlaneBelow(o.trueDelinearized(h[u])));for(let S=0;S<8&&!(Math.abs(C-v)<=1);S++){let $=Math.floor((v+C)/2),T=o.CRITICAL_PLANES[$],w=o.setCoordinate(n,T,h,u),P=o.hueOf(w);o.areInCyclicOrder(l,e,P)?(h=w,C=$):(n=w,l=P,v=$)}}return o.midpoint(n,h)}static inverseChromaticAdaptation(a){let e=Math.abs(a),i=Math.max(0,27.13*e/(400-e));return jt(a)*Math.pow(i,1/.42)}static findResultByJ(a,e,i){let n=Math.sqrt(i)*11,l=Vo.DEFAULT,h=1/Math.pow(1.64-Math.pow(.29,l.n),.73),v=.25*(Math.cos(a+2)+3.8)*(5e4/13)*l.nc*l.ncb,C=Math.sin(a),S=Math.cos(a);for(let $=0;$<5;$++){let T=n/100,w=e===0||n===0?0:e/Math.sqrt(T),P=Math.pow(w*h,1/.9),z=l.aw*Math.pow(T,1/l.c/l.z)/l.nbb,V=23*(z+.305)*P/(23*v+11*P*S+108*P*C),q=V*S,B=V*C,te=(460*z+451*q+288*B)/1403,U=(460*z-891*q-261*B)/1403,ye=(460*z-220*q-6300*B)/1403,re=o.inverseChromaticAdaptation(te),we=o.inverseChromaticAdaptation(U),Te=o.inverseChromaticAdaptation(ye),oe=xh([re,we,Te],o.LINRGB_FROM_SCALED_DISCOUNT);if(oe[0]<0||oe[1]<0||oe[2]<0)return 0;let Dt=o.Y_FROM_LINRGB[0],uo=o.Y_FROM_LINRGB[1],Tt=o.Y_FROM_LINRGB[2],Ie=Dt*oe[0]+uo*oe[1]+Tt*oe[2];if(Ie<=0)return 0;if($===4||Math.abs(Ie-i)<.002)return oe[0]>100.01||oe[1]>100.01||oe[2]>100.01?0:lv(oe);n=n-(Ie-i)*n/(2*Ie)}return 0}static solveToInt(a,e,i){if(e<1e-4||i<1e-4||i>99.9999)return q0(i);a=ar(a);let n=a/180*Math.PI,l=Tr(i),h=o.findResultByJ(n,e,l);if(h!==0)return h;let u=o.bisectToLimit(l,n);return lv(u)}static solveToCam(a,e,i){return ii.fromInt(o.solveToInt(a,e,i))}};Pr.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];Pr.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];Pr.Y_FROM_LINRGB=[.2126,.7152,.0722];Pr.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];var We=class o{static from(a,e,i){return new o(Pr.solveToInt(a,e,i))}static fromInt(a){return new o(a)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(a){this.setInternalState(Pr.solveToInt(a,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(a){this.setInternalState(Pr.solveToInt(this.internalHue,a,this.internalTone))}get tone(){return this.internalTone}set tone(a){this.setInternalState(Pr.solveToInt(this.internalHue,this.internalChroma,a))}constructor(a){this.argb=a;let e=ii.fromInt(a);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=du(a),this.argb=a}setInternalState(a){let e=ii.fromInt(a);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=du(a),this.argb=a}inViewingConditions(a){let i=ii.fromInt(this.toInt()).xyzInViewingConditions(a),n=ii.fromXyzInViewingConditions(i[0],i[1],i[2],Vo.make());return o.from(n.hue,n.chroma,Ch(i[1]))}};var ho=class o{static ratioOfTones(a,e){return a=Hs(0,100,a),e=Hs(0,100,e),o.ratioOfYs(Tr(a),Tr(e))}static ratioOfYs(a,e){let i=a>e?a:e,n=i===e?a:e;return(i+5)/(n+5)}static lighter(a,e){if(a<0||a>100)return-1;let i=Tr(a),n=e*(i+5)-5,l=o.ratioOfYs(n,i),h=Math.abs(l-e);if(l<e&&h>.04)return-1;let u=Ch(n)+.4;return u<0||u>100?-1:u}static darker(a,e){if(a<0||a>100)return-1;let i=Tr(a),n=(i+5)/e-5,l=o.ratioOfYs(i,n),h=Math.abs(l-e);if(l<e&&h>.04)return-1;let u=Ch(n)-.4;return u<0||u>100?-1:u}static lighterUnsafe(a,e){let i=o.lighter(a,e);return i<0?100:i}static darkerUnsafe(a,e){let i=o.darker(a,e);return i<0?0:i}};var Rs=class o{static isDisliked(a){let e=Math.round(a.hue)>=90&&Math.round(a.hue)<=111,i=Math.round(a.chroma)>16,n=Math.round(a.tone)<65;return e&&i&&n}static fixIfDisliked(a){return o.isDisliked(a)?We.from(a.hue,a.chroma,70):a}};var W=class o{static fromPalette(a){return new o(a.name??"",a.palette,a.tone,a.isBackground??!1,a.background,a.secondBackground,a.contrastCurve,a.toneDeltaPair)}constructor(a,e,i,n,l,h,u,v){if(this.name=a,this.palette=e,this.tone=i,this.isBackground=n,this.background=l,this.secondBackground=h,this.contrastCurve=u,this.toneDeltaPair=v,this.hctCache=new Map,!l&&h)throw new Error(`Color ${a} has secondBackgrounddefined, but background is not defined.`);if(!l&&u)throw new Error(`Color ${a} has contrastCurvedefined, but background is not defined.`);if(l&&!u)throw new Error(`Color ${a} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(a){return this.getHct(a).toInt()}getHct(a){let e=this.hctCache.get(a);if(e!=null)return e;let i=this.getTone(a),n=this.palette(a).getHct(i);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(a,n),n}getTone(a){let e=a.contrastLevel<0;if(this.toneDeltaPair){let i=this.toneDeltaPair(a),n=i.roleA,l=i.roleB,h=i.delta,u=i.polarity,v=i.stayTogether,S=this.background(a).getTone(a),$=u==="nearer"||u==="lighter"&&!a.isDark||u==="darker"&&a.isDark,T=$?n:l,w=$?l:n,P=this.name===T.name,_=a.isDark?1:-1,z=T.contrastCurve.get(a.contrastLevel),V=w.contrastCurve.get(a.contrastLevel),q=T.tone(a),B=ho.ratioOfTones(S,q)>=z?q:o.foregroundTone(S,z),te=w.tone(a),U=ho.ratioOfTones(S,te)>=V?te:o.foregroundTone(S,V);return e&&(B=o.foregroundTone(S,z),U=o.foregroundTone(S,V)),(U-B)*_>=h||(U=Hs(0,100,B+h*_),(U-B)*_>=h||(B=Hs(0,100,U-h*_))),50<=B&&B<60?_>0?(B=60,U=Math.max(U,B+h*_)):(B=49,U=Math.min(U,B+h*_)):50<=U&&U<60&&(v?_>0?(B=60,U=Math.max(U,B+h*_)):(B=49,U=Math.min(U,B+h*_)):_>0?U=60:U=49),P?B:U}else{let i=this.tone(a);if(this.background==null)return i;let n=this.background(a).getTone(a),l=this.contrastCurve.get(a.contrastLevel);if(ho.ratioOfTones(n,i)>=l||(i=o.foregroundTone(n,l)),e&&(i=o.foregroundTone(n,l)),this.isBackground&&50<=i&&i<60&&(ho.ratioOfTones(49,n)>=l?i=49:i=60),this.secondBackground){let[h,u]=[this.background,this.secondBackground],[v,C]=[h(a).getTone(a),u(a).getTone(a)],[S,$]=[Math.max(v,C),Math.min(v,C)];if(ho.ratioOfTones(S,i)>=l&&ho.ratioOfTones($,i)>=l)return i;let T=ho.lighter(S,l),w=ho.darker($,l),P=[];return T!==-1&&P.push(T),w!==-1&&P.push(w),o.tonePrefersLightForeground(v)||o.tonePrefersLightForeground(C)?T<0?100:T:P.length===1?P[0]:w<0?0:w}return i}}static foregroundTone(a,e){let i=ho.lighterUnsafe(a,e),n=ho.darkerUnsafe(a,e),l=ho.ratioOfTones(i,a),h=ho.ratioOfTones(n,a);if(o.tonePrefersLightForeground(a)){let v=Math.abs(l-h)<.1&&l<e&&h<e;return l>=e||l>=h||v?i:n}else return h>=e||h>=l?n:i}static tonePrefersLightForeground(a){return Math.round(a)<60}static toneAllowsLightForeground(a){return Math.round(a)<=49}static enableLightForeground(a){return o.tonePrefersLightForeground(a)&&!o.toneAllowsLightForeground(a)?49:a}};var me=class o{static fromInt(a){let e=We.fromInt(a);return o.fromHct(e)}static fromHct(a){return new o(a.hue,a.chroma,a)}static fromHueAndChroma(a,e){let i=new cv(a,e).create();return new o(a,e,i)}constructor(a,e,i){this.hue=a,this.chroma=e,this.keyColor=i,this.cache=new Map}tone(a){let e=this.cache.get(a);return e===void 0&&(e=We.from(this.hue,this.chroma,a).toInt(),this.cache.set(a,e)),e}getHct(a){return We.fromInt(this.tone(a))}},cv=class{constructor(a,e){this.hue=a,this.requestedChroma=e,this.chromaCache=new Map,this.maxChromaValue=200}create(){let n=0,l=100;for(;n<l;){let h=Math.floor((n+l)/2),u=this.maxChroma(h)<this.maxChroma(h+1);if(this.maxChroma(h)>=this.requestedChroma-.01)if(Math.abs(n-50)<Math.abs(l-50))l=h;else{if(n===h)return We.from(this.hue,this.requestedChroma,n);n=h}else u?n=h+1:l=h}return We.from(this.hue,this.requestedChroma,n)}maxChroma(a){if(this.chromaCache.has(a))return this.chromaCache.get(a);let e=We.from(this.hue,this.maxChromaValue,a).chroma;return this.chromaCache.set(a,e),e}};var Y=class{constructor(a,e,i,n){this.low=a,this.normal=e,this.medium=i,this.high=n}get(a){return a<=-1?this.low:a<0?cn(this.low,this.normal,(a- -1)/1):a<.5?cn(this.normal,this.medium,(a-0)/.5):a<1?cn(this.medium,this.high,(a-.5)/.5):this.high}};var zt=class{constructor(a,e,i,n,l){this.roleA=a,this.roleB=e,this.delta=i,this.polarity=n,this.stayTogether=l}};var Ot;(function(o){o[o.MONOCHROME=0]="MONOCHROME",o[o.NEUTRAL=1]="NEUTRAL",o[o.TONAL_SPOT=2]="TONAL_SPOT",o[o.VIBRANT=3]="VIBRANT",o[o.EXPRESSIVE=4]="EXPRESSIVE",o[o.FIDELITY=5]="FIDELITY",o[o.CONTENT=6]="CONTENT",o[o.RAINBOW=7]="RAINBOW",o[o.FRUIT_SALAD=8]="FRUIT_SALAD"})(Ot||(Ot={}));function As(o){return o.variant===Ot.FIDELITY||o.variant===Ot.CONTENT}function _e(o){return o.variant===Ot.MONOCHROME}function I2(o,a,e,i){let n=e,l=We.from(o,a,e);if(l.chroma<a){let h=l.chroma;for(;l.chroma<a;){n+=i?-1:1;let u=We.from(o,a,n);if(h>u.chroma||Math.abs(u.chroma-a)<.4)break;let v=Math.abs(u.chroma-a),C=Math.abs(l.chroma-a);v<C&&(l=u),h=Math.max(h,u.chroma)}}return n}var x=class o{static highestSurface(a){return a.isDark?o.surfaceBright:o.surfaceDim}};x.contentAccentToneDelta=15;x.primaryPaletteKeyColor=W.fromPalette({name:"primary_palette_key_color",palette:o=>o.primaryPalette,tone:o=>o.primaryPalette.keyColor.tone});x.secondaryPaletteKeyColor=W.fromPalette({name:"secondary_palette_key_color",palette:o=>o.secondaryPalette,tone:o=>o.secondaryPalette.keyColor.tone});x.tertiaryPaletteKeyColor=W.fromPalette({name:"tertiary_palette_key_color",palette:o=>o.tertiaryPalette,tone:o=>o.tertiaryPalette.keyColor.tone});x.neutralPaletteKeyColor=W.fromPalette({name:"neutral_palette_key_color",palette:o=>o.neutralPalette,tone:o=>o.neutralPalette.keyColor.tone});x.neutralVariantPaletteKeyColor=W.fromPalette({name:"neutral_variant_palette_key_color",palette:o=>o.neutralVariantPalette,tone:o=>o.neutralVariantPalette.keyColor.tone});x.background=W.fromPalette({name:"background",palette:o=>o.neutralPalette,tone:o=>o.isDark?6:98,isBackground:!0});x.onBackground=W.fromPalette({name:"on_background",palette:o=>o.neutralPalette,tone:o=>o.isDark?90:10,background:o=>x.background,contrastCurve:new Y(3,3,4.5,7)});x.surface=W.fromPalette({name:"surface",palette:o=>o.neutralPalette,tone:o=>o.isDark?6:98,isBackground:!0});x.surfaceDim=W.fromPalette({name:"surface_dim",palette:o=>o.neutralPalette,tone:o=>o.isDark?6:new Y(87,87,80,75).get(o.contrastLevel),isBackground:!0});x.surfaceBright=W.fromPalette({name:"surface_bright",palette:o=>o.neutralPalette,tone:o=>o.isDark?new Y(24,24,29,34).get(o.contrastLevel):98,isBackground:!0});x.surfaceContainerLowest=W.fromPalette({name:"surface_container_lowest",palette:o=>o.neutralPalette,tone:o=>o.isDark?new Y(4,4,2,0).get(o.contrastLevel):100,isBackground:!0});x.surfaceContainerLow=W.fromPalette({name:"surface_container_low",palette:o=>o.neutralPalette,tone:o=>o.isDark?new Y(10,10,11,12).get(o.contrastLevel):new Y(96,96,96,95).get(o.contrastLevel),isBackground:!0});x.surfaceContainer=W.fromPalette({name:"surface_container",palette:o=>o.neutralPalette,tone:o=>o.isDark?new Y(12,12,16,20).get(o.contrastLevel):new Y(94,94,92,90).get(o.contrastLevel),isBackground:!0});x.surfaceContainerHigh=W.fromPalette({name:"surface_container_high",palette:o=>o.neutralPalette,tone:o=>o.isDark?new Y(17,17,21,25).get(o.contrastLevel):new Y(92,92,88,85).get(o.contrastLevel),isBackground:!0});x.surfaceContainerHighest=W.fromPalette({name:"surface_container_highest",palette:o=>o.neutralPalette,tone:o=>o.isDark?new Y(22,22,26,30).get(o.contrastLevel):new Y(90,90,84,80).get(o.contrastLevel),isBackground:!0});x.onSurface=W.fromPalette({name:"on_surface",palette:o=>o.neutralPalette,tone:o=>o.isDark?90:10,background:o=>x.highestSurface(o),contrastCurve:new Y(4.5,7,11,21)});x.surfaceVariant=W.fromPalette({name:"surface_variant",palette:o=>o.neutralVariantPalette,tone:o=>o.isDark?30:90,isBackground:!0});x.onSurfaceVariant=W.fromPalette({name:"on_surface_variant",palette:o=>o.neutralVariantPalette,tone:o=>o.isDark?80:30,background:o=>x.highestSurface(o),contrastCurve:new Y(3,4.5,7,11)});x.inverseSurface=W.fromPalette({name:"inverse_surface",palette:o=>o.neutralPalette,tone:o=>o.isDark?90:20});x.inverseOnSurface=W.fromPalette({name:"inverse_on_surface",palette:o=>o.neutralPalette,tone:o=>o.isDark?20:95,background:o=>x.inverseSurface,contrastCurve:new Y(4.5,7,11,21)});x.outline=W.fromPalette({name:"outline",palette:o=>o.neutralVariantPalette,tone:o=>o.isDark?60:50,background:o=>x.highestSurface(o),contrastCurve:new Y(1.5,3,4.5,7)});x.outlineVariant=W.fromPalette({name:"outline_variant",palette:o=>o.neutralVariantPalette,tone:o=>o.isDark?30:80,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5)});x.shadow=W.fromPalette({name:"shadow",palette:o=>o.neutralPalette,tone:o=>0});x.scrim=W.fromPalette({name:"scrim",palette:o=>o.neutralPalette,tone:o=>0});x.surfaceTint=W.fromPalette({name:"surface_tint",palette:o=>o.primaryPalette,tone:o=>o.isDark?80:40,isBackground:!0});x.primary=W.fromPalette({name:"primary",palette:o=>o.primaryPalette,tone:o=>_e(o)?o.isDark?100:0:o.isDark?80:40,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(3,4.5,7,7),toneDeltaPair:o=>new zt(x.primaryContainer,x.primary,10,"nearer",!1)});x.onPrimary=W.fromPalette({name:"on_primary",palette:o=>o.primaryPalette,tone:o=>_e(o)?o.isDark?10:90:o.isDark?20:100,background:o=>x.primary,contrastCurve:new Y(4.5,7,11,21)});x.primaryContainer=W.fromPalette({name:"primary_container",palette:o=>o.primaryPalette,tone:o=>As(o)?o.sourceColorHct.tone:_e(o)?o.isDark?85:25:o.isDark?30:90,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.primaryContainer,x.primary,10,"nearer",!1)});x.onPrimaryContainer=W.fromPalette({name:"on_primary_container",palette:o=>o.primaryPalette,tone:o=>As(o)?W.foregroundTone(x.primaryContainer.tone(o),4.5):_e(o)?o.isDark?0:100:o.isDark?90:30,background:o=>x.primaryContainer,contrastCurve:new Y(3,4.5,7,11)});x.inversePrimary=W.fromPalette({name:"inverse_primary",palette:o=>o.primaryPalette,tone:o=>o.isDark?40:80,background:o=>x.inverseSurface,contrastCurve:new Y(3,4.5,7,7)});x.secondary=W.fromPalette({name:"secondary",palette:o=>o.secondaryPalette,tone:o=>o.isDark?80:40,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(3,4.5,7,7),toneDeltaPair:o=>new zt(x.secondaryContainer,x.secondary,10,"nearer",!1)});x.onSecondary=W.fromPalette({name:"on_secondary",palette:o=>o.secondaryPalette,tone:o=>_e(o)?o.isDark?10:100:o.isDark?20:100,background:o=>x.secondary,contrastCurve:new Y(4.5,7,11,21)});x.secondaryContainer=W.fromPalette({name:"secondary_container",palette:o=>o.secondaryPalette,tone:o=>{let a=o.isDark?30:90;return _e(o)?o.isDark?30:85:As(o)?I2(o.secondaryPalette.hue,o.secondaryPalette.chroma,a,!o.isDark):a},isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.secondaryContainer,x.secondary,10,"nearer",!1)});x.onSecondaryContainer=W.fromPalette({name:"on_secondary_container",palette:o=>o.secondaryPalette,tone:o=>_e(o)?o.isDark?90:10:As(o)?W.foregroundTone(x.secondaryContainer.tone(o),4.5):o.isDark?90:30,background:o=>x.secondaryContainer,contrastCurve:new Y(3,4.5,7,11)});x.tertiary=W.fromPalette({name:"tertiary",palette:o=>o.tertiaryPalette,tone:o=>_e(o)?o.isDark?90:25:o.isDark?80:40,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(3,4.5,7,7),toneDeltaPair:o=>new zt(x.tertiaryContainer,x.tertiary,10,"nearer",!1)});x.onTertiary=W.fromPalette({name:"on_tertiary",palette:o=>o.tertiaryPalette,tone:o=>_e(o)?o.isDark?10:90:o.isDark?20:100,background:o=>x.tertiary,contrastCurve:new Y(4.5,7,11,21)});x.tertiaryContainer=W.fromPalette({name:"tertiary_container",palette:o=>o.tertiaryPalette,tone:o=>{if(_e(o))return o.isDark?60:49;if(!As(o))return o.isDark?30:90;let a=o.tertiaryPalette.getHct(o.sourceColorHct.tone);return Rs.fixIfDisliked(a).tone},isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.tertiaryContainer,x.tertiary,10,"nearer",!1)});x.onTertiaryContainer=W.fromPalette({name:"on_tertiary_container",palette:o=>o.tertiaryPalette,tone:o=>_e(o)?o.isDark?0:100:As(o)?W.foregroundTone(x.tertiaryContainer.tone(o),4.5):o.isDark?90:30,background:o=>x.tertiaryContainer,contrastCurve:new Y(3,4.5,7,11)});x.error=W.fromPalette({name:"error",palette:o=>o.errorPalette,tone:o=>o.isDark?80:40,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(3,4.5,7,7),toneDeltaPair:o=>new zt(x.errorContainer,x.error,10,"nearer",!1)});x.onError=W.fromPalette({name:"on_error",palette:o=>o.errorPalette,tone:o=>o.isDark?20:100,background:o=>x.error,contrastCurve:new Y(4.5,7,11,21)});x.errorContainer=W.fromPalette({name:"error_container",palette:o=>o.errorPalette,tone:o=>o.isDark?30:90,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.errorContainer,x.error,10,"nearer",!1)});x.onErrorContainer=W.fromPalette({name:"on_error_container",palette:o=>o.errorPalette,tone:o=>_e(o)?o.isDark?90:10:o.isDark?90:30,background:o=>x.errorContainer,contrastCurve:new Y(3,4.5,7,11)});x.primaryFixed=W.fromPalette({name:"primary_fixed",palette:o=>o.primaryPalette,tone:o=>_e(o)?40:90,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.primaryFixed,x.primaryFixedDim,10,"lighter",!0)});x.primaryFixedDim=W.fromPalette({name:"primary_fixed_dim",palette:o=>o.primaryPalette,tone:o=>_e(o)?30:80,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.primaryFixed,x.primaryFixedDim,10,"lighter",!0)});x.onPrimaryFixed=W.fromPalette({name:"on_primary_fixed",palette:o=>o.primaryPalette,tone:o=>_e(o)?100:10,background:o=>x.primaryFixedDim,secondBackground:o=>x.primaryFixed,contrastCurve:new Y(4.5,7,11,21)});x.onPrimaryFixedVariant=W.fromPalette({name:"on_primary_fixed_variant",palette:o=>o.primaryPalette,tone:o=>_e(o)?90:30,background:o=>x.primaryFixedDim,secondBackground:o=>x.primaryFixed,contrastCurve:new Y(3,4.5,7,11)});x.secondaryFixed=W.fromPalette({name:"secondary_fixed",palette:o=>o.secondaryPalette,tone:o=>_e(o)?80:90,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.secondaryFixed,x.secondaryFixedDim,10,"lighter",!0)});x.secondaryFixedDim=W.fromPalette({name:"secondary_fixed_dim",palette:o=>o.secondaryPalette,tone:o=>_e(o)?70:80,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.secondaryFixed,x.secondaryFixedDim,10,"lighter",!0)});x.onSecondaryFixed=W.fromPalette({name:"on_secondary_fixed",palette:o=>o.secondaryPalette,tone:o=>10,background:o=>x.secondaryFixedDim,secondBackground:o=>x.secondaryFixed,contrastCurve:new Y(4.5,7,11,21)});x.onSecondaryFixedVariant=W.fromPalette({name:"on_secondary_fixed_variant",palette:o=>o.secondaryPalette,tone:o=>_e(o)?25:30,background:o=>x.secondaryFixedDim,secondBackground:o=>x.secondaryFixed,contrastCurve:new Y(3,4.5,7,11)});x.tertiaryFixed=W.fromPalette({name:"tertiary_fixed",palette:o=>o.tertiaryPalette,tone:o=>_e(o)?40:90,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.tertiaryFixed,x.tertiaryFixedDim,10,"lighter",!0)});x.tertiaryFixedDim=W.fromPalette({name:"tertiary_fixed_dim",palette:o=>o.tertiaryPalette,tone:o=>_e(o)?30:80,isBackground:!0,background:o=>x.highestSurface(o),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:o=>new zt(x.tertiaryFixed,x.tertiaryFixedDim,10,"lighter",!0)});x.onTertiaryFixed=W.fromPalette({name:"on_tertiary_fixed",palette:o=>o.tertiaryPalette,tone:o=>_e(o)?100:10,background:o=>x.tertiaryFixedDim,secondBackground:o=>x.tertiaryFixed,contrastCurve:new Y(4.5,7,11,21)});x.onTertiaryFixedVariant=W.fromPalette({name:"on_tertiary_fixed_variant",palette:o=>o.tertiaryPalette,tone:o=>_e(o)?90:30,background:o=>x.tertiaryFixedDim,secondBackground:o=>x.tertiaryFixed,contrastCurve:new Y(3,4.5,7,11)});var mt=class{constructor(a){this.sourceColorArgb=a.sourceColorArgb,this.variant=a.variant,this.contrastLevel=a.contrastLevel,this.isDark=a.isDark,this.sourceColorHct=We.fromInt(a.sourceColorArgb),this.primaryPalette=a.primaryPalette,this.secondaryPalette=a.secondaryPalette,this.tertiaryPalette=a.tertiaryPalette,this.neutralPalette=a.neutralPalette,this.neutralVariantPalette=a.neutralVariantPalette,this.errorPalette=me.fromHueAndChroma(25,84)}static getRotatedHue(a,e,i){let n=a.hue;if(e.length!==i.length)throw new Error(`mismatch between hue length ${e.length} & rotations ${i.length}`);if(i.length===1)return ar(a.hue+i[0]);let l=e.length;for(let h=0;h<=l-2;h++){let u=e[h],v=e[h+1];if(u<n&&n<v)return ar(n+i[h])}return n}getArgb(a){return a.getArgb(this)}getHct(a){return a.getHct(this)}get primaryPaletteKeyColor(){return this.getArgb(x.primaryPaletteKeyColor)}get secondaryPaletteKeyColor(){return this.getArgb(x.secondaryPaletteKeyColor)}get tertiaryPaletteKeyColor(){return this.getArgb(x.tertiaryPaletteKeyColor)}get neutralPaletteKeyColor(){return this.getArgb(x.neutralPaletteKeyColor)}get neutralVariantPaletteKeyColor(){return this.getArgb(x.neutralVariantPaletteKeyColor)}get background(){return this.getArgb(x.background)}get onBackground(){return this.getArgb(x.onBackground)}get surface(){return this.getArgb(x.surface)}get surfaceDim(){return this.getArgb(x.surfaceDim)}get surfaceBright(){return this.getArgb(x.surfaceBright)}get surfaceContainerLowest(){return this.getArgb(x.surfaceContainerLowest)}get surfaceContainerLow(){return this.getArgb(x.surfaceContainerLow)}get surfaceContainer(){return this.getArgb(x.surfaceContainer)}get surfaceContainerHigh(){return this.getArgb(x.surfaceContainerHigh)}get surfaceContainerHighest(){return this.getArgb(x.surfaceContainerHighest)}get onSurface(){return this.getArgb(x.onSurface)}get surfaceVariant(){return this.getArgb(x.surfaceVariant)}get onSurfaceVariant(){return this.getArgb(x.onSurfaceVariant)}get inverseSurface(){return this.getArgb(x.inverseSurface)}get inverseOnSurface(){return this.getArgb(x.inverseOnSurface)}get outline(){return this.getArgb(x.outline)}get outlineVariant(){return this.getArgb(x.outlineVariant)}get shadow(){return this.getArgb(x.shadow)}get scrim(){return this.getArgb(x.scrim)}get surfaceTint(){return this.getArgb(x.surfaceTint)}get primary(){return this.getArgb(x.primary)}get onPrimary(){return this.getArgb(x.onPrimary)}get primaryContainer(){return this.getArgb(x.primaryContainer)}get onPrimaryContainer(){return this.getArgb(x.onPrimaryContainer)}get inversePrimary(){return this.getArgb(x.inversePrimary)}get secondary(){return this.getArgb(x.secondary)}get onSecondary(){return this.getArgb(x.onSecondary)}get secondaryContainer(){return this.getArgb(x.secondaryContainer)}get onSecondaryContainer(){return this.getArgb(x.onSecondaryContainer)}get tertiary(){return this.getArgb(x.tertiary)}get onTertiary(){return this.getArgb(x.onTertiary)}get tertiaryContainer(){return this.getArgb(x.tertiaryContainer)}get onTertiaryContainer(){return this.getArgb(x.onTertiaryContainer)}get error(){return this.getArgb(x.error)}get onError(){return this.getArgb(x.onError)}get errorContainer(){return this.getArgb(x.errorContainer)}get onErrorContainer(){return this.getArgb(x.onErrorContainer)}get primaryFixed(){return this.getArgb(x.primaryFixed)}get primaryFixedDim(){return this.getArgb(x.primaryFixedDim)}get onPrimaryFixed(){return this.getArgb(x.onPrimaryFixed)}get onPrimaryFixedVariant(){return this.getArgb(x.onPrimaryFixedVariant)}get secondaryFixed(){return this.getArgb(x.secondaryFixed)}get secondaryFixedDim(){return this.getArgb(x.secondaryFixedDim)}get onSecondaryFixed(){return this.getArgb(x.onSecondaryFixed)}get onSecondaryFixedVariant(){return this.getArgb(x.onSecondaryFixedVariant)}get tertiaryFixed(){return this.getArgb(x.tertiaryFixed)}get tertiaryFixedDim(){return this.getArgb(x.tertiaryFixedDim)}get onTertiaryFixed(){return this.getArgb(x.onTertiaryFixed)}get onTertiaryFixedVariant(){return this.getArgb(x.onTertiaryFixedVariant)}};var mn=class o{static of(a){return new o(a,!1)}static contentOf(a){return new o(a,!0)}static fromColors(a){return o.createPaletteFromColors(!1,a)}static contentFromColors(a){return o.createPaletteFromColors(!0,a)}static createPaletteFromColors(a,e){let i=new o(e.primary,a);if(e.secondary){let n=new o(e.secondary,a);i.a2=n.a1}if(e.tertiary){let n=new o(e.tertiary,a);i.a3=n.a1}if(e.error){let n=new o(e.error,a);i.error=n.a1}if(e.neutral){let n=new o(e.neutral,a);i.n1=n.n1}if(e.neutralVariant){let n=new o(e.neutralVariant,a);i.n2=n.n2}return i}constructor(a,e){let i=We.fromInt(a),n=i.hue,l=i.chroma;e?(this.a1=me.fromHueAndChroma(n,l),this.a2=me.fromHueAndChroma(n,l/3),this.a3=me.fromHueAndChroma(n+60,l/2),this.n1=me.fromHueAndChroma(n,Math.min(l/12,4)),this.n2=me.fromHueAndChroma(n,Math.min(l/6,8))):(this.a1=me.fromHueAndChroma(n,Math.max(48,l)),this.a2=me.fromHueAndChroma(n,16),this.a3=me.fromHueAndChroma(n+60,24),this.n1=me.fromHueAndChroma(n,4),this.n2=me.fromHueAndChroma(n,8)),this.error=me.fromHueAndChroma(25,84)}};var $h=class o extends mt{constructor(a,e,i){super({sourceColorArgb:a.toInt(),variant:Ot.EXPRESSIVE,contrastLevel:i,isDark:e,primaryPalette:me.fromHueAndChroma(ar(a.hue+240),40),secondaryPalette:me.fromHueAndChroma(mt.getRotatedHue(a,o.hues,o.secondaryRotations),24),tertiaryPalette:me.fromHueAndChroma(mt.getRotatedHue(a,o.hues,o.tertiaryRotations),32),neutralPalette:me.fromHueAndChroma(a.hue+15,8),neutralVariantPalette:me.fromHueAndChroma(a.hue+15,12)})}};$h.hues=[0,21,51,121,151,191,271,321,360];$h.secondaryRotations=[45,95,45,20,45,90,45,45,45];$h.tertiaryRotations=[120,120,20,45,20,15,20,120,120];var Sh=class o extends mt{constructor(a,e,i){super({sourceColorArgb:a.toInt(),variant:Ot.VIBRANT,contrastLevel:i,isDark:e,primaryPalette:me.fromHueAndChroma(a.hue,200),secondaryPalette:me.fromHueAndChroma(mt.getRotatedHue(a,o.hues,o.secondaryRotations),24),tertiaryPalette:me.fromHueAndChroma(mt.getRotatedHue(a,o.hues,o.tertiaryRotations),32),neutralPalette:me.fromHueAndChroma(a.hue,10),neutralVariantPalette:me.fromHueAndChroma(a.hue,12)})}};Sh.hues=[0,41,61,101,131,181,251,301,360];Sh.secondaryRotations=[18,15,10,12,15,18,15,12,12];Sh.tertiaryRotations=[35,30,20,25,30,35,30,25,25];var D2={desired:4,fallbackColorARGB:4282549748,filter:!0};function F2(o,a){return o.score>a.score?-1:o.score<a.score?1:0}var zi=class o{constructor(){}static score(a,e){let{desired:i,fallbackColorARGB:n,filter:l}={...D2,...e},h=[],u=new Array(360).fill(0),v=0;for(let[w,P]of a.entries()){let _=We.fromInt(w);h.push(_);let z=Math.floor(_.hue);u[z]+=P,v+=P}let C=new Array(360).fill(0);for(let w=0;w<360;w++){let P=u[w]/v;for(let _=w-14;_<w+16;_++){let z=au(_);C[z]+=P}}let S=new Array;for(let w of h){let P=au(Math.round(w.hue)),_=C[P];if(l&&(w.chroma<o.CUTOFF_CHROMA||_<=o.CUTOFF_EXCITED_PROPORTION))continue;let z=_*100*o.WEIGHT_PROPORTION,V=w.chroma<o.TARGET_CHROMA?o.WEIGHT_CHROMA_BELOW:o.WEIGHT_CHROMA_ABOVE,q=(w.chroma-o.TARGET_CHROMA)*V,B=z+q;S.push({hct:w,score:B})}S.sort(F2);let $=[];for(let w=90;w>=15;w--){$.length=0;for(let{hct:P}of S)if($.find(z=>sv(P.hue,z.hue)<w)||$.push(P),$.length>=i)break;if($.length>=i)break}let T=[];$.length===0&&T.push(n);for(let w of $)T.push(w.toInt());return T}};zi.TARGET_CHROMA=48;zi.WEIGHT_PROPORTION=.7;zi.WEIGHT_CHROMA_ABOVE=.3;zi.WEIGHT_CHROMA_BELOW=.1;zi.CUTOFF_CHROMA=5;zi.CUTOFF_EXCITED_PROPORTION=.01;function hu(o){let a=su(o),e=lu(o),i=cu(o),n=[a.toString(16),e.toString(16),i.toString(16)];for(let[l,h]of n.entries())h.length===1&&(n[l]="0"+h);return"#"+n.join("")}function G0(o){o=o.replace("#","");let a=o.length===3,e=o.length===6,i=o.length===8;if(!a&&!e&&!i)throw new Error("unexpected hex "+o);let n=0,l=0,h=0;return a?(n=Oi(o.slice(0,1).repeat(2)),l=Oi(o.slice(1,2).repeat(2)),h=Oi(o.slice(2,3).repeat(2))):e?(n=Oi(o.slice(0,2)),l=Oi(o.slice(2,4)),h=Oi(o.slice(4,6))):i&&(n=Oi(o.slice(2,4)),l=Oi(o.slice(4,6)),h=Oi(o.slice(6,8))),(255<<24|(n&255)<<16|(l&255)<<8|h&255)>>>0}function Oi(o){return parseInt(o,16)}var _s,Is,un,xa,Ca,kh,pn,dv,j0,Hr=class extends k{constructor(){super(...arguments);m(this,pn);m(this,_s,new CSSStyleSheet);m(this,Is,!1);m(this,un);m(this,xa);m(this,Ca);m(this,kh,()=>c(this,pn,dv).call(this,!0));this.color="#6750A4";this.scheme="auto";this.contrast="standard";this.strongFocus=!1;this.density=0;this.motion="standard"}get isDark(){switch(this.scheme){case"light":return!1;case"dark":return!0;default:if(this.parentElement instanceof HTMLBodyElement)switch(document.documentElement.style.colorScheme){case"light":return!1;case"dark":return!0}return s(this,xa)?.matches??!1}}connectedCallback(){super.connectedCallback(),this.shadowRoot&&!this.shadowRoot.adoptedStyleSheets.includes(s(this,_s))&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s(this,_s)]),g(this,un,matchMedia("(prefers-color-scheme: light)")),g(this,xa,matchMedia("(prefers-color-scheme: dark)")),g(this,Ca,matchMedia("(forced-colors: active)")),[s(this,un),s(this,xa),s(this,Ca)].forEach(e=>e.addEventListener("change",s(this,kh)))}disconnectedCallback(){super.disconnectedCallback(),[s(this,un),s(this,xa),s(this,Ca)].forEach(e=>e?.removeEventListener("change",s(this,kh))),g(this,un,g(this,xa,g(this,Ca,void 0)))}updated(e){super.updated(e),c(this,pn,dv).call(this,s(this,Is)&&["color","scheme","contrast"].some(i=>e.has(i)))}firstUpdated(e){super.firstUpdated(e),g(this,Is,!0)}render(){return f`<slot></slot>`}};_s=new WeakMap,Is=new WeakMap,un=new WeakMap,xa=new WeakMap,Ca=new WeakMap,kh=new WeakMap,pn=new WeakSet,dv=function(e){let i=G0(this.color),n=mn.of(i),l=new mt({sourceColorArgb:i,variant:1,contrastLevel:c(this,pn,j0).call(this),isDark:this.isDark,primaryPalette:n.a1,secondaryPalette:n.a2,tertiaryPalette:n.a3,neutralPalette:n.n1,neutralVariantPalette:n.n2}),h="";for(let u in x)if(!u.endsWith("PaletteKeyColor")){let v=x[u];v instanceof W&&(h+=`--md-sys-color-${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}: ${hu(v.getArgb(l))};`)}if(this.motion==="expressive"&&(h+="--md-sys-motion-spring-fast-spatial: 350ms cubic-bezier(0.42, 1.67, 0.21, 0.90);",h+="--md-sys-motion-spring-default-spatial: 500ms cubic-bezier(0.38, 1.21, 0.22, 1.00);",h+="--md-sys-motion-spring-slow-spatial: 650ms cubic-bezier(0.39, 1.29, 0.35, 0.98);",h+="--md-sys-motion-spring-fast-effects: 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00);",h+="--md-sys-motion-spring-default-effects: 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00);",h+="--md-sys-motion-spring-slow-effects: 300ms cubic-bezier(0.34, 0.88, 0.34, 1.00);"),h+=`--md-sys-density-scale: ${this.density};`,h+=`--m3e-scrollbar-thumb-color: ${hu(l.neutralPalette.tone(60))};`,h+=`--m3e-focus-ring-visibility: ${this.strongFocus?"visible":"hidden"};`,s(this,_s).replaceSync(`:host { ${h} }`),this.parentElement instanceof HTMLBodyElement){let u=getComputedStyle(this);switch(this.scheme){case"light":document.documentElement.style.colorScheme="light";break;case"dark":document.documentElement.style.colorScheme="dark";break;default:switch(document.documentElement.style.colorScheme){case"light":case"dark":document.documentElement.style.colorScheme="light dark";break}}s(this,Ca)?.matches?this.parentElement.style.backgroundColor=this.parentElement.style.color=this.parentElement.ownerDocument.documentElement.style.scrollbarColor=this.parentElement.style.scrollbarColor="":(this.parentElement.style.backgroundColor=u.getPropertyValue("--md-sys-color-background"),this.parentElement.style.color=u.getPropertyValue("--md-sys-color-on-background"),this.parentElement.ownerDocument.documentElement.style.scrollbarColor=this.parentElement.style.scrollbarColor=`${u.getPropertyValue("--m3e-scrollbar-thumb-color")} ${u.getPropertyValue("--m3e-scrollbar-track-color")}`)}s(this,Is)&&this.dispatchEvent(new Event("change",{bubbles:!0})),e&&document.body.offsetHeight},j0=function(){switch(this.contrast){case"high":return 1;case"medium":return .5;default:return 0}},Hr.styles=b`
    :host {
      display: contents;
      font-size: ${t.typescale.standard.body.large.fontSize};
      font-weight: ${t.typescale.standard.body.large.fontWeight};
      line-height: ${t.typescale.standard.body.large.lineHeight};
      letter-spacing: ${t.typescale.standard.body.large.tracking};
    }
  `,d([p()],Hr.prototype,"color",2),d([p()],Hr.prototype,"scheme",2),d([p()],Hr.prototype,"contrast",2),d([p({attribute:"strong-focus",type:Boolean})],Hr.prototype,"strongFocus",2),d([p({type:Number})],Hr.prototype,"density",2),d([p()],Hr.prototype,"motion",2),Hr=d([y("m3e-theme")],Hr);var ai=class extends Vt(N(D(M(k,"link")))){update(a){super.update(a),a.has("selected")&&(this.ariaSelected=null,this.ariaCurrent=this.selected?"true":null),a.has("node")&&(this.node?this._base?.style.setProperty("--_level",`${this.node.level-1}`):this._base?.style.removeProperty("--_level"))}firstUpdated(a){super.firstUpdated(a),this._stateLayer?.attach(this)}render(){return f`<m3e-state-layer class="state-layer"></m3e-state-layer>
      <div class="base"><slot></slot></div>`}};ai.styles=b`
    :host {
      display: inline-block;
      position: relative;
      user-select: none;
      outline: none;
      border-radius: var(--m3e-toc-item-shape, ${t.shape.corner.largeIncreased});
      padding-block: var(--m3e-toc-item-padding-block, 0.5rem);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    :host(:not(:disabled)) {
      cursor: pointer;
    }
    .base {
      padding-inline-start: calc(
        var(--m3e-toc-item-padding, 1rem) + calc(var(--m3e-toc-item-inset, 0.75rem) * var(--_level, 0))
      );
      padding-inline-end: var(--m3e-toc-item-padding, 1rem);
      transition: ${r(`color var(--m3e-toc-active-indicator-animation-duration, ${t.motion.duration.long1}) ${t.motion.easing.standard}`)};
    }
    :host(:not([selected])) {
      font-size: var(--m3e-toc-item-font-size, ${t.typescale.standard.body.large.fontSize});
      font-weight: var(--m3e-toc-item-font-weight, ${t.typescale.standard.body.large.fontWeight});
      line-height: var(--m3e-toc-item-line-height, ${t.typescale.standard.body.large.lineHeight});
      letter-spacing: var(--m3e-toc-item-tracking, ${t.typescale.standard.body.large.tracking});
      color: var(--m3e-toc-item-color, ${t.color.onSurfaceVariant});
    }
    :host([selected]) {
      font-size: var(--m3e-toc-item-selected-font-size, ${t.typescale.emphasized.body.large.fontSize});
      font-weight: var(--m3e-toc-item-selected-font-weight, ${t.typescale.emphasized.body.large.fontWeight});
      line-height: var(--m3e-toc-item-selected-line-height, ${t.typescale.emphasized.body.large.lineHeight});
      letter-spacing: var(--m3e-toc-item-selected-tracking, ${t.typescale.emphasized.body.large.tracking});
      color: var(--m3e-toc-item-selected-color, ${t.color.onSecondaryContainer});
    }
    .base {
      justify-content: unset;
    }
    .state-layer {
      --m3e-state-layer-focus-opacity: 0;
    }
    @media (prefers-reduced-motion) {
      .base {
        transition: none;
      }
    }
  `,d([L(".base")],ai.prototype,"_base",2),d([L(".state-layer")],ai.prototype,"_stateLayer",2),d([ie()],ai.prototype,"node",2),ai=d([y("m3e-toc-item")],ai);var mu=class o{static generate(a,e=6){let n=6,l=new Array;a.querySelectorAll("h1:not([m3e-toc-ignore]),h2:not([m3e-toc-ignore]),h3:not([m3e-toc-ignore]),h4:not([m3e-toc-ignore]),h5:not([m3e-toc-ignore]),h6:not([m3e-toc-ignore]),m3e-heading[level]:not([m3e-toc-ignore])").forEach(h=>{let u=o.#e(h);n=Math.min(u,n),l.push({id:h.id||Vv(),element:h,level:u,label:ft(h,!0),nodes:new Array})});for(let h=n+e-1;h>n;h--)for(let u=0;u<l.length;u++){let v=l[u];if(v.level===h)for(let C=u;C>=0;C--){let S=l[C];if(S.level<h){S.nodes.push(v);break}}}return l.forEach(h=>h.level-=n-1),l.filter(h=>h.level===1)}static#e(a){return a.tagName.startsWith("H")?parseInt(a.tagName.substring(1)):parseInt(a.getAttribute("level")??"0")}};var zs,Rr,Lh,Eh,Th,Kt,hv,K0,Z0,X0,wh,Di=class extends ce(D(M(k,"navigation"))){constructor(){super(...arguments);m(this,Kt);this._toc=[];m(this,zs,!1);m(this,Rr,new rt().withHomeAndEnd().withVerticalOrientation().disableRovingTabIndex().onSelectedItemsChange(()=>{if(this._activeIndicator){let e=s(this,Rr).selectedItems[0];e?(Wo(e,this,{block:"nearest",behavior:"smooth"}),this._activeIndicator.style.top=`${e.offsetTop}px`,this._activeIndicator.style.height=`${e.clientHeight}px`,this._activeIndicator.style.visibility=e.clientHeight==0?"hidden":"",bt(this,"-no-animate")&&setTimeout(()=>le(this,"-no-animate",!1),40)):(le(this,"-no-animate",!0),this._activeIndicator.style.top="0px",this._activeIndicator.style.height="0px",this._activeIndicator.style.visibility="hidden")}}));m(this,Lh,new Nh(this,{target:null,callback:e=>{if(!this.control||s(this,zs))return;let i=this.control.scrollTop,n=null,l=Number.POSITIVE_INFINITY;if(e.filter(h=>h.isIntersecting).map(h=>h.target).forEach(h=>{let u=h.offsetTop,v=Math.abs(u-i);v<l&&(l=v,n=h)}),n){let h=s(this,Rr).items.find(u=>u.node?.element===n);h&&s(this,Rr).select(h)}}}));m(this,Eh,new sr(this,{target:null,callback:()=>g(this,zs,!1),debounce:!0}));m(this,Th,new _r(this,{target:null,config:{childList:!0,subtree:!0},callback:()=>this._updateToc()}));this.maxDepth=2}attach(e){super.attach(e),s(this,Th).observe(e),s(this,Eh).observe(e),c(this,Kt,wh).call(this)}detach(){this.control&&(s(this,Th).unobserve(this.control),s(this,Eh).unobserve(this.control)),super.detach(),c(this,Kt,wh).call(this)}update(e){super.update(e),e.has("maxDepth")&&c(this,Kt,wh).call(this)}updated(e){if(super.updated(e),e.has("_toc")){let{added:i,removed:n}=s(this,Rr).setItems([...this.shadowRoot?.querySelectorAll("m3e-toc-item")??[]]);s(this,Rr).activeItem||(le(this,"-no-animate",!0),s(this,Rr).updateActiveItem(i.find(l=>!l.disabled)));for(let l of i)l.node&&s(this,Lh).observe(l.node.element);for(let l of n)l.node&&s(this,Lh).unobserve(l.node.element)}}render(){return f`<div class="header">
        <div class="overline">
          <slot name="overline" @slotchange="${c(this,Kt,K0)}"></slot>
        </div>
        <div class="title">
          <slot name="title" @slotchange="${c(this,Kt,Z0)}"></slot>
        </div>
      </div>
      <slot></slot>
      <ul class="list">
        ${this._toc.map(e=>c(this,Kt,hv).call(this,e))}
      </ul>
      <div class="active-indicator" aria-hidden="true"></div>`}_updateToc(){c(this,Kt,wh).call(this)}};zs=new WeakMap,Rr=new WeakMap,Lh=new WeakMap,Eh=new WeakMap,Th=new WeakMap,Kt=new WeakSet,hv=function(e){return f`<li>
      <m3e-toc-item tabindex="-1" .node="${e}" @click="${c(this,Kt,X0)}">${e.label}</m3e-toc-item>
      ${e.nodes.length==0?R:f`<ul>
            ${e.nodes.map(i=>c(this,Kt,hv).call(this,i))}
          </ul>`}
    </li>`},K0=function(e){le(this,"-with-overline",J(e.target))},Z0=function(e){le(this,"-with-title",J(e.target))},X0=function(e){e.target instanceof ai&&!e.target.disabled&&e.target.node?.element&&(g(this,zs,!0),e.target.node.element.scrollIntoView({block:"start",behavior:"smooth"}),s(this,Rr).updateActiveItem(e.target),s(this,Rr).select(e.target))},wh=function(){this._toc=this.control?mu.generate(this.control,Math.max(1,Math.min(this.maxDepth,6))):[],this.requestUpdate()},Di.styles=b`
    :host {
      display: inline-block;
      position: relative;
      overflow-y: auto;
      scrollbar-width: ${t.scrollbar.thinWidth};
      scrollbar-color: ${t.scrollbar.color};
      width: var(--m3e-toc-width, 9.75rem);
    }
    ul {
      list-style: none;
      padding-inline-start: unset;
      margin-block-start: unset;
      margin-block-end: unset;
    }
    ul,
    li {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    m3e-toc-item {
      flex: none;
    }
    .active-indicator {
      position: absolute;
      pointer-events: none;
      box-sizing: border-box;
      left: 0;
      right: 0;

      border-radius: var(--m3e-toc-item-shape, ${t.shape.corner.largeIncreased});
      border: 1px solid var(--m3e-toc-active-indicator-color, ${t.color.outline});
      transition: ${r(`visibility var(--m3e-toc-active-indicator-animation-duration, ${t.motion.duration.long1})
          ${t.motion.easing.standard},
        height var(--m3e-toc-active-indicator-animation-duration, ${t.motion.duration.long1})
          ${t.motion.easing.standard},
        top var(--m3e-toc-active-indicator-animation-duration, ${t.motion.duration.long1})
          ${t.motion.easing.standard}`)};
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding-inline-start: var(--m3e-toc-item-padding, 1rem);
      padding-block-end: var(--m3e-toc-header-space, 0.5rem);
      row-gap: var(--m3e-toc-header-space, 0.5rem);
    }
    .overline {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-clamp: 2;
    }
    :host(:not(:state(-with-overline))) .overline,
    :host(:not(:state(-with-title))) .title,
    :host(:not(:state(-with-overline)):not(:state(-with-title))) .header {
      display: none;
    }
    ::slotted([slot="overline"]) {
      font-size: var(--m3e-toc-overline-font-size, ${t.typescale.standard.label.small.fontSize});
      font-weight: var(--m3e-toc-overline-font-weight, ${t.typescale.standard.label.small.fontWeight});
      line-height: var(--m3e-toc-overline-line-height, ${t.typescale.standard.label.small.lineHeight});
      letter-spacing: var(--m3e-toc-overline-tracking, ${t.typescale.standard.label.small.tracking});
      color: var(--m3e-toc-overline-color, ${t.color.onSurfaceVariant});
    }
    ::slotted([slot="title"]) {
      font-size: var(--m3e-toc-title-font-size, ${t.typescale.standard.headline.small.fontSize});
      font-weight: var(--m3e-toc-title-font-weight, ${t.typescale.standard.headline.small.fontWeight});
      line-height: var(--m3e-toc-title-line-height, ${t.typescale.standard.headline.small.lineHeight});
      letter-spacing: var(--m3e-toc-title-tracking, ${t.typescale.standard.headline.small.tracking});
      color: var(--m3e-toc-title-color, ${t.color.onSurface});
    }
    :host(:state(-no-animate)) .active-indicator {
      transition: none;
    }
    @media (prefers-reduced-motion) {
      .active-indicator {
        transition: none;
      }
    }
  `,d([ie()],Di.prototype,"_toc",2),d([L(".active-indicator")],Di.prototype,"_activeIndicator",2),d([p({attribute:"max-depth",type:Number})],Di.prototype,"maxDepth",2),d([Ft(40)],Di.prototype,"_updateToc",1),Di=d([y("m3e-toc")],Di);var Mh,Ar,Sa,Y0,J0,Q0,$a=class extends Kh(M(k,"toolbar")){constructor(){super(...arguments);m(this,Sa);m(this,Mh);m(this,Ar,new fo().withHomeAndEnd().withDirectionality(O.current));this.variant="standard";this.shape="square";this.elevated=!1}connectedCallback(){super.connectedCallback(),g(this,Mh,O.observe(()=>s(this,Ar).directionality=O.current))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=s(this,Mh))==null||e.call(this)}update(e){super.update(e),e.has("vertical")&&(s(this,Ar).vertical=this.vertical)}render(){return f`<m3e-state-layer class="state-layer"></m3e-state-layer>
      <m3e-elevation class="elevation" level="${this.elevated?3:0}"></m3e-elevation>
      <div class="base">
        <slot
          @click="${c(this,Sa,Q0)}"
          @keydown="${c(this,Sa,J0)}"
          @slotchange="${c(this,Sa,Y0)}"
        ></slot>
      </div>`}};Mh=new WeakMap,Ar=new WeakMap,Sa=new WeakSet,Y0=function(){let{added:e}=s(this,Ar).setItems(Nt.findInteractiveElements(this));if(!s(this,Ar).activeItem){let i=e.find(n=>!n.hasAttribute("disabled"));i&&s(this,Ar).updateActiveItem(i)}},J0=function(e){s(this,Ar).onKeyDown(e)},Q0=function(e){let i=e.composedPath().find(n=>n instanceof HTMLElement&&s(this,Ar).items.includes(n));i&&s(this,Ar).updateActiveItem(i)},$a.styles=b`
    :host {
      display: inline-block;
      position: relative;
    }
    .base {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      border-radius: inherit;
    }
    :host(:not([vertical])) {
      height: fit-content;
    }
    :host(:not([vertical])) .base {
      height: calc(var(--m3e-toolbar-size, 4rem) + ${t.density.calc(-3)});
      column-gap: var(--m3e-toolbar-spacing, 0.25rem);
    }
    :host([vertical]) {
      width: fit-content;
    }
    :host([vertical]) .base {
      width: calc(var(--m3e-toolbar-size, 4rem) + ${t.density.calc(-3)});
    }
    :host([vertical]) .base {
      flex-direction: column;
      justify-content: center;
      row-gap: var(--m3e-toolbar-spacing, 0.25rem);
    }
    :host([shape="rounded"]) {
      border-radius: var(--m3e-toolbar-rounded-shape, ${t.shape.corner.full});
    }
    :host([shape="rounded"]) .base {
      padding: var(--m3e-toolbar-rounded-padding, 0.5rem);
    }
    :host(:not([vertical])[shape="square"]) .base {
      padding-inline: var(--m3e-toolbar-square-padding, 1rem);
    }
    :host([vertical][shape="square"]) .base {
      padding-block: var(--m3e-toolbar-square-padding, 1rem);
    }
    :host([variant="standard"]) .state-layer {
      background-color: var(--m3e-toolbar-standard-container-color, ${t.color.surfaceContainer});
    }
    :host([variant="standard"]) .base {
      color: var(--m3e-toolbar-standard-color, ${t.color.onSurface});
    }
    :host([variant="vibrant"]) .state-layer {
      background-color: var(--m3e-toolbar-vibrant-container-color, ${t.color.primaryContainer});
    }
    :host([variant="vibrant"]) .base {
      color: var(--m3e-toolbar-vibrant-color, ${t.color.onPrimaryContainer});
    }
    @media (forced-colors: active) {
      :host([variant]) .state-layer {
        background-color: Canvas;
      }
      :host([variant]) .base {
        color: CanvasText;
        outline: 1px solid CanvasText;
      }
    }
  `,d([p({reflect:!0})],$a.prototype,"variant",2),d([p({reflect:!0})],$a.prototype,"shape",2),d([p({type:Boolean,reflect:!0})],$a.prototype,"elevated",2),$a=d([y("m3e-toolbar")],$a);var Ph=class extends Ve{constructor(){super(...arguments);this.disableRestoreFocus=!1}_onClick(){this.closest("m3e-rich-tooltip")?.hide(!this.disableRestoreFocus)}};d([p({attribute:"disable-restore-focus",type:Boolean})],Ph.prototype,"disableRestoreFocus",2),Ph=d([y("m3e-rich-tooltip-action")],Ph);var mv;try{mv=typeof Intl<"u"&&Intl.v8BreakIterator}catch{mv=!1}var Os=class o{static{this.isBrowser=!!1&&typeof document=="object"&&!!document}static{this.Edge=o.isBrowser&&/(edge)/i.test(navigator.userAgent)}static{this.Trident=o.isBrowser&&/(msie|trident)/i.test(navigator.userAgent)}static{this.Blink=o.isBrowser&&!!(window.chrome||mv)&&typeof CSS<"u"&&!o.Edge&&!o.Trident}static{this.WebKit=o.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!o.Blink&&!o.Edge&&!o.Trident}static{this.iOS=o.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window)}static{this.Firefox=o.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent)}static{this.Android=o.isBrowser&&/android/i.test(navigator.userAgent)&&!o.Trident}static{this.Safari=o.isBrowser&&/safari/i.test(navigator.userAgent)&&o.WebKit}};globalThis.M3ePlatform=Os;var V2=4,B2=200,mo=class mo extends ce(D(k)){constructor(){super(...arguments);this.#e=null;this.#o=!1;this.#r=()=>this.#n();this.#i=new et(this,{target:null,endDelay:B2,callback:(e,i)=>{if(!this._isInteractive)if(e){if(i===this._base){this.#o=!0;return}this.show()}else(!this.#o||i===this._base)&&(this.#o=!1,this.hide())}});this.#a=new qh(this,{target:null,callback:e=>{this._isInteractive||(e?this.show():this.hide())}});this.disabled=!1;this.touchGestures="auto"}static{this.__openTooltips=new Array}#e;#t;#o;#r;#i;#a;get showDelay(){return this.#i.startDelay}set showDelay(e){this.#i.startDelay=e}get hideDelay(){return this.#i.endDelay}set hideDelay(e){this.#i.endDelay=e}get isOpen(){return mo.__openTooltips.includes(this)}get _isInteractive(){return!1}attach(e){super.attach(e),Os.iOS||Os.Android?(this.#a.observe(e),this.#s()):this.#i.observe(e),e.addEventListener("click",this.#r)}detach(){this.control&&(this.#i.unobserve(this.control),this.#a.unobserve(this.control),this.control.removeEventListener("click",this.#r),this.hide()),super.detach()}update(e){super.update(e),e.has("disabled")&&this.disabled&&this.hide()}firstUpdated(e){super.firstUpdated(e),this._base&&this.#i.observe(this._base)}async show(){!this.control||this.disabled||Pt(this.control)&&this.control.disabled||(mo.__openTooltips.filter(e=>e!==this).forEach(e=>e.hide()),this._base.showPopover(),this.#t=await qr(this._base,this.control,{position:this._anchorPosition,inline:!0,flip:!0,shift:!0,offset:V2},(e,i)=>this._updatePosition(this._base,e,i)),mo.__openTooltips.includes(this)||mo.__openTooltips.push(this))}hide(){this._base.hidePopover(),this.#t?.(),this.#t=void 0,this.#i.clearDelays(),mo.__openTooltips.includes(this)&&(mo.__openTooltips=mo.__openTooltips.filter(e=>e!==this))}#n(){this._isInteractive?mo.__openTooltips.includes(this)?this.hide():this.show():this.hide()}#s(){if(this.touchGestures!=="off"&&this.#e){let e=this.#e.style;(this.touchGestures==="on"||this.#e.nodeName!=="INPUT"&&this.#e.nodeName!=="TEXTAREA")&&(e.userSelect=e.msUserSelect=e.webkitUserSelect=e.MozUserSelect="none"),(this.touchGestures==="on"||!this.#e.draggable)&&(e.webkitUserDrag="none"),e.touchAction="none",e.webkitTapHighlightColor="transparent"}}};d([L(".base")],mo.prototype,"_base",2),d([p({type:Boolean,reflect:!0})],mo.prototype,"disabled",2),d([p({attribute:"show-delay",type:Number})],mo.prototype,"showDelay",1),d([p({attribute:"hide-delay",type:Number})],mo.prototype,"hideDelay",1),d([p({attribute:"touch-gestures"})],mo.prototype,"touchGestures",2);var Ds=mo;var uu,Vs,Bs,ka,Ns,Hh,Ue,e1,t1,o1,r1,i1,a1,n1,Fs,nr=class extends Ds{constructor(){super(...arguments);m(this,Ue);m(this,uu,nr.__nextId++);m(this,Vs,"");m(this,Bs,"");m(this,ka,"");m(this,Ns,!1);this._hasSubhead=!1;this._interactive=!1;m(this,Hh,e=>c(this,Ue,o1).call(this,e));this.position="below-after"}get _isInteractive(){return this._interactive}get _anchorPosition(){switch(this.position){case"above":return"top";case"above-after":return O.current==="rtl"?"top-start":"top-end";case"above-before":return O.current==="rtl"?"top-end":"top-start";case"after":return O.current==="rtl"?"left":"right";case"before":return O.current==="rtl"?"right":"left";case"below":return"bottom";case"below-after":return O.current==="rtl"?"bottom-start":"bottom-end";case"below-before":return O.current==="rtl"?"bottom-end":"bottom-start"}}render(){let e=this._interactive&&this._hasSubhead?`m3e-rich-tooltip-${s(this,uu)}-subhead`:void 0;return f`<div
      class="base"
      popover="manual"
      role="${$e(this._interactive?"dialog":void 0)}"
      aria-labelledby="${$e(e)}"
      @keydown="${c(this,Ue,r1)}"
      @beforetoggle="${c(this,Ue,e1)}"
      @toggle="${c(this,Ue,t1)}"
    >
      <m3e-elevation level="3"></m3e-elevation>
      <div class="subhead" id="${$e(e)}">
        <slot name="subhead" @slotchange="${c(this,Ue,i1)}"></slot>
      </div>
      <div class="content"><slot @slotchange="${c(this,Ue,a1)}"></slot></div>
      <div class="actions">
        <slot name="actions" @slotchange="${c(this,Ue,n1)}"></slot>
      </div>
    </div>`}show(){return this._interactive&&document.addEventListener("click",s(this,Hh)),super.show()}hide(e=!0){this._interactive&&document.removeEventListener("click",s(this,Hh)),super.hide(),e&&this._interactive&&this.control&&Nt.isFocusable(this.control)&&this.control.focus()}attach(e){super.attach(e),c(this,Ue,Fs).call(this),this._interactive&&(e.ariaHasPopup="dialog")}update(e){super.update(e),e.has("_interactive")&&(this.ariaHidden=this._interactive?null:"true",c(this,Ue,Fs).call(this),this.control&&this._interactive&&(this.control.ariaHasPopup="dialog"))}_updatePosition(e,i,n){this.position.includes("before")&&this.position!=="before"&&(O.current==="rtl"?i+=this.control?.clientWidth??0:i-=this.control?.clientWidth??0),this.position.includes("after")&&this.position!=="after"&&(O.current==="rtl"?i-=this.control?.clientWidth??0:i+=this.control?.clientWidth??0),O.current==="rtl"?(e.style.right=`${window.innerWidth-i-e.clientWidth}px`,e.style.left=""):(e.style.left=`${i}px`,e.style.right=""),e.style.top=`${n}px`}};uu=new WeakMap,Vs=new WeakMap,Bs=new WeakMap,ka=new WeakMap,Ns=new WeakMap,Hh=new WeakMap,Ue=new WeakSet,e1=function(e){let i=new ToggleEvent("beforetoggle",{oldState:e.oldState,newState:e.newState,bubbles:!0,composed:!0,cancelable:e.cancelable});this.dispatchEvent(i)||(e.preventDefault(),this.hide())},t1=function(e){let i=new ToggleEvent("toggle",{oldState:e.oldState,newState:e.newState,bubbles:!0,composed:!0});this.dispatchEvent(i)},o1=function(e){e.composedPath().some(i=>i instanceof nr||i===this.control)||this.hide()},r1=function(e){e.key==="Escape"&&!e.shiftKey&&!e.ctrlKey&&(e.preventDefault(),this.hide())},i1=function(e){this._hasSubhead=J(e.target),this.shadowRoot?.querySelector(".base")?.classList.toggle("has-subhead",this._hasSubhead),g(this,Vs,this._hasSubhead?ft(e.target,!0):""),c(this,Ue,Fs).call(this)},a1=function(e){this._interactive=Nt.findInteractiveElements(this).length>0,g(this,Bs,ft(e.target,!0)),c(this,Ue,Fs).call(this)},n1=function(e){this.shadowRoot?.querySelector(".base")?.classList.toggle("has-actions",J(e.target)),this._interactive=Nt.findInteractiveElements(this).length>0,c(this,Ue,Fs).call(this)},Fs=function(){let e=s(this,Vs)?`${s(this,Vs)}/n${s(this,Bs)}`:s(this,Bs);this.isConnected&&this.control&&(s(this,ka)&&s(this,Ns)&&(Ke.removeDescription(this.control,s(this,ka)),g(this,Ns,!1)),g(this,ka,e),s(this,ka)&&!this._interactive&&(Ke.describe(this.control,s(this,ka)),g(this,Ns,!0)))},nr.styles=b`
    :host {
      display: contents;
    }
    .base {
      flex-direction: column;
      position: absolute;
      padding: unset;
      margin: unset;
      border: unset;
      padding-block-start: var(--m3e-rich-tooltip-padding-top, 0.75rem);
      padding-inline: var(--m3e-rich-tooltip-padding-inline, 1rem);
      max-width: var(--m3e-rich-tooltip-max-width, 20rem);
      box-sizing: border-box;
      overflow: visible;
      border-radius: var(--m3e-rich-tooltip-shape, ${t.shape.corner.medium});
      background-color: var(--m3e-rich-tooltip-container-color, ${t.color.surfaceContainer});
      display: none;
      opacity: 0;
      transform: scale(0.8);
      transition: ${r(`opacity ${t.motion.duration.short3} ${t.motion.easing.standard}, 
            transform ${t.motion.duration.short3} ${t.motion.easing.standard},
            overlay ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete,
            display ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete`)};
    }
    .base:not(.has-actions) {
      padding-block-end: var(--m3e-rich-tooltip-padding-bottom, 0.75rem);
    }
    .base::backdrop {
      background-color: transparent;
    }
    .base:popover-open {
      display: flex;
      opacity: 1;
      transform: scale(1);
    }
    .base:not(.has-subhead) .subhead,
    .base:not(.has-actions) .actions {
      display: none;
    }
    .subhead {
      color: var(--m3e-rich-tooltip-subhead-color, ${t.color.onSurfaceVariant});
      font-size: var(--m3e-rich-tooltip-subhead-font-size, ${t.typescale.standard.title.small.fontSize});
      font-weight: var(
        --m3e-rich-tooltip-subhead-font-weight,
        ${t.typescale.standard.title.small.fontWeight}
      );
      line-height: var(
        --m3e-rich-tooltip-subhead-line-height,
        ${t.typescale.standard.title.small.lineHeight}
      );
      letter-spacing: var(--m3e-rich-tooltip-subhead-tracking, ${t.typescale.standard.title.small.tracking});
      padding-block-end: var(--m3e-rich-tooltip-subhead-bottom-space, 0.25rem);
    }
    .content {
      color: var(--m3e-rich-tooltip-supporting-text-color, ${t.color.onSurfaceVariant});
      font-size: var(
        --m3e-rich-tooltip-supporting-text-font-size,
        ${t.typescale.standard.body.medium.fontSize}
      );
      font-weight: var(
        --m3e-rich-tooltip-supporting-text-font-weight,
        ${t.typescale.standard.body.medium.fontWeight}
      );
      line-height: var(
        --m3e-rich-tooltip-supporting-text-line-height,
        ${t.typescale.standard.body.medium.lineHeight}
      );
      letter-spacing: var(
        --m3e-rich-tooltip-supporting-text-tracking,
        ${t.typescale.standard.body.medium.tracking}
      );
    }
    .actions {
      margin-inline: calc(
        0px - calc(
            var(--m3e-rich-tooltip-padding-inline, 1rem) - var(--m3e-rich-tooltip-actions-padding-inline, 0.25rem)
          )
      );
      padding-block-start: var(--m3e-rich-tooltip-actions-top-space, 0.75rem);
      padding-block-end: var(--m3e-rich-tooltip-actions-bottom-space, 0.5rem);
    }
    ::slotted([slot="actions"]) {
      flex: none;
      display: flex;
      align-items: center;
      min-height: 1.5rem;
      column-gap: 0.5rem;
    }
    ::slotted([slot="actions"][end]) {
      justify-content: flex-end;
    }
    @starting-style {
      .base:popover-open {
        opacity: 0;
        transform: scale(0.8);
      }
    }
    @media (prefers-reduced-motion) {
      .base {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .base {
        background-color: Canvas;
        color: CanvasText;
        box-sizing: border-box;
        border: 1px solid CanvasText;
      }
    }
  `,nr.__nextId=0,d([ie()],nr.prototype,"_hasSubhead",2),d([ie()],nr.prototype,"_interactive",2),d([p()],nr.prototype,"position",2),nr=d([y("m3e-rich-tooltip")],nr);var Bo,Ws,s1,l1,qs=class extends Ds{constructor(){super(...arguments);m(this,Ws);m(this,Bo);this.position="below"}get _anchorPosition(){return this.position==="above"?"top":this.position==="below"?"bottom":this.position==="before"?O.current==="ltr"?"left":"right":O.current==="ltr"?"right":"left"}attach(e){super.attach(e),s(this,Bo)&&Ke.describe(e,s(this,Bo))}detach(){this.control&&s(this,Bo)&&Ke.removeDescription(this.control,s(this,Bo)),super.detach()}connectedCallback(){super.connectedCallback(),this.ariaHidden="true"}render(){return f`<div class="base" popover="manual" @toggle="${c(this,Ws,l1)}">
      <slot @slotchange="${c(this,Ws,s1)}"></slot>
    </div>`}_updatePosition(e,i,n){O.current==="rtl"?(e.style.right=`${window.innerWidth-i-e.clientWidth}px`,e.style.left=""):(e.style.left=`${i}px`,e.style.right=""),e.style.top=`${n}px`}};Bo=new WeakMap,Ws=new WeakSet,s1=function(e){let i=ft(e.target,!0);this.isConnected&&this.control?(s(this,Bo)&&Ke.removeDescription(this.control,s(this,Bo)),g(this,Bo,i),s(this,Bo)&&Ke.describe(this.control,s(this,Bo))):g(this,Bo,i)},l1=function(e){if(e.newState==="open"){let i=this._base.getBoundingClientRect().height>parseFloat(getComputedStyle(this._base).minHeight);le(this,"-multiline",i)}},qs.styles=b`
    :host {
      display: contents;
    }
    .base {
      position: absolute;
      pointer-events: none;
      margin: unset;
      border: unset;
      word-break: normal;
      overflow-wrap: anywhere;
      padding: var(--m3e-tooltip-padding, 0.25rem 0.5rem);
      min-width: var(--m3e-tooltip-min-width, 2.5rem);
      max-width: var(--m3e-tooltip-max-width, 12.5rem);
      min-height: var(--m3e-tooltip-min-height, 1.5rem);
      max-height: var(--m3e-tooltip-max-height, 40vh);
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      border-radius: var(--m3e-tooltip-shape, ${t.shape.corner.extraSmall});
      background-color: var(--m3e-tooltip-container-color, ${t.color.inverseSurface});
      color: var(--m3e-tooltip-supporting-text-color, ${t.color.inverseOnSurface});
      font-size: var(--m3e-tooltip-supporting-text-font-size, ${t.typescale.standard.body.small.fontSize});
      font-weight: var(
        --m3e-tooltip-supporting-text-font-weight,
        ${t.typescale.standard.body.small.fontWeight}
      );
      line-height: var(
        --m3e-tooltip-supporting-text-line-height,
        ${t.typescale.standard.body.small.lineHeight}
      );
      letter-spacing: var(
        --m3e-tooltip-supporting-text-tracking,
        ${t.typescale.standard.body.small.tracking}
      );
      display: none;
      opacity: 0;
      transform: scale(0.8);
      transition: ${r(`opacity ${t.motion.duration.short3} ${t.motion.easing.standard}, 
        transform ${t.motion.duration.short3} ${t.motion.easing.standard},
        overlay ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete,
        display ${t.motion.duration.short3} ${t.motion.easing.standard} allow-discrete`)};
    }
    :host(:state(-multiline)) .base {
      text-align: start;
    }
    .base::backdrop {
      background-color: transparent;
    }
    .base:popover-open {
      display: block;
      opacity: 1;
      transform: scale(1);
    }
    @starting-style {
      .base:popover-open {
        opacity: 0;
        transform: scale(0.8);
      }
    }
    @media (prefers-reduced-motion) {
      .base {
        transition: none;
      }
    }
    @media (forced-colors: active) {
      .base {
        background-color: Canvas;
        color: CanvasText;
        box-sizing: border-box;
        border: 1px solid CanvasText;
      }
    }
  `,d([p()],qs.prototype,"position",2),qs=d([y("m3e-tooltip")],qs);export{Ve as ActionElementBase,Dh as AnimationLoopController,D as AttachInternals,po as Checked,Uh as CheckedIndeterminate,Ir as ConstraintValidation,t as DesignToken,Oe as Dirty,N as Disabled,gt as DisabledInteractive,vo as EventAttribute,ze as FocusController,ae as Focusable,ot as FormAssociated,Go as FormSubmitter,et as HoverController,ce as HtmlFor,Nh as IntersectionController,de as KeyboardClick,Bt as Labelled,Fe as LinkButton,qh as LongPressController,Qn as M3eAccordionElement,Rm as M3eActionListElement,dr as M3eAppBarElement,fm as M3eAssistChipElement,hr as M3eAutocompleteElement,Al as M3eAvatarElement,Oa as M3eBadgeElement,um as M3eBottomSheetActionElement,Be as M3eBottomSheetElement,Wn as M3eBottomSheetTriggerElement,Ct as M3eButtonElement,Ur as M3eButtonGroupElement,rr as M3eButtonSegmentElement,go as M3eCardElement,pi as M3eCheckboxElement,Ze as M3eChipElement,jr as M3eChipSetElement,Ti as M3eCircularProgressIndicatorElement,wn as M3eCollapsibleElement,pc as M3eDialogActionElement,ct as M3eDialogElement,ym as M3eDialogTriggerElement,fi as M3eDividerElement,Ho as M3eDrawerContainerElement,xm as M3eDrawerToggleElement,Gi as M3eElevationElement,So as M3eExpandableListItemElement,Zr as M3eExpansionHeaderElement,Ro as M3eExpansionPanelElement,Co as M3eFabElement,gi as M3eFabMenuElement,yr as M3eFabMenuItemElement,Sm as M3eFabMenuTriggerElement,oc as M3eFilterChipElement,jn as M3eFilterChipSetElement,Ki as M3eFocusRingElement,At as M3eFormFieldElement,xi as M3eHeadingElement,dt as M3eIconButtonElement,er as M3eIconElement,gr as M3eInputChipElement,ac as M3eInputChipSetElement,ti as M3eLinearProgressIndicatorElement,Ya as M3eListActionElement,Jr as M3eListElement,ia as M3eListItemButtonElement,at as M3eListItemElement,Cr as M3eListOptionElement,Ja as M3eLoadingIndicatorElement,ht as M3eMenuElement,Qa as M3eMenuItemCheckboxElement,zo as M3eMenuItemElement,sd as M3eMenuItemGroupElement,ld as M3eMenuItemRadioElement,ns as M3eMenuTriggerElement,Si as M3eNavBarElement,ki as M3eNavItemElement,ca as M3eNavMenuElement,oo as M3eNavMenuItemElement,da as M3eNavMenuItemGroupElement,wi as M3eNavRailElement,Fm as M3eNavRailToggleElement,ma as M3eOptGroupElement,Li as M3eOptionElement,on as M3eOptionPanelElement,Ye as M3ePaginatorElement,pl as M3ePseudoCheckboxElement,vl as M3ePseudoRadioElement,Pi as M3eRadioElement,Vd as M3eRadioGroupElement,Ph as M3eRichTooltipActionElement,nr as M3eRichTooltipElement,li as M3eRippleElement,Xi as M3eScrollContainerElement,nn as M3eSegmentedButtonElement,Sr as M3eSelectElement,as as M3eSelectionListElement,ks as M3eShapeElement,Mn as M3eSlideElement,io as M3eSlideGroupElement,ao as M3eSliderElement,kr as M3eSliderThumbElement,tv as M3eSnackbar,Lt as M3eSnackbarElement,ba as M3eSplitButtonElement,Ji as M3eStateLayerElement,Gt as M3eStepElement,_i as M3eStepPanelElement,Lr as M3eStepperElement,eu as M3eStepperNextElement,tu as M3eStepperPreviousElement,ou as M3eStepperResetElement,gm as M3eSuggestionChipElement,ri as M3eSwitchElement,ir as M3eTabElement,ph as M3eTabPanelElement,Fo as M3eTabsElement,cr as M3eTextHighlightElement,yl as M3eTextOverflowElement,Ii as M3eTextareaAutosizeElement,Hr as M3eThemeElement,Di as M3eTocElement,ai as M3eTocItemElement,$a as M3eToolbarElement,qs as M3eTooltipElement,_r as MutationController,ue as PressedController,$r as ProgressElementIndicatorBase,K7 as ReadOnly,Wi as Required,Ui as RequiredConstraintValidation,Le as ResizeController,M as Role,sr as ScrollController,gn as ScrollLockController,Vt as Selected,ga as StepperButtonElementBase,mu as TocGenerator,Ds as TooltipElementBase,De as Touched,Bh as VelocityTracker,Kh as Vertical,Mt as addCustomState,ol as checkOrSelect,Mu as computeCssSize,_v as computeLineCount,Ft as debounce,tf as defaultValue,xe as deleteCustomState,G3 as findFormFieldControl,Fh as focusWhenReady,bn as forcedColorsActive,tt as formValue,Vh as generateClipPaths,ft as getTextContent,Vv as guid,J as hasAssignedNodes,bt as hasCustomState,he as hasKeys,Bv as interceptProperty,Ge as internals,Cn as isAttachInternalsMixin,Ru as isCheckedIndeterminateMixin,lr as isCheckedMixin,Ni as isCheckedOrSelected,q4 as isCheckedOrSelectedMixin,rf as isConstraintValidationMixin,Gv as isDirtyMixin,Uo as isDisabledInteractiveMixin,Pt as isDisabledMixin,of as isFormAssociatedMixin,U3 as isFormFieldControl,C7 as isFormSubmitterMixin,E7 as isHtmlForMixin,Gh as isLabelledMixin,jh as isLinkButtonMixin,af as isReadOnlyMixin,n$ as isRequiredConstraintValidationMixin,nf as isRequiredMixin,tl as isSelectedMixin,$n as isTouchedMixin,h$ as isVerticalMixin,Me as prefersReducedMotion,st as renderPseudoLink,Nv as resolveElementById,el as resolveFragmentUrl,Wh as safeStyleMap,Wo as scrollIntoViewIfNeeded,le as setCustomState,qv as spaceSeparatedStringConverter,Ta as updateLabels,nl as validate};
/**
 * Adapted from Angular Material CDK KeyManager
 * Source: https://github.com/angular/components/blob/main/src/cdk/a11y/key-manager/typeahead.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material CDK KeyManager
 * Source: https://github.com/angular/components/blob/main/src/cdk/a11y/key-manager/list-key-manager.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material CDK AriaDescriber
 * Source: https://github.com/angular/components/blob/main/src/cdk/a11y/aria-describer/aria-reference.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material CDK ARIA Describer
 * Source: https://github.com/angular/components/blob/main/src/cdk/a11y/aria-describer/aria-describer.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material CDK Live Announcer
 * Source: https://github.com/angular/components/blob/main/src/cdk/a11y/live-announcer/live-announcer.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material CDK Directionality
 * Source: https://github.com/angular/components/blob/main/src/cdk/bidi/directionality.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material CDK Breakpoints
 * Source: https://github.com/angular/components/blob/main/src/cdk/layout/breakpoints.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material Form Field Control
 * Source: https://github.com/angular/components/blob/main/src/material/form-field/form-field-control.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material Form Field
 * Source: https://github.com/angular/components/blob/main/src/material/form-field/form-field.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material Paginator
 * Source: https://github.com/angular/components/blob/main/src/material/paginator/paginator.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material CDK Text Field
 * Source: https://github.com/angular/components/blob/main/src/cdk/text-field/autosize.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/**
 * Adapted from Angular Material CDK Platform
 * Source: https://github.com/angular/components/blob/main/src/cdk/platform/platform.ts
 *
 * @license MIT
 * Copyright (c) 2025 Google LLC
 * See LICENSE file in the project root for full license text.
 */
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/material-color-utilities/utils/math_utils.js:
@material/material-color-utilities/utils/color_utils.js:
@material/material-color-utilities/hct/viewing_conditions.js:
@material/material-color-utilities/hct/cam16.js:
@material/material-color-utilities/hct/hct_solver.js:
@material/material-color-utilities/hct/hct.js:
@material/material-color-utilities/blend/blend.js:
@material/material-color-utilities/palettes/tonal_palette.js:
@material/material-color-utilities/palettes/core_palette.js:
@material/material-color-utilities/quantize/lab_point_provider.js:
@material/material-color-utilities/quantize/quantizer_wsmeans.js:
@material/material-color-utilities/quantize/quantizer_map.js:
@material/material-color-utilities/quantize/quantizer_wu.js:
@material/material-color-utilities/quantize/quantizer_celebi.js:
@material/material-color-utilities/scheme/scheme.js:
@material/material-color-utilities/scheme/scheme_android.js:
@material/material-color-utilities/score/score.js:
@material/material-color-utilities/utils/string_utils.js:
@material/material-color-utilities/utils/image_utils.js:
@material/material-color-utilities/utils/theme_utils.js:
@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
@material/material-color-utilities/dynamiccolor/dynamic_color.js:
@material/material-color-utilities/dynamiccolor/variant.js:
@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
@material/material-color-utilities/dynamiccolor/dynamic_scheme.js:
@material/material-color-utilities/scheme/scheme_expressive.js:
@material/material-color-utilities/scheme/scheme_fruit_salad.js:
@material/material-color-utilities/scheme/scheme_monochrome.js:
@material/material-color-utilities/scheme/scheme_neutral.js:
@material/material-color-utilities/scheme/scheme_rainbow.js:
@material/material-color-utilities/scheme/scheme_tonal_spot.js:
@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
@material/material-color-utilities/dynamiccolor/contrast_curve.js:
@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
@material/material-color-utilities/temperature/temperature_cache.js:
@material/material-color-utilities/scheme/scheme_content.js:
@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
