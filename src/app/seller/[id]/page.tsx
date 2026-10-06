"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { MOCK_SELLERS, MOCK_LISTINGS } from "@/lib/mock-data";
import { ListingCard } from "@/components/ListingCard";
import { ReportModal } from "@/components/ReportModal";
import { ArrowLeft, ExternalLink, Flag, Calendar, Package } from "lucide-react";

export default function PublicSellerProfilePage() {
  const params = useParams();
  const router = useRouter();
  const sellerId = params?.id as string;
  const [isReportOpen, setIsReportOpen] = useState(false);

  const seller = MOCK_SELLERS.find((s) => s.id === sellerId) || MOCK_SELLERS[0];
  const sellerListings = MOCK_LISTINGS.filter(
    (l) => l.sellerId === seller.id && l.ownStatus === "active"
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Back to Results / Homepage button */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-goodly-green transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to results</span>
        </button>
      </div>

      {/* Seller Header Profile Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <img
            src={seller.photoUrl}
            alt={seller.nickname}
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 shadow-sm"
          />

          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{seller.nickname}</h1>
              <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-semibold">
                {seller.countryCode}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                Seller since {seller.sellerSince}
              </span>
              <span className="inline-flex items-center gap-1">
                <Package className="w-3.5 h-3.5 text-gray-400" />
                {sellerListings.length} active {sellerListings.length === 1 ? "listing" : "listings"}
              </span>
            </div>

            {/* Optional Introduction */}
            {seller.introduction && (
              <p className="text-xs text-gray-700 mt-3 pt-2 border-t border-gray-100 leading-relaxed max-w-2xl">
                {seller.introduction}
              </p>
            )}

            {/* Optional Social / Personal Links */}
            {seller.socialLinks && seller.socialLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-3">
                {seller.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:text-goodly-green hover:border-goodly-green transition-colors"
                  >
                    <span>{link.type}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Seller's Mixed Active Listings */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-6">Listings by {seller.nickname}</h2>
        {sellerListings.length > 0 ? (
          <div className="catalog-grid">
            {sellerListings.map((item) => (
              <ListingCard key={item.id} listing={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-xs text-gray-500">This seller currently has no active listings.</p>
          </div>
        )}
      </div>

      {/* Report Seller at bottom of profile */}
      <div className="mt-12 pt-6 border-t border-gray-200 flex justify-end">
        <button
          onClick={() => setIsReportOpen(true)}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-600 transition-colors"
        >
          <Flag className="w-3.5 h-3.5" />
          <span>Report seller</span>
        </button>
      </div>

      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        sellerNickname={seller.nickname}
      />
    </div>
  );
}
