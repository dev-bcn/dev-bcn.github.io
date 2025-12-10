import{f as d,k as i,z as p,s as t,y as r,aI as y,L as f,n as w,j as e,r as m,aN as u,aM as j,V as b,o as S,e as I,x as $,S as v}from"./index-D5TC1KA0.js";import{c as E}from"./2023-B5vIzsTA.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="5d22d491-2906-40c2-85d2-9cc0b58c5865",n._sentryDebugIdIdentifier="sentry-dbid-5d22d491-2906-40c2-85d2-9cc0b58c5865")}catch{}const T=i.div`
  background-color: ${d.BLUE};
`,L=i.div`
  background: ${d.WHITE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${p}px) {
    height: 10rem;
  }
`,_=i(r.div)`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${d.BLUE};
  color: ${d.WHITE};
  width: 100%;
  padding: 1.5rem 1.5rem 3rem;

  margin-bottom: 8rem;

  @media only screen and (min-width: ${t}px) {
    justify-content: start;
    align-items: start;
    padding: 0;
    margin-bottom: 2rem;
  }
`,C=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: ${t}px) {
    flex-direction: row;
    padding: 3rem 0 3rem 3rem;
  }
`,D=i(r.div)`
  flex-direction: column;
  width: 25%;
  padding: 0 1rem;
  display: flex;
`,k=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,U=i(r.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,B=i(r.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${t}px) {
    align-items: flex-start;
  }
`,R=i.div`
  display: none;

  @media only screen and (min-width: ${t}px) {
    display: flex;
    align-items: flex-end;
    padding-bottom: 2.5rem;
    width: 18%;
  }

  @media only screen and (min-width: ${y}px) {
    padding-bottom: 1.5rem;
  }
`,N=i.img`
  display: none;

  @media only screen and (min-width: ${t}px) {
    display: flex;
    width: 100%;
  }
`,A=i(r.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${t}px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`,W=i.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${t}px) {
    width: 25%;
    margin-bottom: 0;
    text-align: left;
  }
`,x=i.img`
  border-radius: 10px;
  padding: 5px;
  border: 1px solid ${d.YELLOW};
  margin-bottom: 15px;

  @media only screen and (max-width: ${t}px) {
    width: 80%;
  }
`,M=i(r.img)`
  width: 80%;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${t}px) {
    margin-bottom: 0;
    width: 75%;
  }
`,h=i.h4`
  font-size: 1.15rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${t}px) {
    text-align: left;
  }
`,g=i.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 0.75rem;
`,K=i.p`
  text-align: justify;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${t}px) {
    padding-right: 4rem;
  }
`,l=i.a`
  text-decoration: none;
  color: ${d.WHITE};
  cursor: pointer;
  display: flex;
  align-items: center;
`,a=i.img`
  height: 1.5rem;
  margin-right: ${({noMargin:n})=>n?"0":"0.75rem"};

  @media only screen and (min-width: ${t}px) {
    margin-right: ${({noMargin:n})=>n?"0":"0.5rem"};
  }
`,O=i(f)`
  text-decoration: none;
  color: ${d.DARK_BLUE};
  transition: color 0.2s ease-in-out;

  :hover {
    color: white;
  }
`;i(r.div)`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${d.BLUE};
  color: ${d.WHITE};
  width: 100%;
  padding: 1.5rem 1.5rem 3rem;

  margin-bottom: 2rem;

  @media only screen and (min-width: ${t}px) {
    justify-content: start;
    align-items: start;
    padding: 0;
  }
`;i(r.div)`
  flex-direction: column;
  width: 25%;
  padding: 0 1rem;
  display: none;

  @media only screen and (min-width: ${t}px) {
    display: flex;
  }
`;i(r.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;i(r.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${t}px) {
    align-items: flex-start;
  }
`;i(r.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${t}px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;i(r.img)`
  width: 80%;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${t}px) {
    margin-bottom: 0;
    width: 75%;
  }
`;i.a`
  text-decoration: none;
  color: ${d.WHITE};
  cursor: pointer;
  display: flex;
  align-items: center;
`;const H=({speaker:n})=>{const{width:o}=w(),c=()=>n.sessions&&n.sessions.length>0||!1;return e.jsx(_,{className:"DetailsContainer",children:e.jsxs(C,{className:"DetailsContainerInner",children:[o>t&&e.jsxs(D,{children:[e.jsx(m.Suspense,{fallback:e.jsx("p",{children:"loading"}),children:e.jsx(x,{src:n.speakerImage,alt:n.fullName})}),e.jsxs(g,{children:[n.twitterUrl&&e.jsx(l,{href:n.twitterUrl.url,target:"_blank",children:e.jsx(a,{src:"/images/twitterIcon.svg"})}),n.linkedInUrl&&e.jsx(l,{href:n.linkedInUrl.url,target:"_blank",children:e.jsx(a,{src:"/images/linkedinIcon.svg",noMargin:!0})})]})]}),e.jsxs(k,{children:[e.jsxs(A,{children:[e.jsx(W,{children:n.fullName}),o<t&&e.jsxs(e.Fragment,{children:[e.jsx(m.Suspense,{fallback:e.jsx("p",{children:"loading"}),children:e.jsx(x,{src:n.speakerImage,alt:n.fullName})}),e.jsxs(g,{children:[n.twitterUrl&&e.jsx(l,{href:n.twitterUrl.url,target:"_blank",children:e.jsx(a,{src:"/images/twitterIcon.svg"})}),n.linkedInUrl&&e.jsx(l,{href:n.linkedInUrl.url,target:"_blank",children:e.jsx(a,{src:"/images/linkedinIcon.svg",noMargin:!0})})]})]}),e.jsx(M,{src:"/images/SlashesWhite.svg"})]}),e.jsxs(U,{children:[e.jsxs(B,{children:[e.jsx(h,{children:n.tagLine}),e.jsx(K,{children:n.bio}),c()&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Sessions"}),e.jsx("ul",{style:{paddingLeft:"40px",paddingTop:"20px",listStyleType:"none"},children:n?.sessions?.map(s=>e.jsx("li",{children:e.jsx(O,{to:`${u}/${s.id}`,children:e.jsxs(h,{children:[e.jsx("img",{src:"/images/MoreThanIcon.svg",height:12,alt:"session",style:{paddingRight:"0.5rem"}}),s.name]})})},s.id))})]}),e.jsx(f,{to:j,style:{color:d.BLACK_BLUE,fontWeight:"bold",textDecoration:"none"},children:"Go back"})]}),e.jsx(R,{children:e.jsx(N,{src:"/images/MoreThanBlueIcon.svg"})})]})]})]})})},F=()=>{const{id:n}=b(),{isLoading:o,error:c,data:s}=S("2023",n);return I(c),$.useEffect(()=>{s&&(document.title=`${s[0]?.fullName} - DevBcn - ${E.edition}`)},[n,s]),e.jsxs(T,{children:[e.jsxs(v,{color:d.BLUE,marginTop:4,children:[o&&e.jsx("h2",{children:"Loading"}),!o&&s&&s.length>0?e.jsx(H,{speaker:s[0]}):"not found"]}),e.jsx(L,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#0496ff"}})})})]})};export{F as default};
//# sourceMappingURL=SpeakerDetailContainer2023-Cg5vjIe0.js.map
