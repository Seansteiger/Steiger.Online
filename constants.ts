import { Project, Service, PricingTier, ProcessStep, FAQItem } from './types';

export const TRUST_BADGES = [
  'Jozi Student Hub',
  'TKO Boxing Club',
  'Eyi\'hle Fuel & Energy',
  'Bush Buck Guesthouse',
  'Invited Events',
  'New Life Baptist',
];

export const SERVICES: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Clean, modern websites that showcase your business and get customers to call or WhatsApp you.',
    features: ['Looks great on mobile phones', 'Shows up on Google search', 'Easy to update anytime'],
    icon: 'Globe'
  },
  {
    id: 'online-stores',
    title: 'Online Stores',
    description: 'Sell your products online with an easy shopping cart and secure card payments.',
    features: ['PayFast, Yoco & card checkout', 'Automatic order alerts', 'Product catalog & photos'],
    icon: 'ShoppingBag'
  },
  {
    id: 'web-apps',
    title: 'Web Apps & Portals',
    description: 'Custom tools, client login portals, and booking systems made to make your business run smoothly.',
    features: ['Client accounts & logins', 'Custom booking systems', 'Automated workflows'],
    icon: 'Layers'
  },
  {
    id: 'smart-tools',
    title: 'WhatsApp & Smart Tools',
    description: 'Automatic WhatsApp chat buttons, booking calendars, and 24/7 helpful website assistants.',
    features: ['Instant WhatsApp chat button', 'Google calendar connection', 'Helpful chat assistant'],
    icon: 'Cpu'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'jsh',
    title: 'JSH (Jozi Student Hub)',
    category: 'E-Commerce Store',
    tagline: 'Online student essentials and campus retail store in Johannesburg',
    metric: 'Online Store',
    imageUrl: '/jsh_preview.png',
    tech: ['Online Store', 'Fast Checkout', 'Mobile Friendly'],
    link: 'https://jozistudenthub.co.za'
  },
  {
    id: 'tko-club',
    title: 'TKO Boxing Club',
    category: 'Fitness & Booking',
    tagline: 'High-energy boxing gym website with class schedules and trial bookings',
    metric: '3.4x More Bookings',
    imageUrl: '/tko_preview.png',
    tech: ['Mobile First', 'WhatsApp Booking', 'Class Timetable'],
    link: 'https://tko-club.vercel.app/'
  },
  {
    id: 'eyihle-energy',
    title: 'Eyi\'hle Fuel & Energy',
    category: 'Energy & Logistics',
    tagline: 'Bulk fuel supply, petroleum distribution, and logistics company',
    metric: 'National Reach',
    imageUrl: '/eyihle_preview.png',
    tech: ['Corporate Profile', 'Fleet Showcase', 'Quote Inquiries'],
    link: 'https://eyihlefuelandenergysupply.co.za/'
  },
  {
    id: 'bush-buck',
    title: 'Bush Buck Guesthouse',
    category: 'Hospitality & Lodge',
    tagline: 'Scenic safari guesthouse website with suite showcase and direct booking',
    metric: 'Direct Bookings',
    imageUrl: '/bush_buck_preview.png',
    tech: ['Photo Gallery', 'Suite Tours', 'Direct Inquiries'],
    link: 'https://bush-buck-guesthouse.vercel.app'
  },
  {
    id: 'invited',
    title: 'Invited',
    category: 'Events & Planning',
    tagline: 'Luxury wedding, corporate event planning, and decor portfolio',
    metric: '4.2x Client Leads',
    imageUrl: '/invited_preview.png',
    tech: ['Clean Design', 'Booking Forms', 'Photo Showcase'],
    link: 'https://invited.steigeronline.co.za'
  },
  {
    id: 'new-life-baptist',
    title: 'New Life Baptist',
    category: 'Community & Church',
    tagline: 'Welcoming church community website with sermon streams and service times',
    metric: 'Active Community',
    imageUrl: '/nlb_preview.png',
    tech: ['Event Schedule', 'Sermon Media', 'Location Map'],
    link: 'https://nlb.steigeronline.co.za'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    badge: 'Quick Launch',
    devPrice: 'From R999',
    hostPrice: 'R99/mo',
    turnaround: '2 to 3 Days',
    features: [
      '1 clean, single page designed to get inquiries',
      'WhatsApp button & contact form',
      'Loads fast on mobile phones',
      'Domain & security setup included'
    ]
  },
  {
    id: 'business',
    name: 'Business Website',
    badge: 'Most Popular',
    popular: true,
    devPrice: 'From R1,999',
    hostPrice: 'R149/mo',
    turnaround: '4 to 5 Days',
    features: [
      'Up to 5 custom pages (Home, About, Services, Contact)',
      'You can update text & photos yourself easily',
      'Helps your business show up on Google',
      '1 Month of free help and support'
    ]
  },
  {
    id: 'webapp',
    name: 'Custom Web App',
    badge: 'Custom Tools',
    devPrice: 'From R3,499',
    hostPrice: 'R249/mo',
    turnaround: '7 to 10 Days',
    features: [
      'Client portals, dashboards, or booking systems',
      'User logins and private customer accounts',
      'Automated forms to save you hours of work',
      'Custom database & cloud setup'
    ]
  },
  {
    id: 'ecommerce',
    name: 'Online Store (E-Commerce)',
    badge: 'Full Shop',
    devPrice: 'From R3,999',
    hostPrice: 'R299/mo',
    turnaround: '7 to 10 Days',
    features: [
      'Full online store to sell products',
      'Accept card payments (PayFast, Yoco, Ozow)',
      'Product catalog, inventory & automated order emails',
      'Customer accounts & order tracking'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell Us Your Idea',
    duration: '',
    description: 'We chat about what your business does and what you need on your website.'
  },
  {
    step: '02',
    title: 'We Create The Design',
    duration: '',
    description: 'We build a clean, modern design preview tailored to your brand.'
  },
  {
    step: '03',
    title: 'We Build The Website',
    duration: '',
    description: 'We code the website, make it super fast, and test it on phones and computers.'
  },
  {
    step: '04',
    title: 'You Go Live',
    duration: '',
    description: 'We connect your domain (.co.za) and launch your site ready for customers.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How fast can our website be ready?',
    answer: 'A simple landing page takes about 2 to 3 days. A full business website takes 4 to 5 days, and an online store or web app takes about 7 to 10 days.'
  },
  {
    question: 'Can I edit the words and pictures myself later?',
    answer: 'Yes! We make it very easy for you to log in and change your own prices, text, or photos anytime without needing any coding skills.'
  },
  {
    question: 'Do you set up my domain and business emails?',
    answer: 'Yes, we take care of everything for you: your custom web address (e.g. yourbusiness.co.za), security certificates, and your professional email.'
  },
  {
    question: 'How does payment work?',
    answer: 'We ask for a 50% deposit to start working on your website, and the remaining 50% only when the website is completely finished and you are happy with it.'
  }
];
