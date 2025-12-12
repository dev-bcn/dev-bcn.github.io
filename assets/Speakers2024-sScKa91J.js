import{z as a,s as d,k as o,y as c,f as t,n as T,o as k,e as v,r as h,p as I,j as e,S as L,g as b,M as C,B,l as P}from"./index-CCCx7afu.js";import{S as R}from"./SpeakersCard-CAgpocG0.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"72a4cf5720848119ec298979f4df7ce2e1a1c7f0"}}catch{}})();try{(function(){var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="ab70a002-2975-477a-88fe-8eae98cc314c",n._sentryDebugIdIdentifier="sentry-dbid-ab70a002-2975-477a-88fe-8eae98cc314c")})()}catch{}const $=o.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (min-width: ${a}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${d}px) {
    padding: 0 10rem;
  }
`,A=o.img`
  position: absolute;
  left: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${d}px) {
    height: 10rem;
  }
`,_=o.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${d}px) {
    height: 10rem;
  }
`,p=o(c.div)`
  position: absolute;
  top: ${({positionPercentage:n})=>n};
  left: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`,m=o(c.div)`
  position: absolute;
  top: ${({positionPercentage:n})=>n};
  right: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`,r=o(c.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${({color:n})=>n};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,W=o.div`
  background: ${t.WHITE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${a}px) {
    height: 16rem;
  }
`,D=o.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: center;
  z-index: 1;
  @media (min-width: ${a}px) {
    padding: 5rem 0;
  }
`,F=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{src:"/images/LessThanBlueIcon.svg"}),e.jsx(_,{src:"/images/MoreThanBlueIcon.svg"})]}),K=({year:n,webData:i})=>{const{width:f}=T(),g=new Date,x=(s,E)=>s<new Date&&E>g,{error:u,data:l,isLoading:y}=k(n);v(u);const S=h.useCallback(()=>{I("CFP","CFP")},[]);h.useEffect(()=>{document.title=`Speakers — ${i.title} — ${i.edition}`},[i.title,i.edition]);const j=new Date(i.cfp.startDay),w=new Date(i.cfp.endDay);return e.jsxs(e.Fragment,{children:[e.jsx(L,{color:t.DARK_BLUE,marginTop:5,children:e.jsxs($,{children:[e.jsx(b,{title:"SPEAKERS",subtitle:`Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.`,color:t.WHITE}),f>C&&e.jsx(F,{}),e.jsxs(D,{children:[y&&e.jsx("p",{children:"Loading..."}),x(j,w)&&e.jsx("div",{style:{width:"100%",textAlign:"center",padding:"20px 30%"},children:e.jsx(B,{onClick:S,text:"📢 Apply to be a Speaker",link:i.cfp.link})}),i.hideSpeakers?e.jsx("p",{style:{color:t.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):l?.length===0?e.jsx("p",{style:{color:t.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):l?.map(s=>e.jsx(R,{year:i.edition,speaker:s},s.id))]}),e.jsx(m,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"20%",children:e.jsxs(r,{color:t.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(p,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"40%",children:e.jsxs(r,{color:t.DARK_BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(m,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"60%",children:e.jsxs(r,{color:t.BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(p,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"80%",children:e.jsxs(r,{color:t.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})}),e.jsx(W,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#002454"}})})})]})},M=()=>e.jsx(K,{year:"2024",webData:P});export{M as Speakers2024};
//# sourceMappingURL=Speakers2024-sScKa91J.js.map
