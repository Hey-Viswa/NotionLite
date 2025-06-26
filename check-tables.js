const { drizzle } = require("drizzle-orm/postgres-js");
const postgres = require("postgres");
require("dotenv").config();

async function checkTables() {
  console.log("Checking existing tables in database...");

  try {
    const client = postgres(process.env.DATABASE_URL, {
      max: 1,
      idle_timeout: 20,
      connect_timeout: 30,
    });

    console.log("✅ Database connection established");

    // Check what tables exist
    const tables = await client`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name;
    `;

    console.log("📋 Existing tables:");
    tables.forEach(table => {
      console.log(`  - ${table.table_name}`);
    });

    // Check columns for each table
    for (const table of tables) {
      console.log(`\n🔍 Columns in ${table.table_name}:`);
      const columns = await client`
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = ${table.table_name}
        ORDER BY ordinal_position;
      `;
      
      columns.forEach(col => {
        console.log(`  - ${col.column_name}: ${col.data_type} ${col.is_nullable === 'NO' ? 'NOT NULL' : 'NULL'}`);
      });
    }

    await client.end();
    console.log("\n🎉 Table check completed!");
  } catch (error) {
    console.log("❌ Check failed:");
    console.error(error.message);
  }
}

checkTables();
