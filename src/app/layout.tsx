import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://carmelhospital.org'),
  title: {
    default: "Carmel Hospital | Excellence in Healthcare",
    template: "%s | Carmel Hospital"
  },
  description: "Experience premium, compassionate, and advanced medical care at Carmel Hospital, Aluva. Trusted healthcare excellence since 1965.",
  keywords: ["Carmel Hospital", "Aluva Hospital", "Kerala Healthcare", "Cardiology Kerala", "Best Hospital in Aluva", "Emergency Care Kerala"],
  openGraph: {
    title: "Carmel Hospital | Excellence in Healthcare",
    description: "Experience premium, compassionate, and advanced medical care at Carmel Hospital, Aluva.",
    url: "https://carmelhospital.org",
    siteName: "Carmel Hospital",
    images: [
      {
        url: "/hero_slideshow/eb-website-image-hero-3840x2560.webp",
        width: 1200,
        height: 630,
        alt: "Carmel Hospital Aluva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lato.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans bg-background text-foreground selection:bg-secondary selection:text-primary" suppressHydrationWarning>
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
