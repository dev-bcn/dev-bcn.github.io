import{k as t,s as a,y as d,f as s,n as j,i as b,j as e,S as y,L as f,aT as v,r as u,aP as S,M as h,aI as k,V as E,W as I,o as $,e as L}from"./index-CDY7Yx3m.js";import{NotFoundError as D}from"./NotFoundError-CZg03TPd.js";import{c as x}from"./2023-IDdDToYR.js";import{T as A}from"./Tag-Cwu7fYpl.js";import{s as _}from"./sessionsAdapter-BFZ9MCGX.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"d5ea6f272b4c2fd77f0fe569599f29d127911460"}}catch{}})();try{(function(){var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new i.Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="10dc9e9d-77e7-457a-a01e-f215f8971871",i._sentryDebugIdIdentifier="sentry-dbid-10dc9e9d-77e7-457a-a01e-f215f8971871")})()}catch{}const R=t.div`
  padding-top: 2rem;
`,B=t.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${a}px) {
    justify-content: space-between;
  }
`,g=t(d.img)`
  display: none;

  @media (min-width: ${a}px) {
    width: 10%;
    display: flex;
    align-items: end;
  }
`,N=t(d.h1)`
  font-weight: 600;
  font-size: 2rem;
  color: ${s.DARK_BLUE};
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${a}px) {
    text-align: left;
  }
`,C=t.p`
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
`,K=t(d.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media only screen and (min-width: ${a}px) {
    align-items: start;
    padding: 0 4rem;
  }
`,M=t(d.div)`
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
`,z=i=>{let n;return i<h?n=250:i>=h&&i<a?n=300:i>=a&&i<k?n=450:n=600,n.toString()},Y={initial:{x:-100,opacity:0},animate:{x:0,opacity:1}},q={initial:{x:100,opacity:0},animate:{x:0,opacity:1}},J={initial:{y:100,opacity:0},animate:{y:0,opacity:1}},Q={initial:{opacity:0},animate:{opacity:1,transition:{duration:1}}},X=({meeting:i,speakers:n})=>{const{width:c}=j();b(i.title,x.edition);const r={...i,speakers:n};return e.jsx(y,{color:s.WHITE,children:e.jsxs(R,{className:"MeetingDetail",children:[e.jsxs(B,{className:"TitleContainer",children:[e.jsx(g,{initial:"initial",animate:"animate",variants:Y,src:"/images/LessThanBlueIcon.svg"}),e.jsxs(K,{initial:"initial",animate:"animate",variants:J,children:[e.jsxs(N,{children:["/ ",i.title]}),e.jsx("h4",{children:"Description"}),e.jsx(C,{children:i.description}),e.jsxs(U,{children:[`${i.type} ${i.level}`,e.jsx("strong",{children:" Track: "}),i.track,i.slidesURL!==""&&e.jsx("p",{style:{textAlign:"left",marginTop:"0.6rem"},children:e.jsxs("a",{href:i.slidesURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:s.DARK_BLUE},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#002454",height:16,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})," ","Slides"]})})]})]}),e.jsx(g,{initial:"initial",animate:"animate",variants:q,src:"/images/MoreThanBlueIcon.svg"})]}),e.jsxs(M,{initial:"initial",animate:"animate",variants:Q,children:[i.videoUrl&&e.jsx("iframe",{width:"100%",height:z(c),src:i.videoUrl,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),e.jsx(H,{children:i.videoTags?.map(o=>e.jsx(A,{text:o},o))}),e.jsx("div",{style:{width:"100%",textAlign:"center"},children:e.jsx(f,{to:v,style:{color:s.MAGENTA,fontWeight:"bold",textAlign:"center",textDecoration:"none"},children:"Go back"})})]}),e.jsxs(V,{className:"speaker-details-Container",children:[e.jsx(F,{src:"/images/LessThanIconWhite.svg"}),e.jsx(G,{className:"details-container-inner",children:e.jsx(O,{children:r.speakers?.map(o=>e.jsxs(P,{className:"DetailsTitle",children:[e.jsx(u.Suspense,{fallback:e.jsx("h1",{children:"loading"}),children:e.jsx("img",{src:o.speakerImage,alt:o.fullName,style:{width:"128px",margin:"10px",borderRadius:"12px"}})}),e.jsx(W,{children:e.jsx(f,{to:`${S}/${o.id}`,children:o.fullName})})]},o.id))})})]})]})})},Z=t.div`
  background-color: ${s.WHITE};
`,re=()=>{const{id:i}=E(),{isLoading:n,error:c,data:r}=I(i,"2023"),{data:o}=$("2023"),w=(p=>p?.speakers?.map(T=>T.id))(r),l=o?.filter(p=>w?.includes(p.id)),m=_(r);return u.useEffect(()=>{document.title=`${r?.title} - DevBcn - ${x.edition}`},[r]),L(c),e.jsx(Z,{children:e.jsxs(y,{color:s.WHITE,marginTop:4,children:[n&&e.jsx("h2",{children:"Loading"}),!n&&l!==void 0&&l.length>0&&m!==void 0&&e.jsx(X,{speakers:l,meeting:m,openFeedbackId:x.openFeedbackId}),!n&&(!l||l.length===0||!m)&&e.jsx(D,{message:"Session"})]})})};export{re as default};
//# sourceMappingURL=TalkDetailContainer2023-DjMMmORh.js.map
