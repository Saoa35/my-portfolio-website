import React from "react";
import { NavLink } from "./NavLink";

export const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex items-center justify-center">
      {links.map((link, id) => (
        <li key={id}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
