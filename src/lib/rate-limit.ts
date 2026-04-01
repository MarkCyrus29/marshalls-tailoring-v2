// Rate limiter using Upstash Redis

export async function checkRateLimit(
  identifier: string
): Promise<{ allowed: boolean }> {
  const LIMIT = 5;
  const WINDOW_SECONDS = 600; // 10 minutes

  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    console.error("[RateLimit] Upstash Redis env vars missing");
    return { allowed: false };
  }

  try {
    const { Ratelimit } = await import("@upstash/ratelimit");
    const { Redis } = await import("@upstash/redis");

    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(LIMIT, `${WINDOW_SECONDS} s`),
      analytics: false,
      prefix: "mt_contact_rl",
    });

    const key = `contact_${identifier}`;
    const { success } = await ratelimit.limit(key);
    return { allowed: success };
  } catch (err) {
    console.error("[RateLimit] Upstash error:", err);
    return { allowed: false };
  }
}
