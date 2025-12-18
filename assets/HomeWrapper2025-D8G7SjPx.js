import{d as a,m as n,C as t,a as l,l as D,j as e,r as p,S as y,u as B,M as T,B as m,L as u,b as I,R as C,t as A}from"./index-DTbYfLDH.js";import{S as x}from"./SectionWrapper-BaGeoTOY.js";import{C as R,T as $,a as M,S as _,b as U,c as w,d,e as z}from"./SpeakersCarousel-CLWpBpgw.js";import{u as O}from"./useDateInterval-iouyvobK.js";import{A as P}from"./ActionButtons-DYk3LPwt.js";import{g as f,B as b}from"./Analytics-Bb-tHlTC.js";import{f as g}from"./format-DAFHjVu5.js";import{c as s}from"./2025-BuM8RyNH.js";import{T as K}from"./TitleSection-6A8aB-Hz.js";import{u as F}from"./useDocumentTitleUpdate-BgtW2Uta.js";import"./useFetchSpeakers-SlEBuo-2.js";import"./index-YpJReXDh.js";import"./useSentryErrorReport-CtjJfjGP.js";import"./isWithinInterval-CgYfYykW.js";import"./toDate-DkrOh3RQ.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"9817a7e17f23e9069fa38e9e7148beccda2e98a0"}}catch{}})();try{(function(){var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new i.Error().stack;o&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[o]="f34e4cae-1777-45e6-b4e6-231dc441331a",i._sentryDebugIdIdentifier="sentry-dbid-f34e4cae-1777-45e6-b4e6-231dc441331a")})()}catch{}const E=D`
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
  }`,W=a(n.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`,H=a.div`
  background: ${t.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`,N=a.img`
  position: absolute;
  right: 0;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,q=a.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,v=a.img`
  margin: 3px;
  padding: 5px;
  aspect-ratio: 1.5;
  border: 1px solid ${t.YELLOW};
  border-radius: 100% 0 100% 0 / 15% 89% 11% 85%;
  animation: linear ${E} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${l}px) {
    width: 100%;
  }
`,G=a.h2`
  color: white;
  margin-bottom: 10px;
`,j=a.p`
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
`,J=a.div.withConfig({shouldForwardProp:i=>!["padding"].includes(i)})`
  position: relative;
  @media (min-width: 800px) {
    height: auto;

    padding: ${({padding:i})=>i};
  }
`,V=a(n.img)`
  border: 1px solid ${t.YELLOW};
  display: block;
  height: 242px;
  margin: 3px;
  padding: 5px;
  width: 360px;
  border-radius: 92% 8% 90% 10% / 9% 90% 10% 91%;
  animation: linear ${E} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${l}px) {
    display: none;
  }
`,Z=a(n.div)`
  display: flex;
  flex-direction: column;
  color: ${t.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({align:i})=>i};
  }
`,X=a.h2`
  padding-top: 1rem;
  color: ${t.YELLOW};
  font-size: 1.3em;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`,Q=a.p`
  padding: 0.5rem 2rem;
  text-align: left;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
  }

  ul {
    margin: 0.5rem 2rem;
  }
