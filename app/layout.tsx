import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import FocusTrap from "@mui/material/Unstable_TrapFocus";
import Footer from "@/components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUNANKA GROUP OF COMPANIES",
  description: "Premier supplier of Melamine boards and industrial hardware.",
  icons: {
    icon: "/logo.jpeg", // This looks for logo.jpeg inside your 'public' folder
    apple: "/logo.jpeg", // Optional: for mobile home screens
  },
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
        <Navbar/>
        <main>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}