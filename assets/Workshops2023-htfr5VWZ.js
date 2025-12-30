import{r as h,j as e,C as r,a as g,d as u}from"./index-BQ4IKN6v.js";import{T as y}from"./TalkCard-DeTTqZEB.js";import{T as x}from"./TitleSection-4N9GuQNR.js";import{S as a}from"./SectionWrapper--9WruVCQ.js";import{c as n}from"./2023-CC8kv2fJ.js";import{b}from"./useFetchTalks-DrTf7vUZ.js";import{u as T}from"./useSentryErrorReport-Co0v9pEO.js";import{S as w,a as j,b as d,c as I,d as S}from"./Talks.style-D9e9ze61.js";import"./sessionsAdapter-dlbib6pJ.js";import"./MeetingDetail-CWvye6-m.js";import"./Tag-CvrfgNj0.js";import"./2025-D_OBWRe6.js";import"./useDocumentTitleUpdate-ChOuNWAb.js";import"./Talks.style-CbYS2LrR.js";import"./Faqs.style-b1vGiXqT.js";import"./index-D-rqFo7u.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"3a6f27a5aab1fbf8798642768c1d5406af35cba1"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new o.Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="d7b58866-262a-4e1b-952a-55b411ec68fe",o._sentryDebugIdIdentifier="sentry-dbid-d7b58866-262a-4e1b-952a-55b411ec68fe")})()}catch{}const k=u.section`
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
`,O=()=>{const{isLoading:o,data:s,error:l}=b("2023");h.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=149213,p=new Set([c]),i=s?.flatMap(t=>t.sessions).filter(t=>t.categories.some(f=>f.categoryItems.some(m=>p.has(m.id))));return T(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(w,{children:e.jsxs(j,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(x,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(I,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(k,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),i?.map(t=>e.jsx(y,{talk:t,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},t.id))]}),e.jsx(S,{})]})]})};export{O as default};
//# sourceMappingURL=Workshops2023-htfr5VWZ.js.map
