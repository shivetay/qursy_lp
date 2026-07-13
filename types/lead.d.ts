export type LeadInput = {
  name: string;
  email: string;
  phone: string | null;
  workshopName: string;
  city: string;
  message: string | null;
  consentGiven: boolean;
  consentAt: string; // ISO timestamp
};

export type LeadFormState = {
  ok: boolean;
  error?: "validation" | "consent" | "server";
  fieldErrors?: Partial<
    Record<"name" | "email" | "workshopName" | "city" | "consent", string>
  >;
};
