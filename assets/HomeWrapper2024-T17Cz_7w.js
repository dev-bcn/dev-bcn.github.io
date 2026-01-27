import{C as t,a as i,B as r,b as m,m as l,d as b,e as o,j as e,L as f,u as x,R as y,w as j}from"./index-ju5_CuzO.js";import{P as S,g as D}from"./metadata-Be6DPDCL.js";import{C as E,T as B,a as v,d as a,e as T}from"./SponsorTier-C7G4eSNm.js";import{I as R,F as A}from"./InfoButtons-B71zpz7B.js";import{S as w}from"./SectionWrapper-B6pnq35M.js";import{u as L}from"./useDateInterval-DGDCDioX.js";import{f as k}from"./dateUtils-vMaqjRcQ.js";import{A as C}from"./ActionButtons-CA3G6HZe.js";import{T as I}from"./TitleSection-CSnbYwMp.js";import"./useFetchSpeakers-BLnCAZj-.js";import"./index-DDkcZSxo.js";import"./useSentryErrorReport-Bb_I7Apd.js";import"./Faqs.style-aKbStJLD.js";import"./FaqsData-Cexbjl_n.js";import"./Button-Bi2C0dwT.js";import"./isWithinInterval-B0Kp_ctS.js";import"./toDate-DTHmQRmg.js";import"./format-CDOGDT6K.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};s.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var d=new s.Error().stack;d&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[d]="d87265ec-2560-4779-a1d0-320c79048d0a",s._sentryDebugIdIdentifier="sentry-dbid-d87265ec-2560-4779-a1d0-320c79048d0a")}catch{}})();const _=i.div`
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
`,$=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,c=i.div`
  background-color: ${s=>s.color??t.DARK_BLUE};
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${m}px) {
    width: 80%;
  }
