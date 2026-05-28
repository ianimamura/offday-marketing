import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OffDay | Organize, Earn and Play on your OffDay",
  description:
    "The all-in-one platform to host local pickup games, split costs automatically, and play with reliable local players.",
  openGraph: {
    title: "OffDay | Organize, Earn and Play on your OffDay",
    description:
      "Host local pickup games, split costs automatically, and play with reliable local players.",
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
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
