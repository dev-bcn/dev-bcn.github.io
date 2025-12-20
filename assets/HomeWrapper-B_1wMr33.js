import{C as t,d as a,B as p,a as l,m as n,j as e,L as c,u as y,R as b,b as w}from"./index-D9191pRk.js";import{C as S,T as j,a as E,S as T,b as D,c as g,d as s,e as R}from"./SponsorTier-CW4pB8U1.js";import{d as o}from"./2026-BGRmqx6e.js";import{u as v}from"./useDocumentTitleUpdate-EbIWCqwp.js";import{I as B,F as I}from"./InfoButtons-CeJkMam7.js";import{S as f}from"./SectionWrapper-DGLshFrA.js";import{u as L}from"./useDateInterval-DfxZc2Rt.js";import{f as A}from"./dateUtils-1egPu7_4.js";import{A as k}from"./ActionButtons-BqgaK7ZL.js";import{T as C}from"./TitleSection-DlDGLfI3.js";import"./useFetchSpeakers-X8lraada.js";import"./index-D1uZQoK6.js";import"./useSentryErrorReport-CGPM6daR.js";import"./Faqs.style-Dd2VJ4Ug.js";import"./FaqsData-D4o3Azif.js";import"./Button-BDfl_3rV.js";import"./isWithinInterval-B527fG-C.js";import"./toDate-Dpx9usXz.js";import"./format-CDqemDdO.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"aa62a24685ea664d27a72c002f252a0c5deedb13"}}catch{}})();try{(function(){var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},d=new i.Error().stack;d&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[d]="c8db8c7d-3836-4544-9ae5-5877f3796ebf",i._sentryDebugIdIdentifier="sentry-dbid-c8db8c7d-3836-4544-9ae5-5877f3796ebf")})()}catch{}const h=["/images/wtc-gemini-2.webp","/images/wtc-gemini-1.webp","/images/wtc-gemini-3.webp","images/venue/venue-1.webp","images/venue/venue-2.webp","images/venue/venue-3.webp","images/venue/venue-4.webp","images/venue/venue-5.webp"],$=a.div`
  position: relative;
  padding: 70px 0 40px;
  background-image: url(${h[Math.floor(Math.random()*h.length)]});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      -45deg,
      ${t.LIGHT_BLUE}70,
      ${t.MAGENTA}70,
      ${t.DARK_BLUE}70,
      ${t.GREEN}70
    );
    background-size: 400% 400%;
    background-position: 0 50%;
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
  }
`,_=a.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,u=a(n.div)`
  background-color: ${i=>i.color??t.DARK_BLUE}95;
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${l}px) {
    width: 80%;
  }
