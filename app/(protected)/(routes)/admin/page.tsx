"use client";

import { toast } from "sonner";
import { UserIcon } from "lucide-react";

import { UserRole } from "@/lib/prisma/enums";
import { admin } from "@/actions/admin";

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemActions,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { RoleGate } from "@/components/auth/role-gate";
import { Heading } from "@/components/heading";

export default function AdminPage() {
  const onApiRouteClick = async () => {
    const response = await fetch("/api/admin");
    if (response.ok) {
      toast.success("Api route accessed successfully");
    } else {
      toast.error("Failed to access api route");
    }
  };

  const onServerActionClick = async () => {
    const result = await admin();
    if (result.success) {
      toast.success("Server action accessed successfully");
    } else {
      toast.error("Failed to access server action");
    }
  };

  return (
    <>
      <Heading title="Admin Page" description="This is the admin page" />
      <div className="space-y-4">
        <RoleGate allowedRoles={[UserRole.ADMIN]}>
          <p>Welcome to the admin page</p>
        </RoleGate>
        <Item size="sm">
          <ItemMedia>
            <UserIcon className="size-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Admin-only Api Route</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button size="sm" onClick={onApiRouteClick}>
              Click to Access
            </Button>
          </ItemActions>
        </Item>
        <Item size="sm">
          <ItemMedia>
            <UserIcon className="size-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Admin-only Server Action</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button size="sm" onClick={onServerActionClick}>
              Click to Access
            </Button>
          </ItemActions>
        </Item>
      </div>
    </>
  );
}
