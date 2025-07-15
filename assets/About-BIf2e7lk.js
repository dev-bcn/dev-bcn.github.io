import{e as t,j as e,r as s,s as a,t as i,m as l,h as d,S as c,f as p,M as m,i as n,k as b}from"./index-B94Oy_eG.js";import{L as h}from"./Linkedin-RgL4Pyql.js";import{S as f,a as u,b as g,c as w,d as j}from"./Style.AboutCard-CIJRzB1X.js";import{S as x,f as U,g as y}from"./Speakers.style--UuwSgPn.js";import{d as S}from"./Talks.style-CTY6Rx3_.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="2977154f-c363-4c84-9ab4-a1866f802b3d",o._sentryDebugIdIdentifier="sentry-dbid-2977154f-c363-4c84-9ab4-a1866f802b3d")}catch{}const L=[{id:1,name:"Jonathan Vila",nameColor:t.BLUE,job:"Java developer",jobColor:t.DARK_BLUE,profileUrl:new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),twitterUrl:new URL("https://twitter.com/vilojona"),linkedinUrl:new URL("https://www.linkedin.com/in/jonathanvila")},{id:2,name:"Nacho Cougil",nameColor:t.DARK_BLUE,job:"Java engineer",jobColor:t.BLUE,profileUrl:new URL("https://www.devbcn.com/images/nacho.jpg"),twitterUrl:new URL("https://twitter.com/icougil"),linkedinUrl:new URL("https://www.linkedin.com/in/icougil")}],I=({person:o})=>e.jsxs(f,{children:[e.jsx(s.Suspense,{fallback:e.jsx(a,{src:"/images/logo.svg"}),children:e.jsx(u,{src:o.profileUrl.href})}),e.jsx(g,{color:o.nameColor,children:o.name}),e.jsx(w,{color:o.jobColor,children:o.job}),e.jsxs(j,{children:[e.jsx(i,{color:o.nameColor,twitterUrl:o.twitterUrl.href}),e.jsx(h,{color:o.nameColor,linkedinUrl:o.linkedinUrl.href})]})]}),k=n.div`
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
`,D=()=>{const{width:o}=l();return d("About us",b.edition),e.jsx(c,{color:t.WHITE,marginTop:8,children:e.jsxs(x,{children:[e.jsx(p,{title:"ABOUT US",subtitle:"The Barcelona Developers Conference - DevBcn",color:t.BLUE}),o>m&&e.jsxs(e.Fragment,{children:[e.jsx(U,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(y,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(k,{children:L.map(r=>e.jsx(I,{person:r},r.id))}),e.jsx("p",{children:e.jsx(v,{href:"https://eepurl.com/ifxXl9",rel:"noreferrer",target:"_blank",children:"📨 Subscribe to our news here"})}),e.jsx(S,{})]})})};export{D as default};
//# sourceMappingURL=About-BIf2e7lk.js.map
