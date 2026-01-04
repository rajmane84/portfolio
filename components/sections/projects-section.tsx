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
    title: "AlgoCode",
    description:
      "A comprehensive educational suite designed to help developers visualize complex data structures and algorithms. Featuring real-time step-through execution, interactive tree/graph builders, and a side-by-side code editor supporting multiple languages, it bridges the gap between theoretical computer science and practical implementation.",
    tags: [
      { name: "React", imagePath: "/stack/react-logo.png" },
      { name: "TypeScript", imagePath: "/stack/typescript-logo.png" },
      { name: "Tailwind", imagePath: "/stack/tailwindcss-logo.png" },
    ],
    links: [
      { href: "https://algocode.dev", icon: IconExternalLink, label: "Live Demo" },
      { href: "https://youtube.com/watch?v=demo", icon: IconPlayerPlay, label: "Video Demo" },
      { href: "https://github.com/username/algocode", icon: IconCode, label: "Source Code" },
    ],
  },
  {
    title: "DevFlow",
    description:
      "A high-performance project management dashboard optimized for engineering teams. It integrates directly with GitHub and GitLab APIs to automate sprint tracking and pull request workflows. Built with a focus on speed, it leverages Bun.js for lightning-fast server-side rendering and PostgreSQL for robust data integrity in high-concurrency environments.",
    tags: [
      { name: "Bun.js", imagePath: "/stack/bun-logo.png" },
      { name: "Node.js", imagePath: "/stack/nodejs-logo.png" },
      { name: "PostgreSQL", imagePath: "/stack/postgres-sql-logo.png" },
    ],
    links: [
      { href: "https://devflow.app", icon: IconExternalLink, label: "Live Demo" },
      { href: "https://vimeo.com/demo", icon: IconPlayerPlay, label: "Video Demo" },
      { href: "https://github.com/username/devflow", icon: IconCode, label: "Source Code" },
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
