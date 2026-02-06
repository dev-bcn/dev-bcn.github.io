import{r as h,j as e,C as s,b as g,a as u}from"./index-BNmA_PP7.js";import{T as x}from"./TalkCard-gu43GY20.js";import{T as y}from"./TitleSection-BUS-5e-w.js";import{S as d}from"./SectionWrapper-DkHPOCPc.js";import{c as i}from"./2023-_xP4aPCs.js";import{b}from"./useFetchTalks-XcxCEHmL.js";import{u as T}from"./useSentryErrorReport-Dt77ZHih.js";import{S as j,a as I,b as c,c as S,d as k}from"./Talks.style-Dhu3rir6.js";import"./sessionsAdapter-W7W0ODEO.js";import"./MeetingDetail-CI1gpo9j.js";import"./Tag-CFcT1ZOA.js";import"./2025-BOgJ_ph2.js";import"./useDocumentTitleUpdate-1Slp7cNM.js";import"./Talks.style-BQ4W30n9.js";import"./Faqs.style-B764Rim7.js";import"./index-Bp8DR4xp.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"5713ef49fc0a97f122b241fa07e8f42743071505"};var r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="a5f0a599-b1aa-4372-9b38-389418da8779",o._sentryDebugIdIdentifier="sentry-dbid-a5f0a599-b1aa-4372-9b38-389418da8779")}catch{}})();const w=u.section`
{
  display: flex;
  padding: 0 10rem;
  flex-wrap: wrap;
}

  @media (max-width: ${g}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`,O=()=>{const{isLoading:o,data:r,error:n}=b("2023");h.useEffect(()=>{document.title=`Workshops - DevBcn - ${i.edition}`},[]);const l=149213,p=new Set([l]),a=r?.flatMap(t=>t.sessions).filter(t=>t.categories.some(m=>m.categoryItems.some(f=>p.has(f.id))));return T(n),e.jsxs(e.Fragment,{children:[e.jsx(d,{color:s.DARK_BLUE,marginTop:5,children:e.jsx(j,{children:e.jsxs(I,{children:[e.jsx(c,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(y,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:s.WHITE}),e.jsx(c,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(S,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(d,{color:s.LIGHT_BLUE,marginTop:1,children:[e.jsxs(w,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),a?.length===0&&e.jsx("p",{style:{color:s.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),a?.map(t=>e.jsx(x,{talk:t,showTrack:!0,year:i.edition,openFeedbackId:i.openFeedbackId},t.id))]}),e.jsx(k,{})]})]})};export{O as default};
//# sourceMappingURL=Workshops2023-DcPCn8IK.js.map
