import React from "react";
import { projects } from "../projectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex  justify-center py-10 items-center  gap-10">
      

      <div className="flex flex-col justify-center gap-[100px] items-center">
        {projects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
