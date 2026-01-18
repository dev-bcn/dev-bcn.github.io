import{r as h,j as e,C as r,a as g,d as u}from"./index-DCsMGCQG.js";import{T as y}from"./TalkCard-67OUcWVR.js";import{T as x}from"./TitleSection-DoYhzc-t.js";import{S as a}from"./SectionWrapper-CzTibj5r.js";import{c as n}from"./2023-BOUIUI3x.js";import{b}from"./useFetchTalks-ClNrymqU.js";import{u as T}from"./useSentryErrorReport-DIsc3QQ2.js";import{S as w,a as j,b as d,c as I,d as S}from"./Talks.style-B-6F1oIE.js";import"./sessionsAdapter-Bkws4IZu.js";import"./MeetingDetail-Unt-nbCx.js";import"./Tag-ChbeFUgi.js";import"./2025-DoWenw4t.js";import"./useDocumentTitleUpdate-vtkV053F.js";import"./Talks.style-G5MmmCsI.js";import"./Faqs.style-t_v1zuI4.js";import"./index-DVcpKJvW.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"8591644037b8a118e5d2083269fb6f9fecc8b34a"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new o.Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="d7b58866-262a-4e1b-952a-55b411ec68fe",o._sentryDebugIdIdentifier="sentry-dbid-d7b58866-262a-4e1b-952a-55b411ec68fe")})()}catch{}const k=u.section`
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
`,O=()=>{const{isLoading:o,data:s,error:l}=b("2023");h.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=149213,p=new Set([c]),i=s?.flatMap(t=>t.sessions).filter(t=>t.categories.some(m=>m.categoryItems.some(f=>p.has(f.id))));return T(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(w,{children:e.jsxs(j,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(x,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(I,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(k,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),i?.map(t=>e.jsx(y,{talk:t,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},t.id))]}),e.jsx(S,{})]})]})};export{O as default};
//# sourceMappingURL=Workshops2023-Dm2hC5nD.js.map
