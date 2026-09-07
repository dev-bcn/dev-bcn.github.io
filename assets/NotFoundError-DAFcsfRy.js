import{j as e,C as r,a as o,L as i}from"./index-Bf7dU0ol.js";import{u as d}from"./useDocumentTitleUpdate-CD-FCRIY.js";import{A as s}from"./ActionButtons-BQnGfZYP.js";import{S as a}from"./SectionWrapper-DvCZzwLC.js";import"./Button-Cdz4fKDB.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"cc88881176b8ee5ca638fff598da07f6a9205048"};var n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="7018df13-3a39-4f70-8a9b-b9d151548733",t._sentryDebugIdIdentifier="sentry-dbid-7018df13-3a39-4f70-8a9b-b9d151548733")}catch{}})();const f=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
`,c=o.p`
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
`,h=({message:t="Page"})=>(d("Page not Found",""),e.jsx(a,{color:r.WHITE,children:e.jsxs(f,{className:"Error404",children:[e.jsxs(c,{children:["Error 404. ",t," not found"]}),e.jsx(l,{to:"/",children:"Back to home"}),e.jsx(s,{})]})}));export{h as NotFoundError};
//# sourceMappingURL=NotFoundError-DAFcsfRy.js.map
