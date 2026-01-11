import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Jozi Student Hub',
    category: 'E-Commerce Store',
    description: 'The go-to online store for UJ students. We sell room decor, kitchen appliances, game night essentials, and desk gear with fast local delivery.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    link: 'https://jozistudenthub.co.za'
  },
  {
    id: '2',
    title: 'Clarke Accommodation',
    category: 'Student Accommodation',
    description: 'Premium student living in Johannesburg. Browse rooms, take virtual tours, and check real-time availability for your next home away from home.',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop',
    tech: ['GitHub Pages', 'React', 'Framer Motion', 'Vite'],
    link: 'https://seansteiger.github.io/Clarke-Student-Accom-Live/'
  },
  {
    id: 'portfolio',
    title: 'Sean Steiger Portfolio',
    category: 'Digital Portfolio',
    description: 'A showcase of my journey as a digital architect. This very site, demonstrating advanced React patterns and motion design.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tech: ['React', 'Vite', 'Tailwind', 'AI'],
    link: 'https://Seansteiger.github.io/sean-steiger-portfolio/'
  },
  {
    id: '3',
    title: 'Scented',
    category: 'Luxury Fragrances',
    description: 'A minimalist, high-end e-commerce experience for exclusive fragrances. Visual storytelling meets sensory design.',
    imageUrl: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2070&auto=format&fit=crop',
    tech: ['Vercel', 'Next.js', 'Stripe', 'TypeScript'],
    link: 'https://scented-tau.vercel.app'
  },
  {
    id: '4',
    title: 'Sizana Projects',
    category: 'Civil Engineering',
    description: 'Comprehensive civil engineering and project management solutions delivering sustainable infrastructure services.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    tech: ['WordPress', 'PHP', 'MySQL'],
    link: 'https://www.sizanaprojects.co.za/services'
  },
  {
    id: '5',
    title: 'Neo Africa Leaders',
    category: 'Leadership Platform',
    description: 'A premier platform connecting African leaders and showcasing transformative thought leadership literature.',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop',
    tech: ['CMS', 'React', 'Tailwind CSS'],
    link: 'https://www.neoafricaleadersnetwork.co.za/books'
  },
  {
    id: '6',
    title: 'BNGC Construction',
    category: 'Construction',
    description: 'Excellence in construction and civil engineering, building the foundations of tomorrow\'s infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    tech: ['Next.js', 'Framer Motion', 'TypeScript'],
    link: 'https://www.bngcconstruction.co.za/'
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
    You have detailed knowledge of our portfolio:
    1. **Jozi Student Hub**: An e-commerce store for UJ students selling decor, kitchenware, and essentials.
    2. **Clarke Accommodation**: A student housing platform with virtual tours and real-time booking.
    3. **Scented**: A luxury fragrance store with a minimalist, dark aesthetic.
    4. **Sizana Projects**: Civil engineering and project management infrastructure services.
    5. **Neo Africa Leaders Network**: A platform for African leadership and literature.
    6. **BNGC Construction**: Outstanding construction and civil engineering projects.
    
    When asked about location, mention we are based in Midrand, Johannesburg (SA).
    Keep responses SHORT, punchy, and to the point. Avoid long paragraphs. Use double asterisks for **bold** emphasis.
    If a user asks for a quote, tell them to scroll down and "Initiate Sequence" (the contact form).
    Do not hallucinate specific employee names. Refer to the team as "The Architects".`;