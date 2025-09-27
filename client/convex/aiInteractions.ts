import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const aiInteractions = defineTable({
  patientId: v.string(),
  doctorId: v.optional(v.string()),
  question: v.string(),
  response: v.string(),
  timestamp: v.number(),
  context: v.optional(v.string()),
});
