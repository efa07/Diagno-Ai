"use client";
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export function LoginButton() {
  return (
    <button
    type="button"
      onClick={() =>oooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        authClient.signIn.social({
          provider: "google",
          callbackURL: "/dashboard",
          errorCallbackURL: "/login?error=true",
        })
      }
    >
      Sign in with Google
    </button>
  );
}
