import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Calendar06 from "@/components/calendar-06";
import WeeklyActivityChart from "@/components/patientChart"

// Dummy data
const consultations = [
  {
    title: "Mild Cold Symptoms",
    summary: "Monitor your temperature and rest well.",
    date: "Sep 25, 2025",
  },
  {
    title: "Follow-up Checkup",
    summary: "Blood pressure within normal range.",
    date: "Sep 20, 2025",
  },
];

const appointments = [
  {
    doctor: "Dr. Emily Carter",
    specialty: "General Practitioner",
    date: "Sep 30, 2025",
    time: "2:00 PM",
  },
  {
    doctor: "Dr. Alan Smith",
    specialty: "Dermatologist",
    date: "Oct 3, 2025",
    time: "11:00 AM",
  },
];

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const role = (session?.user?.role as "doctor" | "patient") || "patient";

  return (
    <SidebarProvider>
      <AppSidebar role={role} />

      {/* Main Content */}
      <div className="flex flex-1 min-h-screen bg-gray-50 dark:bg-background-dark transition-colors duration-500">
        <SidebarInset className="flex-1 flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 dark:border-gray-700 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Welcome, Sarah</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <div className="flex flex-1 flex-row p-4 gap-4">
            {/* Left main grid */}
            <div className="flex flex-1 flex-col gap-6">
              {/* Summary Cards */}
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 p-4 text-white flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300">
                  <p className="text-sm opacity-80">AI Consultation</p>
                  <h3 className="text-lg font-bold">Mild Cold Symptoms</h3>
                  <p className="text-xs opacity-70">Monitor your temperature and rest well.</p>
                  <span className="text-xs mt-2 opacity-60">Sep 25, 2025</span>
                </div>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-green-400 to-teal-500 p-4 text-white flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300">
                  <p className="text-sm opacity-80">Upcoming Appointment</p>
                  <h3 className="text-lg font-bold">Dr. Emily Carter</h3>
                  <p className="text-xs opacity-70">General Practitioner | Sep 30, 2:00 PM</p>
                </div>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-pink-400 to-red-400 p-4 text-white flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300">
                  <p className="text-sm opacity-80">Health Records</p>
                  <h3 className="text-lg font-bold">Latest Lab Results</h3>
                  <p className="text-xs opacity-70">All tests are within normal range.</p>
                </div>
              </div>

              {/* Full height chart / summary section */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-card-dark dark:to-background-dark min-h-[300px] rounded-xl shadow-inner p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-4 text-foreground-light dark:text-foreground-dark">
                  Weekly Activity
                </h3>
                <div className="flex-1">
                  <WeeklyActivityChart />
                </div>
              </div>
            </div>
            {/* Right sidebar / widgets */}
            <div
              className="w-96 bg-gray-100 dark:bg-card-dark rounded-xl p-4 flex flex-col justify-around gap-4 shadow-lg transition-colors duration-500"
              style={{
                backgroundImage: "radial-gradient(black 1px, transparent 1px)",
                backgroundSize: "25px 25px",
              }}
            >
              <div className="rounded-xl overflow-hidden">
                <Calendar06 />
              </div>
              <div className="w-full rounded-xl bg-gradient-to-br from-blue-300 to-blue-400 h-48 flex items-center justify-center text-white font-bold shadow-inner">
                Upcoming Appointment
              </div>
              <div className="w-full rounded-xl bg-gradient-to-br from-purple-300 to-purple-400 h-32 flex items-center justify-center text-white font-bold shadow-inner">
                AI Suggestions
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
