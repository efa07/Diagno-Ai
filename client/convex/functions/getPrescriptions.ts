import { query } from "./_generated/server";
import { v } from "convex/values";

export const getPrescriptions = query({
  args: {
    patientId: v.optional(v.id("patients")),
    doctorId: v.optional(v.id("doctors")),
  },
  handler: async (ctx, { patientId, doctorId }) => {
    let q = ctx.db.query("prescriptions");
    if (patientId) q = q.filter((p) => p.patientId.eq(patientId));
    if (doctorId) q = q.filter((p) => p.doctorId.eq(doctorId));
    return await q.collect();
  },
});
