"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900">
              Hello, I`m{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Oleksandr",
                2000,
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Front End developer with 1 year experience in web developing.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-[70%] sm:w-fit mr-4 bg-gradient-to-br from-blue-400 to-blue-900 hover:bg-slate-600 text-white">
              Hire Me
            </button>
            <button className="mt-3 px-1 py-1 rounded-full w-[70%] sm:w-fit bg-gradient-to-br from-blue-400 to-blue-900 hover:bg-slate-800 text-white">
              <span className="block bg-[#121212] hover:bg-slate-700 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hacker.png"
              alt="Portfolio Avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
