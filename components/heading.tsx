import { cn } from "@/utils/cn";

const Heading = ({
  heading,
  description,
  className,
}: {
  heading: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <h1 className="text-2xl font-bold text-black dark:text-white">
        {heading}
      </h1>
      <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

export default Heading;
