"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import { TabButton } from "./TabButton";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>TypeScript</li>
        <li>Redux Toolkit</li>
        <li>Tailwind</li>
        <li>REST API</li>
        <li>Bootstrap</li>
        <li>NextJs</li>
        <li>MongoDB</li>
        <li>NodeJs</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Binary Studio Academy</li>
        <li>Cyber Bionic Systematics</li>
        <li>National Technical University, Poltava, Ukraine</li>
      </ul>
    ),
  },
  {
    title: "Sertificates",
    id: "sertificates",
    content: (
      <ul className="pl-2 list-disc">
        <li>HTML5&CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("");
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
          className="rounded-md self-start"
          width={500}
          height={500}
          alt="About"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
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
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("sertificates")}
              active={tab === "sertificates"}
            >
              Sertificates
            </TabButton>
          </div>
          <div className="mt-8">
            {tabData.find((el) => el.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};
