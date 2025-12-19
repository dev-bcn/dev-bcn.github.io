import{T as E,M as c,d as n,C as i,l as j,j as e,L as T,r,a1 as b,a2 as w,G as L,u as k}from"./index-DeBvquqm.js";import{S as I}from"./SectionWrapper-B_z0-O1Y.js";import{T as v}from"./TitleSection-C_nx_Uff.js";import{S as D,d as R,e as l,f as o,g as d,c as A,a as _,b as P}from"./Speakers.style-CTL-Vops.js";import{d as B}from"./2026-CtgUOtBf.js";import{g as C,B as K}from"./Analytics-DZDCHIAw.js";import{u as O}from"./useFetchSpeakers-DyOok1JZ.js";import{u as $}from"./useSentryErrorReport-Cb8Lz7pf.js";import"./index-CwpBwFgV.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"fae39acef3a4ad585284629fd10335cc174e2616"}}catch{}})();try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="ed0af308-5fd2-40f9-a16f-873bc1b492f3",t._sentryDebugIdIdentifier="sentry-dbid-ed0af308-5fd2-40f9-a16f-873bc1b492f3")})()}catch{}const F=j`
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
`,G=t=>t==="2023"?b:t==="2024"?w:L,Y=({speaker:t,year:a})=>e.jsx(W,{children:e.jsxs(T,{to:`${G(a)}/${t.id}`,style:{textDecoration:"none"},children:[e.jsxs(U,{children:[e.jsx(r.Suspense,{fallback:e.jsx("img",{src:"/images/logo.png",alt:"loading"}),children:e.jsx(M,{src:t.speakerImage})}),e.jsx(N,{})]}),e.jsx(H,{children:t.fullName}),e.jsx(z,{children:t.tagLine})]})}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(_,{src:"/images/LessThanBlueIcon.svg"}),e.jsx(P,{src:"/images/MoreThanBlueIcon.svg"})]}),ne=({conferenceConfig:t=B})=>{const{width:a}=k(),p=new Date,h=(s,S)=>s<new Date&&S>p,{error:m,data:x,isLoading:f}=O(t.edition);$(m);const u=r.useCallback(()=>{C("CFP","CFP")},[]);r.useEffect(()=>{document.title=`Speakers — ${t.title} — ${t.edition}`});const g=new Date(t.cfp.startDay),y=new Date(t.cfp.endDay);return e.jsxs(e.Fragment,{children:[e.jsx(I,{color:i.DARK_BLUE,marginTop:5,children:e.jsxs(D,{children:[e.jsx(v,{title:"SPEAKERS",subtitle:`Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.`,color:i.WHITE}),a>c&&e.jsx(q,{}),e.jsxs(R,{children:[f&&e.jsx("p",{children:"Loading..."}),h(g,y)&&e.jsx("div",{style:{width:"100%",textAlign:"center",padding:"20px 30%"},children:e.jsx(K,{onClick:u,text:"📢 Apply to be a Speaker",link:t.cfp.link})}),t.hideSpeakers?e.jsx("p",{style:{color:i.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):x?.map(s=>e.jsx(Y,{speaker:s,year:t.edition},s.id))]}),e.jsx(l,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"20%",children:e.jsxs(o,{color:i.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(d,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"40%",children:e.jsxs(o,{color:i.DARK_BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(l,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"60%",children:e.jsxs(o,{color:i.BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(d,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"80%",children:e.jsxs(o,{color:i.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})}),e.jsx(A,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#002454"}})})})]})};export{ne as default};
//# sourceMappingURL=Speakers-qrfGPJY7.js.map
