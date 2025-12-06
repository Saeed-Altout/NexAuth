"use client";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export function Github() {
  return (
    <Button className="flex-1" variant="outline" onClick={() => {}}>
      <FaGithub /> Github
    </Button>
  );
}
