import{C as t,a,B as l,b as s,m as n,j as e,L as c,u as b,R as y,c as w}from"./index-ju5_CuzO.js";import{C as S,T as j,a as E,S as T,b as D,c as x,d as r,e as v}from"./SponsorTier-C7G4eSNm.js";import{d as o}from"./2026-BaUSFBqJ.js";import{u as R}from"./useDocumentTitleUpdate-G0tFe7fP.js";import{I as B,F as k}from"./InfoButtons-B71zpz7B.js";import{S as f}from"./SectionWrapper-B6pnq35M.js";import{u as A}from"./useDateInterval-DGDCDioX.js";import{f as I}from"./dateUtils-vMaqjRcQ.js";import{A as L}from"./ActionButtons-CA3G6HZe.js";import{T as C}from"./TitleSection-CSnbYwMp.js";import"./useFetchSpeakers-BLnCAZj-.js";import"./index-DDkcZSxo.js";import"./useSentryErrorReport-Bb_I7Apd.js";import"./Faqs.style-aKbStJLD.js";import"./FaqsData-Cexbjl_n.js";import"./Button-Bi2C0dwT.js";import"./isWithinInterval-B0Kp_ctS.js";import"./toDate-DTHmQRmg.js";import"./format-CDOGDT6K.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var p=new i.Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="00ec3d09-3e06-4257-9e9d-08354811883b",i._sentryDebugIdIdentifier="sentry-dbid-00ec3d09-3e06-4257-9e9d-08354811883b")}catch{}})();const u=["/images/wtc-gemini-2.webp","/images/wtc-gemini-1.webp","/images/wtc-gemini-3.webp","images/venue/venue-1.webp","images/venue/venue-2.webp","images/venue/venue-3.webp","images/venue/venue-4.webp","images/venue/venue-5.webp"],$=a.div`
  position: relative;
  padding: 70px 0 40px;
  background-image: url(${u[Math.floor(Math.random()*u.length)]});
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

  /* Static dark vignette overlay on top of animated gradient */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(2px);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.6)
    );
    pointer-events: none;
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
`,g=a(n.div)`
  background-color: ${i=>i.color??t.DARK_BLUE}95;
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 5px 20px;

  @media (max-width: ${s}px) {
    width: 80%;
    padding: 5px 10px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 5px 8px;
  }
