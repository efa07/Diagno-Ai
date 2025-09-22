import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next";

export const { GET, POST } = toNextJsHandler(auth);
