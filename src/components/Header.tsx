"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-goodly-green transition-colors">
              Goodly
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/" ? "text-goodly-green font-semibold" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`text-sm font-semibold transition-colors px-3 py-1.5 rounded-md ${
                  pathname === "/products"
                    ? "bg-green-50 text-goodly-green"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                Products
              </Link>
              <Link
                href="/services"
                className={`text-sm font-semibold transition-colors px-3 py-1.5 rounded-md ${
                  pathname === "/services"
                    ? "bg-green-50 text-goodly-green"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                Services
              </Link>
              <Link
                href="/become-a-seller"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/become-a-seller" ? "text-goodly-green font-semibold" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Become a seller
              </Link>
            </nav>
          </div>

          {/* Right Actions: Language Selector, Login & Admin Link */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Link
              href="/login"
              className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/seller/dashboard"
              className="text-xs font-medium text-goodly-green hover:underline"
            >
              Seller Panel
            </Link>
            <Link
              href="/admin/dashboard"
              className="text-xs font-medium text-purple-700 hover:underline"
            >
              Admin Panel
            </Link>
          </div>

          {/* Mobile Navigation Header Row */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Header Row for Products & Services */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-gray-100 bg-gray-50/50">
          <Link
            href="/products"
            className={`text-sm font-semibold px-4 py-1.5 rounded-md ${
              pathname === "/products" ? "bg-goodly-green text-white" : "text-gray-800 bg-white border border-gray-200"
            }`}
          >
            Products
          </Link>
          <Link
            href="/services"
            className={`text-sm font-semibold px-4 py-1.5 rounded-md ${
              pathname === "/services" ? "bg-goodly-green text-white" : "text-gray-800 bg-white border border-gray-200"
            }`}
          >
            Services
          </Link>
        </div>
      </div>

      {/* Expandable Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 py-1.5 hover:text-goodly-green"
          >
            Home
          </Link>
          <Link
            href="/become-a-seller"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 py-1.5 hover:text-goodly-green"
          >
            Become a seller
          </Link>
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 py-1.5 hover:text-goodly-green"
          >
            Log in
          </Link>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
            <Link
              href="/seller/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-goodly-green font-medium"
            >
              Seller Dashboard
            </Link>
            <Link
              href="/admin/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-purple-700 font-medium"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
