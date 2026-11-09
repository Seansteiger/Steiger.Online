import Link from 'next/link';
import { Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The requested page could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-slate-900 flex flex-col justify-between px-6 py-12">
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="font-bold text-base tracking-tight text-slate-900">
          STEIGER<span className="text-amber-600">.ONLINE</span>
        </Link>
      </header>

      <main className="max-w-xl mx-auto text-center py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-amber-500/10 text-amber-700 border border-amber-500/20 mb-6">
          <span>ERROR 404</span>
          <span>•</span>
          <span>PAGE NOT FOUND</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4 font-mono">
          Lost in cyberspace?
        </h1>

        <p className="text-base text-slate-600 leading-relaxed mb-8">
          The page or route you are looking for does not exist, has been moved, or has been merged into our single-page experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-mono font-semibold hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-700 border border-slate-200 text-xs font-mono font-medium hover:border-slate-300 transition-colors shadow-xs cursor-pointer"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto w-full text-center text-xs font-mono text-slate-400">
        © {new Date().getFullYear()} Steiger Online. Digital Architecture &amp; Web Engineering.
      </footer>
    </div>
  );
}
