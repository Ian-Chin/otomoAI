export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <a href="#" className="inline-block mb-5">
              <img src="/images/logo.png" alt="otomoAI" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-powered automation suite for auto workshops and premium bike mechanics. Built to help you close more, admin less.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#features" className="link-hover hover:text-gray-300 transition-colors duration-300">Features</a></li>
              <li><a href="#how-it-works" className="link-hover hover:text-gray-300 transition-colors duration-300">How It Works</a></li>
              <li><a href="#compare" className="link-hover hover:text-gray-300 transition-colors duration-300">Comparison</a></li>
              <li><a href="#" className="link-hover hover:text-gray-300 transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#about" className="link-hover hover:text-gray-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#blog" className="link-hover hover:text-gray-300 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="link-hover hover:text-gray-300 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="link-hover hover:text-gray-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@otomoai.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +60 12-345 6789
              </li>
              <li className="flex gap-4 pt-3">
                <a href="#" className="text-gray-600 hover:text-white transition-colors duration-300" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.897 4.897 0 01-2.229-.616v.062a4.918 4.918 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.919 4.919 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-white transition-colors duration-300" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
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
