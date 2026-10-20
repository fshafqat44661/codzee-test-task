import type { Metadata } from "next";
import { Montserrat, Outfit, Sora } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/** Closest free match to Wix `proxima-n-w01-reg` used on the marketing hero */
const proxima = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-proxima",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bell3 — Fuel the Creativity",
    template: "%s | Bell3",
  },
  description:
    "Experience the power of social crowdfunding. Connect, share, get inspired, and support like-minded creators on Bell3.",
  metadataBase: new URL("https://www.bell3.net"),
  openGraph: {
    title: "Bell3 — Fuel the Creativity",
    description:
      "Social crowdfunding for content creators. Connect, share, and support.",
    url: "https://www.bell3.net",
    siteName: "Bell3",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${sora.variable} ${proxima.variable}`}
    >
      <body className="min-h-screen font-body antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
