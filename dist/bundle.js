(()=>{var e={455:function(e){e.exports=function(){"use strict";const e=100,t={},n=()=>{t.previousActiveElement instanceof HTMLElement?(t.previousActiveElement.focus(),t.previousActiveElement=null):document.body&&document.body.focus()},r=r=>new Promise((i=>{if(!r)return i();const s=window.scrollX,o=window.scrollY;t.restoreFocusTimeout=setTimeout((()=>{n(),i()}),e),window.scrollTo(s,o)}));var i={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const s="swal2-",o=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce(((e,t)=>(e[t]=s+t,e)),{}),a=["success","warning","info","question","error"].reduce(((e,t)=>(e[t]=s+t,e)),{}),c=e=>e.charAt(0).toUpperCase()+e.slice(1),l=e=>{},u=e=>{},h=[],d=e=>{h.includes(e)||(h.push(e),l(e))},f=(e,t)=>{d(`"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`)},p=e=>"function"==typeof e?e():e,m=e=>e&&"function"==typeof e.toPromise,g=e=>m(e)?e.toPromise():Promise.resolve(e),y=e=>e&&Promise.resolve(e)===e,w=()=>document.body.querySelector(`.${o.container}`),v=e=>{const t=w();return t?t.querySelector(e):null},b=e=>v(`.${e}`),E=()=>b(o.popup),T=()=>b(o.icon),I=()=>b(o["icon-content"]),k=()=>b(o.title),S=()=>b(o["html-container"]),_=()=>b(o.image),C=()=>b(o["progress-steps"]),A=()=>b(o["validation-message"]),N=()=>v(`.${o.actions} .${o.confirm}`),O=()=>v(`.${o.actions} .${o.cancel}`),D=()=>v(`.${o.actions} .${o.deny}`),x=()=>b(o["input-label"]),R=()=>v(`.${o.loader}`),L=()=>b(o.actions),P=()=>b(o.footer),M=()=>b(o["timer-progress-bar"]),U=()=>b(o.close),V='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',F=()=>{const e=E().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),t=Array.from(e).sort(((e,t)=>{const n=parseInt(e.getAttribute("tabindex")),r=parseInt(t.getAttribute("tabindex"));return n>r?1:n<r?-1:0})),n=E().querySelectorAll(V),r=Array.from(n).filter((e=>"-1"!==e.getAttribute("tabindex")));return[...new Set(t.concat(r))].filter((e=>ie(e)))},B=()=>H(document.body,o.shown)&&!H(document.body,o["toast-shown"])&&!H(document.body,o["no-backdrop"]),j=()=>E()&&H(E(),o.toast),q=()=>E().hasAttribute("data-loading"),$=(e,t)=>{if(e.textContent="",t){const n=(new DOMParser).parseFromString(t,"text/html");Array.from(n.querySelector("head").childNodes).forEach((t=>{e.appendChild(t)})),Array.from(n.querySelector("body").childNodes).forEach((t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(!0)):e.appendChild(t)}))}},H=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let t=0;t<n.length;t++)if(!e.classList.contains(n[t]))return!1;return!0},z=(e,t)=>{Array.from(e.classList).forEach((n=>{Object.values(o).includes(n)||Object.values(a).includes(n)||Object.values(t.showClass).includes(n)||e.classList.remove(n)}))},W=(e,t,n)=>{if(z(e,t),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return void l(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof t.customClass[n]}"`);Y(e,t.customClass[n])}},K=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${o.popup} > .${o[t]}`);case"checkbox":return e.querySelector(`.${o.popup} > .${o.checkbox} input`);case"radio":return e.querySelector(`.${o.popup} > .${o.radio} input:checked`)||e.querySelector(`.${o.popup} > .${o.radio} input:first-child`);case"range":return e.querySelector(`.${o.popup} > .${o.range} input`);default:return e.querySelector(`.${o.popup} > .${o.input}`)}},G=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},X=(e,t,n)=>{e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{n?e.classList.add(t):e.classList.remove(t)})):n?e.classList.add(t):e.classList.remove(t)})))},Y=(e,t)=>{X(e,t,!0)},J=(e,t)=>{X(e,t,!1)},Q=(e,t)=>{const n=Array.from(e.children);for(let e=0;e<n.length;e++){const r=n[e];if(r instanceof HTMLElement&&H(r,t))return r}},Z=(e,t,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||0===parseInt(n)?e.style[t]="number"==typeof n?`${n}px`:n:e.style.removeProperty(t)},ee=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";e&&(e.style.display=t)},te=e=>{e&&(e.style.display="none")},ne=(e,t,n,r)=>{const i=e.querySelector(t);i&&(i.style[n]=r)},re=function(e,t){t?ee(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex"):te(e)},ie=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),se=()=>!ie(N())&&!ie(D())&&!ie(O()),oe=e=>!!(e.scrollHeight>e.clientHeight),ae=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||r>0},ce=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=M();ie(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout((()=>{n.style.transition=`width ${e/1e3}s linear`,n.style.width="0%"}),10))},le=()=>{const e=M(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=t/parseInt(window.getComputedStyle(e).width)*100;e.style.width=`${n}%`},ue=()=>"undefined"==typeof window||"undefined"==typeof document,he=`\n <div aria-labelledby="${o.title}" aria-describedby="${o["html-container"]}" class="${o.popup}" tabindex="-1">\n   <button type="button" class="${o.close}"></button>\n   <ul class="${o["progress-steps"]}"></ul>\n   <div class="${o.icon}"></div>\n   <img class="${o.image}" />\n   <h2 class="${o.title}" id="${o.title}"></h2>\n   <div class="${o["html-container"]}" id="${o["html-container"]}"></div>\n   <input class="${o.input}" />\n   <input type="file" class="${o.file}" />\n   <div class="${o.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${o.select}"></select>\n   <div class="${o.radio}"></div>\n   <label for="${o.checkbox}" class="${o.checkbox}">\n     <input type="checkbox" />\n     <span class="${o.label}"></span>\n   </label>\n   <textarea class="${o.textarea}"></textarea>\n   <div class="${o["validation-message"]}" id="${o["validation-message"]}"></div>\n   <div class="${o.actions}">\n     <div class="${o.loader}"></div>\n     <button type="button" class="${o.confirm}"></button>\n     <button type="button" class="${o.deny}"></button>\n     <button type="button" class="${o.cancel}"></button>\n   </div>\n   <div class="${o.footer}"></div>\n   <div class="${o["timer-progress-bar-container"]}">\n     <div class="${o["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g,""),de=()=>{const e=w();return!!e&&(e.remove(),J([document.documentElement,document.body],[o["no-backdrop"],o["toast-shown"],o["has-column"]]),!0)},fe=()=>{t.currentInstance.resetValidationMessage()},pe=()=>{const e=E(),t=Q(e,o.input),n=Q(e,o.file),r=e.querySelector(`.${o.range} input`),i=e.querySelector(`.${o.range} output`),s=Q(e,o.select),a=e.querySelector(`.${o.checkbox} input`),c=Q(e,o.textarea);t.oninput=fe,n.onchange=fe,s.onchange=fe,a.onchange=fe,c.oninput=fe,r.oninput=()=>{fe(),i.value=r.value},r.onchange=()=>{fe(),i.value=r.value}},me=e=>"string"==typeof e?document.querySelector(e):e,ge=e=>{const t=E();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},ye=e=>{"rtl"===window.getComputedStyle(e).direction&&Y(w(),o.rtl)},we=e=>{const t=de();if(ue())return void u("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=o.container,t&&Y(n,o["no-transition"]),$(n,he);const r=me(e.target);r.appendChild(n),ge(e),ye(r),pe()},ve=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?be(e,t):e&&$(t,e)},be=(e,t)=>{e.jquery?Ee(t,e):$(t,e.toString())},Ee=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},Te=(()=>{if(ue())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n];return!1})(),Ie=(e,t)=>{const n=L(),r=R();t.showConfirmButton||t.showDenyButton||t.showCancelButton?ee(n):te(n),W(n,t,"actions"),ke(n,r,t),$(r,t.loaderHtml),W(r,t,"loader")};function ke(e,t,n){const r=N(),i=D(),s=O();_e(r,"confirm",n),_e(i,"deny",n),_e(s,"cancel",n),Se(r,i,s,n),n.reverseButtons&&(n.toast?(e.insertBefore(s,r),e.insertBefore(i,r)):(e.insertBefore(s,t),e.insertBefore(i,t),e.insertBefore(r,t)))}function Se(e,t,n,r){r.buttonsStyling?(Y([e,t,n],o.styled),r.confirmButtonColor&&(e.style.backgroundColor=r.confirmButtonColor,Y(e,o["default-outline"])),r.denyButtonColor&&(t.style.backgroundColor=r.denyButtonColor,Y(t,o["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,Y(n,o["default-outline"]))):J([e,t,n],o.styled)}function _e(e,t,n){re(e,n[`show${c(t)}Button`],"inline-block"),$(e,n[`${t}ButtonText`]),e.setAttribute("aria-label",n[`${t}ButtonAriaLabel`]),e.className=o[t],W(e,n,`${t}Button`),Y(e,n[`${t}ButtonClass`])}const Ce=(e,t)=>{const n=U();n&&($(n,t.closeButtonHtml||""),W(n,t,"closeButton"),re(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel||""))},Ae=(e,t)=>{const n=w();n&&(Ne(n,t.backdrop),Oe(n,t.position),De(n,t.grow),W(n,t,"container"))};function Ne(e,t){"string"==typeof t?e.style.background=t:t||Y([document.documentElement,document.body],o["no-backdrop"])}function Oe(e,t){t in o?Y(e,o[t]):(l('The "position" parameter is not valid, defaulting to "center"'),Y(e,o.center))}function De(e,t){if(t&&"string"==typeof t){const n=`grow-${t}`;n in o&&Y(e,o[n])}}const xe=["input","file","range","select","radio","checkbox","textarea"],Re=(e,t)=>{const n=E(),r=i.innerParams.get(e),s=!r||t.input!==r.input;xe.forEach((e=>{const r=Q(n,o[e]);Me(e,t.inputAttributes),r.className=o[e],s&&te(r)})),t.input&&(s&&Le(t),Ue(t))},Le=e=>{if(!qe[e.input])return void u(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);const t=Be(e.input),n=qe[e.input](t,e);ee(t),e.inputAutoFocus&&setTimeout((()=>{G(n)}))},Pe=e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["type","value","style"].includes(n)||e.removeAttribute(n)}},Me=(e,t)=>{const n=K(E(),e);if(n){Pe(n);for(const e in t)n.setAttribute(e,t[e])}},Ue=e=>{const t=Be(e.input);"object"==typeof e.customClass&&Y(t,e.customClass.input)},Ve=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},Fe=(e,t,n)=>{if(n.inputLabel){e.id=o.input;const r=document.createElement("label"),i=o["input-label"];r.setAttribute("for",e.id),r.className=i,"object"==typeof n.customClass&&Y(r,n.customClass.inputLabel),r.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",r)}},Be=e=>Q(E(),o[e]||o.input),je=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:y(t)||l(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},qe={};qe.text=qe.email=qe.password=qe.number=qe.tel=qe.url=(e,t)=>(je(e,t.inputValue),Fe(e,e,t),Ve(e,t),e.type=t.input,e),qe.file=(e,t)=>(Fe(e,e,t),Ve(e,t),e),qe.range=(e,t)=>{const n=e.querySelector("input"),r=e.querySelector("output");return je(n,t.inputValue),n.type=t.input,je(r,t.inputValue),Fe(n,e,t),e},qe.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");$(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return Fe(e,e,t),e},qe.radio=e=>(e.textContent="",e),qe.checkbox=(e,t)=>{const n=K(E(),"checkbox");n.value="1",n.id=o.checkbox,n.checked=Boolean(t.inputValue);const r=e.querySelector("span");return $(r,t.inputPlaceholder),n},qe.textarea=(e,t)=>{je(e,t.inputValue),Ve(e,t),Fe(e,e,t);const n=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);return setTimeout((()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(E()).width);new MutationObserver((()=>{const r=e.offsetWidth+n(e);E().style.width=r>t?`${r}px`:null})).observe(e,{attributes:!0,attributeFilter:["style"]})}})),e};const $e=(e,t)=>{const n=S();n&&(W(n,t,"htmlContainer"),t.html?(ve(t.html,n),ee(n,"block")):t.text?(n.textContent=t.text,ee(n,"block")):te(n),Re(e,t))},He=(e,t)=>{const n=P();n&&(re(n,t.footer),t.footer&&ve(t.footer,n),W(n,t,"footer"))},ze=(e,t)=>{const n=i.innerParams.get(e),r=T();if(n&&t.icon===n.icon)return Ye(r,t),void We(r,t);if(t.icon||t.iconHtml){if(t.icon&&-1===Object.keys(a).indexOf(t.icon))return u(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),void te(r);ee(r),Ye(r,t),We(r,t),Y(r,t.showClass.icon)}else te(r)},We=(e,t)=>{for(const n in a)t.icon!==n&&J(e,a[n]);Y(e,a[t.icon]),Je(e,t),Ke(),W(e,t,"icon")},Ke=()=>{const e=E(),t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<n.length;e++)n[e].style.backgroundColor=t},Ge='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',Xe='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',Ye=(e,t)=>{let n,r=e.innerHTML;t.iconHtml?n=Qe(t.iconHtml):"success"===t.icon?(n=Ge,r=r.replace(/ style=".*?"/g,"")):n="error"===t.icon?Xe:Qe({question:"?",warning:"!",info:"i"}[t.icon]),r.trim()!==n.trim()&&$(e,n)},Je=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ne(e,n,"backgroundColor",t.iconColor);ne(e,".swal2-success-ring","borderColor",t.iconColor)}},Qe=e=>`<div class="${o["icon-content"]}">${e}</div>`,Ze=(e,t)=>{const n=_();n&&(t.imageUrl?(ee(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt||""),Z(n,"width",t.imageWidth),Z(n,"height",t.imageHeight),n.className=o.image,W(n,t,"image")):te(n))},et=(e,t)=>{const n=w(),r=E();if(n&&r){if(t.toast){Z(n,"width",t.width),r.style.width="100%";const e=R();e&&r.insertBefore(e,T())}else Z(r,"width",t.width);Z(r,"padding",t.padding),t.color&&(r.style.color=t.color),t.background&&(r.style.background=t.background),te(A()),tt(r,t)}},tt=(e,t)=>{const n=t.showClass||{};e.className=`${o.popup} ${ie(e)?n.popup:""}`,t.toast?(Y([document.documentElement,document.body],o["toast-shown"]),Y(e,o.toast)):Y(e,o.modal),W(e,t,"popup"),"string"==typeof t.customClass&&Y(e,t.customClass),t.icon&&Y(e,o[`icon-${t.icon}`])},nt=(e,t)=>{const n=C();if(!n)return;const{progressSteps:r,currentProgressStep:i}=t;r&&0!==r.length&&void 0!==i?(ee(n),n.textContent="",i>=r.length&&l("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach(((e,s)=>{const a=rt(e);if(n.appendChild(a),s===i&&Y(a,o["active-progress-step"]),s!==r.length-1){const e=it(t);n.appendChild(e)}}))):te(n)},rt=e=>{const t=document.createElement("li");return Y(t,o["progress-step"]),$(t,e),t},it=e=>{const t=document.createElement("li");return Y(t,o["progress-step-line"]),e.progressStepsDistance&&Z(t,"width",e.progressStepsDistance),t},st=(e,t)=>{const n=k();n&&(re(n,t.title||t.titleText,"block"),t.title&&ve(t.title,n),t.titleText&&(n.innerText=t.titleText),W(n,t,"title"))},ot=(e,t)=>{et(e,t),Ae(e,t),nt(e,t),ze(e,t),Ze(e,t),st(e,t),Ce(e,t),$e(e,t),Ie(e,t),He(e,t);const n=E();"function"==typeof t.didRender&&n&&t.didRender(n)},at=()=>ie(E()),ct=()=>N()&&N().click(),lt=()=>D()&&D().click(),ut=()=>O()&&O().click(),ht=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),dt=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},ft=(e,t,n,r)=>{dt(t),n.toast||(t.keydownHandler=t=>yt(e,t,r),t.keydownTarget=n.keydownListenerCapture?window:E(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},pt=(e,t)=>{const n=F();if(n.length)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),void n[e].focus();E().focus()},mt=["ArrowRight","ArrowDown"],gt=["ArrowLeft","ArrowUp"],yt=(e,t,n)=>{const r=i.innerParams.get(e);r&&(t.isComposing||229===t.keyCode||(r.stopKeydownPropagation&&t.stopPropagation(),"Enter"===t.key?wt(e,t,r):"Tab"===t.key?vt(t):[...mt,...gt].includes(t.key)?bt(t.key):"Escape"===t.key&&Et(t,r,n)))},wt=(e,t,n)=>{if(p(n.allowEnterKey)&&t.target&&e.getInput()&&t.target instanceof HTMLElement&&t.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;ct(),t.preventDefault()}},vt=e=>{const t=e.target,n=F();let r=-1;for(let e=0;e<n.length;e++)if(t===n[e]){r=e;break}e.shiftKey?pt(r,-1):pt(r,1),e.stopPropagation(),e.preventDefault()},bt=e=>{const t=[N(),D(),O()];if(document.activeElement instanceof HTMLElement&&!t.includes(document.activeElement))return;const n=mt.includes(e)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let e=0;e<L().children.length;e++){if(r=r[n],!r)return;if(r instanceof HTMLButtonElement&&ie(r))break}r instanceof HTMLButtonElement&&r.focus()},Et=(e,t,n)=>{p(t.allowEscapeKey)&&(e.preventDefault(),n(ht.esc))};var Tt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const It=()=>{Array.from(document.body.children).forEach((e=>{e===w()||e.contains(w())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")||""),e.setAttribute("aria-hidden","true"))}))},kt=()=>{Array.from(document.body.children).forEach((e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))},St=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!H(document.body,o.iosfix)){const e=document.body.scrollTop;document.body.style.top=-1*e+"px",Y(document.body,o.iosfix),Ct(),_t()}},_t=()=>{const e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i);if(t&&n&&!e.match(/CriOS/i)){const e=44;E().scrollHeight>window.innerHeight-e&&(w().style.paddingBottom=`${e}px`)}},Ct=()=>{const e=w();let t;e.ontouchstart=e=>{t=At(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},At=e=>{const t=e.target,n=w();return!(Nt(e)||Ot(e)||t!==n&&(oe(n)||!(t instanceof HTMLElement)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||oe(S())&&S().contains(t)))},Nt=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Ot=e=>e.touches&&e.touches.length>1,Dt=()=>{if(H(document.body,o.iosfix)){const e=parseInt(document.body.style.top,10);J(document.body,o.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},xt=()=>{const e=document.createElement("div");e.className=o["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t};let Rt=null;const Lt=()=>{null===Rt&&document.body.scrollHeight>window.innerHeight&&(Rt=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Rt+xt()}px`)},Pt=()=>{null!==Rt&&(document.body.style.paddingRight=`${Rt}px`,Rt=null)};function Mt(e,n,i,s){j()?zt(e,s):(r(i).then((()=>zt(e,s))),dt(t)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(n.setAttribute("style","display:none !important"),n.removeAttribute("class"),n.innerHTML=""):n.remove(),B()&&(Pt(),Dt(),kt()),Ut()}function Ut(){J([document.documentElement,document.body],[o.shown,o["height-auto"],o["no-backdrop"],o["toast-shown"]])}function Vt(e){e=qt(e);const t=Tt.swalPromiseResolve.get(this),n=Ft(this);this.isAwaitingPromise?e.isDismissed||(jt(this),t(e)):n&&t(e)}const Ft=e=>{const t=E();if(!t)return!1;const n=i.innerParams.get(e);if(!n||H(t,n.hideClass.popup))return!1;J(t,n.showClass.popup),Y(t,n.hideClass.popup);const r=w();return J(r,n.showClass.backdrop),Y(r,n.hideClass.backdrop),$t(e,t,n),!0};function Bt(e){const t=Tt.swalPromiseReject.get(this);jt(this),t&&t(e)}const jt=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,i.innerParams.get(e)||e._destroy())},qt=e=>void 0===e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),$t=(e,t,n)=>{const r=w(),i=Te&&ae(t);"function"==typeof n.willClose&&n.willClose(t),i?Ht(e,t,r,n.returnFocus,n.didClose):Mt(e,r,n.returnFocus,n.didClose)},Ht=(e,n,r,i,s)=>{t.swalCloseEventFinishedCallback=Mt.bind(null,e,r,i,s),n.addEventListener(Te,(function(e){e.target===n&&(t.swalCloseEventFinishedCallback(),delete t.swalCloseEventFinishedCallback)}))},zt=(e,t)=>{setTimeout((()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy&&e._destroy()}))},Wt=e=>{let t=E();t||new $r,t=E();const n=R();j()?te(T()):Kt(t,e),ee(n),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},Kt=(e,t)=>{const n=L(),r=R();!t&&ie(N())&&(t=N()),ee(n),t&&(te(t),r.setAttribute("data-button-to-replace",t.className)),r.parentNode.insertBefore(r,t),Y([e,n],o.loading)},Gt=(e,t)=>{"select"===t.input||"radio"===t.input?Zt(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(m(t.inputValue)||y(t.inputValue))&&(Wt(N()),en(e,t))},Xt=(e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return Yt(n);case"radio":return Jt(n);case"file":return Qt(n);default:return t.inputAutoTrim?n.value.trim():n.value}},Yt=e=>e.checked?1:0,Jt=e=>e.checked?e.value:null,Qt=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,Zt=(e,t)=>{const n=E(),r=e=>{tn[t.input](n,nn(e),t)};m(t.inputOptions)||y(t.inputOptions)?(Wt(N()),g(t.inputOptions).then((t=>{e.hideLoading(),r(t)}))):"object"==typeof t.inputOptions?r(t.inputOptions):u("Unexpected type of inputOptions! Expected object, Map or Promise, got "+typeof t.inputOptions)},en=(e,t)=>{const n=e.getInput();te(n),g(t.inputValue).then((r=>{n.value="number"===t.input?`${parseFloat(r)||0}`:`${r}`,ee(n),n.focus(),e.hideLoading()})).catch((t=>{u(`Error in inputValue promise: ${t}`),n.value="",ee(n),n.focus(),e.hideLoading()}))},tn={select:(e,t,n)=>{const r=Q(e,o.select),i=(e,t,r)=>{const i=document.createElement("option");i.value=r,$(i,t),i.selected=rn(r,n.inputValue),e.appendChild(i)};t.forEach((e=>{const t=e[0],n=e[1];if(Array.isArray(n)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,r.appendChild(e),n.forEach((t=>i(e,t[1],t[0])))}else i(r,n,t)})),r.focus()},radio:(e,t,n)=>{const r=Q(e,o.radio);t.forEach((e=>{const t=e[0],i=e[1],s=document.createElement("input"),a=document.createElement("label");s.type="radio",s.name=o.radio,s.value=t,rn(t,n.inputValue)&&(s.checked=!0);const c=document.createElement("span");$(c,i),c.className=o.label,a.appendChild(s),a.appendChild(c),r.appendChild(a)}));const i=r.querySelectorAll("input");i.length&&i[0].focus()}},nn=e=>{const t=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(((e,n)=>{let r=e;"object"==typeof r&&(r=nn(r)),t.push([n,r])})):Object.keys(e).forEach((n=>{let r=e[n];"object"==typeof r&&(r=nn(r)),t.push([n,r])})),t},rn=(e,t)=>t&&t.toString()===e.toString(),sn=e=>{const t=i.innerParams.get(e);e.disableButtons(),t.input?cn(e,"confirm"):fn(e,!0)},on=e=>{const t=i.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?cn(e,"deny"):un(e,!1)},an=(e,t)=>{e.disableButtons(),t(ht.cancel)},cn=(e,t)=>{const n=i.innerParams.get(e);if(!n.input)return void u(`The "input" parameter is needed to be set when using returnInputValueOn${c(t)}`);const r=Xt(e,n);n.inputValidator?ln(e,r,t):e.getInput().checkValidity()?"deny"===t?un(e,r):fn(e,r):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},ln=(e,t,n)=>{const r=i.innerParams.get(e);e.disableInput(),Promise.resolve().then((()=>g(r.inputValidator(t,r.validationMessage)))).then((r=>{e.enableButtons(),e.enableInput(),r?e.showValidationMessage(r):"deny"===n?un(e,t):fn(e,t)}))},un=(e,t)=>{const n=i.innerParams.get(e||void 0);n.showLoaderOnDeny&&Wt(D()),n.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then((()=>g(n.preDeny(t,n.validationMessage)))).then((n=>{!1===n?(e.hideLoading(),jt(e)):e.close({isDenied:!0,value:void 0===n?t:n})})).catch((t=>dn(e||void 0,t)))):e.close({isDenied:!0,value:t})},hn=(e,t)=>{e.close({isConfirmed:!0,value:t})},dn=(e,t)=>{e.rejectPromise(t)},fn=(e,t)=>{const n=i.innerParams.get(e||void 0);n.showLoaderOnConfirm&&Wt(),n.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then((()=>g(n.preConfirm(t,n.validationMessage)))).then((n=>{ie(A())||!1===n?(e.hideLoading(),jt(e)):hn(e,void 0===n?t:n)})).catch((t=>dn(e||void 0,t)))):hn(e,t)};function pn(){const e=i.innerParams.get(this);if(!e)return;const t=i.domCache.get(this);te(t.loader),j()?e.icon&&ee(T()):mn(t),J([t.popup,t.actions],o.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const mn=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?ee(t[0],"inline-block"):se()&&te(e.actions)};function gn(){const e=i.innerParams.get(this),t=i.domCache.get(this);return t?K(t.popup,e.input):null}function yn(e,t,n){const r=i.domCache.get(e);t.forEach((e=>{r[e].disabled=n}))}function wn(e,t){if(e)if("radio"===e.type){const n=e.parentNode.parentNode.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}function vn(){yn(this,["confirmButton","denyButton","cancelButton"],!1)}function bn(){yn(this,["confirmButton","denyButton","cancelButton"],!0)}function En(){wn(this.getInput(),!1)}function Tn(){wn(this.getInput(),!0)}function In(e){const t=i.domCache.get(this),n=i.innerParams.get(this);$(t.validationMessage,e),t.validationMessage.className=o["validation-message"],n.customClass&&n.customClass.validationMessage&&Y(t.validationMessage,n.customClass.validationMessage),ee(t.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid",!0),r.setAttribute("aria-describedby",o["validation-message"]),G(r),Y(r,o.inputerror))}function kn(){const e=i.domCache.get(this);e.validationMessage&&te(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),J(t,o.inputerror))}const Sn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},_n=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Cn={},An=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Nn=e=>Object.prototype.hasOwnProperty.call(Sn,e),On=e=>-1!==_n.indexOf(e),Dn=e=>Cn[e],xn=e=>{Nn(e)||l(`Unknown parameter "${e}"`)},Rn=e=>{An.includes(e)&&l(`The parameter "${e}" is incompatible with toasts`)},Ln=e=>{const t=Dn(e);t&&f(e,t)},Pn=e=>{!1===e.backdrop&&e.allowOutsideClick&&l('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e)xn(t),e.toast&&Rn(t),Ln(t)};function Mn(e){const t=E(),n=i.innerParams.get(this);if(!t||H(t,n.hideClass.popup))return void l("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const r=Un(e),s=Object.assign({},n,r);ot(this,s),i.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const Un=e=>{const t={};return Object.keys(e).forEach((n=>{On(n)?t[n]=e[n]:l(`Invalid parameter to update: ${n}`)})),t};function Vn(){const e=i.domCache.get(this),n=i.innerParams.get(this);n?(e.popup&&t.swalCloseEventFinishedCallback&&(t.swalCloseEventFinishedCallback(),delete t.swalCloseEventFinishedCallback),"function"==typeof n.didDestroy&&n.didDestroy(),Fn(this)):Bn(this)}const Fn=e=>{Bn(e),delete e.params,delete t.keydownHandler,delete t.keydownTarget,delete t.currentInstance},Bn=e=>{e.isAwaitingPromise?(jn(i,e),e.isAwaitingPromise=!0):(jn(Tt,e),jn(i,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},jn=(e,t)=>{for(const n in e)e[n].delete(t)};var qn=Object.freeze({__proto__:null,_destroy:Vn,close:Vt,closeModal:Vt,closePopup:Vt,closeToast:Vt,disableButtons:bn,disableInput:Tn,disableLoading:pn,enableButtons:vn,enableInput:En,getInput:gn,handleAwaitingPromise:jt,hideLoading:pn,rejectPromise:Bt,resetValidationMessage:kn,showValidationMessage:In,update:Mn});const $n=(e,t,n)=>{i.innerParams.get(e).toast?Hn(e,t,n):(Kn(t),Gn(t),Xn(e,t,n))},Hn=(e,t,n)=>{t.popup.onclick=()=>{const t=i.innerParams.get(e);t&&(zn(t)||t.timer||t.input)||n(ht.close)}},zn=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let Wn=!1;const Kn=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(Wn=!0)}}},Gn=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||e.popup.contains(t.target))&&(Wn=!0)}}},Xn=(e,t,n)=>{t.container.onclick=r=>{const s=i.innerParams.get(e);Wn?Wn=!1:r.target===t.container&&p(s.allowOutsideClick)&&n(ht.backdrop)}},Yn=e=>"object"==typeof e&&e.jquery,Jn=e=>e instanceof Element||Yn(e),Qn=e=>{const t={};return"object"!=typeof e[0]||Jn(e[0])?["title","html","icon"].forEach(((n,r)=>{const i=e[r];"string"==typeof i||Jn(i)?t[n]=i:void 0!==i&&u(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)})):Object.assign(t,e[0]),t};function Zn(){const e=this;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new e(...n)}function er(e){class t extends(this){_main(t,n){return super._main(t,Object.assign({},e,n))}}return t}const tr=()=>t.timeout&&t.timeout.getTimerLeft(),nr=()=>{if(t.timeout)return le(),t.timeout.stop()},rr=()=>{if(t.timeout){const e=t.timeout.start();return ce(e),e}},ir=()=>{const e=t.timeout;return e&&(e.running?nr():rr())},sr=e=>{if(t.timeout){const n=t.timeout.increase(e);return ce(n,!0),n}},or=()=>!(!t.timeout||!t.timeout.isRunning());let ar=!1;const cr={};function lr(){cr[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template"]=this,ar||(document.body.addEventListener("click",ur),ar=!0)}const ur=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in cr){const n=t.getAttribute(e);if(n)return void cr[e].fire({template:n})}};var hr=Object.freeze({__proto__:null,argsToParams:Qn,bindClickHandler:lr,clickCancel:ut,clickConfirm:ct,clickDeny:lt,enableLoading:Wt,fire:Zn,getActions:L,getCancelButton:O,getCloseButton:U,getConfirmButton:N,getContainer:w,getDenyButton:D,getFocusableElements:F,getFooter:P,getHtmlContainer:S,getIcon:T,getIconContent:I,getImage:_,getInputLabel:x,getLoader:R,getPopup:E,getProgressSteps:C,getTimerLeft:tr,getTimerProgressBar:M,getTitle:k,getValidationMessage:A,increaseTimer:sr,isDeprecatedParameter:Dn,isLoading:q,isTimerRunning:or,isUpdatableParameter:On,isValidParameter:Nn,isVisible:at,mixin:er,resumeTimer:rr,showLoading:Wt,stopTimer:nr,toggleTimer:ir});class dr{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const fr=["swal-title","swal-html","swal-footer"],pr=e=>{const t="string"==typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;return Tr(n),Object.assign(mr(n),gr(n),yr(n),wr(n),vr(n),br(n),Er(n,fr))},mr=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach((e=>{Ir(e,["name","value"]);const n=e.getAttribute("name"),r=e.getAttribute("value");"boolean"==typeof Sn[n]?t[n]="false"!==r:"object"==typeof Sn[n]?t[n]=JSON.parse(r):t[n]=r})),t},gr=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach((e=>{const n=e.getAttribute("name"),r=e.getAttribute("value");t[n]=new Function(`return ${r}`)()})),t},yr=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach((e=>{Ir(e,["type","color","aria-label"]);const n=e.getAttribute("type");t[`${n}ButtonText`]=e.innerHTML,t[`show${c(n)}Button`]=!0,e.hasAttribute("color")&&(t[`${n}ButtonColor`]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t[`${n}ButtonAriaLabel`]=e.getAttribute("aria-label"))})),t},wr=e=>{const t={},n=e.querySelector("swal-image");return n&&(Ir(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))),t},vr=e=>{const t={},n=e.querySelector("swal-icon");return n&&(Ir(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},br=e=>{const t={},n=e.querySelector("swal-input");n&&(Ir(n,["type","label","placeholder","value"]),t.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value")));const r=Array.from(e.querySelectorAll("swal-input-option"));return r.length&&(t.inputOptions={},r.forEach((e=>{Ir(e,["value"]);const n=e.getAttribute("value"),r=e.innerHTML;t.inputOptions[n]=r}))),t},Er=(e,t)=>{const n={};for(const r in t){const i=t[r],s=e.querySelector(i);s&&(Ir(s,[]),n[i.replace(/^swal-/,"")]=s.innerHTML.trim())}return n},Tr=e=>{const t=fr.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((e=>{const n=e.tagName.toLowerCase();t.includes(n)||l(`Unrecognized element <${n}>`)}))},Ir=(e,t)=>{Array.from(e.attributes).forEach((n=>{-1===t.indexOf(n.name)&&l([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."])}))},kr=10,Sr=e=>{const n=w(),r=E();"function"==typeof e.willOpen&&e.willOpen(r);const i=window.getComputedStyle(document.body).overflowY;Nr(n,r,e),setTimeout((()=>{Cr(n,r)}),kr),B()&&(Ar(n,e.scrollbarPadding,i),It()),j()||t.previousActiveElement||(t.previousActiveElement=document.activeElement),"function"==typeof e.didOpen&&setTimeout((()=>e.didOpen(r))),J(n,o["no-transition"])},_r=e=>{const t=E();if(e.target!==t)return;const n=w();t.removeEventListener(Te,_r),n.style.overflowY="auto"},Cr=(e,t)=>{Te&&ae(t)?(e.style.overflowY="hidden",t.addEventListener(Te,_r)):e.style.overflowY="auto"},Ar=(e,t,n)=>{St(),t&&"hidden"!==n&&Lt(),setTimeout((()=>{e.scrollTop=0}))},Nr=(e,t,n)=>{Y(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),ee(t,"grid"),setTimeout((()=>{Y(t,n.showClass.popup),t.style.removeProperty("opacity")}),kr),Y([document.documentElement,document.body],o.shown),n.heightAuto&&n.backdrop&&!n.toast&&Y([document.documentElement,document.body],o["height-auto"])};var Or={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function Dr(e){e.inputValidator||Object.keys(Or).forEach((t=>{e.input===t&&(e.inputValidator=Or[t])}))}function xr(e){(!e.target||"string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(l('Target parameter is not valid, defaulting to "body"'),e.target="body")}function Rr(e){Dr(e),e.showLoaderOnConfirm&&!e.preConfirm&&l("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),xr(e),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),we(e)}let Lr;class Pr{constructor(){if("undefined"==typeof window)return;Lr=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=Object.freeze(this.constructor.argsToParams(t));this.params=r,this.isAwaitingPromise=!1;const s=Lr._main(Lr.params);i.promise.set(this,s)}_main(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Pn(Object.assign({},n,e)),t.currentInstance&&(t.currentInstance._destroy(),B()&&kt()),t.currentInstance=Lr;const r=Ur(e,n);Rr(r),Object.freeze(r),t.timeout&&(t.timeout.stop(),delete t.timeout),clearTimeout(t.restoreFocusTimeout);const s=Vr(Lr);return ot(Lr,r),i.innerParams.set(Lr,r),Mr(Lr,s,r)}then(e){return i.promise.get(this).then(e)}finally(e){return i.promise.get(this).finally(e)}}const Mr=(e,n,r)=>new Promise(((i,s)=>{const o=t=>{e.close({isDismissed:!0,dismiss:t})};Tt.swalPromiseResolve.set(e,i),Tt.swalPromiseReject.set(e,s),n.confirmButton.onclick=()=>{sn(e)},n.denyButton.onclick=()=>{on(e)},n.cancelButton.onclick=()=>{an(e,o)},n.closeButton.onclick=()=>{o(ht.close)},$n(e,n,o),ft(e,t,r,o),Gt(e,r),Sr(r),Fr(t,r,o),Br(n,r),setTimeout((()=>{n.container.scrollTop=0}))})),Ur=(e,t)=>{const n=pr(e),r=Object.assign({},Sn,t,n,e);return r.showClass=Object.assign({},Sn.showClass,r.showClass),r.hideClass=Object.assign({},Sn.hideClass,r.hideClass),r},Vr=e=>{const t={popup:E(),container:w(),actions:L(),confirmButton:N(),denyButton:D(),cancelButton:O(),loader:R(),closeButton:U(),validationMessage:A(),progressSteps:C()};return i.domCache.set(e,t),t},Fr=(e,t,n)=>{const r=M();te(r),t.timer&&(e.timeout=new dr((()=>{n("timer"),delete e.timeout}),t.timer),t.timerProgressBar&&(ee(r),W(r,t,"timerProgressBar"),setTimeout((()=>{e.timeout&&e.timeout.running&&ce(t.timer)}))))},Br=(e,t)=>{t.toast||(p(t.allowEnterKey)?jr(e,t)||pt(-1,1):qr())},jr=(e,t)=>t.focusDeny&&ie(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&ie(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!ie(e.confirmButton)||(e.confirmButton.focus(),0)),qr=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};if("undefined"!=typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const e=new Date,t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/864e5>3&&setTimeout((()=>{document.body.style.pointerEvents="none";const e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",e.loop=!0,document.body.appendChild(e),setTimeout((()=>{e.play().catch((()=>{}))}),2500)}),500):localStorage.setItem("swal-initiation",`${e}`)}Pr.prototype.disableButtons=bn,Pr.prototype.enableButtons=vn,Pr.prototype.getInput=gn,Pr.prototype.disableInput=Tn,Pr.prototype.enableInput=En,Pr.prototype.hideLoading=pn,Pr.prototype.disableLoading=pn,Pr.prototype.showValidationMessage=In,Pr.prototype.resetValidationMessage=kn,Pr.prototype.close=Vt,Pr.prototype.closePopup=Vt,Pr.prototype.closeModal=Vt,Pr.prototype.closeToast=Vt,Pr.prototype.rejectPromise=Bt,Pr.prototype.update=Mn,Pr.prototype._destroy=Vn,Object.assign(Pr,hr),Object.keys(qn).forEach((e=>{Pr[e]=function(){return Lr&&Lr[e]?Lr[e](...arguments):null}})),Pr.DismissReason=ht,Pr.version="11.7.12";const $r=Pr;return $r.default=$r,$r}(),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{"use strict";n.d(r,{P:()=>jg});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const e=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){try{return t.decodeString(e,!0)}catch(e){}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function a(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function c(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function l(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function u(){const e=o();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class h extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,d.prototype.create)}}class d{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(f,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new h(r,o,n)}}const f=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(m(n)&&m(s)){if(!p(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function m(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function y(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function w(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=b),void 0===r.error&&(r.error=b),void 0===r.complete&&(r.complete=b);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function b(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(e){return e&&e._delegate?e._delegate:e}class T{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new s;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:I})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=I){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=I){return this.instances.has(e)}getOptions(e=I){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===I?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=I){return this.component?this.component.multipleInstances?e:I:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class S{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new k(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=[];var C;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(C||(C={}));const A={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},N=C.INFO,O={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},D=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!O[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class x{constructor(e){this.name=e,this._logLevel=N,this._logHandler=D,this._userLogHandler=null,_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const L="@firebase/app",P="0.7.16",M=new x("@firebase/app"),U="[DEFAULT]",V={[L]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},F=new Map,B=new Map;function j(e,t){try{e.container.addComponent(t)}catch(n){M.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e){const t=e.name;if(B.has(t))return M.debug(`There were multiple attempts to register component ${t}.`),!1;B.set(t,e);for(const t of F.values())j(t,e);return!0}function $(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H=new d("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new T("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="9.6.6";function K(e=U){const t=F.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function G(e,t,n){var r;let i=null!==(r=V[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void M.warn(e.join(" "))}q(new T(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var X;X="",q(new T("platform-logger",(e=>new R(e)),"PRIVATE")),G(L,P,X),G(L,P,"esm2017"),G("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
G("firebase","9.6.6","app");var Y,J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},Q={},Z=Z||{},ee=J||self;function te(){}function ne(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function re(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var ie="closure_uid_"+(1e9*Math.random()>>>0),se=0;function oe(e,t,n){return e.call.apply(e.bind,arguments)}function ae(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ce(e,t,n){return(ce=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oe:ae).apply(null,arguments)}function le(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ue(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function he(){this.s=this.s,this.o=this.o}var de={};he.prototype.s=!1,he.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,ie)&&e[ie]||(e[ie]=++se)}(this);delete de[e]}},he.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fe=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},pe=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function me(e){return Array.prototype.concat.apply([],arguments)}function ge(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ye(e){return/^[\s\xa0]*$/.test(e)}var we,ve=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function be(e,t){return-1!=e.indexOf(t)}function Ee(e,t){return e<t?-1:e>t?1:0}e:{var Te=ee.navigator;if(Te){var Ie=Te.userAgent;if(Ie){we=Ie;break e}}we=""}function ke(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Se(e){const t={};for(const n in e)t[n]=e[n];return t}var _e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ce(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<_e.length;t++)n=_e[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ae(e){return Ae[" "](e),e}Ae[" "]=te;var Ne,Oe,De=be(we,"Opera"),xe=be(we,"Trident")||be(we,"MSIE"),Re=be(we,"Edge"),Le=Re||xe,Pe=be(we,"Gecko")&&!(be(we.toLowerCase(),"webkit")&&!be(we,"Edge"))&&!(be(we,"Trident")||be(we,"MSIE"))&&!be(we,"Edge"),Me=be(we.toLowerCase(),"webkit")&&!be(we,"Edge");function Ue(){var e=ee.document;return e?e.documentMode:void 0}e:{var Ve="",Fe=(Oe=we,Pe?/rv:([^\);]+)(\)|;)/.exec(Oe):Re?/Edge\/([\d\.]+)/.exec(Oe):xe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Oe):Me?/WebKit\/(\S+)/.exec(Oe):De?/(?:Version)[ \/]?(\S+)/.exec(Oe):void 0);if(Fe&&(Ve=Fe?Fe[1]:""),xe){var Be=Ue();if(null!=Be&&Be>parseFloat(Ve)){Ne=String(Be);break e}}Ne=Ve}var je,qe={};function $e(){return function(e){var t=qe;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=ve(String(Ne)).split("."),n=ve("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Ee(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Ee(0==i[2].length,0==s[2].length)||Ee(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(ee.document&&xe){var He=Ue();je=He||(parseInt(Ne,10)||void 0)}else je=void 0;var ze=je,We=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ee.addEventListener("test",te,t),ee.removeEventListener("test",te,t)}catch(e){}return e}();function Ke(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Ge(e,t){if(Ke.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Pe){e:{try{Ae(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Xe[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ge.Z.h.call(this)}}Ke.prototype.h=function(){this.defaultPrevented=!0},ue(Ge,Ke);var Xe={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ye="closure_listenable_"+(1e6*Math.random()|0),Je=0;function Qe(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Je,this.ca=this.fa=!1}function Ze(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function et(e){this.src=e,this.g={},this.h=0}function tt(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=fe(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ze(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function nt(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}et.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=nt(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Qe(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var rt="closure_lm_"+(1e6*Math.random()|0),it={};function st(e,t,n,r,i){if(r&&r.once)return at(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)st(e,t[s],n,r,i);return null}return n=pt(n),e&&e[Ye]?e.N(t,n,re(r)?!!r.capture:!!r,i):ot(e,t,n,!1,r,i)}function ot(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=re(i)?!!i.capture:!!i,a=dt(e);if(a||(e[rt]=a=new et(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=ht;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)We||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ut(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function at(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)at(e,t[s],n,r,i);return null}return n=pt(n),e&&e[Ye]?e.O(t,n,re(r)?!!r.capture:!!r,i):ot(e,t,n,!0,r,i)}function ct(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ct(e,t[s],n,r,i);else r=re(r)?!!r.capture:!!r,n=pt(n),e&&e[Ye]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=nt(s=e.g[t],n,r,i))&&(Ze(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=dt(e))&&(t=e.g[t.toString()],e=-1,t&&(e=nt(t,n,r,i)),(n=-1<e?t[e]:null)&&lt(n))}function lt(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Ye])tt(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ut(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=dt(t))?(tt(n,e),0==n.h&&(n.src=null,t[rt]=null)):Ze(e)}}}function ut(e){return e in it?it[e]:it[e]="on"+e}function ht(e,t){if(e.ca)e=!0;else{t=new Ge(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&lt(e),e=n.call(r,t)}return e}function dt(e){return(e=e[rt])instanceof et?e:null}var ft="__closure_events_fn_"+(1e9*Math.random()>>>0);function pt(e){return"function"==typeof e?e:(e[ft]||(e[ft]=function(t){return e.handleEvent(t)}),e[ft])}function mt(){he.call(this),this.i=new et(this),this.P=this,this.I=null}function gt(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Ke(t,e);else if(t instanceof Ke)t.target=t.target||e;else{var i=t;Ce(t=new Ke(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=yt(o,r,!0,t)&&i}if(i=yt(o=t.g=e,r,!0,t)&&i,i=yt(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=yt(o=t.g=n[s],r,!1,t)&&i}function yt(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&tt(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}ue(mt,he),mt.prototype[Ye]=!0,mt.prototype.removeEventListener=function(e,t,n,r){ct(this,e,t,n,r)},mt.prototype.M=function(){if(mt.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ze(n[r]);delete t.g[e],t.h--}}this.I=null},mt.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},mt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var wt=ee.JSON.stringify;function vt(){var e=_t;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var bt,Et=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Tt),(e=>e.reset()));class Tt{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function It(e){ee.setTimeout((()=>{throw e}),0)}function kt(e,t){bt||function(){var e=ee.Promise.resolve(void 0);bt=function(){e.then(Ct)}}(),St||(bt(),St=!0),_t.add(e,t)}var St=!1,_t=new class{constructor(){this.h=this.g=null}add(e,t){const n=Et.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ct(){for(var e;e=vt();){try{e.h.call(e.g)}catch(e){It(e)}var t=Et;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}St=!1}function At(e,t){mt.call(this),this.h=e||1,this.g=t||ee,this.j=ce(this.kb,this),this.l=Date.now()}function Nt(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ot(e,t,n){if("function"==typeof e)n&&(e=ce(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ce(e.handleEvent,e)}return 2147483647<Number(t)?-1:ee.setTimeout(e,t||0)}function Dt(e){e.g=Ot((()=>{e.g=null,e.i&&(e.i=!1,Dt(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}ue(At,mt),(Y=At.prototype).da=!1,Y.S=null,Y.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),gt(this,"tick"),this.da&&(Nt(this),this.start()))}},Y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Y.M=function(){At.Z.M.call(this),Nt(this),delete this.g};class xt extends he{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dt(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rt(e){he.call(this),this.h=e,this.g={}}ue(Rt,he);var Lt=[];function Pt(e,t,n,r){Array.isArray(n)||(n&&(Lt[0]=n.toString()),n=Lt);for(var i=0;i<n.length;i++){var s=st(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Mt(e){ke(e.g,(function(e,t){this.g.hasOwnProperty(t)&&lt(e)}),e),e.g={}}function Ut(){this.g=!0}function Vt(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return wt(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Rt.prototype.M=function(){Rt.Z.M.call(this),Mt(this)},Rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ut.prototype.Aa=function(){this.g=!1},Ut.prototype.info=function(){};var Ft={},Bt=null;function jt(){return Bt=Bt||new mt}function qt(e){Ke.call(this,Ft.Ma,e)}function $t(e){const t=jt();gt(t,new qt(t,e))}function Ht(e,t){Ke.call(this,Ft.STAT_EVENT,e),this.stat=t}function zt(e){const t=jt();gt(t,new Ht(t,e))}function Wt(e,t){Ke.call(this,Ft.Na,e),this.size=t}function Kt(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ee.setTimeout((function(){e()}),t)}Ft.Ma="serverreachability",ue(qt,Ke),Ft.STAT_EVENT="statevent",ue(Ht,Ke),Ft.Na="timingevent",ue(Wt,Ke);var Gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yt(){}function Jt(e){return e.h||(e.h=e.i())}function Qt(){}Yt.prototype.h=null;var Zt,en={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function tn(){Ke.call(this,"d")}function nn(){Ke.call(this,"c")}function rn(){}function sn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Rt(this),this.P=an,e=Le?125:void 0,this.W=new At(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new on}function on(){this.i=null,this.g="",this.h=!1}ue(tn,Ke),ue(nn,Ke),ue(rn,Yt),rn.prototype.g=function(){return new XMLHttpRequest},rn.prototype.i=function(){return{}},Zt=new rn;var an=45e3,cn={},ln={};function un(e,t,n){e.K=1,e.v=Rn(Cn(t)),e.s=n,e.U=!0,hn(e,null)}function hn(e,t){e.F=Date.now(),mn(e),e.A=Cn(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Wn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new on,e.g=Wr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new xt(ce(e.Ia,e,e.g),e.O)),Pt(e.V,e.g,"readystatechange",e.gb),t=e.H?Se(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),$t(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function dn(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function fn(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=pn(e,n),r==ln){4==t&&(e.o=4,zt(14),i=!1),Vt(e.j,e.m,null,"[Incomplete Response]");break}if(r==cn){e.o=4,zt(15),Vt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Vt(e.j,e.m,r,null),bn(e,r)}dn(e)&&r!=ln&&r!=cn&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,zt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vr(t),t.L=!0,zt(11))):(Vt(e.j,e.m,n,"[Invalid Chunked Response]"),vn(e),wn(e))}function pn(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ln:(n=Number(t.substring(n,r)),isNaN(n)?cn:(r+=1)+n>t.length?ln:(t=t.substr(r,n),e.C=r+n,t))}function mn(e){e.Y=Date.now()+e.P,gn(e,e.P)}function gn(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Kt(ce(e.eb,e),t)}function yn(e){e.B&&(ee.clearTimeout(e.B),e.B=null)}function wn(e){0==e.l.G||e.I||jr(e.l,e)}function vn(e){yn(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Nt(e.W),Mt(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function bn(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Qn(n.i,e)))if(n.I=e.N,!e.J&&Qn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Br(n),Nr(n)}Ur(n),zt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Kt(ce(n.ab,n),6e3));if(1>=Jn(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else $r(n,11)}else if((e.J||n.g==e)&&Br(n),!ye(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(be(e,"spdy")||be(e,"quic")||be(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Zn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,xn(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=zr(r,r.H?r.la:null,r.W),o.J){er(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(yn(a),mn(a)),r.g=o}else Mr(r);0<n.l.length&&xr(n)}else"stop"!=l[0]&&"close"!=l[0]||$r(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?$r(n,7):Ar(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}$t(4)}catch(e){}}function En(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ne(e)||"string"==typeof e)pe(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(ne(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(ne(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Tn(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Tn)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function In(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];kn(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)kn(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function kn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Y=sn.prototype).setTimeout=function(e){this.P=e},Y.gb=function(e){e=e.target;const t=this.L;t&&3==Ir(e)?t.l():this.Ia(e)},Y.Ia=function(e){try{if(e==this.g)e:{const u=Ir(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Le||this.g&&(this.h.h||this.g.ga()||kr(this.g)))){this.I||4!=u||7==t||$t(8==t||0>=h?3:2),yn(this);var n=this.g.ba();this.N=n;t:if(dn(this)){var r=kr(this.g);e="";var i=r.length,s=4==Ir(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){vn(this),wn(this);var o="";break t}this.h.i=new ee.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,zt(12),vn(this),wn(this);break e}Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bn(this,n)}this.U?(fn(this,u,o),Le&&this.i&&3==u&&(Pt(this.V,this.W,"tick",this.fb),this.W.start())):(Vt(this.j,this.m,o,null),bn(this,o)),4==u&&vn(this),this.i&&!this.I&&(4==u?jr(this.l,this):(this.i=!1,mn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),vn(this),wn(this)}}}catch(e){}},Y.fb=function(){if(this.g){var e=Ir(this.g),t=this.g.ga();this.C<t.length&&(yn(this),fn(this,e,t),this.i&&4!=e&&mn(this))}},Y.cancel=function(){this.I=!0,vn(this)},Y.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&($t(3),zt(17)),vn(this),this.o=2,wn(this)):gn(this,this.Y-e)},(Y=Tn.prototype).R=function(){In(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Y.T=function(){return In(this),this.g.concat()},Y.get=function(e,t){return kn(this.h,e)?this.h[e]:t},Y.set=function(e,t){kn(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Y.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Sn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _n(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof _n){this.g=void 0!==t?t:e.g,An(this,e.j),this.s=e.s,Nn(this,e.i),On(this,e.m),this.l=e.l,t=e.h;var n=new qn;n.i=t.i,t.g&&(n.g=new Tn(t.g),n.h=t.h),Dn(this,n),this.o=e.o}else e&&(n=String(e).match(Sn))?(this.g=!!t,An(this,n[1]||"",!0),this.s=Ln(n[2]||""),Nn(this,n[3]||"",!0),On(this,n[4]),this.l=Ln(n[5]||"",!0),Dn(this,n[6]||"",!0),this.o=Ln(n[7]||"")):(this.g=!!t,this.h=new qn(null,this.g))}function Cn(e){return new _n(e)}function An(e,t,n){e.j=n?Ln(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Nn(e,t,n){e.i=n?Ln(t,!0):t}function On(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Dn(e,t,n){t instanceof qn?(e.h=t,function(e,t){t&&!e.j&&($n(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Hn(this,t),Wn(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Pn(t,Bn)),e.h=new qn(t,e.g))}function xn(e,t,n){e.h.set(t,n)}function Rn(e){return xn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ln(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pn(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Mn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Mn(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}_n.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pn(t,Un,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Pn(t,Un,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Pn(n,"/"==n.charAt(0)?Fn:Vn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pn(n,jn)),e.join("")};var Un=/[#\/\?@]/g,Vn=/[#\?:]/g,Fn=/[#\?]/g,Bn=/[#\?@]/g,jn=/#/g;function qn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function $n(e){e.g||(e.g=new Tn,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Hn(e,t){$n(e),t=Kn(e,t),kn(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,kn((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&In(e)))}function zn(e,t){return $n(e),t=Kn(e,t),kn(e.g.h,t)}function Wn(e,t,n){Hn(e,t),0<n.length&&(e.i=null,e.g.set(Kn(e,t),ge(n)),e.h+=n.length)}function Kn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Y=qn.prototype).add=function(e,t){$n(this),this.i=null,e=Kn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Y.forEach=function(e,t){$n(this),this.g.forEach((function(n,r){pe(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Y.T=function(){$n(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Y.R=function(e){$n(this);var t=[];if("string"==typeof e)zn(this,e)&&(t=me(t,this.g.get(Kn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=me(t,e[n])}return t},Y.set=function(e,t){return $n(this),this.i=null,zn(this,e=Kn(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Y.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function Gn(e){this.l=e||Xn,ee.PerformanceNavigationTiming?e=0<(e=ee.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(ee.g&&ee.g.Ea&&ee.g.Ea()&&ee.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xn=10;function Yn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Jn(e){return e.h?1:e.g?e.g.size:0}function Qn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Zn(e,t){e.g?e.g.add(t):e.h=t}function er(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tr(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ge(e.i)}function nr(){}function rr(){this.g=new nr}function ir(e,t,n){const r=n||"";try{En(e,(function(e,n){let i=e;re(e)&&(i=wt(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function sr(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function or(e){this.l=e.$b||null,this.j=e.ib||!1}function ar(e,t){mt.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=cr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gn.prototype.cancel=function(){if(this.i=tr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},nr.prototype.stringify=function(e){return ee.JSON.stringify(e,void 0)},nr.prototype.parse=function(e){return ee.JSON.parse(e,void 0)},ue(or,Yt),or.prototype.g=function(){return new ar(this.l,this.j)},or.prototype.i=function(e){return function(){return e}}({}),ue(ar,mt);var cr=0;function lr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function ur(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hr(e)}function hr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Y=ar.prototype).open=function(e,t){if(this.readyState!=cr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hr(this)},Y.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ee).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ur(this)),this.readyState=cr},Y.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==ee.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Y.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ur(this):hr(this),3==this.readyState&&lr(this)}},Y.Ua=function(e){this.g&&(this.response=this.responseText=e,ur(this))},Y.Ta=function(e){this.g&&(this.response=e,ur(this))},Y.ha=function(){this.g&&ur(this)},Y.setRequestHeader=function(e,t){this.v.append(e,t)},Y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var dr=ee.JSON.parse;function fr(e){mt.call(this),this.headers=new Tn,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pr,this.K=this.L=!1}ue(fr,mt);var pr="",mr=/^https?$/i,gr=["POST","PUT"];function yr(e){return"content-type"==e.toLowerCase()}function wr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vr(e),Er(e)}function vr(e){e.D||(e.D=!0,gt(e,"complete"),gt(e,"error"))}function br(e){if(e.h&&void 0!==Z&&(!e.C[1]||4!=Ir(e)||2!=e.ba()))if(e.v&&4==Ir(e))Ot(e.Fa,0,e);else if(gt(e,"readystatechange"),4==Ir(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(Sn)[1]||null;if(!i&&ee.self&&ee.self.location){var s=ee.self.location.protocol;i=s.substr(0,s.length-1)}r=!mr.test(i?i.toLowerCase():"")}n=r}if(n)gt(e,"complete"),gt(e,"success");else{e.m=6;try{var o=2<Ir(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",vr(e)}}finally{Er(e)}}}function Er(e,t){if(e.g){Tr(e);const n=e.g,r=e.C[0]?te:null;e.g=null,e.C=null,t||gt(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Tr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ee.clearTimeout(e.A),e.A=null)}function Ir(e){return e.g?e.g.readyState:0}function kr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case pr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Sr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return ke(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):xn(e,t,n))}function _r(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cr(e){this.za=0,this.l=[],this.h=new Ut,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=_r("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=_r("baseRetryDelayMs",5e3,e),this.$a=_r("retryDelaySeedMs",1e4,e),this.Ya=_r("forwardChannelMaxRetries",2,e),this.ra=_r("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Gn(e&&e.concurrentRequestLimit),this.Ca=new rr,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Ar(e){if(Or(e),3==e.G){var t=e.V++,n=Cn(e.F);xn(n,"SID",e.J),xn(n,"RID",t),xn(n,"TYPE","terminate"),Lr(e,n),(t=new sn(e,e.h,t,void 0)).K=2,t.v=Rn(Cn(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon&&(n=ee.navigator.sendBeacon(t.v.toString(),"")),!n&&ee.Image&&((new Image).src=t.v,n=!0),n||(t.g=Wr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),mn(t)}Hr(e)}function Nr(e){e.g&&(Vr(e),e.g.cancel(),e.g=null)}function Or(e){Nr(e),e.u&&(ee.clearTimeout(e.u),e.u=null),Br(e),e.i.cancel(),e.m&&("number"==typeof e.m&&ee.clearTimeout(e.m),e.m=null)}function Dr(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&xr(e)}function xr(e){Yn(e.i)||e.m||(e.m=!0,kt(e.Ha,e),e.C=0)}function Rr(e,t){var n;n=t?t.m:e.V++;const r=Cn(e.F);xn(r,"SID",e.J),xn(r,"RID",n),xn(r,"AID",e.U),Lr(e,r),e.o&&e.s&&Sr(r,e.o,e.s),n=new sn(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Pr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Zn(e.i,n),un(n,r,t)}function Lr(e,t){e.j&&En({},(function(e,n){xn(t,n,e)}))}function Pr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?ce(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{ir(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Mr(e){e.g||e.u||(e.Y=1,kt(e.Ga,e),e.A=0)}function Ur(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Kt(ce(e.Ga,e),qr(e,e.A)),e.A++,!0)}function Vr(e){null!=e.B&&(ee.clearTimeout(e.B),e.B=null)}function Fr(e){e.g=new sn(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Cn(e.oa);xn(t,"RID","rpc"),xn(t,"SID",e.J),xn(t,"CI",e.N?"0":"1"),xn(t,"AID",e.U),Lr(e,t),xn(t,"TYPE","xmlhttp"),e.o&&e.s&&Sr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Rn(Cn(t)),n.s=null,n.U=!0,hn(n,e)}function Br(e){null!=e.v&&(ee.clearTimeout(e.v),e.v=null)}function jr(e,t){var n=null;if(e.g==t){Br(e),Vr(e),e.g=null;var r=2}else{if(!Qn(e.i,t))return;n=t.D,er(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;gt(r=jt(),new Wt(r,n,t,i)),xr(e)}else Mr(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Jn(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Kt(ce(e.Ha,e,t),qr(e,e.C)),e.C++,0)))}(e,t)||2==r&&Ur(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:$r(e,5);break;case 4:$r(e,10);break;case 3:$r(e,6);break;default:$r(e,2)}}function qr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function $r(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=ce(e.jb,e);n||(n=new _n("//www.google.com/images/cleardot.gif"),ee.location&&"http"==ee.location.protocol||An(n,"https"),Rn(n)),function(e,t){const n=new Ut;if(ee.Image){const r=new Image;r.onload=le(sr,n,r,"TestLoadImage: loaded",!0,t),r.onerror=le(sr,n,r,"TestLoadImage: error",!1,t),r.onabort=le(sr,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=le(sr,n,r,"TestLoadImage: timeout",!1,t),ee.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else zt(2);e.G=0,e.j&&e.j.va(t),Hr(e),Or(e)}function Hr(e){e.G=0,e.I=-1,e.j&&(0==tr(e.i).length&&0==e.l.length||(e.i.i.length=0,ge(e.l),e.l.length=0),e.j.ua())}function zr(e,t,n){let r=function(e){return e instanceof _n?Cn(e):new _n(e,void 0)}(n);if(""!=r.i)t&&Nn(r,t+"."+r.i),On(r,r.m);else{const e=ee.location;r=function(e,t,n,r){var i=new _n(null,void 0);return e&&An(i,e),t&&Nn(i,t),n&&On(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&ke(e.aa,(function(e,t){xn(r,t,e)})),t=e.D,n=e.sa,t&&n&&xn(r,t,n),xn(r,"VER",e.ma),Lr(e,r),r}function Wr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new fr(new or({ib:!0})):new fr(e.qa)).L=e.H,t}function Kr(){}function Gr(){if(xe&&!(10<=Number(ze)))throw Error("Environmental error: no available transport.")}function Xr(e,t){mt.call(this),this.g=new Cr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!ye(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ye(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Qr(this)}function Yr(e){tn.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Jr(){nn.call(this),this.status=1}function Qr(e){this.g=e}(Y=fr.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zt.g(),this.C=this.u?Jt(this.u):Jt(Zt),this.g.onreadystatechange=ce(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void wr(this,e)}e=n||"";const i=new Tn(this.headers);r&&En(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=yr;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=ee.FormData&&e instanceof ee.FormData,!(0<=fe(gr,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tr(this),0<this.B&&((this.K=function(e){return xe&&$e()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ce(this.pa,this)):this.A=Ot(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){wr(this,e)}},Y.pa=function(){void 0!==Z&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gt(this,"timeout"),this.abort(8))},Y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,gt(this,"complete"),gt(this,"abort"),Er(this))},Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Er(this,!0)),fr.Z.M.call(this)},Y.Fa=function(){this.s||(this.F||this.v||this.l?br(this):this.cb())},Y.cb=function(){br(this)},Y.ba=function(){try{return 2<Ir(this)?this.g.status:-1}catch(e){return-1}},Y.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Y.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),dr(t)}},Y.Da=function(){return this.m},Y.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Y=Cr.prototype).ma=8,Y.G=1,Y.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Y.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new sn(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Se(s),Ce(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Pr(this,i,t),xn(n=Cn(this.F),"RID",e),xn(n,"CVER",22),this.D&&xn(n,"X-HTTP-Session-Id",this.D),Lr(this,n),this.o&&s&&Sr(n,this.o,s),Zn(this.i,i),this.Ra&&xn(n,"TYPE","init"),this.ja?(xn(n,"$req",t),xn(n,"SID","null"),i.$=!0,un(i,n,null)):un(i,n,t),this.G=2}}else 3==this.G&&(e?Rr(this,e):0==this.l.length||Yn(this.i)||Rr(this))},Y.Ga=function(){if(this.u=null,Fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Kt(ce(this.bb,this),e)}},Y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,zt(10),Nr(this),Fr(this))},Y.ab=function(){null!=this.v&&(this.v=null,Nr(this),Ur(this),zt(19))},Y.jb=function(e){e?(this.h.info("Successfully pinged google.com"),zt(2)):(this.h.info("Failed to ping google.com"),zt(1))},(Y=Kr.prototype).xa=function(){},Y.wa=function(){},Y.va=function(){},Y.ua=function(){},Y.Oa=function(){},Gr.prototype.g=function(e,t){return new Xr(e,t)},ue(Xr,mt),Xr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),kt(ce(e.hb,e,t))),zt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=zr(e,null,e.W),xr(e)},Xr.prototype.close=function(){Ar(this.g)},Xr.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Dr(this.g,t)}else this.v?((t={}).__data__=wt(e),Dr(this.g,t)):Dr(this.g,e)},Xr.prototype.M=function(){this.g.j=null,delete this.j,Ar(this.g),delete this.g,Xr.Z.M.call(this)},ue(Yr,tn),ue(Jr,nn),ue(Qr,Kr),Qr.prototype.xa=function(){gt(this.g,"a")},Qr.prototype.wa=function(e){gt(this.g,new Yr(e))},Qr.prototype.va=function(e){gt(this.g,new Jr(e))},Qr.prototype.ua=function(){gt(this.g,"b")},Gr.prototype.createWebChannel=Gr.prototype.g,Xr.prototype.send=Xr.prototype.u,Xr.prototype.open=Xr.prototype.m,Xr.prototype.close=Xr.prototype.close,Gt.NO_ERROR=0,Gt.TIMEOUT=8,Gt.HTTP_ERROR=6,Xt.COMPLETE="complete",Qt.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",mt.prototype.listen=mt.prototype.N,fr.prototype.listenOnce=fr.prototype.O,fr.prototype.getLastError=fr.prototype.La,fr.prototype.getLastErrorCode=fr.prototype.Da,fr.prototype.getStatus=fr.prototype.ba,fr.prototype.getResponseJson=fr.prototype.Qa,fr.prototype.getResponseText=fr.prototype.ga,fr.prototype.send=fr.prototype.ea;var Zr=Q.createWebChannelTransport=function(){return new Gr},ei=Q.getStatEventTarget=function(){return jt()},ti=Q.ErrorCode=Gt,ni=Q.EventType=Xt,ri=Q.Event=Ft,ii=Q.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},si=Q.FetchXmlHttpFactory=or,oi=Q.WebChannel=Qt,ai=Q.XhrIo=fr;const ci="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}li.UNAUTHENTICATED=new li(null),li.GOOGLE_CREDENTIALS=new li("google-credentials-uid"),li.FIRST_PARTY=new li("first-party-uid"),li.MOCK_USER=new li("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ui="9.6.5";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new x("@firebase/firestore");function di(){return hi.logLevel}function fi(e,...t){if(hi.logLevel<=C.DEBUG){const n=t.map(gi);hi.debug(`Firestore (${ui}): ${e}`,...n)}}function pi(e,...t){if(hi.logLevel<=C.ERROR){const n=t.map(gi);hi.error(`Firestore (${ui}): ${e}`,...n)}}function mi(e,...t){if(hi.logLevel<=C.WARN){const n=t.map(gi);hi.warn(`Firestore (${ui}): ${e}`,...n)}}function gi(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e="Unexpected state"){const t=`FIRESTORE (${ui}) INTERNAL ASSERTION FAILED: `+e;throw pi(t),new Error(t)}function wi(e,t){e||yi()}function vi(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ei extends h{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ki{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(li.UNAUTHENTICATED)))}shutdown(){}}class Si{constructor(e){this.t=e,this.currentUser=li.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ti,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{fi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(fi("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ti)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(fi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(wi("string"==typeof t.accessToken),new Ii(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return wi(null===e||"string"==typeof e),new li(e)}}class _i{constructor(e,t,n){this.type="FirstParty",this.user=li.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ci{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new _i(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(li.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ai{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ni{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&fi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{fi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):fi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(wi("string"==typeof e.token),new Ai(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi.I=-1;class xi{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=Di(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function Ri(e,t){return e<t?-1:e>t?1:0}function Li(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ei(bi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ei(bi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ei(bi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ei(bi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pi.fromMillis(Date.now())}static fromDate(e){return Pi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Pi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ri(this.nanoseconds,e.nanoseconds):Ri(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Mi(e)}static min(){return new Mi(new Pi(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Vi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Fi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,n){void 0===t?t=0:t>e.length&&yi(),void 0===n?n=e.length-t:n>e.length-t&&yi(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Bi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ji extends Bi{construct(e,t,n){return new ji(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ei(bi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ji(t)}static emptyPath(){return new ji([])}}const qi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $i extends Bi{construct(e,t,n){return new $i(e,t,n)}static isValidIdentifier(e){return qi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$i.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $i(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ei(bi.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ei(bi.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ei(bi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ei(bi.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $i(t)}static emptyPath(){return new $i([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.fields=e,e.sort($i.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Li(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new zi(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new zi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ri(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zi.EMPTY_BYTE_STRING=new zi("");const Wi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ki(e){if(wi(!!e),"string"==typeof e){let t=0;const n=Wi.exec(e);if(wi(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Gi(e.seconds),nanos:Gi(e.nanos)}}function Gi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Xi(e){return"string"==typeof e?zi.fromBase64String(e):zi.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ji(e){const t=e.mapValue.fields.__previous_value__;return Yi(t)?Ji(t):t}function Qi(e){const t=Ki(e.mapValue.fields.__local_write_time__.timestampValue);return new Pi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){return null==e}function es(e){return 0===e&&1/e==-1/0}function ts(e){return"number"==typeof e&&Number.isInteger(e)&&!es(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.path=e}static fromPath(e){return new ns(ji.fromString(e))}static fromName(e){return new ns(ji.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===ji.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ji.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ns(new ji(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yi(e)?4:10:yi()}function is(e,t){if(e===t)return!0;const n=rs(e);if(n!==rs(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qi(e).isEqual(Qi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ki(e.timestampValue),r=Ki(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Xi(e.bytesValue).isEqual(Xi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Gi(e.geoPointValue.latitude)===Gi(t.geoPointValue.latitude)&&Gi(e.geoPointValue.longitude)===Gi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Gi(e.integerValue)===Gi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Gi(e.doubleValue),r=Gi(t.doubleValue);return n===r?es(n)===es(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Li(e.arrayValue.values||[],t.arrayValue.values||[],is);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ui(n)!==Ui(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!is(n[e],r[e])))return!1;return!0}(e,t);default:return yi()}}function ss(e,t){return void 0!==(e.values||[]).find((e=>is(e,t)))}function os(e,t){if(e===t)return 0;const n=rs(e),r=rs(t);if(n!==r)return Ri(n,r);switch(n){case 0:return 0;case 1:return Ri(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Gi(e.integerValue||e.doubleValue),r=Gi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return as(e.timestampValue,t.timestampValue);case 4:return as(Qi(e),Qi(t));case 5:return Ri(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Xi(e),r=Xi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Ri(n[e],r[e]);if(0!==t)return t}return Ri(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ri(Gi(e.latitude),Gi(t.latitude));return 0!==n?n:Ri(Gi(e.longitude),Gi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=os(n[e],r[e]);if(t)return t}return Ri(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Ri(r[e],s[e]);if(0!==t)return t;const o=os(n[r[e]],i[s[e]]);if(0!==o)return o}return Ri(r.length,s.length)}(e.mapValue,t.mapValue);default:throw yi()}}function as(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ri(e,t);const n=Ki(e),r=Ki(t),i=Ri(n.seconds,r.seconds);return 0!==i?i:Ri(n.nanos,r.nanos)}function cs(e){return ls(e)}function ls(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ki(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Xi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ns.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ls(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ls(e.fields[i])}`;return n+"}"}(e.mapValue):yi();var t,n}function us(e){return!!e&&"integerValue"in e}function hs(e){return!!e&&"arrayValue"in e}function ds(e){return!!e&&"nullValue"in e}function fs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ps(e){return!!e&&"mapValue"in e}function ms(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Vi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ms(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ms(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.value=e}static empty(){return new gs({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ps(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ms(t)}setAll(e){let t=$i.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ms(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ps(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return is(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ps(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Vi(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new gs(ms(this.value))}}function ys(e){const t=[];return Vi(e.fields,((e,n)=>{const r=new $i([e]);if(ps(n)){const e=ys(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Hi(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ws{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new ws(e,0,Mi.min(),gs.empty(),0)}static newFoundDocument(e,t,n){return new ws(e,1,t,n,0)}static newNoDocument(e,t){return new ws(e,2,t,gs.empty(),0)}static newUnknownDocument(e,t){return new ws(e,3,t,gs.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gs.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ws&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ws(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function bs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new vs(e,t,n,r,i,s,o)}function Es(e){const t=vi(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+cs(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Zi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Ls(t.startAt)),t.endAt&&(e+="|ub:",e+=Ls(t.endAt)),t.R=e}return t.R}function Ts(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ms(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!is(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Vs(e.startAt,t.startAt)&&Vs(e.endAt,t.endAt)}function Is(e){return ns.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class ks extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Ss(e,t,n):"array-contains"===t?new Ns(e,n):"in"===t?new Os(e,n):"not-in"===t?new Ds(e,n):"array-contains-any"===t?new xs(e,n):new ks(e,t,n)}static P(e,t,n){return"in"===t?new _s(e,n):new Cs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(os(t,this.value)):null!==t&&rs(this.value)===rs(t)&&this.v(os(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return yi()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ss extends ks{constructor(e,t,n){super(e,t,n),this.key=ns.fromName(n.referenceValue)}matches(e){const t=ns.comparator(e.key,this.key);return this.v(t)}}class _s extends ks{constructor(e,t){super(e,"in",t),this.keys=As("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Cs extends ks{constructor(e,t){super(e,"not-in",t),this.keys=As("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function As(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ns.fromName(e.referenceValue)))}class Ns extends ks{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hs(t)&&ss(t.arrayValue,this.value)}}class Os extends ks{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ss(this.value.arrayValue,t)}}class Ds extends ks{constructor(e,t){super(e,"not-in",t)}matches(e){if(ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ss(this.value.arrayValue,t)}}class xs extends ks{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ss(this.value.arrayValue,e)))}}class Rs{constructor(e,t){this.position=e,this.before=t}}function Ls(e){return`${e.before?"b":"a"}:${e.position.map((e=>cs(e))).join(",")}`}class Ps{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ms(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Us(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ns.comparator(ns.fromName(o.referenceValue),n.key):os(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Vs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!is(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Bs(e,t,n,r,i,s,o,a){return new Fs(e,t,n,r,i,s,o,a)}function js(e){return new Fs(e)}function qs(e){return!Zi(e.limit)&&"F"===e.limitType}function $s(e){return!Zi(e.limit)&&"L"===e.limitType}function Hs(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zs(e){for(const t of e.filters)if(t.V())return t.field;return null}function Ws(e){return null!==e.collectionGroup}function Ks(e){const t=vi(e);if(null===t.S){t.S=[];const e=zs(t),n=Hs(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new Ps(e)),t.S.push(new Ps($i.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Ps($i.keyField(),e))}}}return t.S}function Gs(e){const t=vi(e);if(!t.D)if("F"===t.limitType)t.D=bs(t.path,t.collectionGroup,Ks(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Ks(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Ps(n.field,t))}const n=t.endAt?new Rs(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Rs(t.startAt.position,!t.startAt.before):null;t.D=bs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function Xs(e,t,n){return new Fs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ys(e,t){return Ts(Gs(e),Gs(t))&&e.limitType===t.limitType}function Js(e){return`${Es(Gs(e))}|lt:${e.limitType}`}function Qs(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${cs(t.value)}`;var t})).join(", ")}]`),Zi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Ls(e.startAt)),e.endAt&&(t+=", endAt: "+Ls(e.endAt)),`Target(${t})`}(Gs(e))}; limitType=${e.limitType})`}function Zs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ns.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Us(e.startAt,Ks(e),t))&&(!e.endAt||!Us(e.endAt,Ks(e),t))}(e,t)}function eo(e){return(t,n)=>{let r=!1;for(const i of Ks(e)){const e=to(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function to(e,t,n){const r=e.field.isKeyField()?ns.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?os(r,i):yi()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return yi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(t)?"-0":t}}function ro(e){return{integerValue:""+e}}function io(e,t){return ts(t)?ro(t):no(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this._=void 0}}function oo(e,t,n){return e instanceof lo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof uo?ho(e,t):e instanceof fo?po(e,t):function(e,t){const n=co(e,t),r=go(n)+go(e.N);return us(n)&&us(e.N)?ro(r):no(e.k,r)}(e,t)}function ao(e,t,n){return e instanceof uo?ho(e,t):e instanceof fo?po(e,t):n}function co(e,t){return e instanceof mo?us(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class lo extends so{}class uo extends so{constructor(e){super(),this.elements=e}}function ho(e,t){const n=yo(t);for(const t of e.elements)n.some((e=>is(e,t)))||n.push(t);return{arrayValue:{values:n}}}class fo extends so{constructor(e){super(),this.elements=e}}function po(e,t){let n=yo(t);for(const t of e.elements)n=n.filter((e=>!is(e,t)));return{arrayValue:{values:n}}}class mo extends so{constructor(e,t){super(),this.k=e,this.N=t}}function go(e){return Gi(e.integerValue||e.doubleValue)}function yo(e){return hs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.field=e,this.transform=t}}class vo{constructor(e,t){this.version=e,this.transformResults=t}}class bo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bo}static exists(e){return new bo(void 0,e)}static updateTime(e){return new bo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class To{}function Io(e,t,n){e instanceof Ao?function(e,t,n){const r=e.value.clone(),i=Do(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof No?function(e,t,n){if(!Eo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Do(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Oo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ko(e,t,n){e instanceof Ao?function(e,t,n){if(!Eo(e.precondition,t))return;const r=e.value.clone(),i=xo(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Co(t),r).setHasLocalMutations()}(e,t,n):e instanceof No?function(e,t,n){if(!Eo(e.precondition,t))return;const r=xo(e.fieldTransforms,n,t),i=t.data;i.setAll(Oo(e)),i.setAll(r),t.convertToFoundDocument(Co(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Eo(e.precondition,t)&&t.convertToNoDocument(Mi.min())}(e,t)}function So(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=co(r.transform,e||null);null!=i&&(null==n&&(n=gs.empty()),n.set(r.field,i))}return n||null}function _o(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Li(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof uo&&t instanceof uo||e instanceof fo&&t instanceof fo?Li(e.elements,t.elements,is):e instanceof mo&&t instanceof mo?is(e.N,t.N):e instanceof lo&&t instanceof lo}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Co(e){return e.isFoundDocument()?e.version:Mi.min()}class Ao extends To{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class No extends To{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Oo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Do(e,t,n){const r=new Map;wi(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ao(o,a,n[i]))}return r}function xo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,oo(e,s,t))}return r}class Ro extends To{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Lo extends To{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mo,Uo;function Vo(e){switch(e){default:return yi();case bi.CANCELLED:case bi.UNKNOWN:case bi.DEADLINE_EXCEEDED:case bi.RESOURCE_EXHAUSTED:case bi.INTERNAL:case bi.UNAVAILABLE:case bi.UNAUTHENTICATED:return!1;case bi.INVALID_ARGUMENT:case bi.NOT_FOUND:case bi.ALREADY_EXISTS:case bi.PERMISSION_DENIED:case bi.FAILED_PRECONDITION:case bi.ABORTED:case bi.OUT_OF_RANGE:case bi.UNIMPLEMENTED:case bi.DATA_LOSS:return!0}}function Fo(e){if(void 0===e)return pi("GRPC error has no .code"),bi.UNKNOWN;switch(e){case Mo.OK:return bi.OK;case Mo.CANCELLED:return bi.CANCELLED;case Mo.UNKNOWN:return bi.UNKNOWN;case Mo.DEADLINE_EXCEEDED:return bi.DEADLINE_EXCEEDED;case Mo.RESOURCE_EXHAUSTED:return bi.RESOURCE_EXHAUSTED;case Mo.INTERNAL:return bi.INTERNAL;case Mo.UNAVAILABLE:return bi.UNAVAILABLE;case Mo.UNAUTHENTICATED:return bi.UNAUTHENTICATED;case Mo.INVALID_ARGUMENT:return bi.INVALID_ARGUMENT;case Mo.NOT_FOUND:return bi.NOT_FOUND;case Mo.ALREADY_EXISTS:return bi.ALREADY_EXISTS;case Mo.PERMISSION_DENIED:return bi.PERMISSION_DENIED;case Mo.FAILED_PRECONDITION:return bi.FAILED_PRECONDITION;case Mo.ABORTED:return bi.ABORTED;case Mo.OUT_OF_RANGE:return bi.OUT_OF_RANGE;case Mo.UNIMPLEMENTED:return bi.UNIMPLEMENTED;case Mo.DATA_LOSS:return bi.DATA_LOSS;default:return yi()}}(Uo=Mo||(Mo={}))[Uo.OK=0]="OK",Uo[Uo.CANCELLED=1]="CANCELLED",Uo[Uo.UNKNOWN=2]="UNKNOWN",Uo[Uo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Uo[Uo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Uo[Uo.NOT_FOUND=5]="NOT_FOUND",Uo[Uo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Uo[Uo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Uo[Uo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Uo[Uo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Uo[Uo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Uo[Uo.ABORTED=10]="ABORTED",Uo[Uo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Uo[Uo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Uo[Uo.INTERNAL=13]="INTERNAL",Uo[Uo.UNAVAILABLE=14]="UNAVAILABLE",Uo[Uo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(e,t){this.comparator=e,this.root=t||qo.EMPTY}insert(e,t){return new Bo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qo.BLACK,null,null))}remove(e){return new Bo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qo{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:qo.RED,this.left=null!=r?r:qo.EMPTY,this.right=null!=i?i:qo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new qo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return qo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yi();if(this.right.isRed())throw yi();const e=this.left.check();if(e!==this.right.check())throw yi();return e+(this.isRed()?0:1)}}qo.EMPTY=null,qo.RED=!0,qo.BLACK=!1,qo.EMPTY=new class{constructor(){this.size=0}get key(){throw yi()}get value(){throw yi()}get color(){throw yi()}get left(){throw yi()}get right(){throw yi()}copy(e,t,n,r,i){return this}insert(e,t,n){return new qo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{constructor(e){this.comparator=e,this.data=new Bo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ho(this.data.getIterator())}getIteratorFrom(e){return new Ho(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $o))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $o(this.comparator);return t.data=e,t}}class Ho{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Bo(ns.comparator);function Wo(){return zo}const Ko=new Bo(ns.comparator);function Go(){return Ko}const Xo=new Bo(ns.comparator);function Yo(){return Xo}const Jo=new $o(ns.comparator);function Qo(...e){let t=Jo;for(const n of e)t=t.add(n);return t}const Zo=new $o(Ri);function ea(){return Zo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,t)),new ta(Mi.min(),n,ea(),Wo(),Qo())}}class na{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new na(zi.EMPTY_BYTE_STRING,t,Qo(),Qo(),Qo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.O=r}}class ia{constructor(e,t){this.targetId=e,this.M=t}}class sa{constructor(e,t,n=zi.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class oa{constructor(){this.F=0,this.L=la(),this.B=zi.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Qo(),t=Qo(),n=Qo();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:yi()}})),new na(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=la()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class aa{constructor(e){this.et=e,this.nt=new Map,this.st=Wo(),this.it=ca(),this.rt=new $o(Ri)}ot(e){for(const t of e.$)e.O&&e.O.isFoundDocument()?this.ct(t,e.O):this.at(t,e.key,e.O);for(const t of e.removedTargetIds)this.at(t,e.key,e.O)}ut(e){this.forEachTarget(e,(t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:yi()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach(((e,n)=>{this.lt(n)&&t(n)}))}dt(e){const t=e.targetId,n=e.M.count,r=this.wt(t);if(r){const e=r.target;if(Is(e))if(0===n){const n=new ns(e.path);this.at(t,n,ws.newNoDocument(n,Mi.min()))}else wi(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Is(i.target)){const t=new ns(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.at(r,t,ws.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}}));let n=Qo();this.it.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new ta(e,t,this.rt,this.st,n);return this.st=Wo(),this.it=ca(),this.rt=new $o(Ri),r}ct(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}at(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new oa,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new $o(Ri),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||fi("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new oa),this.et.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function ca(){return new Bo(ns.comparator)}function la(){return new Bo(ns.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua={asc:"ASCENDING",desc:"DESCENDING"},ha={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class da{constructor(e,t){this.databaseId=e,this.C=t}}function fa(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pa(e,t){return e.C?t.toBase64():t.toUint8Array()}function ma(e,t){return fa(e,t.toTimestamp())}function ga(e){return wi(!!e),Mi.fromTimestamp(function(e){const t=Ki(e);return new Pi(t.seconds,t.nanos)}(e))}function ya(e,t){return function(e){return new ji(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function wa(e){const t=ji.fromString(e);return wi(Ba(t)),t}function va(e,t){return ya(e.databaseId,t.path)}function ba(e,t){const n=wa(t);if(n.get(1)!==e.databaseId.projectId)throw new Ei(bi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ei(bi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ns(ka(n))}function Ea(e,t){return ya(e.databaseId,t)}function Ta(e){const t=wa(e);return 4===t.length?ji.emptyPath():ka(t)}function Ia(e){return new ji(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ka(e){return wi(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Sa(e,t,n){return{name:va(e,t),fields:n.value.mapValue.fields}}function _a(e,t){let n;if(t instanceof Ao)n={update:Sa(e,t.key,t.value)};else if(t instanceof Ro)n={delete:va(e,t.key)};else if(t instanceof No)n={update:Sa(e,t.key,t.data),updateMask:Fa(t.fieldMask)};else{if(!(t instanceof Lo))return yi();n={verify:va(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof lo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof uo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof mo)return{fieldPath:t.field.canonicalString(),increment:n.N};throw yi()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ma(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:yi()}(e,t.precondition)),n}function Ca(e,t){return{documents:[Ea(e,t.path)]}}function Aa(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ea(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ea(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(fs(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NAN"}};if(ds(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(fs(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NOT_NAN"}};if(ds(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pa(e.field),op:La(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Pa(e.field),direction:Ra(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||Zi(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Da(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Da(t.endAt)),n}function Na(e){let t=Ta(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){wi(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Oa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Ps(Ma(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Zi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=xa(n.startAt));let l=null;return n.endAt&&(l=xa(n.endAt)),Bs(t,i,o,s,a,"F",c,l)}function Oa(e){return e?void 0!==e.unaryFilter?[Va(e)]:void 0!==e.fieldFilter?[Ua(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Oa(e))).reduce(((e,t)=>e.concat(t))):yi():[]}function Da(e){return{before:e.before,values:e.position}}function xa(e){const t=!!e.before,n=e.values||[];return new Rs(n,t)}function Ra(e){return ua[e]}function La(e){return ha[e]}function Pa(e){return{fieldPath:e.canonicalString()}}function Ma(e){return $i.fromServerFormat(e.fieldPath)}function Ua(e){return ks.create(Ma(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return yi()}}(e.fieldFilter.op),e.fieldFilter.value)}function Va(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ma(e.unaryFilter.field);return ks.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ma(e.unaryFilter.field);return ks.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ma(e.unaryFilter.field);return ks.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ma(e.unaryFilter.field);return ks.create(i,"!=",{nullValue:"NULL_VALUE"});default:return yi()}}function Fa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ba(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=$a(t)),t=qa(e.get(n),t);return $a(t)}function qa(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function $a(e){return e+""}class Ha{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Ha.store="owner",Ha.key="owner";class za{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}za.store="mutationQueues",za.keyPath="userId";class Wa{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Wa.store="mutations",Wa.keyPath="batchId",Wa.userMutationsIndex="userMutationsIndex",Wa.userMutationsKeyPath=["userId","batchId"];class Ka{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,ja(t)]}static key(e,t,n){return[e,ja(t),n]}}Ka.store="documentMutations",Ka.PLACEHOLDER=new Ka;class Ga{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Ga.store="remoteDocuments",Ga.readTimeIndex="readTimeIndex",Ga.readTimeIndexPath="readTime",Ga.collectionReadTimeIndex="collectionReadTimeIndex",Ga.collectionReadTimeIndexPath=["parentPath","readTime"];class Xa{constructor(e){this.byteSize=e}}Xa.store="remoteDocumentGlobal",Xa.key="remoteDocumentGlobalKey";class Ya{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Ya.store="targets",Ya.keyPath="targetId",Ya.queryTargetsIndexName="queryTargetsIndex",Ya.queryTargetsKeyPath=["canonicalId","targetId"];class Ja{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}Ja.store="targetDocuments",Ja.keyPath=["targetId","path"],Ja.documentTargetsIndex="documentTargetsIndex",Ja.documentTargetsKeyPath=["path","targetId"];class Qa{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Qa.key="targetGlobalKey",Qa.store="targetGlobal";class Za{constructor(e,t){this.collectionId=e,this.parent=t}}Za.store="collectionParents",Za.keyPath=["collectionId","parent"];class ec{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}ec.store="clientMetadata",ec.keyPath="clientId";class tc{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}tc.store="bundles",tc.keyPath="bundleId";class nc{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}nc.store="namedQueries",nc.keyPath="name";za.store,Wa.store,Ka.store,Ga.store,Ya.store,Ha.store,Qa.store,Ja.store,ec.store,Xa.store,Za.store,tc.store,nc.store;const rc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ic{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&yi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new sc(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof sc?t:sc.resolve(t)}catch(e){return sc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):sc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):sc.reject(t)}static resolve(e){return new sc(((t,n)=>{t(e)}))}static reject(e){return new sc(((t,n)=>{n(e)}))}static waitFor(e){return new sc(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=sc.resolve(!1);for(const n of e)t=t.next((e=>e?sc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ac{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Io(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&ko(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&ko(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Mi.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Qo())}isEqual(e){return this.batchId===e.batchId&&Li(this.mutations,e.mutations,((e,t)=>_o(e,t)))&&Li(this.baseMutations,e.baseMutations,((e,t)=>_o(e,t)))}}class cc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){wi(e.mutations.length===n.length);let r=Yo();const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new cc(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t,n,r,i=Mi.min(),s=Mi.min(),o=zi.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new lc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new lc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new lc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.Gt=e}}function hc(e){const t=Na({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Xs(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(){this.zt=new fc}addToCollectionParentIndex(e,t){return this.zt.add(t),sc.resolve()}getCollectionParents(e,t){return sc.resolve(this.zt.getEntries(t))}}class fc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $o(ji.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $o(ji.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new pc(e,pc.DEFAULT_COLLECTION_PERCENTILE,pc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pc.DEFAULT_COLLECTION_PERCENTILE=10,pc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pc.DEFAULT=new pc(41943040,pc.DEFAULT_COLLECTION_PERCENTILE,pc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pc.DISABLED=new pc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mc{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new mc(0)}static re(){return new mc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gc(e){if(e.code!==bi.FAILED_PRECONDITION||e.message!==rc)throw e;fi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){Vi(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Fi(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.changes=new yc((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Mi.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:ws.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?sc.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.bn(e,t,n)))}bn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Pn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Pn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ns.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):Ws(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new ns(t)).next((e=>{let t=Go();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=Go();return this.Jt.getCollectionParents(e,r).next((s=>sc.forEach(s,(s=>{const o=function(e,t){return new Fs(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=ws.newInvalidDocument(n),r=r.insert(n,i)),ko(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Zs(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=Qo();for(const e of t)for(const t of e.mutations)t instanceof No&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=Qo(),r=Qo();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new bc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{On(e){this.Mn=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(Mi.min())?this.Fn(e,t):this.Mn.vn(e,r).next((i=>{const s=this.Ln(t,i);return(qs(t)||$s(t))&&this.Bn(t.limitType,s,r,n)?this.Fn(e,t):(di()<=C.DEBUG&&fi("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Qs(t)),this.Mn.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new $o(eo(e));return t.forEach(((t,r)=>{Zs(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return di()<=C.DEBUG&&fi("QueryEngine","Using full collection scan to execute query:",Qs(t)),this.Mn.getDocumentsMatchingQuery(e,t,Mi.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new Bo(Ri),this.Kn=new yc((e=>Es(e)),Ts),this.jn=Mi.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new vc(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}function Ic(e,t,n,r){return new Tc(e,t,n,r)}async function kc(e,t){const n=vi(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new vc(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=Qo();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function Sc(e){const t=vi(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}function _c(e,t,n,r,i){let s=Qo();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=Wo();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Mi.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):fi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function Cc(e,t){const n=vi(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}function Ac(e,t){const n=vi(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.He.getTargetData(e,t).next((i=>i?(r=i,sc.resolve(r)):n.He.allocateTargetId(e).next((i=>(r=new lc(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e}))}async function Nc(e,t,n){const r=vi(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!oc(e))throw e;fi("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Oc(e,t,n){const r=vi(e);let i=Mi.min(),s=Qo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=vi(e),i=r.Kn.get(n);return void 0!==i?sc.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,Gs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:Mi.min(),n?s:Qo()))).next((e=>({documents:e,zn:s})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return sc.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:ga(n.createTime)}),sc.resolve()}getNamedQuery(e,t){return sc.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:hc(e.bundledQuery),readTime:ga(e.readTime)}}(t)),sc.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.ts=new $o(Rc.es),this.ns=new $o(Rc.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new Rc(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new Rc(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new ns(new ji([])),n=new Rc(t,e),r=new Rc(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new ns(new ji([])),n=new Rc(t,e),r=new Rc(t,e+1);let i=Qo();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Rc(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Rc{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return ns.comparator(e.key,t.key)||Ri(e.fs,t.fs)}static ss(e,t){return Ri(e.fs,t.fs)||ns.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new $o(Rc.es)}checkEmpty(e){return sc.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new ac(i,t,n,r);this.An.push(s);for(const t of r)this.ws=this.ws.add(new Rc(t.key,i)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return sc.resolve(s)}lookupMutationBatch(e,t){return sc.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return sc.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return sc.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return sc.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Rc(t,0),r=new Rc(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),sc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $o(Ri);return t.forEach((e=>{const t=new Rc(e,0),r=new Rc(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),sc.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ns.isDocumentKey(i)||(i=i.child(""));const s=new Rc(new ns(i),0);let o=new $o(Ri);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),sc.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){wi(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return sc.forEach(t.mutations,(r=>{const i=new Rc(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new Rc(t,0),r=this.ws.firstAfterOrEqual(n);return sc.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,sc.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Bo(ns.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return sc.resolve(n?n.document.mutableCopy():ws.newInvalidDocument(t))}getEntries(e,t){let n=Wo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ws.newInvalidDocument(e))})),sc.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Wo();const i=new ns(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Zs(t,i)&&(r=r.insert(i.key,i.mutableCopy()))}return sc.resolve(r)}Es(e,t){return sc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Mc(this)}getSize(e){return sc.resolve(this.size)}}class Mc extends wc{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),sc.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.persistence=e,this.Is=new yc((e=>Es(e)),Ts),this.lastRemoteSnapshotVersion=Mi.min(),this.highestTargetId=0,this.As=0,this.Rs=new xc,this.targetCount=0,this.bs=mc.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),sc.resolve()}getLastRemoteSnapshotVersion(e){return sc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return sc.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),sc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),sc.resolve()}ae(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new mc(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,sc.resolve()}updateTargetData(e,t){return this.ae(t),sc.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,sc.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),sc.waitFor(i).next((()=>r))}getTargetCount(e){return sc.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return sc.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),sc.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),sc.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),sc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return sc.resolve(n)}containsKey(e,t){return sc.resolve(this.Rs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.Ps={},this.Be=new Oi(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Uc(this),this.Jt=new dc,this.Je=function(e,t){return new Pc(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new uc(t),this.Ye=new Dc(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.Ps[e.toKey()];return t||(t=new Lc(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){fi("MemoryPersistence","Starting transaction:",e);const r=new Fc(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return sc.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Fc extends ic{constructor(e){super(),this.currentSequenceNumber=e}}class Bc{constructor(e){this.persistence=e,this.Cs=new xc,this.Ns=null}static ks(e){return new Bc(e)}get xs(){if(this.Ns)return this.Ns;throw yi()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),sc.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),sc.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),sc.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return sc.forEach(this.xs,(n=>{const r=ns.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return sc.or([()=>sc.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.activeTargetIds=ea()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qc{constructor(){this.pi=new jc,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new jc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){fi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){fi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);fi("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(fi("RestConnection","Received: ",e),e)),(t=>{throw mi("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ui,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=zc[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new ai;o.listenOnce(ni.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ti.NO_ERROR:const t=o.getResponseJson();fi("Connection","XHR received:",JSON.stringify(t)),i(t);break;case ti.TIMEOUT:fi("Connection",'RPC "'+e+'" timed out'),s(new Ei(bi.DEADLINE_EXCEEDED,"Request time out"));break;case ti.HTTP_ERROR:const n=o.getStatus();if(fi("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(bi).indexOf(t)>=0?t:bi.UNKNOWN}(e.status);s(new Ei(t,e.message))}else s(new Ei(bi.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Ei(bi.UNAVAILABLE,"Connection failed."));break;default:yi()}}finally{fi("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Zr(),s=ei(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(h.xmlHttpFactory=new si({})),this.qi(h.initMessageHeaders,t,n),a()||l()||o().indexOf("Electron/")>=0||u()||o().indexOf("MSAppHost/")>=0||c()||(h.httpHeadersOverwriteParam="$httpHeaders");const d=r.join("");fi("Connection","Creating WebChannel: "+d,h);const f=i.createWebChannel(d,h);let p=!1,m=!1;const g=new Wc({Vi:e=>{m?fi("Connection","Not sending because WebChannel is closed:",e):(p||(fi("Connection","Opening WebChannel transport."),f.open(),p=!0),fi("Connection","WebChannel sending:",e),f.send(e))},Si:()=>f.close()}),y=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return y(f,oi.EventType.OPEN,(()=>{m||fi("Connection","WebChannel transport opened.")})),y(f,oi.EventType.CLOSE,(()=>{m||(m=!0,fi("Connection","WebChannel transport closed"),g.Oi())})),y(f,oi.EventType.ERROR,(e=>{m||(m=!0,mi("Connection","WebChannel transport errored:",e),g.Oi(new Ei(bi.UNAVAILABLE,"The operation could not be completed")))})),y(f,oi.EventType.MESSAGE,(e=>{var t;if(!m){const n=e.data[0];wi(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){fi("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Mo[e];if(void 0!==t)return Fo(t)}(e),n=i.message;void 0===t&&(t=bi.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),m=!0,g.Oi(new Ei(t,n)),f.close()}else fi("Connection","WebChannel received:",n),g.Mi(n)}})),y(s,ri.STAT_EVENT,(e=>{e.stat===ii.PROXY?fi("Connection","Detected buffering proxy"):e.stat===ii.NOPROXY&&fi("Connection","Detected no buffering proxy")})),setTimeout((()=>{g.$i()}),0),g}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e){return new da(e,!0)}class Yc{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Me=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&fi("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,n,r,i,s,o,a){this.Me=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Yc(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===bi.RESOURCE_EXHAUSTED?(pi(t.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===bi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new Ei(bi.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return fi("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Me.enqueueAndForget((()=>this.rr===e?t():(fi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Qc extends Jc{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:yi()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(wi(void 0===t||"string"==typeof t),zi.fromBase64String(t||"")):(wi(void 0===t||t instanceof Uint8Array),zi.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?bi.UNKNOWN:Fo(e.code);return new Ei(t,e.message||"")}(o);n=new sa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ba(e,r.document.name),s=ga(r.document.updateTime),o=new gs({mapValue:{fields:r.document.fields}}),a=ws.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new ra(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ba(e,r.document),s=r.readTime?ga(r.readTime):Mi.min(),o=ws.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ba(e,r.document),s=r.removedTargetIds||[];n=new ra([],s,i,null)}else{if(!("filter"in t))return yi();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Po(r),s=e.targetId;n=new ia(s,i)}}return n}(this.k,e),n=function(e){if(!("targetChange"in e))return Mi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Mi.min():t.readTime?ga(t.readTime):Mi.min()}(e);return this.listener.br(t,n)}Pr(e){const t={};t.database=Ia(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=Is(r)?{documents:Ca(e,r)}:{query:Aa(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=pa(e,t.resumeToken):t.snapshotVersion.compareTo(Mi.min())>0&&(n.readTime=fa(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return yi()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=Ia(this.k),t.removeTarget=e,this.gr(t)}}class Zc extends Jc{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(wi(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(wi(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ga(e.updateTime):ga(t);return n.isEqual(Mi.min())&&(n=ga(t)),new vo(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=ga(e.commitTime);return this.listener.Cr(n,t)}return wi(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Ia(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>_a(this.k,e)))};this.gr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Or(){if(this.$r)throw new Ei(bi.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===bi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ei(bi.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===bi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ei(bi.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class tl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(pi(t),this.Lr=!1):fi("OnlineStateTracker",t)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{hl(this)&&(fi("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=vi(e);t.Gr.add(4),await il(t),t.Jr.set("Unknown"),t.Gr.delete(4),await rl(t)}(this))}))})),this.Jr=new tl(n,r)}}async function rl(e){if(hl(e))for(const t of e.zr)await t(!0)}async function il(e){for(const t of e.zr)await t(!1)}function sl(e,t){const n=vi(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),ul(n)?ll(n):Nl(n).lr()&&al(n,t))}function ol(e,t){const n=vi(e),r=Nl(n);n.Wr.delete(t),r.lr()&&cl(n,t),0===n.Wr.size&&(r.lr()?r._r():hl(n)&&n.Jr.set("Unknown"))}function al(e,t){e.Yr.X(t.targetId),Nl(e).Pr(t)}function cl(e,t){e.Yr.X(t),Nl(e).vr(t)}function ll(e){e.Yr=new aa({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),Nl(e).start(),e.Jr.Br()}function ul(e){return hl(e)&&!Nl(e).hr()&&e.Wr.size>0}function hl(e){return 0===vi(e).Gr.size}function dl(e){e.Yr=void 0}async function fl(e){e.Wr.forEach(((t,n)=>{al(e,t)}))}async function pl(e,t){dl(e),ul(e)?(e.Jr.Kr(t),ll(e)):e.Jr.set("Unknown")}async function ml(e,t,n){if(e.Jr.set("Online"),t instanceof sa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){fi("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await gl(e,n)}else if(t instanceof ra?e.Yr.ot(t):t instanceof ia?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(Mi.min()))try{const t=await Sc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(zi.EMPTY_BYTE_STRING,n.snapshotVersion)),cl(e,t);const r=new lc(n.target,t,1,n.sequenceNumber);al(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){fi("RemoteStore","Failed to raise snapshot:",t),await gl(e,t)}}async function gl(e,t,n){if(!oc(t))throw t;e.Gr.add(1),await il(e),e.Jr.set("Offline"),n||(n=()=>Sc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{fi("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await rl(e)}))}function yl(e,t){return t().catch((n=>gl(e,n,t)))}async function wl(e){const t=vi(e),n=Ol(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;vl(t);)try{const e=await Cc(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,bl(t,e)}catch(e){await gl(t,e)}El(t)&&Tl(t)}function vl(e){return hl(e)&&e.Qr.length<10}function bl(e,t){e.Qr.push(t);const n=Ol(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function El(e){return hl(e)&&!Ol(e).hr()&&e.Qr.length>0}function Tl(e){Ol(e).start()}async function Il(e){Ol(e).kr()}async function kl(e){const t=Ol(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Sl(e,t,n){const r=e.Qr.shift(),i=cc.from(r,t,n);await yl(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await wl(e)}async function _l(e,t){t&&Ol(e).Sr&&await async function(e,t){if(Vo(n=t.code)&&n!==bi.ABORTED){const n=e.Qr.shift();Ol(e).wr(),await yl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await wl(e)}var n}(e,t),El(e)&&Tl(e)}async function Cl(e,t){const n=vi(e);n.asyncQueue.verifyOperationInProgress(),fi("RemoteStore","RemoteStore received new credentials");const r=hl(n);n.Gr.add(3),await il(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await rl(n)}async function Al(e,t){const n=vi(e);t?(n.Gr.delete(2),await rl(n)):t||(n.Gr.add(2),await il(n),n.Jr.set("Unknown"))}function Nl(e){return e.Xr||(e.Xr=function(e,t,n){const r=vi(e);return r.Or(),new Qc(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Di:fl.bind(null,e),Ni:pl.bind(null,e),br:ml.bind(null,e)}),e.zr.push((async t=>{t?(e.Xr.wr(),ul(e)?ll(e):e.Jr.set("Unknown")):(await e.Xr.stop(),dl(e))}))),e.Xr}function Ol(e){return e.Zr||(e.Zr=function(e,t,n){const r=vi(e);return r.Or(),new Zc(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:Il.bind(null,e),Ni:_l.bind(null,e),Nr:kl.bind(null,e),Cr:Sl.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await wl(e)):(await e.Zr.stop(),e.Qr.length>0&&(fi("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Dl{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Dl(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ei(bi.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xl(e,t){if(pi("AsyncQueue",`${t}: ${e}`),oc(e))return new Ei(bi.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ns.comparator(t.key,n.key):(e,t)=>ns.comparator(e.key,t.key),this.keyedMap=Go(),this.sortedSet=new Bo(this.comparator)}static emptySet(e){return new Rl(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Rl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.eo=new Bo(ns.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):yi():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Pl{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Pl(e,t,Rl.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.so=void 0,this.listeners=[]}}class Ul{constructor(){this.queries=new yc((e=>Js(e)),Ys),this.onlineState="Unknown",this.io=new Set}}async function Vl(e,t){const n=vi(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ml),i)try{s.so=await n.onListen(r)}catch(e){const n=xl(e,`Initialization of query '${Qs(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&ql(n)}async function Fl(e,t){const n=vi(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Bl(e,t){const n=vi(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.oo(e)&&(r=!0);i.so=e}}r&&ql(n)}function jl(e,t,n){const r=vi(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function ql(e){e.io.forEach((e=>{e.next()}))}class $l{constructor(e,t,n){this.query=e,this.co=t,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Pl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.ao?this.ho(e)&&(this.co.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.wo&&n||e.docs.isEmpty()&&"Offline"!==t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=Pl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hl{constructor(e){this.key=e}}class zl{constructor(e){this.key=e}}class Wl{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=Qo(),this.mutatedKeys=Qo(),this.Ao=eo(e),this.Ro=new Rl(this.Ao)}get bo(){return this.To}Po(e,t){const n=t?t.vo:new Ll,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=qs(this.query)&&r.size===this.query.limit?r.last():null,c=$s(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Zs(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),qs(this.query)||$s(this.query))for(;s.size>this.query.limit;){const e=qs(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yi()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ao(e.doc,t.doc))),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new Pl(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Ll,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach((e=>this.To=this.To.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.To=this.To.delete(e))),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Qo(),this.Ro.forEach((e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))}));const t=[];return e.forEach((e=>{this.Io.has(e)||t.push(new zl(e))})),this.Io.forEach((n=>{e.has(n)||t.push(new Hl(n))})),t}ko(e){this.To=e.zn,this.Io=Qo();const t=this.Po(e.documents);return this.applyChanges(t,!0)}xo(){return Pl.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Kl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Gl{constructor(e){this.key=e,this.$o=!1}}class Xl{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Oo={},this.Mo=new yc((e=>Js(e)),Ys),this.Fo=new Map,this.Lo=new Set,this.Bo=new Bo(ns.comparator),this.Uo=new Map,this.qo=new xc,this.Ko={},this.jo=new Map,this.Qo=mc.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Yl(e,t){const n=pu(e);let r,i;const s=n.Mo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await Ac(n.localStore,Gs(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Jl(n,t,r,"current"===s),n.isPrimaryClient&&sl(n.remoteStore,e)}return i}async function Jl(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.Po(n);i.Bn&&(i=await Oc(e.localStore,t.query,!1).then((({documents:e})=>t.view.Po(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return cu(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await Oc(e.localStore,t,!0),s=new Wl(t,i.zn),o=s.Po(i.documents),a=na.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);cu(e,n,c.Co);const l=new Kl(t,n,s);return e.Mo.set(t,l),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function Ql(e,t){const n=vi(e),r=n.Mo.get(t),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter((e=>!Ys(e,t)))),void n.Mo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Nc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ol(n.remoteStore,r.targetId),ou(n,r.targetId)})).catch(gc)):(ou(n,r.targetId),await Nc(n.localStore,r.targetId,!0))}async function Zl(e,t){const n=vi(e);try{const e=await function(e,t){const n=vi(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.He.addMatchingKeys(e,s.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?l=l.withResumeToken(zi.EMPTY_BYTE_STRING,Mi.min()).withLastLimboFreeSnapshotVersion(Mi.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,s)&&o.push(n.He.updateTargetData(e,l))}));let a=Wo();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(_c(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(Mi.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next((t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return sc.waitFor(o).next((()=>s.apply(e))).next((()=>n.Wn.Vn(e,a))).next((()=>a))})).then((e=>(n.qn=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Uo.get(t);r&&(wi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?wi(r.$o):e.removedDocuments.size>0&&(wi(r.$o),r.$o=!1))})),await hu(n,e,t)}catch(e){await gc(e)}}function eu(e,t,n){const r=vi(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Mo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=vi(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(r=!0)})),r&&ql(n)}(r.eventManager,t),e.length&&r.Oo.br(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function tu(e,t,n){const r=vi(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new Bo(ns.comparator);e=e.insert(s,ws.newNoDocument(s,Mi.min()));const n=Qo().add(s),i=new ta(Mi.min(),new Map,new $o(Ri),e,n);await Zl(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),uu(r)}else await Nc(r.localStore,t,!1).then((()=>ou(r,t,n))).catch(gc)}async function nu(e,t){const n=vi(e),r=t.batch.batchId;try{const e=await function(e,t){const n=vi(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=sc.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);wi(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(n.localStore,t);su(n,r,null),iu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hu(n,e)}catch(e){await gc(e)}}async function ru(e,t,n){const r=vi(e);try{const e=await function(e,t){const n=vi(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(wi(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);su(r,t,n),iu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await hu(r,e)}catch(n){await gc(n)}}function iu(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function su(e,t,n){const r=vi(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function ou(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Fo.get(t))e.Mo.delete(r),n&&e.Oo.zo(r,n);e.Fo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach((t=>{e.qo.containsKey(t)||au(e,t)}))}function au(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(ol(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),uu(e))}function cu(e,t,n){for(const r of n)r instanceof Hl?(e.qo.addReference(r.key,t),lu(e,r)):r instanceof zl?(fi("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||au(e,r.key)):yi()}function lu(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(fi("SyncEngine","New document in limbo: "+n),e.Lo.add(r),uu(e))}function uu(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new ns(ji.fromString(t)),r=e.Qo.next();e.Uo.set(r,new Gl(n)),e.Bo=e.Bo.insert(n,r),sl(e.remoteStore,new lc(Gs(js(n.path)),r,2,Oi.I))}}async function hu(e,t,n){const r=vi(e),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=bc.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Oo.br(i),await async function(e,t){const n=vi(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>sc.forEach(t,(t=>sc.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>sc.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!oc(e))throw e;fi("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function du(e,t){const n=vi(e);if(!n.currentUser.isEqual(t)){fi("SyncEngine","User change. New user:",t.toKey());const e=await kc(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new Ei(bi.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await hu(n,e.Gn)}}function fu(e,t){const n=vi(e),r=n.Uo.get(t);if(r&&r.$o)return Qo().add(r.key);{let e=Qo();const r=n.Fo.get(t);if(!r)return e;for(const t of r){const r=n.Mo.get(t);e=e.unionWith(r.view.bo)}return e}}function pu(e){const t=vi(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tu.bind(null,t),t.Oo.br=Bl.bind(null,t.eventManager),t.Oo.zo=jl.bind(null,t.eventManager),t}function mu(e){const t=vi(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ru.bind(null,t),t}class gu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Xc(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return Ic(this.persistence,new Ec,e.initialUser,this.k)}Yo(e){return new Vc(Bc.ks,this.k)}Jo(e){return new qc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>eu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=du.bind(null,this.syncEngine),await Al(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ul}createDatastore(e){const t=Xc(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Kc(r));var r;return function(e,t,n,r){return new el(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>eu(this.syncEngine,e,0),s=Hc.Pt()?new Hc:new $c,new nl(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Xl(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=vi(e);fi("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await il(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error&&this.ec(this.observer.error,e)}nc(){this.muted=!0}ec(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=li.UNAUTHENTICATED,this.clientId=xi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{fi("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(fi("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ei(bi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=xl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function bu(e,t){e.asyncQueue.verifyOperationInProgress(),fi("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await kc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Eu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Tu(e);fi("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Cl(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Cl(t.remoteStore,n))),e.onlineComponents=t}async function Tu(e){return e.offlineComponents||(fi("FirestoreClient","Using default OfflineComponentProvider"),await bu(e,new gu)),e.offlineComponents}async function Iu(e){return e.onlineComponents||(fi("FirestoreClient","Using default OnlineComponentProvider"),await Eu(e,new yu)),e.onlineComponents}function ku(e){return Iu(e).then((e=>e.syncEngine))}async function Su(e){const t=await Iu(e),n=t.eventManager;return n.onListen=Yl.bind(null,t.syncEngine),n.onUnlisten=Ql.bind(null,t.syncEngine),n}class _u{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Cu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Cu&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e,t,n){if(!n)throw new Ei(bi.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ou(e){if(!ns.isDocumentKey(e))throw new Ei(bi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Du(e){if(ns.isDocumentKey(e))throw new Ei(bi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function xu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":yi()}function Ru(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ei(bi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(e);throw new Ei(bi.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ei(bi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ei(bi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Ei(bi.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lu({}),this._settingsFrozen=!1,e instanceof Cu?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ei(bi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cu(e.options.projectId)}(e))}get app(){if(!this._app)throw new Ei(bi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ei(bi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ki;switch(e.type){case"gapi":const t=e.client;return wi(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Ci(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Ei(bi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Au.get(e);t&&(fi("ComponentProvider","Removing Datastore"),Au.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mu(this.firestore,e,this._key)}}class Uu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Uu(this.firestore,e,this._query)}}class Vu extends Uu{constructor(e,t,n){super(e,t,js(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mu(this.firestore,null,new ns(e))}withConverter(e){return new Vu(this.firestore,e,this._path)}}function Fu(e,t,...n){if(e=E(e),Nu("collection","path",t),e instanceof Pu){const r=ji.fromString(t,...n);return Du(r),new Vu(e,null,r)}{if(!(e instanceof Mu||e instanceof Vu))throw new Ei(bi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ji.fromString(t,...n));return Du(r),new Vu(e.firestore,null,r)}}function Bu(e,t,...n){if(e=E(e),1===arguments.length&&(t=xi.A()),Nu("doc","path",t),e instanceof Pu){const r=ji.fromString(t,...n);return Ou(r),new Mu(e,null,new ns(r))}{if(!(e instanceof Mu||e instanceof Vu))throw new Ei(bi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ji.fromString(t,...n));return Ou(r),new Mu(e.firestore,e instanceof Vu?e.converter:null,new ns(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ju{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Yc(this,"async_queue_retry"),this.bc=()=>{const e=Gc();e&&fi("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Gc();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const t=Gc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise((()=>{}));const t=new Ti;return this.vc((()=>this.yc&&this.Ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.gc.push(e),this.Vc())))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!oc(e))throw e;fi("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi((()=>this.Vc()))}}vc(e){const t=this.mc.then((()=>(this.Ic=!0,e().catch((e=>{this.Ec=e,this.Ic=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw pi("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ic=!1,e))))));return this.mc=t,t}enqueueAfterDelay(e,t,n){this.Pc(),this.Rc.indexOf(e)>-1&&(t=0);const r=Dl.createAndSchedule(this,e,t,n,(e=>this.Sc(e)));return this.Tc.push(r),r}Pc(){this.Ec&&yi()}verifyOperationInProgress(){}async Dc(){let e;do{e=this.mc,await e}while(e!==this.mc)}Cc(e){for(const t of this.Tc)if(t.timerId===e)return!0;return!1}Nc(e){return this.Dc().then((()=>{this.Tc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Dc()}))}kc(e){this.Rc.push(e)}Sc(e){const t=this.Tc.indexOf(e);this.Tc.splice(t,1)}}function qu(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}class $u extends Pu{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new ju,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||zu(this),this._firestoreClient.terminate()}}function Hu(e){return e._firestoreClient||zu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function zu(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new _u(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new vu(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ei(bi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $i(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ku{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ku(zi.fromBase64String(e))}catch(e){throw new Ei(bi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ku(zi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ei(bi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ei(bi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ri(this._lat,e._lat)||Ri(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=/^__.*__$/;class Ju{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new No(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ao(e,this.data,t,this.fieldTransforms)}}class Qu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new No(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yi()}}class eh{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new eh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Oc({path:n,Fc:!1});return r.Lc(e),r}Bc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Oc({path:n,Fc:!1});return r.xc(),r}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return mh(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(0===e.length)throw this.qc("Document fields must not be empty");if(Zu(this.$c)&&Yu.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class th{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Xc(e)}Qc(e,t,n,r=!1){return new eh({$c:e,methodName:t,jc:n,path:$i.emptyPath(),Fc:!1,Kc:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function nh(e){const t=e._freezeSettings(),n=Xc(e._databaseId);return new th(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rh(e,t,n,r,i,s={}){const o=e.Qc(s.merge||s.mergeFields?2:0,t,n,i);hh("Data must be an object, but it was:",o,r);const a=lh(r,o);let c,l;if(s.merge)c=new Hi(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=dh(t,r,n);if(!o.contains(i))throw new Ei(bi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);gh(e,i)||e.push(i)}c=new Hi(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Ju(new gs(a),c,l)}class ih extends Gu{_toFieldTransform(e){if(2!==e.$c)throw 1===e.$c?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ih}}class sh extends Gu{_toFieldTransform(e){return new wo(e.path,new lo)}isEqual(e){return e instanceof sh}}function oh(e,t,n,r){const i=e.Qc(1,t,n);hh("Data must be an object, but it was:",i,r);const s=[],o=gs.empty();Vi(r,((e,r)=>{const a=ph(t,e,n);r=E(r);const c=i.Bc(a);if(r instanceof ih)s.push(a);else{const e=ch(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Hi(s);return new Qu(o,a,i.fieldTransforms)}function ah(e,t,n,r,i,s){const o=e.Qc(1,t,n),a=[dh(t,r,n)],c=[i];if(s.length%2!=0)throw new Ei(bi.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(dh(t,s[e])),c.push(s[e+1]);const l=[],u=gs.empty();for(let e=a.length-1;e>=0;--e)if(!gh(l,a[e])){const t=a[e];let n=c[e];n=E(n);const r=o.Bc(t);if(n instanceof ih)l.push(t);else{const e=ch(n,r);null!=e&&(l.push(t),u.set(t,e))}}const h=new Hi(l);return new Qu(u,h,o.fieldTransforms)}function ch(e,t){if(uh(e=E(e)))return hh("Unsupported field value:",t,e),lh(e,t);if(e instanceof Gu)return function(e,t){if(!Zu(t.$c))throw t.qc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&4!==t.$c)throw t.qc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ch(i,t.Uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=E(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return io(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Pi.fromDate(e);return{timestampValue:fa(t.k,n)}}if(e instanceof Pi){const n=new Pi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:fa(t.k,n)}}if(e instanceof Xu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ku)return{bytesValue:pa(t.k,e._byteString)};if(e instanceof Mu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.qc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ya(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.qc(`Unsupported field value: ${xu(e)}`)}(e,t)}function lh(e,t){const n={};return Fi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Vi(e,((e,r)=>{const i=ch(r,t.Mc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function uh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Pi||e instanceof Xu||e instanceof Ku||e instanceof Mu||e instanceof Gu)}function hh(e,t,n){if(!uh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=xu(n);throw"an object"===r?t.qc(e+" a custom object"):t.qc(e+" "+r)}}function dh(e,t,n){if((t=E(t))instanceof Wu)return t._internalPath;if("string"==typeof t)return ph(e,t);throw mh("Field path arguments must be of type string or ",e,!1,void 0,n)}const fh=new RegExp("[~\\*/\\[\\]]");function ph(e,t,n){if(t.search(fh)>=0)throw mh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Wu(...t.split("."))._internalPath}catch(r){throw mh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function mh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ei(bi.INVALID_ARGUMENT,a+e+c)}function gh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new wh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class wh extends yh{data(){return super.data()}}function vh(e,t){return"string"==typeof t?ph(e,t):t instanceof Wu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Eh extends yh{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Th(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(vh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Th extends Eh{data(e={}){return super.data(e)}}class Ih{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new bh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Th(this._firestore,this._userDataWriter,n.key,n,new bh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ei(bi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Th(e._firestore,e._userDataWriter,n.doc.key,n.doc,new bh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Th(e._firestore,e._userDataWriter,t.doc.key,t.doc,new bh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:kh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function kh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sh(e){if($s(e)&&0===e.explicitOrderBy.length)throw new Ei(bi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _h{}function Ch(e,...t){for(const n of t)e=n._apply(e);return e}class Ah extends _h{constructor(e,t){super(),this.zc=e,this.Yc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Ei(bi.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Ei(bi.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ps(t,n);return function(e,t){if(null===Hs(e)){const n=zs(e);null!==n&&Oh(e,n,t.field)}}(e,r),r}(e._query,this.zc,this.Yc);return new Uu(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Fs(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Nh(e,t="asc"){const n=t,r=vh("orderBy",e);return new Ah(r,n)}function Oh(e,t,n){if(!n.isEqual(t))throw new Ei(bi.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{convertValue(e,t="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Gi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw yi()}}convertObject(e,t){const n={};return Vi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Xu(Gi(e.latitude),Gi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ji(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const t=Ki(e);return new Pi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ji.fromString(e);wi(Ba(n));const r=new Cu(n.get(1),n.get(3)),i=new ns(n.popFirst(5));return r.isEqual(t)||pi(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Rh extends Dh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ku(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Mu(this.firestore,null,t)}}function Lh(e,t,n,...r){e=Ru(e,Mu);const i=Ru(e.firestore,$u),s=nh(i);let o;return o="string"==typeof(t=E(t))||t instanceof Wu?ah(s,"updateDoc",e._key,t,n,r):oh(s,"updateDoc",e._key,t),Uh(i,[o.toMutation(e._key,bo.exists(!0))])}function Ph(e,t){const n=Ru(e.firestore,$u),r=Bu(e),i=xh(e.converter,t);return Uh(n,[rh(nh(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,bo.exists(!1))]).then((()=>r))}function Mh(e,...t){var n,r,i;e=E(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||qu(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(qu(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,l,u;if(e instanceof Mu)l=Ru(e.firestore,$u),u=js(e._key.path),c={next:n=>{t[o]&&t[o](Vh(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Ru(e,Uu);l=Ru(n.firestore,$u),u=n._query;const r=new Rh(l);c={next:e=>{t[o]&&t[o](new Ih(l,r,n,e))},error:t[o+1],complete:t[o+2]},Sh(e._query)}return function(e,t,n,r){const i=new wu(r),s=new $l(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Vl(await Su(e),s))),()=>{i.nc(),e.asyncQueue.enqueueAndForget((async()=>Fl(await Su(e),s)))}}(Hu(l),u,a,c)}function Uh(e,t){return function(e,t){const n=new Ti;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=mu(e);try{const e=await function(e,t){const n=vi(e),r=Pi.now(),i=t.reduce(((e,t)=>e.add(t.key)),Qo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=So(e,s.get(e.key));null!=t&&o.push(new No(e.key,t,ys(t.value.mapValue),bo.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new Bo(Ri)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await hu(r,e.changes),await wl(r.remoteStore)}catch(e){const t=xl(e,"Failed to persist write");n.reject(t)}}(await ku(e),t,n))),n.promise}(Hu(e),t)}function Vh(e,t,n){const r=n.docs.get(t._key),i=new Rh(e);return new Eh(e,i,t._key,r,new bh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){return new sh("serverTimestamp")}!function(e,t=!0){!function(e){ui=e}(W),q(new T("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new $u(r,new Si(e.getProvider("auth-internal")),new Ni(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),G(ci,"3.4.4",e),G(ci,"3.4.4","esm2017")}();function Bh(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function jh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qh=jh,$h=new d("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Hh=new x("@firebase/auth");function zh(e,...t){Hh.logLevel<=C.ERROR&&Hh.error(`Auth (${W}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(e,...t){throw Yh(e,...t)}function Kh(e,...t){return Yh(e,...t)}function Gh(e,t,n){const r=Object.assign(Object.assign({},qh()),{[t]:n});return new d("auth","Firebase",r).create(t,{appName:e.name})}function Xh(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Wh(e,"argument-error"),Gh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yh(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return $h.create(e,...t)}function Jh(e,t,...n){if(!e)throw Yh(t,...n)}function Qh(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zh(t),new Error(t)}function Zh(e,t){e||Qh(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Map;function td(e){Zh(e instanceof Function,"Expected a class definition");let t=ed.get(e);return t?(Zh(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ed.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function rd(){return"http:"===id()||"https:"===id()}function id(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sd{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zh(t>e,"Short delay should be less than long delay!"),this.isMobile=a()||l()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(rd()||c()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e,t){Zh(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Qh("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Qh("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Qh("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ld=new sd(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function hd(e,t,n,r,i={}){return dd(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=g(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ad.fetch()(pd(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function dd(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},cd),t);try{const t=new md(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw gd(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw gd(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw gd(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Gh(e,a,o);Wh(e,a)}}catch(t){if(t instanceof h)throw t;Wh(e,"network-request-failed")}}async function fd(e,t,n,r,i={}){const s=await hd(e,t,n,r,i);return"mfaPendingCredential"in s&&Wh(e,"multi-factor-auth-required",{_serverResponse:s}),s}function pd(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?od(e.config,i):`${e.config.apiScheme}://${i}`}class md{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Kh(this.auth,"network-request-failed"))),ld.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function gd(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kh(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yd(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(e){return 1e3*Number(e)}function vd(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return zh("JWT malformed, contained fewer than 3 sections"),null;try{const e=i(n);return e?JSON.parse(e):(zh("Failed to decode base64 JWT payload"),null)}catch(e){return zh("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bd(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof h&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ed{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yd(this.lastLoginAt),this.creationTime=yd(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(e){var t;const n=e.auth,r=await e.getIdToken(),i=await bd(e,async function(e,t){return hd(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Jh(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Bh(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Td(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Jh(e.idToken,"internal-error"),Jh(void 0!==e.idToken,"internal-error"),Jh(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=vd(e);return Jh(t,"internal-error"),Jh(void 0!==t.exp,"internal-error"),Jh(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Jh(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await dd(e,{},(async()=>{const n=g({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=pd(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ad.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new kd;return n&&(Jh("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Jh("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Jh("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kd,this.toJSON())}_performRefresh(){return Qh("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(e,t){Jh("string"==typeof e||void 0===e,"internal-error",{appName:t})}class _d{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Bh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ed(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Td(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await bd(this,this.stsTokenManager.getToken(this.auth,e));return Jh(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=E(e),r=await n.getIdToken(t),i=vd(r);Jh(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yd(wd(i.auth_time)),issuedAtTime:yd(wd(i.iat)),expirationTime:yd(wd(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=E(e);await Id(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Jh(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _d(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Jh(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Id(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bd(this,async function(e,t){return hd(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:w,emailVerified:v,isAnonymous:b,providerData:E,stsTokenManager:T}=t;Jh(w&&T,e,"internal-error");const I=kd.fromJSON(this.name,T);Jh("string"==typeof w,e,"internal-error"),Sd(u,e.name),Sd(h,e.name),Jh("boolean"==typeof v,e,"internal-error"),Jh("boolean"==typeof b,e,"internal-error"),Sd(d,e.name),Sd(f,e.name),Sd(p,e.name),Sd(m,e.name),Sd(g,e.name),Sd(y,e.name);const k=new _d({uid:w,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(k.providerData=E.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new kd;r.updateFromServerResponse(t);const i=new _d({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Id(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cd.type="NONE";const Ad=Cd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(e,t,n){return`firebase:${e}:${t}:${n}`}class Od{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Nd(this.userKey,r.apiKey,i),this.fullPersistenceKey=Nd("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_d._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Od(td(Ad),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||td(Ad);const s=Nd(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=_d._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Od(i,e,n)):new Od(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ud(t))return"Blackberry";if(Vd(t))return"Webos";if(Rd(t))return"Safari";if((t.includes("chrome/")||Ld(t))&&!t.includes("edge/"))return"Chrome";if(Md(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function xd(e=o()){return/firefox\//i.test(e)}function Rd(e=o()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ld(e=o()){return/crios\//i.test(e)}function Pd(e=o()){return/iemobile/i.test(e)}function Md(e=o()){return/android/i.test(e)}function Ud(e=o()){return/blackberry/i.test(e)}function Vd(e=o()){return/webos/i.test(e)}function Fd(e=o()){return/iphone|ipad|ipod/i.test(e)}function Bd(e=o()){return Fd(e)||Md(e)||Vd(e)||Ud(e)||/windows phone/i.test(e)||Pd(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jd(e,t=[]){let n;switch(e){case"Browser":n=Dd(o());break;case"Worker":n=`${Dd(o())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${W}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hd(this),this.idTokenSubscription=new Hd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=td(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Od.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Jh(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Id(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?E(e):null;return t&&Jh(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Jh(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(td(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new d("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&td(e)||this._popupRedirectResolver;Jh(t,this,"argument-error"),this.redirectPersistenceManager=await Od.create(this,[td(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Jh(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Jh(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function $d(e){return E(e)}class Hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new v(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Jh(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qh("not implemented")}_getIdTokenResponse(e){return Qh("not implemented")}_linkToIdToken(e,t){return Qh("not implemented")}_getReauthenticationResolver(e){return Qh("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(e,t){return hd(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kd extends zd{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Kd(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Kd(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return fd(e,"POST","/v1/accounts:signInWithPassword",ud(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return fd(e,"POST","/v1/accounts:signInWithEmailLink",ud(e,t))}(e,{email:this._email,oobCode:this._password});default:Wh(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Wd(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return fd(e,"POST","/v1/accounts:signInWithEmailLink",ud(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Wh(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd(e,t){return fd(e,"POST","/v1/accounts:signInWithIdp",ud(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xd(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wh("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Bh(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Xd(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Gd(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Gd(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gd(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=g(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jd extends zd{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Jd({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Jd({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return fd(e,"POST","/v1/accounts:signInWithPhoneNumber",ud(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await fd(e,"POST","/v1/accounts:signInWithPhoneNumber",ud(e,t));if(n.temporaryProof)throw gd(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return fd(e,"POST","/v1/accounts:signInWithPhoneNumber",ud(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Yd)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Jd({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){var t,n,r,i,s,o;const a=y(w(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Jh(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=y(w(e)).link,n=t?y(w(t)).deep_link_id:null,r=y(w(e)).deep_link_id;return(r?y(w(r)).link:null)||r||n||t||e}(e);try{return new Qd(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zd{constructor(){this.providerId=Zd.PROVIDER_ID}static credential(e,t){return Kd._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qd.parseLink(t);return Jh(n,"argument-error"),Kd._fromEmailAndCode(e,n.code,n.tenantId)}}Zd.PROVIDER_ID="password",Zd.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Zd.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nf extends tf{constructor(){super("facebook.com")}static credential(e){return Xd._fromParams({providerId:nf.PROVIDER_ID,signInMethod:nf.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nf.credentialFromTaggedObject(e)}static credentialFromError(e){return nf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nf.credential(e.oauthAccessToken)}catch(e){return null}}}nf.FACEBOOK_SIGN_IN_METHOD="facebook.com",nf.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rf extends tf{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xd._fromParams({providerId:rf.PROVIDER_ID,signInMethod:rf.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rf.credentialFromTaggedObject(e)}static credentialFromError(e){return rf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rf.credential(t,n)}catch(e){return null}}}rf.GOOGLE_SIGN_IN_METHOD="google.com",rf.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sf extends tf{constructor(){super("github.com")}static credential(e){return Xd._fromParams({providerId:sf.PROVIDER_ID,signInMethod:sf.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sf.credentialFromTaggedObject(e)}static credentialFromError(e){return sf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return sf.credential(e.oauthAccessToken)}catch(e){return null}}}sf.GITHUB_SIGN_IN_METHOD="github.com",sf.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class of extends tf{constructor(){super("twitter.com")}static credential(e,t){return Xd._fromParams({providerId:of.PROVIDER_ID,signInMethod:of.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return of.credentialFromTaggedObject(e)}static credentialFromError(e){return of.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return of.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function af(e,t){return fd(e,"POST","/v1/accounts:signUp",ud(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */of.TWITTER_SIGN_IN_METHOD="twitter.com",of.PROVIDER_ID="twitter.com";class cf{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await _d._fromIdTokenResponse(e,n,r),s=lf(n);return new cf({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=lf(n);return new cf({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function lf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uf extends h{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,uf.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new uf(e,t,n,r)}}function hf(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw uf._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(e,t,n=!1){const r=await bd(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cf._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ff(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await bd(e,hf(r,i,t,e),n);Jh(s.idToken,r,"internal-error");const o=vd(s.idToken);Jh(o,r,"internal-error");const{sub:a}=o;return Jh(e.uid===a,r,"user-mismatch"),cf._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Wh(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(e,t,n=!1){const r="signIn",i=await hf(e,r,t),s=await cf._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function mf(e,t){return pf($d(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gf(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=E(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await bd(r,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return hd(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}new WeakMap;const yf="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yf,"1"),this.storage.removeItem(yf),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends wf{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=o();return Rd(e)||Fd(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Bd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);u()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vf.type="LOCAL";const bf=vf;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends wf{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ef.type="SESSION";const Tf=Ef;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class If{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new If(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kf(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */If.receivers=[];class Sf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=kf("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cf(){return void 0!==_f().WorkerGlobalScope&&"function"==typeof _f().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Af="firebaseLocalStorageDb",Nf="firebaseLocalStorage",Of="fbase_key";class Df{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function xf(e,t){return e.transaction([Nf],t?"readwrite":"readonly").objectStore(Nf)}function Rf(){const e=indexedDB.open(Af,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Nf,{keyPath:Of})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Nf)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Af);return new Df(e).toPromise()}(),t(await Rf()))}))}))}async function Lf(e,t,n){const r=xf(e,!0).put({[Of]:t,value:n});return new Df(r).toPromise()}function Pf(e,t){const n=xf(e,!0).delete(t);return new Df(n).toPromise()}class Mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Rf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=If._getInstance(Cf()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Sf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rf();return await Lf(e,yf,"1"),await Pf(e,yf),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Lf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=xf(e,!1).get(t),r=await new Df(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Pf(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=xf(e,!1).getAll();return new Df(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Mf.type="LOCAL";const Uf=Mf;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Kh("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}function Ff(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ff("rcb"),new sd(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bf="recaptcha";async function jf(e,t,n){var r;const i=await n.verify();try{let s;if(Jh("string"==typeof i,e,"argument-error"),Jh(n.type===Bf,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Jh("enroll"===t.type,e,"internal-error");const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await function(e,t){return hd(e,"POST","/v2/accounts/mfaEnrollment:start",ud(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Jh("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Jh(n,e,"missing-multi-factor-info");const o=await function(e,t){return hd(e,"POST","/v2/accounts/mfaSignIn:start",ud(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return hd(e,"POST","/v1/accounts:sendVerificationCode",ud(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qf{constructor(e){this.providerId=qf.PROVIDER_ID,this.auth=$d(e)}verifyPhoneNumber(e,t){return jf(this.auth,e,E(t))}static credential(e,t){return Jd._fromVerification(e,t)}static credentialFromResult(e){const t=e;return qf.credentialFromTaggedObject(t)}static credentialFromError(e){return qf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Jd._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $f(e,t){return t?td(t):(Jh(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qf.PROVIDER_ID="phone",qf.PHONE_SIGN_IN_METHOD="phone";class Hf extends zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gd(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gd(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gd(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zf(e){return pf(e.auth,new Hf(e),e.bypassAuthState)}function Wf(e){const{auth:t,user:n}=e;return Jh(n,t,"internal-error"),ff(n,new Hf(e),e.bypassAuthState)}async function Kf(e){const{auth:t,user:n}=e;return Jh(n,t,"internal-error"),df(n,new Hf(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zf;case"linkViaPopup":case"linkViaRedirect":return Kf;case"reauthViaPopup":case"reauthViaRedirect":return Wf;default:Wh(this.auth,"internal-error")}}resolve(e){Zh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new sd(2e3,1e4);async function Yf(e,t,n){const r=$d(e);Xh(e,t,ef);const i=$f(r,n);return new Jf(r,"signInViaPopup",t,i).executeNotNull()}class Jf extends Gf{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Jf.currentPopupAction&&Jf.currentPopupAction.cancel(),Jf.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Jh(e,this.auth,"internal-error"),e}async onExecution(){Zh(1===this.filter.length,"Popup operations only handle one event");const e=kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Kh(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Kh(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jf.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Kh(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Xf.get())};e()}}Jf.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qf="pendingRedirect",Zf=new Map;class ep extends Gf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Zf.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=np(t),r=tp(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Zf.set(this.auth._key(),e)}return this.bypassAuthState||Zf.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function tp(e){return td(e._redirectPersistence)}function np(e){return Nd(Qf,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(e,t,n=!1){const r=$d(e),i=$f(r,t),s=new ep(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class ip{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return op(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!op(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Kh(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(sp(e))}saveEventToCache(e){this.cachedEventUids.add(sp(e)),this.lastProcessedEventTime=Date.now()}}function sp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function op({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ap=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cp=/^https?/;async function lp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return hd(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(up(e))return}catch(e){}Wh(e,"unauthorized-domain")}function up(e){const t=nd(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!cp.test(n))return!1;if(ap.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new sd(3e4,6e4);function dp(){const e=_f().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let fp=null;function pp(e){return fp=fp||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){dp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dp(),n(Kh(e,"network-request-failed"))},timeout:hp.get()})}if(null===(i=null===(r=_f().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=_f().gapi)||void 0===s?void 0:s.load)){const t=Ff("iframefcb");return _f()[t]=()=>{gapi.load?o():n(Kh(e,"network-request-failed"))},Vf(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw fp=null,e}))}(e),fp}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new sd(5e3,15e3),gp="__/auth/iframe",yp="emulator/auth/iframe",wp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bp(e){const t=e.config;Jh(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?od(t,yp):`https://${e.config.authDomain}/${gp}`,r={apiKey:t.apiKey,appName:e.name,v:W},i=vp.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${g(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ep={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ip(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Ep),{width:r.toString(),height:i.toString(),top:s,left:a}),u=o().toLowerCase();n&&(c=Ld(u)?"_blank":n),xd(u)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=o()){var t;return Fd(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new Tp(null);const d=window.open(t||"",c,h);Jh(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Tp(d)}const kp="__/auth/handler",Sp="emulator/auth/handler";function _p(e,t,n,r,i,s){Jh(e.config.authDomain,e,"auth-domain-config-required"),Jh(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:W,eventId:i};if(t instanceof ef){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof tf){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${kp}`;return od(e,Sp)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${g(a).slice(1)}`}const Cp="webStorageSupport";const Ap=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tf,this._completeRedirectFn=rp}async _openPopup(e,t,n,r){var i;Zh(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ip(e,_p(e,t,n,nd(),r),kf())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=_p(e,t,n,nd(),r),_f().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Zh(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await pp(e),n=_f().gapi;return Jh(n,e,"internal-error"),t.open({where:document.body,url:bp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wp,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Kh(e,"network-request-failed"),s=_f().setTimeout((()=>{r(i)}),mp.get());function o(){_f().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new ip(e);return t.register("authEvent",(t=>{Jh(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cp,{type:Cp},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Cp];void 0!==i&&t(!!i),Wh(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bd()||Rd()||Fd()}};var Np,Op="@firebase/auth",Dp="0.19.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Jh(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Np="Browser",q(new T("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Jh(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Jh(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Np,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jd(Np)},s=new qd(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(td);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),q(new T("auth-internal",(e=>(e=>new xp(e))($d(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),G(Op,Dp,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Np)),G(Op,Dp,"esm2017");!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:U,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw H.create("bad-app-name",{appName:String(r)});const i=F.get(r);if(i){if(p(e,i.options)&&p(n,i.config))return i;throw H.create("duplicate-app",{appName:r})}const s=new S(r);for(const e of B.values())s.addComponent(e);const o=new z(e,n,s);F.set(r,o)}({apiKey:"AIzaSyAFaMmkHJ8vitHE2tnRnyKVB5iKrxzzVWI",authDomain:"simple-snake-872fa.firebaseapp.com",projectId:"simple-snake-872fa",storageBucket:"simple-snake-872fa.appspot.com",messagingSenderId:"921106468228",appId:"1:921106468228:web:59a29a800ca49059afa1d1"});var Rp=function(e=K()){return $(e,"firestore").getImmediate()}(),Lp=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=K()){const t=$(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=$(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(p(n.getOptions(),null!=t?t:{}))return e;Wh(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ap,persistence:[Uf,bf,Tf]})}();function Pp(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Mp(e){Pp(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):new Date(NaN)}function Up(e,t){Pp(2,arguments);var n=Mp(e),r=Mp(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function Vp(e){Pp(1,arguments);var t=Mp(e);return function(e){Pp(1,arguments);var t=Mp(e);return t.setHours(23,59,59,999),t}(t).getTime()===function(e){Pp(1,arguments);var t=Mp(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}(t).getTime()}function Fp(e,t){Pp(2,arguments);var n,r=Mp(e),i=Mp(t),s=Up(r,i),o=Math.abs(function(e,t){Pp(2,arguments);var n=Mp(e),r=Mp(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(r,i));if(o<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-s*o);var a=Up(r,i)===-s;Vp(Mp(e))&&1===o&&1===Up(e,i)&&(a=!1),n=s*(o-Number(a))}return 0===n?0:n}var Bp={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},jp="trunc";function qp(e,t,n){Pp(2,arguments);var r,i=function(e,t){return Pp(2,arguments),Mp(e).getTime()-Mp(t).getTime()}(e,t)/1e3;return((r=null==n?void 0:n.roundingMethod)?Bp[r]:Bp[jp])(i)}var $p={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const Hp=function(e,t,n){var r,i=$p[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function zp(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var Wp={date:zp({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:zp({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:zp({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var Kp={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Gp(e){return function(t,n){var r,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):s;r=e.formattingValues[o]||e.formattingValues[s]}else{var a=e.defaultWidth,c=i.width?String(i.width):e.defaultWidth;r=e.values[c]||e.values[a]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function Xp(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;var o,a=s[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return}(c,(function(e){return e.test(a)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n;return}(c,(function(e){return e.test(a)}));return o=e.valueCallback?e.valueCallback(l):l,{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(a.length)}}}var Yp;const Jp={code:"en-US",formatDistance:Hp,formatLong:Wp,formatRelative:function(e,t,n,r){return Kp[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Gp({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Gp({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Gp({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Gp({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Gp({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Yp={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(Yp.matchPattern);if(!n)return null;var r=n[0],i=e.match(Yp.parsePattern);if(!i)return null;var s=Yp.valueCallback?Yp.valueCallback(i[0]):i[0];return{value:s=t.valueCallback?t.valueCallback(s):s,rest:e.slice(r.length)}}),era:Xp({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Xp({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Xp({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Xp({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Xp({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Qp(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}function Zp(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var em=1440,tm=2520,nm=43200,rm=86400;function im(e,t){return Pp(1,arguments),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Pp(2,arguments);var r=n.locale||Jp;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=Up(e,t);if(isNaN(i))throw new RangeError("Invalid time value");var s,o,a=Qp(n);a.addSuffix=Boolean(n.addSuffix),a.comparison=i,i>0?(s=Mp(t),o=Mp(e)):(s=Mp(e),o=Mp(t));var c,l=qp(o,s),u=(Zp(o)-Zp(s))/1e3,h=Math.round((l-u)/60);if(h<2)return n.includeSeconds?l<5?r.formatDistance("lessThanXSeconds",5,a):l<10?r.formatDistance("lessThanXSeconds",10,a):l<20?r.formatDistance("lessThanXSeconds",20,a):l<40?r.formatDistance("halfAMinute",null,a):l<60?r.formatDistance("lessThanXMinutes",1,a):r.formatDistance("xMinutes",1,a):0===h?r.formatDistance("lessThanXMinutes",1,a):r.formatDistance("xMinutes",h,a);if(h<45)return r.formatDistance("xMinutes",h,a);if(h<90)return r.formatDistance("aboutXHours",1,a);if(h<em){var d=Math.round(h/60);return r.formatDistance("aboutXHours",d,a)}if(h<tm)return r.formatDistance("xDays",1,a);if(h<nm){var f=Math.round(h/em);return r.formatDistance("xDays",f,a)}if(h<rm)return c=Math.round(h/nm),r.formatDistance("aboutXMonths",c,a);if((c=Fp(o,s))<12){var p=Math.round(h/nm);return r.formatDistance("xMonths",p,a)}var m=c%12,g=Math.floor(c/12);return m<3?r.formatDistance("aboutXYears",g,a):m<9?r.formatDistance("overXYears",g,a):r.formatDistance("almostXYears",g+1,a)}(e,Date.now(),t)}var sm=n(455),om=n.n(sm),am={SNAKE_SPEED:5,EXPANSION_RATE:1,FOOD:{shape:"",icon:""},FOOD_COLOR:"#ff7c4f",SNAKE:{shape:"",icon:""},SNAKE_COLOR:{head:"#0e91ff",body:"#79e4ff",border:".25vmin solid black",boost:".30vmin solid yellow"},GAME_COLOR:{nav:"",board:"",key:""}},cm=document.getElementById("up"),lm=document.getElementById("down"),um=document.getElementById("left"),hm=document.getElementById("right"),dm={x:0,y:0},fm={x:0,y:0},pm=am.SNAKE_SPEED,mm=am.SNAKE_COLOR.border;function gm(){return fm=dm,dm}function ym(){var e=jg();pm=10,mm=am.SNAKE_COLOR.boost,e&&(mm=".30vmin solid ".concat(e.snakeBoost)),setTimeout((function(){pm=am.SNAKE_SPEED,mm=am.SNAKE_COLOR.border,e&&(mm=".25vmin solid ".concat(e.snakeBorder))}),1500)}function wm(e){return wm="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wm(e)}function vm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function bm(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?vm(Object(n),!0).forEach((function(t){Em(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vm(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Em(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==wm(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==wm(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===wm(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window.addEventListener("keydown",(function(e){switch(e.key){case"ArrowUp":if(0!==fm.y)break;dm={x:0,y:-1};break;case"ArrowDown":if(0!==fm.y)break;dm={x:0,y:1};break;case"ArrowLeft":if(0!==fm.x)break;dm={x:-1,y:0};break;case"ArrowRight":if(0!==fm.x)break;dm={x:1,y:0};break;case" ":ym()}})),cm.addEventListener("click",(function(){0===fm.y&&(dm={x:0,y:-1})})),lm.addEventListener("click",(function(){0===fm.y&&(dm={x:0,y:1})})),um.addEventListener("click",(function(){0===fm.x&&(dm={x:-1,y:0})})),hm.addEventListener("click",(function(){0===fm.x&&(dm={x:1,y:0})}));var Tm=[{x:11,y:11}],Im=0;function km(){!function(){for(var e=0;e<Im;e++)Tm.push(bm({},Tm[Tm.length-1]));Im=0}();for(var e=gm(),t=Tm.length-2;t>=0;t--)Tm[t+1]=bm({},Tm[t]);Tm[0].x+=e.x,Tm[0].y+=e.y}function Sm(e){var t=jg();Tm.forEach((function(n){var r=document.createElement("div");r.style.gridRowStart=n.y,r.style.gridColumnStart=n.x,r.classList.add("snake"),r.style.backgroundColor=am.SNAKE_COLOR.body,t&&(r.style.backgroundColor=t.snakeBody),r.style.border=mm,e.appendChild(r)}));var n=document.querySelectorAll(".snake");n[0].style.backgroundColor=am.SNAKE_COLOR.head,t&&(n[0].style.backgroundColor=t.snakeHead)}function _m(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoreHead,n=void 0!==t&&t;return Tm.some((function(t,r){return(!n||0!==r)&&(s=e,(i=t).x===s.x&&i.y===s.y);var i,s}))}function Cm(){return Tm.length-1}var Am=21;function Nm(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.getElementById(e);return n.loop=t,n.currentTime=0,n.play(),function(){n.loop=!1,n.pause(),n.currentTime=0}}var Om=Rm(),Dm="#e45b00";function xm(){var e;_m(Om)&&(Nm("audio-eat-1"),e=am.EXPANSION_RATE,Im+=e,Om=Rm(),Dm="#".concat(Math.floor(16777215*Math.random()).toString(16)))}function Rm(){for(var e;null==e||_m(e);)e={x:Math.floor(Math.random()*Am)+1,y:Math.floor(Math.random()*Am)+1};return e}function Lm(e){return Lm="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lm(e)}function Pm(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Pm=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,i){var s=t&&t.prototype instanceof d?t:d,o=Object.create(s.prototype),a=new S(i||[]);return r(o,"_invoke",{value:E(e,n,a)}),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h={};function d(){}function f(){}function p(){}var m={};c(m,s,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(_([])));y&&y!==t&&n.call(y,s)&&(m=y);var w=p.prototype=d.prototype=Object.create(m);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function i(r,s,o,a){var c=u(e[r],e,s);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==Lm(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){i("next",e,o,a)}),(function(e){i("throw",e,o,a)})):t.resolve(h).then((function(e){l.value=e,o(l)}),(function(e){return i("throw",e,o,a)}))}a(c.arg)}var s;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return s=s?s.then(r,r):r()}})}function E(e,t,n){var r="suspendedStart";return function(i,s){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw s;return C()}for(n.method=i,n.arg=s;;){var o=n.delegate;if(o){var a=T(o,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function T(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,T(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=u(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var s=i.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function _(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=p,r(w,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:f,configurable:!0}),f.displayName=c(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,a,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},v(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new b(l(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(w),c(w,a,"Generator"),c(w,s,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=_,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var a=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(a&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function Mm(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function Um(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Vm(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Um(Object(n),!0).forEach((function(t){Fm(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Um(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Fm(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Lm(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==Lm(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Lm(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Bm=document.getElementById("game-board"),jm=document.getElementById("point-value"),qm=document.getElementById("login"),$m=document.getElementById("signup"),Hm=document.getElementById("auth-link"),zm=document.getElementById("auth-link-side"),Wm=document.getElementById("setting"),Km=document.getElementById("setting-side"),Gm=document.getElementById("scoreboard"),Xm=document.getElementById("logout-link"),Ym=document.getElementById("logout-link-side"),Jm=document.getElementById("login-link"),Qm=document.getElementById("signup-link"),Zm=document.getElementById("boost"),eg=document.querySelector("#scoreboard-box table"),tg=document.querySelector("#signup-form .close"),ng=document.querySelector("#login-form .close"),rg=document.querySelector(".nav-button"),ig=document.querySelector(".nav-ul"),sg=document.querySelector(".side-ul"),og=document.querySelector("#login-form"),ag=document.querySelector("#signup-form"),cg=document.querySelector("#best-score"),lg=document.querySelector("sidebar"),ug=document.querySelector(".loader"),hg=document.querySelector(".chat"),dg=document.querySelector(".chat-box"),fg=document.querySelector("#chat .close"),pg=document.getElementById("chat"),mg=document.querySelector(".chat-input"),gg=document.querySelector(".chat-content"),yg=document.getElementById("settings-backdrop"),wg=document.getElementById("settings-form"),vg=document.querySelector("#settings-form .close"),bg=document.getElementById("snakeHeadColor"),Eg=document.getElementById("snakeBodyColor"),Tg=document.getElementById("snakeBorderColor"),Ig=document.getElementById("snakeBoostColor"),kg=document.getElementById("boardColor"),Sg=document.getElementById("boardBorderColor"),_g=document.getElementById("keyColor"),Cg=document.getElementById("navColor"),Ag=document.querySelector("nav"),Ng=document.querySelectorAll(".key"),Og=document.querySelectorAll(".google-signup"),Dg=0,xg=!1,Rg=null,Lg=null;function Pg(e){if(xg)if(Nm("audio-game-over"),Rg&&Lg){var t=Cm();if(Lg.score>t)om().fire("Game Over!","Don't give up and try again 😊","error").then((function(){Mg()}));else Lh(Bu(Rp,"scores",Lg.id),{score:t}).then((function(){om().fire("Game Over!","You have new game record 😊","success").then((function(){Mg()}))})).catch((function(e){}))}else om().fire({title:"Game over!",icon:"error",text:"Create account to save your game data",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Login/signup",cancelButtonText:"No, Thanks"}).then((function(e){e.isConfirmed?(Kg("login"),tg.innerHTML='<a href="#" onclick="location.reload();">x</a>',ng.innerHTML='<a href="#" onclick="location.reload();">x</a>'):Mg()}));else{var n,r=(e-Dg)/1e3;if(window.requestAnimationFrame(Pg),!(r<1/pm))Dg=e,km(),jm.innerHTML=Cm(),xm(),n=Tm[0],xg=n.x<1||n.x>Am||n.y<1||n.y>Am||_m(Tm[0],{ignoreHead:!0}),Bm.innerHTML="",Sm(Bm),function(e){var t=document.createElement("div");t.style.gridRowStart=Om.y,t.style.gridColumnStart=Om.x,t.classList.add("food"),t.style.backgroundColor=Dm,e.appendChild(t)}(Bm)}}function Mg(){window.location.reload()}function Ug(){bg.value=Lg.snakeHead,Eg.value=Lg.snakeBody,Tg.value=Lg.snakeBorder,Ig.value=Lg.snakeBoost,Cg.value=Lg.navColor,kg.value=Lg.boardColor,_g.value=Lg.keyColor,Sg.value=Lg.sideColor}Zm.addEventListener("click",(function(){ym()}));var Vg=Fu(Rp,"scores"),Fg=Ch(Vg,Nh("score","desc")),Bg="";function jg(){return Lg}function qg(e){Ph(Vg,{uid:e.uid,username:e.displayName,createdAt:Fh(),score:0,foodShape:"50%",foodColor:"#ff7c4f",foodIcon:"",snakeShape:"8px",snakeHead:"#1a70ff",snakeBody:"#00ccff",snakeBorder:"#000",snakeBoost:"#faf11b",navColor:"#2d9de6",boardColor:"#eaeaea",sideColor:"#000",keyColor:"#3b3b3b",keyColorBackground:"#fff"}).then((function(){Mg()})).catch((function(e){}))}Mh(Fg,(function(e){ug.style.display="none";var t=[];e.docs.forEach((function(e){t.push(Vm(Vm({},e.data()),{},{id:e.id}))})),Rg&&t.length>0&&(Lg=t.filter((function(e){return e.uid==Rg.uid}))[0],cg.innerHTML="Best : "+Lg.score,Ug());var n="";t.length>0&&(window.requestAnimationFrame(Pg),t.forEach((function(e,t){e.score>0&&(n+='<tr>\n                    <td class="col">'.concat(t+1,"</td>\n                    <td>").concat(e.username,'</td>\n                    <td class="col-score">').concat(e.score,"</td>\n                    </tr>"))}))),lg&&(eg.innerHTML="<tr>\n      <th>No</th>\n      <th>Name</th>\n      <th>Score</th>\n      </tr>"+n),Bg="<tr>\n    <th>No</th>\n    <th>Name</th>\n    <th>Score</th>\n    </tr>"+n,Lg&&(Ag.style.backgroundColor=Lg.navColor,Bm.style.backgroundColor=Lg.boardColor,Bm.style.border="5px solid ".concat(Lg.sideColor),Ng.forEach((function(e){e.style.backgroundColor=Lg.keyColor})))}),(function(e){})),function(e,t,n,r){E(e).onAuthStateChanged(t,n,r)}(Lp,(function(e){if(e){Rg=e;var t=document.createElement("li");t.classList.add("display-name"),t.innerHTML="<h3>".concat(e.displayName,"</h3><hr/>"),ig.insertBefore(t,Wm);var n=document.createElement("li");n.classList.add("display-name"),n.innerHTML="<h3>".concat(e.displayName,"</h3><hr/>"),sg.insertBefore(n,Km),Hm.style.display="none",zm.style.display="none",Wm.style.display="block",Km.style.display="block",Xm.style.display="block",Ym.style.display="block"}else{var r=document.querySelector(".display-name");r&&r.remove(),Hm.style.display="block",zm.style.display="block",Wm.style.display="none",Km.style.display="none",Xm.style.display="none",Ym.style.display="none"}}),(function(e){})),ag.addEventListener("submit",(function(e){e.preventDefault(),zg();var t=ag.username.value,n=ag.email_sign.value,r=ag.password_sign.value;(async function(e,t,n){const r=$d(e),i=await af(r,{returnSecureToken:!0,email:t,password:n}),s=await cf._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s})(Lp,n,r).then((function(e){var n=e.user;gf(Lp.currentUser,{displayName:t}).then((function(){ag.reset(),qg(n)}))})).catch((function(e){var t=ag.querySelector("#signup-form p"),n=document.createElement("p");n.innerHTML=e.message,n.classList.add("error"),ag.insertBefore(n,t)}))}));var $g=function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){Mm(s,r,i,o,a,"next",e)}function a(e){Mm(s,r,i,o,a,"throw",e)}o(void 0)}))}}(Pm().mark((function e(){var t,n;return Pm().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new rf,e.prev=1,e.next=4,Yf(Lp,t);case 4:n=e.sent,qg(n.user),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();function Hg(){om().fire({title:"Are you sure?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(e){e.isConfirmed&&function(e){return E(e).signOut()}(Lp).then((function(){Mg()})).catch((function(e){}))}))}function zg(){var e=document.querySelector(".error");e&&e.remove()}Og.forEach((function(e){e.addEventListener("click",(function(){$g()}))})),og.addEventListener("submit",(function(e){e.preventDefault(),zg();var t=og.email.value,n=og.password.value;(function(e,t,n){return mf(E(e),Zd.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(Lp,t,n).then((function(){og.reset(),Mg()})).catch((function(e){var t=og.querySelector("#login-form p"),n=document.createElement("p");n.innerHTML=e.message,n.classList.add("error"),og.insertBefore(n,t)}))})),Xm.addEventListener("click",(function(){Hg()})),Ym.addEventListener("click",(function(){Hg()})),Wm.addEventListener("click",(function(){yg.style.display="grid"})),Km.addEventListener("click",(function(){yg.style.display="grid"})),vg.addEventListener("click",(function(){yg.style.display="none",Ug()})),wg.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector("#settings-form button");t.innerHTML="updating...",Lh(Bu(Rp,"scores",Lg.id),{snakeShape:"8px",snakeHead:bg.value,snakeBody:Eg.value,snakeBorder:Tg.value,snakeBoost:Ig.value,navColor:Cg.value,boardColor:kg.value,sideColor:Sg.value,keyColor:_g.value,keyColorBackground:"#fff"}).then((function(){om().fire({icon:"success",text:"Update success"}).then((function(){t.innerHTML="Save",Mg()}))})).catch((function(e){}))})),dg.addEventListener("click",(function(){Rg?(pg.style.display="grid",mg.msg.focus()):om().fire({text:"Please login first",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Login/signup",cancelButtonText:"No, Thanks"}).then((function(e){e.isConfirmed&&Kg("login")}))})),fg.addEventListener("click",(function(){pg.style.display="none"}));var Wg=Fu(Rp,"chats");function Kg(e){"signup"===e&&($m.style.display="grid",qm.style.display="none"),"login"===e&&($m.style.display="none",qm.style.display="grid"),ig.classList.remove("toggle-nav"),zg(),ag.reset(),og.reset()}function Gg(e){"signup"===e&&($m.style.display="none"),"login"===e&&(qm.style.display="none"),zg(),ag.reset(),og.reset()}function Xg(e){var t=e.replace(/<[^>]+>/g,"");return t=(t=t.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,"")).replace(/<script[^>]*>[\s\S]*?<\/script>/gi,"")}mg.addEventListener("submit",(function(e){e.preventDefault(),Ph(Wg,{msg:Xg(mg.msg.value),uid:Rg.uid,username:Rg.displayName,createdAt:Fh()}).then((function(){mg.reset(),mg.msg.focus()})).catch((function(e){}))})),Mh(Ch(Wg,Nh("createdAt","desc")),(function(e){var t=[];if(e.docs.forEach((function(e){t.push(Vm(Vm({},e.data()),{},{id:e.id}))}),(function(e){})),t.length>0){var n="";t.map((function(e){Rg&&(e.uid===Rg.uid?n+='<div class="message m-right" >\n          <p>you</p>\n          <p>'.concat(e.msg,"</p>\n          <p>").concat(im(e.createdAt.toDate(),{addSuffix:!0}),"</p>\n          </div>"):n+='<div class="message" >\n          <p>'.concat(e.username,"</p>\n          <p>").concat(e.msg,"</p>\n          <p>").concat(im(e.createdAt.toDate(),{addSuffix:!0}),"</p>\n          </div>"))})),gg.innerHTML=n}})),Gm.addEventListener("click",(function(){om().fire({title:"<strong>Scoreboard</strong>",html:'<div class="table-box">\n    <table id="popup-table">'.concat(Bg,"</table>\n    </div>"),showCloseButton:!0})})),rg.addEventListener("click",(function(){ig.classList.add("toggle-nav")})),Hm.addEventListener("click",(function(){Kg("login")})),zm.addEventListener("click",(function(){Kg("login")})),tg.addEventListener("click",(function(){Gg("signup")})),Jm.addEventListener("click",(function(){Kg("login")})),ng.addEventListener("click",(function(){Gg("login")})),Qm.addEventListener("click",(function(){Kg("signup")})),window.addEventListener("click",(function(e){var t=e.target;do{if(t==rg)return;if(t==ig)return;if(t==dg)return;if(t==hg)return;if(t==wg)return;if(t==Km)return;t=t.parentNode}while(t);ig.classList.remove("toggle-nav"),pg.style.display="none",yg.style.display="none",Lg&&Rg&&Ug()}))})()})();