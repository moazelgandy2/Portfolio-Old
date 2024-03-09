import React from "react";
import { ToDo, Weatherize, BookMarks, Devfolio, Danlies, Gg, Exclusive } from "./ProjectImg";

function ProjectsImgs({ projects }) {
  return (
    <div className="w-full h-screen sticky top-0 flex items-center">
      <div className="relative w-[100%] sm:w-[100%] md:w-3/4 lg:w-3/4 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        {projects.map((project) => {
          const Component = {
            Gg,
            ToDo,
            Weatherize,
            BookMarks,
            Devfolio,
            Danlies,
            Exclusive,
          }[project.card];

          return <Component id={project.id} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsImgs;
