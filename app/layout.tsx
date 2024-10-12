import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Noto_Sans_Display } from "next/font/google"
import "./globals.css";



import {
  ClerkProvider,
} from '@clerk/nextjs'

const noto = Noto_Sans_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rick & Morty | Dashbord",
  description: "Rick and Morty Dashbord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={noto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
