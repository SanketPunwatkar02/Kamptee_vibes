'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { CollaborationFormData } from '@/types';
import { SITE_CONFIG } from '@/lib/seo';

const COLLABORATION_TYPES = [
  'Paid Promotion / Sponsored Reel',
  'Local Business Spotlight',
  'Event Coverage & Promotion',
  'Product / Food Review',
  'Brand Ambassadorship',
  'Public Awareness & Alert',
];

export const CollaborateSection: React.FC = () => {
  const [formData, setFormData] = useState<CollaborationFormData>({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    collaborationType: COLLABORATION_TYPES[0],
    campaignDescription: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9+ -]{7,15}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setError('Please enter a valid phone number.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/collaborate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again or reach out on WhatsApp.');
      }

      setSuccess(true);
      setFormData({
        name: '',
        businessName: '',
        phone: '',
        email: '',
        collaborationType: COLLABORATION_TYPES[0],
        campaignDescription: '',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to submit inquiry. Please connect with us directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp quick trigger with prefilled message
  const whatsappUrl = `${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    'Hello Kamptee Vibez! I would like to inquire about collaborating with my business/brand.'
  )}`;

  return (
    <section className="py-20 md:py-28 bg-[#141414] border-t border-white/10 relative overflow-hidden" id="collaborate">
      {/* Background panoramic bridge/skyline glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image
          src="/images/kamptee_city_skyline.jpg"
          alt="Kamptee skyline at dusk"
          fill
          className="object-cover object-center filter blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-[#141414]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Headline matching reference */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-pink/15 border border-accent-pink/30 text-accent-pink text-[11px] font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            PARTNERSHIPS & MEDIA PROMOTIONS
          </div>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-tight mb-4">
            PUT YOUR BRAND
            <br />
            IN THE SPOTLIGHT.
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 font-sans font-light">
            Reach the community. Tell your story. Grow with Kamptee Vibez.
          </p>
        </div>

        {/* 2-Column Layout: Collaboration Highlights & Real Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Offerings & Instant WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl p-6 sm:p-8 bg-surface border border-white/10 space-y-6">
              <h3 className="text-xl font-display uppercase tracking-wider text-white">
                How We Collaborate
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent-pink/15 text-accent-pink flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Paid Promotions & Reel Features</h4>
                    <p className="text-xs text-neutral-400 mt-1">High-impact vertical video production and Instagram reel placement reaching active local audiences.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent-orange/15 text-accent-orange flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Local Business Spotlights</h4>
                    <p className="text-xs text-neutral-400 mt-1">In-depth feature stories and culinary trials highlighting your shop, restaurant, or service.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent-gold/15 text-accent-gold flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Event Promotions & Coverage</h4>
                    <p className="text-xs text-neutral-400 mt-1">Real-time on-ground coverage for concerts, festivals, sports meets, and grand openings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                    04
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Community Brand Collaborations</h4>
                    <p className="text-xs text-neutral-400 mt-1">Custom multi-channel campaigns designed to integrate your brand organically with Kamptee residents.</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-primary-muted mb-3">
                  Prefer Instant Chat?
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Collaboration Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-surface border border-white/10 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-display uppercase tracking-wide text-white">
                  Send Collaboration Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                  Tell us about your brand and what kind of campaign you have in mind. We reply within 24 hours.
                </p>
              </div>

              {success ? (
                <div className="p-6 rounded-xl bg-accent-pink/10 border border-accent-pink/30 text-center space-y-4 animate-in fade-in">
                  <CheckCircle className="w-12 h-12 text-accent-pink mx-auto" />
                  <h4 className="text-xl font-display uppercase tracking-wide text-white">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-neutral-300 font-sans">
                    Thank you for reaching out. The Kamptee Vibez brand team will review your campaign details and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    Submit Another Inquiry
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
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Nagpur Cafe Kamptee"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
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
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                      Type of Collaboration
                    </label>
                    <select
                      value={formData.collaborationType}
                      onChange={(e) => setFormData({ ...formData, collaborationType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-accent-pink transition-colors"
                    >
                      {COLLABORATION_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-surface-elevated text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-muted mb-1.5">
                      Campaign Description & Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.campaignDescription}
                      onChange={(e) => setFormData({ ...formData, campaignDescription: e.target.value })}
                      placeholder="Briefly describe what you would like to promote, target timelines, and any specific ideas..."
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-accent-pink hover:bg-[#d91370] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-glow-pink disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Collaboration Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
