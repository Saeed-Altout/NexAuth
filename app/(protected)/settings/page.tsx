import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function SettingsPage() {
  const session = await auth();

  console.log(session?.user?.role);

  return (
    <div>
      {JSON.stringify(session, null, 2)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}
