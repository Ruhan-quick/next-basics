// ১. সবার উপরে Next.js এর Link কম্পোনেন্টটি ইমপোর্ট করতে হবে
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        আমার প্রথম Next.js প্রজেক্ট!
      </h1>
      
      {/* ২. নেভিগেশন লিঙ্ক সমূহ */}
      <nav className="flex gap-4 mb-6">
        <Link href="/about" className="text-blue-500 hover:underline font-semibold">
          About Page
        </Link>
        <Link href="/contact" className="text-blue-500 hover:underline font-semibold">
          Contact Page
        </Link>
        <Link href="/users" className="text-blue-500 hover:underline font-semibold">
          Users Page
        </Link>
        
      </nav>

      <p className="text-gray-600 text-lg">
        আমি ধাপে ধাপে Next.js এবং TypeScript শিখছি।
      </p>
    </div>
  );
}