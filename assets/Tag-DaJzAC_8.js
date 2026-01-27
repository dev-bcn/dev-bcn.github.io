import{a as n,j as a,C as e}from"./index-ju5_CuzO.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};r.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var o=new r.Error().stack;o&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[o]="0f4c6190-438c-475d-9101-e7efd7be9d95",r._sentryDebugIdIdentifier="sentry-dbid-0f4c6190-438c-475d-9101-e7efd7be9d95")}catch{}})();const s=n.div.withConfig({shouldForwardProp:r=>!["borderColor"].includes(r)})`
  border: ${({borderColor:r})=>`1px solid ${r}`};
  background: transparent;
  border-radius: 5px;
  margin: 0.25rem;
`,i=n.p`
  padding: 0.25rem 0.5rem 0;
  margin-bottom: 0.3rem;
  color: ${({color:r})=>r};
  font-size: 0.8rem;
`,E={agile:e.GREEN,agility:e.GREEN,ai:e.BROWN,architecture:e.RED,cloud:e.YELLOW,code:e.RED,coding:e.RED,devops:e.PINK,"functional programming":e.PURPLE,functions:e.SKY_BLUE,go:e.WHITE,graalvm:e.GREEN,groovy:e.DARK_BLUE,java:e.SKY_BLUE,javascript:e.YELLOW,jbang:e.MAGENTA,jdk:e.DARK_BLUE,jvm:e.DARK_BLUE,kotlin:e.DARK_BLUE,kubernetes:e.MAGENTA,lambda:e.MAGENTA,lambdas:e.MAGENTA,machine:e.PURPLE,maven:e.ORANGE,microservices:e.GREEN,microservice:e.GREEN,observability:e.SKY_BLUE,openjdk:e.WHITE,opentelemetry:e.ORANGE,python:e.WHITE,quarkus:e.PURPLE,rabbitmq:e.RED,react:e.ORANGE,"react native":e.SKY_BLUE,redux:e.ORANGE,rust:e.WHITE,scala:e.DARK_BLUE,security:e.GREEN,serverless:e.BROWN,tdd:e.GRAY,testing:e.GRAY},c=r=>{const o=r.toLowerCase();for(const[t,d]of Object.entries(E))if(o.includes(t))return d;return"#000000"},u=({text:r,textColor:o})=>{const t=c(r);return a.jsx(s,{borderColor:t,children:a.jsx(i,{color:o||t,children:r})})};export{u as T};
//# sourceMappingURL=Tag-DaJzAC_8.js.map
