import{C as l,a as i,m as E,j as t,L as f,$ as c,a0 as _,x as p,a1 as u,v as m,a2 as g,a3 as x,a4 as A,a5 as h,E as L}from"./index-CEYcj1hA.js";import{e as a,a as S,C as d}from"./sessionsAdapter-GCPr7A6g.js";import{S as b}from"./MeetingDetail-ZZAgsu7-.js";import{h as R,i as I,j as o,k as j,a as y}from"./Talks.style-CpqfYIIf.js";import"./Faqs.style-C70imQkc.js";import{T as D}from"./Tag-DV22RPh3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"47103c7f8e8d68bcd5a89e564148fba09db12e8d"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="85637f45-9723-4e08-b131-7fad04d07db4",e._sentryDebugIdIdentifier="sentry-dbid-85637f45-9723-4e08-b131-7fad04d07db4")}catch{}})();const K=i(E.div)`
  color: ${l.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const U=e=>e==="2026"?c:e==="2025"?_:e==="2024"?p:e==="2023"?u:m,O=e=>e==="2026"?g:e==="2025"?x:e==="2024"?A:e==="2023"?h:L,B=({showTrack:e=!1,talk:s,year:n,openFeedbackId:T})=>t.jsx(R,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(K,{children:[t.jsx(I,{to:`${U(n)}/${s.id}`,children:s.title}),t.jsx(o,{children:s.speakers.map(r=>t.jsx(j,{children:t.jsx(f,{to:`${O(n)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(o,{children:[`${a(s.categories,d.Format)} `,a(s.categories)," "]}),e&&t.jsxs(o,{children:[t.jsx("strong",{children:"Track: "}),a(s.categories,d.Track)]}),t.jsx(y,{children:S(s.questionAnswers)?.map(r=>t.jsx(D,{text:r,textColor:l.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(b,{href:`https://openfeedback.io/${T}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{B as T};
//# sourceMappingURL=TalkCard-BYjO4ucY.js.map
