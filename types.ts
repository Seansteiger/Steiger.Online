export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  metric: string;
  imageUrl: string;
  tech: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  devPrice: string;
  hostPrice: string;
  turnaround: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HOME = 'home',
  PORTFOLIO = 'portfolio',
  SERVICES = 'services',
  PRICING = 'pricing',
  PROCESS = 'process',
  FAQ = 'faq',
  CONTACT = 'contact'
}
