import crypto from "crypto";
import { v4 as uuid } from "uuid";

import { prisma } from "@/lib/prisma";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";

export async function generateTwoFactorToken(email: string) {
  const token = crypto.randomInt(100_000, 999_999).toString(); // 6 digits
  const expires = new Date(new Date().getTime() + 3600 * 1000); // 1 hour

  const existingToken = await getTwoFactorTokenByEmail(email);
  if (existingToken) {
    await prisma.twoFactorToken.delete({
      where: { id: existingToken.id },
    });
  }
  const twoFactorToken = await prisma.twoFactorToken.create({
    data: { email, token, expires },
  });
  return twoFactorToken;
}

export async function generateVerificationToken(email: string) {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // 1 hour

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: { email, token, expires },
  });

  return verificationToken;
}

export async function generatePasswordResetToken(email: string) {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // 1 hour

  const existingToken = await getPasswordResetTokenByEmail(email);
  if (existingToken) {
    await prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: { email, token, expires },
  });

  return passwordResetToken;
}
