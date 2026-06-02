import { BENEFITS } from "@/app/constants";
import Section from "@/app/components/ui/Section";
import Card, { CardContent } from "@/app/components/ui/Card";

const iconMap: Record<string, string> = {
  shield: "🛡️",
  clock: "⏱️",
  calculator: "🧮",
  users: "👥",
};

export default function Benefits() {
  return (
    <Section
      id="beneficios"
      title="¿Por qué elegirnos?"
      subtitle="Nos encargamos de la parte contable para que vos te dediques a crecer."
      background="alt"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit) => (
          <Card key={benefit.id} hover>
            <CardContent className="text-center pt-8 pb-6">
              <div className="text-4xl mb-4" aria-hidden="true">
                {iconMap[benefit.icon] ?? "📋"}
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
