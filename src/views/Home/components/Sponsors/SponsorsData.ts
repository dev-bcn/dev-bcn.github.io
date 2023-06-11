export interface Sponsors {
  top: Sponsor[] | null;
  premium: Sponsor[] | null;
  regular: Sponsor[] | null;
  communities: Sponsor[] | null;
  basic: Sponsor[] | null;
  media_partners: Sponsor[] | null;
}

export interface Sponsor {
  name: string;
  website: string;
  image: string;
}

export const sponsors: Sponsors = {
  top: [
    {
      name: "GFT",
      website: "https://www.gft.com/es/es/",
      image: "images/sponsors/GFT.jpg",
    },
  ],
  premium: [
    {
      name: "Barcelona JUG",
      image: "images/sponsors/bcn-jug.png",
      website: "https://www.meetup.com/barcelonajug/",
    },
    {
      name: "Adevinta",
      website: "https://www.adevinta.com/",
      image: "images/sponsors/adevinta.png",
    },
  ],
  regular: [
    {
      name: "Adaptive",
      image: "images/sponsors/adaptive.png",
      website: "https://www.weareadaptive.com/",
    },
    {
      name: "Capitol",
      image: "images/sponsors/capitole.png",
      website: "https://capitole-consulting.com/es/",
    },
    {
      name: "Allianz",
      image: "images/sponsors/allianz.png",
      website: "https://careers.allianz.com/es_ES.html",
    },
    {
      name: "Sopra Steria",
      image: "images/sponsors/sopra.jpg",
      website: "https://www.soprasteria.es/",
    },
    {
      name: "Idealista",
      image: "images/sponsors/idealista.jpg",
      website: "https://www.idealista.com/info/trabaja-con-nosotros",
    },
    {
      name: "King",
      image: "images/sponsors/king.png",
      website: "https://careers.king.com/about-us/",
    },
    {
      name: "Azul",
      image: "images/sponsors/azul.png",
      website:
        "https://www.azul.com/?utm_medium=email&utm_campaign=20230703-SEV-DevBCN&utm_source=DevBCN&utm_content=&utm_term=",
    },
    {
      name: "Gradle",
      image: "images/sponsors/gradle.png",
      website: "https://gradle.com/",
    },
    {
      name: "CouchBase",
      website: "https://developer.couchbase.com/",
      image: "images/sponsors/couchbase.png",
    },
    {
      name: "Alten",
      image: "images/sponsors/alten.png",
      website: "https://www.alten.es",
    },
  ],
  basic: [
    {
      name: "Caixabank Tech",
      website: "https://www.peoplexperiencehub.com/caixabanktech",
      image: "images/sponsors/caixabank-tech.png",
    },
    {
      name: "Ocado Tech",
      website:
        "https://careers.ocadogroup.com/where-we-are/europe/development-centre-barcelona?utm_source=event&utm_medium=other&utm_campaign=ot_event_bcn_devbcn_website",
      image: "images/sponsors/ocado.png",
    },
    {
      name: "Honeypot",
      website:
        "https://app.honeypot.io/users/sign_up?utm_source=Live&utm_medium=sourcing&utm_campaign=event_02072023&utm_content=DevBCN",
      image: "images/sponsors/honeypot.jpg",
    },
    {
      name: "Edreams",
      image: "images/sponsors/edreams.png",
      website: "https://www.edreamsodigeo.com",
    },
    {
      name: "barcelona Activa",
      image: "images/sponsors/barcelona-activa.png",
      website: "https://www.barcelonactiva.cat/",
    },
    /*{
      name: "Veepee",
      image: "images/sponsors/veepee.png",
      website: "https://www.veepee.es/gr/home/default",
    },*/
  ],
  communities: [
    {
      name: "Agile Spain",
      image: "images/sponsors/agile.png",
      website: "https://agile-spain.org/",
    },
  ],
  media_partners: [
    {
      name: "Kube events",
      image: "images/sponsors/kube-events.png",
      website: "https://kube.events/",
    },
    {
      name: "Kube careers",
      image: "images/sponsors/kube-career.png",
      website: "https://kube.careers//",
    },
    {
      name: "entre devs y ops",
      image: "images/sponsors/entre-devs-y-ops.svg",
      website: "https://www.entredevyops.es/",
    },
    {
      name: "Codely",
      image: "images/sponsors/codely.png",
      website: "https://codely.com/pro/jbcnconf22",
    },
    {
      name: "CIO Insigths",
      website: "https://www.cioinsights.com/",
      image: "images/sponsors/cio.png",
    },
    {
      name: "Glorium",
      image: "images/sponsors/glorium.png",
      website: "https://gloriumtech.com/",
    },
  ],
};
