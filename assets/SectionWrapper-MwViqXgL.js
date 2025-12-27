import{j as t,d,s as r}from"./index-9QYl0DEC.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"0a2dd50217aae4a1f10b9b25aaf95bb5fbbf8fc4"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="408c0966-c556-4288-bfe9-93fb014fc9d1",e._sentryDebugIdIdentifier="sentry-dbid-408c0966-c556-4288-bfe9-93fb014fc9d1")})()}catch{}const a=d.div.withConfig({shouldForwardProp:e=>!["paddingBottom"].includes(e)})`
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
  max-width: ${r}px;
  margin-top: ${({marginTop:e})=>`${e}rem`};
`,l=({children:e,color:n,marginTop:i=0,paddingBottom:o=0})=>t.jsx(a,{color:n,paddingBottom:o,className:"SectionWrapper",children:t.jsx(s,{marginTop:i,className:"InnerSectionWrapper",children:e})});export{l as S};
//# sourceMappingURL=SectionWrapper-MwViqXgL.js.map
