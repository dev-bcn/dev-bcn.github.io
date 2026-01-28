import{T as E,M as p,a as s,C as a,l as j,j as e,L as T,r as o,E as b,a2 as L,a3 as w,a4 as k,a5 as I,d as _}from"./index-DxZQvJw7.js";import{g as R,B as A}from"./Button-DYsS5_Ov.js";import{T as v}from"./TitleSection-HXkImr65.js";import{S as D}from"./SectionWrapper-Bk7haGVg.js";import{d as P}from"./2026-Bf2O2K5e.js";import{u as B}from"./useFetchSpeakers-9Egoatwq.js";import{u as C}from"./useSentryErrorReport-CcbEP86-.js";import{S as K,d as O,e as d,f as r,g as c,c as U,a as $,b as F}from"./Speakers.style-enwIt1h0.js";import"./index-B31muZdw.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"04b4d4293ccff9bffe89eef70b331b85846896f6"};var i=new t.Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="1ef69206-fe57-4f18-a176-075a3cb9cdb0",t._sentryDebugIdIdentifier="sentry-dbid-1ef69206-fe57-4f18-a176-075a3cb9cdb0")}catch{}})();const W=j`
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
  }`,M=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10rem;
  padding: 0 1rem 1rem 1rem;

  @media (min-width: ${E}px) {
    width: 12rem;
  }
  @media (min-width: ${p}px) {
    width: 15rem;
  }
`,N=s.div`
  width: 100%;
  height: auto;
  position: relative;
`,H=s.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  aspect-ratio: 1/1;
  animation: linear ${W} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`,z=s.div`
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
`,Y=s.h5`
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-weight: bold;
  color: ${a.LIGHT_BLUE};
  font-size: 1.1em;
  padding: 5px 0 1px;
`,G=s.p`
  color: ${a.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  text-align: left;
  font-size: 0.9em;
`,q=t=>{switch(t){case"2023":return I;case"2024":return k;case"2025":return w;case"2026":return L;default:return b}},J=({speaker:t,year:i})=>e.jsx(M,{children:e.jsxs(T,{to:`${q(i)}/${t.id}`,style:{textDecoration:"none"},children:[e.jsxs(N,{children:[e.jsx(o.Suspense,{fallback:e.jsx("img",{src:"/images/logo.webp",alt:"loading"}),children:e.jsx(H,{src:t.speakerImage})}),e.jsx(z,{})]}),e.jsx(Y,{children:t.fullName}),e.jsx(G,{children:t.tagLine})]})}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx($,{src:"/images/LessThanBlueIcon.svg"}),e.jsx(F,{src:"/images/MoreThanBlueIcon.svg"})]}),re=({conferenceConfig:t=P})=>{const{width:i}=_(),l=new Date,h=(n,y)=>n<new Date&&y>l,{error:m,data:x,isLoading:u}=B(t.edition);C(m);const S=o.useCallback(()=>{R("CFP","CFP")},[]);o.useEffect(()=>{document.title=`Speakers — ${t.title} — ${t.edition}`});const g=new Date(t.cfp.startDay),f=new Date(t.cfp.endDay);return e.jsxs(e.Fragment,{children:[e.jsx(D,{color:a.DARK_BLUE,marginTop:5,children:e.jsxs(K,{children:[e.jsx(v,{title:"SPEAKERS",subtitle:`Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.`,color:a.WHITE}),i>p&&e.jsx(V,{}),e.jsxs(O,{children:[u&&e.jsx("p",{children:"Loading..."}),h(g,f)&&e.jsx("div",{style:{width:"100%",textAlign:"center",padding:"20px 30%"},children:e.jsx(A,{onClick:S,text:"📢 Apply to be a Speaker",link:t.cfp.link})}),t.hideSpeakers?e.jsx("p",{style:{color:a.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):x?.map(n=>e.jsx(J,{speaker:n,year:t.edition},n.id))]}),e.jsx(d,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"20%",children:e.jsxs(r,{color:a.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(c,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"40%",children:e.jsxs(r,{color:a.DARK_BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(d,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"60%",children:e.jsxs(r,{color:a.BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(c,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"80%",children:e.jsxs(r,{color:a.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})}),e.jsx(U,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#002454"}})})})]})};export{re as default};
//# sourceMappingURL=Speakers-DcEWvjxh.js.map
