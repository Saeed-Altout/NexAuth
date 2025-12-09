import { currentUser } from "@/lib/auth";
import { UserModel } from "@/lib/prisma/models/User";

import { UserInfo } from "@/components/auth/user-info";

export default async function ServerPage() {
  const user = await currentUser();

  return (
    <UserInfo
      user={user as UserModel}
      title="Server Component"
      description="This is a server component"
    />
  );
}
