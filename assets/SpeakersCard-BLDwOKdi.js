import{z as o,M as r,i as a,e as n,v as s,j as t,L as d,r as l,aP as c,aE as m,aQ as p}from"./index-BZzquw5a.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="6a239bda-cbed-4868-acc7-7d71747aebc1",e._sentryDebugIdIdentifier="sentry-dbid-6a239bda-cbed-4868-acc7-7d71747aebc1")}catch{}const g=s`
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
  }`,f=a.div`
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
  animation: linear ${g} both;
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
`,b=a.h5`
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-weight: bold;
  color: ${n.LIGHT_BLUE};
  font-size: 1.1em;
  padding: 5px 0 1px;
`,u=a.p`
  color: ${n.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  text-align: left;
  font-size: 0.9em;
`,E=e=>e==="2023"?c:e==="2024"?m:p,I=({speaker:e,year:i})=>t.jsx(f,{children:t.jsxs(d,{to:`${E(i)}/${e.id}`,style:{textDecoration:"none"},children:[t.jsxs(h,{children:[t.jsx(l.Suspense,{fallback:t.jsx("img",{src:"/images/logo.png",alt:"loading"}),children:t.jsx(x,{src:e.speakerImage})}),t.jsx(y,{})]}),t.jsx(b,{children:e.fullName}),t.jsx(u,{children:e.tagLine})]})});export{I as S};
//# sourceMappingURL=SpeakersCard-BLDwOKdi.js.map
