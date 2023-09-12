import Image from "next/image";
import React from "react";

export const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about4.jpeg" width={500} height={500} alt="About" />
        <div>
          <h2>About Me</h2>
          <p>
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, React Native, Redux Toolkit,
            TypeScript, NextJs, Express, NodeJs, MongoDB, Websockets, HTML,
            CSS(SCSS), and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};
