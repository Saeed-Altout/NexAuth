"use client";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export function Google() {
  return (
    <Button className="flex-1" variant="outline" onClick={() => {}}>
      <FcGoogle /> Google
    </Button>
  );
}
