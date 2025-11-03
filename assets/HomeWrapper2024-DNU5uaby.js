import{q as l,n as w,j as e,S as g,l as a,L as h,f as i,a3 as u,a4 as b,a5 as y,a6 as x,a7 as f,a8 as p,k as r,s as d,y as j,g as S,a9 as v,aa as B,ab as T,ac as C,ad as D,ae as k,af as I,ag as A,x as M,i as E,ah as L,ai as R,aj as _}from"./index-3gPnWpUs.js";import{S as K,a as $,b as F,c as G,d as P,e as U,f as c,g as H,h as n,i as N,j as W,k as z,l as O,m as Y}from"./Style.Home-BVCttt2H.js";try{let s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new s.Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="a6bd8f45-2066-4ae8-aa8f-3c759e94f90d",s._sentryDebugIdIdentifier="sentry-dbid-a6bd8f45-2066-4ae8-aa8f-3c759e94f90d")}catch{}function J(s,o){return s.getMonth()===o.getMonth()&&s.getFullYear()===o.getFullYear()?`${l(s,"MMMM do")} - ${l(o,"do, yyyy")}`:`${l(s,"MMMM do, yyyy")} - ${l(o,"MMMM do, yyyy")}`}const q=()=>{const{width:s}=w();return e.jsx(K,{children:e.jsx(g,{color:"transparent",children:e.jsxs($,{children:[e.jsxs(F,{children:[e.jsx(G,{src:"images/logo.png",alt:"DevBcn logo"}),e.jsx(P,{children:"+"}),e.jsx(U,{src:"images/KCD-logo-white.png",alt:"KCD Barcelona"})]}),e.jsxs(c,{children:[e.jsxs(H,{children:["The Barcelona Developers Conference ",a?.edition]}),e.jsxs(n,{children:["Former"," ",e.jsx("a",{href:"https://www.jbcnconf.com/2022/",target:"_blank",rel:"noreferrer",children:"JBCNConf"})," "]}),e.jsx(n,{children:"Multidisciplinary conference made for Developers and by Developers, to learn and share on the different modern software technologies used across the companies"}),e.jsx(n,{children:e.jsxs("small",{children:["Past events: ",e.jsx(h,{to:"/2023",children:"2023 edition"})]})})]}),e.jsxs(c,{color:i.LIGHT_BLUE,children:[e.jsx(n,{color:i.DARK_BLUE,children:a?.startDay&&a.endDay&&J(new Date(a.startDay),new Date(a.endDay))}),e.jsx(n,{color:i.DARK_BLUE,children:"La Farga, Hospitalet, Barcelona"})]}),e.jsx(c,{color:i.DARK_BLUE,children:e.jsxs(n,{children:[a?.trackNumber," tracks with the following topics: ",e.jsx("br",{}),a?.tracks]})}),a.showCountdown&&e.jsx(u,{date:a?.startDay,onComplete:y,renderer:b}),a?.actionButtons&&e.jsx(x,{}),a?.showInfoButtons&&e.jsx(f,{}),s>p&&e.jsx(N,{alt:"Icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),s>p&&e.jsx(W,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},children:e.jsxs(z,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(O,{initial:{x:"-100%"},animate:{x:0},transition:{duration:6},children:s>p&&e.jsxs(Y,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})})})},V=r.div`
  position: relative;
  padding-top: 4rem;
`,X=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`,m=r.img`
  height: 4rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;r(j.div)`
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

  @media (min-width: ${d}px) {
    display: flex;
  }
`;const t={top:[{name:"DATASTAX",image:"images/sponsors/datastax.png",website:"https://www.datastax.com/"}],premium:[{name:"Allianz",image:"images/sponsors/allianz.png",website:"https://tech.allianz.com/en.html"},{name:"Barcelona JUG",image:"images/sponsors/bcn-jug.png",website:"https://www.meetup.com/barcelonajug/"},{name:"PREM.AI",website:"https://www.premai.io/",image:"images/sponsors/prem-ai.png"},{name:"Revolut",website:"https://www.revolut.com/working-at-revolut/",image:"images/sponsors/revolut.png"}],regular:[{name:"Sopra Steria",image:"/images/sponsors/sopra.png",website:"https://www.soprasteria.es/"},{name:"Caixabank Tech",website:"https://www.caixabanktech.com/es/pagina-de-inicio/",image:"images/sponsors/caixabank-tech.png"},{name:"Idealista",image:"images/sponsors/idealista.jpg",website:"https://www.idealista.com/info/trabaja-con-nosotros"},{name:"Clever Cloud",image:"images/sponsors/clever-cloud.png",website:"https://www.clever-cloud.com/"},{name:"ALTEN",image:"images/sponsors/alten.png",website:"https://www.alten.es/"},{name:"TIGERA",image:"images/sponsors/tigera.png",website:"https://www.tigera.io/"},{name:"Dynatrace",image:"images/sponsors/dynatrace.png",website:"https://www.dynatrace.com/"}],basic:[{name:"Seidor",website:"https://www.opentrends.net/en",image:"images/sponsors/seidor.png"},{name:"Perfect Scale",website:"https://www.perfectscale.io/",image:"images/sponsors/perfect-scale.png"},{name:"Auth0",image:"images/sponsors/auth0.png",website:"https://okta.com/careers"},{name:"Barcelona Activa",image:"images/sponsors/barcelona-activa.png",website:"https://www.barcelonactiva.cat/"},{name:"Reevo",image:"images/sponsors/reevo.png",website:"https://www.reevo.it/"},{name:"GFT",website:"https://www.gft.com/es/es/",image:"images/sponsors/GFT.jpg"},{name:"Grupo Castilla",image:"images/sponsors/grupo-castilla.png",website:"https://www.grupocastilla.es/servicios-rrhh/consultoria-tecnologica/"},{name:"Axa",image:"images/sponsors/axa.png",website:"https://www.axapartners.es/es"}],communities:[{name:"KCD Barcelona",website:"https://community.cncf.io/events/details/cncf-kcd-spain-presents-kcd-barcelona-2024/",image:"/images/KCD-logo-black.png"},{name:"Apache Foundation",image:"images/sponsors/apache-foundation.jpeg",website:"https://www.apache.org/"},{name:"Eclipse Foundation",image:"images/sponsors/eclipse-foundation.png",website:"https://www.eclipse.org/"},{name:"Foojay",image:"images/sponsors/foojay.jpg",website:"https://foojay.io/"},{name:"Migracode Barcelona",image:"images/sponsors/migracode.jpg",website:"https://www.migracode.org/"},{name:"Step4ward",image:"images/sponsors/step4ward.png",website:"https://bit.ly/step4wardhome"}],media_partners:[{name:"Kube events",image:"images/sponsors/kube-events.png",website:"https://kube.events/"},{name:"Kube careers",image:"images/sponsors/kube-career.png",website:"https://kube.careers//"}],supporters:[{name:"BarcelonaJS",website:"https://barcelonajs.com/",image:"images/sponsors/barcelona-js.png"}]},Q=()=>e.jsx(g,{color:i.WHITE,children:e.jsxs(V,{id:"sponsors",children:[e.jsxs(X,{className:"TitleContainer",children:[e.jsx(m,{alt:"Less than - icon",src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(S,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:i.DARK_BLUE}),e.jsx(m,{alt:"more than - icon",src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(v,{sponsors:t.top}),e.jsx(B,{sponsors:t.premium}),e.jsx(T,{sponsors:t.regular}),e.jsx(C,{sponsors:t.basic}),e.jsx(D,{sponsors:t.communities}),e.jsx(k,{sponsors:t.supporters}),e.jsx(I,{sponsors:t.media_partners})]})}),Z=r.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${d}px) {
    padding-bottom: 20rem;
  }
`,oe=()=>{const{hash:s}=A();return M.useEffect(()=>{s!=null&&s!==""&&document.getElementById(s.substring(1))?.scrollIntoView()},[s]),E("Home",a.edition),e.jsxs(Z,{id:"home-wrapper",children:[e.jsx(q,{}),e.jsx(L,{}),e.jsx(R,{speakersLink:_,sessionizeUrl:a.edition,isEnabled:a.carrousel.enabled}),e.jsx(Q,{})]})};export{oe as HomeWrapper2024};
//# sourceMappingURL=HomeWrapper2024-DNU5uaby.js.map
