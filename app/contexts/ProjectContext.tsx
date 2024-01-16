import React, { ReactNode, useContext } from "react";
import { DatabaseContext } from "./DatabaseContext";
import {} from "./database.types";

interface IProjectContext {
  createProject(args: { name: string; password: string }): Promise<Project>;
}

export const ProjectContext = React.createContext({} as IProjectContext);

export const ProjectProvider: React.FC<{ children: ReactNode }> = (props) => {
  const { supabase } = useContext(DatabaseContext);

  const createProject = (args: { name: string; password: string }) => {};
  return (
    <ProjectContext.Provider value={createProject}>
      {props.children}
    </ProjectContext.Provider>
  );
};
