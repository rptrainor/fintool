import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import { cn } from "~/lib/utils"
import { SideSheet } from "~/components/SideSheet"
import { QueryCounter } from "~/components/QueryCounter"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background_primary h-full w-full">
      <body className={cn(
        "font-sans antialiased text-lg bg-tree relative h-screen w-screen overflow-hidden",
        fontSans.variable
      )}>
        <div className="bg-gradient-overlay">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex w-full justify-between items-center p-4">
            <SideSheet />
            <QueryCounter />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
