// ১. ক্লায়েন্ট কম্পোনেন্ট হিসেবে ডিক্লেয়ার করার জন্য সবার উপরে এটি দিতেই হবে
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  // ২. স্টেট ডিক্লেয়ার করা
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-purple-50">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Contact Page (Interactive)</h1>
      
      {/* ৩. বাটন ইন্টারঅ্যাকশন */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center mb-6">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          Total Clicks: <span className="text-purple-600">{count}</span>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Click Me
        </button>
      </div>

      <Link href="/" className="text-purple-500 hover:underline font-semibold">
        Go Back Home
      </Link>
    </div>
  );
}