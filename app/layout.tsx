import type { Metadata } from "next";
import { Josefin_Sans, Manjari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ModeProvider from "./provider";
import Footer from "@/components/Footer";

const josefineSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefinsans",
});

const manjari = Manjari({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-manjari",
});

export const metadata: Metadata = {
  title: "Cristian Apaza - Web Dev",
  description: "Portfolio website generated with react and next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefineSans.variable} ${manjari.variable} font-sans relative`}
      >
        <ModeProvider>
          <Header />
            {children}
          <Footer />
        </ModeProvider>
      </body>
    </html>
  );
}
