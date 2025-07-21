import{e as l,i,y as f,j as t,L as T,ay as p,aN as m,aO as g,aP as E,aE as x,aQ as y}from"./index-BZzquw5a.js";import{T as u}from"./Tag-DzSmuLfg.js";import{j as _,k as h,l as n,m as j,e as S}from"./Talks.style-1k55dYyj.js";import{S as I}from"./MeetingDetail-CG48saJY.js";import{e as o,c as A,C as d}from"./useFetchTalks-CyPu_QRY.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e00f5ef3-8cee-4338-9a2c-3e41c01261c1",e._sentryDebugIdIdentifier="sentry-dbid-e00f5ef3-8cee-4338-9a2c-3e41c01261c1")}catch{}const L=i(f.div)`
  color: ${l.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const b=e=>e==="2024"?p:e==="2023"?m:g,D=e=>e==="2023"?E:e==="2024"?x:y,O=({showTrack:e=!1,talk:s,year:a,openFeedbackId:c})=>t.jsx(_,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(L,{children:[t.jsx(h,{to:`${b(a)}/${s.id}`,children:s.title}),t.jsx(n,{children:s.speakers.map(r=>t.jsx(j,{children:t.jsx(T,{to:`${D(a)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(n,{children:[`${o(s.categories,d.Format)} `,o(s.categories)," "]}),e&&t.jsxs(n,{children:[t.jsx("strong",{children:"Track: "}),o(s.categories,d.Track)]}),t.jsx(S,{children:A(s.questionAnswers)?.map(r=>t.jsx(u,{text:r,textColor:l.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(I,{href:`https://openfeedback.io/${c}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{O as T};
//# sourceMappingURL=TalkCard-H6iEpKSi.js.map
