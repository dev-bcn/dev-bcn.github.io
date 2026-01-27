import{T as d,b as o,a as i,C as r,j as t}from"./index-ju5_CuzO.js";import{L as a}from"./Linkedin-CqiyEr36.js";import{T as l}from"./Twitter-Bd0RrKMC.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4ae28ff4-de66-494c-a081-4cff41bcee15",e._sentryDebugIdIdentifier="sentry-dbid-4ae28ff4-de66-494c-a081-4cff41bcee15")}catch{}})();const L=i.div`
  width: 100%;
  padding: 0 2rem;
  @media (min-width: ${d}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${o}px) {
    padding: 0 10rem;
  }
`,j=i.img`
  position: absolute;
  left: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: ${o}px) {
    height: 10rem;
    top: 0;
  }
`,y=i.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: ${o}px) {
    height: 10rem;
    top: 0;
  }
`,m=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 1rem 2rem;
  width: 90%;

  @media (min-width: ${o}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: ${o}px) {
    padding-bottom: 15rem;
  }

  svg {
    max-width: 18px;
    max-height: 18px;
  }
`,s=i.img`
  width: 100%;
  margin: 0 auto 1.5rem;
  text-align: center;
  border-radius: 2rem;
  padding-top: 0.5rem;

  @media (min-width: 768px) {
    max-width: none;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`,g=i.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem;
`,T=i.a`
  text-decoration: none;
  text-transform: uppercase;
  padding-left: 1rem;
  color: ${r.MAGENTA};
  font-weight: bold;
`,c=i.p`
  margin: 0.8rem 1rem;
  text-align: left;
  color: ${r.DARK_BLUE};
`,f=i.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${r.DARK_GREEN};
`,p=i.p`
  margin-bottom: 1rem;
  color: ${r.DARK_BLUE};
  text-align: left;

  p {
    margin: initial;
    padding: 0.2rem 1rem;
  }

  ul {
    margin-bottom: 1rem;
    margin-left: 2rem;
    padding-left: 2rem;
  }
`,h=i.p`
  margin-bottom: 1rem;
  color: ${r.GREEN};
`,x=i.a`
  color: ${r.MAGENTA};
  font-weight: bold;
`,_=i.div`
{
  padding: 1.5rem;
  position: sticky;
  top: 64px;
  text-align: center;
  background-color: ${r.WHITE};
}

  @media (max-width: ${o}px) {
    background-color: ${r.YELLOW};
    top: 49px;
  }
`,$=({company:e})=>t.jsxs(m,{id:e.name.replaceAll(" ","-").toLowerCase(),children:[t.jsxs("div",{style:{flex:"0 0 30%",height:"55vh",backgroundColor:r.SKY_BLUE,padding:"0.5rem",borderRadius:"2rem"},children:[t.jsx("a",{style:{textAlign:"center"},target:"_blank",rel:"noreferrer noopener",href:e.url,children:t.jsx(s,{src:e.logo,alt:`${e.name} logo`})}),t.jsx(g,{children:e.name}),t.jsx(c,{children:e.description}),t.jsxs("p",{style:{margin:"1rem"},children:[e.linkedin&&t.jsx(a,{color:r.DARK_BLUE,linkedinUrl:e.linkedin}),e.twitter&&t.jsx(l,{color:r.DARK_BLUE,twitterUrl:e.twitter})]})]}),t.jsx("div",{style:{flex:"0 0 70%"},children:e.offers.map(n=>t.jsxs("div",{style:{padding:"0.5rem 1rem"},children:[t.jsx(f,{children:n.title}),t.jsx(h,{children:n.location}),t.jsx(p,{dangerouslySetInnerHTML:{__html:n.text}}),t.jsx(x,{href:n.url,target:"_blank",rel:"noopener noreferrer",children:"Learn more"})]},n.id))})]});export{_ as C,L as S,T as a,$ as b,j as c,y as d};
//# sourceMappingURL=CompanyOffers-r67xHYjx.js.map
