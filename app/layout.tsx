import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian | Secure Digital Credentials & Verification Platform",
  description: "Accredian is a modern digital credentialing platform for universities, enterprises, and online bootcamps. Secure, instant verification of academic and professional achievements.",
  keywords: ["credentialing", "digital verification", "certificate security", "degree verification", "academic transcript API"],
  authors: [{ name: "Accredian Inc." }],
  metadataBase: new URL("https://accredian.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Accredian | Secure Digital Credentials & Verification Platform",
    description: "Issue, manage, and verify secure digital achievements instantly with W3C-compliant verifiable credentials.",
    url: "https://accredian.vercel.app",
    siteName: "Accredian",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian | Secure Digital Credentials & Verification Platform",
    description: "Issue, manage, and verify secure digital achievements instantly.",
    creator: "@accredian",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50/20 text-slate-900 font-sans">
        <Toaster position="bottom-right" richColors closeButton />
        {children}
      </body>
    </html>
  );
}
