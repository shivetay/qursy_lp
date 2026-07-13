import { LeadInput } from "@/types/lead";

export async function insertLead(data: LeadInput): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Coś poszło nie tak :(");
  }

  const response = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      workshop_name: data.workshopName,
      city: data.city,
      message: data.message,
      consent_given: data.consentGiven,
      consent_at: data.consentAt,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("[insertLead]", response.status, detail);
    throw new Error("Coś poszło nie tak :(");
  }
}
