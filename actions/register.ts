"use server";

import { RegisterSchema } from "@/schemas";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid filed!" };
  }

  return { success: "Register successful!" };
}
