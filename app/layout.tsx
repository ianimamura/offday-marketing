import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OffDay — Organize Sports. Collect Payments. Play More.",
  description:
    "The all-in-one tool for pickup games. Invite players, set a price (min $1), and automate your payouts. No more Venmo chasing.",
  openGraph: {
    title: "OffDay — Organize Sports. Collect Payments. Play More.",
    description:
      "The all-in-one tool for pickup games. Invite players, set a price (min $1), and automate your payouts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
