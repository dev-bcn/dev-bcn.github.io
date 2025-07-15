import{i,q as a,y as d,e as s,m as T,h as b,j as e,S as f,L as h,aT as k,r as u,aP as v,M as g,aG as S,U as E,n as I,d as $}from"./index-B94Oy_eG.js";import{NotFoundError as L}from"./NotFoundError-B5sMpOV1.js";import{c as x}from"./2023-B5vIzsTA.js";import{b as D,s as A}from"./useFetchTalks-fr4TAQC-.js";import{T as _}from"./Tag-DfKRCG02.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="bc1894ac-b6a0-4007-95d6-47392af00a68",t._sentryDebugIdIdentifier="sentry-dbid-bc1894ac-b6a0-4007-95d6-47392af00a68")}catch{}const R=i.div`
  padding-top: 2rem;
`,B=i.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${a}px) {
    justify-content: space-between;
  }
`,y=i(d.img)`
  display: none;

  @media (min-width: ${a}px) {
    width: 10%;
    display: flex;
    align-items: end;
  }
`,U=i(d.h1)`
  font-weight: 600;
  font-size: 2rem;
  color: ${s.DARK_BLUE};
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${a}px) {
    text-align: left;
  }
`,C=i.p`
  color: ${s.DARK_BLUE};
  text-align: left;
  width: 100%;
  padding-top: 10px;

  @media only screen and (min-width: ${a}px) {
    padding-left: 10px;
  }
`,N=i.p`
  margin-top: 10px;
  color: ${s.LIGHT_BLUE};

  & strong {
    color: ${s.DARK_BLUE};
  }
`,K=i(d.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media only screen and (min-width: ${a}px) {
    align-items: start;
    padding: 0 4rem;
  }
`,M=i(d.div)`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: ${a}px) {
    align-items: start;
    padding: 0 calc(10% + 2rem);
  }
`,H=i.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
`,V=i.div`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${s.DARK_BLUE};
  color: ${s.WHITE};
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
`,F=i.img`
  display: none;

  @media only screen and (min-width: ${a}px) {
    display: flex;
    width: 10%;
  }
`,G=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: ${a}px) {
    flex-direction: row;
    padding: 3rem 0 4rem 3rem;
  }
`,O=i.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`,P=i.div`
  width: 50%;
  text-align: center;

  & a {
    text-decoration: none;
    color: ${s.LIGHT_BLUE};
  }

  @media only screen and (min-width: ${a}px) {
    margin-bottom: 1rem;
  }
`,W=i.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${a}px) {
    margin-bottom: 0;
  }
`,z=t=>{let n;return t<g?n=250:t>=g&&t<a?n=300:t>=a&&t<S?n=450:n=600,n.toString()},q={initial:{x:-100,opacity:0},animate:{x:0,opacity:1}},Y={initial:{x:100,opacity:0},animate:{x:0,opacity:1}},J={initial:{y:100,opacity:0},animate:{y:0,opacity:1}},Q={initial:{opacity:0},animate:{opacity:1,transition:{duration:1}}},X=({meeting:t,speakers:n})=>{const{width:c}=T();b(t.title,x.edition);const o={...t,speakers:n};return e.jsx(f,{color:s.WHITE,children:e.jsxs(R,{className:"MeetingDetail",children:[e.jsxs(B,{className:"TitleContainer",children:[e.jsx(y,{initial:"initial",animate:"animate",variants:q,src:"/images/LessThanBlueIcon.svg"}),e.jsxs(K,{initial:"initial",animate:"animate",variants:J,children:[e.jsxs(U,{children:["/ ",t.title]}),e.jsx("h4",{children:"Description"}),e.jsx(C,{children:t.description}),e.jsxs(N,{children:[`${t.type} ${t.level}`,e.jsx("strong",{children:" Track: "}),t.track,t.slidesURL!==""&&e.jsx("p",{style:{textAlign:"left",marginTop:"0.6rem"},children:e.jsxs("a",{href:t.slidesURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:s.DARK_BLUE},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#002454",height:16,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})," ","Slides"]})})]})]}),e.jsx(y,{initial:"initial",animate:"animate",variants:Y,src:"/images/MoreThanBlueIcon.svg"})]}),e.jsxs(M,{initial:"initial",animate:"animate",variants:Q,children:[t.videoUrl&&e.jsx("iframe",{width:"100%",height:z(c),src:t.videoUrl,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),e.jsx(H,{children:t.videoTags?.map(r=>e.jsx(_,{text:r},r))}),e.jsx("div",{style:{width:"100%",textAlign:"center"},children:e.jsx(h,{to:k,style:{color:s.MAGENTA,fontWeight:"bold",textAlign:"center",textDecoration:"none"},children:"Go back"})})]}),e.jsxs(V,{className:"speaker-details-Container",children:[e.jsx(F,{src:"/images/LessThanIconWhite.svg"}),e.jsx(G,{className:"details-container-inner",children:e.jsx(O,{children:o.speakers?.map(r=>e.jsxs(P,{className:"DetailsTitle",children:[e.jsx(u.Suspense,{fallback:e.jsx("h1",{children:"loading"}),children:e.jsx("img",{src:r.speakerImage,alt:r.fullName,style:{width:"128px",margin:"10px",borderRadius:"12px"}})}),e.jsx(W,{children:e.jsx(h,{to:`${v}/${r.id}`,children:r.fullName})})]},r.id))})})]})]})})},Z=i.div`
  background-color: ${s.WHITE};
`,oe=()=>{const{id:t}=E(),{isLoading:n,error:c,data:o}=D(t,"2023"),{data:r}=I("2023"),j=(p=>p?.speakers?.map(w=>w.id))(o),l=r?.filter(p=>j?.includes(p.id)),m=A(o);return u.useEffect(()=>{document.title=`${o?.title} - DevBcn - ${x.edition}`},[o]),$(c),e.jsx(Z,{children:e.jsxs(f,{color:s.WHITE,marginTop:4,children:[n&&e.jsx("h2",{children:"Loading"}),!n&&l!==void 0&&l.length>0&&m!==void 0&&e.jsx(X,{speakers:l,meeting:m,openFeedbackId:x.openFeedbackId}),!n&&(!l||l.length===0||!m)&&e.jsx(L,{message:"Session"})]})})};export{oe as default};
//# sourceMappingURL=TalkDetailContainer2023-DESlDFmR.js.map
