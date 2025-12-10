import { cn } from "@/lib/utils";

export function Heading({
  title,
  description,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { title: string; description: string }) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between md:flex-col md:items-start gap-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}
