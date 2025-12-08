import { Suspense } from "react";

import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Spinner } from "@/components/ui/spinner";

export default function NewPasswordPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <NewPasswordForm />
    </Suspense>
  );
}
