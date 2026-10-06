"use client";

import React from "react";
import Link from "next/link";
import { Users, AlertCircle, MessageSquare, Mail, Layers, Globe, Palette, Trash2, ShieldCheck, CheckCircle } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
      {/* Admin Header */}
      <div className="pb-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">Administrator Panel</h1>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
              Pavel (Sole Administrator)
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Review seller applications, profile field requests, moderate listings, and manage translations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-xs font-semibold rounded-md shadow-sm"
          >
            View Public Site
          </Link>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link
          href="/admin/sellers"
          className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-purple-500 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500">Pending Applications</span>
            <Users className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">1</p>
          <span className="text-[11px] text-purple-600 font-medium group-hover:underline">Review applications →</span>
        </Link>

        <Link
          href="/admin/reports"
          className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-amber-500 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500">Visitor Reports</span>
            <AlertCircle className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">0</p>
          <span className="text-[11px] text-amber-600 font-medium group-hover:underline">No unread reports</span>
        </Link>

        <Link
          href="/admin/messages"
          className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-blue-500 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500">Seller Messages & Appeals</span>
            <MessageSquare className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">1</p>
          <span className="text-[11px] text-blue-600 font-medium group-hover:underline">View messages →</span>
        </Link>

        <Link
          href="/admin/contact"
          className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-emerald-500 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500">Contact Inquiries</span>
            <Mail className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">0</p>
          <span className="text-[11px] text-emerald-600 font-medium group-hover:underline">Inbox clear</span>
        </Link>
      </div>

      {/* Admin Modules Grid */}
      <div>
        <h2 className="text-base font-bold text-gray-900 mb-4">Management Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/sellers"
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-purple-400 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-purple-600" />
              <div>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-purple-700">Sellers & Approvals</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Review initial applications and independent field change requests.</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/listings"
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-purple-400 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-purple-600" />
              <div>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-purple-700">Listings Moderation</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Moderate catalog items, block rule violations, and inspect states.</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/categories"
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-purple-400 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-blue-700">Categories Management</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Add, rename, reorder, and archive shared categories.</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/translations"
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-purple-400 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-emerald-600" />
              <div>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-emerald-700">Static Translations</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Edit English source and verify translations across 15 languages.</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/appearance"
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-purple-400 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-amber-600" />
              <div>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-amber-700">Appearance & Theme</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Customize validated color palettes and preview changes.</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/trash"
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-purple-400 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Trash2 className="w-5 h-5 text-red-600" />
              <div>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-red-700">Trash & Retention</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Inspect seller-deleted listings and 30-day retention countdowns.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
