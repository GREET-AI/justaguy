"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Twitter } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "/" },
  { label: "About JUSTAGUY", href: "/about" },
  { label: "Chart", href: "#chart" },
  { label: "How to Buy", href: "#how-to-buy" },
  { label: "Gallery", href: "#gallery" },
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
          scrolled ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-green-500/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.h1
                className="text-2xl font-bold text-green-500"
                style={{ textShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
                whileHover={{ scale: 1.05 }}
              >
                JUSTAGUY
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
                        ? "text-green-500"
                        : "text-white/80 hover:text-green-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              {/* Follow on X Button */}
              <Link href="https://x.com/TherealGUYonSOL" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-4 py-2 bg-black/80 hover:bg-black/90 text-white font-bold text-sm rounded-full transition-all border-2 border-green-500/50 hover:border-green-500 flex items-center gap-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-4 h-4" />
                  Follow on X
                </motion.button>
              </Link>

              {/* BUY Button */}
              <Link href="https://pump.fun/coin/86YVEefRG6gEDLvzyB8BA4Lm3cZf8QGatQeM8mWdpump" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all shadow-lg shadow-green-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUY $JUSTAGUY
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
        className="fixed top-0 left-0 right-0 z-[55] md:hidden bg-[#0f172a]/90 backdrop-blur-xl border-b border-green-500/20"
      >
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/">
            <h1 className="text-xl font-bold text-green-500">Just a GUY</h1>
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
            className="fixed top-16 right-0 h-full w-64 bg-[#0f172a] border-l-2 border-green-500/50 shadow-2xl z-[55]"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-green-400 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="https://x.com/TherealGUYonSOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 bg-black/80 hover:bg-black/90 text-white font-bold text-sm rounded-full text-center transition-all border-2 border-green-500/50 hover:border-green-500 flex items-center justify-center gap-2"
                >
                  <Twitter className="w-4 h-4" />
                  Follow on X
                </Link>
                <Link
                  href="https://pump.fun/coin/86YVEefRG6gEDLvzyB8BA4Lm3cZf8QGatQeM8mWdpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full text-center transition-all"
                >
                  BUY $JUSTAGUY
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
