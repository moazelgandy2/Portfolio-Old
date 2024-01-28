import { create } from "zustand";
export const useProjectsStore = create((set) => ({
  inViewProject: null,
  setInViewProject: (project) => set(() => ({ inViewProject: project })),
}));
