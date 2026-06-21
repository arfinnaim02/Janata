import { Resend } from 'resend';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured. Add it to .env.local before using email forms.');
  }
  return new Resend(apiKey);
}

function getEmailConfig() {
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;
  if (!from || !to) {
    throw new Error('RESEND_FROM and RESEND_TO must be configured in .env.local.');
  }
  return { from, to };
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient();
    const { from, to } = getEmailConfig();
    await resend.emails.send({
      from,
      to,
      reply_to: data.email,
      subject: `Contact form submission from ${data.name}`,
      html: `<p>You have received a new message from the website contact form.</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>`,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send email' };
  }
}

export async function sendQuoteEmail(data: {
  name: string;
  company?: string;
  vessel?: string;
  service?: string;
  phone: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient();
    const { from, to } = getEmailConfig();
    await resend.emails.send({
      from,
      to,
      reply_to: data.email,
      subject: `Quote request from ${data.name}`,
      html: `<p>You have received a new quote request.</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Vessel:</strong> ${data.vessel || 'N/A'}</p>
        <p><strong>Service:</strong> ${data.service || 'N/A'}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>`,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send email' };
  }
}
