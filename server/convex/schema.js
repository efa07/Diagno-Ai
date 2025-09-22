import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable(
    v.object({
      email: v.string(),
      name: v.optional(v.string()),
      image: v.optional(v.string()), 
      createdAt: v.number(), 
    })
  ),

  sessions: defineTable(
    v.object({
      userId: v.id("users"),
      expiresAt: v.number(), 
      createdAt: v.number(),
    })
  ),
});
