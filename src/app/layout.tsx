import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { LanguageProvider } from "../content/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Achrourou | محمد أشرورو — Khémisset Oulmès",
  description:
    "Parcours professionnel, expérience politique, activité parlementaire et initiatives locales de Mohamed Achrourou.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr" className={`${inter.variable} ${notoSansArabic.variable}`}>
      <body className="flex flex-col min-h-screen font-sans">
        <LanguageProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}