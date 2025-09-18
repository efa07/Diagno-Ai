import express from "express";
import { ConvexHttpClient } from "convex/browser";
import dotenv from "dotenv";
import { betterAuth } from "better-auth";


dotenv.config()
const app = express();
app.use(express.json());

// Convex client
const PORT = process.env.PORT || 4000;
const convex = new ConvexHttpClient(process.env.CONVEX_URL);

//better auth
const auth = betterAuth({
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
});


// Auth endpoint (frontend will hit this)
app.get("/auth/google", (req, res) => {
  const url = auth.providers.google.getAuthorizationUrl();
  res.redirect(url);
});

// Callback endpoint (Google redirects here after login)
app.get("/auth/google/callback", async (req, res) => {
  try {
    const tokens = await auth.providers.google.handleCallback(req);
    const profile = await auth.providers.google.getUser(tokens.access_token);

    // Check if user exists
    let user = await convex.query("users:getByGoogleId", { googleId: profile.sub });

    if (!user) {
      user = await convex.mutation("users:add", {
        googleId: profile.sub,
        name: profile.name,
        email: profile.email,
        picture: profile.picture,
        role: "patient", // default role
        createdAt: Date.now(),
      });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(PORT, () => console.log(`✅ Express running on http://localhost:${PORT}`));
