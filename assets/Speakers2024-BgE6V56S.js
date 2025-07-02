import{y as d,p as c,h as o,x as l,e as t,l as k,m as T,d as I,r as h,n as v,j as e,S as L,f as b,M as C,B,i as P}from"./index-BzYEnzbL.js";import{S as $}from"./SpeakersCard-DveJ7yzX.js";try{let i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new i.Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="2713af17-42f5-45f2-bb56-530a4100b2e1",i._sentryDebugIdIdentifier="sentry-dbid-2713af17-42f5-45f2-bb56-530a4100b2e1")}catch{}const R=o.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (min-width: ${d}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${c}px) {
    padding: 0 10rem;
  }
`,A=o.img`
  position: absolute;
  left: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${c}px) {
    height: 10rem;
  }
`,W=o.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${c}px) {
    height: 10rem;
  }
`,p=o(l.div)`
  position: absolute;
  top: ${({positionPercentage:i})=>i};
  left: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`,m=o(l.div)`
  position: absolute;
  top: ${({positionPercentage:i})=>i};
  right: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`,a=o(l.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${({color:i})=>i};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,_=o.div`
  background: ${t.WHITE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${d}px) {
    height: 16rem;
  }
`,D=o.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: center;
  z-index: 1;
  @media (min-width: ${d}px) {
    padding: 5rem 0;
  }
`,F=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{src:"/images/LessThanBlueIcon.svg"}),e.jsx(W,{src:"/images/MoreThanBlueIcon.svg"})]}),K=({year:i,webData:n})=>{const{width:x}=k(),g=new Date,u=(r,E)=>r<new Date&&E>g,{error:f,data:s,isLoading:y}=T(i);I(f);const j=h.useCallback(()=>{v("CFP","CFP")},[]);h.useEffect(()=>{document.title=`Speakers — ${n.title} — ${n.edition}`},[n.title,n.edition]);const S=new Date(n.cfp.startDay),w=new Date(n.cfp.endDay);return e.jsxs(e.Fragment,{children:[e.jsx(L,{color:t.DARK_BLUE,marginTop:5,children:e.jsxs(R,{children:[e.jsx(b,{title:"SPEAKERS",subtitle:`Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.`,color:t.WHITE}),x>C&&e.jsx(F,{}),e.jsxs(D,{children:[y&&e.jsx("p",{children:"Loading..."}),u(S,w)&&e.jsx("div",{style:{width:"100%",textAlign:"center",padding:"20px 30%"},children:e.jsx(B,{onClick:j,text:"📢 Apply to be a Speaker",link:n.cfp.link})}),n.hideSpeakers?e.jsx("p",{style:{color:t.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):(s==null?void 0:s.length)===0?e.jsx("p",{style:{color:t.WHITE},children:"No selected speakers yet. Keep in touch in our social media for upcoming announcements"}):s==null?void 0:s.map(r=>e.jsx($,{year:n.edition,speaker:r},r.id))]}),e.jsx(m,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"20%",children:e.jsxs(a,{color:t.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(p,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"40%",children:e.jsxs(a,{color:t.DARK_BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(m,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},positionPercentage:"60%",children:e.jsxs(a,{color:t.BLUE,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(p,{initial:{x:"-100%"},animate:{x:0},transition:{duration:4},positionPercentage:"80%",children:e.jsxs(a,{color:t.YELLOW,children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})}),e.jsx(_,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#002454"}})})})]})},N=()=>e.jsx(K,{year:"2024",webData:P});export{N as Speakers2024};
//# sourceMappingURL=Speakers2024-BgE6V56S.js.map
