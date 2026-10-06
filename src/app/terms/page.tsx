import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Terms of Service</h1>
      <p className="text-xs text-gray-500">Last updated: October 2026</p>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4 text-xs text-gray-700 leading-relaxed">
        <h2 className="text-sm font-bold text-gray-900">1. Nature of the Goodly Platform</h2>
        <p>
          Goodly is an external-link directory. Goodly does not process payments, handle orders, manage physical delivery, or act as an intermediary in any commercial transaction between buyers and external sellers.
        </p>

        <h2 className="text-sm font-bold text-gray-900">2. Free Platform Model</h2>
        <p>
          Goodly charges zero commissions, subscription fees, or listing charges to either buyers or sellers.
        </p>

        <h2 className="text-sm font-bold text-gray-900">3. Seller Eligibility</h2>
        <p>
          Seller accounts are reserved for parents and caregivers caring for children with disabilities who create or provide their own products and services. Initial seller profile approval is required before listings can be published.
        </p>
      </div>
    </div>
  );
}
