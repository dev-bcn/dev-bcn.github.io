import{j as t,C as r,a as o,L as i}from"./index-TEbMjhF3.js";import{u as d}from"./useDocumentTitleUpdate-baMWkUVS.js";import{A as s}from"./ActionButtons-KnNlp7vX.js";import{S as a}from"./SectionWrapper-B0CqFjQq.js";import"./Button-I7X4Q3hr.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"4404e8c40b9db22dde89915e638ab81420f13186"};var n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7018df13-3a39-4f70-8a9b-b9d151548733",e._sentryDebugIdIdentifier="sentry-dbid-7018df13-3a39-4f70-8a9b-b9d151548733")}catch{}})();const f=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
`,l=o.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,c=o(i)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  background: ${r.DARK_BLUE};
  font-weight: 600;
  width: fit-content;
`,h=({message:e="Page"})=>(d("Page not Found",""),t.jsx(a,{color:r.WHITE,children:t.jsxs(f,{className:"Error404",children:[t.jsxs(l,{children:["Error 404. ",e," not found"]}),t.jsx(c,{to:"/",children:"Back to home"}),t.jsx(s,{})]})}));export{h as NotFoundError};
//# sourceMappingURL=NotFoundError-BK_qsKfd.js.map
