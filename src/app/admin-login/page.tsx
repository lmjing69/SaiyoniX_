"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e?: any) => {
    e?.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Wrong password");
      }

    } catch {
      setError("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 p-4">

      <form
        onSubmit={handleLogin}
        className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-slate-900">
          Admin Login
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <div className="relative">
              <motion.div
                animate={error ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  className={`w-full bg-slate-50 border px-4 py-3 rounded-xl outline-none transition-all text-slate-900 placeholder:text-slate-400 ${error
                    ? "border-red-500 ring-2 ring-red-100 focus:border-red-500 focus:ring-red-100"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    }`}
                />
              </motion.div>
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-3 top-3.5 text-red-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {error && (
              <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1 animate-pulse">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-slate-800 hover:-translate-y-0.5 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login to Dashboard"}
          </button>
        </div>

      </form>
    </main>
  );
}
