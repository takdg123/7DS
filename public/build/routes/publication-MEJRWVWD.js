import{a as d}from"/build/_shared/chunk-AEU4PSZ2.js";import{a as g}from"/build/_shared/chunk-X4KODEMR.js";import"/build/_shared/chunk-3RVWVZ2O.js";import{a as u}from"/build/_shared/chunk-NYOPF2AR.js";import{a as m}from"/build/_shared/chunk-ARMGUE6S.js";import{c as l,d as w,e as p}from"/build/_shared/chunk-DWFMXSZ6.js";var r=l(w(),1);var t=l(p(),1),N=()=>{let k={backgroundSize:"cover",backgroundRepeat:"repeat",backgroundImage:'url("./img/news.png")',backgroundAttachment:"fixed",backgroundPosition:"50% 0px"},[i,b]=(0,r.useState)(1),[a,f]=(0,r.useState)(!1),s=5,o=d.news.filter(e=>e.type==="publication"),x=Math.ceil(o.length/s),c=i*s,h=c-s,P=o.slice(h,c),y=e=>b(e);return(0,t.jsxs)("div",{style:{background:"#fff"},children:[(0,t.jsx)(m,{manu:"manuPaper",fixed:!0}),(0,t.jsx)("div",{className:"mx-auto w-full main-container",children:(0,t.jsxs)("div",{className:"p-10 max-w-screen-lg mx-auto",children:[(0,t.jsxs)("div",{className:"justify-between mb-5",style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,t.jsx)("p",{className:"mt-4 text-sm leading-7 text-gray-500 font-regular",style:{textAlign:"center"},children:"Meet our works"}),(0,t.jsx)("h3",{className:"text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900",style:{textAlign:"center",fontWeight:"700",color:"var(--pickled-bluewood-900)"},children:(0,t.jsx)("span",{style:{color:"var(--pickled-bluewood-600)"},children:"Publications"})})]}),(0,t.jsx)("div",{className:"w-full",style:{display:"flex",justifyContent:"flex-end"},children:(0,t.jsx)("button",{style:{textAlign:"right"},onClick:()=>f(!a),children:a?"Hide Abstract":"Show Abstract"})}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center",style:{maxWidth:"1200px",margin:"0 auto",marginBottom:"5rem",textAlign:"center",color:"black"},children:[o.map((e,n)=>(n=n+1,(0,t.jsxs)("div",{className:"w-full pub-container p-6 m-3",style:{boxShadow:"0px 15px 35px rgba(227, 252, 239, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07)"},children:[(0,t.jsxs)("div",{className:"pr-5 p-cont-1",children:[(0,t.jsx)("p",{className:"pb-3",style:{fontSize:"24px",lineHeight:"1.2",color:"var(--pickled-bluewood-600)",fontWeight:500},children:(0,t.jsx)("a",{href:e.webpage,target:"_blank",children:e.title})}),a&&(0,t.jsx)("p",{className:"text-content",style:{fontSize:"12pt"},children:e.abstract}),!a&&(0,t.jsxs)("p",{className:"pb-3",children:[(0,t.jsx)("span",{className:"text-bluewood-900",style:{fontWeight:700},children:"Authors:"})," ",e.author]})]}),(0,t.jsxs)("div",{className:"p-cont-2",style:{textAlign:"left"},children:[a&&(0,t.jsxs)("p",{className:"pb-3",children:[(0,t.jsx)("span",{className:"text-bluewood-900",style:{fontWeight:700},children:"Authors:"})," ",e.author]}),(0,t.jsxs)("p",{className:"pb-3",children:[(0,t.jsx)("span",{className:"text-bluewood-900",style:{fontWeight:700},children:"Journal:"})," ",e.journal]}),(0,t.jsxs)("p",{className:"pb-3",children:[(0,t.jsx)("span",{className:"text-bluewood-900",style:{fontWeight:700},children:"Date:"})," ",e.date]}),(0,t.jsxs)("p",{className:"pb-3",children:[(0,t.jsx)("span",{className:"text-bluewood-900",style:{fontWeight:700},children:"doi:"})," ",(0,t.jsx)("a",{href:e.webpage,target:"_blank",children:e.doi})]}),(0,t.jsxs)("p",{className:"pb-3",children:[(0,t.jsx)("span",{className:"text-bluewood-900",style:{fontWeight:700},children:"preprint:"})," ",(0,t.jsx)("a",{href:e.webpage2,target:"_blank",children:e.preprint})]})]})]},n))),(0,t.jsx)("div",{className:"flex justify-center mt-4",children:(0,t.jsx)(g,{currentPage:i,totalPages:x,onPageChange:y})})]})]})}),(0,t.jsx)(u,{})]})},v=N;export{v as default};