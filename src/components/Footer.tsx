import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-6 text-xs text-neutral-500 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-sm tracking-tight dark:text-white">TechMate Studio</span>
          <p className="mt-1">© {new Date().getFullYear()} TechMate Studio. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/privacy" className="hover:text-blue-500">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-500">Terms & Conditions</Link>
          <a href="/app-ads.txt" className="hover:text-blue-500">app-ads.txt</a>
        </div>
      </div>
    </footer>
  );
}