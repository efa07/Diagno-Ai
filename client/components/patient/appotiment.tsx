"use client";

import Calendar06  from "@/components/calendar-06";

interface Appointment {
  id: number;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
}

const dummyAppointments: Appointment[] = [
  { id: 1, doctor: "Dr. Emily Carter", specialty: "General Practitioner", date: "2025-09-28", time: "2:00 PM", status: "upcoming" },
  { id: 2, doctor: "Dr. James Wong", specialty: "Cardiologist", date: "2025-09-30", time: "11:00 AM", status: "upcoming" },
  { id: 3, doctor: "Dr. Lisa Kim", specialty: "Dermatologist", date: "2025-09-22", time: "4:30 PM", status: "completed" },
];

export default function Appointments() {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
        Appointments
      </h2>
      {dummyAppointments.map((appt) => (
        <div
          key={appt.id}
          className={`flex items-center justify-between p-4 rounded-xl border ${
            appt.status === "upcoming"
              ? "border-primary/50"
              : appt.status === "completed"
              ? "border-green-400/50"
              : "border-red-400/50"
          } bg-gradient-to-br from-card-light to-card-light/80 dark:from-card-dark dark:to-card-dark/80 shadow-sm hover:shadow-md transition-shadow duration-300`}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
              <Calendar06 />
            </div>
            <div>
              <h3 className="font-bold text-foreground-light dark:text-foreground-dark">
                {appt.doctor}
              </h3>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                {appt.specialty}
              </p>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                {appt.date} • {appt.time}
              </p>
            </div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              appt.status === "upcoming"
                ? "bg-primary/20 text-foreground-light dark:text-foreground-dark"
                : appt.status === "completed"
                ? "bg-green-400/30 text-green-800 dark:text-green-300"
                : "bg-red-400/30 text-red-800 dark:text-red-300"
            }`}
          >
            {appt.status.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}
