import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: {
    name?: string;
    phone?: string;
    classInterested?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, classInterested, message } = body;

  if (!name || !phone || !classInterested) {
    return NextResponse.json(
      { error: "Name, phone number, and class are required." },
      { status: 400 }
    );
  }

  const formId = process.env.GOOGLE_FORM_ID;
  const entryName = process.env.GOOGLE_FORM_ENTRY_NAME;
  const entryPhone = process.env.GOOGLE_FORM_ENTRY_PHONE;
  const entryClass = process.env.GOOGLE_FORM_ENTRY_CLASS;
  const entryMessage = process.env.GOOGLE_FORM_ENTRY_MESSAGE;

  if (!formId || !entryName || !entryPhone || !entryClass) {
    console.error(
      "Contact form is not fully configured: missing GOOGLE_FORM_ID or entry-id env vars. See README."
    );
    return NextResponse.json(
      { error: "Enquiries can't be sent right now. Please call us directly instead." },
      { status: 500 }
    );
  }

  try {
    const formData = new URLSearchParams();
    formData.set(entryName, name);
    formData.set(entryPhone, phone);
    formData.set(entryClass, classInterested);
    if (entryMessage && message) {
      formData.set(entryMessage, message);
    }

    const res = await fetch(
      `https://docs.google.com/forms/d/e/${formId}/formResponse`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
        redirect: "follow",
      }
    );

    // Google Forms doesn't return a clean success status — a non-server-error
    // response (even a redirect it followed to the confirmation page) means
    // the submission went through.
    if (!res.ok && res.status >= 500) {
      throw new Error(`Google Forms responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Couldn't send your enquiry. Please call us directly instead." },
      { status: 500 }
    );
  }
}
