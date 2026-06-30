import type { Metadata, Viewport } from "next";
import { Sora } from "@next/font/google";

import "./globals.css";
import ThemeProvider from "@/components/utils/ThemeProvider";
import Script from "next/script";

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
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // optional
  themeColor: "#0C0D1D", // matches your brand color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J8N4VR4BTT"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J8N4VR4BTT');
          `}
        </Script>

        {/* x (twitter) conversion tracking */}
        <Script id="x-conversion" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','r2adg');
          `}
        </Script>

        {/* snap pixel */}
        <Script id="snap-pixel" strategy="afterInteractive">
          {`
            (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
            {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
            a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
            r.src=n;var u=t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r,u);})(window,document,'https://sc-static.net/scevent.min.js');
            snaptr('init', 'd0b0c9f4-719b-4874-b296-c76366bbbbd1', {});
            snaptr('track', 'PAGE_VIEW');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1022249013667294');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={` ${sora.className} bg-[#0C0D1D]`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1022249013667294&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
