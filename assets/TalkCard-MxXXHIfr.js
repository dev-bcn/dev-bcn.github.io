import{f as l,k as i,y as f,j as t,L as T,aA as p,aN as m,aO as g,aP as x,aG as E,aQ as u}from"./index-CONcevrw.js";import{T as y}from"./Tag-CENQ6EkD.js";import{j as _,k as b,l as n,m as h,e as j}from"./Talks.style-BHTmtKRx.js";import{S}from"./MeetingDetail-DRmnjTP_.js";import{e as a,a as A,C as d}from"./sessionsAdapter-CWS4HDY4.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="62ff9b52-b735-4ba4-86d6-721e88ac051b",e._sentryDebugIdIdentifier="sentry-dbid-62ff9b52-b735-4ba4-86d6-721e88ac051b")}catch{}const I=i(f.div)`
  color: ${l.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const L=e=>e==="2024"?p:e==="2023"?m:g,D=e=>e==="2023"?x:e==="2024"?E:u,O=({showTrack:e=!1,talk:s,year:o,openFeedbackId:c})=>t.jsx(_,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(I,{children:[t.jsx(b,{to:`${L(o)}/${s.id}`,children:s.title}),t.jsx(n,{children:s.speakers.map(r=>t.jsx(h,{children:t.jsx(T,{to:`${D(o)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(n,{children:[`${a(s.categories,d.Format)} `,a(s.categories)," "]}),e&&t.jsxs(n,{children:[t.jsx("strong",{children:"Track: "}),a(s.categories,d.Track)]}),t.jsx(j,{children:A(s.questionAnswers)?.map(r=>t.jsx(y,{text:r,textColor:l.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(S,{href:`https://openfeedback.io/${c}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{O as T};
//# sourceMappingURL=TalkCard-MxXXHIfr.js.map
