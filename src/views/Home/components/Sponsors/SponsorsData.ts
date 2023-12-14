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
  regular: [],
  basic: [],
  communities: [],
  media_partners: [],
  supporters: [],
};
