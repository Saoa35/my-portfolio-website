import React from "react";

export const NavLink = ({ href, title }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavLinkClick = () => {
    scrollToSection(href);
  };

  return (
    <div
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
      onClick={handleNavLinkClick}
    >
      {title}
    </div>
  );
};
