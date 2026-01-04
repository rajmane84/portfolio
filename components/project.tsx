import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Tag } from "./tag";

export interface ProjectLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

export interface ProjectTag {
  name: string;
  imagePath: string;
}

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  tags: ProjectTag[];
  links: ProjectLink[];
}

export const Project = forwardRef<HTMLDivElement, ProjectProps>(
  ({ title, description, tags, links, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex min-h-12 w-full flex-col gap-1 px-4 py-2",
          className,
        )}
        {...props}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h2 className="inline-block text-xl font-semibold text-white">
            {title}
          </h2>

          <div className="mr-4 flex h-full items-center gap-3">
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="size-4 cursor-pointer stroke-neutral-400 transition-colors hover:stroke-white" />
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className="mt-2 flex w-full flex-wrap">
          {tags.map((tag) => (
            <Tag
              key={tag.name}
              name={tag.name}
              imagePath={tag.imagePath}
              alt={`${tag.name} logo`}
            />
          ))}
        </div>

        {/* Description Section */}
        <p className="mt-2 text-sm text-neutral-500">{description}</p>
      </div>
    );
  },
);

Project.displayName = "Project";
