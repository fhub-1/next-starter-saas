import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodError } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    // DATABASE_URL: z.string().url(),
    GOOGLE_CLIENT_ID:z.string(),
    GOOGLE_CLIENT_SECRET:z.string()
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },

  // // Called when server variables are accessed on the client.
  // onInvalidAccess: (variable: string) => {
  //   throw new Error(
  //     "❌ Attempted to access a server-side environment variable on the client"
  //   );
  // },
  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});

// console.log(env)