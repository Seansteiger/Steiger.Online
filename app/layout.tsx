import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://steigeronline.co.za'),
  title: {
    default: 'Steiger Online | High-Performance Web Design & Digital Architecture',
    template: '%s | Steiger Online',
  },
  description:
    'We engineer bespoke, conversion-driven Next.js websites, high-speed e-commerce storefronts, and smart web platforms that turn visitors into high-paying clients. Based in Benoni, Johannesburg, serving South Africa & global brands.',
  keywords: [
    'web design benoni',
    'web development johannesburg',
    'custom next.js developer south africa',
    'high converting web agency',
    'ecommerce website development south africa',
    'web design agency gauteng',
    'seo web development',
    'react developers johannesburg',
    'custom business software south africa',
    'steiger online'
  ],
  authors: [{ name: 'Sean Steiger', url: 'https://steigeronline.co.za' }],
  creator: 'Steiger Online',
  publisher: 'Steiger Online',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: 'https://steigeronline.co.za',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://steigeronline.co.za',
    siteName: 'Steiger Online Web Agency',
    title: 'Steiger Online | Web Design & Engineering Studio',
    description:
      'Turn visitors into high-paying clients with bespoke Next.js web applications, sub-second load times, and conversion-engineered digital architecture.',
    images: [
      {
        url: '/site-preview.png',
        width: 1200,
        height: 630,
        alt: 'Steiger Online - Premier Web & Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steiger Online | Web Design & Engineering Studio',
    description:
      'We engineer high-converting digital platforms that build unshakeable brand authority and multiply revenue.',
    images: ['/site-preview.png'],
  },
  icons: {
    icon: '/favicon-v2.png',
    apple: '/favicon-v2.png',
  },
  other: {
    'geo.region': 'ZA-GT',
    'geo.placename': 'Benoni, Johannesburg',
    'geo.position': '-26.1929;28.3099',
    'ICBM': '-26.1929, 28.3099',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Steiger Online',
    alternateName: 'Steiger.Online Web Agency',
    url: 'https://steigeronline.co.za',
    logo: 'https://steigeronline.co.za/favicon-v2.png',
    image: 'https://steigeronline.co.za/site-preview.png',
    description:
      'Premier high-performance web design and digital architecture agency in Benoni, Johannesburg. We build bespoke websites, e-commerce storefronts, and automated platforms.',
    telephone: '+27699751347',
    email: 'neo@steigeronline.co.za',
    priceRange: 'R1499 - R12999+',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Benoni',
      addressRegion: 'Gauteng',
      postalCode: '1501',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.1929,
      longitude: 28.3099,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://wa.me/27699751347',
      'https://github.com/Seansteiger'
    ],
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--bg-base)] text-[var(--text-primary)] font-sans selection:bg-amber-400/30 selection:text-white antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
