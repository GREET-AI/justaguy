"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "/" },
  { label: "About $GENNY", href: "/about" },
  { label: "Thesis", href: "/#thesis" },
  { label: "How to Buy", href: "/#how-to-buy" },
  { label: "Meme Machine", href: "/#meme-machine" },
];

const BUY_URL =
  "https://pump.fun/coin/BLUqNbyTuzVJK57odsLwVv2d2582LfdsgqBr3CF9pump";

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
          scrolled ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-[#fcc32a]/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.h1
                className="text-2xl font-bold text-[#fcc32a]"
                style={{ textShadow: "0 0 20px rgba(252, 195, 42, 0.5)" }}
                whileHover={{ scale: 1.05 }}
              >
                GENNY
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
                        ? "text-[#fcc32a]"
                        : "text-white/80 hover:text-[#fcc32a]"
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
                  className="px-6 py-3 bg-[#fcc32a] hover:bg-[#fdd85c] text-black font-bold rounded-full transition-all shadow-lg shadow-[#fcc32a]/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUY $GENNY
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
        className="fixed top-0 left-0 right-0 z-[55] md:hidden bg-[#0f172a]/90 backdrop-blur-xl border-b border-[#fcc32a]/20"
      >
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/">
            <h1 className="text-xl font-bold text-[#fcc32a]">GENNY</h1>
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
            className="fixed top-16 right-0 h-full w-64 bg-[#0f172a] border-l-2 border-[#fcc32a]/50 shadow-2xl z-[55]"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-[#fcc32a] transition-colors py-2"
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
                  className="px-6 py-3 bg-[#fcc32a] hover:bg-[#fdd85c] text-black font-bold rounded-full text-center transition-all"
                >
                  BUY $GENNY
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
