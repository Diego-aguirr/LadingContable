export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  siteUrl: string;
}
