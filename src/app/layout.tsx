import type { Metadata } from "next";
import { Instrument_Serif, Geist_Mono, Space_Mono, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./home3.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { VisitTracker } from "@/components/VisitTracker";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexbatch.com"),
  title: "Apex Batch | Precision Manufacturing, Intelligent Living",
  description:
    "Your partner for high-precision batch manufacturing. CNC machining, sheet metal, injection molding, and more with ISO-certified quality.",
  icons: {
    icon: "https://apex-batch-images.s3.us-east-1.amazonaws.com/favicon.png",
    shortcut: "https://apex-batch-images.s3.us-east-1.amazonaws.com/favicon.png",
    apple: "https://apex-batch-images.s3.us-east-1.amazonaws.com/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geistMono.variable} ${spaceMono.variable} ${inter.variable} ${playfair.variable}`}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSZLBQMG');`}
        </Script>
      </head>
      <body className="antialiased home3-root">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSZLBQMG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <VisitTracker />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
