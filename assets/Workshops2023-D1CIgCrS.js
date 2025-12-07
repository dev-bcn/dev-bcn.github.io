import{j as e,b as g,r as f,e as x,S as a,f as r,g as u,s as y,k as b}from"./index-DeCjj3XI.js";import{S as j,a as I,b as d,c as T,d as k}from"./Talks.style-DdwXhflQ.js";import{c as n}from"./2023-B5vIzsTA.js";import{T as S}from"./TalkCard-BBpb00BZ.js";import"./Tag-DelImVyi.js";import"./Talks.style-Bz99jhTh.js";import"./MeetingDetail-Mb9Ip1sw.js";import"./atcb-DMwzcbrm.js";import"./sessionsAdapter-B5xt3mNH.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="a6a4015c-db67-484c-b10d-0b5657e973be",o._sentryDebugIdIdentifier="sentry-dbid-a6a4015c-db67-484c-b10d-0b5657e973be")}catch{}const w=o=>e.jsx(S,{...o}),v=b.section`
{
  display: flex;
  padding: 0 10rem;
  flex-wrap: wrap;
}

  @media (max-width: ${y}px) {
    padding: 1rem;
    flex-direction: column;
  }

  & > div {
    margin: 1rem;
    min-width: 14%;
  }
`,F=()=>{const{isLoading:o,data:t,error:c}=g("2023");f.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const l=149213,p=new Set([l]),i=t?.flatMap(s=>s.sessions).filter(s=>s.categories.some(h=>h.categoryItems.some(m=>p.has(m.id))));return x(c),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(j,{children:e.jsxs(I,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(u,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(T,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(v,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),i?.map(s=>e.jsx(w,{talk:s,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},s.id))]}),e.jsx(k,{})]})]})};export{F as default};
//# sourceMappingURL=Workshops2023-D1CIgCrS.js.map
