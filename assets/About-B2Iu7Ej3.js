import{e as t,j as e,r as a,q as s,s as i,l,g as c,S as d,f as p,M as m,h as n,i as h}from"./index-f6AcWmxj.js";import{L as u}from"./Linkedin-DCWV8ruP.js";import{S as b,a as f,b as g,c as j,d as x}from"./Style.AboutCard-DcaxeZQF.js";import{S as w,f as U,g as y}from"./Speakers.style-B4NT8tR0.js";import{d as S}from"./Talks.style-CWvPKfr_.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="2aeaeb09-d2c8-43aa-876e-c8e995c0c1f4",o._sentryDebugIdIdentifier="sentry-dbid-2aeaeb09-d2c8-43aa-876e-c8e995c0c1f4")}catch{}const L=[{id:1,name:"Jonathan Vila",nameColor:t.BLUE,job:"Java developer",jobColor:t.DARK_BLUE,profileUrl:new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),twitterUrl:new URL("https://twitter.com/vilojona"),linkedinUrl:new URL("https://www.linkedin.com/in/jonathanvila")},{id:2,name:"Nacho Cougil",nameColor:t.DARK_BLUE,job:"Java engineer",jobColor:t.BLUE,profileUrl:new URL("https://pbs.twimg.com/profile_images/1376512940984123393/BvU6hkHj_400x400.jpg"),twitterUrl:new URL("https://twitter.com/icougil"),linkedinUrl:new URL("https://www.linkedin.com/in/icougil")}],I=({person:o})=>e.jsxs(b,{children:[e.jsx(a.Suspense,{fallback:e.jsx(s,{src:"/images/logo.svg"}),children:e.jsx(f,{src:o.profileUrl.href})}),e.jsx(g,{color:o.nameColor,children:o.name}),e.jsx(j,{color:o.jobColor,children:o.job}),e.jsxs(x,{children:[e.jsx(i,{color:o.nameColor,twitterUrl:o.twitterUrl.href}),e.jsx(u,{color:o.nameColor,linkedinUrl:o.linkedinUrl.href})]})]}),B=n.div`
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,k=n.a`
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
`,D=()=>{const{width:o}=l();return c("About us",h.edition),e.jsx(d,{color:t.WHITE,marginTop:8,children:e.jsxs(w,{children:[e.jsx(p,{title:"ABOUT US",subtitle:"The Barcelona Developers Conference - DevBcn",color:t.BLUE}),o>m&&e.jsxs(e.Fragment,{children:[e.jsx(U,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(y,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(B,{children:L.map(r=>e.jsx(I,{person:r},r.id))}),e.jsx("p",{children:e.jsx(k,{href:"https://eepurl.com/ifxXl9",rel:"noreferrer",target:"_blank",children:"📨 Subscribe to our news here"})}),e.jsx(S,{})]})})};export{D as default};
//# sourceMappingURL=About-B2Iu7Ej3.js.map
