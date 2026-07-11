import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  workshopName?: string;
  city?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const workshopName = body.workshopName?.trim();
  const city = body.city?.trim();

  if (!name || !email || !workshopName || !city) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: persist lead (CRM, email, database)
  console.info("[lead]", {
    name,
    email,
    phone: body.phone?.trim() || null,
    workshopName,
    city,
    message: body.message?.trim() || null,
  });

  return NextResponse.json({ ok: true });
}
