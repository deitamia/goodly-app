"use client";

import React, { useState } from "react";
import { Trash2, Clock, AlertTriangle } from "lucide-react";

interface TrashItem {
  id: string;
  sellerNickname: string;
  title: string;
  categoryName: string;
  listingType: string;
  deletedAt: string;
  daysRemaining: number;
}

export default function AdminTrashPage() {
  const [trashListings, setTrashListings] = useState<TrashItem[]>([
    {
      id: "trash-1",
      sellerNickname: "ElenaCrafts",
      title: "Handmade Organic Baby Teether Toy",
      categoryName: "Art & Crafts",
      listingType: "Product",
      deletedAt: "2026-10-02T11:00:00Z",
      daysRemaining: 26,
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Admin Trash Archive</h1>
        <p className="text-xs text-gray-500 mt-1">
          Displays seller-deleted listings. Listings remain in Trash for inspection for 30 days before permanent physical erasure. Per Goodly rules, there is no manual restore action.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-200 text-xs">
          {trashListings.map((item) => (
            <div key={item.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Trash2 className="w-4 h-4 text-red-500" />
                  <span className="font-bold text-gray-900">{item.title}</span>
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded">
                    {item.listingType}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-[11px]">
                  <span>Seller: <strong>{item.sellerNickname}</strong></span>
                  <span>•</span>
                  <span>Category: {item.categoryName}</span>
                  <span>•</span>
                  <span>Deleted: {new Date(item.deletedAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded border border-amber-200">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Permanent erasure in {item.daysRemaining} days</span>
                </div>
              </div>
            </div>
          ))}

          {trashListings.length === 0 && (
            <div className="p-8 text-center text-xs text-gray-500">
              Trash is empty.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
