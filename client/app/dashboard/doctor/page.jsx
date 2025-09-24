import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() })
  const role = (session?.user?.role as "doctor" | "patient") || "patient"

  return (
    <SidebarProvider>
      <AppSidebar role={role} />

      {/* Whole main + right sidebar container */}
      <div className="flex flex-1">
        {/* Main inset content */}
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Welcome to your dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
  <div className="flex flex-1 flex-row">
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-red-400" />
              <div className="aspect-video rounded-xl bg-amber-300" />
              <div className="aspect-video rounded-xl bg-blue-500" />
            </div>
            <div className="bg-green-400 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>

        <div className="hidden md:block w-64 bg-gray-900/80 text-white p-4 min-h-screen">
          <h2 className="text-lg font-semibold mb-4">Right Panel</h2>
        </div>
  </div>
        </SidebarInset>

      </div>
    </SidebarProvider>
  )
}
