import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
  code: z.string().optional(),
});

export const RegisterSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(6),
});

export const ResetSchema = z.object({
  email: z.email(),
});

export const NewPasswordSchema = z
  .object({
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
