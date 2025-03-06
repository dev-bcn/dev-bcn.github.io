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
    name: "Java & JVM",
    id: "656fece2-9447-4dbe-8a78-8dc6aa7124f2",
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
        photo: "/images/cfp/grace.png",
        twitter: "https://twitter.com/gracejansen27",
        linkedIn: "https://www.linkedin.com/in/grace-jansen",
      },
      {
        name: "Ixchel Ruiz",
        photo: "/images/cfp/ixchel.png",
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
        name: "Carles Nuñez",
        twitter: "https://twitter.com/carlesnunez",
        linkedIn: "https://www.linkedin.com/in/carles-nunez-tomeo/",
        photo: "/images/cfp/carles_nunez.jpg",
      },
      {
        name: "Iago Lastra",
        photo: "/images/cfp/iago.png",
        twitter: "https://twitter.com/iagolast",
        linkedIn: "https://www.linkedin.com/in/iagolast/",
      },
      {
        name: "Montse Ortega",
        linkedIn: "https://www.linkedin.com/in/montse-ortega-73061369",
        photo: "/images/cfp/montse.jpg",
      },
    ],
  },
  {
    name: "AI, ML, Python",
    id: "c1ec728d-03c1-4d8d-9f56-637bc97f5a5b",
    members: [
      {
        name: "Lize Raes",
        photo: "/images/cfp/lize-raes.jpg",
        linkedIn: "https://www.linkedin.com/in/lize-raes-a8a34110/",
        twitter: "https://x.com/LizeRaes",
      },
      {
        name: "Marie-Alice Blete",
        photo: "/images/cfp/marie-alice-blete.png",
        linkedIn: "https://www.linkedin.com/in/mblete/",
      },
      {
        name: "Nicolas Grenié",
        photo: "/images/cfp/nicolas-grenie.png",
        linkedIn: "https://www.linkedin.com/in/nicolasgrenie/",
      },
      {
        name: "Santiago Rincón Martínez",
        linkedIn: "https://www.linkedin.com/in/santiago-rincon-martinez",
        photo: "/images/cfp/santiago-rincon.jpg",
      },
    ],
  },
  {
    name: "DevOps, Cloud, Kubernetes",
    id: "504cf03b-130d-4b70-a98c-c4faeb553b5e",
    members: [
      {
        name: "Ana Carmona",
        photo: "/images/cfp/ana_carmona.jpg",
        twitter: "https://twitter.com/nhan_bcn",
        linkedIn:
          "https://www.linkedin.com/in/ana-carmona-ag?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Rael Garcia",
        photo: "/images/cfp/rael-garcia.png",
        linkedIn: "https://www.linkedin.com/in/rael/",
      },
      {
        name: "Tiffany Jernigan",
        linkedIn: "https://www.linkedin.com/in/tiffanyfayj/",
        photo: "/images/cfp/tiffany-jernigan.png",
      },
      {
        name: "Abdel Sghiouar",
        twitter: "https://twitter.com/boredabdel",
        linkedIn: "https://www.linkedin.com/in/sabdelfettah/",
        photo: "/images/cfp/adbel-sghiouar.jpg",
      },
    ],
  },
  {
    name: "Agile, Leadership, Diversity",
    id: "1d04d5bf-4b94-4e56-b0c6-ee93b3bb8c1f",
    members: [
      {
        name: "Angels Gilabert",
        linkedIn: "https://www.linkedin.com/in/angelsgilabertviciana/",
        photo: "/images/cfp/angels-gilabert.jpg",
      },
      {
        name: "Julio César Pérez",
        photo: "/images/cfp/julio_cesar.jpg",
        linkedIn: "https://www.linkedin.com/in/juliocesarperezarques/",
        twitter: "https://twitter.com/jcesarperez",
      },
      {
        name: "Raquel Dominguez Andujar",
        photo: "/images/cfp/raquel-andujar.jpg",
        linkedIn: "https://www.linkedin.com/in/raqueldominguezandujar/",
      },
      {
        name: "Toni Tassani",
        photo: "/images/cfp/toni.jpg",
        twitter: "https://twitter.com/atassani",
        linkedIn: "https://www.linkedin.com/in/tonitassani/en",
      },
    ],
  },
];

export interface CfpTrackProps {
    track: CFpTrack;
}
