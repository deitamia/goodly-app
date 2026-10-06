"use client";

import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-12 w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-xs text-gray-500 mt-2">
          Have a question or general inquiry about Goodly? Send us a message below.
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-goodly-green mx-auto" />
          <h2 className="text-base font-bold text-gray-900">Message Sent</h2>
          <p className="text-xs text-gray-600">
            Thank you for reaching out. We will reply directly to your email address.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setEmail("");
              setSubject("");
              setMessage("");
            }}
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md text-xs font-semibold hover:bg-gray-800"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green focus:border-goodly-green"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="General inquiry..."
              className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green focus:border-goodly-green"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-goodly-green focus:border-goodly-green"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 bg-goodly-green hover:bg-goodly-greenHover text-white text-xs font-bold rounded-md shadow-sm transition-colors mt-2"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}
