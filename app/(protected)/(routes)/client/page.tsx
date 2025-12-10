"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Session } from "next-auth";

import { UserInfo } from "@/components/auth/user-info";
import { Heading } from "@/components/heading";

export default function ClientPage() {
  const user = useCurrentUser();

  return (
    <>
      <Heading
        title="Client Component"
        description="This is a client component"
      />
      <UserInfo user={user as Session["user"]} />
    </>
  );
}
