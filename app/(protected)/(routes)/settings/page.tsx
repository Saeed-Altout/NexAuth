"use client";

import { Button } from "@/components/ui/button";

import { logout } from "@/actions/logout";
import { Wrapper } from "@/components/auth/wrapper";

export default function SettingsPage() {
  const handleSignOut = () => {
    logout();
  };

  return (
    <Wrapper title="Settings" description="Manage your settings">
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Wrapper>
  );
}