`,S=a.a`
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
`,ee=({faq:i,index:o})=>{const r=o%2===0;return e.jsxs(Y,{className:"faq-card",as:n.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},viewport:{once:!0},whileInView:{opacity:1},children:[e.jsx(J,{padding:r?"0 1rem 0 0":"0 0 0 1rem",children:e.jsx(p.Suspense,{fallback:e.jsx(y,{src:"/images/logo.svg"}),children:e.jsx(V,{alt:`DevBcn — image ${o}`,src:`/images/FaqsImage${o}.jpg`,initial:{opacity:0,x:r?-50:50},animate:{opacity:1,x:0},transition:{duration:.7,delay:.2},whileHover:{scale:1.05}})})}),e.jsxs(Z,{align:r?"flex-start":"flex-end",initial:{opacity:0,x:r?50:-50},animate:{opacity:1,x:0},transition:{duration:.7,delay:.4},children:[e.jsx(X,{as:n.h2,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:i.question}),e.jsx(Q,{as:n.p,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.8},children:i.answer})]})]})},ie=[{id:"2274b606-a043-4899-839a-f236d88bbe98",question:"What is the Barcelona Developers Conference?",answer:"Two days to share knowledge and experiences, meet enthusiasts and geeks and learn about new technologies related to Backend and frontend development, Agile, DevOps, Cloud, and many others."},{id:"13eedebd-59a8-48c5-8897-6270a617ae75",question:"Why should i participate?",answer:"This conference is the perfect stage to discover how others are using your favourite technology. There is something interesting for any kind of tech passionate: on the backend Java & JVM, Python, Rust, Go, to Frontend with JavaScript, TypeScript and Web assembly; Also, Cloud, Kubernetes, and DevOps, Agile, Big Data, Machine Learning and more"}],te=()=>{const{width:i}=B();return e.jsxs(e.Fragment,{children:[e.jsx(x,{color:t.DARK_BLUE,children:e.jsxs(W,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[ie.map((o,r)=>e.jsx(ee,{faq:o,index:r},o.id)),e.jsx("div",{id:"last-jbcnconf",children:" "}),e.jsxs(n.div,{style:{width:"60%"},initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},children:[e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.5},children:e.jsx(G,{children:"Check last DevBcn edition"})}),e.jsx(p.Suspense,{fallback:e.jsx(y,{src:"/images/logo.svg"}),children:e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.7},whileHover:{scale:1.05},children:e.jsx(v,{src:"/images/devbcn-1.jpg",alt:"DevBcn 2023"})})}),e.jsx(p.Suspense,{fallback:e.jsx(y,{src:"/images/logo.svg"}),children:e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.9},whileHover:{scale:1.05},children:e.jsx(v,{src:"/images/devbcn2.jpg",alt:"DevBcn 2023"})})}),e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1.1},children:e.jsx(j,{children:"DevBcn is the rebranding of the biggest Java & JVM conference in Spain, now including more technologies and tracks."})}),e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1.3},children:e.jsxs(j,{children:["Check for videos/photos and summary of the DevBcn —"," ",e.jsx(S,{href:"https://youtu.be/k7iMIXtNKyo",rel:"noreferrer",target:"_blank",children:"2024 edition —"}),e.jsxs(S,{href:"https://youtu.be/6ZxsMUYBrSo",rel:"noreferrer",target:"_blank",children:[" ","2023 edition"]})]})}),e.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:1.5},style:{display:"inline-block",marginRight:"10px"},whileHover:{scale:1.2},children:e.jsx("a",{href:"https://www.flickr.com/photos/devbcn/albums",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/flickr.svg",alt:"flickr",height:32,width:32})})}),e.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:1.7},style:{display:"inline-block"},whileHover:{scale:1.2},children:e.jsx("a",{href:"https://www.youtube.com/watch?v=Pv4kEMRE-kg&list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/youtube.svg",alt:"Youtube",height:32,width:32})})})]}),i>T&&e.jsxs(e.Fragment,{children:[e.jsx(n.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:1.9},children:e.jsx(N,{alt:"More than — icon",src:"/images/LessThanBlueWhiteIcon.svg"})}),e.jsx(n.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,delay:2.1},children:e.jsx(q,{alt:"Less than — icon",src:"/images/LessThanBlueIcon.svg"})})]})]})}),e.jsx(H,{children:e.jsx(n.svg,{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:e.jsx(n.path,{d:"M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"},initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1.5,delay:.8}})})})]})},ae=a.div`
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
`,ne=a.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,k=a(n.div)`
  background-color: ${i=>i.color??t.DARK_BLUE};
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${l}px) {
    width: 80%;
  }
