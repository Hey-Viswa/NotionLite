// Simple test to verify your Next.js app can connect to the database
// Run this after manually creating the table in Supabase Dashboard

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { workspaces } from "./src/lib/supabase/schema";

export default async function handler(req, res) {
  try {
    // Use environment variable
    const client = postgres(process.env.DATABASE_URL);
    const db = drizzle(client);

    if (req.method === "GET") {
      // Test: Get all workspaces
      const allWorkspaces = await db.select().from(workspaces);
      await client.end();

      res.status(200).json({
        success: true,
        message: "Database connection successful!",
        workspaces: allWorkspaces,
        count: allWorkspaces.length,
      });
    } else if (req.method === "POST") {
      // Test: Create a new workspace
      const newWorkspace = await db
        .insert(workspaces)
        .values({
          workspacesOwner:
            req.body.ownerId || "12345678-1234-1234-1234-123456789012",
          title: req.body.title || "Test Workspace",
          iconId: req.body.iconId || "test-icon",
          data: req.body.data || "test data",
        })
        .returning();

      await client.end();

      res.status(201).json({
        success: true,
        message: "Workspace created successfully!",
        workspace: newWorkspace[0],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
