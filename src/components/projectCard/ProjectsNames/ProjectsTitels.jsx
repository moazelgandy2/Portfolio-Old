import { React, useContext } from "react";
import ProjectTitle from "./ProjectTitle";

function ProjectsTitels({ projects }) {
  return (
    <div className="w-1/4 lg:w-full md:w-full sm:w-full py-[35vh]">
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <ProjectTitle id={project.id}>{project.title}</ProjectTitle>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectsTitels;
