import{T as E,M as c,d as n,C as i,l as j,j as e,L as b,r,a0 as T,a1 as w,E as L,c as k}from"./index-D9191pRk.js";import{g as I,B as v}from"./Button-BDfl_3rV.js";import{T as D}from"./TitleSection-DlDGLfI3.js";import{S as R}from"./SectionWrapper-DGLshFrA.js";import{d as A}from"./2026-BGRmqx6e.js";import{u as _}from"./useFetchSpeakers-X8lraada.js";import{u as P}from"./useSentryErrorReport-CGPM6daR.js";import{S as B,d as C,e as l,f as o,g as d,c as K,a as O,b as $}from"./Speakers.style-BApeTcsy.js";import"./index-D1uZQoK6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"aa62a24685ea664d27a72c002f252a0c5deedb13"}}catch{}})();try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="890afc06-a16a-4aad-b004-fcbc21301592",t._sentryDebugIdIdentifier="sentry-dbid-890afc06-a16a-4aad-b004-fcbc21301592")})()}catch{}const F=j`
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
  }`,W=n.div`
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
`,U=n.div`
  width: 100%;
  height: auto;
  position: relative;
`,M=n.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  aspect-ratio: 1/1;
  animation: linear ${F} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`,N=n.div`
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
`,H=n.h5`
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-weight: bold;
  color: ${i.LIGHT_BLUE};
  font-size: 1.1em;
  padding: 5px 0 1px;
`,z=n.p`
  color: ${i.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  text-align: left;
  font-size: 0.9em;
`,Y=t=>t==="2023"?T:t==="2024"?w:L,G=({speaker:t,year:a})=>e.jsx(W,{children:e.jsxs(b,{to:`${Y(a)}/${t.id}`,style:{textDecoration:"none"},children:[e.jsxs(U,{children:[e.jsx(r.Suspense,{fallback:e.jsx("img",{src:"/images/logo.png",alt:"loading"}),children:e.jsx(M,{src:t.speakerImage})}),e.jsx(N,{})]}),e.jsx(H,{children:t.fullName}),e.jsx(z,{children:t.tagLine})]})}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{src:"/images/LessThanBlueIcon.svg"}),e.jsx($,{src:"/images/MoreThanBlueIcon.svg"})]}),ne=({conferenceConfig:t=A})=>{const{width:a}=k(),p=new Date,h=(s,S)=>s<new Date&&S>p,{error:m,data:x,isLoading:g}=_(t.edition);P(m);const u=r.useCallback(()=>{I("CFP","CFP")},[]);r.useEffect(()=>{document.title=`Speakers — ${t.title} — ${t.edition}`});const f=new Date(t.cfp.startDay),y=new Date(t.cfp.endDay);return e.jsxs(e.Fragment,{children:[e.jsx(R,{color:i.DARK_BLUE,marginTop:5,children:e.jsxs(B,{children:[e.jsx(D,{title:"SPEAKERS",subtitle:`Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.`,color:i.WHITE}),a>c&&e.jsx(q,{}),e.jsxs(C,{children:[g&&e.jsx("p",{children:"Loading..."}),h(f,y)&&e.jsx("div",{style:{width:"100%",textAlign:"center",padding:"20px 30%"},children:e.jsx(v,{onClick:u,text:"📢 Apply to be a Speaker",link:t.cfp.link})}),t.hideSpeakers?e.jsx("p",{style:{color:i.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):x?.map(s=>e.jsx(G,{speaker:s,year:t.edition},s.id))]}),e.jsx(l,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"20%",children:e.jsxs(o,{color:i.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(d,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"40%",children:e.jsxs(o,{color:i.DARK_BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(l,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"60%",children:e.jsxs(o,{color:i.BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(d,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"80%",children:e.jsxs(o,{color:i.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})}),e.jsx(K,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#002454"}})})})]})};export{ne as default};
//# sourceMappingURL=Speakers-DJYXm9rd.js.map
