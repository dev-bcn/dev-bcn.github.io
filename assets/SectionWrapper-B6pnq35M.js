import{j as n,a,s as i}from"./index-ju5_CuzO.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="cde09159-5cb7-4df1-a59a-8d81af8969ad",e._sentryDebugIdIdentifier="sentry-dbid-cde09159-5cb7-4df1-a59a-8d81af8969ad")}catch{}})();const o=a.div.withConfig({shouldForwardProp:e=>!["paddingBottom"].includes(e)})`
  align-items: center;
  background: ${({color:e})=>e};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
  padding-bottom: ${({paddingBottom:e})=>e}px;
`,s=a.div.withConfig({shouldForwardProp:e=>!["marginTop"].includes(e)})`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: ${i}px;
  margin-top: ${({marginTop:e})=>`${e}rem`};
`,c=({children:e,color:d,marginTop:t=0,paddingBottom:r=0})=>n.jsx(o,{color:d,paddingBottom:r,className:"SectionWrapper",children:n.jsx(s,{marginTop:t,className:"InnerSectionWrapper",children:e})});export{c as S};
//# sourceMappingURL=SectionWrapper-B6pnq35M.js.map
