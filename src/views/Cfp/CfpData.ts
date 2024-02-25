interface CFpTrack {
  id: string;
  name: string;
  members: CfpMember[];
}

interface CfpMember {
  name: string;
  photo?: string;
  linkedIn?: string;
  twitter?: string;
}

export const data: CFpTrack[] = [
  {
    id: "656fece2-9447-4dbe-8a78-8dc6aa7124f2",
    name: "Java & JVM",
    members: [
      {
        name: "Ana Maria Mihalceanu",
        photo:
          "https://sessionize.com/image/076f-400o400o2-Lawur2AKGny32MmkpG69jQ.JPG",
        twitter: "https://twitter.com/ammbra1508",
        linkedIn: "https://www.linkedin.com/in/ana-maria-mihalceanu-1508",
      },
      {
        name: "David Gomez G.",
        photo:
          "https://sessionize.com/image/0c32-400o400o2-DP6mds9ahD7Qz7P5zWwcjy.jpg",
        twitter: "https://twitter.com/dgomezg",
        linkedIn: "https://www.linkedin.com/in/dgomezg",
      },
      {
        name: "Grace Jansen",
        photo: "images/cfp/grace.png",
        twitter: "https://twitter.com/gracejansen27",
        linkedIn: "https://www.linkedin.com/in/grace-jansen",
      },
      {
        name: "Ixchel Ruiz",
        photo: "images/cfp/ixchel.png",
        twitter: "https://twitter.com/ixchelruiz",
        linkedIn: "https://www.linkedin.com/in/ixchelruiz",
      },
    ],
  },
  {
    name: "Frontend",
    id: "2684b568-2836-4713-99af-643f8a4d7972",
    members: [
      {
        name: "Iago Lastra",
        photo: "images/cfp/iago.png",
        twitter: "https://twitter.com/iagolast",
        linkedIn: "https://www.linkedin.com/in/iagolast/",
      },
      {
        name: "Laura Rodriguez Castillo",
        photo: "images/cfp/laura.jpeg",
        twitter: "https://twitter.com/superpensando",
        linkedIn: "https://linkedin.com/in/laurarodriguezcastillo",
      },
      {
        name: "Carles Nuñez",
        twitter: "https://twitter.com/carlesnunez",
        linkedIn: "https://www.linkedin.com/in/carles-nunez-tomeo/",
        photo: "images/cfp/carles_nunez.jpg",
      },
      {
        name: "Phil Nash",
        linkedIn: "https://www.linkedin.com/in/philnash/",
      },
    ],
  },
  {
    name: "AI, ML, Python",
    id: "c1ec728d-03c1-4d8d-9f56-637bc97f5a5b",
    members: [
      {
        name: "Carmen Herrero",
        linkedIn: "https://www.linkedin.com/in/carherrero/",
      },
      {
        name: "Elena Tajadura",
        photo: "images/cfp/elena_tajadura.jpeg",
        linkedIn:
          "https://www.linkedin.com/in/elena-tajadura-jim%C3%A9nez-9300a943/",
      },
      {
        name: "Javier Menendez",
        linkedIn: "https://www.linkedin.com/in/jamepa/",
      },
    ],
  },
  {
    name: "DevOps, Cloud, Kubernetes",
    id: "504cf03b-130d-4b70-a98c-c4faeb553b5e",
    members: [
      {
        name: "Almudena Vivanco",
        linkedIn: "https://www.linkedin.com/in/almudenavivanco/",
      },
      {
        name: "Ana Carmona",
        photo: "images/cfp/ana_carmona.jpg",
        twitter: "https://twitter.com/nhan_bcn",
        linkedIn:
          "https://www.linkedin.com/in/ana-carmona-ag?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Christian Polanco",
        linkedIn: "https://www.linkedin.com/in/chrsalx/",
      },
      {
        name: "David Ricordel",
        linkedIn: "https://www.linkedin.com/in/davidricordel/",
      },
      {
        name: "Jose Adan Ortiz",
        photo: "images/cfp/jose-adan-ortiz-k8s-2024.JPG",
        twitter: "https://twitter.com/joseadanof",
        linkedIn: "https://www.linkedin.com/in/joseadan/",
      },
      {
        name: "Pablo Chacin",
        photo: "images/cfp/pablo_chacin.jpeg",
        twitter: "https://twitter.com/pablochacin",
        linkedIn: "https://www.linkedin.com/in/pablochacin/",
      },
      {
        name: "Rael Garcia",
        linkedIn: "https://www.linkedin.com/in/rael/",
      },
      {
        name: "Imma Valls",
        photo: "imma-valls.jpg",
        twitter: "https://twitter.com/eyeveebee",
        linkedIn: "https://www.linkedin.com/in/imma-valls",
      },
    ],
  },
  {
    name: "Agile, Leadership, Diversity",
    id: "1d04d5bf-4b94-4e56-b0c6-ee93b3bb8c1f",
    members: [
      {
        name: "Elena Navarro",
        linkedIn: "https://www.linkedin.com/in/elena-navarro-molina",
      },
      {
        name: "Jaume Jornet",
        linkedIn: "https://www.linkedin.com/in/jaumejornet/",
      },
      {
        name: "Julio César Pérez",
        photo: "images/cfp/julio_cesar.jpg",
        linkedIn: "https://www.linkedin.com/in/juliocesarperezarques/",
        twitter: "https://twitter.com/jcesarperez",
      },
      {
        name: "Toni Tassani",
        photo: "images/cfp/toni.jpg",
        twitter: "https://twitter.com/atassani",
        linkedIn: "https://www.linkedin.com/in/tonitassani/en",
      },
    ],
  },
];

export interface CfpTrackProps {
  track: CFpTrack;
}
