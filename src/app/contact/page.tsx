"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import {
  contactFormSchema,
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
} from "@/validators/contact.schema";
import {
  FlameIcon,
  MailIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  ArrowUpRightIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "Web Development";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "50k–1L",
    service: initialService,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.get("service")) {
      const match = SERVICE_OPTIONS.find(
        (s) => s.toLowerCase() === searchParams.get("service")?.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitError(null);

    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setSubmitError(json.error?.message || "Failed to submit enquiry.");
      } else {
        setSubmitSuccess(json.message || "Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "50k–1L",
          service: "Web Development",
          message: "",
        });
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {submitSuccess && (
        <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 mb-8 flex items-start gap-4">
          <ShieldCheckIcon className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base text-white">Enquiry Received!</h4>
            <p className="text-sm mt-1">{submitSuccess}</p>
          </div>
        </div>
      )}

      {submitError && (
        <div className="p-4 rounded-2xl bg-red-950/80 border border-red-500/40 text-red-200 text-sm mb-8">
          {submitError}
        </div>
      )}

      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
            Your Full Name <span className="text-[#F2660A]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Mehta"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#0C0A09] border text-[#F5F5F4] placeholder-[#A8A29E]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#F2660A] transition-all",
              errors.name ? "border-red-500" : "border-white/10"
            )}
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
            Email Address <span className="text-[#F2660A]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. rahul@company.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#0C0A09] border text-[#F5F5F4] placeholder-[#A8A29E]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#F2660A] transition-all",
              errors.email ? "border-red-500" : "border-white/10"
            )}
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
          Company / Brand Name <span className="text-xs text-[#A8A29E] font-normal">(Optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. Cafe Delight / Aura Haven"
          className="w-full px-4 py-3 rounded-xl bg-[#0C0A09] border border-white/10 text-[#F5F5F4] placeholder-[#A8A29E]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#F2660A] transition-all"
        />
      </div>

      {/* Budget & Service Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
            Budget Range <span className="text-[#F2660A]">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0C0A09] border border-white/10 text-[#F5F5F4] text-sm focus:outline-none focus:ring-2 focus:ring-[#F2660A] transition-all cursor-pointer"
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#1A1614] text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
            Service Needed <span className="text-[#F2660A]">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0C0A09] border border-white/10 text-[#F5F5F4] text-sm focus:outline-none focus:ring-2 focus:ring-[#F2660A] transition-all cursor-pointer"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#1A1614] text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message Area */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
          Project Details & Vision <span className="text-[#F2660A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your brand goals, target audience, key features needed, or desired launch date..."
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-[#0C0A09] border text-[#F5F5F4] placeholder-[#A8A29E]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#F2660A] transition-all resize-y",
            errors.message ? "border-red-500" : "border-white/10"
          )}
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className="w-full justify-center shadow-ember-lg text-base py-4"
        rightIcon={<ArrowUpRightIcon className="w-5 h-5" />}
      >
        {isSubmitting ? "SENDING ENQUIRY..." : "SEND PROJECT ENQUIRY"}
      </Button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 flex flex-col gap-16 sm:gap-24">
      {/* 1. Header */}
      <section className="relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#7C2D12]/25 blur-[140px] pointer-events-none" />

        <Container>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <Badge variant="live" className="mb-6 shadow-ember-glow">
                START A CONVERSATION
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-[#F5F5F4] leading-tight mb-6">
                Let’s Build Something <br />
                <span className="text-gradient-ember">Extraordinary Together.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A8A29E] max-w-2xl leading-relaxed">
                Tell us about your project vision, timeline, and goals. We respond to all serious inquiries within 24 hours.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Main Contact Grid */}
      <section>
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <Card variant="glass" className="border-[#F2660A]/30 shadow-ember-glow p-8 sm:p-12">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] font-heading mb-6">
                    Project Enquiry Form
                  </h2>
                  <Suspense fallback={<div className="p-8 text-[#A8A29E]">Loading form...</div>}>
                    <ContactFormInner />
                  </Suspense>
                </Card>
              </Reveal>
            </div>

            {/* Right Column: Studio Info & Location */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal direction="up" delay={0.1}>
                <Card variant="glass" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F2660A]/20 flex items-center justify-center text-[#F2660A]">
                      <FlameIcon className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#F5F5F4] font-heading">Studio Direct</h3>
                      <p className="text-xs text-[#A8A29E]">No middle managers — direct architect communication</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-[#A8A29E]">
                    <div className="flex items-center gap-3">
                      <MailIcon className="w-5 h-5 text-[#F2660A]" />
                      <div>
                        <span className="block text-xs uppercase text-[#F5F5F4] font-semibold">Email Us</span>
                        <a href="mailto:hello@angaarlabs.dev" className="hover:text-[#F2660A] transition-colors">
                          hello@angaarlabs.dev
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        ●
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-[#F5F5F4] font-semibold">Availability</span>
                        <span>Accepting Q4 2026 Flagship Projects</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>

              {/* Social Links Panel */}
              <Reveal direction="up" delay={0.15}>
                <Card variant="glass">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F5F4] mb-4">
                    Connect With Our Engineers
                  </h4>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-[#1A1614] border border-white/10 text-[#A8A29E] hover:text-[#F2660A] hover:border-[#F2660A]/40 transition-colors flex items-center gap-2 text-xs font-semibold"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-[#1A1614] border border-white/10 text-[#A8A29E] hover:text-[#F2660A] hover:border-[#F2660A]/40 transition-colors flex items-center gap-2 text-xs font-semibold"
                    >
                      <TwitterIcon className="w-4 h-4" />
                      <span>Twitter</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-[#1A1614] border border-white/10 text-[#A8A29E] hover:text-[#F2660A] hover:border-[#F2660A]/40 transition-colors flex items-center gap-2 text-xs font-semibold"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </Card>
              </Reveal>

              {/* Map Placeholder Panel */}
              <Reveal direction="up" delay={0.2}>
                <div className="rounded-3xl p-6 bg-[#1A1614] border border-white/10 relative overflow-hidden h-48 flex flex-col justify-end">
                  <div className="absolute inset-0 bg-noise opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-transparent to-transparent" />
                  <div className="relative z-10">
                    <span className="text-xs font-mono uppercase text-[#F2660A] font-bold block mb-1">
                      GLOBAL STUDIO HEADQUARTERS
                    </span>
                    <h4 className="text-base font-bold text-[#F5F5F4] font-heading">
                      New Delhi • Remote Global
                    </h4>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
