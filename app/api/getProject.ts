import { SupabaseClient } from "@supabase/supabase-js";

import { getUser } from "./getUser";
import { createSupabaseServerClient } from "~/util/supabase/supabase.server";

export async function getProject(request: Request) {
  console.log("Get the session jwt: ", request.headers.get("Cookie"));
  let supabaseClient: SupabaseClient = createSupabaseServerClient(request);

  let user = await getUser(supabaseClient);
  let project = await supabaseClient.from("project").select("*").eq("id", user.user?.id);

  console.log("Get the project: ", project);

  return {};
}
