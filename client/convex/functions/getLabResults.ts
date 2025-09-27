import { query } from "./_generated/server";
import { v } from "convex/values";

export const getLabResults = query({
  args: { patientId: v.id("patients") },
  handler: async (ctx, { patientId }) => {
    return await ctx.db
      .query("labResults")
      .filter((lr) => lr.patientId.eq(patientId))
      .collect();
  },
});
