import{e as l,h as i,x as f,j as t,L as T,ax as p,aM as m,aN as x,aO as g,aD as E,aP as h}from"./index-DqIesPeM.js";import{T as u}from"./Tag-oOj1tZFt.js";import{j as _,k as y,l as n,m as b,e as j}from"./Talks.style-BGA7xVyL.js";import{S}from"./MeetingDetail-DGR-Fttp.js";import{e as a,c as I,C as d}from"./useFetchTalks-CkeTingk.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="30a6a7de-92cb-4bc3-8a4f-f191e9375707",e._sentryDebugIdIdentifier="sentry-dbid-30a6a7de-92cb-4bc3-8a4f-f191e9375707")}catch{}const A=i(f.div)`
  color: ${l.BLACK_BLUE};
`;i.div`
  padding-top: 0.25rem;
`;i.img`
  height: 0.75rem;
`;i.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;const L=e=>e==="2024"?p:e==="2023"?m:x,D=e=>e==="2023"?g:e==="2024"?E:h,O=({showTrack:e=!1,talk:s,year:o,openFeedbackId:c})=>t.jsx(_,{initial:{opacity:"0"},animate:{opacity:"100%"},exit:{opacity:"0"},transition:{duration:.5},children:t.jsxs(A,{children:[t.jsx(y,{to:`${L(o)}/${s.id}`,children:s.title}),t.jsx(n,{children:s.speakers.map(r=>t.jsx(b,{children:t.jsx(T,{to:`${D(o)}/${r.id}`,children:r.name})},r.id))}),t.jsxs(n,{children:[`${a(s.categories,d.Format)} `,a(s.categories)," "]}),e&&t.jsxs(n,{children:[t.jsx("strong",{children:"Track: "}),a(s.categories,d.Track)]}),t.jsx(j,{children:I(s.questionAnswers)?.map(r=>t.jsx(u,{text:r,textColor:l.WHITE},r))}),t.jsx("section",{style:{display:"block"},children:t.jsxs(S,{href:`https://openfeedback.io/${c}/0/${s.id}`,target:"_blank",rel:"noreferrer noopener",children:["🗳️ ",t.jsx("strong",{children:"Vote this talk"})]})})]})});export{O as T};
//# sourceMappingURL=TalkCard-DtsGO6iC.js.map
