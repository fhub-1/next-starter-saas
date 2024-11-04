import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";

import options from "@/config/auth";

export default async function requireAuth() {
  const session = await getServerSession(options);
  if (!session?.user) {
    redirect("/");
  }
}

// we are using the above function to check if users are not loged in 
//  with our middleware we casn strill proct some page but the users cant bes tored on our db