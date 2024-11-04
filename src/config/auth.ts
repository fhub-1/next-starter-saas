import db from "@/db";
import { env } from "@/env/server";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options: NextAuthOptions = {
   pages: {
    signIn: "/auth/Login",
    signOut: "/"
   },
   adapter: DrizzleAdapter(db),

    providers: [
        GoogleProvider({
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET
        })
      ]
    };

    export default options;