import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const patients = defineTable({
  authId: v.string(),
  name: v.string(),
  age: v.number(),
  gender: v.string(),
  phone: v.string(),
  medicalHistory: v.string(),
  allergies: v.array(v.string()),
  medications: v.array(v.string()),
  lastVisit: v.string(),
});

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

export const aiInteractions = defineTable({
  patientId: v.string(),
  doctorId: v.optional(v.string()),
  question: v.string(),
  response: v.string(),
  timestamp: v.number(),
  context: v.optional(v.string()),
});

export const appointments = defineTable({
  patientId: v.string(),
  doctorId: v.string(),
  specialty: v.string(),
  date: v.string(), // YYYY-MM-DD
  time: v.string(), // HH:MM AM/PM
  status: v.union(
    v.literal("upcoming"),
    v.literal("completed"),
    v.literal("canceled")
  ),
  notes: v.optional(v.string()),
});

export default defineSchema({
  patients,
  labResults,
  aiInteractions,
  appointments,
});
