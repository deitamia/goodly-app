import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { sellers } from "./sellers";

export const profileRequests = pgTable("profile_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  sellerId: uuid("seller_id").notNull().references(() => sellers.id, { onDelete: "cascade" }),
  fieldName: varchar("field_name", { length: 50 }).notNull(), // 'nickname', 'realFirstName', 'countryCode', 'photoUrl', 'introduction', 'socialLinks'
  currentValue: text("current_value"),
  proposedValue: text("proposed_value").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("pending"), // 'pending', 'approved', 'rejected', 'canceled', 'superseded'
  adminReason: text("admin_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  decidedAt: timestamp("decided_at"),
});

export type ProfileRequest = typeof profileRequests.$inferSelect;
export type NewProfileRequest = typeof profileRequests.$inferInsert;
