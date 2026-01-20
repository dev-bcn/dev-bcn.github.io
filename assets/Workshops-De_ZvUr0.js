import{r as f,j as e,C as r,b as h,a as g}from"./index-BRpP4EuX.js";import{T as u}from"./TalkCard-DDpn9ltL.js";import{T as y}from"./TitleSection-CY5vELEX.js";import{S as a}from"./SectionWrapper-QV1xeLq3.js";import{c as n}from"./2025-e72Ztvq3.js";import{b as x}from"./useFetchTalks-B6Yy1czv.js";import{u as T}from"./useSentryErrorReport-CTlJTUau.js";import{d as w,e as j,f as d,g as k,S}from"./Talks.style-DxYOG6u5.js";import"./sessionsAdapter-BhbSu6wa.js";import"./MeetingDetail-DSsK419g.js";import"./Tag-CujhV-Js.js";import"./useDocumentTitleUpdate-wTPjxmO8.js";import"./Faqs.style-KWGwViXc.js";import"./index-DJwCK6ps.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"5da4130682215085c0d83e45d35e02091ee4f06c"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="e58723a3-5e00-4797-924e-c17146d3747a",o._sentryDebugIdIdentifier="sentry-dbid-e58723a3-5e00-4797-924e-c17146d3747a")})()}catch{}const b=g.section`
  display: flex;
  padding: 0 10rem;
  flex-wrap: wrap;

  @media (max-width: ${h}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`,N=()=>{const{isLoading:o,data:t,error:l}=x();f.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=new Set([326133]),i=t?.flatMap(s=>s.sessions).filter(s=>s.categories.some(p=>p.categoryItems.some(m=>c.has(m.id))));return T(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(w,{children:e.jsxs(j,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(y,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(k,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(b,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),n.hideTalks?e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}):i?.map(s=>e.jsx(u,{talk:s,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},s.id))]}),e.jsx(S,{})]})]})};export{N as default};
//# sourceMappingURL=Workshops-De_ZvUr0.js.map
