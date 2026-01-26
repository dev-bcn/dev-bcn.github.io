import{T as d,b as o,a as i,C as n,j as t}from"./index-B0NYpmE8.js";import{L as a}from"./Linkedin-DCkxVcNR.js";import{T as l}from"./Twitter-x0mT7-qI.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"6ae1c6cdbc3492e89e3876345e5d69524af00f6f"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="4ae28ff4-de66-494c-a081-4cff41bcee15",e._sentryDebugIdIdentifier="sentry-dbid-4ae28ff4-de66-494c-a081-4cff41bcee15")})()}catch{}const y=i.div`
  width: 100%;
  padding: 0 2rem;
  @media (min-width: ${d}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${o}px) {
    padding: 0 10rem;
  }
`,E=i.img`
  position: absolute;
  left: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: ${o}px) {
    height: 10rem;
    top: 0;
  }
`,L=i.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: ${o}px) {
    height: 10rem;
    top: 0;
  }
`,s=i.div`
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
`,m=i.img`
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
  color: ${n.MAGENTA};
  font-weight: bold;
`,c=i.p`
  margin: 0.8rem 1rem;
  text-align: left;
  color: ${n.DARK_BLUE};
`,f=i.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${n.DARK_GREEN};
`,p=i.p`
  margin-bottom: 1rem;
  color: ${n.DARK_BLUE};
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
  color: ${n.GREEN};
`,x=i.a`
  color: ${n.MAGENTA};
  font-weight: bold;
`,j=i.div`
{
  padding: 1.5rem;
  position: sticky;
  top: 64px;
  text-align: center;
  background-color: ${n.WHITE};
}

  @media (max-width: ${o}px) {
    background-color: ${n.YELLOW};
    top: 49px;
  }
`,_=({company:e})=>t.jsxs(s,{id:e.name.replaceAll(" ","-").toLowerCase(),children:[t.jsxs("div",{style:{flex:"0 0 30%",height:"55vh",backgroundColor:n.SKY_BLUE,padding:"0.5rem",borderRadius:"2rem"},children:[t.jsx("a",{style:{textAlign:"center"},target:"_blank",rel:"noreferrer noopener",href:e.url,children:t.jsx(m,{src:e.logo,alt:`${e.name} logo`})}),t.jsx(g,{children:e.name}),t.jsx(c,{children:e.description}),t.jsxs("p",{style:{margin:"1rem"},children:[e.linkedin&&t.jsx(a,{color:n.DARK_BLUE,linkedinUrl:e.linkedin}),e.twitter&&t.jsx(l,{color:n.DARK_BLUE,twitterUrl:e.twitter})]})]}),t.jsx("div",{style:{flex:"0 0 70%"},children:e.offers.map(r=>t.jsxs("div",{style:{padding:"0.5rem 1rem"},children:[t.jsx(f,{children:r.title}),t.jsx(h,{children:r.location}),t.jsx(p,{dangerouslySetInnerHTML:{__html:r.text}}),t.jsx(x,{href:r.url,target:"_blank",rel:"noopener noreferrer",children:"Learn more"})]},r.id))})]});export{j as C,y as S,T as a,_ as b,E as c,L as d};
//# sourceMappingURL=CompanyOffers-kE9DwlQl.js.map
