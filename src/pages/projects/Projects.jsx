import React from "react";

import { FooterCard, ProjectsImgs, ProjectsTitels } from "../../components/index";

import { FaRegFileCode } from "../../components/icon/Icons";

const projects = [
  {
    id: "Gg",
    title: "GamingX",
    card: "Gg",
  },
  {
    id: "Danlies",
    title: "Danlies",
    card: "Danlies",
  },
  {
    id: "ToDo",
    title: "ToDoX",
    card: "ToDo",
  },
  {
    id: "Weatherize",
    title: "Weatherize",
    card: "Weatherize",
  },
  {
    id: "BookMarks",
    title: "BookMarks-Hub",
    card: "BookMarks",
  },
  {
    id: "Devfolio",
    title: "Devfolio",
    card: "Devfolio",
  },
  {
    id: "Exclusive",
    title: "Exclusive",
    card: "Exclusive",
  },
];
function Projects() {
  return (
    <div className="container mx-auto px-4 max-w-6xl xs:min-w-[95%] relative">
      <div className="content my-3 py-3 px-3 bg-white rounded-2xl relative">
        <div className="projects w-full flex items-start gap-20 px-3">
          <ProjectsTitels projects={projects} />
          <ProjectsImgs projects={projects} />
        </div>
      </div>
      <FooterCard icon={FaRegFileCode} text="Projects" />
    </div>
  );
}
export default Projects;
