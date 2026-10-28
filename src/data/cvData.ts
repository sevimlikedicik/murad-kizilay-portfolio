export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: string;
  description?: string;
  highlights: string[];
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
  tagline: "4+ Years Experience · Distributed Backend Systems · Microservices · Data Pipelines",
  summary:
    "Results-oriented Software Engineer with 4+ years of experience designing and scaling distributed backend systems, microservices, and automated data pipelines. Proficient in Java (Spring Boot) and Python ecosystems, with a proven track record in optimizing database throughput, implementing asynchronous messaging architectures, and containerized deployments.",
  location: "Ankara, Turkey",
  email: "mail.muratkizilay@gmail.com",
  phone: "+90 545 348 22 62",
  linkedin: "https://www.linkedin.com/in/muradkizilay/",
  github: "https://github.com/sevimlikedicik",
  resumePdfUrl: "/MuradKizilayCV.pdf",
  availableForHire: true,
};

export const experiences: Experience[] = [
  {
    company: "Mobileaction",
    role: "Software Developer",
    period: "Dec 2024 — Oct 2025",
    location: "Ankara, Turkey (Hybrid)",
    highlights: [
      "Maintained and enhanced 30+ distributed Spring Boot microservices handling core business logic, analytics, and partner integrations.",
      "Designed and implemented RESTful APIs using Spring Data JPA, Hibernate, and PostgreSQL/MySQL, optimizing complex queries for high throughput.",
      "Decoupled synchronous bottlenecks into resilient asynchronous workflows utilizing RabbitMQ, significantly stabilizing system latency under heavy traffic.",
      "Built comprehensive automated unit and integration tests using Mockito and JUnit, collaborating closely with QA to streamline CI/CD delivery pipelines.",
      "Managed cloud storage and deployment assets across AWS (S3, ECS) and Google Cloud Storage.",
    ],
    techStack: [
      "Java (Spring Boot)",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "MySQL",
      "RabbitMQ",
      "AWS (S3, ECS)",
      "Google Cloud Storage",
      "Mockito & JUnit",
      "CI/CD",
      "Gradle",
    ],
  },
  {
    company: "Rollee",
    role: "Software Developer",
    period: "Jan 2022 — Mar 2024",
    location: "Remote",
    highlights: [
      "Reverse-engineered web and mobile application authentication flows (OAuth, session tokens) for platforms like Uber, Amazon, and Upwork to ensure persistent data ingestion.",
      "Architected automated, scalable data extraction services in Python (FastAPI, Httpx), handling high-frequency daily synchronization routines.",
      "Managed relational schemas and data consistency across PostgreSQL, implementing caching strategies to accelerate read-heavy queries.",
      "Deployed and orchestrated containerized scraper services using Docker and AWS, ensuring high availability and robust error recovery.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Httpx",
      "Reverse Engineering",
      "Web Scraping",
      "OAuth & Session Auth",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "AppNava",
    role: "Junior Software Developer",
    period: "Feb 2021 — Nov 2021",
    location: "Ankara, Turkey",
    highlights: [
      "Developed full-stack web applications and internal tools using Django, Python, and React, taking full ownership of features from design to deployment.",
      "Built data engineering pipelines to ingest, transform, and store analytical data into Google BigQuery.",
      "Wrote automated test scripts and participated in code reviews, establishing core engineering standards within a fast-paced development team.",
    ],
    techStack: [
      "Python",
      "Django",
      "React",
      "Google BigQuery",
      "Data Pipelines",
      "Full-Stack Development",
      "Code Reviews & Testing",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frameworks & Backend",
    icon: "server",
    skills: [
      "Spring Boot",
      "Spring Data JPA / Hibernate",
      "Spring Security",
      "FastAPI",
      "Django",
      "RESTful APIs",
      "Microservices Architecture",
    ],
  },
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Java (Java 17/21)", "Python", "SQL", "JavaScript", "C#"],
  },
  {
    title: "Testing & Practices",
    icon: "check",
    skills: [
      "Mockito",
      "JUnit",
      "Test-Driven Development (TDD)",
      "CI/CD Automation",
      "Agile & Code Reviews",
    ],
  },
  {
    title: "Databases & Messaging",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Google BigQuery"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "AWS (ECS, EC2, S3, Lambda)",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Git",
      "Maven",
      "Gradle",
    ],
  },
  {
    title: "Methodologies & Automation",
    icon: "cpu",
    skills: [
      "Reverse Engineering",
      "Web Scraping",
      "Session Management",
      "OAuth Flow Extraction",
      "High-Frequency Ingestion",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Science in Computer Engineering",
  department: "Computer Engineering",
  institution: "Yıldız Technical University",
  graduationYear: "2021",
  location: "Istanbul, Turkey",
};

export const competencies = {
  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Professional Working Proficiency (B2/C1)" },
  ],
  testingPractices: [
    "Mockito & JUnit Unit/Integration Testing",
    "Test-Driven Development (TDD)",
    "Asynchronous Event-Driven Architectures",
    "Containerized Microservices",
  ],
};
