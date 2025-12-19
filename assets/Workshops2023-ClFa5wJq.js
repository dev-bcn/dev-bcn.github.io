import{r as h,j as e,C as r,a as g,d as u}from"./index-COVMSwxv.js";import{S as a}from"./SectionWrapper-3pVWCiBh.js";import{S as y,a as x,b as d,c as b,d as T}from"./Talks.style-BDMRnezT.js";import{T as w}from"./TitleSection-CPAdweQr.js";import{b as j}from"./useFetchTalks-OGIfXTBs.js";import{c as n}from"./2023-xyIwLajY.js";import{T as I}from"./TalkCard-D5_RS1Zm.js";import{u as S}from"./useSentryErrorReport-Bn2_wR_1.js";import"./index-BKHfkZ8p.js";import"./Tag-B2Gggv7j.js";import"./Faqs.style-CWDVgtk3.js";import"./Talks.style-nnJn7jMG.js";import"./MeetingDetail-D_PP2f9T.js";import"./2025-fyEkxfM_.js";import"./useDocumentTitleUpdate-B_Ma1HTu.js";import"./sessionsAdapter-B_x2mJYz.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"518587a53276fa1b3a6b79fe1e24abf33bd94444"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new o.Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="876bc13f-5c76-4197-a053-418fd5849ab4",o._sentryDebugIdIdentifier="sentry-dbid-876bc13f-5c76-4197-a053-418fd5849ab4")})()}catch{}const k=u.section`
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
`,O=()=>{const{isLoading:o,data:s,error:l}=j("2023");h.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=149213,p=new Set([c]),i=s?.flatMap(t=>t.sessions).filter(t=>t.categories.some(f=>f.categoryItems.some(m=>p.has(m.id))));return S(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(y,{children:e.jsxs(x,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(w,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(b,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(k,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),i?.map(t=>e.jsx(I,{talk:t,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},t.id))]}),e.jsx(T,{})]})]})};export{O as default};
//# sourceMappingURL=Workshops2023-ClFa5wJq.js.map
