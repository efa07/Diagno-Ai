import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAIInteractions = query({
  args: { patientId: v.id("patients") },
  handler: async (ctx, { patientId }) => {
    return await ctx.db
      .query("aiInteractions")
      .filter((ai) => ai.patientId.eq(patientId))
      .collect();
  },
});
