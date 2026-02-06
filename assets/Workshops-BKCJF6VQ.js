import{r as h,j as e,C as t,b as f,a as g}from"./index-BNmA_PP7.js";import{T as u}from"./TalkCard-gu43GY20.js";import{T as x}from"./TitleSection-BUS-5e-w.js";import{S as d}from"./SectionWrapper-DkHPOCPc.js";import{c as i}from"./2025-BOgJ_ph2.js";import{b as y}from"./useFetchTalks-XcxCEHmL.js";import{u as T}from"./useSentryErrorReport-Dt77ZHih.js";import{d as j,e as k,f as l,g as S,S as w}from"./Talks.style-BQ4W30n9.js";import"./sessionsAdapter-W7W0ODEO.js";import"./MeetingDetail-CI1gpo9j.js";import"./Tag-CFcT1ZOA.js";import"./useDocumentTitleUpdate-1Slp7cNM.js";import"./Faqs.style-B764Rim7.js";import"./index-Bp8DR4xp.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"5713ef49fc0a97f122b241fa07e8f42743071505"};var r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="e58723a3-5e00-4797-924e-c17146d3747a",o._sentryDebugIdIdentifier="sentry-dbid-e58723a3-5e00-4797-924e-c17146d3747a")}catch{}})();const I=g.section`
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
`,N=()=>{const{isLoading:o,data:r,error:n}=y();h.useEffect(()=>{document.title=`Workshops - DevBcn - ${i.edition}`},[]);const c=new Set([326133]),a=r?.flatMap(s=>s.sessions).filter(s=>s.categories.some(p=>p.categoryItems.some(m=>c.has(m.id))));return T(n),e.jsxs(e.Fragment,{children:[e.jsx(d,{color:t.DARK_BLUE,marginTop:5,children:e.jsx(j,{children:e.jsxs(k,{children:[e.jsx(l,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(x,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:t.WHITE}),e.jsx(l,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(S,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(d,{color:t.LIGHT_BLUE,marginTop:1,children:[e.jsxs(I,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),a?.length===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),i.hideTalks?e.jsx("p",{style:{color:t.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}):a?.map(s=>e.jsx(u,{talk:s,showTrack:!0,year:i.edition,openFeedbackId:i.openFeedbackId},s.id))]}),e.jsx(w,{})]})]})};export{N as default};
//# sourceMappingURL=Workshops-BKCJF6VQ.js.map
