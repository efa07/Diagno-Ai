import { defineTable } from "convex/server";
import { v } from "convex/values";

export const patients = defineTable({
  name: v.string(),
  age: v.number(),
  gender: v.string(),
  phone: v.string(),
  medicalHistory: v.string(),
  allergies: v.array(v.string()),
  medications: v.array(v.string()),
  lastVisit: v.string(),
});
