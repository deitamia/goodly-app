"use client";

import React, { useState } from "react";
import { X, AlertCircle, CheckCircle } from "lucide-react";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  sellerNickname: string;
  sourceListingTitle?: string;
}

export function ReportModal({ isOpen, onClose, sellerNickname, sourceListingTitle }: ReportModalProps) {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-4">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900">Report Submitted</h3>
            <p className="text-xs text-gray-600 mt-2">
              Thank you for helping keep Goodly safe. Our administrator will review this report privately.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-5 px-4 py-2 bg-gray-900 text-white rounded-md text-xs font-semibold hover:bg-gray-800"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <h3 className="text-base font-bold text-gray-900">Report Seller: {sellerNickname}</h3>
            </div>

            {sourceListingTitle && (
              <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded border border-gray-100">
                Source listing: <span className="font-medium text-gray-700">{sourceListingTitle}</span>
              </p>
            )}

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green focus:border-goodly-green"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Reason / Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please describe why this seller or listing violates Goodly rules..."
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green focus:border-goodly-green"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-xs text-gray-600 hover:text-gray-800 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-md disabled:opacity-50 transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Submit Report"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
