import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Trucking Vault - FMCSA-Certified CDL Training",
  description: "Get your CDL license with expert-led, FMCSA-certified training. Master the road, launch your career, and unlock high-paying opportunities.",
  keywords: "CDL training, FMCSA certified, trucking school, ELDT, Class A CDL, Class B CDL, dispatch training, trucking business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
