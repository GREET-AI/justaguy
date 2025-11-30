"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "/" },
  { label: "About JUSTAGUY", href: "/about" },
  { label: "Chart", href: "#chart" },
  { label: "How to Buy", href: "#how-to-buy" },
  { label: "Gallery", href: "#gallery" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-green-500 bg-[#0f172a]/90 backdrop-blur-xl transition-all md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6 text-green-500" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-64 border-l-2 border-green-500/50 bg-[#0f172a] backdrop-blur-2xl md:hidden shadow-2xl"
            >
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <h1 className="text-xl font-bold text-green-500" style={{ textShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}>
                      JUSTAGUY
                    </h1>
                  </Link>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-green-500/50 bg-[#0f172a] transition hover:bg-green-500/20"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-green-500" />
                  </motion.button>
                </div>

                <nav className="flex-1 space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-white/80 hover:text-green-400 hover:bg-green-500/10 rounded-xl transition-colors border border-transparent hover:border-green-500/30"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto"
                >
                  <Link
                    href="https://pump.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all shadow-lg shadow-green-500/50"
                  >
                    BUY $JUSTAGUY
                  </Link>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
