import { currentUser } from "@/lib/auth";

import { UserInfo } from "@/components/auth/user-info";
import { Session } from "next-auth";

export default async function ServerPage() {
  const user = await currentUser();

  return (
    <UserInfo
      user={user as Session["user"]}
      title="Server Component"
      description="This is a server component"
    />
  );
}
