"use client";
import { FaGithub } from "react-icons/fa";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export function Github() {
  const onClick = () => {
    signIn("github", { redirectTo: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <Button className="flex-1" variant="outline" onClick={onClick}>
      <FaGithub /> Github
    </Button>
  );
}
