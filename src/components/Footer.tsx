import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-white border-t border-gray-200 text-xs text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-900">Goodly</p>
            <p className="text-gray-500 mt-1">
              A free external-link catalog connecting you directly with products and services from parents and caregivers of children with disabilities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <Link href="/contact" className="hover:text-goodly-green transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-goodly-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-goodly-green transition-colors">
              Terms
            </Link>
            <Link href="/publishing-rules" className="hover:text-goodly-green transition-colors">
              Publishing Rules
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-[11px]">
          <p>© {new Date().getFullYear()} Goodly. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Free platform · No transaction fees or commissions</p>
        </div>
      </div>
    </footer>
  );
}
