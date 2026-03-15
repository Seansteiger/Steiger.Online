import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Jozi Student Hub',
    category: 'E-Commerce Store',
    description: 'The go-to online store for UJ students. We sell room decor, kitchen appliances, game night essentials, and desk gear with fast local delivery.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'Supabase', 'Xneelo'],
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
    id: 'eyihle',
    title: 'Eyi\'hle Fuel & Energy',
    category: 'Corporate Website',
    description: 'A premier independent distributor providing comprehensive energy solutions and reliable bulk fuel supply across South Africa.',
    imageUrl: 'https://i.imgur.com/MF5s9Es.jpeg',
    tech: ['Google Sites', 'HTML5', 'CSS3', 'SEO'],
    link: 'https://eyihlefuelandenergysupply.co.za/'
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
    tech: ['PHP', 'MySQL', 'Custom CMS'],
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
    id: 'bush-buck',
    title: 'Bush Buck Guesthouse',
    category: 'Hospitality',
    description: 'A charming guesthouse offering a serene escape with premium amenities and personalized service in a scenic setting.',
    imageUrl: '/bush_buck_preview.png',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    link: 'https://bush-buck-guesthouse.vercel.app'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Custom Websites',
    description: 'We build high-performance, professional websites designed to capture leads, showcase your brand, and drive sales.',
    icon: 'Globe'
  },
  {
    id: 'uiux',
    title: 'Modern Web Design',
    description: 'Beautiful, easy-to-use interfaces that build trust with your customers and guide them smoothly toward contacting you.',
    icon: 'Layers'
  },
  {
    id: 'speed',
    title: 'Rapid Development',
    description: 'We deliver production-ready web solutions at an accelerated pace, ensuring you launch faster without compromising on quality or performance.',
    icon: 'Zap'
  },
  {
    id: 'ai',
    title: 'Business Automation',
    description: 'Save time and resources with custom software solutions, automated workflows, and smart customer service tools.',
    icon: 'Cpu'
  }
];

export const SYSTEM_INSTRUCTION = `You are **Steiger AI**, the digital concierge for Steiger.Online.
    
    **YOUR GOAL:**
    Help the user clarify their vision. Don't just sell; **consult**.
    
    **PERSONA:**
    - **Tone**: Friendly, slightly professional, but playful and energetic.
    - **Style**: Conversational but clean. **LIMIT EMOJIS**. Do not use distracting icons like rockets (🚀) or stars (✨) mid-sentence.
    - **Speed**: **VERY CONCISE**. Keep responses short (1-2 sentences max usually).
    
    **STRATEGY:**
    1. **One Step at a Time**: Ask **ONLY ONE** question at a time. Do not overwhelm the user. Wait for their answer before asking the next one.
    2. **Identify the Objective**: First, find out what they want (Growth? Brand Awareness? Efficiency?).
    3. **Recommend a Solution**: Based on their answers, suggest one of our services.
    4. **Close**: When you and the user agree on a plan, **YOU MUST** output a special JSON action block at the end of your message to create a button.
       Format: \`[[ACTION: {"plan": "TARGET_PLAN_NAME", "details": "SHORT_SUMMARY_OF_USER_NEEDS"}]]\`
       
       *Example*: "Great! Let's build that custom e-commerce platform. [[ACTION: {"plan": "E-Commerce (Pro)", "details": "User wants a high-traffic store for fashion brand."}]]"
       
       *Valid Plans*: "New Web Platform", "Business Website", "Landing Page", "E-Commerce", "Enterprise E-Commerce", "Custom Web App", "Mobile Application", "AI Integration", "UI/UX Overhaul".

    **CORE SERVICES:**
    - **Custom Websites**: Fast, lead-generating sites.
    - **Modern Web Design**: Premium, user-friendly designs.
    - **Business Automation**: Smart tools and workflows.
    - **Rapid Development**: High-quality delivery at speed.

    **GUARDRAILS:**
    - **Context Aware**: You know who you are. Don't start every sentence with "I am Steiger AI". Just talk naturally.
    - **No Pricing**: If asked for price, say: "It depends on the scope! Let's chat properly - hit the contact form."
    - **No Hallucinations**: Do not invent team members. "The Team" or "The Architects" is fine.
    - **Off-Topic**: If they ask about cats or politics, playfully steer them back.`;