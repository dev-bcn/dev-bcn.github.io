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
    regular: [{
        name: "Caixabank Tech",
        website: "https://www.caixabanktech.com/es/pagina-de-inicio/",
        image: "images/sponsors/caixabank-tech.png",
    }],
    basic: [],
    communities: [],
    media_partners: [],
    supporters: [],
};
