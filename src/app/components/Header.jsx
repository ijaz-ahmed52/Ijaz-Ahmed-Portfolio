"use client"
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <header  className="w-full bg-[#0F172A] text-white flex items-center justify-between px-6 py-4 relative">
     <Logo/>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 text-gray-300 ">
          {links.map((link) => {
            const id = link.toLowerCase();
           return(
             <Link
            href={`#${id}`}
              key={link}
              className="hover:text-[#38BDF8] transition cursor-pointer"
            >
              {link}
            </Link>
           )
          })}
        </ul>
      </nav>

      <button className="bg-[#38BDF8] text-black px-4 py-2 rounded-lg hover:bg-[#0EA5E9] transition hidden md:block">
        Resume
      </button>

      <button className="text-3xl md:hidden z-50" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1E293B] md:hidden shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
            {links.map((link) => {
                const id = link.toLowerCase();
              return(
                <li
              href={`#${id}`}
              key={link}
                className="hover:text-[#38BDF8] transition cursor-pointer text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </li>
              )
            })}
            <li onClick={() => setMenuOpen(false)}>
              <button className="bg-[#38BDF8] text-black px-4 py-2 rounded-lg hover:bg-[#0EA5E9] transition ">
                Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
