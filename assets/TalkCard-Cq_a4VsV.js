import{e as c,h as i,x as f,j as t,L as p,aE as m,aT as g,aU as x,aV as E,aK as h,aW as u}from"./index-ZLg6NL1F.js";import{T as _}from"./Tag-BHOg8Oh3.js";import{j as y,k as b,l as n,m as j,e as S}from"./Talks.style-W8cqQxL-.js";import{S as I}from"./MeetingDetail-C-0_q0bt.js";import{e as a,c as A,C as l}from"./useFetchTalks-CgEJAzvj.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="5d542016-a43a-4807-b553-42dd4897beda",e._sentryDebugIdIdentifier="sentry-dbid-5d542016-a43a-4807-b553-42dd4897beda")}catch{}const L=i(f.div)`
  color: ${c.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const D=e=>e==="2024"?m:e==="2023"?g:x,R=e=>e==="2023"?E:e==="2024"?h:u,w=({showTrack:e=!1,talk:s,year:o,openFeedbackId:T})=>{var d;return t.jsx(y,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(L,{children:[t.jsx(b,{to:`${D(o)}/${s.id}`,children:s.title}),t.jsx(n,{children:s.speakers.map(r=>t.jsx(j,{children:t.jsx(p,{to:`${R(o)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(n,{children:[`${a(s.categories,l.Format)} `,a(s.categories)," "]}),e&&t.jsxs(n,{children:[t.jsx("strong",{children:"Track: "}),a(s.categories,l.Track)]}),t.jsx(S,{children:(d=A(s.questionAnswers))==null?void 0:d.map(r=>t.jsx(_,{text:r,textColor:c.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(I,{href:`https://openfeedback.io/${T}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})})};export{w as T};
//# sourceMappingURL=TalkCard-Cq_a4VsV.js.map
