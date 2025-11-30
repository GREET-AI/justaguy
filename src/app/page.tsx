"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Rocket, Users, Gift, ArrowRight, Twitter } from "lucide-react";
import { MarqueeBanner } from "./components/MarqueeBanner";

// Gallery images - using existing gallery folder
const getGalleryImages = () => {
  const imageNames = [
    "igorgross__erstelle_mir_ein_afroamerikaner_with_green_skin_pe_dcff2f19-9249-4f03-b87c-e9ce5433a711_1.png",
    "igorgross__erstelle_mir_ein_armen_bettler_personifiziert_poor_634a84b1-8cf0-4726-afa9-7aab783a2d23_0.png",
    "igorgross__erstelle_mir_ein_bauer_with_green_skin_personifizi_64dc950b-9628-4b23-a092-69cb9c9f7ada_0.png",
    "igorgross__erstelle_mir_ein_bcker_with_green_skin_personifizi_7fa139b1-e5fa-49ad-ab78-9f2d1805cda7_0.png",
    "igorgross__erstelle_mir_ein_eiscreme_personifiziert_icecreamg_c27f1942-935b-4702-843b-c1ccf312e922_3.png",
    "igorgross__erstelle_mir_ein_indischen_kassierer_with_green_sk_5a9ba318-b3c7-4ce2-9188-9256e45ff0a2_0.png",
    "igorgross__erstelle_mir_ein_lkwfahrer_personifiziert_truckerg_9b0389b1-06a5-4971-bf0b-75edca14b8a3_0.png",
    "igorgross__erstelle_mir_ein_lkwfahrer_personifiziert_truckerg_f644277f-d8ff-4d1e-a43c-20c8017bf294_3.png",
    "igorgross__erstelle_mir_ein_pizzastck_personifiziert_pizzaguy_baa2470b-c225-43a8-93b2-5c985e879803_0.png",
    "igorgross__erstelle_mir_ein_rapper_with_green_skin_personifiz_84c9a060-dd0f-4626-b6c5-67b74df9d921_0.png",
    "igorgross__erstelle_mir_ein_rennfahrer_personifiziert_raceguy_fdd3d687-9d2e-420f-b802-9400179e2272_2.png",
    "igorgross__erstelle_mir_ein_rennfahrer_personifiziert_raceguy_fdd3d687-9d2e-420f-b802-9400179e2272_3.png",
    "igorgross__erstelle_mir_ein_rosenstrau_personifiziert_rosesgu_e8694902-c315-4f7a-bf18-8b7630c95be0_2.png",
    "igorgross__erstelle_mir_ein_rosenstrau_personifiziert_rosesgu_e8694902-c315-4f7a-bf18-8b7630c95be0_3.png",
    "igorgross__erstelle_mir_ein_straenmusiker_personifiziert_musi_570cd02b-d267-4110-902e-147bb577ba19_3.png",
    "igorgross__erstelle_mir_ein_straenmusiker_personifiziert_musi_77870a40-827e-47a2-9f32-0c59aa0e8331_0.png",
    "igorgross__erstelle_mir_ein_straenmusiker_personifiziert_musi_77870a40-827e-47a2-9f32-0c59aa0e8331_1.png",
  ];
  
  return imageNames.map((name, index) => ({
    src: `/Website/gallery/${name}`,
    alt: `JUSTAGUY ${index + 1}`,
    id: index,
  }));
};

// Solana Glyphs for Aurora Effect - Updated to Green
const solanaGlyphs = [
  { left: "8%", top: "25%", size: 110, delay: 0, duration: 18, from: "#22c55e", to: "#86efac" },
  { left: "22%", top: "60%", size: 70, delay: 3, duration: 16, from: "#16a34a", to: "#22c55e" },
  { left: "45%", top: "35%", size: 90, delay: 6, duration: 20, from: "#86efac", to: "#22c55e" },
  { left: "68%", top: "20%", size: 120, delay: 1, duration: 22, from: "#16a34a", to: "#a3e635" },
  { left: "80%", top: "55%", size: 80, delay: 4, duration: 18, from: "#22c55e", to: "#86efac" },
  { left: "55%", top: "70%", size: 95, delay: 2, duration: 19, from: "#22c55e", to: "#86efac" },
];

