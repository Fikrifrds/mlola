import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mlola - Solusi AI & Otomasi Bisnis Indonesia | RAG System, ChatGPT Integration",
  description: "Penyedia solusi AI terpercaya untuk bisnis Indonesia. Layanan otomasi bisnis, RAG system, integrasi ChatGPT, dan analisis data. Melayani Jakarta, Surabaya, Bandung. Konsultasi gratis!",
  keywords: "solusi AI Indonesia, otomasi bisnis Indonesia, RAG system Indonesia, ChatGPT integration Indonesia, AI consultant Jakarta, business automation Surabaya, data analytics Bandung",
  authors: [{ name: "Mlola Indonesia" }],
  creator: "Mlola Indonesia",
  publisher: "Mlola Indonesia",
  robots: "index, follow",
  openGraph: {
    title: "Mlola - Solusi AI & Otomasi Bisnis Indonesia",
    description: "Penyedia solusi AI terpercaya untuk bisnis Indonesia. RAG system, otomasi bisnis, integrasi ChatGPT, dan analisis data.",
    url: "https://mlola.com",
    siteName: "Mlola Indonesia",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://mlola.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mlola - Solusi AI Indonesia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mlola - Solusi AI & Otomasi Bisnis Indonesia", 
    description: "Penyedia solusi AI terpercaya untuk bisnis Indonesia. RAG system, otomasi bisnis, integrasi ChatGPT.",
    images: ["https://mlola.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://mlola.com"
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}