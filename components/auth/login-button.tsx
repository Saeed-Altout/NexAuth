"use client";

import { useRouter } from "next/navigation";

export function LoginButton({
  mode = "redirect",
  asChild,
  ...props
}: React.ComponentProps<"div"> & {
  mode?: "modal" | "redirect";
  asChild?: boolean;
}) {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <div>This is modal</div>;
  }

  return <div onClick={onClick} {...props} />;
}
