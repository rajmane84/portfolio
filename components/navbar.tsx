"use client";

import { cn } from "@/utils/cn";
import Container from "./container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./logo";

const Navbar = () => {
  const pathname = usePathname();
  const [portfolioActive, setPortfolioActive] = useState(pathname === "/");
  const [guestbookActive, setGuestbookActive] = useState(
    pathname === "/guestbook",
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setPortfolioActive(pathname === "/");
      setGuestbookActive(pathname === "/guestbook");
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <Container
      outerClassName="fixed h-14 top-0 inset-x-0 z-100 bg-background"
      innerClassName="px-4 flex items-center justify-between h-full bg-background"
    >
      <Link href={"/"}>
        <Logo className="size-16 stroke-white" />
      </Link>
      <div className="flex h-full items-center gap-5">
        <Link
          href={"/"}
          className={cn(
            "cursor-pointer text-[15px] font-semibold tracking-wide transition-all duration-200",
            portfolioActive ? "scale-105 text-white" : "text-neutral-400",
          )}
        >
          Portfolio
        </Link>
        <Link
          href={"/guestbook"}
          className={cn(
            "cursor-pointer text-[15px] font-semibold tracking-wide transition-all duration-200",
            guestbookActive ? "scale-105 text-white" : "text-neutral-400",
          )}
        >
          Guestbook
        </Link>
        {/* TODO: Add a search bar */}
        {/* min-w-23 */}
        <div className="flex h-full items-center justify-between gap-2">
          <div className="group flex items-center justify-center rounded-lg px-3 py-1.5 transition-all duration-200 hover:bg-neutral-600/35">
            <GithubIcon className="size-5 stroke-neutral-500 group-hover:stroke-white/75" />
          </div>
          {/* <div className="h-[50%] w-px rounded-full bg-neutral-700" /> */}
          {/* <ModeToggle /> */}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );
};

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
  );
};

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
};
