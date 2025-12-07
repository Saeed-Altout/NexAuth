"use client";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export function Google() {
  const onClick = () => {
    signIn("google", { redirectTo: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <Button className="flex-1" variant="outline" onClick={onClick}>
      <FcGoogle /> Google
    </Button>
  );
}
