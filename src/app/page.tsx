"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Timer, Twitter, MessageCircle } from "lucide-react";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { LegacyMemeMachine } from "./components/LegacyMemeMachine";

const TOKEN_SYMBOL = "$GENNY";
const BUY_URL =
  "https://pump.fun/coin/BLUqNbyTuzVJK57odsLwVv2d2582LfdsgqBr3CF9pump";
const CONTRACT_ADDRESS = "BLUqNbyTuzVJK57odsLwVv2d2582LfdsgqBr3CF9pump";
const DEX_URL = "https://dexscreener.com/solana/BLUqNbyTuzVJK57odsLwVv2d2582LfdsgqBr3CF9pump";
const X_URL = "https://x.com/i/communities/2033903468377686414";
const TG_URL = "https://t.me/GENNYCOMMUNITY7";

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
                "0 0 14px rgba(255,255,255,0.35), 0 0 34px rgba(252,195,42,0.22), 0 0 70px rgba(153,69,255,0.10)",
            }}
          >
            CT’s cycle thesis
          </p>
          <h1
            className="text-7xl md:text-9xl font-bangers text-[#fcc32a]"
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
                  "0 0 34px rgba(252,195,42,0.80)",
                  "0 0 96px rgba(252,195,42,0.45)",
                  "0 0 170px rgba(251,43,255,0.24)",
                  "0 0 260px rgba(153,69,255,0.20)",
                ].join(", "),
            }}
          >
            {TOKEN_SYMBOL}
          </h1>
          <p
            className="hero-subline font-extrabold text-lg md:text-2xl"
            style={{
              textShadow:
                "0 0 14px rgba(255,255,255,0.35), 0 0 40px rgba(252,195,42,0.22), 0 0 90px rgba(252,195,42,0.12)",
            }}
          >
            One cycle can change a bloodline.
          </p>
          <div className="hero-description max-w-3xl">
            <p>
              Conviction &gt; noise. Legacy &gt; dopamine. {TOKEN_SYMBOL} is a meme with a message: treat this cycle like it matters.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
                <Timer className="h-4 w-4 text-[#fcc32a]" />
                40 years for a pension
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
                <TrendingUp className="h-4 w-4 text-[#fcc32a]" />
                1 cycle for a bloodline shift
              </span>
            </div>
          </div>

          <div className="hero-cta-buttons mt-6">
            <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-10 py-5 bg-[#fcc32a] hover:bg-[#fdd85c] text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-[#fcc32a]/50 flex items-center gap-3"
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
    phase: "Step 1 · Setup",
    emoji: "⏳",
    bullets: [
      "Macro flips → risk returns",
      "Attention rotates back to crypto",
      "Position early, ignore the noise",
      "This is where bloodlines get rewritten",
    ],
    progress: 80,
  },
  {
    phase: "Step 2 · Conviction",
    emoji: "🏗️",
    bullets: [
      "Conviction > noise",
      "Legacy > dopamine",
      "Don’t fumble the cycle",
      "Build culture, not cope",
    ],
    progress: 55,
  },
  {
    phase: "Step 3 · Legacy",
    emoji: "🏛️",
    bullets: [
      "Cycle wealth becomes generational wealth when you keep it",
      "Think in decades, not minutes",
      "Make the family upgrade stick",
      `This is ${TOKEN_SYMBOL}.`,
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
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#0a1628]/45 via-[#0f172a]/30 to-[#0a1a0f]/45"
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
        <div className="absolute inset-0 bg-[#0f172a]/70 z-0" />
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
              <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-[#fcc32a]" style={{ textShadow: "0 0 30px rgba(252, 195, 42, 0.6)" }}>
                Generational Wealth
              </h2>
              <p className="text-xl text-[#fdd85c] font-bold mb-2">
                The idea of building something that lasts beyond one lifetime.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-[#fcc32a]/30 bg-[#0f172a]/80 backdrop-blur-xl p-8 md:p-12 mb-12">
              <div className="space-y-5 text-white/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  The war is about to end, all crypto assets will skyrocket and we think it&apos;s the perfect time to build a real <span className="text-[#fcc32a] font-bold">generational wealth</span>.
                </p>
                
                <p className="text-base md:text-lg">
                  Generational wealth is money and assets passed down through families over time. It&apos;s the idea of building something that lasts beyond one lifetime.
                </p>

                <p className="text-base md:text-lg">
                  People show up every day to work, build, invest, and chase opportunity. At the end of it all, most people are seeking the same thing, something they can pass down.
                </p>

                <div className="mt-6 pt-6 border-t border-[#fcc32a]/30">
                  <p className="text-sm md:text-base text-[#fdd85c] font-bold italic">
                    &quot;Your parents worked 40 years for a pension. You can do it in one cycle. This is $GENNY.&quot;
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
            <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-[#fcc32a]" style={{ textShadow: "0 0 30px rgba(252, 195, 42, 0.6)" }}>
              The $GENNY Thread
          </h2>
            <p className="text-xl text-[#fdd85c] font-bold">
              One cycle. One decision. One legacy.
            </p>
            <p className="text-sm text-white/60 mt-2">
              Read it like a thread. Post it like a reply.
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
                className="relative rounded-3xl border-2 border-[#fcc32a]/30 bg-[#0f172a]/80 backdrop-blur-xl p-8 hover:border-[#fcc32a]/60 transition-all group"
              >
                <div className="absolute inset-0 bg-[#fcc32a]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{phase.emoji}</div>
                  <div className="text-sm text-[#fcc32a] font-bold mb-2">{phase.phase}</div>
                  
                  {/* Progress Bar - Always Yellow */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-white/60 mb-2">
                      <span>Progress</span>
                      <span className="text-[#fcc32a] font-bold">{phase.progress}%</span>
        </div>
                    <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden border border-[#fcc32a]/30">
              <motion.div
                        className="h-full bg-gradient-to-r from-[#fcc32a] to-[#fdd85c] rounded-full"
                                initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        style={{ boxShadow: "0 0 20px rgba(252, 195, 42, 0.6)" }}
                  />
        </div>
                      </div>

                  <ul className="space-y-3">
                    {phase.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="text-[#fcc32a] mt-1">🟨</span>
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
        <div className="absolute inset-0 bg-[#0f172a]/70 z-0" />
        <div className="max-w-4xl mx-auto relative z-10 pt-32 md:pt-40 pb-20 px-4 md:px-8">
      <motion.div
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-[#fcc32a]" style={{ textShadow: "0 0 30px rgba(252, 195, 42, 0.6)" }}>
              How to Buy $GENNY
          </h2>
            <p className="text-xl text-[#fdd85c] font-bold">
              Fast path first. Details after.
            </p>
      </motion.div>

                        <motion.div 
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border-2 border-[#fcc32a]/30 bg-[#0f172a]/80 backdrop-blur-xl p-8 md:p-12"
          >
            <div className="space-y-8">
              {/* TL;DR */}
              <div className="rounded-2xl border border-[#fcc32a]/25 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">TL;DR</p>
                <p className="text-sm text-white/80">
                  1) Get SOL → 2) Open Pump.fun → 3) Paste CA → 4) Swap into {TOKEN_SYMBOL}.
                </p>
              </div>

              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fcc32a] flex items-center justify-center text-black font-bold text-xl">
                  1
            </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#fcc32a] mb-2">Get a Wallet</h3>
                  <p className="text-white/80">
                    Use <span className="text-[#fcc32a] font-bold">Phantom</span> (Solana). Keep your seed phrase safe.
                                  </p>
        </div>
      </div>
      
              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fcc32a] flex items-center justify-center text-black font-bold text-xl">
                  2
            </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#fcc32a] mb-2">Get Gas / Base Asset</h3>
                  <p className="text-white/80">
                    Buy the chain&apos;s base asset on an exchange and send it to your wallet. You&apos;ll need it for fees and to swap into {TOKEN_SYMBOL}.
                  </p>
            </div>
        </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fcc32a] flex items-center justify-center text-black font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#fcc32a] mb-2">Go to the Launchpad / DEX</h3>
                  <p className="text-white/80 mb-3">
                    Visit <span className="text-[#fcc32a] font-bold">pump.fun</span> (official link) and connect your wallet. Search for <span className="font-mono text-[#fcc32a]">{TOKEN_SYMBOL}</span> or use the contract address.
                  </p>
                  <div className="bg-black/50 rounded-xl p-4 border border-[#fcc32a]/30">
                    <p className="text-xs text-white/60 mb-1">Contract Address:</p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-[#fcc32a] font-mono break-all">{CONTRACT_ADDRESS}</p>
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
                        className="shrink-0 rounded-full border border-[#fcc32a]/30 bg-[#fcc32a]/10 px-3 py-1 text-xs font-bold text-[#fdd85c] hover:bg-[#fcc32a]/20 transition"
                      >
                        {copied ? "Copied" : `Copy ${shortCa}`}
                      </button>
                    </div>
        </div>
            </div>
        </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fcc32a] flex items-center justify-center text-black font-bold text-xl">
                  4
                  </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#fcc32a] mb-2">Buy $GENNY</h3>
                  <p className="text-white/80">
                    Enter the amount you want to swap into {TOKEN_SYMBOL}. Confirm in your wallet. Hold with a legacy mindset.
          </p>
        </div>
                </div>

              {/* CTA Button */}
              <div className="mt-8 pt-8 border-t border-[#fcc32a]/30 text-center">
                <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-10 py-5 bg-[#fcc32a] hover:bg-[#fdd85c] text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-[#fcc32a]/50 flex items-center gap-3 mx-auto"
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
      <section id="meme-machine" className="relative py-32 md:py-40 px-4 md:px-8 z-10 bg-[#0f172a]/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-5xl md:text-7xl font-bangers mb-4 text-[#fcc32a]"
              style={{ textShadow: "0 0 30px rgba(252, 195, 42, 0.6)" }}
            >
              Generational Wealth Meme Machine
            </h2>
            <p className="text-lg text-white/70">
              Set your conviction slider, roll a line, and copy it instantly for X/Telegram.
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
            className="rounded-3xl border-2 border-[#fcc32a]/30 bg-[#0f172a]/80 backdrop-blur-xl p-12"
          >
            <h2 className="text-4xl md:text-6xl font-bangers mb-6 text-[#fcc32a]" style={{ textShadow: "0 0 30px rgba(252, 195, 42, 0.6)" }}>
              Build a Legacy
          </h2>
            <p className="text-xl text-white/80 mb-8">
              Your parents worked 40 years for a pension. You can do it in one cycle. This is {TOKEN_SYMBOL}.
            </p>
            <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-10 py-5 bg-[#fcc32a] hover:bg-[#fdd85c] text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-[#fcc32a]/50 flex items-center gap-3 mx-auto"
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
          <div className="rounded-3xl border-2 border-[#fcc32a]/30 bg-[#0f172a]/80 backdrop-blur-xl px-4 py-3 md:px-6 md:py-4 shadow-2xl shadow-black/40">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2">
                  <span className="text-white/60">CA</span>
                  <span className="font-mono text-[#fcc32a]">{shortCa}</span>
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
                  className="inline-flex items-center gap-2 rounded-full border border-[#fcc32a]/30 bg-[#fcc32a]/10 px-4 py-2 font-bold text-[#fdd85c] hover:bg-[#fcc32a]/20 transition"
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
                  <ArrowRight className="h-4 w-4 text-[#fcc32a]" />
                </Link>
                <Link
                  href={DEX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/15 transition"
                >
                  Chart
                  <TrendingUp className="h-4 w-4 text-[#fcc32a]" />
                </Link>
                <Link
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/15 transition"
                >
                  X
                  <Twitter className="h-4 w-4 text-[#fcc32a]" />
                </Link>
                <Link
                  href={TG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/15 transition"
                >
                  TG
                  <MessageCircle className="h-4 w-4 text-[#fcc32a]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#fcc32a]/20 bg-[#0f172a] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-6 py-2 bg-[#fcc32a] hover:bg-[#fdd85c] text-black font-bold text-sm rounded-full transition-all shadow-lg shadow-[#fcc32a]/50 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUY $GENNY
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
          <div className="mt-8 pt-8 border-t border-[#fcc32a]/10 text-center">
            <p className="text-xs text-white/40">
              © 2026 GENNY. All rights reserved.
            </p>
            </div>
            </div>
      </footer>
        </div>
  );
}
