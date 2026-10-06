"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"seller" | "admin">("seller");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/seller/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Sign in to Goodly</h1>
        <p className="text-xs text-gray-500 mt-1">Access your Seller Dashboard or Admin Panel</p>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
        {/* Role switcher for convenient local testing */}
        <div className="flex rounded-md bg-gray-100 p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setRole("seller")}
            className={`flex-1 py-1.5 rounded transition-colors ${
              role === "seller" ? "bg-white text-goodly-green shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Seller Login
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 py-1.5 rounded transition-colors ${
              role === "admin" ? "bg-white text-purple-700 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Admin Login
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === "admin" ? "pavel@example.com" : "elena.private@example.com"}
                className="w-full text-xs pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-gray-700">Password</label>
              <a href="#" className="text-[11px] text-goodly-green hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-md shadow-sm transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Sign In as {role === "admin" ? "Administrator" : "Seller"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
          Not a seller yet?{" "}
          <Link href="/become-a-seller" className="text-goodly-green font-bold hover:underline">
            Apply here
          </Link>
        </div>
      </div>
    </div>
  );
}
