import{r as m,b as r,d as f,j as e,S as a,e as n,f as g,q as x,i as y}from"./index-B94Oy_eG.js";import{u}from"./useFetchTalks-fr4TAQC-.js";import{T as j}from"./TalkCard-Boz3ICR1.js";import{S as w,a as k,b as d,c as S,d as T}from"./Talks.style-CTY6Rx3_.js";import"./TalkCard-53u6TMl3.js";import"./Tag-DfKRCG02.js";import"./MeetingDetail-WL0tWdg9.js";import"./atcb-CY0y26XF.js";try{let s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new s.Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="983c229d-cf1c-402d-a651-c0720c79fd2a",s._sentryDebugIdIdentifier="sentry-dbid-983c229d-cf1c-402d-a651-c0720c79fd2a")}catch{}const I=y.section`
  display: flex;
  padding: 0 10rem;
  flex-wrap: wrap;

  @media (max-width: ${x}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`,W=()=>{const{isLoading:s,data:t,error:c}=u();m.useEffect(()=>{document.title=`Workshops - DevBcn - ${r.edition}`},[]);const l=new Set([326133]),i=t?.flatMap(o=>o.sessions).filter(o=>o.categories.some(p=>p.categoryItems.some(h=>l.has(h.id))));return f(c),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:n.DARK_BLUE,marginTop:5,children:e.jsx(w,{children:e.jsxs(k,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(g,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:n.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(S,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:n.LIGHT_BLUE,marginTop:1,children:[e.jsxs(I,{"data-test-id":"workshops",children:[s&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),i?.map(o=>e.jsx(j,{talk:o,showTrack:!0,year:r.edition,openFeedbackId:r.openFeedbackId},o.id))]}),e.jsx(T,{})]})]})};export{W as default};
//# sourceMappingURL=Workshops-RA39t6Ec.js.map
