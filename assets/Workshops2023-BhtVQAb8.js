import{j as e,r as h,d as g,S as a,e as n,f as u,p as x,h as y}from"./index-CqNmxiVQ.js";import{S as j,a as I,b as d,c as T,d as S}from"./Talks.style-DlUikHdG.js";import{u as b}from"./useFetchTalks-QqcBMWDy.js";import{d as i}from"./2023-B74YaiT2.js";import{T as k}from"./TalkCard-IX0ebE9g.js";import"./Tag-XER-t8UZ.js";import"./Talks.style-Okv-9z47.js";import"./MeetingDetail-B-DDAWTm.js";import"./atcb-Df5dVNvv.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="96f52c8f-3a17-4e9a-8f9a-b1a306df4d23",t._sentryDebugIdIdentifier="sentry-dbid-96f52c8f-3a17-4e9a-8f9a-b1a306df4d23")}catch{}const w=t=>e.jsx(k,{...t}),v=y.section`
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
`,F=()=>{const{isLoading:t,data:o,error:l}=b("2023");h.useEffect(()=>{document.title=`Workshops - DevBcn - ${i.edition}`},[]);const c=149213,p=new Set([c]),s=o==null?void 0:o.flatMap(r=>r.sessions).filter(r=>r.categories.some(m=>m.categoryItems.some(f=>p.has(f.id))));return g(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:n.DARK_BLUE,marginTop:5,children:e.jsx(j,{children:e.jsxs(I,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(u,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:n.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(T,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:n.LIGHT_BLUE,marginTop:1,children:[e.jsxs(v,{"data-test-id":"workshops",children:[t&&e.jsx("h1",{children:"Loading "}),(s==null?void 0:s.length)===0&&e.jsx("p",{style:{color:n.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),s==null?void 0:s.map(r=>e.jsx(w,{talk:r,showTrack:!0,year:i.edition,openFeedbackId:i.openFeedbackId},r.id))]}),e.jsx(S,{})]})]})};export{F as default};
//# sourceMappingURL=Workshops2023-BhtVQAb8.js.map
