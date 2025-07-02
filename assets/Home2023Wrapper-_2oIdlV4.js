import{h as t,x as o,e as i,p as a,j as e,r as l,q as w,l as y,S as u,aE as j,M as v,n as p,B as g,aF as k,aG as S,aD as _,f as B,a4 as E,a5 as C,a6 as T,a7 as I,a8 as L,a9 as A,aa as R,ab as $,v as D,g as U,ad as F,aH as G}from"./index-C3KLuTAt.js";import{c as m}from"./2023-B5vIzsTA.js";try{let s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new s.Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="db1ff31d-e2e1-462c-8b41-5c23bc3259f2",s._sentryDebugIdIdentifier="sentry-dbid-db1ff31d-e2e1-462c-8b41-5c23bc3259f2")}catch{}const z=t(o.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`,N=t.div`
  background: ${i.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`,q=t.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,K=t.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,x=t.img`
  margin: 3px;
  padding: 5px;
  border: 1px solid ${i.YELLOW};
  border-radius: 100% 0 100% 0 / 15% 89% 11% 85%;

  @media (max-width: ${a}px) {
    width: 100%;
  }
`,H=t.h2`
  color: white;
  margin-bottom: 10px;
`,b=t.p`
  color: white;
  margin-bottom: 10px;
`,O=t.div`
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
`,P=t.div.withConfig({shouldForwardProp:s=>!["padding"].includes(s)})`
  position: relative;
  @media (min-width: 800px) {
    height: auto;

    padding: ${({padding:s})=>s};
  }
`,J=t(o.img)`
  border: 1px solid ${i.YELLOW};
  display: block;
  height: 242px;
  margin: 3px;
  padding: 5px;
  width: 360px;
  border-radius: 92% 8% 90% 10% / 9% 90% 10% 91%;

  @media (max-width: ${a}px) {
    width: 95%;
  }
`,W=t(o.div)`
  display: flex;
  flex-direction: column;
  color: ${i.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({align:s})=>s};
  }
`,M=t.h2`
  padding-top: 1rem;
  color: ${i.YELLOW};
  font-size: 1.3em;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`,Y=t.p`
  padding: 0.5rem 2rem;
  text-align: left;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
  }

  ul {
    margin: 0.5rem 2rem;
  }
`,V=({faq:s,index:n})=>{const d=n%2===0;return e.jsxs(O,{className:"faq-card",children:[e.jsx(P,{padding:d?"0 1rem 0 0":"0 0 0 1rem",children:e.jsx(l.Suspense,{fallback:e.jsx(w,{src:"/images/logo.svg"}),children:e.jsx(J,{src:`images/2023/FaqsImage${n}.png`})})}),e.jsxs(W,{align:d?"flex-start":"flex-end",children:[e.jsx(M,{children:s.question}),e.jsx(Y,{children:s.answer})]})]})},Z=()=>{const{width:s}=y();return e.jsxs(e.Fragment,{children:[e.jsx(u,{color:i.DARK_BLUE,children:e.jsxs(z,{children:[j.map((n,d)=>e.jsx(V,{faq:n,index:d},n.id)),e.jsx("div",{id:"last-jbcnconf",children:" "}),e.jsxs("div",{style:{width:"60%"},children:[e.jsx(H,{children:"Check last JBCNConf edition"}),e.jsx(l.Suspense,{fallback:e.jsx(w,{src:"/images/logo.svg"}),children:e.jsx(x,{src:"images/jbcnconf/jbcnconf-1.jpg",alt:"JBCNConf"})}),e.jsx(l.Suspense,{fallback:e.jsx(w,{src:"/images/logo.svg"}),children:e.jsx(x,{src:"images/jbcnconf/jbcnconf-2.jpg",alt:"JBCNConf - Keynote"})}),e.jsx(b,{children:"DevBcn is the rebranding of the biggest Java & JVM conference in Spain, now including more technologies and tracks."}),e.jsx(b,{children:"Check for videos/photos and summary of the JBCNConf - 2022 edition"}),e.jsx("a",{href:"https://www.flickr.com/photos/barcelonajug/collections/72157720937175671/",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/flickr.svg",alt:"flickr",height:32,width:32})}),e.jsx("a",{href:"https://www.youtube.com/watch?v=zFPpwRyl4Iw&list=PLo0fJV3LkR3z42GevLgXlQfNFP2qfgtrq",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/youtube.svg",alt:"Youtube",height:32,width:32})}),e.jsx("a",{href:"https://docs.google.com/presentation/d/1t1RnYOqcoP8Bo1GVyiGyW-mY_2bBpUspnW8nqXDUbGI/edit?usp=sharing",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/slides.png",alt:"Summary Slides",height:32,width:32})})]}),s>v&&e.jsxs(e.Fragment,{children:[e.jsx(q,{src:"/images/LessThanBlueWhiteIcon.svg"}),e.jsx(K,{src:"/images/LessThanBlueIcon.svg"})]})]})}),e.jsx(N,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})})]})},X=t.div`
  padding: 70px 0 40px;
  background: linear-gradient(-45deg, ${i.LIGHT_BLUE}, ${i.MAGENTA}, ${i.DARK_BLUE}, ${i.GREEN});
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
`,Q=t.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,h=t.div`
  background-color: ${s=>s.color??i.DARK_BLUE};
  border-radius: 20px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${a}px) {
    width: 80%;
  }
