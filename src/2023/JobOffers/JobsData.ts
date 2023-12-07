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
    name: "GFT",
    id: "4a399a19-7455-4953-94ce-76f59d40c032",
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
    name: "Idealista",
    id: "9b68e783-12c0-4c23-bffc-96d2c65cdcdb",
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
    name: "Sopra Steria",
    id: "bf3871fa-9423-4370-8b12-e8e5112fec24",
    logo: "images/sponsors/sopra.jpg",
    url: "https://www.soprasteria.com",
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
    name: "King",
    id: "d7235281-9424-4d15-b7a3-fba26d4178dc",
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
  {
    name: "Allianz Technology",
    id: "2dcb4f7e-94e3-402e-b56f-0b9f67a4d319",
    description:
      "With its headquarters in Munich and more than 11,000 employees\n" +
      "around the world, Allianz Technology supports Allianz Group in\n" +
      "boosting its leading market position. We realize synergies and cultivate\n" +
      "innovation.\n" +
      "As the IT provider of the Allianz Group, Allianz Technology is tasked to\n" +
      "run optimize, transform and innovate infrastructure, applications and\n" +
      "services together with Allianz companies to co-create the best\n" +
      "customer experience.",
    url: "https://tech.allianz.com/en.html",
    linkedin: "https://www.linkedin.com/company/allianz-technology/",
    logo: "images/sponsors/allianz.png",
    offers: [
      {
        id: "1a281437-fcb3-4e8a-bc87-eae711f4a95b",
        title: "Frontend/ Fullstack Developer",
        location: "Barcelona",
        text:
          "<p>Are you thinking of next steps in your career path? You deserve a\n" +
          "company that really cares about its talent. At Allianz, we are looking for\n" +
          "a SW Developer Fullstack to be part of our team. Allianz Technology is\n" +
          "the internal and unique IT provider of the Allianz Group.\n" +
          "The ideal candidate will prefer the excitement of shaping the\n" +
          "technology evolution over following the beaten path and regards highly\n" +
          "qualified colleagues not as competition, but as a learning opportunity.</p>\n" +
          "\n" +
          "<p>" +
          " As a SW Developer Fullstack, you will be creating reusable UI\n" +
          "components according to predefined UX design and interacting\n" +
          "with APIs to obtain and update data.\n" +
          " Technologies you will use are: Java 11, Spring Boot, REST,\n" +
          "Angular, GitHub, Kubernetes, Jenkins, JUnit and SonarQube.\n" +
          "</p>\n" +
          "<strong>Your skills</strong><ul>\n" +
          "<li> University degree in Computer Science, Software Engineering or\n" +
          "equivalent</li>\n" +
          "<li> 2+ years of software development experience</li>\n" +
          "<li> 2+ years of experience with Angular 2+, NodeJS &amp; MySQL</li>\n" +
          "<li> 2+ years of experience with Java 8+</li>\n" +
          "<li> Experience with Scrum or other agile methodologies</li>\n" +
          "<li> Experience with Cloud (Azure/AWS) environments, developing in\n" +
          "the Cloud on ADP or CRP</li>\n" +
          "<li> Self-motivated and able to work efficiently through ambiguity\n" +
          "without close supervision</li>\n" +
          "<li> Proficiency in English (B2+)</li>\n" +
          "<li> Eagerness to keep learning</li>\n" +
          "<li> Must demonstrate good judgment and pragmatic approach to\n" +
          "delivering software</li>\n" +
          "<li> Understanding of enterprise software design patterns and data\n" +
          "structures\n" +
          "\n" +
          "Internal\n" +
          "\n" +
          "<li> Understanding on coding guidelines and standards</li>\n" +
          "<li> Nice to have: NDBX (Expert) library, Jira and Confluence,\n" +
          "experience with ABS</li>\n" +
          "\n" +
          "</ul><strong>Your benefits:</strong><ul>\n" +
          "<li> Steady job, you&#39;ll get a permanent contract since the first day.</li>\n" +
          "<li> Competitive salary.</li>\n" +
          "<li> Fringe benefits: meal and supplies compensation, life and\n" +
          "accident insurance, private pension plan and studies fund. We\n" +
          "also offer discounts on other products from the company and\n" +
          "shares as well as a Christmas gift card among others. Dare to\n" +
          "discover a world of benefits!</li>\n" +
          "<li> Actual work-life balance policies: entry-leave flexibility of 2 hours\n" +
          "every day, reduced schedule on Fridays and during the summer,\n" +
          "26 holiday days per year, recoverable working hours, as well as,\n" +
          "hybrid workplace model.</li>\n" +
          "<li> Career development: Digital learning platforms, mentoring\n" +
          "programs and training sessions give employees the opportunity\n" +
          "for personal and professional development.</li>\n" +
          "<li> Relocation Service for international transfers.</li>\n" +
          "<li> Open and international working environment.</li></ul>",
        url: "Frontend/ Fullstack Developer",
      },
    ],
  },
  {
    name: "Alten",
    id: "31c93b3f-f534-4a5f-9684-e9a0c388e636",
    url: "https://www.alten.es/",
    logo: "images/sponsors/alten.png",
    linkedin: "https://www.linkedin.com/company/alten-spain/mycompany/",
    description:
      "ALTEN is a multinational company that has positioned itself among the first consulting companies providing global experiences, important partners and quality in its ideas, responses and teams.",
    offers: [
      {
        id: "ba12fbbe-d337-4bc8-bd80-b0e34d231aed",
        title: "Senior Java/Javascript Architect",
        location: "Full remote",
        text:
          "<p>At ALTEN we are building, today, the world of tomorrow and we need someone to contribute to this goal. </p>\n" +
          "How?<ul>\n" +
          "<li>Defining the technological strategy of an area.</li>\n" +
          "<li>Leading the definition of technical architectures.</li>\n" +
          "<li>Providing technical knowledge to the teams.</li>\n" +
          "<li>Managing a change in process culture at a technical level.</li>\n" +
          "<li>Energizing team activities to promote communication and knowledge sharing.</li>\n" +
          "</ul>\n" +
          "What will your responsibilities be as a leader?<ul>\n" +
          "<li> You will be the technical manager of a web development area</li>\n" +
          "<li> You will define the development methodology and the technical ecosystem (continuous integration, code management, etc.)</li>\n" +
          "<li> You will define the technological strategy together with the global technical manager</li>\n" +
          "<li> You will mentor the technical team and technical architects</li>\n" +
          "<li> You will be responsible for defining the team's training strategy</li>\n" +
          "<li> And, if you wish, you can contribute to the company from other points of view, for example:</li>\n" +
          "<li> Publishing or coordinating technical publications on our blog</li>\n" +
          "<li> Giving training to technical teams</li>\n" +
          "<li> Making talks in forums and fairs</li>\n" +
          "<li> Accompanying the business teams to make pre-sales in the most technical opportunities</li>\n" +
          "</ul>\n" +
          "This is what we expect from you<ul>\n" +
          "<li> Knowledge of Java and any Front Javascript technology.</li>\n" +
          "<li> Experience setting up architectures based on microservices.</li>\n" +
          "<li> That you have worked with Cloud services.</li>\n" +
          "<li> Experience setting up a CD / CI system.</li>\n" +
          "</ul>\n" +
          "<p>If you are the leader we are looking for, we will be glad to welcome you on board!</p>",
        url: "https://www.alten.es/career/5169-senior-java-javascript-architect-teletrabajo/",
      },
    ],
  },
  {
    name: "Gradle",
    id: "fc2e69c0-0efc-40df-a535-c7b2df646a5e",
    logo: "images/sponsors/gradle.png",
    description:
      "We are the providers of the Gradle Enterprise build and test performance acceleration and failure analytics solution to improving developer productivity and the Gradle Build Tool.",
    url: "gradle.com",
    offers: [
      {
        title: "Senior Frontend Engineer",
        location: "Full remote",
        id: "485f2976-b1c4-4308-a02b-548a767f547b",
        text:
          "<p>We are looking for senior front-end engineers with a demonstrated ability to efficiently deliver and maintain robust and useful front-end solutions, as part of a collaborative team.</p>\n" +
          "<p>Our ideal candidates have a proven ability to deliver testable, evolvable, and scalable React-based architectures. They are passionate about user experience and are driven to deliver value to users. They thrive on challenging problems, understand the nuances of performance and memory optimization, possess and can capably articulate strong opinions, and feel comfortable collaborating with a distributed team.</p>\n" +
          "<p><strong>Responsibilities</strong></p><ul>\n" +
          "<li>Designing and implementing robust solutions</li>\n" +
          "<li>Applying automated quality assurance</li>\n" +
          "<li>Employing modern software development techniques and practices</li>\n" +
          "<li>Doing user research, outreach and support</li>\n" +
          "<li>Assisting clients during trials and in production</li>\n" +
          "<li>Managing individual project priorities, deadlines and deliverables</li>\n" +
          "<li>Contributing to changes that improve the team’s velocity and efficiency</li>\n" +
          "</ul><p><strong>Minimum qualifications</strong></p><ul>\n" +
          "<li>5 years of software development experience</li>\n" +
          "<li>Experience programming in JavaScript and React</li>\n" +
          "<li>Working proficiency and communication skills in written and verbal English</li>\n" +
          "</ul>",
        url: "https://grnh.se/8d97b88b1us",
      },
      {
        title: "Developer Productivity Engineer",
        id: "58f8098a-89a6-4949-833c-66eeaa484f8d",
        location: "Full remote",
        url: "https://grnh.se/05c9a98a1us",
        text:
          "<p>We are looking for a passionate Developer Productivity Engineer with a demonstrated ability to accelerate developer productivity through optimizing speed and reliability of feedback cycles and increasing the degree of automation.</p+>\n" +
          "<p><strong>About the project</strong></p>\n" +
          "<p>The Gradle Build Tool project is thoroughly tested on different operating systems, Java versions etc. Also, all performance tests run on every commit to the source code repository. As a result, about 80 thousand tests run before integrating a change into the main branch and 40 thousand builds run every week on our CI system.  This presents a big engineering challenge on its own and requires a sophisticated infrastructure using hundreds of build agents, including dynamically added capacity with AWS, and a Kubernetes cluster for test distribution. </p>\n" +
          "<p>To learn more about how the Gradle Build Tool project is built, see also the interview with Stefan Wolf, the current leader of our Developer Productivity Team at https://www.youtube.com/watch?v=3MSxJPhr4Eo.</p>\n" +
          "<p><strong>Responsibilities</strong></p><ul>\n" +
          "<li>Helping a growing team of 20+ engineers to improve their productivity</li>\n" +
          "<li>Optimizing a large Gradle build at https://github.com/gradle/gradle</li>\n" +
          "<li>Optimizing a CI pipeline at https://builds.gradle.org/</li>\n" +
          "<li>Designing and implementing Gradle plugins</li>\n" +
          "<li>Designing and implementing bots integrating with various systems such as GitHub</li>\n" +
          "<li>Implementing and improving monitoring of developer productivity metrics</li></ul>",
      },
      {
        title: "Developer Advocate",
        id: "86e4cfee-2464-49a1-94d4-6d7d5f224afc",
        location: "Full remote",
        url: "https://grnh.se/8d26ab5d1us",
        text:
          "<p>We are looking for a Developer Advocate for Gradle Build Tool. The person in this role will focus on sharing knowledge and fostering the community through high-traffic online channels as well as in person.</p>\n" +
          "<p>The person in this role will be responsible for Gradle Build Tool advocacy as a part of our  Developer Relations and Education Team consisting of developer advocate, technical trainer, and technical writer. The team focuses on creation and delivery of educational and informational content, fostering the community, as well as collecting and organizing user feedback to inform engineering priorities. The person in this role will also work closely with technical evangelists responsible for our commercial product, Gradle Enterprise, with the opportunity to learn from very experienced and well-known advocates such as Trisha Gee and Baruch Sadogursky.</p>\n" +
          "<p>We are looking for someone who has the desire and capability to grow a deep understanding of the build automation domain so that they can help the entire community learn and grow. An ideal candidate would be able to build and refine an advocacy strategy of an extremely widely used open-source project, including how to most optimally leverage available channels and how to best position the product in the competitive landscape and industry trends.</p>\n",
      },
    ],
  },
  {
    name: "New Relic",
    id: "8e13e80b-e3c1-4710-9ff0-5d6d391e05fb",
    description:
      "Full-Stack Observability helps engineers plan, build, deploy, and run great software. Only New Relic has a unified data platform for all telemetry data—metrics, events, logs and traces—paired with analysis tools to find solutions fast. Move past the ‘what’ to uncover the ‘why’.",
    url: "https://newrelic.com/",
    twitter:
      "https://twitter.com/newrelic?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    linkedin: "https://www.linkedin.com/company/new-relic-inc-/",
    logo: "images/sponsors/someRelic.png",
    offers: [
      {
        title:
          "Senior Frontend Software Engineer (New Relic One platform - Open to remote)",
        id: "08cb9887-4317-4d9f-98af-f7b715b86606",
        location: "Full remote",
        url: "https://newrelic.careers/en_US/careers/JobDetail/Senior-Frontend-Software-Engineer-New-Relic-One-platform-Open-to-remote/3561",
        text:
          "<p><strong>Your opportunity</strong></p>\n" +
          "<p>We are looking for an experienced senior JavaScript engineer to join us in building The New Relic One! The platform will be used by your coworkers throughout the company and will help make their lives—and the lives of the customers they work with—easier and more enjoyable each and every day. Some of the problems we work on involve frontend APIs to interact with the internal framework, extensible architecture solutions, UI components, deal with modern frameworks and libraries such as ReactJS, and automation using tools such as Jenkins.</p>\n" +
          "<p><strong>What you'll do</strong></p><ul>\n" +
          "<li>Select the best frameworks and tools needed to do the job quickly, while also optimizing for codebase stability, product stability, and target use case growth.</li>\n" +
          "<li>Produce highly performant and flexible CLI using modern Typescript and software development techniques in collaboration with other team members.</li>\n" +
          "<li>Find and identify opportunities to automate repetitive tasks that are made by developers on a daily basis.</li>\n" +
          "<li>Collaborate with other UI engineers across the company to learn from others and to ensure you stay up to date on the company’s UI best practices.</li>\n" +
          "<li>Learn and improve your skills to continuously push us to deliver higher-quality tools and improve the UI team's workflows.</li></ul>",
      },
    ],
  },
  {
    name: "Adaptive",
    id: "04b05cf9-d07c-425f-8368-4972f69ebcd9",
    description:
      "At Adaptive, we partner with capital and commodity market participants that value differentiation through technology. Our experienced teams design and deliver complex solutions, using our proven accelerators, creating a long-term competitive advantage for our clients.",
    twitter: "https://www.twitter.com/WeAreAdaptive",
    linkedin: "www.linkedin.com/company/adaptive-consulting-ltd/",
    url: "weareadaptive.com",
    logo: "images/sponsors/adaptive.png",
    offers: [
      {
        id: "1190b4cf-17bb-4b22-8d07-882b012b95c8",
        title: "Software Engineer",
        location: "Hybrid",
        url: "https://hub.weareadaptive.com/devbcn_job_offers",
        text:
          "<p>We are not hiring at the moment, but that doesn't mean we will not be hiring next month!</p>\n" +
          "<p>You will be able to find out the roles we hire more often in the link below, feel free to leave your email to be contacted once new opportunities will be opened.</p>\n" +
          "<p>Let's keep in touch!</p>",
      },
    ],
  },
  {
    name: "Capitole",
    id: "e3f6c467-8b6d-4077-aced-14d0a8a3f508",
    description:
      "At Capitole we empower businesses to reach their full potential by leveraging cutting-edge and innovative IT services, while valuing people every step of the way.",
    url: "https://capitole-consulting.com/",
    linkedin: "https://www.linkedin.com/company/capitole-consulting/",
    logo: "images/sponsors/capitole.png",
    offers: [
      {
        title: "Technical Lead",
        location: "hybrid",
        url: "https://www.linkedin.com/company/capitole-consulting/jobs/",
        text:
          "<p>En Capitole Consulting buscamos un Technical Lead que le apasione el mundo de la programación, que se sienta atraído por los retos y desafíos porque... este es un GRAN RETO 😎 y, sobre todo, que tengan ganas de crecer...Te apuntas??</p>\n" +
          "<p>Se trata de un proyecto para una multinacional líder del sector Retail cuyo objetivo es trabajar con últimas tecnologías para lograr la máxima eficacia y ofrecer los mejores servicios a través de sus plataformas digitales.</p>\n" +
          "<p>Aquí, se diseñan y desarrollan funcionalidades de alta calidad, siguiendo la cultura y metodología DevOps con programación reactiva. Apuestan por un código reutilizable, mantenible, escalable y elegante, por ello aplican principios SOLID, Clean Code, patrones TDD/DDD...</p>\n" +
          "<p>🤖¿Qué buscamos? Experiencia en:</p><ul>\n" +
          "<li>Liderazgo técnico de equipos</li>\n" +
          "<li>Lenguaje Java (8-11-17)</li>\n" +
          "<li>Frameworks: Spring Boot / Spring MVC / Spring Cloud</li>\n" +
          "<li>Arquitectura de Microservicios y Hexagonal</li>\n" +
          "<li>Comunicación entre servicios síncrona (API/REST) y asíncrona (GRPC)</li>\n" +
          "<li>Colas de mensajería Kafka</li>\n" +
          "<li>Bases de datos SQL y NoSQL (Couchbase, MongoDB...)</li>\n" +
          "<li>Clean Code, buenas prácticas, DDD, TDD, Api first...</li>\n" +
          "<li>Integración continua: Jenkins, Docker.</li>\n" +
          "<li>Metodologías ágiles (Scrum).</li>\n" +
          "<li>Suite Atlassian (Jira, Confluence).</li>\n" +
          "<li>Testing (JUnit, Mockito, TDD).</li>\n" +
          "</ul>" +
          "<p>🧐 ¿Qué podemos ofrecemos?</p><ul>\n" +
          "<li>Salario competitivo</li>\n" +
          "<li>Para que te mantengas a la vanguardia de la informática, te ofrecemos un presupuesto de formación anual individual de 1200€</li>\n" +
          "<li>Remuneración flexible a través de Sodexo</li>\n" +
          "<li>Horario flexible, para ayudarte a conciliar tu vida profesional / familiar.</li>\n" +
          "<li>Trabajo a distancia al 100%.</li>\n" +
          "<li>Seguro Médico Privado Sanitas íntegramente pagado por Capitole.</li>\n" +
          "<li>Descuentos en Gimnasios con Andjoy</li>\n" +
          "<li>Team Buildings mensuales y la imperdible Pool Party y cena de Navidad!</li>\n" +
          "<li>Comunidades tecnológicas para que compartas tus conocimientos e ideas con los demás equipos. ¡¡¡Compartir el conocimiento interno es fundamental!!!</li>\n" +
          "<li>¡Por último y no menos importante un EQUIPAZO!</li></ul>",
        id: "a80df426-776c-4137-baa2-ea36df384263",
      },
    ],
  },
  {
    name: "Adevinta",
    id: "68a85584-6cf7-45f8-82c2-7edce28e259b",
    url: "www.adevinta.com",
    logo: "images/sponsors/adevinta.png",
    twitter: "https://twittere.com/Adevinta",
    linkedin: "https://www.linkedin.com/company/adevinta/",
    description:
      "We are a global online classifieds specialist, operating digital online classifieds in 11 countries. We provide technology-based services to connect buyers and sellers and facilitate transactions, from job offers to real estate, cars, consumer goods and more.",
    offers: [
      {
        title: "Backend Platform - Generalist",
        id: "50bfb969-f39b-4ea0-a849-b0bbb622be7d",
        location: "hybrid",
        text:
          "<p>We are looking for a back-end engineer to fulfill our team's back-end platform engineer position for the milanuncios vertical.</p>\n" +
          "<p>The Back-end Platform team is responsible for leading the discipline. Its mission is to continuously improve the company's practices, technology, and engineering experience.</p>\n" +
          "<p>It achieves so by building agreements and providing tooling in collaboration with other Platform teams, knowledge, and support.</p>\n" +
          "<p>They also drive the adoption of new industry trends, continuously raising the bar.</p>\n" +
          "<p>Your mission as part of the Platform Area is the Acceleration of the product development teams, and specifically of the Backend Developers.</p>\n" +
          "<p>We choose to achieve this Acceleration by creating and fostering a continuously improving community, bringing the software crafters principles to every team.</p>\n" +
          "<p>Their responsibilities are:</p><ul>\n" +
          "<li>Support back-end engineers and unblock any issues they face by accompanying them to fulfill the desired results.</li>\n" +
          "<li>Build/Maintain a strong back-end community in the vertical, focusing on having everyone's voice heard.</li>\n" +
          "<li>Share the problems, failures, and successes to Back-end platform engineers and other discipline platform engineers to feed the other vertical communities.</li>\n" +
          '</ul>"',
        url: "https://marketplaces.wd3.myworkdayjobs.com/es/External_Careers/job/Barcelona---Oficina-Central/Backend-Platform---Generalist_JR003429-1",
      },
      {
        title: "iOS Engineer",
        id: "20b1245f-28ef-4c08-bffa-70d38e39ad35",
        text:
          "<p>We are looking for an iOS Engineer to join one of our product teams at coches.net</p>\n" +
          "<p>What are you going to find?</p>\n" +
          "<ul>\n" +
          "<li>A Swift code base with Clean + MVVM architecture.</li>\n" +
          "<li>Crash-free users above 99%.</li>" +
          "<li>CI/CD with Bitrise.</li>\n" +
          "<li>A multidisciplinary technical team in an international environment.</li>\n" +
          "<li>Common tools used by hundreds of developers throughout all Adevinta.</li>\n" +
          "<li>Feedback culture. We encourage giving and receiving feedback to improve every day.</li>\n" +
          "</ul>" +
          "<p>Qualifications</p><ul>\n" +
          "<li>Swift & SwiftUI</li>\n" +
          "<li>Deep understanding of UIKit & main CocoaTouch APIs.</li>\n" +
          "<li>Dependency management (CocoaPods/SwiftPM)</li>\n" +
          "<li>Deep understanding of common architectural patterns: MVP, MVVM, MVC</li>\n" +
          "<li>SOLID principles and reference implementations (VIPER, Clean, etc.)</li>\n" +
          "<li>Experience testing code.</li>\n" +
          "<li>Experience deploying an App to the AppStore and monitoring the release metrics.</li>\n" +
          "<li>Experience working with Git.</li>\n" +
          "<li>Fluent in business Spanish and English (written and spoken).</li>" +
          "</ul>",
        location: "Hybrid",
        url: "https://marketplaces.wd3.myworkdayjobs.com/es/External_Careers/job/Barcelona/iOS-Engineer_JR003627",
      },
      {
        title: "Machine Learning Engineer",
        id: "aa94fa79-b8bf-4f8e-aff5-d0b67e37c983",
        location: "Hybrid",
        url: "https://marketplaces.wd3.myworkdayjobs.com/es/External_Careers/job/Barcelona---Oficina-Central/Machine-Learning-Engineer_JR003442-1",
        text:
          "<p>As a Machine Learning Engineer at Adevinta, you will be at the heart of an effort to utilise our unique combination of data to bring about the next generation of digital products and services. You will have a direct impact on millions of users around the world by building data products.</p>\n" +
          "<p>As part of the Personalization team, you will be responsible for building data pipelines that process billions of events and use machine learning techniques to create personalised user experiences on our Marketplaces. The team consists of data scientists and data engineers that work closely together to deliver end-to-end data products such as recommender systems, data-driven search (using learning-to-rank), autocomplete, related searches and other personalised products that help our users make perfect matches on our sites. Adevinta's wide portfolio of sites and services means that we have plenty of data sources and application areas to try out many different approaches in a creative, innovative and ambitious environment.</p>\n",
      },
    ],
  },
  {
    name: "Revolut",
    id: "20309974-2602-4eaa-8199-3fbb902fa88a",
    description:
      "People deserve more from their money. More visibility, more control, more freedom.With an arsenal of awesome products that span spending, saving, travel, transfers, investing, exchanging and more, our super app has helped 30+ million customers get more from their money. And we're not done yet.",
    url: "https://www.revolut.com/working-at-revolut/",
    twitter: "https://twitter.com/revolutinsider",
    linkedin: "https://www.linkedin.com/company/5356541/",
    logo: "images/sponsors/revolut.png",
    offers: [
      {
        title: "Software Engineer (Backend)",
        id: "2c7a9b7a-b4a2-4664-b114-d7287906e634",
        text: "We’re looking for a Backend Engineer that wants to change the world. If you like to work at a steady pace with no surprises, keep scrolling. If you want your work to change the global financial landscape, you might be just who we’re looking for. We have a minimalist approach to using external frameworks, with emphasis on maintainability and fast turnaround with TDD, DDD, and Continuous Integration & Delivery.",
        location: "Full remote",
        url: "https://www.revolut.com/careers/position/software-engineer-backend-530d3bfd-bdca-4390-8f8a-bc88ddc1eb51/?utm_source=devbcn_conference&utm_medium=ad&utm_campaign=july_2023_devbcn_conference&utm_id=34&utm_term=&utm_content=backend",
      },
      {
        title: "Software Engineer (Python)",
        id: "59bc8f7e-6b9c-48b4-a3fd-46a7311ff60e",
        text:
          "<p>Our Technology team isn’t here to fix legacy systems – it’s here to build world-class financial products from the ground up.</p>\n" +
          "<p>Products that will be used by millions of people around the world 🌎</p>\n" +
          "<p>You may expect our Python Engineers to work on heavily regulated banking systems, but we love the unexpected.</p>\n" +
          "<p>We’re actually better known internally for writing high-quality code and building complex novel solutions end-to-end 🧠</p>\n" +
          "<p>These geniuses have created our chatbot – the lovely Rita – and they didn’t stop there 🤯</p>\n" +
          "<p>They’ve also created automated FinCrime quality controls in a few weeks. Yes, they’re just that good!</p>\n" +
          "<p>You’ll never work alone, either. As a Python Engineer, you’ll sit within a Product Team – simultaneously working with Data Scientists, Analysts, Engineers, Product Owners and Operations Managers to solve problems and make our rocket ship fly even higher 🚀</p>\n" +
          "<p>Ready to join? 👇</p>",
        location: "Full remote",
        url: "https://www.revolut.com/careers/position/software-engineer-python-7d3a7425-fe1a-456c-9dde-d19aba0cde88/?utm_source=devbcn_conference&utm_medium=ad&utm_campaign=july_2023_devbcn_conference&utm_id=35&utm_term=&utm_content=backend",
      },
      {
        title: "Data Scientist",
        id: "be613ebc-d096-4d60-ae7b-73900bb1a381",
        text:
          "<p>We approach Data Science at Revolut the same way that we approach everything else – with class, logical thinking, and lots of style 😎 Let’s break it down: we take the most complex problems and create tailor-made solutions for our customers 🚀 If you’re thinking the Data team is kept in some sort of a secret den, doomed to never see the impact of their work, don’t worry - that’s not how we do things. They’re some of our best and brightest problem-solvers, deployed to the front lines to work in product teams and deliver rockstar solutions 🤘</p>\n" +
          "<p>We start with deep data analysis to understand our customers, their objectives and any issues they might have. We then use various data points and advanced machine learning algorithms, to come up with the best possible option for each client. We experiment, iterate, and build fully automated solutions, based on algorithms which self-improve with time.</p>\n" +
          "<p>We’re looking for next-level Data Scientists to board our FinTech rocket ship and shape the future of financial services apps. Phew! It’s a big task, but you won’t do it alone. 💪</p>\n" +
          "<p>You’ll be working with the toughest and most gifted professionals in Product, Design, Data Science and Engineering, on impactful projects that’ll make our company move forward ⏩</p>",
        location: "Full remote",
        url: "https://www.revolut.com/careers/position/data-scientist-credit-5bfed8c7-9f9d-48e2-8e28-7ecf00ac17a8/?utm_source=devbcn_conference&utm_medium=&utm_campaign=july_2023_devbcn_conference&utm_id=36&utm_term=&utm_content=data%20scientist",
      },
    ],
  },
];

export interface CompanyProps {
  company: Company;
}
