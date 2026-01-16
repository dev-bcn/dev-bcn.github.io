import{c as i,j as e,C as n,M as o,r as l,S as d,a as r,d as s,s as c}from"./index-BV2x__3N.js";import{T as g}from"./TitleSection-DMdpZOTq.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};a.SENTRY_RELEASE={id:"25a2fe71a71ae92836534bcaef747cfb7c05b378"}}catch{}})();try{(function(){var a=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new a.Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="4f5e95fb-a5bd-4f09-8001-f9fbfe85508b",a._sentryDebugIdIdentifier="sentry-dbid-4f5e95fb-a5bd-4f09-8001-f9fbfe85508b")})()}catch{}const p=s.div`
  padding: 0.5rem 2rem 0.5rem;
  text-align: left;
  max-width: ${c}px;
  margin: 0 auto;

  @media (max-width: ${r}px) {
    padding: 100px 1rem 50px;
  }

  .image {
    img.venue {
      width: 95%;
      margin: 0 2.5%;
      text-align: center;
    }

    a,
    p {
      padding-left: 10px;
    }

    a {
      text-decoration: none;
      color: ${n.DARK_BLUE};
      font-weight: bold;
    }
  }

  section.venue {
    display: flex;
    @media (max-width: ${r}px) {
      flex-direction: column;
    }
  }

  h4 {
    margin: 15px 0 3px 10px;
  }

  .image,
  .map {
    width: 50%;
    @media (max-width: ${r}px) {
      width: 100%;
    }
  }
`,h=s.span`
  background-color: #00f200;
  font-weight: bold;
  padding: 1px 2px;
  font-family: sans-serif;
  font-size: 12px;
`,f=s.img`
  position: absolute;
  left: -1rem;
  top: 5rem;
  height: 5rem;

  @media (min-width: ${r}px) {
    height: 10rem;
  }
`,m=s.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;

  @media (min-width: ${r}px) {
    height: 10rem;
  }
`,u=()=>{const{width:a}=i();return e.jsxs(p,{children:[e.jsx(g,{title:"Venue",subtitle:"La Farga",color:n.DARK_BLUE}),a>o&&e.jsxs(e.Fragment,{children:[e.jsx(f,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(m,{src:"/images/LessThanBlueWhiteIcon.svg"})]}),e.jsxs("section",{className:"venue",children:[e.jsxs("div",{className:"image",children:[e.jsx(l.Suspense,{fallback:e.jsx(d,{src:"/images/logo.svg"}),children:e.jsx("img",{src:"/images/la-farga.webp",style:{aspectRatio:"285/173"},alt:"La Farga",className:"venue"})}),e.jsx("a",{href:"https://www.lafarga.com/corporatiu/lafarga-hospitalet//",rel:"noreferrer",target:"_blank",title:"La Farga",children:"La Farga Centre d'Activitats"}),e.jsx("p",{children:"carrer Barcelona, 2. 08901 L'Hospitalet de Llobregat Telf. 932615200"}),e.jsx("h4",{children:"Venue entrance"}),e.jsx("p",{children:e.jsxs("a",{rel:"noreferrer",href:"https://maps.app.goo.gl/2zao7ynr4wE7UYDn8",target:"_blank",children:[e.jsx("strong",{children:"A) Talks:"})," Carrer Barcelona, 12"]})}),e.jsx("p",{children:e.jsxs("a",{rel:"noreferrer",href:"https://maps.app.goo.gl/YwU14LoRvWmtXk138",target:"_blank",children:[e.jsx("strong",{children:"B) Workshops:"})," Carrer Girona, 15"]})}),e.jsx("h4",{children:"Access by public transportation"}),e.jsxs("p",{children:["🚝 ",e.jsx(h,{children:"R3"})," Cercanías: Estación Hospitalet de Llobregat"]}),e.jsx("p",{children:"🚇 Metro: Parada Rambla Just Oliveras Autobús: Líneas L12 – LH2"}),e.jsxs("p",{children:["🚝 ",e.jsx("img",{src:"/images/fgc.png",alt:"FGC",width:"20"})," FGC: Estación Sant Josep"]}),e.jsxs("p",{children:["🚙 Access by ",e.jsx("strong",{children:"car:"})," via C-31 (20 minutes from the Airport)"]}),e.jsx("h4",{children:"Paid parking options"}),e.jsx("p",{children:e.jsx("a",{href:"https://centrolafarga.com/",rel:"noreferrer",target:"_blank",children:"La Farga Centre Comercial"})})]}),e.jsx("div",{className:"map",children:e.jsx("img",{src:"/images/venue-entrance.png",alt:"Venue entrance",style:{maxWidth:"100%"}})})]})]})};export{f as S,u as V};
//# sourceMappingURL=Venue-DS3spkic.js.map
