import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),
  email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Ingresá un email válido"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[\d\s\-()]{8,20}$/.test(val),
      "Ingresá un número de teléfono válido"
    ),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede superar los 1000 caracteres"),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
