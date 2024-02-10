"use client";

import React, { useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "This is NextJs ecommerce project. Implemented displaying of a list of products, selection and viewing of a specific product, as well as the appearance of a modal window with a description of the product.",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/ecommere-marketplace",
    previewUrl: "https://ecommerce-iota-cyan.vercel.app/",
  },
  {
    id: 2,
    title: "Car rental",
    description:
      " This is NextJs project implements the ability to select a car for rent, pick it and observe all information about it,  you can search by type or model and filtr by fuel and year. Also pagination was added.",
    image: "/images/projects/car-rent.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/car_rental",
    previewUrl: "https://car-rental-tau-nine.vercel.app/",
  },
  {
    id: 3,
    title: "Travel App",
    description:
      "This is a simple React project, created with using TypeScript, Redux, RestAPI... where you can register or signin and choose travel wich you would prefer.",
    image: "/images/projects/travel-app.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://bitbucket.org/bineducation/lecture-starter-redux/src/master/",
    previewUrl:
      "https://lecture-starter-redux-2p9bx9fb7-oleksandr-makharadze.vercel.app/sign-in",
  },
  {
    id: 4,
    title: "Photo gallery",
    description:
      "Photo gallery website. You can select a photo and open it in a modal window in a larger size, also implemented searching and sorting by resort names. ",
    image: "/images/projects/galery.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/photo_gallery",
    previewUrl: "https://photo-gallery-saoa35.vercel.app/",
  },
  {
    id: 5,
    title: "Marketplace",
    description:
      "This is React Native mobile app marketplace when you can Sign Up or Sign In, after authorization you can see all the products, also you can add your own product and delete it, you can change your profile settings which include avatar, name and phone number.",
    image: "/images/projects/marketplace.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Saoa35/marketplace-mobile-app",
    previewUrl: "/",
  },
  // {
  //   id: 5,
  //   title: "Simple Chat",
  //   description:
  //     "This is a simple NodeJs, Socket.IO chat project, where you can register, and participate in simple conversation with other users. Multiple users can participate in a conversation at the same time.",
  //   image: "/images/projects/chat1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/Saoa35/Simple_Chat",
  //   previewUrl: "/",
  // },
  {
    id: 6,
    title: "MyJornyFinances",
    description:
      "This is a  React Native project. In this project was implemented firebase autorization and database.",
    image: "/images/projects/myJourney.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Saoa35/MyJornyFinances-mobile-app",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Burger Lord",
    description:
      "This is Burger restaurant website. It was created on Reactjs. Implemented the ability to select a burger, plus an addition to it, also implemented a basket, where the number of selected burgers and the total amount of the selected product are counted, sorting and search are also implemented.",
    image: "/images/projects/burger-lord.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/burger_lord",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "FastyFood",
    description:
      "Food ordering mobile app. This is a React Native project, bootstrapped using @react-native-community/cli.",
    image: "/images/projects/fastyfood.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Saoa35/FastyFood-mobile-app",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Travel-Blog",
    description:
      "This is the React, NodeJs fullstack project implements registration, authorization, writing an article, adding photos to it, with the ability to edit the article, also you can add likes and comments.",
    image: "/images/projects/travel-blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/Travel-Blog",
    previewUrl: "/",
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-2">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-4 mb-2">
        <ProjectTag
          onClick={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Mobile"}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: project.id * 0.4 }}
          >
            <ProjectCard
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
