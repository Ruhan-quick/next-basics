"use client"; // ১. এরর ফাইল অবশ্যই ক্লায়েন্ট কম্পোনেন্ট হতে হবে

import { useEffect } from "react";

// ২. Next.js এরর ফাইলের ভেতর প্রপস হিসেবে error অবজেক্ট এবং reset ফাংশন পাঠায়
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void; // এটি কল করলে Next.js পেজটি আবার লোড করার চেষ্টা করে
}

export default function UsersError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // আপনি চাইলে এখানে Sentry বা কোনো থার্ড-পার্টি টুলে এরর লগ পাঠাতে পারেন
    console.error("ধরা পড়েছে এরর:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 p-6 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md border border-red-200 max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">দুঃখিত! কোনো সমস্যা হয়েছে</h1>
        
        <p className="text-gray-600 mb-6">
          ইউজার লিস্ট লোড করার সময় সার্ভারে একটি ত্রুটি দেখা দিয়েছে। দয়া করে আবার চেষ্টা করুন।
        </p>

        {/* ৩. reset() ফাংশন ব্যবহার করে পেজটি আবার রান করার বাটন */}
        <button
          onClick={() => reset()}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition font-semibold"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}