import{j as e,r as h,d as g,S as a,e as r,f as u,p as x,h as y}from"./index-f6AcWmxj.js";import{S as j,a as I,b as d,c as T,d as S}from"./Talks.style-BNDm-Adx.js";import{u as b}from"./useFetchTalks-BazMg6_b.js";import{c as i}from"./2023-B5vIzsTA.js";import{T as k}from"./TalkCard-jNtvLlMu.js";import"./Tag-4k1Dru8c.js";import"./Talks.style-CWvPKfr_.js";import"./MeetingDetail-BE6IaM8G.js";import"./atcb-BXY0Bbjw.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="b5da931e-4617-4198-8e48-702fc54f0f6c",t._sentryDebugIdIdentifier="sentry-dbid-b5da931e-4617-4198-8e48-702fc54f0f6c")}catch{}const w=t=>e.jsx(k,{...t}),v=y.section`
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
`,F=()=>{const{isLoading:t,data:o,error:c}=b("2023");h.useEffect(()=>{document.title=`Workshops - DevBcn - ${i.edition}`},[]);const l=149213,p=new Set([l]),s=o==null?void 0:o.flatMap(n=>n.sessions).filter(n=>n.categories.some(m=>m.categoryItems.some(f=>p.has(f.id))));return g(c),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:r.DARK_BLUE,marginTop:5,children:e.jsx(j,{children:e.jsxs(I,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(u,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:r.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(T,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:r.LIGHT_BLUE,marginTop:1,children:[e.jsxs(v,{"data-test-id":"workshops",children:[t&&e.jsx("h1",{children:"Loading "}),(s==null?void 0:s.length)===0&&e.jsx("p",{style:{color:r.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}),s==null?void 0:s.map(n=>e.jsx(w,{talk:n,showTrack:!0,year:i.edition,openFeedbackId:i.openFeedbackId},n.id))]}),e.jsx(S,{})]})]})};export{F as default};
//# sourceMappingURL=Workshops2023-cya9El_W.js.map
