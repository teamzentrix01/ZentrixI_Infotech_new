import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(req) {
  const b = await req.json().catch(() => ({}));
  const name = String(b.name || '').trim().slice(0, 120);
  const email = String(b.email || '').trim().slice(0, 200);
  const message = String(b.message || '').trim().slice(0, 4000);
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Enter your name, a valid email and a message.' }, { status: 400 });
  }
  try {
    await pool.query(
      'INSERT INTO leads (name,email,phone,service,message,source) VALUES ($1,$2,$3,$4,$5,$6)',
      [name, email, String(b.phone || '').slice(0, 40), String(b.service || '').slice(0, 60), message, String(b.source || '').slice(0, 60)]
    );
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Could not save your message. Try again shortly.' }, { status: 500 });
  }
}
