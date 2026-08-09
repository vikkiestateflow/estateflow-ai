"use client";

import { useRouter } from "next/navigation";
export default function LoginPage() {
    const router = useRouter();
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          EstateFlow AI
        </h1>

        <p className="text-center text-gray-400 mb-6">
          Welcome Back
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <button
  type="button"
  onClick={() => router.push("/")}
  className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-lg font-semibold"
>
  Login
</button>
        </form>
      </div>
    </main>
  );
}