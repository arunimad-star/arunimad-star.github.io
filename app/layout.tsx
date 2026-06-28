import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arunima Deval",
  description: "Researcher and investor at UC Berkeley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.variable} h-full`}>
      <body className="min-h-full bg-[#FDFCF8] text-stone-900 antialiased font-[family-name:var(--font-garamond)]">
        {children}
      </body>
    </html>
  );
}
