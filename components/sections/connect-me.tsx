import Container from "../container";
import Heading from "../heading";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import React from "react";

const CONNECT_DATA = [
  {
    left: {
      label: "X (formerly Twitter)",
      username: "@RajMane_17",
      imageSrc: "/logo/X.webp",
      href: "https://x.com/RajMane_17",
    },
    right: {
      label: "LinkedIn",
      username: "@rajmane84",
      imageSrc: "/logo/linkedin.png",
      href: "https://www.linkedin.com/in/rajmane84",
    },
    hasBottomBorder: true,
  },
  {
    left: {
      label: "GitHub",
      username: "@rajmane84",
      imageSrc: "/logo/github.webp",
      href: "https://github.com/rajmane84",
    },
    right: {
      label: "Daily Dev",
      username: "@rajmane84",
      imageSrc: "/logo/daily-dev.png",
      href: "https://app.daily.dev/rajmane84",
    },
    hasBottomBorder: false,
  },
];

const ConnectMe = () => {
  return (
    <>
      <Container innerClassName="px-4 py-2">
        <Heading
          heading="Connect"
          description="You can find me on these platforms."
        />
      </Container>
      <Container>
        <div className="flex w-full flex-col">
          {CONNECT_DATA.map((row, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex items-center overflow-hidden ${row.hasBottomBorder ? "border-primary border-b" : ""}`}
              >
                <ConnectComponent {...row.left} borderSide="border-r" />

                <div
                  className={cn(
                    "flex-1 self-stretch",
                    "bg-[repeating-linear-gradient(315deg,var(--color-neutral-900)_0,var(--color-neutral-700)_1px,transparent_0,transparent_50%)]",
                    "bg-size-[10px_10px]",
                  )}
                />

                <ConnectComponent {...row.right} borderSide="border-l" />
              </div>
              <div
                className={cn(
                  "h-8 w-full",
                  "bg-[repeating-linear-gradient(315deg,var(--color-neutral-900)_0,var(--color-neutral-700)_1px,transparent_0,transparent_50%)]",
                  "bg-size-[10px_10px]",
                )}
              ></div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ConnectMe;

interface ConnectProps {
  label: string;
  username: string;
  imageSrc: string;
  borderSide?: string;
  href: string;
}

const ConnectComponent = ({
  label,
  username,
  imageSrc,
  href,
  borderSide = "",
}: ConnectProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group border-primary flex w-full max-w-108 cursor-pointer items-center justify-between bg-transparent p-4 transition-colors",
        "hover:bg-neutral-700/5",
        borderSide,
      )}
    >
      <div className="flex items-center gap-5 overflow-hidden">
        <div className="size-12 shrink-0 overflow-hidden rounded-2xl border-2 border-neutral-800 md:size-16">
          <Image
            src={imageSrc}
            alt={`${label} logo`}
            height={64}
            width={64}
            className="size-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col truncate select-none">
          <h1 className="truncate text-base font-semibold text-white group-hover:underline md:text-lg">
            {label}
          </h1>
          <span className="truncate text-xs text-neutral-400 md:text-sm">
            {username}
          </span>
        </div>
      </div>

      <IconArrowUpRight className="ml-2 size-5 shrink-0 stroke-neutral-300/50" />
    </Link>
  );
};
