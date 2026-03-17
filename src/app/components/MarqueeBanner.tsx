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
    "Binance Bandits. The Golden Era of BNB Chain. The chart only goes up 🟨",
    "100% golden candles only. No red allowed. Jeets get rekt.",
    "LP burned forever. Contract renounced. One Bandit to rule them all.",
    "Fair launch on four.meme. Everyone becomes a Bandit.",
    "The Golden Era on BNB Chain. Chart only goes up.",
    "No red candles. Only golden. Only Bandits. 🟨🟨🟨",
    "Jeets not welcome. Red candles not allowed. Only golden.",
    "The Golden Era in a world full of golden candles.",
    "The only roadmap that only goes up. Golden candles forever.",
    "Binance Bandits takes over BNB Chain. Moon + Jeep giveaway coming.",
    "More golden candles than ever seen. The chart only goes up.",
    "Binance Bandits. Built different. Chart only goes up."
  ], []);

  const bar2Quotes = useMemo(() => [
    "The chart only goes up 🟨🟨🟨 No red candles allowed.",
    "Binance Bandits in a world full of golden candles.",
    "100% golden candles. Jeets get rekt. One Bandit to rule them all.",
    "The Golden Era on BNB Chain. Welcome to the Bandits.",
    "LP burned. Contract renounced. Chart only goes up.",
    "Everyone becomes a Bandit. The community takes over BNB Chain.",
    "No red candles. Only golden. Only Bandits. Forever.",
    "The only roadmap that only goes up. Golden candles only.",
    "Jeets not welcome. Red candles not allowed. Just golden.",
    "One Bandit to rule them all. Chart only goes up."
  ], []);
  return (
    <div className="w-full h-24 md:h-28 relative overflow-visible bg-transparent pointer-events-none -mt-10 md:-mt-12 -mb-10 md:-mb-12">
      {/* Bar 1 - Waagerecht, läuft nach rechts */}
      <div className="absolute top-0 left-0 w-full flex items-center z-20">
        <div className="w-[500%] h-12 md:h-14 bg-black/85 backdrop-blur-md border-t-2 border-b-2 border-[#fcc32a] shadow-2xl shadow-[#fcc32a]/60 overflow-hidden">
          <div className="absolute inset-0 flex items-center whitespace-nowrap" style={{ animation: 'marquee 48s linear infinite' }}>
            {bar1Quotes.map((quote, index) => (
              <span key={index} className="text-sm md:text-base font-bangers tracking-widest uppercase text-[#fcc32a] mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(252, 195, 42, 0.9)) drop-shadow(0 0 20px #fcc32a)' }}>
                {quote}
              </span>
            ))}
            {bar1Quotes.map((quote, index) => (
              <span key={`dup-${index}`} className="text-sm md:text-base font-bangers tracking-widest uppercase text-[#fcc32a] mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(252, 195, 42, 0.9)) drop-shadow(0 0 20px #fcc32a)' }}>
                {quote}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bar 2 - Waagerecht, läuft nach links (gegenläufig) */}
      <div className="absolute bottom-0 left-0 w-full flex items-center z-20">
        <div className="w-[500%] h-12 md:h-14 bg-black/85 backdrop-blur-md border-t-2 border-b-2 border-[#fcc32a] shadow-2xl shadow-[#fcc32a]/60 overflow-hidden">
          <div className="absolute inset-0 flex items-center whitespace-nowrap" style={{ animation: 'marquee-reverse 42s linear infinite' }}>
            {bar2Quotes.map((quote, index) => (
              <span key={index} className="text-sm md:text-base font-bangers tracking-widest uppercase text-[#fcc32a] mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(252, 195, 42, 0.9)) drop-shadow(0 0 20px #fcc32a)' }}>
                {quote}
              </span>
            ))}
            {bar2Quotes.map((quote, index) => (
              <span key={`dup-${index}`} className="text-sm md:text-base font-bangers tracking-widest uppercase text-[#fcc32a] mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(252, 195, 42, 0.9)) drop-shadow(0 0 20px #fcc32a)' }}>
                {quote}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
