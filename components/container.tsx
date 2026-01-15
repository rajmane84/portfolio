import { cn } from "@/utils/cn";
import React, { forwardRef } from "react";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      outerClassName,
      innerClassName,
      as: Component = "div",
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn("w-full border-y border-neutral-800", outerClassName)}
        {...props}
      >
        <div
          className={cn(
            "mx-auto min-h-10 w-full max-w-4xl border-x border-neutral-800",
            innerClassName,
          )}
        >
          {children}
        </div>
      </Component>
    );
  },
);

export default Container;
