import{T as E,M as c,d as a,C as i,l as j,j as e,L as b,r,a0 as w,a1 as T,E as L,c as k}from"./index-DCVp8vhu.js";import{g as I,B as v}from"./Button-DFo6jvqQ.js";import{T as D}from"./TitleSection-BLKmAejF.js";import{S as R}from"./SectionWrapper-9eX7qbRa.js";import{d as A}from"./2026-CaYd5-xZ.js";import{u as _}from"./useFetchSpeakers-BKIvh5S3.js";import{u as P}from"./useSentryErrorReport-BJEZBS5l.js";import{S as B,d as C,e as d,f as o,g as l,c as K,a as O,b as $}from"./Speakers.style-CgozgkY1.js";import"./index-BazwNtG-.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"23d1bddf7757e94e62d3ec6e064c817fbaf8bc95"}}catch{}})();try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="ed9cfc90-67c2-4e9e-bd3d-95323d6b315c",t._sentryDebugIdIdentifier="sentry-dbid-ed9cfc90-67c2-4e9e-bd3d-95323d6b315c")})()}catch{}const F=j`
  from {
    opacity: 0;
    translate: 0 100px;
  }
  50% {
    opacity: .5;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }`,W=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10rem;
  padding: 0 1rem 1rem 1rem;

  @media (min-width: ${E}px) {
    width: 12rem;
  }
  @media (min-width: ${c}px) {
    width: 15rem;
  }
`,U=a.div`
  width: 100%;
  height: auto;
  position: relative;
`,M=a.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  aspect-ratio: 1/1;
  animation: linear ${F} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`,N=a.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.25s linear;
  background-color: rgba(239, 71, 111, 0.5);

  &:hover {
    opacity: 1;
  }
`,H=a.h5`
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-weight: bold;
  color: ${i.LIGHT_BLUE};
  font-size: 1.1em;
  padding: 5px 0 1px;
`,z=a.p`
  color: ${i.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  text-align: left;
  font-size: 0.9em;
`,Y=t=>t==="2023"?w:t==="2024"?T:L,G=({speaker:t,year:n})=>e.jsx(W,{children:e.jsxs(b,{to:`${Y(n)}/${t.id}`,style:{textDecoration:"none"},children:[e.jsxs(U,{children:[e.jsx(r.Suspense,{fallback:e.jsx("img",{src:"/images/logo.webp",alt:"loading"}),children:e.jsx(M,{src:t.speakerImage})}),e.jsx(N,{})]}),e.jsx(H,{children:t.fullName}),e.jsx(z,{children:t.tagLine})]})}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{src:"/images/LessThanBlueIcon.svg"}),e.jsx($,{src:"/images/MoreThanBlueIcon.svg"})]}),ae=({conferenceConfig:t=A})=>{const{width:n}=k(),p=new Date,h=(s,S)=>s<new Date&&S>p,{error:m,data:x,isLoading:u}=_(t.edition);P(m);const g=r.useCallback(()=>{I("CFP","CFP")},[]);r.useEffect(()=>{document.title=`Speakers — ${t.title} — ${t.edition}`});const f=new Date(t.cfp.startDay),y=new Date(t.cfp.endDay);return e.jsxs(e.Fragment,{children:[e.jsx(R,{color:i.DARK_BLUE,marginTop:5,children:e.jsxs(B,{children:[e.jsx(D,{title:"SPEAKERS",subtitle:`Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.`,color:i.WHITE}),n>c&&e.jsx(q,{}),e.jsxs(C,{children:[u&&e.jsx("p",{children:"Loading..."}),h(f,y)&&e.jsx("div",{style:{width:"100%",textAlign:"center",padding:"20px 30%"},children:e.jsx(v,{onClick:g,text:"📢 Apply to be a Speaker",link:t.cfp.link})}),t.hideSpeakers?e.jsx("p",{style:{color:i.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):x?.map(s=>e.jsx(G,{speaker:s,year:t.edition},s.id))]}),e.jsx(d,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"20%",children:e.jsxs(o,{color:i.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(l,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"40%",children:e.jsxs(o,{color:i.DARK_BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(d,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"60%",children:e.jsxs(o,{color:i.BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(l,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"80%",children:e.jsxs(o,{color:i.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})}),e.jsx(K,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#002454"}})})})]})};export{ae as default};
//# sourceMappingURL=Speakers-_xzzOk6E.js.map
