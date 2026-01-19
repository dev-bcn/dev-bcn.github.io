import{C as t,j as e,r as i,S as a,d as l,M as s,a as n,e as c}from"./index-Clspyz0m.js";import{T as d}from"./TitleSection-B1oINfbh.js";import{S as f}from"./SectionWrapper-cvqTuEmF.js";import{u as p}from"./useDocumentTitleUpdate-MDh6yrmX.js";import{L as m}from"./Linkedin-D3xXMYAM.js";import{T as u}from"./Twitter-D5qEfCYV.js";import{S as b,a as h,b as w,c as g,d as x}from"./Style.AboutCard-DuEhtCWy.js";import{S as j,a as y,b as S}from"./Speakers.style-sI9Q-m_O.js";import{S as U}from"./Talks.style-B15z5OFm.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"e5c8ff2013705992254d0e4a752f789c0b14c0c0"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="dee24c16-8a58-4c02-b0cc-3ff5610c1cca",o._sentryDebugIdIdentifier="sentry-dbid-dee24c16-8a58-4c02-b0cc-3ff5610c1cca")})()}catch{}const L=[{id:1,name:"Jonathan Vila",nameColor:t.BLUE,job:"Developer Advocate",jobColor:t.DARK_BLUE,profileUrl:new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),twitterUrl:new URL("https://twitter.com/vilojona"),linkedinUrl:new URL("https://www.linkedin.com/in/jonathanvila")},{id:2,name:"Nacho Cougil",nameColor:t.DARK_BLUE,job:"Java Engineer",jobColor:t.BLUE,profileUrl:new URL("https://www.devbcn.com/images/nacho.webp"),twitterUrl:new URL("https://twitter.com/icougil"),linkedinUrl:new URL("https://www.linkedin.com/in/icougil")}],E=({person:o})=>e.jsxs(b,{children:[e.jsx(i.Suspense,{fallback:e.jsx(a,{src:"/images/logo.svg"}),children:e.jsx(h,{src:o.profileUrl.href})}),e.jsx(w,{color:o.nameColor,children:o.name}),e.jsx(g,{color:o.jobColor,children:o.job}),e.jsxs(x,{children:[e.jsx(u,{color:o.nameColor,twitterUrl:o.twitterUrl.href}),e.jsx(m,{color:o.nameColor,linkedinUrl:o.linkedinUrl.href})]})]}),T=n.div`
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
`,M=()=>{const{width:o}=l();return p("About us",c.edition),e.jsx(f,{color:t.WHITE,marginTop:8,children:e.jsxs(j,{children:[e.jsx(d,{title:"ABOUT US",subtitle:"The Barcelona Developers Conference - DevBcn",color:t.BLUE}),o>s&&e.jsxs(e.Fragment,{children:[e.jsx(y,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(S,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(T,{children:L.map(r=>e.jsx(E,{person:r},r.id))}),e.jsx("p",{children:e.jsx(I,{href:"https://eepurl.com/ifxXl9",rel:"noreferrer",target:"_blank",children:"📨 Subscribe to our news here"})}),e.jsx(U,{})]})})};export{M as default};
//# sourceMappingURL=About-hcaTVKpt.js.map
