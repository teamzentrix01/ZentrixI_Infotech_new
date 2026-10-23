import 'dotenv/config';
import fs from 'fs';
import pg from 'pg';
const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
await client.query(fs.readFileSync('db/schema.sql', 'utf8'));
await client.query(fs.readFileSync('db/seed.sql', 'utf8'));
console.log('Database ready: tables created and sample data inserted.');
await client.end();
