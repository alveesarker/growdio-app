import type { Metadata } from "next";
import { Roboto, Outfit } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavbarDemo/NavbarDemo";

const robot_init = Roboto({ subsets: ["latin"], weight: ["100", "300", "700"], variable: '--font-roboto' });
const outfit_init = Outfit({ subsets: ["latin"], weight: ["100", "300", "700"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Growdio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarDemo />
        <main>{children}</main>
      </body>
    </html>
  );
}
