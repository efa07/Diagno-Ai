import { betterAuth } from "better-auth";
import { convexAdapter } from "convex-better-auth";
import { google } from "better-auth/providers/google";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/server/convex/_generated/api"; 

// convex client instance
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseUrl: process.env.NEXT_PUBLIC_APP_URL, 
  database: convexAdapter(),

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});

//  Sync users to Convex 
auth.events.on("user.created", async (user) => {
  try {
    await convex.mutation(api.users.saveUser, {
      email: user.email,
      name: user.name || "",
      image: user.image || "",
      role: "patient", // default role 
    });
  } catch (err) {
    console.error("Error syncing user to Convex:", err);
  }
});
