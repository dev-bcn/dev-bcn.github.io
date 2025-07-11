import{j as e,M as a,h as o,x as h,e as t,p,l as g,g as u,i as c,S as r,f as x,o as f}from"./index-CJ9DhvFs.js";import{T as m}from"./Tag-D7jawELC.js";import{S as s,f as y,g as b}from"./Speakers.style-CTdAp5PM.js";import{e as v,d as j}from"./Talks.style-DIA6LQ2K.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="caf3e762-1a6f-466f-bc88-c2f184c21974",n._sentryDebugIdIdentifier="sentry-dbid-caf3e762-1a6f-466f-bc88-c2f184c21974")}catch{}const w=["#AI","#Actors","#Agile","#Architecture","#BigData","#CD","#CI","#Cloud","#Concurrency","#DDD","#DevOps","#Docker","#Frontend","#FunctionalProgramming","#GoLang","#Integration","#IoT","#JVMLangs","#Java","#JavaScript","#Kubernetes","#MachineLearning","#Mesos","#Microservices","#Mobile","#Python","#Rust","#SQA","#Scalability","#TDD","#Testing","#TypeScript","#WebAssembly","#noSQL","Kotlin"],T=o(h.div)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  text-transform: none;
  padding: 1rem 0;
  @media (min-width: ${a}px) {
    padding: 1.5rem 0;
  }
`,l=o.h1`
  color: ${({color:n})=>n};
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  width: 75%;
  overflow: hidden;
  @media (min-width: ${a}px) {
    width: 50%;
  }
`,S=({color:n,text:i})=>e.jsx(T,{initial:{x:"-100%"},animate:{x:0},transition:{duration:3,ease:"easeIn"},children:i?e.jsx(l,{color:n,children:`//////////////////////////////////////////////////////////////////////////////////////////////// ${i}`}):e.jsx(l,{color:n,children:"////////////////////////////////////////////////////////////////////////////////////////////////"})}),I=o(h.div)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem 0;
  @media (min-width: ${a}px) {
    padding: 3rem 0;
  }
`,d=o.h1`
  color: ${({color:n})=>n};
  white-space: nowrap;
  display: flex;
  justify-content: flex-start;
  width: 90%;
  overflow: hidden;
  @media (min-width: ${a}px) {
    width: 50%;
  }
`,C=({color:n,text:i})=>e.jsx(I,{initial:{x:"100%"},animate:{x:0},transition:{duration:2,ease:"easeIn"},children:i?e.jsx(d,{color:n,children:`${i}  ////////////////////////////////////////////////////////////////////////////////////////////////`}):e.jsx(d,{color:n,children:"////////////////////////////////////////////////////////////////////////////////////////////////"})}),D=o.div`
  background: ${t.DARK_BLUE};
  overflow-y: hidden;
  height: 3rem;
  width: 100%;
`,k=o.div`
  background: ${t.WHITE};
  height: 3rem;
  @media (min-width: ${p}px) {
    height: 5rem;
  }
`,L=o.div`
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
`,B=o.img`
  position: absolute;
  left: -1rem;
  top: 12rem;
  height: 5rem;
  @media (min-width: ${p}px) {
    height: 10rem;
  }
