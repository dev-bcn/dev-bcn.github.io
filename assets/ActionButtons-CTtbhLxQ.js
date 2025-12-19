import{r as i,j as n,a as g,d as h}from"./index-Gordh9OA.js";import{g as r,B as a}from"./Analytics-mnCafWKy.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"1a703ee9ff60b43745932917e00cd1bf480e57ad"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="347cc38e-45d9-4eb6-8812-7a2cf8034147",e._sentryDebugIdIdentifier="sentry-dbid-347cc38e-45d9-4eb6-8812-7a2cf8034147")})()}catch{}const m=e=>{const t=new URL(e,window.location.origin);return t.search=window.location.search,t.toString()},w=e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},d=e=>{const t=e.getDate(),o=w(t);return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(e).replace(t.toString(),`${t}${o}`)},x=h.div`
  display: flex;
  text-align: center;

  @media (max-width: ${g}px) {
    flex-direction: column;
    width: 75%;
  }
`,D=({isTicketsDisabled:e,isCfpDisabled:t,isSponsorDisabled:o,ticketsStartDay:s,cfpStartDay:c,cfpLink:l,edition:f})=>{const u=i.useCallback(()=>{r("sponsorship","sponsorship")},[]),b=i.useCallback(()=>{r("ticket","tickets")},[]),p=i.useCallback(()=>{r("CFP","CFP")},[]);return n.jsxs(x,{children:[n.jsx(a,{onClick:b,text:"🎟️ Buy Tickets",subtext:s?d(new Date(s)):"Coming soon",link:m("https://tickets.devbcn.com/event/devbcn-"+f),isDisabled:e}),n.jsx(a,{onClick:p,text:"📢 Become a Speaker",subtext:c?d(new Date(c)):"Coming soon",link:l,isDisabled:t,isVisible:!0}),n.jsx(a,{onClick:u,text:"🤝 Sponsorship",target:"_self",link:"/sponsorship",isDisabled:o})]})};export{D as A};
//# sourceMappingURL=ActionButtons-CTtbhLxQ.js.map
