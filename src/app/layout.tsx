import type { Metadata } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "LES PSY — Agence de communication",
  description:
    "Agence de communication. Stratégie, identité, contenu — pour les marques qui refusent le bruit.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${instrument.variable} h-full`}>
      <body className="min-h-full bg-[#0b0b0b] text-psy-black antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
