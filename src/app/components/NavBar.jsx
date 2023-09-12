"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
  const [navBarOpen, setNavBarOpen] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="text-lg md:text-2xl text-white font-semibold" href="/">
          My portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          {navBarOpen ? (
            <button className="text-slate-200 flex items-center px-3 py-2 border rounded">
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button></button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
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
