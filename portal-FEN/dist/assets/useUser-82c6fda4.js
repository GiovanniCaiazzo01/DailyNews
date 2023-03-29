import{a as e,g as v,r as h,j as u,F as b,L as f,U as g}from"./index-94378282.js";const m=()=>e("div",{className:"loader-container",children:e("div",{id:"loader"})}),k=()=>{const{pathname:r}=v();return e("div",{id:"page-header",children:{"/":"Latest News","/profile":"Your Profile","/saved":"Your Saved News"}[r]})},C=({about:r,children:n})=>{const[s,d]=h.useState();return h.useEffect(()=>{d(()=>`https://picsum.photos/id/${Math.floor(Math.random()*100)+1}/1920/1080`)},[]),u("section",{className:"background",about:r,children:[e("img",{src:s,alt:"background",loading:"lazy",className:"background-img"}),n]})},N=({label:r,type:n,name:s,onUserInput:d,value:t})=>{const[i,a]=h.useState(!0),c=(l,p)=>{d(l,p),a(p!=="")};return e("div",{className:i?"input":" input input-error",children:e("input",{name:s,type:n,value:t,placeholder:i?r:"Please fill this field",onChange:l=>c(l.target.name,l.target.value),onFocus:()=>{i||a(!0)}})})},P=({onDelete:r,onSave:n,news:s,isLogged:d})=>{const{pathname:t}=v(),i=(a,c)=>{const o=a?a.split(" "):"";return o?o.slice(0,c).join(" ")+(o.length>c?"...":""):""};return e(b,{children:s?s.map(a=>u("div",{id:"card-container",children:[u("div",{id:"card-header",children:[e("div",{id:"card-header-text",children:e("h3",{children:i(a.title,20)})}),e("div",{id:"card-date",children:a.pubication_date})]}),e(f,{to:a.link,target:"_blank",children:e("div",{id:"card-image",children:e("img",{src:a.image_url?a.image_url:`https://picsum.photos/id/${Math.floor(Math.random()*100)+1}/1920/1080`})})},a.title),d&&t==="/"&&e("div",{id:"card-footer",children:e("div",{id:"icon-container",children:e("i",{id:"save",class:"bx bx-save",onClick:()=>n(a)})})}),d&&t==="/saved"&&e("div",{id:"card-footer",children:e("div",{id:"icon-container",children:e("i",{id:"delete",class:"bx bx-trash",onClick:()=>r(a)})})})]})):""})},L=({label:r,type:n,name:s,onClick:d,loading:t})=>e("div",{children:u("button",{className:`button normal-btn ${t?"disabled":""}`,name:s,type:n,onClick:d,disabled:!!t,children:[t?"":r,t&&e(m,{})]})}),j=()=>h.useContext(g);export{L as B,P as C,N as I,m as L,k as P,C as a,j as u};