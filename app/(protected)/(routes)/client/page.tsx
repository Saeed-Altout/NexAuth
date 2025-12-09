"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Session } from "next-auth";

import { UserInfo } from "@/components/auth/user-info";

export default function ClientPage() {
  const user = useCurrentUser();

  return (
    <UserInfo
      user={user as Session["user"]}
      title="Client Component"
      description="This is a client component"
    />
  );
}
