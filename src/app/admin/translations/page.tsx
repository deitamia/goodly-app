"use client";

import React, { useState } from "react";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n/languages";
import { ENGLISH_DICTIONARY } from "@/lib/i18n/dictionaries";
import { Check, Edit2, Globe, ShieldCheck, Sparkles } from "lucide-react";

export default function AdminTranslationsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("de");
  const [activeZone, setActiveZone] = useState<"home" | "seller" | "footer">("home");

  const [translations, setTranslations] = useState<Record<string, { text: string; isVerified: boolean }>>({
    "home.mission": {
      text: "Unsere Mission ist nicht einfach Unterstützung zu bieten, sondern Zugang zu Chancen zu schaffen.",
      isVerified: true,
    },
    "home.purpose": {
      text: "Geben Sie Ihrem Einkauf einen humanitären Sinn.",
      isVerified: false,
    },
    "home.about_idea": {
      text: "Unsere Mission ist es, Eltern und Betreuer von Kindern mit Behinderungen zu unterstützen...",
      isVerified: false,
    },
  });

  const handleVerify = (key: string) => {
    setTranslations({
      ...translations,
      [key]: {
        ...translations[key],
        isVerified: true,
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      <div className="pb-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Static Translations Editor</h1>
          <p className="text-xs text-gray-500 mt-1">
            Edit English source texts, regenerate machine translations, and mark target translations as Verified.
          </p>
        </div>

        {/* Target Language Dropdown */}
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-500" />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="text-xs px-3 py-1.5 bg-white border border-gray-300 rounded-md font-semibold"
          >
            {SUPPORTED_LANGUAGES.filter((l) => l.code !== "en").map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name} ({lang.nativeLabel})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Zone Tabs */}
      <div className="flex gap-2 border-b border-gray-200 text-xs font-semibold">
        <button
          onClick={() => setActiveZone("home")}
          className={`pb-2 px-3 border-b-2 ${
            activeZone === "home" ? "border-purple-600 text-purple-700 font-bold" : "border-transparent text-gray-500"
          }`}
        >
          Homepage Copy
        </button>
        <button
          onClick={() => setActiveZone("seller")}
          className={`pb-2 px-3 border-b-2 ${
            activeZone === "seller" ? "border-purple-600 text-purple-700 font-bold" : "border-transparent text-gray-500"
          }`}
        >
          Seller Registration Copy
        </button>
        <button
          onClick={() => setActiveZone("footer")}
          className={`pb-2 px-3 border-b-2 ${
            activeZone === "footer" ? "border-purple-600 text-purple-700 font-bold" : "border-transparent text-gray-500"
          }`}
        >
          Footer Pages
        </button>
      </div>

      {/* Translation Grid (English source left / Target right) */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm divide-y divide-gray-200 text-xs">
        {/* Item 1: Mission */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-gray-400 font-bold">home.mission (English Source)</span>
            <p className="font-semibold text-gray-900 bg-gray-50 p-3 rounded border border-gray-200">
              {ENGLISH_DICTIONARY.home.mission}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-purple-700 font-bold">Target Translation</span>
              {translations["home.mission"]?.isVerified ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </span>
              ) : (
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Needs Review (Auto-translated)
                </span>
              )}
            </div>

            <textarea
              rows={2}
              value={translations["home.mission"]?.text}
              onChange={(e) =>
                setTranslations({
                  ...translations,
                  "home.mission": { text: e.target.value, isVerified: false },
                })
              }
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600"
            />

            <div className="flex justify-end gap-2 pt-1">
              {!translations["home.mission"]?.isVerified && (
                <button
                  onClick={() => handleVerify("home.mission")}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-bold"
                >
                  Mark as Verified
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Item 2: Purpose */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-gray-400 font-bold">home.purpose (English Source)</span>
            <p className="font-semibold text-gray-900 bg-gray-50 p-3 rounded border border-gray-200">
              {ENGLISH_DICTIONARY.home.purpose}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-purple-700 font-bold">Target Translation</span>
              {translations["home.purpose"]?.isVerified ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </span>
              ) : (
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  Needs Review (Auto-translated)
                </span>
              )}
            </div>

            <textarea
              rows={2}
              value={translations["home.purpose"]?.text}
              onChange={(e) =>
                setTranslations({
                  ...translations,
                  "home.purpose": { text: e.target.value, isVerified: false },
                })
              }
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600"
            />

            <div className="flex justify-end gap-2 pt-1">
              {!translations["home.purpose"]?.isVerified && (
                <button
                  onClick={() => handleVerify("home.purpose")}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-bold"
                >
                  Mark as Verified
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
