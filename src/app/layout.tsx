import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prithvi - Builder & Engineer",
  description: "I build scalable systems, tools, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-primary">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 lg:px-24 pb-20 pt-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
