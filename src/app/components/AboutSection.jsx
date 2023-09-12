"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about4.jpeg"
          className="rounded-md"
          width={500}
          height={500}
          alt="About"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, React Native, Redux Toolkit,
            TypeScript, NextJs, Express, NodeJs, MongoDB, Websockets, HTML,
            CSS(SCSS), and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            {/* <span
              onClick={() => handleTabChange("about")}
              className="mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer border-b-2 border-blue-500"
            >
              Skills
            </span> */}
            <span onClick={() => handleTabChange("education")}>Education</span>
            <span onClick={() => handleTabChange("experience")}>
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
