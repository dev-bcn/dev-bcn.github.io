import{d as i,m as a,C as t,a as c,j as e,r as l,S as u,u as j,M as k,a5 as E,a6 as _,y as C,b as B,R as T,a7 as L}from"./index-DeBvquqm.js";import{S as b}from"./SectionWrapper-B_z0-O1Y.js";import{f as A}from"./FaqsData-B2L-SL3g.js";import{C as I,T as R,a as D,S as U,b as z,c as x,d as r,e as P}from"./SpeakersCarousel-C3dz_KHb.js";import{c as n}from"./2023-D0V7NqrG.js";import{u as $}from"./useDateInterval-C4QcM3NE.js";import{A as K}from"./ActionButtons-K8s7bx1d.js";import{g,B as h}from"./Analytics-DZDCHIAw.js";import{T as N}from"./TitleSection-C_nx_Uff.js";import{u as F}from"./useDocumentTitleUpdate-C8lvgP6f.js";import"./useFetchSpeakers-DyOok1JZ.js";import"./index-CwpBwFgV.js";import"./useSentryErrorReport-Cb8Lz7pf.js";import"./isWithinInterval-DHzW7_Nh.js";import"./toDate-CIP_bgcP.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};s.SENTRY_RELEASE={id:"fae39acef3a4ad585284629fd10335cc174e2616"}}catch{}})();try{(function(){var s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new s.Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="c50068c8-06a2-4508-a7aa-ee938d60074a",s._sentryDebugIdIdentifier="sentry-dbid-c50068c8-06a2-4508-a7aa-ee938d60074a")})()}catch{}const G=i(a.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`,O=i.div`
  background: ${t.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`,M=i.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,q=i.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,f=i.img`
  margin: 3px;
  padding: 5px;
  border: 1px solid ${t.YELLOW};
  border-radius: 100% 0 100% 0 / 15% 89% 11% 85%;

  @media (max-width: ${c}px) {
    width: 100%;
  }
`,H=i.h2`
  color: white;
  margin-bottom: 10px;
`,y=i.p`
  color: white;
  margin-bottom: 10px;
`,J=i.div`
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
`,W=i.div.withConfig({shouldForwardProp:s=>!["padding"].includes(s)})`
  position: relative;
  @media (min-width: 800px) {
    height: auto;

    padding: ${({padding:s})=>s};
  }
`,Y=i(a.img)`
  border: 1px solid ${t.YELLOW};
  display: block;
  height: 242px;
  margin: 3px;
  padding: 5px;
  width: 360px;
  border-radius: 92% 8% 90% 10% / 9% 90% 10% 91%;

  @media (max-width: ${c}px) {
    width: 95%;
  }
`,V=i(a.div)`
  display: flex;
  flex-direction: column;
  color: ${t.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({align:s})=>s};
  }
`,Z=i.h2`
  padding-top: 1rem;
  color: ${t.YELLOW};
  font-size: 1.3em;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`,X=i.p`
  padding: 0.5rem 2rem;
  text-align: left;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
  }

  ul {
    margin: 0.5rem 2rem;
  }
