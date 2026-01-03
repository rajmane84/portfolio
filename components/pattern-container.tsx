import Container from "@/components/container";
import { cn } from "@/utils/cn";

interface PatternContainerProps {
  height: string;
}

const PatternContainer = ({ height }: PatternContainerProps) => {
  return (
    <Container
      outerClassName={cn(
        "border-t-none",
        "bg-[image:repeating-linear-gradient(315deg,_var(--color-neutral-900)_0,_var(--color-neutral-700)_1px,_transparent_0,_transparent_50%)]",
        // "dark:bg-[image:repeating-linear-gradient(315deg,_var(--color-neutral-100)_0,_var(--color-neutral-300)_1px,_transparent_0,_transparent_50%)]",
        "bg-[size:10px_10px]",
        `h-${height}`,
      )}
    >
      <></>
    </Container>
  );
};

export default PatternContainer;
