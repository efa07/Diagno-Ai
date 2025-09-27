import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createOrUpdatePatient = mutation({
  args: {
    authId: v.string(), // Better Auth user ID
    name: v.string(),
    gender: v.string(),
    phone: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if patient already exists
    const existing = await ctx.db
      .query("patients")
      .withIndex("by_authId", (q) => q.eq("authId", args.authId))
      .unique();

    if (existing) {
      // Update existing patient
      await ctx.db.patch(existing._id, {
        name: args.name,
        gender: args.gender,
        phone: args.phone,
      });
      return existing._id;
    } else {
      // Create new patient
      return await ctx.db.insert("patients", {
        authId: args.authId,
        name: args.name,
        gender: args.gender,
        phone: args.phone,
      });
    }
  },
});
