import Navbar from "@/myComponents/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umer Yasir",
  description: "personal portfolio umer yasir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='{inter.className} scroll-smooth'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
