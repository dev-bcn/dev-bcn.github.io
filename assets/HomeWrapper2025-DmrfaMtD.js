import{a,m as n,C as t,b as r,l as D,j as e,r as p,S as h,d as k,M as L,B as m,L as x,u as T,R as I,t as C}from"./index-3l7EzZ6B.js";import{P as A,g as R}from"./metadata-BhrGJBNN.js";import{C as $,T as _,a as U,S as P,b as z,c as u,d,e as O}from"./SponsorTier-BNYN_EiH.js";import{c as o}from"./2025-D5SkvpWb.js";import{S as y}from"./SectionWrapper-tIALLfDG.js";import{u as K}from"./useDateInterval-De8xep-K.js";import{f as M}from"./dateUtils-DjX_DRXm.js";import{A as W}from"./ActionButtons-zS4yNmUy.js";import{g as w,B as b}from"./Button-Bvi-mue8.js";import{T as F}from"./TitleSection-DBDAWWqd.js";import"./useFetchSpeakers-B-7rtTAP.js";import"./index-C31OflVS.js";import"./useSentryErrorReport-ClsdVSI5.js";import"./isWithinInterval-DxsGr0fA.js";import"./toDate-dysx4tGn.js";import"./format-nogG-rin.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"aaec0b6bf53e76e55ea9c92db9769f68ed15ae7d"}}catch{}})();try{(function(){var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new i.Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="ba791a88-3af6-45bb-8df7-892576af59df",i._sentryDebugIdIdentifier="sentry-dbid-ba791a88-3af6-45bb-8df7-892576af59df")})()}catch{}const B=D`
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
  }`,H=a(n.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`,N=a.div`
  background: ${t.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`,q=a.img`
  position: absolute;
  right: 0;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,G=a.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,f=a.img`
  margin: 3px;
  padding: 5px;
  aspect-ratio: 1.5;
  border: 1px solid ${t.YELLOW};
  border-radius: 100% 0 100% 0 / 15% 89% 11% 85%;
  animation: linear ${B} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${r}px) {
    width: 100%;
  }
`,J=a.h2`
  color: white;
  margin-bottom: 10px;
`,v=a.p`
  color: white;
  margin-bottom: 10px;
`,Y=a.div`
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
`,V=a.div.withConfig({shouldForwardProp:i=>!["padding"].includes(i)})`
  position: relative;
  @media (min-width: 800px) {
    height: auto;

    padding: ${({padding:i})=>i};
  }
`,Z=a(n.img)`
  border: 1px solid ${t.YELLOW};
  display: block;
  height: 242px;
  margin: 3px;
  padding: 5px;
  width: 360px;
  border-radius: 92% 8% 90% 10% / 9% 90% 10% 91%;
  animation: linear ${B} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${r}px) {
    display: none;
  }
`,X=a(n.div)`
  display: flex;
  flex-direction: column;
  color: ${t.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({align:i})=>i};
  }
`,Q=a.h2`
  padding-top: 1rem;
  color: ${t.YELLOW};
  font-size: 1.3em;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`,ee=a.p`
  padding: 0.5rem 2rem;
  text-align: left;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
  }

  ul {
    margin: 0.5rem 2rem;
  }
