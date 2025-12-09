"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";

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
    return (
      <Dialog>
        <DialogTrigger asChild>{props.children}</DialogTrigger>
        <DialogContent>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return <div onClick={onClick} {...props} />;
}
