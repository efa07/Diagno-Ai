import { defineTable } from "convex/server";
import { v } from "convex/values";

export const labResults = defineTable({
  patientId: v.string(),
  doctorId: v.string(),
  testName: v.string(),
  result: v.string(),
  unit: v.optional(v.string()),
  referenceRange: v.optional(v.string()),
  date: v.string(),
  notes: v.optional(v.string()),
});
