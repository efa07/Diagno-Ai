"use client";

import { Pill, Activity, CheckCircle2, XCircle } from "lucide-react";

const dummyPrescriptions = [
  { id: 1, medicine: "Amoxicillin", dosage: "500mg", frequency: "3x/day", prescribedBy: "Dr. Emily Carter", dateIssued: "2025-09-20", status: "active" },
  { id: 2, medicine: "Ibuprofen", dosage: "200mg", frequency: "2x/day", prescribedBy: "Dr. James Wong", dateIssued: "2025-09-15", status: "expired" },
  { id: 3, medicine: "Vitamin D", dosage: "1000 IU", frequency: "1x/day", prescribedBy: "Dr. Lisa Kim", dateIssued: "2025-09-22", status: "active" },
];

export default function Prescriptions() {
  return (
    <div className="w-full bg-card-light dark:bg-card-dark rounded-2xl p-8 shadow-lg space-y-6">
      <h2 className="text-2xl font-extrabold text-center text-foreground-light dark:text-foreground-dark">
        🧾 Your Prescriptions
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {dummyPrescriptions.map((presc) => (
          <div
            key={presc.id}
            className={`relative flex flex-col gap-3 p-6 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md
              ${
                presc.status === "active"
                  ? "bg-white dark:bg-gray-900 border-blue-400/50"
                  : "bg-white dark:bg-gray-900 border-red-400/50"
              }`}
          >
            {/* Status badge */}
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide 
                ${
                  presc.status === "active"
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                }`}
            >
              {presc.status.toUpperCase()}
            </span>

            {/* Medicine header */}
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-xl ${
                  presc.status === "active"
                    ? "bg-blue-100 dark:bg-blue-900"
                    : "bg-red-100 dark:bg-red-900"
                }`}
              >
                <Pill
                  className={`h-6 w-6 ${
                    presc.status === "active"
                      ? "text-blue-600 dark:text-blue-300"
                      : "text-red-600 dark:text-red-300"
                  }`}
                />
              </div>
              <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">
                {presc.medicine}{" "}
                <span className="text-sm text-muted-light dark:text-muted-dark">
                  ({presc.dosage})
                </span>
              </h3>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1 text-sm text-muted-light dark:text-muted-dark">
              <p className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-teal-500 dark:text-teal-300" />{" "}
                {presc.frequency}
              </p>
              <p>
                Prescribed by{" "}
                <span className="font-semibold text-foreground-light dark:text-foreground-dark">
                  {presc.prescribedBy}
                </span>
              </p>
              <p className="text-xs text-muted-light dark:text-muted-dark">
                Issued: {presc.dateIssued}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-3">
              {presc.status === "active" ? (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 transition-colors">
                  <CheckCircle2 className="h-4 w-4" /> Refill
                </button>
              ) : (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-700 dark:text-red-300 transition-colors">
                  <XCircle className="h-4 w-4" /> Expired
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
