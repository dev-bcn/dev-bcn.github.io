import{e as i,h as e,a3 as n,p as a,x as o}from"./index-B3NPsfqm.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="933c43da-427a-4623-b513-64869118a851",t._sentryDebugIdIdentifier="sentry-dbid-933c43da-427a-4623-b513-64869118a851")}catch{}const r=e.div`
  padding: 70px 0 40px;
  background: linear-gradient(-45deg, ${i.LIGHT_BLUE}, ${i.MAGENTA}, ${i.DARK_BLUE}, ${i.GREEN});
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`,m=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,l=e.div`
  background-color: ${t=>t.color??i.DARK_BLUE};
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${a}px) {
    width: 80%;
  }
`,g=e.h1`
  padding: 0.5rem 1rem;
  color: ${i.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,h=e.h2`
  color: ${t=>t.color??i.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;
  padding: 0.25rem;

  a {
    text-decoration: none;
    color: ${i.LIGHT_BLUE};
  }
`,p=e(o.img)`
  height: 7rem;
  position: absolute;
  top: 50%;
  left: 5rem;
  animation: StyledLessThanAnimation 6s infinite linear;

  @keyframes StyledLessThanAnimation {
    0% {
      transform: rotate(0deg) translate(-20px) rotate(0deg);
    }
    80% {
      transform: rotate(360deg) translate(-20px) rotate(-360deg);
    }
    90% {
      transform: translate(-5px);
    }
    100% {
      transform: translate(-20px);
    }
  }
`,c=e(o.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`,f=e(o.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`,x=e(o.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${i.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,y=e(o.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${i.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,u=e.img`
  margin: 20px;
  height: 20rem;
  aspect-ratio: 800/327;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${n}px) {
    height: 15rem;
  }
  @media (max-width: ${a}px) {
    height: 8rem;
  }
`,b=e.img`
  margin-top: 4em;
  margin-left: 2em;
  height: 13rem;
  transition: height 0.2s ease-in-out;
  aspect-ratio: 800/327;
  @media (max-width: ${n}px) {
    height: 12rem;
    margin: 0;
  }
  @media (max-width: ${a}px) {
    margin-top: 0;
    margin-left: 2.5em;
    margin-right: 2.5em;
    padding: 1em;
    height: 10rem;
  }
`,S=e.span`
  color: white;
  font-size: 5em;
  display: block;
  padding-top: 1.5em;
  text-shadow: 3px 3px #000;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${n}px) {
    margin: 0;
    padding: 0;
    font-size: 3em;
  }
  @media (max-width: ${a}px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`,w=e.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;

  @media (max-width: ${n}px) {
    flex-direction: column;
  }

  @media (max-width: ${a}px) {
    flex-direction: column;
  }
`;export{r as S,m as a,w as b,u as c,S as d,b as e,l as f,g,h,p as i,f as j,x as k,c as l,y as m};
//# sourceMappingURL=Style.Home-DdRCvIB_.js.map
