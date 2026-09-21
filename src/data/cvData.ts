export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  highlights?: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  department: string;
  institution: string;
  graduationYear: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePdfUrl: string;
  availableForHire: boolean;
}

export const personalInfo: PersonalInfo = {
  name: "Murad Kızılay",
  title: "Software Engineer",
  tagline: "Specialized in Backend Architecture, Microservices & Data Retrieval Systems",
  summary:
    "Software engineer with top-notch problem-solving ability, a fast learner, and a dedicated team player. Experienced in high-throughput backend services, reverse-engineering authentication flows, microservice architectures, and robust cloud data pipelines.",
  location: "Ankara, Turkey",
  email: "mail.muratkizilay@gmail.com",
  phone: "+90 545 348 22 62",
  linkedin: "https://www.linkedin.com/in/muradkizilay/",
  github: "https://github.com",
  resumePdfUrl: "/MuradKizilayCV.pdf",
  availableForHire: true,
};

export const experiences: Experience[] = [
  {
    company: "Mobileaction",
    role: "Software Developer",
    period: "Dec 2024 — Oct 2025",
    type: "Full Time",
    description:
      "Engineered and maintained mission-critical backend systems in an enterprise app intelligence ecosystem, focusing on reliability and scalability.",
    highlights: [
      "Maintained and improved over 30 microservices serving high-scale customer queries and analytical operations.",
      "Architected and implemented new core backend features, solving complex architectural bottlenecks.",
      "Collaborated closely with cross-functional QA and product teams to uphold high test coverage and system resilience.",
    ],
    techStack: [
      "Spring Boot",
      "Hibernate",
      "Spring Data JPA",
      "PostgreSQL",
      "MySQL",
      "RabbitMQ",
      "AWS",
      "Google Cloud Storage",
      "Spring Security",
      "Gradle",
      "Docker",
    ],
  },
  {
    company: "Rollee",
    role: "Software Developer",
    period: "Jan 2022 — Mar 2024",
    type: "Full Time",
    description:
      "Led the reverse-engineering and automated data retrieval pipelines for major web and mobile platforms across the globe.",
    highlights: [
      "Built resilient integration services retrieving sensitive user data from complex web apps (Uber, Amazon, Upwork, etc.).",
      "Reverse-engineered complex multi-step mobile and web authentication flows and session rotation mechanisms.",
      "Designed fault-tolerant daily data collection pipelines with automated schema evolution and distributed storage.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Reverse Engineering",
      "Web Scraping",
      "Playwright",
      "Selenium",
      "Httpx",
      "AWS (ECS, Lambda, S3)",
      "GCP BigQuery",
      "Docker",
    ],
  },
  {
    company: "AppNava",
    role: "Junior Software Developer",
    period: "Feb 2021 — Nov 2021",
    type: "Full Time",
    description:
      "Hands-on full-stack development and data engineering as one of two primary software engineers driving the product.",
    highlights: [
      "Spearheaded full-stack development of client-facing platforms and internal administrative dashboards.",
      "Designed and deployed initial data-engineering ingestion pipelines for mobile analytics data.",
      "Quickly adapted to ambiguous product requirements, mastering production engineering and rapid prototyping.",
    ],
    techStack: [
      "Python",
      "React",
      "Full-Stack Development",
      "Data Engineering",
      "PostgreSQL",
      "REST APIs",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Architecture",
    icon: "server",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Django",
      "Microservices",
      "Hibernate / JPA",
      "Spring Security",
      "RESTful APIs",
      "RabbitMQ",
    ],
  },
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "Java", "JavaScript / TypeScript", "C#", "C++"],
  },
  {
    title: "Data Retrieval & Reverse Engineering",
    icon: "cpu",
    skills: [
      "Reverse-Engineering",
      "Mobile App Disassembly",
      "Playwright & Selenium",
      "Session Management",
      "Httpx & Async Scraping",
      "Bot Mitigation Bypass",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "cloud",
    skills: [
      "AWS (ECS, S3, EC2, Lambda)",
      "GCP (BigQuery, GCS)",
      "Docker",
      "CI/CD (Git, Gradle)",
      "Heroku",
      "Linux Environments",
    ],
  },
  {
    title: "Databases & Storage",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "RDBMS Design", "Google Cloud Storage", "AWS S3"],
  },
];

export const education: Education = {
  degree: "Bachelor of Science (B.S.)",
  department: "Computer Engineering",
  institution: "Yıldız Technical University (YTÜ)",
  graduationYear: "2021",
  location: "Istanbul, Turkey",
};

export const competencies = {
  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Fluent / Professional" },
    { name: "Spanish", level: "Beginner" },
  ],
  interests: [
    "History & Philosophy",
    "Traveling & Cultural Exploration",
    "Acoustic Music & Singing",
    "Culinary Arts & Cooking",
  ],
};