`,ee=t.h1`
  padding: 0.5rem 1rem;
  color: ${i.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,c=t.h2`
  color: ${s=>s.color??i.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;

  a {
    text-decoration: none;
    color: ${i.LIGHT_BLUE};
  }
`,se=t(o.img)`
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
`,te=t(o.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`,ie=t(o.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`,ne=t(o.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${i.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,oe=t(o.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${i.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;t.div`
  display: flex;
  text-align: center;

  @media (max-width: ${a}px) {
    flex-direction: column;
    width: 75%;
  }
`;const ae=t.div`
  display: flex;
  text-align: center;

  @media (max-width: ${a}px) {
    flex-direction: column;
    width: 75%;
  }
`,re=()=>{const s=l.useCallback(()=>{p("attendee-info","attendee-infos")},[]),n=l.useCallback(()=>{p("speaker-info","speaker-info")},[]);return e.jsxs(ae,{children:[e.jsx(g,{onClick:s,target:"_self",text:"🙋🏻 Attendee information",link:k}),e.jsx(g,{onClick:n,target:"_self",text:"🎙️ Speaker information",link:S})]})},le=t.div`
  display: flex;
  text-align: center;

  @media (max-width: ${a}px) {
    flex-direction: column;
    width: 75%;
  }
`,me=()=>{const s=l.useCallback(()=>{p("flickr","flickr")},[]),n=l.useCallback(()=>{p("youtube","youtube")},[]);return e.jsxs(le,{children:[e.jsx(g,{onClick:s,target:"_blank",text:"Flickr",link:"https://www.flickr.com/photos/devbcn/albums",children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/44/Flickr.svg",alt:"flickr",height:32,width:32,style:{marginRight:"5px"}})}),e.jsx(g,{onClick:n,target:"_blank",text:"Youtube",link:"https://www.youtube.com/watch?v=Pv4kEMRE-kg&list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og",children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/159px-YouTube_full-color_icon_%282017%29.svg.png",alt:"Youtube",height:28,width:42,style:{marginRight:"5px"}})})]})},ce=t.img`
  margin: 20px;
  width: 600px;
  @media (max-width: ${a}px) {
    width: 80%;
  }
`,de=()=>{const{width:s}=y();return e.jsx(X,{children:e.jsx(u,{color:"transparent",children:e.jsxs(Q,{children:[e.jsx(ce,{src:"/images/logo.png",alt:"DevBcn logo"}),e.jsxs(h,{children:[e.jsx(ee,{children:"The Barcelona Developers Conference 2023"}),e.jsxs(c,{children:["Former"," ",e.jsx("a",{href:"https://www.jbcnconf.com/2022/",target:"_blank",rel:"noreferrer",children:"JBCNConf"})," "]}),e.jsx(c,{children:"Multidisciplinary conference made for Developers and by Developers, to learn and share on the different modern software technologies used across the companies"})]}),e.jsxs(h,{color:i.LIGHT_BLUE,children:[e.jsx(c,{color:i.DARK_BLUE,children:"July 3rd-5th, 2023"}),e.jsx(c,{color:i.DARK_BLUE,children:"La Farga, Hospitalet, Barcelona"})]}),e.jsx(h,{color:i.DARK_BLUE,children:e.jsxs(c,{children:["7 tracks with the following topics: ",e.jsx("br",{}),m.tracks]})}),m.showCountdown,m.actionButtons,e.jsx(re,{}),e.jsx("h2",{style:{color:i.LIGHT_BLUE,textShadow:"1px 1px #000"},children:"DevBcn 2023 edition resources"}),e.jsx(me,{}),s>_&&e.jsx(se,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(ie,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},children:e.jsxs(ne,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(te,{initial:{x:"-100%"},animate:{x:0},transition:{duration:6},children:e.jsxs(oe,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})})})},pe=t.div`
  position: relative;
  padding-top: 4rem;
`,ge=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`,f=t.img`
  height: 4rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;t(o.div)`
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

  @media (min-width: ${a}px) {
    display: flex;
  }
`;const r={top:[{name:"GFT",website:"https://www.gft.com/es/es/",image:"images/sponsors/GFT.jpg"}],premium:[{name:"Barcelona JUG",image:"images/sponsors/bcn-jug.png",website:"https://www.meetup.com/barcelonajug/"},{name:"Adevinta",website:"https://www.adevinta.com/",image:"images/sponsors/adevinta.png"},{name:"Red Hat",website:"https://developers.redhat.com/",image:"images/sponsors/red-hat.png"},{name:"Revolut",website:"https://www.revolut.com/working-at-revolut/",image:"images/sponsors/revolut.png"}],regular:[{name:"Adaptive",image:"images/sponsors/adaptive.png",website:"https://www.weareadaptive.com/"},{name:"Capitol",image:"images/sponsors/capitole.png",website:"https://capitole-consulting.com/es/"},{name:"Allianz",image:"images/sponsors/allianz.png",website:"https://careers.allianz.com/es_ES.html"},{name:"Sopra Steria",image:"images/sponsors/sopra.jpg",website:"https://www.soprasteria.es/"},{name:"Idealista",image:"images/sponsors/idealista.jpg",website:"https://www.idealista.com/info/trabaja-con-nosotros"},{name:"King",image:"images/sponsors/king.png",website:"https://careers.king.com/about-us/"},{name:"Azul",image:"images/sponsors/azul.png",website:"https://www.azul.com/?utm_medium=email&utm_campaign=20230703-SEV-DevBCN&utm_source=DevBCN&utm_content=&utm_term="},{name:"Gradle",image:"images/sponsors/gradle.png",website:"https://gradle.com/"},{name:"CouchBase",website:"https://developer.couchbase.com/",image:"images/sponsors/couchbase.png"},{name:"Alten",image:"images/sponsors/alten.png",website:"https://www.alten.es"},{name:"New Relic",image:"images/sponsors/someRelic.png",website:"https://newrelic.com"},{name:"Confluent",website:"https://www.confluent.io/",image:"images/sponsors/confluent.png"}],basic:[{name:"Caixabank Tech",website:"https://www.caixabanktech.com/es/pagina-de-inicio/",image:"images/sponsors/caixabank-tech.png"},{name:"Ocado Tech",website:"https://careers.ocadogroup.com/where-we-are/europe/development-centre-barcelona?utm_source=event&utm_medium=other&utm_campaign=ot_event_bcn_devbcn_website",image:"images/sponsors/ocado.png"},{name:"Honeypot",website:"https://app.honeypot.io/users/sign_up?utm_source=Live&utm_medium=sourcing&utm_campaign=event_02072023&utm_content=DevBCN",image:"images/sponsors/honeypot.jpg"},{name:"Edreams",image:"images/sponsors/edreams.png",website:"https://www.edreamsodigeo.com"},{name:"barcelona Activa",image:"images/sponsors/barcelona-activa.png",website:"https://www.barcelonactiva.cat/"},{name:"Seidor",website:"https://www.opentrends.net/en",image:"images/sponsors/seidor.png"},{name:"Veepee",image:"images/sponsors/veepee.png",website:"https://www.veepee.es/gr/home/default"},{name:"Zurich",website:"https://bcntdc.zurich.com/en",image:"images/sponsors/zurich.png"},{name:"Inditex",website:"https://www.zaratalent.com/es/tech/",image:"images/sponsors/inditex.png"},{name:"Axa",image:"images/sponsors/axa.png",website:"https://www.careers.axapartners.com/es/es"},{name:"Servicenow",image:"images/sponsors/servicenow.png",website:"https://www.servicenow.com/products/observability.html"}],communities:[{name:"Agile Spain",image:"images/sponsors/agile.png",website:"https://agile-spain.org/"},{name:"step4ward",image:"images/sponsors/step4ward.png",website:"https://bit.ly/step4wardhome"},{name:"Apache foundation",image:"images/sponsors/apache-foundation.jpeg",website:"https://www.apache.org/"},{name:"Eclipse foundation",website:"https://www.eclipse.org/",image:"images/sponsors/eclipse-foundation.png"}],media_partners:[{name:"Kube events",image:"images/sponsors/kube-events.png",website:"https://kube.events/"},{name:"Kube careers",image:"images/sponsors/kube-career.png",website:"https://kube.careers//"},{name:"entre devs y ops",image:"images/sponsors/entre-devs-y-ops.svg",website:"https://www.entredevyops.es/"},{name:"Codely",image:"images/sponsors/codely.png",website:"https://codely.com/pro/jbcnconf22"},{name:"CIO Insigths",website:"https://www.cioinsights.com/",image:"images/sponsors/cio.png"},{name:"Glorium",image:"images/sponsors/glorium.png",website:"https://gloriumtech.com/"}],supporters:[{name:"Jetbrains",image:"images/sponsors/jetbrains.png",website:"https://www.jetbrains.com"},{name:"Madrid JUG",website:"https://www.meetup.com/MadridJUG",image:"images/sponsors/madrid-jug.png"},{name:"Malaga JUG",image:"images/sponsors/malaga-jug.png",website:"https://www.meetup.com/MalagaJUG"},{name:"PythonBCN",website:"https://pybcn.org/",image:"images/sponsors/python-bcn.png"},{name:"BarcelonaJS",website:"https://barcelonajs.com/",image:"images/sponsors/barcelona-js.png"}]},he=()=>e.jsx(u,{color:i.WHITE,children:e.jsxs(pe,{id:"sponsors",children:[e.jsxs(ge,{className:"TitleContainer",children:[e.jsx(f,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(B,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:i.DARK_BLUE}),e.jsx(f,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(E,{sponsors:r.top}),e.jsx(C,{sponsors:r.premium}),e.jsx(T,{sponsors:r.regular}),e.jsx(I,{sponsors:r.basic}),e.jsx(L,{sponsors:r.communities}),e.jsx(A,{sponsors:r.supporters}),e.jsx(R,{sponsors:r.media_partners})]})}),we=t.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${a}px) {
    padding-bottom: 20rem;
  }
`,be=()=>{const{hash:s}=$();return D.useEffect(()=>{s!=null&&s!==""&&document.getElementById(s.substring(1))?.scrollIntoView()},[s]),U("Home",m.edition),e.jsxs(we,{id:"home-wrapper",children:[e.jsx(de,{}),e.jsx(Z,{}),e.jsx(F,{speakersLink:G,sessionizeUrl:m.edition,isEnabled:m.carrousel.enabled}),e.jsx(he,{})]})};export{be as Home2023Wrapper,be as default};
//# sourceMappingURL=Home2023Wrapper-_2oIdlV4.js.map