`,j=a.a`
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
`,ie=({faq:i,index:s})=>{const l=s%2===0;return e.jsxs(Y,{className:"faq-card",as:n.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},viewport:{once:!0},whileInView:{opacity:1},children:[e.jsx(V,{padding:l?"0 1rem 0 0":"0 0 0 1rem",children:e.jsx(p.Suspense,{fallback:e.jsx(h,{src:"/images/logo.svg"}),children:e.jsx(Z,{alt:`DevBcn — image ${s}`,src:`/images/FaqsImage${s}.webp`,initial:{opacity:0,x:l?-50:50},animate:{opacity:1,x:0},transition:{duration:.7,delay:.2},whileHover:{scale:1.05}})})}),e.jsxs(X,{align:l?"flex-start":"flex-end",initial:{opacity:0,x:l?50:-50},animate:{opacity:1,x:0},transition:{duration:.7,delay:.4},children:[e.jsx(Q,{as:n.h2,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:i.question}),e.jsx(ee,{as:n.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.8},children:i.answer})]})]})},te=[{id:"2274b606-a043-4899-839a-f236d88bbe98",question:"What is the Barcelona Developers Conference?",answer:"Two days to share knowledge and experiences, meet enthusiasts and geeks and learn about new technologies related to Backend and frontend development, Agile, DevOps, Cloud, and many others."},{id:"13eedebd-59a8-48c5-8897-6270a617ae75",question:"Why should i participate?",answer:"This conference is the perfect stage to discover how others are using your favourite technology. There is something interesting for any kind of tech passionate: on the backend Java & JVM, Python, Rust, Go, to Frontend with JavaScript, TypeScript and Web assembly; Also, Cloud, Kubernetes, and DevOps, Agile, Big Data, Machine Learning and more"}],ae=()=>{const{width:i}=k();return e.jsxs(e.Fragment,{children:[e.jsx(y,{color:t.DARK_BLUE,children:e.jsxs(H,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[te.map((s,l)=>e.jsx(ie,{faq:s,index:l},s.id)),e.jsx("div",{id:"last-jbcnconf",children:" "}),e.jsxs(n.div,{style:{width:"60%"},initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},children:[e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.5},children:e.jsx(J,{children:"Check last DevBcn edition"})}),e.jsx(p.Suspense,{fallback:e.jsx(h,{src:"/images/logo.svg"}),children:e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.7},whileHover:{scale:1.05},children:e.jsx(f,{src:"/images/devbcn-1.webp",alt:"DevBcn 2023"})})}),e.jsx(p.Suspense,{fallback:e.jsx(h,{src:"/images/logo.svg"}),children:e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.9},whileHover:{scale:1.05},children:e.jsx(f,{src:"/images/devbcn2.webp",alt:"DevBcn 2023"})})}),e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1.1},children:e.jsx(v,{children:"DevBcn is the rebranding of the biggest Java & JVM conference in Spain, now including more technologies and tracks."})}),e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1.3},children:e.jsxs(v,{children:["Check for videos/photos and summary of the DevBcn —"," ",e.jsx(j,{href:"https://youtu.be/k7iMIXtNKyo",rel:"noreferrer",target:"_blank",children:"2024 edition —"}),e.jsxs(j,{href:"https://youtu.be/6ZxsMUYBrSo",rel:"noreferrer",target:"_blank",children:[" ","2023 edition"]})]})}),e.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:1.5},style:{display:"inline-block",marginRight:"10px"},whileHover:{scale:1.2},children:e.jsx("a",{href:"https://www.flickr.com/photos/devbcn/albums",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/flickr.svg",alt:"flickr",height:32,width:32})})}),e.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:1.7},style:{display:"inline-block"},whileHover:{scale:1.2},children:e.jsx("a",{href:"https://www.youtube.com/watch?v=Pv4kEMRE-kg&list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/youtube.svg",alt:"Youtube",height:32,width:32})})})]}),i>L&&e.jsxs(e.Fragment,{children:[e.jsx(n.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:1.9},children:e.jsx(q,{alt:"More than — icon",src:"/images/LessThanBlueWhiteIcon.svg"})}),e.jsx(n.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,delay:2.1},children:e.jsx(G,{alt:"Less than — icon",src:"/images/LessThanBlueIcon.svg"})})]})]})}),e.jsx(N,{children:e.jsx(n.svg,{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:e.jsx(n.path,{d:"M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"},initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1.5,delay:.8}})})})]})},ne=a.div`
  display: flex;
  text-align: center;

  @media (max-width: ${r}px) {
    flex-direction: column;
    width: 75%;
  }
`,oe=()=>{const i=p.useCallback(()=>{w("attendee-info","attendee-infos")},[]),s=p.useCallback(()=>{w("speaker-info","speaker-info")},[]);return e.jsxs(ne,{children:[e.jsx(b,{onClick:i,target:"_self",text:"🙋🏻 Attendee information",link:"https://www.devbcn.com/attendee"}),e.jsx(b,{onClick:s,target:"_self",text:"🎙️ Speaker information",link:"https://www.devbcn.com/speaker-information"})]})},se=a.div`
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
`,re=a.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,S=a(n.div)`
  background-color: ${i=>i.color??t.DARK_BLUE};
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${r}px) {
    width: 80%;
  }
