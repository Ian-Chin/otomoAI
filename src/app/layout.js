import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['600', '700', '800', '900'],
});

export const metadata = {
  title: 'otomoAI — AI-Powered Workshop Automation',
  description:
    'otomoAI is the all-in-one AI admin suite for auto workshops and premium bike mechanics. Capture leads, automate admin, and grow your reputation on autopilot.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="bg-slate-950 text-gray-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
