import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./generated/prisma";
import { nextCookies } from "better-auth/next-js";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "patient", // default for new users
      },
    },
  },

  session: {
    additionalFields: {
      role: {
        type: "string",
        resolve: async (session, { db }) => {
          const user = await db.user.findUnique({
            where: { id: session.userId },
            select: { role: true },
          });
          return user?.role ?? "patient";
        },
      },
    },
  },

  plugins: [nextCookies()],
});
