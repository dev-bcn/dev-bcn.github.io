import{j as e,r as f,d as g,S as a,e as r,f as u,p as x,h as y}from"./index-C5x1oVjb.js";import{S as j,a as I,b as d,c as T,d as k}from"./Talks.style-RzM86vdU.js";import{u as S}from"./useFetchTalks-BY1MnjeW.js";import{c as n}from"./2023-B5vIzsTA.js";import{T as w}from"./TalkCard-D3Xk1XgZ.js";import"./Tag-_MsVqDmi.js";import"./Talks.style-BoG3S64J.js";import"./MeetingDetail-WtauRECA.js";import"./atcb-Culd99ny.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="b5da931e-4617-4198-8e48-702fc54f0f6c",o._sentryDebugIdIdentifier="sentry-dbid-b5da931e-4617-4198-8e48-702fc54f0f6c")}catch{}const b=o=>e.jsx(w,{...o}),v=y.section`
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
`,F=()=>{const{isLoading:o,data:t,error:c}=S("2023");f.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const l=149213,p=new Set([l]),i=t?.flatMap(s=>s.sessions).filter(s=>s.categories.some(h=>h.categoryItems.some(m=>p.has(m.id))));return g(c),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(j,{children:e.jsxs(I,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(u,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(T,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(v,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),i?.map(s=>e.jsx(b,{talk:s,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},s.id))]}),e.jsx(k,{})]})]})};export{F as default};
//# sourceMappingURL=Workshops2023-ByKhl1fX.js.map
