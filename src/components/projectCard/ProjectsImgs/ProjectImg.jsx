import classNames from "classnames";
import { useProjectsStore } from "../Store";
import GX1 from "../../../assets/projects/GamingX/GX1.png";
import GX2 from "../../../assets/projects/GamingX/GX2.png";
import GX3 from "../../../assets/projects/GamingX/GX3.png";
import GX4 from "../../../assets/projects/GamingX/GX4.png";
// console.log(ToDoXImg);
const ProjectImg = ({ gradient, children, id }) => {
  const inViewProject = useProjectsStore((state) => state.inViewProject);

  return (
    <div
      className={classNames(
        "inset-0 absolute project-img text-center flex items-center justify-center bg-red-300 h-full w-full rounded-2xl bg-gradient-to-br opacity-0",
        gradient,
        inViewProject === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Gg = ({ id }) => {
  return (
    <ProjectImg id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <img src={GX1} alt="" className="w-[20%] rounded-lg absolute top-6 end-8 " />
      <img src={GX2} alt="" className="w-[20%] rounded-lg absolute start-24" />
      <img src={GX3} alt="" className="w-[20%] rounded-lg absolute bottom-14 end-24" />
      <img src={GX4} alt="" className="w-[15%] rounded-3xl absolute bottom-0 -top-1 start-[-1%]" />
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

export const Quotes = ({ id }) => {
  return (
    <ProjectImg id={id} gradient="from-[#f5fbff] to-[#addeff]">
      Quotes-Generator
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
