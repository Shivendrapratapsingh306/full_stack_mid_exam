const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

/**
 * In-memory sliding window rate limiter
 * Limits requests per IP address
 */
export function checkRateLimit(ip: string, limit = 5, windowMs = 60 * 1000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count += 1;
  return true;
}
