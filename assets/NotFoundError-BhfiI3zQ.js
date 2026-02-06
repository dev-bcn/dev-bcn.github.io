import{j as t,C as r,a as o,L as i}from"./index-BS3H_xiE.js";import{u as d}from"./useDocumentTitleUpdate-ro8sSzhf.js";import{A as s}from"./ActionButtons-BpulFhmh.js";import{S as a}from"./SectionWrapper-BvtKQT5c.js";import"./Button-DHO2B7xU.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"549a69cbff27e10d29a9a2470ec035ccd349727e"};var n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7018df13-3a39-4f70-8a9b-b9d151548733",e._sentryDebugIdIdentifier="sentry-dbid-7018df13-3a39-4f70-8a9b-b9d151548733")}catch{}})();const c=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
`,f=o.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,l=o(i)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  background: ${r.DARK_BLUE};
  font-weight: 600;
  width: fit-content;
`,h=({message:e="Page"})=>(d("Page not Found",""),t.jsx(a,{color:r.WHITE,children:t.jsxs(c,{className:"Error404",children:[t.jsxs(f,{children:["Error 404. ",e," not found"]}),t.jsx(l,{to:"/",children:"Back to home"}),t.jsx(s,{})]})}));export{h as NotFoundError};
//# sourceMappingURL=NotFoundError-BhfiI3zQ.js.map
