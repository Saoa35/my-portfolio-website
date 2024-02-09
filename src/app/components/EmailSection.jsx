"use client";

import React from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import SkypeIcon from "../../../public/skype.svg";
import TelegramIcon from "../../../public/telegram.svg";
import EmailIcon from "../../../public/email.svg";
import Link from "next/link";
import Image from "next/image";

export const EmailSection = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();

    window.location.href = "mailto:saoamah@gmail.com";
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2"></div>
      <div className="z-10">
        <h3 className="font-bold text-3xl text-white my-2">Contacts</h3>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities and I open for
          interesting proposals and ideas. Whether you have questions,
          suggestion, want to say Hi, or offer me a job, I would be glad to
          contact with you.
        </p>
        <div className="socials flex flex-row gap-6">
          <Link href="https://github.com/Saoa35" className="hover:scale-110">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link
            href="https://join.skype.com/invite/Akb6lZbgAL2D"
            className="hover:scale-110"
          >
            <Image src={SkypeIcon} alt="Skype Icon" width={40} height={40} />
          </Link>
          <Link href="https://t.me/Oleksandr_Mak" className="hover:scale-110">
            <Image
              src={TelegramIcon}
              alt="Telegram Icon"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/oleksandr-makharadze/"
            className="hover:scale-110"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="mailto:saoamah@gmail.com"
            className="hover:scale-110"
            onClick={handleEmailClick}
          >
            <Image src={EmailIcon} alt="Email Icon" width={40} height={40} />
          </Link>
        </div>
      </div>
      <div className="z-10 flex flex-col items-center mt-3">
        <Image
          src="/images/contact.jpg"
          className="rounded-lg"
          width={400}
          height={400}
          alt="Mail"
        />
      </div>
    </section>
  );
};
