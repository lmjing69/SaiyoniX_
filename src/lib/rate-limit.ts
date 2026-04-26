import { prisma } from "@/lib/prisma";

const LOCKOUTS = [
    60 * 1000,
    5 * 60 * 1000,
    15 * 60 * 1000,
];

export function getClientIP(): string {
    return "unknown";
}

export async function checkRateLimit(
    key: string,
    maxAttempts: number,
    _windowMs: number = 60 * 1000
): Promise<{ allowed: boolean; remaining: number; locked: boolean; lockoutMs: number; strikeLevel: number }> {
    const now = new Date();
    const record = await prisma.rateLimitLog.findUnique({ where: { key } });

    if (!record || record.lockedUntil === null || record.lockedUntil < now) {
        const remaining = maxAttempts - (record?.strike ?? 0) - 1;
        return {
            allowed: true,
            remaining: Math.max(remaining, 0),
            locked: false,
            lockoutMs: 0,
            strikeLevel: record?.strike ?? 0
        };
    }

    const lockoutMs = record.lockedUntil.getTime() - now.getTime();
    return {
        allowed: false,
        remaining: 0,
        locked: true,
        lockoutMs,
        strikeLevel: record.strike
    };
}

export async function recordFailedAttempt(key: string): Promise<void> {
    const now = new Date();
    const record = await prisma.rateLimitLog.findUnique({ where: { key } });

    const strikeCount = (record?.strike ?? 0) + 1;
    const lockoutMs = LOCKOUTS[Math.min(strikeCount - 1, LOCKOUTS.length - 1)];
    const lockedUntil = new Date(now.getTime() + lockoutMs);

    await prisma.rateLimitLog.upsert({
        where: { key },
        create: { key, strike: strikeCount, lockedUntil },
        update: { strike: strikeCount, lockedUntil, updatedAt: now },
    });
}

export async function clearFailedAttempts(key: string): Promise<void> {
    await prisma.rateLimitLog.upsert({
        where: { key },
        create: { key, strike: 0, lockedUntil: null },
        update: { strike: 0, lockedUntil: null },
    });
}