"use client";

import { CalendarDays, CheckCircle2, Clock, XCircle } from "lucide-react";

const dummyAppointments = [
  { id: 1, doctor: "Dr. Emily Carter", specialty: "General Practitioner", date: "2025-09-28", time: "2:00 PM", status: "upcoming" },
  { id: 2, doctor: "Dr. James Wong", specialty: "Cardiologist", date: "2025-09-30", time: "11:00 AM", status: "upcoming" },
  { id: 3, doctor: "Dr. Lisa Kim", specialty: "Dermatologist", date: "2025-09-22", time: "4:30 PM", status: "completed" },
];

export default function Appointments() {
  return (
    <div className="w-full rounded-2xl p-8 shadow-xl border border-white/10 space-y-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <h2 className="text-2xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
        📅 Upcoming & Past Appointments
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {dummyAppointments.map((appt) => (
          <div
            key={appt.id}
            className={`relative flex flex-col gap-3 p-6 rounded-2xl border shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
              ${
                appt.status === "upcoming"
                  ? "bg-indigo-50 dark:bg-indigo-950 border-indigo-300/50"
                  : appt.status === "completed"
                  ? "bg-green-50 dark:bg-green-950 border-green-300/50"
                  : "bg-red-50 dark:bg-red-950 border-red-300/50"
              }`}
          >
            {/* Status badge */}
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide
                ${
                  appt.status === "upcoming"
                    ? "bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200"
                    : appt.status === "completed"
                    ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200"
                }`}
            >
              {appt.status.toUpperCase()}
            </span>

            {/* Doctor & specialty */}
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl
                  ${
                    appt.status === "upcoming"
                      ? "bg-indigo-100 dark:bg-indigo-800"
                      : appt.status === "completed"
                      ? "bg-green-100 dark:bg-green-800"
                      : "bg-red-100 dark:bg-red-800"
                  }`}
              >
                <CalendarDays className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {appt.doctor}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {appt.specialty}
                </p>
              </div>
            </div>

            {/* Date & time */}
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
              <Clock className="h-4 w-4 text-indigo-500 dark:text-indigo-300" />
              <span>
                {appt.date} • {appt.time}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-3">
              {appt.status === "upcoming" && (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                  <CheckCircle2 className="h-4 w-4" /> Confirm
                </button>
              )}
              {appt.status === "completed" && (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-green-600 hover:bg-green-700 text-white transition-colors">
                  <CheckCircle2 className="h-4 w-4" /> View Report
                </button>
              )}
              {appt.status !== "completed" && (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition-colors">
                  <XCircle className="h-4 w-4" /> Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
