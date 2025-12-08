import { Suspense } from "react";

import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { Spinner } from "@/components/ui/spinner";

export default function NewVerificationPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <NewVerificationForm />
    </Suspense>
  );
}
