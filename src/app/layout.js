import { Manrope, DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
});

export const metadata = {
  title: 'otomoAI — AI-Powered Workshop Automation for Auto & Bike Mechanics',
  description:
    'otomoAI is the all-in-one AI admin suite for auto workshops and premium bike mechanics. Capture leads from Facebook & WhatsApp, automate proposals, invoicing and scheduling, and grow your 5-star reputation on autopilot.',
  keywords: [
    'auto workshop management',
    'AI workshop automation',
    'bike mechanic software',
    'lead generation auto workshop',
    'WhatsApp AI chatbot',
    'workshop CRM',
    'auto repair invoicing',
    'otomoAI',
  ],
  authors: [{ name: 'otomoAI' }],
  creator: 'otomoAI',
  metadataBase: new URL('https://otomoai.com'),
  openGraph: {
    title: 'otomoAI — AI-Powered Workshop Automation',
    description:
      'Stop losing leads. Automate admin, capture enquiries from Facebook & WhatsApp, and grow your workshop reputation — all on autopilot.',
    url: 'https://otomoai.com',
    siteName: 'otomoAI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'otomoAI — AI-Powered Workshop Automation',
    description:
      'The all-in-one AI admin suite for auto workshops. Capture leads, automate invoicing, and grow your reputation on autopilot.',
    creator: '@otomoai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${manrope.variable}`}>
      <head>
        <link rel="canonical" href="https://otomoai.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'otomoAI',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'AI-powered admin suite for auto workshops and premium bike mechanics.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free demo available',
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#08090E] text-gray-300 overflow-x-hidden font-body antialiased">
        {children}
      </body>
    </html>
  );
}
