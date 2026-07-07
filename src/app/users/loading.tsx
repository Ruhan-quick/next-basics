export default function UsersLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      {/* একটি সুন্দর অ্যানিমেটেড স্পিনার */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 mb-4"></div>
      
      <p className="text-xl font-semibold text-gray-700 animate-pulse">
        ইউজার ডেটা লোড হচ্ছে, দয়া করে অপেক্ষা করুন...
      </p>
    </div>
  );
}