import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Bangers } from "next/font/google";
import "./globals.css";
import { MobileNav } from "./components/MobileNav";
import { TopNavbar } from "./components/TopNavbar";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { BrandedAudioPlayer } from "./components/BrandedAudioPlayer";

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
  title: "JUSTAGUY · More than a $HANDGUY",
  description:
    "JUSTAGUY in a world full of green candles. The chart only goes up 🟩🟩🟩 - The greenest meme on Solana.",
  keywords: [
    "JUSTAGUY",
    "$JUSTAGUY",
    "Solana",
    "memecoin",
    "crypto",
    "green candles",
    "HANDGUY",
    "meme",
    "chart only goes up"
  ],
  authors: [{ name: "JUSTAGUY Team" }],
  creator: "JUSTAGUY",
  publisher: "JUSTAGUY",
  
  // Favicons und Icons
  icons: {
    icon: [
      { url: "/Website/Logo/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/Website/Logo/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/Website/Logo/logo.png",
    apple: "/Website/Logo/logo.png",
  },
  
  // Open Graph für Social Media (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justaguy.com",
    siteName: "JUSTAGUY",
    title: "JUSTAGUY · More than a $HANDGUY",
    description:
      "JUSTAGUY in a world full of green candles. The chart only goes up 🟩🟩🟩 - The greenest meme on Solana.",
    images: [
      {
        url: "/Website/Logo/logo.png",
        width: 1200,
        height: 630,
        alt: "The Great Rug Logo",
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@TherealGUYonSOL",
    creator: "@TherealGUYonSOL",
    title: "JUSTAGUY · More than a $HANDGUY",
    description:
      "JUSTAGUY in a world full of green candles. The chart only goes up 🟩🟩🟩 - The greenest meme on Solana.",
    images: ["/Website/Logo/logo.png"],
  },
  
  // Weitere Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // metadataBase für absolute URLs
  metadataBase: new URL("https://justaguy.com"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${bangers.variable} antialiased bg-[#0f172a] text-white`}
      >
        <MobileNav />
        <TopNavbar />
        <ScrollRestoration />
        <BrandedAudioPlayer />
        <div className="app-shell">
          <div className="app-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
