import {
  HashIcon,
  LockIcon,
  MailIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react";

import { UserModel } from "@/lib/prisma/models/User";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item, ItemMedia, ItemContent, ItemTitle } from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";

export function UserInfo({
  user,
  title,
  description,
}: {
  user: UserModel;
  title: string;
  description: string;
}) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Item size="sm">
            <ItemMedia>
              <HashIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{user.id}</ItemTitle>
            </ItemContent>
          </Item>
          <Item size="sm">
            <ItemMedia>
              <UserIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{user.name}</ItemTitle>
            </ItemContent>
          </Item>
          <Item size="sm">
            <ItemMedia>
              <MailIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{user.email}</ItemTitle>
            </ItemContent>
          </Item>
          <Item size="sm">
            <ItemMedia>
              <LockIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{user.role === "ADMIN" ? "Admin" : "User"}</ItemTitle>
            </ItemContent>
          </Item>
          <Item size="sm">
            <ItemMedia>
              <ShieldCheckIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                Two-Factor Authentication:
                <Badge
                  variant={user.isTwoFactorEnabled ? "success" : "destructive"}
                >
                  {user.isTwoFactorEnabled ? "Enabled" : "Disabled"}
                </Badge>
              </ItemTitle>
            </ItemContent>
          </Item>
        </div>
      </CardContent>
    </Card>
  );
}
