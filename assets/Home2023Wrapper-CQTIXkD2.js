import{h as t,x as r,e as i,p as l,j as e,r as a,q as w,l as j,S as u,b1 as S,M as C,G as _,n as m,B as d,b2 as B,aV as E,aX as T,K as I,N as L,Q as A,ay as D,f as R,X as $,Y as F,Z as U,_ as G,$ as N,a0 as z,a1 as P,a2 as K,v as q,g as O,a4 as H,aY as J}from"./index-CqNmxiVQ.js";import{d as o}from"./2023-B74YaiT2.js";try{let s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new s.Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="c767cdfc-bc48-4f0a-b358-b69d3d5938ba",s._sentryDebugIdIdentifier="sentry-dbid-c767cdfc-bc48-4f0a-b358-b69d3d5938ba")}catch{}const W=t(r.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`,M=t.div`
  background: ${i.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`,Y=t.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,V=t.img`
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

  @media (max-width: ${l}px) {
    width: 100%;
  }
`,X=t.h2`
  color: white;
  margin-bottom: 10px;
`,b=t.p`
  color: white;
  margin-bottom: 10px;
`,Z=t.div`
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
`,Q=t.div.withConfig({shouldForwardProp:s=>!["padding"].includes(s)})`
  position: relative;
  @media (min-width: 800px) {
    height: auto;

    padding: ${({padding:s})=>s};
  }
`,ee=t(r.img)`
  border: 1px solid ${i.YELLOW};
  display: block;
  height: 242px;
  margin: 3px;
  padding: 5px;
  width: 360px;
  border-radius: 92% 8% 90% 10% / 9% 90% 10% 91%;

  @media (max-width: ${l}px) {
    width: 95%;
  }
`,se=t(r.div)`
  display: flex;
  flex-direction: column;
  color: ${i.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({align:s})=>s};
  }
`,te=t.h2`
  padding-top: 1rem;
  color: ${i.YELLOW};
  font-size: 1.3em;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`,ie=t.p`
  padding: 0.5rem 2rem;
  text-align: left;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
  }

  ul {
    margin: 0.5rem 2rem;
  }
`,ne=({faq:s,index:n})=>{const p=n%2===0;return e.jsxs(Z,{className:"faq-card",children:[e.jsx(Q,{padding:p?"0 1rem 0 0":"0 0 0 1rem",children:e.jsx(a.Suspense,{fallback:e.jsx(w,{src:"/images/logo.svg"}),children:e.jsx(ee,{src:`images/2023/FaqsImage${n}.png`})})}),e.jsxs(se,{align:p?"flex-start":"flex-end",children:[e.jsx(te,{children:s.question}),e.jsx(ie,{children:s.answer})]})]})},oe=()=>{const{width:s}=j();return e.jsxs(e.Fragment,{children:[e.jsx(u,{color:i.DARK_BLUE,children:e.jsxs(W,{children:[S.map((n,p)=>e.jsx(ne,{faq:n,index:p},n.id)),e.jsx("div",{id:"last-jbcnconf",children:" "}),e.jsxs("div",{style:{width:"60%"},children:[e.jsx(X,{children:"Check last JBCNConf edition"}),e.jsx(a.Suspense,{fallback:e.jsx(w,{src:"/images/logo.svg"}),children:e.jsx(x,{src:"images/jbcnconf/jbcnconf-1.jpg",alt:"JBCNConf"})}),e.jsx(a.Suspense,{fallback:e.jsx(w,{src:"/images/logo.svg"}),children:e.jsx(x,{src:"images/jbcnconf/jbcnconf-2.jpg",alt:"JBCNConf - Keynote"})}),e.jsx(b,{children:"DevBcn is the rebranding of the biggest Java & JVM conference in Spain, now including more technologies and tracks."}),e.jsx(b,{children:"Check for videos/photos and summary of the JBCNConf - 2022 edition"}),e.jsx("a",{href:"https://www.flickr.com/photos/barcelonajug/collections/72157720937175671/",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/flickr.svg",alt:"flickr",height:32,width:32})}),e.jsx("a",{href:"https://www.youtube.com/watch?v=zFPpwRyl4Iw&list=PLo0fJV3LkR3z42GevLgXlQfNFP2qfgtrq",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/youtube.svg",alt:"Youtube",height:32,width:32})}),e.jsx("a",{href:"https://docs.google.com/presentation/d/1t1RnYOqcoP8Bo1GVyiGyW-mY_2bBpUspnW8nqXDUbGI/edit?usp=sharing",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/slides.png",alt:"Summary Slides",height:32,width:32})})]}),s>C&&e.jsxs(e.Fragment,{children:[e.jsx(Y,{src:"/images/LessThanBlueWhiteIcon.svg"}),e.jsx(V,{src:"/images/LessThanBlueIcon.svg"})]})]})}),e.jsx(M,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})})]})},ae=t.div`
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
`,re=t.div`
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

  @media (max-width: ${l}px) {
    width: 80%;
  }
