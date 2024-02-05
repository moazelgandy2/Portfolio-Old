import classNames from "classnames";
import { inView, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useProjectsStore } from "../Store";

function ProjectTitle({ children, id }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setInViewProject = useProjectsStore((state) => state.setInViewProject);

  const inViewProject = useProjectsStore((state) => state.inViewProject);

  useEffect(() => {
    if (isInView) setInViewProject(id);
    if (!isInView && inViewProject === id) setInViewProject(null);
  }, [isInView, id, setInViewProject, inViewProject]);

  return (
    <p
      ref={ref}
      className={classNames("text-2xl py-32 font-bold", isInView ? "text-black" : "text-gray-300")}
    >
      {children}
    </p>
  );
}
export default ProjectTitle;
