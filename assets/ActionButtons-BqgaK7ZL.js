import{r as i,j as n,a as g,d as h}from"./index-D9191pRk.js";import{g as r,B as a}from"./Button-BDfl_3rV.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"aa62a24685ea664d27a72c002f252a0c5deedb13"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f55acaee-73f7-4388-b329-602e226b810d",e._sentryDebugIdIdentifier="sentry-dbid-f55acaee-73f7-4388-b329-602e226b810d")})()}catch{}const m=e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},d=e=>{const t=e.getDate(),o=m(t);return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(e).replace(t.toString(),`${t}${o}`)},w=e=>{const t=new URL(e,window.location.origin);return t.search=window.location.search,t.toString()},x=h.div`
  display: flex;
  text-align: center;

  @media (max-width: ${g}px) {
    flex-direction: column;
    width: 75%;
  }
`,D=({isTicketsDisabled:e,isCfpDisabled:t,isSponsorDisabled:o,ticketsStartDay:s,cfpStartDay:c,cfpLink:l,edition:f})=>{const u=i.useCallback(()=>{r("sponsorship","sponsorship")},[]),b=i.useCallback(()=>{r("ticket","tickets")},[]),p=i.useCallback(()=>{r("CFP","CFP")},[]);return n.jsxs(x,{children:[n.jsx(a,{onClick:b,text:"🎟️ Buy Tickets",subtext:s?d(new Date(s)):"Coming soon",link:w("https://tickets.devbcn.com/event/devbcn-"+f),isDisabled:e}),n.jsx(a,{onClick:p,text:"📢 Become a Speaker",subtext:c?d(new Date(c)):"Coming soon",link:l,isDisabled:t,isVisible:!0}),n.jsx(a,{onClick:u,text:"🤝 Sponsorship",target:"_self",link:"/sponsorship",isDisabled:o})]})};export{D as A};
//# sourceMappingURL=ActionButtons-BqgaK7ZL.js.map
