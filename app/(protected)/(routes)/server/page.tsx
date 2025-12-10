import { Session } from "next-auth";

import { currentUser } from "@/lib/auth";

import { UserInfo } from "@/components/auth/user-info";
import { Heading } from "@/components/heading";

export default async function ServerPage() {
  const user = await currentUser();

  return (
    <>
      <Heading
        title="Server Component"
        description="This is a server component"
      />
      <UserInfo user={user as Session["user"]} />
    </>
  );
}
