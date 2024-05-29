import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/card.png"
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          demoLink="https://demo-link-3.com"
          sourceLink="https://source-link-3.com"
        />
        <ProjectCard
          src="/projects/carshop.png"
          title="Vehicle Accessories Inventory Shop"
          description="The project is built using the Laravel framework and is designed to cater to both users and administrators."
          demoLink="https://demo1.fusan.live/"
          sourceLink="https://github.com/AshFahim/Vehicle-Accessories-Inventory-Shop"
        />
        <ProjectCard
          src="/card.png"
          title="Project 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          demoLink="https://demo-link-3.com"
          sourceLink="https://source-link-3.com"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/card.png"
          title="Project 4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          demoLink="https://demo-link-3.com"
          sourceLink="https://source-link-3.com"
        />
        <ProjectCard
          src="/card.png"
          title="Project 5"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          demoLink="https://demo-link-3.com"
          sourceLink="https://source-link-3.com"
        />
        <ProjectCard
          src="/projects/furni.png"
          title="Furnicraft"
          description="A responsive furniture e-commerce portfolio website built with HTML, CSS, JavaScript, and Bootstrap."
          demoLink="https://www.furnicraftbd.com/"
          sourceLink="https://github.com/AshFahim/furnicraft_web"
        />
      </div>
    </div>
  );
};

export default Projects;
