import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("🔴 Cannot find database url");
}

export default defineConfig({
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    database: "postgres",
    port: 6543, // Default PostgreSQL port
    host: "aws-0-ap-south-1.pooler.supabase.com",
    user: "postgres.user",
    password: process.env.PW || "",
  },
});
