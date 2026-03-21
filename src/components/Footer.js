import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image src="/images/logo.png" alt="otomoAI" width={96} height={48} className="h-20 w-auto" loading="lazy" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-powered automation suite for auto workshops and premium bike mechanics. Built to help you close more, admin less.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/#features" className="link-hover hover:text-gray-300 transition-colors duration-300">Features</Link></li>
              <li><Link href="/#how-it-works" className="link-hover hover:text-gray-300 transition-colors duration-300">How It Works</Link></li>
              <li><Link href="/#compare" className="link-hover hover:text-gray-300 transition-colors duration-300">Comparison</Link></li>
              <li><a href="#" className="link-hover hover:text-gray-300 transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/blog" className="link-hover hover:text-gray-300 transition-colors duration-300">Blog</Link></li>
              <li><a href="#" className="link-hover hover:text-gray-300 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="link-hover hover:text-gray-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="section-divider" />
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">&copy; 2026 otomoAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="link-hover hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="link-hover hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
