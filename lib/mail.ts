import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "NexAuth <onboarding@resend.dev>",
    to: email,
    subject: "Confirm your email",
    html: `<p>Confirm your email by clicking <a href="${confirmationLink}">here</a></p>`,
  });
};
