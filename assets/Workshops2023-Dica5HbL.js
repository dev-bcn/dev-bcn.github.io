import{j as e,b as m,r as g,e as u,S as a,f as n,g as y,s as x,k as b}from"./index-CDY7Yx3m.js";import{S as T,a as j,b as d,c as w,d as I}from"./Talks.style-Dyj2tNmR.js";import{c as r}from"./2023-IDdDToYR.js";import{T as S}from"./TalkCard-DUqLVipV.js";import"./Tag-Cwu7fYpl.js";import"./Talks.style-A4HERBrC.js";import"./MeetingDetail-4U9if97S.js";import"./atcb-CxuKr6mq.js";import"./sessionsAdapter-BFZ9MCGX.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"d5ea6f272b4c2fd77f0fe569599f29d127911460"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="a6a4015c-db67-484c-b10d-0b5657e973be",o._sentryDebugIdIdentifier="sentry-dbid-a6a4015c-db67-484c-b10d-0b5657e973be")})()}catch{}const k=o=>e.jsx(S,{...o}),E=b.section`
{
  display: flex;
  padding: 0 10rem;
  flex-wrap: wrap;
}

  @media (max-width: ${x}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`,F=()=>{const{isLoading:o,data:t,error:l}=m("2023");g.useEffect(()=>{document.title=`Workshops - DevBcn - ${r.edition}`},[]);const c=149213,p=new Set([c]),i=t?.flatMap(s=>s.sessions).filter(s=>s.categories.some(f=>f.categoryItems.some(h=>p.has(h.id))));return u(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:n.DARK_BLUE,marginTop:5,children:e.jsx(T,{children:e.jsxs(j,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(y,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:n.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(w,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:n.LIGHT_BLUE,marginTop:1,children:[e.jsxs(E,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{style:{color:n.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),i?.map(s=>e.jsx(k,{talk:s,showTrack:!0,year:r.edition,openFeedbackId:r.openFeedbackId},s.id))]}),e.jsx(I,{})]})]})};export{F as default};
//# sourceMappingURL=Workshops2023-Dica5HbL.js.map
