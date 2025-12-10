import { getUsers } from "@/data/user";

import { Heading } from "@/components/heading";
import { DataTable } from "./_components/data-table";
import { columns, UserColumn } from "./_components/columns";

export default async function UsersPage() {
  const data = await getUsers();

  const users: UserColumn[] = data.map((user, index) => ({
    id: user.id,
    rowIndex: index + 1,
    name: user.name ?? "No Name",
    email: user.email ?? "No Email",
    role: user.role,
    isTwoFactorEnabled: user.isTwoFactorEnabled,
  }));

  return (
    <>
      <Heading title="Users" description="This is the users page" />
      <DataTable columns={columns} data={users} />
    </>
  );
}
