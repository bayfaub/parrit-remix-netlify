import React, { ReactNode } from "react";

export interface IDatabaseContext {
  database: null;
}

export const DatabaseContext = React.createContext({} as IDatabaseContext);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <DatabaseContext.Provider value={{ database: null }}>
      {props.children}
    </DatabaseContext.Provider>
  );
};
