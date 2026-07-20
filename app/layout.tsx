import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northstar Market",
  description: "A basic ecommerce storefront built with Next.js, Tailwind CSS, and JSON-backed data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}