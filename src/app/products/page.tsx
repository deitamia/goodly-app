"use client";

import React, { useState, useMemo } from "react";
import { MOCK_LISTINGS, INITIAL_CATEGORIES } from "@/lib/mock-data";
import { ListingCard } from "@/components/ListingCard";
import { Filter, RotateCcw } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedShipFrom, setSelectedShipFrom] = useState<string>("all");
  const [selectedShipTo, setSelectedShipTo] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const productListings = useMemo(() => {
    return MOCK_LISTINGS.filter((l) => l.listingType === "product" && l.ownStatus === "active");
  }, []);

  const filteredListings = useMemo(() => {
    return productListings.filter((item) => {
      if (selectedCategory !== "all" && item.categoryId !== selectedCategory) return false;
      if (selectedShipFrom !== "all" && item.sellerCountryCode !== selectedShipFrom) return false;
      if (selectedShipTo !== "all") {
        if (!item.isWorldwide && (!item.shipToCountries || !item.shipToCountries.includes(selectedShipTo))) {
          return false;
        }
      }
      return true;
    });
  }, [productListings, selectedCategory, selectedShipFrom, selectedShipTo]);

  const displayedListings = filteredListings.slice(0, visibleCount);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedShipFrom("all");
    setSelectedShipTo("all");
    setVisibleCount(12);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Products Catalog</h1>
        <p className="text-xs text-gray-500 mt-1">
          Explore handmade goods, crafts, and products offered by parents and caregivers.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 pb-2 border-b border-gray-100">
          <Filter className="w-4 h-4 text-goodly-green" />
          <span>Filters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Category Filter */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            >
              <option value="all">All Categories</option>
              {INITIAL_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Ship From Filter (Seller approved country) */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Ship from (Origin)</label>
            <select
              value={selectedShipFrom}
              onChange={(e) => setSelectedShipFrom(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            >
              <option value="all">All Origins</option>
              <option value="NL">Netherlands (NL)</option>
              <option value="DE">Germany (DE)</option>
              <option value="BG">Bulgaria (BG)</option>
              <option value="ES">Spain (ES)</option>
              <option value="FR">France (FR)</option>
            </select>
          </div>

          {/* Ship To Filter */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Ship to (Destination)</label>
            <select
              value={selectedShipTo}
              onChange={(e) => setSelectedShipTo(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            >
              <option value="all">All Destinations</option>
              <option value="NL">Netherlands</option>
              <option value="DE">Germany</option>
              <option value="BE">Belgium</option>
              <option value="FR">France</option>
              <option value="BG">Bulgaria</option>
              <option value="RO">Romania</option>
            </select>
          </div>
        </div>

        {(selectedCategory !== "all" || selectedShipFrom !== "all" || selectedShipTo !== "all") && (
          <div className="flex justify-end pt-2">
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-medium cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Catalog Grid (3 desktop / 2 tablet / 1 mobile) */}
      {displayedListings.length > 0 ? (
        <div className="catalog-grid">
          {displayedListings.map((item) => (
            <ListingCard key={item.id} listing={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-700">No products found matching your filters.</p>
          <button
            onClick={handleResetFilters}
            className="mt-3 text-xs text-goodly-green font-bold hover:underline"
          >
            Reset all filters
          </button>
        </div>
      )}

      {/* Load More Button (12 + 12 pagination) */}
      {filteredListings.length > visibleCount && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-md shadow-sm transition-colors"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
