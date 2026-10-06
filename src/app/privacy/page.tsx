import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="text-xs text-gray-500">Last updated: October 2026 · Operating territory: Netherlands</p>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4 text-xs text-gray-700 leading-relaxed">
        <h2 className="text-sm font-bold text-gray-900">1. Overview & Data Privacy Commitments</h2>
        <p>
          Goodly is a free external-link catalog connecting visitors with products and services offered by parents and caregivers caring for children with disabilities. We adhere to privacy-by-design principles under the General Data Protection Regulation (GDPR).
        </p>

        <h2 className="text-sm font-bold text-gray-900">2. Public Identity vs. Private Seller Data</h2>
        <p>
          To safeguard seller privacy, Goodly displays ONLY approved public nicknames, stable seller IDs, and public photos. Real first names and email addresses remain strictly private to the seller and the administrator.
        </p>

        <h2 className="text-sm font-bold text-gray-900">3. 30-Day Retention Clocks</h2>
        <p>
          Goodly enforces 8 distinct 30-day data retention clocks for deleted listings in Trash, closed contact inquiries, visitor reports, closed messages, and system notifications. Upon expiration, records are permanently deleted from database and storage.
        </p>

        <h2 className="text-sm font-bold text-gray-900">4. Account Deletion Rights</h2>
        <p>
          Sellers may request full account deletion at any time from their profile. Upon processing, all seller records, listings, images, and message histories are permanently erased.
        </p>
      </div>
    </div>
  );
}
