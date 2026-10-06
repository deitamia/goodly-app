import { pgTable, text, timestamp, boolean, uuid, varchar } from "drizzle-orm/pg-core";

export const sellers = pgTable("sellers", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().unique(), // Supabase Auth user id
  nickname: varchar("nickname", { length: 25 }).notNull().unique(),
  realFirstName: varchar("real_first_name", { length: 100 }).notNull(), // Private to seller & admin
  email: varchar("email", { length: 255 }).notNull(), // Private to seller & admin
  countryCode: varchar("country_code", { length: 2 }).notNull(),
  photoUrl: text("photo_url").notNull(),
  eligibilityDeclaration: boolean("eligibility_declaration").notNull().default(true),
  introduction: text("introduction"), // Optional
  socialLinks: text("social_links"), // JSON stringified array of links
  status: varchar("status", { length: 20 }).notNull().default("pending"), // 'pending', 'approved', 'rejected'
  isBlocked: boolean("is_blocked").notNull().default(false),
  blockReason: text("block_reason"),
  isDeletionRequested: boolean("is_deletion_requested").notNull().default(false),
  deletionRequestedAt: timestamp("deletion_requested_at"),
  firstApprovedAt: timestamp("first_approved_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Seller = typeof sellers.$inferSelect;
export type NewSeller = typeof sellers.$inferInsert;
