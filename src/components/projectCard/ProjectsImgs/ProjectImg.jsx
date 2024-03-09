import classNames from "classnames";
import { useProjectsStore } from "../Store";

const ProjectImg = ({ children, id, bgImg }) => {
  const inViewProject = useProjectsStore((state) => state.inViewProject);

  return (
    <div
      className={classNames(
        "inset-0 absolute project-img text-center flex items-center justify-center bg-red-300 h-full w-full rounded-2xl opacity-0 bg-cover",
        bgImg,
        inViewProject === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Gg = ({ id }) => {
  return (
    <ProjectImg id={id} bgImg="bg-GG">
      <button className=" absolute z-30 bottom-3 end-2 p-2 transition-all ease-linear bg-gradient-to-tl from-[#27273F] cursor-pointer hover:-translate-x-2 hover:-translate-y-1 to-[#38386d] rounded-lg text-white">
        Show more
      </button>
    </ProjectImg>
  );
};

export const ToDo = ({ id }) => {
  return (
    <ProjectImg id={id} gradient="from-[#f5fbff] to-[#addeff]">
      ToDo
    </ProjectImg>
  );
};

export const BookMarks = ({ id }) => {
  return (
    <ProjectImg id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      BookMarks
    </ProjectImg>
  );
};

export const Weatherize = ({ id }) => {
  return (
    <ProjectImg id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      Weatherize
    </ProjectImg>
  );
};

export const Devfolio = ({ id }) => {
  return (
    <ProjectImg id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      Devfolio
    </ProjectImg>
  );
};

export const Exclusive = ({ id }) => {
  return (
    <ProjectImg id={id} gradient="from-[#f5fbff] to-[#addeff]">
      Exclusive
    </ProjectImg>
  );
};

export const Danlies = ({ id }) => {
  return (
    <ProjectImg id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      Danlies
    </ProjectImg>
  );
};
