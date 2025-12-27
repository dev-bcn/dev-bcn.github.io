import{j as o,C as d,d as n,L as r}from"./index-9QYl0DEC.js";import{u as i}from"./useDocumentTitleUpdate-BVuvSSLO.js";import{A as a}from"./ActionButtons-CG6nxHnB.js";import{S as s}from"./SectionWrapper-MwViqXgL.js";import"./Button-CfRgObLo.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"0a2dd50217aae4a1f10b9b25aaf95bb5fbbf8fc4"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="861fbab5-3098-4caa-9edd-768166019c56",e._sentryDebugIdIdentifier="sentry-dbid-861fbab5-3098-4caa-9edd-768166019c56")})()}catch{}const f=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
`,l=n.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,c=n(r)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  background: ${d.DARK_BLUE};
  font-weight: 600;
  width: fit-content;
`,y=({message:e="Page"})=>(i("Page not Found",""),o.jsx(s,{color:d.WHITE,children:o.jsxs(f,{className:"Error404",children:[o.jsxs(l,{children:["Error 404. ",e," not found"]}),o.jsx(c,{to:"/",children:"Back to home"}),o.jsx(a,{})]})}));export{y as NotFoundError};
//# sourceMappingURL=NotFoundError-CTXUVIWj.js.map
