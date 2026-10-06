import { pgTable, text, timestamp, boolean, uuid, varchar } from "drizzle-orm/pg-core";
import { sellers } from "./sellers";

export const visitorReports = pgTable("visitor_reports", {
  id: uuid("id").defaultRandom().primaryKey(),
  sellerId: uuid("seller_id").notNull().references(() => sellers.id, { onDelete: "cascade" }),
  sourceListingId: uuid("source_listing_id"), // Optional context
  reporterEmail: varchar("reporter_email", { length: 255 }).notNull(),
  description: text("description").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("new"), // 'new', 'in_review', 'closed'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  closedAt: timestamp("closed_at"),
});

export const sellerMessages = pgTable("seller_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  sellerId: uuid("seller_id").notNull().references(() => sellers.id, { onDelete: "cascade" }),
  senderRole: varchar("sender_role", { length: 20 }).notNull(), // 'seller' | 'admin'
  messageType: varchar("message_type", { length: 30 }).notNull().default("general"), // 'general', 'appeal', 'deletion_request'
  messageText: text("message_text").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("new"), // 'new', 'read', 'closed'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  closedAt: timestamp("closed_at"),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 200 }).notNull(),
  message: text("message").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("new"), // 'new', 'read', 'closed'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  closedAt: timestamp("closed_at"),
});

export const systemNotifications = pgTable("system_notifications", {
  id: uuid("id").defaultRandom().primaryKey(),
  sellerId: uuid("seller_id").notNull().references(() => sellers.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 200 }).notNull(),
  body: text("body").notNull(),
  isRead: boolean("is_read").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
