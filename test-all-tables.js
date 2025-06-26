const { drizzle } = require("drizzle-orm/postgres-js");
const postgres = require("postgres");
const { workspaces, folders, files } = require("./src/lib/supabase/schema.ts");
require("dotenv").config();

async function testAllTables() {
  console.log("Testing all tables: workspaces, folders, and files...");

  try {
    const client = postgres(process.env.DATABASE_URL, {
      max: 1,
      idle_timeout: 20,
      connect_timeout: 30,
    });

    const db = drizzle(client);
    console.log("✅ Database connection established");

    // Test 1: Create a workspace
    console.log("\n📝 Creating a test workspace...");
    const testWorkspace = await db
      .insert(workspaces)
      .values({
        workspacesOwner: "12345678-1234-1234-1234-123456789012",
        title: "Test Workspace for Relations",
        iconId: "workspace-icon",
        data: "workspace data",
      })
      .returning();

    const workspaceId = testWorkspace[0].id;
    console.log("✅ Workspace created:", testWorkspace[0].title);

    // Test 2: Create a folder in the workspace
    console.log("\n📁 Creating a test folder...");
    const testFolder = await db
      .insert(folders)
      .values({
        workspaceId: workspaceId,
        title: "Test Folder",
        iconId: "folder-icon",
        data: "folder data",
        workspacesId: workspaceId,
      })
      .returning();

    const folderId = testFolder[0].id;
    console.log("✅ Folder created:", testFolder[0].title);

    // Test 3: Create a file in the folder
    console.log("\n📄 Creating a test file...");
    const testFile = await db
      .insert(files)
      .values({
        workspaceId: workspaceId,
        title: "Test File",
        iconId: "file-icon",
        data: "file data",
        workspacesId: workspaceId,
        folderId: folderId,
      })
      .returning();

    console.log("✅ File created:", testFile[0].title);

    // Test 4: Query all data
    console.log("\n📊 Querying all data...");
    const allWorkspaces = await db.select().from(workspaces);
    const allFolders = await db.select().from(folders);
    const allFiles = await db.select().from(files);

    console.log(`✅ Total workspaces: ${allWorkspaces.length}`);
    console.log(`✅ Total folders: ${allFolders.length}`);
    console.log(`✅ Total files: ${allFiles.length}`);

    await client.end();
    console.log("\n🎉 All tests completed successfully!");
  } catch (error) {
    console.log("❌ Test failed:");
    console.error(error.message);
  }
}

testAllTables();
