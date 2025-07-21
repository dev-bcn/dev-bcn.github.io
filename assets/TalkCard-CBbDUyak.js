import{f as l,k as i,z as T,j as t,L as f,aB as p,aO as m,aP as g,aQ as x,aH as E,aR as u}from"./index-GcJQSjkE.js";import{T as _}from"./Tag-n2dlTr3k.js";import{j as h,k as y,l as a,m as b,e as j}from"./Talks.style-C2H7wWjc.js";import{S}from"./MeetingDetail-CETT6MsT.js";import{e as n,a as I,C as d}from"./sessionsAdapter-DJnTDgmB.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e70a99a7-7798-422c-904c-0ccbd7134ab8",e._sentryDebugIdIdentifier="sentry-dbid-e70a99a7-7798-422c-904c-0ccbd7134ab8")}catch{}const A=i(T.div)`
  color: ${l.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const L=e=>e==="2024"?p:e==="2023"?m:g,R=e=>e==="2023"?x:e==="2024"?E:u,O=({showTrack:e=!1,talk:s,year:o,openFeedbackId:c})=>t.jsx(h,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(A,{children:[t.jsx(y,{to:`${L(o)}/${s.id}`,children:s.title}),t.jsx(a,{children:s.speakers.map(r=>t.jsx(b,{children:t.jsx(f,{to:`${R(o)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(a,{children:[`${n(s.categories,d.Format)} `,n(s.categories)," "]}),e&&t.jsxs(a,{children:[t.jsx("strong",{children:"Track: "}),n(s.categories,d.Track)]}),t.jsx(j,{children:I(s.questionAnswers)?.map(r=>t.jsx(_,{text:r,textColor:l.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(S,{href:`https://openfeedback.io/${c}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{O as T};
//# sourceMappingURL=TalkCard-CBbDUyak.js.map
