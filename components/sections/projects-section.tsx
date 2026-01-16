import Container from "../container";
import Heading from "../heading";
import PatternContainer from "../pattern-container";
import {
  IconCode,
  IconExternalLink,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { Project } from "../project";

const PROJECTS_DATA = [
  {
    title: "HexaTalk",
    description:
      "A scalable real-time chat backend supporting one-to-one and group messaging with reliable delivery guarantees. Built using WebSockets with offline message persistence and automatic sync on reconnect. The system is containerized with Docker and Docker Compose, includes CI pipelines for automated builds, and follows a clean modular architecture for long-term scalability.",
    tags: [
      { name: "Node.js", imagePath: "/stack/nodejs-logo.png" },
      { name: "Express", imagePath: "/stack/express.js-logo.png" },
      { name: "MongoDB", imagePath: "/stack/mongo-logo.png" },
      { name: "Docker", imagePath: "/stack/docker-logo.png" },
    ],
    links: [
      {
        href: "https://github.com/rajmane84/hexatalk-backend",
        icon: IconCode,
        label: "Source Code",
      },
    ],
  },
  {
    title: "AlgoCode",
    description:
      "A LeetCode-style coding platform backend designed to evaluate and validate algorithmic submissions at scale. It supports multi-language code execution via Judge0, uses Redis for caching and background queue management, and PostgreSQL with Prisma ORM for strong data integrity. The service is containerized with Docker and built using a modular, service-based architecture.",
    tags: [
      { name: "Node.js", imagePath: "/stack/nodejs-logo.png" },
      { name: "PostgreSQL", imagePath: "/stack/postgres-sql-logo.png" },
      { name: "Prisma", imagePath: "/stack/prisma-logo.png" },
      { name: "Redis", imagePath: "/stack/redis-logo.png" },
      { name: "Docker", imagePath: "/stack/docker-logo.png" },
    ],
    links: [
      {
        href: "https://github.com/rajmane84/AlgoCode_Backend",
        icon: IconCode,
        label: "Source Code",
      },
    ],
  },
];


const ProjectsSection = () => {
  return (
    <>
      <Container innerClassName="px-4 py-2">
        <Heading
          heading="Projects"
          description="End-to-end stuff I’ve built."
        />
      </Container>
      <Container>
        <div className="grid grid-cols-4">
          <div className="border-primary/70 border-y-none col-span-1 border-r">
            <PatternContainer height="full" />
          </div>
          <div className="col-span-3">
            <div className="flex flex-col gap-4">
              {PROJECTS_DATA.map((project, index) => (
                <Project
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  links={project.links}
                  className={
                    index !== PROJECTS_DATA.length - 1 ? "border-b-none" : ""
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectsSection;
