import React from "react";
import { ProjectCard } from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Travel-Blog",
    description:
      "The fullstack project implements registration, authorization, writing an article, adding photos to it, with the ability to edit the article, also you can add likes and comments. It was created by using technologies such as HTML, CSS, Tailwind, JS, React, ReactHooks, ReactRouterDom, ReduxToolkit, NodeJS, MongoDB.",
    image: "/images/projects/travel-blog.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Burger Lord",
    description:
      "This is Burger restaurant website. Implemented the ability to select a burger, plus an addition to it, also implemented a basket, where the number of selected burgers and the total amount of the selected product are counted, sorting and search are also implemented.",
    image: "/images/projects/burger-lord.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Model Shop",
    description: "Online shop for selling flying models.",
    image: "/images/projects/model-shop.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Simple Chat",
    description: "Online shop for selling flying models.",
    image: "/images/projects/chat1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Food Restaurants",
    description:
      "This project implements the ability to select a product, add it to the cart, increasing or decreasing the quantity of goods, visualization of the total price and search for goods.",
    image: "/images/projects/food-restaurantes.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Photo gallery",
    description:
      "Photo gallery website. You can select a photo and open it in a modal window in a larger size, also implemented searching and sorting by resort names. ",
    image: "/images/projects/galery.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export const ProjectsSection = () => {
  return (
    <>
      <h2>My projects</h2>
      <div>
        {projectsData.map((project) => (
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
