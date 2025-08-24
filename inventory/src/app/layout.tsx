import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "OUTDO",
  description: "Discover OUTDO – your one-stop shop for outdoor gear, apparel, and accessories. Shop top brands, enjoy fast shipping, and elevate your adventure with our curated e-commerce experience.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <DashboardWrapper> {children}</DashboardWrapper>
      </body>
    </html>
  );
}
