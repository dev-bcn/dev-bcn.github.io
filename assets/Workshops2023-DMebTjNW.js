import{j as e,r as f,d as g,S as a,e as r,f as u,q as x,i as y}from"./index-BZzquw5a.js";import{S as b,a as j,b as d,c as I,d as T}from"./Talks.style-hkppSnnY.js";import{u as k}from"./useFetchTalks-CyPu_QRY.js";import{c as n}from"./2023-B5vIzsTA.js";import{T as S}from"./TalkCard-H6iEpKSi.js";import"./Tag-DzSmuLfg.js";import"./Talks.style-1k55dYyj.js";import"./MeetingDetail-CG48saJY.js";import"./atcb-DOVTiYUK.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="8d98f8ea-87cf-400c-b1eb-bfbf5ed042ec",o._sentryDebugIdIdentifier="sentry-dbid-8d98f8ea-87cf-400c-b1eb-bfbf5ed042ec")}catch{}const w=o=>e.jsx(S,{...o}),v=y.section`
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
`,F=()=>{const{isLoading:o,data:t,error:c}=k("2023");f.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const l=149213,p=new Set([l]),i=t?.flatMap(s=>s.sessions).filter(s=>s.categories.some(m=>m.categoryItems.some(h=>p.has(h.id))));return g(c),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(b,{children:e.jsxs(j,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(u,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(I,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(v,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),i?.length===0&&e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),i?.map(s=>e.jsx(w,{talk:s,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},s.id))]}),e.jsx(T,{})]})]})};export{F as default};
//# sourceMappingURL=Workshops2023-DMebTjNW.js.map
