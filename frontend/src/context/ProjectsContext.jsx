import { createContext, useReducer } from "react";
import { images as projects } from "../assets/images/images";

export const ProjectContext = createContext();

export function ProjectReducer(state, action) {
  switch (action.type) {
    case "CHANGE_PROJECT":
      return {
        ...state,
        currentProject: projects[action.payload],
      };
  }
}

export default function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(ProjectReducer, {
    currentProject: projects[0],
    projects,
  });
  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}
