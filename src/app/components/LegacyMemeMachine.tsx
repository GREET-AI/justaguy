"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Dice5, Copy, ArrowRight, Sparkles, Twitter } from "lucide-react";
import { motion } from "framer-motion";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function LegacyMemeMachine({
  tokenSymbol,
  buyUrl,
}: {
  tokenSymbol: string;
  buyUrl: string;
}) {
  const [conviction, setConviction] = useState(72);
  const [familyName, setFamilyName] = useState("");
  const [lastLine, setLastLine] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const vibe = useMemo(() => {
    if (conviction >= 85) return "Dynasty Mode";
    if (conviction >= 65) return "Legacy Mode";
    if (conviction >= 45) return "Builder Mode";
    return "Tourist Mode";
  }, [conviction]);

  const templates = useMemo(
    () => [
      () =>
        `One cycle can change a bloodline. I'm positioned with ${tokenSymbol}.`,
      () =>
        `Your parents worked 40 years for a pension. I'm doing it in one cycle. ${tokenSymbol}.`,
      () =>
        `Not chasing dopamine. Chasing legacy. ${tokenSymbol}.`,
      () =>
        `They want quick flips. I want assets that get passed down. ${tokenSymbol}.`,
      () =>
        `If you treat this cycle like a joke, you'll retire like a joke. ${tokenSymbol}.`,
      () =>
        `Conviction: ${conviction}%. Time horizon: generations. Ticker: ${tokenSymbol}.`,
      () =>
        `${tokenSymbol}: the meme that reminds you to think in decades.`,
      () =>
        `This isn't "get rich quick". It's "build it so your kids don't start at zero". ${tokenSymbol}.`,
      () =>
        `Cycle wealth becomes generational wealth when you don't fumble the bag. ${tokenSymbol}.`,
      () =>
        `I don't want a pump. I want a family upgrade. ${tokenSymbol}.`,
    ],
    [tokenSymbol, conviction]
  );

  const spicyAddOns = useMemo(
    () => [
      "DYOR.",
      "Not financial advice.",
      "Conviction > noise.",
      "One cycle.",
      "Legacy mindset.",
      "Screenshots are forever.",
      "Build. Hold. Pass it down.",
    ],
    []
  );

  const signature = useMemo(() => {
    const name = familyName.trim();
    if (!name) return "";
    return ` — The ${name} family office (unlicensed)`;
  }, [familyName]);

  function roll() {
    const base = pick(templates)();
    const addonChance = conviction >= 60 ? 0.85 : 0.55;
    const addon = Math.random() < addonChance ? ` ${pick(spicyAddOns)}` : "";
    const line = `${base}${addon}${signature}`;
    setLastLine(line);
    setCopied(false);
  }

  async function copy() {
    if (!lastLine) return;
    try {
      await navigator.clipboard.writeText(lastLine);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  const tweetIntentUrl = useMemo(() => {
    if (!lastLine) return "";
    const text = `${lastLine} ${buyUrl}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  }, [lastLine, buyUrl]);

  return (
    <div className="grid gap-8 lg:grid-cols-2 items-start">
      <div className="rounded-3xl border-2 border-[#fcc32a]/30 bg-[#0f172a]/70 backdrop-blur-xl p-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              Vibe
            </p>
            <p className="text-2xl font-bangers text-[#fcc32a]">{vibe}</p>
          </div>
          <Link href={buyUrl} target="_blank" rel="noopener noreferrer">
            <motion.button
              className="px-5 py-3 bg-[#fcc32a] hover:bg-[#fdd85c] text-black font-bold rounded-full transition-all shadow-lg shadow-[#fcc32a]/50 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-white/80 mb-2">
              Conviction slider: <span className="text-[#fdd85c]">{conviction}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={conviction}
              onChange={(e) => setConviction(clamp(Number(e.target.value), 0, 100))}
              className="w-full accent-[#fcc32a]"
            />
            <p className="text-xs text-white/55 mt-2">
              Under 45% you’re officially a “Tourist”. Over 85% you become a “Dynasty” threat.
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-white/80 mb-2">
              Family name (optional)
            </label>
            <input
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              placeholder="e.g. Nakamoto"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[#fcc32a]/60"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              onClick={roll}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Dice5 className="h-5 w-5 text-[#fcc32a]" />
              Roll
            </motion.button>
            <motion.button
              onClick={copy}
              disabled={!lastLine}
              className="px-6 py-3 rounded-full bg-[#fcc32a]/15 hover:bg-[#fcc32a]/20 border border-[#fcc32a]/30 text-[#fdd85c] font-bold flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              whileHover={{ scale: lastLine ? 1.03 : 1 }}
              whileTap={{ scale: lastLine ? 0.97 : 1 }}
            >
              <Copy className="h-5 w-5" />
              {copied ? "Copied" : "Copy"}
            </motion.button>
            <Link
              href={tweetIntentUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!lastLine}
              tabIndex={lastLine ? 0 : -1}
              className={lastLine ? "" : "pointer-events-none opacity-40"}
            >
              <motion.button
                type="button"
                disabled={!lastLine}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ scale: lastLine ? 1.03 : 1 }}
                whileTap={{ scale: lastLine ? 0.97 : 1 }}
              >
                <Twitter className="h-5 w-5 text-[#fcc32a]" />
                Post to X
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border-2 border-[#fcc32a]/30 bg-gradient-to-br from-black/40 to-[#0f172a]/80 backdrop-blur-xl p-8 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#fcc32a]/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#9945FF]/20 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-2 text-white/70 mb-4">
            <Sparkles className="h-4 w-4 text-[#fdd85c]" />
            <span className="text-xs uppercase tracking-[0.4em]">Share Card</span>
          </div>

          <motion.div
            key={lastLine || "empty"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-white/10 bg-black/30 p-7"
          >
            <p className="text-sm text-white/60 mb-3">
              {tokenSymbol} · Generational Wealth
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
              {lastLine || "Hit “Roll” to generate a fresh generational-wealth line."}
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="text-xs text-white/50">
                Conviction: <span className="text-white/80 font-bold">{conviction}%</span> · {vibe}
              </div>
              <div className="text-xs text-[#fcc32a] font-bold">
                {tokenSymbol}
              </div>
            </div>
          </motion.div>

          <p className="text-xs text-white/50 mt-4">
            Pro tip: roll 2–3 times, take the best line, then hit “Post to X”.
          </p>
        </div>
      </div>
    </div>
  );
}

