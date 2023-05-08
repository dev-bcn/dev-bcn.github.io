export interface Company {
  id: string;
  name: string;
  url: string;
  logo: string;
  description: string;
  twitter?: string;
  linkedin?: string;
  offers: Offer[];
}

export interface Offer {
  id: string;
  title: string;
  location: string;
  text: string;
  url: string;
}

export const jobsAdevintaData: Offer[] = [
  {
    id: "29846929-4c05-40e5-9959-316bcf9ae11e",
    title: "SENIOR BACKEND ENGINEER FOTOCASA",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  },
  {
    id: "ac55445f-ab05-4776-9355-ec6ef5804ccc",
    title: "SENIOR BACKEND ENGINEER",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  },
  {
    id: "d678aa7a-238f-4664-bdb9-2f019e4b2a39",
    title: "SENIOR BACKEND ENGINEER FOTOCASA",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  },
  {
    id: "d41384ac-56c2-4423-bbd3-15bd3a7bcf97",
    title: "SENIOR BACKEND ENGINEER",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  }
];

export const jobsMangoData: Offer[] = [
  {
    id: "e113f602-7b85-4c62-9d33-46542106cfdd",
    title: "TECHNICAL LEAD",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  },
  {
    id: "2d4baa9d-0ac9-4791-8239-060631a82828",
    title: "FULL STACK SENIOR DEVELOPER",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  }
];

export const jobsWordlineData: Offer[] = [
  {
    id: "4cf35458-0b10-4572-b56c-782381ac4060",
    title: "PRINCIPAL SOFTWARE ENGINEER",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  },
  {
    id: "0b913b11-6bd4-4af0-8a73-c6414e2165d9",
    title: "DISTINGUISHED SOFTWARE ENGINEER",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  },
  {
    id: "39733dee-aa73-4fd0-9584-51789f21b308",
    title: "PRINCIPAL SOFTWARE ENGINEER",
    location: "Barcelona, Spain",
    url: "",
    text: "The Storage team manages a vast number of Apache Kafka clusters for our marketplaces around the world. As part of the Data Highway area we play a key role in Adevinta’s Data Strategy. The data we collect is essential to our business as it feeds marketplaces with low-latency (“realtime”) updates, visitor insights analysis and targeted advertisement."
  }
];

export const jobOffers: Company[] = [
  {
    id: "9b68e783-12c0-4c23-bffc-96d2c65cdcdb",
    name: "Idealista",
    logo: "images/sponsors/idealista.jpg",
    description:
      "Idealista is the main meeting point for all those people who are looking for a home (or premises, building, the list goes on...) either to buy or to rent, and for those who sell or rent out these properties.",
    url: "https://www.idealista.com/info/trabaja-con-nosotros",
    linkedin: "https://www.linkedin.com/company/idealista-com/",
    twitter: "@idealista",
    offers: [
      {
        id: "e31a1eb2-46e9-4214-9b17-387398d122ac",
        title: "Backend Developer ",
        url: "https://www.linkedin.com/jobs/view/3566480528",
        location: "Full remote",
        text:
          "<p>¿Eres un apasionado de la programación?</p>\n" +
          "<p>Buscamos a chicos y chicas con ganas de crecer de profesionalmente, con pasión por la programación y las tecnologías\n  para integrarse en nuestro equipo de desarrollo en nuestras oficinas situadas en pleno centro de Madrid ;)</p>\n" +
          "<p>¿Qué\n  te ofrecemos?</p>\n" +
          "<p>Si disfrutas programando, superando retos y aprendiendo todos los días, entonces te ofrecemos\n  pasarlo muy bien!</p>\n" +
          "<p>Además, formarás parte de un equipo de tecnología altamente motivado, trabajando con\n  metodologías ágiles y diferentes tecnologías, con un alto grado de autonomía y responsabilidad.</p>\n" +
          "<ul>\n  " +
          "<li> Encontrarás el mejor ambiente de trabajo, un entorno informal y multicultural, con una plantilla joven y un\n    equipo altamente cualificado. Aprenderás de los mejores.\n  </li>\n  " +
          "<li> Plan de retribución flexible.</li>\n  " +
          "<li> Formación inicial y continuada.</li>\n" +
          "</ul>\n" +
          "<p>Requisitos importantes para trabajar con nosotros!</p>\n" +
          "<ul>\n  " +
          "<li> Ganas de aprender y pasión por la programación.\n  " +
          "<li> Experiencia como desarrollador Backend.\n  " +
          "<li> Experiencia en desarrollo en Java.\n  " +
          "<li> Capacidad de análisis y resolución de problemas, autonomía e iniciativa.\n  " +
          "<li> Alta capacidad de aprendizaje técnico y de negocio.\n  " +
          "<li> Trabajar en equipo y compartir conocimientos.\n" +
          "</ul>" +
          "<p>Otras cosas que valoramos muy positivamente.</p>\n" +
          "<ul>\n  " +
          "<li> Experiencia en desarrollo para CRMs o ERPs internos o externos</li>\n  " +
          "<li> Experiencia en análisis/mantenimiento/desarrollo de aplicaciones internas.</li>\n  " +
          "<li> Experiencia con Spring framework</li>\n" +
          "</ul>\n" +
          "<p>¿Te reconoces? ¡Acepta el reto!</p>\n" +
          "<p>Te estamos esperando</p>"
      }
    ]
  }
];
