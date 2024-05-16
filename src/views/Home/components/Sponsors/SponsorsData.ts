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
      website: "https://careers.allianz.com/es_ES.html",
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
  ],
  media_partners: [],
  supporters: [],
};