function SolanaAurora() {
  return (
    <div className="solana-aurora" aria-hidden="true">
      <div className="solana-aurora-gradient" />
      {solanaGlyphs.map((glyph, index) => (
        <span
          key={`${glyph.left}-${index}`}
          className="solana-glyph"
          style={{
            left: glyph.left,
            top: glyph.top,
            width: glyph.size,
            height: glyph.size * 0.28,
            animationDelay: `${glyph.delay}s`,
            animationDuration: `${glyph.duration}s`,
            background: `linear-gradient(120deg, ${glyph.from}, ${glyph.to})`,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="hero-section relative w-full" aria-label="Hero Background">
      <SolanaAurora />
    </section>
  );
}

const greenCandlePhases = [
  {
    phase: "Phase 1 · Launch & Send It",
    emoji: "🚀",
    bullets: [
      "100% green candles only (no red allowed)",
      "Fair launch on pump.fun",
      "LP burned forever",
      "Jeets get rekt immediately",
    ],
    progress: 95,
  },
  {
    phase: "Phase 2 · Everyone Becomes a JUSTAGUY",
    emoji: "👥",
    bullets: [
      "10,000+ JUSTAGUYs holding",
      "DEX Screener trending",
      "Community takes over Solana",
      "More green candles than ever seen",
    ],
        progress: 75,
  },
  {
    phase: "Phase 3 · Moon + Jeep Giveaway",
    emoji: "🌙",
    bullets: [
      "JUSTAGUY takes over Solana",
      "Jeep giveaway to biggest JUSTAGUY",
      "Coingecko & CMC listings",
      "One JUSTAGUY to rule them all",
    ],
    progress: 40,
  },
];

export default function Home() {
  const [galleryImages] = useState(getGalleryImages());
  const [visibleImages, setVisibleImages] = useState(12);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#0a1a0f] text-white">
      {/* Comic Money Rain */}
      <div className="money-rain" />
      {/* Meme Particles */}
      <div className="meme-particles" />
      {/* Cash Glow */}
      <div className="cash-glow cash-glow--left" />
      <div className="cash-glow cash-glow--right" />
      {/* Comic Bubbles */}
      <div className="comic-bubbles" />
      {/* Flying Solana Logos */}
      <div className="flying-logos">
        {/* Von links nach rechts */}
        <img src="/Website/cryptologos/Solana Logo.png" alt="" className="flying-logo left-to-right-1" />
        <img src="/Website/cryptologos/Jupiter Logo.png" alt="" className="flying-logo left-to-right-2" />
        <img src="/Website/cryptologos/Phantom Logo.png" alt="" className="flying-logo left-to-right-3" />
        
        {/* Von rechts nach links */}
        <img src="/Website/cryptologos/Raydium.png" alt="" className="flying-logo right-to-left-1" />
        <img src="/Website/cryptologos/PumpFun Logo.png" alt="" className="flying-logo right-to-left-2" />
        <img src="/Website/cryptologos/orca.png" alt="" className="flying-logo right-to-left-3" />
        
        {/* Von oben nach unten (Schnee) */}
        <img src="/Website/cryptologos/Website Icon Logo Logo.png" alt="" className="flying-logo snow-fall-1" />
        <img src="/Website/cryptologos/Solana Logo.png" alt="" className="flying-logo snow-fall-2" />
        <img src="/Website/cryptologos/Binance Logo.png" alt="" className="flying-logo snow-fall-3" />
        
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
      
      <main className="relative z-10 flex flex-col pb-28">
        {/* Hero Section - Original Style without Buttons */}
        <Hero />

        {/* Marquee Banner Separator */}
        <MarqueeBanner />

        {/* Green Candle Roadmap */}
      <section 
        id="roadmap" 
        className="roadmap-section relative w-full"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0f172a]/70 z-0" />
      <div className="max-w-7xl mx-auto relative z-10 pt-32 md:pt-40 pb-20 px-4 md:px-8">
          {/* About JUSTAGUY Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-green-500" style={{ textShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}>
                About JUSTAGUY
              </h2>
              <p className="text-xl text-green-300 font-bold mb-2">
                Just a normal guy. Just green candles. Just the way it should be.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-green-500/30 bg-[#0f172a]/80 backdrop-blur-xl p-8 md:p-12 mb-12">
              <div className="space-y-5 text-white/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  <span className="text-green-400 font-bold">JUSTAGUY</span> started as a simple idea: what if a meme coin actually did what it promised? What if the chart <span className="text-green-400 font-bold">only went up</span>? What if we banned red candles entirely?
                </p>
                
                <p className="text-base md:text-lg">
                  We're not here to make promises we can't keep. We're here to make <span className="text-green-400 font-bold">green candles</span>. Lots of them. More than a $HANDGUY, more than any other meme on Solana. We're the <span className="text-green-400 font-bold">greenest</span>.
                </p>

                <p className="text-base md:text-lg">
                  JUSTAGUY isn't just a token. It's a movement. A movement where <span className="text-green-400 font-bold">jeets get rekt</span>, where red candles are illegal, and where one normal guy in a world full of green candles can change everything.
                </p>

                <div className="mt-6 pt-6 border-t border-green-500/30">
                  <p className="text-sm md:text-base text-green-300 font-bold italic">
                    "One JUSTAGUY to rule them all. One chart that only goes up. One community that never sells. 🟩"
                  </p>
        </div>
              </div>
            </div>
          </motion.div>

          {/* Green Candle Roadmap */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-green-500" style={{ textShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}>
              Green Candle Roadmap
          </h2>
            <p className="text-xl text-green-300 font-bold">
              The only roadmap that only goes up 📈
            </p>
            <p className="text-sm text-white/60 mt-2">
              No red candles allowed. Jeets get rekt. One JUSTAGUY to rule them all.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {greenCandlePhases.map((phase, index) => (
      <motion.div
                key={phase.phase}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative rounded-3xl border-2 border-green-500/30 bg-[#0f172a]/80 backdrop-blur-xl p-8 hover:border-green-500/60 transition-all group"
              >
                <div className="absolute inset-0 bg-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{phase.emoji}</div>
                  <div className="text-sm text-green-400 font-bold mb-2">{phase.phase}</div>
                  
                  {/* Progress Bar - Always Green */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-white/60 mb-2">
                      <span>Progress</span>
                      <span className="text-green-400 font-bold">{phase.progress}%</span>
        </div>
                    <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden border border-green-500/30">
              <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                                initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        style={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
                  />
        </div>
                      </div>

                  <ul className="space-y-3">
                    {phase.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="text-green-500 mt-1">🟩</span>
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
            <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-green-500" style={{ textShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}>
              How to Buy $JUSTAGUY
          </h2>
            <p className="text-xl text-green-300 font-bold">
              Get your green candles. Join the movement. 🟩
            </p>
      </motion.div>

                        <motion.div 
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border-2 border-green-500/30 bg-[#0f172a]/80 backdrop-blur-xl p-8 md:p-12"
          >
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-xl">
                  1
            </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-2">Get a Solana Wallet</h3>
                  <p className="text-white/80">
                    Download <span className="text-green-400 font-bold">Phantom</span> or <span className="text-green-400 font-bold">Solflare</span> wallet. These are the most popular Solana wallets. Make sure to keep your seed phrase safe!
                                  </p>
        </div>
      </div>
      
              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-xl">
                  2
            </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-2">Get Some SOL</h3>
                  <p className="text-white/80">
                    Buy <span className="text-green-400 font-bold">SOL</span> on an exchange (Coinbase, Binance, etc.) and send it to your Solana wallet. You'll need SOL for transaction fees and to buy $JUSTAGUY.
                  </p>
            </div>
        </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-2">Go to pump.fun</h3>
                  <p className="text-white/80 mb-3">
                    Visit <span className="text-green-400 font-bold">pump.fun</span> and connect your wallet. Search for "$JUSTAGUY" or use our contract address.
                  </p>
                  <div className="bg-black/50 rounded-xl p-4 border border-green-500/30">
                    <p className="text-xs text-white/60 mb-1">Contract Address:</p>
                    <p className="text-sm text-green-400 font-mono break-all">[Contract Address Here]</p>
        </div>
            </div>
        </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-xl">
                  4
                  </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-2">Buy $JUSTAGUY</h3>
                  <p className="text-white/80">
                    Enter the amount of SOL you want to swap for $JUSTAGUY. Click "Buy" and confirm the transaction in your wallet. Welcome to the greenest meme on Solana! 🟩
          </p>
        </div>
                </div>

              {/* CTA Button */}
              <div className="mt-8 pt-8 border-t border-green-500/30 text-center">
                <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-10 py-5 bg-green-500 hover:bg-green-400 text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-green-500/50 flex items-center gap-3 mx-auto"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                    Buy $JUSTAGUY on pump.fun
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

      {/* Gallery Section - Section 4 */}
      <section id="gallery" className="relative py-32 md:py-40 px-4 md:px-8 z-10 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bangers mb-4 text-green-500" style={{ textShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}>
              The JUSTAGUY Gallery
          </h2>
            <p className="text-lg text-white/60">
              All the JUSTAGUYs. All the green. All the memes.
          </p>
                    </motion.div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-4 gap-4">
            {galleryImages.slice(0, visibleImages).map((image, index) => (
                        <motion.div 
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="mb-4 break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 border-2 border-black group-hover:border-green-500 transition-all duration-300 rounded-2xl z-10" />
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl z-10" />
            <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10" />
            </motion.div>
          ))}
                            </div>

          {/* Load More */}
          {visibleImages < galleryImages.length && (
            <div className="text-center mt-12">
              <motion.button
                onClick={() => setVisibleImages(prev => Math.min(prev + 12, galleryImages.length))}
                className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all shadow-lg shadow-green-500/50"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                Load More JUSTAGUYs
              </motion.button>
          </div>
          )}
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
            className="rounded-3xl border-2 border-green-500/30 bg-[#0f172a]/80 backdrop-blur-xl p-12"
          >
            <h2 className="text-4xl md:text-6xl font-bangers mb-6 text-green-500" style={{ textShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}>
              Become a JUSTAGUY
          </h2>
            <p className="text-xl text-white/80 mb-8">
              Join the greenest meme on Solana. The chart only goes up. No red candles. Just green. 🟩
            </p>
            <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-10 py-5 bg-green-500 hover:bg-green-400 text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-green-500/50 flex items-center gap-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BUY $JUSTAGUY NOW
                <ArrowRight className="w-5 h-5" />
              </motion.button>
          </Link>
            <p className="text-sm text-white/60 mt-6">
              *Jeets not welcome. Red candles not allowed. Only green. Only JUSTAGUY.
            </p>
            </motion.div>
        </div>
    </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-green-500/20 bg-[#0f172a] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-6 py-2 bg-green-500 hover:bg-green-400 text-black font-bold text-sm rounded-full transition-all shadow-lg shadow-green-500/50 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUY $JUSTAGUY
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="https://x.com/TherealGUYonSOL" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-6 py-2 bg-black/80 hover:bg-black/90 text-white font-bold text-sm rounded-full transition-all border-2 border-green-500/50 hover:border-green-500 flex items-center gap-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-4 h-4" />
                  Follow on X
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
                Only invest what you can afford to lose. The chart only goes up until it doesn't. 🟩
              </p>
    </div>
            </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-green-500/10 text-center">
            <p className="text-xs text-white/40">
              © 2024 JUSTAGUY. All rights reserved. No red candles allowed.
            </p>
            </div>
            </div>
      </footer>
        </div>
  );
}
