"use client";

import React, { useState } from "react";
import { MessageSquare, ShieldAlert, Send } from "lucide-react";

export default function AdminMessagesPage() {
  const [activeThread, setActiveThread] = useState<string>("thread-1");
  const [replyText, setReplyText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "msg-1",
      sellerNickname: "ElenaCrafts",
      sellerId: "seller-elena-nl",
      type: "general",
      text: "Hello Pavel, I had a quick question regarding updating the language availability on my workshop listing.",
      time: "Yesterday at 15:30",
      sender: "seller",
    },
  ]);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    setMessages([
      ...messages,
      {
        id: `msg-${Date.now()}`,
        sellerNickname: "ElenaCrafts",
        sellerId: "seller-elena-nl",
        type: "general",
        text: replyText.trim(),
        time: "Just now",
        sender: "admin",
      },
    ]);
    setReplyText("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Seller Messages & Appeals</h1>
        <p className="text-xs text-gray-500 mt-1">
          Direct platform-only correspondence with sellers. Closed threads permanently delete from both sides after 30 days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm min-h-[500px]">
        {/* Thread list */}
        <div className="border-r border-gray-200 p-3 space-y-1">
          <button
            onClick={() => setActiveThread("thread-1")}
            className="w-full text-left p-3 rounded-md bg-purple-50 border border-purple-100 space-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between text-xs font-bold text-purple-900">
              <span>ElenaCrafts</span>
              <span className="text-[10px] text-purple-600 font-normal">Active</span>
            </div>
            <p className="text-[11px] text-gray-600 line-clamp-1">
              Hello Pavel, I had a quick question regarding...
            </p>
          </button>
        </div>

        {/* Active conversation */}
        <div className="md:col-span-2 flex flex-col justify-between p-5">
          <div className="space-y-4 overflow-y-auto">
            <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-900">ElenaCrafts</h3>
                <span className="text-[10px] text-gray-400">Direct seller thread</span>
              </div>
              <button
                onClick={() => alert("Thread marked closed. 30-day retention countdown started.")}
                className="text-xs text-gray-500 hover:text-gray-800 font-medium"
              >
                Mark Closed (30d timer)
              </button>
            </div>

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "admin" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-md p-3 rounded-lg text-xs leading-relaxed ${
                    m.sender === "admin"
                      ? "bg-purple-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <span className="text-[10px] text-gray-400 mt-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Reply Box */}
          <form onSubmit={handleSendReply} className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              required
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your platform reply to ElenaCrafts..."
              className="flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold rounded-md shadow-sm flex items-center gap-1"
            >
              <span>Reply</span>
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
