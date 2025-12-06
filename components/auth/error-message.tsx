import { AlertCircleIcon } from "lucide-react";

export function ErrorMessage({
  message,
  ...props
}: React.ComponentProps<"div"> & {
  message: string;
}) {
  return (
    <div
      className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2"
      {...props}
    >
      <AlertCircleIcon className="h-4 w-4" />
      <span className="text-sm text-destructive truncate">{message}</span>
    </div>
  );
}
