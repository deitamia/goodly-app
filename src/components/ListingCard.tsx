"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MockListing } from "@/lib/mock-data";
import { ExternalLink, Flag, Globe, MapPin, AlertTriangle } from "lucide-react";
import { ReportModal } from "./ReportModal";

interface ListingCardProps {
  listing: MockListing;
}

export function ListingCard({ listing }: ListingCardProps) {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [showShippingModal, setShowShippingModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
        {/* 4:3 Contained Image Container */}
        <div className="card-image-container relative">
          <img
            src={listing.imageUrl}
            alt={listing.originalTitle}
            className="w-full h-full object-contain"
            loading="lazy"
          />
          {/* Badge: Product / Service */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm ${
                listing.listingType === "product"
                  ? "bg-blue-600 text-white"
                  : "bg-purple-600 text-white"
              }`}
            >
              {listing.listingType === "product" ? "Product" : "Service"}
            </span>

            {listing.isAutoTranslated && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                Auto-translated
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            {/* Category & Availability Details */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
              <span className="font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                {listing.categoryName}
              </span>

              {/* Service Type or Product Shipping */}
              {listing.listingType === "service" ? (
                <div className="flex items-center gap-1 text-[11px] text-gray-500">
                  {listing.serviceType === "online" ? (
                    <span className="inline-flex items-center gap-0.5 text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                      <Globe className="w-3 h-3" /> Online
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5 text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      <MapPin className="w-3 h-3" /> {listing.physicalCity}, {listing.physicalCountry}
                    </span>
                  )}
                </div>
              ) : (
                <div className="text-[11px] text-gray-500">
                  {listing.isWorldwide ? (
                    <span className="text-gray-600">Ships Worldwide</span>
                  ) : listing.shipToCountries && listing.shipToCountries.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setShowShippingModal(true)}
                      className="text-goodly-green hover:underline cursor-pointer"
                    >
                      Ships to: {listing.shipToCountries[0]}
                      {listing.shipToCountries.length > 1 && ` +${listing.shipToCountries.length - 1} more`}
                    </button>
                  ) : null}
                </div>
              )}
            </div>

            {/* Title (Full wrapping) */}
            <h3 className="text-base font-bold text-goodly-text leading-snug mt-1 break-words">
              {listing.originalTitle}
            </h3>

            {/* Description (Full wrapping) */}
            <p className="text-xs text-gray-600 mt-2 leading-relaxed break-words whitespace-normal">
              {listing.originalDescription}
            </p>
          </div>

          {/* Bottom Seller & Action Bar */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-3">
            {/* Seller Info */}
            <div className="flex items-center justify-between">
              <Link
                href={`/seller/${listing.sellerId}`}
                className="flex items-center gap-2 group hover:opacity-90"
              >
                <img
                  src={listing.sellerPhotoUrl}
                  alt={listing.sellerNickname}
                  className="w-7 h-7 rounded-full object-cover border border-gray-200"
                />
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-gray-900 group-hover:text-goodly-green group-hover:underline">
                    {listing.sellerNickname}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono bg-gray-100 px-1 rounded">
                    {listing.sellerCountryCode}
                  </span>
                </div>
              </Link>

              {/* Price Display */}
              <div className="text-right">
                {listing.isPriceOnRequest ? (
                  <span className="text-xs font-semibold text-amber-800">
                    Price on request
                  </span>
                ) : (
                  <span className="text-sm font-bold text-gray-900">
                    {listing.priceCurrency} {listing.priceAmount?.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Main Action Button */}
            <div>
              {listing.listingType === "product" ? (
                <a
                  href={listing.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-md shadow-sm transition-colors focus:ring-2 focus:ring-goodly-green"
                >
                  <span>Buy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : listing.isPriceOnRequest ? (
                <a
                  href={listing.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-goodly-gold hover:bg-goodly-goldHover text-black text-xs font-bold rounded-md shadow-sm transition-colors focus:ring-2 focus:ring-amber-500"
                >
                  <span>View service</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>
              ) : (
                <a
                  href={listing.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-md shadow-sm transition-colors focus:ring-2 focus:ring-goodly-green"
                >
                  <span>View service</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Very Small Secondary Report Seller Link */}
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={() => setIsReportOpen(true)}
                className="text-[10px] text-gray-400 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <Flag className="w-2.5 h-2.5" />
                <span>Report seller</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Destinations Modal */}
      {showShippingModal && listing.shipToCountries && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-5 max-w-sm w-full shadow-xl">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Shipping Destinations</h4>
            <p className="text-xs text-gray-500 mb-3">This product ships to the following countries:</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {listing.shipToCountries.map((c) => (
                <span key={c} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded font-medium">
                  {c}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShowShippingModal(false)}
              className="w-full py-1.5 bg-gray-900 text-white rounded text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Report Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        sellerNickname={listing.sellerNickname}
        sourceListingTitle={listing.originalTitle}
      />
    </>
  );
}