`,z=a(n.h1)`
  padding: 0.5rem 1rem;
  color: ${t.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  letter-spacing: 0.03em;
  line-height: 1.2;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.9),
    0 4px 8px rgba(0, 0, 0, 0.7),
    0 8px 16px rgba(0, 0, 0, 0.5);

  @media (max-width: ${s}px) {
    font-size: 2rem;
    letter-spacing: 0.02em;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,m=a(n.h2)`
  color: ${i=>i.color??t.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.5rem;
  font-weight: ${i=>i.fontWeight??600};
  letter-spacing: 0.02em;
  text-shadow: ${i=>i.shadow?`0 1px 2px rgba(0, 0, 0, 0.9),
         0 2px 4px rgba(0, 0, 0, 0.6),
         0 4px 8px rgba(0, 0, 0, 0.4)`:`0 1px 2px rgba(0, 0, 0, 0.8),
         0 2px 4px rgba(0, 0, 0, 0.5)`};


  a {
    text-decoration: none;
    color: ${t.LIGHT_BLUE};
    text-shadow: 
      0 1px 2px rgba(0, 0, 0, 0.9),
      0 2px 4px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: ${s}px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
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
`;const U=a.img`
  margin-top: 20px;
  height: 13rem;
  aspect-ratio: 800/327;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${l}px) {
    height: 15rem;
  }
  @media (max-width: ${s}px) {
    height: 8rem;
  }
`;a.img`
  margin-top: 4em;
  margin-left: 2em;
  height: 13rem;
  transition: height 0.2s ease-in-out;
  aspect-ratio: 800/327;
  @media (max-width: ${l}px) {
    height: 12rem;
    margin: 0;
  }
  @media (max-width: ${s}px) {
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
  @media (max-width: ${l}px) {
    margin: 0;
    padding: 0;
    font-size: 3em;
  }
  @media (max-width: ${s}px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`;const P=a(n.div)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;

  @media (max-width: ${l}px) {
    padding-top: 2rem;
    flex-direction: column;
  }

  @media (max-width: ${s}px) {
    padding-top: 1rem;
    flex-direction: column;
  }
`,N=()=>{const{isTicketsDisabled:i,isSponsorDisabled:p,isCfpDisabled:h}=A(new Date,o);return e.jsx($,{children:e.jsx(f,{color:"transparent",children:e.jsxs(_,{children:[e.jsx(P,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8},children:e.jsx(U,{src:"images/logo.webp",alt:"DevBcn logo"})}),e.jsxs(g,{color:t.TRANSPARENT,initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[e.jsxs(z,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:["The Barcelona Developers Conference ",o?.edition]}),e.jsx(m,{fontWeight:700,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.7},children:o?.startDay&&o.endDay&&I(new Date(o.startDay),new Date(o.endDay))}),e.jsx(m,{fontWeight:700,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.8},children:"World Trade Center, Barcelona"})]}),e.jsx(n.img,{src:"/images/devBcn-sponsorship.webp",alt:"DevBcn sponsorship value",style:{maxWidth:"100%",marginTop:"8rem"},initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.7,delay:1.2}}),e.jsxs(g,{color:t.TRANSPARENT,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.5},children:[e.jsxs(m,{fontWeight:700,children:[o?.trackNumber," tracks with the following topics:"]}),e.jsx(m,{fontWeight:600,children:o?.tracks})]}),e.jsx(g,{color:t.TRANSPARENT,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.7},children:e.jsx(m,{shadow:!0,children:e.jsxs("small",{children:["Past events: ",e.jsx(c,{to:"/2025",children:"2025 edition"})," |"," ",e.jsx(c,{to:"/2024",children:"2024 edition"})," |"," ",e.jsx(c,{to:"/2023",children:"2023 edition"})]})})}),e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1.8},children:e.jsx(S,{date:o?.startDay,onComplete:E,renderer:j})}),o?.actionButtons&&e.jsx(L,{isTicketsDisabled:i,isCfpDisabled:h,isSponsorDisabled:p,ticketsStartDay:o.tickets.startDay,cfpStartDay:o.cfp.startDay,cfpLink:o.cfp.link,edition:o.edition}),o?.showInfoButtons&&e.jsx(B,{})]})})})},d={top:[],premium:[],regular:[],basic:[],communities:[],media_partners:[],supporters:[]},W=()=>e.jsx(f,{color:t.WHITE,children:e.jsxs(T,{id:"sponsors",children:[e.jsxs(D,{className:"TitleContainer",children:[e.jsx(x,{alt:"Less than - icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(C,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:t.DARK_BLUE}),e.jsx(x,{alt:"more than - icon",src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(r,{sponsors:d.top,title:"TOP",id:"top-sponsors",badgeColor:t.BLUE,badgePosition:"left",imageSize:"premium"}),e.jsx(r,{sponsors:d.premium,title:"PREMIUM",id:"premium-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"premium"}),e.jsx(r,{sponsors:d.regular,title:"REGULAR",id:"regular-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"regular"}),e.jsx(r,{sponsors:d.basic,title:"BASIC",id:"basic-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"nano"}),e.jsx(r,{sponsors:d.communities,title:"COMMUNITIES",id:"communities",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"}),e.jsx(r,{sponsors:d.supporters,title:"SUPPORTERS",id:"supporters",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"micro",testId:"supporters"}),e.jsx(r,{sponsors:d.media_partners,title:"MEDIA PARTNERS",id:"media-partners",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"})]})}),K=a.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${s}px) {
    padding-bottom: 20rem;
  }
`,re=()=>{const{hash:i}=b();return y.useEffect(()=>{i!=null&&i!==""&&document.getElementById(i.substring(1))?.scrollIntoView()},[i]),R("Home",o?.edition??"2026"),e.jsxs(K,{id:"home-wrapper",children:[e.jsx(N,{}),o?.carrousel.enabled&&e.jsx(v,{sessionizeUrl:"default",speakersLink:w,isEnabled:o.carrousel.enabled}),e.jsx(W,{}),e.jsx(k,{})]})};export{re as HomeWrapper,re as default};
//# sourceMappingURL=HomeWrapper-9NPVo1fZ.js.map
