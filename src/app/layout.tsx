import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Bangers } from "next/font/google";
import "./globals.css";
import { TopNavbar } from "./components/TopNavbar";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { CryptoBackground } from "./components/CryptoBackground";

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
  title: "$GENNY · One Cycle. One Legacy.",
  description:
    "The generational wealth speedrun. Conviction > noise. One cycle can change a bloodline. $GENNY.",
  keywords: [
    "GENNY",
    "$GENNY",
    "generational wealth",
    "crypto",
    "memecoin",
    "community",
    "legacy",
    "cycle"
  ],
  authors: [{ name: "GENNY" }],
  creator: "GENNY",
  publisher: "GENNY",
  
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
    url: SITE_URL,
    siteName: "GENNY",
    title: "$GENNY · One Cycle. One Legacy.",
    description:
      "The generational wealth speedrun. Conviction > noise. One cycle can change a bloodline. $GENNY.",
    images: [
      {
        url: "/Website/Logo/logo.png",
        width: 1200,
        height: 630,
        alt: "GENNY",
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@GENNY",
    creator: "@GENNY",
    title: "$GENNY · One Cycle. One Legacy.",
    description:
      "The generational wealth speedrun. Conviction > noise. One cycle can change a bloodline. $GENNY.",
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
  metadataBase: new URL(SITE_URL),
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
