import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">NextAuth</h1>
        <p className="text-muted-foreground mb-6">
          This is a boilerplate for NextAuth with Next.js 16.
        </p>
        <LoginButton>
          <Button>Sign in</Button>
        </LoginButton>
      </div>
    </div>
  );
}
