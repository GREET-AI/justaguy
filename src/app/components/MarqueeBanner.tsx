"use client";

import { useMemo } from 'react';

const allQuotes = [
  "I will never rug you. Trading fees pay the animators.",
  "100% burned LP. Contract renounced. Ownership gone.",
  "No team tokens. No insiders. 100% fair launch.",
  "Every listing is paid by the coin – voted by holders.",
  "This is not financial advice. This is a TV series.",
  "Contract verified. LP burned. Maximum transparency.",
  "Community-driven roadmap. Your vote decides.",
  "Not backed by VCs. Backed by art and laughs.",
  "BNB Chain's first cinematic memecoin – Episode 1 live.",
  "Zero presale. Zero bullshit. 100% community.",
  "We don't rug. We direct.",
  "The coin funds the show. The show funds the coin.",
  "No cabal. No insiders. No dirty games.",
  "Paid for by the coin – decided by the holders.",
  "Reality. Real entertainment. Real community.",
  "Solao's Promise: 100% made by me. Protected by me.",
  "South Park meets The Big Short – on BNB Chain.",
  "Trading fees = animation budget. Every trade = weekly episodes.",
  "LP burned. Contract renounced. The rug is dead.",
  "Welcome to the first memecoin that actually delivers.",
  "No presale. No team tokens. Just pure chaos and art.",
  "Every new listing is earned – never bought.",
  "100% community owned from day one.",
  "This coin has a plot twist every week.",
  "The only memecoin with a release schedule.",
  "Season 1 just dropped. Season 2 funded by fees.",
  "Zero unlocks. Zero bullshit. Just episodes.",
  "Your bags fund the next scene.",
  "First memecoin with actual utility: entertainment."
];

export function MarqueeBanner() {
  // Statische Arrays für konsistente Server/Client Rendering
  const bar1Quotes = useMemo(() => [
    "$EVERYTHING · everything to make it · Solana · Pump.fun",
    "Fair launch energy — verify the mint, ignore the clones",
    "Post the ticker. Steal the timeline. DYOR always.",
    "Bonding curve szn — chart on Dexscreener when it’s live",
    "Padre / Pump / Phantom — pick your weapon",
    "Conviction posts > secret cabal screenshots",
    "Memes are marketing. Liquidity is the scoreboard.",
    "One CA. One story. Everything to make it.",
    "CT runs on attention — spend yours wisely",
    "Not financial advice — entertainment + internet money",
    "Show up daily — that’s the real unlock",
    "Solana speed. Meme culture. No excuses.",
  ], []);

  const bar2Quotes = useMemo(() => [
    "everything to make it — the name is the whole sentence",
    "$EVERYTHING on Solana — link the pump, not a promise",
    "Copy the CA from this site — scammers love similar tickers",
    "Trade the chart — build the lore — touch grass sometimes",
    "Pump.fun launch — community writes the roadmap in real time",
    "Holders post. Skeptics quote-tweet. Charts decide.",
    "Make memes. Make friends. Maybe make it.",
    "Liquidity moves fast — wallets move faster",
    "If it’s not fun, you’re doing memecoins wrong",
    "Everything to make it — stack reps, not excuses",
  ], []);
  return (
    <div className="w-full h-24 md:h-28 relative overflow-visible bg-transparent pointer-events-none -mt-10 md:-mt-12 -mb-10 md:-mb-12">
      {/* Bar 1 - Waagerecht, läuft nach rechts */}
      <div className="absolute top-0 left-0 w-full flex items-center z-20">
        <div className="w-[500%] h-12 md:h-14 bg-black/85 backdrop-blur-md border-t-2 border-b-2 border-brand-lime shadow-2xl shadow-[0_0_24px_rgba(189,253,42,0.45)] overflow-hidden">
          <div className="absolute inset-0 flex items-center whitespace-nowrap" style={{ animation: 'marquee 48s linear infinite' }}>
            {bar1Quotes.map((quote, index) => (
              <span key={index} className="text-sm md:text-base font-bangers tracking-widest uppercase text-brand-lime mx-6" style={{ filter: 'drop-shadow(0 0 14px rgba(189, 253, 42, 0.85)) drop-shadow(0 0 22px rgba(232, 184, 70, 0.5))' }}>
                {quote}
              </span>
            ))}
            {bar1Quotes.map((quote, index) => (
              <span key={`dup-${index}`} className="text-sm md:text-base font-bangers tracking-widest uppercase text-brand-lime mx-6" style={{ filter: 'drop-shadow(0 0 14px rgba(189, 253, 42, 0.85)) drop-shadow(0 0 22px rgba(232, 184, 70, 0.5))' }}>
                {quote}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bar 2 - Waagerecht, läuft nach links (gegenläufig) */}
      <div className="absolute bottom-0 left-0 w-full flex items-center z-20">
        <div className="w-[500%] h-12 md:h-14 bg-black/85 backdrop-blur-md border-t-2 border-b-2 border-brand-lime shadow-2xl shadow-[0_0_24px_rgba(189,253,42,0.45)] overflow-hidden">
          <div className="absolute inset-0 flex items-center whitespace-nowrap" style={{ animation: 'marquee-reverse 42s linear infinite' }}>
            {bar2Quotes.map((quote, index) => (
              <span key={index} className="text-sm md:text-base font-bangers tracking-widest uppercase text-brand-lime mx-6" style={{ filter: 'drop-shadow(0 0 14px rgba(189, 253, 42, 0.85)) drop-shadow(0 0 22px rgba(232, 184, 70, 0.5))' }}>
                {quote}
              </span>
            ))}
            {bar2Quotes.map((quote, index) => (
              <span key={`dup-${index}`} className="text-sm md:text-base font-bangers tracking-widest uppercase text-brand-lime mx-6" style={{ filter: 'drop-shadow(0 0 14px rgba(189, 253, 42, 0.85)) drop-shadow(0 0 22px rgba(232, 184, 70, 0.5))' }}>
                {quote}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
