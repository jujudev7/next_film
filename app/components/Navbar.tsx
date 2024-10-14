"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { useMedia } from "../context/MediaContext";
import { Sort } from "./Sort";

const Navbar = () => {
  const pathname = usePathname(); // Utilisation de usePathname pour obtenir le chemin actuel
  const [isHomePage, setIsHomePage] = useState(true); // État local pour vérifier si nous sommes sur la page d'accueil
  const { handleSortChange } = useMedia(); // Récupère handleSortChange du contexte

  useEffect(() => {
    // Vérifier si nous sommes sur la page d'accueil après que le composant ait été monté
    setIsHomePage(pathname === "/");
  }, [pathname]); // Mettre à jour l'état lorsque le chemin change

  return (
    <div className="flex justify-between items-center mr-2">
      <Link href="/">
        <h1 className="text-3xl text-center font-bold mb-3">
          <Image
            src="/nextfilm_logo.svg"
            alt="Nextfilm"
            width={220}
            height={69}
            className="sm:ml-0 hover:scale-105"
            priority
          />
        </h1>
      </Link>
      {isHomePage ? (
        <Sort onSortChange={handleSortChange} />
      ) : (
        <Link href="/">
          <Button className="flex items-center justify-center px-4 py-2 mr-3 text-black bg-slate-300 rounded transition hover:text-white hover:bg-blue-700">
            Accueil
            <IoHome className="ml-2" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
