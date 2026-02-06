import{r as h,j as e,C as t,b as f,a as g}from"./index-DSbHasJX.js";import{T as u}from"./TalkCard-B4pJkIs5.js";import{T as x}from"./TitleSection-BX01t65u.js";import{S as d}from"./SectionWrapper-DQkTWURm.js";import{c as i}from"./2025-DHXJJjd7.js";import{b as y}from"./useFetchTalks-BXieW2Uy.js";import{u as T}from"./useSentryErrorReport-BFaEe3ez.js";import{d as j,e as k,f as c,g as S,S as b}from"./Talks.style-BwxeD29u.js";import"./sessionsAdapter-aHt4QEOI.js";import"./MeetingDetail-BZr7gnlZ.js";import"./Tag-Dnkg_iqy.js";import"./useDocumentTitleUpdate-Bak0KPSd.js";import"./Faqs.style-FzNawnDg.js";import"./index-BCLKTIMb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"1b41e5bc5f42239c1f27d209ba2845b2147e7736"};var r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="e58723a3-5e00-4797-924e-c17146d3747a",o._sentryDebugIdIdentifier="sentry-dbid-e58723a3-5e00-4797-924e-c17146d3747a")}catch{}})();const w=g.section`
  display: flex;
  padding: 0 10rem;
  flex-wrap: wrap;

  @media (max-width: ${f}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`,N=()=>{const{isLoading:o,data:r,error:n}=y();h.useEffect(()=>{document.title=`Workshops - DevBcn - ${i.edition}`},[]);const l=new Set([326133]),a=r?.flatMap(s=>s.sessions).filter(s=>s.categories.some(p=>p.categoryItems.some(m=>l.has(m.id))));return T(n),e.jsxs(e.Fragment,{children:[e.jsx(d,{color:t.DARK_BLUE,marginTop:5,children:e.jsx(j,{children:e.jsxs(k,{children:[e.jsx(c,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(x,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:t.WHITE}),e.jsx(c,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(S,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(d,{color:t.LIGHT_BLUE,marginTop:1,children:[e.jsxs(w,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),a?.length===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),i.hideTalks?e.jsx("p",{style:{color:t.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}):a?.map(s=>e.jsx(u,{talk:s,showTrack:!0,year:i.edition,openFeedbackId:i.openFeedbackId},s.id))]}),e.jsx(b,{})]})]})};export{N as default};
//# sourceMappingURL=Workshops-xfUZBXZc.js.map
