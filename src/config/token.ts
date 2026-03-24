/** Official Solana mint + links for the pump.fun coin. */
export const TOKEN_MINT =
  "EkMfHYVU2xtinmXrRYHZYkHrcc8mQ97PYdd9FDbSQiDx" as const;

export const TOKEN_SYMBOL = "$EVERYTHING" as const;
export const TOKEN_NAME = "everything to make it" as const;

export const BUY_URL = `https://pump.fun/coin/${TOKEN_MINT}` as const;
export const DEX_URL = `https://dexscreener.com/solana/${TOKEN_MINT}` as const;
export const PADRE_TRADE_URL =
  `https://trade.padre.gg/trade/solana/${TOKEN_MINT}` as const;

/** Featured on the coin page — replace if you have a community account. */
export const X_URL =
  "https://x.com/GoatGems/status/2036456632490607093" as const;

/** @handle for meta tags (from linked X profile). */
export const TWITTER_HANDLE = "@GoatGems" as const;

/**
 * Official coin image on Pump (works for OG / icons; same asset as on pump.fun).
 * Query params are optional; Pump serves a default size.
 */
export const COIN_IMAGE_URL =
  `https://images.pump.fun/coin-image/${TOKEN_MINT}` as const;

export const META_TITLE = `${TOKEN_SYMBOL} · ${TOKEN_NAME}` as const;

export const META_DESCRIPTION =
  `${TOKEN_NAME} (${TOKEN_SYMBOL}) — Solana memecoin on Pump.fun. Mint ${TOKEN_MINT}. Links & chart on this page. Memes only; not financial advice. DYOR.` as const;
