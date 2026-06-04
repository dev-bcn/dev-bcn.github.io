import{j as o,C as r,a as e,L as i}from"./index-gpE6NdkE.js";import{u as d}from"./useDocumentTitleUpdate-DVYt2abh.js";import{A as a}from"./ActionButtons-llIZLgyx.js";import{S as s}from"./SectionWrapper-Bqh_aRDM.js";import"./Button-CotUYEVp.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"a04a6066a8a41d1cb6cb5d116cc85c9dceca0545"};var n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="7018df13-3a39-4f70-8a9b-b9d151548733",t._sentryDebugIdIdentifier="sentry-dbid-7018df13-3a39-4f70-8a9b-b9d151548733")}catch{}})();const c=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
`,l=e.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,f=e(i)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  background: ${r.DARK_BLUE};
  font-weight: 600;
  width: fit-content;
`,h=({message:t="Page"})=>(d("Page not Found",""),o.jsx(s,{color:r.WHITE,children:o.jsxs(c,{className:"Error404",children:[o.jsxs(l,{children:["Error 404. ",t," not found"]}),o.jsx(f,{to:"/",children:"Back to home"}),o.jsx(a,{})]})}));export{h as NotFoundError};
//# sourceMappingURL=NotFoundError-PNNTODPi.js.map
