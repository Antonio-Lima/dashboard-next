import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

import "@fontsource/public-sans";
import "@fontsource/public-sans/100.css";
import "@fontsource/public-sans/200.css";
import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/public-sans/800.css";
import "@fontsource/public-sans/900.css";

import "./globals.css";

import Header from "@/components/Header";

const font = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
