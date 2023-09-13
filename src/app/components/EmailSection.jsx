import React from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import SkypeIcon from "../../../public/skype.svg";
import TelegramIcon from "../../../public/telegram.svg";
import Link from "next/link";
import Image from "next/image";

export const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Contact with me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities and I open for
          interesting proposals and ideas. Whether you have questions,
          suggestion, want to say Hi, or offer me a job, I would be glad to
          contact with you.
        </p>
        <div className="socials flex flex-row gap-6">
          <Link href="https://github.com/Saoa35">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://join.skype.com/invite/Akb6lZbgAL2D">
            <Image src={SkypeIcon} alt="Skype Icon" width={40} height={40} />
          </Link>
          <Link href="https://t.me/Alexandr_Makharadze">
            <Image
              src={TelegramIcon}
              alt="Telegram Icon"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/oleksandr-makharadze/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              required
              placeholder="youremail@mail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="Hello..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Message content..."
            />
          </div>
        </form>
      </div>
    </section>
  );
};