`,le=t.h1`
  padding: 0.5rem 1rem;
  color: ${i.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,g=t.h2`
  color: ${s=>s.color??i.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;

  a {
    text-decoration: none;
    color: ${i.LIGHT_BLUE};
  }
`,ce=t(r.img)`
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
`,me=t(r.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`,de=t(r.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`,pe=t(r.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${i.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,ge=t(r.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${i.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,he=t.div`
  display: flex;
  text-align: center;

  @media (max-width: ${l}px) {
    flex-direction: column;
    width: 75%;
  }
`,we=()=>{const{isTicketsDisabled:s,isSponsorDisabled:n,isCfpDisabled:p}=_(new Date,o),y=a.useCallback(()=>{m("sponsorship","sponsorship")},[]),v=a.useCallback(()=>{m("ticket","tickets")},[]),k=a.useCallback(()=>{m("CFP","CFP")},[]);return e.jsxs(he,{children:[e.jsx(d,{onClick:v,text:"🎟️ Buy Tickets",link:B("https://tickets.devbcn.com/event/devbcn-2023"),isDisabled:s}),e.jsx(d,{onClick:k,text:"📢 Call For Papers",link:o.cfp.link,isDisabled:p}),e.jsx(d,{onClick:y,text:"🤝 Sponsorship",link:"mailto:sponsors@devbcn.com?subject=devBcn sponsorship",isDisabled:n})]})},ue=t.div`
  display: flex;
  text-align: center;

  @media (max-width: ${l}px) {
    flex-direction: column;
    width: 75%;
  }
`,xe=()=>{const s=a.useCallback(()=>{m("attendee-info","attendee-infos")},[]),n=a.useCallback(()=>{m("speaker-info","speaker-info")},[]);return e.jsxs(ue,{children:[e.jsx(d,{onClick:s,target:"_self",text:"🙋🏻 Attendee information",link:E}),e.jsx(d,{onClick:n,target:"_self",text:"🎙️ Speaker information",link:T})]})},be=t.div`
  display: flex;
  text-align: center;

  @media (max-width: ${l}px) {
    flex-direction: column;
    width: 75%;
  }
`,fe=()=>{const s=a.useCallback(()=>{m("flickr","flickr")},[]),n=a.useCallback(()=>{m("youtube","youtube")},[]);return e.jsxs(be,{children:[e.jsx(d,{onClick:s,target:"_blank",text:"Flickr",link:"https://www.flickr.com/photos/devbcn/albums",children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/44/Flickr.svg",alt:"flickr",height:32,width:32,style:{marginRight:"5px"}})}),e.jsx(d,{onClick:n,target:"_blank",text:"Youtube",link:"https://www.youtube.com/watch?v=Pv4kEMRE-kg&list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og",children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/159px-YouTube_full-color_icon_%282017%29.svg.png",alt:"Youtube",height:28,width:42,style:{marginRight:"5px"}})})]})},je=t.img`
  margin: 20px;
  width: 600px;
  @media (max-width: ${l}px) {
    width: 80%;
  }
`,ye=()=>{const{width:s}=j(),n=o.startDay;return e.jsx(ae,{children:e.jsx(u,{color:"transparent",children:e.jsxs(re,{children:[e.jsx(je,{src:"/images/logo.png",alt:"DevBcn logo"}),e.jsxs(h,{children:[e.jsx(le,{children:"The Barcelona Developers Conference 2023"}),e.jsxs(g,{children:["Former"," ",e.jsx("a",{href:"https://www.jbcnconf.com/2022/",target:"_blank",rel:"noreferrer",children:"JBCNConf"})," "]}),e.jsx(g,{children:"Multidisciplinary conference made for Developers and by Developers, to learn and share on the different modern software technologies used across the companies"})]}),e.jsxs(h,{color:i.LIGHT_BLUE,children:[e.jsx(g,{color:i.DARK_BLUE,children:"July 3rd-5th, 2023"}),e.jsx(g,{color:i.DARK_BLUE,children:"La Farga, Hospitalet, Barcelona"})]}),e.jsx(h,{color:i.DARK_BLUE,children:e.jsxs(g,{children:["7 tracks with the following topics: ",e.jsx("br",{}),o.tracks]})}),o.showCountdown&&e.jsx(I,{date:n,onComplete:A,renderer:L}),o.actionButtons&&e.jsx(we,{}),o.showInfoButtons&&e.jsx(xe,{}),e.jsx("h2",{style:{color:i.LIGHT_BLUE,textShadow:"1px 1px #000"},children:"DevBcn 2023 edition resources"}),e.jsx(fe,{}),s>D&&e.jsx(ce,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(de,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},children:e.jsxs(pe,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(me,{initial:{x:"-100%"},animate:{x:0},transition:{duration:6},children:e.jsxs(ge,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})})})},ve=t.div`
  position: relative;
  padding-top: 4rem;
`,ke=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`,f=t.img`
  height: 4rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;t(r.div)`
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

  @media (min-width: ${l}px) {
    display: flex;
  }
`;const c={top:[{name:"GFT",website:"https://www.gft.com/es/es/",image:"images/sponsors/GFT.jpg"}],premium:[{name:"Barcelona JUG",image:"images/sponsors/bcn-jug.png",website:"https://www.meetup.com/barcelonajug/"},{name:"Adevinta",website:"https://www.adevinta.com/",image:"images/sponsors/adevinta.png"},{name:"Red Hat",website:"https://developers.redhat.com/",image:"images/sponsors/red-hat.png"},{name:"Revolut",website:"https://www.revolut.com/working-at-revolut/",image:"images/sponsors/revolut.png"}],regular:[{name:"Adaptive",image:"images/sponsors/adaptive.png",website:"https://www.weareadaptive.com/"},{name:"Capitol",image:"images/sponsors/capitole.png",website:"https://capitole-consulting.com/es/"},{name:"Allianz",image:"images/sponsors/allianz.png",website:"https://careers.allianz.com/es_ES.html"},{name:"Sopra Steria",image:"images/sponsors/sopra.jpg",website:"https://www.soprasteria.es/"},{name:"Idealista",image:"images/sponsors/idealista.jpg",website:"https://www.idealista.com/info/trabaja-con-nosotros"},{name:"King",image:"images/sponsors/king.png",website:"https://careers.king.com/about-us/"},{name:"Azul",image:"images/sponsors/azul.png",website:"https://www.azul.com/?utm_medium=email&utm_campaign=20230703-SEV-DevBCN&utm_source=DevBCN&utm_content=&utm_term="},{name:"Gradle",image:"images/sponsors/gradle.png",website:"https://gradle.com/"},{name:"CouchBase",website:"https://developer.couchbase.com/",image:"images/sponsors/couchbase.png"},{name:"Alten",image:"images/sponsors/alten.png",website:"https://www.alten.es"},{name:"New Relic",image:"images/sponsors/someRelic.png",website:"https://newrelic.com"},{name:"Confluent",website:"https://www.confluent.io/",image:"images/sponsors/confluent.png"}],basic:[{name:"Caixabank Tech",website:"https://www.caixabanktech.com/es/pagina-de-inicio/",image:"images/sponsors/caixabank-tech.png"},{name:"Ocado Tech",website:"https://careers.ocadogroup.com/where-we-are/europe/development-centre-barcelona?utm_source=event&utm_medium=other&utm_campaign=ot_event_bcn_devbcn_website",image:"images/sponsors/ocado.png"},{name:"Honeypot",website:"https://app.honeypot.io/users/sign_up?utm_source=Live&utm_medium=sourcing&utm_campaign=event_02072023&utm_content=DevBCN",image:"images/sponsors/honeypot.jpg"},{name:"Edreams",image:"images/sponsors/edreams.png",website:"https://www.edreamsodigeo.com"},{name:"barcelona Activa",image:"images/sponsors/barcelona-activa.png",website:"https://www.barcelonactiva.cat/"},{name:"Seidor",website:"https://www.opentrends.net/en",image:"images/sponsors/seidor.png"},{name:"Veepee",image:"images/sponsors/veepee.png",website:"https://www.veepee.es/gr/home/default"},{name:"Zurich",website:"https://bcntdc.zurich.com/en",image:"images/sponsors/zurich.png"},{name:"Inditex",website:"https://www.zaratalent.com/es/tech/",image:"images/sponsors/inditex.png"},{name:"Axa",image:"images/sponsors/axa.png",website:"https://www.careers.axapartners.com/es/es"},{name:"Servicenow",image:"images/sponsors/servicenow.png",website:"https://www.servicenow.com/products/observability.html"}],communities:[{name:"Agile Spain",image:"images/sponsors/agile.png",website:"https://agile-spain.org/"},{name:"step4ward",image:"images/sponsors/step4ward.png",website:"https://bit.ly/step4wardhome"},{name:"Apache foundation",image:"images/sponsors/apache-foundation.jpeg",website:"https://www.apache.org/"},{name:"Eclipse foundation",website:"https://www.eclipse.org/",image:"images/sponsors/eclipse-foundation.png"}],media_partners:[{name:"Kube events",image:"images/sponsors/kube-events.png",website:"https://kube.events/"},{name:"Kube careers",image:"images/sponsors/kube-career.png",website:"https://kube.careers//"},{name:"entre devs y ops",image:"images/sponsors/entre-devs-y-ops.svg",website:"https://www.entredevyops.es/"},{name:"Codely",image:"images/sponsors/codely.png",website:"https://codely.com/pro/jbcnconf22"},{name:"CIO Insigths",website:"https://www.cioinsights.com/",image:"images/sponsors/cio.png"},{name:"Glorium",image:"images/sponsors/glorium.png",website:"https://gloriumtech.com/"}],supporters:[{name:"Jetbrains",image:"images/sponsors/jetbrains.png",website:"https://www.jetbrains.com"},{name:"Madrid JUG",website:"https://www.meetup.com/MadridJUG",image:"images/sponsors/madrid-jug.png"},{name:"Malaga JUG",image:"images/sponsors/malaga-jug.png",website:"https://www.meetup.com/MalagaJUG"},{name:"PythonBCN",website:"https://pybcn.org/",image:"images/sponsors/python-bcn.png"},{name:"BarcelonaJS",website:"https://barcelonajs.com/",image:"images/sponsors/barcelona-js.png"}]},Se=()=>e.jsx(u,{color:i.WHITE,children:e.jsxs(ve,{id:"sponsors",children:[e.jsxs(ke,{className:"TitleContainer",children:[e.jsx(f,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(R,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:i.DARK_BLUE}),e.jsx(f,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx($,{sponsors:c.top}),e.jsx(F,{sponsors:c.premium}),e.jsx(U,{sponsors:c.regular}),e.jsx(G,{sponsors:c.basic}),e.jsx(N,{sponsors:c.communities}),e.jsx(z,{sponsors:c.supporters}),e.jsx(P,{sponsors:c.media_partners})]})}),Ce=t.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${l}px) {
    padding-bottom: 20rem;
  }
`,Ee=()=>{const{hash:s}=K();return q.useEffect(()=>{if(s!=null&&s!==""){const n=document.getElementById(s.substring(1));n==null||n.scrollIntoView()}},[s]),O("Home",o.edition),e.jsxs(Ce,{id:"home-wrapper",children:[e.jsx(ye,{}),e.jsx(oe,{}),e.jsx(H,{speakersLink:J,sessionizeUrl:o.edition,isEnabled:o.carrousel.enabled}),e.jsx(Se,{})]})};export{Ee as Home2023Wrapper,Ee as default};
//# sourceMappingURL=Home2023Wrapper-CQTIXkD2.js.map
