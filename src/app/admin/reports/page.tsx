"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle, Clock, ShieldAlert } from "lucide-react";

interface MockReport {
  id: string;
  sellerId: string;
  sellerNickname: string;
  reporterEmail: string;
  description: string;
  sourceListingTitle?: string;
  status: "new" | "in_review" | "closed";
  createdAt: string;
}

export default function AdminReportsPage() {
  const [reports, setReports] = useState<MockReport[]>([
    {
      id: "rep-1",
      sellerId: "seller-elena-nl",
      sellerNickname: "ElenaCrafts",
      reporterEmail: "concerned.parent@example.com",
      description: "Checking to confirm if external shipping times match the description on the website.",
      sourceListingTitle: "Handmade Tactile Weighted Blanket for Sensory Calm",
      status: "new",
      createdAt: "2026-10-06T14:20:00Z",
    },
  ]);

  const handleStatusChange = (id: string, newStatus: "new" | "in_review" | "closed") => {
    setReports(reports.map((r) => (r.id === id ? { ...r, status: newStatus } : r)));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Private Visitor Reports</h1>
        <p className="text-xs text-gray-500 mt-1">
          Review anonymous reports about sellers. Reports are strictly private to administrators and permanently delete 30 days after being marked Closed.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-200">
          {reports.map((rep) => (
            <div key={rep.id} className="p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-gray-900">
                    Report on Seller: <strong className="text-purple-700">{rep.sellerNickname}</strong>
                  </span>
                  <span className="text-[10px] text-gray-400">({new Date(rep.createdAt).toLocaleDateString()})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      rep.status === "new"
                        ? "bg-amber-100 text-amber-800"
                        : rep.status === "in_review"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {rep.status.replace("_", " ")}
                  </span>
                </div>
              </div>

              {rep.sourceListingTitle && (
                <p className="text-[11px] text-gray-500 bg-gray-50 p-2 rounded">
                  Context listing: <span className="font-semibold text-gray-700">{rep.sourceListingTitle}</span>
                </p>
              )}

              <p className="text-xs text-gray-700 bg-amber-50/50 p-3 rounded border border-amber-100">
                "{rep.description}"
              </p>

              <div className="flex items-center justify-between pt-2 text-xs">
                <span className="text-gray-400 text-[11px]">Reporter Email: {rep.reporterEmail}</span>

                <div className="flex items-center gap-2">
                  {rep.status !== "in_review" && rep.status !== "closed" && (
                    <button
                      onClick={() => handleStatusChange(rep.id, "in_review")}
                      className="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold rounded"
                    >
                      Mark In Review
                    </button>
                  )}
                  {rep.status !== "closed" && (
                    <button
                      onClick={() => handleStatusChange(rep.id, "closed")}
                      className="px-2.5 py-1 bg-gray-800 text-white hover:bg-gray-900 font-semibold rounded"
                    >
                      Close Report (Starts 30d Clock)
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {reports.length === 0 && (
            <div className="p-8 text-center text-xs text-gray-500">
              No reports in this view.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
