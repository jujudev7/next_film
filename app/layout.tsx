import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { MediaProvider } from "./context/MediaContext"; // Importation du contexte
import "./globals.css";

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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <div className="min-h-screen flex flex-col">
          {" "}
          {/* Flex container pour l'écran complet */}
          <div className="flex-grow">
            <div className="max-w-[1200px] mx-auto pt-2">
              <MediaProvider>
                <Navbar />
                {children} {/* Contenu principal, qui s'étend si nécessaire */}
              </MediaProvider>
            </div>
          </div>
          <footer className="flex justify-center text-slate-200 my-6">
            Développé avec ❤️ par{" "}
            <Link href="https://www.linkedin.com/in/developpeur-react-next-js-tailwind-frontend-julien-penna/">
              <span className="hover:text-rougevif ml-1">Julien Penna</span>
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}

