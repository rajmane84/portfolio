import Container from "@/components/container";
import Logo from "@/components/logo";
import PatternContainer from "@/components/pattern-container";
import GithubContributionSection from "@/components/sections/github-contribution";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills";
import { cn } from "@/utils/cn";
import { IconSend } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col pt-14">
      {/* Header Section */}
      <Container
        outerClassName="border-t-0 min-h-64 h-64"
        innerClassName="h-full"
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <DotsBackground className="mask-[linear-gradient(to_bottom,transparent,black_25%,black_80%,transparent)]" />
          <Logo className="stroke-white size-32" />
        </div>
      </Container>

      {/* Hero Section */}
      <Container
        outerClassName="border-t-0 min-h-55 h-55"
        innerClassName="h-full"
      >
        <div className="flex h-full w-full items-stretch">
          {/* Avatar Side */}
          <div className="border-primary/50 relative flex h-full w-55 shrink-0 items-center justify-center border-r">
            <div className="border-primary/50 relative size-55 rounded-full border p-1">
              <Image
                src="/Jujutsu-Kaisen.avif"
                alt="avatar"
                height={1080}
                width={1080}
                className="size-full rounded-full object-cover object-center"
              />
              <AvailableForWork className="absolute right-[14.5%] bottom-[14.5%] translate-x-1/2 translate-y-1/2" />
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-1 flex-col">
            <div className="flex-1" />

            {/* Headline Group */}
            <div className="border-primary/50 border-b py-2">
              <span className="text-md block px-8 tracking-wide text-neutral-400/80">
                Hey, I&apos;m
              </span>
              <h1 className="flex items-center gap-4 px-8 text-2xl font-bold text-white">
                Raj Mane
                <span className="inline-block h-0.75 w-7.5 translate-y-1 bg-white" />
                <span className="font-semibold text-neutral-400">
                  A Full Stack Developer
                </span>
                <div className="size-1 -translate-x-2 translate-y-2.5 bg-neutral-400" />
              </h1>
            </div>

            {/* Description Section */}
            <div className="px-8 py-2">
              <p className="text-md leading-relaxed text-neutral-400">
                Full-Stack Engineer, Systems Thinker, In-Code Designer, and a
                Perpetual Learner.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="border-primary/70 flex w-full items-center gap-4 border-t px-8 py-2">
              <Link
                href="/resume"
                className={cn(
                  "border-primary/50 bg-primary/25 hover:bg-primary/35 flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 transition-colors",
                  "shadow-[inset_0_1px_1px_rgba(0,0,0,0.6)] shadow-neutral-400",
                )}
              >
                <CVIcon className="size-5 stroke-2" />
                <span className="text-sm font-medium">Resume / CV</span>
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md bg-white/70 px-3 py-1.5 transition-colors hover:bg-white/80",
                )}
              >
                <IconSend className="size-5 stroke-black" />
                <span className="text-sm font-medium text-black">
                  Get in touch
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <PatternContainer height="full" />

      {/* Skills */}
      <SkillsSection />

      <PatternContainer height="full" />

      <GithubContributionSection />

      <PatternContainer height="full" />

      <ProjectsSection />
    </div>
  );
};

export default Page;

const DotsBackground = ({
  dotColor = "var(--color-neutral-800)",
  size = "14px",
  className,
}: {
  dotColor?: string;
  size?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
        backgroundSize: `${size} ${size}`,
      }}
    />
  );
};

const AvailableForWork = ({
  className,
  available = true,
}: {
  className?: string;
  available?: boolean;
}) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative flex h-3.5 w-3.5">
        {available && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full border border-emerald-500/50 opacity-75" />
        )}
        <span
          className={cn(
            "relative inline-flex h-3.5 w-3.5 rounded-full border",
            available
              ? "border-emerald-700 bg-emerald-500"
              : "border-neutral-700 bg-neutral-500",
          )}
        />
      </div>
    </div>
  );
};

const CVIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
};
