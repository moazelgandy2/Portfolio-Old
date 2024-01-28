import React from "react";
import { ToDo, Weatherize, BookMarks, Devfolio, Danlies, Gg, Quotes } from "./ProjectImg";

function ProjectsImgs({ projects }) {
  return (
    <div className="w-full h-screen sticky top-0 flex items-center">
      <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        {projects.map((project) => {
          const Component = {
            Gg,
            ToDo,
            Weatherize,
            BookMarks,
            Devfolio,
            Danlies,
            Quotes,
          }[project.card];

          return <Component id={project.id} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsImgs;
