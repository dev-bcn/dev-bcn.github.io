import{C as l,a as n,m as T,j as t,L as E,$ as c,a0 as _,x as p,a1 as u,v as g,a2 as m,a3 as h,a4 as x,a5 as b,E as A}from"./index-DI5mwMXZ.js";import{e as r,a as y,C as d}from"./sessionsAdapter-BwoYWqo1.js";import{S as L}from"./MeetingDetail-DkIK59Ug.js";import{h as S,i as R,j as o,k as I,a as j}from"./Talks.style-BLHTskmm.js";import"./Faqs.style-7hQ-CJbB.js";import{T as D}from"./Tag-DtQxSvFH.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"6ffeff66052db7195e535d11ee201afd3d1e16bc"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="85637f45-9723-4e08-b131-7fad04d07db4",e._sentryDebugIdIdentifier="sentry-dbid-85637f45-9723-4e08-b131-7fad04d07db4")})()}catch{}const K=n(T.div)`
  color: ${l.BLACK_BLUE};
`;n.div`
  padding-top: 0.25rem;
`;n.img`
  height: 0.75rem;
`;n.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const U=e=>e==="2026"?c:e==="2025"?_:e==="2024"?p:e==="2023"?u:g,w=e=>e==="2026"?m:e==="2025"?h:e==="2024"?x:e==="2023"?b:A,B=({showTrack:e=!1,talk:s,year:a,openFeedbackId:f})=>t.jsx(S,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(K,{children:[t.jsx(R,{to:`${U(a)}/${s.id}`,children:s.title}),t.jsx(o,{children:s.speakers.map(i=>t.jsx(I,{children:t.jsx(E,{to:`${w(a)}/${i.id}`,children:i.name})},i.id))}),t.jsxs(o,{children:[`${r(s.categories,d.Format)} `,r(s.categories)," "]}),e&&t.jsxs(o,{children:[t.jsx("strong",{children:"Track: "}),r(s.categories,d.Track)]}),t.jsx(j,{children:y(s.questionAnswers)?.map(i=>t.jsx(D,{text:i,textColor:l.WHITE},i))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(L,{href:`https://openfeedback.io/${f}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{B as T};
//# sourceMappingURL=TalkCard-BhRUn-JU.js.map