`,A=o.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`,E=()=>{const{width:n}=g();return u("Code of Conduct",c.edition),e.jsxs(e.Fragment,{children:[e.jsx(r,{color:t.WHITE,marginTop:5,children:e.jsxs(s,{children:[e.jsx(x,{title:"CODE OF CONDUCT",subtitle:"The DevBcn is the yearly event organised by Conferencia DevBcn S.L. Conference Talks will held on "+f(new Date(c.startDay),"MMMM do, yyyy"),color:t.DARK_BLUE}),n>a&&e.jsxs(e.Fragment,{children:[e.jsx(y,{src:"/images/MoreThanBlueWhiteIcon.svg"}),e.jsx(b,{src:"/images/LessThanBlueWhiteIcon.svg"})]})]})}),e.jsx(k,{}),e.jsxs(r,{color:t.DARK_BLUE,marginTop:0,children:[e.jsx(S,{color:t.WHITE,text:"TOPICS"}),e.jsx(s,{children:e.jsx(v,{children:w.map(i=>e.jsx(m,{text:i,textColor:t.LIGHT_BLUE},i))})})]}),e.jsx(D,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-1.97,61.69 C252.54,152.47 282.44,-23.17 523.42,103.13 L500.00,150.00 L0.00,150.00 Z",style:{stroke:"none",fill:"#FFFFFF"}})})}),e.jsxs(r,{color:t.WHITE,marginTop:0,children:[e.jsx(C,{color:t.DARK_BLUE,text:"CODE OF CONDUCT"}),n>a&&e.jsxs(e.Fragment,{children:[e.jsx(A,{src:"/images/LessThanTransparentIcon.svg"}),e.jsx(B,{src:"/images/MoreThanTransparentIcon.svg"})]}),e.jsx(s,{children:e.jsxs(L,{children:[e.jsx("h4",{children:"1. Purpose"}),e.jsx("p",{children:"Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), ideology, choice of technology, sexual images in public spaces, deliberate intimidation, stalking, following, photographic harassment or recording, sustained disruption of conversations, inappropriate physical contact and unwanted sexual attention. We expect participants who are asked to stop any harassing behavior to comply immediately. If a participant engages in harassing behavior, conference organizers may take any action they deem appropriate, such as a warning or expulsion from the conference. If you are being harassed, observe that someone else is being harassed or have comments about harassment, please contact the conference organizing team immediately or ask the technical staff for us. Event staff will help participants contact venue organizers, provide escorts, or help those who are being harassed feel safe during the conference. We expect participants to follow these rules both during DevBcn and at related social events. This code of conduct outlines our expectations for all those participating in DevBcn both online and offline, as well as the consequences of unacceptable behavior."}),e.jsx("h4",{children:"2. Expected behavior"}),e.jsx("p",{children:"The following behavior is expected and requested from all participants of the event:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Participate in an authentic and active manner."}),e.jsx("li",{children:"Exercise consideration and respect in your speech and actions."}),e.jsx("li",{children:"Seek collaboration rather than conflict."}),e.jsx("li",{children:"Respect that people have differences of opinion and that there is rarely one right answer."}),e.jsx("li",{children:"Ask about gender rather than assuming, and if you get it wrong, apologize and use the gender pronoun they prefer. (Please note that continuing to misgender is harassment)."}),e.jsx("li",{children:'Please note that by attending our events, you are subject to being photographed or videotaped. If you wear a "No photos or video" sticker the official photographer will take that into account for closeup pictures.'})]}),e.jsx("h4",{children:"3. Unacceptable behavior"}),e.jsx("p",{children:"The following behavior is considered harassment and is unacceptable at our events:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Violence, threats of violence or violent language directed at another person."}),e.jsx("li",{children:"Sexist, racist, homophobic, transphobic, transphobic or discriminatory jokes and language."}),e.jsx("li",{children:"Posting or displaying sexually explicit or violent material."}),e.jsx("li",{children:'Posting or threatening to post personally identifiable information about other people ("doxing").'}),e.jsx("li",{children:"Wearing or displaying signs of discrimination (e.g. logos of racist organisations)."}),e.jsx("li",{children:"Personal insults, particularly those related to gender, sexual orientation, race, religion or disability."}),e.jsx("li",{children:"Inappropriate photographs or recordings (in any context where individuals have a reasonable expectation of privacy - in restrooms or where participants are resting)."}),e.jsx("li",{children:"Inappropriate physical contact. They must have someone's verbal consent before touching them. Dressing or acting in a certain way is not consent."}),e.jsx("li",{children:"Unwanted sexual attention. This includes sexual comments or jokes, inappropriate touching, groping and unwanted sexual advances."}),e.jsx("li",{children:"Deliberate bullying, stalking or following (online or in person)."}),e.jsx("li",{children:"Sustained disruption of community events, including lectures and presentations."}),e.jsx("li",{children:"Advocating or encouraging any of the above behaviors."})]}),e.jsx("h4",{children:"4. Consequences of unacceptable behavior"}),e.jsx("p",{children:"If a participant behaves inappropriately, the organizers of DevBcn may take whatever action they deem necessary, including warning the offending person or expulsion from the Conference. If you are being harassed, see or perceive that someone else is being harassed, or have any other concerns, please contact the organizers immediately. Anyone asked to stop unacceptable behavior is expected to comply immediately. Please remember that mistakes happen, you are not a bad person, just re-evaluate your behavior and do better next time."}),e.jsx("h4",{children:"5. How to report"}),e.jsxs("p",{children:["If you are the subject of or witness to unacceptable behavior, or have any other concerns, please"," ",e.jsx("a",{href:"mailto:privacy@devbcn.com",rel:"noreferrer",target:"_blank",children:"notify the event organizers"})," ","as soon as possible. If you do not feel comfortable speaking to an organizer, please feel free to send your concerns or any comments to the event organizers."]}),e.jsx("h4",{children:"6. Scope"}),e.jsx("p",{children:"We expect all participants in DevBcn to abide by this Code of Conduct, both online and in person."}),e.jsx("h4",{children:"7. Licensing and Attribution"}),e.jsx("p",{children:"This Code of Conduct is distributed under a Creative Commons Attribution-ShareAlike license. Portions of text derived from the Django Code of Conduct, JornadasDar or Geek Feminism Anti-Harassment Policy."})]})}),e.jsx(j,{})]})]})};E.displayName="CodeOfConduct";export{k as StyledSectionsSeparator,E as default};
//# sourceMappingURL=CodeOfConduct-C7BXJdwR.js.map
