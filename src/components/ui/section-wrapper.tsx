import { cn } from "@/lib/utils";
import { ReactNode, ElementType } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  as?: ElementType;
  fullWidth?: boolean;
  withGlow?: boolean;
}

export const SectionWrapper = ({
  children,
  className,
  id,
  containerClassName,
  as: Component = "section",
  fullWidth = false,
  withGlow = false,
}: SectionWrapperProps) => {
  return (
    <Component
      id={id}
      className={cn(
        "py-16 md:py-24 overflow-hidden relative", 
        withGlow && "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,var(--primary-foreground)_0%,transparent_70%)] before:opacity-5",
        className
      )}
    >
      {fullWidth ? (
        <div className={cn("w-full", containerClassName)}>{children}</div>
      ) : (
        <div className={cn("container mx-auto px-4 md:px-6 relative z-10", containerClassName)}>
          {children}
        </div>
      )}
    </Component>
  );
};