`,le=a(n.h1)`
  padding: 0.5rem 1rem;
  color: ${t.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,g=a(n.h2)`
  color: ${i=>i.color??t.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;
  padding: 0.25rem;

  a {
    text-decoration: none;
    color: ${t.LIGHT_BLUE};
  }
`,de=a(n.img)`
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
`,ce=a(n.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`,me=a(n.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`,pe=a(n.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,ge=a(n.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,he=a.img`
  margin: 20px;
  height: 20rem;
  aspect-ratio: 800/327;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${m}px) {
    height: 15rem;
  }
  @media (max-width: ${r}px) {
    height: 8rem;
  }
`;a.img`
  margin-top: 4em;
  margin-left: 2em;
  height: 13rem;
  transition: height 0.2s ease-in-out;
  aspect-ratio: 800/327;
  @media (max-width: ${m}px) {
    height: 12rem;
    margin: 0;
  }
  @media (max-width: ${r}px) {
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
  @media (max-width: ${m}px) {
    margin: 0;
    padding: 0;
    font-size: 3em;
  }
  @media (max-width: ${r}px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`;const ye=a(n.div)`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;

  @media (max-width: ${m}px) {
    flex-direction: column;
  }

  @media (max-width: ${r}px) {
    flex-direction: column;
  }
`,xe=()=>{const{width:i}=k(),{isTicketsDisabled:s,isSponsorDisabled:l,isCfpDisabled:E}=K(new Date,o);return e.jsx(se,{children:e.jsx(y,{color:"transparent",children:e.jsxs(re,{children:[e.jsx(ye,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8},children:e.jsx(he,{src:"images/logo.webp",alt:"DevBcn logo"})}),e.jsxs(S,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[e.jsxs(le,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:["The Barcelona Developers Conference ",o?.edition]}),e.jsxs(g,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.8},children:[o?.trackNumber," tracks with the following topics: ",e.jsx("br",{}),o?.tracks]}),e.jsx(g,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1},children:e.jsxs("small",{children:["Past events: ",e.jsx(x,{to:"/2024",children:"2024 edition"})," |"," ",e.jsx(x,{to:"/2023",children:"2023 edition"})]})})]}),e.jsx(n.img,{src:"/images/devBcn-sponsorship.webp",alt:"DevBcn sponsorship value",width:"635",height:"125",style:{aspectRatio:"127:25",maxWidth:"100%"},initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.7,delay:1.2}}),e.jsxs(S,{color:t.LIGHT_BLUE,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.5},children:[e.jsx(g,{color:t.DARK_BLUE,children:o?.startDay&&o.endDay&&M(new Date(o.startDay),new Date(o.endDay))}),e.jsx(g,{color:t.DARK_BLUE,children:"La Farga, Hospitalet, Barcelona"})]}),o?.showCountdown&&e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1.8},children:e.jsx($,{date:o?.startDay,onComplete:U,renderer:_})}),o?.actionButtons&&e.jsx(W,{isTicketsDisabled:s,isCfpDisabled:E,isSponsorDisabled:l,ticketsStartDay:o.tickets.startDay,cfpStartDay:o.cfp.startDay,cfpLink:o.cfp.link,edition:o.edition}),o?.showInfoButtons&&e.jsx(oe,{}),i>m&&e.jsx(de,{alt:"Icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),i>m&&e.jsx(me,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},children:e.jsxs(pe,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(ce,{initial:{x:"-100%"},animate:{x:0},transition:{duration:6},children:i>m&&e.jsxs(ge,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})})})},c={top:[],premium:[{name:"Dynatrace",image:"images/sponsors/dynatrace.png",website:"https://www.dynatrace.com/"}],regular:[{name:"Caixabank Tech",website:"https://www.caixabanktech.com/es/pagina-de-inicio/",image:"/images/sponsors/caixabank-tech.png"},{name:"Sopra Steria",image:"/images/sponsors/sopra.png",website:"https://www.soprasteria.es/"},{name:"Elastic",image:"/images/sponsors/logo-elastic-horizontal-color.png",website:"https://www.elastic.co/"},{name:"Manychat",website:"https://careers.manychat.com/",image:"/images/sponsors/logo-manychat.webp"},{name:"Snowflake",website:"https://www.snowflake.com/en/developers/",image:"/images/sponsors/logo-snowflake.png"},{name:"Clever Cloud",image:"/images/sponsors/clever-cloud.png",website:"https://www.clever-cloud.com/"},{name:"Vonage",website:"https://vonage.dev/DevBcn",image:"/images/sponsors/vonage.jpg"},{name:"NUBANK",image:"/images/sponsors/datomic.svg",website:"https://nubank.com.br/"}],basic:[{name:"Seidor",website:"https://www.opentrends.net/en",image:"/images/sponsors/seidor.png"},{name:"Grupo Castilla",image:"/images/sponsors/grupo-castilla.png",website:"https://www.grupocastilla.es/servicios-rrhh/consultoria-tecnologica/"},{name:"FOR GOOD AI",website:"https://zencoder.ai/",image:"/images/sponsors/zencoder.png"},{name:"ORTUS SOLUTIONS",website:"https://boxlang.io/",image:"/images/sponsors/boxlang.png"},{name:"Preply",website:"https://preply.com/en/careers",image:"/images/sponsors/preply.svg"},{name:"Dow Jones",image:"/images/sponsors/dow-jones.png",website:"https://www.dowjones.com/"},{name:"Azul",image:"images/sponsors/azul.png",website:"https://www.azul.com"},{name:"Glovo",website:"https://jobs.glovoapp.com/departments/engineering-2/?d=engineering&l=barcelona-hq",image:"images/sponsors/glovo.png"}],communities:[{name:"Step4ward",image:"images/sponsors/step4ward.png",website:"https://bit.ly/step4wardhome"},{name:"Migracode Barcelona",image:"images/sponsors/migracode.jpg",website:"https://www.migracode.org/"},{name:"CodeWomen+",image:"/images/sponsors/codewomen.png",website:"https://codewomen.plus/"}],media_partners:[{name:"Digital Expert Online",website:"https://digital-expert.online/en/",image:"/images/sponsors/logo-digital-expert.svg"},{name:"Kube events",image:"/images/sponsors/kube-events.png",website:"https://kube.events/"},{name:"Kube careers",image:"/images/sponsors/kube-career.png",website:"https://kube.careers/"},{name:"CIO Insights",website:"https://www.cioinsights.com/",image:"/images/sponsors/cio-insights.png"},{name:"Codely",image:"images/sponsors/codely.png",website:"https://codely.com/"},{name:"Foojay",image:"images/sponsors/foojay.jpg",website:"https://foojay.io/"}],supporters:[]},ue=()=>e.jsx(y,{color:t.WHITE,children:e.jsxs(P,{id:"sponsors",children:[e.jsxs(z,{className:"TitleContainer",children:[e.jsx(u,{alt:"Less than - icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(F,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:t.DARK_BLUE}),e.jsx(u,{alt:"more than - icon",src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(d,{sponsors:c.top,title:"TOP",id:"top-sponsors",badgeColor:t.BLUE,badgePosition:"left",imageSize:"premium"}),e.jsx(d,{sponsors:c.premium,title:"PREMIUM",id:"premium-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"premium"}),e.jsx(d,{sponsors:c.regular,title:"REGULAR",id:"regular-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"regular"}),e.jsx(d,{sponsors:c.basic,title:"BASIC",id:"basic-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"nano"}),e.jsx(d,{sponsors:c.communities,title:"COMMUNITIES",id:"communities",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"}),e.jsx(d,{sponsors:c.supporters,title:"SUPPORTERS",id:"supporters",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"micro",testId:"supporters"}),e.jsx(d,{sponsors:c.media_partners,title:"MEDIA PARTNERS",id:"media-partners",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"})]})}),we=a.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${r}px) {
    padding-bottom: 20rem;
  }
`,_e=()=>{const{hash:i}=T();return I.useEffect(()=>{i!=null&&i!==""&&document.getElementById(i.substring(1))?.scrollIntoView()},[i]),e.jsxs(e.Fragment,{children:[e.jsx(A,{...R("home2025")}),e.jsxs(we,{id:"home-wrapper",children:[e.jsx(xe,{}),o?.carrousel.enabled&&e.jsx(O,{sessionizeUrl:"default",speakersLink:C,isEnabled:o.carrousel.enabled}),e.jsx(ue,{}),e.jsx(ae,{})]})]})};export{_e as HomeWrapper2025};
//# sourceMappingURL=HomeWrapper2025-DmrfaMtD.js.map
