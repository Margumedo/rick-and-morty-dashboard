import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Noto_Sans_Display } from "next/font/google"
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={noto.className}

      >
        {children}
      </body>
    </html>
  );
}
