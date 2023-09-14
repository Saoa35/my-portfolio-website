"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left sm:mr-4"
        >
          <h1 className="text-white h-28 sm:h-36 lg:h-44 xl:h-fit mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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
            Web development, creation, learning new technology and implementing
            them into live is a passion.
          </p>
          <div>
            {/* <button className="px-6 py-3 rounded-full w-[70%] sm:w-fit mr-4 bg-gradient-to-br from-blue-400 to-blue-900 hover:opacity-90 hover:scale-110 text-white">
              Hire Me
            </button> */}
            <button className="mt-3 px-1 py-1 rounded-full w-[70%] sm:w-fit bg-gradient-to-br from-blue-400 to-blue-900 hover:scale-110 hover:bg-slate-900 text-white">
              <Link
                href="https://drive.google.com/file/d/1k6XY-PbUHFJkLZTzJirJmXtoCqtxb6yO/view?usp=sharing"
                className="block bg-[#121212] hover:bg-slate-700 rounded-full px-5 py-2"
              >
                Download CV
              </Link>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hacker.png"
              alt="Portfolio Avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
