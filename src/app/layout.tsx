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
  title: "Carmel Hospital | Excellence in Healthcare",
  description: "Experience premium, compassionate, and advanced medical care at Carmel Hospital, Aluva.",
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
