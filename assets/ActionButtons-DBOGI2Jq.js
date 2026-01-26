import{r as i,j as n,b as g,a as m}from"./index-B0NYpmE8.js";import{g as r,B as a}from"./Button-DGLMSl-C.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"6ae1c6cdbc3492e89e3876345e5d69524af00f6f"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cacb75f7-4e92-4051-b3e6-40b9b3c9771e",e._sentryDebugIdIdentifier="sentry-dbid-cacb75f7-4e92-4051-b3e6-40b9b3c9771e")})()}catch{}const h=e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},l=e=>{const t=e.getDate(),o=h(t);return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(e).replace(t.toString(),`${t}${o}`)},w=e=>{const t=new URL(e,window.location.origin);return t.search=window.location.search,t.toString()},x=m.div`
  margin-top: 2rem;
  display: flex;
  text-align: center;

  @media (max-width: ${g}px) {
    flex-direction: column;
    width: 75%;
  }
`,D=({isTicketsDisabled:e,isCfpDisabled:t,isSponsorDisabled:o,ticketsStartDay:s,cfpStartDay:c,cfpLink:d,edition:f})=>{const u=i.useCallback(()=>{r("sponsorship","sponsorship")},[]),b=i.useCallback(()=>{r("ticket","tickets")},[]),p=i.useCallback(()=>{r("CFP","CFP")},[]);return n.jsxs(x,{children:[n.jsx(a,{onClick:b,text:"🎟️ Buy Tickets",subtext:s?l(new Date(s)):"Coming soon",link:w("https://tickets.devbcn.com/event/devbcn-"+f),isDisabled:e}),n.jsx(a,{onClick:p,text:"📢 Become a Speaker",subtext:c?l(new Date(c)):"Coming soon",link:d,isDisabled:t,isVisible:!0}),n.jsx(a,{onClick:u,text:"🤝 Sponsorship",target:"_self",link:"/sponsorship",isDisabled:o})]})};export{D as A};
//# sourceMappingURL=ActionButtons-DBOGI2Jq.js.map
