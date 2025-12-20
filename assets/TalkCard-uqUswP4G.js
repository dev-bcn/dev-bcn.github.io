import{C as l,d as n,m as f,j as t,L as T,x as p,$ as g,v as u,a0 as E,a1 as m,E as y}from"./index-DCVp8vhu.js";import{e as r,a as h,C as d}from"./sessionsAdapter-fFwioLT8.js";import{S as x}from"./MeetingDetail-CBMVauTa.js";import{h as _,i as b,j as o,k as S,a as j}from"./Talks.style-DrybPg99.js";import"./Faqs.style-CtuV_Wft.js";import{T as A}from"./Tag-DO4baRQ5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"23d1bddf7757e94e62d3ec6e064c817fbaf8bc95"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="5172a60a-dc16-4b68-9ce0-e56c34773f92",e._sentryDebugIdIdentifier="sentry-dbid-5172a60a-dc16-4b68-9ce0-e56c34773f92")})()}catch{}const I=n(f.div)`
  color: ${l.BLACK_BLUE};
`;n.div`
  padding-top: 0.25rem;
`;n.img`
  height: 0.75rem;
`;n.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const L=e=>e==="2024"?p:e==="2023"?g:u,R=e=>e==="2023"?E:e==="2024"?m:y,U=({showTrack:e=!1,talk:s,year:a,openFeedbackId:c})=>t.jsx(_,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(I,{children:[t.jsx(b,{to:`${L(a)}/${s.id}`,children:s.title}),t.jsx(o,{children:s.speakers.map(i=>t.jsx(S,{children:t.jsx(T,{to:`${R(a)}/${i.id}`,children:i.name})},i.id))}),t.jsxs(o,{children:[`${r(s.categories,d.Format)} `,r(s.categories)," "]}),e&&t.jsxs(o,{children:[t.jsx("strong",{children:"Track: "}),r(s.categories,d.Track)]}),t.jsx(j,{children:h(s.questionAnswers)?.map(i=>t.jsx(A,{text:i,textColor:l.WHITE},i))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(x,{href:`https://openfeedback.io/${c}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{U as T};
//# sourceMappingURL=TalkCard-uqUswP4G.js.map
