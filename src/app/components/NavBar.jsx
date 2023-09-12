import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="text-5xl text-white font-semibold" href="/">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex">
            {navLinks.map((link, id) => (
              <li key={id}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
