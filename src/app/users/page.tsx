// ১. এপিআই থেকে যে ধরণের ডেটা আসবে তার একটি টাইপ ডিফাইন করা
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

// ২. একটি async ফাংশনাল কম্পোনেন্ট তৈরি করা
export default async function UsersPage() {
  // ৩. সরাসরি সার্ভারেই fetch ব্যবহার করে ডেটা কল করা
  const response = await fetch("https://jsonplaceholder.typicode.com/users-wrong-url");
  
  // ৪. রেসপন্সকে JSON অবজেক্টে রূপান্তর করা এবং টাইপ অ্যাসাইন করা
  const users: User[] = await response.json();

  console.log("Fetched Users:", users); // ডিবাগিং এর জন্য কনসোল লগ

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        ইউজার লিস্ট (Fetched from API)
      </h1>
      
      {/* ৫. লুপ চালিয়ে ডেটা ম্যাপ করা */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>
            <p className="text-gray-600">📧 {user.email}</p>
            <p className="text-sm text-gray-400 mt-2">🏢 {user.company.name}</p>
            <p className="text-sm text-gray-400 mt-2">🌐 {user.website}</p>
            <p className="text-sm text-gray-400 mt-2">💬 {user.company.catchPhrase}</p>

          </div>
        ))}
      </div>
    </div>
  );
}