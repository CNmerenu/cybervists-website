import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybervists | Digital Literacy | Cybersecurity Inclusion",
  description: "Digital Literacy & Cybersecurity Inclusion",
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <div className="min-h-screen flex flex-col w-full items-center overflow-x-hidden">
          <Header />
          <main className="w-full h-full flex flex-col items-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
