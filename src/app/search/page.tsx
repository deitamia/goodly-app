"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MOCK_LISTINGS, INITIAL_CATEGORIES } from "@/lib/mock-data";
import { ListingCard } from "@/components/ListingCard";
import { Search as SearchIcon, Filter, RotateCcw } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const activeListings = useMemo(() => {
    return MOCK_LISTINGS.filter((l) => l.ownStatus === "active");
  }, []);

  const searchResults = useMemo(() => {
    return activeListings.filter((item) => {
      // Keyword matching
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.originalTitle.toLowerCase().includes(q);
        const matchesDesc = item.originalDescription.toLowerCase().includes(q);
        const matchesCat = item.categoryName.toLowerCase().includes(q);
        const matchesSeller = item.sellerNickname.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCat && !matchesSeller) return false;
      }

      // Category filter
      if (selectedCategory !== "all" && item.categoryId !== selectedCategory) return false;

      // Common destination / country filter
      if (selectedCountry !== "all") {
        if (item.listingType === "product") {
          if (!item.isWorldwide && (!item.shipToCountries || !item.shipToCountries.includes(selectedCountry))) {
            return false;
          }
        } else {
          if (item.serviceType === "physical" && item.physicalCountry !== selectedCountry) return false;
        }
      }

      return true;
    });
  }, [activeListings, searchQuery, selectedCategory, selectedCountry]);

  const displayedListings = searchResults.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Search Header Bar */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Search Results</h1>
        <p className="text-xs text-gray-500 mt-1">
          {searchQuery ? `Showing results for “${searchQuery}”` : "Browse all products and services"}
        </p>

        <div className="mt-4 max-w-xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products and services..."
              className="w-full pl-10 pr-4 py-2.5 text-xs text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-goodly-green"
            />
            <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3" />
          </div>
        </div>
      </div>

      {/* Common Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1 font-semibold text-gray-700">
            <Filter className="w-3.5 h-3.5 text-goodly-green" />
            <span>Filters:</span>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-2.5 py-1.5 bg-gray-50 border border-gray-300 rounded-md"
          >
            <option value="all">All Categories</option>
            {INITIAL_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nameEn}
              </option>
            ))}
          </select>

          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="px-2.5 py-1.5 bg-gray-50 border border-gray-300 rounded-md"
          >
            <option value="all">All Destination Countries</option>
            <option value="NL">Netherlands</option>
            <option value="DE">Germany</option>
            <option value="BG">Bulgaria</option>
            <option value="BE">Belgium</option>
            <option value="FR">France</option>
          </select>
        </div>

        {(selectedCategory !== "all" || selectedCountry !== "all" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedCountry("all");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear filters</span>
          </button>
        )}
      </div>

      {/* Results Grid */}
      {displayedListings.length > 0 ? (
        <div className="catalog-grid">
          {displayedListings.map((item) => (
            <ListingCard key={item.id} listing={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-700">No items found matching your search.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedCountry("all");
            }}
            className="mt-3 text-xs text-goodly-green font-bold hover:underline"
          >
            Show all items
          </button>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-gray-500">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
