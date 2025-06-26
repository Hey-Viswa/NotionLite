const { drizzle } = require("drizzle-orm/postgres-js");
const postgres = require("postgres");
const { workspaces } = require("./src/lib/supabase/schema.ts");
require("dotenv").config();

async function testDrizzle() {
  console.log("Testing Drizzle ORM with workspaces table...");

  try {
    // Try the original connection first
    const originalConnectionString = process.env.DATABASE_URL;
    console.log("Trying original connection string...");
    console.log(
      "Connection string:",
      originalConnectionString.replace(/:[^:]*@/, ":****@")
    );

    const client = postgres(originalConnectionString, {
      // Add connection options for better reliability
      max: 1,
      idle_timeout: 20,
      connect_timeout: 30,
    });

    const db = drizzle(client);

    console.log("✅ Database connection established");

    // Test: Check if workspaces table exists
    console.log("📋 Checking if workspaces table exists...");
    const tableCheck = await client`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'workspaces'
      );
    `;

    if (tableCheck[0].exists) {
      console.log("✅ Workspaces table exists!");

      // Test: Try to insert a test record
      console.log("📝 Testing insert operation...");
      const testWorkspace = await db
        .insert(workspaces)
        .values({
          workspacesOwner: "12345678-1234-1234-1234-123456789012",
          title: "Test Workspace",
          iconId: "test-icon",
          data: "test data",
          inTrash: null,
          logo: null,
          bannerUrl: null,
        })
        .returning();

      console.log("✅ Insert successful:", testWorkspace);

      // Test: Try to select records
      console.log("📖 Testing select operation...");
      const allWorkspaces = await db.select().from(workspaces);
      console.log(
        "✅ Select successful. Found",
        allWorkspaces.length,
        "workspaces"
      );
    } else {
      console.log(
        "❌ Workspaces table does not exist. Please create it manually in Supabase dashboard."
      );
    }

    await client.end();
    console.log("🎉 All tests completed!");
  } catch (error) {
    console.log("❌ Test failed:");
    console.error(error.message);
  }
}

testDrizzle();
