import { createContext, useReducer } from "react";
export const ProjectContext = createContext();

export function ProjectReducer(state, action) {
  switch (action.type) {
    case "CHANGE_PROJECT":
      return {
        ...state,
        currentProject: state.projects[action.payload],
      };
    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "CURRENT_PROJECT":
      return {
        ...state,
        currentProject: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(ProjectReducer, {
    currentProject: {},
    projects: [],
  });

  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}
