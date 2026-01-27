import{j as e,M as o,a,m as g,C as t,b as m,d as u,n as x,e as y}from"./index-ju5_CuzO.js";import{T as b}from"./TitleSection-CSnbYwMp.js";import{S as r}from"./SectionWrapper-B6pnq35M.js";import{T as v}from"./Tag-DaJzAC_8.js";import{c as j}from"./2023-BZMJqwbR.js";import{c as w}from"./2025-CKprDyy-.js";import{d as T}from"./2026-BaUSFBqJ.js";import{u as S}from"./useDocumentTitleUpdate-G0tFe7fP.js";import{S as s,a as C,b as I}from"./Speakers.style-CHragTEo.js";import{a as D,S as k}from"./Talks.style-B38j5MOu.js";import{f as E}from"./format-CDOGDT6K.js";import"./toDate-DTHmQRmg.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"fabdafb3f405dd5facc47e78d67fa79f66b7512d"};var i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="a8f5aec2-e327-490a-bab3-df3980b8fa39",n._sentryDebugIdIdentifier="sentry-dbid-a8f5aec2-e327-490a-bab3-df3980b8fa39")}catch{}})();const L=a(g.div)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  text-transform: none;
  padding: 1rem 0;
  @media (min-width: ${o}px) {
    padding: 1.5rem 0;
  }
`,d=a.h1`
  color: ${({color:n})=>n};
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  width: 75%;
  overflow: hidden;
  @media (min-width: ${o}px) {
    width: 50%;
  }
`,A=({color:n,text:i})=>e.jsx(L,{initial:{x:"-100%"},animate:{x:0},transition:{duration:3,ease:"easeIn"},children:i?e.jsx(d,{color:n,children:`//////////////////////////////////////////////////////////////////////////////////////////////// ${i}`}):e.jsx(d,{color:n,children:"////////////////////////////////////////////////////////////////////////////////////////////////"})}),B=a(g.div)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem 0;
  @media (min-width: ${o}px) {
    padding: 3rem 0;
  }
`,h=a.h1`
  color: ${({color:n})=>n};
  white-space: nowrap;
  display: flex;
  justify-content: flex-start;
  width: 90%;
  overflow: hidden;
  @media (min-width: ${o}px) {
    width: 50%;
  }
`,W=({color:n,text:i})=>e.jsx(B,{initial:{x:"100%"},animate:{x:0},transition:{duration:2,ease:"easeIn"},children:i?e.jsx(h,{color:n,children:`${i}  ////////////////////////////////////////////////////////////////////////////////////////////////`}):e.jsx(h,{color:n,children:"////////////////////////////////////////////////////////////////////////////////////////////////"})}),M=["#AI","#Actors","#Agile","#Architecture","#BigData","#CD","#CI","#Cloud","#Concurrency","#DDD","#DevOps","#Docker","#Frontend","#FunctionalProgramming","#GoLang","#Integration","#IoT","#JVMLangs","#Java","#JavaScript","#Kubernetes","#MachineLearning","#Mesos","#Microservices","#Mobile","#Python","#Rust","#SQA","#Scalability","#TDD","#Testing","#TypeScript","#WebAssembly","#noSQL","Kotlin"],p={2023:j,2024:y,2025:w,2026:T},P=a.div`
  background: ${t.DARK_BLUE};
  overflow-y: hidden;
  height: 3rem;
  width: 100%;
`,$=a.div`
  background: ${t.WHITE};
  height: 3rem;
  @media (min-width: ${m}px) {
    height: 5rem;
  }
`,F=a.div`
  text-align: start;
  color: ${t.BLACK_BLUE};

  p {
    margin: 5px 20px;
    text-align: justify;
  }

  ul {
    margin: 5px 20px;

    li {
      margin: 5px 0;
    }
  }

  h4 {
    margin: 20px 0;
  }
`,O=a.img`
  position: absolute;
  left: -1rem;
  top: 12rem;
  height: 5rem;
  @media (min-width: ${m}px) {
    height: 10rem;
  }
