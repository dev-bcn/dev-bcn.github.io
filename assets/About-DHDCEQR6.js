import{C as t,j as e,r as a,S as i,d as s,M as l,a as n,e as c}from"./index-Bf7dU0ol.js";import{T as d}from"./TitleSection-DStZh3q4.js";import{S as m}from"./SectionWrapper-DvCZzwLC.js";import{u as p}from"./useDocumentTitleUpdate-CD-FCRIY.js";import{L as f}from"./Linkedin-BVvFJh1m.js";import{T as b}from"./Twitter-v-ar5oDN.js";import{S as u,a as h,b as w,c as g,d as x}from"./Style.AboutCard-D-0LqW2r.js";import{S as j,a as S,b as U}from"./Speakers.style-CTYPovCr.js";import{S as y}from"./Talks.style-eysULEbD.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"cc88881176b8ee5ca638fff598da07f6a9205048"};var r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="dee24c16-8a58-4c02-b0cc-3ff5610c1cca",o._sentryDebugIdIdentifier="sentry-dbid-dee24c16-8a58-4c02-b0cc-3ff5610c1cca")}catch{}})();const L=[{id:1,name:"Jonathan Vila",nameColor:t.BLUE,job:"Developer Advocate",jobColor:t.DARK_BLUE,profileUrl:new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),twitterUrl:new URL("https://twitter.com/vilojona"),linkedinUrl:new URL("https://www.linkedin.com/in/jonathanvila")},{id:2,name:"Nacho Cougil",nameColor:t.DARK_BLUE,job:"Java Engineer",jobColor:t.BLUE,profileUrl:new URL("https://www.devbcn.com/images/nacho.webp"),twitterUrl:new URL("https://twitter.com/icougil"),linkedinUrl:new URL("https://www.linkedin.com/in/icougil")}],E=({person:o})=>e.jsxs(u,{children:[e.jsx(a.Suspense,{fallback:e.jsx(i,{src:"/images/logo.svg"}),children:e.jsx(h,{src:o.profileUrl.href})}),e.jsx(w,{color:o.nameColor,children:o.name}),e.jsx(g,{color:o.jobColor,children:o.job}),e.jsxs(x,{children:[e.jsx(b,{color:o.nameColor,twitterUrl:o.twitterUrl.href}),e.jsx(f,{color:o.nameColor,linkedinUrl:o.linkedinUrl.href})]})]}),I=n.div`
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,v=n.a`
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
`,N=()=>{const{width:o}=s();return p("About us",c.edition),e.jsx(m,{color:t.WHITE,marginTop:8,children:e.jsxs(j,{children:[e.jsx(d,{title:"ABOUT US",subtitle:"The Barcelona Developers Conference - DevBcn",color:t.BLUE}),o>l&&e.jsxs(e.Fragment,{children:[e.jsx(S,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(U,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(I,{children:L.map(r=>e.jsx(E,{person:r},r.id))}),e.jsx("p",{children:e.jsx(v,{href:"https://eepurl.com/ifxXl9",rel:"noreferrer",target:"_blank",children:"📨 Subscribe to our news here"})}),e.jsx(y,{})]})})};export{N as default};
//# sourceMappingURL=About-DHDCEQR6.js.map
