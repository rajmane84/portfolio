import Image from "next/image";
import Container from "../container";
import Heading from "../heading";
import PatternContainer from "../pattern-container";
import { IconChevronDownLeft, IconCode, IconBrush } from "@tabler/icons-react";

const ExperienceSection = () => {
  const myRoles: Role[] = [
    {
      title: "Senior Frontend Developer",
      duration: "10.2022 — Present",
      type: "Full-time",
      icon: "code",
      skills: ["TypeScript", "Next.js", "MobX", "Tailwind"],
    },
    {
      title: "Senior Frontend Developer",
      duration: "10.2022 — Present",
      type: "Full-time",
      icon: "code",
      skills: ["TypeScript", "Next.js", "MobX", "Tailwind"],
    },
  ];

  return (
    <>
      <Container innerClassName="px-4 py-2">
        <Heading
          heading="Experience"
          description="Work I’ve done outside personal projects."
        />
      </Container>

      <Container>
        <div className="grid grid-cols-4">
          <div className="border-primary/70 border-y-none col-span-1 border-r">
            <PatternContainer height="full" />
          </div>
          <div className="col-span-3">
            <div className="flex h-full w-full flex-col px-4 py-2">
              <Experience company="Simplamo Enterprise JSC" roles={myRoles} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExperienceSection;

interface Role {
  title: string;
  duration: string;
  type: string;
  skills: string[];
  icon: "code" | "design";
}

interface ExperienceProps {
  company: string;
  logo?: string;
  roles: Role[];
}

const Experience = ({ company, logo, roles }: ExperienceProps) => {
  return (
    <div className="group flex flex-col gap-6">
      {/* Company Header */}
      <div className="flex items-center gap-3">
        <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-neutral-800">
          {logo ? (
            <Image src={logo} alt={company} fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-orange-600 text-[10px] font-bold text-white">
              {company.charAt(0)}
            </div>
          )}
        </div>
        <h3 className="text-lg font-bold tracking-tight text-neutral-100">
          {company}
        </h3>
        {/* Status Indicator Dot */}
        <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
      </div>

      {/* Timeline Section */}
      <div className="relative ml-3 flex flex-col gap-10 border-l border-neutral-800 pl-8">
        {roles.map((role, index) => (
          <div key={index} className="relative flex flex-col gap-3">
            {/* Timeline Node (Icon) */}
            <div className="absolute top-0 -left-[45px] flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-400 ring-4 ring-black transition-colors group-hover:border-neutral-700">
              {role.icon === "code" ? (
                <IconCode size={16} />
              ) : (
                <IconBrush size={16} />
              )}
            </div>

            {/* Role Header */}
            <div className="flex items-center justify-between">
              <h4 className="text-md font-semibold text-neutral-100">
                {role.title}
              </h4>
              <IconChevronDownLeft size={18} className="text-neutral-600" />
            </div>

            {/* Metadata */}
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span>{role.type}</span>
              <span className="opacity-30">|</span>
              <span>{role.duration}</span>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block rounded-md border border-neutral-800 bg-neutral-900/50 px-2.5 py-0.5 text-xs font-medium text-neutral-400 transition-all hover:border-neutral-600 hover:text-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
