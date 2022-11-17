import { useState } from "react";
export function useProjectPicker(value) {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});

  if (value) {
    setLoading(true);
    setProject(value);
  } else {
    setLoading(false);
    setProject({});
  }

  return {
    loading,
    project,
  };
}
