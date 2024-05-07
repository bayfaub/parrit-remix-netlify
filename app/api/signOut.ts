import { SupabaseClient } from "@supabase/supabase-js";

export async function signOut(supabaseClient: SupabaseClient) {
  console.log("Signing out...");
  let { error } = await supabaseClient.auth.signOut({ scope: "local" });

  if (error) {
    console.log(error);
    return { error: error };
  }
  return;
}
