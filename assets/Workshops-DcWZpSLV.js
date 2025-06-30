import{r as m,b as n,d as f,j as e,S as a,e as i,f as g,p as x,h as y}from"./index-CKInIo6s.js";import{u}from"./useFetchTalks-Enq7sN74.js";import{T as j}from"./TalkCard-Cz_IoEes.js";import{S as b,a as S,b as d,c as T,d as I}from"./Talks.style-DAbsxyFl.js";import"./TalkCard-DoWxITf_.js";import"./Tag-DeAnpsHo.js";import"./MeetingDetail-CXfTxctM.js";import"./atcb-DuBj6NT-.js";try{let s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new s.Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="915ef684-8002-4e60-848f-3b4e80a50eb7",s._sentryDebugIdIdentifier="sentry-dbid-915ef684-8002-4e60-848f-3b4e80a50eb7")}catch{}const w=y.section`
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
`,W=()=>{const{isLoading:s,data:o,error:l}=u();m.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=new Set([326133]),t=o==null?void 0:o.flatMap(r=>r.sessions).filter(r=>r.categories.some(p=>p.categoryItems.some(h=>c.has(h.id))));return f(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:i.DARK_BLUE,marginTop:5,children:e.jsx(b,{children:e.jsxs(S,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(g,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:i.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(T,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:i.LIGHT_BLUE,marginTop:1,children:[e.jsxs(w,{"data-test-id":"workshops",children:[s&&e.jsx("h1",{children:"Loading "}),(t==null?void 0:t.length)===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),t==null?void 0:t.map(r=>e.jsx(j,{talk:r,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},r.id))]}),e.jsx(I,{})]})]})};export{W as default};
//# sourceMappingURL=Workshops-DcWZpSLV.js.map
