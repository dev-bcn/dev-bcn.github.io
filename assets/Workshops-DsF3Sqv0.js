import{r as m,j as e,C as r,a as h,d as g}from"./index-CM364e01.js";import{T as u}from"./TalkCard-DeNGes-f.js";import{T as y}from"./TitleSection-CbICqHUc.js";import{S as a}from"./SectionWrapper-B4L_Gm0V.js";import{c as n}from"./2025-DskAUZf4.js";import{b as x}from"./useFetchTalks-CUsuQZGJ.js";import{u as b}from"./useSentryErrorReport-WP-UEgfi.js";import{d as T,e as w,f as d,g as j,S as k}from"./Talks.style-iBVNxzkc.js";import"./sessionsAdapter-BWhDhi9H.js";import"./MeetingDetail-DhMZ8mEL.js";import"./Tag-N_2IBKDk.js";import"./useDocumentTitleUpdate-Be_qpciY.js";import"./Faqs.style-CedwdTL_.js";import"./index-DA_GnVlV.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"caf678362aa46b94bc629edcb509501cee0cb4c4"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="2424ac13-034f-407f-9b6f-05f490ac4aad",o._sentryDebugIdIdentifier="sentry-dbid-2424ac13-034f-407f-9b6f-05f490ac4aad")})()}catch{}const S=g.section`
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
`,N=()=>{const{isLoading:o,data:t,error:l}=x();m.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=new Set([326133]),i=t?.flatMap(s=>s.sessions).filter(s=>s.categories.some(p=>p.categoryItems.some(f=>c.has(f.id))));return b(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(T,{children:e.jsxs(w,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(y,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(j,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(S,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),n.hideTalks?e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}):i?.map(s=>e.jsx(u,{talk:s,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},s.id))]}),e.jsx(k,{})]})]})};export{N as default};
//# sourceMappingURL=Workshops-DsF3Sqv0.js.map
