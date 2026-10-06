import React from "react";

export default function PublishingRulesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Publishing Rules</h1>
      <p className="text-xs text-gray-500">Guidelines for approved Goodly sellers</p>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4 text-xs text-gray-700 leading-relaxed">
        <h2 className="text-sm font-bold text-gray-900">1. Original Work & Truthful Listings</h2>
        <p>
          Listings must represent products created or services provided directly by the approved parent or caregiver. Drop-shipping, deceptive marketing, and prohibited items are strictly prohibited.
        </p>

        <h2 className="text-sm font-bold text-gray-900">2. Accurate External Links</h2>
        <p>
          Every listing must provide a valid HTTPS external link leading directly to the specific product or service on your website or online store.
        </p>

        <h2 className="text-sm font-bold text-gray-900">3. Moderation & Listing State</h2>
        <p>
          While approved sellers publish listings immediately without prior review, Goodly administrators review listings and user reports. Listings that violate rules will be blocked with clear dashboard notification.
        </p>
      </div>
    </div>
  );
}
