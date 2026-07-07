// ১. TypeScript এর জন্য params এর একটি টাইপ বা ইন্টারফেস ডিফাইন করা
interface BlogDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

// ২. কম্পোনেন্টে params প্রপস হিসেবে রিসিভ করা
export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
  // ৩. Next.js-এর নিয়ম অনুযায়ী params-কে await করে ভেতরের id-টি বের করা
  const resolvedParams = await params;
  const blogId = resolvedParams.id;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-50">
      <h1 className="text-4xl font-bold text-amber-800 mb-2">
        ব্লগ পোস্ট ডিটেইলস
      </h1>
      <p className="text-gray-700 text-xl bg-white p-4 rounded shadow">
        আপনি বর্তমানে <span className="font-bold text-red-600">"{blogId}"</span> আইডির ব্লগটি পড়ছেন।
      </p>
    </div>
  );
}