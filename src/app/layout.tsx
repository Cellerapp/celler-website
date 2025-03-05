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
  title: "Celler - The magic of trading digital assets",
  description:
    "Celler is a secure and user-friendly platform for buying, selling, and managing digital assets. Available soon on Play Store and App Store.",
  keywords:
    "cryptocurrency, crypto trading, digital assets, crypto wallet, Celler app",
  authors: [{ name: "Celler" }],
  creator: "Celler",
  publisher: "Tampay by CQ LTD",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://celler.app/", // Replace with your actual domain
    siteName: "Celler",
    title: "Celler - The magic of trading digital assets",
    description: "Celler is coming soon on Play Store and App Store",
    images: [
      {
        url: "/thumbnail.png", // Update this path
        width: 1200,
        height: 630,
        alt: "Celler - The magic of trading digital assets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celler - The magic of trading digital assets",
    description:
      "Celler is a secure and user-friendly platform for buying, selling, and managing cryptocurrencies. Available soon on Play Store and App Store.",
    images: ["/thumbnail.png"], // Update this path
    creator: "@celler", // Update with your Twitter handle
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
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
