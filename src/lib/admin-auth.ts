import jwt from "jsonwebtoken";

export const ADMIN_AUTH_COOKIE = "admin-auth";

type AdminTokenPayload = {
  admin?: boolean;
};

export function getAdminJwtSecret(): string | null {
  return process.env.JWT_SECRET || null;
}

export function getAdminPasswordHash(): string | null {
  return process.env.ADMIN_PASSWORD_HASH || null;
}

export function getAdminPassword(): string | null {
  return process.env.ADMIN_PASSWORD || null;
}

export function isValidAdminToken(token: string | undefined): boolean {
  const jwtSecret = getAdminJwtSecret();

  if (!token || !jwtSecret) {
    return false;
  }

  try {
    const payload = jwt.verify(token, jwtSecret) as AdminTokenPayload;
    return payload.admin === true;
  } catch {
    return false;
  }
}
