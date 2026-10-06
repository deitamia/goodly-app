"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ENGLISH_DICTIONARY } from "@/lib/i18n/dictionaries";
import { ChevronDown, ChevronUp, CheckCircle, ShieldCheck } from "lucide-react";

export default function BecomeASellerPage() {
  const [eligibilityOpen, setEligibilityOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Profile setup fields after registration
  const [realFirstName, setRealFirstName] = useState("");
  const [nickname, setNickname] = useState("");
  const [country, setCountry] = useState("NL");
  const [photoUrl, setPhotoUrl] = useState("");
  const [eligibilityChecked, setEligibilityChecked] = useState(false);
  const [step, setStep] = useState<"register" | "profile" | "pending">("register");

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the Terms to continue.");
      return;
    }
    // Proceed to profile setup step
    setStep("profile");
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eligibilityChecked) {
      alert("Please check the eligibility declaration.");
      return;
    }
    setStep("pending");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 w-full">
      {/* Introduction text */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Become a Seller</h1>
        <p className="text-xs text-gray-600 mt-2 max-w-lg mx-auto">
          {ENGLISH_DICTIONARY.seller_registration.intro}
        </p>
      </div>

      {/* Expandable Accordion: Who can become a seller? */}
      <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm mb-8">
        <button
          type="button"
          onClick={() => setEligibilityOpen(!eligibilityOpen)}
          className="w-full px-5 py-3.5 text-left flex items-center justify-between font-bold text-gray-900 hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm">{ENGLISH_DICTIONARY.home.who_can_sell_title}</span>
          {eligibilityOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </button>

        {eligibilityOpen && (
          <div className="px-5 pb-5 pt-1 text-xs text-gray-700 space-y-2 border-t border-gray-100 bg-gray-50/50">
            <p>{ENGLISH_DICTIONARY.seller_registration.eligibility_p1}</p>
            <p>{ENGLISH_DICTIONARY.seller_registration.eligibility_p2}</p>
            <p className="font-semibold text-goodly-green">{ENGLISH_DICTIONARY.seller_registration.eligibility_p3}</p>
          </div>
        )}
      </div>

      {/* Step 1: Register */}
      {step === "register" && (
        <form onSubmit={handleRegisterSubmit} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-gray-900">Create your account</h2>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Confirm password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
              />
            </div>
          </div>

          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              required
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-0.5 rounded text-goodly-green focus:ring-goodly-green"
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I accept the{" "}
              <Link href="/terms" className="text-goodly-green underline font-medium" target="_blank">
                Terms
              </Link>{" "}
              and acknowledge the{" "}
              <Link href="/privacy" className="text-goodly-green underline font-medium" target="_blank">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-md shadow-sm transition-colors mt-4"
          >
            Create account & Continue
          </button>
        </form>
      )}

      {/* Step 2: Profile Application */}
      {step === "profile" && (
        <form onSubmit={handleProfileSubmit} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <ShieldCheck className="w-5 h-5 text-goodly-green" />
            <h2 className="text-base font-bold text-gray-900">Set up your seller profile</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Private First Name <span className="text-gray-400 font-normal">(Never shown publicly)</span>
              </label>
              <input
                type="text"
                required
                value={realFirstName}
                onChange={(e) => setRealFirstName(e.target.value)}
                placeholder="Elena"
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Public Nickname <span className="text-goodly-green font-normal">(3–25 chars, shown publicly)</span>
              </label>
              <input
                type="text"
                required
                minLength={3}
                maxLength={25}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="ElenaCrafts"
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
              >
                <option value="NL">Netherlands (NL)</option>
                <option value="DE">Germany (DE)</option>
                <option value="BG">Bulgaria (BG)</option>
                <option value="ES">Spain (ES)</option>
                <option value="FR">France (FR)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Profile Photo URL</label>
              <input
                type="url"
                required
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green"
              />
            </div>
          </div>

          {/* Mandatory Eligibility Declaration */}
          <div className="pt-2 p-3 bg-green-50 rounded-md border border-green-100 flex items-start gap-2">
            <input
              type="checkbox"
              id="eligibility"
              required
              checked={eligibilityChecked}
              onChange={(e) => setEligibilityChecked(e.target.checked)}
              className="mt-0.5 rounded text-goodly-green focus:ring-goodly-green"
            />
            <label htmlFor="eligibility" className="text-xs font-semibold text-gray-900">
              {ENGLISH_DICTIONARY.seller_registration.declaration}
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-md shadow-sm transition-colors mt-4"
          >
            Submit for review
          </button>
        </form>
      )}

      {/* Step 3: Application Pending Review Screen */}
      {step === "pending" && (
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-goodly-green mx-auto" />
          <h2 className="text-lg font-bold text-gray-900">
            {ENGLISH_DICTIONARY.seller_registration.pending_heading}
          </h2>
          <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
            {ENGLISH_DICTIONARY.seller_registration.pending_text}
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-md"
            >
              Back to Home
            </Link>
            <Link
              href="/seller/dashboard"
              className="px-4 py-2 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-md"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
