"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="border border-gray-800 rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter admin password"
          className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg mb-6 outline-none focus:border-cyan-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
        >
          Login
        </button>

      </div>
    </main>
  );
}
