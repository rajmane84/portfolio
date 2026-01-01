import { cn } from "@/utils/cn";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
}

const Container = ({
  children,
  outerClassName,
  innerClassName,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full border-y border-primary/70",
        outerClassName
      )}
    >
      <div
        className={cn(
          "max-w-4xl border-x border-primary/70 w-full mx-auto h-14",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;