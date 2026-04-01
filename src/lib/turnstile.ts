/**
 * Verifies a Cloudflare Turnstile token server-side.
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */
export async function verifyTurnstile(
  token: string,
  ip: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("[Turnstile] TURNSTILE_SECRET_KEY not set");
    return false;
  }


  try {
    const params = new URLSearchParams({
      secret,
      response: token,
      remoteip: ip,
    });

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = (await response.json()) as { success: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[Turnstile] Verification request failed:", err);
    return false;
  }
}
