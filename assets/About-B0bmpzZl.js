import{C as t,j as e,r as i,S as a,c as l,M as s,d as n,e as d}from"./index-DBq9B7NS.js";import{T as c}from"./TitleSection-kXTgaLcq.js";import{S as f}from"./SectionWrapper-DEt-wS7G.js";import{u as p}from"./useDocumentTitleUpdate-ra_tKxLM.js";import{L as b}from"./Linkedin-DnqUGgPv.js";import{T as m}from"./Twitter-B8izmZM7.js";import{S as u,a as h,b as g,c as w,d as j}from"./Style.AboutCard-Efg1rLSz.js";import{S as x,a as y,b as S}from"./Speakers.style-CNh9EARm.js";import{S as U}from"./Talks.style-DO8mbkwJ.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"99ff0447b117b6e8e33c99248e69f25294ae7926"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="4bb0e23d-d86b-41ed-a5a1-d690cf027e19",o._sentryDebugIdIdentifier="sentry-dbid-4bb0e23d-d86b-41ed-a5a1-d690cf027e19")})()}catch{}const L=[{id:1,name:"Jonathan Vila",nameColor:t.BLUE,job:"Developer Advocate",jobColor:t.DARK_BLUE,profileUrl:new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),twitterUrl:new URL("https://twitter.com/vilojona"),linkedinUrl:new URL("https://www.linkedin.com/in/jonathanvila")},{id:2,name:"Nacho Cougil",nameColor:t.DARK_BLUE,job:"Java Engineer",jobColor:t.BLUE,profileUrl:new URL("https://www.devbcn.com/images/nacho.jpg"),twitterUrl:new URL("https://twitter.com/icougil"),linkedinUrl:new URL("https://www.linkedin.com/in/icougil")}],E=({person:o})=>e.jsxs(u,{children:[e.jsx(i.Suspense,{fallback:e.jsx(a,{src:"/images/logo.svg"}),children:e.jsx(h,{src:o.profileUrl.href})}),e.jsx(g,{color:o.nameColor,children:o.name}),e.jsx(w,{color:o.jobColor,children:o.job}),e.jsxs(j,{children:[e.jsx(m,{color:o.nameColor,twitterUrl:o.twitterUrl.href}),e.jsx(b,{color:o.nameColor,linkedinUrl:o.linkedinUrl.href})]})]}),T=n.div`
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
`,M=()=>{const{width:o}=l();return p("About us",d.edition),e.jsx(f,{color:t.WHITE,marginTop:8,children:e.jsxs(x,{children:[e.jsx(c,{title:"ABOUT US",subtitle:"The Barcelona Developers Conference - DevBcn",color:t.BLUE}),o>s&&e.jsxs(e.Fragment,{children:[e.jsx(y,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(S,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(T,{children:L.map(r=>e.jsx(E,{person:r},r.id))}),e.jsx("p",{children:e.jsx(I,{href:"https://eepurl.com/ifxXl9",rel:"noreferrer",target:"_blank",children:"📨 Subscribe to our news here"})}),e.jsx(U,{})]})})};export{M as default};
//# sourceMappingURL=About-B0bmpzZl.js.map
