"use server";

import * as z from "zod";
import bcryptjs from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { prisma } from "@/lib/prisma";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid filed!" };

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email already in use!" };

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  if (!user) return { error: "Failed to create user!" };

  const verificationToken = await generateVerificationToken(email);
  if (!verificationToken)
    return { error: "Failed to generate verification token!" };

  console.log(verificationToken);
  // await sendVerificationEmail(email, verificationToken.token);

  return { success: "Account created successfully!" };
}
