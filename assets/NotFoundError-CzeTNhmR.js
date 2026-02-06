import{j as e,C as r,a as o,L as i}from"./index-lRlDSTEL.js";import{u as d}from"./useDocumentTitleUpdate-hYVYayqp.js";import{A as s}from"./ActionButtons-naKnEvRj.js";import{S as a}from"./SectionWrapper-BlxqPDrd.js";import"./Button-CvwbA1-H.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"b99411ffc958d1a749a5e763553c0abcc8f69ea4"};var n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="7018df13-3a39-4f70-8a9b-b9d151548733",t._sentryDebugIdIdentifier="sentry-dbid-7018df13-3a39-4f70-8a9b-b9d151548733")}catch{}})();const c=o.div`
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
`,h=({message:t="Page"})=>(d("Page not Found",""),e.jsx(a,{color:r.WHITE,children:e.jsxs(c,{className:"Error404",children:[e.jsxs(f,{children:["Error 404. ",t," not found"]}),e.jsx(l,{to:"/",children:"Back to home"}),e.jsx(s,{})]})}));export{h as NotFoundError};
//# sourceMappingURL=NotFoundError-CzeTNhmR.js.map
