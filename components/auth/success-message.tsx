import { CheckCircleIcon } from "lucide-react";

export function SuccessMessage({
  message,
  ...props
}: React.ComponentProps<"div"> & {
  message: string;
}) {
  return (
    <div
      className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2"
      {...props}
    >
      <CheckCircleIcon className="h-4 w-4" />
      <span className="text-sm text-emerald-500 truncate">{message}</span>
    </div>
  );
}
