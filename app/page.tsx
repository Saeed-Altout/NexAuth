"use client";
import { useRouter } from "next/navigation";

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function Home() {
  const router = useRouter();
  const user = useCurrentUser();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">NexAuth</h1>
        {user ? (
          <Button onClick={() => router.push("/settings")}>
            Go to Settings
          </Button>
        ) : (
          <LoginButton>
            <Button>Sign in</Button>
          </LoginButton>
        )}
      </div>
    </div>
  );
}
