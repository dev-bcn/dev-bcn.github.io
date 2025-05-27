// @ts-expect-error some quirky
import { Company } from "@types/jobOffers";

export const jobOffers: Company[] = [
  {
    id: "7bedcb50-4a71-43a2-abff-029961262952",
    description:
      "Somos el motor de la transformación tecnológica del grupo CaixaBank. Desarrollamos soluciones financieras end to end con un claro objetivo: reinventar las reglas de juego a nivel tecnológico de una forma inteligente, flexible y con un impacto real en la sociedad",
    linkedin: "",
    twitter: "",
    name: "CAIXABANK TECH",
    logo: "images/sponsors/caixabank-tech.png",
    url: "https://caixabanktech.com/es/",
    offers: [
      {
        id: "7bedcb50-4a71-43a2-abff-029961262952",
        url: "https://caixabanktech.com/es/job/software-engineer-javapython/", // Removed newline
        title: "Software Engineer Java+Python",
        text:
          "Programación y desarrollo de productos, proyectos y soluciones en el sector financiero\n" +
          "Trabajo en modo Lab, con equipo multidisciplinar en metodología Agile\n" +
          "Desarrollo integral de software comprendiendo todo el ciclo de vida: revisión de requerimientos, análisis de la solución, programación y pruebas, revisión del incidental y evolución",
        location: "Hybrid",
      },
    ],
  },
  {
    id: "cec41b8a-e8d9-447e-83e7-099680c76181",
    url: "https://www.snowflake.com/en/uk/\n",
    name: "Snowflake",
    logo: "/images/sponsors/logo-snowflake.png",
    description:
      "Snowflake makes enterprise AI easy, efficient and trusted. More than 11,000 companies around the globe, including hundreds of the world’s largest, use Snowflake’s AI Data Cloud to share data, build applications, and power their business with AI. The era of enterprise AI is here. \n",
    twitter: "https://twitter.com/SnowflakeDB",
    linkedin: "https://www.linkedin.com/company/snowflake-computing",
    offers: [
      {
        id: "c50b1d5f-113a-4ef7-8dc5-20717ac93bc0",
        text: "We’re searching for a talented Senior (Staff) Software Engineer to join us for our efforts building out the Snowflake platform with cognitive capabilities. Our team at Snowflake has responsibility for moving boundaries of NLP space to SOTA levels and coming up with new solutions in cognitive space. As our team is growing rapidly to keep up with this key responsibility alongside Snowflake’s immense growth, we need additional talent to help lead the change.\n",
        title: "Senior Software Engineer for AI Poland",
        location: "Hybrid",
        url: "https://careers.snowflake.com/us/en/job/SNCOUSDAD8F5157E7341298158AD41DE813A7CEXTERNALENUS768DA4518F124A419487D786ECFC578C/Senior-Software-Engineer-for-AI-Poland\n",
      },
      {
        id: "93c2f7fd-8718-4368-983e-2e8d28fdf06c",
        text:
          "as a Production Software Engineer at Snowflake, you will:<br/>" +
          "* Design, lead and own significant projects with an impact felt far beyond your team. <br/>" +
          "* Contribute to the design and operation of our highly reliable, secure, scalable, and performant infrastructure<br/>" +
          "* Develop the software to grow our fleet of services and deployments<br/>" +
          "* Participate in our on-call rotation and ensure uptime of services<br/>" +
          "* Use your deep experience and problem solving skills to help investigate and fix production issues, and drive blameless incident post-mortems to document learnings and prevent recurrences<br/>" +
          "* Plan and lead complex technical projects while partnering with a wide variety of teams within the company",
        url: "https://careers.snowflake.com/us/en/job/SNCOUS1B155129FA6D439B9893A51A1E6AFCA8EXTERNALENUS8C40EA83A7D34DF691A7CCB73954E02D/Production-Software-Engineer",
        location: "Hybrid",
        title: "PRODUCTION SOFTWARE ENGINEER",
      },
      {
        id: "d17366a8-6ab1-4908-aa8c-1ccc3897f97c",
        title: "Engineering Manager - Query Execution Platform",
        location: "Hybrid",
        text: "We’re looking for an exceptional and experienced Engineering Manager to manage and grow the Snowflake query processing team in Berlin, Germany. The team is critical to Snowflake's success, responsible for building new SQL features and customer-facing functionality, developing novel query optimization and query execution techniques for industry-leading performance, and building a database system that's highly parallel, efficient and fault-tolerant.\n",
        url: "https://careers.snowflake.com/us/en/job/SNCOUS3C3A05E2D0904E3BAC0402E338567595EXTERNALENUS247840B3433245CE9ADE0424A0F27290/Engineering-Manager-Query-Execution-Platform",
      },
    ],
  },
];
