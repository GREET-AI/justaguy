"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { TOKEN_SYMBOL, BUY_URL } from "@/config/token";

const navLinks = [
  { label: "Overview", href: "/" },
  { label: `About ${TOKEN_SYMBOL}`, href: "/about" },
  { label: "Thesis", href: "/#thesis" },
  { label: "How to Buy", href: "/#how-to-buy" },
  { label: "Meme Machine", href: "/#meme-machine" },
];

export function TopNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          scrolled ? "bg-brand-panel/80 backdrop-blur-xl border-b border-brand-lime/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.h1
                className="text-2xl font-bold text-brand-lime"
                style={{ textShadow: "0 0 22px rgba(189, 253, 42, 0.5)" }}
                whileHover={{ scale: 1.05 }}
              >
                {TOKEN_SYMBOL}
              </motion.h1>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-brand-lime"
                        : "text-white/80 hover:text-brand-lime"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              {/* BUY Button */}
              <Link href={BUY_URL} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-6 py-3 bg-brand-lime hover:bg-brand-gold-soft text-black font-bold rounded-full transition-all shadow-lg shadow-[0_0_28px_rgba(189,253,42,0.4)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUY {TOKEN_SYMBOL}
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-[55] md:hidden bg-brand-panel/90 backdrop-blur-xl border-b border-brand-lime/20"
      >
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/">
            <h1 className="text-xl font-bold text-brand-lime">{TOKEN_SYMBOL}</h1>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-16 right-0 h-full w-64 bg-brand-panel border-l-2 border-brand-lime/50 shadow-2xl z-[55]"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-brand-lime transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href={BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 bg-brand-lime hover:bg-brand-gold-soft text-black font-bold rounded-full text-center transition-all"
                >
                  BUY {TOKEN_SYMBOL}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
