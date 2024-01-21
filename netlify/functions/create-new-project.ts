import { Context } from "@netlify/functions";
import crypto from "crypto";

export default async (req: Request, context: Context) => {
  const databaseUrl = Netlify.env.get("SUPABASE_URL");
  const databaseKey = Netlify.env.get("SUPABASE_KEY");
};

const hashPassword = (password: string) => {
  const salt = crypto.randomBytes(128).toString("base64");
  const iterations = 10000;
  let hash = "0000";
  crypto.pbkdf2(password, salt, iterations, 64, "sha512", (err, derivedKey) => {
    hash = derivedKey.toString("hex");
  });

  return {
    salt: salt,
    hash: hash,
    iterations: iterations,
  };
};
