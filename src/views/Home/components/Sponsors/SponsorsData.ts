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
  premium: [],
  regular: [
    {
      name: "Caixabank Tech",
      website: "https://www.caixabanktech.com/es/pagina-de-inicio/",
      image: "images/sponsors/caixabank-tech.png",
    },
    {
      name: "Sopra Steria",
      image: "/images/sponsors/sopra.png",
      website: "https://www.soprasteria.es/",
    },
    {
      name: "Elastic",
      image: "/images/sponsors/logo-elastic-horizontal-color.png",
      website: "https://www.elastic.co/",
    },
    {
      name: "Manychat",
      website: "https://careers.manychat.com/",
      image: "/images/sponsors/logo-manychat.webp",
    },
  ],
  basic: [],
  communities: [],
  media_partners: [
    {
      name: "Digital Expert Online",
      website: "https://digital-expert.online/en/",
      image: "images/sponsors/logo-digital-expert.svg",
    },
    {
      name: "Kube events",
      image: "images/sponsors/kube-events.png",
      website: "https://kube.events/",
    },
    {
      name: "Kube careers",
      image: "images/sponsors/kube-career.png",
      website: "https://kube.careers/",
    },
  ],
  supporters: [],
};
