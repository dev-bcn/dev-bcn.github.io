import{D as f,j as a,C as i,b as p,a as u}from"./index-DxZQvJw7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"04b4d4293ccff9bffe89eef70b331b85846896f6"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="87de6111-cf53-4c4a-b740-b33a164c63fa",e._sentryDebugIdIdentifier="sentry-dbid-87de6111-cf53-4c4a-b740-b33a164c63fa")}catch{}})();const x=(e="action")=>(t="",r="")=>{f({category:e,action:t,label:r})},h=x("links");function s(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=s(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function b(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=s(e))&&(n&&(n+=" "),n+=t);return n}const g=e=>{e.preventDefault()},m=u.a`
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
`,v=({text:e,subtext:t="SOON",link:r,onClick:n,isDisabled:o,isVisible:c=!0,target:l="_blank",children:d})=>c?a.jsxs(m,{className:b(!o&&"anyul-hvr-bounce-in",o&&"disabled"),onClick:o?g:n,href:o?"#top":r,target:l,rel:"noreferrer nofollow","aria-disabled":o,children:[a.jsx("span",{className:o?"disabled":"active",style:{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",flexWrap:"wrap"},children:d}),a.jsx("span",{children:`  ${e}`}),o&&a.jsx("span",{className:"subtext",children:t})]}):null;export{v as B,h as g};
//# sourceMappingURL=Button-DYsS5_Ov.js.map
