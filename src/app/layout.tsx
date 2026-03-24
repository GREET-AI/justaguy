import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Bangers } from "next/font/google";
import "./globals.css";
import { TopNavbar } from "./components/TopNavbar";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { CryptoBackground } from "./components/CryptoBackground";
import {
  TOKEN_MINT,
  TOKEN_NAME,
  TOKEN_SYMBOL,
  BUY_URL,
  COIN_IMAGE_URL,
  META_DESCRIPTION,
  META_TITLE,
  TWITTER_HANDLE,
} from "@/config/token";

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

function normalizeSiteUrl(input: string | undefined) {
  const value = input?.trim();
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value.replace(/^http:\/\//i, "https://");
  return `https://${value}`;
}

const SITE_URL =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
  normalizeSiteUrl(process.env.VERCEL_URL) ||
  "https://example.com";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  applicationName: TOKEN_NAME,
  keywords: [
    "everything",
    "everything to make it",
    TOKEN_SYMBOL,
    TOKEN_NAME,
    TOKEN_MINT,
    "pump.fun",
    "Pump fun",
    "Solana",
    "SPL",
    "memecoin",
    "crypto",
  ],
  authors: [{ name: TOKEN_NAME, url: BUY_URL }],
  creator: TWITTER_HANDLE,
  publisher: TOKEN_NAME,

  alternates: {
    canonical: "/",
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: COIN_IMAGE_URL },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: COIN_IMAGE_URL, sizes: "180x180" }],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: TOKEN_NAME,
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: COIN_IMAGE_URL,
        width: 1200,
        height: 1200,
        alt: `${TOKEN_NAME} — ${TOKEN_SYMBOL} · Solana`,
      },
      {
        url: "/everything.avif",
        width: 1200,
        height: 1200,
        alt: TOKEN_NAME,
        type: "image/avif",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [COIN_IMAGE_URL],
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
  metadataBase: new URL(SITE_URL),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0c09" },
    { media: "(prefers-color-scheme: light)", color: "#131812" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${bangers.variable} antialiased bg-brand-panel text-white`}
      >
        <CryptoBackground />
        <TopNavbar />
        <ScrollRestoration />
        <div className="app-shell">
          <div className="app-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
