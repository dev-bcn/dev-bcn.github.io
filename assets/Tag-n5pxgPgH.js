import{d as a,j as t,C as e}from"./index-BV2x__3N.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};r.SENTRY_RELEASE={id:"25a2fe71a71ae92836534bcaef747cfb7c05b378"}}catch{}})();try{(function(){var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new r.Error().stack;o&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[o]="58f9742d-1fa9-4415-93c7-1ba111bc4c83",r._sentryDebugIdIdentifier="sentry-dbid-58f9742d-1fa9-4415-93c7-1ba111bc4c83")})()}catch{}const i=a.div.withConfig({shouldForwardProp:r=>!["borderColor"].includes(r)})`
  border: ${({borderColor:r})=>`1px solid ${r}`};
  background: transparent;
  border-radius: 5px;
  margin: 0.25rem;
`,s=a.p`
  padding: 0.25rem 0.5rem 0;
  margin-bottom: 0.3rem;
  color: ${({color:r})=>r};
  font-size: 0.8rem;
`,c={agile:e.GREEN,agility:e.GREEN,ai:e.BROWN,architecture:e.RED,cloud:e.YELLOW,code:e.RED,coding:e.RED,devops:e.PINK,"functional programming":e.PURPLE,functions:e.SKY_BLUE,go:e.WHITE,graalvm:e.GREEN,groovy:e.DARK_BLUE,java:e.SKY_BLUE,javascript:e.YELLOW,jbang:e.MAGENTA,jdk:e.DARK_BLUE,jvm:e.DARK_BLUE,kotlin:e.DARK_BLUE,kubernetes:e.MAGENTA,lambda:e.MAGENTA,lambdas:e.MAGENTA,machine:e.PURPLE,maven:e.ORANGE,microservices:e.GREEN,microservice:e.GREEN,observability:e.SKY_BLUE,openjdk:e.WHITE,opentelemetry:e.ORANGE,python:e.WHITE,quarkus:e.PURPLE,rabbitmq:e.RED,react:e.ORANGE,"react native":e.SKY_BLUE,redux:e.ORANGE,rust:e.WHITE,scala:e.DARK_BLUE,security:e.GREEN,serverless:e.BROWN,tdd:e.GRAY,testing:e.GRAY},l=r=>{const o=r.toLowerCase();for(const[n,d]of Object.entries(c))if(o.includes(n))return d;return"#000000"},f=({text:r,textColor:o})=>{const n=l(r);return t.jsx(i,{borderColor:n,children:t.jsx(s,{color:o||n,children:r})})};export{f as T};
//# sourceMappingURL=Tag-n5pxgPgH.js.map
