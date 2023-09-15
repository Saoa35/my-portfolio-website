import React from "react";

export const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col items-center sm:flex-row sm:justify-between ">
        <span className="text-slate-300">@ Web development 2023</span>
        <a href="mailto:saoamah@gmail.com" className="text-blue-900">
          saoamah@gmail.com
        </a>
      </div>
    </footer>
  );
};
