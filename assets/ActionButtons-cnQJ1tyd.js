import{r as i,j as n,a as g,d as m}from"./index-CqF856T_.js";import{g as r,B as a}from"./Button-DvK0daiU.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"a4ee5a5dc9be2341a1b52540d046c121c9850c8e"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="271f668d-a32d-4d00-b6c3-7881626d6e0a",e._sentryDebugIdIdentifier="sentry-dbid-271f668d-a32d-4d00-b6c3-7881626d6e0a")})()}catch{}const h=e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},c=e=>{const t=e.getDate(),o=h(t);return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(e).replace(t.toString(),`${t}${o}`)},w=e=>{const t=new URL(e,window.location.origin);return t.search=window.location.search,t.toString()},x=m.div`
  margin-top: 2rem;
  display: flex;
  text-align: center;

  @media (max-width: ${g}px) {
    flex-direction: column;
    width: 75%;
  }
`,D=({isTicketsDisabled:e,isCfpDisabled:t,isSponsorDisabled:o,ticketsStartDay:s,cfpStartDay:d,cfpLink:l,edition:u})=>{const f=i.useCallback(()=>{r("sponsorship","sponsorship")},[]),b=i.useCallback(()=>{r("ticket","tickets")},[]),p=i.useCallback(()=>{r("CFP","CFP")},[]);return n.jsxs(x,{children:[n.jsx(a,{onClick:b,text:"🎟️ Buy Tickets",subtext:s?c(new Date(s)):"Coming soon",link:w("https://tickets.devbcn.com/event/devbcn-"+u),isDisabled:e}),n.jsx(a,{onClick:p,text:"📢 Become a Speaker",subtext:d?c(new Date(d)):"Coming soon",link:l,isDisabled:t,isVisible:!0}),n.jsx(a,{onClick:f,text:"🤝 Sponsorship",target:"_self",link:"/sponsorship",isDisabled:o})]})};export{D as A};
//# sourceMappingURL=ActionButtons-cnQJ1tyd.js.map
