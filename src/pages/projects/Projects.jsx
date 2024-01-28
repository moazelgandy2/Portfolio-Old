import { React, createContext } from "react";

import { ProjectsImgs, ProjectsTitels } from "../../components/index";

import transition from "../../transition";

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
    id: "Quotes",
    title: "Quotes-Generator",
    card: "Quotes",
  },
];
function Projects() {
  return (
    <div className="container mx-auto px-4 max-w-6xl xs:min-w-[95%]">
      <div className="content my-3 py-3 px-3 bg-white rounded-2xl">
        <h2 className="text-black font-bold text-[50px] text-center mb-16">Projects</h2>
        <div className="projects w-full flex items-start gap-20 px-3">
          <ProjectsTitels projects={projects} />
          <ProjectsImgs projects={projects} />
        </div>
      </div>
    </div>
  );
}
export default transition(Projects);
