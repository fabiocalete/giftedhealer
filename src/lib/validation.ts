const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_CHARS_REGEX = /^[+\d\s()-]+$/;
const PHONE_MIN_DIGITS = 7;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!PHONE_CHARS_REGEX.test(trimmed)) return false;
  return trimmed.replace(/\D/g, "").length >= PHONE_MIN_DIGITS;
}