`,Q=({faq:s,index:o})=>{const d=o%2===0;return e.jsxs(J,{className:"faq-card",children:[e.jsx(W,{padding:d?"0 1rem 0 0":"0 0 0 1rem",children:e.jsx(l.Suspense,{fallback:e.jsx(u,{src:"/images/logo.svg"}),children:e.jsx(Y,{src:`images/2023/FaqsImage${o}.png`})})}),e.jsxs(V,{align:d?"flex-start":"flex-end",children:[e.jsx(Z,{children:s.question}),e.jsx(X,{children:s.answer})]})]})},ee=()=>{const{width:s}=j();return e.jsxs(e.Fragment,{children:[e.jsx(b,{color:t.DARK_BLUE,children:e.jsxs(G,{children:[A.map((o,d)=>e.jsx(Q,{faq:o,index:d},o.id)),e.jsx("div",{id:"last-jbcnconf",children:" "}),e.jsxs("div",{style:{width:"60%"},children:[e.jsx(H,{children:"Check last JBCNConf edition"}),e.jsx(l.Suspense,{fallback:e.jsx(u,{src:"/images/logo.svg"}),children:e.jsx(f,{src:"images/jbcnconf/jbcnconf-1.jpg",alt:"JBCNConf"})}),e.jsx(l.Suspense,{fallback:e.jsx(u,{src:"/images/logo.svg"}),children:e.jsx(f,{src:"images/jbcnconf/jbcnconf-2.jpg",alt:"JBCNConf - Keynote"})}),e.jsx(y,{children:"DevBcn is the rebranding of the biggest Java & JVM conference in Spain, now including more technologies and tracks."}),e.jsx(y,{children:"Check for videos/photos and summary of the JBCNConf - 2022 edition"}),e.jsx("a",{href:"https://www.flickr.com/photos/barcelonajug/collections/72157720937175671/",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/flickr.svg",alt:"flickr",height:32,width:32})}),e.jsx("a",{href:"https://www.youtube.com/watch?v=zFPpwRyl4Iw&list=PLo0fJV3LkR3z42GevLgXlQfNFP2qfgtrq",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/youtube.svg",alt:"Youtube",height:32,width:32})}),e.jsx("a",{href:"https://docs.google.com/presentation/d/1t1RnYOqcoP8Bo1GVyiGyW-mY_2bBpUspnW8nqXDUbGI/edit?usp=sharing",rel:"noreferrer",target:"_blank",children:e.jsx("img",{src:"/images/slides.png",alt:"Summary Slides",height:32,width:32})})]}),s>k&&e.jsxs(e.Fragment,{children:[e.jsx(M,{src:"/images/LessThanBlueWhiteIcon.svg"}),e.jsx(q,{src:"/images/LessThanBlueIcon.svg"})]})]})}),e.jsx(O,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})})]})},se=i.div`
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
`,te=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,w=i.div`
  background-color: ${s=>s.color??t.DARK_BLUE};
  border-radius: 20px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${c}px) {
    width: 80%;
  }
