import{e as l,h as i,x as f,j as t,L as T,av as p,aK as m,aL as g,aM as x,aB as E,aN as h}from"./index-ve6JH-YN.js";import{T as u}from"./Tag-gEqX_WI2.js";import{j as _,k as y,l as n,m as j,e as S}from"./Talks.style-DkGbm43J.js";import{S as b}from"./MeetingDetail-OirfMOEY.js";import{e as o,c as I,C as d}from"./useFetchTalks-DMNgMoJU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="860c03af-94d8-484e-bd46-59e9190cefc8",e._sentryDebugIdIdentifier="sentry-dbid-860c03af-94d8-484e-bd46-59e9190cefc8")}catch{}const L=i(f.div)`
  color: ${l.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const A=e=>e==="2024"?p:e==="2023"?m:g,D=e=>e==="2023"?x:e==="2024"?E:h,U=({showTrack:e=!1,talk:s,year:a,openFeedbackId:c})=>t.jsx(_,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(L,{children:[t.jsx(y,{to:`${A(a)}/${s.id}`,children:s.title}),t.jsx(n,{children:s.speakers.map(r=>t.jsx(j,{children:t.jsx(T,{to:`${D(a)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(n,{children:[`${o(s.categories,d.Format)} `,o(s.categories)," "]}),e&&t.jsxs(n,{children:[t.jsx("strong",{children:"Track: "}),o(s.categories,d.Track)]}),t.jsx(S,{children:I(s.questionAnswers)?.map(r=>t.jsx(u,{text:r,textColor:l.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(b,{href:`https://openfeedback.io/${c}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{U as T};
//# sourceMappingURL=TalkCard-DyMIbhcq.js.map
