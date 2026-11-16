import{j as n,a as r,s as a}from"./index-zTR4J74b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f2b8cd7d252e127758e8dd9828003106f89ed646"};var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="cde09159-5cb7-4df1-a59a-8d81af8969ad",e._sentryDebugIdIdentifier="sentry-dbid-cde09159-5cb7-4df1-a59a-8d81af8969ad")}catch{}})();const o=r.div.withConfig({shouldForwardProp:e=>!["paddingBottom"].includes(e)})`
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
`,c=({children:e,color:d,marginTop:t=0,paddingBottom:i=0})=>n.jsx(o,{color:d,paddingBottom:i,className:"SectionWrapper",children:n.jsx(s,{marginTop:t,className:"InnerSectionWrapper",children:e})});export{c as S};
//# sourceMappingURL=SectionWrapper-CfMsBMQk.js.map
