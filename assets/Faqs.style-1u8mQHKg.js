import{a as e,m as n,C as i,b as a,l as r}from"./index-DxZQvJw7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"04b4d4293ccff9bffe89eef70b331b85846896f6"};var o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="70b9c52e-72f8-4dc5-80fc-482c2d926d58",t._sentryDebugIdIdentifier="sentry-dbid-70b9c52e-72f8-4dc5-80fc-482c2d926d58")}catch{}})();const d=r`
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
  }`,l=e(n.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`,c=e.div`
  background: ${i.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`,p=e.img`
  position: absolute;
  right: 0;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,g=e.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,h=e.img`
  margin: 3px;
  padding: 5px;
  aspect-ratio: 1.5;
  border: 1px solid ${i.YELLOW};
  border-radius: 100% 0 100% 0 / 15% 89% 11% 85%;
  animation: linear ${d} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${a}px) {
    width: 100%;
  }
`,f=e.h2`
  color: white;
  margin-bottom: 10px;
`,x=e.p`
  color: white;
  margin-bottom: 10px;
`,y=e.div`
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
`,b=e.div.withConfig({shouldForwardProp:t=>!["padding"].includes(t)})`
  position: relative;
  @media (min-width: 800px) {
    height: auto;

    padding: ${({padding:t})=>t};
  }
`,w=e(n.img)`
  border: 1px solid ${i.YELLOW};
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
`,u=e(n.div)`
  display: flex;
  flex-direction: column;
  color: ${i.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({align:t})=>t};
  }
`,S=e.h2`
  padding-top: 1rem;
  color: ${i.YELLOW};
  font-size: 1.8em;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`,v=e.p`
  padding: 0.5rem 2rem;
  text-align: left;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
  }

  ul {
    margin: 0.5rem 2rem;
  }
`,I=e.a`
  color: ${i.LIGHT_BLUE};
  text-decoration: none !important;
  transition: all 0.25s ease-in-out;

  &:hover {
    font-weight: bold;
    text-decoration: none;
    color: ${i.YELLOW};
  }

  &:visited {
    color: ${i.MAGENTA};
    text-decoration: none;
  }
`;export{y as S,b as a,w as b,u as c,S as d,v as e,l as f,f as g,h,x as i,I as j,p as k,g as l,c as m};
//# sourceMappingURL=Faqs.style-1u8mQHKg.js.map
