import{a as t,l as n}from"./index-BNmA_PP7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"5713ef49fc0a97f122b241fa07e8f42743071505"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="8f41b934-4c2a-4ef9-a649-8a18319f7402",e._sentryDebugIdIdentifier="sentry-dbid-8f41b934-4c2a-4ef9-a649-8a18319f7402")}catch{}})();const o=n`
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
  }`,s=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 1rem 0 1rem;
`,d=t.img`
  width: 100%;
  max-height: 20rem;
  aspect-ratio: 1/1;
  border-radius: 30% 70% 70% 30% / 30% 29% 71% 70%;
  animation: ${o} 0.2s ease-in-out;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`,l=t.h4`
  padding-top: 0.25rem;
  color: ${({color:e})=>e};
`,f=t.p`
  color: ${({color:e})=>e};
  font-size: 0.75rem;
`,c=t.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.25rem 0;
`;export{s as S,d as a,l as b,f as c,c as d};
//# sourceMappingURL=Style.AboutCard-D6Djptak.js.map
