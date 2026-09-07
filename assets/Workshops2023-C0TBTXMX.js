import{r as h,j as e,C as s,b as g,a as u}from"./index-Bf7dU0ol.js";import{T as x}from"./TalkCard-86e-ubaN.js";import{T as y}from"./TitleSection-DStZh3q4.js";import{S as d}from"./SectionWrapper-DvCZzwLC.js";import{c as i}from"./2023-C7Oo_Qbv.js";import{b}from"./useFetchTalks-BcG7yX7j.js";import{u as T}from"./useSentryErrorReport-DYSOKXaA.js";import{S as j,a as I,b as c,c as S,d as k}from"./Talks.style-UDO_Epqw.js";import"./sessionsAdapter-DpOTYlds.js";import"./MeetingDetail-aFQ0nCQ9.js";import"./Tag-B3fCX32T.js";import"./2025-ieLiTPb-.js";import"./useDocumentTitleUpdate-CD-FCRIY.js";import"./Talks.style-eysULEbD.js";import"./Faqs.style-2nmVtgvf.js";import"./index-rCXlMHio.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"cc88881176b8ee5ca638fff598da07f6a9205048"};var r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="a5f0a599-b1aa-4372-9b38-389418da8779",o._sentryDebugIdIdentifier="sentry-dbid-a5f0a599-b1aa-4372-9b38-389418da8779")}catch{}})();const w=u.section`
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
//# sourceMappingURL=Workshops2023-C0TBTXMX.js.map
