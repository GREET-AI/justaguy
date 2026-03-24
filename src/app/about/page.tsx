"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TOKEN_MINT,
  TOKEN_NAME,
  TOKEN_SYMBOL,
  BUY_URL,
  DEX_URL,
  PADRE_TRADE_URL,
  X_URL,
} from "@/config/token";

const storyParagraphs = [
  `${TOKEN_SYMBOL} (${TOKEN_NAME}) is a Pump.fun launch on Solana: the name is the vibe — show up until the results show up.`,
  "No corporate roadmap theater — just memes, liquidity, and people who like the ticker enough to post it.",
  "If you’re here for a quick narrative flip, cool. If you’re here to build culture in public, even better.",
];

const missionParagraphs = [
  "Keep the story simple: one mint, one ticker, one official pump link.",
  "Make it easy for newcomers to verify the CA and avoid clones.",
  "Reward conviction with jokes, charts, and relentless signal — not promises.",
];

const visionParagraphs = [
  "A Solana-native meme that survives screenshots, spaces, and sideways markets.",
  "A community that treats attention like leverage — and toxicity like noise.",
  "A culture where “everything to make it” means daily reps, not magic beans.",
];

const CONTRACT_ADDRESS = TOKEN_MINT;

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function MotionText({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.p
      className="section-copy"
      variants={textVariants}
      initial={{ opacity: 1, y: 0 }}
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      {children}
    </motion.p>
  );
}

export default function AboutPage() {
  return (
    <section className="themed-section about-section">
      <div className="section-overlay" />
      <div className="section-glow" aria-hidden="true" />
      <motion.div
        className="section-content space-y-16 pt-32 md:pt-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0 }}
      >
        <div className="space-y-12">
          <p className="section-eyebrow">
            {TOKEN_SYMBOL} · {TOKEN_NAME}
          </p>
          <h1 className="section-title mb-8">Manifesto</h1>
          {storyParagraphs.map((paragraph, index) => (
            <MotionText key={paragraph} index={index}>
              {paragraph}
            </MotionText>
          ))}
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4 bg-gradient-to-br from-emerald-950/35 to-amber-900/25">
            <p className="text-sm font-semibold text-white/90 mb-2">The {TOKEN_SYMBOL} manifesto</p>
            <p className="text-base text-white/80">
              <span className="font-semibold text-brand-lime">Verify everything</span> – Only trust this CA + official pump link.
            </p>
            <p className="text-base text-white/80">
              <span className="font-semibold text-brand-lime">Post the ticker</span> – Culture is distribution.
            </p>
            <p className="text-base text-white/80">
              <span className="font-semibold text-brand-lime">Stay liquid-minded</span> – Risk small, learn fast, no hero bags.
            </p>
            <p className="text-sm text-white/70 mt-4">
              {TOKEN_NAME} — {TOKEN_SYMBOL} on Solana. DYOR; memes only.
            </p>
          </div>
        </div>

        <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Official Links</p>
          <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
            <Link
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-lime px-6 py-3 font-bold text-black hover:bg-brand-gold-soft transition"
            >
              Buy on Pump.fun
            </Link>
            <Link
              href={DEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 font-bold text-white/90 hover:bg-white/15 transition"
            >
              Chart (Dexscreener)
            </Link>
            <Link
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 font-bold text-white/90 hover:bg-white/15 transition"
            >
              X / Twitter
            </Link>
            <Link
              href={PADRE_TRADE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 font-bold text-white/90 hover:bg-white/15 transition"
            >
              Trade (Padre)
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-xs text-white/60 mb-1">Contract Address (CA)</p>
            <p className="text-sm font-mono break-all text-brand-lime">{CONTRACT_ADDRESS}</p>
          </div>
          <p className="text-xs text-white/55">
            Safety: only trust links from this site. Scammers will copy ticker + logo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Mission</p>
            {missionParagraphs.map((paragraph, index) => (
              <MotionText key={paragraph} index={index}>
                {paragraph}
              </MotionText>
            ))}
          </div>
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Vision</p>
            {visionParagraphs.map((paragraph, index) => (
              <MotionText key={paragraph} index={index}>
                {paragraph}
              </MotionText>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
