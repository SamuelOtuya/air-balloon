import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./components/Header/headerwrapper"; // Import the client component wrapper
import { Foot } from "./components/Footer/foot";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Two Dollars Tours",
  description: "TwoDollars is your affordable travel companion, offering convenient and budget-friendly rides for tourists exploring new destinations. Whether you're visiting iconic landmarks, hidden gems, or local attractions, our reliable air balloon rides ensure a hassle-free and enjoyable experience. Discover more while spending less!",
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
        <HeaderWrapper />
        {children}
        <Foot/>
        
      </body>
    </html>
  );
}