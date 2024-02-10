"use client";

import React from "react";

export const Footer = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();

    window.location.href = "mailto:saoamah@gmail.com";
  };

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-16 gap-2 sm:gap-0 flex flex-col items-center sm:flex-row sm:justify-between ">
        <span className="text-slate-300">@ Web development 2024</span>
        <a
          href="mailto:saoamah@gmail.com"
          className="text-blue-900"
          onClick={handleEmailClick}
        >
          saoamah@gmail.com
        </a>
      </div>
    </footer>
  );
};
