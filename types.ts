export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tech: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HOME = 'home',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}