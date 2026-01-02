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
    <div className={cn("border-primary/50 w-full border-y", outerClassName)}>
      <div
        className={cn(
          "border-primary/50 mx-auto min-h-10 w-full max-w-4xl border-x",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
