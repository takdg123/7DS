import{e as l}from"/build/_shared/chunk-UBUR7GQJ.js";import{a as s}from"/build/_shared/chunk-NYOPF2AR.js";import{a as i}from"/build/_shared/chunk-ARMGUE6S.js";import{c as o,d as w,e as r}from"/build/_shared/chunk-DWFMXSZ6.js";var a=o(w(),1);var e=o(r(),1),f=()=>{let d={backgroundSize:"cover",backgroundRepeat:"repeat",backgroundImage:'url("./img/survey.jpeg")',backgroundAttachment:"fixed",backgroundPosition:"50% 0px"},[c,m]=(0,a.useState)("750px"),[u,n]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t=()=>{window.innerWidth<1500?n(!1):n(!0)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),(0,a.useEffect)(()=>{let t=()=>{let p=window.scrollY,v=window.innerHeight,g=`calc(750px - ${p*.5/v*100}%)`;m(g)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),(0,e.jsxs)("div",{style:{background:"#fff"},children:[(0,e.jsx)(i,{manu:"manu7ds"}),(0,e.jsx)("div",{style:d,children:(0,e.jsx)("div",{style:{height:"700px"}})}),u&&(0,e.jsx)("div",{className:"submenu",style:{top:c},children:(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{className:"p-2 active",children:(0,e.jsx)("a",{href:"#",children:"Survey"})}),(0,e.jsx)("li",{className:"p-2",children:(0,e.jsx)("a",{href:"/status",children:"Status"})}),(0,e.jsx)("li",{className:"p-2",children:(0,e.jsx)("a",{href:"/group",children:"Working Group"})})]})}),(0,e.jsx)("div",{className:"mx-auto w-full main-container",children:(0,e.jsx)("div",{className:"p-10 max-w-screen-lg mx-auto",children:(0,e.jsxs)("div",{className:"justify-between mb-5",style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,e.jsx)("p",{className:"mt-4 text-sm leading-7 text-gray-500 font-regular",style:{textAlign:"center"},children:"Wide-area and High-cadence Survey"}),(0,e.jsxs)("h3",{className:"mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900",style:{textAlign:"center",fontWeight:"700",color:"var(--pickled-bluewood-900)"},children:["Overview of ",(0,e.jsx)("span",{style:{color:"var(--pickled-bluewood-600)"},children:"7DS"})]}),(0,e.jsx)("p",{className:"text-content",children:l})]})})}),(0,e.jsx)(s,{})]})},x=f;export{x as default};