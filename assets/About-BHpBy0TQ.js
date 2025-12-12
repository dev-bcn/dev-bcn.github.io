import{f as t,j as e,r as a,t as i,v as l,n as s,i as d,S as c,g as f,M as p,k as r,l as u}from"./index-CCCx7afu.js";import{L as h}from"./Linkedin-BnRyfClo.js";import{S as b,a as m,b as g,c as w,d as j}from"./Style.AboutCard-CuRW2Dax.js";import{S as x,f as y,g as U}from"./Speakers.style-C_Y7uD54.js";import{d as S}from"./Talks.style-FG3FTQQT.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"72a4cf5720848119ec298979f4df7ce2e1a1c7f0"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new o.Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="f3e4d9fa-45a0-422f-8013-f416316c388a",o._sentryDebugIdIdentifier="sentry-dbid-f3e4d9fa-45a0-422f-8013-f416316c388a")})()}catch{}const L=[{id:1,name:"Jonathan Vila",nameColor:t.BLUE,job:"Java developer",jobColor:t.DARK_BLUE,profileUrl:new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),twitterUrl:new URL("https://twitter.com/vilojona"),linkedinUrl:new URL("https://www.linkedin.com/in/jonathanvila")},{id:2,name:"Nacho Cougil",nameColor:t.DARK_BLUE,job:"Java engineer",jobColor:t.BLUE,profileUrl:new URL("https://www.devbcn.com/images/nacho.jpg"),twitterUrl:new URL("https://twitter.com/icougil"),linkedinUrl:new URL("https://www.linkedin.com/in/icougil")}],v=({person:o})=>e.jsxs(b,{children:[e.jsx(a.Suspense,{fallback:e.jsx(i,{src:"/images/logo.svg"}),children:e.jsx(m,{src:o.profileUrl.href})}),e.jsx(g,{color:o.nameColor,children:o.name}),e.jsx(w,{color:o.jobColor,children:o.job}),e.jsxs(j,{children:[e.jsx(l,{color:o.nameColor,twitterUrl:o.twitterUrl.href}),e.jsx(h,{color:o.nameColor,linkedinUrl:o.linkedinUrl.href})]})]}),E=r.div`
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,I=r.a`
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
`,R=()=>{const{width:o}=s();return d("About us",u.edition),e.jsx(c,{color:t.WHITE,marginTop:8,children:e.jsxs(x,{children:[e.jsx(f,{title:"ABOUT US",subtitle:"The Barcelona Developers Conference - DevBcn",color:t.BLUE}),o>p&&e.jsxs(e.Fragment,{children:[e.jsx(y,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(U,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(E,{children:L.map(n=>e.jsx(v,{person:n},n.id))}),e.jsx("p",{children:e.jsx(I,{href:"https://eepurl.com/ifxXl9",rel:"noreferrer",target:"_blank",children:"📨 Subscribe to our news here"})}),e.jsx(S,{})]})})};export{R as default};
//# sourceMappingURL=About-BHpBy0TQ.js.map
