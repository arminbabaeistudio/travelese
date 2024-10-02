import "@/styles/globals.css";
import { Provider as Analytics } from "@travelese/events/client";
import { cn } from "@travelese/ui/cn";
import "@travelese/ui/globals.css";
import "@travelese/orbit/globals.css";
import { Toaster } from "@travelese/ui/toaster";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://app.travelese.ai"),
  title: "Travelese | Traveller Experience Management",
  description:
    "Automate travel tasks, stay organized, and make informed decisions effortlessly.",
  twitter: {
    title: "Travelese | Traveller Experience Management",
    description:
      "Automate travel tasks, stay organized, and make informed decisions effortlessly.",
    images: [
      {
        url: "https://cdn.midday.ai/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/opengraph-image.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  openGraph: {
    title: "Travelese | Traveller Experience Management",
    description:
      "Automate travel tasks, stay organized, and make informed decisions effortlessly.",
    url: "https://app.travelese.ai",
    siteName: "Travelese",
    images: [
      {
        url: "https://cdn.midday.ai/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/opengraph-image.jpg",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export const preferredRegion = ["fra1", "sfo1", "iad1"];
export const maxDuration = 60;

export default function Layout({
  children,
  params: { locale },
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "whitespace-pre-line overscroll-none",
        )}
      >
        <Providers locale={locale}>{children}</Providers>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
