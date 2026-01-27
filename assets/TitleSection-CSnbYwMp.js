import{j as i,b as a,y as r,a as n,C as o}from"./index-ju5_CuzO.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dcaddada-c3b2-4d27-bda1-7d40a51f7f1d",e._sentryDebugIdIdentifier="sentry-dbid-dcaddada-c3b2-4d27-bda1-7d40a51f7f1d")}catch{}})();const s=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: ${a}px) {
    flex-direction: row;
    justify-content: space-between;
    height: 10rem;
    padding: 0 2rem;
  }

  @media (min-width: ${r}px) {
    flex-direction: row;
    justify-content: space-between;
    height: 10rem;
    padding: 0 5rem;
  }
`,l=n.h1`
  color: ${e=>e.color??o.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  padding-bottom: 1.5rem;
  text-align: center;
  @media (min-width: ${a}px) {
    width: 40%;
    text-align: left;
    padding-bottom: unset;
  }
`,f=n.h4`
  color: ${e=>e.color??o.WHITE};
  margin-top: 1rem;
  @media (min-width: 480px) {
    width: 70%;
  }
`,m=({title:e,subtitle:t,color:d})=>i.jsxs(s,{children:[i.jsxs(l,{color:d,children:["/ ",e]}),i.jsx(f,{color:d,children:t})]});export{m as T};
//# sourceMappingURL=TitleSection-CSnbYwMp.js.map
