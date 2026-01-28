import{a as t,b as a,m as c,C as s,d as T,j as e,L as h,ac as b,r as y,a5 as v,M as g,y as S,n as k}from"./index-DxZQvJw7.js";import{NotFoundError as E}from"./NotFoundError-LOe4l5pI.js";import{S as u}from"./SectionWrapper-Bk7haGVg.js";import{u as I}from"./useFetchSpeakers-9Egoatwq.js";import{a as $}from"./useFetchTalks-XDOFDqTK.js";import{u as L}from"./useSentryErrorReport-CcbEP86-.js";import{s as D}from"./sessionsAdapter-Dk8l4-EX.js";import{T as A}from"./Tag-CJEg7KVn.js";import{u as _}from"./useDocumentTitleUpdate-Cw4jPnc_.js";import{c as x}from"./2023-CQMPa7MP.js";import"./ActionButtons-DJFgl2st.js";import"./Button-DYsS5_Ov.js";import"./index-B31muZdw.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"04b4d4293ccff9bffe89eef70b331b85846896f6"};var n=new i.Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="e974d673-93b8-4455-936a-97d33172c0a8",i._sentryDebugIdIdentifier="sentry-dbid-e974d673-93b8-4455-936a-97d33172c0a8")}catch{}})();const R=t.div`
  padding-top: 2rem;
`,B=t.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${a}px) {
    justify-content: space-between;
  }
`,f=t(c.img)`
  display: none;

  @media (min-width: ${a}px) {
    width: 10%;
    display: flex;
    align-items: end;
  }
`,C=t(c.h1)`
  font-weight: 600;
  font-size: 2rem;
  color: ${s.DARK_BLUE};
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${a}px) {
    text-align: left;
  }
`,N=t.p`
  color: ${s.DARK_BLUE};
  text-align: left;
  width: 100%;
  padding-top: 10px;

  @media only screen and (min-width: ${a}px) {
    padding-left: 10px;
  }
`,U=t.p`
  margin-top: 10px;
  color: ${s.LIGHT_BLUE};

  & strong {
    color: ${s.DARK_BLUE};
  }
`,K=t(c.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media only screen and (min-width: ${a}px) {
    align-items: start;
    padding: 0 4rem;
  }
`,M=t(c.div)`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: ${a}px) {
    align-items: start;
    padding: 0 calc(10% + 2rem);
  }
`,H=t.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
`,V=t.div`
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
`,F=t.img`
  display: none;

  @media only screen and (min-width: ${a}px) {
    display: flex;
    width: 10%;
  }
`,G=t.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: ${a}px) {
    flex-direction: row;
    padding: 3rem 0 4rem 3rem;
  }
`,O=t.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`,P=t.div`
  width: 50%;
  text-align: center;

  & a {
    text-decoration: none;
    color: ${s.LIGHT_BLUE};
  }

  @media only screen and (min-width: ${a}px) {
    margin-bottom: 1rem;
  }
`,W=t.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${a}px) {
    margin-bottom: 0;
  }
`,z=i=>{let n;return i<g?n=250:i>=g&&i<a?n=300:i>=a&&i<S?n=450:n=600,n.toString()},Y={initial:{x:-100,opacity:0},animate:{x:0,opacity:1}},q={initial:{x:100,opacity:0},animate:{x:0,opacity:1}},J={initial:{y:100,opacity:0},animate:{y:0,opacity:1}},Q={initial:{opacity:0},animate:{opacity:1,transition:{duration:1}}},X=({meeting:i,speakers:n})=>{const{width:d}=T();_(i.title,x.edition);const o={...i,speakers:n};return e.jsx(u,{color:s.WHITE,children:e.jsxs(R,{className:"MeetingDetail",children:[e.jsxs(B,{className:"TitleContainer",children:[e.jsx(f,{initial:"initial",animate:"animate",variants:Y,src:"/images/LessThanBlueIcon.svg"}),e.jsxs(K,{initial:"initial",animate:"animate",variants:J,children:[e.jsxs(C,{children:["/ ",i.title]}),e.jsx("h4",{children:"Description"}),e.jsx(N,{children:i.description}),e.jsxs(U,{children:[`${i.type} ${i.level}`,e.jsx("strong",{children:" Track: "}),i.track,i.slidesURL!==""&&e.jsx("p",{style:{textAlign:"left",marginTop:"0.6rem"},children:e.jsxs("a",{href:i.slidesURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:s.DARK_BLUE},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#002454",height:16,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})," ","Slides"]})})]})]}),e.jsx(f,{initial:"initial",animate:"animate",variants:q,src:"/images/MoreThanBlueIcon.svg"})]}),e.jsxs(M,{initial:"initial",animate:"animate",variants:Q,children:[i.videoUrl&&e.jsx("iframe",{width:"100%",height:z(d),src:i.videoUrl,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),e.jsx(H,{children:i.videoTags?.map(r=>e.jsx(A,{text:r},r))}),e.jsx("div",{style:{width:"100%",textAlign:"center"},children:e.jsx(h,{to:b,style:{color:s.MAGENTA,fontWeight:"bold",textAlign:"center",textDecoration:"none"},children:"Go back"})})]}),e.jsxs(V,{className:"speaker-details-Container",children:[e.jsx(F,{src:"/images/LessThanIconWhite.svg"}),e.jsx(G,{className:"details-container-inner",children:e.jsx(O,{children:o.speakers?.map(r=>e.jsxs(P,{className:"DetailsTitle",children:[e.jsx(y.Suspense,{fallback:e.jsx("h1",{children:"loading"}),children:e.jsx("img",{src:r.speakerImage,alt:r.fullName,style:{width:"128px",margin:"10px",borderRadius:"12px"}})}),e.jsx(W,{children:e.jsx(h,{to:`${v}/${r.id}`,children:r.fullName})})]},r.id))})})]})]})})},Z=t.div`
  background-color: ${s.WHITE};
`,ge=()=>{const{id:i}=k(),{isLoading:n,error:d,data:o}=$(i,"2023"),{data:r}=I("2023"),j=(p=>p?.speakers?.map(w=>w.id))(o),l=r?.filter(p=>j?.includes(p.id)),m=D(o);return y.useEffect(()=>{document.title=`${o?.title} - DevBcn - ${x.edition}`},[o]),L(d),e.jsx(Z,{children:e.jsxs(u,{color:s.WHITE,marginTop:4,children:[n&&e.jsx("h2",{children:"Loading"}),!n&&l!==void 0&&l.length>0&&m!==void 0&&e.jsx(X,{speakers:l,meeting:m,openFeedbackId:x.openFeedbackId}),!n&&(!l||l.length===0||!m)&&e.jsx(E,{message:"Session"})]})})};export{ge as default};
//# sourceMappingURL=TalkDetailContainer2023-CFUvDgxI.js.map
