import React from "react";

export const NavLink = ({ href, title }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
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
