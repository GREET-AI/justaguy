"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const storyParagraphs = [
  "$GENNY is a meme with a message: conviction > noise, legacy > dopamine.",
  "It’s a reminder that a single cycle can change a family line—if you don’t fumble it.",
  "We’re not here to cosplay “utility”. We’re here to turn a thesis into culture.",
];

const missionParagraphs = [
  "Make the thesis memetic: short, quotable, repeatable.",
  "Build a community that posts through the chop and shows up for the cycle.",
  "Push a single North Star: one cycle can change a bloodline.",
];

const visionParagraphs = [
  "A culture coin: memes on the surface, generational thinking underneath.",
  "A community that measures time in cycles, not candles.",
  "A simple outcome: make the family upgrade stick.",
];

const BUY_URL =
  "https://pump.fun/coin/BLUqNbyTuzVJK57odsLwVv2d2582LfdsgqBr3CF9pump";
const CONTRACT_ADDRESS = "BLUqNbyTuzVJK57odsLwVv2d2582LfdsgqBr3CF9pump";
const DEX_URL =
  "https://dexscreener.com/solana/BLUqNbyTuzVJK57odsLwVv2d2582LfdsgqBr3CF9pump";
const X_URL = "https://x.com/i/communities/2033903468377686414";
const TG_URL = "https://t.me/GENNYCOMMUNITY7";

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
          <p className="section-eyebrow">$GENNY · Generational Wealth</p>
          <h1 className="section-title mb-8">Manifesto</h1>
          {storyParagraphs.map((paragraph, index) => (
            <MotionText key={paragraph} index={index}>
              {paragraph}
            </MotionText>
          ))}
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4 bg-gradient-to-br from-yellow-900/20 to-orange-900/20">
            <p className="text-sm font-semibold text-white/90 mb-2">The $GENNY Manifesto</p>
            <p className="text-base text-white/80">
              <span className="font-semibold text-[#fcc32a]">Legacy mindset</span> – Think in decades, not minutes.
            </p>
            <p className="text-base text-white/80">
              <span className="font-semibold text-[#fcc32a]">One-cycle focus</span> – Treat this cycle like it matters.
            </p>
            <p className="text-base text-white/80">
              <span className="font-semibold text-[#fcc32a]">Pass it down</span> – Build something that outlives you.
            </p>
            <p className="text-sm text-white/70 mt-4">
              Your parents worked 40 years for a pension. You can do it in one cycle. This is $GENNY.
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
              className="inline-flex items-center justify-center rounded-full bg-[#fcc32a] px-6 py-3 font-bold text-black hover:bg-[#fdd85c] transition"
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
              href={TG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 font-bold text-white/90 hover:bg-white/15 transition"
            >
              Telegram
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-xs text-white/60 mb-1">Contract Address (CA)</p>
            <p className="text-sm font-mono break-all text-[#fcc32a]">{CONTRACT_ADDRESS}</p>
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
