import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

import { cn } from "~/lib/utils"
import { SideSheet } from "~/components/SideSheet"
import { Button } from "~/components/ui/button"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import "./globals.css";
import {
  AlertTitle,
} from "~/components/ui/alert"

export const metadata: Metadata = {
  title: "Fintool: ChatGPT + EDGAR",
  description: "FintoolGPT: Harnessing ChatGPT & EDGAR for powerful AI analysis. Dive into SEC filings, earnings transcripts, and financial news. Top-tier chat-based insights from industry-leading data sources.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background_primary h-full w-screen">
      <body className={cn(
        "min-h-screen font-sans antialiased text-lg relative overflow-scroll bg-tree",
        fontSans.variable
      )}>
        <div className="bg-gradient-overlay">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex w-full justify-between items-center p-4">
              <SideSheet />
              <div className="flex items-center sm:gap-4 gap-2">

                <Button variant="secondary" size='sm'>
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  <AlertTitle className="hidden sm:block">Chat with</AlertTitle>
                  <AlertTitle className="">Support</AlertTitle>

                </Button>

                <Button size='sm'>
                  <AlertTitle>&#50; </AlertTitle>
                  <AlertTitle className="hidden sm:block">Free Questions</AlertTitle>
                  <AlertTitle>Left</AlertTitle>
                </Button>

              </div>
            </div>
            {children}
            <div className="bottom-4 fixed max-w-2xl mx-auto pl-4">
              <Button variant={"secondary"} className="rounded-full sm:px-1.5 sm:py-1.5 sm:h-12 sm:w-12 px-1 py-1 h-10 w-10">
                <ChatBubbleLeftRightIcon className="sm:h-6 sm:w-6 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}