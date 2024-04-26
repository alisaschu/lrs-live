(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var fp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pp={exports:{}};/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(s,e){(function(t,n){s.exports=n()})(fp,function(){const t=new Map,n={set(x,c,g){t.has(x)||t.set(x,new Map);const E=t.get(x);E.has(c)||E.size===0?E.set(c,g):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(E.keys())[0]}.`)},get:(x,c)=>t.has(x)&&t.get(x).get(c)||null,remove(x,c){if(!t.has(x))return;const g=t.get(x);g.delete(c),g.size===0&&t.delete(x)}},i="transitionend",r=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(c,g)=>`#${CSS.escape(g)}`)),x),o=x=>{x.dispatchEvent(new Event(i))},a=x=>!(!x||typeof x!="object")&&(x.jquery!==void 0&&(x=x[0]),x.nodeType!==void 0),l=x=>a(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(r(x)):null,h=x=>{if(!a(x)||x.getClientRects().length===0)return!1;const c=getComputedStyle(x).getPropertyValue("visibility")==="visible",g=x.closest("details:not([open])");if(!g)return c;if(g!==x){const E=x.closest("summary");if(E&&E.parentNode!==g||E===null)return!1}return c},u=x=>!x||x.nodeType!==Node.ELEMENT_NODE||!!x.classList.contains("disabled")||(x.disabled!==void 0?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false"),d=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){const c=x.getRootNode();return c instanceof ShadowRoot?c:null}return x instanceof ShadowRoot?x:x.parentNode?d(x.parentNode):null},f=()=>{},_=x=>{x.offsetHeight},v=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,S=[],m=()=>document.documentElement.dir==="rtl",p=x=>{var c;c=()=>{const g=v();if(g){const E=x.NAME,U=g.fn[E];g.fn[E]=x.jQueryInterface,g.fn[E].Constructor=x,g.fn[E].noConflict=()=>(g.fn[E]=U,x.jQueryInterface)}},document.readyState==="loading"?(S.length||document.addEventListener("DOMContentLoaded",()=>{for(const g of S)g()}),S.push(c)):c()},A=(x,c=[],g=x)=>typeof x=="function"?x(...c):g,y=(x,c,g=!0)=>{if(!g)return void A(x);const E=(j=>{if(!j)return 0;let{transitionDuration:te,transitionDelay:fe}=window.getComputedStyle(j);const Me=Number.parseFloat(te),Ee=Number.parseFloat(fe);return Me||Ee?(te=te.split(",")[0],fe=fe.split(",")[0],1e3*(Number.parseFloat(te)+Number.parseFloat(fe))):0})(c)+5;let U=!1;const k=({target:j})=>{j===c&&(U=!0,c.removeEventListener(i,k),A(x))};c.addEventListener(i,k),setTimeout(()=>{U||o(c)},E)},R=(x,c,g,E)=>{const U=x.length;let k=x.indexOf(c);return k===-1?!g&&E?x[U-1]:x[0]:(k+=g?1:-1,E&&(k=(k+U)%U),x[Math.max(0,Math.min(k,U-1))])},D=/[^.]*(?=\..*)\.|.*/,P=/\..*/,L=/::\d+$/,q={};let ie=1;const b={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ce(x,c){return c&&`${c}::${ie++}`||x.uidEvent||ie++}function ae(x){const c=ce(x);return x.uidEvent=c,q[c]=q[c]||{},q[c]}function F(x,c,g=null){return Object.values(x).find(E=>E.callable===c&&E.delegationSelector===g)}function Q(x,c,g){const E=typeof c=="string",U=E?g:c||g;let k=J(x);return C.has(k)||(k=x),[E,U,k]}function $(x,c,g,E,U){if(typeof c!="string"||!x)return;let[k,j,te]=Q(c,g,E);c in b&&(j=(Xe=>function(Be){if(!Be.relatedTarget||Be.relatedTarget!==Be.delegateTarget&&!Be.delegateTarget.contains(Be.relatedTarget))return Xe.call(this,Be)})(j));const fe=ae(x),Me=fe[te]||(fe[te]={}),Ee=F(Me,j,k?g:null);if(Ee)return void(Ee.oneOff=Ee.oneOff&&U);const ye=ce(j,c.replace(D,"")),Je=k?function(Ne,Xe,Be){return function qe(St){const Rt=Ne.querySelectorAll(Xe);for(let{target:ot}=St;ot&&ot!==this;ot=ot.parentNode)for(const ft of Rt)if(ft===ot)return de(St,{delegateTarget:ot}),qe.oneOff&&O.off(Ne,St.type,Xe,Be),Be.apply(ot,[St])}}(x,g,j):function(Ne,Xe){return function Be(qe){return de(qe,{delegateTarget:Ne}),Be.oneOff&&O.off(Ne,qe.type,Xe),Xe.apply(Ne,[qe])}}(x,j);Je.delegationSelector=k?g:null,Je.callable=j,Je.oneOff=U,Je.uidEvent=ye,Me[ye]=Je,x.addEventListener(te,Je,k)}function ee(x,c,g,E,U){const k=F(c[g],E,U);k&&(x.removeEventListener(g,k,!!U),delete c[g][k.uidEvent])}function K(x,c,g,E){const U=c[g]||{};for(const[k,j]of Object.entries(U))k.includes(E)&&ee(x,c,g,j.callable,j.delegationSelector)}function J(x){return x=x.replace(P,""),b[x]||x}const O={on(x,c,g,E){$(x,c,g,E,!1)},one(x,c,g,E){$(x,c,g,E,!0)},off(x,c,g,E){if(typeof c!="string"||!x)return;const[U,k,j]=Q(c,g,E),te=j!==c,fe=ae(x),Me=fe[j]||{},Ee=c.startsWith(".");if(k===void 0){if(Ee)for(const ye of Object.keys(fe))K(x,fe,ye,c.slice(1));for(const[ye,Je]of Object.entries(Me)){const Ne=ye.replace(L,"");te&&!c.includes(Ne)||ee(x,fe,j,Je.callable,Je.delegationSelector)}}else{if(!Object.keys(Me).length)return;ee(x,fe,j,k,U?g:null)}},trigger(x,c,g){if(typeof c!="string"||!x)return null;const E=v();let U=null,k=!0,j=!0,te=!1;c!==J(c)&&E&&(U=E.Event(c,g),E(x).trigger(U),k=!U.isPropagationStopped(),j=!U.isImmediatePropagationStopped(),te=U.isDefaultPrevented());const fe=de(new Event(c,{bubbles:k,cancelable:!0}),g);return te&&fe.preventDefault(),j&&x.dispatchEvent(fe),fe.defaultPrevented&&U&&U.preventDefault(),fe}};function de(x,c={}){for(const[g,E]of Object.entries(c))try{x[g]=E}catch{Object.defineProperty(x,g,{configurable:!0,get:()=>E})}return x}function be(x){if(x==="true")return!0;if(x==="false")return!1;if(x===Number(x).toString())return Number(x);if(x===""||x==="null")return null;if(typeof x!="string")return x;try{return JSON.parse(decodeURIComponent(x))}catch{return x}}function Ge(x){return x.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const X={setDataAttribute(x,c,g){x.setAttribute(`data-bs-${Ge(c)}`,g)},removeDataAttribute(x,c){x.removeAttribute(`data-bs-${Ge(c)}`)},getDataAttributes(x){if(!x)return{};const c={},g=Object.keys(x.dataset).filter(E=>E.startsWith("bs")&&!E.startsWith("bsConfig"));for(const E of g){let U=E.replace(/^bs/,"");U=U.charAt(0).toLowerCase()+U.slice(1,U.length),c[U]=be(x.dataset[E])}return c},getDataAttribute:(x,c)=>be(x.getAttribute(`data-bs-${Ge(c)}`))};class oe{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,g){const E=a(g)?X.getDataAttribute(g,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...a(g)?X.getDataAttributes(g):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,g=this.constructor.DefaultType){for(const[U,k]of Object.entries(g)){const j=c[U],te=a(j)?"element":(E=j)==null?`${E}`:Object.prototype.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(k).test(te))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${U}" provided type "${te}" but expected type "${k}".`)}var E}}class ge extends oe{constructor(c,g){super(),(c=l(c))&&(this._element=c,this._config=this._getConfig(g),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),O.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,g,E=!0){y(c,g,E)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return n.get(l(c),this.DATA_KEY)}static getOrCreateInstance(c,g={}){return this.getInstance(c)||new this(c,typeof g=="object"?g:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const Ue=x=>{let c=x.getAttribute("data-bs-target");if(!c||c==="#"){let g=x.getAttribute("href");if(!g||!g.includes("#")&&!g.startsWith("."))return null;g.includes("#")&&!g.startsWith("#")&&(g=`#${g.split("#")[1]}`),c=g&&g!=="#"?g.trim():null}return c?c.split(",").map(g=>r(g)).join(","):null},ne={find:(x,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,x)),findOne:(x,c=document.documentElement)=>Element.prototype.querySelector.call(c,x),children:(x,c)=>[].concat(...x.children).filter(g=>g.matches(c)),parents(x,c){const g=[];let E=x.parentNode.closest(c);for(;E;)g.push(E),E=E.parentNode.closest(c);return g},prev(x,c){let g=x.previousElementSibling;for(;g;){if(g.matches(c))return[g];g=g.previousElementSibling}return[]},next(x,c){let g=x.nextElementSibling;for(;g;){if(g.matches(c))return[g];g=g.nextElementSibling}return[]},focusableChildren(x){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(g=>`${g}:not([tabindex^="-"])`).join(",");return this.find(c,x).filter(g=>!u(g)&&h(g))},getSelectorFromElement(x){const c=Ue(x);return c&&ne.findOne(c)?c:null},getElementFromSelector(x){const c=Ue(x);return c?ne.findOne(c):null},getMultipleElementsFromSelector(x){const c=Ue(x);return c?ne.find(c):[]}},Se=(x,c="hide")=>{const g=`click.dismiss${x.EVENT_KEY}`,E=x.NAME;O.on(document,g,`[data-bs-dismiss="${E}"]`,function(U){if(["A","AREA"].includes(this.tagName)&&U.preventDefault(),u(this))return;const k=ne.getElementFromSelector(this)||this.closest(`.${E}`);x.getOrCreateInstance(k)[c]()})},dt=".bs.alert",ke=`close${dt}`,z=`closed${dt}`;class It extends ge{static get NAME(){return"alert"}close(){if(O.trigger(this._element,ke).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),O.trigger(this._element,z),this.dispose()}static jQueryInterface(c){return this.each(function(){const g=It.getOrCreateInstance(this);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c](this)}})}}Se(It,"close"),p(It);const Ce='[data-bs-toggle="button"]';class Ve extends ge{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const g=Ve.getOrCreateInstance(this);c==="toggle"&&g[c]()})}}O.on(document,"click.bs.button.data-api",Ce,x=>{x.preventDefault();const c=x.target.closest(Ce);Ve.getOrCreateInstance(c).toggle()}),p(Ve);const Re=".bs.swipe",at=`touchstart${Re}`,Ze=`touchmove${Re}`,nt=`touchend${Re}`,Dt=`pointerdown${Re}`,w=`pointerup${Re}`,M={endCallback:null,leftCallback:null,rightCallback:null},Y={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Z extends oe{constructor(c,g){super(),this._element=c,c&&Z.isSupported()&&(this._config=this._getConfig(g),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return M}static get DefaultType(){return Y}static get NAME(){return"swipe"}dispose(){O.off(this._element,Re)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),A(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const g=c/this._deltaX;this._deltaX=0,g&&A(g>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(O.on(this._element,Dt,c=>this._start(c)),O.on(this._element,w,c=>this._end(c)),this._element.classList.add("pointer-event")):(O.on(this._element,at,c=>this._start(c)),O.on(this._element,Ze,c=>this._move(c)),O.on(this._element,nt,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const se=".bs.carousel",re=".data-api",Oe="next",Le="prev",he="left",me="right",$e=`slide${se}`,le=`slid${se}`,Ut=`keydown${se}`,it=`mouseenter${se}`,Pe=`mouseleave${se}`,Ae=`dragstart${se}`,we=`load${se}${re}`,lt=`click${se}${re}`,We="carousel",_t="active",N=".active",_e=".carousel-item",V=N+_e,ue={ArrowLeft:me,ArrowRight:he},xe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ut extends ge{constructor(c,g){super(c,g),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ne.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===We&&this.cycle()}static get Default(){return xe}static get DefaultType(){return rt}static get NAME(){return"carousel"}next(){this._slide(Oe)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(Le)}pause(){this._isSliding&&o(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?O.one(this._element,le,()=>this.cycle()):this.cycle())}to(c){const g=this._getItems();if(c>g.length-1||c<0)return;if(this._isSliding)return void O.one(this._element,le,()=>this.to(c));const E=this._getItemIndex(this._getActive());if(E===c)return;const U=c>E?Oe:Le;this._slide(U,g[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&O.on(this._element,Ut,c=>this._keydown(c)),this._config.pause==="hover"&&(O.on(this._element,it,()=>this.pause()),O.on(this._element,Pe,()=>this._maybeEnableCycle())),this._config.touch&&Z.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const g of ne.find(".carousel-item img",this._element))O.on(g,Ae,E=>E.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(he)),rightCallback:()=>this._slide(this._directionToOrder(me)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Z(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const g=ue[c.key];g&&(c.preventDefault(),this._slide(this._directionToOrder(g)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const g=ne.findOne(N,this._indicatorsElement);g.classList.remove(_t),g.removeAttribute("aria-current");const E=ne.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);E&&(E.classList.add(_t),E.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const g=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=g||this._config.defaultInterval}_slide(c,g=null){if(this._isSliding)return;const E=this._getActive(),U=c===Oe,k=g||R(this._getItems(),E,U,this._config.wrap);if(k===E)return;const j=this._getItemIndex(k),te=ye=>O.trigger(this._element,ye,{relatedTarget:k,direction:this._orderToDirection(c),from:this._getItemIndex(E),to:j});if(te($e).defaultPrevented||!E||!k)return;const fe=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(j),this._activeElement=k;const Me=U?"carousel-item-start":"carousel-item-end",Ee=U?"carousel-item-next":"carousel-item-prev";k.classList.add(Ee),_(k),E.classList.add(Me),k.classList.add(Me),this._queueCallback(()=>{k.classList.remove(Me,Ee),k.classList.add(_t),E.classList.remove(_t,Ee,Me),this._isSliding=!1,te(le)},E,this._isAnimated()),fe&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ne.findOne(V,this._element)}_getItems(){return ne.find(_e,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return m()?c===he?Le:Oe:c===he?Oe:Le}_orderToDirection(c){return m()?c===Le?he:me:c===Le?me:he}static jQueryInterface(c){return this.each(function(){const g=ut.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}}else g.to(c)})}}O.on(document,lt,"[data-bs-slide], [data-bs-slide-to]",function(x){const c=ne.getElementFromSelector(this);if(!c||!c.classList.contains(We))return;x.preventDefault();const g=ut.getOrCreateInstance(c),E=this.getAttribute("data-bs-slide-to");return E?(g.to(E),void g._maybeEnableCycle()):X.getDataAttribute(this,"slide")==="next"?(g.next(),void g._maybeEnableCycle()):(g.prev(),void g._maybeEnableCycle())}),O.on(window,we,()=>{const x=ne.find('[data-bs-ride="carousel"]');for(const c of x)ut.getOrCreateInstance(c)}),p(ut);const Nt=".bs.collapse",hn=`show${Nt}`,Mt=`shown${Nt}`,jt=`hide${Nt}`,xn=`hidden${Nt}`,Ar=`click${Nt}.data-api`,tr="show",Pn="collapse",Ni="collapsing",as=`:scope .${Pn} .${Pn}`,ls='[data-bs-toggle="collapse"]',wr={parent:null,toggle:!0},Do={parent:"(null|element)",toggle:"boolean"};class fi extends ge{constructor(c,g){super(c,g),this._isTransitioning=!1,this._triggerArray=[];const E=ne.find(ls);for(const U of E){const k=ne.getSelectorFromElement(U),j=ne.find(k).filter(te=>te===this._element);k!==null&&j.length&&this._triggerArray.push(U)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return wr}static get DefaultType(){return Do}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(U=>U!==this._element).map(U=>fi.getOrCreateInstance(U,{toggle:!1}))),c.length&&c[0]._isTransitioning||O.trigger(this._element,hn).defaultPrevented)return;for(const U of c)U.hide();const g=this._getDimension();this._element.classList.remove(Pn),this._element.classList.add(Ni),this._element.style[g]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const E=`scroll${g[0].toUpperCase()+g.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Ni),this._element.classList.add(Pn,tr),this._element.style[g]="",O.trigger(this._element,Mt)},this._element,!0),this._element.style[g]=`${this._element[E]}px`}hide(){if(this._isTransitioning||!this._isShown()||O.trigger(this._element,jt).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,_(this._element),this._element.classList.add(Ni),this._element.classList.remove(Pn,tr);for(const g of this._triggerArray){const E=ne.getElementFromSelector(g);E&&!this._isShown(E)&&this._addAriaAndCollapsedClass([g],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Ni),this._element.classList.add(Pn),O.trigger(this._element,xn)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(tr)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=l(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(ls);for(const g of c){const E=ne.getElementFromSelector(g);E&&this._addAriaAndCollapsedClass([g],this._isShown(E))}}_getFirstLevelChildren(c){const g=ne.find(as,this._config.parent);return ne.find(c,this._config.parent).filter(E=>!g.includes(E))}_addAriaAndCollapsedClass(c,g){if(c.length)for(const E of c)E.classList.toggle("collapsed",!g),E.setAttribute("aria-expanded",g)}static jQueryInterface(c){const g={};return typeof c=="string"&&/show|hide/.test(c)&&(g.toggle=!1),this.each(function(){const E=fi.getOrCreateInstance(this,g);if(typeof c=="string"){if(E[c]===void 0)throw new TypeError(`No method named "${c}"`);E[c]()}})}}O.on(document,Ar,ls,function(x){(x.target.tagName==="A"||x.delegateTarget&&x.delegateTarget.tagName==="A")&&x.preventDefault();for(const c of ne.getMultipleElementsFromSelector(this))fi.getOrCreateInstance(c,{toggle:!1}).toggle()}),p(fi);var Yt="top",T="bottom",B="right",H="left",W="auto",G=[Yt,T,B,H],ve="start",Te="end",Ie="clippingParents",De="viewport",Fe="popper",ze="reference",He=G.reduce(function(x,c){return x.concat([c+"-"+ve,c+"-"+Te])},[]),Ct=[].concat(G,[W]).reduce(function(x,c){return x.concat([c,c+"-"+ve,c+"-"+Te])},[]),Kt="beforeRead",Ft="read",yn="afterRead",wt="beforeMain",je="main",cs="afterMain",bt="beforeWrite",Hn="write",nr="afterWrite",pi=[Kt,Ft,yn,wt,je,cs,bt,Hn,nr];function un(x){return x?(x.nodeName||"").toLowerCase():null}function pt(x){if(x==null)return window;if(x.toString()!=="[object Window]"){var c=x.ownerDocument;return c&&c.defaultView||window}return x}function nn(x){return x instanceof pt(x).Element||x instanceof Element}function Zt(x){return x instanceof pt(x).HTMLElement||x instanceof HTMLElement}function Jt(x){return typeof ShadowRoot<"u"&&(x instanceof pt(x).ShadowRoot||x instanceof ShadowRoot)}const Ui={name:"applyStyles",enabled:!0,phase:"write",fn:function(x){var c=x.state;Object.keys(c.elements).forEach(function(g){var E=c.styles[g]||{},U=c.attributes[g]||{},k=c.elements[g];Zt(k)&&un(k)&&(Object.assign(k.style,E),Object.keys(U).forEach(function(j){var te=U[j];te===!1?k.removeAttribute(j):k.setAttribute(j,te===!0?"":te)}))})},effect:function(x){var c=x.state,g={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,g.popper),c.styles=g,c.elements.arrow&&Object.assign(c.elements.arrow.style,g.arrow),function(){Object.keys(c.elements).forEach(function(E){var U=c.elements[E],k=c.attributes[E]||{},j=Object.keys(c.styles.hasOwnProperty(E)?c.styles[E]:g[E]).reduce(function(te,fe){return te[fe]="",te},{});Zt(U)&&un(U)&&(Object.assign(U.style,j),Object.keys(k).forEach(function(te){U.removeAttribute(te)}))})}},requires:["computeStyles"]};function Mn(x){return x.split("-")[0]}var Gn=Math.max,Rr=Math.min,hs=Math.round;function No(){var x=navigator.userAgentData;return x!=null&&x.brands&&Array.isArray(x.brands)?x.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function Rl(){return!/^((?!chrome|android).)*safari/i.test(No())}function us(x,c,g){c===void 0&&(c=!1),g===void 0&&(g=!1);var E=x.getBoundingClientRect(),U=1,k=1;c&&Zt(x)&&(U=x.offsetWidth>0&&hs(E.width)/x.offsetWidth||1,k=x.offsetHeight>0&&hs(E.height)/x.offsetHeight||1);var j=(nn(x)?pt(x):window).visualViewport,te=!Rl()&&g,fe=(E.left+(te&&j?j.offsetLeft:0))/U,Me=(E.top+(te&&j?j.offsetTop:0))/k,Ee=E.width/U,ye=E.height/k;return{width:Ee,height:ye,top:Me,right:fe+Ee,bottom:Me+ye,left:fe,x:fe,y:Me}}function Uo(x){var c=us(x),g=x.offsetWidth,E=x.offsetHeight;return Math.abs(c.width-g)<=1&&(g=c.width),Math.abs(c.height-E)<=1&&(E=c.height),{x:x.offsetLeft,y:x.offsetTop,width:g,height:E}}function Cl(x,c){var g=c.getRootNode&&c.getRootNode();if(x.contains(c))return!0;if(g&&Jt(g)){var E=c;do{if(E&&x.isSameNode(E))return!0;E=E.parentNode||E.host}while(E)}return!1}function Jn(x){return pt(x).getComputedStyle(x)}function Td(x){return["table","td","th"].indexOf(un(x))>=0}function mi(x){return((nn(x)?x.ownerDocument:x.document)||window.document).documentElement}function Cr(x){return un(x)==="html"?x:x.assignedSlot||x.parentNode||(Jt(x)?x.host:null)||mi(x)}function Ll(x){return Zt(x)&&Jn(x).position!=="fixed"?x.offsetParent:null}function ir(x){for(var c=pt(x),g=Ll(x);g&&Td(g)&&Jn(g).position==="static";)g=Ll(g);return g&&(un(g)==="html"||un(g)==="body"&&Jn(g).position==="static")?c:g||function(E){var U=/firefox/i.test(No());if(/Trident/i.test(No())&&Zt(E)&&Jn(E).position==="fixed")return null;var k=Cr(E);for(Jt(k)&&(k=k.host);Zt(k)&&["html","body"].indexOf(un(k))<0;){var j=Jn(k);if(j.transform!=="none"||j.perspective!=="none"||j.contain==="paint"||["transform","perspective"].indexOf(j.willChange)!==-1||U&&j.willChange==="filter"||U&&j.filter&&j.filter!=="none")return k;k=k.parentNode}return null}(x)||c}function Oo(x){return["top","bottom"].indexOf(x)>=0?"x":"y"}function sr(x,c,g){return Gn(x,Rr(c,g))}function Pl(x){return Object.assign({},{top:0,right:0,bottom:0,left:0},x)}function Il(x,c){return c.reduce(function(g,E){return g[E]=x,g},{})}const Dl={name:"arrow",enabled:!0,phase:"main",fn:function(x){var c,g=x.state,E=x.name,U=x.options,k=g.elements.arrow,j=g.modifiersData.popperOffsets,te=Mn(g.placement),fe=Oo(te),Me=[H,B].indexOf(te)>=0?"height":"width";if(k&&j){var Ee=function(Et,xt){return Pl(typeof(Et=typeof Et=="function"?Et(Object.assign({},xt.rects,{placement:xt.placement})):Et)!="number"?Et:Il(Et,G))}(U.padding,g),ye=Uo(k),Je=fe==="y"?Yt:H,Ne=fe==="y"?T:B,Xe=g.rects.reference[Me]+g.rects.reference[fe]-j[fe]-g.rects.popper[Me],Be=j[fe]-g.rects.reference[fe],qe=ir(k),St=qe?fe==="y"?qe.clientHeight||0:qe.clientWidth||0:0,Rt=Xe/2-Be/2,ot=Ee[Je],ft=St-ye[Me]-Ee[Ne],Qe=St/2-ye[Me]/2+Rt,ht=sr(ot,Qe,ft),vt=fe;g.modifiersData[E]=((c={})[vt]=ht,c.centerOffset=ht-Qe,c)}},effect:function(x){var c=x.state,g=x.options.element,E=g===void 0?"[data-popper-arrow]":g;E!=null&&(typeof E!="string"||(E=c.elements.popper.querySelector(E)))&&Cl(c.elements.popper,E)&&(c.elements.arrow=E)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ds(x){return x.split("-")[1]}var Ad={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Nl(x){var c,g=x.popper,E=x.popperRect,U=x.placement,k=x.variation,j=x.offsets,te=x.position,fe=x.gpuAcceleration,Me=x.adaptive,Ee=x.roundOffsets,ye=x.isFixed,Je=j.x,Ne=Je===void 0?0:Je,Xe=j.y,Be=Xe===void 0?0:Xe,qe=typeof Ee=="function"?Ee({x:Ne,y:Be}):{x:Ne,y:Be};Ne=qe.x,Be=qe.y;var St=j.hasOwnProperty("x"),Rt=j.hasOwnProperty("y"),ot=H,ft=Yt,Qe=window;if(Me){var ht=ir(g),vt="clientHeight",Et="clientWidth";ht===pt(g)&&Jn(ht=mi(g)).position!=="static"&&te==="absolute"&&(vt="scrollHeight",Et="scrollWidth"),(U===Yt||(U===H||U===B)&&k===Te)&&(ft=T,Be-=(ye&&ht===Qe&&Qe.visualViewport?Qe.visualViewport.height:ht[vt])-E.height,Be*=fe?1:-1),U!==H&&(U!==Yt&&U!==T||k!==Te)||(ot=B,Ne-=(ye&&ht===Qe&&Qe.visualViewport?Qe.visualViewport.width:ht[Et])-E.width,Ne*=fe?1:-1)}var xt,Bt=Object.assign({position:te},Me&&Ad),mn=Ee===!0?function(Dn,sn){var En=Dn.x,bn=Dn.y,Ot=sn.devicePixelRatio||1;return{x:hs(En*Ot)/Ot||0,y:hs(bn*Ot)/Ot||0}}({x:Ne,y:Be},pt(g)):{x:Ne,y:Be};return Ne=mn.x,Be=mn.y,fe?Object.assign({},Bt,((xt={})[ft]=Rt?"0":"",xt[ot]=St?"0":"",xt.transform=(Qe.devicePixelRatio||1)<=1?"translate("+Ne+"px, "+Be+"px)":"translate3d("+Ne+"px, "+Be+"px, 0)",xt)):Object.assign({},Bt,((c={})[ft]=Rt?Be+"px":"",c[ot]=St?Ne+"px":"",c.transform="",c))}const Fo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(x){var c=x.state,g=x.options,E=g.gpuAcceleration,U=E===void 0||E,k=g.adaptive,j=k===void 0||k,te=g.roundOffsets,fe=te===void 0||te,Me={placement:Mn(c.placement),variation:ds(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:U,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,Nl(Object.assign({},Me,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:j,roundOffsets:fe})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,Nl(Object.assign({},Me,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:fe})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var Lr={passive:!0};const Bo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(x){var c=x.state,g=x.instance,E=x.options,U=E.scroll,k=U===void 0||U,j=E.resize,te=j===void 0||j,fe=pt(c.elements.popper),Me=[].concat(c.scrollParents.reference,c.scrollParents.popper);return k&&Me.forEach(function(Ee){Ee.addEventListener("scroll",g.update,Lr)}),te&&fe.addEventListener("resize",g.update,Lr),function(){k&&Me.forEach(function(Ee){Ee.removeEventListener("scroll",g.update,Lr)}),te&&fe.removeEventListener("resize",g.update,Lr)}},data:{}};var wd={left:"right",right:"left",bottom:"top",top:"bottom"};function Pr(x){return x.replace(/left|right|bottom|top/g,function(c){return wd[c]})}var Rd={start:"end",end:"start"};function Ul(x){return x.replace(/start|end/g,function(c){return Rd[c]})}function ko(x){var c=pt(x);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function zo(x){return us(mi(x)).left+ko(x).scrollLeft}function Ho(x){var c=Jn(x),g=c.overflow,E=c.overflowX,U=c.overflowY;return/auto|scroll|overlay|hidden/.test(g+U+E)}function Ol(x){return["html","body","#document"].indexOf(un(x))>=0?x.ownerDocument.body:Zt(x)&&Ho(x)?x:Ol(Cr(x))}function rr(x,c){var g;c===void 0&&(c=[]);var E=Ol(x),U=E===((g=x.ownerDocument)==null?void 0:g.body),k=pt(E),j=U?[k].concat(k.visualViewport||[],Ho(E)?E:[]):E,te=c.concat(j);return U?te:te.concat(rr(Cr(j)))}function Go(x){return Object.assign({},x,{left:x.x,top:x.y,right:x.x+x.width,bottom:x.y+x.height})}function Fl(x,c,g){return c===De?Go(function(E,U){var k=pt(E),j=mi(E),te=k.visualViewport,fe=j.clientWidth,Me=j.clientHeight,Ee=0,ye=0;if(te){fe=te.width,Me=te.height;var Je=Rl();(Je||!Je&&U==="fixed")&&(Ee=te.offsetLeft,ye=te.offsetTop)}return{width:fe,height:Me,x:Ee+zo(E),y:ye}}(x,g)):nn(c)?function(E,U){var k=us(E,!1,U==="fixed");return k.top=k.top+E.clientTop,k.left=k.left+E.clientLeft,k.bottom=k.top+E.clientHeight,k.right=k.left+E.clientWidth,k.width=E.clientWidth,k.height=E.clientHeight,k.x=k.left,k.y=k.top,k}(c,g):Go(function(E){var U,k=mi(E),j=ko(E),te=(U=E.ownerDocument)==null?void 0:U.body,fe=Gn(k.scrollWidth,k.clientWidth,te?te.scrollWidth:0,te?te.clientWidth:0),Me=Gn(k.scrollHeight,k.clientHeight,te?te.scrollHeight:0,te?te.clientHeight:0),Ee=-j.scrollLeft+zo(E),ye=-j.scrollTop;return Jn(te||k).direction==="rtl"&&(Ee+=Gn(k.clientWidth,te?te.clientWidth:0)-fe),{width:fe,height:Me,x:Ee,y:ye}}(mi(x)))}function Bl(x){var c,g=x.reference,E=x.element,U=x.placement,k=U?Mn(U):null,j=U?ds(U):null,te=g.x+g.width/2-E.width/2,fe=g.y+g.height/2-E.height/2;switch(k){case Yt:c={x:te,y:g.y-E.height};break;case T:c={x:te,y:g.y+g.height};break;case B:c={x:g.x+g.width,y:fe};break;case H:c={x:g.x-E.width,y:fe};break;default:c={x:g.x,y:g.y}}var Me=k?Oo(k):null;if(Me!=null){var Ee=Me==="y"?"height":"width";switch(j){case ve:c[Me]=c[Me]-(g[Ee]/2-E[Ee]/2);break;case Te:c[Me]=c[Me]+(g[Ee]/2-E[Ee]/2)}}return c}function fs(x,c){c===void 0&&(c={});var g=c,E=g.placement,U=E===void 0?x.placement:E,k=g.strategy,j=k===void 0?x.strategy:k,te=g.boundary,fe=te===void 0?Ie:te,Me=g.rootBoundary,Ee=Me===void 0?De:Me,ye=g.elementContext,Je=ye===void 0?Fe:ye,Ne=g.altBoundary,Xe=Ne!==void 0&&Ne,Be=g.padding,qe=Be===void 0?0:Be,St=Pl(typeof qe!="number"?qe:Il(qe,G)),Rt=Je===Fe?ze:Fe,ot=x.rects.popper,ft=x.elements[Xe?Rt:Je],Qe=function(sn,En,bn,Ot){var Vn=En==="clippingParents"?function(Tt){var rn=rr(Cr(Tt)),Tn=["absolute","fixed"].indexOf(Jn(Tt).position)>=0&&Zt(Tt)?ir(Tt):Tt;return nn(Tn)?rn.filter(function(_i){return nn(_i)&&Cl(_i,Tn)&&un(_i)!=="body"}):[]}(sn):[].concat(En),Wn=[].concat(Vn,[bn]),gs=Wn[0],Gt=Wn.reduce(function(Tt,rn){var Tn=Fl(sn,rn,Ot);return Tt.top=Gn(Tn.top,Tt.top),Tt.right=Rr(Tn.right,Tt.right),Tt.bottom=Rr(Tn.bottom,Tt.bottom),Tt.left=Gn(Tn.left,Tt.left),Tt},Fl(sn,gs,Ot));return Gt.width=Gt.right-Gt.left,Gt.height=Gt.bottom-Gt.top,Gt.x=Gt.left,Gt.y=Gt.top,Gt}(nn(ft)?ft:ft.contextElement||mi(x.elements.popper),fe,Ee,j),ht=us(x.elements.reference),vt=Bl({reference:ht,element:ot,strategy:"absolute",placement:U}),Et=Go(Object.assign({},ot,vt)),xt=Je===Fe?Et:ht,Bt={top:Qe.top-xt.top+St.top,bottom:xt.bottom-Qe.bottom+St.bottom,left:Qe.left-xt.left+St.left,right:xt.right-Qe.right+St.right},mn=x.modifiersData.offset;if(Je===Fe&&mn){var Dn=mn[U];Object.keys(Bt).forEach(function(sn){var En=[B,T].indexOf(sn)>=0?1:-1,bn=[Yt,T].indexOf(sn)>=0?"y":"x";Bt[sn]+=Dn[bn]*En})}return Bt}function Cd(x,c){c===void 0&&(c={});var g=c,E=g.placement,U=g.boundary,k=g.rootBoundary,j=g.padding,te=g.flipVariations,fe=g.allowedAutoPlacements,Me=fe===void 0?Ct:fe,Ee=ds(E),ye=Ee?te?He:He.filter(function(Xe){return ds(Xe)===Ee}):G,Je=ye.filter(function(Xe){return Me.indexOf(Xe)>=0});Je.length===0&&(Je=ye);var Ne=Je.reduce(function(Xe,Be){return Xe[Be]=fs(x,{placement:Be,boundary:U,rootBoundary:k,padding:j})[Mn(Be)],Xe},{});return Object.keys(Ne).sort(function(Xe,Be){return Ne[Xe]-Ne[Be]})}const kl={name:"flip",enabled:!0,phase:"main",fn:function(x){var c=x.state,g=x.options,E=x.name;if(!c.modifiersData[E]._skip){for(var U=g.mainAxis,k=U===void 0||U,j=g.altAxis,te=j===void 0||j,fe=g.fallbackPlacements,Me=g.padding,Ee=g.boundary,ye=g.rootBoundary,Je=g.altBoundary,Ne=g.flipVariations,Xe=Ne===void 0||Ne,Be=g.allowedAutoPlacements,qe=c.options.placement,St=Mn(qe),Rt=fe||(St!==qe&&Xe?function(Tt){if(Mn(Tt)===W)return[];var rn=Pr(Tt);return[Ul(Tt),rn,Ul(rn)]}(qe):[Pr(qe)]),ot=[qe].concat(Rt).reduce(function(Tt,rn){return Tt.concat(Mn(rn)===W?Cd(c,{placement:rn,boundary:Ee,rootBoundary:ye,padding:Me,flipVariations:Xe,allowedAutoPlacements:Be}):rn)},[]),ft=c.rects.reference,Qe=c.rects.popper,ht=new Map,vt=!0,Et=ot[0],xt=0;xt<ot.length;xt++){var Bt=ot[xt],mn=Mn(Bt),Dn=ds(Bt)===ve,sn=[Yt,T].indexOf(mn)>=0,En=sn?"width":"height",bn=fs(c,{placement:Bt,boundary:Ee,rootBoundary:ye,altBoundary:Je,padding:Me}),Ot=sn?Dn?B:H:Dn?T:Yt;ft[En]>Qe[En]&&(Ot=Pr(Ot));var Vn=Pr(Ot),Wn=[];if(k&&Wn.push(bn[mn]<=0),te&&Wn.push(bn[Ot]<=0,bn[Vn]<=0),Wn.every(function(Tt){return Tt})){Et=Bt,vt=!1;break}ht.set(Bt,Wn)}if(vt)for(var gs=function(Tt){var rn=ot.find(function(Tn){var _i=ht.get(Tn);if(_i)return _i.slice(0,Tt).every(function(zr){return zr})});if(rn)return Et=rn,"break"},Gt=Xe?3:1;Gt>0&&gs(Gt)!=="break";Gt--);c.placement!==Et&&(c.modifiersData[E]._skip=!0,c.placement=Et,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function zl(x,c,g){return g===void 0&&(g={x:0,y:0}),{top:x.top-c.height-g.y,right:x.right-c.width+g.x,bottom:x.bottom-c.height+g.y,left:x.left-c.width-g.x}}function Hl(x){return[Yt,B,T,H].some(function(c){return x[c]>=0})}const Gl={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(x){var c=x.state,g=x.name,E=c.rects.reference,U=c.rects.popper,k=c.modifiersData.preventOverflow,j=fs(c,{elementContext:"reference"}),te=fs(c,{altBoundary:!0}),fe=zl(j,E),Me=zl(te,U,k),Ee=Hl(fe),ye=Hl(Me);c.modifiersData[g]={referenceClippingOffsets:fe,popperEscapeOffsets:Me,isReferenceHidden:Ee,hasPopperEscaped:ye},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":Ee,"data-popper-escaped":ye})}},Vl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(x){var c=x.state,g=x.options,E=x.name,U=g.offset,k=U===void 0?[0,0]:U,j=Ct.reduce(function(Ee,ye){return Ee[ye]=function(Je,Ne,Xe){var Be=Mn(Je),qe=[H,Yt].indexOf(Be)>=0?-1:1,St=typeof Xe=="function"?Xe(Object.assign({},Ne,{placement:Je})):Xe,Rt=St[0],ot=St[1];return Rt=Rt||0,ot=(ot||0)*qe,[H,B].indexOf(Be)>=0?{x:ot,y:Rt}:{x:Rt,y:ot}}(ye,c.rects,k),Ee},{}),te=j[c.placement],fe=te.x,Me=te.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=fe,c.modifiersData.popperOffsets.y+=Me),c.modifiersData[E]=j}},Vo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(x){var c=x.state,g=x.name;c.modifiersData[g]=Bl({reference:c.rects.reference,element:c.rects.popper,strategy:"absolute",placement:c.placement})},data:{}},Wl={name:"preventOverflow",enabled:!0,phase:"main",fn:function(x){var c=x.state,g=x.options,E=x.name,U=g.mainAxis,k=U===void 0||U,j=g.altAxis,te=j!==void 0&&j,fe=g.boundary,Me=g.rootBoundary,Ee=g.altBoundary,ye=g.padding,Je=g.tether,Ne=Je===void 0||Je,Xe=g.tetherOffset,Be=Xe===void 0?0:Xe,qe=fs(c,{boundary:fe,rootBoundary:Me,padding:ye,altBoundary:Ee}),St=Mn(c.placement),Rt=ds(c.placement),ot=!Rt,ft=Oo(St),Qe=ft==="x"?"y":"x",ht=c.modifiersData.popperOffsets,vt=c.rects.reference,Et=c.rects.popper,xt=typeof Be=="function"?Be(Object.assign({},c.rects,{placement:c.placement})):Be,Bt=typeof xt=="number"?{mainAxis:xt,altAxis:xt}:Object.assign({mainAxis:0,altAxis:0},xt),mn=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,Dn={x:0,y:0};if(ht){if(k){var sn,En=ft==="y"?Yt:H,bn=ft==="y"?T:B,Ot=ft==="y"?"height":"width",Vn=ht[ft],Wn=Vn+qe[En],gs=Vn-qe[bn],Gt=Ne?-Et[Ot]/2:0,Tt=Rt===ve?vt[Ot]:Et[Ot],rn=Rt===ve?-Et[Ot]:-vt[Ot],Tn=c.elements.arrow,_i=Ne&&Tn?Uo(Tn):{width:0,height:0},zr=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Lc=zr[En],Pc=zr[bn],Hr=sr(0,vt[Ot],_i[Ot]),rp=ot?vt[Ot]/2-Gt-Hr-Lc-Bt.mainAxis:Tt-Hr-Lc-Bt.mainAxis,op=ot?-vt[Ot]/2+Gt+Hr+Pc+Bt.mainAxis:rn+Hr+Pc+Bt.mainAxis,na=c.elements.arrow&&ir(c.elements.arrow),ap=na?ft==="y"?na.clientTop||0:na.clientLeft||0:0,Ic=(sn=mn==null?void 0:mn[ft])!=null?sn:0,lp=Vn+op-Ic,Dc=sr(Ne?Rr(Wn,Vn+rp-Ic-ap):Wn,Vn,Ne?Gn(gs,lp):gs);ht[ft]=Dc,Dn[ft]=Dc-Vn}if(te){var Nc,cp=ft==="x"?Yt:H,hp=ft==="x"?T:B,Vi=ht[Qe],Gr=Qe==="y"?"height":"width",Uc=Vi+qe[cp],Oc=Vi-qe[hp],ia=[Yt,H].indexOf(St)!==-1,Fc=(Nc=mn==null?void 0:mn[Qe])!=null?Nc:0,Bc=ia?Uc:Vi-vt[Gr]-Et[Gr]-Fc+Bt.altAxis,kc=ia?Vi+vt[Gr]+Et[Gr]-Fc-Bt.altAxis:Oc,zc=Ne&&ia?function(up,dp,sa){var Hc=sr(up,dp,sa);return Hc>sa?sa:Hc}(Bc,Vi,kc):sr(Ne?Bc:Uc,Vi,Ne?kc:Oc);ht[Qe]=zc,Dn[Qe]=zc-Vi}c.modifiersData[E]=Dn}},requiresIfExists:["offset"]};function Ld(x,c,g){g===void 0&&(g=!1);var E,U,k=Zt(c),j=Zt(c)&&function(ye){var Je=ye.getBoundingClientRect(),Ne=hs(Je.width)/ye.offsetWidth||1,Xe=hs(Je.height)/ye.offsetHeight||1;return Ne!==1||Xe!==1}(c),te=mi(c),fe=us(x,j,g),Me={scrollLeft:0,scrollTop:0},Ee={x:0,y:0};return(k||!k&&!g)&&((un(c)!=="body"||Ho(te))&&(Me=(E=c)!==pt(E)&&Zt(E)?{scrollLeft:(U=E).scrollLeft,scrollTop:U.scrollTop}:ko(E)),Zt(c)?((Ee=us(c,!0)).x+=c.clientLeft,Ee.y+=c.clientTop):te&&(Ee.x=zo(te))),{x:fe.left+Me.scrollLeft-Ee.x,y:fe.top+Me.scrollTop-Ee.y,width:fe.width,height:fe.height}}function Pd(x){var c=new Map,g=new Set,E=[];function U(k){g.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(j){if(!g.has(j)){var te=c.get(j);te&&U(te)}}),E.push(k)}return x.forEach(function(k){c.set(k.name,k)}),x.forEach(function(k){g.has(k.name)||U(k)}),E}var Xl={placement:"bottom",modifiers:[],strategy:"absolute"};function ql(){for(var x=arguments.length,c=new Array(x),g=0;g<x;g++)c[g]=arguments[g];return!c.some(function(E){return!(E&&typeof E.getBoundingClientRect=="function")})}function Ir(x){x===void 0&&(x={});var c=x,g=c.defaultModifiers,E=g===void 0?[]:g,U=c.defaultOptions,k=U===void 0?Xl:U;return function(j,te,fe){fe===void 0&&(fe=k);var Me,Ee,ye={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xl,k),modifiersData:{},elements:{reference:j,popper:te},attributes:{},styles:{}},Je=[],Ne=!1,Xe={state:ye,setOptions:function(qe){var St=typeof qe=="function"?qe(ye.options):qe;Be(),ye.options=Object.assign({},k,ye.options,St),ye.scrollParents={reference:nn(j)?rr(j):j.contextElement?rr(j.contextElement):[],popper:rr(te)};var Rt,ot,ft=function(Qe){var ht=Pd(Qe);return pi.reduce(function(vt,Et){return vt.concat(ht.filter(function(xt){return xt.phase===Et}))},[])}((Rt=[].concat(E,ye.options.modifiers),ot=Rt.reduce(function(Qe,ht){var vt=Qe[ht.name];return Qe[ht.name]=vt?Object.assign({},vt,ht,{options:Object.assign({},vt.options,ht.options),data:Object.assign({},vt.data,ht.data)}):ht,Qe},{}),Object.keys(ot).map(function(Qe){return ot[Qe]})));return ye.orderedModifiers=ft.filter(function(Qe){return Qe.enabled}),ye.orderedModifiers.forEach(function(Qe){var ht=Qe.name,vt=Qe.options,Et=vt===void 0?{}:vt,xt=Qe.effect;if(typeof xt=="function"){var Bt=xt({state:ye,name:ht,instance:Xe,options:Et});Je.push(Bt||function(){})}}),Xe.update()},forceUpdate:function(){if(!Ne){var qe=ye.elements,St=qe.reference,Rt=qe.popper;if(ql(St,Rt)){ye.rects={reference:Ld(St,ir(Rt),ye.options.strategy==="fixed"),popper:Uo(Rt)},ye.reset=!1,ye.placement=ye.options.placement,ye.orderedModifiers.forEach(function(xt){return ye.modifiersData[xt.name]=Object.assign({},xt.data)});for(var ot=0;ot<ye.orderedModifiers.length;ot++)if(ye.reset!==!0){var ft=ye.orderedModifiers[ot],Qe=ft.fn,ht=ft.options,vt=ht===void 0?{}:ht,Et=ft.name;typeof Qe=="function"&&(ye=Qe({state:ye,options:vt,name:Et,instance:Xe})||ye)}else ye.reset=!1,ot=-1}}},update:(Me=function(){return new Promise(function(qe){Xe.forceUpdate(),qe(ye)})},function(){return Ee||(Ee=new Promise(function(qe){Promise.resolve().then(function(){Ee=void 0,qe(Me())})})),Ee}),destroy:function(){Be(),Ne=!0}};if(!ql(j,te))return Xe;function Be(){Je.forEach(function(qe){return qe()}),Je=[]}return Xe.setOptions(fe).then(function(qe){!Ne&&fe.onFirstUpdate&&fe.onFirstUpdate(qe)}),Xe}}var Id=Ir(),Dd=Ir({defaultModifiers:[Bo,Vo,Fo,Ui]}),Wo=Ir({defaultModifiers:[Bo,Vo,Fo,Ui,Vl,kl,Wl,Dl,Gl]});const jl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:cs,afterRead:yn,afterWrite:nr,applyStyles:Ui,arrow:Dl,auto:W,basePlacements:G,beforeMain:wt,beforeRead:Kt,beforeWrite:bt,bottom:T,clippingParents:Ie,computeStyles:Fo,createPopper:Wo,createPopperBase:Id,createPopperLite:Dd,detectOverflow:fs,end:Te,eventListeners:Bo,flip:kl,hide:Gl,left:H,main:je,modifierPhases:pi,offset:Vl,placements:Ct,popper:Fe,popperGenerator:Ir,popperOffsets:Vo,preventOverflow:Wl,read:Ft,reference:ze,right:B,start:ve,top:Yt,variationPlacements:He,viewport:De,write:Hn},Symbol.toStringTag,{value:"Module"})),Yl="dropdown",Oi=".bs.dropdown",Xo=".data-api",Nd="ArrowUp",$l="ArrowDown",Ud=`hide${Oi}`,Od=`hidden${Oi}`,Fd=`show${Oi}`,Bd=`shown${Oi}`,Kl=`click${Oi}${Xo}`,Zl=`keydown${Oi}${Xo}`,kd=`keyup${Oi}${Xo}`,ps="show",Fi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',zd=`${Fi}.${ps}`,Dr=".dropdown-menu",Hd=m()?"top-end":"top-start",Gd=m()?"top-start":"top-end",Vd=m()?"bottom-end":"bottom-start",Wd=m()?"bottom-start":"bottom-end",Xd=m()?"left-start":"right-start",qd=m()?"right-start":"left-start",jd={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Yd={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class In extends ge{constructor(c,g){super(c,g),this._popper=null,this._parent=this._element.parentNode,this._menu=ne.next(this._element,Dr)[0]||ne.prev(this._element,Dr)[0]||ne.findOne(Dr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return jd}static get DefaultType(){return Yd}static get NAME(){return Yl}toggle(){return this._isShown()?this.hide():this.show()}show(){if(u(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!O.trigger(this._element,Fd,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const g of[].concat(...document.body.children))O.on(g,"mouseover",f);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ps),this._element.classList.add(ps),O.trigger(this._element,Bd,c)}}hide(){if(u(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!O.trigger(this._element,Ud,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const g of[].concat(...document.body.children))O.off(g,"mouseover",f);this._popper&&this._popper.destroy(),this._menu.classList.remove(ps),this._element.classList.remove(ps),this._element.setAttribute("aria-expanded","false"),X.removeDataAttribute(this._menu,"popper"),O.trigger(this._element,Od,c)}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!a(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${Yl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(jl===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:a(this._config.reference)?c=l(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const g=this._getPopperConfig();this._popper=Wo(c,this._menu,g)}_isShown(){return this._menu.classList.contains(ps)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return Xd;if(c.classList.contains("dropstart"))return qd;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const g=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?g?Gd:Hd:g?Wd:Vd}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(g=>Number.parseInt(g,10)):typeof c=="function"?g=>c(g,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(X.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...A(this._config.popperConfig,[c])}}_selectMenuItem({key:c,target:g}){const E=ne.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(U=>h(U));E.length&&R(E,g,c===$l,!E.includes(g)).focus()}static jQueryInterface(c){return this.each(function(){const g=In.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const g=ne.find(zd);for(const E of g){const U=In.getInstance(E);if(!U||U._config.autoClose===!1)continue;const k=c.composedPath(),j=k.includes(U._menu);if(k.includes(U._element)||U._config.autoClose==="inside"&&!j||U._config.autoClose==="outside"&&j||U._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const te={relatedTarget:U._element};c.type==="click"&&(te.clickEvent=c),U._completeHide(te)}}static dataApiKeydownHandler(c){const g=/input|textarea/i.test(c.target.tagName),E=c.key==="Escape",U=[Nd,$l].includes(c.key);if(!U&&!E||g&&!E)return;c.preventDefault();const k=this.matches(Fi)?this:ne.prev(this,Fi)[0]||ne.next(this,Fi)[0]||ne.findOne(Fi,c.delegateTarget.parentNode),j=In.getOrCreateInstance(k);if(U)return c.stopPropagation(),j.show(),void j._selectMenuItem(c);j._isShown()&&(c.stopPropagation(),j.hide(),k.focus())}}O.on(document,Zl,Fi,In.dataApiKeydownHandler),O.on(document,Zl,Dr,In.dataApiKeydownHandler),O.on(document,Kl,In.clearMenus),O.on(document,kd,In.clearMenus),O.on(document,Kl,Fi,function(x){x.preventDefault(),In.getOrCreateInstance(this).toggle()}),p(In);const Jl="backdrop",Ql="show",ec=`mousedown.bs.${Jl}`,$d={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Kd={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class tc extends oe{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return $d}static get DefaultType(){return Kd}static get NAME(){return Jl}show(c){if(!this._config.isVisible)return void A(c);this._append();const g=this._getElement();this._config.isAnimated&&_(g),g.classList.add(Ql),this._emulateAnimation(()=>{A(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(Ql),this._emulateAnimation(()=>{this.dispose(),A(c)})):A(c)}dispose(){this._isAppended&&(O.off(this._element,ec),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=l(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),O.on(c,ec,()=>{A(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){y(c,this._getElement(),this._config.isAnimated)}}const Nr=".bs.focustrap",Zd=`focusin${Nr}`,Jd=`keydown.tab${Nr}`,nc="backward",Qd={autofocus:!0,trapElement:null},ef={autofocus:"boolean",trapElement:"element"};class ic extends oe{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Qd}static get DefaultType(){return ef}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),O.off(document,Nr),O.on(document,Zd,c=>this._handleFocusin(c)),O.on(document,Jd,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,O.off(document,Nr))}_handleFocusin(c){const{trapElement:g}=this._config;if(c.target===document||c.target===g||g.contains(c.target))return;const E=ne.focusableChildren(g);E.length===0?g.focus():this._lastTabNavDirection===nc?E[E.length-1].focus():E[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?nc:"forward")}}const sc=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",rc=".sticky-top",Ur="padding-right",oc="margin-right";class qo{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ur,g=>g+c),this._setElementAttributes(sc,Ur,g=>g+c),this._setElementAttributes(rc,oc,g=>g-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ur),this._resetElementAttributes(sc,Ur),this._resetElementAttributes(rc,oc)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,g,E){const U=this.getWidth();this._applyManipulationCallback(c,k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+U)return;this._saveInitialAttribute(k,g);const j=window.getComputedStyle(k).getPropertyValue(g);k.style.setProperty(g,`${E(Number.parseFloat(j))}px`)})}_saveInitialAttribute(c,g){const E=c.style.getPropertyValue(g);E&&X.setDataAttribute(c,g,E)}_resetElementAttributes(c,g){this._applyManipulationCallback(c,E=>{const U=X.getDataAttribute(E,g);U!==null?(X.removeDataAttribute(E,g),E.style.setProperty(g,U)):E.style.removeProperty(g)})}_applyManipulationCallback(c,g){if(a(c))g(c);else for(const E of ne.find(c,this._element))g(E)}}const Sn=".bs.modal",tf=`hide${Sn}`,nf=`hidePrevented${Sn}`,ac=`hidden${Sn}`,lc=`show${Sn}`,sf=`shown${Sn}`,rf=`resize${Sn}`,of=`click.dismiss${Sn}`,af=`mousedown.dismiss${Sn}`,lf=`keydown.dismiss${Sn}`,cf=`click${Sn}.data-api`,cc="modal-open",hc="show",jo="modal-static",hf={backdrop:!0,focus:!0,keyboard:!0},uf={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Bi extends ge{constructor(c,g){super(c,g),this._dialog=ne.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new qo,this._addEventListeners()}static get Default(){return hf}static get DefaultType(){return uf}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||O.trigger(this._element,lc,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(cc),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(O.trigger(this._element,tf).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(hc),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){O.off(window,Sn),O.off(this._dialog,Sn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new tc({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ic({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const g=ne.findOne(".modal-body",this._dialog);g&&(g.scrollTop=0),_(this._element),this._element.classList.add(hc),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,O.trigger(this._element,sf,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){O.on(this._element,lf,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),O.on(window,rf,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),O.on(this._element,af,c=>{O.one(this._element,of,g=>{this._element===c.target&&this._element===g.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(cc),this._resetAdjustments(),this._scrollBar.reset(),O.trigger(this._element,ac)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(O.trigger(this._element,nf).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,g=this._element.style.overflowY;g==="hidden"||this._element.classList.contains(jo)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(jo),this._queueCallback(()=>{this._element.classList.remove(jo),this._queueCallback(()=>{this._element.style.overflowY=g},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,g=this._scrollBar.getWidth(),E=g>0;if(E&&!c){const U=m()?"paddingLeft":"paddingRight";this._element.style[U]=`${g}px`}if(!E&&c){const U=m()?"paddingRight":"paddingLeft";this._element.style[U]=`${g}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,g){return this.each(function(){const E=Bi.getOrCreateInstance(this,c);if(typeof c=="string"){if(E[c]===void 0)throw new TypeError(`No method named "${c}"`);E[c](g)}})}}O.on(document,cf,'[data-bs-toggle="modal"]',function(x){const c=ne.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&x.preventDefault(),O.one(c,lc,E=>{E.defaultPrevented||O.one(c,ac,()=>{h(this)&&this.focus()})});const g=ne.findOne(".modal.show");g&&Bi.getInstance(g).hide(),Bi.getOrCreateInstance(c).toggle(this)}),Se(Bi),p(Bi);const Qn=".bs.offcanvas",uc=".data-api",df=`load${Qn}${uc}`,dc="show",fc="showing",pc="hiding",mc=".offcanvas.show",ff=`show${Qn}`,pf=`shown${Qn}`,mf=`hide${Qn}`,gc=`hidePrevented${Qn}`,_c=`hidden${Qn}`,gf=`resize${Qn}`,_f=`click${Qn}${uc}`,vf=`keydown.dismiss${Qn}`,xf={backdrop:!0,keyboard:!0,scroll:!1},yf={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ei extends ge{constructor(c,g){super(c,g),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return xf}static get DefaultType(){return yf}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||O.trigger(this._element,ff,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new qo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(fc),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(dc),this._element.classList.remove(fc),O.trigger(this._element,pf,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(O.trigger(this._element,mf).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(pc),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(dc,pc),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new qo().reset(),O.trigger(this._element,_c)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new tc({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():O.trigger(this._element,gc)}:null})}_initializeFocusTrap(){return new ic({trapElement:this._element})}_addEventListeners(){O.on(this._element,vf,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():O.trigger(this._element,gc))})}static jQueryInterface(c){return this.each(function(){const g=ei.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c](this)}})}}O.on(document,_f,'[data-bs-toggle="offcanvas"]',function(x){const c=ne.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&x.preventDefault(),u(this))return;O.one(c,_c,()=>{h(this)&&this.focus()});const g=ne.findOne(mc);g&&g!==c&&ei.getInstance(g).hide(),ei.getOrCreateInstance(c).toggle(this)}),O.on(window,df,()=>{for(const x of ne.find(mc))ei.getOrCreateInstance(x).show()}),O.on(window,gf,()=>{for(const x of ne.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(x).position!=="fixed"&&ei.getOrCreateInstance(x).hide()}),Se(ei),p(ei);const vc={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Mf=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Sf=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Ef=(x,c)=>{const g=x.nodeName.toLowerCase();return c.includes(g)?!Mf.has(g)||!!Sf.test(x.nodeValue):c.filter(E=>E instanceof RegExp).some(E=>E.test(g))},bf={allowList:vc,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Tf={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Af={entry:"(string|element|function|null)",selector:"(string|element)"};class wf extends oe{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return bf}static get DefaultType(){return Tf}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[U,k]of Object.entries(this._config.content))this._setContent(c,k,U);const g=c.children[0],E=this._resolvePossibleFunction(this._config.extraClass);return E&&g.classList.add(...E.split(" ")),g}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[g,E]of Object.entries(c))super._typeCheckConfig({selector:g,entry:E},Af)}_setContent(c,g,E){const U=ne.findOne(E,c);U&&((g=this._resolvePossibleFunction(g))?a(g)?this._putElementInTemplate(l(g),U):this._config.html?U.innerHTML=this._maybeSanitize(g):U.textContent=g:U.remove())}_maybeSanitize(c){return this._config.sanitize?function(g,E,U){if(!g.length)return g;if(U&&typeof U=="function")return U(g);const k=new window.DOMParser().parseFromString(g,"text/html"),j=[].concat(...k.body.querySelectorAll("*"));for(const te of j){const fe=te.nodeName.toLowerCase();if(!Object.keys(E).includes(fe)){te.remove();continue}const Me=[].concat(...te.attributes),Ee=[].concat(E["*"]||[],E[fe]||[]);for(const ye of Me)Ef(ye,Ee)||te.removeAttribute(ye.nodeName)}return k.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return A(c,[this])}_putElementInTemplate(c,g){if(this._config.html)return g.innerHTML="",void g.append(c);g.textContent=c.textContent}}const Rf=new Set(["sanitize","allowList","sanitizeFn"]),Yo="fade",Or="show",xc=".modal",yc="hide.bs.modal",or="hover",$o="focus",Cf={AUTO:"auto",TOP:"top",RIGHT:m()?"left":"right",BOTTOM:"bottom",LEFT:m()?"right":"left"},Lf={allowList:vc,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Pf={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ki extends ge{constructor(c,g){if(jl===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(c,g),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Lf}static get DefaultType(){return Pf}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),O.off(this._element.closest(xc),yc,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=O.trigger(this._element,this.constructor.eventName("show")),g=(d(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!g)return;this._disposePopper();const E=this._getTipElement();this._element.setAttribute("aria-describedby",E.getAttribute("id"));const{container:U}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(U.append(E),O.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(E),E.classList.add(Or),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))O.on(k,"mouseover",f);this._queueCallback(()=>{O.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!O.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Or),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))O.off(c,"mouseover",f);this._activeTrigger.click=!1,this._activeTrigger[$o]=!1,this._activeTrigger[or]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),O.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const g=this._getTemplateFactory(c).toHtml();if(!g)return null;g.classList.remove(Yo,Or),g.classList.add(`bs-${this.constructor.NAME}-auto`);const E=(U=>{do U+=Math.floor(1e6*Math.random());while(document.getElementById(U));return U})(this.constructor.NAME).toString();return g.setAttribute("id",E),this._isAnimated()&&g.classList.add(Yo),g}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new wf({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Yo)}_isShown(){return this.tip&&this.tip.classList.contains(Or)}_createPopper(c){const g=A(this._config.placement,[this,c,this._element]),E=Cf[g.toUpperCase()];return Wo(this._element,c,this._getPopperConfig(E))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(g=>Number.parseInt(g,10)):typeof c=="function"?g=>c(g,this._element):c}_resolvePossibleFunction(c){return A(c,[this._element])}_getPopperConfig(c){const g={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:E=>{this._getTipElement().setAttribute("data-popper-placement",E.state.placement)}}]};return{...g,...A(this._config.popperConfig,[g])}}_setListeners(){const c=this._config.trigger.split(" ");for(const g of c)if(g==="click")O.on(this._element,this.constructor.eventName("click"),this._config.selector,E=>{this._initializeOnDelegatedTarget(E).toggle()});else if(g!=="manual"){const E=g===or?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),U=g===or?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");O.on(this._element,E,this._config.selector,k=>{const j=this._initializeOnDelegatedTarget(k);j._activeTrigger[k.type==="focusin"?$o:or]=!0,j._enter()}),O.on(this._element,U,this._config.selector,k=>{const j=this._initializeOnDelegatedTarget(k);j._activeTrigger[k.type==="focusout"?$o:or]=j._element.contains(k.relatedTarget),j._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},O.on(this._element.closest(xc),yc,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,g){clearTimeout(this._timeout),this._timeout=setTimeout(c,g)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const g=X.getDataAttributes(this._element);for(const E of Object.keys(g))Rf.has(E)&&delete g[E];return c={...g,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:l(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[g,E]of Object.entries(this._config))this.constructor.Default[g]!==E&&(c[g]=E);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const g=ki.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}}p(ki);const If={...ki.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Df={...ki.DefaultType,content:"(null|string|element|function)"};class Fr extends ki{static get Default(){return If}static get DefaultType(){return Df}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const g=Fr.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}}p(Fr);const Ko=".bs.scrollspy",Nf=`activate${Ko}`,Mc=`click${Ko}`,Uf=`load${Ko}.data-api`,ms="active",Zo="[href]",Sc=".nav-link",Of=`${Sc}, .nav-item > ${Sc}, .list-group-item`,Ff={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Bf={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ar extends ge{constructor(c,g){super(c,g),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ff}static get DefaultType(){return Bf}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=l(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(g=>Number.parseFloat(g))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(O.off(this._config.target,Mc),O.on(this._config.target,Mc,Zo,c=>{const g=this._observableSections.get(c.target.hash);if(g){c.preventDefault();const E=this._rootElement||window,U=g.offsetTop-this._element.offsetTop;if(E.scrollTo)return void E.scrollTo({top:U,behavior:"smooth"});E.scrollTop=U}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(g=>this._observerCallback(g),c)}_observerCallback(c){const g=j=>this._targetLinks.get(`#${j.target.id}`),E=j=>{this._previousScrollData.visibleEntryTop=j.target.offsetTop,this._process(g(j))},U=(this._rootElement||document.documentElement).scrollTop,k=U>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=U;for(const j of c){if(!j.isIntersecting){this._activeTarget=null,this._clearActiveClass(g(j));continue}const te=j.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&te){if(E(j),!U)return}else k||te||E(j)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=ne.find(Zo,this._config.target);for(const g of c){if(!g.hash||u(g))continue;const E=ne.findOne(decodeURI(g.hash),this._element);h(E)&&(this._targetLinks.set(decodeURI(g.hash),g),this._observableSections.set(g.hash,E))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(ms),this._activateParents(c),O.trigger(this._element,Nf,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))ne.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(ms);else for(const g of ne.parents(c,".nav, .list-group"))for(const E of ne.prev(g,Of))E.classList.add(ms)}_clearActiveClass(c){c.classList.remove(ms);const g=ne.find(`${Zo}.${ms}`,c);for(const E of g)E.classList.remove(ms)}static jQueryInterface(c){return this.each(function(){const g=ar.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}})}}O.on(window,Uf,()=>{for(const x of ne.find('[data-bs-spy="scroll"]'))ar.getOrCreateInstance(x)}),p(ar);const zi=".bs.tab",kf=`hide${zi}`,zf=`hidden${zi}`,Hf=`show${zi}`,Gf=`shown${zi}`,Vf=`click${zi}`,Wf=`keydown${zi}`,Xf=`load${zi}`,qf="ArrowLeft",Ec="ArrowRight",jf="ArrowUp",bc="ArrowDown",Jo="Home",Tc="End",Hi="active",Ac="fade",Qo="show",wc=".dropdown-toggle",ea=`:not(${wc})`,Rc='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ta=`.nav-link${ea}, .list-group-item${ea}, [role="tab"]${ea}, ${Rc}`,Yf=`.${Hi}[data-bs-toggle="tab"], .${Hi}[data-bs-toggle="pill"], .${Hi}[data-bs-toggle="list"]`;class Gi extends ge{constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),O.on(this._element,Wf,g=>this._keydown(g)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const g=this._getActiveElem(),E=g?O.trigger(g,kf,{relatedTarget:c}):null;O.trigger(c,Hf,{relatedTarget:g}).defaultPrevented||E&&E.defaultPrevented||(this._deactivate(g,c),this._activate(c,g))}_activate(c,g){c&&(c.classList.add(Hi),this._activate(ne.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),O.trigger(c,Gf,{relatedTarget:g})):c.classList.add(Qo)},c,c.classList.contains(Ac)))}_deactivate(c,g){c&&(c.classList.remove(Hi),c.blur(),this._deactivate(ne.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),O.trigger(c,zf,{relatedTarget:g})):c.classList.remove(Qo)},c,c.classList.contains(Ac)))}_keydown(c){if(![qf,Ec,jf,bc,Jo,Tc].includes(c.key))return;c.stopPropagation(),c.preventDefault();const g=this._getChildren().filter(U=>!u(U));let E;if([Jo,Tc].includes(c.key))E=g[c.key===Jo?0:g.length-1];else{const U=[Ec,bc].includes(c.key);E=R(g,c.target,U,!0)}E&&(E.focus({preventScroll:!0}),Gi.getOrCreateInstance(E).show())}_getChildren(){return ne.find(ta,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,g){this._setAttributeIfNotExists(c,"role","tablist");for(const E of g)this._setInitialAttributesOnChild(E)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const g=this._elemIsActive(c),E=this._getOuterElement(c);c.setAttribute("aria-selected",g),E!==c&&this._setAttributeIfNotExists(E,"role","presentation"),g||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const g=ne.getElementFromSelector(c);g&&(this._setAttributeIfNotExists(g,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(g,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,g){const E=this._getOuterElement(c);if(!E.classList.contains("dropdown"))return;const U=(k,j)=>{const te=ne.findOne(k,E);te&&te.classList.toggle(j,g)};U(wc,Hi),U(".dropdown-menu",Qo),E.setAttribute("aria-expanded",g)}_setAttributeIfNotExists(c,g,E){c.hasAttribute(g)||c.setAttribute(g,E)}_elemIsActive(c){return c.classList.contains(Hi)}_getInnerElement(c){return c.matches(ta)?c:ne.findOne(ta,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const g=Gi.getOrCreateInstance(this);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}})}}O.on(document,Vf,Rc,function(x){["A","AREA"].includes(this.tagName)&&x.preventDefault(),u(this)||Gi.getOrCreateInstance(this).show()}),O.on(window,Xf,()=>{for(const x of ne.find(Yf))Gi.getOrCreateInstance(x)}),p(Gi);const gi=".bs.toast",$f=`mouseover${gi}`,Kf=`mouseout${gi}`,Zf=`focusin${gi}`,Jf=`focusout${gi}`,Qf=`hide${gi}`,ep=`hidden${gi}`,tp=`show${gi}`,np=`shown${gi}`,Cc="hide",Br="show",kr="showing",ip={animation:"boolean",autohide:"boolean",delay:"number"},sp={animation:!0,autohide:!0,delay:5e3};class lr extends ge{constructor(c,g){super(c,g),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return sp}static get DefaultType(){return ip}static get NAME(){return"toast"}show(){O.trigger(this._element,tp).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Cc),_(this._element),this._element.classList.add(Br,kr),this._queueCallback(()=>{this._element.classList.remove(kr),O.trigger(this._element,np),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(O.trigger(this._element,Qf).defaultPrevented||(this._element.classList.add(kr),this._queueCallback(()=>{this._element.classList.add(Cc),this._element.classList.remove(kr,Br),O.trigger(this._element,ep)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Br),super.dispose()}isShown(){return this._element.classList.contains(Br)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,g){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=g;break;case"focusin":case"focusout":this._hasKeyboardInteraction=g}if(g)return void this._clearTimeout();const E=c.relatedTarget;this._element===E||this._element.contains(E)||this._maybeScheduleHide()}_setListeners(){O.on(this._element,$f,c=>this._onInteraction(c,!0)),O.on(this._element,Kf,c=>this._onInteraction(c,!1)),O.on(this._element,Zf,c=>this._onInteraction(c,!0)),O.on(this._element,Jf,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const g=lr.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c](this)}})}}return Se(lr),p(lr),{Alert:It,Button:Ve,Carousel:ut,Collapse:fi,Dropdown:In,Modal:Bi,Offcanvas:ei,Popover:Fr,ScrollSpy:ar,Tab:Gi,Toast:lr,Tooltip:ki}})})(pp);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="162",mp=0,Gc=1,gp=2,Fu=1,_p=2,ai=3,hi=0,pn=1,qn=2,Li=0,ks=1,Vc=2,Wc=3,Xc=4,vp=5,Qi=100,xp=101,yp=102,qc=103,jc=104,Mp=200,Sp=201,Ep=202,bp=203,ja=204,Ya=205,Tp=206,Ap=207,wp=208,Rp=209,Cp=210,Lp=211,Pp=212,Ip=213,Dp=214,Np=0,Up=1,Op=2,yo=3,Fp=4,Bp=5,kp=6,zp=7,Bu=0,Hp=1,Gp=2,Pi=0,Vp=1,Wp=2,Xp=3,qp=4,jp=5,Yp=6,$p=7,Yc="attached",Kp="detached",ku=300,Gs=301,Vs=302,$a=303,Ka=304,Ro=306,Ws=1e3,Rn=1001,Mo=1002,Wt=1003,Za=1004,Ns=1005,tn=1006,vo=1007,li=1008,Ii=1009,Zp=1010,Jp=1011,hl=1012,zu=1013,wi=1014,Fn=1015,yr=1016,Hu=1017,Gu=1018,ns=1020,Qp=1021,Cn=1023,em=1024,tm=1025,is=1026,Xs=1027,Vu=1028,Wu=1029,nm=1030,Xu=1031,qu=1033,ra=33776,oa=33777,aa=33778,la=33779,$c=35840,Kc=35841,Zc=35842,Jc=35843,ju=36196,Qc=37492,eh=37496,th=37808,nh=37809,ih=37810,sh=37811,rh=37812,oh=37813,ah=37814,lh=37815,ch=37816,hh=37817,uh=37818,dh=37819,fh=37820,ph=37821,ca=36492,mh=36494,gh=36495,im=36283,_h=36284,vh=36285,xh=36286,sm=2200,rm=2201,om=2202,Mr=2300,qs=2301,ha=2302,Us=2400,Os=2401,So=2402,ul=2500,am=2501,lm=0,Yu=1,Ja=2,cm=3200,hm=3201,$u=0,um=1,Ai="",ln="srgb",$t="srgb-linear",dl="display-p3",Co="display-p3-linear",Eo="linear",Lt="srgb",bo="rec709",To="p3",_s=7680,yh=519,dm=512,fm=513,pm=514,Ku=515,mm=516,gm=517,_m=518,vm=519,Qa=35044,Mh="300 es",el=1035,ci=2e3,Ao=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const _r=Math.PI/180,js=180/Math.PI;function kn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Xt(s,e,t){return Math.max(e,Math.min(t,s))}function fl(s,e){return(s%e+e)%e}function xm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ym(s,e,t){return s!==e?(t-s)/(e-s):0}function vr(s,e,t){return(1-t)*s+t*e}function Mm(s,e,t,n){return vr(s,e,1-Math.exp(-t*n))}function Sm(s,e=1){return e-Math.abs(fl(s,e*2)-e)}function Em(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Tm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Am(s,e){return s+Math.random()*(e-s)}function wm(s){return s*(.5-Math.random())}function Rm(s){s!==void 0&&(Sh=s);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cm(s){return s*_r}function Lm(s){return s*js}function tl(s){return(s&s-1)===0&&s!==0}function Pm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Im(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),_=r((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*d,l*f,a*h);break;case"YZY":s.set(l*f,a*u,l*d,a*h);break;case"ZXZ":s.set(l*d,l*f,a*u,a*h);break;case"XZX":s.set(a*u,l*v,l*_,a*h);break;case"YXY":s.set(l*_,a*u,l*v,a*h);break;case"ZYZ":s.set(l*v,l*_,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Dm={DEG2RAD:_r,RAD2DEG:js,generateUUID:kn,clamp:Xt,euclideanModulo:fl,mapLinear:xm,inverseLerp:ym,lerp:vr,damp:Mm,pingpong:Sm,smoothstep:Em,smootherstep:bm,randInt:Tm,randFloat:Am,randFloatSpread:wm,seededRandom:Rm,degToRad:Cm,radToDeg:Lm,isPowerOfTwo:tl,ceilPowerOfTwo:Pm,floorPowerOfTwo:wo,setQuaternionFromProperEuler:Im,normalize:yt,denormalize:Bn};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,r,o,a,l,h){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,h)}set(e,t,n,i,r,o,a,l,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],d=n[7],f=n[2],_=n[5],v=n[8],S=i[0],m=i[3],p=i[6],A=i[1],y=i[4],R=i[7],D=i[2],P=i[5],L=i[8];return r[0]=o*S+a*A+l*D,r[3]=o*m+a*y+l*P,r[6]=o*p+a*R+l*L,r[1]=h*S+u*A+d*D,r[4]=h*m+u*y+d*P,r[7]=h*p+u*R+d*L,r[2]=f*S+_*A+v*D,r[5]=f*m+_*y+v*P,r[8]=f*p+_*R+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*o*u-t*a*h-n*r*u+n*a*l+i*r*h-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],d=u*o-a*h,f=a*l-u*r,_=h*r-o*l,v=t*d+n*f+i*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=d*S,e[1]=(i*h-u*n)*S,e[2]=(a*n-i*o)*S,e[3]=f*S,e[4]=(u*t-i*l)*S,e[5]=(i*r-a*t)*S,e[6]=_*S,e[7]=(n*l-h*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-i*h,i*l,-i*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new tt;function Zu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nm(){const s=Sr("canvas");return s.style.display="block",s}const Eh={};function Ju(s){s in Eh||(Eh[s]=!0,console.warn(s))}const bh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Th=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[$t]:{transfer:Eo,primaries:bo,toReference:s=>s,fromReference:s=>s},[ln]:{transfer:Lt,primaries:bo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Co]:{transfer:Eo,primaries:To,toReference:s=>s.applyMatrix3(Th),fromReference:s=>s.applyMatrix3(bh)},[dl]:{transfer:Lt,primaries:To,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Th),fromReference:s=>s.applyMatrix3(bh).convertLinearToSRGB()}},Um=new Set([$t,Co]),gt={enabled:!0,_workingColorSpace:$t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Um.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Vr[e].toReference,i=Vr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Vr[s].primaries},getTransfer:function(s){return s===Ai?Eo:Vr[s].transfer}};function zs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function da(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class Qu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=Sr("canvas")),vs.width=e.width,vs.height=e.height;const n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Om=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fa(i[o].image)):r.push(fa(i[o]))}else r=fa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fm=0;class qt extends os{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Rn,i=Rn,r=tn,o=li,a=Cn,l=Ii,h=qt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=kn(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=ku;qt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,h=l[0],u=l[4],d=l[8],f=l[1],_=l[5],v=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(v+m)<.1&&Math.abs(h+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,R=(_+1)/2,D=(p+1)/2,P=(u+f)/4,L=(d+S)/4,q=(v+m)/4;return y>R&&y>D?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=P/n,r=L/n):R>D?R<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(R),n=P/i,r=q/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=L/r,i=q/r),this.set(n,i,r,t),this}let A=Math.sqrt((m-v)*(m-v)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(d-S)/A,this.z=(f-u)/A,this.w=Math.acos((h+_+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bm extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Bm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class km extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],h=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],_=r[o+1],v=r[o+2],S=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=_,e[t+2]=v,e[t+3]=S;return}if(d!==S||l!==f||h!==_||u!==v){let m=1-a;const p=l*f+h*_+u*v+d*S,A=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),P=Math.atan2(D,p*A);m=Math.sin(m*P)/D,a=Math.sin(a*P)/D}const R=a*A;if(l=l*m+f*R,h=h*m+_*R,u=u*m+v*R,d=d*m+S*R,m===1-a){const D=1/Math.sqrt(l*l+h*h+u*u+d*d);l*=D,h*=D,u*=D,d*=D}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o],f=r[o+1],_=r[o+2],v=r[o+3];return e[t]=a*v+u*d+l*_-h*f,e[t+1]=l*v+u*f+h*d-a*_,e[t+2]=h*v+u*_+a*f-l*d,e[t+3]=u*v-a*d-l*f-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),d=a(r/2),f=l(n/2),_=l(i/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+h*_*v,this._y=h*_*d-f*u*v,this._z=h*u*v+f*_*d,this._w=h*u*d-f*_*v;break;case"YXZ":this._x=f*u*d+h*_*v,this._y=h*_*d-f*u*v,this._z=h*u*v-f*_*d,this._w=h*u*d+f*_*v;break;case"ZXY":this._x=f*u*d-h*_*v,this._y=h*_*d+f*u*v,this._z=h*u*v+f*_*d,this._w=h*u*d-f*_*v;break;case"ZYX":this._x=f*u*d-h*_*v,this._y=h*_*d+f*u*v,this._z=h*u*v-f*_*d,this._w=h*u*d+f*_*v;break;case"YZX":this._x=f*u*d+h*_*v,this._y=h*_*d+f*u*v,this._z=h*u*v-f*_*d,this._w=h*u*d-f*_*v;break;case"XZY":this._x=f*u*d-h*_*v,this._y=h*_*d-f*u*v,this._z=h*u*v+f*_*d,this._w=h*u*d+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(u-l)*_,this._y=(r-h)*_,this._z=(o-i)*_}else if(n>a&&n>d){const _=2*Math.sqrt(1+n-a-d);this._w=(u-l)/_,this._x=.25*_,this._y=(i+o)/_,this._z=(r+h)/_}else if(a>d){const _=2*Math.sqrt(1+a-n-d);this._w=(r-h)/_,this._x=(i+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-n-a);this._w=(o-i)/_,this._x=(r+h)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+o*a+i*h-r*l,this._y=i*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-i*a,this._w=o*u-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*i+t*this._y,this._z=_*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),d=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*i-a*n),u=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*h+o*d-a*u,this.y=n+l*u+a*h-r*d,this.z=i+l*d+r*u-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new I,Ah=new zn;class ui{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Xr.subVectors(this.max,cr),xs.subVectors(e.a,cr),ys.subVectors(e.b,cr),Ms.subVectors(e.c,cr),vi.subVectors(ys,xs),xi.subVectors(Ms,ys),Wi.subVectors(xs,Ms);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Wi.z,Wi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Wi.z,0,-Wi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Wi.y,Wi.x,0];return!ma(t,xs,ys,Ms,Xr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,xs,ys,Ms,Xr))?!1:(qr.crossVectors(vi,xi),t=[qr.x,qr.y,qr.z],ma(t,xs,ys,Ms,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,Wr=new ui,xs=new I,ys=new I,Ms=new I,vi=new I,xi=new I,Wi=new I,cr=new I,Xr=new I,qr=new I,Xi=new I;function ma(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Xi.fromArray(s,r);const a=i.x*Math.abs(Xi.x)+i.y*Math.abs(Xi.y)+i.z*Math.abs(Xi.z),l=e.dot(Xi),h=t.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const zm=new ui,hr=new I,ga=new I;class Kn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(ga)),this.expandByPoint(hr.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new I,_a=new I,jr=new I,yi=new I,va=new I,Yr=new I,xa=new I;class Er{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_a.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=yi.dot(this.direction),l=-yi.dot(jr),h=yi.lengthSq(),u=Math.abs(1-o*o);let d,f,_,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const S=1/u;d*=S,f*=S,_=d*(d+o*f+2*a)+f*(o*d+f+2*l)+h}else f=r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+h;else f=-r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+h;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+h):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),_=f*(f+2*l)+h):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+h);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(_a).addScaledVector(jr,f),_}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,i=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,i=(e.min.x-f.x)*h),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,i,r){va.subVectors(t,e),Yr.subVectors(n,e),xa.crossVectors(va,Yr);let o=this.direction.dot(xa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(Yr.crossVectors(yi,Yr));if(l<0)return null;const h=a*this.direction.dot(va.cross(yi));if(h<0||l+h>o)return null;const u=-a*yi.dot(xa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,r,o,a,l,h,u,d,f,_,v,S,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,h,u,d,f,_,v,S,m)}set(e,t,n,i,r,o,a,l,h,u,d,f,_,v,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=d,p[14]=f,p[3]=_,p[7]=v,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,_=o*d,v=a*u,S=a*d;t[0]=l*u,t[4]=-l*d,t[8]=h,t[1]=_+v*h,t[5]=f-S*h,t[9]=-a*l,t[2]=S-f*h,t[6]=v+_*h,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,_=l*d,v=h*u,S=h*d;t[0]=f+S*a,t[4]=v*a-_,t[8]=o*h,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=_*a-v,t[6]=S+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,_=l*d,v=h*u,S=h*d;t[0]=f-S*a,t[4]=-o*d,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*u,t[9]=S-f*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,_=o*d,v=a*u,S=a*d;t[0]=l*u,t[4]=v*h-_,t[8]=f*h+S,t[1]=l*d,t[5]=S*h+f,t[9]=_*h-v,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,_=o*h,v=a*l,S=a*h;t[0]=l*u,t[4]=S-f*d,t[8]=v*d+_,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-h*u,t[6]=_*d+v,t[10]=f-S*d}else if(e.order==="XZY"){const f=o*l,_=o*h,v=a*l,S=a*h;t[0]=l*u,t[4]=-d,t[8]=h*u,t[1]=f*d+S,t[5]=o*u,t[9]=_*d-v,t[2]=v*d-_,t[6]=a*u,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Gm)}lookAt(e,t,n){const i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Mi.crossVectors(n,gn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Mi.crossVectors(n,gn)),Mi.normalize(),$r.crossVectors(gn,Mi),i[0]=Mi.x,i[4]=$r.x,i[8]=gn.x,i[1]=Mi.y,i[5]=$r.y,i[9]=gn.y,i[2]=Mi.z,i[6]=$r.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],d=n[5],f=n[9],_=n[13],v=n[2],S=n[6],m=n[10],p=n[14],A=n[3],y=n[7],R=n[11],D=n[15],P=i[0],L=i[4],q=i[8],ie=i[12],b=i[1],C=i[5],ce=i[9],ae=i[13],F=i[2],Q=i[6],$=i[10],ee=i[14],K=i[3],J=i[7],O=i[11],de=i[15];return r[0]=o*P+a*b+l*F+h*K,r[4]=o*L+a*C+l*Q+h*J,r[8]=o*q+a*ce+l*$+h*O,r[12]=o*ie+a*ae+l*ee+h*de,r[1]=u*P+d*b+f*F+_*K,r[5]=u*L+d*C+f*Q+_*J,r[9]=u*q+d*ce+f*$+_*O,r[13]=u*ie+d*ae+f*ee+_*de,r[2]=v*P+S*b+m*F+p*K,r[6]=v*L+S*C+m*Q+p*J,r[10]=v*q+S*ce+m*$+p*O,r[14]=v*ie+S*ae+m*ee+p*de,r[3]=A*P+y*b+R*F+D*K,r[7]=A*L+y*C+R*Q+D*J,r[11]=A*q+y*ce+R*$+D*O,r[15]=A*ie+y*ae+R*ee+D*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],u=e[2],d=e[6],f=e[10],_=e[14],v=e[3],S=e[7],m=e[11],p=e[15];return v*(+r*l*d-i*h*d-r*a*f+n*h*f+i*a*_-n*l*_)+S*(+t*l*_-t*h*f+r*o*f-i*o*_+i*h*u-r*l*u)+m*(+t*h*d-t*a*_-r*o*d+n*o*_+r*a*u-n*h*u)+p*(-i*a*u-t*l*d+t*a*f+i*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],d=e[9],f=e[10],_=e[11],v=e[12],S=e[13],m=e[14],p=e[15],A=d*m*h-S*f*h+S*l*_-a*m*_-d*l*p+a*f*p,y=v*f*h-u*m*h-v*l*_+o*m*_+u*l*p-o*f*p,R=u*S*h-v*d*h+v*a*_-o*S*_-u*a*p+o*d*p,D=v*d*l-u*S*l-v*a*f+o*S*f+u*a*m-o*d*m,P=t*A+n*y+i*R+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=A*L,e[1]=(S*f*r-d*m*r-S*i*_+n*m*_+d*i*p-n*f*p)*L,e[2]=(a*m*r-S*l*r+S*i*h-n*m*h-a*i*p+n*l*p)*L,e[3]=(d*l*r-a*f*r-d*i*h+n*f*h+a*i*_-n*l*_)*L,e[4]=y*L,e[5]=(u*m*r-v*f*r+v*i*_-t*m*_-u*i*p+t*f*p)*L,e[6]=(v*l*r-o*m*r-v*i*h+t*m*h+o*i*p-t*l*p)*L,e[7]=(o*f*r-u*l*r+u*i*h-t*f*h-o*i*_+t*l*_)*L,e[8]=R*L,e[9]=(v*d*r-u*S*r-v*n*_+t*S*_+u*n*p-t*d*p)*L,e[10]=(o*S*r-v*a*r+v*n*h-t*S*h-o*n*p+t*a*p)*L,e[11]=(u*a*r-o*d*r-u*n*h+t*d*h+o*n*_-t*a*_)*L,e[12]=D*L,e[13]=(u*S*i-v*d*i+v*n*f-t*S*f-u*n*m+t*d*m)*L,e[14]=(v*a*i-o*S*i-v*n*l+t*S*l+o*n*m-t*a*m)*L,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*o,0,h*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,u=o+o,d=a+a,f=r*h,_=r*u,v=r*d,S=o*u,m=o*d,p=a*d,A=l*h,y=l*u,R=l*d,D=n.x,P=n.y,L=n.z;return i[0]=(1-(S+p))*D,i[1]=(_+R)*D,i[2]=(v-y)*D,i[3]=0,i[4]=(_-R)*P,i[5]=(1-(f+p))*P,i[6]=(m+A)*P,i[7]=0,i[8]=(v+y)*L,i[9]=(m-A)*L,i[10]=(1-(f+S))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ss.set(i[0],i[1],i[2]).length();const o=Ss.set(i[4],i[5],i[6]).length(),a=Ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Un.copy(this);const h=1/r,u=1/o,d=1/a;return Un.elements[0]*=h,Un.elements[1]*=h,Un.elements[2]*=h,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ci){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let _,v;if(a===ci)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ao)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ci){const l=this.elements,h=1/(t-e),u=1/(n-i),d=1/(o-r),f=(t+e)*h,_=(n+i)*u;let v,S;if(a===ci)v=(o+r)*d,S=-2*d;else if(a===Ao)v=r*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new I,Un=new Ke,Hm=new I(0,0,0),Gm=new I(1,1,1),Mi=new I,$r=new I,gn=new I,wh=new Ke,Rh=new zn;class $n{constructor(e=0,t=0,n=0,i=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],u=i[9],d=i[2],f=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vm=0;const Ch=new I,Es=new zn,ii=new Ke,Kr=new I,ur=new I,Wm=new I,Xm=new zn,Lh=new I(1,0,0),Ph=new I(0,1,0),Ih=new I(0,0,1),qm={type:"added"},jm={type:"removed"},ya={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Pt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new I,t=new $n,n=new zn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new tt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ur,Kr,this.up):ii.lookAt(Kr,ur,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(ii),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qm),ya.child=e,this.dispatchEvent(ya),ya.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const d=l[h];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new I,si=new I,Sa=new I,ri=new I,bs=new I,Ts=new I,Dh=new I,Ea=new I,ba=new I,Ta=new I;class jn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),On.subVectors(e,t),i.cross(On);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){On.subVectors(i,t),si.subVectors(n,t),Sa.subVectors(e,t);const o=On.dot(On),a=On.dot(si),l=On.dot(Sa),h=si.dot(si),u=si.dot(Sa),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,_=(h*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-_-v,v,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static isFrontFacing(e,t,n,i){return On.subVectors(n,t),si.subVectors(e,t),On.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),si.subVectors(this.a,this.b),On.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;bs.subVectors(i,n),Ts.subVectors(r,n),Ea.subVectors(e,n);const l=bs.dot(Ea),h=Ts.dot(Ea);if(l<=0&&h<=0)return t.copy(n);ba.subVectors(e,i);const u=bs.dot(ba),d=Ts.dot(ba);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*h;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bs,o);Ta.subVectors(e,r);const _=bs.dot(Ta),v=Ts.dot(Ta);if(v>=0&&_<=v)return t.copy(r);const S=_*h-l*v;if(S<=0&&h>=0&&v<=0)return a=h/(h-v),t.copy(n).addScaledVector(Ts,a);const m=u*v-_*d;if(m<=0&&d-u>=0&&_-v>=0)return Dh.subVectors(r,i),a=(d-u)/(d-u+(_-v)),t.copy(i).addScaledVector(Dh,a);const p=1/(m+S+f);return o=S*p,a=f*p,t.copy(n).addScaledVector(bs,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Aa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=fl(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Aa(o,r,e+1/3),this.g=Aa(o,r,e),this.b=Aa(o,r,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return gt.fromWorkingColorSpace(en.copy(this),e),Math.round(Xt(en.r*255,0,255))*65536+Math.round(Xt(en.g*255,0,255))*256+Math.round(Xt(en.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(en.copy(this),t);const n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const d=o-a;switch(h=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=ln){gt.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,i=en.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Zr);const n=vr(Si.h,Zr.h,t),i=vr(Si.s,Zr.s,t),r=vr(Si.l,Zr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ye;Ye.NAMES=nd;let Ym=0;class Yn extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=ks,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ya,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ri extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new I,Jr=new st;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ju("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}}class id extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sd extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $m=0;const An=new Ke,wa=new Pt,As=new I,_n=new ui,dr=new ui,Vt=new I;class Ln extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?sd:id)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(_n.min,dr.min),_n.expandByPoint(Vt),Vt.addVectors(_n.max,dr.max),_n.expandByPoint(Vt)):(_n.expandByPoint(dr.min),_n.expandByPoint(dr.max))}_n.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Vt.fromBufferAttribute(a,h),l&&(As.fromBufferAttribute(e,h),Vt.add(As)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let q=0;q<n.count;q++)a[q]=new I,l[q]=new I;const h=new I,u=new I,d=new I,f=new st,_=new st,v=new st,S=new I,m=new I;function p(q,ie,b){h.fromBufferAttribute(n,q),u.fromBufferAttribute(n,ie),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,q),_.fromBufferAttribute(r,ie),v.fromBufferAttribute(r,b),u.sub(h),d.sub(h),_.sub(f),v.sub(f);const C=1/(_.x*v.y-v.x*_.y);isFinite(C)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(C),m.copy(d).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(C),a[q].add(S),a[ie].add(S),a[b].add(S),l[q].add(m),l[ie].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let q=0,ie=A.length;q<ie;++q){const b=A[q],C=b.start,ce=b.count;for(let ae=C,F=C+ce;ae<F;ae+=3)p(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const y=new I,R=new I,D=new I,P=new I;function L(q){D.fromBufferAttribute(i,q),P.copy(D);const ie=a[q];y.copy(ie),y.sub(D.multiplyScalar(D.dot(ie))).normalize(),R.crossVectors(P,ie);const C=R.dot(l[q])<0?-1:1;o.setXYZW(q,y.x,y.y,y.z,C)}for(let q=0,ie=A.length;q<ie;++q){const b=A[q],C=b.start,ce=b.count;for(let ae=C,F=C+ce;ae<F;ae+=3)L(e.getX(ae+0)),L(e.getX(ae+1)),L(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,h=new I,u=new I,d=new I;if(e)for(let f=0,_=e.count;f<_;f+=3){const v=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,m),a.add(u),l.add(u),h.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,_=t.count;f<_;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const h=a.array,u=a.itemSize,d=a.normalized,f=new h.constructor(l.length*u);let _=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?_=l[S]*a.data.stride+a.offset:_=l[S]*u;for(let p=0;p<u;p++)f[v++]=h[_++]}return new cn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=e(l,n);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,d=h.length;u<d;u++){const f=h[u],_=e(f,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let d=0,f=h.length;d<f;d++){const _=h[d];u.push(_.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],d=r[h];for(let f=0,_=d.length;f<_;f++)u.push(d[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,u=o.length;h<u;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nh=new Ke,qi=new Er,Qr=new Kn,Uh=new I,ws=new I,Rs=new I,Cs=new I,Ra=new I,eo=new I,to=new st,no=new st,io=new st,Oh=new I,Fh=new I,Bh=new I,so=new I,ro=new I;class fn extends Pt{constructor(e=new Ln,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){eo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],d=r[l];u!==0&&(Ra.fromBufferAttribute(d,e),o?eo.addScaledVector(Ra,u):eo.addScaledVector(Ra.sub(t),u))}t.add(eo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(Qr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Qr,Uh)===null||qi.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,_.start),y=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let R=A,D=y;R<D;R+=3){const P=a.getX(R),L=a.getX(R+1),q=a.getX(R+2);i=oo(this,p,e,n,h,u,d,P,L,q),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,_.start),S=Math.min(a.count,_.start+_.count);for(let m=v,p=S;m<p;m+=3){const A=a.getX(m),y=a.getX(m+1),R=a.getX(m+2);i=oo(this,o,e,n,h,u,d,A,y,R),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,_.start),y=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let R=A,D=y;R<D;R+=3){const P=R,L=R+1,q=R+2;i=oo(this,p,e,n,h,u,d,P,L,q),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,_.start),S=Math.min(l.count,_.start+_.count);for(let m=v,p=S;m<p;m+=3){const A=m,y=m+1,R=m+2;i=oo(this,o,e,n,h,u,d,A,y,R),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Km(s,e,t,n,i,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===hi,a),l===null)return null;ro.copy(a),ro.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(ro);return h<t.near||h>t.far?null:{distance:h,point:ro.clone(),object:s}}function oo(s,e,t,n,i,r,o,a,l,h){s.getVertexPosition(a,ws),s.getVertexPosition(l,Rs),s.getVertexPosition(h,Cs);const u=Km(s,e,t,n,ws,Rs,Cs,so);if(u){i&&(to.fromBufferAttribute(i,a),no.fromBufferAttribute(i,l),io.fromBufferAttribute(i,h),u.uv=jn.getInterpolation(so,ws,Rs,Cs,to,no,io,new st)),r&&(to.fromBufferAttribute(r,a),no.fromBufferAttribute(r,l),io.fromBufferAttribute(r,h),u.uv1=jn.getInterpolation(so,ws,Rs,Cs,to,no,io,new st)),o&&(Oh.fromBufferAttribute(o,a),Fh.fromBufferAttribute(o,l),Bh.fromBufferAttribute(o,h),u.normal=jn.getInterpolation(so,ws,Rs,Cs,Oh,Fh,Bh,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new I,materialIndex:0};jn.getNormal(ws,Rs,Cs,d.normal),u.face=d}return u}class br extends Ln{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],u=[],d=[];let f=0,_=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(d,2));function v(S,m,p,A,y,R,D,P,L,q,ie){const b=R/L,C=D/q,ce=R/2,ae=D/2,F=P/2,Q=L+1,$=q+1;let ee=0,K=0;const J=new I;for(let O=0;O<$;O++){const de=O*C-ae;for(let be=0;be<Q;be++){const Ge=be*b-ce;J[S]=Ge*A,J[m]=de*y,J[p]=F,h.push(J.x,J.y,J.z),J[S]=0,J[m]=0,J[p]=P>0?1:-1,u.push(J.x,J.y,J.z),d.push(be/L),d.push(1-O/q),ee+=1}}for(let O=0;O<q;O++)for(let de=0;de<L;de++){const be=f+de+Q*O,Ge=f+de+Q*(O+1),X=f+(de+1)+Q*(O+1),oe=f+(de+1)+Q*O;l.push(be,Ge,oe),l.push(Ge,X,oe),K+=6}a.addGroup(_,K,ie),_+=K,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(s){const e={};for(let t=0;t<s.length;t++){const n=Ys(s[t]);for(const i in n)e[i]=n[i]}return e}function Zm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rd(s){return s.getRenderTarget()===null?s.outputColorSpace:gt.workingColorSpace}const Jm={clone:Ys,merge:an};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new I,kh=new st,zh=new st;class dn extends od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,kh,zh),t.subVectors(zh,kh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Ps=1;class tg extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(Ls,Ps,e,t);i.layers=this.layers,this.add(i);const r=new dn(Ls,Ps,e,t);r.layers=this.layers,this.add(r);const o=new dn(Ls,Ps,e,t);o.layers=this.layers,this.add(o);const a=new dn(Ls,Ps,e,t);a.layers=this.layers,this.add(a);const l=new dn(Ls,Ps,e,t);l.layers=this.layers,this.add(l);const h=new dn(Ls,Ps,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const h of t)this.remove(h);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ad extends qt{constructor(e,t,n,i,r,o,a,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,i,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ng extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ad(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new br(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Li});r.uniforms.tEquirect.value=t;const o=new fn(i,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=tn),new tg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ca=new I,ig=new I,sg=new tt;class Zi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ca.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sg.getNormalMatrix(e),i=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Kn,ao=new I;class ml{constructor(e=new Zi,t=new Zi,n=new Zi,i=new Zi,r=new Zi,o=new Zi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],u=i[5],d=i[6],f=i[7],_=i[8],v=i[9],S=i[10],m=i[11],p=i[12],A=i[13],y=i[14],R=i[15];if(n[0].setComponents(l-r,f-h,m-_,R-p).normalize(),n[1].setComponents(l+r,f+h,m+_,R+p).normalize(),n[2].setComponents(l+o,f+u,m+v,R+A).normalize(),n[3].setComponents(l-o,f-u,m-v,R-A).normalize(),n[4].setComponents(l-a,f-d,m-S,R-y).normalize(),t===ci)n[5].setComponents(l+a,f+d,m+S,R+y).normalize();else if(t===Ao)n[5].setComponents(a,d,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ao.x=i.normal.x>0?e.max.x:e.min.x,ao.y=i.normal.y>0?e.max.y:e.min.y,ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function rg(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,u){const d=h.array,f=h.usage,_=d.byteLength,v=s.createBuffer();s.bindBuffer(u,v),s.bufferData(u,d,f),h.onUploadCallback();let S;if(d instanceof Float32Array)S=s.FLOAT;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)S=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=s.SHORT;else if(d instanceof Uint32Array)S=s.UNSIGNED_INT;else if(d instanceof Int32Array)S=s.INT;else if(d instanceof Int8Array)S=s.BYTE;else if(d instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,u,d){const f=u.array,_=u._updateRange,v=u.updateRanges;if(s.bindBuffer(d,h),_.count===-1&&v.length===0&&s.bufferSubData(d,0,f),v.length!==0){for(let S=0,m=v.length;S<m;S++){const p=v[S];t?s.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}_.count!==-1&&(t?s.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):s.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(s.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const f=n.get(h);(!f||f.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);if(d===void 0)n.set(h,i(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,u),d.version=h.version}}return{get:o,remove:a,update:l}}class Lo extends Ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,d=e/a,f=t/l,_=[],v=[],S=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let y=0;y<h;y++){const R=y*d-r;v.push(R,-A,0),S.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const y=A+h*p,R=A+h*(p+1),D=A+1+h*(p+1),P=A+1+h*p;_.push(y,R,P),_.push(R,D,P)}this.setIndex(_),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(S,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,S_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:dg,aomap_pars_fragment:fg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:_g,bsdfs:vg,iridescence_fragment:xg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:bg,color_fragment:Tg,color_pars_fragment:Ag,color_pars_vertex:wg,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Dg,emissivemap_fragment:Ng,emissivemap_pars_fragment:Ug,colorspace_fragment:Og,colorspace_pars_fragment:Fg,envmap_fragment:Bg,envmap_common_pars_fragment:kg,envmap_pars_fragment:zg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Gg,fog_vertex:Vg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:jg,lightmap_fragment:Yg,lightmap_pars_fragment:$g,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:Zg,lights_pars_begin:Jg,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:d_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:__,metalnessmap_pars_fragment:v_,morphinstance_vertex:x_,morphcolor_vertex:y_,morphnormal_vertex:M_,morphtarget_pars_vertex:S_,morphtarget_vertex:E_,normal_fragment_begin:b_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:w_,normal_vertex:R_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:D_,opaque_fragment:N_,packing:U_,premultiplied_alpha_fragment:O_,project_vertex:F_,dithering_fragment:B_,dithering_pars_fragment:k_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:j_,skinning_vertex:Y_,skinnormal_vertex:$_,specularmap_fragment:K_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:Q_,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:hv,cube_frag:uv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:yv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:Ev,meshmatcap_vert:bv,meshmatcap_frag:Tv,meshnormal_vert:Av,meshnormal_frag:wv,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Lv,meshphysical_frag:Pv,meshtoon_vert:Iv,meshtoon_frag:Dv,points_vert:Nv,points_frag:Uv,shadow_vert:Ov,shadow_frag:Fv,sprite_vert:Bv,sprite_frag:kv},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Xn={basic:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:an([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:an([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:an([pe.points,pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:an([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:an([pe.common,pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:an([pe.sprite,pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:an([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:an([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Xn.physical={uniforms:an([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const lo={r:0,b:0,g:0},Yi=new $n,zv=new Ke;function Hv(s,e,t,n,i,r,o){const a=new Ye(0);let l=r===!0?0:1,h,u,d=null,f=0,_=null;function v(m,p){let A=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?S(a,l):y&&y.isColor&&(S(y,1),A=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ro)?(u===void 0&&(u=new fn(new br(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Ys(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Yi.copy(p.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zv.makeRotationFromEuler(Yi)),u.material.toneMapped=gt.getTransfer(y.colorSpace)!==Lt,(d!==y||f!==y.version||_!==s.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,_=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new fn(new Lo(2,2),new Di({name:"BackgroundMaterial",uniforms:Ys(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=gt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,_=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function S(m,p){m.getRGB(lo,rd(s)),n.buffers.color.setClear(lo.r,lo.g,lo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(a,l)},render:v}}function Gv(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let h=l,u=!1;function d(F,Q,$,ee,K){let J=!1;if(o){const O=S(ee,$,Q);h!==O&&(h=O,_(h.object)),J=p(F,ee,$,K),J&&A(F,ee,$,K)}else{const O=Q.wireframe===!0;(h.geometry!==ee.id||h.program!==$.id||h.wireframe!==O)&&(h.geometry=ee.id,h.program=$.id,h.wireframe=O,J=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,q(F,Q,$,ee),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function _(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function v(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function S(F,Q,$){const ee=$.wireframe===!0;let K=a[F.id];K===void 0&&(K={},a[F.id]=K);let J=K[Q.id];J===void 0&&(J={},K[Q.id]=J);let O=J[ee];return O===void 0&&(O=m(f()),J[ee]=O),O}function m(F){const Q=[],$=[],ee=[];for(let K=0;K<i;K++)Q[K]=0,$[K]=0,ee[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:$,attributeDivisors:ee,object:F,attributes:{},index:null}}function p(F,Q,$,ee){const K=h.attributes,J=Q.attributes;let O=0;const de=$.getAttributes();for(const be in de)if(de[be].location>=0){const X=K[be];let oe=J[be];if(oe===void 0&&(be==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),be==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),X===void 0||X.attribute!==oe||oe&&X.data!==oe.data)return!0;O++}return h.attributesNum!==O||h.index!==ee}function A(F,Q,$,ee){const K={},J=Q.attributes;let O=0;const de=$.getAttributes();for(const be in de)if(de[be].location>=0){let X=J[be];X===void 0&&(be==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),be==="instanceColor"&&F.instanceColor&&(X=F.instanceColor));const oe={};oe.attribute=X,X&&X.data&&(oe.data=X.data),K[be]=oe,O++}h.attributes=K,h.attributesNum=O,h.index=ee}function y(){const F=h.newAttributes;for(let Q=0,$=F.length;Q<$;Q++)F[Q]=0}function R(F){D(F,0)}function D(F,Q){const $=h.newAttributes,ee=h.enabledAttributes,K=h.attributeDivisors;$[F]=1,ee[F]===0&&(s.enableVertexAttribArray(F),ee[F]=1),K[F]!==Q&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Q),K[F]=Q)}function P(){const F=h.newAttributes,Q=h.enabledAttributes;for(let $=0,ee=Q.length;$<ee;$++)Q[$]!==F[$]&&(s.disableVertexAttribArray($),Q[$]=0)}function L(F,Q,$,ee,K,J,O){O===!0?s.vertexAttribIPointer(F,Q,$,K,J):s.vertexAttribPointer(F,Q,$,ee,K,J)}function q(F,Q,$,ee){if(n.isWebGL2===!1&&(F.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const K=ee.attributes,J=$.getAttributes(),O=Q.defaultAttributeValues;for(const de in J){const be=J[de];if(be.location>=0){let Ge=K[de];if(Ge===void 0&&(de==="instanceMatrix"&&F.instanceMatrix&&(Ge=F.instanceMatrix),de==="instanceColor"&&F.instanceColor&&(Ge=F.instanceColor)),Ge!==void 0){const X=Ge.normalized,oe=Ge.itemSize,ge=t.get(Ge);if(ge===void 0)continue;const Ue=ge.buffer,ne=ge.type,Se=ge.bytesPerElement,dt=n.isWebGL2===!0&&(ne===s.INT||ne===s.UNSIGNED_INT||Ge.gpuType===zu);if(Ge.isInterleavedBufferAttribute){const ke=Ge.data,z=ke.stride,It=Ge.offset;if(ke.isInstancedInterleavedBuffer){for(let Ce=0;Ce<be.locationSize;Ce++)D(be.location+Ce,ke.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Ce=0;Ce<be.locationSize;Ce++)R(be.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ce=0;Ce<be.locationSize;Ce++)L(be.location+Ce,oe/be.locationSize,ne,X,z*Se,(It+oe/be.locationSize*Ce)*Se,dt)}else{if(Ge.isInstancedBufferAttribute){for(let ke=0;ke<be.locationSize;ke++)D(be.location+ke,Ge.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let ke=0;ke<be.locationSize;ke++)R(be.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ke=0;ke<be.locationSize;ke++)L(be.location+ke,oe/be.locationSize,ne,X,oe*Se,oe/be.locationSize*ke*Se,dt)}}else if(O!==void 0){const X=O[de];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(be.location,X);break;case 3:s.vertexAttrib3fv(be.location,X);break;case 4:s.vertexAttrib4fv(be.location,X);break;default:s.vertexAttrib1fv(be.location,X)}}}}P()}function ie(){ce();for(const F in a){const Q=a[F];for(const $ in Q){const ee=Q[$];for(const K in ee)v(ee[K].object),delete ee[K];delete Q[$]}delete a[F]}}function b(F){if(a[F.id]===void 0)return;const Q=a[F.id];for(const $ in Q){const ee=Q[$];for(const K in ee)v(ee[K].object),delete ee[K];delete Q[$]}delete a[F.id]}function C(F){for(const Q in a){const $=a[Q];if($[F.id]===void 0)continue;const ee=$[F.id];for(const K in ee)v(ee[K].object),delete ee[K];delete $[F.id]}}function ce(){ae(),u=!0,h!==l&&(h=l,_(h.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ce,resetDefaultState:ae,dispose:ie,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:R,disableUnusedAttributes:P}}function Vv(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}function a(u,d){s.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,f){if(f===0)return;let _,v;if(i)_=s,v="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](r,u,d,f),t.update(d,r,f)}function h(u,d,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<f;v++)this.render(u[v],d[v]);else{_.multiDrawArraysWEBGL(r,u,0,d,0,f);let v=0;for(let S=0;S<f;S++)v+=d[S];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=h}function Wv(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const h=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,R=o||e.has("OES_texture_float"),D=y&&R,P=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:y,floatFragmentTextures:R,floatVertexTextures:D,maxSamples:P}}function Xv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Zi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||n!==0||i;return i=f,n=d.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,_){const v=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||v===null||v.length===0||r&&!m)r?u(null):h();else{const A=r?0:n,y=A*4;let R=p.clippingState||null;l.value=R,R=u(v,f,y,_);for(let D=0;D!==y;++D)R[D]=t[D];p.clippingState=R,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,_,v){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const p=_+S*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,R=_;y!==S;++y,R+=4)o.copy(d[y]).applyMatrix4(A,a),o.normal.toArray(m,R),m[R+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function qv(s){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=Gs:a===Ka&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Ka)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new ng(l.height);return h.fromEquirectangularTexture(s,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class gl extends od{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,Hh=[.125,.215,.35,.446,.526,.582],es=20,La=new gl,Gh=new Ye;let Pa=null,Ia=0,Da=0;const Ji=(1+Math.sqrt(5))/2,Is=1/Ji,Vh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ji,Is),new I(0,Ji,-Is),new I(Is,0,Ji),new I(-Is,0,Ji),new I(Ji,Is,0),new I(-Ji,Is,0)];class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Ia,Da),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:yr,format:Cn,colorSpace:$t,depthBuffer:!1},i=Xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(r)),this._blurMaterial=Yv(r,e,t)}return i}_compileMaterial(e){const t=new fn(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,i){const a=new dn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Gh),u.toneMapping=Pi,u.autoClear=!1;const _=new Ri({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),v=new fn(new br,_);let S=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,S=!0):(_.color.copy(Gh),S=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const y=this._cubeSize;co(i,A*y,p>2?y:0,y,y),u.setRenderTarget(i),S&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gs||e.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Vh[(i-1)%Vh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new fn(this._lodPlanes[i],h),f=h.uniforms,_=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*es-1),S=r/v,m=isFinite(r)?1+Math.floor(u*S):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const p=[];let A=0;for(let L=0;L<es;++L){const q=L/S,ie=Math.exp(-q*q/2);p.push(ie),L===0?A+=ie:L<m&&(A+=2*ie)}for(let L=0;L<p.length;L++)p[L]=p[L]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const R=this._sizeLods[i],D=3*R*(i>y-Fs?i-y+Fs:0),P=4*(this._cubeSize-R);co(t,D,P,3*R,2*R),l.setRenderTarget(t),l.render(d,La)}}function jv(s){const e=[],t=[],n=[];let i=s;const r=s-Fs+1+Hh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Fs?l=Hh[o-s+Fs-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,v=6,S=3,m=2,p=1,A=new Float32Array(S*v*_),y=new Float32Array(m*v*_),R=new Float32Array(p*v*_);for(let P=0;P<_;P++){const L=P%3*2/3-1,q=P>2?0:-1,ie=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];A.set(ie,S*v*P),y.set(f,m*v*P);const b=[P,P,P,P,P,P];R.set(b,p*v*P)}const D=new Ln;D.setAttribute("position",new cn(A,S)),D.setAttribute("uv",new cn(y,m)),D.setAttribute("faceIndex",new cn(R,p)),e.push(D),i>Fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xh(s,e,t){const n=new ss(s,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Yv(s,e,t){const n=new Float32Array(es),i=new I(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function qh(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function jh(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $v(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===$a||l===Ka,u=l===Gs||l===Vs;if(h||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Wh(s)),d=h?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(h&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Wh(s));const f=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zv(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const S=f.morphAttributes[v];for(let m=0,p=S.length;m<p;m++)e.remove(S[m])}f.removeEventListener("dispose",o),delete i[f.id];const _=r.get(f);_&&(e.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],s.ARRAY_BUFFER);const _=d.morphAttributes;for(const v in _){const S=_[v];for(let m=0,p=S.length;m<p;m++)e.update(S[m],s.ARRAY_BUFFER)}}function h(d){const f=[],_=d.index,v=d.attributes.position;let S=0;if(_!==null){const A=_.array;S=_.version;for(let y=0,R=A.length;y<R;y+=3){const D=A[y+0],P=A[y+1],L=A[y+2];f.push(D,P,P,L,L,D)}}else if(v!==void 0){const A=v.array;S=v.version;for(let y=0,R=A.length/3-1;y<R;y+=3){const D=y+0,P=y+1,L=y+2;f.push(D,P,P,L,L,D)}}else return;const m=new(Zu(f)?sd:id)(f,1);m.version=S;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Jv(s,e,t,n){const i=n.isWebGL2;let r;function o(_){r=_}let a,l;function h(_){a=_.type,l=_.bytesPerElement}function u(_,v){s.drawElements(r,v,a,_*l),t.update(v,r,1)}function d(_,v,S){if(S===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,v,a,_*l,S),t.update(v,r,S)}function f(_,v,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<S;p++)this.render(_[p]/l,v[p]);else{m.multiDrawElementsWEBGL(r,v,0,a,_,0,S);let p=0;for(let A=0;A<S;A++)p+=v[A];t.update(p,r,1)}}this.setMode=o,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Qv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ex(s,e){return s[0]-e[0]}function tx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function nx(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new At,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,u,d){const f=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(u);if(S===void 0||S.count!==v){let ce=function(){b.dispose(),r.delete(u),u.removeEventListener("dispose",ce)};S!==void 0&&S.texture.dispose();const m=u.morphAttributes.position!==void 0,p=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let P=0;m===!0&&(P=1),p===!0&&(P=2),A===!0&&(P=3);let L=u.attributes.position.count*P,q=1;L>e.maxTextureSize&&(q=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const ie=new Float32Array(L*q*4*v),b=new td(ie,L,q,v);b.type=Fn,b.needsUpdate=!0;const C=P*4;for(let ae=0;ae<v;ae++){const F=y[ae],Q=R[ae],$=D[ae],ee=L*q*4*ae;for(let K=0;K<F.count;K++){const J=K*C;m===!0&&(o.fromBufferAttribute(F,K),ie[ee+J+0]=o.x,ie[ee+J+1]=o.y,ie[ee+J+2]=o.z,ie[ee+J+3]=0),p===!0&&(o.fromBufferAttribute(Q,K),ie[ee+J+4]=o.x,ie[ee+J+5]=o.y,ie[ee+J+6]=o.z,ie[ee+J+7]=0),A===!0&&(o.fromBufferAttribute($,K),ie[ee+J+8]=o.x,ie[ee+J+9]=o.y,ie[ee+J+10]=o.z,ie[ee+J+11]=$.itemSize===4?o.w:1)}}S={count:v,texture:b,size:new st(L,q)},r.set(u,S),u.addEventListener("dispose",ce)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",h.morphTexture,t);else{let m=0;for(let A=0;A<f.length;A++)m+=f[A];const p=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",f)}d.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}else{const _=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==_){v=[];for(let y=0;y<_;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<_;y++){const R=v[y];R[0]=y,R[1]=f[y]}v.sort(tx);for(let y=0;y<8;y++)y<_&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(ex);const S=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const R=a[y],D=R[0],P=R[1];D!==Number.MAX_SAFE_INTEGER&&P?(S&&u.getAttribute("morphTarget"+y)!==S[D]&&u.setAttribute("morphTarget"+y,S[D]),m&&u.getAttribute("morphNormal"+y)!==m[D]&&u.setAttribute("morphNormal"+y,m[D]),i[y]=P,p+=P):(S&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const A=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ix(s,e,t,n){let i=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==h&&(e.update(d),i.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==h&&(f.update(),i.set(f,h))}return d}function o(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class cd extends qt{constructor(e,t,n,i,r,o,a,l,h,u){if(u=u!==void 0?u:is,u!==is&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===is&&(n=wi),n===void 0&&u===Xs&&(n=ns),super(null,i,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hd=new qt,ud=new cd(1,1);ud.compareFunction=Ku;const dd=new td,fd=new km,pd=new ad,Yh=[],$h=[],Kh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function Zs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Yh[i];if(r===void 0&&(r=new Float32Array(i),Yh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Po(s,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function sx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function lx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Jh.set(n),s.uniformMatrix2fv(this.addr,!1,Jh),Ht(t,n)}}function cx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Zh.set(n),s.uniformMatrix3fv(this.addr,!1,Zh),Ht(t,n)}}function hx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Kh.set(n),s.uniformMatrix4fv(this.addr,!1,Kh),Ht(t,n)}}function ux(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function px(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function mx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function _x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function xx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?ud:hd;t.setTexture2D(e||r,i)}function yx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fd,i)}function Mx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pd,i)}function Sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dd,i)}function Ex(s){switch(s){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function bx(s,e){s.uniform1fv(this.addr,e)}function Tx(s,e){const t=Zs(e,this.size,2);s.uniform2fv(this.addr,t)}function Ax(s,e){const t=Zs(e,this.size,3);s.uniform3fv(this.addr,t)}function wx(s,e){const t=Zs(e,this.size,4);s.uniform4fv(this.addr,t)}function Rx(s,e){const t=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cx(s,e){const t=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Lx(s,e){const t=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Px(s,e){s.uniform1iv(this.addr,e)}function Ix(s,e){s.uniform2iv(this.addr,e)}function Dx(s,e){s.uniform3iv(this.addr,e)}function Nx(s,e){s.uniform4iv(this.addr,e)}function Ux(s,e){s.uniform1uiv(this.addr,e)}function Ox(s,e){s.uniform2uiv(this.addr,e)}function Fx(s,e){s.uniform3uiv(this.addr,e)}function Bx(s,e){s.uniform4uiv(this.addr,e)}function kx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hd,r[o])}function zx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||fd,r[o])}function Hx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||pd,r[o])}function Gx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dd,r[o])}function Vx(s){switch(s){case 5126:return bx;case 35664:return Tx;case 35665:return Ax;case 35666:return wx;case 35674:return Rx;case 35675:return Cx;case 35676:return Lx;case 5124:case 35670:return Px;case 35667:case 35671:return Ix;case 35668:case 35672:return Dx;case 35669:case 35673:return Nx;case 5125:return Ux;case 36294:return Ox;case 36295:return Fx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Gx}}class Wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ex(t.type)}}class Xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vx(t.type)}}class qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Qh(s,e){s.seq.push(e),s.map[e.id]=e}function jx(s,e,t){const n=s.name,i=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),o=Na.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){Qh(t,h===void 0?new Wx(a,s,e):new Xx(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new qx(a),Qh(t,d)),t=d}}}class xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);jx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function eu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Yx=37297;let $x=0;function Kx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Zx(s){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(s);let n;switch(e===t?n="":e===To&&t===bo?n="LinearDisplayP3ToLinearSRGB":e===bo&&t===To&&(n="LinearSRGBToLinearDisplayP3"),s){case $t:case Co:return[n,"LinearTransferOETF"];case ln:case dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function tu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Kx(s.getShaderSource(e),o)}else return i}function Jx(s,e){const t=Zx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qx(s,e){let t;switch(e){case Vp:t="Linear";break;case Wp:t="Reinhard";break;case Xp:t="OptimizedCineon";break;case qp:t="ACESFilmic";break;case Yp:t="AgX";break;case $p:t="Neutral";break;case jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function e0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function t0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function n0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Bs(s){return s!==""}function nu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(s){return s.replace(s0,o0)}const r0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o0(s,e){let t=et[e];if(t===void 0){const n=r0.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(s){return s.replace(a0,l0)}function l0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ru(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_p?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function h0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function d0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bu:e="ENVMAP_BLENDING_MULTIPLY";break;case Hp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function f0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function p0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=c0(t),h=h0(t),u=u0(t),d=d0(t),f=f0(t),_=t.isWebGL2?"":e0(t),v=t0(t),S=n0(r),m=i.createProgram();let p,A,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Bs).join(`
`),p.length>0&&(p+=`
`),A=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Bs).join(`
`),A.length>0&&(A+=`
`)):(p=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),A=[_,ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?et.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=nl(o),o=nu(o,t),o=iu(o,t),a=nl(a),a=nu(a,t),a=iu(a,t),o=su(o),a=su(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const R=y+p+o,D=y+A+a,P=eu(i,i.VERTEX_SHADER,R),L=eu(i,i.FRAGMENT_SHADER,D);i.attachShader(m,P),i.attachShader(m,L),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function q(ce){if(s.debug.checkShaderErrors){const ae=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(P).trim(),Q=i.getShaderInfoLog(L).trim();let $=!0,ee=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,P,L);else{const K=tu(i,P,"vertex"),J=tu(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+ce.name+`
Material Type: `+ce.type+`

Program Info Log: `+ae+`
`+K+`
`+J)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(F===""||Q==="")&&(ee=!1);ee&&(ce.diagnostics={runnable:$,programLog:ae,vertexShader:{log:F,prefix:p},fragmentShader:{log:Q,prefix:A}})}i.deleteShader(P),i.deleteShader(L),ie=new xo(i,m),b=i0(i,m)}let ie;this.getUniforms=function(){return ie===void 0&&q(this),ie};let b;this.getAttributes=function(){return b===void 0&&q(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(m,Yx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$x++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=L,this}let m0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _0(e),t.set(e,n)),n}}class _0{constructor(e){this.id=m0++,this.code=e,this.usedTimes=0}}function v0(s,e,t,n,i,r,o){const a=new pl,l=new g0,h=new Set,u=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,_=i.vertexTextures;let v=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return h.add(b),b===0?"uv":`uv${b}`}function p(b,C,ce,ae,F){const Q=ae.fog,$=F.geometry,ee=b.isMeshStandardMaterial?ae.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),J=K&&K.mapping===Ro?K.image.height:null,O=S[b.type];b.precision!==null&&(v=i.getMaxPrecision(b.precision),v!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,be=de!==void 0?de.length:0;let Ge=0;$.morphAttributes.position!==void 0&&(Ge=1),$.morphAttributes.normal!==void 0&&(Ge=2),$.morphAttributes.color!==void 0&&(Ge=3);let X,oe,ge,Ue;if(O){const ut=Xn[O];X=ut.vertexShader,oe=ut.fragmentShader}else X=b.vertexShader,oe=b.fragmentShader,l.update(b),ge=l.getVertexShaderID(b),Ue=l.getFragmentShaderID(b);const ne=s.getRenderTarget(),Se=F.isInstancedMesh===!0,dt=F.isBatchedMesh===!0,ke=!!b.map,z=!!b.matcap,It=!!K,Ce=!!b.aoMap,Ve=!!b.lightMap,Re=!!b.bumpMap,at=!!b.normalMap,Ze=!!b.displacementMap,nt=!!b.emissiveMap,Dt=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,Y=b.clearcoat>0,Z=b.iridescence>0,se=b.sheen>0,re=b.transmission>0,Oe=M&&!!b.anisotropyMap,Le=Y&&!!b.clearcoatMap,he=Y&&!!b.clearcoatNormalMap,me=Y&&!!b.clearcoatRoughnessMap,$e=Z&&!!b.iridescenceMap,le=Z&&!!b.iridescenceThicknessMap,Ut=se&&!!b.sheenColorMap,it=se&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Ae=!!b.specularColorMap,we=!!b.specularIntensityMap,lt=re&&!!b.transmissionMap,We=re&&!!b.thicknessMap,_t=!!b.gradientMap,N=!!b.alphaMap,_e=b.alphaTest>0,V=!!b.alphaHash,ue=!!b.extensions;let xe=Pi;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xe=s.toneMapping);const rt={isWebGL2:d,shaderID:O,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:oe,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:Ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:dt,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$t,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:z,envMap:It,envMapMode:It&&K.mapping,envMapCubeUVHeight:J,aoMap:Ce,lightMap:Ve,bumpMap:Re,normalMap:at,displacementMap:_&&Ze,emissiveMap:nt,normalMapObjectSpace:at&&b.normalMapType===um,normalMapTangentSpace:at&&b.normalMapType===$u,metalnessMap:Dt,roughnessMap:w,anisotropy:M,anisotropyMap:Oe,clearcoat:Y,clearcoatMap:Le,clearcoatNormalMap:he,clearcoatRoughnessMap:me,iridescence:Z,iridescenceMap:$e,iridescenceThicknessMap:le,sheen:se,sheenColorMap:Ut,sheenRoughnessMap:it,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:we,transmission:re,transmissionMap:lt,thicknessMap:We,gradientMap:_t,opaque:b.transparent===!1&&b.blending===ks&&b.alphaToCoverage===!1,alphaMap:N,alphaTest:_e,alphaHash:V,combine:b.combine,mapUv:ke&&m(b.map.channel),aoMapUv:Ce&&m(b.aoMap.channel),lightMapUv:Ve&&m(b.lightMap.channel),bumpMapUv:Re&&m(b.bumpMap.channel),normalMapUv:at&&m(b.normalMap.channel),displacementMapUv:Ze&&m(b.displacementMap.channel),emissiveMapUv:nt&&m(b.emissiveMap.channel),metalnessMapUv:Dt&&m(b.metalnessMap.channel),roughnessMapUv:w&&m(b.roughnessMap.channel),anisotropyMapUv:Oe&&m(b.anisotropyMap.channel),clearcoatMapUv:Le&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&m(b.sheenRoughnessMap.channel),specularMapUv:Pe&&m(b.specularMap.channel),specularColorMapUv:Ae&&m(b.specularColorMap.channel),specularIntensityMapUv:we&&m(b.specularIntensityMap.channel),transmissionMapUv:lt&&m(b.transmissionMap.channel),thicknessMapUv:We&&m(b.thicknessMap.channel),alphaMapUv:N&&m(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(at||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(ke||N),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ge,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&ce.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qn,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ue&&b.extensions.derivatives===!0,extensionFragDepth:ue&&b.extensions.fragDepth===!0,extensionDrawBuffers:ue&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ue&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=h.has(1),rt.vertexUv2s=h.has(2),rt.vertexUv3s=h.has(3),h.clear(),rt}function A(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ce in b.defines)C.push(ce),C.push(b.defines[ce]);return b.isRawShaderMaterial===!1&&(y(C,b),R(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function y(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function R(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),b.push(a.mask)}function D(b){const C=S[b.type];let ce;if(C){const ae=Xn[C];ce=Jm.clone(ae.uniforms)}else ce=b.uniforms;return ce}function P(b,C){let ce;for(let ae=0,F=u.length;ae<F;ae++){const Q=u[ae];if(Q.cacheKey===C){ce=Q,++ce.usedTimes;break}}return ce===void 0&&(ce=new p0(s,C,b,r),u.push(ce)),ce}function L(b){if(--b.usedTimes===0){const C=u.indexOf(b);u[C]=u[u.length-1],u.pop(),b.destroy()}}function q(b){l.remove(b)}function ie(){l.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:D,acquireProgram:P,releaseProgram:L,releaseShaderCache:q,programs:u,dispose:ie}}function x0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function y0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ou(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function au(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,_,v,S,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:_,groupOrder:v,renderOrder:d.renderOrder,z:S,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=_,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=S,p.group=m),e++,p}function a(d,f,_,v,S,m){const p=o(d,f,_,v,S,m);_.transmission>0?n.push(p):_.transparent===!0?i.push(p):t.push(p)}function l(d,f,_,v,S,m){const p=o(d,f,_,v,S,m);_.transmission>0?n.unshift(p):_.transparent===!0?i.unshift(p):t.unshift(p)}function h(d,f){t.length>1&&t.sort(d||y0),n.length>1&&n.sort(f||ou),i.length>1&&i.sort(f||ou)}function u(){for(let d=e,f=s.length;d<f;d++){const _=s[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:h}}function M0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new au,s.set(n,[o])):i>=r.length?(o=new au,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function S0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ye};break;case"SpotLight":t={position:new I,direction:new I,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function E0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let b0=0;function T0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function A0(s,e){const t=new S0,n=E0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,o=new Ke,a=new Ke;function l(u,d){let f=0,_=0,v=0;for(let ce=0;ce<9;ce++)i.probe[ce].set(0,0,0);let S=0,m=0,p=0,A=0,y=0,R=0,D=0,P=0,L=0,q=0,ie=0;u.sort(T0);const b=d===!0?Math.PI:1;for(let ce=0,ae=u.length;ce<ae;ce++){const F=u[ce],Q=F.color,$=F.intensity,ee=F.distance,K=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=Q.r*$*b,_+=Q.g*$*b,v+=Q.b*$*b;else if(F.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(F.sh.coefficients[J],$);ie++}else if(F.isDirectionalLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity*b),F.castShadow){const O=F.shadow,de=n.get(F);de.shadowBias=O.bias,de.shadowNormalBias=O.normalBias,de.shadowRadius=O.radius,de.shadowMapSize=O.mapSize,i.directionalShadow[S]=de,i.directionalShadowMap[S]=K,i.directionalShadowMatrix[S]=F.shadow.matrix,R++}i.directional[S]=J,S++}else if(F.isSpotLight){const J=t.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(Q).multiplyScalar($*b),J.distance=ee,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,i.spot[p]=J;const O=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,O.updateMatrices(F),F.castShadow&&q++),i.spotLightMatrix[p]=O.matrix,F.castShadow){const de=n.get(F);de.shadowBias=O.bias,de.shadowNormalBias=O.normalBias,de.shadowRadius=O.radius,de.shadowMapSize=O.mapSize,i.spotShadow[p]=de,i.spotShadowMap[p]=K,P++}p++}else if(F.isRectAreaLight){const J=t.get(F);J.color.copy(Q).multiplyScalar($),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),i.rectArea[A]=J,A++}else if(F.isPointLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity*b),J.distance=F.distance,J.decay=F.decay,F.castShadow){const O=F.shadow,de=n.get(F);de.shadowBias=O.bias,de.shadowNormalBias=O.normalBias,de.shadowRadius=O.radius,de.shadowMapSize=O.mapSize,de.shadowCameraNear=O.camera.near,de.shadowCameraFar=O.camera.far,i.pointShadow[m]=de,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=F.shadow.matrix,D++}i.point[m]=J,m++}else if(F.isHemisphereLight){const J=t.get(F);J.skyColor.copy(F.color).multiplyScalar($*b),J.groundColor.copy(F.groundColor).multiplyScalar($*b),i.hemi[y]=J,y++}}A>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=_,i.ambient[2]=v;const C=i.hash;(C.directionalLength!==S||C.pointLength!==m||C.spotLength!==p||C.rectAreaLength!==A||C.hemiLength!==y||C.numDirectionalShadows!==R||C.numPointShadows!==D||C.numSpotShadows!==P||C.numSpotMaps!==L||C.numLightProbes!==ie)&&(i.directional.length=S,i.spot.length=p,i.rectArea.length=A,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=P+L-q,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=q,i.numLightProbes=ie,C.directionalLength=S,C.pointLength=m,C.spotLength=p,C.rectAreaLength=A,C.hemiLength=y,C.numDirectionalShadows=R,C.numPointShadows=D,C.numSpotShadows=P,C.numSpotMaps=L,C.numLightProbes=ie,i.version=b0++)}function h(u,d){let f=0,_=0,v=0,S=0,m=0;const p=d.matrixWorldInverse;for(let A=0,y=u.length;A<y;A++){const R=u[A];if(R.isDirectionalLight){const D=i.directional[f];D.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),f++}else if(R.isSpotLight){const D=i.spot[v];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),v++}else if(R.isRectAreaLight){const D=i.rectArea[S];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(p),a.identity(),o.copy(R.matrixWorld),o.premultiply(p),a.extractRotation(o),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),S++}else if(R.isPointLight){const D=i.point[_];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(p),_++}else if(R.isHemisphereLight){const D=i.hemi[m];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:i}}function lu(s,e){const t=new A0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function h(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function w0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new lu(s,e),t.set(r,[l])):o>=a.length?(l=new lu(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class R0 extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C0 extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I0(s,e,t){let n=new ml;const i=new st,r=new st,o=new At,a=new R0({depthPacking:hm}),l=new C0,h={},u=t.maxTextureSize,d={[hi]:pn,[pn]:hi,[qn]:qn},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:L0,fragmentShader:P0}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new Ln;v.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new fn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let p=this.type;this.render=function(P,L,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const ie=s.getRenderTarget(),b=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),ce=s.state;ce.setBlending(Li),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ae=p!==ai&&this.type===ai,F=p===ai&&this.type!==ai;for(let Q=0,$=P.length;Q<$;Q++){const ee=P[Q],K=ee.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const J=K.getFrameExtents();if(i.multiply(J),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/J.x),i.x=r.x*J.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/J.y),i.y=r.y*J.y,K.mapSize.y=r.y)),K.map===null||ae===!0||F===!0){const de=this.type!==ai?{minFilter:Wt,magFilter:Wt}:{};K.map!==null&&K.map.dispose(),K.map=new ss(i.x,i.y,de),K.map.texture.name=ee.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const O=K.getViewportCount();for(let de=0;de<O;de++){const be=K.getViewport(de);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),ce.viewport(o),K.updateMatrices(ee,de),n=K.getFrustum(),R(L,q,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===ai&&A(K,q),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(ie,b,C)};function A(P,L){const q=e.update(S);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ss(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(L,null,q,f,S,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(L,null,q,_,S,null)}function y(P,L,q,ie){let b=null;const C=q.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)b=C;else if(b=q.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ce=b.uuid,ae=L.uuid;let F=h[ce];F===void 0&&(F={},h[ce]=F);let Q=F[ae];Q===void 0&&(Q=b.clone(),F[ae]=Q,L.addEventListener("dispose",D)),b=Q}if(b.visible=L.visible,b.wireframe=L.wireframe,ie===ai?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ce=s.properties.get(b);ce.light=q}return b}function R(P,L,q,ie,b){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===ai)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld);const ae=e.update(P),F=P.material;if(Array.isArray(F)){const Q=ae.groups;for(let $=0,ee=Q.length;$<ee;$++){const K=Q[$],J=F[K.materialIndex];if(J&&J.visible){const O=y(P,J,ie,b);P.onBeforeShadow(s,P,L,q,ae,O,K),s.renderBufferDirect(q,null,ae,O,P,K),P.onAfterShadow(s,P,L,q,ae,O,K)}}}else if(F.visible){const Q=y(P,F,ie,b);P.onBeforeShadow(s,P,L,q,ae,Q,null),s.renderBufferDirect(q,null,ae,Q,P,null),P.onAfterShadow(s,P,L,q,ae,Q,null)}}const ce=P.children;for(let ae=0,F=ce.length;ae<F;ae++)R(ce[ae],L,q,ie,b)}function D(P){P.target.removeEventListener("dispose",D);for(const q in h){const ie=h[q],b=P.target.uuid;b in ie&&(ie[b].dispose(),delete ie[b])}}}function D0(s,e,t){const n=t.isWebGL2;function i(){let N=!1;const _e=new At;let V=null;const ue=new At(0,0,0,0);return{setMask:function(xe){V!==xe&&!N&&(s.colorMask(xe,xe,xe,xe),V=xe)},setLocked:function(xe){N=xe},setClear:function(xe,rt,ut,Nt,hn){hn===!0&&(xe*=Nt,rt*=Nt,ut*=Nt),_e.set(xe,rt,ut,Nt),ue.equals(_e)===!1&&(s.clearColor(xe,rt,ut,Nt),ue.copy(_e))},reset:function(){N=!1,V=null,ue.set(-1,0,0,0)}}}function r(){let N=!1,_e=null,V=null,ue=null;return{setTest:function(xe){xe?Se(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(xe){_e!==xe&&!N&&(s.depthMask(xe),_e=xe)},setFunc:function(xe){if(V!==xe){switch(xe){case Np:s.depthFunc(s.NEVER);break;case Up:s.depthFunc(s.ALWAYS);break;case Op:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case Fp:s.depthFunc(s.EQUAL);break;case Bp:s.depthFunc(s.GEQUAL);break;case kp:s.depthFunc(s.GREATER);break;case zp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}V=xe}},setLocked:function(xe){N=xe},setClear:function(xe){ue!==xe&&(s.clearDepth(xe),ue=xe)},reset:function(){N=!1,_e=null,V=null,ue=null}}}function o(){let N=!1,_e=null,V=null,ue=null,xe=null,rt=null,ut=null,Nt=null,hn=null;return{setTest:function(Mt){N||(Mt?Se(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(Mt){_e!==Mt&&!N&&(s.stencilMask(Mt),_e=Mt)},setFunc:function(Mt,jt,xn){(V!==Mt||ue!==jt||xe!==xn)&&(s.stencilFunc(Mt,jt,xn),V=Mt,ue=jt,xe=xn)},setOp:function(Mt,jt,xn){(rt!==Mt||ut!==jt||Nt!==xn)&&(s.stencilOp(Mt,jt,xn),rt=Mt,ut=jt,Nt=xn)},setLocked:function(Mt){N=Mt},setClear:function(Mt){hn!==Mt&&(s.clearStencil(Mt),hn=Mt)},reset:function(){N=!1,_e=null,V=null,ue=null,xe=null,rt=null,ut=null,Nt=null,hn=null}}}const a=new i,l=new r,h=new o,u=new WeakMap,d=new WeakMap;let f={},_={},v=new WeakMap,S=[],m=null,p=!1,A=null,y=null,R=null,D=null,P=null,L=null,q=null,ie=new Ye(0,0,0),b=0,C=!1,ce=null,ae=null,F=null,Q=null,$=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),K=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),K=J>=2);let de=null,be={};const Ge=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),oe=new At().fromArray(Ge),ge=new At().fromArray(X);function Ue(N,_e,V,ue){const xe=new Uint8Array(4),rt=s.createTexture();s.bindTexture(N,rt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<V;ut++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(_e,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(_e+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return rt}const ne={};ne[s.TEXTURE_2D]=Ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ne[s.TEXTURE_2D_ARRAY]=Ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Se(s.DEPTH_TEST),l.setFunc(yo),Ze(!1),nt(Gc),Se(s.CULL_FACE),Re(Li);function Se(N){f[N]!==!0&&(s.enable(N),f[N]=!0)}function dt(N){f[N]!==!1&&(s.disable(N),f[N]=!1)}function ke(N,_e){return _[N]!==_e?(s.bindFramebuffer(N,_e),_[N]=_e,n&&(N===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=_e),N===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=_e)),!0):!1}function z(N,_e){let V=S,ue=!1;if(N){V=v.get(_e),V===void 0&&(V=[],v.set(_e,V));const xe=N.textures;if(V.length!==xe.length||V[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,ut=xe.length;rt<ut;rt++)V[rt]=s.COLOR_ATTACHMENT0+rt;V.length=xe.length,ue=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,ue=!0);if(ue)if(t.isWebGL2)s.drawBuffers(V);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function It(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const Ce={[Qi]:s.FUNC_ADD,[xp]:s.FUNC_SUBTRACT,[yp]:s.FUNC_REVERSE_SUBTRACT};if(n)Ce[qc]=s.MIN,Ce[jc]=s.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ce[qc]=N.MIN_EXT,Ce[jc]=N.MAX_EXT)}const Ve={[Mp]:s.ZERO,[Sp]:s.ONE,[Ep]:s.SRC_COLOR,[ja]:s.SRC_ALPHA,[Cp]:s.SRC_ALPHA_SATURATE,[wp]:s.DST_COLOR,[Tp]:s.DST_ALPHA,[bp]:s.ONE_MINUS_SRC_COLOR,[Ya]:s.ONE_MINUS_SRC_ALPHA,[Rp]:s.ONE_MINUS_DST_COLOR,[Ap]:s.ONE_MINUS_DST_ALPHA,[Lp]:s.CONSTANT_COLOR,[Pp]:s.ONE_MINUS_CONSTANT_COLOR,[Ip]:s.CONSTANT_ALPHA,[Dp]:s.ONE_MINUS_CONSTANT_ALPHA};function Re(N,_e,V,ue,xe,rt,ut,Nt,hn,Mt){if(N===Li){p===!0&&(dt(s.BLEND),p=!1);return}if(p===!1&&(Se(s.BLEND),p=!0),N!==vp){if(N!==A||Mt!==C){if((y!==Qi||P!==Qi)&&(s.blendEquation(s.FUNC_ADD),y=Qi,P=Qi),Mt)switch(N){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vc:s.blendFunc(s.ONE,s.ONE);break;case Wc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}R=null,D=null,L=null,q=null,ie.set(0,0,0),b=0,A=N,C=Mt}return}xe=xe||_e,rt=rt||V,ut=ut||ue,(_e!==y||xe!==P)&&(s.blendEquationSeparate(Ce[_e],Ce[xe]),y=_e,P=xe),(V!==R||ue!==D||rt!==L||ut!==q)&&(s.blendFuncSeparate(Ve[V],Ve[ue],Ve[rt],Ve[ut]),R=V,D=ue,L=rt,q=ut),(Nt.equals(ie)===!1||hn!==b)&&(s.blendColor(Nt.r,Nt.g,Nt.b,hn),ie.copy(Nt),b=hn),A=N,C=!1}function at(N,_e){N.side===qn?dt(s.CULL_FACE):Se(s.CULL_FACE);let V=N.side===pn;_e&&(V=!V),Ze(V),N.blending===ks&&N.transparent===!1?Re(Li):Re(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ue=N.stencilWrite;h.setTest(ue),ue&&(h.setMask(N.stencilWriteMask),h.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),h.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),w(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){ce!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),ce=N)}function nt(N){N!==mp?(Se(s.CULL_FACE),N!==ae&&(N===Gc?s.cullFace(s.BACK):N===gp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),ae=N}function Dt(N){N!==F&&(K&&s.lineWidth(N),F=N)}function w(N,_e,V){N?(Se(s.POLYGON_OFFSET_FILL),(Q!==_e||$!==V)&&(s.polygonOffset(_e,V),Q=_e,$=V)):dt(s.POLYGON_OFFSET_FILL)}function M(N){N?Se(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function Y(N){N===void 0&&(N=s.TEXTURE0+ee-1),de!==N&&(s.activeTexture(N),de=N)}function Z(N,_e,V){V===void 0&&(de===null?V=s.TEXTURE0+ee-1:V=de);let ue=be[V];ue===void 0&&(ue={type:void 0,texture:void 0},be[V]=ue),(ue.type!==N||ue.texture!==_e)&&(de!==V&&(s.activeTexture(V),de=V),s.bindTexture(N,_e||ne[N]),ue.type=N,ue.texture=_e)}function se(){const N=be[de];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){oe.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function we(N){ge.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function lt(N,_e){let V=d.get(_e);V===void 0&&(V=new WeakMap,d.set(_e,V));let ue=V.get(N);ue===void 0&&(ue=s.getUniformBlockIndex(_e,N.name),V.set(N,ue))}function We(N,_e){const ue=d.get(_e).get(N);u.get(_e)!==ue&&(s.uniformBlockBinding(_e,ue,N.__bindingPointIndex),u.set(_e,ue))}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},de=null,be={},_={},v=new WeakMap,S=[],m=null,p=!1,A=null,y=null,R=null,D=null,P=null,L=null,q=null,ie=new Ye(0,0,0),b=0,C=!1,ce=null,ae=null,F=null,Q=null,$=null,oe.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:Se,disable:dt,bindFramebuffer:ke,drawBuffers:z,useProgram:It,setBlending:Re,setMaterial:at,setFlipSided:Ze,setCullFace:nt,setLineWidth:Dt,setPolygonOffset:w,setScissorTest:M,activeTexture:Y,bindTexture:Z,unbindTexture:se,compressedTexImage2D:re,compressedTexImage3D:Oe,texImage2D:it,texImage3D:Pe,updateUBOMapping:lt,uniformBlockBinding:We,texStorage2D:le,texStorage3D:Ut,texSubImage2D:Le,texSubImage3D:he,compressedTexSubImage2D:me,compressedTexSubImage3D:$e,scissor:Ae,viewport:we,reset:_t}}function N0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new st,d=new WeakMap;let f;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,M){return v?new OffscreenCanvas(w,M):Sr("canvas")}function m(w,M,Y,Z){let se=1;const re=Dt(w);if((re.width>Z||re.height>Z)&&(se=Z/Math.max(re.width,re.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Oe=M?wo:Math.floor,Le=Oe(se*re.width),he=Oe(se*re.height);f===void 0&&(f=S(Le,he));const me=Y?S(Le,he):f;return me.width=Le,me.height=he,me.getContext("2d").drawImage(w,0,0,Le,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Le+"x"+he+")."),me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),w;return w}function p(w){const M=Dt(w);return tl(M.width)&&tl(M.height)}function A(w){return a?!1:w.wrapS!==Rn||w.wrapT!==Rn||w.minFilter!==Wt&&w.minFilter!==tn}function y(w,M){return w.generateMipmaps&&M&&w.minFilter!==Wt&&w.minFilter!==tn}function R(w){s.generateMipmap(w)}function D(w,M,Y,Z,se=!1){if(a===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=M;if(M===s.RED&&(Y===s.FLOAT&&(re=s.R32F),Y===s.HALF_FLOAT&&(re=s.R16F),Y===s.UNSIGNED_BYTE&&(re=s.R8)),M===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(re=s.R8UI),Y===s.UNSIGNED_SHORT&&(re=s.R16UI),Y===s.UNSIGNED_INT&&(re=s.R32UI),Y===s.BYTE&&(re=s.R8I),Y===s.SHORT&&(re=s.R16I),Y===s.INT&&(re=s.R32I)),M===s.RG&&(Y===s.FLOAT&&(re=s.RG32F),Y===s.HALF_FLOAT&&(re=s.RG16F),Y===s.UNSIGNED_BYTE&&(re=s.RG8)),M===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(re=s.RG8UI),Y===s.UNSIGNED_SHORT&&(re=s.RG16UI),Y===s.UNSIGNED_INT&&(re=s.RG32UI),Y===s.BYTE&&(re=s.RG8I),Y===s.SHORT&&(re=s.RG16I),Y===s.INT&&(re=s.RG32I)),M===s.RGBA){const Oe=se?Eo:gt.getTransfer(Z);Y===s.FLOAT&&(re=s.RGBA32F),Y===s.HALF_FLOAT&&(re=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(re=Oe===Lt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function P(w,M,Y){return y(w,Y)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function L(w){return w===Wt||w===Za||w===Ns?s.NEAREST:s.LINEAR}function q(w){const M=w.target;M.removeEventListener("dispose",q),b(M),M.isVideoTexture&&d.delete(M)}function ie(w){const M=w.target;M.removeEventListener("dispose",ie),ce(M)}function b(w){const M=n.get(w);if(M.__webglInit===void 0)return;const Y=w.source,Z=_.get(Y);if(Z){const se=Z[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(w),Object.keys(Z).length===0&&_.delete(Y)}n.remove(w)}function C(w){const M=n.get(w);s.deleteTexture(M.__webglTexture);const Y=w.source,Z=_.get(Y);delete Z[M.__cacheKey],o.memory.textures--}function ce(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let se=0;se<M.__webglFramebuffer[Z].length;se++)s.deleteFramebuffer(M.__webglFramebuffer[Z][se]);else s.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[Z]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=w.textures;for(let Z=0,se=Y.length;Z<se;Z++){const re=n.get(Y[Z]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(Y[Z])}n.remove(w)}let ae=0;function F(){ae=0}function Q(){const w=ae;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),ae+=1,w}function $(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ee(w,M){const Y=n.get(w);if(w.isVideoTexture&&Ze(w),w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(Y,w,M);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+M)}function K(w,M){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){ge(Y,w,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+M)}function J(w,M){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){ge(Y,w,M);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+M)}function O(w,M){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){Ue(Y,w,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+M)}const de={[Ws]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[Mo]:s.MIRRORED_REPEAT},be={[Wt]:s.NEAREST,[Za]:s.NEAREST_MIPMAP_NEAREST,[Ns]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[vo]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},Ge={[dm]:s.NEVER,[vm]:s.ALWAYS,[fm]:s.LESS,[Ku]:s.LEQUAL,[pm]:s.EQUAL,[_m]:s.GEQUAL,[mm]:s.GREATER,[gm]:s.NOTEQUAL};function X(w,M,Y){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===vo||M.magFilter===Ns||M.magFilter===li||M.minFilter===tn||M.minFilter===vo||M.minFilter===Ns||M.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(s.texParameteri(w,s.TEXTURE_WRAP_S,de[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,de[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,de[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,be[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,be[M.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==Rn||M.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,L(M.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,L(M.minFilter)),M.minFilter!==Wt&&M.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==Ns&&M.minFilter!==li||M.type===Fn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function oe(w,M){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",q));const Z=M.source;let se=_.get(Z);se===void 0&&(se={},_.set(Z,se));const re=$(M);if(re!==w.__cacheKey){se[re]===void 0&&(se[re]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[re].usedTimes++;const Oe=se[w.__cacheKey];Oe!==void 0&&(se[w.__cacheKey].usedTimes--,Oe.usedTimes===0&&C(M)),w.__cacheKey=re,w.__webglTexture=se[re].texture}return Y}function ge(w,M,Y){let Z=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=s.TEXTURE_3D);const se=oe(w,M),re=M.source;t.bindTexture(Z,w.__webglTexture,s.TEXTURE0+Y);const Oe=n.get(re);if(re.version!==Oe.__version||se===!0){t.activeTexture(s.TEXTURE0+Y);const Le=gt.getPrimaries(gt.workingColorSpace),he=M.colorSpace===Ai?null:gt.getPrimaries(M.colorSpace),me=M.colorSpace===Ai||Le===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=A(M)&&p(M.image)===!1;let le=m(M.image,$e,!1,i.maxTextureSize);le=nt(M,le);const Ut=p(le)||a,it=r.convert(M.format,M.colorSpace);let Pe=r.convert(M.type),Ae=D(M.internalFormat,it,Pe,M.colorSpace,M.isVideoTexture);X(Z,M,Ut);let we;const lt=M.mipmaps,We=a&&M.isVideoTexture!==!0&&Ae!==ju,_t=Oe.__version===void 0||se===!0,N=re.dataReady,_e=P(M,le,Ut);if(M.isDepthTexture)Ae=s.DEPTH_COMPONENT,a?M.type===Fn?Ae=s.DEPTH_COMPONENT32F:M.type===wi?Ae=s.DEPTH_COMPONENT24:M.type===ns?Ae=s.DEPTH24_STENCIL8:Ae=s.DEPTH_COMPONENT16:M.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===is&&Ae===s.DEPTH_COMPONENT&&M.type!==hl&&M.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=wi,Pe=r.convert(M.type)),M.format===Xs&&Ae===s.DEPTH_COMPONENT&&(Ae=s.DEPTH_STENCIL,M.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ns,Pe=r.convert(M.type))),_t&&(We?t.texStorage2D(s.TEXTURE_2D,1,Ae,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Ae,le.width,le.height,0,it,Pe,null));else if(M.isDataTexture)if(lt.length>0&&Ut){We&&_t&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,lt[0].width,lt[0].height);for(let V=0,ue=lt.length;V<ue;V++)we=lt[V],We?N&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,we.width,we.height,it,Pe,we.data):t.texImage2D(s.TEXTURE_2D,V,Ae,we.width,we.height,0,it,Pe,we.data);M.generateMipmaps=!1}else We?(_t&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,le.width,le.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le.width,le.height,it,Pe,le.data)):t.texImage2D(s.TEXTURE_2D,0,Ae,le.width,le.height,0,it,Pe,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ae,lt[0].width,lt[0].height,le.depth);for(let V=0,ue=lt.length;V<ue;V++)we=lt[V],M.format!==Cn?it!==null?We?N&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,we.width,we.height,le.depth,it,we.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Ae,we.width,we.height,le.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,we.width,we.height,le.depth,it,Pe,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,Ae,we.width,we.height,le.depth,0,it,Pe,we.data)}else{We&&_t&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,lt[0].width,lt[0].height);for(let V=0,ue=lt.length;V<ue;V++)we=lt[V],M.format!==Cn?it!==null?We?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,we.width,we.height,it,we.data):t.compressedTexImage2D(s.TEXTURE_2D,V,Ae,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,we.width,we.height,it,Pe,we.data):t.texImage2D(s.TEXTURE_2D,V,Ae,we.width,we.height,0,it,Pe,we.data)}else if(M.isDataArrayTexture)We?(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ae,le.width,le.height,le.depth),N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,it,Pe,le.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,le.width,le.height,le.depth,0,it,Pe,le.data);else if(M.isData3DTexture)We?(_t&&t.texStorage3D(s.TEXTURE_3D,_e,Ae,le.width,le.height,le.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,it,Pe,le.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,le.width,le.height,le.depth,0,it,Pe,le.data);else if(M.isFramebufferTexture){if(_t)if(We)t.texStorage2D(s.TEXTURE_2D,_e,Ae,le.width,le.height);else{let V=le.width,ue=le.height;for(let xe=0;xe<_e;xe++)t.texImage2D(s.TEXTURE_2D,xe,Ae,V,ue,0,it,Pe,null),V>>=1,ue>>=1}}else if(lt.length>0&&Ut){if(We&&_t){const V=Dt(lt[0]);t.texStorage2D(s.TEXTURE_2D,_e,Ae,V.width,V.height)}for(let V=0,ue=lt.length;V<ue;V++)we=lt[V],We?N&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,it,Pe,we):t.texImage2D(s.TEXTURE_2D,V,Ae,it,Pe,we);M.generateMipmaps=!1}else if(We){if(_t){const V=Dt(le);t.texStorage2D(s.TEXTURE_2D,_e,Ae,V.width,V.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,it,Pe,le)}else t.texImage2D(s.TEXTURE_2D,0,Ae,it,Pe,le);y(M,Ut)&&R(Z),Oe.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ue(w,M,Y){if(M.image.length!==6)return;const Z=oe(w,M),se=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+Y);const re=n.get(se);if(se.version!==re.__version||Z===!0){t.activeTexture(s.TEXTURE0+Y);const Oe=gt.getPrimaries(gt.workingColorSpace),Le=M.colorSpace===Ai?null:gt.getPrimaries(M.colorSpace),he=M.colorSpace===Ai||Oe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,le=[];for(let V=0;V<6;V++)!me&&!$e?le[V]=m(M.image[V],!1,!0,i.maxCubemapSize):le[V]=$e?M.image[V].image:M.image[V],le[V]=nt(M,le[V]);const Ut=le[0],it=p(Ut)||a,Pe=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),we=D(M.internalFormat,Pe,Ae,M.colorSpace),lt=a&&M.isVideoTexture!==!0,We=re.__version===void 0||Z===!0,_t=se.dataReady;let N=P(M,Ut,it);X(s.TEXTURE_CUBE_MAP,M,it);let _e;if(me){lt&&We&&t.texStorage2D(s.TEXTURE_CUBE_MAP,N,we,Ut.width,Ut.height);for(let V=0;V<6;V++){_e=le[V].mipmaps;for(let ue=0;ue<_e.length;ue++){const xe=_e[ue];M.format!==Cn?Pe!==null?lt?_t&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ue,0,0,xe.width,xe.height,Pe,xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ue,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?_t&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ue,0,0,xe.width,xe.height,Pe,Ae,xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ue,we,xe.width,xe.height,0,Pe,Ae,xe.data)}}}else{if(_e=M.mipmaps,lt&&We){_e.length>0&&N++;const V=Dt(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,N,we,V.width,V.height)}for(let V=0;V<6;V++)if($e){lt?_t&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,le[V].width,le[V].height,Pe,Ae,le[V].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,we,le[V].width,le[V].height,0,Pe,Ae,le[V].data);for(let ue=0;ue<_e.length;ue++){const rt=_e[ue].image[V].image;lt?_t&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ue+1,0,0,rt.width,rt.height,Pe,Ae,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ue+1,we,rt.width,rt.height,0,Pe,Ae,rt.data)}}else{lt?_t&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Pe,Ae,le[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,we,Pe,Ae,le[V]);for(let ue=0;ue<_e.length;ue++){const xe=_e[ue];lt?_t&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ue+1,0,0,Pe,Ae,xe.image[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ue+1,we,Pe,Ae,xe.image[V])}}}y(M,it)&&R(s.TEXTURE_CUBE_MAP),re.__version=se.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ne(w,M,Y,Z,se,re){const Oe=r.convert(Y.format,Y.colorSpace),Le=r.convert(Y.type),he=D(Y.internalFormat,Oe,Le,Y.colorSpace);if(!n.get(M).__hasExternalTextures){const $e=Math.max(1,M.width>>re),le=Math.max(1,M.height>>re);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,re,he,$e,le,M.depth,0,Oe,Le,null):t.texImage2D(se,re,he,$e,le,0,Oe,Le,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),at(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,se,n.get(Y).__webglTexture,0,Re(M)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,se,n.get(Y).__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(w,M,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let Z=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||at(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Fn?Z=s.DEPTH_COMPONENT32F:se.type===wi&&(Z=s.DEPTH_COMPONENT24));const re=Re(M);at(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,Z,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,re,Z,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const Z=Re(M);Y&&at(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,M.width,M.height):at(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const Z=M.textures;for(let se=0;se<Z.length;se++){const re=Z[se],Oe=r.convert(re.format,re.colorSpace),Le=r.convert(re.type),he=D(re.internalFormat,Oe,Le,re.colorSpace),me=Re(M);Y&&at(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,he,M.width,M.height):at(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,he,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,he,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,se=Re(M);if(M.depthTexture.format===is)at(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Xs)at(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ke(w){const M=n.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");dt(M.__webglFramebuffer,w)}else if(Y){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=s.createRenderbuffer(),Se(M.__webglDepthbuffer[Z],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Se(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function z(w,M,Y){const Z=n.get(w);M!==void 0&&ne(Z.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&ke(w)}function It(w){const M=w.texture,Y=n.get(w),Z=n.get(M);w.addEventListener("dispose",ie);const se=w.textures,re=w.isWebGLCubeRenderTarget===!0,Oe=se.length>1,Le=p(w)||a;if(Oe||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=M.version,o.memory.textures++),re){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[he]=[];for(let me=0;me<M.mipmaps.length;me++)Y.__webglFramebuffer[he][me]=s.createFramebuffer()}else Y.__webglFramebuffer[he]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)Y.__webglFramebuffer[he]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Oe)if(i.drawBuffers)for(let he=0,me=se.length;he<me;he++){const $e=n.get(se[he]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&at(w)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const me=se[he];Y.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const $e=r.convert(me.format,me.colorSpace),le=r.convert(me.type),Ut=D(me.internalFormat,$e,le,me.colorSpace,w.isXRRenderTarget===!0),it=Re(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Ut,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(Y.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),X(s.TEXTURE_CUBE_MAP,M,Le);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(Y.__webglFramebuffer[he][me],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else ne(Y.__webglFramebuffer[he],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(M,Le)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let he=0,me=se.length;he<me;he++){const $e=se[he],le=n.get($e);t.bindTexture(s.TEXTURE_2D,le.__webglTexture),X(s.TEXTURE_2D,$e,Le),ne(Y.__webglFramebuffer,w,$e,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),y($e,Le)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?he=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,Z.__webglTexture),X(he,M,Le),a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(Y.__webglFramebuffer[me],w,M,s.COLOR_ATTACHMENT0,he,me);else ne(Y.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,he,0);y(M,Le)&&R(he),t.unbindTexture()}w.depthBuffer&&ke(w)}function Ce(w){const M=p(w)||a,Y=w.textures;for(let Z=0,se=Y.length;Z<se;Z++){const re=Y[Z];if(y(re,M)){const Oe=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Le=n.get(re).__webglTexture;t.bindTexture(Oe,Le),R(Oe),t.unbindTexture()}}}function Ve(w){if(a&&w.samples>0&&at(w)===!1){const M=w.textures,Y=w.width,Z=w.height;let se=s.COLOR_BUFFER_BIT;const re=[],Oe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(w),he=M.length>1;if(he)for(let me=0;me<M.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let me=0;me<M.length;me++){re.push(s.COLOR_ATTACHMENT0+me),w.depthBuffer&&re.push(Oe);const $e=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if($e===!1&&(w.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[me]),$e===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Oe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Oe])),he){const le=n.get(M[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,se,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let me=0;me<M.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);const $e=n.get(M[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function Re(w){return Math.min(i.maxSamples,w.samples)}function at(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(w){const M=o.render.frame;d.get(w)!==M&&(d.set(w,M),w.update())}function nt(w,M){const Y=w.colorSpace,Z=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===el||Y!==$t&&Y!==Ai&&(gt.getTransfer(Y)===Lt?a===!1?e.has("EXT_sRGB")===!0&&Z===Cn?(w.format=el,w.minFilter=tn,w.generateMipmaps=!1):M=Qu.sRGBToLinear(M):(Z!==Cn||se!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function Dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=F,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=O,this.rebindTextures=z,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=at}function U0(s,e,t){const n=t.isWebGL2;function i(r,o=Ai){let a;const l=gt.getTransfer(o);if(r===Ii)return s.UNSIGNED_BYTE;if(r===Hu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zp)return s.BYTE;if(r===Jp)return s.SHORT;if(r===hl)return s.UNSIGNED_SHORT;if(r===zu)return s.INT;if(r===wi)return s.UNSIGNED_INT;if(r===Fn)return s.FLOAT;if(r===yr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Qp)return s.ALPHA;if(r===Cn)return s.RGBA;if(r===em)return s.LUMINANCE;if(r===tm)return s.LUMINANCE_ALPHA;if(r===is)return s.DEPTH_COMPONENT;if(r===Xs)return s.DEPTH_STENCIL;if(r===el)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Vu)return s.RED;if(r===Wu)return s.RED_INTEGER;if(r===nm)return s.RG;if(r===Xu)return s.RG_INTEGER;if(r===qu)return s.RGBA_INTEGER;if(r===ra||r===oa||r===aa||r===la)if(l===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===la)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$c||r===Kc||r===Zc||r===Jc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===$c)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ju)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qc||r===eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qc)return l===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===eh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===lh||r===ch||r===hh||r===uh||r===dh||r===fh||r===ph)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===th)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ih)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ah)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ch)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ph)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ca||r===mh||r===gh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ca)return l===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===im||r===_h||r===vh||r===xh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ca)return a.COMPRESSED_RED_RGTC1_EXT;if(r===_h)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ns?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class O0 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ts extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(h,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),_=.02,v=.005;h.inputState.pinching&&f>_+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=_-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new qt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Di({extensions:{fragDepth:!0},vertexShader:B0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fn(new Lo(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class H0 extends os{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,d=null,f=null,_=null,v=null;const S=new z0,m=t.getContextAttributes();let p=null,A=null;const y=[],R=[],D=new st;let P=null;const L=new dn;L.layers.enable(1),L.viewport=new At;const q=new dn;q.layers.enable(2),q.viewport=new At;const ie=[L,q],b=new O0;b.layers.enable(1),b.layers.enable(2);let C=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=y[X];return oe===void 0&&(oe=new Ua,y[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=y[X];return oe===void 0&&(oe=new Ua,y[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=y[X];return oe===void 0&&(oe=new Ua,y[X]=oe),oe.getHandSpace()};function ae(X){const oe=R.indexOf(X.inputSource);if(oe===-1)return;const ge=y[oe];ge!==void 0&&(ge.update(X.inputSource,X.frame,h||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){i.removeEventListener("select",ae),i.removeEventListener("selectstart",ae),i.removeEventListener("selectend",ae),i.removeEventListener("squeeze",ae),i.removeEventListener("squeezestart",ae),i.removeEventListener("squeezeend",ae),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Q);for(let X=0;X<y.length;X++){const oe=R[X];oe!==null&&(R[X]=null,y[X].disconnect(oe))}C=null,ce=null,S.reset(),e.setRenderTarget(p),_=null,f=null,d=null,i=null,A=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",ae),i.addEventListener("selectstart",ae),i.addEventListener("selectend",ae),i.addEventListener("squeeze",ae),i.addEventListener("squeezestart",ae),i.addEventListener("squeezeend",ae),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),A=new ss(_.framebufferWidth,_.framebufferHeight,{format:Cn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ge=null,Ue=null;m.depth&&(Ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Xs:is,ge=m.stencil?ns:wi);const ne={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(ne),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new ss(f.textureWidth,f.textureHeight,{format:Cn,type:Ii,depthTexture:new cd(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Se=e.properties.get(A);Se.__ignoreDepthValues=f.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Q(X){for(let oe=0;oe<X.removed.length;oe++){const ge=X.removed[oe],Ue=R.indexOf(ge);Ue>=0&&(R[Ue]=null,y[Ue].disconnect(ge))}for(let oe=0;oe<X.added.length;oe++){const ge=X.added[oe];let Ue=R.indexOf(ge);if(Ue===-1){for(let Se=0;Se<y.length;Se++)if(Se>=R.length){R.push(ge),Ue=Se;break}else if(R[Se]===null){R[Se]=ge,Ue=Se;break}if(Ue===-1)break}const ne=y[Ue];ne&&ne.connect(ge)}}const $=new I,ee=new I;function K(X,oe,ge){$.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);const Ue=$.distanceTo(ee),ne=oe.projectionMatrix.elements,Se=ge.projectionMatrix.elements,dt=ne[14]/(ne[10]-1),ke=ne[14]/(ne[10]+1),z=(ne[9]+1)/ne[5],It=(ne[9]-1)/ne[5],Ce=(ne[8]-1)/ne[0],Ve=(Se[8]+1)/Se[0],Re=dt*Ce,at=dt*Ve,Ze=Ue/(-Ce+Ve),nt=Ze*-Ce;oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(nt),X.translateZ(Ze),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const Dt=dt+Ze,w=ke+Ze,M=Re-nt,Y=at+(Ue-nt),Z=z*ke/w*Dt,se=It*ke/w*Dt;X.projectionMatrix.makePerspective(M,Y,Z,se,Dt,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;S.texture!==null&&(X.near=S.depthNear,X.far=S.depthFar),b.near=q.near=L.near=X.near,b.far=q.far=L.far=X.far,(C!==b.near||ce!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,ce=b.far,L.near=C,L.far=ce,q.near=C,q.far=ce,L.updateProjectionMatrix(),q.updateProjectionMatrix(),X.updateProjectionMatrix());const oe=X.parent,ge=b.cameras;J(b,oe);for(let Ue=0;Ue<ge.length;Ue++)J(ge[Ue],oe);ge.length===2?K(b,L,q):b.projectionMatrix.copy(L.projectionMatrix),O(X,b,oe)};function O(X,oe,ge){ge===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=js*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null};let de=null;function be(X,oe){if(u=oe.getViewerPose(h||o),v=oe,u!==null){const ge=u.views;_!==null&&(e.setRenderTargetFramebuffer(A,_.framebuffer),e.setRenderTarget(A));let Ue=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,Ue=!0);for(let Se=0;Se<ge.length;Se++){const dt=ge[Se];let ke=null;if(_!==null)ke=_.getViewport(dt);else{const It=d.getViewSubImage(f,dt);ke=It.viewport,Se===0&&(e.setRenderTargetTextures(A,It.colorTexture,f.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(A))}let z=ie[Se];z===void 0&&(z=new dn,z.layers.enable(Se),z.viewport=new At,ie[Se]=z),z.matrix.fromArray(dt.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(dt.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(ke.x,ke.y,ke.width,ke.height),Se===0&&(b.matrix.copy(z.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ue===!0&&b.cameras.push(z)}const ne=i.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const Se=d.getDepthInformation(ge[0]);Se&&Se.isValid&&Se.texture&&S.init(e,Se,i.renderState)}}for(let ge=0;ge<y.length;ge++){const Ue=R[ge],ne=y[ge];Ue!==null&&ne!==void 0&&ne.update(Ue,oe,h||o)}S.render(e,b),de&&de(X,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Ge=new ld;Ge.setAnimationLoop(be),this.setAnimationLoop=function(X){de=X},this.dispose=function(){}}}const $i=new $n,G0=new Ke;function V0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,A,y,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&_(m,p,R)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,y):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),y=A.envMap,R=A.envMapRotation;if(y&&(m.envMap.value=y,$i.copy(R),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler($i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const D=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*D,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function W0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,y){const R=y.program;n.uniformBlockBinding(A,R)}function h(A,y){let R=i[A.id];R===void 0&&(v(A),R=u(A),i[A.id]=R,A.addEventListener("dispose",m));const D=y.program;n.updateUBOMapping(A,D);const P=e.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}function u(A){const y=d();A.__bindingPointIndex=y;const R=s.createBuffer(),D=A.__size,P=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,D,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,R),R}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const y=i[A.id],R=A.uniforms,D=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let P=0,L=R.length;P<L;P++){const q=Array.isArray(R[P])?R[P]:[R[P]];for(let ie=0,b=q.length;ie<b;ie++){const C=q[ie];if(_(C,P,ie,D)===!0){const ce=C.__offset,ae=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let Q=0;Q<ae.length;Q++){const $=ae[Q],ee=S($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,ce+F,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,F),F+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ce,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(A,y,R,D){const P=A.value,L=y+"_"+R;if(D[L]===void 0)return typeof P=="number"||typeof P=="boolean"?D[L]=P:D[L]=P.clone(),!0;{const q=D[L];if(typeof P=="number"||typeof P=="boolean"){if(q!==P)return D[L]=P,!0}else if(q.equals(P)===!1)return q.copy(P),!0}return!1}function v(A){const y=A.uniforms;let R=0;const D=16;for(let L=0,q=y.length;L<q;L++){const ie=Array.isArray(y[L])?y[L]:[y[L]];for(let b=0,C=ie.length;b<C;b++){const ce=ie[b],ae=Array.isArray(ce.value)?ce.value:[ce.value];for(let F=0,Q=ae.length;F<Q;F++){const $=ae[F],ee=S($),K=R%D;K!==0&&D-K<ee.boundary&&(R+=D-K),ce.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=R,R+=ee.storage}}}const P=R%D;return P>0&&(R+=D-P),A.__size=R,A.__cache={},this}function S(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const R=o.indexOf(y.__bindingPointIndex);o.splice(R,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:l,update:h,dispose:p}}class X0{constructor(e={}){const{canvas:t=Nm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const _=new Uint32Array(4),v=new Int32Array(4);let S=null,m=null;const p=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;const y=this;let R=!1,D=0,P=0,L=null,q=-1,ie=null;const b=new At,C=new At;let ce=null;const ae=new Ye(0);let F=0,Q=t.width,$=t.height,ee=1,K=null,J=null;const O=new At(0,0,Q,$),de=new At(0,0,Q,$);let be=!1;const Ge=new ml;let X=!1,oe=!1,ge=null;const Ue=new Ke,ne=new st,Se=new I,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return L===null?ee:1}let z=n;function It(T,B){for(let H=0;H<T.length;H++){const W=T[H],G=t.getContext(W,B);if(G!==null)return G}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",_e,!1),z===null){const B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),z=It(B,T),z===null)throw It(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Ve,Re,at,Ze,nt,Dt,w,M,Y,Z,se,re,Oe,Le,he,me,$e,le,Ut,it,Pe,Ae,we;function lt(){Ce=new Kv(z),Ve=new Wv(z,Ce,e),Ce.init(Ve),Pe=new U0(z,Ce,Ve),Re=new D0(z,Ce,Ve),at=new Qv(z),Ze=new x0,nt=new N0(z,Ce,Re,Ze,Ve,Pe,at),Dt=new qv(y),w=new $v(y),M=new rg(z,Ve),Ae=new Gv(z,Ce,M,Ve),Y=new Zv(z,M,at,Ae),Z=new ix(z,Y,M,at),le=new nx(z,Ve,nt),he=new Xv(Ze),se=new v0(y,Dt,w,Ce,Ve,Ae,he),re=new V0(y,Ze),Oe=new M0,Le=new w0(Ce,Ve),$e=new Hv(y,Dt,w,Re,Z,f,l),me=new I0(y,Z,Ve),we=new W0(z,at,Ve,Re),Ut=new Vv(z,Ce,at,Ve),it=new Jv(z,Ce,at,Ve),at.programs=se.programs,y.capabilities=Ve,y.extensions=Ce,y.properties=Ze,y.renderLists=Oe,y.shadowMap=me,y.state=Re,y.info=at}lt();const We=new H0(y,z);this.xr=We,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Q,$,!1))},this.getSize=function(T){return T.set(Q,$)},this.setSize=function(T,B,H=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,$=B,t.width=Math.floor(T*ee),t.height=Math.floor(B*ee),H===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Q*ee,$*ee).floor()},this.setDrawingBufferSize=function(T,B,H){Q=T,$=B,ee=H,t.width=Math.floor(T*H),t.height=Math.floor(B*H),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,B,H,W){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,B,H,W),Re.viewport(b.copy(O).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,B,H,W){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,B,H,W),Re.scissor(C.copy(de).multiplyScalar(ee).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(T){Re.setScissorTest(be=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,B=!0,H=!0){let W=0;if(T){let G=!1;if(L!==null){const ve=L.texture.format;G=ve===qu||ve===Xu||ve===Wu}if(G){const ve=L.texture.type,Te=ve===Ii||ve===wi||ve===hl||ve===ns||ve===Hu||ve===Gu,Ie=$e.getClearColor(),De=$e.getClearAlpha(),Fe=Ie.r,ze=Ie.g,He=Ie.b;Te?(_[0]=Fe,_[1]=ze,_[2]=He,_[3]=De,z.clearBufferuiv(z.COLOR,0,_)):(v[0]=Fe,v[1]=ze,v[2]=He,v[3]=De,z.clearBufferiv(z.COLOR,0,v))}else W|=z.COLOR_BUFFER_BIT}B&&(W|=z.DEPTH_BUFFER_BIT),H&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Oe.dispose(),Le.dispose(),Ze.dispose(),Dt.dispose(),w.dispose(),Z.dispose(),Ae.dispose(),we.dispose(),se.dispose(),We.dispose(),We.removeEventListener("sessionstart",hn),We.removeEventListener("sessionend",Mt),ge&&(ge.dispose(),ge=null),jt.stop()};function _t(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=at.autoReset,B=me.enabled,H=me.autoUpdate,W=me.needsUpdate,G=me.type;lt(),at.autoReset=T,me.enabled=B,me.autoUpdate=H,me.needsUpdate=W,me.type=G}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function V(T){const B=T.target;B.removeEventListener("dispose",V),ue(B)}function ue(T){xe(T),Ze.remove(T)}function xe(T){const B=Ze.get(T).programs;B!==void 0&&(B.forEach(function(H){se.releaseProgram(H)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,H,W,G,ve){B===null&&(B=dt);const Te=G.isMesh&&G.matrixWorld.determinant()<0,Ie=Do(T,B,H,W,G);Re.setMaterial(W,Te);let De=H.index,Fe=1;if(W.wireframe===!0){if(De=Y.getWireframeAttribute(H),De===void 0)return;Fe=2}const ze=H.drawRange,He=H.attributes.position;let Ct=ze.start*Fe,Kt=(ze.start+ze.count)*Fe;ve!==null&&(Ct=Math.max(Ct,ve.start*Fe),Kt=Math.min(Kt,(ve.start+ve.count)*Fe)),De!==null?(Ct=Math.max(Ct,0),Kt=Math.min(Kt,De.count)):He!=null&&(Ct=Math.max(Ct,0),Kt=Math.min(Kt,He.count));const Ft=Kt-Ct;if(Ft<0||Ft===1/0)return;Ae.setup(G,W,Ie,H,De);let yn,wt=Ut;if(De!==null&&(yn=M.get(De),wt=it,wt.setIndex(yn)),G.isMesh)W.wireframe===!0?(Re.setLineWidth(W.wireframeLinewidth*ke()),wt.setMode(z.LINES)):wt.setMode(z.TRIANGLES);else if(G.isLine){let je=W.linewidth;je===void 0&&(je=1),Re.setLineWidth(je*ke()),G.isLineSegments?wt.setMode(z.LINES):G.isLineLoop?wt.setMode(z.LINE_LOOP):wt.setMode(z.LINE_STRIP)}else G.isPoints?wt.setMode(z.POINTS):G.isSprite&&wt.setMode(z.TRIANGLES);if(G.isBatchedMesh)wt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)wt.renderInstances(Ct,Ft,G.count);else if(H.isInstancedBufferGeometry){const je=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,cs=Math.min(H.instanceCount,je);wt.renderInstances(Ct,Ft,cs)}else wt.render(Ct,Ft)};function rt(T,B,H){T.transparent===!0&&T.side===qn&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,as(T,B,H),T.side=hi,T.needsUpdate=!0,as(T,B,H),T.side=qn):as(T,B,H)}this.compile=function(T,B,H=null){H===null&&(H=T),m=Le.get(H),m.init(),A.push(m),H.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==H&&T.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(y._useLegacyLights);const W=new Set;return T.traverse(function(G){const ve=G.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const Ie=ve[Te];rt(Ie,H,G),W.add(Ie)}else rt(ve,H,G),W.add(ve)}),A.pop(),m=null,W},this.compileAsync=function(T,B,H=null){const W=this.compile(T,B,H);return new Promise(G=>{function ve(){if(W.forEach(function(Te){Ze.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){G(T);return}setTimeout(ve,10)}Ce.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ut=null;function Nt(T){ut&&ut(T)}function hn(){jt.stop()}function Mt(){jt.start()}const jt=new ld;jt.setAnimationLoop(Nt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(T){ut=T,We.setAnimationLoop(T),T===null?jt.stop():jt.start()},We.addEventListener("sessionstart",hn),We.addEventListener("sessionend",Mt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(B),B=We.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,L),m=Le.get(T,A.length),m.init(),A.push(m),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ge.setFromProjectionMatrix(Ue),oe=this.localClippingEnabled,X=he.init(this.clippingPlanes,oe),S=Oe.get(T,p.length),S.init(),p.push(S),xn(T,B,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(K,J),this.info.render.frame++,X===!0&&he.beginShadows();const H=m.state.shadowsArray;if(me.render(H,T,B),X===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1)&&$e.render(S,T),m.setupLights(y._useLegacyLights),B.isArrayCamera){const W=B.cameras;for(let G=0,ve=W.length;G<ve;G++){const Te=W[G];Ar(S,T,Te,Te.viewport)}}else Ar(S,T,B);L!==null&&(nt.updateMultisampleRenderTarget(L),nt.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,B),Ae.resetDefaultState(),q=-1,ie=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function xn(T,B,H,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){W&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);const Te=Z.update(T),Ie=T.material;Ie.visible&&S.push(T,Te,Ie,H,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const Te=Z.update(T),Ie=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Se.copy(Te.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ie)){const De=Te.groups;for(let Fe=0,ze=De.length;Fe<ze;Fe++){const He=De[Fe],Ct=Ie[He.materialIndex];Ct&&Ct.visible&&S.push(T,Te,Ct,H,Se.z,He)}}else Ie.visible&&S.push(T,Te,Ie,H,Se.z,null)}}const ve=T.children;for(let Te=0,Ie=ve.length;Te<Ie;Te++)xn(ve[Te],B,H,W)}function Ar(T,B,H,W){const G=T.opaque,ve=T.transmissive,Te=T.transparent;m.setupLightsView(H),X===!0&&he.setGlobalState(y.clippingPlanes,H),ve.length>0&&tr(G,ve,B,H),W&&Re.viewport(b.copy(W)),G.length>0&&Pn(G,B,H),ve.length>0&&Pn(ve,B,H),Te.length>0&&Pn(Te,B,H),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function tr(T,B,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const ve=Ve.isWebGL2;ge===null&&(ge=new ss(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?yr:Ii,minFilter:li,samples:ve?4:0})),y.getDrawingBufferSize(ne),ve?ge.setSize(ne.x,ne.y):ge.setSize(wo(ne.x),wo(ne.y));const Te=y.getRenderTarget();y.setRenderTarget(ge),y.getClearColor(ae),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const Ie=y.toneMapping;y.toneMapping=Pi,Pn(T,H,W),nt.updateMultisampleRenderTarget(ge),nt.updateRenderTargetMipmap(ge);let De=!1;for(let Fe=0,ze=B.length;Fe<ze;Fe++){const He=B[Fe],Ct=He.object,Kt=He.geometry,Ft=He.material,yn=He.group;if(Ft.side===qn&&Ct.layers.test(W.layers)){const wt=Ft.side;Ft.side=pn,Ft.needsUpdate=!0,Ni(Ct,H,W,Kt,Ft,yn),Ft.side=wt,Ft.needsUpdate=!0,De=!0}}De===!0&&(nt.updateMultisampleRenderTarget(ge),nt.updateRenderTargetMipmap(ge)),y.setRenderTarget(Te),y.setClearColor(ae,F),y.toneMapping=Ie}function Pn(T,B,H){const W=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ve=T.length;G<ve;G++){const Te=T[G],Ie=Te.object,De=Te.geometry,Fe=W===null?Te.material:W,ze=Te.group;Ie.layers.test(H.layers)&&Ni(Ie,B,H,De,Fe,ze)}}function Ni(T,B,H,W,G,ve){T.onBeforeRender(y,B,H,W,G,ve),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,B,H,W,T,ve),G.transparent===!0&&G.side===qn&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,y.renderBufferDirect(H,B,W,G,T,ve),G.side=hi,G.needsUpdate=!0,y.renderBufferDirect(H,B,W,G,T,ve),G.side=qn):y.renderBufferDirect(H,B,W,G,T,ve),T.onAfterRender(y,B,H,W,G,ve)}function as(T,B,H){B.isScene!==!0&&(B=dt);const W=Ze.get(T),G=m.state.lights,ve=m.state.shadowsArray,Te=G.state.version,Ie=se.getParameters(T,G.state,ve,B,H),De=se.getProgramCacheKey(Ie);let Fe=W.programs;W.environment=T.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(T.isMeshStandardMaterial?w:Dt).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",V),Fe=new Map,W.programs=Fe);let ze=Fe.get(De);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===Te)return wr(T,Ie),ze}else Ie.uniforms=se.getUniforms(T),T.onBuild(H,Ie,y),T.onBeforeCompile(Ie,y),ze=se.acquireProgram(Ie,De),Fe.set(De,ze),W.uniforms=Ie.uniforms;const He=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=he.uniform),wr(T,Ie),W.needsLights=Yt(T),W.lightsStateVersion=Te,W.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function ls(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=xo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function wr(T,B){const H=Ze.get(T);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function Do(T,B,H,W,G){B.isScene!==!0&&(B=dt),nt.resetTextureUnits();const ve=B.fog,Te=W.isMeshStandardMaterial?B.environment:null,Ie=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:$t,De=(W.isMeshStandardMaterial?w:Dt).get(W.envMap||Te),Fe=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!H.morphAttributes.position,Ct=!!H.morphAttributes.normal,Kt=!!H.morphAttributes.color;let Ft=Pi;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ft=y.toneMapping);const yn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,wt=yn!==void 0?yn.length:0,je=Ze.get(W),cs=m.state.lights;if(X===!0&&(oe===!0||T!==ie)){const Jt=T===ie&&W.id===q;he.setState(W,T,Jt)}let bt=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==cs.state.version||je.outputColorSpace!==Ie||G.isBatchedMesh&&je.batching===!1||!G.isBatchedMesh&&je.batching===!0||G.isInstancedMesh&&je.instancing===!1||!G.isInstancedMesh&&je.instancing===!0||G.isSkinnedMesh&&je.skinning===!1||!G.isSkinnedMesh&&je.skinning===!0||G.isInstancedMesh&&je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&je.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&je.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&je.instancingMorph===!1&&G.morphTexture!==null||je.envMap!==De||W.fog===!0&&je.fog!==ve||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==he.numPlanes||je.numIntersection!==he.numIntersection)||je.vertexAlphas!==Fe||je.vertexTangents!==ze||je.morphTargets!==He||je.morphNormals!==Ct||je.morphColors!==Kt||je.toneMapping!==Ft||Ve.isWebGL2===!0&&je.morphTargetsCount!==wt)&&(bt=!0):(bt=!0,je.__version=W.version);let Hn=je.currentProgram;bt===!0&&(Hn=as(W,B,G));let nr=!1,pi=!1,un=!1;const pt=Hn.getUniforms(),nn=je.uniforms;if(Re.useProgram(Hn.program)&&(nr=!0,pi=!0,un=!0),W.id!==q&&(q=W.id,pi=!0),nr||ie!==T){pt.setValue(z,"projectionMatrix",T.projectionMatrix),pt.setValue(z,"viewMatrix",T.matrixWorldInverse);const Jt=pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(z,Se.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&pt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),ie!==T&&(ie=T,pi=!0,un=!0)}if(G.isSkinnedMesh){pt.setOptional(z,G,"bindMatrix"),pt.setOptional(z,G,"bindMatrixInverse");const Jt=G.skeleton;Jt&&(Ve.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),pt.setValue(z,"boneTexture",Jt.boneTexture,nt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(pt.setOptional(z,G,"batchingTexture"),pt.setValue(z,"batchingTexture",G._matricesTexture,nt));const Zt=H.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0&&Ve.isWebGL2===!0)&&le.update(G,H,Hn),(pi||je.receiveShadow!==G.receiveShadow)&&(je.receiveShadow=G.receiveShadow,pt.setValue(z,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(nn.envMap.value=De,nn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),pi&&(pt.setValue(z,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&fi(nn,un),ve&&W.fog===!0&&re.refreshFogUniforms(nn,ve),re.refreshMaterialUniforms(nn,W,ee,$,ge),xo.upload(z,ls(je),nn,nt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xo.upload(z,ls(je),nn,nt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(z,"center",G.center),pt.setValue(z,"modelViewMatrix",G.modelViewMatrix),pt.setValue(z,"normalMatrix",G.normalMatrix),pt.setValue(z,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Jt=W.uniformsGroups;for(let Ui=0,Mn=Jt.length;Ui<Mn;Ui++)if(Ve.isWebGL2){const Gn=Jt[Ui];we.update(Gn,Hn),we.bind(Gn,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function fi(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Yt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,B,H){Ze.get(T.texture).__webglTexture=B,Ze.get(T.depthTexture).__webglTexture=H;const W=Ze.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const H=Ze.get(T);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,H=0){L=T,D=B,P=H;let W=!0,G=null,ve=!1,Te=!1;if(T){const De=Ze.get(T);De.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):De.__webglFramebuffer===void 0?nt.setupRenderTarget(T):De.__hasExternalTextures&&nt.rebindTextures(T,Ze.get(T.texture).__webglTexture,Ze.get(T.depthTexture).__webglTexture);const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const ze=Ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?G=ze[B][H]:G=ze[B],ve=!0):Ve.isWebGL2&&T.samples>0&&nt.useMultisampledRTT(T)===!1?G=Ze.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[H]:G=ze,b.copy(T.viewport),C.copy(T.scissor),ce=T.scissorTest}else b.copy(O).multiplyScalar(ee).floor(),C.copy(de).multiplyScalar(ee).floor(),ce=be;if(Re.bindFramebuffer(z.FRAMEBUFFER,G)&&Ve.drawBuffers&&W&&Re.drawBuffers(T,G),Re.viewport(b),Re.scissor(C),Re.setScissorTest(ce),ve){const De=Ze.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,H)}else if(Te){const De=Ze.get(T.texture),Fe=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.__webglTexture,H||0,Fe)}q=-1},this.readRenderTargetPixels=function(T,B,H,W,G,ve,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){Re.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const De=T.texture,Fe=De.format,ze=De.type;if(Fe!==Cn&&Pe.convert(Fe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===yr&&(Ce.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(ze!==Ii&&Pe.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Fn&&(Ve.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&H>=0&&H<=T.height-G&&z.readPixels(B,H,W,G,Pe.convert(Fe),Pe.convert(ze),ve)}finally{const De=L!==null?Ze.get(L).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,B,H=0){const W=Math.pow(2,-H),G=Math.floor(B.image.width*W),ve=Math.floor(B.image.height*W);nt.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,T.x,T.y,G,ve),Re.unbindTexture()},this.copyTextureToTexture=function(T,B,H,W=0){const G=B.image.width,ve=B.image.height,Te=Pe.convert(H.format),Ie=Pe.convert(H.type);nt.setTexture2D(H,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment),B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,T.x,T.y,G,ve,Te,Ie,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Te,B.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,T.x,T.y,Te,Ie,B.image),W===0&&H.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,B,H,W,G=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=Math.round(T.max.x-T.min.x),Te=Math.round(T.max.y-T.min.y),Ie=T.max.z-T.min.z+1,De=Pe.convert(W.format),Fe=Pe.convert(W.type);let ze;if(W.isData3DTexture)nt.setTexture3D(W,0),ze=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)nt.setTexture2DArray(W,0),ze=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const He=z.getParameter(z.UNPACK_ROW_LENGTH),Ct=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Kt=z.getParameter(z.UNPACK_SKIP_PIXELS),Ft=z.getParameter(z.UNPACK_SKIP_ROWS),yn=z.getParameter(z.UNPACK_SKIP_IMAGES),wt=H.isCompressedTexture?H.mipmaps[G]:H.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,wt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?z.texSubImage3D(ze,G,B.x,B.y,B.z,ve,Te,Ie,De,Fe,wt.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(ze,G,B.x,B.y,B.z,ve,Te,Ie,De,wt.data):z.texSubImage3D(ze,G,B.x,B.y,B.z,ve,Te,Ie,De,Fe,wt),z.pixelStorei(z.UNPACK_ROW_LENGTH,He),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ct),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ft),z.pixelStorei(z.UNPACK_SKIP_IMAGES,yn),G===0&&W.generateMipmaps&&z.generateMipmap(ze),Re.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?nt.setTextureCube(T,0):T.isData3DTexture?nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?nt.setTexture2DArray(T,0):nt.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){D=0,P=0,L=null,Re.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dl?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Co?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class q0 extends X0{}q0.prototype.isWebGL1Renderer=!0;class dM extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class j0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ju("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new I;class vl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cu=new I,hu=new At,uu=new At,Y0=new I,du=new Ke,ho=new I,Oa=new Kn,fu=new Ke,Fa=new Er;class $0 extends fn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)!==!1&&(fu.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(fu),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;hu.fromBufferAttribute(i.attributes.skinIndex,e),uu.fromBufferAttribute(i.attributes.skinWeight,e),cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=uu.getComponent(r);if(o!==0){const a=hu.getComponent(r);du.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Y0.copy(cu).applyMatrix4(du),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class md extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gd extends qt{constructor(e=null,t=1,n=1,i,r,o,a,l,h=Wt,u=Wt,d,f){super(null,o,a,l,h,u,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=new Ke,K0=new Ke;class xl{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:K0;pu.multiplyMatrices(a,t[r]),pu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gd(t,e,e,Cn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new md),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class il extends cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new Ke,mu=new Ke,uo=[],gu=new ui,Z0=new Ke,fr=new fn,pr=new Kn;class J0 extends fn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Z0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),gu.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),pr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ds),mu.multiplyMatrices(n,Ds),fr.matrixWorld=mu,fr.raycast(e,uo);for(let o=0,a=uo.length;o<a;o++){const l=uo[o];l.instanceId=r,l.object=this,t.push(l)}uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gd(new Float32Array(i*this.count),i,this.count,Vu,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class yl extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _u=new I,vu=new I,xu=new Ke,Ba=new Er,fo=new Kn;class Ml extends Pt{constructor(e=new Ln,t=new yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_u.fromBufferAttribute(t,i-1),vu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_u.distanceTo(vu);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;xu.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new I,u=new I,d=new I,f=new I,_=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,o.start),A=Math.min(v.count,o.start+o.count);for(let y=p,R=A-1;y<R;y+=_){const D=v.getX(y),P=v.getX(y+1);if(h.fromBufferAttribute(m,D),u.fromBufferAttribute(m,P),Ba.distanceSqToSegment(h,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const q=e.ray.origin.distanceTo(f);q<e.near||q>e.far||t.push({distance:q,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),A=Math.min(m.count,o.start+o.count);for(let y=p,R=A-1;y<R;y+=_){if(h.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Ba.distanceSqToSegment(h,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const yu=new I,Mu=new I;class _d extends Ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yu.fromBufferAttribute(t,i),Mu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yu.distanceTo(Mu);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q0 extends Ml{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vd extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Su=new Ke,sl=new Er,po=new Kn,mo=new I;class ey extends Pt{constructor(e=new Ln,t=new vd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;Su.copy(i).invert(),sl.copy(e.ray).applyMatrix4(Su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=f,S=_;v<S;v++){const m=h.getX(v);mo.fromBufferAttribute(d,m),Eu(mo,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=f,S=_;v<S;v++)mo.fromBufferAttribute(d,v),Eu(mo,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eu(s,e,t,n,i,r,o){const a=sl.distanceSqToPoint(s);if(a<t){const l=new I;sl.closestPointToPoint(s,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ty{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,_=(o-u)/f;return(i+_)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new st:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],o=[],a=new I,l=new Ke;for(let _=0;_<=e;_++){const v=_/e;i[_]=this.getTangentAt(v,new I)}r[0]=new I,o[0]=new I;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),f<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let _=1;_<=e;_++){if(r[_]=r[_-1].clone(),o[_]=o[_-1].clone(),a.crossVectors(i[_-1],i[_]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Xt(i[_-1].dot(i[_]),-1,1));r[_].applyMatrix4(l.makeRotationAxis(a,v))}o[_].crossVectors(i[_],r[_])}if(t===!0){let _=Math.acos(Xt(r[0].dot(r[e]),-1,1));_/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(_=-_);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(i[v],_*v)),o[v].crossVectors(i[v],r[v])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Sl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){i(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,d){let f=(o-r)/h-(a-r)/(h+u)+(a-o)/u,_=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,_*=u,i(o,a,f,_)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const go=new I,ka=new Sl,za=new Sl,Ha=new Sl;class fM extends ty{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=i[(a-1)%r]:(go.subVectors(i[0],i[1]).add(i[0]),h=go);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(go.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(d),_),S=Math.pow(d.distanceToSquared(f),_),m=Math.pow(f.distanceToSquared(u),_);S<1e-4&&(S=1),v<1e-4&&(v=S),m<1e-4&&(m=S),ka.initNonuniformCatmullRom(h.x,d.x,f.x,u.x,v,S,m),za.initNonuniformCatmullRom(h.y,d.y,f.y,u.y,v,S,m),Ha.initNonuniformCatmullRom(h.z,d.z,f.z,u.z,v,S,m)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(h.x,d.x,f.x,u.x,this.tension),za.initCatmullRom(h.y,d.y,f.y,u.y,this.tension),Ha.initCatmullRom(h.z,d.z,f.z,u.z,this.tension));return n.set(ka.calc(l),za.calc(l),Ha.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class El extends Ln{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const u=[],d=new I,f=new I,_=[],v=[],S=[],m=[];for(let p=0;p<=n;p++){const A=[],y=p/n;let R=0;p===0&&o===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let D=0;D<=t;D++){const P=D/t;d.x=-e*Math.cos(i+P*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(i+P*r)*Math.sin(o+y*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),m.push(P+R,1-y),A.push(h++)}u.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){const y=u[p][A+1],R=u[p][A],D=u[p+1][A],P=u[p+1][A+1];(p!==0||o>0)&&_.push(y,R,P),(p!==n-1||l<Math.PI)&&_.push(R,D,P)}this.setIndex(_),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(S,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bl extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$u,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class di extends bl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _o(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ny(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function iy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function xd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sy extends Tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Us,endingEnd:Us}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Os:r=e,a=2*t-n;break;case So:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Os:o=e,l=2*n-t;break;case So:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,_=this._weightNext,v=(n-t)/(i-t),S=v*v,m=S*v,p=-f*m+2*f*S-f*v,A=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*v+1,y=(-1-_)*m+(1.5+_)*S+.5*v,R=_*m-_*S;for(let D=0;D!==a;++D)r[D]=p*o[u+D]+A*o[h+D]+y*o[l+D]+R*o[d+D];return r}}class yd extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[h+f]*d+o[l+f]*u;return r}}class ry extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ry(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ny(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ha,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const h=e[a],u=e[a+1];if(h!==u&&(a!==1||h!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,_=d+n;for(let v=0;v!==n;++v){const S=t[d+v];if(S!==t[f+v]||S!==t[_+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let _=0;_!==n;++_)t[f+_]=t[d+_]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=qs;class Js extends Zn{}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Mr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Md extends Zn{}Md.prototype.ValueTypeName="color";class $s extends Zn{}$s.prototype.ValueTypeName="number";class oy extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let h=e*a;for(let u=h+a;h!==u;h+=4)zn.slerpFlat(r,0,o,h-a,o,h,l);return r}}class rs extends Zn{InterpolantFactoryMethodLinear(e){return new oy(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.DefaultInterpolation=qs;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Zn{}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Mr;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Zn{}Ks.prototype.ValueTypeName="vector";class rl{constructor(e,t=-1,n,i=ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ly(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Zn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],h=[];l.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);const u=iy(l);l=bu(l,1,u),h=bu(h,1,u),!i&&l[0]===0&&(l.push(r),h.push(h[0])),o.push(new $s(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const h=e[a],u=h.name.match(r);if(u&&u.length>1){const d=u[1];let f=i[d];f||(i[d]=f=[]),f.push(h)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,_,v,S){if(_.length!==0){const m=[],p=[];xd(_,m,p,v),m.length!==0&&S.push(new d(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let d=0;d<h.length;d++){const f=h[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const _={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let S=0;S<f[v].morphTargets.length;S++)_[f[v].morphTargets[S]]=-1;for(const S in _){const m=[],p=[];for(let A=0;A!==f[v].morphTargets.length;++A){const y=f[v];m.push(y.time),p.push(y.morphTarget===S?1:0)}i.push(new $s(".morphTargetInfluence["+S+"]",m,p))}l=_.length*o}else{const _=".bones["+t[d].name+"]";n(Ks,_+".position",f,"pos",i),n(rs,_+".quaternion",f,"rot",i),n(Ks,_+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ay(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return Md;case"quaternion":return rs;case"bool":case"boolean":return Js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ly(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ay(s.type);if(s.times===void 0){const t=[],n=[];xd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ci={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class cy{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const _=h[d],v=h[d+1];if(_.global&&(_.lastIndex=0),_.test(u))return v}return null}}}const hy=new cy;class er{constructor(e){this.manager=e!==void 0?e:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class uy extends Error{constructor(e,t){super(e),this.response=t}}class Sd extends er{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ci.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:i});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=oi[e],d=h.body.getReader(),f=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),_=f?parseInt(f):0,v=_!==0;let S=0;const m=new ReadableStream({start(p){A();function A(){d.read().then(({done:y,value:R})=>{if(y)p.close();else{S+=R.byteLength;const D=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:_});for(let P=0,L=u.length;P<L;P++){const q=u[P];q.onProgress&&q.onProgress(D)}p.enqueue(R),A()}})}}});return new Response(m)}else throw new uy(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,_=new TextDecoder(f);return h.arrayBuffer().then(v=>_.decode(v))}}}).then(h=>{Ci.add(e,h);const u=oi[e];delete oi[e];for(let d=0,f=u.length;d<f;d++){const _=u[d];_.onLoad&&_.onLoad(h)}}).catch(h=>{const u=oi[e];if(u===void 0)throw this.manager.itemError(e),h;delete oi[e];for(let d=0,f=u.length;d<f;d++){const _=u[d];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dy extends er{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ci.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Sr("img");function l(){u(),Ci.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class fy extends er{constructor(e){super(e)}load(e,t,n,i){const r=new qt,o=new dy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Io extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ga=new Ke,Tu=new I,Au=new I;class Tl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class py extends Tl{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class my extends Io{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new py}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wu=new Ke,mr=new I,Va=new I;class gy extends Tl{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),i.makeTranslation(-mr.x,-mr.y,-mr.z),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu)}}class _y extends Io{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vy extends Tl{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xy extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new vy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pM extends Io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yy extends er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ci.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ci.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Ci.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(e,l),r.manager.itemStart(e)}}class mM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ru();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ru(){return(typeof performance>"u"?Date:performance).now()}class My{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){zn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;zn.multiplyQuaternionsFlat(e,o,e,t,e,n),zn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Al="\\[\\]\\.:\\/",Sy=new RegExp("["+Al+"]","g"),wl="[^"+Al+"]",Ey="[^"+Al.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",wl),Ty=/(WCOD+)?/.source.replace("WCOD",Ey),Ay=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),wy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),Ry=new RegExp("^"+by+Ty+Ay+wy+"$"),Cy=["material","materials","bones","map"];class Ly{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sy,"")}static parseTrackName(e){const t=Ry.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=Ly;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Py{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Us,endingEnd:Us};for(let h=0;h!==o;++h){const u=r[h].createInterpolant(null);a[h]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,h=a.sampleValues;return l[0]=r,l[1]=r+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case am:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),h[u].accumulateAdditive(a);break;case ul:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),h[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===om;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===sm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Os,i.endingEnd=Os):(e?i.endingStart=this.zeroSlopeAtStart?Os:Us:i.endingStart=So,t?i.endingEnd=this.zeroSlopeAtEnd?Os:Us:i.endingEnd=So)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Iy=new Float32Array(1);class gM extends os{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let u=h[l];u===void 0&&(u={},h[l]=u);for(let d=0;d!==r;++d){const f=i[d],_=f.name;let v=u[_];if(v!==void 0)++v.referenceCount,o[d]=v;else{if(v=o[d],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,_));continue}const S=t&&t._propertyBindings[d].binding.parsedPath;v=new My(mt.create(n,_,S),f.ValueTypeName,f.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,_),o[d]=v}a[d].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,h=l[l.length-1],u=e._byClipCacheIndex;h._byClipCacheIndex=u,l[u]=h,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new yd(new Float32Array(2),new Float32Array(2),1,Iy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?rl.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ul),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;h=l.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const u=new Py(this,o,t,n);return this._bindAction(u,h),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?rl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)a[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const h=o[a];this._deactivateAction(h);const u=h._cacheIndex,d=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Cu=new Ke;class _M{constructor(e,t,n=0,i=1/0){this.ray=new Er(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(e,t=!0,n=[]){return ol(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ol(e[i],this,n,t);return n.sort(Lu),n}}function Lu(s,e){return s.distance-e.distance}function ol(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)ol(i[r],e,t,!0)}}const Pu=new I;class vM extends Pt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ln,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const h=o/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new vn(i,3));const r=new yl({fog:!1,toneMapped:!1});this.cone=new _d(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Pu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Pu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class xM extends fn{constructor(e,t,n){const i=new El(t,4,2),r=new Ri({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);function Iu(s,e){if(e===lm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ja||e===Yu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ja)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class yM extends er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Ky(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=xr.extractUrlBase(e);o=xr.resolveURL(h,this.path)}else o=xr.extractUrlBase(e);this.manager.itemStart(e);const a=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Sd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{r.parse(h,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ed){try{o[ct.KHR_BINARY_GLTF]=new Zy(e)}catch(d){i&&i(d);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new hM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case ct.KHR_MATERIALS_UNLIT:o[d]=new Uy;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[d]=new Jy(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[d]=new Qy;break;case ct.KHR_MESH_QUANTIZATION:o[d]=new eM;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(o),h.setPlugins(a),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Dy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ny{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const u=new Ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],$t);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new xy(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new _y(u),h.distance=d;break;case"spot":h=new my(u),h.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Ti(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Uy{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Ri}extendParams(e,t,n){const i=[];e.color=new Ye(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ln))}return Promise.all(i)}}class Oy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Fy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new st(a,a)}return Promise.all(r)}}class By{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ky{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ln)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class zy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Hy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}}class Gy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Vy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ln)),Promise.all(r)}}class Wy{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Xy{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class jy{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yy{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $y{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(a,l,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(_){return _.buffer}):o.ready.then(function(){const _=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(_),u,d,f,i.mode,i.filter),_})})}else return null}}class Ky{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==wn.TRIANGLES&&h.mode!==wn.TRIANGLE_STRIP&&h.mode!==wn.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const h in o)a.push(this.parser.getDependency("accessor",o[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{const u=h.pop(),d=u.isGroup?u.children:[u],f=h[0].count,_=[];for(const v of d){const S=new Ke,m=new I,p=new zn,A=new I(1,1,1),y=new J0(v.geometry,v.material,f);for(let R=0;R<f;R++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,R),l.SCALE&&A.fromBufferAttribute(l.SCALE,R),y.setMatrixAt(R,S.compose(m,p,A));for(const R in l)if(R==="_COLOR_0"){const D=l[R];y.instanceColor=new il(D.array,D.itemSize,D.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&v.geometry.setAttribute(R,l[R]);Pt.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),_.push(y)}return u.isGroup?(u.clear(),u.add(..._),u):_[0]}))}}const Ed="glTF",gr=12,Du={JSON:1313821514,BIN:5130562};class Zy{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ed)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gr,r=new DataView(e,gr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Du.JSON){const h=new Uint8Array(e,gr+o,a);this.content=n.decode(h)}else if(l===Du.BIN){const h=gr+o;this.body=e.slice(h,h+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Jy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},h={};for(const u in o){const d=al[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=al[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],_=Hs[f.componentType];h[d]=_.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(_){for(const v in _.attributes){const S=_.attributes[v],m=l[v];m!==void 0&&(S.normalized=m)}d(_)},a,h,$t,f)})})}}class Qy{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eM{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class bd extends Tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=i-t,d=(n-t)/u,f=d*d,_=f*d,v=e*h,S=v-h,m=-2*_+3*f,p=_-f,A=1-m,y=p-f+d;for(let R=0;R!==a;R++){const D=o[S+R+a],P=o[S+R+l]*u,L=o[v+R+a],q=o[v+R]*u;r[R]=A*D+y*P+m*L+p*q}return r}}const tM=new zn;class nM extends bd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return tM.fromArray(r).normalize().toArray(r),r}}const wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nu={9728:Wt,9729:tn,9984:Za,9985:vo,9986:Ns,9987:li},Uu={33071:Rn,33648:Mo,10497:Ws},Wa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iM={CUBICSPLINE:void 0,LINEAR:qs,STEP:Mr},Xa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new bl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),s.DefaultMaterial}function Ki(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rM(s,e,t){let n=!1,i=!1,r=!1;for(let h=0,u=e.length;h<u;h++){const d=e[h];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let h=0,u=e.length;h<u;h++){const d=e[h];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],d=h[1],f=h[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function oM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aM(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qa(t.attributes):e=s.indices+":"+qa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qa(s.targets[n]);return e}function qa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ll(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const cM=new Ke;class hM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Dy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new fy(this.options.manager):this.textureLoader=new yy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ki(r,a,i),Ti(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[h,u]of o.children.entries())r(u,a.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(xr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Wa[i.type],a=Hs[i.componentType],l=i.normalized===!0,h=new a(i.count*o);return Promise.resolve(new cn(h,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Wa[i.type],h=Hs[i.componentType],u=h.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,_=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let S,m;if(_&&_!==d){const p=Math.floor(f/_),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(A);y||(S=new h(a,p*_,i.count*_/u),y=new j0(S,_/u),t.cache.add(A,y)),m=new vl(y,l,f%_/u,v)}else a===null?S=new h(i.count*l):S=new h(a,f,i.count*l),m=new cn(S,l,v);if(i.sparse!==void 0){const p=Wa.SCALAR,A=Hs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,R=i.sparse.values.byteOffset||0,D=new A(o[1],y,i.sparse.count*p),P=new h(o[2],R,i.sparse.count*l);a!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized));for(let L=0,q=D.length;L<q;L++){const ie=D[L];if(m.setX(ie,P[L*l]),l>=2&&m.setY(ie,P[L*l+1]),l>=3&&m.setZ(ie,P[L*l+2]),l>=4&&m.setW(ie,P[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Nu[f.magFilter]||tn,u.minFilter=Nu[f.minFilter]||li,u.wrapS=Uu[f.wrapS]||Ws,u.wrapT=Uu[f.wrapT]||Ws,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",h=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){h=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,_){let v=f;t.isImageBitmapLoader===!0&&(v=function(S){const m=new qt(S);m.needsUpdate=!0,f(m)}),t.load(xr.resolveURL(d,r.path),v,void 0,_)})}).then(function(d){return h===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||lM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new vd,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yl,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},h=[];if(l[ct.KHR_MATERIALS_UNLIT]){const d=i[ct.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),h.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],$t),a.opacity=f[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",d.baseColorTexture,ln)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qn);const u=r.alphaMode||Xa.OPAQUE;if(u===Xa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Xa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ri&&(h.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new st(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Ri&&(h.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ri){const d=r.emissiveFactor;a.emissive=new Ye().setRGB(d[0],d[1],d[2],$t)}return r.emissiveTexture!==void 0&&o!==Ri&&h.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ln)),Promise.all(h).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Ti(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ki(i,d,r),d})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ou(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const h=e[a],u=aM(h),d=i[u];if(d)o.push(d.promise);else{let f;h.extensions&&h.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(h):f=Ou(new Ln,h,t),i[u]={primitive:h,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,h=o.length;l<h;l++){const u=o[l].material===void 0?sM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let _=0,v=u.length;_<v;_++){const S=u[_],m=o[_];let p;const A=h[_];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new $0(S,A):new fn(S,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?p.geometry=Iu(p.geometry,Yu):m.mode===wn.TRIANGLE_FAN&&(p.geometry=Iu(p.geometry,Ja));else if(m.mode===wn.LINES)p=new _d(S,A);else if(m.mode===wn.LINE_STRIP)p=new Ml(S,A);else if(m.mode===wn.LINE_LOOP)p=new Q0(S,A);else if(m.mode===wn.POINTS)p=new ey(S,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&oM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ti(p,r),m.extensions&&Ki(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let _=0,v=d.length;_<v;_++)t.associations.set(d[_],{meshes:e,primitives:_});if(d.length===1)return r.extensions&&Ki(i,d[0],r),d[0];const f=new ts;r.extensions&&Ki(i,f,r),t.associations.set(f,{meshes:e});for(let _=0,v=d.length;_<v;_++)f.add(d[_]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(Dm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let h=0,u=o.length;h<u;h++){const d=o[h];if(d){a.push(d);const f=new Ke;r!==null&&f.fromArray(r.array,h*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new xl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],h=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){const _=i.channels[d],v=i.samplers[_.sampler],S=_.target,m=S.node,p=i.parameters!==void 0?i.parameters[v.input]:v.input,A=i.parameters!==void 0?i.parameters[v.output]:v.output;S.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),h.push(v),u.push(S))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(d){const f=d[0],_=d[1],v=d[2],S=d[3],m=d[4],p=[];for(let A=0,y=f.length;A<y;A++){const R=f[A],D=_[A],P=v[A],L=S[A],q=m[A];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const ie=n._createAnimationTracks(R,D,P,L,q);if(ie)for(let b=0;b<ie.length;b++)p.push(ie[b])}return new rl(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,h=i.weights.length;l<h;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let h=0,u=a.length;h<u;h++)o.push(n.getDependency("node",a[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(h){const u=h[0],d=h[1],f=h[2];f!==null&&u.traverse(function(_){_.isSkinnedMesh&&_.bind(f,cM)});for(let _=0,v=d.length;_<v;_++)u.add(d[_]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let u;if(r.isBone===!0?u=new md:h.length>1?u=new ts:h.length===1?u=h[0]:u=new Pt,u!==h[0])for(let d=0,f=h.length;d<f;d++)u.add(h[d]);if(r.name&&(u.userData.name=r.name,u.name=o),Ti(u,r),r.extensions&&Ki(n,u,r),r.matrix!==void 0){const d=new Ke;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ts;n.name&&(r.name=i.createUniqueName(n.name)),Ti(r,n),n.extensions&&Ki(t,r,n);const o=n.nodes||[],a=[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const h=u=>{const d=new Map;for(const[f,_]of i.associations)(f instanceof Yn||f instanceof qt)&&d.set(f,_);return u.traverse(f=>{const _=i.associations.get(f);_!=null&&d.set(f,_)}),d};return i.associations=h(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];bi[r.path]===bi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let h;switch(bi[r.path]){case bi.weights:h=$s;break;case bi.rotation:h=rs;break;case bi.position:case bi.scale:h=Ks;break;default:switch(n.itemSize){case 1:h=$s;break;case 2:case 3:default:h=Ks;break}break}const u=i.interpolation!==void 0?iM[i.interpolation]:qs,d=this._getArrayFromAccessor(n);for(let f=0,_=l.length;f<_;f++){const v=new h(l[f]+"."+bi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ll(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof rs?nM:bd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uM(s,e,t){const n=e.attributes,i=new ui;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(h[0],h[1],h[2])),a.normalized){const u=ll(Hs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,l=new I;for(let h=0,u=r.length;h<u;h++){const d=r[h];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],_=f.min,v=f.max;if(_!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(_[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(_[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(_[2]),Math.abs(v[2]))),f.normalized){const S=ll(Hs[f.componentType]);l.multiplyScalar(S)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Kn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ou(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=al[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return gt.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Ti(s,e),uM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?rM(s,e.targets,t):s})}export{pM as A,Ln as B,fM as C,xy as D,yM as G,yl as L,Ri as M,dn as P,_M as R,dM as S,fy as T,I as V,X0 as W,Lo as a,fn as b,_y as c,xM as d,my as e,gM as f,rl as g,Ml as h,st as i,mM as j,di as k,Zi as l,vM as m,sm as n};
