import{D as f,j as a,C as i,a as u,d as p}from"./index-B_Xc_yjB.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"b4ab71ff51307cc0e12699753a0391ad09c46a09"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f6720288-5924-47ae-93de-416a11a1c139",e._sentryDebugIdIdentifier="sentry-dbid-f6720288-5924-47ae-93de-416a11a1c139")})()}catch{}const x=(e="action")=>(n="",o="")=>{f({category:e,action:n,label:o})},h=x("links");function s(e){var n,o,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(o=s(e[n]))&&(t&&(t+=" "),t+=o)}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function g(){for(var e,n,o=0,t="",r=arguments.length;o<r;o++)(e=arguments[o])&&(n=s(e))&&(t&&(t+=" "),t+=n);return t}const y=e=>{e.preventDefault()},b=p.a`
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

  @media (max-width: ${u}px) {
    margin: 5px 1px;
  }
`,w=({text:e,subtext:n="SOON",link:o,onClick:t,isDisabled:r,isVisible:l=!0,target:d="_blank",children:c})=>l?a.jsxs(b,{className:g(!r&&"anyul-hvr-bounce-in",r&&"disabled"),onClick:r?y:t,href:r?"#top":o,target:d,rel:"noreferrer nofollow","aria-disabled":r,children:[a.jsx("span",{className:r?"disabled":"active",style:{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",flexWrap:"wrap"},children:c}),a.jsx("span",{children:`  ${e}`}),r&&a.jsx("span",{className:"subtext",children:n})]}):null;export{w as B,h as g};
//# sourceMappingURL=Button-CB6HWGPW.js.map
