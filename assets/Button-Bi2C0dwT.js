import{D as f,j as a,C as i,b as p,a as u}from"./index-ju5_CuzO.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="87de6111-cf53-4c4a-b740-b33a164c63fa",t._sentryDebugIdIdentifier="sentry-dbid-87de6111-cf53-4c4a-b740-b33a164c63fa")}catch{}})();const x=(t="action")=>(e="",r="")=>{f({category:t,action:e,label:r})},h=x("links");function s(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(r=s(t[e]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function b(){for(var t,e,r=0,n="",o=arguments.length;r<o;r++)(t=arguments[r])&&(e=s(t))&&(n&&(n+=" "),n+=e);return n}const g=t=>{t.preventDefault()},m=u.a`
  align-items: stretch;
  background-color: ${i.LIGHT_BLUE};
  border-radius: 5px;
  box-shadow: 1px 1px 1px #000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  justify-content: center;
  margin: 20px 5px;
  min-width: 200px;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.5s;
  vertical-align: middle;

  &:hover,
  &:focus,
  &:active {
    background-color: ${i.DARK_BLUE};
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }

  &.disabled {
    background-color: ${i.LIGHT_BLUE};
    transition-duration: 0s;
    cursor: not-allowed;
  }

  span {
    color: white;
    display: block;
    font-size: 0.9rem;
    margin: 0.1rem 0;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
    text-transform: uppercase;
    vertical-align: middle;
  }

  .subtext {
    font-weight: bold;
    font-size: 0.7em;
    color: ${i.MAGENTA};
    text-shadow: none;
  }

  @media (max-width: ${p}px) {
    margin: 5px 1px;
  }
`,v=({text:t,subtext:e="SOON",link:r,onClick:n,isDisabled:o,isVisible:c=!0,target:l="_blank",children:d})=>c?a.jsxs(m,{className:b(!o&&"anyul-hvr-bounce-in",o&&"disabled"),onClick:o?g:n,href:o?"#top":r,target:l,rel:"noreferrer nofollow","aria-disabled":o,children:[a.jsx("span",{className:o?"disabled":"active",style:{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",flexWrap:"wrap"},children:d}),a.jsx("span",{children:`  ${t}`}),o&&a.jsx("span",{className:"subtext",children:e})]}):null;export{v as B,h as g};
//# sourceMappingURL=Button-Bi2C0dwT.js.map
