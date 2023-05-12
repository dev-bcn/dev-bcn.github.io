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
  {
    id: "bf3871fa-9423-4370-8b12-e8e5112fec24",
    logo: "images/sponsors/sopra.jpg",
    url: "https://www.soprasteria.com",
    name: "Sopra Steria",
    description:
      "We are a European leader in digital transformation, providing one of the most comprehensive portfolios of end-to-end service offerings on the market: Consulting, Systems Integration, Software Development, Infrastructure Management and Business Process Services.",
    linkedin: "https://www.linkedin.com/company/soprasteria",
    offers: [
      {
        id: "939d0ff8-2ecf-41a9-abff-81349f3b7d5c",
        title: "Full Stack Javascript Engineer",
        location: "Full remote",
        url: "https://www.soprasteria.com/",
        text:
          '"<p>Our employees agree on the 𝗚𝗿𝗲𝗮𝘁 𝗧𝗲𝗮𝗺 and environment we have at 𝗦𝗼𝗽𝗿𝗮 𝗦𝘁𝗲𝗿𝗶𝗮. We are more than 46,000 people working in 25 countries and our mission is to match talent and technology, trying to help you find a place where you can develop your full potential.</p>\n' +
          "\n" +
          "<p><strong>𝗗𝗼 𝘆𝗼𝘂 𝗱𝗮𝗿𝗲 𝘁𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 𝘁𝗵𝗲 𝗳𝘂𝘁𝘂𝗿𝗲?</strong></p>\n" +
          "\n" +
          "<p>We are looking to expand our team with a professional 𝗙𝘂𝗹𝗹 𝗦𝘁𝗮𝗰𝗸 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿. You will be part of a project of software development and continuous improvement, for one of the most important insurance companies in the world.</p>\n" +
          "\n" +
          "<p>𝗬𝗼𝘂𝗿 𝗱𝗮𝘆-𝘁𝗼-𝗱𝗮𝘆 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲:</p>\n" +
          "<ul>\n" +
          "<li>Coding in 𝗝𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁, 𝗥𝗲𝗮𝗰𝘁𝗝𝘀 and 𝗡𝗼𝗱𝗲𝗝𝘀, with knowledge of 𝗧𝘆𝗽𝗲𝘀𝗰𝗿𝗶𝗽𝘁 or 𝗩𝘂𝗲𝗝𝘀.</li>\n" +
          "<li>Support in the definition and refinement of requirements.</li>\n" +
          "<li>Participating in the design and creation of scalable software.</li>\n" +
          "<li>Writing clean, functional code on the front- and back-end.</li>\n" +
          "<li>Work using best practices (testing, code reviews, CI/CD...).</li>\n" +
          "<li>Working with Agile methodology.</li>\n" +
          "<li>Contribute to technical and architectural decision-making.</li>\n" +
          "</ul>\n" +
          "<p>𝗕𝗲𝗰𝗮𝘂𝘀𝗲 𝘄𝗲 𝗸𝗻𝗼𝘄 𝘄𝗵𝗮𝘁 𝘆𝗼𝘂 𝗻𝗲𝗲𝗱 ... 𝗪𝗲 𝗼𝗳𝗳𝗲𝗿:</p>\n" +
          "<ul>\n" +
          "<li>Flexibility for your time - it's not all going to be work!</li>\n" +
          "<li>Possibility of Working from Home.</li>\n" +
          "<li>Participate in challenging projects, do you want to learn something new?</li>\n" +
          "<li>Grow with a personalized continuous development program.</li>\n" +
          "<li>Enjoy our Benefits and Flexible Compensation Plan.</li>\n" +
          "</ul>\n" +
          '"',
      },
    ],
  },
];

export interface CompanyProps {
  company: Company;
}