`,oe=a(n.h1)`
  padding: 0.5rem 1rem;
  color: ${t.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,h=a(n.h2)`
  color: ${i=>i.color??t.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;
  padding: 0.25rem;

  a {
    text-decoration: none;
    color: ${t.LIGHT_BLUE};
  }
`,se=a(n.img)`
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
`,re=a(n.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`,le=a(n.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`,de=a(n.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,ce=a(n.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,me=a.img`
  margin: 20px;
  height: 20rem;
  aspect-ratio: 800/327;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${m}px) {
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
  @media (max-width: ${m}px) {
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
  @media (max-width: ${m}px) {
    margin: 0;
    padding: 0;
    font-size: 3em;
  }
  @media (max-width: ${l}px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`;const pe=a(n.div)`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;

  @media (max-width: ${m}px) {
    flex-direction: column;
  }

  @media (max-width: ${l}px) {
    flex-direction: column;
  }
`,ge=a.div`
  display: flex;
  text-align: center;

  @media (max-width: ${l}px) {
    flex-direction: column;
    width: 75%;
  }
`,he=()=>{const i=p.useCallback(()=>{f("attendee-info","attendee-infos")},[]),o=p.useCallback(()=>{f("speaker-info","speaker-info")},[]);return e.jsxs(ge,{children:[e.jsx(b,{onClick:i,target:"_self",text:"🙋🏻 Attendee information",link:"https://www.devbcn.com/attendee"}),e.jsx(b,{onClick:o,target:"_self",text:"🎙️ Speaker information",link:"https://www.devbcn.com/speaker-information"})]})};function ye(i,o){return i.getMonth()===o.getMonth()&&i.getFullYear()===o.getFullYear()?`${g(i,"MMMM do")} - ${g(o,"do, yyyy")}`:`${g(i,"MMMM do, yyyy")} - ${g(o,"MMMM do, yyyy")}`}const xe=()=>{const{width:i}=B(),{isTicketsDisabled:o,isSponsorDisabled:r,isCfpDisabled:L}=O(new Date,s);return e.jsx(ae,{children:e.jsx(x,{color:"transparent",children:e.jsxs(ne,{children:[e.jsx(pe,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8},children:e.jsx(me,{src:"images/logo.png",alt:"DevBcn logo"})}),e.jsxs(k,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[e.jsxs(oe,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:["The Barcelona Developers Conference ",s?.edition]}),e.jsxs(h,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.8},children:[s?.trackNumber," tracks with the following topics: ",e.jsx("br",{}),s?.tracks]}),e.jsx(h,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1},children:e.jsxs("small",{children:["Past events: ",e.jsx(u,{to:"/2024",children:"2024 edition"})," |"," ",e.jsx(u,{to:"/2023",children:"2023 edition"})]})})]}),e.jsx(n.img,{src:"/images/devBcn-sponsorship.png",alt:"DevBcn sponsorship value",width:"635",height:"125",style:{aspectRatio:"127:25",maxWidth:"100%"},initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.7,delay:1.2}}),e.jsxs(k,{color:t.LIGHT_BLUE,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.5},children:[e.jsx(h,{color:t.DARK_BLUE,children:s?.startDay&&s.endDay&&ye(new Date(s.startDay),new Date(s.endDay))}),e.jsx(h,{color:t.DARK_BLUE,children:"La Farga, Hospitalet, Barcelona"})]}),s?.showCountdown&&e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1.8},children:e.jsx(R,{date:s?.startDay,onComplete:M,renderer:$})}),s?.actionButtons&&e.jsx(P,{isTicketsDisabled:o,isCfpDisabled:L,isSponsorDisabled:r,ticketsStartDay:s.tickets.startDay,cfpStartDay:s.cfp.startDay,cfpLink:s.cfp.link,edition:s.edition}),s?.showInfoButtons&&e.jsx(he,{}),i>m&&e.jsx(se,{alt:"Icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),i>m&&e.jsx(le,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},children:e.jsxs(de,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(re,{initial:{x:"-100%"},animate:{x:0},transition:{duration:6},children:i>m&&e.jsxs(ce,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})})})},c={top:[],premium:[{name:"Dynatrace",image:"images/sponsors/dynatrace.png",website:"https://www.dynatrace.com/"}],regular:[{name:"Caixabank Tech",website:"https://www.caixabanktech.com/es/pagina-de-inicio/",image:"/images/sponsors/caixabank-tech.png"},{name:"Sopra Steria",image:"/images/sponsors/sopra.png",website:"https://www.soprasteria.es/"},{name:"Elastic",image:"/images/sponsors/logo-elastic-horizontal-color.png",website:"https://www.elastic.co/"},{name:"Manychat",website:"https://careers.manychat.com/",image:"/images/sponsors/logo-manychat.webp"},{name:"Snowflake",website:"https://www.snowflake.com/en/developers/",image:"/images/sponsors/logo-snowflake.png"},{name:"Clever Cloud",image:"/images/sponsors/clever-cloud.png",website:"https://www.clever-cloud.com/"},{name:"Vonage",website:"https://vonage.dev/DevBcn",image:"/images/sponsors/vonage.jpg"},{name:"NUBANK",image:"/images/sponsors/datomic.svg",website:"https://nubank.com.br/"}],basic:[{name:"Seidor",website:"https://www.opentrends.net/en",image:"/images/sponsors/seidor.png"},{name:"Grupo Castilla",image:"/images/sponsors/grupo-castilla.png",website:"https://www.grupocastilla.es/servicios-rrhh/consultoria-tecnologica/"},{name:"FOR GOOD AI",website:"https://zencoder.ai/",image:"/images/sponsors/zencoder.png"},{name:"ORTUS SOLUTIONS",website:"https://boxlang.io/",image:"/images/sponsors/boxlang.png"},{name:"Preply",website:"https://preply.com/en/careers",image:"/images/sponsors/preply.svg"},{name:"Dow Jones",image:"/images/sponsors/dow-jones.png",website:"https://www.dowjones.com/"},{name:"Azul",image:"images/sponsors/azul.png",website:"https://www.azul.com"},{name:"Glovo",website:"https://jobs.glovoapp.com/departments/engineering-2/?d=engineering&l=barcelona-hq",image:"images/sponsors/glovo.png"}],communities:[{name:"Step4ward",image:"images/sponsors/step4ward.png",website:"https://bit.ly/step4wardhome"},{name:"Migracode Barcelona",image:"images/sponsors/migracode.jpg",website:"https://www.migracode.org/"},{name:"CodeWomen+",image:"/images/sponsors/codewomen.png",website:"https://codewomen.plus/"}],media_partners:[{name:"Digital Expert Online",website:"https://digital-expert.online/en/",image:"/images/sponsors/logo-digital-expert.svg"},{name:"Kube events",image:"/images/sponsors/kube-events.png",website:"https://kube.events/"},{name:"Kube careers",image:"/images/sponsors/kube-career.png",website:"https://kube.careers/"},{name:"CIO Insights",website:"https://www.cioinsights.com/",image:"/images/sponsors/cio-insights.png"},{name:"Codely",image:"images/sponsors/codely.png",website:"https://codely.com/"},{name:"Foojay",image:"images/sponsors/foojay.jpg",website:"https://foojay.io/"}],supporters:[]},ue=()=>e.jsx(x,{color:t.WHITE,children:e.jsxs(_,{id:"sponsors",children:[e.jsxs(U,{className:"TitleContainer",children:[e.jsx(w,{alt:"Less than - icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(K,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:t.DARK_BLUE}),e.jsx(w,{alt:"more than - icon",src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(d,{sponsors:c.top,title:"TOP",id:"top-sponsors",badgeColor:t.BLUE,badgePosition:"left",imageSize:"premium"}),e.jsx(d,{sponsors:c.premium,title:"PREMIUM",id:"premium-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"premium"}),e.jsx(d,{sponsors:c.regular,title:"REGULAR",id:"regular-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"regular"}),e.jsx(d,{sponsors:c.basic,title:"BASIC",id:"basic-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"nano"}),e.jsx(d,{sponsors:c.communities,title:"COMMUNITIES",id:"communities",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"}),e.jsx(d,{sponsors:c.supporters,title:"SUPPORTERS",id:"supporters",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"micro",testId:"supporters"}),e.jsx(d,{sponsors:c.media_partners,title:"MEDIA PARTNERS",id:"media-partners",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"})]})}),we=a.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${l}px) {
    padding-bottom: 20rem;
  }
`,$e=()=>{const{hash:i}=I();return C.useEffect(()=>{i!=null&&i!==""&&document.getElementById(i.substring(1))?.scrollIntoView()},[i]),F("Home",s?.edition??"2025"),e.jsxs(we,{id:"home-wrapper",children:[e.jsx(xe,{}),s?.carrousel.enabled&&e.jsx(z,{sessionizeUrl:"default",speakersLink:A,isEnabled:s.carrousel.enabled}),e.jsx(ue,{}),e.jsx(te,{})]})};export{$e as HomeWrapper2025};
//# sourceMappingURL=HomeWrapper2025-D8G7SjPx.js.map
