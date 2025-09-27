"use client";

import { User, CalendarDays, ClipboardList, BarChart3, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// Dummy analytics data
const patientActivity = [
  { day: "Mon", visits: 5 },
  { day: "Tue", visits: 8 },
  { day: "Wed", visits: 3 },
  { day: "Thu", visits: 6 },
  { day: "Fri", visits: 9 },
  { day: "Sat", visits: 2 },
  { day: "Sun", visits: 4 },
];

export default function DoctorDashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top: Doctor profile quick card */}
      <Card className="bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 text-white rounded-2xl shadow-lg p-6">
        <CardContent className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Dr. Sarah Johnson</h1>
            <p className="text-sm opacity-90">Cardiologist • Addis Ababa General Hospital</p>
          </div>
          <User className="h-12 w-12 opacity-80" />
        </CardContent>
      </Card>

      {/* Middle: Key sections in a grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
   
        <Card className="rounded-2xl shadow-md col-span-1 lg:col-span-1">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-5 w-5 text-purple-500" />
              <h2 className="font-bold text-lg">Patient Activity</h2>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={patientActivity}>
                <XAxis dataKey="day" stroke="#888" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom: AI Assistant Quick Actions */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
          <Brain className="h-12 w-12 text-pink-500" />
          <h2 className="text-xl font-bold">DiagnoAI Assistant</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Use AI to summarize patient history, suggest treatment plans, or draft medical notes.
          </p>
          <div className="flex gap-4 mt-2">
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
              Summarize History
            </button>
            <button className="px-4 py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition">
              Suggest Treatment
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition">
              Draft Notes
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
