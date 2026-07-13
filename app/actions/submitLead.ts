import { insertLead } from "@/lib/lead";
import { isValidEmail } from "@/lib/utils";
import { LeadFormState } from "@/types/lead";

const initialState: LeadFormState = { ok: false };

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const workshopName = String(formData.get("workshopName") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim() || null;
  const message = String(formData.get("message") ?? "").trim() || null;
  const consent = formData.get("consent") === "on";

  const fieldErrors: LeadFormState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "required";
  if (!email) fieldErrors.email = "required";
  else if (!isValidEmail(email)) fieldErrors.email = "invalid";
  if (!workshopName) fieldErrors.workshopName = "required";
  if (!city) fieldErrors.city = "required";
  if (!consent) fieldErrors.consent = "required";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "validation", fieldErrors };
  }

  try {
    await insertLead({
      name,
      email,
      phone,
      workshopName,
      city,
      message,
      consentGiven: true,
      consentAt: new Date().toISOString(),
    });
    return { ok: true };
  } catch {
    return { ok: false, error: "server" };
  }
}

export { initialState as leadFormInitialState };
