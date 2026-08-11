"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { GlassButton } from "@/components/ui/GlassButton";
import { siteConfig, getCopyright } from "@/site.config";
import { isValidEmail, isValidPhone } from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

const emptyFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

type FieldErrors = {
  email?: string;
  phone?: string;
};

export function ContactSection() {
  const [fields, setFields] = useState(emptyFields);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { contact } = siteConfig;

  function validateField(
    name: "email" | "phone",
    value: string,
  ): string | undefined {
    if (name === "email") {
      if (!value.trim()) return contact.validation.emailRequired;
      if (!isValidEmail(value)) return contact.validation.emailInvalid;
    }
    if (name === "phone") {
      if (!value.trim()) return contact.validation.phoneRequired;
      if (!isValidPhone(value)) return contact.validation.phoneInvalid;
    }
    return undefined;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (name === "email" || name === "phone") {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "email" || name === "phone") {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errors: FieldErrors = {
      email: validateField("email", fields.email),
      phone: validateField("phone", fields.phone),
    };
    if (errors.email || errors.phone) {
      setFieldErrors(errors);
      return;
    }

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
        setFieldErrors({});
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
                onBlur={handleBlur}
                placeholder={contact.placeholders.email}
                required
                className={`contact-input${fieldErrors.email ? " error" : ""}`}
              />
              {fieldErrors.email && (
                <p className="text-xs text-red-400">{fieldErrors.email}</p>
              )}
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
                onBlur={handleBlur}
                placeholder={contact.placeholders.phone}
                required
                className={`contact-input${fieldErrors.phone ? " error" : ""}`}
              />
              {fieldErrors.phone && (
                <p className="text-xs text-red-400">{fieldErrors.phone}</p>
              )}
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
