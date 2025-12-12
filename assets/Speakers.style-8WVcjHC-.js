import{z as n,s as o,k as t,y as d,f as a}from"./index-CCCx7afu.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"72a4cf5720848119ec298979f4df7ce2e1a1c7f0"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="0bf4a56f-0214-4629-a183-6fc28773a8c9",e._sentryDebugIdIdentifier="sentry-dbid-0bf4a56f-0214-4629-a183-6fc28773a8c9")})()}catch{}const s=t.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (min-width: ${n}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${o}px) {
    padding: 0 10rem;
  }
`,f=t.img`
  position: absolute;
  left: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${o}px) {
    height: 10rem;
  }
`,l=t.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${o}px) {
    height: 10rem;
  }
`,h=t(d.div)`
  position: absolute;
  top: ${({positionPercentage:e})=>e};
  left: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`,c=t(d.div)`
  position: absolute;
  top: ${({positionPercentage:e})=>e};
  right: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`,m=t(d.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${({color:e})=>e};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,p=t.div`
  background: ${a.WHITE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${n}px) {
    height: 16rem;
  }
`,g=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: center;
  z-index: 1;
  @media (min-width: ${n}px) {
    padding: 5rem 0;
  }
`;export{s as S,f as a,l as b,g as c,c as d,m as e,h as f,p as g};
//# sourceMappingURL=Speakers.style-8WVcjHC-.js.map
