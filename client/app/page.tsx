import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Home() {
  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      redirect("/auth");
    }

    return (
      <h1>Welcome home, {session.user?.name || "user"}!</h1>
    );
  } catch (error) {
    console.error("Failed to retrieve session:", error);
    redirect("/auth"); 
  }
}