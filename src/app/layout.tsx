import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Bangers } from "next/font/google";
import "./globals.css";
import { MobileNav } from "./components/MobileNav";
import { TopNavbar } from "./components/TopNavbar";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { WorkingAudioPlayer } from "./components/WorkingAudioPlayer";

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
  keywords: [
    "Solana",
    "memecoin",
    "crypto",
    "TV series",
    "Trump",
    "Elon Musk",
    "blockchain",
    "entertainment",
    "BTC-2025",
    "The Great Rug"
  ],
  authors: [{ name: "The Great Rug Team" }],
  creator: "Solao",
  publisher: "The Great Rug",
  
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
    url: "https://thegreatrug.com",
    siteName: "The Great Rug",
    title: "THE GREAT RUG · Solana Cinematic Memecoin",
    description:
      "BTC-2025: An original Solana TV Series. The first cinematic memecoin that tells a story. Join Trump, Elon, Solao, and the crew in the wildest crypto adventure on Solana.",
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
    site: "@Solaotherealone",
    creator: "@Solaotherealone",
    title: "THE GREAT RUG · Solana Cinematic Memecoin",
    description:
      "BTC-2025: An original Solana TV Series. The first cinematic memecoin that tells a story. Join Trump, Elon, Solao, and the crew in the wildest crypto adventure on Solana.",
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
  metadataBase: new URL("https://thegreatrug.com"),
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
        className={`${montserrat.variable} ${geistMono.variable} ${bangers.variable} antialiased`}
      >
        <MobileNav />
        <TopNavbar />
        <ScrollRestoration />
        <WorkingAudioPlayer />
        <div className="app-shell">
          <div className="app-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
