import { PROCESS_STEPS } from "@/app/constants";
import Section from "@/app/components/ui/Section";

export default function Process() {
  return (
    <Section
      id="proceso"
      title="¿Cómo trabajamos?"
      subtitle="Un proceso simple en tres pasos para resolver tu situación."
      background="white"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.step}
            className="relative flex flex-col items-center text-center"
          >
            {/* Step number */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold mb-6">
              {step.step}
            </div>

            {/* Connector line (hidden on last step and mobile) */}
            {step.step < PROCESS_STEPS.length && (
              <div
                className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border"
                aria-hidden="true"
              />
            )}

            <h3 className="text-xl font-semibold text-primary">
              {step.title}
            </h3>
            <p className="mt-2 text-text-muted max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
