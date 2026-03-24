"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Timer, Twitter, Zap } from "lucide-react";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { LegacyMemeMachine } from "./components/LegacyMemeMachine";
import {
  TOKEN_MINT,
  TOKEN_SYMBOL,
  TOKEN_NAME,
  BUY_URL,
  DEX_URL,
  PADRE_TRADE_URL,
  X_URL,
} from "@/config/token";

const CONTRACT_ADDRESS = TOKEN_MINT;

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="hero-section relative w-full pt-16 md:pt-0" aria-label="Hero Background">
      {/* Hero background image (only within hero) */}
      <div aria-hidden="true" className="hero-lambo-bg" />
      <div className="hero-content-overlay">
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm md:text-base uppercase tracking-[0.6em] text-white/95 font-bold"
            style={{
              textShadow:
                "0 0 14px rgba(255,255,255,0.35), 0 0 34px rgba(189,253,42,0.28), 0 0 70px rgba(232,184,70,0.12)",
            }}
          >
            Solana · Pump.fun · {TOKEN_NAME}
          </p>
          <h1
            className="text-7xl md:text-9xl font-bangers text-brand-lime"
            style={{
              textShadow:
                [
                  // crisp outer outline (no inner stroke)
                  "2px 0 0 rgba(0,0,0,0.85)",
                  "-2px 0 0 rgba(0,0,0,0.85)",
                  "0 2px 0 rgba(0,0,0,0.85)",
                  "0 -2px 0 rgba(0,0,0,0.85)",
                  "2px 2px 0 rgba(0,0,0,0.75)",
                  "-2px 2px 0 rgba(0,0,0,0.75)",
                  "2px -2px 0 rgba(0,0,0,0.75)",
                  "-2px -2px 0 rgba(0,0,0,0.75)",
                  // glow
                  "0 0 18px rgba(255,255,255,0.22)",
                  "0 0 34px rgba(189,253,42,0.85)",
                  "0 0 96px rgba(189,253,42,0.45)",
                  "0 0 170px rgba(232,184,70,0.35)",
                  "0 0 260px rgba(55,85,52,0.25)",
                ].join(", "),
            }}
          >
            {TOKEN_SYMBOL}
          </h1>
          <p
            className="hero-subline font-extrabold text-lg md:text-2xl"
            style={{
              textShadow:
                "0 0 14px rgba(255,255,255,0.35), 0 0 40px rgba(189,253,42,0.25), 0 0 90px rgba(232,184,70,0.15)",
            }}
          >
            {TOKEN_NAME}
          </p>
          <div className="hero-description max-w-3xl">
            <p>
              The name is the mantra. {TOKEN_SYMBOL} is the ticker for showing up daily: stack the reps, post the chart, make it real on Solana.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
                <Timer className="h-4 w-4 text-brand-lime" />
                Consistency beats hype
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
                <TrendingUp className="h-4 w-4 text-brand-lime" />
                Pump.fun · fair launch energy
              </span>
            </div>
          </div>

          <div className="hero-cta-buttons mt-6">
            <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-10 py-5 bg-brand-lime hover:bg-brand-gold-soft text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-[0_0_32px_rgba(189,253,42,0.45)] flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy {TOKEN_SYMBOL}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/#thesis">
              <motion.button
                className="px-10 py-5 bg-white/10 hover:bg-white/15 text-white font-bold text-lg rounded-full transition-all border border-white/20 backdrop-blur flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read the thread
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>

          <p className="text-xs text-white/60 mt-4">
            Not financial advice. DYOR.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const thesisSteps = [
  {
    phase: "Step 1 · Start ugly",
    emoji: "🧱",
    bullets: [
      "No perfect entry — just an entry",
      "Wallet ready, mind ready, memes ready",
      "Follow the official CA; ignore copycats",
      "Small size beats zero size",
    ],
    progress: 80,
  },
  {
    phase: "Step 2 · Stack proof",
    emoji: "📣",
    bullets: [
      "Post the ticker, own the story",
      "Liquidity is belief + time",
      "Community is the distribution engine",
      `Culture lives on-chain: ${TOKEN_SYMBOL}`,
    ],
    progress: 55,
  },
  {
    phase: "Step 3 · Make it",
    emoji: "🚀",
    bullets: [
      "Graduation is a meme — until it isn’t",
      "Trade the chart, build the lore",
      "Pump.fun launch → Padre/DEX as it grows",
      `This is ${TOKEN_NAME}.`,
    ],
    progress: 35,
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const shortCa = useMemo(() => {
    const ca = CONTRACT_ADDRESS;
    if (ca.length <= 14) return ca;
    return `${ca.slice(0, 6)}…${ca.slice(-6)}`;
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-white">
      {/* Local tint (keep CryptoBackground visible) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-brand-void/55 via-brand-panel/40 to-[#0f140c]/50"
      />
      {/* Meme Particles */}
      <div className="meme-particles" />
      {/* Cash Glow */}
      <div className="cash-glow cash-glow--left" />
      <div className="cash-glow cash-glow--right" />
      {/* Comic Bubbles */}
      <div className="comic-bubbles" />
      {/* Flying BNB/Binance Logos */}
      <div className="flying-logos">
        {/* Von links nach rechts */}
        <img src="/Website/cryptologos/Solana Logo.png" alt="" className="flying-logo left-to-right-1" />
        <img src="/Website/cryptologos/Jupiter Logo.png" alt="" className="flying-logo left-to-right-2" />
        <img src="/Website/cryptologos/Phantom Logo.png" alt="" className="flying-logo left-to-right-3" />
        
        {/* Von rechts nach links */}
        <img src="/Website/cryptologos/Raydium.png" alt="" className="flying-logo right-to-left-1" />
        <img src="/Website/cryptologos/PumpFun Logo.png" alt="" className="flying-logo right-to-left-2" />
        <img src="/Website/cryptologos/orca.png" alt="" className="flying-logo right-to-left-3" />
        
        {/* Von unten nach oben (Bubbles) */}
        <img src="/Website/cryptologos/Coingecko Logo.png" alt="" className="flying-logo bubble-up-1" />
        <img src="/Website/cryptologos/Dexscreener Logo.png" alt="" className="flying-logo bubble-up-2" />
        
        {/* Diagonal kreuz und quer */}
        <img src="/Website/cryptologos/Telegram Logo.png" alt="" className="flying-logo diagonal-1" />
        <img src="/Website/cryptologos/Twitter Logo.png" alt="" className="flying-logo diagonal-2" />
        <img src="/Website/cryptologos/Solscan.png" alt="" className="flying-logo diagonal-3" />
        
        {/* Mehr Random Logos */}
        <img src="/Website/cryptologos/nova.png" alt="" className="flying-logo random-1" />
        <img src="/Website/cryptologos/photon.png" alt="" className="flying-logo random-2" />
      </div>
      
      <main className="relative z-10 flex flex-col pb-44">
        {/* Hero Section - Original Style without Buttons */}
        <Hero />

        {/* Marquee Banner Separator */}
        <div className="relative z-10">
          <MarqueeBanner />
        </div>

        {/* Thesis */}
      <section 
        id="thesis" 
        className="roadmap-section relative w-full"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-brand-panel/70 z-0" />
      <div className="max-w-7xl mx-auto relative z-10 pt-32 md:pt-40 pb-20 px-4 md:px-8">
          {/* About / Thesis intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-brand-lime" style={{ textShadow: "0 0 30px rgba(189, 253, 42, 0.55)" }}>
                Everything to make it
              </h2>
              <p className="text-xl text-brand-gold-soft font-bold mb-2">
                Not a promise — a pace. Show up, ship memes, let the chart catch up.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-brand-lime/30 bg-brand-panel/80 backdrop-blur-xl p-8 md:p-12 mb-12">
              <div className="space-y-5 text-white/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  {TOKEN_SYMBOL} is a Solana memecoin launched on <span className="text-brand-lime font-bold">Pump.fun</span> — the full name on the coin page is <span className="text-brand-lime font-bold">{TOKEN_NAME}</span>.
                </p>
                
                <p className="text-base md:text-lg">
                  The thesis is simple: most people quit right before the compounding becomes visible. This community treats the ticker like a reminder — do the boring reps, post the run, stay in the arena.
                </p>

                <p className="text-base md:text-lg">
                  Nothing here is a roadmap promise. It&apos;s culture + conviction + internet money. If you buy, buy because you like the vibe — and always DYOR.
                </p>

                <div className="mt-6 pt-6 border-t border-brand-lime/30">
                  <p className="text-sm md:text-base text-brand-gold-soft font-bold italic">
                    &quot;You don&apos;t need permission to make it — you need momentum. {TOKEN_SYMBOL}.&quot;
                  </p>
        </div>
              </div>
            </div>
          </motion.div>

          {/* Thesis steps */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-brand-lime" style={{ textShadow: "0 0 30px rgba(189, 253, 42, 0.55)" }}>
              The {TOKEN_SYMBOL} thread
          </h2>
            <p className="text-xl text-brand-gold-soft font-bold">
              Start messy. Stay loud. Let Solana receipts print.
            </p>
            <p className="text-sm text-white/60 mt-2">
              Copy a line, post your conviction, link the pump.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {thesisSteps.map((phase, index) => (
      <motion.div
                key={phase.phase}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative rounded-3xl border-2 border-brand-lime/30 bg-brand-panel/80 backdrop-blur-xl p-8 hover:border-brand-lime/60 transition-all group"
              >
                <div className="absolute inset-0 bg-brand-lime/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{phase.emoji}</div>
                  <div className="text-sm text-brand-lime font-bold mb-2">{phase.phase}</div>
                  
                  {/* Progress Bar - Always Yellow */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-white/60 mb-2">
                      <span>Progress</span>
                      <span className="text-brand-lime font-bold">{phase.progress}%</span>
        </div>
                    <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden border border-brand-lime/30">
              <motion.div
                        className="h-full bg-gradient-to-r from-brand-lime to-brand-gold-soft rounded-full"
                                initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        style={{ boxShadow: "0 0 20px rgba(189, 253, 42, 0.55)" }}
                  />
        </div>
                      </div>

                  <ul className="space-y-3">
                    {phase.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="text-brand-lime mt-1">🟩</span>
                    {bullet}
                  </li>
                ))}
              </ul>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
    </section>

        {/* Marquee Banner Separator */}
        <MarqueeBanner />

      {/* How to Buy Section - Section 3 */}
      <section id="how-to-buy" className="section3-background relative w-full">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-brand-panel/70 z-0" />
        <div className="max-w-4xl mx-auto relative z-10 pt-32 md:pt-40 pb-20 px-4 md:px-8">
      <motion.div
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-brand-lime" style={{ textShadow: "0 0 30px rgba(189, 253, 42, 0.55)" }}>
              How to buy {TOKEN_SYMBOL}
          </h2>
            <p className="text-xl text-brand-gold-soft font-bold">
              Fast path first. Details after.
            </p>
      </motion.div>

                        <motion.div 
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border-2 border-brand-lime/30 bg-brand-panel/80 backdrop-blur-xl p-8 md:p-12"
          >
            <div className="space-y-8">
              {/* TL;DR */}
              <div className="rounded-2xl border border-brand-lime/25 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">TL;DR</p>
                <p className="text-sm text-white/80">
                  1) Get SOL → 2) Open Pump.fun → 3) Paste CA → 4) Swap into {TOKEN_SYMBOL}.
                </p>
              </div>

              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center text-black font-bold text-xl">
                  1
            </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-lime mb-2">Get a Wallet</h3>
                  <p className="text-white/80">
                    Use <span className="text-brand-lime font-bold">Phantom</span> (Solana). Keep your seed phrase safe.
                                  </p>
        </div>
      </div>
      
              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center text-black font-bold text-xl">
                  2
            </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-lime mb-2">Get Gas / Base Asset</h3>
                  <p className="text-white/80">
                    Buy the chain&apos;s base asset on an exchange and send it to your wallet. You&apos;ll need it for fees and to swap into {TOKEN_SYMBOL}.
                  </p>
            </div>
        </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center text-black font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-lime mb-2">Go to the Launchpad / DEX</h3>
                  <p className="text-white/80 mb-3">
                    Visit <span className="text-brand-lime font-bold">pump.fun</span> (official link) and connect your wallet. Search for <span className="font-mono text-brand-lime">{TOKEN_SYMBOL}</span> or use the contract address.
                  </p>
                  <div className="bg-black/50 rounded-xl p-4 border border-brand-lime/30">
                    <p className="text-xs text-white/60 mb-1">Contract Address:</p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p
                        className="w-full truncate text-sm text-brand-lime font-mono sm:flex-1 sm:min-w-0"
                        title={CONTRACT_ADDRESS}
                      >
                        {CONTRACT_ADDRESS}
                      </p>
                      <button
                        type="button"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(CONTRACT_ADDRESS);
                            setCopied(true);
                            window.setTimeout(() => setCopied(false), 1200);
                          } catch {
                            // ignore
                          }
                        }}
                        className="shrink-0 rounded-full border border-brand-lime/30 bg-brand-lime/10 px-3 py-2 text-xs font-bold text-brand-gold-soft hover:bg-brand-lime/20 transition w-full sm:w-auto"
                      >
                        {copied ? "Copied" : `Copy ${shortCa}`}
                      </button>
                    </div>
        </div>
            </div>
        </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center text-black font-bold text-xl">
                  4
                  </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-lime mb-2">Buy {TOKEN_SYMBOL}</h3>
                  <p className="text-white/80">
                    Enter the amount you want to swap into {TOKEN_SYMBOL}. Confirm in your wallet. Hold with a legacy mindset.
          </p>
        </div>
                </div>

              {/* CTA Button */}
              <div className="mt-8 pt-8 border-t border-brand-lime/30 text-center">
                <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-10 py-5 bg-brand-lime hover:bg-brand-gold-soft text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-[0_0_32px_rgba(189,253,42,0.4)] flex items-center gap-3 mx-auto"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                    Buy {TOKEN_SYMBOL} on Pump.fun
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
          </Link>
                <p className="text-sm text-white/60 mt-4">
                  *Always DYOR. This is not financial advice. Only buy what you can afford to lose.
                </p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>

        {/* Marquee Banner Separator */}
        <MarqueeBanner />

      {/* Interactive Meme Machine */}
      <section id="meme-machine" className="relative py-32 md:py-40 px-4 md:px-8 z-10 bg-brand-panel/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-5xl md:text-7xl font-bangers mb-4 text-brand-lime"
              style={{ textShadow: "0 0 30px rgba(189, 253, 42, 0.55)" }}
            >
              {TOKEN_NAME} — meme machine
            </h2>
            <p className="text-lg text-white/70">
              Dial the energy, roll a one-liner, copy it for X in one tap.
            </p>
          </motion.div>

          <LegacyMemeMachine tokenSymbol={TOKEN_SYMBOL} buyUrl={BUY_URL} />
        </div>
      </section>

        {/* Marquee Banner Separator */}
        <MarqueeBanner />

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
      <motion.div
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-brand-lime/30 bg-brand-panel/80 backdrop-blur-xl p-12"
          >
            <h2 className="text-4xl md:text-6xl font-bangers mb-6 text-brand-lime" style={{ textShadow: "0 0 30px rgba(189, 253, 42, 0.55)" }}>
              Make it on Solana
          </h2>
            <p className="text-xl text-white/80 mb-8">
              If you&apos;re here, you already know: attention is the asset. {TOKEN_SYMBOL} is the banner for people who build in public.
            </p>
            <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-10 py-5 bg-brand-lime hover:bg-brand-gold-soft text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-[0_0_32px_rgba(189,253,42,0.4)] flex items-center gap-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BUY {TOKEN_SYMBOL}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
          </Link>
            <p className="text-sm text-white/60 mt-6">
              *DYOR. Not financial advice. Only invest what you can afford to lose.
            </p>
            </motion.div>
        </div>
    </section>
      </main>

      {/* Floating Dock (fixed bottom) */}
      <section
        aria-label="Quick Links Dock"
        className="fixed inset-x-0 z-50 px-4 md:px-8 pointer-events-none"
        style={{ bottom: "max(16px, env(safe-area-inset-bottom))" }}
      >
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <div className="rounded-3xl border-2 border-brand-lime/30 bg-brand-panel/80 backdrop-blur-xl px-4 py-3 md:px-6 md:py-4 shadow-2xl shadow-black/40">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2">
                  <span className="text-white/60">CA</span>
                  <span className="font-mono text-brand-lime">{shortCa}</span>
                </span>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 1200);
                    } catch {
                      // ignore
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-lime/30 bg-brand-lime/10 px-4 py-2 font-bold text-brand-gold-soft hover:bg-brand-lime/20 transition"
                >
                  {copied ? "Copied" : "Copy CA"}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/15 transition"
                >
                  Buy
                  <ArrowRight className="h-4 w-4 text-brand-lime" />
                </Link>
                <Link
                  href={DEX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/15 transition"
                >
                  Chart
                  <TrendingUp className="h-4 w-4 text-brand-lime" />
                </Link>
                <Link
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/15 transition"
                >
                  X
                  <Twitter className="h-4 w-4 text-brand-lime" />
                </Link>
                <Link
                  href={PADRE_TRADE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/15 transition"
                >
                  Trade
                  <Zap className="h-4 w-4 text-brand-lime" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-brand-lime/20 bg-brand-panel py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-6 py-2 bg-brand-lime hover:bg-brand-gold-soft text-black font-bold text-sm rounded-full transition-all shadow-lg shadow-[0_0_32px_rgba(189,253,42,0.4)] flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUY {TOKEN_SYMBOL}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
          </div>

            {/* Disclaimer */}
            <div className="text-center md:text-right max-w-2xl">
              <p className="text-xs text-white/50 leading-relaxed">
                <strong className="text-white/70">Disclaimer:</strong> This is a meme coin with no intrinsic value or expectation of financial return. 
                There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only. 
                Not a registered security, commodity, or any other kind of financial instrument. 
                <strong className="text-white/70"> DYOR.</strong> This is not financial advice. 
                Only invest what you can afford to lose.
              </p>
    </div>
            </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-brand-lime/10 text-center">
            <p className="text-xs text-white/40">
              © 2026 {TOKEN_NAME}. All rights reserved.
            </p>
            </div>
            </div>
      </footer>
        </div>
  );
}
