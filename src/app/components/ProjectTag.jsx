import React from "react";

export const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-blue-500"
    : "text-[#ADB7BE] border-slate-500 hover:border-white hover:text-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-2 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};
