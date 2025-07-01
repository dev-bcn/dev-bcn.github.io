import{h as t,p as a,x as m,e as r,l as v,g as S,j as e,S as w,L as f,aZ as E,r as T,aV as I,M as u,aM as $,K as L,m as k,d as D}from"./index-B8kLmMtS.js";import{NotFoundError as A}from"./NotFoundError-DBcmtvGr.js";import{c as y}from"./2023-B5vIzsTA.js";import{b as _,s as R}from"./useFetchTalks-C7oUtwIm.js";import{T as B}from"./Tag-CeDYO_OR.js";try{let i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new i.Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="d53452f2-587d-49a2-a9cd-8d1bcc0ee49e",i._sentryDebugIdIdentifier="sentry-dbid-d53452f2-587d-49a2-a9cd-8d1bcc0ee49e")}catch{}const C=t.div`
  padding-top: 2rem;
`,N=t.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${a}px) {
    justify-content: space-between;
  }
`,j=t(m.img)`
  display: none;

  @media (min-width: ${a}px) {
    width: 10%;
    display: flex;
    align-items: end;
  }
`,U=t(m.h1)`
  font-weight: 600;
  font-size: 2rem;
  color: ${r.DARK_BLUE};
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${a}px) {
    text-align: left;
  }
`,K=t.p`
  color: ${r.DARK_BLUE};
  text-align: left;
  width: 100%;
  padding-top: 10px;

  @media only screen and (min-width: ${a}px) {
    padding-left: 10px;
  }
`,M=t.p`
  margin-top: 10px;
  color: ${r.LIGHT_BLUE};

  & strong {
    color: ${r.DARK_BLUE};
  }
`,H=t(m.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media only screen and (min-width: ${a}px) {
    align-items: start;
    padding: 0 4rem;
  }
`,V=t(m.div)`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: ${a}px) {
    align-items: start;
    padding: 0 calc(10% + 2rem);
  }
`,F=t.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
`,G=t.div`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${r.DARK_BLUE};
  color: ${r.WHITE};
  width: 100%;
  padding: 1.5rem 1.5rem 3rem;

  margin-bottom: 2rem;

  @media only screen and (min-width: ${a}px) {
    justify-content: start;
    align-items: start;
    padding: 0;
  }

  @media only screen and (max-width: ${a}px) {
    margin-bottom: 25rem;
  }
`,O=t.img`
  display: none;

  @media only screen and (min-width: ${a}px) {
    display: flex;
    width: 10%;
  }
`,P=t.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: ${a}px) {
    flex-direction: row;
    padding: 3rem 0 4rem 3rem;
  }
`,W=t.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`,z=t.div`
  width: 50%;
  text-align: center;

  & a {
    text-decoration: none;
    color: ${r.LIGHT_BLUE};
  }

  @media only screen and (min-width: ${a}px) {
    margin-bottom: 1rem;
  }
`,Y=t.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${a}px) {
    margin-bottom: 0;
  }
`,Z=i=>{let n;return i<u?n=250:i>=u&&i<a?n=300:i>=a&&i<$?n=450:n=600,n.toString()},q={initial:{x:-100,opacity:0},animate:{x:0,opacity:1}},J={initial:{x:100,opacity:0},animate:{x:0,opacity:1}},Q={initial:{y:100,opacity:0},animate:{y:0,opacity:1}},X={initial:{opacity:0},animate:{opacity:1,transition:{duration:1}}},ee=({meeting:i,speakers:n})=>{var l,x;const{width:p}=v();S(i.title,y.edition);const o={...i,speakers:n};return e.jsx(w,{color:r.WHITE,children:e.jsxs(C,{className:"MeetingDetail",children:[e.jsxs(N,{className:"TitleContainer",children:[e.jsx(j,{initial:"initial",animate:"animate",variants:q,src:"/images/LessThanBlueIcon.svg"}),e.jsxs(H,{initial:"initial",animate:"animate",variants:Q,children:[e.jsxs(U,{children:["/ ",i.title]}),e.jsx("h4",{children:"Description"}),e.jsx(K,{children:i.description}),e.jsxs(M,{children:[`${i.type} ${i.level}`,e.jsx("strong",{children:" Track: "}),i.track,i.slidesURL!==""&&e.jsx("p",{style:{textAlign:"left",marginTop:"0.6rem"},children:e.jsxs("a",{href:i.slidesURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:r.DARK_BLUE},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#002454",height:16,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})," ","Slides"]})})]})]}),e.jsx(j,{initial:"initial",animate:"animate",variants:J,src:"/images/MoreThanBlueIcon.svg"})]}),e.jsxs(V,{initial:"initial",animate:"animate",variants:X,children:[i.videoUrl&&e.jsx("iframe",{width:"100%",height:Z(p),src:i.videoUrl,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),e.jsx(F,{children:(l=i.videoTags)==null?void 0:l.map(s=>e.jsx(B,{text:s},s))}),e.jsx("div",{style:{width:"100%",textAlign:"center"},children:e.jsx(f,{to:E,style:{color:r.MAGENTA,fontWeight:"bold",textAlign:"center",textDecoration:"none"},children:"Go back"})})]}),e.jsxs(G,{className:"speaker-details-Container",children:[e.jsx(O,{src:"/images/LessThanIconWhite.svg"}),e.jsx(P,{className:"details-container-inner",children:e.jsx(W,{children:(x=o.speakers)==null?void 0:x.map(s=>e.jsxs(z,{className:"DetailsTitle",children:[e.jsx(T.Suspense,{fallback:e.jsx("h1",{children:"loading"}),children:e.jsx("img",{src:s.speakerImage,alt:s.fullName,style:{width:"128px",margin:"10px",borderRadius:"12px"}})}),e.jsx(Y,{children:e.jsx(f,{to:`${I}/${s.id}`,children:s.fullName})})]},s.id))})})]})]})})},ie=t.div`
  background-color: ${r.WHITE};
`,oe=()=>{const{id:i}=L(),{isLoading:n,error:p,data:o}=_(i,"2023"),{data:l}=k("2023"),s=(c=>{const g=c==null?void 0:c.speakers;return g==null?void 0:g.map(b=>b.id)})(o),d=l==null?void 0:l.filter(c=>s==null?void 0:s.includes(c.id)),h=R(o);return T.useEffect(()=>{document.title=`${o==null?void 0:o.title} - DevBcn - ${y.edition}`},[o]),D(p),e.jsx(ie,{children:e.jsxs(w,{color:r.WHITE,marginTop:4,children:[n&&e.jsx("h2",{children:"Loading"}),!n&&d!==void 0&&d.length>0&&h!==void 0&&e.jsx(ee,{speakers:d,meeting:h,openFeedbackId:y.openFeedbackId}),!n&&(!d||d.length===0||!h)&&e.jsx(A,{message:"Session"})]})})};export{oe as default};
//# sourceMappingURL=TalkDetailContainer2023-DMwYcO64.js.map
