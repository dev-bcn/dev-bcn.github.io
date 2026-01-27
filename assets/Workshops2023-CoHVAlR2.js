import{r as h,j as e,C as s,b as g,a as u}from"./index-ju5_CuzO.js";import{T as x}from"./TalkCard-BW8sFWet.js";import{T as y}from"./TitleSection-CSnbYwMp.js";import{S as d}from"./SectionWrapper-B6pnq35M.js";import{c as i}from"./2023-BZMJqwbR.js";import{b}from"./useFetchTalks-BtZduDBZ.js";import{u as T}from"./useSentryErrorReport-Bb_I7Apd.js";import{S as j,a as I,b as c,c as S,d as k}from"./Talks.style-BPT5s4FU.js";import"./sessionsAdapter-B1hlEiew.js";import"./MeetingDetail-BOJX2RBx.js";import"./Tag-DaJzAC_8.js";import"./2025-CKprDyy-.js";import"./useDocumentTitleUpdate-G0tFe7fP.js";import"./Talks.style-B38j5MOu.js";import"./Faqs.style-aKbStJLD.js";import"./index-DDkcZSxo.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="a5f0a599-b1aa-4372-9b38-389418da8779",o._sentryDebugIdIdentifier="sentry-dbid-a5f0a599-b1aa-4372-9b38-389418da8779")}catch{}})();const w=u.section`
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
//# sourceMappingURL=Workshops2023-CoHVAlR2.js.map
