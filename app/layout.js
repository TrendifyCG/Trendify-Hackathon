import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import ProgressWrap from "./_components/ProgressWrap";
import Analytics from "./_components/Analytics";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://trendifier.vercel.app"),
  title: {
    template: "%s - Trendifier: ",
    default: "AI-Powered Content Generation Platform",
  },
  other: {
    keywords:
      "Trendifier, AI-powered content generation, content creation, Next.js, real-time streaming, content brief, hashtags, multi-niche content, digital marketing, blogging, content creators, AI tools, content automation, SEO content, marketing tools",
  },
  other: {
    author: "Precious Mbaekwe",
  },
  description:
    "Discover Trendifier, the ultimate AI-powered content generation platform. Effortlessly create engaging content without a database by providing a brief, optional hashtags, and selecting multiple niches. Experience seamless integration with Next.js and real-time streaming for optimal performance. Perfect for marketers, bloggers, and content creators.",
  openGraph: {
    title: "Trendifier: AI-Powered Content Generation Platform",
    description:
      "Discover Trendifier, the ultimate AI-powered content generation platform. Effortlessly create engaging content without a database by providing a brief, optional hashtags, and selecting multiple niches. Experience seamless integration with Next.js and real-time streaming for optimal performance. Perfect for marketers, bloggers, and content creators.",
    images: [
      {
        url: "https://trendifier.vercel.app/image/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thumbnail",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Trendifier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trendifier: AI-Powered Content Generation Platform",
    description:
      "Discover Trendifier, the ultimate AI-powered content generation platform. Effortlessly create engaging content without a database by providing a brief, optional hashtags, and selecting multiple niches. Experience seamless integration with Next.js and real-time streaming for optimal performance. Perfect for marketers, bloggers, and content creators.",
    images: ["https://trendifier.vercel.app/image/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-white flex flex-col min-h-screen`}
      >
        <Analytics />
        <Header />
        <main className="flex-1 py-12 grid w-full">
          <div className="container mx-auto">{children}</div>
        </main>
        <footer className="w-full py-4 text-white bg-primary-purple text-center">
          Copyright © 2024 The Win Team
        </footer>
        <ProgressWrap />
      </body>
    </html>
  );
}
