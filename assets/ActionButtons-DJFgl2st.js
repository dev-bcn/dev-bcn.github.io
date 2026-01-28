import{r,j as s,b as m,a as g}from"./index-DxZQvJw7.js";import{g as i,B as a}from"./Button-DYsS5_Ov.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"04b4d4293ccff9bffe89eef70b331b85846896f6"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cacb75f7-4e92-4051-b3e6-40b9b3c9771e",e._sentryDebugIdIdentifier="sentry-dbid-cacb75f7-4e92-4051-b3e6-40b9b3c9771e")}catch{}})();const x=e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},l=e=>{const t=e.getDate(),n=x(t);return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(e).replace(t.toString(),`${t}${n}`)},h=e=>{const t=new URL(e,window.location.origin);return t.search=window.location.search,t.toString()},k=g.div`
  margin-top: 2rem;
  display: flex;
  text-align: center;

  @media (max-width: ${m}px) {
    flex-direction: column;
    width: 75%;
  }
`,y=({isTicketsDisabled:e,isCfpDisabled:t,isSponsorDisabled:n,ticketsStartDay:o,cfpStartDay:c,cfpLink:d,edition:u})=>{const f=r.useCallback(()=>{i("sponsorship","sponsorship")},[]),b=r.useCallback(()=>{i("ticket","tickets")},[]),p=r.useCallback(()=>{i("CFP","CFP")},[]);return s.jsxs(k,{children:[s.jsx(a,{onClick:b,text:"🎟️ Buy Tickets",subtext:o?l(new Date(o)):"Coming soon",link:h("https://tickets.devbcn.com/event/devbcn-"+u),isDisabled:e}),s.jsx(a,{onClick:p,text:"📢 Become a Speaker",subtext:c?l(new Date(c)):"Coming soon",link:d,isDisabled:t,isVisible:!0}),s.jsx(a,{onClick:f,text:"🤝 Sponsorship",target:"_self",link:"/sponsorship",isDisabled:n})]})};export{y as A};
//# sourceMappingURL=ActionButtons-DJFgl2st.js.map
