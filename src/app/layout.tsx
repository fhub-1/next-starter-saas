import type { Metadata } from "next";

import AppFooter from "@/components/app-footer";
import AppNavbar from "@/components/app-navbar";
import Providers from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next Js starter Template for my SaaS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
      />
      <body className="h-screen w-screen">
        <Providers>
          <AppNavbar />
          <main className="flex-grow">{children}</main>
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
