import{b as h,r as g,d as n,e as m,j as e,S as a,f as i,g as y,s as u,k as x}from"./index-CCCx7afu.js";import{T as b}from"./TalkCard-CgZKfUe1.js";import{S as w,a as T,b as d,c as j,d as S}from"./Talks.style-FG3FTQQT.js";import"./TalkCard-BO4jXF9N.js";import"./Tag-CwdGkRAI.js";import"./MeetingDetail-Btb95xdl.js";import"./atcb-C8JhWu_c.js";import"./sessionsAdapter-sf1HJtu0.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"72a4cf5720848119ec298979f4df7ce2e1a1c7f0"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="a8d77be8-374c-451e-8ae0-c786863b466c",o._sentryDebugIdIdentifier="sentry-dbid-a8d77be8-374c-451e-8ae0-c786863b466c")})()}catch{}const k=x.section`
  display: flex;
  padding: 0 10rem;
  flex-wrap: wrap;

  @media (max-width: ${u}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`,R=()=>{const{isLoading:o,data:t,error:l}=h();g.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=new Set([326133]),r=t?.flatMap(s=>s.sessions).filter(s=>s.categories.some(p=>p.categoryItems.some(f=>c.has(f.id))));return m(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:i.DARK_BLUE,marginTop:5,children:e.jsx(w,{children:e.jsxs(T,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(y,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:i.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(j,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:i.LIGHT_BLUE,marginTop:1,children:[e.jsxs(k,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),r?.length===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),r?.map(s=>e.jsx(b,{talk:s,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},s.id))]}),e.jsx(S,{})]})]})};export{R as default};
//# sourceMappingURL=Workshops-lEvdjUjw.js.map
