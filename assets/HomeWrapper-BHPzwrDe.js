import{C as t,d as a,B as l,a as m,m as s,u as b,j as e,L as g,b as S,R as j,c as E}from"./index-CTeuVKX9.js";import{I as w,F as T}from"./InfoButtons-CPKRNnPg.js";import{C as B,T as D,a as R,S as L,b as I,c as u,d as r,e as A}from"./SpeakersCarousel-BRhUyrH8.js";import{S as y}from"./SectionWrapper-D38G9rHh.js";import{u as C}from"./useDateInterval-BmcXja4h.js";import{A as _}from"./ActionButtons-Zyo1qiBR.js";import{f as c}from"./format-BWLNiytl.js";import{d as o}from"./2026-B8mKqFWZ.js";import{T as $}from"./TitleSection-CIqq7-Ek.js";import{u as v}from"./useDocumentTitleUpdate-D9wcOtwc.js";import"./Faqs.style-DMBsN_wK.js";import"./FaqsData-4WfxOf51.js";import"./Analytics-3J02qVV0.js";import"./useFetchSpeakers-C47dx7Kq.js";import"./index-IUy7_b3_.js";import"./useSentryErrorReport-HCiXjN23.js";import"./isWithinInterval-DZQD_I1C.js";import"./toDate-y49ZiQWd.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"1d089d517e41d782af78b0a70a6631d8b1e2fe7d"}}catch{}})();try{(function(){var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new i.Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="1b845f83-c111-4863-872b-a5d1029f69f8",i._sentryDebugIdIdentifier="sentry-dbid-1b845f83-c111-4863-872b-a5d1029f69f8")})()}catch{}const k=a.div`
  padding: 70px 0 40px;
  background: linear-gradient(-45deg, ${t.LIGHT_BLUE}, ${t.MAGENTA}, ${t.DARK_BLUE}, ${t.GREEN});
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
`,M=a.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,f=a(s.div)`
  background-color: ${i=>i.color??t.DARK_BLUE};
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${m}px) {
    width: 80%;
  }
`,U=a(s.h1)`
  padding: 0.5rem 1rem;
  color: ${t.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,p=a(s.h2)`
  color: ${i=>i.color??t.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;
  padding: 0.25rem;

  a {
    text-decoration: none;
    color: ${t.LIGHT_BLUE};
  }
`,P=a(s.img)`
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
`,z=a(s.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`,K=a(s.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`,H=a(s.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,W=a(s.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,G=a.img`
  margin: 20px;
  height: 20rem;
  aspect-ratio: 800/327;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${l}px) {
    height: 15rem;
  }
  @media (max-width: ${m}px) {
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
  @media (max-width: ${m}px) {
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
  @media (max-width: ${m}px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`;const N=a(s.div)`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;

  @media (max-width: ${l}px) {
    flex-direction: column;
  }

  @media (max-width: ${m}px) {
    flex-direction: column;
  }
`;function O(i,n){return i.getMonth()===n.getMonth()&&i.getFullYear()===n.getFullYear()?`${c(i,"MMMM do")} - ${c(n,"do, yyyy")}`:`${c(i,"MMMM do, yyyy")} - ${c(n,"MMMM do, yyyy")}`}const Y=()=>{const{width:i}=b(),{isTicketsDisabled:n,isSponsorDisabled:h,isCfpDisabled:x}=C(new Date,o);return e.jsx(k,{children:e.jsx(y,{color:"transparent",children:e.jsxs(M,{children:[e.jsx(N,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8},children:e.jsx(G,{src:"images/logo.png",alt:"DevBcn logo"})}),e.jsxs(f,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[e.jsxs(U,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:["The Barcelona Developers Conference ",o?.edition]}),e.jsxs(p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.8},children:[o?.trackNumber," tracks with the following topics: ",e.jsx("br",{}),o?.tracks]}),e.jsx(p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1},children:e.jsxs("small",{children:["Past events: ",e.jsx(g,{to:"/2025",children:"2025 edition"})," |"," ",e.jsx(g,{to:"/2024",children:"2024 edition"})," |"," ",e.jsx(g,{to:"/2023",children:"2023 edition"})]})})]}),e.jsx(s.img,{src:"/images/devBcn-sponsorship.png",alt:"DevBcn sponsorship value",width:"635",height:"125",style:{aspectRatio:"127:25",maxWidth:"100%"},initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.7,delay:1.2}}),e.jsxs(f,{color:t.LIGHT_BLUE,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.5},children:[e.jsx(p,{color:t.DARK_BLUE,children:o?.startDay&&o.endDay&&O(new Date(o.startDay),new Date(o.endDay))}),e.jsx(p,{color:t.DARK_BLUE,children:"World Trade Center, Barcelona"})]}),e.jsx(s.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1.8},children:e.jsx(B,{date:o?.startDay,onComplete:R,renderer:D})}),o?.actionButtons&&e.jsx(_,{isTicketsDisabled:n,isCfpDisabled:x,isSponsorDisabled:h,ticketsStartDay:o.tickets.startDay,cfpStartDay:o.cfp.startDay,cfpLink:o.cfp.link,edition:o.edition}),o?.showInfoButtons&&e.jsx(w,{}),i>l&&e.jsx(P,{alt:"Icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),i>l&&e.jsx(K,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},children:e.jsxs(H,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(z,{initial:{x:"-100%"},animate:{x:0},transition:{duration:6},children:i>l&&e.jsxs(W,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})})})},d={top:[],premium:[],regular:[],basic:[],communities:[],media_partners:[],supporters:[]},q=()=>e.jsx(y,{color:t.WHITE,children:e.jsxs(L,{id:"sponsors",children:[e.jsxs(I,{className:"TitleContainer",children:[e.jsx(u,{alt:"Less than - icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx($,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:t.DARK_BLUE}),e.jsx(u,{alt:"more than - icon",src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(r,{sponsors:d.top,title:"TOP",id:"top-sponsors",badgeColor:t.BLUE,badgePosition:"left",imageSize:"premium"}),e.jsx(r,{sponsors:d.premium,title:"PREMIUM",id:"premium-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"premium"}),e.jsx(r,{sponsors:d.regular,title:"REGULAR",id:"regular-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"regular"}),e.jsx(r,{sponsors:d.basic,title:"BASIC",id:"basic-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"nano"}),e.jsx(r,{sponsors:d.communities,title:"COMMUNITIES",id:"communities",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"}),e.jsx(r,{sponsors:d.supporters,title:"SUPPORTERS",id:"supporters",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"micro",testId:"supporters"}),e.jsx(r,{sponsors:d.media_partners,title:"MEDIA PARTNERS",id:"media-partners",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"})]})}),F=a.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${m}px) {
    padding-bottom: 20rem;
  }
`,ge=()=>{const{hash:i}=S();return j.useEffect(()=>{i!=null&&i!==""&&document.getElementById(i.substring(1))?.scrollIntoView()},[i]),v("Home",o?.edition??"2026"),e.jsxs(F,{id:"home-wrapper",children:[e.jsx(Y,{}),o?.carrousel.enabled&&e.jsx(A,{sessionizeUrl:"default",speakersLink:E,isEnabled:o.carrousel.enabled}),e.jsx(q,{}),e.jsx(T,{})]})};export{ge as HomeWrapper,ge as default};
//# sourceMappingURL=HomeWrapper-BHPzwrDe.js.map
