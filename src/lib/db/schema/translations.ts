import { pgTable, text, timestamp, boolean, uuid, varchar } from "drizzle-orm/pg-core";

export const translations = pgTable("translations", {
  id: uuid("id").defaultRandom().primaryKey(),
  entityType: varchar("entity_type", { length: 30 }).notNull(), // 'listing' | 'category' | 'seller_intro' | 'static'
  entityId: uuid("entity_id").notNull(),
  languageCode: varchar("language_code", { length: 10 }).notNull(),
  fieldName: varchar("field_name", { length: 50 }).notNull(), // 'title', 'description', 'name', 'intro'
  translatedText: text("translated_text").notNull(),
  sourceVersion: varchar("source_version", { length: 32 }).notNull().default("1"),
  isVerified: boolean("is_verified").notNull().default(false), // Admin verification flag
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Translation = typeof translations.$inferSelect;
export type NewTranslation = typeof translations.$inferInsert;
