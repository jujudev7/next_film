import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import { MediaProvider } from "./context/MediaContext"; // Importation du contexte
import "./globals.css";
import type { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nextfilm",
  description:
    "Films & Séries aimées par Julien Penna, créateur de cette application en Next.js, TypeScript, Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <div className="max-w-[1200px] mx-auto pt-2">
          <MediaProvider>
            {" "}
            {/* Enveloppe tout avec MediaProvider */}
            <Navbar />
            {children}
          </MediaProvider>
        </div>
      </body>
    </html>
  );
}

