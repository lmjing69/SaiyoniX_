export const ALLOWED_INQUIRY_SERVICES = [
  "Intelligent Infrastructure",
  "Connected Ecosystems",
  "AI-Assisted Workflows",
  "Enterprise Architecture",
  "Not sure — need guidance",
] as const;

export type InquiryInput = {
  service: string;
  name: string;
  email: string;
  phone: string; // Used as Organization
  message: string;
};

type ValidationSuccess = {
  success: true;
  data: InquiryInput;
};

type ValidationFailure = {
  success: false;
  error: string;
};

type ValidationResult = ValidationSuccess | ValidationFailure;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateInquiryInput(value: unknown): ValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { success: false, error: "Invalid request body" };
  }

  const record = value as Record<string, unknown>;

  const data: InquiryInput = {
    service: normalizeString(record.service),
    name: normalizeString(record.name),
    email: normalizeString(record.email).toLowerCase(),
    phone: normalizeString(record.phone),
    message: normalizeString(record.message),
  };

  if (!ALLOWED_INQUIRY_SERVICES.includes(data.service as (typeof ALLOWED_INQUIRY_SERVICES)[number])) {
    return { success: false, error: "Invalid service selection" };
  }

  if (data.name.length < 2 || data.name.length > 100) {
    return { success: false, error: "Name must be between 2 and 100 characters" };
  }

  if (!EMAIL_REGEX.test(data.email) || data.email.length > 254) {
    return { success: false, error: "Invalid email address" };
  }

  if (data.phone.length > 100) {
    return { success: false, error: "Organization name must be under 100 characters" };
  }

  if (data.message.length < 10 || data.message.length > 2000) {
    return { success: false, error: "Message must be between 10 and 2000 characters" };
  }

  return { success: true, data };
}