`,U=i.h1`
  padding: 0.5rem 1rem;
  color: ${t.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,p=i.h2`
  color: ${s=>s.color??t.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;
  padding: 0.25rem;

  a {
    text-decoration: none;
    color: ${t.LIGHT_BLUE};
  }
`,K=i(l.img)`
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
`,P=i(l.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`,z=i(l.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`,G=i(l.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,M=i(l.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,N=i.img`
  margin: 20px;
  height: 20rem;
  aspect-ratio: 800/327;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${r}px) {
    height: 15rem;
  }
  @media (max-width: ${m}px) {
    height: 8rem;
  }
`,H=i.img`
  margin-top: 4em;
  margin-left: 2em;
  height: 13rem;
  transition: height 0.2s ease-in-out;
  aspect-ratio: 800/327;
  @media (max-width: ${r}px) {
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
`,F=i.span`
  color: white;
  font-size: 5em;
  display: block;
  padding-top: 1.5em;
  text-shadow: 3px 3px #000;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${r}px) {
    margin: 0;
    padding: 0;
    font-size: 3em;
  }
  @media (max-width: ${m}px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`,W=i.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;

  @media (max-width: ${r}px) {
    flex-direction: column;
  }

  @media (max-width: ${m}px) {
    flex-direction: column;
  }
`,O=()=>{const{width:s}=b(),{isTicketsDisabled:d,isSponsorDisabled:g,isCfpDisabled:u}=L(new Date,o);return e.jsx(_,{children:e.jsx(w,{color:"transparent",children:e.jsxs($,{children:[e.jsxs(W,{children:[e.jsx(N,{src:"images/logo.webp",alt:"DevBcn logo"}),e.jsx(F,{children:"+"}),e.jsx(H,{src:"images/KCD-logo-white.webp",alt:"KCD Barcelona"})]}),e.jsxs(c,{children:[e.jsxs(U,{children:["The Barcelona Developers Conference ",o?.edition]}),e.jsxs(p,{children:["Former"," ",e.jsx("a",{href:"https://www.jbcnconf.com/2022/",target:"_blank",rel:"noreferrer",children:"JBCNConf"})," "]}),e.jsx(p,{children:"Multidisciplinary conference made for Developers and by Developers, to learn and share on the different modern software technologies used across the companies"}),e.jsx(p,{children:e.jsxs("small",{children:["Past events: ",e.jsx(f,{to:"/2023",children:"2023 edition"})]})})]}),e.jsxs(c,{color:t.LIGHT_BLUE,children:[e.jsx(p,{color:t.DARK_BLUE,children:o?.startDay&&o.endDay&&k(new Date(o.startDay),new Date(o.endDay))}),e.jsx(p,{color:t.DARK_BLUE,children:"La Farga, Hospitalet, Barcelona"})]}),e.jsx(c,{color:t.DARK_BLUE,children:e.jsxs(p,{children:[o?.trackNumber," tracks with the following topics: ",e.jsx("br",{}),o?.tracks]})}),o.showCountdown&&e.jsx(E,{date:o?.startDay,onComplete:v,renderer:B}),o?.actionButtons&&e.jsx(C,{isTicketsDisabled:d,isCfpDisabled:u,isSponsorDisabled:g,ticketsStartDay:o.tickets.startDay,cfpStartDay:o.cfp.startDay,cfpLink:o.cfp.link,edition:o.edition}),o?.showInfoButtons&&e.jsx(R,{}),s>r&&e.jsx(K,{alt:"Icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),s>r&&e.jsx(z,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},children:e.jsxs(G,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(P,{initial:{x:"-100%"},animate:{x:0},transition:{duration:6},children:s>r&&e.jsxs(M,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})})})},q=i.div`
  position: relative;
  padding-top: 4rem;
`,J=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`,h=i.img`
  height: 4rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;i(l.div)`
  display: none;
  position: absolute;
  width: ${({position:s})=>s==="left"?"60%":"62%"};
  clip-path: ${({position:s})=>s==="left"?"polygon(0 0, 100% 0, 92% 100%, 0% 100%)":"polygon(6% 0, 100% 0, 100% 100%, 0 100%)"};
  top: 0;
  bottom: 0;
  background-color: ${({color:s})=>s};

  left: ${({position:s})=>s==="left"?"0":"unset"};

  right: ${({position:s})=>s==="right"?"0":"unset"};
  z-index: 1;

  @media (min-width: ${m}px) {
    display: flex;
  }
`;const n={top:[{name:"DATASTAX",image:"images/sponsors/datastax.png",website:"https://www.datastax.com/"}],premium:[{name:"Allianz",image:"images/sponsors/allianz.png",website:"https://tech.allianz.com/en.html"},{name:"Barcelona JUG",image:"images/sponsors/bcn-jug.png",website:"https://www.meetup.com/barcelonajug/"},{name:"PREM.AI",website:"https://www.premai.io/",image:"images/sponsors/prem-ai.png"},{name:"Revolut",website:"https://www.revolut.com/working-at-revolut/",image:"images/sponsors/revolut.png"}],regular:[{name:"Sopra Steria",image:"/images/sponsors/sopra.png",website:"https://www.soprasteria.es/"},{name:"Caixabank Tech",website:"https://www.caixabanktech.com/es/pagina-de-inicio/",image:"images/sponsors/caixabank-tech.png"},{name:"Idealista",image:"images/sponsors/idealista.jpg",website:"https://www.idealista.com/info/trabaja-con-nosotros"},{name:"Clever Cloud",image:"images/sponsors/clever-cloud.png",website:"https://www.clever-cloud.com/"},{name:"ALTEN",image:"images/sponsors/alten.png",website:"https://www.alten.es/"},{name:"TIGERA",image:"images/sponsors/tigera.png",website:"https://www.tigera.io/"},{name:"Dynatrace",image:"images/sponsors/dynatrace.png",website:"https://www.dynatrace.com/"}],basic:[{name:"Seidor",website:"https://www.opentrends.net/en",image:"images/sponsors/seidor.png"},{name:"Perfect Scale",website:"https://www.perfectscale.io/",image:"images/sponsors/perfect-scale.png"},{name:"Auth0",image:"images/sponsors/auth0.png",website:"https://okta.com/careers"},{name:"Barcelona Activa",image:"images/sponsors/barcelona-activa.png",website:"https://www.barcelonactiva.cat/"},{name:"Reevo",image:"images/sponsors/reevo.png",website:"https://www.reevo.it/"},{name:"GFT",website:"https://www.gft.com/es/es/",image:"images/sponsors/GFT.jpg"},{name:"Grupo Castilla",image:"images/sponsors/grupo-castilla.png",website:"https://www.grupocastilla.es/servicios-rrhh/consultoria-tecnologica/"},{name:"Axa",image:"images/sponsors/axa.png",website:"https://www.axapartners.es/es"}],communities:[{name:"KCD Barcelona",website:"https://community.cncf.io/events/details/cncf-kcd-spain-presents-kcd-barcelona-2024/",image:"/images/KCD-logo-black.webp"},{name:"Apache Foundation",image:"images/sponsors/apache-foundation.jpeg",website:"https://www.apache.org/"},{name:"Eclipse Foundation",image:"images/sponsors/eclipse-foundation.png",website:"https://www.eclipse.org/"},{name:"Foojay",image:"images/sponsors/foojay.jpg",website:"https://foojay.io/"},{name:"Migracode Barcelona",image:"images/sponsors/migracode.jpg",website:"https://www.migracode.org/"},{name:"Step4ward",image:"images/sponsors/step4ward.png",website:"https://bit.ly/step4wardhome"}],media_partners:[{name:"Kube events",image:"images/sponsors/kube-events.png",website:"https://kube.events/"},{name:"Kube careers",image:"images/sponsors/kube-career.png",website:"https://kube.careers//"}],supporters:[{name:"BarcelonaJS",website:"https://barcelonajs.com/",image:"images/sponsors/barcelona-js.png"}]},V=()=>e.jsx(w,{color:t.WHITE,children:e.jsxs(q,{id:"sponsors",children:[e.jsxs(J,{className:"TitleContainer",children:[e.jsx(h,{alt:"Less than - icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(I,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:t.DARK_BLUE}),e.jsx(h,{alt:"more than - icon",src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(a,{sponsors:n.top,title:"TOP",id:"top-sponsors",badgeColor:t.BLUE,badgePosition:"left",imageSize:"premium"}),e.jsx(a,{sponsors:n.premium,title:"PREMIUM",id:"premium-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"premium"}),e.jsx(a,{sponsors:n.regular,title:"REGULAR",id:"regular-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"regular"}),e.jsx(a,{sponsors:n.basic,title:"BASIC",id:"basic-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"nano"}),e.jsx(a,{sponsors:n.communities,title:"COMMUNITIES",id:"communities",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"}),e.jsx(a,{sponsors:n.supporters,title:"SUPPORTERS",id:"supporters",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"micro",testId:"supporters"}),e.jsx(a,{sponsors:n.media_partners,title:"MEDIA PARTNERS",id:"media-partners",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"})]})}),X=i.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${m}px) {
    padding-bottom: 20rem;
  }
`,we=()=>{const{hash:s}=x();return y.useEffect(()=>{s!=null&&s!==""&&document.getElementById(s.substring(1))?.scrollIntoView()},[s]),e.jsxs(e.Fragment,{children:[e.jsx(S,{...D("home2024")}),e.jsxs(X,{id:"home-wrapper",children:[e.jsx(O,{}),e.jsx(A,{}),e.jsx(T,{speakersLink:j,sessionizeUrl:o.edition,isEnabled:o.carrousel.enabled}),e.jsx(V,{})]})]})};export{we as HomeWrapper2024};
//# sourceMappingURL=HomeWrapper2024-T17Cz_7w.js.map
