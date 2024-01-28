import { React, useContext } from "react";
import ProjectTitle from "./ProjectTitle";

function ProjectsTitels({ projects }) {
  return (
    <div className="w-full py-[22vh]">
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
