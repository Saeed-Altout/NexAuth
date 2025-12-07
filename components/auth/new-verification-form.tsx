"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/new-verification";

import { Spinner } from "@/components/ui/spinner";

import { Wrapper } from "./wrapper";
import { ErrorMessage } from "./error-message";
import { SuccessMessage } from "./success-message";

export function NewVerificationForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    async function verify() {
      if (!token) {
        if (isMounted) setError("Invalid token!");
        return;
      }

      setError("");
      setSuccess("");

      try {
        const result = await newVerification(token);
        if (!isMounted) return;

        if (result?.error) {
          setError(result.error);
        } else if (result?.success) {
          setSuccess(result.success);
          setTimeout(() => {
            router.push("/auth/login");
          }, 1500);
        }
      } catch {
        if (isMounted) setError("Something went wrong!");
      }
    }

    verify();

    return () => {
      isMounted = false;
    };
  }, [token, router]);

  return (
    <Wrapper
      title="Confirm your verification"
      redirectTo={{ href: "/auth/login", label: "Back to login" }}
    >
      <div className="flex flex-col items-center justify-center">
        {!error && !success && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {success && <SuccessMessage message={success} />}
      </div>
    </Wrapper>
  );
}
