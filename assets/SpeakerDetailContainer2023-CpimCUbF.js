import{e as r,h as i,y as p,p as t,x as d,aD as w,L as y,l as u,j as e,r as x,aK as j,aH as b,K as S,m as $,d as I,v,S as E}from"./index-BzYEnzbL.js";import{c as T}from"./2023-B5vIzsTA.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new n.Error().stack;s&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[s]="9e52672f-5a23-49a1-97cb-cce558ce7400",n._sentryDebugIdIdentifier="sentry-dbid-9e52672f-5a23-49a1-97cb-cce558ce7400")}catch{}const L=i.div`
  background-color: ${r.BLUE};
`,D=i.div`
  background: ${r.WHITE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${p}px) {
    height: 10rem;
  }
`,_=i(d.div)`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${r.BLUE};
  color: ${r.WHITE};
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
`,U=i(d.div)`
  flex-direction: column;
  width: 25%;
  padding: 0 1rem;
  display: flex;
`,B=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,R=i(d.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,k=i(d.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${t}px) {
    align-items: flex-start;
  }
`,A=i.div`
  display: none;

  @media only screen and (min-width: ${t}px) {
    display: flex;
    align-items: flex-end;
    padding-bottom: 2.5rem;
    width: 18%;
  }

  @media only screen and (min-width: ${w}px) {
    padding-bottom: 1.5rem;
  }
`,N=i.img`
  display: none;

  @media only screen and (min-width: ${t}px) {
    display: flex;
    width: 100%;
  }
`,W=i(d.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${t}px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`,K=i.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${t}px) {
    width: 25%;
    margin-bottom: 0;
    text-align: left;
  }
`,h=i.img`
  border-radius: 10px;
  padding: 5px;
  border: 1px solid ${r.YELLOW};
  margin-bottom: 15px;

  @media only screen and (max-width: ${t}px) {
    width: 80%;
  }
`,M=i(d.img)`
  width: 80%;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${t}px) {
    margin-bottom: 0;
    width: 75%;
  }
`,g=i.h4`
  font-size: 1.15rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${t}px) {
    text-align: left;
  }
`,f=i.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 0.75rem;
`,H=i.p`
  text-align: justify;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${t}px) {
    padding-right: 4rem;
  }
`,a=i.a`
  text-decoration: none;
  color: ${r.WHITE};
  cursor: pointer;
  display: flex;
  align-items: center;
`,c=i.img`
  height: 1.5rem;
  margin-right: ${({noMargin:n})=>n?"0":"0.75rem"};

  @media only screen and (min-width: ${t}px) {
    margin-right: ${({noMargin:n})=>n?"0":"0.5rem"};
  }
`,O=i(y)`
  text-decoration: none;
  color: ${r.DARK_BLUE};
  transition: color 0.2s ease-in-out;

  :hover {
    color: white;
  }
`;i(d.div)`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${r.BLUE};
  color: ${r.WHITE};
  width: 100%;
  padding: 1.5rem 1.5rem 3rem;

  margin-bottom: 2rem;

  @media only screen and (min-width: ${t}px) {
    justify-content: start;
    align-items: start;
    padding: 0;
  }
`;i(d.div)`
  flex-direction: column;
  width: 25%;
  padding: 0 1rem;
  display: none;

  @media only screen and (min-width: ${t}px) {
    display: flex;
  }
`;i(d.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;i(d.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${t}px) {
    align-items: flex-start;
  }
`;i(d.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${t}px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;i(d.img)`
  width: 80%;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${t}px) {
    margin-bottom: 0;
    width: 75%;
  }
`;i.a`
  text-decoration: none;
  color: ${r.WHITE};
  cursor: pointer;
  display: flex;
  align-items: center;
`;const P=({speaker:n})=>{var o;const{width:s}=u(),m=()=>n.sessions&&n.sessions.length>0||!1;return e.jsx(_,{className:"DetailsContainer",children:e.jsxs(C,{className:"DetailsContainerInner",children:[s>t&&e.jsxs(U,{children:[e.jsx(x.Suspense,{fallback:e.jsx("p",{children:"loading"}),children:e.jsx(h,{src:n.speakerImage,alt:n.fullName})}),e.jsxs(f,{children:[n.twitterUrl&&e.jsx(a,{href:n.twitterUrl.url,target:"_blank",children:e.jsx(c,{src:"/images/twitterIcon.svg"})}),n.linkedInUrl&&e.jsx(a,{href:n.linkedInUrl.url,target:"_blank",children:e.jsx(c,{src:"/images/linkedinIcon.svg",noMargin:!0})})]})]}),e.jsxs(B,{children:[e.jsxs(W,{children:[e.jsx(K,{children:n.fullName}),s<t&&e.jsxs(e.Fragment,{children:[e.jsx(x.Suspense,{fallback:e.jsx("p",{children:"loading"}),children:e.jsx(h,{src:n.speakerImage,alt:n.fullName})}),e.jsxs(f,{children:[n.twitterUrl&&e.jsx(a,{href:n.twitterUrl.url,target:"_blank",children:e.jsx(c,{src:"/images/twitterIcon.svg"})}),n.linkedInUrl&&e.jsx(a,{href:n.linkedInUrl.url,target:"_blank",children:e.jsx(c,{src:"/images/linkedinIcon.svg",noMargin:!0})})]})]}),e.jsx(M,{src:"/images/SlashesWhite.svg"})]}),e.jsxs(R,{children:[e.jsxs(k,{children:[e.jsx(g,{children:n.tagLine}),e.jsx(H,{children:n.bio}),m()&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Sessions"}),e.jsx("ul",{style:{paddingLeft:"40px",paddingTop:"20px",listStyleType:"none"},children:(o=n==null?void 0:n.sessions)==null?void 0:o.map(l=>e.jsx("li",{children:e.jsx(O,{to:`${j}/${l.id}`,children:e.jsxs(g,{children:[e.jsx("img",{src:"/images/MoreThanIcon.svg",height:12,alt:"session",style:{paddingRight:"0.5rem"}}),l.name]})})},l.id))})]}),e.jsx(y,{to:b,style:{color:r.BLACK_BLUE,fontWeight:"bold",textDecoration:"none"},children:"Go back"})]}),e.jsx(A,{children:e.jsx(N,{src:"/images/MoreThanBlueIcon.svg"})})]})]})]})})},G=()=>{const{id:n}=S(),{isLoading:s,error:m,data:o}=$("2023",n);return I(m),v.useEffect(()=>{var l;o&&(document.title=`${(l=o[0])==null?void 0:l.fullName} - DevBcn - ${T.edition}`)},[n,o]),e.jsxs(L,{children:[e.jsxs(E,{color:r.BLUE,marginTop:4,children:[s&&e.jsx("h2",{children:"Loading"}),!s&&o&&o.length>0?e.jsx(P,{speaker:o[0]}):"not found"]}),e.jsx(D,{children:e.jsx("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:e.jsx("path",{d:"M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z",style:{stroke:"none",fill:"#0496ff"}})})})]})};export{G as default};
//# sourceMappingURL=SpeakerDetailContainer2023-CpimCUbF.js.map
