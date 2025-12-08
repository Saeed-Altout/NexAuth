"use client";

import Link from "next/link";
import { useTransition, useState } from "react";
import { useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { LoginSchema } from "@/schemas";

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
import { PasswordInput } from "./password-input";
import { ErrorMessage } from "./error-message";
import { SuccessMessage } from "./success-message";

import { login } from "@/actions/login";

export function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "An account with this email already exists."
      : "";

  const [error, setError] = useState<string>(urlError || "");
  const [success, setSuccess] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const result = await login(values);
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
      title="Login to your account"
      description="Enter your email below to login to your account"
      redirectTo={{ href: "/auth/register", label: "Don't have an account ?" }}
      google
      github
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput disabled={isPending} {...field} />
                </FormControl>
                <Button
                  variant="link"
                  size="sm"
                  asChild
                  className="mr-auto p-0"
                >
                  <Link href="/auth/reset">Forgot password?</Link>
                </Button>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <ErrorMessage message={error} />}
          {success && <SuccessMessage message={success} />}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending && <Spinner />}
            Login
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
}
