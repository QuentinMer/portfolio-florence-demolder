"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="font-cormorant font-semibold">
      <ul className="mx-2 my-5 flex flex-row justify-center md:justify-between items-center">
        <li className="hidden md:block">
          <Link 
            className={`flex flex-row items-center gap-3 ${pathname === "/" ? "font-semibold italic underline" : ""}`} 
            href="/"
          >
           <span>Accueil</span>
          </Link>
        </li>
        <li className="absolute top-1  md:hidden">
          <Link 
            className={`flex flex-row items-center gap-3 ${pathname === "/" ? "font-semibold italic underline" : ""}`} 
            href="/"
          >
           <span>Accueil</span>
          </Link>
        </li>
        <li>
          <ul className="flex flex-row justify-end gap-4 md:mt-0 mt-2">
            <li>
              <Link 
                className={pathname === "/apropos" ? "font-semibold italic underline" : ""} 
                href="/apropos"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link 
                className={pathname === "/inspiration" ? "font-semibold italic underline" : ""} 
                href="/inspiration"
              >
                Inspirations
              </Link>
            </li>
            <li>
              <Link 
                className={pathname === "/realisation" ? "font-semibold italic underline" : ""} 
                href="/realisation"
              >
                Réalisations
              </Link>
            </li>
            <li>
              <Link 
                className={pathname === "/contact" ? "font-semibold italic underline" : ""} 
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
