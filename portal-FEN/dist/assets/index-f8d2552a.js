import{r as m,t as L,u as X,j as U,F as ie,a as O,H as D,b as le}from"./index-870b2980.js";import{u as ce,P as ue,C as ge,F as de,B as he,L as be}from"./useUser-5f67d836.js";function ye(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=ye(e[t]))&&(s&&(s+=" "),s+=o);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function M(){for(var e,t,o=0,s="";o<arguments.length;)(e=arguments[o++])&&(t=ye(e))&&(s&&(s+=" "),s+=t);return s}const j=e=>typeof e=="number"&&!isNaN(e),Y=e=>typeof e=="string",_=e=>typeof e=="function",ee=e=>Y(e)||_(e)?e:null,ae=e=>m.isValidElement(e)||Y(e)||_(e)||j(e);function Ee(e,t,o){o===void 0&&(o=300);const{scrollHeight:s,style:u}=e;requestAnimationFrame(()=>{u.minHeight="initial",u.height=s+"px",u.transition=`all ${o}ms`,requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(t,o)})})}function ne(e){let{enter:t,exit:o,appendPosition:s=!1,collapse:u=!0,collapseDuration:i=300}=e;return function(n){let{children:r,position:b,preventExitTransition:v,done:l,nodeRef:a,isIn:y}=n;const c=s?`${t}--${b}`:t,g=s?`${o}--${b}`:o,h=m.useRef(0);return m.useLayoutEffect(()=>{const d=a.current,f=c.split(" "),E=w=>{w.target===a.current&&(d.dispatchEvent(new Event("d")),d.removeEventListener("animationend",E),d.removeEventListener("animationcancel",E),h.current===0&&w.type!=="animationcancel"&&d.classList.remove(...f))};d.classList.add(...f),d.addEventListener("animationend",E),d.addEventListener("animationcancel",E)},[]),m.useEffect(()=>{const d=a.current,f=()=>{d.removeEventListener("animationend",f),u?Ee(d,l,i):l()};y||(v?f():(h.current=1,d.className+=` ${g}`,d.addEventListener("animationend",f)))},[y]),L.createElement(L.Fragment,null,r)}}function pe(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const P={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const o=this.list.get(e).filter(s=>s!==t);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const o=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},J=e=>{let{theme:t,type:o,...s}=e;return L.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s})},oe={info:function(e){return L.createElement(J,{...e},L.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return L.createElement(J,{...e},L.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return L.createElement(J,{...e},L.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return L.createElement(J,{...e},L.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return L.createElement("div",{className:"Toastify__spinner"})}};function Ie(e){const[,t]=m.useReducer(c=>c+1,0),[o,s]=m.useState([]),u=m.useRef(null),i=m.useRef(new Map).current,n=c=>o.indexOf(c)!==-1,r=m.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:c=>i.get(c)}).current;function b(c){let{containerId:g}=c;const{limit:h}=r.props;!h||g&&r.containerId!==g||(r.count-=r.queue.length,r.queue=[])}function v(c){s(g=>c==null?[]:g.filter(h=>h!==c))}function l(){const{toastContent:c,toastProps:g,staleId:h}=r.queue.shift();y(c,g,h)}function a(c,g){let{delay:h,staleId:d,...f}=g;if(!ae(c)||function(S){return!u.current||r.props.enableMultiContainer&&S.containerId!==r.props.containerId||i.has(S.toastId)&&S.updateId==null}(f))return;const{toastId:E,updateId:w,data:T}=f,{props:I}=r,A=()=>v(E),k=w==null;k&&r.count++;const C={...I,style:I.toastStyle,key:r.toastKey++,...f,toastId:E,updateId:w,data:T,closeToast:A,isIn:!1,className:ee(f.className||I.toastClassName),bodyClassName:ee(f.bodyClassName||I.bodyClassName),progressClassName:ee(f.progressClassName||I.progressClassName),autoClose:!f.isLoading&&(H=f.autoClose,Q=I.autoClose,H===!1||j(H)&&H>0?H:Q),deleteToast(){const S=pe(i.get(E),"removed");i.delete(E),P.emit(4,S);const B=r.queue.length;if(r.count=E==null?r.count-r.displayedToast:r.count-1,r.count<0&&(r.count=0),B>0){const R=E==null?r.props.limit:1;if(B===1||R===1)r.displayedToast++,l();else{const z=R>B?B:R;r.displayedToast=z;for(let N=0;N<z;N++)l()}}else t()}};var H,Q;C.iconOut=function(S){let{theme:B,type:R,isLoading:z,icon:N}=S,x=null;const F={theme:B,type:R};return N===!1||(_(N)?x=N(F):m.isValidElement(N)?x=m.cloneElement(N,F):Y(N)||j(N)?x=N:z?x=oe.spinner():(K=>K in oe)(R)&&(x=oe[R](F))),x}(C),_(f.onOpen)&&(C.onOpen=f.onOpen),_(f.onClose)&&(C.onClose=f.onClose),C.closeButton=I.closeButton,f.closeButton===!1||ae(f.closeButton)?C.closeButton=f.closeButton:f.closeButton===!0&&(C.closeButton=!ae(I.closeButton)||I.closeButton);let $=c;m.isValidElement(c)&&!Y(c.type)?$=m.cloneElement(c,{closeToast:A,toastProps:C,data:T}):_(c)&&($=c({closeToast:A,toastProps:C,data:T})),I.limit&&I.limit>0&&r.count>I.limit&&k?r.queue.push({toastContent:$,toastProps:C,staleId:d}):j(h)?setTimeout(()=>{y($,C,d)},h):y($,C,d)}function y(c,g,h){const{toastId:d}=g;h&&i.delete(h);const f={content:c,props:g};i.set(d,f),s(E=>[...E,d].filter(w=>w!==h)),P.emit(4,pe(f,f.props.updateId==null?"added":"updated"))}return m.useEffect(()=>(r.containerId=e.containerId,P.cancelEmit(3).on(0,a).on(1,c=>u.current&&v(c)).on(5,b).emit(2,r),()=>{i.clear(),P.emit(3,r)}),[]),m.useEffect(()=>{r.props=e,r.isToastActive=n,r.displayedToast=o.length}),{getToastToRender:function(c){const g=new Map,h=Array.from(i.values());return e.newestOnTop&&h.reverse(),h.forEach(d=>{const{position:f}=d.props;g.has(f)||g.set(f,[]),g.get(f).push(d)}),Array.from(g,d=>c(d[0],d[1]))},containerRef:u,isToastActive:n}}function me(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function fe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Le(e){const[t,o]=m.useState(!1),[s,u]=m.useState(!1),i=m.useRef(null),n=m.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,r=m.useRef(e),{autoClose:b,pauseOnHover:v,closeToast:l,onClick:a,closeOnClick:y}=e;function c(T){if(e.draggable){T.nativeEvent.type==="touchstart"&&T.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",f),document.addEventListener("mouseup",E),document.addEventListener("touchmove",f),document.addEventListener("touchend",E);const I=i.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=I.getBoundingClientRect(),I.style.transition="",n.x=me(T.nativeEvent),n.y=fe(T.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=I.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=I.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(T){if(n.boundingRect){const{top:I,bottom:A,left:k,right:C}=n.boundingRect;T.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=k&&n.x<=C&&n.y>=I&&n.y<=A?d():h()}}function h(){o(!0)}function d(){o(!1)}function f(T){const I=i.current;n.canDrag&&I&&(n.didMove=!0,t&&d(),n.x=me(T),n.y=fe(T),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),I.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,I.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function E(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E);const T=i.current;if(n.canDrag&&n.didMove&&T){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return u(!0),void e.closeToast();T.style.transition="transform 0.2s, opacity 0.2s",T.style.transform=`translate${e.draggableDirection}(0)`,T.style.opacity="1"}}m.useEffect(()=>{r.current=e}),m.useEffect(()=>(i.current&&i.current.addEventListener("d",h,{once:!0}),_(e.onOpen)&&e.onOpen(m.isValidElement(e.children)&&e.children.props),()=>{const T=r.current;_(T.onClose)&&T.onClose(m.isValidElement(T.children)&&T.children.props)}),[]),m.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||d(),window.addEventListener("focus",h),window.addEventListener("blur",d)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",d))}),[e.pauseOnFocusLoss]);const w={onMouseDown:c,onTouchStart:c,onMouseUp:g,onTouchEnd:g};return b&&v&&(w.onMouseEnter=d,w.onMouseLeave=h),y&&(w.onClick=T=>{a&&a(T),n.canCloseOnClick&&l()}),{playToast:h,pauseToast:d,isRunning:t,preventExitTransition:s,toastRef:i,eventHandlers:w}}function ve(e){let{closeToast:t,theme:o,ariaLabel:s="close"}=e;return L.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:u=>{u.stopPropagation(),t(u)},"aria-label":s},L.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},L.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function we(e){let{delay:t,isRunning:o,closeToast:s,type:u="default",hide:i,className:n,style:r,controlledProgress:b,progress:v,rtl:l,isIn:a,theme:y}=e;const c=i||b&&v===0,g={...r,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused",opacity:c?0:1};b&&(g.transform=`scaleX(${v})`);const h=M("Toastify__progress-bar",b?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${u}`,{"Toastify__progress-bar--rtl":l}),d=_(n)?n({rtl:l,type:u,defaultClassName:h}):M(h,n);return L.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:d,style:g,[b&&v>=1?"onTransitionEnd":"onAnimationEnd"]:b&&v<1?null:()=>{a&&s()}})}const Ce=e=>{const{isRunning:t,preventExitTransition:o,toastRef:s,eventHandlers:u}=Le(e),{closeButton:i,children:n,autoClose:r,onClick:b,type:v,hideProgressBar:l,closeToast:a,transition:y,position:c,className:g,style:h,bodyClassName:d,bodyStyle:f,progressClassName:E,progressStyle:w,updateId:T,role:I,progress:A,rtl:k,toastId:C,deleteToast:H,isIn:Q,isLoading:$,iconOut:S,closeOnClick:B,theme:R}=e,z=M("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${v}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":B}),N=_(g)?g({rtl:k,position:c,type:v,defaultClassName:z}):M(z,g),x=!!A||!r,F={closeToast:a,type:v,theme:R};let K=null;return i===!1||(K=_(i)?i(F):m.isValidElement(i)?m.cloneElement(i,F):ve(F)),L.createElement(y,{isIn:Q,done:H,position:c,preventExitTransition:o,nodeRef:s},L.createElement("div",{id:C,onClick:b,className:N,...u,style:h,ref:s},L.createElement("div",{...Q&&{role:I},className:_(d)?d({type:v}):M("Toastify__toast-body",d),style:f},S!=null&&L.createElement("div",{className:M("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},S),L.createElement("div",null,n)),K,L.createElement(we,{...T&&!x?{key:`pb-${T}`}:{},rtl:k,theme:R,delay:r,isRunning:t,isIn:Q,closeToast:a,hide:l,type:v,style:w,className:E,controlledProgress:x,progress:A||0})))},se=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Oe=ne(se("bounce",!0));ne(se("slide",!0));ne(se("zoom"));ne(se("flip"));const q=m.forwardRef((e,t)=>{const{getToastToRender:o,containerRef:s,isToastActive:u}=Ie(e),{className:i,style:n,rtl:r,containerId:b}=e;function v(l){const a=M("Toastify__toast-container",`Toastify__toast-container--${l}`,{"Toastify__toast-container--rtl":r});return _(i)?i({position:l,rtl:r,defaultClassName:a}):M(a,ee(i))}return m.useEffect(()=>{t&&(t.current=s.current)},[]),L.createElement("div",{ref:s,className:"Toastify",id:b},o((l,a)=>{const y=a.length?{...n}:{...n,pointerEvents:"none"};return L.createElement("div",{className:v(l),style:y,key:`container-${l}`},a.map((c,g)=>{let{content:h,props:d}=c;return L.createElement(Ce,{...d,isIn:u(d.toastId),style:{...d.style,"--nth":g+1,"--len":a.length},key:`toast-${d.key}`},h)}))}))});q.displayName="ToastContainer",q.defaultProps={position:"top-right",transition:Oe,autoClose:5e3,closeButton:ve,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let re,G=new Map,V=[],_e=1;function Te(){return""+_e++}function Ne(e){return e&&(Y(e.toastId)||j(e.toastId))?e.toastId:Te()}function W(e,t){return G.size>0?P.emit(0,e,t):V.push({content:e,options:t}),t.toastId}function te(e,t){return{...t,type:t&&t.type||e,toastId:Ne(t)}}function Z(e){return(t,o)=>W(t,te(e,o))}function p(e,t){return W(e,te("default",t))}p.loading=(e,t)=>W(e,te("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),p.promise=function(e,t,o){let s,{pending:u,error:i,success:n}=t;u&&(s=Y(u)?p.loading(u,o):p.loading(u.render,{...o,...u}));const r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},b=(l,a,y)=>{if(a==null)return void p.dismiss(s);const c={type:l,...r,...o,data:y},g=Y(a)?{render:a}:a;return s?p.update(s,{...c,...g}):p(g.render,{...c,...g}),y},v=_(e)?e():e;return v.then(l=>b("success",n,l)).catch(l=>b("error",i,l)),v},p.success=Z("success"),p.info=Z("info"),p.error=Z("error"),p.warning=Z("warning"),p.warn=p.warning,p.dark=(e,t)=>W(e,te("default",{theme:"dark",...t})),p.dismiss=e=>{G.size>0?P.emit(1,e):V=V.filter(t=>e!=null&&t.options.toastId!==e)},p.clearWaitingQueue=function(e){return e===void 0&&(e={}),P.emit(5,e)},p.isActive=e=>{let t=!1;return G.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(t=!0)}),t},p.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const o=function(s,u){let{containerId:i}=u;const n=G.get(i||re);return n&&n.getToast(s)}(e,t);if(o){const{props:s,content:u}=o,i={...s,...t,toastId:t.toastId||e,updateId:Te()};i.toastId!==e&&(i.staleId=e);const n=i.render||u;delete i.render,W(n,i)}},0)},p.done=e=>{p.update(e,{progress:1})},p.onChange=e=>(P.on(4,e),()=>{P.off(4,e)}),p.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},p.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},P.on(2,e=>{re=e.containerId||e,G.set(re,e),V.forEach(t=>{P.emit(0,t.content,t.options)}),V=[]}).on(3,e=>{G.delete(e.containerId||e),G.size===0&&P.off(0).off(1).off(5)});const Se=()=>{const[e,t]=m.useState([]),[o,s]=m.useState(!1),{user:u}=ce(),{isLogged:i,verify_auth:n}=X(),r=(l,a)=>{l?p.success(a,{position:p.POSITION.TOP_RIGHT}):p.error(a,{position:p.POSITION.TOP_RIGHT})},b=async()=>{try{if(!(u!=null&&u.ucode))return;const a=(await D.get("/user/saved-news",u.ucode)).data.news;t(()=>a)}catch(l){console.log(l)}},v=async l=>{s(()=>!0),n();const{ucode:a}=u,y=l.title,c=await D.delete("/user/saved-news/delete/",a,{title:y});r(c.result,c.message),s(()=>!1)};return m.useEffect(()=>{b()},[o]),n(),U(ie,{children:[O(ue,{}),U("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",alignContent:"center",justifyContent:"space-around"},children:[O(ge,{onDelete:v,news:e,isLogged:i}),O(q,{})]})]})};const xe=()=>{var c,g,h,d,f;const e=ce(),{isLogged:t,verify_auth:o}=X(),s=le(),[u,i]=m.useState(!1),[n,r]=m.useState({name:(c=e.user)==null?void 0:c.name,surname:(g=e.user)==null?void 0:g.surname,email:(h=e.user)==null?void 0:h.email,age:(d=e.user)==null?void 0:d.age,language:(f=e.user)==null?void 0:f.language}),b=(E,w)=>{E?p.success(w,{position:p.POSITION.TOP_RIGHT}):p.error(w,{position:p.POSITION.TOP_RIGHT})},v=(E,w)=>{r(T=>({...T,[E]:w}))},l=async E=>{i(()=>!0),E.preventDefault();const w=await D.put("/users/update",n);o(),b(w.result,w.message),e.fetch_user(),i(()=>!1)},a=[{upperLabel:"Name",label:"Your Name",type:"text",name:"name",value:n.name},{upperLabel:"Surname",label:"Your Surname",type:"text",name:"surname",value:n.surname},{upperLabel:"Age",label:"Your Age",type:"number",name:"age",value:n.age},{upperLabel:"E-mail",label:"example@example.com",type:"email",name:"email",value:n.email}],y=[{value:"ar",label:"Arabic"},{value:"de",label:"German"},{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"he",label:"Hebrew"},{value:"it",label:"Italian"},{value:"nl",label:"Dutch"},{value:"no",label:"Norwegian"},{value:"pt",label:"Portuguese"},{value:"ru",label:"Russian"},{value:"se",label:"Swedish"},{value:"zh",label:"Chinese"}];return m.useEffect(()=>{!t&&s("/login")},[t]),U(ie,{children:[O(ue,{}),O(de,{loading:u,header:"Your Profile Info",field:a,onSubmit:l,onUserInput:v,btnLabel:"Salva",btnType:"submit",haveSelect:!0,selectData:y,defaultSelectValue:n.language||"es: Italian",upperSelect:"Chose your news language"}),O(q,{})]})};const Ae=()=>{const[e,t]=m.useState(!1),[o,s]=m.useState({name:"",surname:"",age:"",email:"",password:"","Repeat Password":""}),{isLogged:u}=X(),i=le();u===!0&&i("/");const n=(l,a)=>l?p.success(a,{position:p.POSITION.TOP_RIGHT}):p.error(a,{position:p.POSITION.TOP_RIGHT});return U(he,{about:"Background for a register page",children:[O(de,{header:"Register",field:[{upperLabel:"Name",label:"Your Name",type:"text",name:"name"},{upperLabel:"Surname",label:"Your Surname",type:"text",name:"surname"},{upperLabel:"Age",label:"Your Age",type:"number",name:"age"},{upperLabel:"E-mail",label:"example@example.com",type:"email",name:"email"},{upperLabel:"Password",label:"Your Password",type:"password",name:"password"},{upperLabel:"Confirm Password",label:"Repeat Password",type:"password",name:"Repeat Password"}],onSubmit:async l=>{t(()=>!0),l.preventDefault();const a=await D.post("/users/register",{...o});if(n(a.result,a.message),a.result)return i("/login");t(()=>!1)},onUserInput:(l,a)=>{s(y=>({...y,[l]:a}))},btnLabel:"Register",btnType:"submit",haveSecondBtn:!0,secondBtnLabel:"Login",onClick:l=>l.target.name==="login"&&i("/login"),loading:e}),O(q,{})]})};const ke=()=>{const e=le(),{isLogged:t}=X(),[o,s]=m.useState(!1),[u,i]=m.useState({email:"",password:""}),n=(a,y)=>{a?p.success(y,{position:p.POSITION.TOP_RIGHT}):p.error(y,{position:p.POSITION.TOP_RIGHT})},r=async a=>localStorage.setItem("token",a.data.token),b=(a,y)=>{i(c=>({...c,[a]:y}))},v=async a=>{s(()=>!0),a.preventDefault();const y=await D.post("/auth/login",{...u});if(n(y.result,y.message),y.result===!0)return await r(y),e("/");s(()=>!1)},l=[{upperLabel:"E-mail",label:"example@example.com",type:"email",name:"email"},{upperLabel:"Password",label:"Your Password",type:"password",name:"password"}];return m.useEffect(()=>{t===!0&&e("/")},[]),U(he,{about:"Background for a login page",children:[O(de,{header:"Login",field:l,onSubmit:v,onUserInput:b,btnLabel:"Login",btnType:"submit",haveSecondBtn:!0,secondBtnLabel:"Register",loading:o,onClick:a=>a.target.name==="register"&&e("/register")}),O(q,{})]})},Be=()=>{const[e,t]=m.useState([]),[o,s]=m.useState(!1),{isLogged:u,verify_auth:i}=X(),{user:n}=ce(),r=(l,a)=>{l?p.success(a,{position:p.POSITION.TOP_RIGHT}):p.error(a,{position:p.POSITION.TOP_RIGHT})},b=async l=>{i(),s(()=>!0),l.ucode=n.ucode;const a=await D.post("/user/saved-news/save",{news:l});r(a.result,a.message),s(()=>!1)},v=async()=>{s(()=>!0);const l=u&&(n!=null&&n.language)?await D.get("/news",n.language):await D.get("/news/"),a=(l==null?void 0:l.data)??[];t(()=>a),s(()=>!1)};return m.useEffect(()=>{v()},[]),U(ie,{children:[o&&O(be,{}),O(ue,{}),U("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[O(ge,{onSave:b,news:e,isLogged:u}),O(q,{})]})]})};export{ke as Login,Be as NewsList,xe as Profile,Ae as Register,Se as SavedNews};