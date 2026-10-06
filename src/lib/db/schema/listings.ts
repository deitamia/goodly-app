import { pgTable, text, timestamp, boolean, uuid, varchar, numeric } from "drizzle-orm/pg-core";
import { sellers } from "./sellers";
import { categories } from "./categories";

export const listings = pgTable("listings", {
  id: uuid("id").defaultRandom().primaryKey(),
  sellerId: uuid("seller_id").notNull().references(() => sellers.id, { onDelete: "cascade" }),
  categoryId: uuid("category_id").notNull().references(() => categories.id),
  listingType: varchar("listing_type", { length: 20 }).notNull(), // 'product' | 'service'
  imageUrl: text("image_url").notNull(),
  originalTitle: varchar("original_title", { length: 80 }).notNull(),
  originalDescription: varchar("original_description", { length: 300 }).notNull(),
  originalLanguage: varchar("original_language", { length: 10 }).notNull().default("en"),
  sourceVersion: varchar("source_version", { length: 32 }).notNull().default("1"),
  
  // Pricing
  priceAmount: numeric("price_amount", { precision: 10, scale: 2 }),
  priceCurrency: varchar("price_currency", { length: 3 }).notNull().default("EUR"),
  isPriceOnRequest: boolean("is_price_on_request").notNull().default(false), // Valid for services only
  
  // External link
  externalUrl: text("external_url").notNull(),
  
  // Product specific shipping
  shipToCountries: text("ship_to_countries"), // JSON array of country codes
  isWorldwide: boolean("is_worldwide").notNull().default(false),
  
  // Service specific availability
  serviceType: varchar("service_type", { length: 20 }), // 'online' | 'physical'
  physicalCountry: varchar("physical_country", { length: 2 }),
  physicalCity: varchar("physical_city", { length: 100 }),
  onlineLanguages: text("online_languages"), // JSON array of language codes / names
  
  // Lifecycle & Moderation
  ownStatus: varchar("own_status", { length: 20 }).notNull().default("active"), // 'active', 'hidden', 'blocked'
  previousOwnStatus: varchar("previous_own_status", { length: 20 }), // stored for unblock
  deletedAt: timestamp("deleted_at"), // set on delete -> moves to Trash for 30 days
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Listing = typeof listings.$inferSelect;
export type NewListing = typeof listings.$inferInsert;
