import{e as c,h as i,x as T,j as t,L as p,ao as m,b5 as g,b8 as x,b3 as E,aw as h,b4 as u}from"./index-CqNmxiVQ.js";import{T as _}from"./Tag-XER-t8UZ.js";import{j as y,k as b,l as n,m as j,e as S}from"./Talks.style-Okv-9z47.js";import{S as I}from"./MeetingDetail-B-DDAWTm.js";import{e as o,c as A,C as l}from"./useFetchTalks-QqcBMWDy.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="1610765e-51a7-43a8-a77c-ecf00ae819fe",e._sentryDebugIdIdentifier="sentry-dbid-1610765e-51a7-43a8-a77c-ecf00ae819fe")}catch{}const L=i(T.div)`
  color: ${c.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const D=e=>e==="2024"?m:e==="2023"?g:x,R=e=>e==="2023"?E:e==="2024"?h:u,U=({showTrack:e=!1,talk:s,year:a,openFeedbackId:f})=>{var d;return t.jsx(y,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(L,{children:[t.jsx(b,{to:`${D(a)}/${s.id}`,children:s.title}),t.jsx(n,{children:s.speakers.map(r=>t.jsx(j,{children:t.jsx(p,{to:`${R(a)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(n,{children:[`${o(s.categories,l.Format)} `,o(s.categories)," "]}),e&&t.jsxs(n,{children:[t.jsx("strong",{children:"Track: "}),o(s.categories,l.Track)]}),t.jsx(S,{children:(d=A(s.questionAnswers))==null?void 0:d.map(r=>t.jsx(_,{text:r,textColor:c.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(I,{href:`https://openfeedback.io/${f}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})})};export{U as T};
//# sourceMappingURL=TalkCard-IX0ebE9g.js.map
