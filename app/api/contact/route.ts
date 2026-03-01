import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Name, email, phone, and service are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Simple honeypot / rate-limit could be added here in production
    // For now, log the submission (replace with email service like Resend in production)
    console.log("New contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with Resend or other email API
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Luxe Hair Studio <noreply@luxehairstudio.com>',
    //   to: 'hello@luxehairstudio.com',
    //   subject: `New Appointment Request from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Phone:</strong> ${phone}</p>
    //          <p><strong>Service:</strong> ${service}</p>
    //          <p><strong>Message:</strong> ${message || 'N/A'}</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
