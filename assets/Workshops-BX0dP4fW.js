import{b as m,r as g,d as r,e as f,j as e,S as a,f as n,g as x,s as y,k as u}from"./index-CqyC4c7z.js";import{T as j}from"./TalkCard-C3j8TVbQ.js";import{S as b,a as k,b as d,c as w,d as S}from"./Talks.style-D1XX1MWv.js";import"./TalkCard-B4PIpVO4.js";import"./Tag-bTBBCuFz.js";import"./MeetingDetail-C1KWUgHR.js";import"./atcb-BY0sVoBX.js";import"./sessionsAdapter-Bu_VdC4o.js";try{let s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new s.Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="a8d77be8-374c-451e-8ae0-c786863b466c",s._sentryDebugIdIdentifier="sentry-dbid-a8d77be8-374c-451e-8ae0-c786863b466c")}catch{}const T=u.section`
  display: flex;
  padding: 0 10rem;
  flex-wrap: wrap;

  @media (max-width: ${y}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`,W=()=>{const{isLoading:s,data:t,error:l}=m();g.useEffect(()=>{document.title=`Workshops - DevBcn - ${r.edition}`},[]);const c=new Set([326133]),i=t?.flatMap(o=>o.sessions).filter(o=>o.categories.some(p=>p.categoryItems.some(h=>c.has(h.id))));return f(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:n.DARK_BLUE,marginTop:5,children:e.jsx(b,{children:e.jsxs(k,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(x,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:n.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(w,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:n.LIGHT_BLUE,marginTop:1,children:[e.jsxs(T,{"data-test-id":"workshops",children:[s&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),i?.map(o=>e.jsx(j,{talk:o,showTrack:!0,year:r.edition,openFeedbackId:r.openFeedbackId},o.id))]}),e.jsx(S,{})]})]})};export{W as default};
//# sourceMappingURL=Workshops-BX0dP4fW.js.map
