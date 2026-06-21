import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string(),
  company: z.string().optional(),
  vessel: z.string().optional(),
  phone: z.string(),
  email: z.string().email(),
  service: z.string(),
  message: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await resend.emails.send({
      from: "Janata Engineering <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL!,
      subject: "New Quote Request",
      text: JSON.stringify(data, null, 2),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}