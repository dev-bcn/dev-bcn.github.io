interface CFpTrack {
  id: string;
  name: string;
  members: CfpMember[];
}

interface CfpMember {
  name: string;
  photo: string;
  linkedIn: string;
  twitter: string;
}

export const data: CFpTrack[] = [
  {
    id: "656fece2-9447-4dbe-8a78-8dc6aa7124f2",
    name: "Java & JVM",
    members: [
      {
        name: "Alex Soto",
        photo:
          "https://cache.sessionize.com/image/fd7e-400o400o2-11-34e0-466e-a5cb-ea585688d106.4f3f7614-bc5e-4ccd-935a-1c3659eec5e8.jpg",
        twitter: "https://twitter.com/alexsotob",
        linkedIn: "https://www.linkedin.com/in/asotobu/",
      },
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
    name: "Native Languages",
    id: "1c22cd3b-73e3-4161-9124-696f3e2f1249",
    members: [
      {
        name: "Aliénor Latour",
        twitter: "",
        photo: "images/cfp/alienor.jpg",
        linkedIn: "https://www.linkedin.com/in/alienor-latour/",
      },
      {
        name: "Donia Chaiehloudj",
        twitter: "https://twitter.com/doniacld",
        photo:
          "https://pbs.twimg.com/profile_images/1590642319589609472/zObYSeID_400x400.jpg",
        linkedIn: "https://www.linkedin.com/in/donia-chaiehloudj",
      },
      {
        name: "Gonzalo Serrano",
        twitter: "https://twitter.com/gonzaloserrano",
        photo: "images/cfp/gonzalo.jpg",
        linkedIn: "https://www.linkedin.com/in/gonzaloserranorevuelta/",
      },
      {
        name: "Mario Macías",
        twitter: "https://twitter.com/MaciasUPC",
        photo: "images/cfp/mario-macias.png",
        linkedIn: "https://www.linkedin.com/in/mariomac/",
      },
      {
        name: "Mario Vázquez",
        twitter: "https://twitter.com/mvazce",
        photo:
          "https://pbs.twimg.com/profile_images/988297919009841152/h4eKlvUM_400x400.jpg",
        linkedIn: "https://www.linkedin.com/in/mariovazquezcebrian/",
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
        name: "Josue David Rios Diaz",
        photo:
          "https://pbs.twimg.com/profile_images/951236352049385472/6rRKHJsE_400x400.jpg",
        twitter: "https://twitter.com/jdriosdiaz",
        linkedIn: "https://www.linkedin.com/in/jdriosd/",
      },
      {
        name: "Laura Rodriguez Castillo",
        photo: "images/cfp/laura.jpeg",
        twitter: "https://twitter.com/superpensando",
        linkedIn: "https://linkedin.com/in/laurarodriguezcastillo",
      },
    ],
  },
  {
    name: "AI, ML, Python",
    id: "c1ec728d-03c1-4d8d-9f56-637bc97f5a5b",
    members: [
      {
        name: "Alberto Camara",
        photo: "images/cfp/alberto.jpg",
        twitter: "https://twitter.com/b3r2s",
        linkedIn: "https://www.linkedin.com/in/alberto-camara/",
      },
      {
        name: "Carmen Herrero",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Gema Parreño",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Rubén Berenguel",
        photo:
          "https://pbs.twimg.com/profile_images/1393898544600342528/hghgDpMM_400x400.jpg",
        twitter: "https://twitter.com/berenguel",
        linkedIn: "https://www.linkedin.com/in/rberenguel/",
      },
    ],
  },
  {
    name: "DevOps, Cloud, Kubernetes",
    id: "504cf03b-130d-4b70-a98c-c4faeb553b5e",
    members: [
      {
        name: "Ara Pulido",
        photo: "images/cfp/ara.png",
        twitter: "https://twitter.com/arapulido",
        linkedIn: "https://www.linkedin.com/in/arapulido/",
      },
      {
        name: "Mario Macías",
        twitter: "https://twitter.com/MaciasUPC",
        photo: "images/cfp/mario-macias.png",
        linkedIn: "https://www.linkedin.com/in/mariomac/",
      },
      {
        name: "Mario Vázquez",
        twitter: "https://twitter.com/mvazce",
        photo:
          "https://pbs.twimg.com/profile_images/988297919009841152/h4eKlvUM_400x400.jpg",
        linkedIn: "https://www.linkedin.com/in/mariovazquezcebrian/",
      },
      {
        name: "Raquel Pau Fernández",
        photo:
          "https://pbs.twimg.com/profile_images/1253338486200909828/uBuKfSsj_400x400.jpg",
        twitter: "https://twitter.com/raquelpau",
        linkedIn: "https://www.linkedin.com/in/raquel-pau-4010069",
      },
    ],
  },
  {
    name: "Agile, Leadership, Diversity",
    id: "1d04d5bf-4b94-4e56-b0c6-ee93b3bb8c1f",
    members: [
      {
        name: "Celeste Gamez",
        photo: "images/cfp/celeste.png",
        twitter: "https://images.app.goo.gl/39E8eisV8TiULPQk8",
        linkedIn: "https://www.linkedin.com/in/celeste-g%C3%A1mez-73640460/",
      },
      {
        name: "Esther Gala",
        photo: "images/cfp/esther.png",
        twitter: "",
        linkedIn: "https://www.linkedin.com/in/esthergala/",
      },
      {
        name: "María Mira Herreros",
        photo: "images/cfp/maria.png",
        twitter: "",
        linkedIn: "https://www.linkedin.com/in/miramaria",
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
