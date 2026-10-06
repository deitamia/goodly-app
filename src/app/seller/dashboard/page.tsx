"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MOCK_SELLERS, MOCK_LISTINGS } from "@/lib/mock-data";
import { User, Package, MessageSquare, ExternalLink, AlertCircle, ShieldAlert } from "lucide-react";

export default function SellerDashboardPage() {
  const seller = MOCK_SELLERS[0]; // ElenaCrafts
  const listings = MOCK_LISTINGS.filter((l) => l.sellerId === seller.id);
  const activeCount = listings.filter((l) => l.ownStatus === "active").length;

  const [appealText, setAppealText] = useState("");
  const [appealSent, setAppealSent] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-100 text-green-800">
              {seller.status === "approved" ? "Active Seller" : "Pending Review"}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Welcome back, <span className="font-semibold text-gray-800">{seller.nickname}</span>
          </p>
        </div>

        {/* View Public Profile Link */}
        {seller.status === "approved" && !seller.isBlocked && !seller.isDeletionRequested && (
          <Link
            href={`/seller/${seller.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-xs font-bold text-gray-800 rounded-md shadow-sm transition-colors"
          >
            <span>View public profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      {/* Blocked Alert & Appeal Form */}
      {seller.isBlocked && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 space-y-3">
          <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <span>Your seller account is currently blocked</span>
          </div>
          <p className="text-xs text-red-700">
            Reason: <span className="font-medium">{seller.blockReason || "Policy non-compliance."}</span>
          </p>
          <p className="text-xs text-red-600">
            Your public profile and listings are currently hidden. You may submit an appeal directly to the administrator:
          </p>

          {appealSent ? (
            <p className="text-xs font-bold text-green-700">Your appeal has been delivered to the administrator.</p>
          ) : (
            <div className="flex gap-2 pt-2">
              <input
                type="text"
                value={appealText}
                onChange={(e) => setAppealText(e.target.value)}
                placeholder="Explain why your account should be unblocked..."
                className="flex-1 text-xs px-3 py-2 bg-white border border-red-300 rounded-md"
              />
              <button
                onClick={() => {
                  if (appealText.trim()) setAppealSent(true);
                }}
                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white text-xs font-bold rounded-md"
              >
                Send Appeal
              </button>
            </div>
          )}
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-gray-500">Active Public Listings</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{activeCount}</p>
          </div>
          <Package className="w-8 h-8 text-goodly-green" />
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-gray-500">Account Status</p>
            <p className="text-sm font-bold text-gray-900 mt-1 capitalize">{seller.status}</p>
          </div>
          <User className="w-8 h-8 text-blue-600" />
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-gray-500">System Notifications</p>
            <p className="text-sm font-bold text-gray-900 mt-1">All caught up</p>
          </div>
          <MessageSquare className="w-8 h-8 text-purple-600" />
        </div>
      </div>

      {/* Navigation Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/seller/listings"
          className="p-5 bg-white border border-gray-200 hover:border-goodly-green rounded-lg shadow-sm group transition-all"
        >
          <h3 className="text-base font-bold text-gray-900 group-hover:text-goodly-green">Manage My Listings →</h3>
          <p className="text-xs text-gray-500 mt-1">
            Add new products or services, edit descriptions, manage visibility, or delete items.
          </p>
        </Link>

        <Link
          href="/seller/profile"
          className="p-5 bg-white border border-gray-200 hover:border-goodly-green rounded-lg shadow-sm group transition-all"
        >
          <h3 className="text-base font-bold text-gray-900 group-hover:text-goodly-green">My Profile Settings →</h3>
          <p className="text-xs text-gray-500 mt-1">
            Request profile field changes, update introduction, manage social links, or request deletion.
          </p>
        </Link>
      </div>
    </div>
  );
}
