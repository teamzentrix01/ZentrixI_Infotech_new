'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { site } from '@/lib/site';

function Form() {
  const params = useSearchParams();
  const [state, setState] = useState({ status: 'idle', error: '' });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ status: 'sending', error: '' });
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) setState({ status: 'sent', error: '' });
    else setState({ status: 'idle', error: (await res.json()).error || 'Something went wrong. Try again.' });
  }

  if (state.status === 'sent') {
    return <p className="mt-8 rounded-xl bg-brand2 p-5">Message sent. We will reply by email soon.</p>;
  }
  const input = 'mt-1 w-full rounded-xl border border-ink/15 bg-white px-4 py-3';
  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <label className="block text-sm">Name<input name="name" required className={input} /></label>
      <label className="block text-sm">Email<input name="email" type="email" required className={input} /></label>
      <label className="block text-sm">Phone (optional)<input name="phone" className={input} /></label>
      <label className="block text-sm">Service
        <select name="service" defaultValue={params.get('service') || ''} className={input}>
          <option value="">Not sure yet</option>
          {site.services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
        </select>
      </label>
      <label className="block text-sm">Message<textarea name="message" rows={5} required className={input} /></label>
      <input type="hidden" name="source" value={params.get('source') || 'contact-page'} />
      {state.error && <p role="alert" className="text-sm text-red-600">{state.error}</p>}
      <button className="btn btn-primary" disabled={state.status === 'sending'}>
        {state.status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return <Suspense><Form /></Suspense>;
}
