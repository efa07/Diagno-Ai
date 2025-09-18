import { defineSchema, defineTable } from "convex/schema";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    googleId: v.string(),
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    role: v.optional(v.string()), // optional but default to patient in code
    createdAt: v.number(),
  }),
});
