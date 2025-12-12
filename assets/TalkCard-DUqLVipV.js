import{f as l,k as i,y as c,j as t,L as T,aA as p,aN as g,aO as u,aP as y,aG as E,aQ as b}from"./index-CDY7Yx3m.js";import{T as m}from"./Tag-Cwu7fYpl.js";import{j as h,k as x,l as r,m as _,e as S}from"./Talks.style-A4HERBrC.js";import{S as j}from"./MeetingDetail-4U9if97S.js";import{e as o,a as A,C as d}from"./sessionsAdapter-BFZ9MCGX.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"d5ea6f272b4c2fd77f0fe569599f29d127911460"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="62ff9b52-b735-4ba4-86d6-721e88ac051b",e._sentryDebugIdIdentifier="sentry-dbid-62ff9b52-b735-4ba4-86d6-721e88ac051b")})()}catch{}const I=i(c.div)`
  color: ${l.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const L=e=>e==="2024"?p:e==="2023"?g:u,R=e=>e==="2023"?y:e==="2024"?E:b,K=({showTrack:e=!1,talk:s,year:a,openFeedbackId:f})=>t.jsx(h,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(I,{children:[t.jsx(x,{to:`${L(a)}/${s.id}`,children:s.title}),t.jsx(r,{children:s.speakers.map(n=>t.jsx(_,{children:t.jsx(T,{to:`${R(a)}/${n.id}`,children:n.name})},n.id))}),t.jsxs(r,{children:[`${o(s.categories,d.Format)} `,o(s.categories)," "]}),e&&t.jsxs(r,{children:[t.jsx("strong",{children:"Track: "}),o(s.categories,d.Track)]}),t.jsx(S,{children:A(s.questionAnswers)?.map(n=>t.jsx(m,{text:n,textColor:l.WHITE},n))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(j,{href:`https://openfeedback.io/${f}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{K as T};
//# sourceMappingURL=TalkCard-DUqLVipV.js.map
