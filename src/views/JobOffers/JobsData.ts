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
      {
        id: "22bd4bd6-ad6a-4bce-a733-7c4ac812af58",
        title: "Big Data Engineer",
        location: "Hybrid",
        url: "https://jobs.gft.com/job-invite/10463/",
        text:
          "<p>Buscamos Big Data Engineers que quieran desarrollar su carrera profesional en el sector TI. ¿Quieres unirte a nuestro equipo de GFT?</p>\n" +
          "<p>Tus principales responsabilidades serán:</p>\n" +
          "<p>Aunque dependerán de tu perfil y experiencia aportada, en general las principales funciones que llevarás a cabo con nosotros serán:</p>\n" +
          "<ul>\n" +
          "<li>Diseñar, desarrollar y testear soluciones data alineadas con las necesidades de negocio.</li>\n" +
          "<li>Investigar nuevas tecnologías y algoritmos de los que desarrollarás prototipos y PoC </li>\n" +
          "<li>Trabajar junto a Data Scientists, Software Architects y Developers.</li>\n" +
          "<li>Desarrollar herramientas analíticas y programas.</li>\n" +
          "<li>Desarrollar y procesar sistemas de datos.</li>\n" +
          "<li>Desarrollar algoritmos y prototipos.</li>\n" +
          "</ul>\n" +
          "<p>Requisitos deseados:</p>\n" +
          "<ul>" +
          "<li>Licenciatura o Grado en Ingeniería de Software o similares.</li>\n" +
          "<li>Experiencia previa de 2/3 años de experiencia en proyectos Big Data con con Hadoop,  Scala, Spark, Cassandra, Impala, Hive, spark streaming, kafka, flume, apache Nifi, etc.</li>\n" +
          "<li>Elastic y Kibana para la visualización y monitorización.</li>\n" +
          "<li>Experiencia en desarrollo de software, analisis y diseño de arquitecturas.</li>\n" +
          "<li>Experiencia en modelado y manipulación de datos.</li>\n" +
          "</ul>\n" +
          "<p>Requisito valorable: </p>\n" +
          "<ul>" +
          "<li>Conocimiento de soluciones No-SQL (HBase, Elastic, Cassandra, MongoDB); Conocimientos de soluciones data basadas en cloud (GCP, AWS, IBM Watson, Azure...); Comprensión de algoritmos de machine learning.</li>\n" +
          "<li>Conocimiento en transformación de datos o ETL.</li>\n" +
          "</ul>",
      },
      {
        id: "83907cfc-028d-4485-b2c5-fecf1516effd",
        title: "API Architect",
        url: "",
        location: "Hybrid",
        text:
          "<p>We are looking for an enthusiastic and dynamic API Architect.</p>\n" +
          "<p>Your main responsibilities will be:</p>\n" +
          "<ul>\n" +
          "<li>Solution design and technology stack selection.</li>\n" +
          "<li>Solution development and technical team supervision.</li>\n" +
          "<li>Analyze and document the enterprise and technology environment.</li>\n" +
          "<li>Software architecture design and guidance.</li>\n" +
          "<li>Enterprise architecture and integration patterns.</li>\n" +
          "<li>Data architecture, API design and implementation.</li>\n" +
          "</ul>\n" +
          "<p>Skills will help you succeed:</p>\n" +
          "<ul>" +
          "<li>Computer Science diploma, 6+ years of relevant work experience </li>\n" +
          "<li>Experience designing and developing web applications using Apigee and Java/J2EE Technologies.</li>\n" +
          "<li>Experience designing and building business/technical services for the financial sector and supporting them in production environments</li>\n" +
          "<li>Experience designing relational data models and building microservices</li>\n" +
          "<li>Deep understanding of modern software development lifecycles, versioning, and deployment</li>\n" +
          "<li>REST design principles, Spring Framework architecture and extensibility points</li>\n" +
          "<li>Fluency in English (at least B2 level</li>)" +
          "</ul>",
      },
      {
        id: "6bda67ef-4b8f-476b-bb21-2f7a87e0d670",
        location: "Hybrid",
        title: "Google Cloud Platform Engineer",
        url: "https://jobs.gft.com/job-invite/99121/",
        text:
          "<p>Actualmente tenemos un puesto vacante para un/a Google Cloud Platform (GCP) Engineer que quiera unirse a GFT en nuestros proyectos internacionales. </p>\n" +
          "<p>Tus principales responsabilidades serán:</p>\n" +
          "<ul>\n" +
          "<li>Comprender las necesidades del cliente y trabajar en estrecha colaboración con los equipos correspondientes para garantizar que la solución en la nube desarrollada esté alineada con las necesidades y la Propuesta de Valor de GFT.</li>\n" +
          "<li>Desarrollar y organizar sistemas en la nube. </li>\n" +
          "<li>Crear una estrategia para la nube y gestionar el proceso de adopción.</li>\n" +
          "<li>Reconocer, identificar y documentar áreas potenciales donde los procesos comerciales existentes requieren cambios, o donde se necesitan desarrollar nuevos procesos, y hacer recomendaciones.</li>\n" +
          "<li>Asegurar la capacidad de GFT para implementar y entregar la solución diseñada trabajando en estrecha colaboración con las unidades de entrega designadas. </li>\n" +
          "<li>Identificar, evaluar y minimizar el riesgo asociado con la privacidad en la nube de la empresa</li>\n" +
          "</ul>\n" +
          "<p>Requisitos:</p>\n" +
          "<ul>" +
          "<li>Excelente conocimiento de los distintos entornos Cloud, especialmente GCP.</li>\n" +
          "<li>Experiencia en migración de máquinas virtuales de sistemas on premise a nube.</li>\n" +
          "<li>Conocimiento de herramientas DevOps.</li>\n" +
          "<li>Conocimiento de utilización de herramientas automáticas de migración (por ejemplo Velostrata).</li>\n" +
          "<li>Nivel de inglés alto </li>\n" +
          "</ul>",
      },
      {
        id: "72a02498-9417-475d-97e0-59f3a82a56b3",
        location: "Hybrid",
        title: "Desarrollador/a Java Microservicios",
        url: "https://jobs.gft.com/job-invite/2121/",
        text:
          "<p>Actualmente tenemos un puesto vacante para un/a Desarrollador/a Senior Java con Microservicios que quiera desarollar su carrera en GFT.  </p>\n" +
          "<p>Tus principales responsabilidades son:</p>\n" +
          " <ul>\n" +
          "<li>Analizar y programar tanto sobre código existente como desde cero, y realizar el mantenimiento de módulos de software de complejidad media, trabajando a partir de requisitos y especificaciones detallados de forma oral y escrita.</li>\n" +
          "<li>Realizar revisiones de código de otros desarrolladores y proporcionar puntos de mejora.</li>\n" +
          "<li>Dar soporte a los perfiles más junior actuando como punto de referencia cuando necesiten ayuda o soporte en temas específicos.</li>\n" +
          "<li>Ayudar en el desarrollo de prototipos de módulos de software y aplicaciones.</li>\n" +
          "<li>Desarrollar tests unitarios y asumir la responsabilidad sobre el test unitario del código propio </li>\n" +
          "<li>Consolidar el conocimiento de todas las herramientas y plantillas de testing y bug tracking empleadas dentro del proyecto.</li>\n" +
          "<li>Participar en distintas fases del ciclo de desarrollo.</li>\n" +
          "</ul>\n" +
          "<p>Requisitos deseados:</p>\n" +
          "<ul>" +
          "<li>Graduado en Ingeniería informática (o equivalente).</li>\n" +
          "<li>Graduado en Formación Profesional Superior o Medio en Informática.</li>\n" +
          "<li>Experiencia en arquitectura de Microservivios.</li>\n" +
          "<li>Valorable experiencia con Springboot y Apis.</li>\n" +
          "</ul>\n",
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
  {
    id: "d7235281-9424-4d15-b7a3-fba26d4178dc",
    name: "King",
    description:
      "King is a leading interactive entertainment company for the mobile gaming world.",
    twitter: "https://twitter.com/king_games?lang=en",
    linkedin: "https://www.linkedin.com/company/king/",
    url: "https://careers.king.com/",
    logo: "images/sponsors/king.png",
    offers: [
      {
        id: "47778f29-27b7-4783-a5d9-5d1faa2e1ab7",
        url: "https://careers.king.com/jobs/job/r020701-cplusplus-tools-engineer/",
        location: "Hybrid",
        title: "C++ Tools Engineer",
        text:
          "<p>We are looking for an experienced Game Engine Tools Engineer to join our custom cross platform mobile game engine team. Our engine and toolchain is used by hundreds of developers inside of King and is used to deliver some of the biggest games in the world. Our team is made up of 45 dedicated people, and we are now looking to grow by adding experienced engineers with great customer centric approaches.\n" +
          "\n" +
          "<p>Your role within our Kingdom</p>\n" +
          "<ul>\n" +
          "<li>Our engine team needs an expert Game Engine Tools Engineer to work on improving and maintaining our cross platform mobile engine, editor and tool chain. You will be responsible for developing and refining new and existing features on behalf of our dozens of live production game teams.</li>\n" +
          "\n" +
          "<li>Understanding of the challenges faced by artists, coders and designers, and create the technology that helps them to continuously deliver their projects.</li>\n" +
          "\n" +
          "<li>You should have great interpersonal skills, as you wilxl work closely with Product Managers, QA Specialists, UI/UX Designers and other crafts to create the best possible products.</li>\n" +
          "\n" +
          "<li>Self- driving attitude combined with passion for improving users workflows and solving difficult challenges are key skills for this role.</li></ul></p>",
      },
    ],
  },
];

export interface CompanyProps {
  company: Company;
}
