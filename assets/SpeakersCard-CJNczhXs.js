import{y as o,M as r,h as i,e as n,t as s,j as t,L as d,r as l,aM as c,aB as m,aN as f}from"./index-jVvh25dM.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="ed906069-3b6f-4406-a67d-501fc23ec147",e._sentryDebugIdIdentifier="sentry-dbid-ed906069-3b6f-4406-a67d-501fc23ec147")}catch{}const p=s`
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
  }`,g=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10rem;
  padding: 0 1rem 1rem 1rem;

  @media (min-width: ${o}px) {
    width: 12rem;
  }
  @media (min-width: ${r}px) {
    width: 15rem;
  }
`,h=i.div`
  width: 100%;
  height: auto;
  position: relative;
`,y=i.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  aspect-ratio: 1/1;
  animation: linear ${p} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`,x=i.div`
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
`,u=i.h5`
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-weight: bold;
  color: ${n.LIGHT_BLUE};
  font-size: 1.1em;
  padding: 5px 0 1px;
`,E=i.p`
  color: ${n.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  text-align: left;
  font-size: 0.9em;
`,b=e=>e==="2023"?c:e==="2024"?m:f,I=({speaker:e,year:a})=>t.jsx(g,{children:t.jsxs(d,{to:`${b(a)}/${e.id}`,style:{textDecoration:"none"},children:[t.jsxs(h,{children:[t.jsx(l.Suspense,{fallback:t.jsx("img",{src:"/images/logo.png",alt:"loading"}),children:t.jsx(y,{src:e.speakerImage})}),t.jsx(x,{})]}),t.jsx(u,{children:e.fullName}),t.jsx(E,{children:e.tagLine})]})});export{I as S};
//# sourceMappingURL=SpeakersCard-CJNczhXs.js.map
