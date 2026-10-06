"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, ChevronUp, Sparkles, HeartHandshake } from "lucide-react";
import { ENGLISH_DICTIONARY } from "@/lib/i18n/dictionaries";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [aboutIdeaOpen, setAboutIdeaOpen] = useState(false);
  const [whoCanSellOpen, setWhoCanSellOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Centered Pale Green Hero Section (No background photo) */}
      <section className="hero-gradient py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Mission line */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {ENGLISH_DICTIONARY.home.mission}
          </h1>

          {/* Humanitarian purpose line */}
          <p className="text-base sm:text-lg text-gray-700 font-medium max-w-xl mx-auto">
            {ENGLISH_DICTIONARY.home.purpose}
          </p>

          {/* Common Keyword Search Form */}
          <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto mt-6">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ENGLISH_DICTIONARY.home.search_placeholder}
                className="w-full pl-11 pr-24 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-goodly-green focus:border-goodly-green"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4" />
              <button
                type="submit"
                className="absolute right-1.5 px-4 py-2 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-full transition-colors shadow-sm"
              >
                Search
              </button>
            </div>
          </form>

          {/* Prominent Action Buttons: Products & Services */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-goodly-green hover:bg-goodly-greenHover text-white text-sm font-bold rounded-md shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>{ENGLISH_DICTIONARY.home.btn_products}</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-goodly-green hover:bg-goodly-greenHover text-white text-sm font-bold rounded-md shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{ENGLISH_DICTIONARY.home.btn_services}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Explanatory Accordions Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-4">
        {/* Accordion 1: About the idea */}
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() => setAboutIdeaOpen(!aboutIdeaOpen)}
            className="w-full px-5 py-4 text-left flex items-center justify-between font-bold text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
            aria-expanded={aboutIdeaOpen}
          >
            <span className="text-base">{ENGLISH_DICTIONARY.home.about_idea_title}</span>
            {aboutIdeaOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
          </button>

          {aboutIdeaOpen && (
            <div className="px-5 pb-5 pt-1 text-sm text-gray-700 space-y-3 border-t border-gray-100 bg-gray-50/50">
              <p>{ENGLISH_DICTIONARY.home.about_idea_content_1}</p>
              <p>{ENGLISH_DICTIONARY.home.about_idea_content_2}</p>
              <p className="font-semibold text-goodly-green">{ENGLISH_DICTIONARY.home.about_idea_content_3}</p>
            </div>
          )}
        </div>

        {/* Accordion 2: Who can become a seller? */}
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() => setWhoCanSellOpen(!whoCanSellOpen)}
            className="w-full px-5 py-4 text-left flex items-center justify-between font-bold text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
            aria-expanded={whoCanSellOpen}
          >
            <span className="text-base">{ENGLISH_DICTIONARY.home.who_can_sell_title}</span>
            {whoCanSellOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
          </button>

          {whoCanSellOpen && (
            <div className="px-5 pb-5 pt-1 text-sm text-gray-700 space-y-3 border-t border-gray-100 bg-gray-50/50">
              <p>{ENGLISH_DICTIONARY.home.who_can_sell_content_1}</p>
              <p>{ENGLISH_DICTIONARY.home.who_can_sell_content_2}</p>
              <div className="pt-2">
                <Link
                  href="/become-a-seller"
                  className="inline-flex items-center text-xs font-bold text-goodly-green hover:underline"
                >
                  Apply to become a seller →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
