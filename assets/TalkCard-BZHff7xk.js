import{C as l,d as n,m as c,j as t,L as T,x as p,a0 as g,v as u,a1 as E,a2 as m,G as y}from"./index-CTeuVKX9.js";import{T as h}from"./Tag-Dw96WChe.js";import"./Faqs.style-DMBsN_wK.js";import{h as x,i as _,j as r,k as b,a as S}from"./Talks.style-BOk2UsQL.js";import{S as j}from"./MeetingDetail-CHb6iLas.js";import{e as o,a as A,C as d}from"./sessionsAdapter-CUP1K9-3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"1d089d517e41d782af78b0a70a6631d8b1e2fe7d"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="53089151-bafa-4203-a92e-fd1c41036455",e._sentryDebugIdIdentifier="sentry-dbid-53089151-bafa-4203-a92e-fd1c41036455")})()}catch{}const I=n(c.div)`
  color: ${l.BLACK_BLUE};
`;n.div`
  padding-top: 0.25rem;
`;n.img`
  height: 0.75rem;
`;n.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const L=e=>e==="2024"?p:e==="2023"?g:u,R=e=>e==="2023"?E:e==="2024"?m:y,U=({showTrack:e=!1,talk:s,year:a,openFeedbackId:f})=>t.jsx(x,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(I,{children:[t.jsx(_,{to:`${L(a)}/${s.id}`,children:s.title}),t.jsx(r,{children:s.speakers.map(i=>t.jsx(b,{children:t.jsx(T,{to:`${R(a)}/${i.id}`,children:i.name})},i.id))}),t.jsxs(r,{children:[`${o(s.categories,d.Format)} `,o(s.categories)," "]}),e&&t.jsxs(r,{children:[t.jsx("strong",{children:"Track: "}),o(s.categories,d.Track)]}),t.jsx(S,{children:A(s.questionAnswers)?.map(i=>t.jsx(h,{text:i,textColor:l.WHITE},i))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(j,{href:`https://openfeedback.io/${f}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{U as T};
//# sourceMappingURL=TalkCard-BZHff7xk.js.map
