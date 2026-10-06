"use client";

import React, { useState } from "react";
import { CheckCircle, RotateCcw, Palette } from "lucide-react";

export default function AdminAppearancePage() {
  const [mainButtonColor, setMainButtonColor] = useState("#16a34a");
  const [goldButtonColor, setGoldButtonColor] = useState("#facc15");
  const [heroBgColor, setHeroBgColor] = useState("#f0fdf4");
  const [isSaved, setIsSaved] = useState(false);

  const handleReset = () => {
    setMainButtonColor("#16a34a");
    setGoldButtonColor("#facc15");
    setHeroBgColor("#f0fdf4");
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Appearance & Theme Settings</h1>
        <p className="text-xs text-gray-500 mt-1">
          Customize public site colors within approved WCAG accessible palettes. Main text is fixed to black. Public theme changes do not restyle the admin interface.
        </p>
      </div>

      {isSaved && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-md text-xs text-green-800 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span>Theme settings saved successfully.</span>
        </div>
      )}

      {/* Palette Controls */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Main Button Color */}
          <div>
            <label className="block font-bold text-gray-700 mb-2">Main Button Color (Buy / Service)</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={mainButtonColor}
                onChange={(e) => setMainButtonColor(e.target.value)}
                className="w-10 h-10 rounded border border-gray-300 cursor-pointer p-0.5"
              />
              <span className="font-mono text-gray-600 font-bold">{mainButtonColor}</span>
            </div>
          </div>

          {/* Price on Request Color */}
          <div>
            <label className="block font-bold text-gray-700 mb-2">Price on Request Button (Gold)</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={goldButtonColor}
                onChange={(e) => setGoldButtonColor(e.target.value)}
                className="w-10 h-10 rounded border border-gray-300 cursor-pointer p-0.5"
              />
              <span className="font-mono text-gray-600 font-bold">{goldButtonColor}</span>
            </div>
          </div>

          {/* Hero Background */}
          <div>
            <label className="block font-bold text-gray-700 mb-2">Hero Section Background</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={heroBgColor}
                onChange={(e) => setHeroBgColor(e.target.value)}
                className="w-10 h-10 rounded border border-gray-300 cursor-pointer p-0.5"
              />
              <span className="font-mono text-gray-600 font-bold">{heroBgColor}</span>
            </div>
          </div>
        </div>

        {/* Live Preview Container */}
        <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
          <h3 className="font-bold text-gray-900">Live Component Preview</h3>
          <div className="p-6 rounded-lg border border-gray-200 space-y-4" style={{ backgroundColor: heroBgColor }}>
            <h4 className="text-base font-bold text-black text-center">
              Give your shopping a humanitarian purpose.
            </h4>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="px-5 py-2 text-white font-bold rounded shadow-sm"
                style={{ backgroundColor: mainButtonColor }}
              >
                Buy (Product)
              </button>
              <button
                type="button"
                className="px-5 py-2 text-black font-bold rounded shadow-sm"
                style={{ backgroundColor: goldButtonColor }}
              >
                View service (On Request)
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-gray-600 hover:text-gray-900 font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to defaults</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded shadow-sm transition-colors"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
