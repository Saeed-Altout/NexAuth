"use client";
import { useCurrentUser } from "@/hooks/use-current-user";

import { UserInfo } from "@/components/auth/user-info";
import { UserModel } from "@/lib/prisma/models";

export default function ClientPage() {
  const user = useCurrentUser();

  return (
    <UserInfo
      user={user as UserModel}
      title="Client Component"
      description="This is a client component"
    />
  );
}
