import type { Metadata } from "next";
import { Sora } from "@next/font/google";

import "./globals.css";
import ThemeProvider from "@/components/utils/ThemeProvider";

const sora = Sora({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celler website",
  description: "Celler - Trade The Crypto That Coins Your Dreams",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "/thumbnail.png", // Update with the correct path to your thumbnail
        width: 384,
        height: 192,
        alt: "Celler website thumbnail",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${sora.className} bg-[#0C0D1D]`}>
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
