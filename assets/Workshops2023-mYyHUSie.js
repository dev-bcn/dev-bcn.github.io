import{r as h,j as e,C as s,b as g,a as u}from"./index-DxZQvJw7.js";import{T as x}from"./TalkCard-DR1wVIYW.js";import{T as y}from"./TitleSection-HXkImr65.js";import{S as d}from"./SectionWrapper-Bk7haGVg.js";import{c as i}from"./2023-CQMPa7MP.js";import{b}from"./useFetchTalks-XDOFDqTK.js";import{u as T}from"./useSentryErrorReport-CcbEP86-.js";import{S as j,a as I,b as c,c as S,d as k}from"./Talks.style-Cc0oluVU.js";import"./sessionsAdapter-Dk8l4-EX.js";import"./MeetingDetail-DxhLxwJp.js";import"./Tag-CJEg7KVn.js";import"./2025-CiocRDoC.js";import"./useDocumentTitleUpdate-Cw4jPnc_.js";import"./Talks.style-qY0XAWki.js";import"./Faqs.style-1u8mQHKg.js";import"./index-B31muZdw.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"04b4d4293ccff9bffe89eef70b331b85846896f6"};var r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="a5f0a599-b1aa-4372-9b38-389418da8779",o._sentryDebugIdIdentifier="sentry-dbid-a5f0a599-b1aa-4372-9b38-389418da8779")}catch{}})();const w=u.section`
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
//# sourceMappingURL=Workshops2023-mYyHUSie.js.map
