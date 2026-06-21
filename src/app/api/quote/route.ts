import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  vessel: z.string().optional(),
  phone: z.string().min(6, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  service: z.string().optional(),
  message: z.string().min(5, "Message is required"),
});

function cleanValue(value?: string) {
  return value && value.trim().length > 0 ? value.trim() : "N/A";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          success: false,
          message: "Telegram configuration is missing.",
        },
        { status: 500 }
      );
    }

    const telegramMessage = `
🚢 NEW QUOTE REQUEST

👤 Name: ${cleanValue(data.name)}
🏢 Company: ${cleanValue(data.company)}
🚢 Vessel: ${cleanValue(data.vessel)}
📞 Phone: ${cleanValue(data.phone)}
📧 Email: ${cleanValue(data.email)}
⚙️ Service: ${cleanValue(data.service)}

🛠 Requirement:
${cleanValue(data.message)}

━━━━━━━━━━━━━━━━━━━━
Janata Electric & Engineering Workshop
Chattogram Port • 24/7 Marine Support
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();

      return NextResponse.json(
        {
          success: false,
          message: "Telegram message failed.",
          error: errorText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}