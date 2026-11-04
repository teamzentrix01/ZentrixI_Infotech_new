'use client';
import { useState } from 'react';

export default function BlogEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const servicesList = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Software Development',
    'Digital Marketing',
    'Branding & Creative',
    'Custom SaaS / MVP'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'blog-sidebar-enquiry'
        })
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-cardBg border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_12px_40px_rgb(0,0,0,0.12)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] font-headingfont transition-all">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="font-headingfont font-bold text-2xl sm:text-3xl lg:text-[28px] text-textHeading tracking-tight leading-snug">
          Let&apos;s Grow Your Business Together
        </h3>
        <p className="font-bodyfont text-xs sm:text-sm text-textDescription mt-2">
          Have an idea or need expert help? Tell us below.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-300 text-center font-bodyfont text-sm sm:text-base">
          <p className="font-bold text-lg mb-1">Thank you!</p>
          <p>Your enquiry has been received. Our team will contact you shortly.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-xs sm:text-sm underline text-navTextHover hover:opacity-80 font-semibold"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 font-bodyfont">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="blog-name" className="text-xs sm:text-sm font-semibold text-textHeading font-headingfont">
                Name
              </label>
              <input
                id="blog-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl border border-border bg-background/70 dark:bg-black/30 text-textHeading placeholder:text-textDescription/50 focus:outline-none focus:ring-2 focus:ring-[#8356FB] text-sm sm:text-base transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="blog-email" className="text-xs sm:text-sm font-semibold text-textHeading font-headingfont">
                Email
              </label>
              <input
                id="blog-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl border border-border bg-background/70 dark:bg-black/30 text-textHeading placeholder:text-textDescription/50 focus:outline-none focus:ring-2 focus:ring-[#8356FB] text-sm sm:text-base transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="blog-phone" className="text-xs sm:text-sm font-semibold text-textHeading font-headingfont">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="blog-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl border border-border bg-background/70 dark:bg-black/30 text-textHeading placeholder:text-textDescription/50 focus:outline-none focus:ring-2 focus:ring-[#8356FB] text-sm sm:text-base transition-all"
              />
            </div>

            {/* Services */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="blog-service" className="text-xs sm:text-sm font-semibold text-textHeading font-headingfont">
                Services
              </label>
              <div className="relative">
                <select
                  id="blog-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl border border-border bg-background/70 dark:bg-black/30 text-textHeading focus:outline-none focus:ring-2 focus:ring-[#8356FB] text-sm sm:text-base transition-all appearance-none cursor-pointer pr-10"
                >
                  <option value="" className="bg-cardBg text-textDescription">Select a Service</option>
                  {servicesList.map(s => (
                    <option key={s} value={s} className="bg-cardBg text-textHeading">{s}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-textDescription">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="blog-message" className="text-xs sm:text-sm font-semibold text-textHeading font-headingfont">
              Message
            </label>
            <textarea
              id="blog-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full py-3 sm:py-3.5 px-4 rounded-xl border border-border bg-background/70 dark:bg-black/30 text-textHeading placeholder:text-textDescription/50 focus:outline-none focus:ring-2 focus:ring-[#8356FB] text-sm sm:text-base transition-all resize-none leading-relaxed"
            />
          </div>

          {status === 'error' && (
            <p className="text-xs sm:text-sm text-red-500 font-medium">Something went wrong. Please try again.</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full mt-2 py-4 px-6 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white font-headingfont font-bold text-base sm:text-lg transition-all duration-200 shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.5)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 group/btn"
          >
            <span>{status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}</span>
          </button>
        </form>
      )}
    </div>
  );
}