`,U=a(n.h1)`
  padding: 0.5rem 1rem;
  color: ${t.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,m=a(n.h2)`
  color: ${i=>i.color??t.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  font-weight: ${i=>i.fontWeight??400};
  text-shadow: ${i=>i.shadow?"2px 2px 2px rgba(0, 0, 0, 0.5)":"none"};

  padding: 0.25rem;

  a {
    text-decoration: none;
    color: ${t.LIGHT_BLUE};
  }
`;a(n.img)`
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
`;a(n.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`;a(n.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`;a(n.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;a(n.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;const P=a.img`
  margin: 20px;
  height: 13rem;
  aspect-ratio: 800/327;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${p}px) {
    height: 15rem;
  }
  @media (max-width: ${l}px) {
    height: 8rem;
  }
`;a.img`
  margin-top: 4em;
  margin-left: 2em;
  height: 13rem;
  transition: height 0.2s ease-in-out;
  aspect-ratio: 800/327;
  @media (max-width: ${p}px) {
    height: 12rem;
    margin: 0;
  }
  @media (max-width: ${l}px) {
    margin-top: 0;
    margin-left: 2.5em;
    margin-right: 2.5em;
    padding: 1em;
    height: 10rem;
  }
`;a.span`
  color: white;
  font-size: 5em;
  display: block;
  padding-top: 1.5em;
  text-shadow: 3px 3px #000;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${p}px) {
    margin: 0;
    padding: 0;
    font-size: 3em;
  }
  @media (max-width: ${l}px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`;const z=a(n.div)`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;

  @media (max-width: ${p}px) {
    flex-direction: column;
  }

  @media (max-width: ${l}px) {
    flex-direction: column;
  }
`,N=()=>{const{isTicketsDisabled:i,isSponsorDisabled:d,isCfpDisabled:x}=L(new Date,o);return e.jsx($,{children:e.jsx(f,{color:"transparent",children:e.jsxs(_,{children:[e.jsx(z,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8},children:e.jsx(P,{src:"images/logo.png",alt:"DevBcn logo"})}),e.jsxs(u,{color:t.TRANSPARENT,initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[e.jsxs(U,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:["The Barcelona Developers Conference ",o?.edition]}),e.jsxs(m,{fontWeight:600,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.8},children:[o?.trackNumber," tracks with the following topics: ",e.jsx("br",{}),o?.tracks]}),e.jsx(m,{shadow:!0,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1},children:e.jsxs("small",{children:["Past events: ",e.jsx(c,{to:"/2025",children:"2025 edition"})," |"," ",e.jsx(c,{to:"/2024",children:"2024 edition"})," |"," ",e.jsx(c,{to:"/2023",children:"2023 edition"})]})})]}),e.jsx(n.img,{src:"/images/devBcn-sponsorship.png",alt:"DevBcn sponsorship value",width:"635",height:"125",style:{aspectRatio:"127:25",maxWidth:"100%"},initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.7,delay:1.2}}),e.jsxs(u,{color:t.TRANSPARENT,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.5},children:[e.jsx(m,{fontWeight:600,children:o?.startDay&&o.endDay&&A(new Date(o.startDay),new Date(o.endDay))}),e.jsx(m,{fontWeight:600,children:"World Trade Center, Barcelona"})]}),e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1.8},children:e.jsx(S,{date:o?.startDay,onComplete:E,renderer:j})}),o?.actionButtons&&e.jsx(k,{isTicketsDisabled:i,isCfpDisabled:x,isSponsorDisabled:d,ticketsStartDay:o.tickets.startDay,cfpStartDay:o.cfp.startDay,cfpLink:o.cfp.link,edition:o.edition}),o?.showInfoButtons&&e.jsx(B,{})]})})})},r={top:[],premium:[],regular:[],basic:[],communities:[],media_partners:[],supporters:[]},W=()=>e.jsx(f,{color:t.WHITE,children:e.jsxs(T,{id:"sponsors",children:[e.jsxs(D,{className:"TitleContainer",children:[e.jsx(g,{alt:"Less than - icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(C,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:t.DARK_BLUE}),e.jsx(g,{alt:"more than - icon",src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(s,{sponsors:r.top,title:"TOP",id:"top-sponsors",badgeColor:t.BLUE,badgePosition:"left",imageSize:"premium"}),e.jsx(s,{sponsors:r.premium,title:"PREMIUM",id:"premium-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"premium"}),e.jsx(s,{sponsors:r.regular,title:"REGULAR",id:"regular-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"regular"}),e.jsx(s,{sponsors:r.basic,title:"BASIC",id:"basic-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"nano"}),e.jsx(s,{sponsors:r.communities,title:"COMMUNITIES",id:"communities",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"}),e.jsx(s,{sponsors:r.supporters,title:"SUPPORTERS",id:"supporters",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"micro",testId:"supporters"}),e.jsx(s,{sponsors:r.media_partners,title:"MEDIA PARTNERS",id:"media-partners",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"})]})}),K=a.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${l}px) {
    padding-bottom: 20rem;
  }
`,re=()=>{const{hash:i}=y();return b.useEffect(()=>{i!=null&&i!==""&&document.getElementById(i.substring(1))?.scrollIntoView()},[i]),v("Home",o?.edition??"2026"),e.jsxs(K,{id:"home-wrapper",children:[e.jsx(N,{}),o?.carrousel.enabled&&e.jsx(R,{sessionizeUrl:"default",speakersLink:w,isEnabled:o.carrousel.enabled}),e.jsx(W,{}),e.jsx(I,{})]})};export{re as HomeWrapper,re as default};
//# sourceMappingURL=HomeWrapper-B_1wMr33.js.map
