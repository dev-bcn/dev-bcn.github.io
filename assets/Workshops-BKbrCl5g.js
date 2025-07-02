import{r as m,b as n,d as f,j as e,S as a,e as i,f as g,p as x,h as y}from"./index-BzYEnzbL.js";import{u}from"./useFetchTalks-CzWToTNC.js";import{T as j}from"./TalkCard-DO5LQnFs.js";import{S,a as T,b as d,c as b,d as I}from"./Talks.style-Bmh6k8LR.js";import"./TalkCard-DL-QpUF7.js";import"./Tag-BvrE1_dr.js";import"./MeetingDetail-COsto8PK.js";import"./atcb-DH-iyaFI.js";try{let s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new s.Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="5f5a4335-0b14-4c1e-a441-279dcd00f0d8",s._sentryDebugIdIdentifier="sentry-dbid-5f5a4335-0b14-4c1e-a441-279dcd00f0d8")}catch{}const w=y.section`
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
`,W=()=>{const{isLoading:s,data:o,error:l}=u();m.useEffect(()=>{document.title=`Workshops - DevBcn - ${n.edition}`},[]);const c=new Set([326133]),t=o==null?void 0:o.flatMap(r=>r.sessions).filter(r=>r.categories.some(p=>p.categoryItems.some(h=>c.has(h.id))));return f(l),e.jsxs(e.Fragment,{children:[e.jsx(a,{color:i.DARK_BLUE,marginTop:5,children:e.jsx(S,{children:e.jsxs(T,{children:[e.jsx(d,{src:"/images/LessThanDarkBlueIcon.svg"}),e.jsx(g,{title:"Workshops",subtitle:`Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.`,color:i.WHITE}),e.jsx(d,{src:"/images/MoreThanBlueIcon.svg"})]})})}),e.jsx(b,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#4798CA"}})})}),e.jsxs(a,{color:i.LIGHT_BLUE,marginTop:1,children:[e.jsxs(w,{"data-test-id":"workshops",children:[s&&e.jsx("h1",{children:"Loading "}),(t==null?void 0:t.length)===0&&e.jsx("p",{children:"No workshops yet. Keep posted"}),t==null?void 0:t.map(r=>e.jsx(j,{talk:r,showTrack:!0,year:n.edition,openFeedbackId:n.openFeedbackId},r.id))]}),e.jsx(I,{})]})]})};export{W as default};
//# sourceMappingURL=Workshops-BKbrCl5g.js.map
