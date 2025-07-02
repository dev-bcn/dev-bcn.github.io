import{e as c,h as i,x as T,j as t,L as p,av as m,aK as g,aL as x,aM as E,aB as h,aN as u}from"./index-BzYEnzbL.js";import{T as _}from"./Tag-BvrE1_dr.js";import{j as y,k as j,l as n,m as S,e as b}from"./Talks.style-Bmh6k8LR.js";import{S as I}from"./MeetingDetail-COsto8PK.js";import{e as o,c as L,C as l}from"./useFetchTalks-CzWToTNC.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="860c03af-94d8-484e-bd46-59e9190cefc8",e._sentryDebugIdIdentifier="sentry-dbid-860c03af-94d8-484e-bd46-59e9190cefc8")}catch{}const A=i(T.div)`
  color: ${c.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const D=e=>e==="2024"?m:e==="2023"?g:x,R=e=>e==="2023"?E:e==="2024"?h:u,w=({showTrack:e=!1,talk:s,year:a,openFeedbackId:f})=>{var d;return t.jsx(y,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(A,{children:[t.jsx(j,{to:`${D(a)}/${s.id}`,children:s.title}),t.jsx(n,{children:s.speakers.map(r=>t.jsx(S,{children:t.jsx(p,{to:`${R(a)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(n,{children:[`${o(s.categories,l.Format)} `,o(s.categories)," "]}),e&&t.jsxs(n,{children:[t.jsx("strong",{children:"Track: "}),o(s.categories,l.Track)]}),t.jsx(b,{children:(d=L(s.questionAnswers))==null?void 0:d.map(r=>t.jsx(_,{text:r,textColor:c.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(I,{href:`https://openfeedback.io/${f}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})})};export{w as T};
//# sourceMappingURL=TalkCard-DL-QpUF7.js.map
