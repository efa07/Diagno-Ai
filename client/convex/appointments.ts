import { defineTable } from "convex/server";
import { v } from "convex/values";

export const appointments = defineTable({
  patientId: v.string(),
  doctorId: v.string(),
  specialty: v.string(),
  date: v.string(), // YYYY-MM-DD
  time: v.string(), // HH:MM AM/PM
  status: v.union("upcoming", "completed", "canceled"),
  notes: v.optional(v.string()),
});
