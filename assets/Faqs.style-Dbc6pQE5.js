import{a as i,m as o,C as t,b as a,l as r}from"./index-Dz5yjJzY.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"52bc7d35c9b3d870e073cc76ab1f542529b41c21"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="70b9c52e-72f8-4dc5-80fc-482c2d926d58",e._sentryDebugIdIdentifier="sentry-dbid-70b9c52e-72f8-4dc5-80fc-482c2d926d58")})()}catch{}const d=r`
  from {
    opacity: 0;
    translate: 0 100px;
  }
  50% {
    opacity: .5;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }`,s=i(o.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`,m=i.div`
  background: ${t.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`,c=i.img`
  position: absolute;
  right: 0;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,p=i.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,g=i.img`
  margin: 3px;
  padding: 5px;
  aspect-ratio: 1.5;
  border: 1px solid ${t.YELLOW};
  border-radius: 100% 0 100% 0 / 15% 89% 11% 85%;
  animation: linear ${d} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${a}px) {
    width: 100%;
  }
`,h=i.h2`
  color: white;
  margin-bottom: 10px;
`,f=i.p`
  color: white;
  margin-bottom: 10px;
`,y=i.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-bottom: 3rem;
  @media (min-width: 800px) {
    align-items: flex-start;
    max-width: 900px;
    margin-bottom: 4rem;
  }
`,x=i.div.withConfig({shouldForwardProp:e=>!["padding"].includes(e)})`
  position: relative;
  @media (min-width: 800px) {
    height: auto;

    padding: ${({padding:e})=>e};
  }
`,b=i(o.img)`
  border: 1px solid ${t.YELLOW};
  display: block;
  height: 242px;
  margin: 3px;
  padding: 5px;
  width: 360px;
  border-radius: 92% 8% 90% 10% / 9% 90% 10% 91%;
  animation: linear ${d} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${a}px) {
    display: none;
  }
`,w=i(o.div)`
  display: flex;
  flex-direction: column;
  color: ${t.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({align:e})=>e};
  }
`,u=i.h2`
  padding-top: 1rem;
  color: ${t.YELLOW};
  font-size: 1.8em;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`,S=i.p`
  padding: 0.5rem 2rem;
  text-align: left;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
  }

  ul {
    margin: 0.5rem 2rem;
  }
`,v=i.a`
  color: ${t.LIGHT_BLUE};
  text-decoration: none !important;
  transition: all 0.25s ease-in-out;

  &:hover {
    font-weight: bold;
    text-decoration: none;
    color: ${t.YELLOW};
  }

  &:visited {
    color: ${t.MAGENTA};
    text-decoration: none;
  }
`;export{y as S,x as a,b,w as c,u as d,S as e,s as f,h as g,g as h,f as i,v as j,c as k,p as l,m};
//# sourceMappingURL=Faqs.style-Dbc6pQE5.js.map
