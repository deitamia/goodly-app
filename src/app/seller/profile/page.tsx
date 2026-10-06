"use client";

import React, { useState } from "react";
import { MOCK_SELLERS } from "@/lib/mock-data";
import { ShieldCheck, Clock, Trash2, CheckCircle, AlertTriangle } from "lucide-react";

export default function SellerProfilePage() {
  const seller = MOCK_SELLERS[0]; // ElenaCrafts

  const [nickname, setNickname] = useState(seller.nickname);
  const [introduction, setIntroduction] = useState(seller.introduction || "");
  const [photoUrl, setPhotoUrl] = useState(seller.photoUrl);
  const [pendingNicknameReq, setPendingNicknameReq] = useState<string | null>(null);
  const [deletionRequested, setDeletionRequested] = useState(seller.isDeletionRequested);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleRequestNicknameChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname !== seller.nickname) {
      setPendingNicknameReq(nickname);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
  };

  const handleCancelNicknameRequest = () => {
    setPendingNicknameReq(null);
    setNickname(seller.nickname);
  };

  const handleToggleDeletionRequest = () => {
    setDeletionRequested(!deletionRequested);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Seller Profile</h1>
        <p className="text-xs text-gray-500 mt-1">
          View your approved public profile data and request independent field updates.
        </p>
      </div>

      {saveSuccess && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-md text-xs text-green-800 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span>Profile field change request submitted for administrator review.</span>
        </div>
      )}

      {/* Account Deletion Request Warning */}
      {deletionRequested && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg space-y-2">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Account Deletion Request Active</span>
          </div>
          <p className="text-xs text-amber-700">
            Your public profile and all listings are currently suppressed from search. An administrator will manually process permanent deletion.
          </p>
          <button
            onClick={handleToggleDeletionRequest}
            className="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold rounded"
          >
            Cancel deletion request
          </button>
        </div>
      )}

      {/* Profile Form */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-base font-bold text-gray-900 pb-2 border-b border-gray-100">
          Profile Information
        </h2>

        {/* Private First Name (Display Only) */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Private First Name <span className="text-gray-400 font-normal">(Never displayed publicly)</span>
          </label>
          <input
            type="text"
            disabled
            value={seller.realFirstName}
            className="w-full text-xs px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500 cursor-not-allowed"
          />
        </div>

        {/* Public Nickname with Independent Request Approval */}
        <form onSubmit={handleRequestNicknameChange} className="space-y-2">
          <label className="block text-xs font-semibold text-gray-700">
            Public Nickname <span className="text-goodly-green font-normal">(3–25 chars)</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              required
              minLength={3}
              maxLength={25}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            />
            <button
              type="submit"
              disabled={nickname === seller.nickname || !!pendingNicknameReq}
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-md disabled:opacity-40 transition-colors"
            >
              Request Change
            </button>
          </div>

          {pendingNicknameReq && (
            <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-blue-800">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>
                  Pending review: <strong className="font-semibold">{pendingNicknameReq}</strong> (Current approved: {seller.nickname})
                </span>
              </div>
              <button
                type="button"
                onClick={handleCancelNicknameRequest}
                className="text-red-600 hover:underline font-semibold text-[11px]"
              >
                Cancel change
              </button>
            </div>
          )}
        </form>

        {/* Photo URL */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Profile Photo</label>
          <div className="flex items-center gap-4">
            <img
              src={photoUrl}
              alt="Profile avatar"
              className="w-14 h-14 rounded-full object-cover border border-gray-200"
            />
            <input
              type="url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            />
          </div>
        </div>

        {/* Introduction */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Seller Introduction <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows={4}
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
          />
        </div>
      </div>

      {/* Danger Zone: Account Deletion */}
      <div className="bg-red-50/50 p-6 rounded-lg border border-red-200 space-y-3">
        <h3 className="text-sm font-bold text-red-900">Danger Zone</h3>
        <p className="text-xs text-red-700">
          Requesting account deletion will immediately suppress your profile and listings from Goodly, followed by permanent physical erasure.
        </p>
        {!deletionRequested && (
          <button
            type="button"
            onClick={handleToggleDeletionRequest}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-md shadow-sm transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Request account deletion</span>
          </button>
        )}
      </div>
    </div>
  );
}
