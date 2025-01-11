import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "0x6A6471",
  description: "0x6A6471",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className="bg-gray-1000 text-gray-50">{children}</body>
    </html>
  );
}
