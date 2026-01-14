import Container from "../container";
import Heading from "../heading";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

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
      username: "@rajmane",
      imageSrc: "/logo/linkedin.png",
      href: "https://www.linkedin.com/in/rajmane84/",
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
            <div
              key={index}
              className={`flex items-center overflow-hidden ${row.hasBottomBorder ? "border-primary border-b" : ""}`}
            >
              <ConnectComponent {...row.left} borderSide="border-r" />

              {/* Vacuum Div */}
              <div className="mx-4 h-px flex-1 bg-neutral-800" />

              <ConnectComponent {...row.right} borderSide="border-l" />
            </div>
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
      className={`group border-primary flex w-full max-w-md cursor-pointer items-center justify-between bg-transparent p-4 transition-colors hover:bg-neutral-700/5 ${borderSide}`}
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
