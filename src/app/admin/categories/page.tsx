"use client";

import React, { useState } from "react";
import { INITIAL_CATEGORIES, MockCategory } from "@/lib/mock-data";
import { Plus, Archive, ArchiveRestore, Edit2, Check } from "lucide-react";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<MockCategory[]>(INITIAL_CATEGORIES);
  const [newCatName, setNewCatName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const newCat: MockCategory = {
      id: `cat-${Date.now()}`,
      nameEn: newCatName.trim(),
      slug: newCatName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      displayOrder: categories.length + 1,
      isArchived: false,
    };

    setCategories([...categories, newCat]);
    setNewCatName("");
  };

  const handleToggleArchive = (id: string) => {
    setCategories(
      categories.map((c) => (c.id === id ? { ...c, isArchived: !c.isArchived } : c))
    );
  };

  const handleSaveRename = (id: string) => {
    setCategories(
      categories.map((c) => (c.id === id ? { ...c, nameEn: editingName } : c))
    );
    setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Shared Categories</h1>
        <p className="text-xs text-gray-500 mt-1">
          Manage shared categories for Products and Services. Renaming regenerates translations. Archiving prevents selection for new listings while preserving existing items.
        </p>
      </div>

      {/* Add Category Form */}
      <form onSubmit={handleAddCategory} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex gap-3">
        <input
          type="text"
          required
          value={newCatName}
          onChange={(e) => setNewCatName(e.target.value)}
          placeholder="New Category English Name (e.g. Toys & Games)..."
          className="flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold rounded-md shadow-sm transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Category</span>
        </button>
      </form>

      {/* Categories Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-200">
          {categories.map((cat, index) => (
            <div key={cat.id} className="p-4 flex items-center justify-between gap-4 hover:bg-gray-50/50">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-xs font-mono text-gray-400 w-6">#{index + 1}</span>

                {editingId === cat.id ? (
                  <div className="flex items-center gap-2 flex-1 max-w-md">
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      className="text-xs px-2.5 py-1.5 border border-purple-400 rounded-md w-full"
                    />
                    <button
                      onClick={() => handleSaveRename(cat.id)}
                      className="p-1.5 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <span className={`text-xs font-bold ${cat.isArchived ? "text-gray-400 line-through" : "text-gray-900"}`}>
                      {cat.nameEn}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono ml-2">({cat.slug})</span>
                  </div>
                )}
              </div>

              {/* Status and Action Buttons */}
              <div className="flex items-center gap-2">
                {cat.isArchived ? (
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    Archived
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded">
                    Active
                  </span>
                )}

                <button
                  onClick={() => {
                    setEditingId(cat.id);
                    setEditingName(cat.nameEn);
                  }}
                  className="p-1.5 text-gray-500 hover:text-gray-800 rounded hover:bg-gray-100"
                  title="Rename category"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleToggleArchive(cat.id)}
                  className={`p-1.5 rounded text-xs font-medium ${
                    cat.isArchived
                      ? "text-green-700 hover:bg-green-50"
                      : "text-amber-700 hover:bg-amber-50"
                  }`}
                  title={cat.isArchived ? "Unarchive category" : "Archive category"}
                >
                  {cat.isArchived ? <ArchiveRestore className="w-4 h-4" /> : <Archive className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
