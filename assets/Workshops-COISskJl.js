import{r as m,b as r,d as g,j as e,S as a,e as i,f,p as x,h as u}from"./index-CqNmxiVQ.js";import{u as y}from"./useFetchTalks-QqcBMWDy.js";import{T as b}from"./TalkCard-7BG_0utd.js";import{S as j,a as T,b as d,c as S,d as I}from"./Talks.style-Okv-9z47.js";import"./TalkCard-IX0ebE9g.js";import"./Tag-XER-t8UZ.js";import"./MeetingDetail-B-DDAWTm.js";import"./atcb-Df5dVNvv.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new o.Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="d92db049-514a-48e6-b983-611d45fb30c9",o._sentryDebugIdIdentifier="sentry-dbid-d92db049-514a-48e6-b983-611d45fb30c9")}catch{}const k=u.section`
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
`,_=()=>{const{isLoading:o,data:s,error:l}=y();m.useEffect(()=>{document.title=`Workshops - DevBcn - ${r.edition}`},[]);const c=new Set([326133]),t=s==null?void 0:s.flatMap(n=>n.sessions).filter(n=>n.categories.some(p=>p.categoryItems.some(h=>c.has(h.id))));return g(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:i.DARK_BLUE,marginTop:5,children:e.jsx(j,{children:e.jsxs(T,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(f,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:i.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(S,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:i.LIGHT_BLUE,marginTop:1,children:[e.jsxs(k,{"data-test-id":"workshops",children:[o&&e.jsx("h1",{children:"Loading "}),(t==null?void 0:t.length)===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),r.hideTalks?e.jsx("p",{style:{color:i.WHITE,textAlign:"center"},children:"No Workshops selected yet. Keep in touch in our social media for upcoming announcements"}):t==null?void 0:t.map(n=>e.jsx(b,{talk:n,showTrack:!0,year:r.edition,openFeedbackId:r.openFeedbackId},n.id))]}),e.jsx(I,{})]})]})};export{_ as default};
//# sourceMappingURL=Workshops-COISskJl.js.map
