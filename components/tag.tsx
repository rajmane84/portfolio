import React, { forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  imagePath: string;
  alt?: string;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ name, imagePath, alt, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-neutral-600 text-xs font-medium text-white",
          "mr-2 mb-2 px-2 py-1",
          "flex cursor-pointer items-center gap-2",
          "shadow-[inset_0_1px_1px_rgba(0,0,0,0.6)] shadow-neutral-500",
          "border-primary/50 bg-primary/25 border-2 border-dotted select-none",
          className,
        )}
        {...props}
      >
        <Image
          src={imagePath}
          alt={alt || name}
          height={32}
          width={32}
          className="size-4 object-cover"
        />
        <span>{name}</span>
      </div>
    );
  },
);

Tag.displayName = "Tag";
