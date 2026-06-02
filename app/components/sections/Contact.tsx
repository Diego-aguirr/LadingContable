"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  ContactFormSchema,
  type ContactFormInput,
} from "@/app/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { WHATSAPP_URL } from "@/app/constants";
import Section from "@/app/components/ui/Section";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

export default function Contact() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successUrl, setSuccessUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormInput) {
    setServerError(null);
    setSuccessUrl(null);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    if (data.phone) formData.append("phone", data.phone);
    formData.append("message", data.message);

    const result = await submitContactForm(formData);

    if (result.success && result.whatsappUrl) {
      setSuccessUrl(result.whatsappUrl);
      reset();
    } else if (result.error) {
      setServerError(result.error);
    } else if (result.errors) {
      setServerError("Por favor, revisá los datos ingresados.");
    }
  }

  return (
    <Section
      id="contacto"
      title="Contactanos"
      subtitle="Dejanos tus datos y te respondemos en menos de 24 horas."
      background="white"
    >
      <div className="mx-auto max-w-2xl">
        {/* Success state */}
        {successUrl && (
          <div
            className="mb-8 rounded-lg border border-success bg-success/10 p-6 text-center"
            role="status"
          >
            <p className="text-lg font-semibold text-success mb-4">
              ¡Mensaje enviado con éxito!
            </p>
            <p className="text-text-muted mb-4">
              Completá el envío por WhatsApp para que recibamos tu consulta.
            </p>
            <Button as="a" href={successUrl} variant="secondary" size="lg">
              Abrir WhatsApp
            </Button>
          </div>
        )}

        {/* Form */}
        {!successUrl && (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Nombre completo"
                placeholder="Juan Pérez"
                required
                error={errors.name?.message}
                {...register("name")}
              />

              <Input
                label="Email"
                type="email"
                placeholder="juan@ejemplo.com"
                required
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <Input
              label="Teléfono"
              type="tel"
              placeholder="+54 11 1234-5678"
              error={errors.phone?.message}
              {...register("phone")}
            />

            <Input
              as="textarea"
              label="Mensaje"
              placeholder="Contanos en qué podemos ayudarte..."
              required
              error={errors.message?.message}
              {...register("message")}
            />

            {serverError && (
              <p className="text-sm text-error" role="alert">
                {serverError}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              className="w-full"
            >
              Enviar consulta
            </Button>
          </form>
        )}

        {/* WhatsApp fallback */}
        <div className="mt-8 text-center text-text-muted">
          <p>
            ¿Preferís escribirnos directamente?{" "}
            <a
              href={WHATSAPP_URL}
              className="font-semibold text-secondary underline underline-offset-4 hover:text-primary transition-colors"
            >
              Chateá por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
