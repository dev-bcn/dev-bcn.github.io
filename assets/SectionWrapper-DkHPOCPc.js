import{j as r,a as d,s as i}from"./index-BNmA_PP7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"5713ef49fc0a97f122b241fa07e8f42743071505"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cde09159-5cb7-4df1-a59a-8d81af8969ad",e._sentryDebugIdIdentifier="sentry-dbid-cde09159-5cb7-4df1-a59a-8d81af8969ad")}catch{}})();const o=d.div.withConfig({shouldForwardProp:e=>!["paddingBottom"].includes(e)})`
  align-items: center;
  background: ${({color:e})=>e};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
  padding-bottom: ${({paddingBottom:e})=>e}px;
`,s=d.div.withConfig({shouldForwardProp:e=>!["marginTop"].includes(e)})`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: ${i}px;
  margin-top: ${({marginTop:e})=>`${e}rem`};
`,p=({children:e,color:t,marginTop:n=0,paddingBottom:a=0})=>r.jsx(o,{color:t,paddingBottom:a,className:"SectionWrapper",children:r.jsx(s,{marginTop:n,className:"InnerSectionWrapper",children:e})});export{p as S};
//# sourceMappingURL=SectionWrapper-DkHPOCPc.js.map
