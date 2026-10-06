"use client";

import React, { useState } from "react";
import { MOCK_LISTINGS, MockListing } from "@/lib/mock-data";
import { ExternalLink, ShieldAlert, ShieldCheck } from "lucide-react";

export default function AdminListingsPage() {
  const [listings, setListings] = useState<MockListing[]>(MOCK_LISTINGS);
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "hidden" | "blocked">("all");

  const handleToggleBlockListing = (id: string) => {
    setListings(
      listings.map((item) => {
        if (item.id === id) {
          const isCurrentlyBlocked = item.ownStatus === "blocked";
          return {
            ...item,
            ownStatus: isCurrentlyBlocked ? "active" : "blocked",
          };
        }
        return item;
      })
    );
  };

  const filteredListings = listings.filter((l) => {
    if (filterStatus === "all") return true;
    return l.ownStatus === filterStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Listings Moderation</h1>
        <p className="text-xs text-gray-500 mt-1">
          Inspect public and hidden catalog items. Blocking a listing sends an automatic Dashboard notice with the title.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-gray-200 text-xs font-semibold">
        {(["all", "active", "hidden", "blocked"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilterStatus(tab)}
            className={`pb-2 px-3 border-b-2 capitalize transition-colors ${
              filterStatus === tab
                ? "border-purple-600 text-purple-700 font-bold"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab} ({tab === "all" ? listings.length : listings.filter((l) => l.ownStatus === tab).length})
          </button>
        ))}
      </div>

      {/* Listings Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-200">
          {filteredListings.map((item) => (
            <div key={item.id} className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-gray-50/50">
              <div className="flex items-start gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.originalTitle}
                  className="w-16 h-12 object-contain bg-gray-50 rounded border border-gray-200 flex-shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        item.listingType === "product" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {item.listingType === "product" ? "Product" : "Service"}
                    </span>
                    <span className="text-xs font-bold text-gray-900">{item.originalTitle}</span>
                  </div>

                  <p className="text-xs text-gray-500 line-clamp-1">{item.originalDescription}</p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 pt-0.5">
                    <span>Seller: <strong>{item.sellerNickname}</strong></span>
                    <span>•</span>
                    <span>Category: {item.categoryName}</span>
                    <span>•</span>
                    <span>
                      {item.isPriceOnRequest ? "Price on request" : `${item.priceCurrency} ${item.priceAmount?.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Moderation Actions */}
              <div className="flex items-center gap-2 self-end md:self-center">
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:text-gray-900"
                >
                  <span>Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => handleToggleBlockListing(item.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded shadow-sm transition-colors ${
                    item.ownStatus === "blocked"
                      ? "bg-purple-700 hover:bg-purple-800 text-white"
                      : "bg-red-50 hover:bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {item.ownStatus === "blocked" ? "Unblock Listing" : "Block Listing"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
