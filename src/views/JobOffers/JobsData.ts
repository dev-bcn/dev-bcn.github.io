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
    id: "4a399a19-7455-4953-94ce-76f59d40c032",
    name: "GFT",
    description:
      "GFT is a digital transformation pioneer that develops sustainable solutions based on new technologies including artificial intelligence and blockchain/DLT. GFT experts create and implement scalable software applications that make access to innovative business models safe and easy.",
    logo: "images/sponsors/GFT.jpg",
    url: "https://www.gft.com",
    linkedin: "https://www.linkedin.com/company/gft-group/",
    twitter: "https://twitter.com/gft_es",
    offers: [
      {
        id: "9ccccac9-561c-4d3e-ad7d-a7331f88511b",
        title: "Senior DevOps Engineer",
        url: "https://jobs.gft.com/job-invite/111948/",
        location: "Hybrid",
        text:
          "<p>We are looking for an enthusiastic and dynamic person willing to work as a Senior Devops Engineer and interested to be part of an international project. </p>\n" +
          "<p>Your main responsibilities will be:</p>\n" +
          "<ul>" +
          "<li> Standardize, automate and document setup of development, testing and production environments.</li>\n" +
          "<li>Design and drive improvements to the full SDLC process applying best practices.</li>\n" +
          "<li>Maintain rapid deployment pipelines, CD infrastructure monitoring and troubleshooting.</li>\n" +
          "<li>Actively participate in high level team activities such as architecture improvements, process improvements, etc.</li>\n" +
          "<li>Responsible for ensuring service-level agreement requirements are met.</li>\n" +
          "</ul>\n" +
          "<p>Skills will help you to succeed:</p>\n" +
          "<ul>" +
          "<li>Bachelor's Degree in Computer Science, Engineer or related field.</li>\n" +
          "<li>At least B2 level of English, written and spoken.</li>\n" +
          "<li>Automation: Experience of automating software delivery processes using tools like Ansible, -Puppet, Chef, or other similar automation tools.</li>\n" +
          "<li>Continuous Integration and Continuous Delivery (CI/CD)</li>\n" +
          "<li>Cloud Computing: Microsoft Azure, Amazon Web Services (AWS) or Google Cloud Platform (GCP) to deploy and manage applications.</li>\n" +
          "<li>Infrastructure as Code (IaC): Should be familiar with Infrastructure as Code tools like Terraform, or Ansible to automate the process of deploying and managing infrastructure.</li>\n" +
          "<li>Expert using CIS such as Jenkins or Team City.</li>\n" +
          "</ul>",
      },
      {
        id: "92796dbf-db15-487b-a728-939b14ae442c",
        title: "Java Specialist",
        url: "https://jobs.gft.com/job-invite/111946/",
        location: "Hybrid",
        text:
          "<p>We are looking for an enthusiastic and dynamic person willing to work as a Java (Spring and Spring Boot).Your main responsibilities will be:</p>\n" +
          "<ul>" +
          "<li>Participates on the different backend development cycle stages, including UAT and Go Live, at the corresponding level, starting the project from scratch.</li>\n" +
          "<li>Provides support to more junior colleagues as a first reference point when they need help or guidance in a specific area.</li>\n" +
          "<li>Performs project related “on-call” support activities if needed.</li>\n" +
          "<li>Designs activities of software development as assigned by the line manager.</li>\n" +
          "<li>Develops unitary testing scenarios and assumes accountability of unitary testing of their own code</li>\n" +
          "<li>Ensures a thorough understanding of applicable tools and templates for testing and bug tracking used within the project.</li>\n" +
          "<li>Identifies and communicates improvement opportunities.</li>\n" +
          "<li>Builds awareness in all applicable organizational methodologies, tools, templates and policies.</li>\n" +
          "</li>" +
          '<li>Understanding of the ""rules of development"" (Code management, code repository, continuous Integration – CI and code review).</li>\n' +
          "</ul>\n" +
          "<p>Skills will help you to succeed:</p>\n" +
          "<ul>" +
          "<li>Bachelor's Degree in Computer Science, Engineer or related field.</li>\n" +
          "<li>Expert knowledge in Java (Spring and Spring Boot), J2EE and related technologies</li>\n" +
          "<li>Broad experience working on microservices architecture</li>\n" +
          "<li>Experience working with OpenShift</li>\n" +
          "<li>Good understanding of the banking industry</li>\n" +
          "<li>Knowledge in Kafka, Maven or Gradle, Oracle</li>\n" +
          "<li>Agile methodologies</li>\n" +
          "<li>At least B2 level of English</li>\n" +
          "</ul>",
      },
      {
        id: "ac0bbe94-6526-43d8-a655-ed8e19d19203",
        title: "Front End Specialist",
        location: "Hybrid",
        url: "https://jobs.gft.com/job-invite/111978/",
        text:
          "<p>We are looking for an enthusiastic and dynamic person willing to work as a Front End Specialist (mainly React).</p>\n" +
          "<p>Your main responsibilities will be</p>\n" +
          "<ul>" +
          "<li>Development of web applications with the latest versions of the main frameworks and libraries based on requirements and detailed specifications.</li>\n" +
          "<li>Development of web apps from scratch using latest version of forementioned frameworks/libraries.</li>\n" +
          "<li>Understanding and applying common design patterns.</li>\n" +
          "<li>Support the development of prototype versions of software modules and applications.</li>\n" +
          "<li>Report on the progress made in the assigned tasks, achieving defined deadlines.</li>\n" +
          "<li>Identify and communicate opportunities for improvement.</li>\n" +
          "<li>Collaborate on projects based on Agile methodologies.</li>\n" +
          "<li>Testing to ensure code quality.</li>\n" +
          "<li>Performs project related “on-call” support activities if needed.</li>\n" +
          '<li>Understanding of the ""rules of development"" (Code management, code repository, continuous Integration – CI and code review).</li>\n' +
          "</ul>\n" +
          "<p>Skills will help you to succeed:</p>\n" +
          "<ul>" +
          "<li>Bachelor's Degree in Computer Science, Engineer or related field.</li>\n" +
          "<li>Proficiency in HTML, CSS, and JavaScript</li>\n" +
          "<li>Expert Knowledge of React</li>\n" +
          "<li>Experience with state management using state management libraries like Redux, NgRx, or MobX.</li>\n" +
          "<li>Understanding of component-based architecture:</li>\n" +
          "<li>Experience in Unit Testing with Jest, Cypress...</li>\n" +
          "<li>Predisposition towards working with agile methodologies.</li>\n" +
          "<li>Interest in the constant evolution of the Digital IT sector.</li>\n" +
          "<li>Agile methodologies.</li>\n" +
          "<li>At least B2 level of English</li>\n" +
          "</ul>",
      },
    ],
  },
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
          "<p>¿Eres un apasionado de la programación?</p>" +
          "<p>Buscamos a chicos y chicas con ganas de crecer de profesionalmente, con pasión por la programación y las tecnologías\n  para integrarse en nuestro equipo de desarrollo en nuestras oficinas situadas en pleno centro de Madrid ;)</p>\n" +
          "<p>¿Qué\n  te ofrecemos?</p>" +
          "<p>Si disfrutas programando, superando retos y aprendiendo todos los días, entonces te ofrecemos\n  pasarlo muy bien!</p>\n" +
          "<p>Además, formarás parte de un equipo de tecnología altamente motivado, trabajando con\n  metodologías ágiles y diferentes tecnologías, con un alto grado de autonomía y responsabilidad.</p>\n" +
          "<ul>\n  " +
          "<li> Encontrarás el mejor ambiente de trabajo, un entorno informal y multicultural, con una plantilla joven y un\n    equipo altamente cualificado. Aprenderás de los mejores.\n  </li>\n  " +
          "<li> Plan de retribución flexible.</li>" +
          "<li> Formación inicial y continuada.</li>" +
          "</ul>\n" +
          "<p>Requisitos importantes para trabajar con nosotros!</p>\n" +
          "<ul>" +
          "<li> Ganas de aprender y pasión por la programación.\n  " +
          "<li> Experiencia como desarrollador Backend.\n  " +
          "<li> Experiencia en desarrollo en Java.\n  " +
          "<li> Capacidad de análisis y resolución de problemas, autonomía e iniciativa.\n  " +
          "<li> Alta capacidad de aprendizaje técnico y de negocio.\n  " +
          "<li> Trabajar en equipo y compartir conocimientos.\n" +
          "</ul>" +
          "<p>Otras cosas que valoramos muy positivamente.</p>\n" +
          "<ul>" +
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
          "<p>Our employees agree on the 𝗚𝗿𝗲𝗮𝘁 𝗧𝗲𝗮𝗺 and environment we have at 𝗦𝗼𝗽𝗿𝗮 𝗦𝘁𝗲𝗿𝗶𝗮. We are more than 46,000 people working in 25 countries and our mission is to match talent and technology, trying to help you find a place where you can develop your full potential.</p>\n" +
          "\n" +
          "<p><strong>Do you dare to create the future?</strong></p>\n" +
          "\n" +
          "<p>We are looking to expand our team with a professional Full Stack Javascript Engineer. You will be part of a project of software development and continuous improvement, for one of the most important insurance companies in the world.</p>\n" +
          "\n" +
          "<p><strong>Your day-to-day functions will be:</strong></p>\n" +
          "<ul>\n" +
          "<li>Coding in 𝗝𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁, 𝗥𝗲𝗮𝗰𝘁𝗝𝘀 and 𝗡𝗼𝗱𝗲𝗝𝘀, with knowledge of 𝗧𝘆𝗽𝗲𝘀𝗰𝗿𝗶𝗽𝘁 or 𝗩𝘂𝗲𝗝𝘀.</li>\n" +
          "<li>Support in the definition and refinement of requirements.</li>\n" +
          "<li>Participating in the design and creation of scalable software.</li>\n" +
          "<li>Writing clean, functional code on the front- and back-end.</li>\n" +
          "<li>Work using best practices (testing, code reviews, CI/CD...).</li>\n" +
          "<li>Working with Agile methodology.</li>\n" +
          "<li>Contribute to technical and architectural decision-making.</li>\n" +
          "</ul>\n" +
          "<p><strong>Because we know what yo need... we offer:</strong></p>\n" +
          "<ul>\n" +
          "<li>Flexibility for your time - it's not all going to be work!</li>\n" +
          "<li>Possibility of Working from Home.</li>\n" +
          "<li>Participate in challenging projects, do you want to learn something new?</li>\n" +
          "<li>Grow with a personalized continuous development program.</li>\n" +
          "<li>Enjoy our Benefits and Flexible Compensation Plan.</li>\n" +
          "</ul>\n",
      },
    ],
  },
];

export interface CompanyProps {
  company: Company;
}
