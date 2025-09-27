"use client";

import { Pill, User, CalendarDays, FileText, CheckCircle2, XCircle } from "lucide-react";

const dummyPrescriptions = [
  {
    id: 1,
    patient: "John Doe",
    medicine: "Atorvastatin",
    dosage: "20mg",
    frequency: "1x/day",
    dateIssued: "2025-09-20",
    status: "active",
  },
  {
    id: 2,
    patient: "Alice Smith",
    medicine: "Metformin",
    dosage: "500mg",
    frequency: "2x/day",
    dateIssued: "2025-09-18",
    status: "active",
  },
  {
    id: 3,
    patient: "Michael Brown",
    medicine: "Lisinopril",
    dosage: "10mg",
    frequency: "1x/day",
    dateIssued: "2025-09-10",
    status: "expired",
  },
];

export default function DoctorPrescriptionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">
        Doctor’s Prescriptions
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Manage and track prescriptions you’ve issued to patients.
      </p>

      {/* Table/Grid */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100/60 dark:bg-gray-800/60">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Patient</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Medicine</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Dosage</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Frequency</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Issued</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {dummyPrescriptions.map((presc) => (
              <tr
                key={presc.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
              >
                {/* Patient */}
                <td className="px-4 py-3 text-sm font-medium flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <User className="h-4 w-4 text-indigo-400" />
                  {presc.patient}
                </td>

                {/* Medicine */}
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Pill className="h-4 w-4 text-teal-400" />
                  {presc.medicine}
                </td>

                {/* Dosage */}
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {presc.dosage}
                </td>

                {/* Frequency */}
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {presc.frequency}
                </td>

                {/* Issued */}
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-gray-400" />
                  {presc.dateIssued}
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide 
                      ${
                        presc.status === "active"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                      }`}
                  >
                    {presc.status.toUpperCase()}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-right space-x-2">
                  {presc.status === "active" ? (
                    <button className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/20 hover:bg-blue-500/30 text-blue-600 dark:text-blue-300 transition">
                      <CheckCircle2 className="h-4 w-4" /> Mark Complete
                    </button>
                  ) : (
                    <button className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-gray-400/20 hover:bg-gray-400/30 text-gray-600 dark:text-gray-400 transition">
                      <XCircle className="h-4 w-4" /> Archive
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
