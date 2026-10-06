"use client";

import React, { useState } from "react";
import { MOCK_SELLERS, MockSeller } from "@/lib/mock-data";
import { Check, X, ShieldAlert, ShieldCheck, UserCheck, Clock } from "lucide-react";

export default function AdminSellersPage() {
  const [sellers, setSellers] = useState<MockSeller[]>([
    ...MOCK_SELLERS,
    {
      id: "seller-applicant-1",
      userId: "usr-4",
      nickname: "HandmadeWarmth",
      realFirstName: "Maria",
      email: "maria.applicant@example.com",
      countryCode: "ES",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      eligibilityDeclaration: true,
      introduction: "Handmade sensory jewelry and chewable necklaces for autistic children.",
      status: "pending",
      isBlocked: false,
      isDeletionRequested: false,
      sellerSince: "Pending",
    },
  ]);

  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "blocked">("pending");
  const [rejectModalSeller, setRejectModalSeller] = useState<MockSeller | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  const handleApprove = (sellerId: string) => {
    setSellers(
      sellers.map((s) => (s.id === sellerId ? { ...s, status: "approved", sellerSince: "October 2026" } : s))
    );
  };

  const handleConfirmReject = () => {
    if (!rejectModalSeller || !rejectReason.trim()) return;

    // Reject erases application without internal rejection archive per invariant
    setSellers(sellers.filter((s) => s.id !== rejectModalSeller.id));
    setRejectModalSeller(null);
    setRejectReason("");
  };

  const handleToggleBlock = (sellerId: string) => {
    setSellers(
      sellers.map((s) => (s.id === sellerId ? { ...s, isBlocked: !s.isBlocked } : s))
    );
  };

  const filteredSellers = sellers.filter((s) => {
    if (activeTab === "pending") return s.status === "pending";
    if (activeTab === "blocked") return s.isBlocked;
    if (activeTab === "approved") return s.status === "approved" && !s.isBlocked;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Seller Moderation & Applications</h1>
        <p className="text-xs text-gray-500 mt-1">
          Review initial applications, manage active sellers, and handle independent profile field approvals.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 text-xs font-semibold">
        <button
          onClick={() => setActiveTab("pending")}
          className={`pb-2 px-3 border-b-2 transition-colors ${
            activeTab === "pending"
              ? "border-purple-600 text-purple-700 font-bold"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          Pending Applications ({sellers.filter((s) => s.status === "pending").length})
        </button>
        <button
          onClick={() => setActiveTab("approved")}
          className={`pb-2 px-3 border-b-2 transition-colors ${
            activeTab === "approved"
              ? "border-purple-600 text-purple-700 font-bold"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          Active Sellers ({sellers.filter((s) => s.status === "approved" && !s.isBlocked).length})
        </button>
        <button
          onClick={() => setActiveTab("blocked")}
          className={`pb-2 px-3 border-b-2 transition-colors ${
            activeTab === "blocked"
              ? "border-purple-600 text-purple-700 font-bold"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          Blocked Sellers ({sellers.filter((s) => s.isBlocked).length})
        </button>
      </div>

      {/* Sellers List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-200">
          {filteredSellers.map((s) => (
            <div key={s.id} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={s.photoUrl}
                  alt={s.nickname}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200 flex-shrink-0"
                />
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">{s.nickname}</span>
                    <span className="font-mono bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[10px] font-semibold">
                      {s.countryCode}
                    </span>
                    <span className="text-gray-400">• Private First Name: <strong className="text-gray-700">{s.realFirstName}</strong></span>
                    <span className="text-gray-400">• Email: <strong className="text-gray-700">{s.email}</strong></span>
                  </div>

                  {s.introduction && (
                    <p className="text-gray-600 max-w-xl text-[11px] leading-relaxed">
                      {s.introduction}
                    </p>
                  )}

                  <div className="flex items-center gap-2 text-[10px] text-gray-500 pt-1">
                    <span className="font-semibold text-goodly-green">Eligibility Declared ✓</span>
                    <span>•</span>
                    <span>Registered: October 2026</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 self-end md:self-center">
                {s.status === "pending" ? (
                  <>
                    <button
                      onClick={() => handleApprove(s.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded shadow-sm transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => setRejectModalSeller(s)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded shadow-sm transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Reject & Delete</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleToggleBlock(s.id)}
                    className={`px-3 py-1.5 text-xs font-bold rounded shadow-sm transition-colors ${
                      s.isBlocked
                        ? "bg-gray-800 hover:bg-gray-900 text-white"
                        : "bg-red-50 hover:bg-red-100 text-red-700 border border-red-200"
                    }`}
                  >
                    {s.isBlocked ? "Unblock Seller" : "Block Seller"}
                  </button>
                )}
              </div>
            </div>
          ))}

          {filteredSellers.length === 0 && (
            <div className="p-8 text-center text-xs text-gray-500">
              No sellers in this section.
            </div>
          )}
        </div>
      </div>

      {/* Reject Application Modal with Mandatory Reason */}
      {rejectModalSeller && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              Reject Application: {rejectModalSeller.nickname}
            </h3>
            <p className="text-xs text-gray-600">
              Per Goodly rules, rejecting an application sends an explanatory decision email to the applicant and permanently deletes the account without retaining an internal rejection archive.
            </p>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Reason for Rejection <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="e.g. Products do not meet self-created eligibility criteria..."
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setRejectModalSeller(null)}
                className="px-3 py-1.5 text-xs text-gray-600 hover:text-gray-800 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReject}
                disabled={!rejectReason.trim()}
                className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded disabled:opacity-50"
              >
                Confirm Rejection & Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
