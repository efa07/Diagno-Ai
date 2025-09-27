import { query } from "./_generated/server";
import { v } from "convex/values";

export const getPatient = query({
  args: { patientId: v.id("patients") },
  handler: async (ctx, { patientId }) => {
    return await ctx.db.get(patientId);
  },
});
