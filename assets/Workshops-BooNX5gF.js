import{r as m,j as e,C as r,a as h,d as g}from"./index-Gordh9OA.js";import{S as a}from"./SectionWrapper-DNujl_GR.js";import{b as u}from"./useFetchTalks-CLt8MuvU.js";import{T as y}from"./TalkCard-CBh7FIiI.js";import{c as n}from"./2025-OR1W275b.js";import{u as x}from"./useSentryErrorReport-0WSLz1pf.js";import{d as b,e as T,f as d,g as w,S as j}from"./Talks.style-B1kR3kcL.js";import{T as k}from"./TitleSection-h41b8rxO.js";import"./index-DohCSg37.js";import"./Tag-DoDp3Fzi.js";import"./Faqs.style-DaYptwzs.js";import"./MeetingDetail-CJGGfW1s.js";import"./useDocumentTitleUpdate-DtyWJHxD.js";import"./sessionsAdapter-Cbqstfbd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"1a703ee9ff60b43745932917e00cd1bf480e57ad"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="18cce81b-cedf-4552-b553-bb6f55232acd",o._sentryDebugIdIdentifier="sentry-dbid-18cce81b-cedf-4552-b553-bb6f55232acd")})()}catch{}const S=g.section`
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
`,N=()=>{const{isLoading:o,data:t,error:l}=u();m.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=new Set([326133]),i=t?.flatMap(s=>s.sessions).filter(s=>s.categories.some(p=>p.categoryItems.some(f=>c.has(f.id))));return x(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(b,{children:e.jsxs(T,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(k,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(w,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(S,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),n.hideTalks?e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}):i?.map(s=>e.jsx(y,{talk:s,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},s.id))]}),e.jsx(j,{})]})]})};export{N as default};
//# sourceMappingURL=Workshops-BooNX5gF.js.map
