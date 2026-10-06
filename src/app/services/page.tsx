"use client";

import React, { useState, useMemo } from "react";
import { MOCK_LISTINGS, INITIAL_CATEGORIES } from "@/lib/mock-data";
import { ListingCard } from "@/components/ListingCard";
import { Filter, RotateCcw } from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const serviceListings = useMemo(() => {
    return MOCK_LISTINGS.filter((l) => l.listingType === "service" && l.ownStatus === "active");
  }, []);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    if (lang !== "all") {
      setSelectedCity("all"); // Mutual clear per invariant
    }
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    if (city !== "all") {
      setSelectedLanguage("all"); // Mutual clear per invariant
    }
  };

  const filteredListings = useMemo(() => {
    return serviceListings.filter((item) => {
      if (selectedCategory !== "all" && item.categoryId !== selectedCategory) return false;
      if (selectedCountry !== "all") {
        if (item.serviceType === "physical" && item.physicalCountry !== selectedCountry) return false;
      }
      if (selectedLanguage !== "all") {
        if (item.serviceType !== "online" || !item.onlineLanguages?.includes(selectedLanguage)) return false;
      }
      if (selectedCity !== "all") {
        if (item.serviceType !== "physical" || item.physicalCity !== selectedCity) return false;
      }
      return true;
    });
  }, [serviceListings, selectedCategory, selectedCountry, selectedLanguage, selectedCity]);

  const displayedListings = filteredListings.slice(0, visibleCount);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedCountry("all");
    setSelectedLanguage("all");
    setSelectedCity("all");
    setVisibleCount(12);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Services Catalog</h1>
        <p className="text-xs text-gray-500 mt-1">
          Find consulting, digital work, tutoring, and in-person services provided by parents and caregivers.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 pb-2 border-b border-gray-100">
          <Filter className="w-4 h-4 text-goodly-green" />
          <span>Service Filters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
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

          {/* Available In (Country) */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Available in (Country)</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            >
              <option value="all">All Countries</option>
              <option value="NL">Netherlands</option>
              <option value="DE">Germany</option>
              <option value="BG">Bulgaria</option>
            </select>
          </div>

          {/* Online Language (Clears City when selected) */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Online Language <span className="text-[10px] text-gray-400 font-normal">(Clears City)</span>
            </label>
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            >
              <option value="all">Any / Physical</option>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Dutch">Dutch</option>
              <option value="Bulgarian">Bulgarian</option>
            </select>
          </div>

          {/* Physical City (Clears Online Language when selected) */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Physical City <span className="text-[10px] text-gray-400 font-normal">(Clears Language)</span>
            </label>
            <select
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            >
              <option value="all">Any / Online</option>
              <option value="Amsterdam">Amsterdam (NL)</option>
              <option value="Berlin">Berlin (DE)</option>
              <option value="Sofia">Sofia (BG)</option>
            </select>
          </div>
        </div>

        {(selectedCategory !== "all" || selectedCountry !== "all" || selectedLanguage !== "all" || selectedCity !== "all") && (
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

      {/* Catalog Grid */}
      {displayedListings.length > 0 ? (
        <div className="catalog-grid">
          {displayedListings.map((item) => (
            <ListingCard key={item.id} listing={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-700">No services found matching your filters.</p>
          <button
            onClick={handleResetFilters}
            className="mt-3 text-xs text-goodly-green font-bold hover:underline"
          >
            Reset all filters
          </button>
        </div>
      )}

      {/* Load More Pagination */}
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
