import Image from "next/image";
import Container from "../container";
import Heading from "../heading";
import Link from "next/link";

interface Skill {
  name: string;
  image: string;
  link: string;
}

const skills: Skill[] = [
  {
    name: "TypeScript",
    image: "/stack/typescript-logo.png",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    image: "/stack/javascript-logo.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Node.js",
    image: "/stack/nodejs-logo.png",
    link: "https://nodejs.org",
  },
  {
    name: "React",
    image: "/stack/react-logo.png",
    link: "https://reactjs.org",
  },
  {
    name: "Tailwind CSS",
    image: "/stack/tailwindcss-logo.png",
    link: "https://tailwindcss.com",
  },
  { name: "Shadcn/ui", image: "/stack/shadcn-logo-light.png", link: "https://ui.shadcn.com" },
  {
    name: "Redux",
    image: "/stack/redux-logo.png",
    link: "https://redux.js.org",
  },
  {
    name: "MongoDB",
    image: "/stack/mongo-logo.png",
    link: "https://www.mongodb.com",
  },
  {
    name: "PostgreSQL",
    image: "/stack/postgres-sql-logo.png",
    link: "https://www.postgresql.org",
  },
  { name: "Redis", image: "/stack/redis-logo.png", link: "https://redis.io" },
  {
    name: "Docker",
    image: "/stack/docker-logo.png",
    link: "https://www.docker.com",
  },
  { name: "Bun", image: "/stack/bun-logo.png", link: "https://bun.sh" },
  {
    name: "Framer Motion",
    image: "/stack/motion-logo.svg",
    link: "https://motion.dev",
  },
];

const SkillsSection = () => {

  return (
    <>
      <Container innerClassName="px-4 py-2">
        <Heading
          heading="Skills"
          description="Tools & Technologies I work with."
        />
      </Container>
      <Container innerClassName="p-4 flex items-center flex-wrap gap-4">
        {skills.map((skill) => (
          <Link
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src={skill.image}
              alt={`${skill.name} logo`}
              height={36}
              width={36}
              className="size-8"
            />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default SkillsSection;
