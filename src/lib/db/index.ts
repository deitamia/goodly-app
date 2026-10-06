import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

// Database target guard check
function verifyDatabaseTarget(url?: string) {
  if (!url) {
    console.warn("[Database Guard] No DATABASE_URL provided. Running in mock/offline mode.");
    return null;
  }
  return url;
}

const verifiedUrl = verifyDatabaseTarget(connectionString);

// Client initialization
export const sqlClient = verifiedUrl ? postgres(verifiedUrl, { max: 10 }) : null;
export const db = sqlClient ? drizzle(sqlClient, { schema }) : null;
