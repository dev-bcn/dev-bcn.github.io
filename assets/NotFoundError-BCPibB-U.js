import{j as o,C as r,a as e,L as d}from"./index-ju5_CuzO.js";import{u as i}from"./useDocumentTitleUpdate-G0tFe7fP.js";import{A as s}from"./ActionButtons-CA3G6HZe.js";import{S as a}from"./SectionWrapper-B6pnq35M.js";import"./Button-Bi2C0dwT.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="7018df13-3a39-4f70-8a9b-b9d151548733",t._sentryDebugIdIdentifier="sentry-dbid-7018df13-3a39-4f70-8a9b-b9d151548733")}catch{}})();const f=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
`,c=e.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,l=e(d)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  background: ${r.DARK_BLUE};
  font-weight: 600;
  width: fit-content;
`,h=({message:t="Page"})=>(i("Page not Found",""),o.jsx(a,{color:r.WHITE,children:o.jsxs(f,{className:"Error404",children:[o.jsxs(c,{children:["Error 404. ",t," not found"]}),o.jsx(l,{to:"/",children:"Back to home"}),o.jsx(s,{})]})}));export{h as NotFoundError};
//# sourceMappingURL=NotFoundError-BCPibB-U.js.map
