import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
// Import the correct schema
import * as schema from "./schema";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("🔴 no database URL");
}

const client = postgres(process.env.DATABASE_URL as string, {
  max: 1,
  // Add options to prefer IPv4 and handle connection issues
  idle_timeout: 20,
  max_lifetime: 60 * 30,
});

const db = drizzle(client, { schema });

export default db;