`,R=a.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,_=()=>{const{width:n}=u(),{id:i}=x(),c=p[i||"2026"]||p[2026];return S("Code of Conduct",c.edition),e.jsxs(e.Fragment,{children:[e.jsx(r,{color:t.WHITE,marginTop:5,children:e.jsxs(s,{children:[e.jsx(b,{title:"CODE OF CONDUCT",subtitle:"The DevBcn is the yearly event organised by Conferencia DevBcn S.L. Conference Talks will held on "+E(new Date(c.startDay),"MMMM do, yyyy"),color:t.DARK_BLUE}),n>o&&e.jsxs(e.Fragment,{children:[e.jsx(C,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(I,{src:"/images/LessThanBlueWhiteIcon.svg"})]})]})}),e.jsx($,{}),e.jsxs(r,{color:t.DARK_BLUE,marginTop:0,children:[e.jsx(A,{color:t.WHITE,text:"TOPICS"}),e.jsx(s,{children:e.jsx(D,{children:M.map(l=>e.jsx(v,{text:l,textColor:t.LIGHT_BLUE},l))})})]}),e.jsx(P,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-1.97,61.69 C252.54,152.47 282.44,-23.17 523.42,103.13 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#FFFFFF"}})})}),e.jsxs(r,{color:t.WHITE,marginTop:0,children:[e.jsx(W,{color:t.DARK_BLUE,text:"CODE OF CONDUCT"}),n>o&&e.jsxs(e.Fragment,{children:[e.jsx(R,{src:"/images/LessThanTransparentIcon.svg"}),e.jsx(O,{src:"/images/MoreThanTransparentIcon.svg"})]}),e.jsx(s,{children:e.jsxs(F,{children:[e.jsx("h4",{children:"1. Purpose"}),e.jsx("p",{children:"Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), ideology, choice of technology, sexual images in public spaces, deliberate intimidation, stalking, following, photographic harassment or recording, sustained disruption of conversations, inappropriate physical contact and unwanted sexual attention. We expect participants who are asked to stop any harassing behavior to comply immediately. If a participant engages in harassing behavior, conference organizers may take any action they deem appropriate, such as a warning or expulsion from the conference. If you are being harassed, observe that someone else is being harassed or have comments about harassment, please contact the conference organizing team immediately or ask the technical staff for us. Event staff will help participants contact venue organizers, provide escorts, or help those who are being harassed feel safe during the conference. We expect participants to follow these rules both during DevBcn and at related social events. This code of conduct outlines our expectations for all those participating in DevBcn both online and offline, as well as the consequences of unacceptable behavior."}),e.jsx("h4",{children:"2. Expected behavior"}),e.jsx("p",{children:"The following behavior is expected and requested from all participants of the event:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Participate in an authentic and active manner."}),e.jsx("li",{children:"Exercise consideration and respect in your speech and actions."}),e.jsx("li",{children:"Seek collaboration rather than conflict."}),e.jsx("li",{children:"Respect that people have differences of opinion and that there is rarely one right answer."}),e.jsx("li",{children:"Ask about gender rather than assuming, and if you get it wrong, apologize and use the gender pronoun they prefer. (Please note that continuing to misgender is harassment)."}),e.jsx("li",{children:'Please note that by attending our events, you are subject to being photographed or videotaped. If you wear a "No photos or video" sticker the official photographer will take that into account for closeup pictures.'})]}),e.jsx("h4",{children:"3. Unacceptable behavior"}),e.jsx("p",{children:"The following behavior is considered harassment and is unacceptable at our events:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Violence, threats of violence or violent language directed at another person."}),e.jsx("li",{children:"Sexist, racist, homophobic, transphobic, transphobic or discriminatory jokes and language."}),e.jsx("li",{children:"Posting or displaying sexually explicit or violent material."}),e.jsx("li",{children:'Posting or threatening to post personally identifiable information about other people ("doxing").'}),e.jsx("li",{children:"Wearing or displaying signs of discrimination (e.g. logos of racist organisations)."}),e.jsx("li",{children:"Personal insults, particularly those related to gender, sexual orientation, race, religion or disability."}),e.jsx("li",{children:"Inappropriate photographs or recordings (in any context where individuals have a reasonable expectation of privacy - in restrooms or where participants are resting)."}),e.jsx("li",{children:"Inappropriate physical contact. They must have someone's verbal consent before touching them. Dressing or acting in a certain way is not consent."}),e.jsx("li",{children:"Unwanted sexual attention. This includes sexual comments or jokes, inappropriate touching, groping and unwanted sexual advances."}),e.jsx("li",{children:"Deliberate bullying, stalking or following (online or in person)."}),e.jsx("li",{children:"Sustained disruption of community events, including lectures and presentations."}),e.jsx("li",{children:"Advocating or encouraging any of the above behaviors."})]}),e.jsx("h4",{children:"4. Consequences of unacceptable behavior"}),e.jsx("p",{children:"If a participant behaves inappropriately, the organizers of DevBcn may take whatever action they deem necessary, including warning the offending person or expulsion from the Conference. If you are being harassed, see or perceive that someone else is being harassed, or have any other concerns, please contact the organizers immediately. Anyone asked to stop unacceptable behavior is expected to comply immediately. Please remember that mistakes happen, you are not a bad person, just re-evaluate your behavior and do better next time."}),e.jsx("h4",{children:"5. How to report"}),e.jsxs("p",{children:["If you are the subject of or witness to unacceptable behavior, or have any other concerns, please"," ",e.jsx("a",{href:"mailto:privacy@devbcn.com",rel:"noreferrer",target:"_blank",children:"notify the event organizers"})," ","as soon as possible. If you do not feel comfortable speaking to an organizer, please feel free to send your concerns or any comments to the event organizers."]}),e.jsx("h4",{children:"6. Scope"}),e.jsx("p",{children:"We expect all participants in DevBcn to abide by this Code of Conduct, both online and in person."}),e.jsx("h4",{children:"7. Licensing and Attribution"}),e.jsx("p",{children:"This Code of Conduct is distributed under a Creative Commons Attribution-ShareAlike license. Portions of text derived from the Django Code of Conduct, JornadasDar or Geek Feminism Anti-Harassment Policy."})]})}),e.jsx(k,{})]})]})};_.displayName="CodeOfConduct";export{$ as StyledSectionsSeparator,_ as default};
//# sourceMappingURL=CodeOfConduct-7AO411RT.js.map
