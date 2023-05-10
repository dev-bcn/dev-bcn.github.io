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

export const jobOffers: Company[] = [
  {
    id: "9b68e783-12c0-4c23-bffc-96d2c65cdcdb",
    name: "Idealista",
    logo: "images/sponsors/idealista.jpg",
    description:
      "Idealista is the main meeting point for all those people who are looking for a home (or premises, building, the list goes on...) either to buy or to rent, and for those who sell or rent out these properties.",
    url: "https://www.idealista.com/info/trabaja-con-nosotros",
    linkedin: "https://www.linkedin.com/company/idealista-com/",
    twitter: "https://www.linkedin.com/idealista",
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
          "<p>Te estamos esperando</p>",
      },
    ],
  },
];
