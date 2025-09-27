import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAppointments = query({
  args: {
    patientId: v.optional(v.id("patients")),
    doctorId: v.optional(v.id("doctors")),
  },
  handler: async (ctx, { patientId, doctorId }) => {
    let q = ctx.db.query("appointments");
    if (patientId) q = q.filter((a) => a.patientId.eq(patientId));
    if (doctorId) q = q.filter((a) => a.doctorId.eq(doctorId));
    return await q.collect();
  },
});
