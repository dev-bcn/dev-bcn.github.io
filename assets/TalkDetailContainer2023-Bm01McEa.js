import{k as i,s as a,z as d,f as s,n as T,i as b,j as e,S as f,L as h,aU as k,r as u,aQ as v,M as g,aJ as S,W as E,X as I,o as $,e as L}from"./index-DqkFtiQn.js";import{NotFoundError as D}from"./NotFoundError-CMCGhr2F.js";import{c as x}from"./2023-B5vIzsTA.js";import{T as A}from"./Tag-CPbZFnRZ.js";import{s as _}from"./sessionsAdapter-CTi-EZpP.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="cf261904-e667-4c65-add6-0a8cfbf4b21a",t._sentryDebugIdIdentifier="sentry-dbid-cf261904-e667-4c65-add6-0a8cfbf4b21a")}catch{}const R=i.div`
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
`,W=i.div`
  width: 50%;
  text-align: center;

  & a {
    text-decoration: none;
    color: ${s.LIGHT_BLUE};
  }

  @media only screen and (min-width: ${a}px) {
    margin-bottom: 1rem;
  }
`,P=i.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${a}px) {
    margin-bottom: 0;
  }
`,z=t=>{let n;return t<g?n=250:t>=g&&t<a?n=300:t>=a&&t<S?n=450:n=600,n.toString()},J={initial:{x:-100,opacity:0},animate:{x:0,opacity:1}},Q={initial:{x:100,opacity:0},animate:{x:0,opacity:1}},X={initial:{y:100,opacity:0},animate:{y:0,opacity:1}},Y={initial:{opacity:0},animate:{opacity:1,transition:{duration:1}}},q=({meeting:t,speakers:n})=>{const{width:c}=T();b(t.title,x.edition);const o={...t,speakers:n};return e.jsx(f,{color:s.WHITE,children:e.jsxs(R,{className:"MeetingDetail",children:[e.jsxs(B,{className:"TitleContainer",children:[e.jsx(y,{initial:"initial",animate:"animate",variants:J,src:"/images/LessThanBlueIcon.svg"}),e.jsxs(K,{initial:"initial",animate:"animate",variants:X,children:[e.jsxs(U,{children:["/ ",t.title]}),e.jsx("h4",{children:"Description"}),e.jsx(C,{children:t.description}),e.jsxs(N,{children:[`${t.type} ${t.level}`,e.jsx("strong",{children:" Track: "}),t.track,t.slidesURL!==""&&e.jsx("p",{style:{textAlign:"left",marginTop:"0.6rem"},children:e.jsxs("a",{href:t.slidesURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:s.DARK_BLUE},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#002454",height:16,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})," ","Slides"]})})]})]}),e.jsx(y,{initial:"initial",animate:"animate",variants:Q,src:"/images/MoreThanBlueIcon.svg"})]}),e.jsxs(M,{initial:"initial",animate:"animate",variants:Y,children:[t.videoUrl&&e.jsx("iframe",{width:"100%",height:z(c),src:t.videoUrl,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),e.jsx(H,{children:t.videoTags?.map(r=>e.jsx(A,{text:r},r))}),e.jsx("div",{style:{width:"100%",textAlign:"center"},children:e.jsx(h,{to:k,style:{color:s.MAGENTA,fontWeight:"bold",textAlign:"center",textDecoration:"none"},children:"Go back"})})]}),e.jsxs(V,{className:"speaker-details-Container",children:[e.jsx(F,{src:"/images/LessThanIconWhite.svg"}),e.jsx(G,{className:"details-container-inner",children:e.jsx(O,{children:o.speakers?.map(r=>e.jsxs(W,{className:"DetailsTitle",children:[e.jsx(u.Suspense,{fallback:e.jsx("h1",{children:"loading"}),children:e.jsx("img",{src:r.speakerImage,alt:r.fullName,style:{width:"128px",margin:"10px",borderRadius:"12px"}})}),e.jsx(P,{children:e.jsx(h,{to:`${v}/${r.id}`,children:r.fullName})})]},r.id))})})]})]})})},Z=i.div`
  background-color: ${s.WHITE};
`,oe=()=>{const{id:t}=E(),{isLoading:n,error:c,data:o}=I(t,"2023"),{data:r}=$("2023"),j=(p=>p?.speakers?.map(w=>w.id))(o),l=r?.filter(p=>j?.includes(p.id)),m=_(o);return u.useEffect(()=>{document.title=`${o?.title} - DevBcn - ${x.edition}`},[o]),L(c),e.jsx(Z,{children:e.jsxs(f,{color:s.WHITE,marginTop:4,children:[n&&e.jsx("h2",{children:"Loading"}),!n&&l!==void 0&&l.length>0&&m!==void 0&&e.jsx(q,{speakers:l,meeting:m,openFeedbackId:x.openFeedbackId}),!n&&(!l||l.length===0||!m)&&e.jsx(D,{message:"Session"})]})})};export{oe as default};
//# sourceMappingURL=TalkDetailContainer2023-Bm01McEa.js.map
