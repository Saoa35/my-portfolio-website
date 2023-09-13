"use client";

import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Travel-Blog",
    description:
      "The fullstack project implements registration, authorization, writing an article, adding photos to it, with the ability to edit the article, also you can add likes and comments. It was created by using technologies such as HTML, CSS, Tailwind, JS, React, ReactHooks, ReactRouterDom, ReduxToolkit, NodeJS, MongoDB.",
    image: "/images/projects/travel-blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/Travel-Blog",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Burger Lord",
    description:
      "This is Burger restaurant website. Implemented the ability to select a burger, plus an addition to it, also implemented a basket, where the number of selected burgers and the total amount of the selected product are counted, sorting and search are also implemented.",
    image: "/images/projects/burger-lord.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/burger_lord",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Marketplace",
    description:
      "This is mobile app marketplace when you can Sign Up or Sign In, after authorization you can see all the products, also you can add your own product and delete it, you can change your profile settings which include avatar, name and phone number.",
    image: "/images/projects/marketplace.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Saoa35/marketplace-mobile-app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Simple Chat",
    description:
      "This is a simple chat project, where you can register, and participate in simple conversation with other users. Multiple users can participate in a conversation at the same time.",
    image: "/images/projects/chat1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/Simple_Chat",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "MyJornyFinances",
    description:
      "This is a  React Native project. In this project was implemented firebase autorization and database.",
    image: "/images/projects/myJourney.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Saoa35/MyJornyFinances-mobile-app",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Photo gallery",
    description:
      "Photo gallery website. You can select a photo and open it in a modal window in a larger size, also implemented searching and sorting by resort names. ",
    image: "/images/projects/galery.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/photo_gallery",
    previewUrl: "https://photo-gallery-saoa35.vercel.app/",
  },
  {
    id: 7,
    title: "FastyFood",
    description:
      "Food ordering mobile app. This is a React Native project, bootstrapped using @react-native-community/cli.",
    image: "/images/projects/fastyfood.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Saoa35/FastyFood-mobile-app",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Food Restaurants",
    description:
      "This project implements the ability to select a product, add it to the cart, increasing or decreasing the quantity of goods, visualization of the total price and search for goods.",
    image: "/images/projects/food-restaurantes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/Food-Restaurants",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Food Restaurants",
    description: "Online website for selling flying models",
    image: "/images/projects/model-shop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saoa35/model_shop",
    previewUrl: "/",
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};
