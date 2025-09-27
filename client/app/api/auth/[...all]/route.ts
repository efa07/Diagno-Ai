import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { headers } from "next/headers";
import { api } from "@/convex/_generated/api";
import { fetchMutation } from "convex/nextjs";

export const { POST } = toNextJsHandler(auth);

// Custom GET handler to sync user into Convex after Better Auth session check
export async function GET(req: Request) {
  // Get current session
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return new Response("Not authenticated", { status: 401 });
  }

  const user = session.user;

  // Sync to Convex patients table
  await fetchMutation(api.patients.createOrUpdatePatient, {
    authId: user.id,
    name: user.name ?? "",
    gender: user.gender ?? "unknown",
    phone: user.phoneNumber ?? "",
  });

  return new Response(JSON.stringify({ message: "Patient synced", user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
