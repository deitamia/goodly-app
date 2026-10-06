"use client";

import React, { useState } from "react";
import { MOCK_LISTINGS, INITIAL_CATEGORIES, MockListing } from "@/lib/mock-data";
import { Plus, Eye, EyeOff, Trash2, Edit3, Sparkles } from "lucide-react";

export default function SellerListingsPage() {
  const [listings, setListings] = useState<MockListing[]>(
    MOCK_LISTINGS.filter((l) => l.sellerId === "seller-elena-nl")
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [listingType, setListingType] = useState<"product" | "service">("product");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isPriceOnRequest, setIsPriceOnRequest] = useState(false);
  const [category, setCategory] = useState(INITIAL_CATEGORIES[0].id);
  const [imageUrl, setImageUrl] = useState("");
  const [externalUrl, setExternalUrl] = useState("");
  const [isGeneratingTranslations, setIsGeneratingTranslations] = useState(false);

  const handleToggleHide = (id: string) => {
    setListings(
      listings.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ownStatus: item.ownStatus === "active" ? "hidden" : "active",
          };
        }
        return item;
      })
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this listing? It will move to Trash for 30 days before permanent erasure.")) {
      setListings(listings.filter((item) => item.id !== id));
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingTranslations(true);

    // Simulate synchronous single translation attempt
    setTimeout(() => {
      const newListing: MockListing = {
        id: `list-${Date.now()}`,
        sellerId: "seller-elena-nl",
        sellerNickname: "ElenaCrafts",
        sellerPhotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        sellerCountryCode: "NL",
        categoryId: category,
        categoryName: INITIAL_CATEGORIES.find((c) => c.id === category)?.nameEn || "Art & Crafts",
        listingType,
        imageUrl: imageUrl || "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80",
        originalTitle: title,
        originalDescription: description,
        priceAmount: isPriceOnRequest ? undefined : parseFloat(price) || 20,
        priceCurrency: "EUR",
        isPriceOnRequest,
        externalUrl: externalUrl || "https://example.com/item",
        ownStatus: "active",
        createdAt: new Date().toISOString(),
      };

      setListings([newListing, ...listings]);
      setIsGeneratingTranslations(false);
      setIsAddModalOpen(false);

      // Reset
      setTitle("");
      setDescription("");
      setPrice("");
      setImageUrl("");
      setExternalUrl("");
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
          <p className="text-xs text-gray-500 mt-1">
            Publish products and services with automatic 15-language synchronous translation.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-md shadow-sm transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product / Service</span>
        </button>
      </div>

      {/* Listings Table / Grid */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-200">
          {listings.map((item) => (
            <div key={item.id} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-gray-50/50">
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.originalTitle}
                  className="w-16 h-12 object-contain bg-gray-50 rounded border border-gray-200 flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        item.listingType === "product" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {item.listingType === "product" ? "Product" : "Service"}
                    </span>
                    <span className="text-xs font-bold text-gray-900 line-clamp-1">{item.originalTitle}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.originalDescription}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                    <span>
                      Price:{" "}
                      <strong>
                        {item.isPriceOnRequest ? "Price on request" : `${item.priceCurrency} ${item.priceAmount?.toFixed(2)}`}
                      </strong>
                    </span>
                    <span>•</span>
                    <span>Category: {item.categoryName}</span>
                  </div>
                </div>
              </div>

              {/* Actions & Status */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded capitalize ${
                    item.ownStatus === "active"
                      ? "bg-green-100 text-green-800"
                      : item.ownStatus === "hidden"
                      ? "bg-gray-100 text-gray-700"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.ownStatus}
                </span>

                {item.ownStatus !== "blocked" && (
                  <button
                    onClick={() => handleToggleHide(item.id)}
                    className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded"
                    title={item.ownStatus === "active" ? "Hide listing" : "Show listing"}
                  >
                    {item.ownStatus === "active" ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                )}

                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                  title="Delete listing (moves to Trash)"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Product / Service Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-6 my-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Add New Listing</h3>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              {/* Type Switcher */}
              <div className="flex gap-4">
                <label className="flex items-center gap-1.5 font-semibold text-gray-800 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    checked={listingType === "product"}
                    onChange={() => setListingType("product")}
                  />
                  <span>Product (Physical item)</span>
                </label>
                <label className="flex items-center gap-1.5 font-semibold text-gray-800 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    checked={listingType === "service"}
                    onChange={() => setListingType("service")}
                  />
                  <span>Service (Online / Physical)</span>
                </label>
              </div>

              {/* Title */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Title <span className="text-gray-400 font-normal">(Max 80 chars)</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Handmade Tactile Weighted Blanket"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
                />
              </div>

              {/* Short Description */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Short Description <span className="text-gray-400 font-normal">(Max 300 chars)</span>
                </label>
                <textarea
                  required
                  rows={3}
                  maxLength={300}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your product or service..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
                />
              </div>

              {/* Category & Pricing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                  >
                    {INITIAL_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Price (EUR)</label>
                  <input
                    type="number"
                    step="0.01"
                    disabled={isPriceOnRequest}
                    required={!isPriceOnRequest}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="45.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                  />
                  {listingType === "service" && (
                    <label className="flex items-center gap-1.5 mt-1.5 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isPriceOnRequest}
                        onChange={(e) => setIsPriceOnRequest(e.target.checked)}
                      />
                      <span>Price on request</span>
                    </label>
                  )}
                </div>
              </div>

              {/* External Link */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">External HTTPS Link</label>
                <input
                  type="url"
                  required
                  value={externalUrl}
                  onChange={(e) => setExternalUrl(e.target.value)}
                  placeholder="https://yourstore.com/item"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
                />
              </div>

              {/* Image URL (Upload mock) */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Image URL (Up to 10 MB)</label>
                <input
                  type="url"
                  required
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
                />
              </div>

              {/* Synchronous Translation Indicator */}
              <div className="p-3 bg-green-50 border border-green-100 rounded-md text-gray-700 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-goodly-green">
                  <Sparkles className="w-4 h-4" />
                  <span>Synchronous 15-Language Translation</span>
                </div>
                <p className="text-[11px] text-gray-600">
                  On submission, Goodly will automatically translate your title and description across all 15 supported languages.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isGeneratingTranslations}
                  className="px-5 py-2 bg-goodly-green hover:bg-goodly-greenHover text-white font-bold rounded-md shadow-sm transition-colors"
                >
                  {isGeneratingTranslations ? "Generating translations…" : "Publish Listing"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
