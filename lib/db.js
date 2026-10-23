import pg from 'pg';
const g = globalThis;
export const pool = g.__pgPool || (g.__pgPool = new pg.Pool({ connectionString: process.env.DATABASE_URL }));
export async function query(text, params) {
  try { return (await pool.query(text, params)).rows; }
  catch (e) { console.error('DB error:', e.message); return []; }
}