`,ie=i.h1`
  padding: 0.5rem 1rem;
  color: ${t.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`,p=i.h2`
  color: ${s=>s.color??t.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;

  a {
    text-decoration: none;
    color: ${t.LIGHT_BLUE};
  }
`,oe=i(a.img)`
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
`,ne=i(a.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`,ae=i(a.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`,re=i(a.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,me=i(a.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${t.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`,le=i.div`
  display: flex;
  text-align: center;

  @media (max-width: ${c}px) {
    flex-direction: column;
    width: 75%;
  }
`,ce=()=>{const s=l.useCallback(()=>{g("attendee-info","attendee-infos")},[]),o=l.useCallback(()=>{g("speaker-info","speaker-info")},[]);return e.jsxs(le,{children:[e.jsx(h,{onClick:s,target:"_self",text:"🙋🏻 Attendee information",link:E}),e.jsx(h,{onClick:o,target:"_self",text:"🎙️ Speaker information",link:_})]})},de=i.div`
  display: flex;
  text-align: center;

  @media (max-width: ${c}px) {
    flex-direction: column;
    width: 75%;
  }
`,pe=()=>{const s=l.useCallback(()=>{g("flickr","flickr")},[]),o=l.useCallback(()=>{g("youtube","youtube")},[]);return e.jsxs(de,{children:[e.jsx(h,{onClick:s,target:"_blank",text:"Flickr",link:"https://www.flickr.com/photos/devbcn/albums",children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/44/Flickr.svg",alt:"flickr",height:32,width:32,style:{marginRight:"5px"}})}),e.jsx(h,{onClick:o,target:"_blank",text:"Youtube",link:"https://www.youtube.com/watch?v=Pv4kEMRE-kg&list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og",children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/159px-YouTube_full-color_icon_%282017%29.svg.png",alt:"Youtube",height:28,width:42,style:{marginRight:"5px"}})})]})},ge=i.img`
  margin: 20px;
  width: 600px;
  @media (max-width: ${c}px) {
    width: 80%;
  }
`,he=()=>{const{width:s}=j(),{isTicketsDisabled:o,isSponsorDisabled:d,isCfpDisabled:S}=$(new Date,n),v=n.startDay;return e.jsx(se,{children:e.jsx(b,{color:"transparent",children:e.jsxs(te,{children:[e.jsx(ge,{src:"/images/logo.png",alt:"DevBcn logo"}),e.jsxs(w,{children:[e.jsx(ie,{children:"The Barcelona Developers Conference 2023"}),e.jsxs(p,{children:["Former"," ",e.jsx("a",{href:"https://www.jbcnconf.com/2022/",target:"_blank",rel:"noreferrer",children:"JBCNConf"})," "]}),e.jsx(p,{children:"Multidisciplinary conference made for Developers and by Developers, to learn and share on the different modern software technologies used across the companies"})]}),e.jsxs(w,{color:t.LIGHT_BLUE,children:[e.jsx(p,{color:t.DARK_BLUE,children:"July 3rd-5th, 2023"}),e.jsx(p,{color:t.DARK_BLUE,children:"La Farga, Hospitalet, Barcelona"})]}),e.jsx(w,{color:t.DARK_BLUE,children:e.jsxs(p,{children:["7 tracks with the following topics: ",e.jsx("br",{}),n.tracks]})}),n.showCountdown&&e.jsx(I,{date:v,onComplete:D,renderer:R}),n.actionButtons&&e.jsx(K,{isTicketsDisabled:o,isCfpDisabled:S,isSponsorDisabled:d,ticketsStartDay:n.tickets.startDay,cfpStartDay:n.cfp.startDay,cfpLink:n.cfp.link,edition:n.edition}),n.showInfoButtons&&e.jsx(ce,{}),e.jsx("h2",{style:{color:t.LIGHT_BLUE,textShadow:"1px 1px #000"},children:"DevBcn 2023 edition resources"}),e.jsx(pe,{}),s>C&&e.jsx(oe,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(ae,{initial:{x:"100%"},animate:{x:0},transition:{duration:4},children:e.jsxs(re,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})}),e.jsx(ne,{initial:{x:"-100%"},animate:{x:0},transition:{duration:6},children:e.jsxs(me,{children:["/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /"," "]})})]})})})},m={top:[{name:"GFT",website:"https://www.gft.com/es/es/",image:"images/sponsors/GFT.jpg"}],premium:[{name:"Barcelona JUG",image:"images/sponsors/bcn-jug.png",website:"https://www.meetup.com/barcelonajug/"},{name:"Adevinta",website:"https://www.adevinta.com/",image:"images/sponsors/adevinta.png"},{name:"Red Hat",website:"https://developers.redhat.com/",image:"images/sponsors/red-hat.png"},{name:"Revolut",website:"https://www.revolut.com/working-at-revolut/",image:"images/sponsors/revolut.png"}],regular:[{name:"Adaptive",image:"images/sponsors/adaptive.png",website:"https://www.weareadaptive.com/"},{name:"Capitol",image:"images/sponsors/capitole.png",website:"https://capitole-consulting.com/es/"},{name:"Allianz",image:"images/sponsors/allianz.png",website:"https://careers.allianz.com/es_ES.html"},{name:"Sopra Steria",image:"images/sponsors/sopra.jpg",website:"https://www.soprasteria.es/"},{name:"Idealista",image:"images/sponsors/idealista.jpg",website:"https://www.idealista.com/info/trabaja-con-nosotros"},{name:"King",image:"images/sponsors/king.png",website:"https://careers.king.com/about-us/"},{name:"Azul",image:"images/sponsors/azul.png",website:"https://www.azul.com/?utm_medium=email&utm_campaign=20230703-SEV-DevBCN&utm_source=DevBCN&utm_content=&utm_term="},{name:"Gradle",image:"images/sponsors/gradle.png",website:"https://gradle.com/"},{name:"CouchBase",website:"https://developer.couchbase.com/",image:"images/sponsors/couchbase.png"},{name:"Alten",image:"images/sponsors/alten.png",website:"https://www.alten.es"},{name:"New Relic",image:"images/sponsors/someRelic.png",website:"https://newrelic.com"},{name:"Confluent",website:"https://www.confluent.io/",image:"images/sponsors/confluent.png"}],basic:[{name:"Caixabank Tech",website:"https://www.caixabanktech.com/es/pagina-de-inicio/",image:"images/sponsors/caixabank-tech.png"},{name:"Ocado Tech",website:"https://careers.ocadogroup.com/where-we-are/europe/development-centre-barcelona?utm_source=event&utm_medium=other&utm_campaign=ot_event_bcn_devbcn_website",image:"images/sponsors/ocado.png"},{name:"Honeypot",website:"https://app.honeypot.io/users/sign_up?utm_source=Live&utm_medium=sourcing&utm_campaign=event_02072023&utm_content=DevBCN",image:"images/sponsors/honeypot.jpg"},{name:"Edreams",image:"images/sponsors/edreams.png",website:"https://www.edreamsodigeo.com"},{name:"barcelona Activa",image:"images/sponsors/barcelona-activa.png",website:"https://www.barcelonactiva.cat/"},{name:"Seidor",website:"https://www.opentrends.net/en",image:"images/sponsors/seidor.png"},{name:"Veepee",image:"images/sponsors/veepee.png",website:"https://www.veepee.es/gr/home/default"},{name:"Zurich",website:"https://bcntdc.zurich.com/en",image:"images/sponsors/zurich.png"},{name:"Inditex",website:"https://www.zaratalent.com/es/tech/",image:"images/sponsors/inditex.png"},{name:"Axa",image:"images/sponsors/axa.png",website:"https://www.careers.axapartners.com/es/es"},{name:"Servicenow",image:"images/sponsors/servicenow.png",website:"https://www.servicenow.com/products/observability.html"}],communities:[{name:"Agile Spain",image:"images/sponsors/agile.png",website:"https://agile-spain.org/"},{name:"step4ward",image:"images/sponsors/step4ward.png",website:"https://bit.ly/step4wardhome"},{name:"Apache foundation",image:"images/sponsors/apache-foundation.jpeg",website:"https://www.apache.org/"},{name:"Eclipse foundation",website:"https://www.eclipse.org/",image:"images/sponsors/eclipse-foundation.png"}],media_partners:[{name:"Kube events",image:"images/sponsors/kube-events.png",website:"https://kube.events/"},{name:"Kube careers",image:"images/sponsors/kube-career.png",website:"https://kube.careers//"},{name:"entre devs y ops",image:"images/sponsors/entre-devs-y-ops.svg",website:"https://www.entredevyops.es/"},{name:"Codely",image:"images/sponsors/codely.png",website:"https://codely.com/pro/jbcnconf22"},{name:"CIO Insigths",website:"https://www.cioinsights.com/",image:"images/sponsors/cio.png"},{name:"Glorium",image:"images/sponsors/glorium.png",website:"https://gloriumtech.com/"}],supporters:[{name:"Jetbrains",image:"images/sponsors/jetbrains.png",website:"https://www.jetbrains.com"},{name:"Madrid JUG",website:"https://www.meetup.com/MadridJUG",image:"images/sponsors/madrid-jug.png"},{name:"Malaga JUG",image:"images/sponsors/malaga-jug.png",website:"https://www.meetup.com/MalagaJUG"},{name:"PythonBCN",website:"https://pybcn.org/",image:"images/sponsors/python-bcn.png"},{name:"BarcelonaJS",website:"https://barcelonajs.com/",image:"images/sponsors/barcelona-js.png"}]},we=()=>e.jsx(b,{color:t.WHITE,children:e.jsxs(U,{id:"sponsors",children:[e.jsxs(z,{className:"TitleContainer",children:[e.jsx(x,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(N,{"data-testid":"sponsors-box",title:"SPONSORS",subtitle:`Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities.`,color:t.DARK_BLUE}),e.jsx(x,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsx(r,{sponsors:m.top,title:"TOP",id:"top-sponsors",badgeColor:t.BLUE,badgePosition:"left",imageSize:"premium"}),e.jsx(r,{sponsors:m.premium,title:"PREMIUM",id:"premium-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"premium"}),e.jsx(r,{sponsors:m.regular,title:"REGULAR",id:"regular-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"regular"}),e.jsx(r,{sponsors:m.basic,title:"BASIC",id:"basic-sponsors",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"nano"}),e.jsx(r,{sponsors:m.communities,title:"COMMUNITIES",id:"communities",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"}),e.jsx(r,{sponsors:m.supporters,title:"SUPPORTERS",id:"supporters",badgeColor:t.DARK_BLUE,badgePosition:"right",imageSize:"micro",testId:"supporters"}),e.jsx(r,{sponsors:m.media_partners,title:"MEDIA PARTNERS",id:"media-partners",badgeColor:t.DARK_BLUE,badgePosition:"left",imageSize:"micro"})]})}),ue=i.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${c}px) {
    padding-bottom: 20rem;
  }
`,Ie=()=>{const{hash:s}=B();return T.useEffect(()=>{s!=null&&s!==""&&document.getElementById(s.substring(1))?.scrollIntoView()},[s]),F("Home",n.edition),e.jsxs(ue,{id:"home-wrapper",children:[e.jsx(he,{}),e.jsx(ee,{}),e.jsx(P,{speakersLink:L,sessionizeUrl:n.edition,isEnabled:n.carrousel.enabled}),e.jsx(we,{})]})};export{Ie as Home2023Wrapper,Ie as default};
//# sourceMappingURL=Home2023Wrapper-BkJS6Yw2.js.map
