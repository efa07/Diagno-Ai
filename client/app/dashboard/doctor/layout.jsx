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

export default async function DoctorDashboardLayout({ children }) {
  const session = await auth.api.getSession({ headers: await headers() });
  const role = session?.user?.role || "doctor"; // default to doctor
  const doctorName = session?.user?.name || "Dr. Smith"; // fallback

  return (
    <SidebarProvider>
      <AppSidebar role={role} />

      {/* Main Content */}
      <div className="flex flex-1 min-h-screen bg-gray-50 dark:bg-background-dark transition-colors duration-500">
        <SidebarInset className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 dark:border-gray-700 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Welcome, {doctorName}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Doctor Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          {/* Dynamic dashboard content */}
          <main className="flex flex-1 flex-row p-4 gap-4">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
