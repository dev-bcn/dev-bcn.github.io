import{E as o,M as r,k as a,f as n,w as s,j as t,L as l,r as d,aQ as c,aH as m,aR as p}from"./index-DBN5n7K7.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="a3b530ca-809e-4577-b767-019a907fc543",e._sentryDebugIdIdentifier="sentry-dbid-a3b530ca-809e-4577-b767-019a907fc543")}catch{}const f=s`
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
  }`,g=a.div`
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
`,h=a.div`
  width: 100%;
  height: auto;
  position: relative;
`,x=a.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  aspect-ratio: 1/1;
  animation: linear ${f} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`,y=a.div`
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
`,u=a.h5`
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-weight: bold;
  color: ${n.LIGHT_BLUE};
  font-size: 1.1em;
  padding: 5px 0 1px;
`,E=a.p`
  color: ${n.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  text-align: left;
  font-size: 0.9em;
`,b=e=>e==="2023"?c:e==="2024"?m:p,I=({speaker:e,year:i})=>t.jsx(g,{children:t.jsxs(l,{to:`${b(i)}/${e.id}`,style:{textDecoration:"none"},children:[t.jsxs(h,{children:[t.jsx(d.Suspense,{fallback:t.jsx("img",{src:"/images/logo.png",alt:"loading"}),children:t.jsx(x,{src:e.speakerImage})}),t.jsx(y,{})]}),t.jsx(u,{children:e.fullName}),t.jsx(E,{children:e.tagLine})]})});export{I as S};
//# sourceMappingURL=SpeakersCard-BvbPSdTB.js.map
