import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a192f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yash.vekaria.in"),
  title: "Yash Vekaria | Front-end Software Engineer",
  description:
    "Yash Vekaria is a design-minded front-end software engineer focused on building beautiful interfaces & experiences",
  keywords: [
    "Yash Vekaria",
    "front-end",
    "software engineer",
    "web developer",
    "UI/UX",
    "React",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Yash Vekaria", url: "https://yash.vekaria.in" }],
  creator: "Yash Vekaria",
  publisher: "Yash Vekaria",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yash.vekaria.in",
    title: "Yash Vekaria | Front-end Software Engineer",
    description:
      "Yash Vekaria is a design-minded front-end software engineer focused on building beautiful interfaces & experiences",
    siteName: "Yash Vekaria Portfolio",
    images: [
      {
        url: "/img/og.png",
        width: 1200,
        height: 630,
        alt: "Yash Vekaria Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Vekaria | Front-end Software Engineer",
    description:
      "Yash Vekaria is a design-minded front-end software engineer focused on building beautiful interfaces & experiences",
    creator: "@yashvekaria",
    images: ["/img/og.png"],
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
      { url: "/img/logo/logo1.png" },
      { url: "/img/logo/logo1.png", type: "image/png" },
    ],
    shortcut: "/img/logo/logo1.png",
    apple: "/img/logo/logo1.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img/logo/logo1.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div id="site">{children}</div>
      </body>
    </html>
  );
}
