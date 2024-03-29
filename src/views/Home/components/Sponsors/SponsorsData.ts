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
  top: [],
  premium: [
    {
      name: "Allianz",
      image: "images/sponsors/allianz.png",
      website: "https://careers.allianz.com/es_ES.html",
    },
  ],
  regular: [
    {
      name: "Sopra Steria",
      image: "/images/sponsors/sopra.png",
      website: "https://www.soprasteria.es/",
    },
  ],
  basic: [
    {
      name: "Seidor",
      website: "https://www.opentrends.net/en",
      image: "images/sponsors/seidor.png",
    },
  ],
  communities: [
    {
      name: "KCD Spain",
      website: "https://kcdspain.com/",
      image: "/images/KCD-logo-white.png",
    },
  ],
  media_partners: [],
  supporters: [],
};
