import { query, mutation } from "./_generated/server";

export const getByGoogleId = query(async ({ db }, { googleId }) => {
  return await db
    .query("users")
    .filter((q) => q.eq(q.field("googleId"), googleId))
    .first();
});

export const saveUser = mutation(async ({ db }, user) => {
  const existing = await db.query("users").withIndex("byEmail", (q) =>
    q.eq("email", user.email)
  ).unique();

  if (!existing) {
    await db.insert("users", {
      email: user.email,
      name: user.name,
      picture: user.picture,
      role: "patient", // default role
    });
  }
});

