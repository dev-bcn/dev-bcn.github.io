import{y as a,p as d,h as o,x as c,e as n,l as k,m as T,d as I,r as h,n as v,j as e,S as L,f as b,M as C,B,i as P}from"./index-jVvh25dM.js";import{S as $}from"./SpeakersCard-CJNczhXs.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new t.Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="2713af17-42f5-45f2-bb56-530a4100b2e1",t._sentryDebugIdIdentifier="sentry-dbid-2713af17-42f5-45f2-bb56-530a4100b2e1")}catch{}const R=o.section`
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
`,W=o.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${d}px) {
    height: 10rem;
  }
`,p=o(c.div)`
  position: absolute;
  top: ${({positionPercentage:t})=>t};
  left: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`,m=o(c.div)`
  position: absolute;
  top: ${({positionPercentage:t})=>t};
  right: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`,r=o(c.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${({color:t})=>t};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,_=o.div`
  background: ${n.WHITE};
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
`,F=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{src:"/images/LessThanBlueIcon.svg"}),e.jsx(W,{src:"/images/MoreThanBlueIcon.svg"})]}),K=({year:t,webData:i})=>{const{width:x}=k(),g=new Date,u=(s,E)=>s<new Date&&E>g,{error:f,data:l,isLoading:y}=T(t);I(f);const j=h.useCallback(()=>{v("CFP","CFP")},[]);h.useEffect(()=>{document.title=`Speakers — ${i.title} — ${i.edition}`},[i.title,i.edition]);const S=new Date(i.cfp.startDay),w=new Date(i.cfp.endDay);return e.jsxs(e.Fragment,{children:[e.jsx(L,{color:n.DARK_BLUE,marginTop:5,children:e.jsxs(R,{children:[e.jsx(b,{title:"SPEAKERS",subtitle:`Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.`,color:n.WHITE}),x>C&&e.jsx(F,{}),e.jsxs(D,{children:[y&&e.jsx("p",{children:"Loading..."}),u(S,w)&&e.jsx("div",{style:{width:"100%",textAlign:"center",padding:"20px 30%"},children:e.jsx(B,{onClick:j,text:"📢 Apply to be a Speaker",link:i.cfp.link})}),i.hideSpeakers?e.jsx("p",{style:{color:n.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):l?.length===0?e.jsx("p",{style:{color:n.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):l?.map(s=>e.jsx($,{year:i.edition,speaker:s},s.id))]}),e.jsx(m,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"20%",children:e.jsxs(r,{color:n.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(p,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"40%",children:e.jsxs(r,{color:n.DARK_BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(m,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"60%",children:e.jsxs(r,{color:n.BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(p,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"80%",children:e.jsxs(r,{color:n.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})}),e.jsx(_,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#002454"}})})})]})},N=()=>e.jsx(K,{year:"2024",webData:P});export{N as Speakers2024};
//# sourceMappingURL=Speakers2024-B0r8jwH2.js.map
