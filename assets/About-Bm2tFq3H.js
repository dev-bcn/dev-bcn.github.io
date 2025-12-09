import{f as t,j as e,r as a,t as l,v as s,n as i,i as d,S as c,g as f,M as p,k as n,l as m}from"./index-CONcevrw.js";import{L as h}from"./Linkedin-BkjsOcFp.js";import{S as u,a as b,b as g,c as w,d as j}from"./Style.AboutCard-CzaYh53p.js";import{S as x,f as U,g as y}from"./Speakers.style-CKtpUXYG.js";import{d as S}from"./Talks.style-BHTmtKRx.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="f3e4d9fa-45a0-422f-8013-f416316c388a",o._sentryDebugIdIdentifier="sentry-dbid-f3e4d9fa-45a0-422f-8013-f416316c388a")}catch{}const L=[{id:1,name:"Jonathan Vila",nameColor:t.BLUE,job:"Java developer",jobColor:t.DARK_BLUE,profileUrl:new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),twitterUrl:new URL("https://twitter.com/vilojona"),linkedinUrl:new URL("https://www.linkedin.com/in/jonathanvila")},{id:2,name:"Nacho Cougil",nameColor:t.DARK_BLUE,job:"Java engineer",jobColor:t.BLUE,profileUrl:new URL("https://www.devbcn.com/images/nacho.jpg"),twitterUrl:new URL("https://twitter.com/icougil"),linkedinUrl:new URL("https://www.linkedin.com/in/icougil")}],I=({person:o})=>e.jsxs(u,{children:[e.jsx(a.Suspense,{fallback:e.jsx(l,{src:"/images/logo.svg"}),children:e.jsx(b,{src:o.profileUrl.href})}),e.jsx(g,{color:o.nameColor,children:o.name}),e.jsx(w,{color:o.jobColor,children:o.job}),e.jsxs(j,{children:[e.jsx(s,{color:o.nameColor,twitterUrl:o.twitterUrl.href}),e.jsx(h,{color:o.nameColor,linkedinUrl:o.linkedinUrl.href})]})]}),v=n.div`
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
`,D=()=>{const{width:o}=i();return d("About us",m.edition),e.jsx(c,{color:t.WHITE,marginTop:8,children:e.jsxs(x,{children:[e.jsx(f,{title:"ABOUT US",subtitle:"The Barcelona Developers Conference - DevBcn",color:t.BLUE}),o>p&&e.jsxs(e.Fragment,{children:[e.jsx(U,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(y,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(v,{children:L.map(r=>e.jsx(I,{person:r},r.id))}),e.jsx("p",{children:e.jsx(k,{href:"https://eepurl.com/ifxXl9",rel:"noreferrer",target:"_blank",children:"📨 Subscribe to our news here"})}),e.jsx(S,{})]})})};export{D as default};
//# sourceMappingURL=About-Bm2tFq3H.js.map
