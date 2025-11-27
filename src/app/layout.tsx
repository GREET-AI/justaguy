import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Bangers } from "next/font/google";
import "./globals.css";
import { MobileNav } from "./components/MobileNav";
import { TopNavbar } from "./components/TopNavbar";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { AudioPlayer } from "./components/AudioPlayer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "THE GREAT RUG · Solana Cinematic Memecoin",
  description:
    "BTC-2025: An original Solana TV Series. The first cinematic memecoin that tells a story. Join Trump, Elon, Solao, and the crew in the wildest crypto adventure on Solana.",
  icons: {
    icon: "/Website/Logo/logo.png",
    shortcut: "/Website/Logo/logo.png",
    apple: "/Website/Logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${bangers.variable} antialiased`}
      >
        <MobileNav />
        <TopNavbar />
        <ScrollRestoration />
        <AudioPlayer />
        <div className="app-shell">
          <div className="app-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
