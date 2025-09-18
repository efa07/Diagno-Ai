import { query, mutation } from "./_generated/server";

export const getByGoogleId = query(async ({ db }, { googleId }) => {
  return await db
    .query("users")
    .filter((q) => q.eq(q.field("googleId"), googleId))
    .first();
});

export const add = mutation(async ({ db }, { googleId, name, email, picture }) => {
  return await db.insert("users", {
    googleId,
    name,
    email,
    picture,
    createdAt: Date.now(),
  });
});
