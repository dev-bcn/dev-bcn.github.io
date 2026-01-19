import{C as t,j as e,r as i,S as a,c as l,M as s,d as n,e as d}from"./index-DWMLpAyX.js";import{T as c}from"./TitleSection-CUuhSVAn.js";import{S as b}from"./SectionWrapper-B8DG3rKl.js";import{u as f}from"./useDocumentTitleUpdate-DKzhd_tn.js";import{L as p}from"./Linkedin-DeLHmguE.js";import{T as m}from"./Twitter-DrTEyQ9O.js";import{S as u,a as h,b as w,c as g,d as x}from"./Style.AboutCard-CLtS5JRx.js";import{S as j,a as y,b as S}from"./Speakers.style-DismYHIs.js";import{S as U}from"./Talks.style-CQyij6Ay.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"b765f576364dc1a2b5a65db60ae74a52cf3532d1"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="d06c2ab2-0813-4b4b-81fa-04dcbb5576d1",o._sentryDebugIdIdentifier="sentry-dbid-d06c2ab2-0813-4b4b-81fa-04dcbb5576d1")})()}catch{}const L=[{id:1,name:"Jonathan Vila",nameColor:t.BLUE,job:"Developer Advocate",jobColor:t.DARK_BLUE,profileUrl:new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),twitterUrl:new URL("https://twitter.com/vilojona"),linkedinUrl:new URL("https://www.linkedin.com/in/jonathanvila")},{id:2,name:"Nacho Cougil",nameColor:t.DARK_BLUE,job:"Java Engineer",jobColor:t.BLUE,profileUrl:new URL("https://www.devbcn.com/images/nacho.webp"),twitterUrl:new URL("https://twitter.com/icougil"),linkedinUrl:new URL("https://www.linkedin.com/in/icougil")}],E=({person:o})=>e.jsxs(u,{children:[e.jsx(i.Suspense,{fallback:e.jsx(a,{src:"/images/logo.svg"}),children:e.jsx(h,{src:o.profileUrl.href})}),e.jsx(w,{color:o.nameColor,children:o.name}),e.jsx(g,{color:o.jobColor,children:o.job}),e.jsxs(x,{children:[e.jsx(m,{color:o.nameColor,twitterUrl:o.twitterUrl.href}),e.jsx(p,{color:o.nameColor,linkedinUrl:o.linkedinUrl.href})]})]}),T=n.div`
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,I=n.a`
  display: block;
  background-color: ${t.DARK_BLUE};
  color: ${t.LIGHT_BLUE};
  text-decoration: none;
  font-weight: bold;
  margin-top: 50px;
  padding: 10px 20px;
  border-radius: 20px;

  &:hover {
    color: ${t.MAGENTA};
  }
`,M=()=>{const{width:o}=l();return f("About us",d.edition),e.jsx(b,{color:t.WHITE,marginTop:8,children:e.jsxs(j,{children:[e.jsx(c,{title:"ABOUT US",subtitle:"The Barcelona Developers Conference - DevBcn",color:t.BLUE}),o>s&&e.jsxs(e.Fragment,{children:[e.jsx(y,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(S,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(T,{children:L.map(r=>e.jsx(E,{person:r},r.id))}),e.jsx("p",{children:e.jsx(I,{href:"https://eepurl.com/ifxXl9",rel:"noreferrer",target:"_blank",children:"📨 Subscribe to our news here"})}),e.jsx(U,{})]})})};export{M as default};
//# sourceMappingURL=About-DEwSmCjf.js.map
