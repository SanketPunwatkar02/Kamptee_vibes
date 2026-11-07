'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/collaborate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          businessName: 'Contact Inquiry',
          phone: formData.phone || 'N/A',
          email: formData.email,
          collaborationType: formData.subject || 'General Editorial Tip',
          campaignDescription: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Failed to send message.');

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch {
      setError('Unable to send dispatch right now. Please message us directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#101010] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 pb-8 border-b border-white/10 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-pink mb-2">
            <span className="w-2 h-2 rounded-full bg-accent-pink" />
            COMMUNITY DISPATCH & NEWS TIPS
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight text-white leading-tight mb-4">
            Connect With The Editorial Desk
          </h1>
          <p className="text-neutral-400 font-sans text-sm sm:text-base">
            Have a story lead, breaking civic alert, event notification, or question? Send it to our editorial team in Kamptee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-surface border border-white/10 space-y-6">
              <h2 className="text-xl font-display uppercase tracking-wider text-white">
                Direct Channels
              </h2>

              <div className="space-y-4">
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-black flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">WhatsApp Editorial Line</h3>
                    <p className="text-xs text-neutral-300 mt-0.5">Send instant video clips, news tips, and urgent alerts.</p>
                    <span className="text-xs font-mono text-[#25D366] font-bold mt-1 block">Chat Now &rarr;</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-accent-pink/20 text-accent-pink flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Email Desk</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Press releases, official notices, and partnership briefs.</p>
                    <span className="text-xs font-mono text-white/90 mt-1 block">editorial@kampteevibez.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-accent-orange/20 text-accent-orange flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Coverage Base</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Old Kamptee, Cantonment, Kanhan Basin & New Kamptee.</p>
                    <span className="text-xs font-mono text-white/90 mt-1 block">Nagpur District, Maharashtra, 441001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-surface border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-display uppercase tracking-wide text-white mb-2">
                Send a Message or News Tip
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans mb-6">
                All submissions are held in strict journalistic confidence.
              </p>

              {success ? (
                <div className="p-8 rounded-xl bg-accent-pink/10 border border-accent-pink/30 text-center space-y-4 animate-in fade-in">
                  <CheckCircle className="w-12 h-12 text-accent-pink mx-auto" />
                  <h3 className="text-xl font-display uppercase tracking-wide text-white">
                    Dispatch Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans">
                    Thank you. Our editorial team reviews every submission promptly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center gap-2 text-xs text-red-200">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Deshmukh"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                        Subject / Beat
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Festival Photo / Road Alert"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                      Your Message / Story Lead *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what happened, where, and any relevant details or sources..."
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-accent-pink hover:bg-[#d91370] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-glow-pink disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Dispatch...</span>
                      </>
                    ) : (
                      <>
                        <span>Send To Editorial Desk</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
