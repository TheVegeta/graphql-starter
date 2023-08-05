import "dotenv/config";
import { parseEnv } from "znv";
import { z } from "zod";

export const { PORT } = parseEnv(process.env, {
  PORT: z.string().min(1),
});
