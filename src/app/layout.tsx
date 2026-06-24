import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { SITE, STRUCTURED_DATA } from "@/lib/site";

// Self-hosted at build time by next/font — no runtime requests to Google.
// `preload` injects <link rel="preload"> for the font with crossorigin, and
// the fallback-metric adjustment (on by default) prevents layout shift.
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-work-sans",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a192f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Yash Vekaria",
    "front-end",
    "software engineer",
    "front-end developer",
    "web developer",
    "UI/UX",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: "Yash Vekaria Portfolio",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Yash Vekaria — Front-end Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@yashvekaria",
    site: "@yashvekaria",
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: SITE.icon },
      { url: SITE.icon, type: "image/png" },
    ],
    shortcut: SITE.icon,
    apple: SITE.icon,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: SITE.icon,
    },
  },
};

// Applies the saved/preferred theme before first paint to avoid a flash of the
// wrong theme. Mirrors the resolution order used by ThemeSwitch.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){if(window.matchMedia('(prefers-color-scheme: dark)').matches){t='dark';}else{var h=new Date().getHours();t=(h>=19||h<=7)?'dark':'light';}localStorage.setItem('theme',t);}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark font-sans transition-colors duration-250 ease-custom">
        {children}
      </body>
    </html>
  );
}
