"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { GlassButton } from "@/components/ui/GlassButton";
import { siteConfig, getCopyright } from "@/site.config";

type Status = "idle" | "loading" | "success" | "error";

const emptyFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactSection() {
  const [fields, setFields] = useState(emptyFields);
  const [status, setStatus] = useState<Status>("idle");
  const { contact } = siteConfig;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setStatus("success");
        setFields(emptyFields);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="bg-forest text-cream py-24 md:py-32">
      <div className="container mx-auto space-y-12 px-6">
        <div className="space-y-6 text-center">
          {/* Editorial HR */}
          <hr className="editorial-hr opacity-20" />

          {/* Section label */}
          <span className="section-label text-cream/60" data-reveal>
            {contact.sectionLabel}
          </span>

          {/* Headline */}
          <h2
            className="font-headline text-cream text-4xl font-medium tracking-[-0.03em] md:text-6xl"
            data-reveal
          >
            {contact.headline}
          </h2>

          {/* Tagline */}
          <p
            className="text-cream/70 mx-auto max-w-2xl font-serif text-xl"
            data-reveal
          >
            {contact.tagline}
          </p>
        </div>

        {/* Contact form */}
        <form
          className="mx-auto max-w-2xl space-y-6"
          data-reveal
          onSubmit={handleSubmit}
        >
          {/* Row 1: First name / Last name */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-cream/60 text-xs font-medium tracking-widest uppercase">
                {contact.labels.firstName}
              </label>
              <input
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={handleChange}
                placeholder={contact.placeholders.firstName}
                className="contact-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-cream/60 text-xs font-medium tracking-widest uppercase">
                {contact.labels.lastName}
              </label>
              <input
                type="text"
                name="lastName"
                value={fields.lastName}
                onChange={handleChange}
                placeholder={contact.placeholders.lastName}
                className="contact-input"
              />
            </div>
          </div>

          {/* Row 2: Email / Phone */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-cream/60 text-xs font-medium tracking-widest uppercase">
                {contact.labels.email}
              </label>
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                placeholder={contact.placeholders.email}
                required
                className="contact-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-cream/60 text-xs font-medium tracking-widest uppercase">
                {contact.labels.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
                placeholder={contact.placeholders.phone}
                className="contact-input"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-cream/60 text-xs font-medium tracking-widest uppercase">
              {contact.labels.message}
            </label>
            <textarea
              name="message"
              value={fields.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder={contact.placeholders.message}
              className="contact-input resize-none"
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-cream/80 text-center font-serif text-base">
              {contact.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-center font-serif text-base text-red-400">
              {contact.errorMessage}
            </p>
          )}

          {/* Submit */}
          <div className="pt-2">
            <GlassButton
              size="lg"
              className="btn-ortiz-light w-full justify-center disabled:opacity-50"
              disabled={status === "loading"}
            >
              {status === "loading" ? contact.loadingText : contact.submitText}
            </GlassButton>
          </div>
        </form>

        {/* Copyright */}
        <div className="border-cream/10 text-cream/40 border-t pt-8 text-center text-sm">
          <p>{getCopyright()}</p>
        </div>
      </div>
    </Section>
  );
}
