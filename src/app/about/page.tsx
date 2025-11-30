"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const crewParagraphs = [
  "Meet the Dev Crew behind Jus a GUY – the same team that built Handguy Token (3AvXA85wtW4UdAk1mnJsncGKvfEngsTypC9nybZJbonk), a project that nearly hit 2 million market cap and proved we know how to deliver.",
  "We're not new to this game. Handguy Token was our first major success on Solana, showing the crypto world what happens when a dedicated dev team actually delivers on their promises instead of pulling rugs.",
  "The Handguy journey taught us everything: how to build community trust, how to execute launches properly, how to maintain momentum, and most importantly – how to never rug our holders. That token reached almost $2M market cap because we did things right from day one.",
  "Now we're back with Jus a GUY. Same team, same commitment, bigger vision. We've learned from every trade, every holder interaction, every market cycle. This isn't our first rodeo – it's our evolution.",
  "Our team consists of experienced developers, marketers, and community managers who've been in the Solana space since the early days. We've seen all the scams, all the rugs, all the broken promises. That's exactly why we do things differently.",
  "Every member of this crew was involved in the Handguy Token project. We're not hiding behind anonymity – we're building transparently, delivering consistently, and proving that memecoins can be both fun AND trustworthy.",
];

const missionParagraphs = [
  "After Handguy's success, we asked ourselves: what's next? How do we take what we learned and build something even better?",
  "Jus a GUY is our answer. Same proven team, same commitment to never rugging, but with an even stronger community focus and clearer vision.",
  "We're not here to pump and dump. We're here to build something that lasts. Handguy proved we can deliver – now Jus a GUY will prove we can scale.",
];

const visionParagraphs = [
  "The Handguy Token experience showed us that the Solana community is hungry for projects that actually deliver. Not promises, not roadmaps full of lies – real execution.",
  "With Jus a GUY, we're taking everything that worked with Handguy and making it better. Better tokenomics, better community engagement, better long-term vision.",
  "Our goal? Build the most trusted memecoin on Solana. One that holders can actually believe in. One that doesn't disappear after launch. One that grows organically because the team actually cares.",
  "The Handguy crew is all in on Jus a GUY. We're not going anywhere. We're building for the long term, and we're doing it with the same team that brought you Handguy's success.",
];

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
          <p className="section-eyebrow">Jus a GUY · Built by the Handguy Crew</p>
          <h1 className="section-title mb-8">About the Crew</h1>
          {crewParagraphs.map((paragraph, index) => (
            <MotionText key={paragraph} index={index}>
              {paragraph}
            </MotionText>
          ))}
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
            <p className="text-sm font-semibold text-white/90 mb-2">Handguy Token Achievement</p>
            <p className="text-base text-white/80">
              Contract: <span className="font-mono text-[#14F195]">3AvXA85wtW4UdAk1mnJsncGKvfEngsTypC9nybZJbonk</span>
            </p>
            <p className="text-base text-white/80">
              Peak Market Cap: <span className="font-semibold text-[#14F195]">~$2,000,000</span>
            </p>
            <p className="text-sm text-white/70 mt-4">
              The same team that built Handguy is now building Jus a GUY. We've proven we can deliver. Now we're proving we can do it even better.
            </p>
          </div>
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
