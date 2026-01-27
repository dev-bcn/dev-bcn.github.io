import{C as l,a as n,m as T,j as t,L as c,$ as E,a0 as _,x as p,a1 as u,v as g,a2 as m,a3 as h,a4 as b,a5 as x,E as A}from"./index-CjMsYZWS.js";import{e as r,a as y,C as d}from"./sessionsAdapter-BnaoH5KH.js";import{S as L}from"./MeetingDetail-DzeOJfrv.js";import{h as S,i as R,j as o,k as I,a as j}from"./Talks.style-D8S4kIB1.js";import"./Faqs.style-ZD9PbSwQ.js";import{T as D}from"./Tag-BuPJIZFz.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"02925aae9111d16428edb7bac44834c0624efb04"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="85637f45-9723-4e08-b131-7fad04d07db4",e._sentryDebugIdIdentifier="sentry-dbid-85637f45-9723-4e08-b131-7fad04d07db4")})()}catch{}const K=n(T.div)`
  color: ${l.BLACK_BLUE};
`;n.div`
  padding-top: 0.25rem;
`;n.img`
  height: 0.75rem;
`;n.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const U=e=>e==="2026"?E:e==="2025"?_:e==="2024"?p:e==="2023"?u:g,w=e=>e==="2026"?m:e==="2025"?h:e==="2024"?b:e==="2023"?x:A,B=({showTrack:e=!1,talk:s,year:a,openFeedbackId:f})=>t.jsx(S,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(K,{children:[t.jsx(R,{to:`${U(a)}/${s.id}`,children:s.title}),t.jsx(o,{children:s.speakers.map(i=>t.jsx(I,{children:t.jsx(c,{to:`${w(a)}/${i.id}`,children:i.name})},i.id))}),t.jsxs(o,{children:[`${r(s.categories,d.Format)} `,r(s.categories)," "]}),e&&t.jsxs(o,{children:[t.jsx("strong",{children:"Track: "}),r(s.categories,d.Track)]}),t.jsx(j,{children:y(s.questionAnswers)?.map(i=>t.jsx(D,{text:i,textColor:l.WHITE},i))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(L,{href:`https://openfeedback.io/${f}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{B as T};
//# sourceMappingURL=TalkCard-B7atg6Fs.js.map
