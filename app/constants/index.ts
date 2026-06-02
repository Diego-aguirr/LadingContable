import type { Benefit, ProcessStep, FAQ, Testimonial, SiteMetadata } from "@/app/types";

export const SITE_METADATA: SiteMetadata = {
  title: "Estudio Contable — Expertos en Monotributo y Asesoramiento Impositivo",
  description:
    "Estudio contable especializado en monotributo, alta de monotributo, asesoramiento impositivo y servicios contables para autónomos y pequeñas empresas.",
  keywords: [
    "monotributo",
    "contador para monotributistas",
    "asesoramiento impositivo",
    "servicios contables",
    "alta de monotributo",
    "estudio contable",
    "contabilidad autónomos",
  ],
  ogImage: "/og-image.png",
  siteUrl: "https://estudiocontable.com.ar",
};

export const WHATSAPP_URL =
  "https://wa.me/5491112345678?text=Hola%2C%20quiero%20consultar%20sobre%20sus%20servicios%20contables";

export const NAV_ITEMS = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    icon: "shield",
    title: "Trámites sin errores",
    description:
      "Nos encargamos de toda la gestión para que no te preocupes por formularios ni plazos.",
  },
  {
    id: 2,
    icon: "clock",
    title: "Respuesta inmediata",
    description:
      "Atención personalizada por WhatsApp con respuesta en menos de 24 horas.",
  },
  {
    id: 3,
    icon: "calculator",
    title: "Optimización fiscal",
    description:
      "Encontramos el monotributo ideal para tu actividad y minimizamos tu carga impositiva.",
  },
  {
    id: 4,
    icon: "users",
    title: "Acompañamiento continuo",
    description:
      "No solo hacemos el alta: te acompañamos todo el año con facturación, categorización y recategorización.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Contactanos",
    description:
      "Escribinos por WhatsApp o completá el formulario con tus datos.",
  },
  {
    step: 2,
    title: "Analizamos tu caso",
    description:
      "Revisamos tu situación y te proponemos la mejor categoría de monotributo.",
  },
  {
    step: 3,
    title: "Gestionamos todo",
    description:
      "Nos ocupamos del alta, la inscripción y los trámites ante AFIP.",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "¿Qué es el monotributo?",
    answer:
      "El monotributo es un régimen simplificado para pequeños contribuyentes que unifica el pago de impuestos y aportes jubilatorios en una cuota fija mensual.",
  },
  {
    question: "¿Cuánto cuesta el trámite de alta?",
    answer:
      "El costo depende de la categoría y los servicios adicionales que necesites. Contactanos para una cotización personalizada sin compromiso.",
  },
  {
    question: "¿Puedo cambiar de categoría después?",
    answer:
      "Sí, podés recategorizarte dos veces al año (enero y julio) o cuando tu facturación cambie. Nosotros te asesoramos en cada caso.",
  },
  {
    question: "¿Qué necesito para darme de alta?",
    answer:
      "Solo necesitás tu DNI, CUIT (si ya tenés) y los datos de tu actividad. Nosotros nos encargamos del resto.",
  },
  {
    question: "¿Atienden a todo el país?",
    answer:
      "Sí, trabajamos de forma 100% digital para clientes de toda Argentina. Solo necesitás WhatsApp y correo electrónico.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "María González",
    role: "Diseñadora Freelance",
    quote:
      "Me dieron de alta en monotributo en 48 horas. Excelente atención y siempre disponibles por WhatsApp.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Comerciante",
    quote:
      "Llevaba meses sin poder resolver un problema con AFIP. En una semana me lo solucionaron.",
    rating: 5,
  },
  {
    name: "Luciana Pérez",
    role: "Desarrolladora Web",
    quote:
      "El mejor estudio contable con el que trabajé. Profesionales, rápidos y con precios justos.",
    rating: 5,
  },
];
