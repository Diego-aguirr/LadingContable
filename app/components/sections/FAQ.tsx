import { FAQS } from "@/app/constants";
import Section from "@/app/components/ui/Section";

export default function FAQ() {
  return (
    <Section
      id="faq"
      title="Preguntas frecuentes"
      subtitle="Resolvemos las dudas más comunes sobre monotributo y nuestros servicios."
      background="white"
    >
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-lg border border-border">
        {FAQS.map((faq, index) => (
          <details
            key={index}
            className="group"
          >
            <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-primary transition-colors hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <svg
                className="ml-4 h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="px-6 pb-5 text-text-muted leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
