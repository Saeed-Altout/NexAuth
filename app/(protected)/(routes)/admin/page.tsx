"use client";

import { UserRole } from "@/lib/prisma/enums";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RoleGate } from "@/components/auth/role-gate";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemActions,
} from "@/components/ui/item";
import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { admin } from "@/actions/admin";

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
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Admin Page</CardTitle>
        <CardDescription>This is the admin page</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
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
      </CardContent>
    </Card>
  );
}
