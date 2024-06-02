export interface Sponsors {
  top: Sponsor[] | null;
  premium: Sponsor[] | null;
  regular: Sponsor[] | null;
  communities: Sponsor[] | null;
  basic: Sponsor[] | null;
  media_partners: Sponsor[] | null;
  supporters: Sponsor[] | null;
}

export interface Sponsor {
  name: string;
  website: string;
  image: string;
}

export const sponsors: Sponsors = {
  top: [
    {
      name: "DATASTAX",
      image: "images/sponsors/datastax.png",
      website: "https://www.datastax.com/",
    },
  ],
  premium: [
    {
      name: "Allianz",
      image: "images/sponsors/allianz.png",
      website: "https://tech.allianz.com/en.html",
    },
    {
      name: "Barcelona JUG",
      image: "images/sponsors/bcn-jug.png",
      website: "https://www.meetup.com/barcelonajug/",
    },
  ],
  regular: [
    {
      name: "Sopra Steria",
      image: "/images/sponsors/sopra.png",
      website: "https://www.soprasteria.es/",
    },
    {
      name: "Caixabank Tech",
      website: "https://www.caixabanktech.com/es/pagina-de-inicio/",
      image: "images/sponsors/caixabank-tech.png",
    },
    {
      name: "Idealista",
      image: "images/sponsors/idealista.jpg",
      website: "https://www.idealista.com/info/trabaja-con-nosotros",
    },
    {
      name: "Clever Cloud",
      image: "images/sponsors/clever-cloud.png",
      website: "https://www.clever-cloud.com/",
    },
    {
      name: "ALTEN",
      image: "images/sponsors/alten.png",
      website: "https://www.alten.es/",
    },
    {
      name: "TIGERA",
      image: "images/sponsors/tigera.png",
      website: "https://www.tigera.io/",
    },
  ],
  basic: [
    {
      name: "Seidor",
      website: "https://www.opentrends.net/en",
      image: "images/sponsors/seidor.png",
    },
    {
      name: "Perfect Scale",
      website: "https://www.perfectscale.io/",
      image: "images/sponsors/perfect-scale.png",
    },
    {
      name: "Auth0",
      image: "images/sponsors/auth0.png",
      website: "https://okta.com/careers",
    },
    {
      name: "Barcelona Activa",
      image: "images/sponsors/barcelona-activa.png",
      website: "https://www.barcelonactiva.cat/",
    },
    {
      name: "Reevo",
      image: "images/sponsors/reevo.png",
      website: "https://www.reevo.it/",
    },
    {
      name: "GFT",
      website: "https://www.gft.com/es/es/",
      image: "images/sponsors/GFT.jpg",
    },
  ],
  communities: [
    {
      name: "KCD Barcelona",
      website:
        "https://community.cncf.io/events/details/cncf-kcd-spain-presents-kcd-barcelona-2024/",
      image: "/images/KCD-logo-black.png",
    },
    {
      name: "Apache Foundation",
      image: "images/sponsors/apache-foundation.jpeg",
      website: "https://www.apache.org/",
    },
    {
      name: "Eclipse Foundation",
      image: "images/sponsors/eclipse-foundation.png",
      website: "https://www.eclipse.org/",
    },
    {
      name: "Foojay",
      image: "images/sponsors/foojay.jpg",
      website: "https://foojay.io/",
    },
    {
      name: "Migracode Barcelona",
      image: "images/sponsors/migracode.jpg",
      website: "https://www.migracode.org/",
    },
    {
      name: "Step4ward",
      image: "images/sponsors/step4ward.png",
      website: "https://bit.ly/step4wardhome",
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
  ],
  supporters: [
    {
      name: "BarcelonaJS",
      website: "https://barcelonajs.com/",
      image: "images/sponsors/barcelona-js.png",
    },
  ],
};
