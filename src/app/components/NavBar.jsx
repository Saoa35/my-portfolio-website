import React from "react";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="text-5xl text-white font-semibold" href="/">
          LOGO
        </Link>
      </div>
    </nav>
  );
};
