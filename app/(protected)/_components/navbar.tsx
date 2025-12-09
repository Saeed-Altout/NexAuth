"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServerIcon, SettingsIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-background flex justify-between items-center p-4 rounded-lg w-full max-w-2xl border">
      <div className="flex gap-2">
        <Button
          variant={pathname === "/server" ? "default" : "outline"}
          size="sm"
          asChild
        >
          <Link href="/server">
            <ServerIcon className="size-4" />
            Server
          </Link>
        </Button>
        <Button
          variant={pathname === "/admin" ? "default" : "outline"}
          size="sm"
          asChild
        >
          <Link href="/admin">
            <UserIcon className="size-4" />
            Admin
          </Link>
        </Button>
        <Button
          variant={pathname === "/client" ? "default" : "outline"}
          size="sm"
          asChild
        >
          <Link href="/client">
            <UserIcon className="size-4" />
            Client
          </Link>
        </Button>
        <Button
          variant={pathname === "/settings" ? "default" : "outline"}
          size="sm"
          asChild
        >
          <Link href="/settings">
            <SettingsIcon className="size-4" />
            Settings
          </Link>
        </Button>
      </div>

      <UserButton />
    </div>
  );
}
