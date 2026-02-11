import{j as n,a as r,s as a}from"./index-CH69I1rx.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"d3e318594f129bd1dfa92593fc68dc8393730e1b"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cde09159-5cb7-4df1-a59a-8d81af8969ad",e._sentryDebugIdIdentifier="sentry-dbid-cde09159-5cb7-4df1-a59a-8d81af8969ad")}catch{}})();const o=r.div.withConfig({shouldForwardProp:e=>!["paddingBottom"].includes(e)})`
  align-items: center;
  background: ${({color:e})=>e};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
  padding-bottom: ${({paddingBottom:e})=>e}px;
`,s=r.div.withConfig({shouldForwardProp:e=>!["marginTop"].includes(e)})`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: ${a}px;
  margin-top: ${({marginTop:e})=>`${e}rem`};
`,p=({children:e,color:t,marginTop:d=0,paddingBottom:i=0})=>n.jsx(o,{color:t,paddingBottom:i,className:"SectionWrapper",children:n.jsx(s,{marginTop:d,className:"InnerSectionWrapper",children:e})});export{p as S};
//# sourceMappingURL=SectionWrapper-C3WDrTdU.js.map
