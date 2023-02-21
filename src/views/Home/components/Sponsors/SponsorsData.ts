export interface Sponsors {
  top: Sponsor[] | null;
  premium: Sponsor[] | null;
  regular: Sponsor[] | null;
  virtual: Sponsor[] | null;
  startup: Sponsor[] | null;
  media_partners: Sponsor[] | null;
}

export interface Sponsor {
  name: string;
  website: string;
  image: string;
}

export const sponsors: Sponsors = {
  top: null,
  premium: [
    {
      name: "Barcelona JUG",
      image: "images/sponsors/bcn-jug.png",
      website: "https://www.meetup.com/barcelonajug/"
    }
  ],
  regular: [
    {
      name: "Adaptive",
      image: "images/sponsors/adaptive.png",
      website: "https://www.weareadaptive.com/"
    }
  ],
  startup: null,
  virtual: [],
  media_partners: [
    {
      name: "Kube events",
      image: "images/sponsors/kube-events.png",
      website: "https://kube.events/"
    },
    {
      name: "Kube careers",
      image: "images/sponsors/kube-career.png",
      website: "https://kube.careers//"
    }
  ]
};
