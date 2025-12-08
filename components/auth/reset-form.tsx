"use client";

import { useTransition, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { ResetSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { Wrapper } from "./wrapper";
import { EmailInput } from "./email-input";
import { ErrorMessage } from "./error-message";
import { SuccessMessage } from "./success-message";

import { reset } from "@/actions/reset";

export function ResetForm() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const result = await reset(values);
      if (result?.error) {
        setError(result.error);
      }
      if (result?.success) {
        setSuccess(result.success);
      }
    });
  };

  return (
    <Wrapper
      title="Forgot your password?"
      description="Enter your email below to receive a password reset link"
      redirectTo={{ href: "/auth/login", label: "Back to login" }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <EmailInput disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <ErrorMessage message={error} />}
          {success && <SuccessMessage message={success} />}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending && <Spinner />}
            Reset
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
}
