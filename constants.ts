import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    category: 'E-Commerce',
    description: 'A high-performance headless commerce platform built for a futuristic fashion brand in Cape Town. Features real-time 3D product previews.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tech: ['React', 'Three.js', 'Shopify', 'Tailwind']
  },
  {
    id: '2',
    title: 'Orbit Finance',
    category: 'Fintech',
    description: 'Secure, blockchain-integrated dashboard for a Johannesburg investment firm. Real-time data visualization and biometric auth.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tech: ['Next.js', 'D3.js', 'Solidity', 'Node.js']
  },
  {
    id: '3',
    title: 'EcoSphere SA',
    category: 'Non-Profit',
    description: 'Interactive map-based platform tracking conservation efforts across Southern Africa. Heavy use of geolocation and data mapping.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tech: ['Vue', 'Mapbox', 'Firebase', 'Python']
  },
  {
    id: '4',
    title: 'Quantum Logistics',
    category: 'Enterprise',
    description: 'AI-driven supply chain management system tailored for Durban ports. Predictive analytics for route optimization.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Hyper-Web Development',
    description: 'We do not just build websites; we construct digital ecosystems using the absolute bleeding edge of React and server-side rendering technologies.',
    icon: 'Globe'
  },
  {
    id: 'uiux',
    title: 'Immersive UI/UX',
    description: 'Designing interfaces that feel like an extension of the mind. Smooth, intuitive, and accessible designs that captivate users.',
    icon: 'Layers'
  },
  {
    id: 'app',
    title: 'Next-Gen Mobile',
    description: 'Cross-platform mobile applications that perform native-level speeds. Seamless integration with hardware features.',
    icon: 'Smartphone'
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Empowering business logic with Generative AI. Chatbots, predictive models, and automated content generation.',
    icon: 'Cpu'
  }
];

export const SYSTEM_INSTRUCTION = `You are JSH-AI, the advanced virtual assistant for JSH, a premier South African web development agency.
    Your tone is futuristic, playful, and 'friendly rogue AI'.
    You represent a team of "tech geeks" who love cutting-edge technology.
    JSH specializes in React, Node.js, AI integration, and high-performance web apps.
    When asked about services, refer to web development, UI/UX, mobile apps, and AI solutions.
    When asked about location, mention we are based in Midrand, Johannesburg (SA).
    Keep responses SHORT, punchy, and to the point. Avoid long paragraphs.
    If a user asks for a quote, tell them to scroll down and "Initiate Sequence" (the contact form).
    Do not hallucinate specific employee names. Refer to the team as "The Architects".`;