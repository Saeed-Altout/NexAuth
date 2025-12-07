"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { LoginSchema } from "@/schemas";
import { prisma } from "@/lib/prisma";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid filed!" };
  }

  return { success: "Login successful!" };
}
