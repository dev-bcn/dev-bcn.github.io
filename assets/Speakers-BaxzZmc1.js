import{T as E,M as c,a as n,C as i,l as j,j as e,L as T,r,E as b,a2 as w,a3 as L,a4 as k,a5 as I,d as _}from"./index-DYZ_iLmj.js";import{g as R,B as A}from"./Button-ESRKlJEc.js";import{T as v}from"./TitleSection-CNHMUsQ5.js";import{S as D}from"./SectionWrapper-B6hg9-I1.js";import{d as P}from"./2026-Cj4KylGk.js";import{u as B}from"./useFetchSpeakers-BDI-cGs2.js";import{u as C}from"./useSentryErrorReport-Ccoei8KE.js";import{S as K,d as O,e as l,f as o,g as d,c as U,a as $,b as F}from"./Speakers.style-CtC9juRj.js";import"./index-Du9hfONg.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"26df553e8774e025d4fd2713c4306731b23d6054"}}catch{}})();try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="1ef69206-fe57-4f18-a176-075a3cb9cdb0",t._sentryDebugIdIdentifier="sentry-dbid-1ef69206-fe57-4f18-a176-075a3cb9cdb0")})()}catch{}const W=j`
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
  }`,M=n.div`
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
`,N=n.div`
  width: 100%;
  height: auto;
  position: relative;
`,H=n.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  aspect-ratio: 1/1;
  animation: linear ${W} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`,z=n.div`
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
`,Y=n.h5`
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-weight: bold;
  color: ${i.LIGHT_BLUE};
  font-size: 1.1em;
  padding: 5px 0 1px;
`,G=n.p`
  color: ${i.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  text-align: left;
  font-size: 0.9em;
`,q=t=>{switch(t){case"2023":return I;case"2024":return k;case"2025":return L;case"2026":return w;default:return b}},J=({speaker:t,year:a})=>e.jsx(M,{children:e.jsxs(T,{to:`${q(a)}/${t.id}`,style:{textDecoration:"none"},children:[e.jsxs(N,{children:[e.jsx(r.Suspense,{fallback:e.jsx("img",{src:"/images/logo.webp",alt:"loading"}),children:e.jsx(H,{src:t.speakerImage})}),e.jsx(z,{})]}),e.jsx(Y,{children:t.fullName}),e.jsx(G,{children:t.tagLine})]})}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx($,{src:"/images/LessThanBlueIcon.svg"}),e.jsx(F,{src:"/images/MoreThanBlueIcon.svg"})]}),oe=({conferenceConfig:t=P})=>{const{width:a}=_(),p=new Date,h=(s,S)=>s<new Date&&S>p,{error:m,data:x,isLoading:u}=B(t.edition);C(m);const f=r.useCallback(()=>{R("CFP","CFP")},[]);r.useEffect(()=>{document.title=`Speakers — ${t.title} — ${t.edition}`});const g=new Date(t.cfp.startDay),y=new Date(t.cfp.endDay);return e.jsxs(e.Fragment,{children:[e.jsx(D,{color:i.DARK_BLUE,marginTop:5,children:e.jsxs(K,{children:[e.jsx(v,{title:"SPEAKERS",subtitle:`Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.`,color:i.WHITE}),a>c&&e.jsx(V,{}),e.jsxs(O,{children:[u&&e.jsx("p",{children:"Loading..."}),h(g,y)&&e.jsx("div",{style:{width:"100%",textAlign:"center",padding:"20px 30%"},children:e.jsx(A,{onClick:f,text:"📢 Apply to be a Speaker",link:t.cfp.link})}),t.hideSpeakers?e.jsx("p",{style:{color:i.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):x?.map(s=>e.jsx(J,{speaker:s,year:t.edition},s.id))]}),e.jsx(l,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"20%",children:e.jsxs(o,{color:i.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(d,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"40%",children:e.jsxs(o,{color:i.DARK_BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(l,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"60%",children:e.jsxs(o,{color:i.BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(d,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"80%",children:e.jsxs(o,{color:i.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})}),e.jsx(U,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#002454"}})})})]})};export{oe as default};
//# sourceMappingURL=Speakers-BaxzZmc1.js.map
