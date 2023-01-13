import { useContext } from "react";
import { ProjectContext } from "../context/ProjectsContext";

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) {
    return <h1>Must be in context</h1>;
  }
  return context;
}
