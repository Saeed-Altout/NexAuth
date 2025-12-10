"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { UserRole } from "@/lib/prisma/enums";

export interface UserColumn {
  id: string;
  rowIndex: number;
  name: string;
  email: string;
  role: UserRole;
  isTwoFactorEnabled: boolean;
}
export const columns: ColumnDef<UserColumn>[] = [
  {
    accessorKey: "rowIndex",
    header: "No.",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "isTwoFactorEnabled",
    header: "Two Factor Enabled",
    cell: ({ row }) => {
      return (
        <Badge
          variant={row.original.isTwoFactorEnabled ? "success" : "destructive"}
        >
          {row.original.isTwoFactorEnabled ? "Enabled" : "Disabled"}
        </Badge>
      );
    },
  },
];
