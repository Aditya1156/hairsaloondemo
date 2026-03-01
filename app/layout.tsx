import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Great_Vibes } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxe Hair Studio | Luxury Hair Experience Redefined",
  description:
    "Premium hair salon offering expert haircuts, coloring, styling, and bridal services. Experience luxury hair care with our certified professionals.",
  keywords: ["hair salon", "luxury salon", "haircut", "coloring", "bridal hair", "styling"],
  openGraph: {
    title: "Luxe Hair Studio | Luxury Hair Experience Redefined",
    description: "Premium hair salon offering expert haircuts, coloring, styling, and bridal services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
