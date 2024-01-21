import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Database } from "database.types";
import { type Result } from "netlify/functions/fetch-database-env";
import React, { ReactNode, useEffect, useState } from "react";

export interface IDatabaseContext {
  supabase: SupabaseClient<Database>;
}

export const DatabaseContext = React.createContext({} as IDatabaseContext);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [supabase, setSupabase] = useState<SupabaseClient>();

  useEffect(() => {
    fetch("/.netlify/functions/fetch-database-env").then((val) => {
      val.json().then((json: Result) => {
        if (!json.databaseUrl || !json.databaseKey) {
          throw new Error(
            "database response did not contain necessary information"
          );
        }
        setSupabase(createClient<Database>(json.databaseUrl, json.databaseKey));
      });
    });
  }, []);

  if (!supabase) {
    return "Loading database";
  }

  return (
    <DatabaseContext.Provider value={{ supabase }}>
      {props.children}
    </DatabaseContext.Provider>
  );
};
