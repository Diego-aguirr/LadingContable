"use server";

import { ContactFormSchema } from "@/app/lib/validations/contact";
import { WHATSAPP_URL } from "@/app/constants";

interface ActionResult {
  success: boolean;
  errors?: Record<string, string[]>;
  whatsappUrl?: string;
  error?: string;
}

export async function submitContactForm(
  formData: FormData
): Promise<ActionResult> {
  try {
    const raw = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      message: formData.get("message") as string,
    };

    const parsed = ContactFormSchema.safeParse(raw);

    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const [key, issues] of Object.entries(
        parsed.error.flatten().fieldErrors
      )) {
        fieldErrors[key] = issues as string[];
      }
      return { success: false, errors: fieldErrors };
    }

    const { name, email, phone, message } = parsed.data;

    const whatsappMessage = encodeURIComponent(
      `Hola, soy ${name}.\n\n${message}\n\nEmail: ${email}${phone ? `\nTeléfono: ${phone}` : ""}`
    );

    const whatsappUrl = `${WHATSAPP_URL.split("?")[0]}?text=${whatsappMessage}`;

    return { success: true, whatsappUrl };
  } catch {
    return {
      success: false,
      error: "Ocurrió un error inesperado. Intentá de nuevo.",
    };
  }
}
