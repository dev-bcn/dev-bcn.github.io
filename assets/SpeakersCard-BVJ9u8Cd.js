import{z as o,M as r,k as i,f as n,w as s,j as t,L as d,r as l,aP as f,aG as c,aQ as p}from"./index-CDY7Yx3m.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"d5ea6f272b4c2fd77f0fe569599f29d127911460"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="eff05157-168c-4a62-a166-92691327d2a4",e._sentryDebugIdIdentifier="sentry-dbid-eff05157-168c-4a62-a166-92691327d2a4")})()}catch{}const g=s`
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
  }`,m=i.div`
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
`,y=i.div`
  width: 100%;
  height: auto;
  position: relative;
`,h=i.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  aspect-ratio: 1/1;
  animation: linear ${g} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`,u=i.div`
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
`,x=i.h5`
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
`,b=e=>e==="2023"?f:e==="2024"?c:p,w=({speaker:e,year:a})=>t.jsx(m,{children:t.jsxs(d,{to:`${b(a)}/${e.id}`,style:{textDecoration:"none"},children:[t.jsxs(y,{children:[t.jsx(l.Suspense,{fallback:t.jsx("img",{src:"/images/logo.png",alt:"loading"}),children:t.jsx(h,{src:e.speakerImage})}),t.jsx(u,{})]}),t.jsx(x,{children:e.fullName}),t.jsx(E,{children:e.tagLine})]})});export{w as S};
//# sourceMappingURL=SpeakersCard-BVJ9u8Cd.js.map
