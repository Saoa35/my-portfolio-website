"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import SkypeIcon from "../../../public/skype.svg";
import TelegramIcon from "../../../public/telegram.svg";
import Link from "next/link";
import Image from "next/image";

export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contact me</h5>
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
          <Link
            href="https://t.me/Alexandr_Makharadze"
            className="hover:scale-110"
          >
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
        </div>
      </div>
      {/* <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              name="email"
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
              name="subject"
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
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full self-center"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-sm mt-2 text-green-500">
              Email sent successfuly!
            </p>
          )}
        </form>
      </div> */}
      <div className="z-10"></div>
    </section>
  );
};
