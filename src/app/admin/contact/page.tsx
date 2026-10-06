"use client";

import React, { useState } from "react";
import { Mail, ExternalLink, CheckCircle } from "lucide-react";

interface ContactInquiry {
  id: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "closed";
  createdAt: string;
}

export default function AdminContactPage() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([
    {
      id: "inq-1",
      email: "visitor@example.com",
      subject: "Partnership inquiry with disability support foundation",
      message: "Hello Pavel, we run a regional foundation in the Netherlands and would love to feature Goodly in our upcoming newsletter for caregivers.",
      status: "new",
      createdAt: "2026-10-06T09:15:00Z",
    },
  ]);

  const handleCloseInquiry = (id: string) => {
    setInquiries(inquiries.map((i) => (i.id === id ? { ...i, status: "closed" } : i)));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Contact Inquiries</h1>
        <p className="text-xs text-gray-500 mt-1">
          Public contact form submissions. Replying opens your external email app via mailto. Closing manually starts the 30-day retention clock.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-200">
          {inquiries.map((inq) => (
            <div key={inq.id} className="p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-gray-900">{inq.subject}</span>
                  <span className="text-[10px] text-gray-400">({new Date(inq.createdAt).toLocaleDateString()})</span>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    inq.status === "new" ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {inq.status}
                </span>
              </div>

              <p className="text-xs text-gray-700 bg-gray-50 p-3 rounded border border-gray-100 leading-relaxed">
                {inq.message}
              </p>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="text-gray-500 font-mono text-[11px]">From: {inq.email}</span>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${inq.email}?subject=Re: ${encodeURIComponent(inq.subject)}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded transition-colors"
                  >
                    <span>Reply by email</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {inq.status !== "closed" && (
                    <button
                      onClick={() => handleCloseInquiry(inq.id)}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded"
                    >
                      Mark Closed (30d Timer)
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {inquiries.length === 0 && (
            <div className="p-8 text-center text-xs text-gray-500">
              No inquiries in this view.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
