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
  title: "Mlola - Solusi AI & Otomasi Bisnis | RAG System, ChatGPT Integration",
  description: "Penyedia solusi AI terpercaya untuk bisnis. Layanan otomasi bisnis, RAG system, integrasi ChatGPT, dan analisis data. Konsultasi gratis!",
  keywords: "solusi AI, otomasi bisnis, RAG system, ChatGPT integration, AI consultant, business automation, data analytics",
  authors: [{ name: "Mlola" }],
  creator: "Mlola",
  publisher: "Mlola",
  robots: "index, follow",
  openGraph: {
    title: "Mlola - Solusi AI & Otomasi Bisnis",
    description: "Penyedia solusi AI terpercaya untuk bisnis. RAG system, otomasi bisnis, integrasi ChatGPT, dan analisis data.",
    url: "https://mlola.com",
    siteName: "Mlola",
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Mlola - Solusi AI & Otomasi Bisnis", 
    description: "Penyedia solusi AI terpercaya untuk bisnis. RAG system, otomasi bisnis, integrasi ChatGPT."
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
