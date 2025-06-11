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
    {
      name: "Snowflake",
      website: "https://www.snowflake.com/en/developers/",
      image: "/images/sponsors/logo-snowflake.png",
    },
    {
      name: "Clever Cloud",
      image: "images/sponsors/clever-cloud.png",
      website: "https://www.clever-cloud.com/",
    },
    {
      name: "Vonage",
      website: "https://vonage.dev/DevBcn",
      image: "/images/sponsors/vonage.png",
    },
  ],
  basic: [
    {
      name: "Seidor",
      website: "https://www.opentrends.net/en",
      image: "images/sponsors/seidor.png",
    },
    {
      name: "Grupo Castilla",
      image: "images/sponsors/grupo-castilla.png",
      website:
        "https://www.grupocastilla.es/servicios-rrhh/consultoria-tecnologica/",
    },
    {
      name: "FOR GOOD AI",
      website: "https://zencoder.ai/",
      image: "images/sponsors/zencoder.png",
    },
    {
      name: "ORTUS SOLUTIONS",
      website: "https://boxlang.io/",
      image: "images/sponsors/boxlang.png",
    },
    {
      name: "Preply",
      website: "https://preply.com/en/careers",
      image: "images/sponsors/preply.svg",
    },
  ],
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
    {
      name: "CIO Insights",
      website: "https://www.cioinsights.com/",
      image: "images/sponsors/cio-insights.png",
    },
  ],
  supporters: [],
};
