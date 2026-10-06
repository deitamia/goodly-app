"use client";

import React, { useState } from "react";
import { SUPPORTED_LANGUAGES, LanguageDefinition } from "@/lib/i18n/languages";
import { Globe, ChevronDown } from "lucide-react";

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<LanguageDefinition>(SUPPORTED_LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-goodly-green transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-3.5 h-3.5 text-gray-500" />
        <span>{currentLang.nativeLabel}</span>
        <ChevronDown className="w-3 h-3 text-gray-400" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-1.5 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1 max-h-72 overflow-y-auto"
          role="menu"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLang(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-gray-100 transition-colors ${
                currentLang.code === lang.code ? "bg-green-50 font-semibold text-goodly-green" : "text-gray-700"
              }`}
              role="menuitem"
            >
              <span>{lang.nativeLabel}</span>
              <span className="text-[10px] text-gray-400 font-mono">{lang.flagCode}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
